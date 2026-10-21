import * as THREE from "three";
import { CITY } from "./citygen.js";
import { LANDMARKS, ROADS, WATER, pointOnRoad, surfaceY } from "./geo.js";

const BRICK = 1.7;

class Builder {
  constructor() {
    this.pos = [];
    this.nrm = [];
    this.uv = [];
    this.col = [];
    this.idx = [];
  }
  box(cx, cy, cz, sx, sy, sz, rot, color) {
    const hx = sx / 2;
    const hy = sy / 2;
    const hz = sz / 2;
    const faces = [
      { n: [0, 1, 0], c: [[-hx, hy, -hz], [hx, hy, -hz], [hx, hy, hz], [-hx, hy, hz]] },
      { n: [0, -1, 0], c: [[-hx, -hy, -hz], [-hx, -hy, hz], [hx, -hy, hz], [hx, -hy, -hz]] },
      { n: [1, 0, 0], c: [[hx, -hy, -hz], [hx, hy, -hz], [hx, hy, hz], [hx, -hy, hz]] },
      { n: [-1, 0, 0], c: [[-hx, -hy, hz], [-hx, hy, hz], [-hx, hy, -hz], [-hx, -hy, -hz]] },
      { n: [0, 0, 1], c: [[hx, -hy, hz], [-hx, -hy, hz], [-hx, hy, hz], [hx, hy, hz]] },
      { n: [0, 0, -1], c: [[-hx, -hy, -hz], [hx, -hy, -hz], [hx, hy, -hz], [-hx, hy, -hz]] },
    ];
    const c = Math.cos(rot);
    const s = Math.sin(rot);
    const col = new THREE.Color(color);
    for (let f = 0; f < faces.length; f++) {
      const face = faces[f];
      const p = face.c.map((v) => [cx + v[0] * c + v[2] * s, cy + v[1], cz - v[0] * s + v[2] * c]);
      const n = [face.n[0] * c + face.n[2] * s, face.n[1], -face.n[0] * s + face.n[2] * c];
      const ax = p[1][0] - p[0][0];
      const ay = p[1][1] - p[0][1];
      const az = p[1][2] - p[0][2];
      const bx = p[2][0] - p[0][0];
      const by = p[2][1] - p[0][1];
      const bz = p[2][2] - p[0][2];
      const cr = [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
      const dot = cr[0] * n[0] + cr[1] * n[1] + cr[2] * n[2];
      const loop = dot < 0 ? [0, 3, 2, 1] : [0, 1, 2, 3];
      const width = Math.hypot(p[1][0] - p[0][0], p[1][1] - p[0][1], p[1][2] - p[0][2]);
      const height = Math.hypot(p[loop[3]][0] - p[loop[0]][0], p[loop[3]][1] - p[loop[0]][1], p[loop[3]][2] - p[loop[0]][2]) || Math.hypot(p[3][0] - p[0][0], p[3][1] - p[0][1], p[3][2] - p[0][2]);
      const uvs = [
        [0, 0],
        [width / BRICK, 0],
        [width / BRICK, height / BRICK],
        [0, height / BRICK],
      ];
      const base = this.pos.length / 3;
      for (let k = 0; k < 4; k++) {
        const vi = loop[k];
        this.pos.push(p[vi][0], p[vi][1], p[vi][2]);
        this.nrm.push(n[0], n[1], n[2]);
        this.uv.push(uvs[k][0], uvs[k][1]);
        this.col.push(col.r, col.g, col.b);
      }
      this.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
  }
  geometry() {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(this.pos, 3));
    geo.setAttribute("normal", new THREE.Float32BufferAttribute(this.nrm, 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(this.uv, 2));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(this.col, 3));
    const Count = this.pos.length / 3 > 65535 ? Uint32Array : Uint16Array;
    geo.setIndex(new THREE.BufferAttribute(new Count(this.idx), 1));
    return geo;
  }
}

function brickTexture() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 64;
  const g = c.getContext("2d");
  g.fillStyle = "#f2f2f2";
  g.fillRect(0, 0, 64, 64);
  g.fillStyle = "#cfcfcf";
  g.fillRect(0, 30, 64, 4);
  g.fillStyle = "#ffffff";
  g.fillRect(0, 34, 64, 2);
  g.fillStyle = "rgba(0,0,0,0.08)";
  g.fillRect(31, 0, 2, 30);
  g.fillRect(31, 34, 2, 30);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function studTexture(hex) {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 128;
  const g = c.getContext("2d");
  g.fillStyle = hex;
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = "rgba(255,255,255,0.22)";
  g.beginPath();
  g.arc(64, 64, 34, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "rgba(0,0,0,0.18)";
  g.lineWidth = 5;
  g.stroke();
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function textTexture(text, bg, fg) {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 128;
  const g = c.getContext("2d");
  g.fillStyle = bg;
  g.fillRect(0, 0, 512, 128);
  g.fillStyle = fg;
  g.font = "700 78px Nunito, sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(text, 256, 68);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function swissTexture() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 64;
  const g = c.getContext("2d");
  g.fillStyle = "#d10f1a";
  g.fillRect(0, 0, 64, 64);
  g.fillStyle = "#fff";
  g.fillRect(26, 8, 12, 48);
  g.fillRect(8, 26, 48, 12);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function ribbon(builder, pts, width, yAt, color) {
  if (pts.length < 2) return;
  const col = new THREE.Color(color);
  const left = [];
  const right = [];
  for (let i = 0; i < pts.length; i++) {
    let dx;
    let dz;
    if (i === 0) {
      dx = pts[1].x - pts[0].x;
      dz = pts[1].z - pts[0].z;
    } else if (i === pts.length - 1) {
      dx = pts[i].x - pts[i - 1].x;
      dz = pts[i].z - pts[i - 1].z;
    } else {
      dx = pts[i + 1].x - pts[i - 1].x;
      dz = pts[i + 1].z - pts[i - 1].z;
    }
    const len = Math.hypot(dx, dz) || 1;
    dx /= len;
    dz /= len;
    const rx = -dz;
    const rz = dx;
    const y = yAt(pts[i]);
    const hw = width / 2;
    left.push([pts[i].x - rx * hw, y, pts[i].z - rz * hw]);
    right.push([pts[i].x + rx * hw, y, pts[i].z + rz * hw]);
  }
  const base = builder.pos.length / 3;
  for (let i = 0; i < pts.length; i++) {
    builder.pos.push(left[i][0], left[i][1], left[i][2], right[i][0], right[i][1], right[i][2]);
    builder.nrm.push(0, 1, 0, 0, 1, 0);
    builder.uv.push(0, i * 0.2, 1, i * 0.2);
    builder.col.push(col.r, col.g, col.b, col.r, col.g, col.b);
  }
  for (let i = 0; i < pts.length - 1; i++) {
    const a = base + i * 2;
    builder.idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
}

function sampleRoad(road) {
  const steps = Math.max(1, Math.ceil(road.length / 12));
  const pts = [];
  const last = road.closed ? steps : steps;
  for (let i = 0; i <= last; i++) {
    const d = road.closed && i === last ? 0 : (road.length * Math.min(i, steps)) / steps;
    const p = pointOnRoad(road, d);
    pts.push(p);
  }
  return pts;
}

export function buildCity(scene) {
  const brick = brickTexture();
  const lit = new THREE.MeshStandardMaterial({
    vertexColors: true,
    map: brick,
    roughness: 0.72,
    metalness: 0.04,
  });
  const flat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.86,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });

  const blocks = new Builder();
  for (let i = 0; i < CITY.buildings.length; i++) {
    const b = CITY.buildings[i];
    blocks.box(b.x, b.y0 + b.h / 2, b.z, b.w, b.h, b.d, b.rot, b.wall);
    blocks.box(b.x, b.y0 + b.h + 0.35, b.z, b.w + 0.7, 0.7, b.d + 0.7, b.rot, b.roof);
    if (b.awning) {
      const c = Math.cos(b.rot);
      const s = Math.sin(b.rot);
      const ox = -s * -(b.d / 2 + 0.55);
      const oz = c * -(b.d / 2 + 0.55);
      // local -z is the street face: world offset of local (0,0,-1) is (sin(rot), -cos? )
      // rotY of (0,0,-1): x' = 0*c + -1*s = -s, z' = -0*s + -1*c = -c
      const fx = -Math.sin(b.rot);
      const fz = -Math.cos(b.rot);
      blocks.box(b.x + fx * (b.d / 2 + 0.45), b.y0 + 3.1, b.z + fz * (b.d / 2 + 0.45), b.w * 0.72, 0.16, 1.15, b.rot, b.awning);
    }
  }
  for (let i = 0; i < CITY.rails.length; i++) {
    const r = CITY.rails[i];
    blocks.box(r.x, r.y + 0.45, r.z, 0.45, 0.7, r.len, r.rot, "#dedad2");
  }
  const cityMesh = new THREE.Mesh(blocks.geometry(), lit);
  cityMesh.castShadow = true;
  cityMesh.receiveShadow = true;
  scene.add(cityMesh);

  const studs = [];
  for (let i = 0; i < CITY.buildings.length; i++) {
    const b = CITY.buildings[i];
    const space = 3.1;
    const cols = Math.max(0, Math.floor((b.w - 2.2) / space));
    const rows = Math.max(0, Math.floor((b.d - 2.2) / space));
    const c = Math.cos(b.rot);
    const s = Math.sin(b.rot);
    for (let ix = 0; ix < cols; ix++) {
      for (let iz = 0; iz < rows; iz++) {
        const lx = -b.w / 2 + 1.4 + ix * space + ((b.w - 2.2) % space) / 2;
        const lz = -b.d / 2 + 1.4 + iz * space;
        studs.push({
          x: b.x + lx * c + lz * s,
          y: b.y0 + b.h + 0.84,
          z: b.z - lx * s + lz * c,
          color: b.roof,
        });
      }
    }
  }
  const studGeo = new THREE.CylinderGeometry(0.55, 0.62, 0.28, 6);
  const studMat = new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.05 });
  const studMesh = new THREE.InstancedMesh(studGeo, studMat, Math.max(1, studs.length));
  const dummy = new THREE.Object3D();
  for (let i = 0; i < studs.length; i++) {
    dummy.position.set(studs[i].x, studs[i].y, studs[i].z);
    dummy.scale.setScalar(1);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    studMesh.setMatrixAt(i, dummy.matrix);
    studMesh.setColorAt(i, new THREE.Color(studs[i].color));
  }
  if (studs.length === 0) studMesh.count = 0;
  studMesh.castShadow = false;
  studMesh.receiveShadow = true;
  scene.add(studMesh);

  const windows = [];
  const glass = new THREE.Color("#9fd4ee");
  for (let i = 0; i < CITY.buildings.length; i++) {
    const b = CITY.buildings[i];
    const rowsN = Math.min(3, Math.max(1, Math.floor((b.h - 3.2) / 3.2)));
    const colsN = Math.min(3, Math.max(1, Math.floor((b.w - 1.5) / 3.2)));
    const c = Math.cos(b.rot);
    const s = Math.sin(b.rot);
    for (const face of [-1, 1]) {
      for (let row = 0; row < rowsN; row++) {
        for (let col = 0; col < colsN; col++) {
          const lx = -b.w / 2 + b.w * ((col + 1) / (colsN + 1));
          const ly = 3.2 + row * 3.1;
          const lz = face * (b.d / 2 + 0.08);
          windows.push({
            x: b.x + lx * c + lz * s,
            y: b.y0 + ly,
            z: b.z - lx * s + lz * c,
            rot: b.rot,
          });
        }
      }
    }
  }
  const winGeo = new THREE.BoxGeometry(1.35, 1.55, 0.12);
  const winMat = new THREE.MeshStandardMaterial({ color: "#b7e3f6", roughness: 0.15, metalness: 0.25, emissive: "#8ecae6", emissiveIntensity: 0.18 });
  const winMesh = new THREE.InstancedMesh(winGeo, winMat, Math.max(1, windows.length));
  for (let i = 0; i < windows.length; i++) {
    dummy.position.set(windows[i].x, windows[i].y, windows[i].z);
    dummy.rotation.set(0, windows[i].rot, 0);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    winMesh.setMatrixAt(i, dummy.matrix);
    winMesh.setColorAt(i, glass);
  }
  scene.add(winMesh);

  const roads = new Builder();
  const walks = new Builder();
  for (let i = 0; i < ROADS.length; i++) {
    const road = ROADS[i];
    const pts = sampleRoad(road);
    const yRoad = (p) => surfaceY(p.x, p.z) + 0.05;
    const yWalk = (p) => surfaceY(p.x, p.z) - 0.04;
    if (road.pier) ribbon(roads, pts, road.width, yRoad, "#c6a36a");
    else if (road.bridge) ribbon(roads, pts, road.width, yRoad, "#d5d8df");
    else {
      ribbon(walks, pts, road.width + 6.5, yWalk, "#c5c8ce");
      ribbon(roads, pts, road.width, yRoad, "#3c434c");
    }
  }
  const roadMesh = new THREE.Mesh(roads.geometry(), flat);
  roadMesh.receiveShadow = true;
  scene.add(roadMesh);
  const walkMesh = new THREE.Mesh(walks.geometry(), flat);
  walkMesh.receiveShadow = true;
  scene.add(walkMesh);

  const marks = new Builder();
  for (let i = 0; i < ROADS.length; i++) {
    const road = ROADS[i];
    if (road.width < 10 || road.pier) continue;
    for (let d = 4; d < road.length; d += 14) {
      const p = pointOnRoad(road, d);
      const len = Math.hypot(p.dx, p.dz) || 1;
      const yaw = Math.atan2(-p.dx / len, -p.dz / len);
      marks.box(p.x, surfaceY(p.x, p.z) + 0.12, p.z, 0.28, 0.04, 4.2, yaw, "#f2d23c");
    }
  }
  scene.add(new THREE.Mesh(marks.geometry(), flat));

  const shape = new THREE.Shape();
  shape.moveTo(WATER[0].x, WATER[0].z);
  for (let i = 1; i < WATER.length; i++) shape.lineTo(WATER[i].x, WATER[i].z);
  shape.closePath();
  const waterGeo = new THREE.ShapeGeometry(shape);
  waterGeo.rotateX(Math.PI / 2);
  const waterTex = studTexture("#1f78c8");
  waterTex.repeat.set(18, 18);
  const waterMat = new THREE.MeshStandardMaterial({
    color: "#1a6fbe",
    map: waterTex,
    roughness: 0.18,
    metalness: 0.08,
    transparent: true,
    opacity: 0.94,
    side: THREE.DoubleSide,
  });
  const water = new THREE.Mesh(waterGeo, waterMat);
  water.position.y = 0.08;
  water.receiveShadow = true;
  scene.add(water);

  const groundTex = studTexture("#3f8f45");
  groundTex.repeat.set(220, 220);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(9000, 9000),
    new THREE.MeshStandardMaterial({ map: groundTex, color: "#3c8a40", roughness: 0.9 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.05;
  ground.receiveShadow = true;
  scene.add(ground);

  const parks = new Builder();
  for (const id of ["bastions", "jardin"]) {
    const lm = LANDMARKS.find((l) => l.id === id);
    parks.box(lm.x, 0.2, lm.z + (id === "bastions" ? 24 : 6), id === "bastions" ? 120 : 70, 0.3, id === "bastions" ? 90 : 48, 0, "#4ea354");
  }
  const parkMesh = new THREE.Mesh(parks.geometry(), new THREE.MeshStandardMaterial({ color: "#4ea354", roughness: 0.9 }));
  parkMesh.receiveShadow = true;
  scene.add(parkMesh);

  addTrees(scene);
  addLamps(scene);
  addFlowers(scene);
  const special = addHeroes(scene);
  addMountains(scene);
  const clouds = addClouds(scene);

  return { waterTex, special, clouds };
}

function addTrees(scene) {
  const trunkGeo = new THREE.CylinderGeometry(0.28, 0.4, 1.5, 6);
  const ballGeo = new THREE.SphereGeometry(1.15, 8, 6);
  const coneGeo = new THREE.ConeGeometry(1.25, 2.4, 7);
  const trunkMat = new THREE.MeshStandardMaterial({ color: "#8a5a32", roughness: 0.8 });
  const leafMat = new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.75 });
  const n = Math.max(1, CITY.trees.length);
  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, n);
  const round = [];
  const pine = [];
  const dummy = new THREE.Object3D();
  for (let i = 0; i < CITY.trees.length; i++) {
    const t = CITY.trees[i];
    const y = surfaceY(t.x, t.z);
    dummy.position.set(t.x, y + 0.75 * t.s, t.z);
    dummy.scale.setScalar(t.s);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    trunks.setMatrixAt(i, dummy.matrix);
    (t.kind === "pine" ? pine : round).push(t);
  }
  trunks.castShadow = true;
  scene.add(trunks);
  placeCanopy(scene, round, ballGeo, leafMat, "#2f8a3a", 2.15);
  placeCanopy(scene, pine, coneGeo, leafMat, "#237344", 2.35);
}

