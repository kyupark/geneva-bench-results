import * as THREE from "three";

// World frame: +X east, +Y up, +Z south, so north is -Z.
// 1 unit is 1 visual metre. The city is compressed to about 0.28 of true
// Geneva distances so a single drone flight can visit every district.
// Cameras look along local -Z. Props are aimed with rotation.y only:
// a positive yaw turns a local +Z front toward +X (Three.js Y-up).
// Local +Z faces travel when rotation.y = atan2(dx, dz).

const GROUND_Y = 1.2;
const PLATEAU_TOP = 12;
const DURATION = 96;

const A = {
  jet: [214, 2],
  flower: [64, 78],
  cathedral: [6, 162],
  neuve: [-148, 156],
  theatre: [-112, 156],
  wall: [-112, 206],
  bastions: [-120, 270],
  cornavin: [-172, -146],
  chair: [-186, -424],
  un: [-186, -524],
};

const params = new URLSearchParams(location.search);
const DEBUG = params.has("debug");
const TOP = params.has("top");

const solids = [];
const blockers = [];
const flags = [];
const movers = [];
const boats = [];
const birds = [];
const treeList = [];

const canvas = document.getElementById("c");
const cardEl = document.getElementById("card");
const lowerEl = document.getElementById("lower");
const telemEl = document.getElementById("telem");
const debugEl = document.getElementById("debug");

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  preserveDrawingBuffer: true,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(1);
renderer.setSize(1920, 1080, false);
renderer.setClearColor(0x8fb4d4, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xf2c9ac, 0.00112);

const camera = new THREE.PerspectiveCamera(48, 1920 / 1080, 0.35, 8000);
const raycaster = new THREE.Raycaster();
const DOWN = new THREE.Vector3(0, -1, 0);

const SUN_DIR = new THREE.Vector3(-0.78, 0.5, 0.34).normalize();
const hemi = new THREE.HemisphereLight(0xfff0dc, 0x3d5c40, 0.62);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffe2bc, 1.55);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.bias = -0.00025;
sun.shadow.normalBias = 0.04;
scene.add(sun);
scene.add(sun.target);

function hash(a, b = 0) {
  const n = Math.sin(a * 127.1 + b * 311.7) * 43758.5453123;
  return n - Math.floor(n);
}

function canvasTex(draw, w, h, repeat = false) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (repeat) {
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.RepeatWrapping;
  }
  return t;
}

function stoneTex(hex, amount) {
  const base = new THREE.Color(hex);
  return canvasTex((g, w, h) => {
    g.fillStyle = hex;
    g.fillRect(0, 0, w, h);
    const img = g.getImageData(0, 0, w, h);
    for (let i = 0; i < img.data.length; i += 4) {
      const j = ((i * 17) % (amount * 2 + 1)) - amount;
      img.data[i] = Math.max(0, Math.min(255, img.data[i] + j));
      img.data[i + 1] = Math.max(0, Math.min(255, img.data[i + 1] + j));
      img.data[i + 2] = Math.max(0, Math.min(255, img.data[i + 2] + j));
    }
    g.putImageData(img, 0, 0);
    void base;
  }, 256, 256, true);
}

const facadeCache = new Map();
function getFacade(style, floors, variant) {
  const key = `${style}-${floors}-${variant}`;
  if (facadeCache.has(key)) return facadeCache.get(key);
  const W = 256;
  const floorPx = 72;
  const H = floorPx * floors;
  const wall = style === "old" ? "#f0e4d0" : style === "haussmann" ? "#e7e1d6" : "#d7dee4";
  const shop = style === "old" ? "#d2bea0" : "#d9d2c4";
  const map = canvasTex((g, w, h) => {
    g.fillStyle = wall;
    g.fillRect(0, 0, w, h);
    const img = g.getImageData(0, 0, w, h);
    for (let i = 0; i < img.data.length; i += 16) {
      const j = ((i + variant * 13) % 23) - 11;
      img.data[i] += j;
      img.data[i + 1] += j;
      img.data[i + 2] += j;
    }
    g.putImageData(img, 0, 0);
    g.fillStyle = "rgba(255,255,255,0.38)";
    g.fillRect(0, 0, w, 8);
    g.fillStyle = "rgba(70,55,40,0.28)";
    g.fillRect(0, h - 8, w, 8);
    const cols = style === "city" ? 3 : 4;
    for (let f = 0; f < floors; f++) {
      const y = h - (f + 1) * floorPx;
      if (f === 0 && style !== "city") {
        g.fillStyle = shop;
        g.fillRect(0, y, w, floorPx);
      }
      const winH = f === 0 && style !== "city" ? floorPx * 0.46 : floorPx * 0.4;
      const winY = y + (f === 0 ? floorPx * 0.32 : floorPx * 0.24);
      const gap = 16;
      const winW = (w - gap * (cols + 1)) / cols;
      for (let i = 0; i < cols; i++) {
        const x = gap + i * (winW + gap);
        const lit = (f * 5 + i * 3 + variant * 7) % 13 === 0 && f > 0;
        g.fillStyle = lit ? "#ffd7a4" : style === "city" ? "#8eb4c6" : "#1c2a36";
        g.fillRect(x, winY, winW, winH);
        if (!lit) {
          g.fillStyle = "rgba(214, 236, 244, 0.45)";
          g.fillRect(x, winY, winW * 0.3, winH);
        }
        g.fillStyle = "#f3ecdf";
        g.fillRect(x - 2, winY + winH, winW + 4, 3);
      }
      if (style === "haussmann" && f > 0 && f % 2 === 0) {
        g.fillStyle = "#b9b3a8";
        g.fillRect(10, winY + winH + 5, w - 20, 5);
      }
      if (f === 0) {
        g.fillStyle = "#4a3428";
        g.fillRect(w / 2 - 12, y + floorPx * 0.38, 24, floorPx * 0.58);
      }
    }
  }, W, H, false);
  const emissive = canvasTex((g, w, h) => {
    g.fillStyle = "#000";
    g.fillRect(0, 0, w, h);
    const cols = style === "city" ? 3 : 4;
    for (let f = 0; f < floors; f++) {
      if (f === 0) continue;
      const y = h - (f + 1) * floorPx;
      const winH = floorPx * 0.4;
      const winY = y + floorPx * 0.24;
      const gap = 16;
      const winW = (w - gap * (cols + 1)) / cols;
      for (let i = 0; i < cols; i++) {
        if ((f * 5 + i * 3 + variant * 7) % 13 !== 0) continue;
        const x = gap + i * (winW + gap);
        g.fillStyle = "#ffc27a";
        g.fillRect(x, winY, winW, winH);
      }
    }
  }, W, H, false);
  const pair = { map, emissive };
  facadeCache.set(key, pair);
  return pair;
}

const tileMap = canvasTex((g, w, h) => {
  g.fillStyle = "#9a4032";
  g.fillRect(0, 0, w, h);
  g.strokeStyle = "#7a3126";
  g.lineWidth = 2;
  for (let y = 0; y < h; y += 10) {
    g.beginPath();
    g.moveTo(0, y);
    g.lineTo(w, y);
    g.stroke();
    const off = (y / 10) % 2 ? 8 : 0;
    for (let x = off; x < w; x += 16) {
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x, y + 10);
      g.stroke();
    }
  }
}, 128, 128, true);

const swissMap = canvasTex((g, w, h) => {
  g.fillStyle = "#d52b1e";
  g.fillRect(0, 0, w, h);
  g.fillStyle = "#fff";
  g.fillRect(w * 0.38, h * 0.16, w * 0.24, h * 0.68);
  g.fillRect(w * 0.16, h * 0.38, w * 0.68, h * 0.24);
}, 256, 256, false);

