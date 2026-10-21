import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  LANDMARKS, LANDMARK_BY_ID, ROADS, WATER, BOUNDS, RAMPS, TRAFFIC_ROUTES,
  realDistance, haversineM,
} from './data.js';
import {
  GEO, plastic, buildMaterial, addBox, addCylinder, addStuds, InstanceBatch, PALETTE,
  makeLabelSprite, makeSign, makeTextTexture, makeFlagTexture, addFlag,
  createMinifig, createLamp, createBench, createBoat, canvasRoundRect,
} from './lego.js';
import { makeCoin } from './taxi.js';

const V2 = THREE.Vector2;
const V3 = THREE.Vector3;

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)];
const clamp = THREE.MathUtils.clamp;

function pointInPolygon(x, z, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], zi = poly[i][1];
    const xj = poly[j][0], zj = poly[j][1];
    if (((zi > z) !== (zj > z)) && (x < ((xj - xi) * (z - zi)) / (zj - zi) + xi)) inside = !inside;
  }
  return inside;
}

function distToSegment(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const len2 = dx * dx + dz * dz;
  let t = len2 ? ((px - ax) * dx + (pz - az) * dz) / len2 : 0;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (ax + t * dx), pz - (az + t * dz));
}

function transformPoint(x, z, rot) {
  const c = Math.cos(rot), s = Math.sin(rot);
  return [x * c + z * s, -x * s + z * c];
}

function makeCanvasTexture(size, draw, repeatX = 1, repeatY = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  draw(ctx, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function gableGeometry(w, d, h) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, 0);
  shape.lineTo(w / 2, 0);
  shape.lineTo(0, h);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false });
  geo.translate(0, 0, -d / 2);
  return geo;
}


function addVertexColor(geo, color) {
  const count = geo.attributes.position.count;
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = color.r;
    arr[i * 3 + 1] = color.g;
    arr[i * 3 + 2] = color.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

function bakeGroup(group, roughness = 0.42) {
  group.updateMatrixWorld(true);
  const geos = [];
  group.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh) return;
    const color = o.material?.color ? o.material.color.clone() : new THREE.Color(0xffffff);
    let geo = o.geometry.clone();
    if (!geo.attributes.normal) geo.computeVertexNormals();
    if (!geo.attributes.uv) {
      const count = geo.attributes.position.count;
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(count * 2), 2));
    }
    addVertexColor(geo, color);
    geo.applyMatrix4(o.matrixWorld);
    geos.push(geo);
  });
  if (!geos.length) return group;
  const merged = mergeGeometries(geos, false);
  if (!merged) return group;
  for (const child of [...group.children]) group.remove(child);
  const mesh = new THREE.Mesh(merged, new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness, metalness: 0.02 }));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  return group;
}

function cylinderBetween(a, b, radius, material, parent) {
  const p1 = new V3(a[0], a[1], a[2]);
  const p2 = new V3(b[0], b[1], b[2]);
  const dir = new V3().subVectors(p2, p1);
  const len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, 1, 8), material);
  mesh.scale.y = len;
  mesh.position.copy(p1).add(p2).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new V3(0, 1, 0), dir.normalize());
  mesh.castShadow = true; mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function createCrossTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const c = canvas.getContext('2d');
  c.drawImage(makeFlagCanvas('swiss'), 0, 0);
  return new THREE.CanvasTexture(canvas);
}
function makeFlagCanvas(type) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (type === 'swiss') {
    ctx.fillStyle = '#d52b1e'; ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = '#fff'; ctx.fillRect(102, 52, 52, 152); ctx.fillRect(52, 102, 152, 52);
  }
  return canvas;
}