function placeCanopy(scene, list, geo, mat, color, lift) {
  if (!list.length) return;
  const mesh = new THREE.InstancedMesh(geo, mat, list.length);
  const dummy = new THREE.Object3D();
  const col = new THREE.Color(color);
  for (let i = 0; i < list.length; i++) {
    const t = list[i];
    dummy.position.set(t.x, surfaceY(t.x, t.z) + lift * t.s, t.z);
    dummy.scale.setScalar(t.s);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    mesh.setColorAt(i, col);
  }
  mesh.castShadow = true;
  scene.add(mesh);
}

function addLamps(scene) {
  const n = Math.max(1, CITY.lamps.length);
  const pole = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.12, 0.16, 4.2, 6), new THREE.MeshStandardMaterial({ color: "#222" }), n);
  const head = new THREE.InstancedMesh(
    new THREE.BoxGeometry(0.7, 0.28, 0.4),
    new THREE.MeshStandardMaterial({ color: "#ffe38a", emissive: "#ffd35a", emissiveIntensity: 0.7 }),
    n
  );
  const dummy = new THREE.Object3D();
  for (let i = 0; i < CITY.lamps.length; i++) {
    const l = CITY.lamps[i];
    const y = surfaceY(l.x, l.z);
    dummy.position.set(l.x, y + 2.1, l.z);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    pole.setMatrixAt(i, dummy.matrix);
    dummy.position.set(l.x, y + 4.3, l.z);
    dummy.updateMatrix();
    head.setMatrixAt(i, dummy.matrix);
  }
  scene.add(pole);
  scene.add(head);
}