const unMap = canvasTex((g, w, h) => {
  g.fillStyle = "#4b92c9";
  g.fillRect(0, 0, w, h);
  g.fillStyle = "#f5f8fb";
  g.beginPath();
  g.arc(w / 2, h / 2, h * 0.28, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "#4b92c9";
  g.lineWidth = 3;
  g.beginPath();
  g.ellipse(w / 2, h / 2, h * 0.1, h * 0.24, 0, 0, Math.PI * 2);
  g.stroke();
  g.beginPath();
  g.ellipse(w / 2, h / 2, h * 0.2, h * 0.24, 0, 0, Math.PI * 2);
  g.stroke();
  g.beginPath();
  g.moveTo(w * 0.38, h / 2);
  g.lineTo(w * 0.62, h / 2);
  g.moveTo(w / 2, h * 0.28);
  g.lineTo(w / 2, h * 0.72);
  g.stroke();
}, 320, 200, false);

const clockMap = canvasTex((g) => {
  g.fillStyle = "#f6f1e6";
  g.beginPath();
  g.arc(128, 128, 122, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "#222";
  g.lineWidth = 8;
  g.stroke();
  g.lineWidth = 4;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    g.beginPath();
    g.moveTo(128 + Math.cos(a) * 96, 128 + Math.sin(a) * 96);
    g.lineTo(128 + Math.cos(a) * 112, 128 + Math.sin(a) * 112);
    g.stroke();
  }
  const hand = (ang, len, width) => {
    g.strokeStyle = "#1a1a1a";
    g.lineWidth = width;
    g.lineCap = "round";
    g.beginPath();
    g.moveTo(128, 128);
    g.lineTo(128 + Math.cos(ang) * len, 128 + Math.sin(ang) * len);
    g.stroke();
  };
  hand(-Math.PI / 2 - Math.PI / 3, 68, 8);
  hand(-Math.PI / 2 + Math.PI / 3, 92, 5);
  g.fillStyle = "#1a1a1a";
  g.beginPath();
  g.arc(128, 128, 6, 0, Math.PI * 2);
  g.fill();
}, 256, 256, false);

const flowerMap = canvasTex((g, w, h) => {
  const colors = ["#e24b62", "#f2c14e", "#f7f4ea", "#5b3d8a", "#3e8f6a", "#f08a3c"];
  g.fillStyle = "#2f6d45";
  g.fillRect(0, 0, w, h);
  const cx = w / 2;
  const cy = h / 2;
  for (let ring = 6; ring >= 1; ring--) {
    g.fillStyle = colors[ring % colors.length];
    g.beginPath();
    g.arc(cx, cy, ring * 42, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = colors[(ring + 2) % colors.length];
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2 + ring;
      g.beginPath();
      g.arc(cx + Math.cos(a) * ring * 36, cy + Math.sin(a) * ring * 36, 10, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.fillStyle = "#f4efe2";
  g.beginPath();
  g.arc(cx, cy, 28, 0, Math.PI * 2);
  g.fill();
}, 512, 512, false);

const plaqueMap = canvasTex((g, w, h) => {
  g.fillStyle = "#d9d3c6";
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 1800; i++) {
    g.fillStyle = `rgba(90,80,70,${0.04 + (i % 5) * 0.015})`;
    g.fillRect((i * 47) % w, (i * 91) % h, 3, 2);
  }
  g.fillStyle = "#3a342c";
  g.font = "600 148px Didot, 'Bodoni 72', 'Times New Roman', serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText("POST TENEBRAS LUX", w / 2, h * 0.4);
  g.font = "500 42px Didot, 'Times New Roman', serif";
  const names = [
    [0.16, "FAREL"],
    [0.38, "CALVIN"],
    [0.62, "DE BÈZE"],
    [0.84, "KNOX"],
  ];
  for (const [u, name] of names) g.fillText(name, w * u, h * 0.78);
}, 2048, 512, false);

const signMap = canvasTex((g, w, h) => {
  g.fillStyle = "#2f3842";
  g.fillRect(0, 0, w, h);
  g.fillStyle = "#f6f1e6";
  g.font = "600 118px Didot, 'Bodoni 72', 'Times New Roman', serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText("GENÈVE", w / 2, h * 0.4);
  g.font = "500 46px Didot, 'Times New Roman', serif";
  g.fillText("CORNAVIN", w / 2, h * 0.74);
}, 1024, 280, false);

const grassMat = new THREE.MeshStandardMaterial({ color: 0x3f7a45, roughness: 1 });
const parkMat = new THREE.MeshStandardMaterial({ color: 0x4e8d52, roughness: 1 });
const pathMat = new THREE.MeshStandardMaterial({ color: 0xd9d0bc, roughness: 0.95 });
const roadMat = new THREE.MeshStandardMaterial({ color: 0x3c4148, roughness: 0.92 });
const railMat = new THREE.MeshStandardMaterial({ color: 0xb7b0a4, metalness: 0.4, roughness: 0.45 });
const pavementMat = new THREE.MeshStandardMaterial({ color: 0xd4cec2, roughness: 0.9 });
const quayMat = new THREE.MeshStandardMaterial({ color: 0xc9c1b2, roughness: 0.88 });
const stoneMat = new THREE.MeshStandardMaterial({ color: 0xe7e0d2, roughness: 0.84 });
const stoneDark = new THREE.MeshStandardMaterial({ color: 0xd2c8b6, roughness: 0.9 });
const roofTileMat = new THREE.MeshStandardMaterial({ map: tileMap, roughness: 0.92, side: THREE.DoubleSide });
const roofZincMat = new THREE.MeshStandardMaterial({ color: 0x6d737a, roughness: 0.55, metalness: 0.35, side: THREE.DoubleSide });
const roofFlatMat = new THREE.MeshStandardMaterial({ color: 0x8d9298, roughness: 0.7 });
const copperMat = new THREE.MeshStandardMaterial({ color: 0x2f6d57, roughness: 0.45, metalness: 0.35 });
const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x3e5c46, roughness: 0.42, metalness: 0.4 });
const woodMat = new THREE.MeshStandardMaterial({ color: 0xb8884e, roughness: 0.78 });
const chairWood = new THREE.MeshStandardMaterial({ color: 0xa56b38, roughness: 0.7 });
const barkMat = new THREE.MeshStandardMaterial({ color: 0x6a4630, roughness: 1 });
const leafMat = new THREE.MeshStandardMaterial({ color: 0x7fbf58, roughness: 0.85 });
const trainRed = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.55 });
const trainWhite = new THREE.MeshStandardMaterial({ color: 0xf4f4f2, roughness: 0.5 });
const glassMat = new THREE.MeshStandardMaterial({ color: 0x8eb6c6, roughness: 0.12, metalness: 0.55 });
const metalMat = new THREE.MeshStandardMaterial({ color: 0x8d9290, metalness: 0.6, roughness: 0.35 });
const hullMat = new THREE.MeshStandardMaterial({ color: 0xf7f7f4, roughness: 0.45 });
const sailMat = new THREE.MeshStandardMaterial({ color: 0xfffaf2, roughness: 0.6, side: THREE.DoubleSide });
const cabinMat = new THREE.MeshStandardMaterial({ color: 0xefe6d4, roughness: 0.75 });
const unMat = new THREE.MeshStandardMaterial({ map: unMap, roughness: 0.62, side: THREE.DoubleSide });
const swissMat = new THREE.MeshStandardMaterial({ map: swissMap, roughness: 0.62, side: THREE.DoubleSide });
const plaqueMat = new THREE.MeshStandardMaterial({ map: plaqueMap, roughness: 0.8 });
const flowerMat = new THREE.MeshStandardMaterial({ map: flowerMap, roughness: 0.9 });
const clockMat = new THREE.MeshStandardMaterial({ map: clockMap, roughness: 0.4 });
const signMat = new THREE.MeshStandardMaterial({ map: signMap, roughness: 0.55 });
const shedMat = new THREE.MeshStandardMaterial({ color: 0xd5dbdf, metalness: 0.28, roughness: 0.42, side: THREE.DoubleSide });

function track(mesh, blocker = true) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  solids.push(mesh);
  if (blocker) blockers.push(mesh);
  return mesh;
}

function addMesh(mesh, blocker = true) {
  track(mesh, blocker);
  scene.add(mesh);
  return mesh;
}

function riverCenterZ(x) {
  return x >= 12 ? 0 : -0.045 * x;
}
function southShoreZ(x) {
  if (x < 12) return riverCenterZ(x) + 15.5;
  if (x < 90) return 16 + (x - 12) * 0.62;
  if (x < 280) return 64 + (x - 90) * 0.16;
  return 94 + (x - 280) * 0.08;
}
function northShoreZ(x) {
  if (x < 12) return riverCenterZ(x) - 15.5;
  if (x < 90) return -16 - (x - 12) * 0.48;
  if (x < 280) return -53 - (x - 90) * 0.1;
  return -72 - (x - 280) * 0.05;
}
function inIsland(x, z) {
  const dx = (x + 78) / 18;
  const dz = (z - 6) / 10;
  return dx * dx + dz * dz < 1;
}
function isWater(x, z) {
  if (x < -460 || x > 700) return false;
  if (inIsland(x, z)) return false;
  return z < southShoreZ(x) && z > northShoreZ(x);
}
function onPlateau(x, z) {
  return x > -62 && x < 72 && z > 118 && z < 206;
}

function shorePolyline(which) {
  const pts = [];
  for (let x = -460; x <= 680; x += 18) {
    pts.push([x, which === "s" ? southShoreZ(x) : northShoreZ(x)]);
  }
  return pts;
}

function gableGeometry(w, d, rh) {
  const hw = w / 2;
  const hd = d / 2;
  const pos = new Float32Array([
    -hw, 0, -hd, hw, 0, -hd, hw, 0, hd, -hw, 0, hd, 0, rh, -hd, 0, rh, hd,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setIndex([0, 4, 1, 1, 4, 5, 1, 5, 2, 2, 5, 3, 3, 5, 4, 3, 4, 0]);
  geo.computeVertexNormals();
  return geo;
}

function archGeometry(length, radius, segs = 28) {
  const pos = [];
  const idx = [];
  const half = length / 2;
  for (let i = 0; i <= segs; i++) {
    const a = Math.PI * (i / segs);
    const y = Math.sin(a) * radius;
    const z = Math.cos(a) * radius;
    pos.push(-half, y, z, half, y, z);
  }
  for (let i = 0; i < segs; i++) {
    const a = i * 2;
    idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const mid = Math.floor(segs / 2) * 2;
  if (geo.getAttribute("normal").getY(mid) < 0) {
    for (let i = 0; i < idx.length; i += 3) {
      const tmp = idx[i + 1];
      idx[i + 1] = idx[i + 2];
      idx[i + 2] = tmp;
    }
    geo.setIndex(idx);
    geo.computeVertexNormals();
  }
  return geo;
}

function makeBuilding(w, d, floors, style, variant) {
  const group = new THREE.Group();
  const floorH = style === "old" ? 3.05 : 3.2;
  const h = floors * floorH;
  const src = getFacade(style, floors, variant);
  const map = src.map.clone();
  const em = src.emissive.clone();
  map.needsUpdate = true;
  em.needsUpdate = true;
  map.wrapS = em.wrapS = THREE.RepeatWrapping;
  map.wrapT = em.wrapT = THREE.ClampToEdgeWrapping;
  const rx = Math.max(1, Math.round(w / 9));
  map.repeat.set(rx, 1);
  em.repeat.set(rx, 1);
  const mat = new THREE.MeshStandardMaterial({
    map,
    emissiveMap: em,
    emissive: new THREE.Color(0xfff1d4),
    emissiveIntensity: 0.55,
    roughness: 0.86,
  });
  mat.color.setHSL(0.08, 0.08, 0.78 + hash(w * 10, floors + variant) * 0.16);
  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  body.position.y = h / 2;
  track(body);
  group.add(body);
  const roofH = style === "city" ? 0.45 : Math.min(w, d) * 0.18 + 1.15;
  if (style === "city") {
    const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, 0.45, d + 0.3), roofFlatMat);
    roof.position.y = h + 0.22;
    track(roof);
    group.add(roof);
  } else {
    const rm = (style === "old" ? roofTileMat : roofZincMat).clone();
    rm.color.offsetHSL(0, (variant - 1) * 0.03, (hash(floors, w) - 0.5) * 0.05);
    const roof = new THREE.Mesh(gableGeometry(w + 0.35, d + 0.35, roofH), rm);
    roof.position.y = h;
    track(roof);
    group.add(roof);
    if (style === "old" && variant !== 1) {
      const ch = new THREE.Mesh(new THREE.BoxGeometry(0.55, 1.15, 0.55), stoneDark);
      ch.position.set((variant - 1) * w * 0.12, h + roofH * 0.72, d * 0.12);
      track(ch, false);
      group.add(ch);
    }
  }
  group.userData.height = h + roofH;
  return group;
}

function pathLength(pts) {
  let L = 0;
  for (let i = 1; i < pts.length; i++) {
    L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  }
  return L;
}
function pointOnPath(pts, dist) {
  let left = dist;
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i][0] - pts[i - 1][0];
    const dz = pts[i][1] - pts[i - 1][1];
    const len = Math.hypot(dx, dz) || 1e-4;
    if (left <= len) {
      const u = left / len;
      return {
        x: pts[i - 1][0] + dx * u,
        z: pts[i - 1][1] + dz * u,
        yaw: Math.atan2(dx, dz),
      };
    }
    left -= len;
  }
  const last = pts[pts.length - 1];
  const prev = pts[pts.length - 2];
  return { x: last[0], z: last[1], yaw: Math.atan2(last[0] - prev[0], last[1] - prev[1]) };
}
function shuttle(pts, t, speed) {
  const L = pathLength(pts);
  const cycle = Math.max(1, L * 2);
  let d = ((t * speed) % cycle + cycle) % cycle;
  let dir = 1;
  if (d > L) {
    d = cycle - d;
    dir = -1;
  }
  const p = pointOnPath(pts, d);
  if (dir < 0) p.yaw += Math.PI;
  return p;
}