export class World {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.root.name = 'Geneva';
    scene.add(this.root);
    this.rng = mulberry32(604204);
    this.obstacles = [];
    this.circles = [];
    this.plazas = [];
    this.roadSegments = [];
    this.safeDecks = [];
    this.labels = [];
    this.markers = {};
    this.traffic = [];
    this.boats = [];
    this.animatedFlags = [];
    this.clockHands = [];
    this.jet = null;
    this._elapsed = 0;
    this._buildAssets();
    this._setupEnvironment();
    this._buildBase();
    this._buildWater();
    this._buildRoads();
    this._buildShoreline();
    this._buildLandmarks();
    this._buildGenericCity();
    this._buildParksAndTrees();
    this._buildTrafficAndProps();
    this._buildPromenades();
    this._buildRamps();
    this._buildCollectibles();
    this._buildMarkers();
    this._buildLabels();
    this._finalizeBatches();
    this._optimizeStaticGeometry();
  }

  // ------------------------------------------------------------------
  // Assets
  // ------------------------------------------------------------------
  _buildAssets() {
    const rng = this.rng;
    this.textures = {
      base: makeCanvasTexture(256, (c, s) => {
        c.fillStyle = '#c4cdb4'; c.fillRect(0, 0, s, s);
        c.strokeStyle = 'rgba(92,110,86,.22)'; c.lineWidth = 2;
        c.strokeRect(1, 1, s - 2, s - 2);
        c.beginPath(); c.arc(s / 2, s / 2, 9, 0, Math.PI * 2); c.fillStyle = 'rgba(255,255,255,.11)'; c.fill();
        c.beginPath(); c.arc(s / 2 - 3, s / 2 - 3, 7, 0, Math.PI * 2); c.fillStyle = 'rgba(255,255,255,.13)'; c.fill();
        c.strokeStyle = 'rgba(80,92,74,.16)'; c.beginPath(); c.arc(s / 2, s / 2, 13, 0, Math.PI * 2); c.stroke();
      }, 52, 64),
      asphalt: makeCanvasTexture(128, (c, s) => {
        c.fillStyle = '#404a51'; c.fillRect(0, 0, s, s);
        for (let i = 0; i < 340; i++) {
          const v = 52 + Math.floor(rng() * 35);
          c.fillStyle = `rgba(${v},${v + 4},${v + 5},${0.25 + rng() * 0.35})`;
          c.fillRect(rng() * s, rng() * s, 1 + rng() * 2, 1 + rng() * 2);
        }
      }, 1, 1),
      grass: makeCanvasTexture(128, (c, s) => {
        c.fillStyle = '#6f9e56'; c.fillRect(0, 0, s, s);
        for (let i = 0; i < 520; i++) {
          c.fillStyle = rng() > 0.55 ? 'rgba(128,176,84,.32)' : 'rgba(55,110,60,.26)';
          c.fillRect(rng() * s, rng() * s, 1 + rng() * 2, 1 + rng() * 3);
        }
      }, 8, 8),
      stone: makeCanvasTexture(128, (c, s) => {
        c.fillStyle = '#b9b3a5'; c.fillRect(0, 0, s, s);
        c.strokeStyle = 'rgba(82,78,70,.22)'; c.lineWidth = 1;
        for (let i = 0; i <= s; i += 32) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i, s); c.stroke(); c.beginPath(); c.moveTo(0, i); c.lineTo(s, i); c.stroke(); }
        for (let i = 0; i < 150; i++) { c.fillStyle = 'rgba(255,255,255,.05)'; c.fillRect(rng() * s, rng() * s, 2, 2); }
      }, 4, 4),
      cobble: makeCanvasTexture(256, (c, s) => {
        c.fillStyle = '#9e9788'; c.fillRect(0, 0, s, s);
        c.strokeStyle = 'rgba(58,53,47,.42)'; c.lineWidth = 2;
        const cell = 32;
        for (let y = 0; y < s; y += cell) {
          for (let x = 0; x < s; x += cell) {
            const offset = (Math.floor(y / cell) % 2) * (cell / 2);
            c.strokeStyle = `rgba(60,54,48,${0.2 + rng() * 0.18})`;
            c.strokeRect((x + offset) % s, y, cell, cell);
          }
        }
        for (let i = 0; i < 300; i++) { c.fillStyle = 'rgba(255,255,255,.05)'; c.fillRect(rng() * s, rng() * s, 2, 2); }
      }, 5, 5),
      wood: makeCanvasTexture(256, (c, s) => {
        c.fillStyle = '#9d6d46'; c.fillRect(0, 0, s, s);
        const plank = 28;
        for (let y = 0; y < s; y += plank) {
          c.fillStyle = y / plank % 2 == 0 ? 'rgba(255,218,162,.07)' : 'rgba(55,31,16,.08)';
          c.fillRect(0, y, s, plank);
          c.strokeStyle = 'rgba(65,42,25,.42)'; c.lineWidth = 2;
          c.beginPath(); c.moveTo(0, y + 0.5); c.lineTo(s, y + 0.5); c.stroke();
          for (let i = 0; i < 12; i++) {
            c.strokeStyle = `rgba(75,47,28,${0.08 + rng() * 0.12})`;
            c.beginPath(); c.moveTo(rng() * s, y + 4 + rng() * 20); c.bezierCurveTo(rng() * s, y + 10, rng() * s, y + 22, rng() * s, y + 20); c.stroke();
          }
        }
        c.strokeStyle = 'rgba(60,38,21,.28)'; c.lineWidth = 3; c.strokeRect(0, 0, s, s);
      }, 3, 1),
      windowSoft: makeCanvasTexture(256, (c, s) => {
        const g = c.createLinearGradient(0, 0, s, s);
        g.addColorStop(0, '#2f5c6c'); g.addColorStop(.48, '#16333f'); g.addColorStop(.55, '#7ba3ae'); g.addColorStop(1, '#213f4a');
        c.fillStyle = g; c.fillRect(0, 0, s, s);
        c.strokeStyle = 'rgba(230,242,238,.24)'; c.lineWidth = 6; c.strokeRect(3, 3, s - 6, s - 6);
        c.strokeStyle = 'rgba(255,255,255,.15)'; c.lineWidth = 3;
        c.beginPath(); c.moveTo(s * .18, s * .15); c.lineTo(s * .4, s * .56); c.stroke();
      }, 1, 1),
    };
    this.materials = {
      base: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.textures.base, roughness: 0.88 }),
      asphalt: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.textures.asphalt, roughness: 0.95 }),
      asphaltDark: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.textures.asphalt, roughness: 0.95 }),
      grass: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.textures.grass, roughness: 0.96 }),
      stone: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.textures.stone, roughness: 0.88 }),
      sidewalk: new THREE.MeshStandardMaterial({ color: 0xc3b9a7, map: this.textures.stone, roughness: 0.9 }),
      cobble: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.textures.cobble, roughness: 0.9 }),
      wood: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.textures.wood, roughness: 0.72 }),
      line: new THREE.MeshStandardMaterial({ color: 0xf7ecd6, roughness: 0.8 }),
      lineYellow: new THREE.MeshStandardMaterial({ color: 0xf4c944, roughness: 0.8 }),
      waterFallback: new THREE.MeshStandardMaterial({ color: 0x2a83a2, roughness: 0.24 }),
      glass: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.textures.windowSoft, roughness: 0.23, metalness: 0.22 }),
      frame: new THREE.MeshStandardMaterial({ color: 0xf0e8d5, roughness: 0.5 }),
      roof: plastic(0x555f68, { roughness: 0.65 }),
    };
    this.studs = new InstanceBatch(GEO.stud, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }), { castShadow: false });
    this.windowBatch = new InstanceBatch(GEO.box, this.materials.glass, { castShadow: false, receiveShadow: true });
    this.frameBatch = new InstanceBatch(GEO.box, this.materials.frame, { castShadow: false });
    this.treeTrunk = new InstanceBatch(new THREE.CylinderGeometry(1, 1, 1, 7), plastic(PALETTE.woodDark, { roughness: 0.85 }), { castShadow: true });
    this.treeLeaf = new InstanceBatch(new THREE.IcosahedronGeometry(1, 1), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.82, flatShading: true }), { castShadow: true });
  }

  _setupEnvironment() {
    const scene = this.scene;
    scene.background = new THREE.Color(0x93cde3);
    scene.fog = new THREE.Fog(0xc3dfe7, 265, 560);
    const hemi = new THREE.HemisphereLight(0xc9e8ff, 0xe9d4a9, 1.5);
    scene.add(hemi);
    const ambient = new THREE.AmbientLight(0x9fc7d8, 0.22);
    scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xffefc8, 2.45);
    sun.position.set(54, 112, 38);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1536, 1536);
    sun.shadow.camera.left = -74; sun.shadow.camera.right = 74;
    sun.shadow.camera.top = 74; sun.shadow.camera.bottom = -74;
    sun.shadow.camera.near = 1; sun.shadow.camera.far = 260;
    sun.shadow.bias = -0.0005;
    sun.shadow.normalBias = 0.04;
    scene.add(sun);
    scene.add(sun.target);
    this.sun = sun;
    const fill = new THREE.DirectionalLight(0xa9ddf2, 0.42);
    fill.position.set(-80, 45, -60);
    scene.add(fill);

    const skyGeo = new THREE.SphereGeometry(640, 24, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: {
        topColor: { value: new THREE.Color(0x297fba) },
        midColor: { value: new THREE.Color(0x7ac3df) },
        bottomColor: { value: new THREE.Color(0xd9edf1) },
        sunColor: { value: new THREE.Color(0xfff0b7) },
        sunDirection: { value: new THREE.Vector3(-0.4, 0.62, -0.68).normalize() },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform vec3 topColor; uniform vec3 midColor; uniform vec3 bottomColor;
        uniform vec3 sunColor; uniform vec3 sunDirection;
        varying vec3 vWorldPosition;
        void main() {
          vec3 dir = normalize(vWorldPosition - cameraPosition);
          float h = clamp(dir.y, -0.08, 1.0);
          vec3 col = mix(bottomColor, midColor, smoothstep(-0.02, 0.28, h));
          col = mix(col, topColor, smoothstep(0.18, 0.8, h));
          float sunGlow = pow(max(dot(dir, sunDirection), 0.0), 42.0);
          float sunCore = pow(max(dot(dir, sunDirection), 0.0), 520.0);
          col += sunColor * (sunGlow * 0.18 + sunCore * 0.9);
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    sky.renderOrder = -1000;
    sky.frustumCulled = false;
    scene.add(sky);
    this.sky = sky;

    // A broad, low landscape plate keeps the horizon from ending at the baseplate.
    const outerGround = new THREE.Mesh(new THREE.PlaneGeometry(1500, 1500), new THREE.MeshStandardMaterial({ color: 0x8ea780, roughness: 1 }));
    outerGround.rotation.x = -Math.PI / 2;
    outerGround.position.set(20, -3.05, -50);
    outerGround.receiveShadow = false;
    scene.add(outerGround);

    // Distant slate mountains, LEGO-brick silhouettes around the lake.
    const mountains = new THREE.Group();
    const mountainMats = [buildMaterial(0x7e9399, { flatShading: true }), buildMaterial(0x9eb0ae), buildMaterial(0x6f858c)];
    const mountainData = [
      [132, -235, 42, 58], [190, -220, 58, 77], [245, -170, 52, 65],
      [268, -80, 46, 52], [245, 35, 42, 48], [212, 110, 55, 63],
      [95, -290, 65, 82], [-209, -85, 52, 66], [-240, 20, 46, 58],
      [8, -340, 78, 112], [88, -335, 62, 93], [160, -320, 74, 118],
      [-30, -365, 86, 96], [244, -240, 70, 96], [295, -95, 62, 72],
    ];
    mountainData.forEach(([x, z, r, h], i) => {
      const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, 5 + (i % 3)), mountainMats[i % 3]);
      m.position.set(x, -5, z);
      m.rotation.y = i * 0.8;
      m.castShadow = false; m.receiveShadow = false;
      mountains.add(m);
      const cap = new THREE.Mesh(new THREE.ConeGeometry(r * 0.42, h * 0.27, 5 + (i % 3)), buildMaterial(0xe8ece7));
      cap.position.set(x, h * 0.37 - 5, z);
      cap.rotation.y = i * 0.8;
      mountains.add(cap);
    });
    scene.add(mountains);

    // Green foothills in front of the peaks.
    const hillMat = buildMaterial(0x6f8e6a, { flatShading: true });
    for (const [x, z, r, h] of [[-60, -270, 55, 22], [24, -285, 68, 28], [118, -278, 52, 20], [-150, -230, 49, 18], [220, -190, 58, 24]]) {
      const hill = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), hillMat);
      hill.scale.set(r, h, r * 0.72);
      hill.position.set(x, -14, z);
      hill.receiveShadow = false;
      scene.add(hill);
    }

    // Low, chunky clouds.
    const cloudMat = new THREE.MeshStandardMaterial({ color: 0xf8f5e9, roughness: 0.8, transparent: true, opacity: 0.82 });
    const cloudData = [[-105, 74, -170, 1.4], [92, 86, -115, 1], [190, 68, 40, 1.2]];
    this.clouds = [];
    for (const [x, y, z, s] of cloudData) {
      const g = new THREE.Group();
      for (let i = 0; i < 4; i++) {
        const b = new THREE.Mesh(GEO.sphere, cloudMat);
        b.scale.set(10 * s, 3.2 * s, 5 * s);
        b.position.set((i - 1.5) * 8 * s, Math.sin(i) * 1.5 * s, 0);
        g.add(b);
      }
      g.position.set(x, y, z);
      this.clouds.push(g);
      scene.add(g);
    }
  }

  _buildBase() {
    const centerX = (BOUNDS.minX + BOUNDS.maxX) / 2;
    const centerZ = (BOUNDS.minZ + BOUNDS.maxZ) / 2;
    const w = BOUNDS.maxX - BOUNDS.minX + 30;
    const d = BOUNDS.maxZ - BOUNDS.minZ + 30;
    const base = new THREE.Mesh(new THREE.BoxGeometry(w, 3.2, d), this.materials.base);
    base.position.set(centerX, -1.62, centerZ);
    base.receiveShadow = true;
    this.root.add(base);
    // Exposed baseplate edges show the LEGO stack.
    addBox(this.root, w, 0.55, d, centerX, -3.42, centerZ, 0x83957f, { castShadow: false, receiveShadow: false });
    addBox(this.root, w + 1.1, 0.55, d + 1.1, centerX, -2.85, centerZ, 0xa9b39f, { castShadow: false, receiveShadow: false });
    addBox(this.root, w + 2, 0.5, d + 2, centerX, -2.35, centerZ, 0xc2c9b6, { castShadow: false, receiveShadow: false });

    // A few broad ground plates: old city stone, grassy edges.
    const urban = new THREE.Mesh(new THREE.BoxGeometry(155, 0.08, 250), this.materials.stone);
    urban.position.set(-12, 0.04, -28);
    urban.receiveShadow = true;
    this.root.add(urban);
    const urbanSouth = new THREE.Mesh(new THREE.BoxGeometry(185, 0.08, 90), this.materials.stone);
    urbanSouth.position.set(-17, 0.04, 62);
    urbanSouth.receiveShadow = true;
    this.root.add(urbanSouth);
    const urbanEast = new THREE.Mesh(new THREE.BoxGeometry(135, 0.08, 160), this.materials.stone);
    urbanEast.position.set(88, 0.04, 2);
    urbanEast.receiveShadow = true;
    this.root.add(urbanEast);
    const nations = new THREE.Mesh(new THREE.BoxGeometry(105, 0.08, 120), this.materials.stone);
    nations.position.set(-78, 0.04, -185);
    nations.receiveShadow = true;
    this.root.add(nations);

    // Rustic brick ring around the technical edge.
    const edgeStuds = new InstanceBatch(GEO.stud, plastic(0xffffff), { castShadow: false });
    const step = 2.3;
    for (let x = BOUNDS.minX - 10; x <= BOUNDS.maxX + 10; x += step) {
      edgeStuds.add(x, 0.09, BOUNDS.minZ - 10, 0.42, 1, 0.42, 0x9aab8f);
      edgeStuds.add(x, 0.09, BOUNDS.maxZ + 10, 0.42, 1, 0.42, 0x9aab8f);
    }
    for (let z = BOUNDS.minZ - 10; z <= BOUNDS.maxZ + 10; z += step) {
      edgeStuds.add(BOUNDS.minX - 10, 0.09, z, 0.42, 1, 0.42, 0x9aab8f);
      edgeStuds.add(BOUNDS.maxX + 10, 0.09, z, 0.42, 1, 0.42, 0x9aab8f);
    }
    edgeStuds.build(this.root);
  }

  _buildWater() {
    const waterMat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        deep: { value: new THREE.Color(0x176f8e) },
        shallow: { value: new THREE.Color(0x4bbfd0) },
        sunColor: { value: new THREE.Color(0xfff2cc) },
        fogColor: { value: new THREE.Color(0xbfdce6) },
        fogNear: { value: 265 },
        fogFar: { value: 560 },
      },
      transparent: false,
      depthWrite: true,
      side: THREE.DoubleSide,
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,
      fragmentShader: `
        uniform float time; uniform vec3 deep; uniform vec3 shallow; uniform vec3 sunColor;
        uniform vec3 fogColor; uniform float fogNear; uniform float fogFar;
        varying vec3 vWorld;
        void main() {
          float wave = sin(vWorld.x * 0.17 + time * 0.55 + sin(vWorld.z * 0.09)) * 0.55
                     + sin(vWorld.z * 0.24 - time * 0.42 + vWorld.x * 0.035) * 0.45;
          float bands = smoothstep(0.62, 0.98, sin(vWorld.x * 0.26 + vWorld.z * 0.12 + time * 0.75) * 0.5 + 0.5);
          float glints = smoothstep(0.965, 1.0, sin(vWorld.x * 0.52 + time * 1.1) * 0.5 + 0.5)
                       * smoothstep(0.75, 1.0, sin(vWorld.z * 0.27 - time * 0.7) * 0.5 + 0.5);
          vec3 col = mix(deep, shallow, smoothstep(-0.8, 0.9, wave) * 0.42 + 0.30);
          col += bands * 0.055 * vec3(0.52, 0.85, 0.9);
          col += glints * 0.10 * sunColor;
          float dist = length(cameraPosition - vWorld);
          float fog = smoothstep(fogNear, fogFar, dist);
          col = mix(col, fogColor, fog);
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const makePoly = (poly, material) => {
      const shape = new THREE.Shape();
      shape.moveTo(poly[0][0], poly[0][1]);
      for (let i = 1; i < poly.length; i++) shape.lineTo(poly[i][0], poly[i][1]);
      shape.closePath();
      const geo = new THREE.ShapeGeometry(shape, 1);
      geo.rotateX(Math.PI / 2);
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.y = 0.092;
      mesh.receiveShadow = true;
      this.root.add(mesh);
      return mesh;
    };
    this.waterMat = waterMat;
    this.waterMeshes = [makePoly(WATER.lake, waterMat), makePoly(WATER.river, waterMat)];

    // Foam ribs at the shoreline — little white brick dashes.
    const foamMat = new THREE.MeshBasicMaterial({ color: 0xe7f6f3, transparent: true, opacity: 0.5, depthWrite: false });
    const foamGeo = new THREE.BoxGeometry(1, 0.02, 0.18);
    const foam = new THREE.InstancedMesh(foamGeo, foamMat, 180);
    const m = new THREE.Matrix4();
    let idx = 0;
    const shoreLines = [
      [[12, -49], [38, -51], [70, -52], [108, -53], [154, -60]],
      [[20, 10], [34, 9], [52, 17], [76, 30], [96, 37], [128, 48]],
      [[13, -5], [-18, -2], [-45, 2], [-78, 6], [-112, 9]],
      [[13, 8], [-18, 11], [-46, 15], [-76, 20], [-110, 23]],
    ];
    for (const line of shoreLines) {
      for (let i = 0; i < line.length - 1 && idx < 180; i++) {
        const [ax, az] = line[i], [bx, bz] = line[i + 1];
        const len = Math.hypot(bx - ax, bz - az);
        const n = Math.floor(len / 2.8);
        const angle = Math.atan2(bx - ax, bz - az);
        for (let j = 0; j < n && idx < 180; j++) {
          const t = (j + 0.5) / n;
          m.compose(new V3(ax + (bx - ax) * t, 0.105, az + (bz - az) * t), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, angle, 0)), new V3(1.5, 1, 1));
          foam.setMatrixAt(idx++, m);
        }
      }
    }
    foam.count = idx;
    foam.instanceMatrix.needsUpdate = true;
    this.root.add(foam);
  }

  _buildRoads() {
    const asphaltGeos = [];
    const lineGeos = [];
    const sidewalkGeos = [];
    const woodGeos = [];
    const cobbleGeos = [];
    const roadNodePoints = [];

    const addSegBox = (arr, width, length, x, y, z, angle, h = 0.12) => {
      const geo = new THREE.BoxGeometry(width, h, length);
      const mat = new THREE.Matrix4().compose(new V3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, angle, 0)), new V3(1, 1, 1));
      geo.applyMatrix4(mat);
      arr.push(geo);
    };
    const addLine = (x, y, z, angle, length, width = 0.17) => {
      const geo = new THREE.BoxGeometry(width, 0.018, length);
      const mat = new THREE.Matrix4().compose(new V3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, angle, 0)), new V3(1, 1, 1));
      geo.applyMatrix4(mat);
      lineGeos.push(geo);
    };

    for (const road of ROADS) {
      const pts = road.points;
      for (let i = 0; i < pts.length - 1; i++) {
        const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
        const dx = bx - ax, dz = bz - az;
        const len = Math.hypot(dx, dz);
        if (len < 0.01) continue;
        const angle = Math.atan2(dx, dz);
        const cx = (ax + bx) / 2, cz = (az + bz) / 2;
        this.roadSegments.push({ ax, az, bx, bz, width: road.width, road: road.id, type: road.type || 'street' });
        if (road.type === 'bridge') continue;
        if (road.type === 'pier') {
          addSegBox(woodGeos, road.width, len + 0.2, cx, 0.06, cz, angle, 0.18);
          // Side rails / edge bumpers.
          const perp = { x: Math.cos(angle), z: -Math.sin(angle) };
          for (const side of [-1, 1]) {
            const ox = perp.x * (road.width / 2 - 0.11) * side;
            const oz = perp.z * (road.width / 2 - 0.11) * side;
            addSegBox(woodGeos, 0.2, len, cx + ox, 0.21, cz + oz, angle, 0.42);
            const posts = Math.max(1, Math.floor(len / 4.5));
            for (let p = 0; p < posts; p++) {
              const t = (p + 0.5) / posts;
              const lx = cx + ox + (bx - ax) * (t - 0.5);
              const lz = cz + oz + (bz - az) * (t - 0.5);
              addSegBox(woodGeos, 0.26, 0.26, lx, 0.55, lz, angle, 1.0);
            }
          }
          continue;
        }
        addSegBox(asphaltGeos, road.width, len + 0.1, cx, 0.06, cz, angle);
        if (road.type === 'plaza') {
          addSegBox(cobbleGeos, road.width + 0.5, len + 0.1, cx, 0.072, cz, angle, 0.12);
        }
        const perp = { x: Math.cos(angle), z: -Math.sin(angle) };
        if (road.type !== 'plaza') {
          for (const side of [-1, 1]) {
            addSegBox(sidewalkGeos, 1.5, len + 0.5, cx + perp.x * (road.width / 2 + 0.74) * side, 0.075, cz + perp.z * (road.width / 2 + 0.74) * side, angle, 0.15);
          }
        }
        if (road.major) {
          const dash = 2.0, gap = 3.2;
          const stride = dash + gap;
          const count = Math.floor(len / stride);
          for (let d = 0; d < count; d++) {
            const t = (d * stride + stride / 2) / len;
            addLine(ax + dx * t, 0.135, az + dz * t, angle, dash, 0.16);
          }
          // soft edge lines
          for (const side of [-1, 1]) {
            addLine(cx + perp.x * (road.width / 2 - 0.42) * side, 0.132, cz + perp.z * (road.width / 2 - 0.42) * side, angle, len * 0.92, 0.08);
          }
        }
        roadNodePoints.push([bx, bz, road.width]);
      }
      if (pts.length > 1) roadNodePoints.push([pts[0][0], pts[0][1], road.width]);
    }

    // Filled intersection nodes.
    for (const [x, z, width] of roadNodePoints) {
      const geo = new THREE.CylinderGeometry(width / 2, width / 2, 0.12, 16);
      const m = new THREE.Matrix4().makeTranslation(x, 0.06, z);
      geo.applyMatrix4(m);
      asphaltGeos.push(geo);
    }

    const addMerged = (geos, material, cast = false, receive = true) => {
      if (!geos.length) return null;
      const merged = mergeGeometries(geos, false);
      if (!merged) return null;
      const mesh = new THREE.Mesh(merged, material);
      mesh.castShadow = cast;
      mesh.receiveShadow = receive;
      this.root.add(mesh);
      geos.forEach((g) => g.dispose());
      return mesh;
    };
    addMerged(asphaltGeos, this.materials.asphalt);
    addMerged(sidewalkGeos, this.materials.sidewalk);
    addMerged(lineGeos, this.materials.line);
    addMerged(woodGeos, this.materials.wood, true);
    addMerged(cobbleGeos, this.materials.cobble);

    // Some crosswalks at the busy corners.
    const crosswalk = (x, z, angle, width) => {
      const geos = [];
      const perp = new V2(Math.cos(angle), -Math.sin(angle));
      for (let i = 0; i < Math.floor(width / 1.15); i++) {
        const off = (i - (Math.floor(width / 1.15) - 1) / 2) * 1.05;
        const geo = new THREE.BoxGeometry(0.6, 0.02, 2.2);
        const mat = new THREE.Matrix4().compose(
          new V3(x + perp.x * off, 0.14, z + perp.y * off),
          new THREE.Quaternion().setFromEuler(new THREE.Euler(0, angle + Math.PI / 2, 0)),
          new V3(1, 1, 1),
        );
        geo.applyMatrix4(mat); geos.push(geo);
      }
      const merged = mergeGeometries(geos, false);
      const mesh = new THREE.Mesh(merged, this.materials.line);
      mesh.receiveShadow = true;
      this.root.add(mesh);
      geos.forEach((g) => g.dispose());
    };
    crosswalk(5.8, -12.5, 0, 10);
    crosswalk(5.8, 16.5, 0, 10);
    crosswalk(-43, -34.8, Math.PI / 2, 9);

    // Telegraph/tram rails along the quay: thin brass lines.
    const railGeos = [];
    const addRail = (points, offset) => {
      for (let i = 0; i < points.length - 1; i++) {
        const [ax, az] = points[i], [bx, bz] = points[i + 1];
        const dx = bx - ax, dz = bz - az;
        const len = Math.hypot(dx, dz);
        const angle = Math.atan2(dx, dz);
        const perp = { x: Math.cos(angle), z: -Math.sin(angle) };
        const geo = new THREE.BoxGeometry(0.09, 0.02, len);
        const mat = new THREE.Matrix4().compose(
          new V3(ax + dx / 2 + perp.x * offset, 0.142, az + dz / 2 + perp.z * offset),
          new THREE.Quaternion().setFromEuler(new THREE.Euler(0, angle, 0)), new V3(1, 1, 1),
        );
        geo.applyMatrix4(mat); railGeos.push(geo);
      }
    };
    addRail([[5.8, 18], [-14, 17.5], [-34, 18.5], [-53, 22]], -2.2);
    addRail([[5.8, 18], [-14, 17.5], [-34, 18.5], [-53, 22]], 2.2);
    const railMat = new THREE.MeshStandardMaterial({ color: 0xb2aa95, metalness: 0.55, roughness: 0.35 });
    const rail = new THREE.Mesh(mergeGeometries(railGeos, false), railMat);
    this.root.add(rail);
    railGeos.forEach((g) => g.dispose());
  }

  _buildShoreline() {
    const stoneMat = plastic(0xc4bca9, { roughness: 0.8 });
    const edges = [];
    const polys = [WATER.lake, WATER.river];
    for (const poly of polys) {
      for (let i = 0; i < poly.length; i++) {
        const a = poly[i], b = poly[(i + 1) % poly.length];
        const mx = (a[0] + b[0]) / 2, mz = (a[1] + b[1]) / 2;
        // keep the far decorative lake edge naked
        if (Math.abs(mx) > 210 || mz < -90) continue;
        let nearRoad = false;
        for (const seg of this.roadSegments) {
          if (distToSegment(mx, mz, seg.ax, seg.az, seg.bx, seg.bz) < seg.width * 0.5 + 1.6) { nearRoad = true; break; }
        }
        if (nearRoad) continue;
        const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (len < 4) continue;
        const angle = Math.atan2(b[0] - a[0], b[1] - a[1]);
        const geo = new THREE.BoxGeometry(0.8, 0.6, len);
        const mat = new THREE.Matrix4().compose(new V3(mx, 0.25, mz), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, angle, 0)), new V3(1, 1, 1));
        geo.applyMatrix4(mat);
        edges.push(geo);
      }
    }
    if (edges.length) {
      const merged = mergeGeometries(edges, false);
      const mesh = new THREE.Mesh(merged, stoneMat);
      mesh.castShadow = true; mesh.receiveShadow = true;
      this.root.add(mesh);
      edges.forEach((g) => g.dispose());
    }
  }

  // ------------------------------------------------------------------
  // Utility
  // ------------------------------------------------------------------
  obstacle(cx, cz, w, d, label = '') {
    this.obstacles.push({ minX: cx - w / 2, maxX: cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2, label });
  }
  circleObstacle(cx, cz, r, label = '') {
    this.circles.push({ x: cx, z: cz, r, label });
  }
  plaza(cx, cz, w, d, surface = 0.85) {
    this.plazas.push({ minX: cx - w / 2, maxX: cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2, surface });
  }
  addStud(x, y, z, radius, color) {
    this.studs.add(x, y + 0.085, z, radius, 1, radius, color);
  }
  addWindow(x, y, z, w, h, rot = 0, lit = false) {
    this.frameBatch.add(x, y, z, w + 0.28, h + 0.26, 0.12, 0xf0e6d2, rot);
    this.windowBatch.add(x, y, z + 0.01, w, h, 0.13, lit ? 0xffdc9f : 0xffffff, rot);
  }
  addTree(x, z, scale = 1, kind = 'round', collide = true) {
    for (const r of this.roadSegments) {
      if (distToSegment(x, z, r.ax, r.az, r.bx, r.bz) < r.width / 2 + 1.8) return null;
    }
    if (this._isWater(x, z)) return null;
    if (this.isPointInBuilding(x, z, 1.0)) return null;
    for (const lm of LANDMARKS) if (Math.hypot(x - lm.position.x, z - lm.position.z) < 11) return null;
    const trunkH = (kind === 'cypress' ? 3.3 : 2.2) * scale;
    this.treeTrunk.add(x, trunkH / 2, z, 0.31 * scale, trunkH, 0.31 * scale, 0x6b4831);
    if (kind === 'cypress') {
      this.treeLeaf.add(x, 4.2 * scale, z, 1.35 * scale, 2.7 * scale, 1.35 * scale, 0x477f40);
      this.treeLeaf.add(x, 6.1 * scale, z, 0.98 * scale, 2.1 * scale, 0.98 * scale, 0x5b994e);
    } else {
      this.treeLeaf.add(x, 3.2 * scale, z, 1.7 * scale, 1.1 * scale, 1.7 * scale, 0x4c8c46);
      this.treeLeaf.add(x + 0.35 * scale, 4.15 * scale, z - 0.15 * scale, 1.3 * scale, 0.95 * scale, 1.3 * scale, 0x5fa254);
      this.treeLeaf.add(x - 0.25 * scale, 4.9 * scale, z + 0.3 * scale, 0.92 * scale, 0.78 * scale, 0.92 * scale, 0x72b05d);
    }
    if (collide) this.circleObstacle(x, z, 0.5 * scale, 'tree');
    return true;
  }
  addBench(x, z, rot = 0, collide = true) {
    for (const r of this.roadSegments) {
      if (distToSegment(x, z, r.ax, r.az, r.bx, r.bz) < r.width / 2 + 1.2) return null;
    }
    const bench = createBench();
    bench.position.set(x, 0.15, z);
    bench.rotation.y = rot;
    this.root.add(bench);
    if (collide) this.circleObstacle(x, z, 0.9, 'bench');
    return bench;
  }
  addLamp(x, z, rot = 0, flag = null) {
    const lamp = createLamp();
    lamp.position.set(x, 0.14, z);
    lamp.rotation.y = rot;
    this.root.add(lamp);
    if (flag) {
      addFlag(this.root, x, 4.6, z, flag, 0.46, rot);
    }
    return lamp;
  }

  _cobblePatch(cx, cz, w, d, y = 0.085) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, 0.07, d), this.materials.cobble);
    mesh.position.set(cx, y, cz);
    mesh.receiveShadow = true;
    this.root.add(mesh);
    return mesh;
  }
  _lawn(cx, cz, w, d, y = 0.075) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, d), this.materials.grass);
    mesh.position.set(cx, y, cz);
    mesh.receiveShadow = true;
    this.root.add(mesh);
    return mesh;
  }
  _path(points, width = 2.0, material = this.materials.stone) {
    const geos = [];
    for (let i = 0; i < points.length - 1; i++) {
      const [ax, az] = points[i], [bx, bz] = points[i + 1];
      const len = Math.hypot(bx - ax, bz - az);
      const angle = Math.atan2(bx - ax, bz - az);
      const geo = new THREE.BoxGeometry(width, 0.05, len);
      geo.applyMatrix4(new THREE.Matrix4().compose(new V3((ax + bx) / 2, 0.12, (az + bz) / 2), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, angle, 0)), new V3(1, 1, 1)));
      geos.push(geo);
    }
    if (!geos.length) return;
    const mesh = new THREE.Mesh(mergeGeometries(geos, false), material);
    mesh.receiveShadow = true;
    this.root.add(mesh);
    geos.forEach((g) => g.dispose());
  }

  // ------------------------------------------------------------------
  // Landmarks
  // ------------------------------------------------------------------
  _buildLandmarks() {
    this.batchesBuilt = false;
    this._landmarkCornavin();
    this._landmarkChair();
    this._landmarkBains();
    this._landmarkBridge();
    this._landmarkJet();
    this._landmarkJardin();
    this._landmarkBelAir();
    this._landmarkOldTown();
    this._landmarkNeuve();
    this._landmarkBastions();
  }

  _plazaAndClear(lm, w = 26, d = 22, surface = 0.92) {
    this._cobblePatch(lm.position.x, lm.position.z, w, d, 0.086);
    this.plaza(lm.position.x, lm.position.z, w, d, surface);
  }

  _landmarkCornavin() {
    const lm = LANDMARK_BY_ID.cornavin;
    const x = -47, z = -54;
    this._plazaAndClear(lm, 38, 25, 0.9);
    // Station body and wings.
    addBox(this.root, 34, 9.2, 14, x, 4.6, z, 0xe3d4b8, { castShadow: true });
    addBox(this.root, 34.8, 0.6, 14.8, x, 9.4, z, 0x666f75, { castShadow: true });
    addBox(this.root, 9, 13.6, 9, x, 6.8, z + 4.0, 0xeadbbd, { castShadow: true });
    addBox(this.root, 10, 0.8, 10, x, 13.8, z + 4.0, 0x5b646c, { castShadow: true });
    addBox(this.root, 3.2, 4.1, 3.2, x, 16.1, z + 4.0, 0x5b646c, { castShadow: true });
    // Facade columns.
    for (const cx of [-60, -56, -52, -44, -40, -36]) {
      addCylinder(this.root, 0.55, 0.65, 5.8, cx, 3.1, z + 7.4, 0xf1e8d4, { segments: 10, castShadow: true });
      addBox(this.root, 1.5, 0.35, 1.5, cx, 0.25, z + 7.4, 0xbfb29d);
      addBox(this.root, 1.5, 0.35, 1.5, cx, 5.9, z + 7.4, 0xbfb29d);
    }
    addBox(this.root, 31, 0.55, 3.5, x, 6.5, z + 8.2, 0x5d666d, { castShadow: true });
    // Door arches and big windows.
    for (const wx of [-52, -47, -42]) {
      addBox(this.root, 2.8, 4.2, 0.2, wx, 2.7, z + 7.08, 0x294651, { castShadow: false });
      addBox(this.root, 3.1, 0.3, 0.3, wx, 4.9, z + 7.1, 0xbfb29d, { castShadow: false });
    }
    // Windows along wings.
    for (const wx of [-59, -56, -38, -35]) {
      for (const wy of [2.8, 5.8, 8.1]) this.addWindow(wx, wy, z + 7.08, 1.8, 1.6, 0, false);
    }
    for (const wz of [-50, -54, -58]) {
      for (const wy of [2.9, 5.9]) this.addWindow(x + 17.06, wy, wz, 1.5, 1.7, Math.PI / 2, false);
      for (const wy of [2.9, 5.9]) this.addWindow(x - 17.06, wy, wz, 1.5, 1.7, -Math.PI / 2, false);
    }
    // Clock.
    const clock = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.25, 24), plastic(0xfff9e9, { roughness: 0.3 }));
    clock.rotation.x = Math.PI / 2;
    clock.position.set(x, 11.5, z + 8.56);
    clock.castShadow = true;
    this.root.add(clock);
    addBox(this.root, 0.12, 1.1, 0.18, x, 11.9, z + 8.72, 0x1e2b31, { castShadow: false, rotZ: 0.2 });
    addBox(this.root, 0.8, 0.11, 0.18, x + 0.35, 11.5, z + 8.72, 0x1e2b31, { castShadow: false });
    addCylinder(this.root, 0.16, 0.16, 0.22, x, 11.5, z + 8.72, 0x1e2b31, { rotX: Math.PI / 2, segments: 8 });
    const sign = makeSign('GARE CORNAVIN', { planeWidth: 13, height: 220, fontSize: 92, accent: '#f0c93a', bg: 'rgba(26,45,55,.94)' });
    sign.position.set(x, 7.6, z + 8.85);
    this.root.add(sign);
    // Flag + entrance stairs.
    addFlag(this.root, x, 17, z + 4, 'swiss', 1.1, 0.3);
    for (let i = 0; i < 3; i++) addBox(this.root, 21 - i * 1.6, 0.22, 3.2 - i * 0.3, x, 0.12 + i * 0.12, z + 10 + i * 1.2, 0xd3c8b4, { castShadow: true });
    this.obstacle(x, z, 35, 15, 'Gare Cornavin');
    this.obstacle(x, z + 4, 10, 10, 'station tower');
    // SBB-style platform canopy next door.
    addBox(this.root, 17, 0.45, 8, -28, 5.2, -61, 0x7a7f7f, { castShadow: true });
    for (const px of [-34, -28, -22]) addCylinder(this.root, 0.16, 0.2, 5, px, 2.6, -61, 0x707777, { segments: 8 });
    // Train parked beyond the plaza.
    const train = new THREE.Group();
    addBox(train, 23, 3.1, 4.2, 0, 1.7, 0, 0xd7d8cf, { castShadow: true });
    addBox(train, 23.2, 0.65, 4.3, 0, 3.0, 0, 0xb82f2d, { castShadow: true });
    addBox(train, 5, 1.2, 4.0, -2, 2.4, 0, 0x2c434f, { castShadow: true });
    for (let i = 0; i < 8; i++) addBox(train, 1.3, 0.9, 4.28, -9.5 + i * 2.7, 2.0, 0, 0x3d5c68, { castShadow: false });
    train.position.set(-96, 0.16, -49);
    train.rotation.y = 0.08;
    this.root.add(train);
    this.obstacle(-96, -49, 25, 6, 'train');
    // Flags + planters around the forecourt.
    for (const [fx, fz] of [[-61, -44], [-31, -45], [-37, -28]]) addFlag(this.root, fx, 0.1, fz, 'geneva', 0.75, 0.2);
    this.addBench(-38, -39, 0.1);
    this.addLamp(-64, -41, 0, 'swiss');
    this.addLamp(-29, -40, 0, 'swiss');
  }

  _landmarkChair() {
    const lm = LANDMARK_BY_ID.chair;
    this._cobblePatch(-73, -186, 54, 42, 0.086);
    this.plaza(-73, -186, 58, 48, 0.92);
    const chair = new THREE.Group();
    const brown = 0x96633b, brownDark = 0x724527, brownLight = 0xb0794c;
    // Seat
    addBox(chair, 14, 1.6, 11, 0, 13.5, 0, brown, { castShadow: true });
    addBox(chair, 14.3, 0.38, 11.3, 0, 14.4, 0, brownLight, { castShadow: true });
    addBox(chair, 13.2, 1.4, 10.2, 0, 12.8, 0, brownDark, { castShadow: true });
    // Back
    addBox(chair, 14, 16.5, 1.6, 0, 21.5, -4.8, brown, { castShadow: true });
    addBox(chair, 12.4, 14.4, 1.3, 0, 21.5, -3.85, brownDark, { castShadow: true });
    for (let i = 0; i < 5; i++) addBox(chair, 12.8, 0.28, 1.7, 0, 15.2 + i * 3.0, -4.78, brownLight, { castShadow: true });
    for (const sx of [-4.6, 4.6]) addBox(chair, 0.36, 14.2, 1.9, sx, 21.5, -3.72, brownLight, { castShadow: true });
    for (const sx of [-6, 6]) addBox(chair, 1.1, 1.2, 11.5, sx, 14.5, 0, brownDark, { castShadow: true });
    const splinter = addBox(chair, 2.4, 0.8, 1.4, 6.6, 6.2, 4, brownDark, { castShadow: true, rotZ: 0.36 });
    splinter.rotation.y = 0.4;
    // Three full legs and the broken one.
    for (const [lx, lz, h] of [[-6, -4, 13], [6, -4, 13], [-6, 4, 13], [6, 4, 5.5]]) {
      addBox(chair, 1.5, h, 1.5, lx, h / 2, lz, brown, { castShadow: true });
      addBox(chair, 1.7, 1.0, 1.7, lx, 0.5, lz, brownDark, { castShadow: true });
    }
    // Splintered stump and a tiny official plaque.
    addBox(chair, 2.2, 1.2, 2.2, 6, 5.3, 4, brownDark, { castShadow: true, rotZ: 0.16 });
    addBox(chair, 1.2, 0.25, 1.4, 6.4, 6.1, 4, brownLight, { castShadow: true, rotZ: 0.32 });
    chair.position.set(-84, 0.18, -198.5);
    chair.rotation.y = 0.52;
    this.root.add(chair);
    this.circleObstacle(-84, -198.5, 11, 'Broken Chair');
    addBox(this.root, 5.4, 0.5, 0.5, -75, 1.1, -184.3, 0x4e4033, { castShadow: true, rotY: 0.42 });
    addBox(this.root, 0.16, 1.4, 0.16, -77.4, 0.7, -184.3, 0x4e4033, { castShadow: true });
    addBox(this.root, 0.16, 1.4, 0.16, -72.6, 0.7, -184.3, 0x4e4033, { castShadow: true });
    const plaque = makeSign('BROKEN CHAIR', { planeWidth: 4.6, height: 220, fontSize: 84, accent: '#c0884f' });
    plaque.position.set(-75, 1.45, -184.15);
    plaque.rotation.y = 0.42;
    this.root.add(plaque);
    // UN Palace in the background.
    const ux = -103, uz = -218;
    addBox(this.root, 45, 10, 14, ux, 5, uz, 0xd8d3c2, { castShadow: true });
    addBox(this.root, 46, 0.8, 15, ux, 10.4, uz, 0x757b7c, { castShadow: true });
    addBox(this.root, 20, 2.2, 8, ux + 4, 12, uz, 0xd8d3c2, { castShadow: true });
    for (let i = 0; i < 13; i++) {
      for (const wy of [2.5, 5.3, 8.3]) this.addWindow(ux - 20 + i * 3.25, wy, uz + 7.08, 1.2, 1.1, 0, i % 4 === 0);
    }
    for (let i = 0; i < 9; i++) {
      addCylinder(this.root, 0.45, 0.5, 7, ux - 19 + i * 4.7, 3.5, uz + 8.2, 0xeee5d1, { segments: 8 });
    }
    addBox(this.root, 46, 0.6, 4, ux, 7.3, uz + 9, 0xa39a87, { castShadow: true });
    this.obstacle(ux, uz, 46, 16, 'UN Palace');
    // Avenue of flags.
    for (let i = 0; i < 12; i++) {
      const fx = -91 + (i % 2) * 16;
      const fz = -174 - Math.floor(i / 2) * 7.2;
      addFlag(this.root, fx, 0.1, fz, i % 3 === 0 ? 'geneva' : 'un', 1.05, i * 0.7);
    }
    for (let i = 0; i < 5; i++) this.addTree(-108 + i * 11, -176, 1.1 + (i % 2) * 0.2, i === 2 ? 'round' : 'cypress', false);
    this.addTree(-56, -203, 1.0, 'round', true);
    this.addTree(-98, -207, 0.95, 'round', true);
    this.addBench(-61, -178, 0.2);
    this.addBench(-79, -174.3, 0.0);
    this.addBench(-57, -196.5, -0.4);
    for (const [bx, bz] of [[-63, -187], [-89, -179], [-76, -204]]) {
      addBox(this.root, 2.4, 0.55, 1.2, bx, 0.4, bz, 0x8f6d4d, { castShadow: true });
      addBox(this.root, 2.2, 0.2, 1.0, bx, 0.75, bz, 0x527b46, { castShadow: false });
      for (let i = 0; i < 4; i++) addCylinder(this.root, 0.14, 0.15, 0.25, bx - 0.7 + i * 0.45, 0.9, bz + (i % 2 ? 0.16 : -0.16), [0xeb5c5c, 0xf3c63e, 0xee8ab0][i % 3], { segments: 6, castShadow: false });
    }
    // UN emblem in the paving.
    const emblemCanvas = document.createElement('canvas'); emblemCanvas.width = emblemCanvas.height = 512;
    const ec = emblemCanvas.getContext('2d'); ec.clearRect(0,0,512,512); ec.strokeStyle='rgba(227,216,194,.55)'; ec.lineWidth=10;
    for(let i=0;i<5;i++){ec.beginPath();ec.arc(256,256,90+i*24,0,Math.PI*2);ec.stroke();}
    ec.fillStyle='rgba(227,216,194,.5)'; ec.beginPath(); ec.arc(256,256,48,0,Math.PI*2); ec.fill();
    const emblemTex = new THREE.CanvasTexture(emblemCanvas); emblemTex.colorSpace=THREE.SRGBColorSpace;
    const emblem = new THREE.Mesh(new THREE.CircleGeometry(7,40), new THREE.MeshBasicMaterial({map:emblemTex,transparent:true,opacity:.55,depthWrite:false}));
    emblem.rotation.x=-Math.PI/2; emblem.position.set(-75,0.11,-173.5); this.root.add(emblem);
    this.addLamp(-61, -183, 0, 'geneva');
    this.addLamp(-79, -180, 0, 'geneva');
    this.addLamp(-68, -204, 0, 'geneva');
  }

  _landmarkBains() {
    const lm = LANDMARK_BY_ID.bains;
    const x = 65.7, z = -43.8;
    this.safeDecks.push({ x, z, r: 4.5 });
    this.plaza(x, z, 17, 11, 0.8);
    // Pavilions sit to each side, keeping the drop-off deck clear.
    const hut = new THREE.Group();
    addBox(hut, 10.5, 4.6, 10.5, 0, 2.3, 0, 0xf1e5cc, { castShadow: true });
    addBox(hut, 11.2, 0.5, 11.2, 0, 4.8, 0, 0xe45c45, { castShadow: true });
    for (const sx of [-5.2, 5.2]) {
      for (const sz of [-5.2, 5.2]) addBox(hut, 0.4, 5.0, 0.4, sx, 2.5, sz, 0xe45c45, { castShadow: true });
    }
    for (let i = -2; i <= 2; i++) addBox(hut, 1.2, 3.2, 0.15, i * 1.8, 2.1, 5.32, 0x2e4c56, { castShadow: false });
    // Red-white awning stripes.
    for (let i = 0; i < 8; i++) addBox(hut, 1.35, 0.2, 2.6, -4.7 + i * 1.35, 4.15, 6.1, i % 2 ? 0xf2e8d1 : 0xd8493d, { castShadow: true, rotX: -0.2 });
    const sign = makeSign('BAINS DES PÂQUIS', { planeWidth: 5.6, height: 220, fontSize: 82, accent: '#ee6f57' });
    sign.position.set(0, 5.9, 6.18);
    hut.add(sign);
    hut.position.set(58.3, 0.18, -51.5);
    this.root.add(hut);
    this.obstacle(58.3, -51.5, 11.5, 11.5, 'bath house');
    // Open-air changing cabin / sauna.
    addBox(this.root, 5, 3, 6, 74.2, 1.7, -53, 0xee6a50, { castShadow: true });
    addBox(this.root, 5.6, 0.4, 6.6, 74.2, 3.35, -53, 0xf3d27a, { castShadow: true });
    addBox(this.root, 1.2, 2, 0.15, 74.2, 1.1, -49.94, 0x2e4c56, { castShadow: false });
    this.obstacle(74.2, -53, 5.6, 6.5, 'sauna');
    // Diving platform out over the water.
    this._cobblePatch(82, -44, 7, 4.5, 0.08);
    for (const [px, pz] of [[79.8, -45.4], [84.2, -45.4], [79.8, -42.6], [84.2, -42.6]]) addCylinder(this.root, 0.25, 0.3, 4.2, px, 2.1, pz, 0x86603e, { segments: 6 });
    addBox(this.root, 5.8, 0.35, 4.8, 82, 4.3, -44, 0x9c7245, { castShadow: true });
    addBox(this.root, 1.4, 1.1, 4.8, 85, 4.8, -44, 0x9c7245, { castShadow: true });
    // Buoys and ladder.
    for (const [bx, bz] of [[91, -38], [95, -48], [86, -34]]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.35, 8, 18), plastic(0xe95445));
      ring.rotation.x = Math.PI / 2;
      ring.position.set(bx, 0.25, bz);
      this.root.add(ring);
    }
    // Deck furniture and flags.
    this.addBench(71.8, -49, 0.4);
    this.addLamp(62.2, -60, 0, 'geneva');
    this.addLamp(74.8, -60, 0, 'geneva');
    const bainsLabel = makeSign('BAINS  •  PÂQUIS', { planeWidth: 9, height: 180, fontSize: 78, accent: '#ee6f57', bg: 'rgba(8,23,35,.9)' });
    bainsLabel.position.set(0, 4.4, 0);
  }

  _landmarkBridge() {
    const lm = LANDMARK_BY_ID.pont;
    const x = 5.8, z0 = -16, z1 = 18;
    const len = z1 - z0;
    const cz = (z0 + z1) / 2;
    // Deck / road top.
    addBox(this.root, 12.2, 0.22, len, x, 0.06, cz, 0x454f54, { castShadow: false });
    addBox(this.root, 13.6, 0.55, len, x, -0.15, cz, 0xd7ccb6, { castShadow: true });
    for (const side of [-1, 1]) {
      addBox(this.root, 1.8, 0.32, len, x + side * 6.1, 0.18, cz, 0xd9cebb, { castShadow: true });
      // Balustrade top rail and posts.
      addBox(this.root, 0.42, 0.35, len, x + side * 6.85, 1.15, cz, 0xe3d7c1, { castShadow: true });
      for (let i = 0; i < 17; i++) {
        const bz = z0 + 1.4 + i * ((len - 2.8) / 16);
        addBox(this.root, 0.56, 0.9, 0.4, x + side * 6.85, 0.6, bz, 0xe8ddc8, { castShadow: true });
        addBox(this.root, 0.78, 0.24, 0.72, x + side * 6.85, 0.22, bz, 0xc7bca8, { castShadow: true });
      }
      for (const bz of [z0 + 3, z1 - 4]) {
        addBox(this.root, 1.3, 0.45, 1.35, x + side * 6.85, 0.25, bz, 0xb7ab97, { castShadow: true });
      }
    }
    // Arches below deck.
    for (const az of [9, 0, -9]) {
      const pier = addBox(this.root, 12.1, 2.4, 3.2, x, -1.1, az, 0xb6a993, { castShadow: true });
      const arch = new THREE.Mesh(new THREE.TorusGeometry(4.6, 1.35, 8, 16, Math.PI), plastic(0xc5b8a3, { roughness: 0.8 }));
      arch.rotation.z = Math.PI;
      arch.rotation.y = Math.PI / 2;
      arch.position.set(x, -2, az);
      arch.scale.set(1, 1, 1.4);
      this.root.add(arch);
    }
    // Lamp posts with flags.
    for (const side of [-1, 1]) {
      for (const lz of [z0 + 3, z1 - 4]) {
        this.addLamp(x + side * 5.6, lz, 0, side > 0 ? 'geneva' : 'swiss');
      }
    }
    const sign = makeSign('PONT DU MONT-BLANC', { planeWidth: 3.7, height: 210, fontSize: 82, accent: '#e7d4b4', bg: 'rgba(16,36,48,.92)' });
    sign.position.set(x + 6.86, 1.55, z1 - 1.2);
    sign.rotation.y = -Math.PI / 2;
    this.root.add(sign);
    addBox(this.root, 0.12, 0.72, 3.9, x + 6.82, 1.55, z1 - 1.2, 0x4d595d, { castShadow: false });
    this.circleObstacle(x + 6.85, 8, 0.6, 'bridge rail');
    this.circleObstacle(x - 6.85, 8, 0.6, 'bridge rail');
    this.addBench(x + 4.8, 10.6, Math.PI / 2);
    this.addBench(x - 4.8, -4.5, -Math.PI / 2);
    this.plaza(x, cz, 11, 28, 0.9);
  }

  _landmarkJet() {
    const lm = LANDMARK_BY_ID.jet;
    const x = 60.8, z = -15.4;
    this.safeDecks.push({ x, z, r: 8.2 });
    this.plaza(x, z, 18, 18, 0.8);
    // Circular viewing deck.
    const deck = new THREE.Mesh(new THREE.CylinderGeometry(9, 9.6, 0.3, 24), this.materials.wood);
    deck.position.set(x, 0.13, z);
    deck.receiveShadow = true; deck.castShadow = true;
    this.root.add(deck);
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      addBox(this.root, 0.22, 1.0, 0.22, x + Math.cos(a) * 8.7, 0.6, z + Math.sin(a) * 8.7, 0x7f5c3b, { castShadow: true });
    }
    // A few gaps in the railing for the jetty entrance.
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const b = ((i + 1) / 16) * Math.PI * 2;
      if (i > 7 && i < 11) continue;
      const mx = x + Math.cos((a + b) / 2) * 8.7;
      const mz = z + Math.sin((a + b) / 2) * 8.7;
      const len = Math.hypot(Math.cos(b) - Math.cos(a), Math.sin(b) - Math.sin(a)) * 8.7;
      const angle = Math.atan2(Math.cos(b) - Math.cos(a), Math.sin(b) - Math.sin(a));
      addBox(this.root, 0.18, 0.18, len, mx, 1.06, mz, 0x7f5c3b, { castShadow: true, rotY: angle });
    }
    const sx = x - 5.7, sz = z - 1.2;
    this.circleObstacle(sx, sz, 1.7, 'jet sign');
    addBox(this.root, 2.8, 0.35, 2.8, sx, 0.2, sz, 0x334a50, { castShadow: true });
    addCylinder(this.root, 0.25, 0.3, 3.8, sx, 2.0, sz, 0xced8d4, { segments: 10 });
    const sign = makeSign('JET D’EAU', { planeWidth: 4.4, height: 220, fontSize: 92, accent: '#48c5e8', bg: 'rgba(11,34,46,.94)' });
    sign.position.set(sx, 3.1, sz + 1.35);
    this.root.add(sign);
    // Basin and the huge plume slightly out in the lake.
    const bx = 74, bz = -24;
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(7.5, 8.2, 1.1, 24), this.materials.stone);
    basin.position.set(bx, 0.45, bz);
    basin.castShadow = true; basin.receiveShadow = true;
    this.root.add(basin);
    const waterDisc = new THREE.Mesh(new THREE.CylinderGeometry(6.8, 6.8, 0.25, 24), this.waterMat);
    waterDisc.position.set(bx, 1.04, bz);
    this.root.add(waterDisc);
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.2, 6, 12), plastic(0xf4eee1));
      ring.rotation.x = Math.PI / 2;
      ring.position.set(bx + Math.cos(a) * 6.2, 1.12, bz + Math.sin(a) * 6.2);
      this.root.add(ring);
    }
    const plumeGroup = new THREE.Group();
    plumeGroup.userData.dynamic = true;
    plumeGroup.position.set(bx, 1.1, bz);
    const plumeMat = new THREE.MeshBasicMaterial({ color: 0xc9f4fc, transparent: true, opacity: 0.42, depthWrite: false, blending: THREE.AdditiveBlending });
    const plumeCoreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.58, depthWrite: false, blending: THREE.AdditiveBlending });
    const plumeOuter = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 3.4, 40, 12, 1, true), plumeMat);
    plumeOuter.position.y = 19;
    plumeGroup.add(plumeOuter);
    const plumeCore = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 1.75, 36, 10, 1, true), plumeCoreMat);
    plumeCore.position.y = 16.5;
    plumeGroup.add(plumeCore);
    const mist = new THREE.Mesh(new THREE.ConeGeometry(7, 11, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0xc9f4fb, transparent: true, opacity: 0.14, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    mist.position.y = 30;
    plumeGroup.add(mist);
    this.root.add(plumeGroup);
    // Spray particles.
    const count = 260;
    const pos = new Float32Array(count * 3);
    const speed = new Float32Array(count);
    const radius = new Float32Array(count);
    const phase = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      speed[i] = 9 + Math.random() * 19;
      radius[i] = Math.random() * 1.6;
      phase[i] = Math.random();
      pos[i * 3] = (Math.random() - 0.5) * 1.4;
      pos[i * 3 + 1] = Math.random() * 33;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pMat = new THREE.PointsMaterial({ color: 0xdffaff, size: 0.55, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
    const points = new THREE.Points(pGeo, pMat);
    plumeGroup.add(points);
    this.jet = { group: plumeGroup, outer: plumeOuter, core: plumeCore, mist, points, data: { speed, radius, phase }, baseY: 1.1, bx, bz };
    this.addLamp(x + 8, z + 5, 0, 'geneva');
    this.addLamp(x - 8, z - 3, 0, 'swiss');
    this.addBench(x + 5.2, z + 6, 0.4);
    // Pier entrance sign at the shoreline.
    const pSign = makeSign('JETÉE DU JET D’EAU', { planeWidth: 4.0, height: 190, fontSize: 76, accent: '#48c5e8' });
    pSign.position.set(53.5, 3.2, 27.0);
    pSign.rotation.y = Math.PI;
    this.root.add(pSign);
  }

  _landmarkJardin() {
    const lm = LANDMARK_BY_ID.jardin;
    this._cobblePatch(lm.position.x, lm.position.z, 30, 12, 0.083);
    this.plaza(lm.position.x, lm.position.z, 30, 14, 0.9);
    // The park lawn.
    this._lawn(41, 34, 30, 23, 0.075);
    this._path([[27, 23], [35, 28], [44, 34], [54, 42]], 2.4);
    this._path([[47, 22], [44, 33], [45, 45]], 1.6);
    // Entrance gate.
    for (const gx of [39.4, 44.2]) {
      addBox(this.root, 1.0, 2.5, 1.0, gx, 1.25, 25.5, 0xd1c5af, { castShadow: true });
      this.addStud(gx, 2.55, 25.5, 0.28, 0xd1c5af);
    }
    const gardenSign = makeSign('JARDIN ANGLAIS', { planeWidth: 4.6, height: 190, fontSize: 82, accent: '#4fbd71' });
    gardenSign.position.set(41.8, 2.0, 25.2);
    gardenSign.rotation.y = Math.PI;
    this.root.add(gardenSign);
    // Flower clock.
    const fx = 44, fz = 34;
    const clockBed = new THREE.Mesh(new THREE.CylinderGeometry(7.6, 7.9, 0.55, 32), plastic(0x4c8547, { roughness: 0.7 }));
    clockBed.position.set(fx, 0.32, fz);
    clockBed.castShadow = true; clockBed.receiveShadow = true;
    this.root.add(clockBed);
    const clockCanvas = document.createElement('canvas');
    clockCanvas.width = clockCanvas.height = 1024;
    const cc = clockCanvas.getContext('2d');
    cc.translate(512, 512);
    const petals = ['#e95547', '#f2bb32', '#ec7e9e', '#7f62b5', '#4ca7d3', '#ef8b38', '#70b45b', '#f2df64'];
    for (let i = 0; i < 24; i++) {
      cc.beginPath();
      cc.moveTo(0, 0);
      cc.arc(0, 0, 480, (i / 24) * Math.PI * 2, ((i + 1) / 24) * Math.PI * 2);
      cc.closePath();
      cc.fillStyle = petals[i % petals.length];
      cc.fill();
    }
    cc.beginPath(); cc.arc(0, 0, 365, 0, Math.PI * 2); cc.fillStyle = '#f7f0dc'; cc.fill();
    cc.strokeStyle = '#38484c'; cc.lineWidth = 10; cc.stroke();
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * Math.PI * 2;
      const r1 = i % 5 === 0 ? 276 : 306;
      cc.beginPath(); cc.moveTo(Math.cos(a) * r1, Math.sin(a) * r1); cc.lineTo(Math.cos(a) * 334, Math.sin(a) * 334);
      cc.strokeStyle = i % 5 === 0 ? '#2e4145' : '#7c8c8c'; cc.lineWidth = i % 5 === 0 ? 8 : 4; cc.stroke();
    }
    cc.fillStyle = '#34484a'; cc.font = '700 66px "Nunito Sans", sans-serif'; cc.textAlign = 'center'; cc.textBaseline = 'middle';
    for (const [n, a] of [['12', -Math.PI / 2], ['3', 0], ['6', Math.PI / 2], ['9', Math.PI]]) {
      cc.fillText(n, Math.cos(a) * 246, Math.sin(a) * 246);
    }
    cc.font = '700 34px "Nunito Sans", sans-serif'; cc.fillStyle = '#73817f'; cc.fillText('GENÈVE', 0, 160);
    const clockTex = new THREE.CanvasTexture(clockCanvas); clockTex.colorSpace = THREE.SRGBColorSpace; clockTex.anisotropy = 8;
    const face = new THREE.Mesh(new THREE.CircleGeometry(7.1, 64), new THREE.MeshStandardMaterial({ map: clockTex, roughness: 0.55 }));
    face.rotation.x = -Math.PI / 2;
    face.position.set(fx, 0.615, fz);
    face.receiveShadow = true;
    this.root.add(face);
    const minuteHand = new THREE.Group(); minuteHand.userData.dynamic = true; minuteHand.position.set(fx, 0.66, fz);
    addBox(minuteHand, 0.22, 0.08, 3.3, 0, 0, -1.4, 0x223235, { castShadow: false });
    this.root.add(minuteHand);
    const hourHand = new THREE.Group(); hourHand.userData.dynamic = true; hourHand.position.set(fx, 0.68, fz);
    addBox(hourHand, 0.26, 0.1, 2.2, 0, 0, -0.9, 0x223235, { castShadow: false });
    this.root.add(hourHand);
    addCylinder(this.root, 0.35, 0.35, 0.22, fx, 0.68, fz, 0xffd24a, { segments: 12 });
    this.clockHands.push({ minute: minuteHand, hour: hourHand });
    this.circleObstacle(fx, fz, 7.9, 'flower clock');
    // Fountain and kiosk.
    // A small flower island replaces the old central fountain.
    const flowerIsland = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.8, 0.45, 18), this.materials.stone);
    flowerIsland.position.set(20.5, 0.3, 32.5); flowerIsland.receiveShadow = true; flowerIsland.castShadow = true; this.root.add(flowerIsland);
    for (let i = 0; i < 9; i++) {
      const a = i / 9 * Math.PI * 2;
      addCylinder(this.root, 0.24, 0.24, 0.4, 20.5 + Math.cos(a) * 2.2, 0.8, 32.5 + Math.sin(a) * 2.2, [0xe85757, 0xf2c63e, 0xe180a6][i % 3], { segments: 6, castShadow: false });
    }
    const kiosk = new THREE.Group();
    addBox(kiosk, 5, 3.1, 4.2, 0, 1.6, 0, 0xf1c652, { castShadow: true });
    addBox(kiosk, 5.8, 0.35, 5, 0, 3.3, 0, 0xe36f55, { castShadow: true });
    addBox(kiosk, 3, 1.2, 0.2, 0, 2.1, 2.16, 0x2d525c, { castShadow: false });
    kiosk.position.set(59.5, 0.12, 38.5);
    kiosk.rotation.y = -0.48;
    this.root.add(kiosk);
    this.obstacle(59.5, 38.5, 5.8, 5.2, 'ice cream kiosk');
    const icesign = makeSign('GLACES', { planeWidth: 2.2, height: 180, fontSize: 95, accent: '#e36f55', bg: 'rgba(18,42,50,.92)' });
    icesign.position.set(59.5, 3.7, 36.5);
    icesign.rotation.y = Math.PI - 0.48;
    this.root.add(icesign);
    // English garden details.
    for (const [tx, tz, s] of [[25, 42, 1.15], [31, 44, 0.85], [52, 43, 1.2], [56, 28, 0.9], [37, 25.5, 0.75]]) this.addTree(tx, tz, s, 'round', true);
    this.addBench(38, 27.6, Math.PI);
    this.addBench(48, 42.2, 0.2);
    for (const [bx, bz] of [[30, 27.8], [34, 27.8], [39, 27.8], [46, 27.8]]) {
      addBox(this.root, 1.8, 0.45, 1.2, bx, 0.32, bz, 0x8d714c, { castShadow: true });
      const flowerColors = [0xe75454, 0xf3c742, 0xe884ae, 0x8074c4];
      for (let i = 0; i < 4; i++) addCylinder(this.root, 0.18, 0.18, 0.35, bx - 0.6 + i * 0.4, 0.69, bz + (i % 2 ? 0.18 : -0.18), flowerColors[i], { segments: 7, castShadow: false });
    }
    this.addLamp(20, 27, 0, 'geneva');
    this.addLamp(57.5, 25, 0, 'geneva');
    // A swan on the lake nearby.
    const swan = new THREE.Group();
    addBox(swan, 2.5, 0.7, 1.4, 0, 0, 0, 0xf3f0e3, { castShadow: true });
    addCylinder(swan, 0.35, 0.55, 2.6, 0.9, 1.1, 0, 0xf3f0e3, { rotZ: -0.5, segments: 8 });
    const beak = addBox(swan, 0.7, 0.18, 0.3, 1.55, 2.0, 0, 0xe4a22c, { castShadow: false });
    swan.position.set(61, 0.4, 7);
    swan.rotation.y = -0.8;
    this.root.add(swan);
  }

  _landmarkBelAir() {
    const lm = LANDMARK_BY_ID.belair;
    this._cobblePatch(-39, 19, 27, 19, 0.085);
    this.plaza(-39, 19, 30, 22, 0.9);
    // The square keeps its open centre for taxis, with the clock and café as anchors.
    // Street clock.
    const clockPost = new THREE.Group();
    addCylinder(clockPost, 0.25, 0.35, 4.7, 0, 2.35, 0, 0x264b4d, { segments: 8 });
    addCylinder(clockPost, 1.2, 1.2, 0.5, 0, 4.7, 0, 0x264b4d, { rotX: Math.PI / 2, segments: 16 });
    addCylinder(clockPost, 0.94, 0.94, 0.54, 0, 4.7, 0.01, 0xfff9e9, { rotX: Math.PI / 2, segments: 16 });
    addBox(clockPost, 0.1, 0.9, 0.1, 0, 4.9, 0.32, 0x27201e, { castShadow: false });
    addBox(clockPost, 0.6, 0.1, 0.1, 0.24, 4.7, 0.32, 0x27201e, { castShadow: false });
    clockPost.position.set(-27.2, 0.12, 21.5);
    this.root.add(clockPost);
    this.circleObstacle(-27.2, 21.5, 0.7, 'clock');
    // Café terrace furniture leaves the road clear.
    for (const [tx, tz] of [[-44, 28.2], [-40.5, 29.5], [-46.5, 31]]) {
      addCylinder(this.root, 1.1, 1.1, 0.14, tx, 1.2, tz, 0xf2e9d6, { segments: 12 });
      addCylinder(this.root, 0.1, 0.12, 1.2, tx, 0.6, tz, 0x373f41, { segments: 8 });
      const umbrella = new THREE.Mesh(new THREE.ConeGeometry(2.2, 1.0, 8), plastic(0xd45a4b));
      umbrella.position.set(tx, 3.25, tz); umbrella.castShadow = true; this.root.add(umbrella);
      addCylinder(this.root, 0.04, 0.05, 2.1, tx, 2.15, tz, 0x8d8b7f, { segments: 5 });
    }
    // Corner department store, north side.
    addBox(this.root, 16, 11, 10, -49, 5.5, 9.5, 0xb9c2b5, { castShadow: true });
    addBox(this.root, 17, 0.7, 11, -49, 11.3, 9.5, 0x596b6d, { castShadow: true });
    for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++) this.addWindow(-56 + i * 3.3, 2.3 + j * 3.1, 14.58, 1.8, 1.9, 0, false);
    const storeSign = makeSign('BEL-AIR', { planeWidth: 5.5, height: 180, fontSize: 100, accent: '#e8913a', bg: 'rgba(17,35,46,.94)' });
    storeSign.position.set(-49, 9.8, 14.7);
    this.root.add(storeSign);
    this.obstacle(-49, 9.5, 17, 11, 'department store');
    for (const [tx, tz, s] of [[-26.5, 12, 1.0], [-27, 27.5, 0.9]]) this.addTree(tx, tz, s, 'round', true);
    this.addLamp(-29.5, 17.3, 0, 'geneva');
    this.addLamp(-55.5, 16.5, 0, 'swiss');
    // Classic Swiss clock + "Place Bel-Air" sign.
    const plazaSign = makeSign('PLACE BEL-AIR', { planeWidth: 7, height: 180, fontSize: 88, accent: '#e8913a', bg: 'rgba(12,31,42,.95)' });
    plazaSign.position.set(-31.6, 2.3, 17.9);
    plazaSign.rotation.y = Math.PI;
    this.root.add(plazaSign);
  }

  _landmarkOldTown() {
    const lm = LANDMARK_BY_ID.oldtown;
    this._cobblePatch(-18, 46, 26, 19, 0.09);
    this.plaza(-18, 46, 29, 23, 0.9);
    // St. Pierre cathedral — green spire above old stone.
    const cx = 3.5, cz = 55;
    addBox(this.root, 13, 13, 24, cx, 6.5, cz, 0xb9b0a0, { castShadow: true });
    addBox(this.root, 14, 1, 25, cx, 13.1, cz, 0x68737a, { castShadow: true });
    addBox(this.root, 8, 17, 9, cx, 8.5, cz - 8, 0xb0a796, { castShadow: true });
    addBox(this.root, 5.5, 9, 5.5, cx, 21, cz - 7, 0xa8a08f, { castShadow: true });
    const spire = new THREE.Mesh(new THREE.ConeGeometry(3.4, 14.5, 8), plastic(PALETTE.copper, { roughness: 0.58 }));
    spire.position.set(cx, 33, cz - 7); spire.castShadow = true; this.root.add(spire);
    addCylinder(this.root, 0.1, 0.1, 2.3, cx, 41.2, cz - 7, 0xebc451, { segments: 6, castShadow: false });
    for (const side of [-1, 1]) {
      addBox(this.root, 5, 14, 5, cx + side * 7, 7, cz - 8, 0xb2aa9b, { castShadow: true });
      addBox(this.root, 5.6, 0.7, 5.6, cx + side * 7, 14.2, cz - 8, 0x69737a, { castShadow: true });
      const smallSpire = new THREE.Mesh(new THREE.ConeGeometry(3.2, 6.5, 8), plastic(PALETTE.copper, { roughness: 0.55 }));
      smallSpire.position.set(cx + side * 7, 17.5, cz - 8); smallSpire.castShadow = true; this.root.add(smallSpire);
    }
    // Rose window + tall arched windows.
    const rose = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.1, 0.25, 24), plastic(0x2e5967, { roughness: 0.25, metalness: 0.25 }));
    rose.rotation.x = Math.PI / 2;
    rose.position.set(cx, 10.4, cz - 12.53);
    this.root.add(rose);
    const roseFrame = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.25, 6, 24), plastic(0xd2c8b3));
    roseFrame.position.set(cx, 10.4, cz - 12.65); this.root.add(roseFrame);
    for (let i = 0; i < 3; i++) {
      for (const side of [-1, 1]) this.addWindow(cx + side * (5.2 + i * 2.2), 6, cz - 12.55, 1.2, 4.2, 0, false);
    }
    this.obstacle(cx, cz, 15, 25, 'cathedral');
    // Old-town townhouses framing the square.
    this._genericBuilding({ x: -48, z: 42, w: 10, d: 12, floors: 3, wall: 0xd8c6a8, roof: 0x8b5f47, style: 'gable', collide: true });
    this._genericBuilding({ x: -8.5, z: 37.5, w: 10, d: 11, floors: 3, wall: 0xc6a682, roof: 0x6b757b, style: 'flat', collide: true });
    this._genericBuilding({ x: -9, z: 63, w: 11, d: 13, floors: 3, wall: 0xe0d2ba, roof: 0xa45c42, style: 'gable', collide: true });
    // The old-town square is kept open for the taxi ring.
    // Arcade arches along the square.
    for (let i = 0; i < 4; i++) {
      const ax = -25 + i * 4.2;
      addBox(this.root, 0.8, 5, 0.8, ax, 2.5, 18.2, 0x8f806c, { castShadow: true });
      addBox(this.root, 4.2, 0.6, 1.2, ax + 2.1, 5, 18.2, 0x8f806c, { castShadow: true });
    }
    // Flags and café tables.
    addFlag(this.root, -8, 0.1, 29, 'geneva', 0.8, 0.4);
    for (const [tx, tz] of [[-25, 39], [-22, 40.5]]) {
      addCylinder(this.root, 1.2, 1.2, 0.14, tx, 1.2, tz, 0xf2e9d6, { segments: 12 });
      addCylinder(this.root, 0.12, 0.14, 1.2, tx, 0.6, tz, 0x373f41, { segments: 8 });
      const umbrella = new THREE.Mesh(new THREE.ConeGeometry(2.5, 1.2, 8), plastic(0xcf5549));
      umbrella.position.set(tx, 3.4, tz); umbrella.castShadow = true; this.root.add(umbrella);
      addCylinder(this.root, 0.05, 0.06, 2.4, tx, 2.2, tz, 0x8d8b7f, { segments: 5 });
    }
    this.addLamp(-22.4, 36.5, 0, 'geneva');
    this.addLamp(-12.5, 47, 0, 'swiss');
    const oldSign = makeSign('VIEILLE VILLE', { planeWidth: 6, height: 170, fontSize: 84, accent: '#bb8d5f' });
    oldSign.position.set(-26, 2.2, 38.3);
    oldSign.rotation.y = Math.PI;
    this.root.add(oldSign);
  }

  _landmarkNeuve() {
    const lm = LANDMARK_BY_ID.neuve;
    this._cobblePatch(-36, 55, 27, 20, 0.085);
    this.plaza(-36, 55, 29, 23, 0.92);
    // Grand Théâtre.
    const tx = -53, tz = 59;
    addBox(this.root, 17, 9.5, 14, tx, 4.75, tz, 0xd9c9ac, { castShadow: true });
    addBox(this.root, 18, 0.8, 15, tx, 9.9, tz, 0x626c72, { castShadow: true });
    addBox(this.root, 13, 1.4, 9, tx, 10.8, tz - 1, 0x59646a, { castShadow: true });
    const pediment = new THREE.Mesh(gableGeometry(12, 2.8, 3.3), plastic(0xe4d7bf, { roughness: 0.5 }));
    pediment.position.set(tx, 10.15, tz + 5.7);
    pediment.castShadow = true; this.root.add(pediment);
    addBox(this.root, 12, 0.35, 0.35, tx, 10.4, tz + 7.1, 0xb8ab94, { castShadow: true });
    for (let i = 0; i < 6; i++) {
      addCylinder(this.root, 0.52, 0.65, 6.4, tx - 5.5 + i * 2.2, 3.2, tz + 7.4, 0xefe3cd, { segments: 10 });
      addBox(this.root, 1.2, 0.3, 1.2, tx - 5.5 + i * 2.2, 0.25, tz + 7.4, 0xb9ad97);
      addBox(this.root, 1.2, 0.3, 1.2, tx - 5.5 + i * 2.2, 6.45, tz + 7.4, 0xb9ad97);
    }
    addBox(this.root, 12.2, 0.5, 2.6, tx, 7, tz + 8, 0x5f696f, { castShadow: true });
    for (const side of [-1, 1]) {
      for (let j = 0; j < 2; j++) this.addWindow(tx + side * (7 + j * 4), 3.2 + j * 4.1, tz + 7.06, 1.8, 2.3, 0, j === 1);
    }
    this.obstacle(tx, tz, 18.5, 15, 'Grand Théâtre');
    const theatreSign = makeSign('GRAND THÉÂTRE', { planeWidth: 6.6, height: 170, fontSize: 78, accent: '#9f7ae0' });
    theatreSign.position.set(tx, 8.83, tz + 7.15);
    this.root.add(theatreSign);
    // Equestrian-ish statue.
    const sx = -39.5, sz = 61;
    addBox(this.root, 6, 0.9, 4.4, sx, 0.55, sz, 0xc7bda9, { castShadow: true });
    addBox(this.root, 4.6, 1.0, 2, sx, 1.3, sz, 0xa69d8a, { castShadow: true });
    addBox(this.root, 1.4, 2.5, 1.2, sx + 0.4, 2.8, sz, 0x7e7d72, { castShadow: true });
    addCylinder(this.root, 0.42, 0.42, 0.8, sx + 0.4, 4.45, sz, 0x7e7d72, { segments: 9 });
    addBox(this.root, 2.2, 0.9, 0.8, sx + 0.8, 3.4, sz, 0x7e7d72, { castShadow: true, rotZ: 0.1 });
    this.circleObstacle(sx, sz, 3.4, 'statue');
    // Trees and benches; a little espresso kiosk.
    for (const [x, z, s] of [[-24, 58, 0.95], [-25.5, 67, 1.1], [-48.5, 48, 0.8]]) this.addTree(x, z, s, 'round', true);
    this.addBench(-26.5, 53, -0.3);
    this.addBench(-43, 51.5, Math.PI);
    const kiosk = new THREE.Group();
    addBox(kiosk, 4.2, 2.8, 3.8, 0, 1.4, 0, 0x4f8179, { castShadow: true });
    addBox(kiosk, 5, 0.35, 4.6, 0, 2.95, 0, 0xf1e0c0, { castShadow: true });
    addBox(kiosk, 2.8, 1.2, 0.2, 0, 1.6, 1.95, 0x2d4b52, { castShadow: false });
    kiosk.position.set(-22.5, 0.12, 59.5);
    this.root.add(kiosk);
    this.obstacle(-22.5, 59.5, 5, 4.6, 'kiosk');
    this.addLamp(-42, 54.5, 0, 'geneva');
    this.addLamp(-29, 55.5, 0, 'swiss');
    addFlag(this.root, -27.5, 0.1, 43.4, 'geneva', 0.7, -0.2);
    const sign = makeSign('PLACE DE NEUVE', { planeWidth: 7, height: 180, fontSize: 86, accent: '#9f7ae0' });
    sign.position.set(-41.5, 2.0, 51.5);
    sign.rotation.y = Math.PI;
    this.root.add(sign);
  }

  _landmarkBastions() {
    const lm = LANDMARK_BY_ID.bastions;
    // Park entrance and vast lawn.
    this._cobblePatch(-21, 73.5, 18, 12, 0.085);
    this.plaza(-21, 73.5, 20, 14, 0.9);
    this._lawn(-17, 89, 56, 27, 0.075);
    this._path([[-21, 77], [-17, 84], [-15, 93], [-8, 99]], 2.6);
    this._path([[-38, 84], [-22, 86], [-3, 84], [7, 79]], 2.2);
    // Entrance pillars and sign.
    for (const [px, pz] of [[-28, 74], [-14, 74]]) {
      addBox(this.root, 1.8, 5.4, 1.8, px, 2.7, pz, 0xc7bda9, { castShadow: true });
      addBox(this.root, 1.2, 1.2, 1.2, px, 5.7, pz, 0xd6ccb8, { castShadow: true });
      this.addStud(px, 6.3, pz, 0.4, 0xd6ccb8);
    }
    addBox(this.root, 15.7, 0.7, 0.8, -21, 5, 74, 0x485d58, { castShadow: true });
    const parkSign = makeSign('PARC DES BASTIONS', { planeWidth: 5.4, height: 190, fontSize: 82, accent: '#3e9f58' });
    parkSign.position.set(-21, 3.4, 74.9);
    parkSign.rotation.y = Math.PI;
    this.root.add(parkSign);
    // Reformation Wall along the south edge.
    const wx = -18, wz = 100;
    addBox(this.root, 34, 6.4, 2.4, wx, 3.25, wz, 0x7a7669, { castShadow: true });
    addBox(this.root, 35.2, 0.45, 3.2, wx, 6.6, wz, 0x6a665b, { castShadow: true });
    addBox(this.root, 35.2, 0.4, 3.0, wx, 0.2, wz, 0x958f7f, { castShadow: true });
    for (let i = 0; i < 5; i++) addBox(this.root, 0.8, 6.5, 2.8, wx - 15 + i * 7.5, 3.3, wz, 0x6e6a60, { castShadow: true });
    // Statues in the niches.
    for (let i = 0; i < 4; i++) {
      const stx = wx - 12 + i * 8;
      addBox(this.root, 2.7, 0.6, 1.7, stx, 0.75, wz - 2.2, 0x8b8576, { castShadow: true });
      addBox(this.root, 1.7, 3.2, 1.15, stx, 2.6, wz - 2.2, 0x908a79, { castShadow: true });
      addCylinder(this.root, 0.42, 0.45, 0.85, stx, 4.65, wz - 2.2, 0x8f8878, { segments: 8 });
      addBox(this.root, 0.45, 2.2, 0.4, stx - 1.1, 2.7, wz - 2.2, 0x8a8474, { castShadow: true, rotZ: 0.12 });
      addBox(this.root, 0.45, 2.2, 0.4, stx + 1.1, 2.7, wz - 2.2, 0x8a8474, { castShadow: true, rotZ: -0.12 });
    }
    const wallSign = makeSign('POST TENEBRAS LUX', { planeWidth: 11, height: 170, fontSize: 72, color: '#e9dfcb', accent: '#d8bf83', bg: 'rgba(35,38,38,.9)' });
    wallSign.position.set(wx, 5.8, wz - 2.55);
    this.root.add(wallSign);
    this.obstacle(wx, wz, 35, 4, 'Reformation Wall');
    // Central fountain / basin.
    const fx = -17, fz = 84;
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(4.3, 4.8, 0.9, 20), this.materials.stone);
    basin.position.set(fx, 0.4, fz); basin.castShadow = true; basin.receiveShadow = true; this.root.add(basin);
    addCylinder(this.root, 0.45, 0.6, 2.4, fx, 1.8, fz, 0xd4c8b2, { segments: 10 });
    const basWater = new THREE.Mesh(new THREE.CylinderGeometry(3.9, 3.9, 0.12, 22), this.waterMat);
    basWater.position.set(fx, 0.86, fz); this.root.add(basWater);
    const jet = addCylinder(this.root, 0.06, 0.18, 2.2, fx, 3.9, fz, 0xcdecf1, { segments: 6, castShadow: false });
    jet.material = new THREE.MeshBasicMaterial({ color: 0xd9f7f7, transparent: true, opacity: 0.55 });
    this.circleObstacle(fx, fz, 4.8, 'Bastions fountain');
    // Giant chess boards.
    for (const [bx, bz] of [[-34, 80], [-6, 91]]) {
      for (let ix = 0; ix < 8; ix++) {
        for (let iz = 0; iz < 8; iz++) {
          addBox(this.root, 1.45, 0.04, 1.45, bx + (ix - 3.5) * 1.5, 0.135, bz + (iz - 3.5) * 1.5, (ix + iz) % 2 ? 0xe9dfcb : 0x48534b, { castShadow: false });
        }
      }
      for (let i = 0; i < 6; i++) addCylinder(this.root, 0.35, 0.5, 0.75, bx - 4 + (i % 3) * 1.6, 0.45, bz - 3 + Math.floor(i / 3) * 1.6, i % 2 ? 0xede4d2 : 0x31383a, { segments: 8 });
    }
    // Tree avenue.
    for (let i = 0; i < 6; i++) this.addTree(-40 + i * 8.5, 96, 1.05 + (i % 2) * 0.2, i % 3 === 0 ? 'cypress' : 'round', true);
    for (let i = 0; i < 4; i++) this.addTree(-39 + i * 11, 79.5, 0.9, 'round', true);
    this.addBench(-7, 87, -1.2);
    this.addBench(-30, 77, 0.6);
    this.addLamp(-34, 75.5, 0, 'geneva');
    this.addLamp(-8, 75.5, 0, 'swiss');
    // University building at the edge.
    addBox(this.root, 23, 11, 12, 12, 5.5, 91, 0xd6c8ad, { castShadow: true });
    addBox(this.root, 24, 0.8, 13, 12, 11.3, 91, 0x6a6e68, { castShadow: true });
    for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++) this.addWindow(3.5 + i * 4.3, 2.2 + j * 3.1, 84.95, 1.9, 1.8, 0, false);
    this.obstacle(12, 91, 24, 13, 'University');
    addFlag(this.root, 3, 0.1, 84.5, 'geneva', 0.75, 0.2);
  }

  // ------------------------------------------------------------------
  // City fill
  // ------------------------------------------------------------------
  _genericBuilding({ x, z, w, d, floors = 3, wall = 0xd6c6ad, roof = 0x666e70, style = 'flat', collide = true, rot = 0, balconies = false, shop = true }) {
    // Never let a fill building squat on a fare ring / pickup point.
    for (const lm of LANDMARKS) {
      const nx = clamp(lm.position.x, x - w / 2 - 1, x + w / 2 + 1);
      const nz = clamp(lm.position.z, z - d / 2 - 1, z + d / 2 + 1);
      if (Math.hypot(lm.position.x - nx, lm.position.z - nz) < 9.5) return null;
    }
    const h = 1.3 + floors * 2.0;
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.rotation.y = rot;
    addBox(group, w, h, d, 0, h / 2, 0, wall, { castShadow: true });
    addBox(group, w + 0.5, 0.38, d + 0.5, 0, h + 0.18, 0, 0x675c4f, { castShadow: true });
    // Ground floor band / storefront.
    if (shop) {
      addBox(group, w + 0.08, 0.45, d + 0.08, 0, 1.35, 0, 0x5c5448, { castShadow: false });
      const awningColor = pick(this.rng, [0xc95545, 0x3b7a70, 0xbd8a36, 0x506c8b, 0x8d5c6a]);
      addBox(group, w * 0.8, 0.15, 1.0, 0, 2.5, d / 2 + 0.5, awningColor, { castShadow: true, rotX: -0.22 });
      for (let i = 0; i < Math.max(2, Math.floor(w / 3.2)); i++) {
        addBox(group, 1.6, 1.35, 0.18, -w / 2 + 1.9 + i * 3.1 + (w % 3) * 0.2, 1.6, d / 2 + 0.04, 0x244b56, { castShadow: false });
      }
    }
    if (style === 'gable') {
      const geo = gableGeometry(w + 1, d + 1, 3.2 + floors * 0.22);
      const roofMesh = new THREE.Mesh(geo, plastic(roof, { roughness: 0.67 }));
      roofMesh.position.y = h + 0.4;
      roofMesh.castShadow = true; roofMesh.receiveShadow = true;
      group.add(roofMesh);
      addBox(group, 0.6, 1.5, 0.6, w * 0.25, h + 3.8, -d * 0.2, 0x6e6155, { castShadow: true });
    } else if (style === 'hip') {
      const roofMesh = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.62, 3.0 + floors * 0.18, 4), plastic(roof, { roughness: 0.68 }));
      roofMesh.rotation.y = Math.PI / 4;
      roofMesh.scale.z = d / w;
      roofMesh.position.y = h + 1.65;
      roofMesh.castShadow = true; group.add(roofMesh);
    } else {
      // Flat LEGO roof with studs, vents and a roof terrace.
      addBox(group, w * 0.96, 0.22, d * 0.96, 0, h + 0.45, 0, wall, { castShadow: true });
      const cols = Math.max(1, Math.floor(w / 2.1));
      const rows = Math.max(1, Math.floor(d / 2.1));
      for (let ix = 0; ix < cols; ix++) for (let iz = 0; iz < rows; iz++) {
        const lx = -w / 2 + 1.2 + ix * ((w - 2.4) / Math.max(1, cols - 1) || 0);
        const lz = -d / 2 + 1.2 + iz * ((d - 2.4) / Math.max(1, rows - 1) || 0);
        const p = transformPoint(lx, lz, rot);
        this.studs.add(x + p[0], h + 0.56, z + p[1], 0.24, 1, 0.24, wall);
      }
      addBox(group, 2.1, 1.2, 2.1, w * 0.2, h + 1.0, -d * 0.15, 0x8b867a, { castShadow: true });
      addCylinder(group, 0.35, 0.35, 1.3, -w * 0.22, h + 1.0, d * 0.12, 0x696d69, { segments: 6 });
    }
    // Windows: 2..n per row on each face.
    const cols = Math.max(1, Math.floor(w / 2.8));
    const rows = Math.max(1, floors - 1);
    for (let fl = 0; fl < rows; fl++) {
      const wy = 3.0 + fl * 2.0;
      for (let ci = 0; ci < cols; ci++) {
        const lx = -w / 2 + 1.5 + ci * ((w - 3) / Math.max(1, cols - 1) || 0);
        const lit = this.rng() > 0.82;
        const p1 = transformPoint(lx, d / 2 + 0.06, rot);
        this.addWindow(x + p1[0], wy, z + p1[1], 1.05, 1.22, rot, lit);
        const p2 = transformPoint(lx, -d / 2 - 0.06, rot);
        this.addWindow(x + p2[0], wy, z + p2[1], 1.05, 1.22, rot + Math.PI, lit);
      }
      const rowsSide = Math.max(1, Math.floor(d / 3.0));
      for (let si = 0; si < rowsSide; si++) {
        const lz = -d / 2 + 1.6 + si * ((d - 3.2) / Math.max(1, rowsSide - 1) || 0);
        const p1 = transformPoint(w / 2 + 0.06, lz, rot);
        this.addWindow(x + p1[0], wy, z + p1[1], 1.05, 1.22, rot + Math.PI / 2, false);
        const p2 = transformPoint(-w / 2 - 0.06, lz, rot);
        this.addWindow(x + p2[0], wy, z + p2[1], 1.05, 1.22, rot - Math.PI / 2, false);
      }
    }
    if (balconies) {
      for (let fl = 1; fl < floors; fl += 2) addBox(group, w * 0.8, 0.16, 0.9, 0, 3.2 + fl * 2.0, d / 2 + 0.4, 0x6f6659, { castShadow: true });
    }
    group.traverse((o) => { if (o.isMesh) { o.castShadow = o.castShadow ?? true; o.receiveShadow = true; } });
    this.root.add(group);
    if (collide) {
      const cw = Math.abs(w * Math.cos(rot)) + Math.abs(d * Math.sin(rot));
      const cd = Math.abs(w * Math.sin(rot)) + Math.abs(d * Math.cos(rot));
      this.obstacle(x, z, cw + 0.4, cd + 0.4, 'building');
    }
    return group;
  }

  _forbidden(x, z, pad = 0) {
    if (this._isWater(x, z)) return true;
    if (x < BOUNDS.minX + 8 || x > BOUNDS.maxX - 8 || z < BOUNDS.minZ + 8 || z > BOUNDS.maxZ - 8) return true;
    for (const seg of this.roadSegments) {
      if (distToSegment(x, z, seg.ax, seg.az, seg.bx, seg.bz) < seg.width / 2 + 3.3 + pad) return true;
    }
    for (const lm of LANDMARKS) {
      if (Math.hypot(x - lm.position.x, z - lm.position.z) < 16 + pad) return true;
    }
    for (const p of this.plazas) {
      if (x > p.minX - pad && x < p.maxX + pad && z > p.minZ - pad && z < p.maxZ + pad) return true;
    }
    return false;
  }

  _buildGenericCity() {
    const neighborhoods = [
      { minX: -83, maxX: -15, minZ: -77, maxZ: -12, count: 17, tall: true, color: 'old' },
      { minX: 8, maxX: 112, minZ: -120, maxZ: -67, count: 20, tall: false, color: 'paquis' },
      { minX: 7, maxX: 118, minZ: 32, maxZ: 98, count: 20, tall: false, color: 'rive' },
      { minX: -88, maxX: -37, minZ: 24, maxZ: 96, count: 13, tall: false, color: 'plainpalais' },
      { minX: -111, maxX: -42, minZ: -218, maxZ: -150, count: 9, tall: false, color: 'nations' },
      { minX: 81, maxX: 145, minZ: 42, maxZ: 100, count: 9, tall: false, color: 'rive' },
      { minX: -34, maxX: 4, minZ: 26, maxZ: 66, count: 5, tall: false, color: 'old' },
    ];
    const palettes = {
      old: [0xd9bf99, 0xc89f74, 0xe3d0ae, 0xb98c68, 0xd9b787, 0xcba982, 0x9fb3a0, 0xc98f78, 0xb6a4b3],
      paquis: [0xdcbfa0, 0xba8c69, 0xd9b88f, 0xc7a98c, 0xe4d1b1, 0xb2947d, 0x8fb2b1, 0xe0b09e],
      rive: [0xd7b689, 0xe5cba6, 0xbca184, 0xd4b48a, 0xc1926f, 0xaebaa9, 0xb1c9c1, 0xd19b85],
      plainpalais: [0xd1b28b, 0xdcc4a0, 0xc39b78, 0xb58d70, 0xd9c4a9, 0xa9bba7, 0xc69a88],
      nations: [0xd8d2c3, 0xc8c2b0, 0xe0d8c5, 0xbfb8a5, 0xbfd0c4, 0xd8bba6],
    };
    const roofs = [0x5f7079, 0xb05a3d, 0x52646a, 0x8d5a42, 0xbf6a46, 0x546565, 0x3e7e76];
    const attemptsPer = 150;
    for (const n of neighborhoods) {
      let placed = 0;
      for (let a = 0; a < attemptsPer && placed < n.count; a++) {
        const w = 7 + this.rng() * 8;
        const d = 7 + this.rng() * 7;
        const x = n.minX + w / 2 + this.rng() * Math.max(1, n.maxX - n.minX - w);
        const z = n.minZ + d / 2 + this.rng() * Math.max(1, n.maxZ - n.minZ - d);
        if (this._forbidden(x, z, 3.5)) continue;
        // Test the four corners and overlap with existing buildings.
        let ok = true;
        for (const [px, pz] of [[x - w / 2, z - d / 2], [x + w / 2, z - d / 2], [x - w / 2, z + d / 2], [x + w / 2, z + d / 2]]) {
          if (this._isWater(px, pz)) { ok = false; break; }
        }
        if (!ok) continue;
        for (const o of this.obstacles) {
          if (o.label !== 'building' && o.label !== 'cathedral' && o.label !== 'Grand Théâtre' && o.label !== 'department store' && o.label !== 'city hall' && o.label !== 'café') continue;
          if (x + w / 2 > o.minX - 2.4 && x - w / 2 < o.maxX + 2.4 && z + d / 2 > o.minZ - 2.4 && z - d / 2 < o.maxZ + 2.4) { ok = false; break; }
        }
        if (!ok) continue;
        const floors = n.tall ? 3 + Math.floor(this.rng() * 3) : 2 + Math.floor(this.rng() * 3);
        const style = this.rng() > 0.68 ? (this.rng() > 0.5 ? 'gable' : 'hip') : 'flat';
        this._genericBuilding({
          x, z, w, d, floors,
          wall: pick(this.rng, palettes[n.color]), roof: pick(this.rng, roofs),
          style, rot: this.rng() > 0.7 ? (this.rng() - 0.5) * 0.11 : 0,
          balconies: this.rng() > 0.72,
        });
        placed++;
      }
    }
    // A few signature buildings on the north shore / in the lake view.
    this._genericBuilding({ x: -91, z: -58, w: 16, d: 12, floors: 4, wall: 0xd2bda0, roof: 0x72594a, style: 'gable' });
    this._genericBuilding({ x: 114, z: -46, w: 16, d: 13, floors: 3, wall: 0xccb58f, roof: 0x5b676c, style: 'hip' });
    this._genericBuilding({ x: 93, z: 66, w: 18, d: 14, floors: 4, wall: 0xded0b6, roof: 0x6b6d68, style: 'flat' });
    // Small utilitarian buildings by the Nations loop.
    this._genericBuilding({ x: -31, z: -195, w: 14, d: 10, floors: 2, wall: 0xcac5b7, roof: 0x666c6b, style: 'flat' });
  }

  _buildParksAndTrees() {
    // Parc des Cropettes / little green squares and quay trees.
    this._lawn(-83, -47, 16, 12, 0.075);
    this._lawn(90, -30, 17, 9, 0.075);
    this._lawn(-80, 50, 18, 26, 0.075);
    const treeSpots = [
      [-83, -46, 1.2], [-78, -50, 0.9], [89, -29, 1.1], [94, -31, 0.85],
      [-79, 44, 1.0], [-82, 53, 1.2], [-77, 60, 0.9], [-88, 58, 1.1],
      [102, 50, 1.2], [110, 52, 0.9], [16, 46, 0.85], [21, 49, 1.1],
      [-63, -54, 0.9], [-68, -56, 1.0], [36, -62, 0.8], [47, -62, 0.9],
      [60, -64, 0.8], [82, -64, 1.0], [102, -63, 0.9], [114, -60, 0.8],
      [-95, 34, 1.1], [-89, 36, 0.9], [116, 36, 1.0], [124, 27, 0.8],
      [25, 61, 1.0], [21, 68, 0.9], [61, 57, 1.1], [66, 64, 0.9],
    ];
    for (const [x, z, s] of treeSpots) {
      if (!this._isWater(x, z)) this.addTree(x, z, s, this.rng() > 0.82 ? 'cypress' : 'round', true);
    }
    // Fill leftover green pockets with LEGO trees.
    let extraTrees = 0;
    for (let tries = 0; tries < 180 && extraTrees < 20; tries++) {
      const x = BOUNDS.minX + 14 + this.rng() * (BOUNDS.maxX - BOUNDS.minX - 28);
      const z = BOUNDS.minZ + 14 + this.rng() * (BOUNDS.maxZ - BOUNDS.minZ - 28);
      const scale = 0.7 + this.rng() * 0.5;
      if (this.addTree(x, z, scale, this.rng() > 0.85 ? 'cypress' : 'round', true)) extraTrees++;
    }
    // A little green on the north side of the station.
    this._lawn(-17, -76, 16, 10, 0.075);
    for (let i = 0; i < 3; i++) this.addTree(-22 + i * 6, -76, 1.0, 'round', true);
    // Flower beds in the English Garden and Parc des Bastions.
    const flowerColors = [0xe75454, 0xf3c742, 0xe884ae, 0x8074c4, 0xf0f0e4];
    for (let i = 0; i < 9; i++) {
      const x = -32 + i * 3.0;
      addCylinder(this.root, 0.7, 0.8, 0.4, x, 0.25, 73.1, 0x6e543d, { segments: 8 });
      for (let j = 0; j < 5; j++) addCylinder(this.root, 0.17, 0.17, 0.3, x - 0.4 + (j % 3) * 0.4, 0.55, 73.1 + (j % 2) * 0.3, flowerColors[(i + j) % flowerColors.length], { segments: 6, castShadow: false });
    }
  }

  _buildTrafficAndProps() {
    // A parked taxi? No — the player is the taxi. Here are some civilian cars.
    // Moving cars provide the traffic; the kerbs stay clear for stopping fares.
    for (const route of TRAFFIC_ROUTES) {
      const color = pick(this.rng, [0xc8bda6, 0x497d89, 0xa34f45, 0x6d8c96, 0x6f8063, 0xd9d4c5]);
      const car = bakeGroup(this._civilianCar(color));
      car.position.y = 0.12;
      car.userData.dynamic = true;
      this.root.add(car);
      this.traffic.push({ route, mesh: car, progress: route.offset * this._routeLength(route.points), speed: route.speed, d: 0 });
    }
    // Boats on the lake.
    for (const [x, z, rot, color] of [[93, 5, 0.6, 0xf3eddc], [132, -12, -0.3, 0xe5e0d0], [43, -9, 1.1, 0xf5eee0]]) {
      const boat = bakeGroup(createBoat(color));
      boat.position.set(x, 0.15, z);
      boat.rotation.y = rot;
      boat.userData.dynamic = true;
      this.root.add(boat);
      this.boats.push({ mesh: boat, baseY: 0.15, phase: this.rng() * Math.PI * 2 });
    }
    // A handful of tiny citizens.
    const people = [
      { x: 10, z: 12, shirt: 0x2f7e78, pants: 0x2d3545, hair: 0x4b2d1d, cap: false },
      { x: 36, z: 26, shirt: 0xd87942, pants: 0x46506b, hair: 0x2e2117, cap: true },
      { x: -30, z: 18, shirt: 0x8e5e9e, pants: 0x34455e, hair: 0x59371c, cap: false },
      { x: -27, z: 74.5, shirt: 0x3b6d9e, pants: 0x2a3540, hair: 0x2a1b13, cap: true },
      { x: 54, z: -57.5, shirt: 0xcc5746, pants: 0x344c56, hair: 0x8f5f34, cap: false },
      { x: -35.5, z: -40.5, shirt: 0x5b8b5c, pants: 0x3a465a, hair: 0x4b2d1d, cap: false },
      { x: -49.5, z: -40.2, shirt: 0xb6674f, pants: 0x2b3d52, hair: 0x2b211b, cap: true },
      { x: 21.5, z: 22.5, shirt: 0x347abb, pants: 0x39485a, hair: 0x8b5b34, cap: false },
    ];
    for (const p of people) {
      const fig = createMinifig({ ...p, waving: false, suitcase: false, scale: 0.95 });
      fig.position.set(p.x, 0.14, p.z);
      fig.rotation.y = this.rng() * Math.PI * 2;
      this.root.add(fig);
    }
    // Flower planters along the quays.
    for (let i = 0; i < 7; i++) {
      const x = 2 + i * 7.5;
      addBox(this.root, 2.8, 0.8, 1.5, x, 0.52, -64.9, 0x927553, { castShadow: true });
      addBox(this.root, 2.5, 0.25, 1.2, x, 1.02, -64.9, 0x5a8b4c, { castShadow: false });
      for (let j = 0; j < 4; j++) addCylinder(this.root, 0.17, 0.17, 0.28, x - 0.7 + j * 0.48, 1.2, -64.9, [0xe85757, 0xf2c63e, 0xe180a6][j % 3], { segments: 6, castShadow: false });
    }
    // A couple of signposts.
    const welcome = makeSign('BIENVENUE À GENÈVE', { planeWidth: 4.2, height: 190, fontSize: 76, accent: '#ffd21f', bg: 'rgba(9,27,39,.93)' });
    welcome.position.set(23, 2.2, -53.5);
    welcome.rotation.y = -Math.PI / 2;
    this.root.add(welcome);
    // Tram parked near Bel-Air for a bit of city theatre.
    const tram = new THREE.Group();
    addBox(tram, 27, 3.1, 3.8, 0, 1.8, 0, 0xe4e0d1, { castShadow: true });
    addBox(tram, 27.2, 0.5, 4.0, 0, 3.55, 0, 0xd44c3d, { castShadow: true });
    addBox(tram, 27.2, 0.3, 3.9, 0, 0.78, 0, 0xd44c3d, { castShadow: true });
    for (let i = 0; i < 9; i++) {
      addBox(tram, 1.6, 1.3, 3.9, -10.5 + i * 2.6, 2.35, 0, 0x294b58, { castShadow: false });
    }
    addBox(tram, 0.3, 1.7, 3.2, 13.5, 2.3, 0, 0x294b58, { castShadow: false });
    tram.position.set(-79, 0.12, 18.8);
    tram.rotation.y = 0.03;
    this.root.add(tram);
    this.obstacle(-79, 18.8, 28, 5, 'tram');
    // Street lamps along the north quay and south quay.
    for (let i = 0; i < 8; i++) this.addLamp(-4 + i * 14.5, -66.2, Math.PI, i % 3 === 0 ? 'geneva' : null);
    for (let i = 0; i < 7; i++) this.addLamp(8 + i * 16.5, 23.3, 0, i % 2 ? null : 'swiss');
    for (let i = 0; i < 5; i++) this.addLamp(-84 + i * 10.5, -33.5, 0, null);
  }

  _buildPromenades() {
    const railColor = 0xe2d7c3;
    const postColor = 0xb9ad97;
    const railLine = (points, skip = 0) => {
      for (let i = 0; i < points.length - 1; i++) {
        const [ax, az] = points[i];
        const [bx, bz] = points[i + 1];
        const dx = bx - ax, dz = bz - az;
        const len = Math.hypot(dx, dz);
        if (len < 1) continue;
        const angle = Math.atan2(dx, dz);
        const cx = (ax + bx) / 2, cz = (az + bz) / 2;
        addBox(this.root, 0.16, 0.13, len, cx, 0.9, cz, railColor, { rotY: angle, castShadow: true });
        addBox(this.root, 0.28, 0.16, len, cx, 0.74, cz, 0xd7ccb8, { rotY: angle, castShadow: true });
        const count = Math.max(1, Math.floor(len / 4.1));
        for (let j = 1; j <= count; j++) {
          if (skip && j % skip === 0) continue;
          const t = j / (count + 1);
          addBox(this.root, 0.28, 0.92, 0.28, ax + dx * t, 0.46, az + dz * t, postColor, { castShadow: true });
        }
      }
    };
    // Lake promenade, interrupted at the two piers and the bridge.
    railLine([[4, -48.8], [38, -50.8], [56, -51.8]]);
    railLine([[75, -52.2], [105, -53.2], [136, -54.2]], 3);
    railLine([[19, 10.2], [32, 9.4], [44, 13.2]]);
    railLine([[53, 18.2], [68, 26.8]], 2);
    // River quay railing along the north bank.
    railLine([[-9, 0.8], [-36, 5.2], [-65, 9.5]], 4);
    // Potted flowers + benches along the waterfront.
    for (const [x, z, c, rot] of [
      [8, -66.4, 0xc94f48, 0], [24, -66.8, 0xe1a13b, 0], [43, -67.2, 0xd7829a, 0], [81, -67, 0xd76550, 0],
      [45, 21.5, 0xe1a13b, 0.2], [62, 27.6, 0xd7829a, -0.3],
    ]) {
      addBox(this.root, 2.4, 0.65, 1.15, x, 0.45, z, 0x8e6f4f, { rotY: rot, castShadow: true });
      addBox(this.root, 2.15, 0.2, 0.95, x, 0.83, z, 0x4e7a42, { rotY: rot, castShadow: false });
      for (let i = 0; i < 4; i++) addCylinder(this.root, 0.19, 0.2, 0.35, x - 0.72 + i * 0.48, 0.98, z + (i % 2 ? 0.2 : -0.2), c, { segments: 6, castShadow: false });
    }
    this.addBench(52, -62.4, 0.2);
    this.addBench(90, -63.8, 0.3);
    this.addBench(16, 23.2, -0.3);
    this.addBench(66, 31, 0.8);
    // A row of little trees on the town side of the north quay.
    for (let i = 0; i < 6; i++) this.addTree(-1 + i * 17, -67.5, 0.82 + (i % 2) * 0.16, 'round', true);
    // Lake edge greenery near the English Garden.
    for (const [x, z, s] of [[14, 24, 0.7], [23, 28, 0.8], [61, 42, 0.9], [69, 41, 0.7]]) {
      if (!this._isWater(x, z)) this.addTree(x, z, s, 'round', true);
    }
  }

  _routeLength(points) {
    let sum = 0;
    for (let i = 0; i < points.length - 1; i++) sum += Math.hypot(points[i + 1][0] - points[i][0], points[i + 1][1] - points[i][1]);
    return sum;
  }

  _civilianCar(color) {
    const group = new THREE.Group();
    addBox(group, 2.7, 0.78, 5.1, 0, 0.72, 0, color, { castShadow: true });
    addBox(group, 2.4, 0.72, 2.7, 0, 1.35, -0.25, 0xd4ccb9, { castShadow: true });
    addBox(group, 2.42, 0.62, 2.5, 0, 1.4, -0.25, 0x2d505e, { castShadow: false });
    addBox(group, 2.5, 0.16, 2.8, 0, 1.75, -0.25, color, { castShadow: true });
    for (const [x, z] of [[-1.22, -1.55], [1.22, -1.55], [-1.22, 1.55], [1.22, 1.55]]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.34, 12), plastic(PALETTE.tire));
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.48, z);
      wheel.castShadow = true;
      group.add(wheel);
    }
    for (const x of [-0.85, 0.85]) addBox(group, 0.45, 0.22, 0.08, x, 0.92, -2.58, 0xfff0c0, { castShadow: false });
    for (const x of [-0.85, 0.85]) addBox(group, 0.45, 0.2, 0.08, x, 0.92, 2.58, 0xd4493f, { castShadow: false });
    return group;
  }

  _buildRamps() {
    for (const r of RAMPS) {
      const g = new THREE.Group();
      g.position.set(r.x, 0.1, r.z);
      g.rotation.y = r.heading;
      const board = addBox(g, r.width, 0.28, 7.2, 0, 0.48, 0, 0xd6a91d, { castShadow: true });
      board.rotation.x = -0.24;
      for (let i = 0; i < 5; i++) {
        const stripe = addBox(g, r.width * 0.9, 0.03, 0.55, 0, 0.64 + i * 0.13, -2.5 + i * 1.2, i % 2 ? 0x20272a : 0xffd21f, { castShadow: false });
        stripe.rotation.x = -0.24;
      }
      for (const sx of [-1, 1]) {
        const rail = addBox(g, 0.24, 0.35, 7.2, sx * (r.width / 2 - 0.12), 0.74, 0, 0x3a4141, { castShadow: true });
        rail.rotation.x = -0.24;
      }
      const arrow = makeSign('▲  JUMP', { planeWidth: 4.2, height: 160, fontSize: 72, accent: '#ffd21f', bg: 'rgba(10,27,38,.85)' });
      arrow.position.set(0, 3.2, 4.8);
      arrow.rotation.y = Math.PI;
      g.add(arrow);
      this.root.add(g);
    }
  }

  _buildCollectibles() {
    const spots = [
      [-27, -29.5], [-32, -31.4], [-37.5, -33.4],
      [5.8, -10], [5.8, -4], [5.8, 4], [5.8, 10.5],
      [12, 19], [20, 20], [28, 20], [38, 21.5], [46, 23.5],
      [-42, 19], [-31, 19], [-23.5, 20],
      [-18, 36], [-24, 42], [-30, 47],
      [-48, -84], [-51, -100], [-54, -120], [-58, -145], [-64, -170],
      [12, -57], [26, -58.5], [42, -59.5], [56, -60],
      [26, 23.5], [33, 24],
      [-35, 49], [-31, 60], [-25, 67], [-21, 73],
      [47, 18], [53, 8], [58, -4], [60.5, -12],
    ];
    const base = new THREE.CylinderGeometry(0.67, 0.67, 0.2, 18);
    base.translate(0, 0.1, 0);
    const top = new THREE.CylinderGeometry(0.34, 0.34, 0.18, 14);
    top.translate(0, 0.29, 0);
    const geo = mergeGeometries([base, top], false);
    base.dispose(); top.dispose();
    const mat = new THREE.MeshStandardMaterial({
      color: 0xf5bd1c, emissive: 0x4d2f00, emissiveIntensity: 0.28,
      metalness: 0.42, roughness: 0.28,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, spots.length);
    mesh.castShadow = true;
    mesh.frustumCulled = false;
    this.root.add(mesh);
    this.collectibles = spots.map(([x, z], i) => ({
      x, z, baseY: 1.15, phase: i * 0.83, active: true, index: i,
    }));
    this.collectibleMesh = mesh;
    this._updateCollectibleInstances(0);
  }

  _updateCollectibleInstances(t) {
    if (!this.collectibleMesh) return;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const p = new THREE.Vector3();
    const s = new THREE.Vector3();
    for (const c of this.collectibles) {
      q.setFromEuler(new THREE.Euler(0, t * 2.6 + c.phase, 0));
      p.set(c.x, c.baseY + (c.active ? Math.sin(t * 3 + c.phase) * 0.2 : -20), c.z);
      s.setScalar(c.active ? 1 : 0.0001);
      m.compose(p, q, s);
      this.collectibleMesh.setMatrixAt(c.index, m);
    }
    this.collectibleMesh.instanceMatrix.needsUpdate = true;
  }

  resetCollectibles() {
    for (const c of this.collectibles) c.active = true;
    this._updateCollectibleInstances(this._elapsed || 0);
  }

  _buildMarkers() {
    for (const lm of LANDMARKS) {
      const group = new THREE.Group();
      group.userData.dynamic = true;
      const ringY = lm.id === 'jet' ? 0.34 : lm.id === 'bridge' ? 0.21 : 0.2;
      group.position.set(lm.position.x, ringY, lm.position.z);
      const ringMat = new THREE.MeshBasicMaterial({ color: lm.color, transparent: true, opacity: 0.34, depthWrite: false, blending: THREE.AdditiveBlending });
      const ring = new THREE.Mesh(new THREE.TorusGeometry(7.2, 0.22, 6, 48), ringMat);
      ring.rotation.x = Math.PI / 2;
      group.add(ring);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(5.7, 0.06, 4, 48), new THREE.MeshBasicMaterial({ color: lm.color, transparent: true, opacity: 0.26, depthWrite: false, blending: THREE.AdditiveBlending }));
      ring2.rotation.x = Math.PI / 2;
      group.add(ring2);
      const disk = new THREE.Mesh(new THREE.CircleGeometry(7.0, 40), new THREE.MeshBasicMaterial({ color: lm.color, transparent: true, opacity: 0.055, depthWrite: false, side: THREE.DoubleSide }));
      disk.rotation.x = -Math.PI / 2;
      disk.position.y = -0.01;
      group.add(disk);
      const beamMat = new THREE.MeshBasicMaterial({ color: lm.color, transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.92, 42, 8, 1, true), beamMat);
      beam.position.y = 21;
      beam.visible = false;
      group.add(beam);
      const pin = new THREE.Mesh(new THREE.OctahedronGeometry(0.9, 0), new THREE.MeshBasicMaterial({ color: 0xffd21f }));
      pin.position.y = 13.5;
      pin.visible = false;
      group.add(pin);
      group.visible = false;
      this.root.add(group);
      this.markers[lm.id] = { group, ring, ring2, disk, beam, pin, label: null, active: false, mode: null };
    }
  }

  _buildLabels() {
    const labelHeights = {
      cornavin: 19.5, chair: 30, bains: 12, pont: 14, jet: 22,
      jardin: 12.5, belair: 12, oldtown: 25, neuve: 17, bastions: 17,
    };
    for (const lm of LANDMARKS) {
      const sprite = makeLabelSprite(lm);
      sprite.position.set(lm.position.x, labelHeights[lm.id] || 15, lm.position.z);
      sprite.userData.landmark = lm.id;
      this.root.add(sprite);
      this.labels.push(sprite);
      this.markers[lm.id].label = sprite;
    }
  }

  _optimizeStaticGeometry() {
    // Collapse hundreds of static bricks into a handful of material batches.
    // Moving objects are marked dynamic and stay separate.
    this.root.updateMatrixWorld(true);
    const isDynamic = (obj) => {
      let p = obj;
      while (p && p !== this.root) {
        if (p.userData?.dynamic) return true;
        p = p.parent;
      }
      return false;
    };
    const groups = new Map();
    const remove = [];
    this.root.traverse((obj) => {
      if (!obj.isMesh || obj.isInstancedMesh || obj.isSprite || obj.isPoints) return;
      if (obj.userData.isSign || isDynamic(obj)) return;
      const mat = obj.material;
      if (!mat || Array.isArray(mat) || mat.transparent) return;
      if (mat.isShaderMaterial) return;
      if (obj.geometry.morphAttributes && Object.keys(obj.geometry.morphAttributes).length) return;
      const attrs = Object.keys(obj.geometry.attributes).sort().join(',');
      const isUntexturedStandard = mat.isMeshStandardMaterial && !mat.map && !mat.alphaMap
        && mat.emissive.getHex() === 0 && !mat.vertexColors && !mat.alphaTest
        && (mat.emissiveIntensity === 0 || mat.emissiveIntensity === undefined);
      const useVertexColor = isUntexturedStandard;
      let key;
      let vertexColorMat = null;
      if (useVertexColor) {
        key = `vc|${mat.roughness.toFixed(2)}|${mat.metalness.toFixed(2)}|${mat.flatShading ? 1 : 0}|${mat.side}|${obj.castShadow ? 1 : 0}|${obj.receiveShadow ? 1 : 0}|${obj.renderOrder}|${attrs}|${obj.geometry.index ? 'i' : 'n'}`;
      } else {
        key = `mat|${mat.uuid}|${obj.castShadow ? 1 : 0}|${obj.receiveShadow ? 1 : 0}|${obj.renderOrder}|${attrs}|${obj.geometry.index ? 'i' : 'n'}`;
      }
      if (!groups.has(key)) groups.set(key, { material: useVertexColor ? null : mat, vertexColorMat: useVertexColor ? { roughness: mat.roughness, metalness: mat.metalness, flatShading: mat.flatShading, side: mat.side } : null, castShadow: obj.castShadow, receiveShadow: obj.receiveShadow, renderOrder: obj.renderOrder, geos: [], objs: [] });
      const geo = obj.geometry.clone();
      if (useVertexColor) addVertexColor(geo, mat.color);
      geo.applyMatrix4(obj.matrixWorld);
      groups.get(key).geos.push(geo);
      groups.get(key).objs.push(obj);
    });
    for (const [key, group] of groups) {
      const merged = group.geos.length === 1 ? group.geos[0] : mergeGeometries(group.geos, false);
      if (!merged) {
        group.geos.forEach((g) => g.dispose());
        continue;
      }
      remove.push(...group.objs);
      if (group.geos.length > 1) group.geos.forEach((g) => g.dispose());
      let material = group.material;
      if (group.vertexColorMat) {
        material = new THREE.MeshStandardMaterial({
          color: 0xffffff, vertexColors: true,
          roughness: group.vertexColorMat.roughness,
          metalness: group.vertexColorMat.metalness,
          flatShading: group.vertexColorMat.flatShading,
          side: group.vertexColorMat.side,
        });
      }
      const mesh = new THREE.Mesh(merged, material);
      mesh.castShadow = group.castShadow;
      mesh.receiveShadow = group.receiveShadow;
      mesh.renderOrder = group.renderOrder;
      this.root.add(mesh);
    }
    for (const obj of remove) obj.parent?.remove(obj);
  }

  _finalizeBatches() {
    this.studs.build(this.root);
    this.windowBatch.build(this.root);
    this.frameBatch.build(this.root);
    this.treeTrunk.build(this.root);
    this.treeLeaf.build(this.root);
    this._collectSigns();
  }

  // ------------------------------------------------------------------
  // Runtime
  // ------------------------------------------------------------------
  _isWater(x, z) {
    return pointInPolygon(x, z, WATER.lake) || pointInPolygon(x, z, WATER.river);
  }

  isInWater(x, z) {
    return this._isWater(x, z);
  }

  isOnBridgeOrPier(x, z) {
    for (const s of this.roadSegments) {
      if ((s.type === 'bridge' || s.type === 'pier') && distToSegment(x, z, s.ax, s.az, s.bx, s.bz) < s.width / 2 + 0.4) return true;
    }
    for (const d of this.safeDecks) if (Math.hypot(x - d.x, z - d.z) < d.r) return true;
    return false;
  }

  isOnSafeSurface(x, z) {
    if (!this._isWater(x, z)) return true;
    for (const s of this.roadSegments) {
      if (distToSegment(x, z, s.ax, s.az, s.bx, s.bz) < s.width / 2 + 0.45) return true;
    }
    for (const d of this.safeDecks) if (Math.hypot(x - d.x, z - d.z) < d.r) return true;
    return false;
  }

  surfaceHeight(x, z) {
    // The wooden pier and the Jet d'Eau deck sit above the city datum.
    if (Math.hypot(x - 60.8, z + 15.4) < 9.2) return 0.29;
    for (const s of this.roadSegments) {
      if (s.type === 'bridge' && distToSegment(x, z, s.ax, s.az, s.bx, s.bz) < s.width / 2) return 0.17;
      if (s.type === 'pier' && distToSegment(x, z, s.ax, s.az, s.bx, s.bz) < s.width / 2) return 0.15;
    }
    return 0.12;
  }

  surfaceFactor(x, z) {
    for (const s of this.roadSegments) {
      if (distToSegment(x, z, s.ax, s.az, s.bx, s.bz) < s.width / 2 + 1.2) return 1;
    }
    for (const p of this.plazas) {
      if (x > p.minX && x < p.maxX && z > p.minZ && z < p.maxZ) return p.surface;
    }
    return 0.52;
  }

  nearestLandmark(x, z) {
    let best = null, bd = Infinity;
    for (const lm of LANDMARKS) {
      const d = Math.hypot(x - lm.position.x, z - lm.position.z);
      if (d < bd) { bd = d; best = lm; }
    }
    return { landmark: best, distance: bd };
  }

  isPointInBuilding(x, z, margin = 0) {
    for (const b of this.obstacles) {
      if ((b.maxX - b.minX) * (b.maxZ - b.minZ) < 32) continue;
      if (x > b.minX - margin && x < b.maxX + margin && z > b.minZ - margin && z < b.maxZ + margin) return true;
    }
    return false;
  }

  cameraClearDistance(x0, z0, x1, z1) {
    const total = Math.hypot(x1 - x0, z1 - z0);
    if (total < 1) return total;
    const steps = Math.max(4, Math.ceil(total / 1.7));
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const x = x0 + (x1 - x0) * t;
      const z = z0 + (z1 - z0) * t;
      if (this.isPointInBuilding(x, z, 0.9)) {
        return Math.max(7.5, ((i - 1) / steps) * total - 1.6);
      }
    }
    return total;
  }

  resolveCircle(pos, radius) {
    let result = null;
    for (const b of this.obstacles) {
      const cx = clamp(pos.x, b.minX, b.maxX);
      const cz = clamp(pos.z, b.minZ, b.maxZ);
      let dx = pos.x - cx, dz = pos.z - cz;
      let d = Math.hypot(dx, dz);
      if (d < radius) {
        if (d < 0.0001) {
          // Center is inside: push toward the nearest face.
          const pushL = Math.abs(pos.x - b.minX), pushR = Math.abs(b.maxX - pos.x);
          const pushT = Math.abs(pos.z - b.minZ), pushB = Math.abs(b.maxZ - pos.z);
          const min = Math.min(pushL, pushR, pushT, pushB);
          if (min === pushL) { pos.x = b.minX - radius; dx = -1; dz = 0; }
          else if (min === pushR) { pos.x = b.maxX + radius; dx = 1; dz = 0; }
          else if (min === pushT) { pos.z = b.minZ - radius; dx = 0; dz = -1; }
          else { pos.z = b.maxZ + radius; dx = 0; dz = 1; }
          d = 0;
        } else {
          const nx = dx / d, nz = dz / d;
          pos.x = cx + nx * radius;
          pos.z = cz + nz * radius;
          result = { normal: new V2(nx, nz), label: b.label };
        }
      }
    }
    for (const c of this.circles) {
      const dx = pos.x - c.x, dz = pos.z - c.z;
      const d = Math.hypot(dx, dz);
      const minD = radius + c.r;
      if (d < minD && d > 0.0001) {
        const nx = dx / d, nz = dz / d;
        pos.x = c.x + nx * minD;
        pos.z = c.z + nz * minD;
        result = { normal: new V2(nx, nz), label: c.label };
      }
    }
    // Baseplate edges.
    if (pos.x < BOUNDS.minX + radius) { pos.x = BOUNDS.minX + radius; result = { normal: new V2(1, 0), label: 'city limits' }; }
    if (pos.x > BOUNDS.maxX - radius) { pos.x = BOUNDS.maxX - radius; result = { normal: new V2(-1, 0), label: 'city limits' }; }
    if (pos.z < BOUNDS.minZ + radius) { pos.z = BOUNDS.minZ + radius; result = { normal: new V2(0, 1), label: 'city limits' }; }
    if (pos.z > BOUNDS.maxZ - radius) { pos.z = BOUNDS.maxZ - radius; result = { normal: new V2(0, -1), label: 'city limits' }; }
    return result;
  }

  resolveTraffic(pos, radius, velocity) {
    for (const t of this.traffic) {
      const dx = pos.x - t.mesh.position.x, dz = pos.z - t.mesh.position.z;
      const d = Math.hypot(dx, dz);
      const minD = radius + 3.1;
      if (d < minD && d > 0.001) {
        const nx = dx / d, nz = dz / d;
        pos.x = t.mesh.position.x + nx * minD;
        pos.z = t.mesh.position.z + nz * minD;
        if (velocity) {
          const vd = velocity.x * nx + velocity.y * nz;
          if (vd < 0) {
            velocity.x -= nx * vd * 1.15;
            velocity.y -= nz * vd * 1.15;
            velocity.multiplyScalar(0.7);
          }
        }
        return { normal: new V2(nx, nz), label: 'traffic', speed: Math.abs(velocity?.length() || 0) };
      }
    }
    return null;
  }

  setTarget(id, mode = 'dropoff') {
    for (const lm of LANDMARKS) {
      const marker = this.markers[lm.id];
      const active = lm.id === id;
      marker.active = active;
      marker.mode = active ? mode : null;
      marker.group.visible = active;
      marker.beam.visible = active;
      marker.pin.visible = active;
      const color = active ? (mode === 'pickup' ? 0x19b8a6 : 0xffd21f) : lm.color;
      marker.ring.material.color.setHex(color);
      marker.ring2.material.color.setHex(color);
      marker.disk.material.color.setHex(color);
      marker.beam.material.color.setHex(color);
      marker.ring.material.opacity = active ? 0.9 : 0.26;
      marker.ring2.material.opacity = active ? 0.6 : 0.2;
      marker.disk.material.opacity = active ? 0.13 : 0.04;
      marker.beam.material.opacity = active ? 0.16 : 0;
      marker.pin.material.color.setHex(color);
      if (active) {
        const label = marker.label;
        label.visible = true;
      }
    }
  }

  setLabelsVisible(visible) {
    for (const l of this.labels) l.visible = visible;
  }

  updateLabels(camera, activeId, showAll = false) {
    const worldPos = new V3();
    for (const l of this.labels) {
      const id = l.userData.landmark;
      const dist = camera.position.distanceTo(l.position);
      const visible = showAll || id === activeId || dist < 68;
      l.visible = visible;
      if (visible) {
        // Keep labels a legible screen size without letting them swallow the city.
        const active = id === activeId;
        const width = clamp(dist * (active ? 0.155 : 0.115), 2.6, active ? 19 : 11);
        l.scale.set(width, width / 4.0, 1);
        l.material.opacity = active ? 1 : clamp(1 - (dist - 38) / 32, 0.28, 0.82);
        l.material.depthTest = !active;
      }
    }
  }

  _collectSigns() {
    this.signFades = [];
    const p = new V3();
    this.root.traverse((o) => {
      if (o.userData?.isSign && o.isMesh) {
        o.getWorldPosition(p);
        this.signFades.push({ mesh: o, x: p.x, z: p.z, baseY: p.y });
      }
    });
  }

  _updateSigns(camera, focus) {
    if (!this.signFades || !camera) return;
    for (const s of this.signFades) {
      const d = Math.hypot(camera.position.x - s.x, camera.position.z - s.z);
      let opacity = clamp((d - 9) / 12, 0, 1);
      if (focus) {
        const vx = focus.x - camera.position.x;
        const vz = focus.z - camera.position.z;
        const len2 = vx * vx + vz * vz;
        if (len2 > 4) {
          const t = clamp(((s.x - camera.position.x) * vx + (s.z - camera.position.z) * vz) / len2, 0, 1);
          if (t > 0.08 && t < 0.985) {
            const lx = camera.position.x + vx * t;
            const lz = camera.position.z + vz * t;
            const lineDist = Math.hypot(s.x - lx, s.z - lz);
            if (lineDist < 6.4) opacity = Math.min(opacity, clamp((lineDist - 2.1) / 4.0, 0, 1));
          }
        }
      }
      s.mesh.material.opacity = opacity;
      s.mesh.material.depthWrite = opacity > 0.9;
      s.mesh.visible = opacity > 0.025;
    }
  }

  onRamp(x, z, velocity) {
    if (velocity.length() < 12) return null;
    for (const r of RAMPS) {
      if (Math.hypot(x - r.x, z - r.z) < 3.6) return r;
    }
    return null;
  }

  update(dt, camera, focus = null) {
    this._elapsed += dt;
    const t = this._elapsed;
    this.waterMat.uniforms.time.value = t;
    this.waterMat.uniformsToUpdate?.();
    // Sun shadow follows the action.
    if (camera) {
      const target = new V3(camera.position.x, 0, camera.position.z);
      this.sun.target.position.lerp(target, 0.08);
      this.sun.position.copy(this.sun.target.position).add(new V3(58, 92, 36));
      this.sun.target.updateMatrixWorld();
    }
    this._updateSigns(camera, focus);
    // Marker pulse.
    for (const lm of LANDMARKS) {
      const m = this.markers[lm.id];
      if (m.active) {
        const s = 1 + Math.sin(t * 3.4) * 0.035;
        m.ring.scale.set(s, s, s);
        m.ring.rotation.z += dt * 0.4;
        m.pin.rotation.y += dt * 1.3;
        m.pin.position.y = 13.2 + Math.sin(t * 2.6) * 0.35;
        m.beam.material.opacity = 0.11 + Math.sin(t * 2) * 0.035;
      }
    }
    // Jet plume.
    if (this.jet) {
      const j = this.jet;
      const wobble = Math.sin(t * 4.2) * 0.025;
      j.outer.scale.x = 1 + wobble; j.outer.scale.z = 1 - wobble;
      j.core.rotation.z = Math.sin(t * 2.1) * 0.02;
      j.mist.scale.x = 1 + Math.sin(t * 3.5) * 0.06;
      const pos = j.points.geometry.attributes.position.array;
      const data = j.data;
      for (let i = 0; i < data.speed.length; i++) {
        pos[i * 3 + 1] += data.speed[i] * dt;
        if (pos[i * 3 + 1] > 36) {
          pos[i * 3 + 1] = 1;
          pos[i * 3] = (Math.random() - 0.5) * 1.2;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
        }
        const spread = pos[i * 3 + 1] * 0.055;
        pos[i * 3] += (data.radius[i] * 0.04 + Math.sin(t * 5 + i) * 0.008) * dt * 20;
        pos[i * 3 + 2] += Math.cos(t * 3.4 + i) * 0.008 * dt * 20;
        if (Math.abs(pos[i * 3]) > spread) pos[i * 3] *= 0.97;
        if (Math.abs(pos[i * 3 + 2]) > spread) pos[i * 3 + 2] *= 0.97;
      }
      j.points.geometry.attributes.position.needsUpdate = true;
    }
    // Clock hands.
    for (const c of this.clockHands) {
      const now = new Date();
      const mins = now.getMinutes() + now.getSeconds() / 60;
      const hrs = (now.getHours() % 12) + mins / 60;
      c.minute.rotation.y = -(mins / 60) * Math.PI * 2;
      c.hour.rotation.y = -(hrs / 12) * Math.PI * 2;
    }
    // Boats bob.
    for (const b of this.boats) {
      b.mesh.position.y = b.baseY + Math.sin(t * 1.4 + b.phase) * 0.06;
      b.mesh.rotation.z = Math.sin(t * 1.1 + b.phase) * 0.014;
    }
    // Clouds drift.
    for (let i = 0; i < this.clouds.length; i++) {
      this.clouds[i].position.x += dt * (0.18 + i * 0.045);
      if (this.clouds[i].position.x > 240) this.clouds[i].position.x = -170;
    }
    // Traffic.
    for (const car of this.traffic) {
      const nearPlayer = focus ? Math.hypot(car.mesh.position.x - focus.x, car.mesh.position.z - focus.z) : 99;
      car.progress += (nearPlayer < 8.5 ? car.speed * dt * 0.16 : car.speed * dt);
      const len = this._routeLength(car.route.points);
      const p = car.progress % len;
      let rem = p;
      let ix = 0;
      let segLen = 0;
      while (ix < car.route.points.length - 2) {
        const a = car.route.points[ix], b = car.route.points[ix + 1];
        segLen = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (rem <= segLen) break;
        rem -= segLen; ix++;
      }
      const a = car.route.points[ix], b = car.route.points[ix + 1];
      const seg = Math.max(0.001, Math.hypot(b[0] - a[0], b[1] - a[1]));
      const f = clamp(rem / seg, 0, 1);
      car.mesh.position.x = a[0] + (b[0] - a[0]) * f;
      car.mesh.position.z = a[1] + (b[1] - a[1]) * f;
      const heading = Math.atan2(b[0] - a[0], -(b[1] - a[1]));
      car.mesh.rotation.y = heading;
    }
    // Collectible studs bob and spin.
    this._updateCollectibleInstances(t);
    // Fluttering flags is baked into geometry; add a tiny group sway for poles not tracked.
  }

  getLandmarkDistance(id) {
    const lm = LANDMARK_BY_ID[id];
    return lm ? lm : null;
  }
}