function addFlowers(scene) {
  const list = CITY.flowers.filter((f) => surfaceY(f.x, f.z) < 3);
  if (!list.length) return;
  const mesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.35, 0.35, 0.3, 6), new THREE.MeshStandardMaterial({ roughness: 0.6 }), list.length);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < list.length; i++) {
    dummy.position.set(list[i].x, surfaceY(list[i].x, list[i].z) + 0.2, list[i].z);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    mesh.setColorAt(i, new THREE.Color(list[i].color));
  }
  scene.add(mesh);
}

function addHeroes(scene) {
  const jet = new THREE.Group();
  const clock = { minute: null, hour: null };
  for (let i = 0; i < CITY.heroes.length; i++) {
    const h = CITY.heroes[i];
    const g = new THREE.Group();
    g.position.set(h.x, h.y0, h.z);
    g.rotation.y = h.rot || 0;
    if (h.kind === "station") buildStation(g, h);
    else if (h.kind === "cathedral") buildCathedral(g, h);
    else if (h.kind === "chair") buildChair(g);
    else if (h.kind === "un") buildUN(g, h);
    else if (h.kind === "wall") buildWall(g, h);
    else if (h.kind === "tower") buildTower(g, h);
    else if (h.kind === "nozzle") buildNozzle(g, jet);
    else if (h.kind === "cabin") buildCabin(g, h, i);
    else if (h.kind === "statue") buildStatue(g);
    scene.add(g);
  }
  for (let i = 0; i < CITY.decor.length; i++) {
    const d = CITY.decor[i];
    const g = new THREE.Group();
    g.position.set(d.x, surfaceY(d.x, d.z), d.z);
    g.rotation.y = d.rot || 0;
    if (d.kind === "clock") buildClock(g, clock);
    else buildIsland(g);
    scene.add(g);
  }
  scene.add(jet);
  return { jet, clock };
}