function addRoad(pts, width, y) {
  for (let i = 1; i < pts.length; i++) {
    const x0 = pts[i - 1][0];
    const z0 = pts[i - 1][1];
    const x1 = pts[i][0];
    const z1 = pts[i][1];
    const dx = x1 - x0;
    const dz = z1 - z0;
    const len = Math.hypot(dx, dz);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, 0.08, len + width * 0.15), roadMat);
    mesh.position.set((x0 + x1) / 2, y, (z0 + z1) / 2);
    mesh.rotation.y = Math.atan2(dx, dz);
    mesh.receiveShadow = true;
    scene.add(mesh);
  }
}
function addRails(pts, y) {
  for (let i = 1; i < pts.length; i++) {
    const x0 = pts[i - 1][0];
    const z0 = pts[i - 1][1];
    const x1 = pts[i][0];
    const z1 = pts[i][1];
    const dx = x1 - x0;
    const dz = z1 - z0;
    const len = Math.hypot(dx, dz) || 1;
    const yaw = Math.atan2(dx, dz);
    const px = -dz / len;
    const pz = dx / len;
    for (const s of [-0.72, 0.72]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.05, len), railMat);
      rail.position.set((x0 + x1) / 2 + px * s, y, (z0 + z1) / 2 + pz * s);
      rail.rotation.y = yaw;
      scene.add(rail);
    }
  }
}

function addTree(x, z, s = 1, kind = "round") {
  let y = GROUND_Y;
  if (onPlateau(x, z)) y = PLATEAU_TOP;
  else if (inIsland(x, z)) y = 0.95;
  treeList.push({ x, z, y, s, kind });
}

function addFlag(x, z, mat, phase, h = 11) {
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, h, 6), metalMat);
  pole.position.set(x, GROUND_Y + h / 2, z);
  pole.castShadow = true;
  scene.add(pole);
  const geo = new THREE.PlaneGeometry(3.3, 1.9);
  geo.translate(1.65, 0, 0);
  const cloth = new THREE.Mesh(geo, mat);
  cloth.position.set(x, GROUND_Y + h - 1.25, z);
  cloth.userData.phase = phase;
  scene.add(cloth);
  flags.push(cloth);
}

function columnRow(parent, count, span, yBase, z, h, r, mat) {
  for (let i = 0; i < count; i++) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.06, h, 10), mat);
    const x = count === 1 ? 0 : -span / 2 + (span / (count - 1)) * i;
    col.position.set(x, yBase + h / 2, z);
    track(col);
    parent.add(col);
  }
}

function buildWorld() {
  const south = shorePolyline("s");
  const north = shorePolyline("n");

  const waterPos = [];
  const waterIdx = [];
  for (let i = 0; i < south.length; i++) {
    waterPos.push(south[i][0], 0, south[i][1], north[i][0], 0, north[i][1]);
  }
  for (let i = 0; i < south.length - 1; i++) {
    const a = i * 2;
    const b = a + 1;
    const c = a + 2;
    const d = a + 3;
    waterIdx.push(a, c, b, b, c, d);
  }
  const waterGeo = new THREE.BufferGeometry();
  waterGeo.setAttribute("position", new THREE.Float32BufferAttribute(waterPos, 3));
  waterGeo.setIndex(waterIdx);
  waterGeo.computeVertexNormals();
  const waterMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: true,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3,
    uniforms: {
      uTime: { value: 0 },
      uSun: { value: SUN_DIR.clone() },
      uDeep: { value: new THREE.Color("#0c4560") },
      uShallow: { value: new THREE.Color("#3eabc4") },
      uFogColor: { value: new THREE.Color("#f2c9ac") },
      uFogDensity: { value: 0.00112 },
    },
    vertexShader: `
      out vec3 vWorld;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }
    `,
    fragmentShader: `
      in vec3 vWorld;
      uniform float uTime;
      uniform vec3 uSun;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      out vec4 fragColor;
      void main() {
        float w1 = sin(vWorld.x * 0.16 + uTime * 1.3) * cos(vWorld.z * 0.14 - uTime);
        float w2 = sin(vWorld.x * 0.43 - uTime * 2.0 + vWorld.z * 0.37);
        vec3 n = normalize(vec3(-w1 * 0.09 - w2 * 0.04, 1.0, -w1 * 0.07 + w2 * 0.05));
        vec3 viewDir = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
        vec3 col = mix(uDeep, uShallow, clamp(0.42 + 0.22 * w1, 0.0, 1.0));
        vec3 sky = mix(vec3(0.97, 0.78, 0.60), vec3(0.42, 0.66, 0.86), clamp(viewDir.y + 0.15, 0.0, 1.0));
        col = mix(col, sky, fres * 0.62 + 0.07);
        vec3 halfV = normalize(uSun + viewDir);
        float spec = pow(max(dot(n, halfV), 0.0), 80.0);
        float glitter = pow(max(dot(n, halfV), 0.0), 18.0);
        col += vec3(1.0, 0.96, 0.86) * (spec * 0.75 + glitter * 0.22);
        float dist = length(cameraPosition - vWorld);
        float fog = 1.0 - exp(-uFogDensity * dist);
        col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
        fragColor = vec4(col, 0.97);
      }
    `,
  });
  const water = new THREE.Mesh(waterGeo, waterMat);
  water.renderOrder = 2;
  scene.add(water);

  const shape = new THREE.Shape();
  shape.moveTo(-1500, -1500);
  shape.lineTo(1500, -1500);
  shape.lineTo(1500, 1500);
  shape.lineTo(-1500, 1500);
  shape.closePath();
  let holePts = [];
  for (const [x, z] of south) holePts.push([x, -z]);
  for (let i = north.length - 1; i >= 0; i--) holePts.push([north[i][0], -north[i][1]]);
  let area = 0;
  for (let i = 0; i < holePts.length; i++) {
    const p = holePts[i];
    const q = holePts[(i + 1) % holePts.length];
    area += p[0] * q[1] - q[0] * p[1];
  }
  if (area > 0) holePts = holePts.reverse();
  const hole = new THREE.Path();
  hole.moveTo(holePts[0][0], holePts[0][1]);
  for (let i = 1; i < holePts.length; i++) hole.lineTo(holePts[i][0], holePts[i][1]);
  hole.closePath();
  shape.holes.push(hole);
  const land = new THREE.Mesh(new THREE.ShapeGeometry(shape), grassMat);
  land.rotation.x = -Math.PI / 2;
  land.position.y = GROUND_Y;
  land.receiveShadow = true;
  scene.add(land);
  solids.push(land);

  const quayPts = (pts) => {
    for (let i = 0; i < pts.length - 1; i++) {
      const x0 = pts[i][0];
      const z0 = pts[i][1];
      const x1 = pts[i + 1][0];
      const z1 = pts[i + 1][1];
      if (x0 < -30 || x1 > 280) continue;
      const dx = x1 - x0;
      const dz = z1 - z0;
      const len = Math.hypot(dx, dz) + 0.6;
      const wall = new THREE.Mesh(new THREE.BoxGeometry(1.1, GROUND_Y + 0.15, len), quayMat);
      wall.position.set((x0 + x1) / 2, (GROUND_Y + 0.15) / 2, (z0 + z1) / 2);
      wall.rotation.y = Math.atan2(dx, dz);
      wall.castShadow = true;
      wall.receiveShadow = true;
      scene.add(wall);
    }
  };
  quayPts(south);
  quayPts(north.filter((p) => p[0] > -10));

  const pH = PLATEAU_TOP - GROUND_Y;
  const plateau = new THREE.Mesh(new THREE.BoxGeometry(134, pH, 88), [
    stoneDark, stoneDark, pavementMat, stoneDark, stoneDark, stoneDark,
  ]);
  plateau.position.set(5, GROUND_Y + pH / 2, 162);
  addMesh(plateau);

  const rampGeo = new THREE.BufferGeometry();
  const rw = 11;
  const rx = 6;
  const rz0 = 42;
  const rz1 = 120;
  rampGeo.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array([
      rx - rw / 2, GROUND_Y + 0.12, rz0,
      rx + rw / 2, GROUND_Y + 0.12, rz0,
      rx + rw / 2, PLATEAU_TOP + 0.12, rz1,
      rx - rw / 2, PLATEAU_TOP + 0.12, rz1,
    ]), 3),
  );
  rampGeo.setIndex([0, 2, 1, 0, 3, 2]);
  rampGeo.computeVertexNormals();
  if (rampGeo.getAttribute("normal").getY(0) < 0) {
    rampGeo.setIndex([0, 1, 2, 0, 2, 3]);
    rampGeo.computeVertexNormals();
  }
  const ramp = new THREE.Mesh(rampGeo, roadMat);
  ramp.receiveShadow = true;
  scene.add(ramp);
  console.assert(rampGeo.getAttribute("normal").getY(0) > 0, "ramp faces down");

  const island = new THREE.Mesh(new THREE.CircleGeometry(1, 28), parkMat);
  island.rotation.x = -Math.PI / 2;
  island.scale.set(18, 10, 1);
  island.position.set(-78, 0.85, 6);
  island.receiveShadow = true;
  scene.add(island);
  for (let i = 0; i < 6; i++) addTree(-78 + (hash(i, 2) - 0.5) * 16, 6 + (hash(i, 3) - 0.5) * 8, 0.7, "round");

  for (const x of [0, -72, -150]) {
    const z = riverCenterZ(x);
    const deck = new THREE.Mesh(new THREE.BoxGeometry(x === 0 ? 18 : 12, 0.55, 36), pavementMat);
    deck.position.set(x, GROUND_Y - 0.05, z);
    track(deck);
    scene.add(deck);
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(x === 0 ? 18 : 12, 0.7, 0.28), metalMat);
      rail.position.set(x, GROUND_Y + 0.55, z + side * 16);
      scene.add(rail);
    }
    for (let i = -2; i <= 2; i++) {
      for (const side of [-1, 1]) {
        const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.4, 6), metalMat);
        lamp.position.set(x + i * (x === 0 ? 3.2 : 2.2), GROUND_Y + 1.2, z + side * 15);
        scene.add(lamp);
      }
    }
  }

  const southProm = [];
  const northProm = [];
  for (let x = 0; x <= 150; x += 16) {
    southProm.push([x, southShoreZ(Math.max(x, 12)) + 14]);
    northProm.push([x, northShoreZ(Math.max(x, 12)) - 14]);
  }
  addRoad(southProm, 8, GROUND_Y + 0.12);
  addRoad(northProm, 8, GROUND_Y + 0.12);
  addRails(southProm, GROUND_Y + 0.2);
  const toStation = [[0, -8], [-50, -36], [-110, -78], [-172, -112]];
  addRoad(toStation, 9, GROUND_Y + 0.12);
  addRails(toStation, GROUND_Y + 0.2);
  addRoad([[6, 122], [6, 200]], 7, PLATEAU_TOP + 0.12);
  addRoad([[-20, 156], [-200, 156]], 8, GROUND_Y + 0.14);

  const SKIP = [
    [-20, 36, 136, 196],
    [-2, 16, 30, 200],
    [18, 120, 48, 120],
    [-205, -95, 112, 198],
    [-215, -28, 198, 345],
    [-300, -40, -240, -70],
    [-370, 0, -720, -350],
    [-30, 40, -36, 40],
    [-256, -224, -66, -34],
  ];
  const blocked = (x, z) => SKIP.some((r) => x >= r[0] && x <= r[1] && z >= r[2] && z <= r[3]);
  const districts = [
    { x0: -54, x1: 64, z0: 126, z1: 198, y: PLATEAU_TOP, cell: 13.5, style: "old", f0: 3, f1: 6, keep: 0.92 },
    { x0: -90, x1: 16, z0: 28, z1: 112, y: GROUND_Y, cell: 16, style: "haussmann", f0: 4, f1: 6, keep: 0.86 },
    { x0: -250, x1: -70, z0: 28, z1: 112, y: GROUND_Y, cell: 18, style: "haussmann", f0: 4, f1: 7, keep: 0.8 },
    { x0: 36, x1: 150, z0: 100, z1: 250, y: GROUND_Y, cell: 18, style: "haussmann", f0: 4, f1: 6, keep: 0.78 },
    { x0: -210, x1: -16, z0: -112, z1: -28, y: GROUND_Y, cell: 16, style: "city", f0: 4, f1: 7, keep: 0.72 },
    { x0: 8, x1: 168, z0: -150, z1: -64, y: GROUND_Y, cell: 17, style: "city", f0: 5, f1: 8, keep: 0.7 },
    { x0: -240, x1: -30, z0: 340, z1: 470, y: GROUND_Y, cell: 22, style: "city", f0: 3, f1: 6, keep: 0.55 },
    { x0: -340, x1: -40, z0: -360, z1: -250, y: GROUND_Y, cell: 26, style: "city", f0: 3, f1: 5, keep: 0.28 },
  ];
  let buildingCount = 0;
  for (const dist of districts) {
    for (let x = dist.x0; x <= dist.x1; x += dist.cell) {
      for (let z = dist.z0; z <= dist.z1; z += dist.cell) {
        const h1 = hash(x, z);
        const h2 = hash(z, x + 4);
        if (h1 > dist.keep) continue;
        if (blocked(x, z)) continue;
        if (isWater(x, z) || isWater(x + 12, z) || isWater(x - 12, z) || isWater(x, z + 12) || isWater(x, z - 12)) continue;
        if (dist.y === GROUND_Y && onPlateau(x, z)) continue;
        if (dist.y === PLATEAU_TOP && !onPlateau(x, z)) continue;
        const floors = dist.f0 + Math.floor(h2 * (dist.f1 - dist.f0 + 1));
        const fw = dist.cell * (0.5 + h1 * 0.12);
        const fd = dist.cell * (0.48 + h2 * 0.12);
        const b = makeBuilding(fw, fd, floors, dist.style, Math.floor(hash(x + 9, z) * 3));
        b.position.set(x + (h1 - 0.5) * 1.2, dist.y, z + (h2 - 0.5) * 1.2);
        b.rotation.y = (hash(x, z + 2) - 0.5) * (dist.style === "old" ? 0.16 : 0.04);
        scene.add(b);
        buildingCount++;
      }
    }
  }

  buildCathedral();
  buildNeuve();
  buildBastions();
  buildStation();
  buildUN();
  buildLakefront();
  jetBits = buildJet();
  buildMountains();
  buildTraffic(southProm, toStation);
  buildTrees();

  const problems = [];
  if (!isWater(A.jet[0], A.jet[1])) problems.push("jet not in water");
  if (isWater(A.cathedral[0], A.cathedral[1])) problems.push("cathedral in water");
  if (isWater(A.flower[0], A.flower[1])) problems.push("flower clock in water");
  if (isWater(A.cornavin[0], A.cornavin[1])) problems.push("station in water");
  if (isWater(A.un[0], A.un[1])) problems.push("UN in water");
  if (isWater(A.neuve[0], A.neuve[1])) problems.push("Place de Neuve in water");
  if (isWater(A.bastions[0], A.bastions[1])) problems.push("Bastions in water");
  if (!onPlateau(A.cathedral[0], A.cathedral[1])) problems.push("cathedral off the hill");
  if (problems.length) throw new Error(problems.join("; "));
  console.log(`geneva buildings ${buildingCount} trees ${treeList.length}`);
  return waterMat;
}

function buildCathedral() {
  const g = new THREE.Group();
  const nave = new THREE.Mesh(new THREE.BoxGeometry(16, 13, 40), stoneMat);
  nave.position.y = 6.5;
  track(nave);
  g.add(nave);
  const aisleL = new THREE.Mesh(new THREE.BoxGeometry(6, 8, 36), stoneMat);
  aisleL.position.set(-10, 4, 0);
  track(aisleL);
  g.add(aisleL);
  const aisleR = aisleL.clone();
  aisleR.position.x = 10;
  track(aisleR);
  g.add(aisleR);
  const roof = new THREE.Mesh(gableGeometry(17, 42, 5.5), copperMat);
  roof.position.y = 13;
  track(roof);
  g.add(roof);
  const tower = new THREE.Mesh(new THREE.BoxGeometry(8, 16, 8), stoneMat);
  tower.position.set(0, 18, -8);
  track(tower);
  g.add(tower);
  const spire = new THREE.Mesh(new THREE.ConeGeometry(3.1, 20, 8), copperMat);
  spire.position.set(0, 36, -8);
  track(spire);
  g.add(spire);
  columnRow(g, 6, 14, 0, -20.6, 8, 0.42, stoneMat);
  const ped = new THREE.Mesh(gableGeometry(16, 3.2, 3.4), stoneMat);
  ped.position.set(0, 8, -20.4);
  track(ped);
  g.add(ped);
  g.position.set(A.cathedral[0], PLATEAU_TOP, A.cathedral[1]);
  scene.add(g);
  addFlag(A.cathedral[0] + 14, A.cathedral[1] - 18, swissMat, 0.4, 14);
}