function mat(color, rough) {
  return new THREE.MeshStandardMaterial({ color, roughness: rough ?? 0.7, metalness: 0.04 });
}

function box(parent, w, h, d, x, y, z, color) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function buildStation(g, h) {
  box(g, h.w, h.h, h.d, 0, h.h / 2, 0, "#e7e1d6");
  box(g, h.w + 2, 1.2, h.d + 2, 0, h.h + 0.4, 0, "#b7c0c9");
  box(g, h.w * 0.55, 0.4, 8, 0, 4.2, h.d / 2 + 3, "#d9d4ca");
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 3.2),
    new THREE.MeshBasicMaterial({ map: textTexture("CORNAVIN", "#d10f1a", "#fff") })
  );
  sign.position.set(0, h.h * 0.72, h.d / 2 + 0.2);
  g.add(sign);
  const clock = new THREE.Mesh(new THREE.CircleGeometry(2.1, 20), mat("#f4f1ea"));
  clock.position.set(0, h.h * 0.62, h.d / 2 + 0.25);
  g.add(clock);
}

function buildCathedral(g, h) {
  box(g, h.w, h.h, h.d * 0.72, 0, h.h / 2, 4, "#d9d0c2");
  box(g, 8, 28, 8, 0, 14, -8, "#cfc6b6");
  const spire = new THREE.Mesh(new THREE.ConeGeometry(3.2, 14, 8), mat("#2f8f78"));
  spire.position.set(0, 35, -8);
  spire.castShadow = true;
  g.add(spire);
  const rose = new THREE.Mesh(new THREE.CircleGeometry(2.4, 16), mat("#6ea4c8"));
  rose.position.set(0, 9, h.d * 0.36 + 4.1);
  g.add(rose);
}