function buildNeuve() {
  const plaza = new THREE.Mesh(new THREE.BoxGeometry(78, 0.12, 62), pavementMat);
  plaza.position.set(A.neuve[0], GROUND_Y + 0.08, A.neuve[1]);
  plaza.receiveShadow = true;
  scene.add(plaza);

  const theatre = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(28, 14, 18), stoneMat);
  body.position.y = 7;
  track(body);
  theatre.add(body);
  columnRow(theatre, 8, 24, 1.2, 10, 8.5, 0.48, stoneMat);
  const ped = new THREE.Mesh(gableGeometry(26, 3, 4), stoneMat);
  ped.position.set(0, 10, 10);
  track(ped);
  theatre.add(ped);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(27, 1.2, 16), copperMat);
  roof.position.y = 14.6;
  track(roof);
  theatre.add(roof);
  // Local +Z is the columned front. -PI/2 turns that front toward world -X (the square).
  theatre.rotation.y = -Math.PI / 2;
  theatre.position.set(A.theatre[0], GROUND_Y, A.theatre[1]);
  scene.add(theatre);

  const conserv = new THREE.Group();
  const cbody = new THREE.Mesh(new THREE.BoxGeometry(36, 12, 12), stoneMat);
  cbody.position.y = 6;
  track(cbody);
  conserv.add(cbody);
  columnRow(conserv, 7, 30, 0.8, 6.4, 7, 0.4, stoneMat);
  conserv.position.set(A.neuve[0], GROUND_Y, A.neuve[1] - 32);
  scene.add(conserv);

  const rath = new THREE.Group();
  const rbody = new THREE.Mesh(new THREE.BoxGeometry(16, 11, 18), stoneMat);
  rbody.position.y = 5.5;
  track(rbody);
  rath.add(rbody);
  columnRow(rath, 5, 14, 0.6, 9.4, 7.2, 0.38, stoneMat);
  rath.rotation.y = Math.PI / 2;
  rath.position.set(A.neuve[0] - 40, GROUND_Y, A.neuve[1]);
  scene.add(rath);

  const statue = new THREE.Group();
  const pedest = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 2, 1.3, 10), stoneDark);
  pedest.position.y = 0.65;
  track(pedest, false);
  statue.add(pedest);
  const torso = new THREE.Mesh(new THREE.BoxGeometry(1.05, 1.2, 3.3), bronzeMat);
  torso.position.set(0, 3.15, 0);
  statue.add(torso);
  const neck = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 0.7), bronzeMat);
  neck.position.set(0, 4.15, 1.35);
  neck.rotation.x = -0.45;
  statue.add(neck);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.42, 1.05), bronzeMat);
  head.position.set(0, 4.7, 2.15);
  statue.add(head);
  for (const [lx, lz] of [[-0.32, 1.05], [0.32, 1.05], [-0.32, -1.05], [0.32, -1.05]]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 2.1, 6), bronzeMat);
    leg.position.set(lx, 1.35, lz);
    statue.add(leg);
  }
  const rider = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.36, 1.35, 8), bronzeMat);
  rider.position.set(0, 4.45, 0);
  statue.add(rider);
  const rhead = new THREE.Mesh(new THREE.SphereGeometry(0.26, 8, 8), bronzeMat);
  rhead.position.set(0, 5.4, 0);
  statue.add(rhead);
  statue.position.set(A.neuve[0], GROUND_Y, A.neuve[1]);
  statue.rotation.y = Math.PI / 2;
  scene.add(statue);
}

function buildBastions() {
  const ground = new THREE.Mesh(new THREE.BoxGeometry(180, 0.1, 130), parkMat);
  ground.position.set(-120, GROUND_Y + 0.05, 272);
  ground.receiveShadow = true;
  scene.add(ground);
  const axialX = new THREE.Mesh(new THREE.BoxGeometry(168, 0.08, 5), pathMat);
  axialX.position.set(-120, GROUND_Y + 0.12, 270);
  scene.add(axialX);
  const axialZ = new THREE.Mesh(new THREE.BoxGeometry(5, 0.08, 118), pathMat);
  axialZ.position.set(-120, GROUND_Y + 0.12, 272);
  scene.add(axialZ);
  const pool = new THREE.Mesh(
    new THREE.BoxGeometry(26, 0.2, 14),
    new THREE.MeshStandardMaterial({ color: 0x1d6f86, roughness: 0.18, metalness: 0.35 }),
  );
  pool.position.set(-120, GROUND_Y + 0.16, 270);
  scene.add(pool);
  const beds = [[-150, 250, 0xc6455a], [-90, 250, 0xf0c24e], [-150, 292, 0x6a3e8e], [-90, 292, 0xf27a3d]];
  for (const [x, z, color] of beds) {
    const bed = new THREE.Mesh(
      new THREE.BoxGeometry(18, 0.28, 8),
      new THREE.MeshStandardMaterial({ color, roughness: 0.85 }),
    );
    bed.position.set(x, GROUND_Y + 0.2, z);
    scene.add(bed);
  }
  for (let x = -186; x <= -54; x += 14) {
    for (let z = 224; z <= 318; z += 14) {
      if (Math.abs(x + 120) < 6 || Math.abs(z - 270) < 6) continue;
      if (Math.abs(x + 120) < 20 && Math.abs(z - 270) < 12) continue;
      if (Math.abs(x - A.wall[0]) < 34 && z < A.wall[1] + 48) continue;
      addTree(x, z, 1.15 + hash(x, z) * 0.25, "round");
    }
  }
  const uni = new THREE.Mesh(new THREE.BoxGeometry(18, 16, 100), stoneMat);
  uni.position.set(-214, GROUND_Y + 8, 270);
  addMesh(uni);

  const wallBody = new THREE.Mesh(new THREE.BoxGeometry(92, 11, 2.4), stoneDark);
  wallBody.position.set(A.wall[0], GROUND_Y + 5.5, A.wall[1] - 0.4);
  addMesh(wallBody);
  const plaque = new THREE.Mesh(new THREE.PlaneGeometry(88, 9.2), plaqueMat);
  plaque.position.set(A.wall[0], GROUND_Y + 5.7, A.wall[1] + 0.9);
  scene.add(plaque);
  const namesX = [-30, -10, 10, 30];
  for (const x of namesX) {
    const figure = new THREE.Group();
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.95, 5.6, 8), stoneDark);
    robe.position.y = 2.8;
    figure.add(robe);
    const shoulders = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.4, 0.7), stoneDark);
    shoulders.position.y = 5.2;
    figure.add(shoulders);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 8, 8), stoneDark);
    head.position.y = 6.15;
    figure.add(head);
    figure.position.set(A.wall[0] + x, GROUND_Y, A.wall[1] + 2.4);
    scene.add(figure);
  }
}

function buildStation() {
  const body = new THREE.Mesh(new THREE.BoxGeometry(96, 15, 22), stoneMat);
  body.position.set(A.cornavin[0], GROUND_Y + 7.5, A.cornavin[1]);
  addMesh(body);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(98, 1.1, 24), roofZincMat);
  roof.position.set(A.cornavin[0], GROUND_Y + 15.6, A.cornavin[1]);
  addMesh(roof);
  const clock = new THREE.Mesh(new THREE.CircleGeometry(3.1, 28), clockMat);
  clock.position.set(A.cornavin[0], GROUND_Y + 11.2, A.cornavin[1] + 11.15);
  scene.add(clock);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(34, 8.2), signMat);
  sign.position.set(A.cornavin[0], GROUND_Y + 5.2, A.cornavin[1] + 11.25);
  scene.add(sign);
  const arch = new THREE.Mesh(archGeometry(150, 13), shedMat);
  arch.position.set(A.cornavin[0], GROUND_Y + 1, -180);
  addMesh(arch);
  for (const z of [-174, -188]) {
    const platform = new THREE.Mesh(new THREE.BoxGeometry(140, 0.7, 6), pavementMat);
    platform.position.set(A.cornavin[0], GROUND_Y + 0.8, z);
    platform.receiveShadow = true;
    scene.add(platform);
  }
  const makeTrain = () => {
    const g = new THREE.Group();
    for (let i = 0; i < 6; i++) {
      const car = new THREE.Mesh(new THREE.BoxGeometry(15.5, 3.4, 3.1), trainRed);
      car.position.set(i * 16.2, 2.3, 0);
      const band = new THREE.Mesh(new THREE.BoxGeometry(15.5, 0.55, 3.25), trainWhite);
      band.position.set(i * 16.2, 3.35, 0);
      const top = new THREE.Mesh(new THREE.BoxGeometry(14.6, 0.35, 2.8), roofFlatMat);
      top.position.set(i * 16.2, 4.15, 0);
      g.add(car, band, top);
    }
    scene.add(g);
    return g;
  };
  const trainA = makeTrain();
  const trainB = makeTrain();
  movers.push({
    mesh: trainA,
    custom: (t) => {
      trainA.position.set(-250 + ((t * 18) % 220), GROUND_Y + 1.1, -174);
      trainA.rotation.y = 0;
    },
  });
  movers.push({
    mesh: trainB,
    custom: (t) => {
      trainB.position.set(-30 - ((t * 14) % 220), GROUND_Y + 1.1, -188);
      trainB.rotation.y = Math.PI;
    },
  });
  addFlag(A.cornavin[0] + 42, A.cornavin[1] + 16, swissMat, 1.2, 12);
  const tower = makeBuilding(16, 16, 12, "city", 2);
  tower.position.set(-242, GROUND_Y, -48);
  scene.add(tower);
}