function buildChair(g) {
  const wood = "#c4893a";
  const dark = "#8d5a28";
  box(g, 7.2, 0.8, 7.2, 0, 6.2, 0, wood);
  box(g, 7.2, 6.5, 0.8, 0, 9.6, -3.2, dark);
  box(g, 0.9, 6, 0.9, -2.6, 3, 2.4, wood);
  box(g, 0.9, 6, 0.9, 2.6, 3, 2.4, wood);
  box(g, 0.9, 6, 0.9, -2.6, 3, -2.4, wood);
  box(g, 0.7, 2.2, 0.7, 2.6, 1.1, -2.2, dark);
  box(g, 1.4, 0.6, 2.2, 3.8, 0.4, -1.2, wood);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.6), new THREE.MeshBasicMaterial({ map: textTexture("BROKEN CHAIR", "#f0a020", "#1b1b1b") }));
  sign.position.set(0, 13.4, -3.7);
  g.add(sign);
}

function buildUN(g, h) {
  box(g, h.w, h.h, h.d, 0, h.h / 2, 0, "#f7f5f0");
  box(g, h.w * 0.25, h.h + 6, h.d * 0.7, 0, (h.h + 6) / 2, 0, "#e7eef5");
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(18, 2.4), new THREE.MeshBasicMaterial({ map: textTexture("NATIONS", "#1d4e89", "#fff") }));
  sign.position.set(0, 6, h.d / 2 + 0.2);
  g.add(sign);
  const flagMat = new THREE.MeshBasicMaterial({ map: swissTexture(), side: THREE.DoubleSide });
  for (const x of [-30, 0, 30]) {
    box(g, 0.3, 10, 0.3, x, 5, h.d / 2 + 2, "#ddd");
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 3.2), flagMat);
    flag.position.set(x + 1.7, 9, h.d / 2 + 2);
    g.add(flag);
  }
}