function buildUN() {
  const g = new THREE.Group();
  const wing = new THREE.Mesh(new THREE.BoxGeometry(120, 14, 28), stoneMat);
  wing.position.y = 7;
  track(wing);
  g.add(wing);
  const center = new THREE.Mesh(new THREE.BoxGeometry(26, 22, 34), stoneMat);
  center.position.y = 11;
  track(center);
  g.add(center);
  columnRow(g, 16, 70, 0.4, 16, 9, 0.55, stoneMat);
  const court = new THREE.Mesh(new THREE.BoxGeometry(40, 10, 16), stoneDark);
  court.position.set(0, 5, -18);
  track(court);
  g.add(court);
  g.position.set(A.un[0], GROUND_Y, A.un[1]);
  scene.add(g);

  const lawn = new THREE.Mesh(new THREE.BoxGeometry(280, 0.08, 300), parkMat);
  lawn.position.set(A.un[0], GROUND_Y + 0.04, A.un[1] + 40);
  lawn.receiveShadow = true;
  scene.add(lawn);

  for (let i = 0; i < 8; i++) {
    const z = A.chair[1] - 16 - i * 8;
    addFlag(A.un[0] - 16, z, unMat, i * 0.45, 12);
    addFlag(A.un[0] + 16, z, unMat, i * 0.45 + 0.8, 12);
  }
  for (let i = 0; i < 46; i++) {
    const x = A.un[0] - 130 + hash(i, 8) * 260;
    const z = A.un[1] - 80 + hash(i, 9) * 250;
    if (Math.abs(x - A.un[0]) < 70 && Math.abs(z - A.un[1]) < 30) continue;
    if (Math.abs(x - A.un[0]) < 26 && z < A.chair[1] && z > A.un[1] - 10) continue;
    if (Math.hypot(x - A.chair[0], z - A.chair[1]) < 16) continue;
    addTree(x, z, 0.85 + hash(i, 10) * 0.5, hash(i, 11) > 0.72 ? "tall" : "round");
  }

  const chair = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.BoxGeometry(9, 0.8, 9), chairWood);
  seat.position.y = 7.2;
  const back = new THREE.Mesh(new THREE.BoxGeometry(9, 9.5, 0.8), chairWood);
  back.position.set(0, 11.6, -4.1);
  const legs = [[-3.5, 3.4, 7.2], [3.5, 3.4, 7.2], [-3.5, -3.4, 7.2], [3.5, -3.4, 2.3]];
  chair.add(seat, back);
  for (const [x, z, h] of legs) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(1, h, 1), chairWood);
    leg.position.set(x, h / 2, z);
    leg.castShadow = true;
    chair.add(leg);
  }
  const splinter = new THREE.Mesh(new THREE.BoxGeometry(0.45, 1.8, 0.45), chairWood);
  splinter.position.set(4.3, 2.6, -3.4);
  splinter.rotation.z = 0.55;
  chair.add(splinter);
  chair.position.set(A.chair[0], GROUND_Y, A.chair[1]);
  chair.rotation.y = Math.PI;
  chair.traverse((o) => {
    if (o.isMesh) track(o, false);
  });
  scene.add(chair);

  const ariana = new THREE.Group();
  const ab = new THREE.Mesh(new THREE.BoxGeometry(16, 8, 12), stoneMat);
  ab.position.y = 4;
  track(ab);
  ariana.add(ab);
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(6.2, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2),
    copperMat,
  );
  dome.position.y = 8;
  track(dome);
  ariana.add(dome);
  ariana.position.set(A.un[0] + 78, GROUND_Y, A.un[1] + 36);
  scene.add(ariana);
}

function buildLakefront() {
  const lawn = new THREE.Mesh(new THREE.CircleGeometry(26, 28), parkMat);
  lawn.rotation.x = -Math.PI / 2;
  lawn.position.set(58, GROUND_Y + 0.1, 86);
  lawn.scale.set(1.3, 1, 1);
  lawn.receiveShadow = true;
  scene.add(lawn);
  const clock = new THREE.Mesh(new THREE.CircleGeometry(8.2, 48), flowerMat);
  clock.rotation.x = -Math.PI / 2;
  clock.position.set(A.flower[0], GROUND_Y + 0.22, A.flower[1]);
  scene.add(clock);
  const colors = [0xe24b62, 0xf2c14e, 0xf7f4ea, 0x5b3d8a, 0x3e8f6a];
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    const petal = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.35, 1.5),
      new THREE.MeshStandardMaterial({ color: colors[i % colors.length], roughness: 0.8 }),
    );
    petal.position.set(A.flower[0] + Math.cos(a) * 10.2, GROUND_Y + 0.28, A.flower[1] + Math.sin(a) * 10.2);
    scene.add(petal);
  }
  for (let i = 0; i < 12; i++) {
    const x = 28 + hash(i, 21) * 70;
    const z = 58 + hash(i, 22) * 42;
    if (Math.hypot(x - A.flower[0], z - A.flower[1]) < 16) continue;
    addTree(x, z, 1.05, "round");
  }
  const deck = new THREE.Mesh(new THREE.BoxGeometry(11, 0.45, 54), woodMat);
  deck.position.set(152, 1.05, -46);
  addMesh(deck);
  for (const [z, w, d, h] of [[-64, 7, 8, 2.6], [-48, 5.5, 6, 2.3], [-32, 4.5, 5, 2.1]]) {
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), cabinMat);
    cabin.position.set(152, 1.2 + h / 2, z);
    addMesh(cabin, false);
  }

  for (let x = 30; x <= 170; x += 22) {
    const z = northShoreZ(x) - 26;
    if (isWater(x, z) || isWater(x, z + 10) || isWater(x + 8, z)) continue;
    const hotel = makeBuilding(16, 14, 6 + (x % 3), "haussmann", x % 3);
    hotel.position.set(x, GROUND_Y, z);
    hotel.rotation.y = Math.PI;
    scene.add(hotel);
  }
}

function buildJet() {
  const core = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 2.6, 104, 18, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0xf7fbff,
      transparent: true,
      opacity: 0.32,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  core.position.set(A.jet[0], 52, A.jet[1]);
  scene.add(core);
  const mist = new THREE.Mesh(
    new THREE.SphereGeometry(8, 16, 12),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
    }),
  );
  mist.position.set(A.jet[0], 104, A.jet[1]);
  scene.add(mist);
  const n = 900;
  const arr = new Float32Array(n * 3);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  const dropMap = canvasTex((g, w, h) => {
    const grd = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    grd.addColorStop(0, "rgba(255,255,255,1)");
    grd.addColorStop(0.35, "rgba(255,255,255,0.7)");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grd;
    g.fillRect(0, 0, w, h);
  }, 64, 64, false);
  const pts = new THREE.Points(
    geo,
    new THREE.PointsMaterial({
      color: 0xf8fcff,
      map: dropMap,
      size: 2.2,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.NormalBlending,
      sizeAttenuation: true,
      alphaTest: 0.04,
    }),
  );
  scene.add(pts);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(5.2, 0.45, 8, 28), quayMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.set(A.jet[0], 0.35, A.jet[1]);
  scene.add(ring);

  const sailShape = new THREE.Shape();
  sailShape.moveTo(0, 0);
  sailShape.lineTo(0, 8);
  sailShape.lineTo(2.6, 1.1);
  sailShape.closePath();
  const sailGeo = new THREE.ShapeGeometry(sailShape);
  const spots = [[168, 12, 0.4], [196, -18, 1.2], [246, 28, 2.1], [278, -8, 0.2], [188, 26, 2.6], [236, -32, 1.7]];
  for (const [x, z, phase] of spots) {
    const b = new THREE.Group();
    const hull = new THREE.Mesh(new THREE.BoxGeometry(6.2, 1.15, 2.1), hullMat);
    hull.position.y = 0.45;
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.1, 1.6), cabinMat);
    cabin.position.set(-0.4, 1.2, 0);
    b.add(hull, cabin);
    if (phase > 1.5) {
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 8, 5), woodMat);
      mast.position.set(0.2, 4.2, 0);
      const sail = new THREE.Mesh(sailGeo, sailMat);
      sail.position.set(0.2, 1.2, 0.15);
      b.add(mast, sail);
    }
    b.userData.base = [x, z, phase];
    scene.add(b);
    boats.push(b);
  }

  const birdGeoBody = new THREE.BoxGeometry(0.7, 0.18, 0.28);
  const wingGeo = new THREE.BoxGeometry(1.1, 0.06, 0.35);
  const birdMat = new THREE.MeshBasicMaterial({ color: 0xfffbf6 });
  for (let i = 0; i < 7; i++) {
    const bird = new THREE.Group();
    bird.add(new THREE.Mesh(birdGeoBody, birdMat));
    const lw = new THREE.Mesh(wingGeo, birdMat);
    lw.position.x = -0.8;
    const rw = new THREE.Mesh(wingGeo, birdMat);
    rw.position.x = 0.8;
    bird.add(lw, rw);
    bird.userData.i = i;
    scene.add(bird);
    birds.push(bird);
  }

  return { geo, arr, n, mist, core };
}

let jetBits = null;

function buildMountains() {
  const rock = new THREE.MeshStandardMaterial({ color: 0x8e98a4, roughness: 1 });
  const snow = new THREE.MeshStandardMaterial({ color: 0xf4f7fb, roughness: 0.7 });
  const moss = new THREE.MeshStandardMaterial({ color: 0x6d8b62, roughness: 1 });
  for (let i = 0; i < 9; i++) {
    const h = 96 + (i % 3) * 26;
    const hill = new THREE.Mesh(new THREE.ConeGeometry(78 + (i % 2) * 24, h, 6), i % 2 ? moss : rock);
    hill.position.set(-720 + i * 180, h * 0.42, 1020);
    scene.add(hill);
  }
  for (let i = 0; i < 8; i++) {
    const h = 70 + (i % 4) * 18;
    const hill = new THREE.Mesh(new THREE.ConeGeometry(86, h, 6), rock);
    hill.position.set(-1320, h * 0.36, -760 + i * 190);
    scene.add(hill);
  }
  const blancBase = new THREE.Mesh(new THREE.ConeGeometry(300, 280, 7), rock);
  blancBase.position.set(1320, 90, -40);
  scene.add(blancBase);
  const blanc = new THREE.Mesh(new THREE.ConeGeometry(150, 460, 6), snow);
  blanc.position.set(1320, 250, -40);
  scene.add(blanc);
}

function buildTrees() {
  const n = treeList.length;
  if (!n) return;
  const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.28, 0.4, 1, 6), barkMat, n);
  const crown = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 6), leafMat, n);
  trunk.castShadow = crown.castShadow = true;
  trunk.receiveShadow = crown.receiveShadow = true;
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  treeList.forEach((t, i) => {
    const tall = t.kind === "tall";
    const trunkH = (tall ? 8.2 : 5.2) * t.s;
    dummy.position.set(t.x, t.y + trunkH / 2, t.z);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.set(tall ? 0.65 : 1, trunkH, tall ? 0.65 : 1);
    dummy.updateMatrix();
    trunk.setMatrixAt(i, dummy.matrix);
    const crownR = (tall ? 1.2 : 3.5) * t.s;
    const crownH = (tall ? 3.4 : 2.6) * t.s;
    dummy.position.set(t.x, t.y + trunkH + crownH * 0.25, t.z);
    dummy.scale.set(crownR, crownH, crownR);
    dummy.rotation.y = hash(t.x, t.z) * 6;
    dummy.updateMatrix();
    crown.setMatrixAt(i, dummy.matrix);
    color.setHSL(0.26 + hash(t.z, t.x) * 0.07, 0.45, 0.32 + hash(t.x, t.z) * 0.16);
    crown.setColorAt(i, color);
  });
  scene.add(trunk, crown);
  solids.push(trunk, crown);
}

function buildTraffic(southProm, toStation) {
  for (let i = 0; i < southProm.length; i += 2) {
    addTree(southProm[i][0], southProm[i][1] + 7, 1.05, "round");
  }
  for (let x = 20; x <= 160; x += 18) {
    const z = northShoreZ(Math.max(x, 12)) - 8;
    if (!isWater(x, z - 2)) addTree(x, z, 1.15, "tall");
  }
  const carColors = [0xf2f2f0, 0x2c3e50, 0xc0392b, 0x1f6f8b, 0xe0b040, 0x333333];
  const spawnCars = (pts, count, speed) => {
    for (let i = 0; i < count; i++) {
      const color = carColors[i % carColors.length];
      const car = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 1.15, 4.2),
        new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.2 }),
      );
      body.position.y = 0.85;
      const top = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 0.8, 2.2),
        new THREE.MeshStandardMaterial({ color: 0xd5e7ef, roughness: 0.2, metalness: 0.3 }),
      );
      top.position.y = 1.65;
      car.add(body, top);
      scene.add(car);
      movers.push({ mesh: car, pts, speed, y: GROUND_Y + 0.15, phase: i * 3.7 });
    }
  };
  spawnCars(southProm, 5, 9);
  spawnCars(toStation, 4, 11);
  const tram = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.5, 3.1, 20), trainWhite);
  body.position.y = 2;
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.65, 0.7, 20), trainRed);
  stripe.position.y = 2.55;
  const win = new THREE.Mesh(new THREE.BoxGeometry(2.7, 1.05, 18), glassMat);
  win.position.y = 3.15;
  tram.add(body, stripe, win);
  scene.add(tram);
  movers.push({ mesh: tram, pts: southProm, speed: 7.5, y: GROUND_Y + 0.2, phase: 1.2 });
  addFlag(8, 30, swissMat, 0.2, 13);
}

function buildSky() {
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(4200, 32, 20),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
      uniforms: { uSun: { value: SUN_DIR.clone() } },
      vertexShader: `
        out vec3 vDir;
        void main() {
          vDir = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        in vec3 vDir;
        uniform vec3 uSun;
        out vec4 fragColor;
        void main() {
          vec3 d = normalize(vDir);
          float h = clamp(d.y, 0.0, 1.0);
          vec3 hor = vec3(0.98, 0.74, 0.55);
          vec3 mid = vec3(0.62, 0.80, 0.92);
          vec3 zen = vec3(0.30, 0.54, 0.80);
          vec3 col = mix(hor, mid, smoothstep(0.0, 0.22, h));
          col = mix(col, zen, smoothstep(0.18, 0.85, h));
          float sun = pow(max(dot(d, normalize(uSun)), 0.0), 90.0);
          float glow = pow(max(dot(d, normalize(uSun)), 0.0), 7.0);
          col += vec3(1.0, 0.86, 0.62) * sun;
          col += vec3(1.0, 0.68, 0.40) * glow * 0.38;
          fragColor = vec4(col, 1.0);
        }
      `,
    }),
  );
  scene.add(sky);
  const cloudTex = canvasTex((g, w, h) => {
    g.clearRect(0, 0, w, h);
    const puff = (x, y, rx, ry, a) => {
      g.save();
      g.translate(x, y);
      g.scale(rx, ry);
      const grd = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      grd.addColorStop(0, `rgba(255,255,255,${a})`);
      grd.addColorStop(0.55, `rgba(255,255,255,${(a * 0.22).toFixed(3)})`);
      grd.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = grd;
      g.beginPath();
      g.arc(0, 0, 1, 0, Math.PI * 2);
      g.fill();
      g.restore();
    };
    puff(128, 72, 78, 30, 0.75);
    puff(86, 78, 52, 22, 0.55);
    puff(168, 70, 48, 20, 0.5);
  }, 256, 140, false);
  const cloudMat = new THREE.MeshBasicMaterial({
    map: cloudTex,
    transparent: true,
    depthWrite: false,
    opacity: 0.38,
    fog: false,
  });
  const clouds = [];
  for (let i = 0; i < 9; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(150 + hash(i, 1) * 90, 52), cloudMat);
    m.position.set(-500 + hash(i, 2) * 1400, 640 + hash(i, 3) * 90, -400 + hash(i, 4) * 900);
    m.rotation.x = -Math.PI / 2;
    scene.add(m);
    clouds.push({ mesh: m, base: m.position.x });
  }
  return clouds;
}

// time, px, py, pz, lx, ly, lz, fov
const KEYS = [
  [0, -30, 175, 310, 50, 22, 90, 56],
  [5, 40, 108, 230, 8, 34, 150, 46],
  [9, 78, 82, 210, 6, 40, 158, 40],
  [13, -48, 74, 214, 6, 42, 158, 36],
  [17, 24, 90, 108, 6, 44, 162, 42],
  [21, 96, 58, 124, 64, 4, 78, 40],
  [26, 150, 52, 40, 214, 46, 2, 38],
  [32, 310, 62, 78, 214, 50, 2, 34],
  [37, 170, 72, -36, 214, 36, 2, 44],
  [42, -30, 86, -30, -172, 12, -146, 50],
  [47, -172, 46, -58, -172, 9, -146, 38],
  [52, -240, 40, -118, -172, 10, -168, 40],
  [57, -70, 96, -320, -186, 12, -500, 50],
  [63, -186, 48, -348, -186, 12, -524, 40],
  [68, -270, 40, -470, -150, 14, -524, 36],
  [73, -50, 150, 30, -148, 8, 156, 56],
  [78, -188, 42, 210, -120, 10, 156, 38],
  [82, -176, 36, 112, -112, 10, 156, 34],
  [86, -150, 56, 340, -112, 8, 206, 42],
  [91, -112, 40, 332, -112, 8, 206, 32],
  [96, 50, 190, 130, 214, 36, 8, 56],
];

const CUES = [
  { t0: 0, t1: 4.2, mode: "card", kicker: "DRONE FLIGHT", title: "Geneva", sub: "Flying over six places" },
  { t0: 4.2, t1: 19, mode: "lower", n: "01  /  06", kicker: "VIEILLE VILLE", title: "Old Town", sub: "Cathédrale Saint-Pierre" },
  { t0: 19, t1: 38.5, mode: "lower", n: "02  /  06", kicker: "RIVE DU LAC", title: "Lakeside", sub: "Jet d'Eau   ·   Jardin Anglais" },
  { t0: 38.5, t1: 56, mode: "lower", n: "03  /  06", kicker: "GARE DE CORNAVIN", title: "Central Station", sub: "Genève-Cornavin" },
  { t0: 56, t1: 72, mode: "lower", n: "04  /  06", kicker: "PALAIS DES NATIONS", title: "UN", sub: "Allée des drapeaux   ·   Broken Chair" },
  { t0: 72, t1: 85, mode: "lower", n: "05  /  06", kicker: "PLACE DE NEUVE", title: "Place de Neuve", sub: "Grand Théâtre   ·   Statue Dufour" },
  { t0: 85, t1: 92.6, mode: "lower", n: "06  /  06", kicker: "PARC DES BASTIONS", title: "Bastions", sub: "Mur des Réformateurs" },
  { t0: 92.6, t1: 96.05, mode: "card", kicker: "GENÈVE", title: "Geneva", sub: "Old Town  ·  Lakeside  ·  Central Station  ·  UN  ·  Place de Neuve  ·  Bastions" },
];