function buildWall(g, h) {
  box(g, h.w, h.h, h.d, 0, h.h / 2, 0, "#d9d3c6");
  for (let i = -3; i <= 3; i += 2) {
    box(g, 2.2, 5.5, 1.4, i * 9, 2.8, 2.2, "#c4b49a");
    box(g, 1.3, 1.3, 1.3, i * 9, 6.2, 2.2, "#e6c07a");
  }
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(16, 2), new THREE.MeshBasicMaterial({ map: textTexture("RÉFORMATEURS", "#2f9e6b", "#fff") }));
  sign.position.set(0, h.h + 0.2, 1.8);
  g.add(sign);
}

function buildTower(g, h) {
  box(g, h.w, h.h, h.d, 0, h.h / 2, 0, "#d5dbe3");
  box(g, h.w + 1, 1.4, h.d + 1, 0, h.h + 0.5, 0, "#8aa0b8");
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.8), new THREE.MeshBasicMaterial({ map: textTexture("BEL-AIR", "#f2d23a", "#1b1b1b") }));
  sign.position.set(0, 8, h.d / 2 + 0.2);
  g.add(sign);
}

function buildNozzle(g, jetGroup) {
  const base = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.8, 2.4, 10), mat("#d9dee6"));
  base.position.y = 1.2;
  base.castShadow = true;
  g.add(base);
  jetGroup.position.copy(g.position);
  const dropGeo = new THREE.SphereGeometry(1, 7, 6);
  const dropMat = new THREE.MeshStandardMaterial({ color: "#e9f7ff", transparent: true, opacity: 0.85, roughness: 0.15, emissive: "#bfe9ff", emissiveIntensity: 0.4 });
  const drops = [];
  for (let i = 0; i < 36; i++) {
    const m = new THREE.Mesh(dropGeo, dropMat);
    m.userData.h = 4 + i * 3.8;
    jetGroup.add(m);
    drops.push(m);
  }
  jetGroup.userData.drops = drops;
}

function buildCabin(g, h, i) {
  const colors = ["#d23b3b", "#2a6fbf", "#f2f2f2", "#2f8f4e"];
  box(g, h.w, h.h, h.d, 0, h.h / 2, 0, colors[i % colors.length]);
  box(g, h.w + 0.4, 0.3, h.d + 0.4, 0, h.h + 0.15, 0, "#f4f4f4");
}

function buildStatue(g) {
  box(g, 2.4, 1.6, 2.4, 0, 0.8, 0, "#c9c3b6");
  box(g, 1.1, 2.4, 0.7, 0, 2.8, 0, "#6d8294");
  box(g, 0.7, 0.7, 0.7, 0, 4.3, 0, "#e6c07a");
}

function buildClock(g, clock) {
  const face = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.2, 0.35, 24), mat("#2f8a3a"));
  face.position.y = 0.3;
  g.add(face);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(5.2, 0.28, 6, 24), mat("#f2d23a"));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.5;
  g.add(rim);
  const colors = ["#e23b4a", "#f2d23a", "#2a6fbf", "#ffffff", "#e07a2f"];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const petal = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.25, 6), mat(colors[i % colors.length]));
    petal.position.set(Math.sin(a) * 3.4, 0.55, Math.cos(a) * 3.4);
    g.add(petal);
  }
  const hourPivot = new THREE.Group();
  hourPivot.position.y = 0.7;
  const hour = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.2, 2.4), mat("#1b1b1b"));
  hour.position.set(0, 0, -1.2);
  hourPivot.add(hour);
  const minutePivot = new THREE.Group();
  minutePivot.position.y = 0.85;
  const minute = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 3.4), mat("#d10f1a"));
  minute.position.set(0, 0, -1.7);
  minutePivot.add(minute);
  g.add(hourPivot);
  g.add(minutePivot);
  clock.hour = hourPivot;
  clock.minute = minutePivot;
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.6), new THREE.MeshBasicMaterial({ map: textTexture("HORLOGE FLEURIE", "#2f8a3a", "#fff"), side: THREE.DoubleSide }));
  sign.position.set(0, 2.2, 6.2);
  g.add(sign);
}

function buildIsland(g) {
  const mound = new THREE.Mesh(new THREE.CylinderGeometry(10, 12, 1.3, 12), mat("#63a356"));
  mound.position.y = 0.4;
  g.add(mound);
  box(g, 1.2, 3.2, 1.2, 0, 2.2, 0, "#d9d3c6");
  box(g, 0.8, 0.8, 0.8, 0, 4.1, 0, "#e6c07a");
}

function addMountains(scene) {
  const b = new Builder();
  const peaks = [
    [1900, 280, 90, 70, 160, "#f4f7fb"],
    [2100, 180, 70, 50, 210, "#ffffff"],
    [2300, 420, 120, 80, 140, "#e7eef5"],
    [1750, 620, 80, 60, 100, "#d5e0ea"],
    [0, 1900, 900, 70, 80, "#8aa888"],
    [-500, 2050, 400, 50, 60, "#7d9a78"],
    [600, 2000, 380, 55, 70, "#8eae86"],
  ];
  for (let i = 0; i < peaks.length; i++) {
    const p = peaks[i];
    b.box(p[0], p[4] / 2, p[1], p[2], p[4], p[3], 0.2 * i, p[5]);
  }
  const mesh = new THREE.Mesh(b.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }));
  mesh.castShadow = false;
  scene.add(mesh);
}

function addClouds(scene) {
  const group = new THREE.Group();
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.6 });
  for (let i = 0; i < 8; i++) {
    const cloud = new THREE.Group();
    cloud.position.set(-600 + i * 280, 150 + (i % 3) * 18, -200 + (i % 4) * 160);
    for (let k = 0; k < 4; k++) {
      const m = new THREE.Mesh(geo, material);
      m.scale.set(16 + k * 4, 6, 8);
      m.position.set(k * 8 - 10, k % 2, 0);
      cloud.add(m);
    }
    group.add(cloud);
  }
  scene.add(group);
  return group;
}