function catmull(p0, p1, p2, p3, u) {
  const u2 = u * u;
  const u3 = u2 * u;
  const out = [0, 0, 0];
  for (let k = 0; k < 3; k++) {
    out[k] = 0.5 * (
      2 * p1[k] +
      (-p0[k] + p2[k]) * u +
      (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * u2 +
      (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * u3
    );
  }
  return out;
}
function sample(t) {
  const n = KEYS.length;
  let i = 0;
  if (t <= KEYS[0][0]) i = 0;
  else if (t >= KEYS[n - 1][0]) i = n - 2;
  else while (i < n - 2 && KEYS[i + 1][0] < t) i++;
  const a = KEYS[Math.max(0, i - 1)];
  const b = KEYS[i];
  const c = KEYS[Math.min(n - 1, i + 1)];
  const d = KEYS[Math.min(n - 1, i + 2)];
  const span = c[0] - b[0] || 1;
  const u = Math.min(1, Math.max(0, (t - b[0]) / span));
  return {
    pos: catmull([a[1], a[2], a[3]], [b[1], b[2], b[3]], [c[1], c[2], c[3]], [d[1], d[2], d[3]], u),
    look: catmull([a[4], a[5], a[6]], [b[4], b[5], b[6]], [c[4], c[5], c[6]], [d[4], d[5], d[6]], u),
    fov: b[7] + (c[7] - b[7]) * (u * u * (3 - 2 * u)),
  };
}

function enforceClearance(pos) {
  scene.updateMatrixWorld(true);
  const gy = onPlateau(pos[0], pos[2]) ? PLATEAU_TOP : isWater(pos[0], pos[2]) ? 4 : GROUND_Y;
  if (pos[1] < gy + 7) pos[1] = gy + 7;
  raycaster.set(new THREE.Vector3(pos[0], 240, pos[2]), DOWN);
  raycaster.far = 260;
  const hits = raycaster.intersectObjects(blockers, false);
  if (hits.length && pos[1] < hits[0].point.y + 5) pos[1] = hits[0].point.y + 5;
  return pos;
}

let lastHeading = 0;
function applyCamera(t) {
  const s = sample(t);
  const pos = enforceClearance(s.pos.slice());
  const ahead = sample(Math.min(DURATION, t + 0.16)).pos;
  const behind = sample(Math.max(0, t - 0.16)).pos;
  camera.up.set(0, 1, 0);
  camera.position.set(pos[0], pos[1], pos[2]);
  camera.lookAt(s.look[0], s.look[1], s.look[2]);
  camera.fov = s.fov;
  camera.updateProjectionMatrix();
  const h1 = Math.atan2(ahead[0] - pos[0], ahead[2] - pos[2]);
  const h0 = Math.atan2(pos[0] - behind[0], pos[2] - behind[2]);
  let dh = h1 - h0;
  while (dh > Math.PI) dh -= Math.PI * 2;
  while (dh < -Math.PI) dh += Math.PI * 2;
  camera.rotateZ(Math.max(-0.22, Math.min(0.22, -dh * 2.8)));
  const vx = ahead[0] - behind[0];
  const vz = ahead[2] - behind[2];
  if (vx * vx + vz * vz > 0.04) {
    lastHeading = (Math.atan2(vx, -vz) * 180) / Math.PI;
    if (lastHeading < 0) lastHeading += 360;
  }
  return pos;
}

function smooth(x) {
  const t = Math.min(1, Math.max(0, x));
  return t * t * (3 - 2 * t);
}
function updateHud(t, pos) {
  let cue = CUES[0];
  for (const c of CUES) if (t >= c.t0 && t < c.t1) cue = c;
  const fade = smooth((t - cue.t0) / 0.55) * smooth((cue.t1 - t) / 0.55);
  const titleSize = cue.title.length > 7 ? 54 : 72;
  const block = `<div class="rule"></div><div class="kicker">${cue.kicker}</div><div class="title" style="font-size:${cue.mode === "card" ? (cue.title.length > 4 ? 96 : 112) : titleSize}px">${cue.title}</div><div class="sub">${cue.sub}</div>`;
  if (cue.mode === "card") {
    cardEl.innerHTML = block;
    cardEl.style.opacity = String(fade);
    lowerEl.style.opacity = "0";
  } else {
    lowerEl.innerHTML = block;
    lowerEl.style.opacity = String(fade);
    cardEl.style.opacity = "0";
  }
  const alt = Math.round(pos[1]);
  const hdg = String(Math.round(lastHeading)).padStart(3, "0");
  telemEl.innerHTML = `<b>●</b> REC<br>ALT ${alt} m<br>HDG ${hdg}°${cue.n ? `<br>${cue.n}` : ""}`;
  if (DEBUG) debugEl.textContent = `${t.toFixed(2)}s`;
  if (TOP) {
    cardEl.style.opacity = "0";
    lowerEl.style.opacity = "0";
    telemEl.style.opacity = "0";
  }
}

function updateWorld(t, waterMat) {
  waterMat.uniforms.uTime.value = t;
  for (const f of flags) f.rotation.y = Math.sin(t * 2.3 + f.userData.phase) * 0.42;
  for (const m of movers) {
    if (m.custom) {
      m.custom(t);
      continue;
    }
    const p = shuttle(m.pts, t + m.phase, m.speed);
    m.mesh.position.set(p.x, m.y, p.z);
    m.mesh.rotation.y = p.yaw;
  }
  for (const b of boats) {
    const [x, z, phase] = b.userData.base;
    b.position.set(x + Math.sin(t * 0.18 + phase) * 5, 0.25 + Math.sin(t * 1.3 + phase) * 0.12, z + Math.cos(t * 0.14 + phase) * 3.5);
    b.rotation.y = phase + Math.sin(t * 0.25 + phase) * 0.35;
    b.rotation.z = Math.sin(t * 1.1 + phase) * 0.04;
  }
  for (const bird of birds) {
    const i = bird.userData.i;
    const a = t * 0.32 + i * 0.85;
    const r = 28 + (i % 3) * 14;
    bird.position.set(A.jet[0] + Math.cos(a) * r, 18 + (i % 4) * 5 + Math.sin(t * 1.6 + i) * 1.2, A.jet[1] + Math.sin(a) * r * 0.62);
    bird.rotation.y = -a;
    const flap = Math.sin(t * 7 + i) * 0.45;
    bird.children[1].rotation.z = flap;
    bird.children[2].rotation.z = -flap;
  }
  if (jetBits) {
    const { arr, n, geo, mist } = jetBits;
    const cycle = 3.15;
    for (let i = 0; i < n; i++) {
      const phase = (t * 0.9 + i * 0.0137) % cycle;
      const u = phase / cycle;
      let y;
      let spread;
      if (u < 0.42) {
        const k = u / 0.42;
        y = k * 104;
        spread = 0.8 + k * 1.6;
      } else {
        const k = (u - 0.42) / 0.58;
        y = 104 * (1 - k);
        spread = 2.2 + k * 16;
      }
      const ang = i * 2.399963;
      const rad = spread * (0.25 + (i % 7) * 0.09);
      arr[i * 3] = A.jet[0] + Math.cos(ang) * rad;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = A.jet[1] + Math.sin(ang) * rad;
    }
    geo.attributes.position.needsUpdate = true;
    const pulse = 1 + Math.sin(t * 2.2) * 0.05;
    mist.scale.setScalar(pulse);
  }
  for (const c of cloudDrift) c.mesh.position.x = c.base + Math.sin(t * 0.05 + c.base) * 12 + t * 1.4;
}

let waterMatRef = null;
let cloudDrift = [];

function seek(t) {
  const tt = Math.max(0, Math.min(DURATION, t));
  updateWorld(tt, waterMatRef);
  let pos;
  if (TOP) {
    camera.position.set(-20, 820, 20);
    camera.up.set(0, 0, -1);
    camera.lookAt(-20, 0, 20);
    camera.fov = 42;
    camera.updateProjectionMatrix();
    pos = [camera.position.x, camera.position.y, camera.position.z];
  } else {
    pos = applyCamera(tt);
  }
  const look = sample(tt).look;
  const d = Math.min(460, Math.max(110, pos[1] * 1.2));
  sun.target.position.set(look[0], 6, look[2]);
  sun.position.set(look[0], 6, look[2]).addScaledVector(SUN_DIR, 280);
  const sc = sun.shadow.camera;
  sc.left = -d;
  sc.right = d;
  sc.top = d;
  sc.bottom = -d;
  sc.near = 8;
  sc.far = 760;
  sc.updateProjectionMatrix();
  sun.target.updateMatrixWorld();
  updateHud(tt, pos);
  renderer.render(scene, camera);
}

function audit() {
  const issues = [];
  let minClear = Infinity;
  let minY = Infinity;
  let travel = 0;
  let prev = null;
  for (let t = 0; t <= DURATION; t += 0.5) {
    const s = sample(t);
    const before = s.pos[1];
    const pos = enforceClearance(s.pos.slice());
    minY = Math.min(minY, pos[1]);
    if (prev) travel += Math.hypot(pos[0] - prev[0], pos[2] - prev[2]);
    prev = pos.slice();
    raycaster.set(new THREE.Vector3(pos[0], 240, pos[2]), DOWN);
    const hits = raycaster.intersectObjects(blockers, false);
    const roof = hits.length ? hits[0].point.y : 0;
    const clear = pos[1] - roof;
    minClear = Math.min(minClear, clear);
    if (clear < 4.2) issues.push({ t, clear: +clear.toFixed(2), y: +pos[1].toFixed(1), lifted: pos[1] - before > 0.4 });
    const ld = Math.hypot(pos[0] - s.look[0], pos[1] - s.look[1], pos[2] - s.look[2]);
    if (ld < 18) issues.push({ t, look: +ld.toFixed(1) });
  }
  return { minY: +minY.toFixed(2), minClear: +minClear.toFixed(2), travel: +travel.toFixed(1), issueCount: issues.length, issues: issues.slice(0, 12) };
}

window.__GENEVA__ = { ready: false, duration: DURATION };
window.addEventListener("error", (event) => {
  window.__BOOT_ERROR = String(event.message || event.error);
});

try {
  waterMatRef = buildWorld();
  cloudDrift = buildSky();
  // buildJet returns bits but buildWorld calls it and drops the return.
  // Re-find the particle system from the scene if needed — stored below.
  window.__GENEVA__.duration = DURATION;
  window.__GENEVA__.sample = sample;
  window.__GENEVA__.audit = audit;
  window.__GENEVA__.seek = seek;
  const bootT = Number(params.get("t") || 0);
  seek(Number.isFinite(bootT) ? bootT : 0);
  window.__GENEVA__.ready = true;
} catch (err) {
  window.__BOOT_ERROR = String(err && err.stack ? err.stack : err);
  console.error(err);
}