export function buildTaxi() {
  const rig = new THREE.Group();
  const visual = new THREE.Group();
  rig.add(visual);
  const yellow = mat("#f5c400", 0.45);
  const black = mat("#1c1c1c", 0.4);
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.5, 4.2), yellow);
  body.position.y = 0.72;
  body.castShadow = true;
  visual.add(body);
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.62, 1.85), yellow);
  cabin.position.set(0, 1.22, 0.28);
  cabin.castShadow = true;
  visual.add(cabin);
  const glass = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.42, 1.5),
    new THREE.MeshStandardMaterial({ color: "#9fd8ef", roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.85 })
  );
  glass.position.set(0, 1.28, 0.28);
  visual.add(glass);
  visual.add(studRow(0, 1.58, 0.28, 4, 2, 0.42, "#f5c400"));
  visual.add(studRow(0, 1.02, -1.15, 4, 3, 0.4, "#f5c400"));
  const sign = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 0.28, 0.4),
    new THREE.MeshBasicMaterial({ map: textTexture("TAXI", "#fff", "#111") })
  );
  sign.position.set(0, 1.78, 0.15);
  visual.add(sign);
  for (const x of [-0.7, 0.7]) {
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.18, 0.1), new THREE.MeshStandardMaterial({ color: "#fff4c4", emissive: "#ffe28a", emissiveIntensity: 0.8 }));
    lamp.position.set(x, 0.72, -2.12);
    if (x === 0) lamp.userData.cue = "nose";
    visual.add(lamp);
  }
  const nose = new THREE.Object3D();
  nose.position.set(0, 0.72, -2.15);
  nose.userData.cue = "nose";
  visual.add(nose);
  for (const x of [-0.7, 0.7]) {
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.08), new THREE.MeshStandardMaterial({ color: "#ff2a2a", emissive: "#ff2a2a", emissiveIntensity: 0.5 }));
    tail.position.set(x, 0.7, 2.12);
    visual.add(tail);
  }
  boxOn(visual, 1.92, 0.18, 0.2, 0, 0.55, -2.05, black);
  boxOn(visual, 1.92, 0.18, 0.2, 0, 0.55, 2.05, black);
  const wheels = [];
  const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 10);
  wheelGeo.rotateZ(Math.PI / 2);
  for (const z of [-1.35, 1.35]) {
    for (const x of [-0.98, 0.98]) {
      const w = new THREE.Mesh(wheelGeo, black);
      w.position.set(x, 0.38, z);
      visual.add(w);
      wheels.push(w);
    }
  }
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.28), new THREE.MeshBasicMaterial({ map: textTexture("GE 1201", "#fff", "#111") }));
  plate.position.set(0, 0.62, 2.12);
  visual.add(plate);
  return { rig, visual, wheels };
}

function studRow(x, y, z, cols, rows, gap, color) {
  const g = new THREE.Group();
  const geo = new THREE.CylinderGeometry(0.13, 0.15, 0.12, 8);
  const material = mat(color, 0.4);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const m = new THREE.Mesh(geo, material);
      m.position.set(x + (i - (cols - 1) / 2) * gap, y, z + (j - (rows - 1) / 2) * gap);
      g.add(m);
    }
  }
  return g;
}

function boxOn(parent, w, h, d, x, y, z, material) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  parent.add(m);
}

const HAIR = ["#1b1b1b", "#5a3825", "#c4552a", "#e6c07a", "#6b3f8a", "#222"];
const TORSOS = ["#d23b3b", "#2a6fbf", "#2f8f4e", "#f0c431", "#e07a2f", "#7a4b9a", "#14a3b8"];

export function buildMinifig(index) {
  const g = new THREE.Group();
  const legs = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.55, 0.32), mat("#243056"));
  legs.position.y = 0.28;
  g.add(legs);
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.62, 0.36), mat(TORSOS[index % TORSOS.length]));
  torso.position.y = 0.84;
  g.add(torso);
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.32, 10), mat("#f0c14a", 0.45));
  head.position.y = 1.28;
  g.add(head);
  const eyeGeo = new THREE.BoxGeometry(0.07, 0.07, 0.04);
  const eyeMat = mat("#1b1b1b", 0.4);
  for (const x of [-0.08, 0.08]) {
    const eye = new THREE.Mesh(eyeGeo, eyeMat);
    eye.position.set(x, 1.32, -0.24);
    g.add(eye);
  }
  const smile = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.03), mat("#a33b32"));
  smile.position.set(0, 1.2, -0.25);
  g.add(smile);
  const hairMat = mat(HAIR[index % HAIR.length], 0.55);
  if (index % 5 === 0) {
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 0.16, 10), hairMat);
    cap.position.y = 1.46;
    g.add(cap);
  } else if (index % 5 === 1) {
    const afro = new THREE.Mesh(new THREE.SphereGeometry(0.34, 8, 6), hairMat);
    afro.position.y = 1.42;
    g.add(afro);
  } else if (index % 5 !== 4) {
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.16, 0.4), hairMat);
    hair.position.set(0, 1.46, 0.02);
    g.add(hair);
  }
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.42, 0.16), mat(TORSOS[index % TORSOS.length]));
  arm.position.set(-0.42, 0.9, 0);
  g.add(arm);
  g.userData.arm = arm;
  return g;
}

export function buildArrow() {
  const g = new THREE.Group();
  const geo = new THREE.ConeGeometry(0.7, 1.5, 4);
  // ConeGeometry points +y. rotateX(-π/2) sends that tip to local -z, the taxi's forward.
  geo.rotateX(-Math.PI / 2);
  const material = new THREE.MeshStandardMaterial({ color: "#7cff3a", emissive: "#39e05a", emissiveIntensity: 0.5, roughness: 0.4 });
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Mesh(geo, material);
    m.position.z = -i * 1.1;
    g.add(m);
  }
  return g;
}

export { textTexture };
