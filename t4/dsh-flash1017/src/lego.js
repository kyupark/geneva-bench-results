import * as THREE from 'three';

// A deliberately small plastic palette.
export const PALETTE = {
  red: 0xdb3b32,
  redDark: 0xa62628,
  taxi: 0xf0b700,
  yellow: 0xffd21f,
  yellowDark: 0xd39b00,
  cream: 0xf1e6cb,
  white: 0xf7f2e6,
  offWhite: 0xe4dac3,
  stone: 0xc9bea9,
  stoneDark: 0x8e8f85,
  asphalt: 0x3d4850,
  asphaltDark: 0x313a41,
  sidewalk: 0xb8b1a2,
  sidewalkLight: 0xd3ccbb,
  line: 0xf2ead7,
  navy: 0x17374b,
  ink: 0x0c1d2a,
  teal: 0x16988d,
  lake: 0x2b84a5,
  lakeDeep: 0x14566e,
  grass: 0x6b9d53,
  grassDark: 0x4d7b3f,
  leaf: 0x4f9648,
  leafLight: 0x74b45d,
  copper: 0x3c8f7b,
  slate: 0x44505b,
  terracotta: 0xb55b3f,
  wood: 0x9c6b43,
  woodDark: 0x62422a,
  concrete: 0xb6b2a5,
  gold: 0xf4bf31,
  black: 0x1b1d20,
  tire: 0x17191a,
  glass: 0x2b586b,
  pink: 0xe67d9b,
  orange: 0xe27a35,
  blue: 0x377fbd,
  purple: 0x8062ad,
};

const materialCache = new Map();

export function plastic(color, opts = {}) {
  const key = `${color}|${opts.roughness ?? 0.38}|${opts.metalness ?? 0}|${opts.emissive ?? 0}|${opts.emissiveIntensity ?? 0}|${opts.transparent ?? false}|${opts.opacity ?? 1}`;
  if (materialCache.has(key)) return materialCache.get(key);
  const m = new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.38,
    metalness: opts.metalness ?? 0,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 0,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    flatShading: opts.flatShading ?? false,
  });
  materialCache.set(key, m);
  return m;
}

export function buildMaterial(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.42,
    metalness: opts.metalness ?? 0,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    flatShading: opts.flatShading ?? true,
    depthWrite: opts.depthWrite ?? true,
    side: opts.side ?? THREE.FrontSide,
  });
}

export const GEO = {
  box: new THREE.BoxGeometry(1, 1, 1),
  cylinder8: new THREE.CylinderGeometry(1, 1, 1, 8),
  cylinder12: new THREE.CylinderGeometry(1, 1, 1, 12),
  cylinder20: new THREE.CylinderGeometry(1, 1, 1, 20),
  sphere: new THREE.SphereGeometry(1, 10, 7),
  cone: new THREE.ConeGeometry(1, 1, 8),
  stud: new THREE.CylinderGeometry(1, 1, 0.17, 12),
};

const tmpMatrix = new THREE.Matrix4();
const tmpQuat = new THREE.Quaternion();
const tmpPos = new THREE.Vector3();
const tmpScale = new THREE.Vector3();
const tmpEuler = new THREE.Euler();

export class InstanceBatch {
  constructor(geometry, material, { castShadow = false, receiveShadow = false } = {}) {
    this.geometry = geometry;
    this.material = material;
    this.castShadow = castShadow;
    this.receiveShadow = receiveShadow;
    this.items = [];
  }
  add(x, y, z, sx, sy, sz, color, rotY = 0, rotX = 0, rotZ = 0) {
    this.items.push({ x, y, z, sx, sy, sz, color, rotX, rotY, rotZ });
  }
  build(parent) {
    if (!this.items.length) return null;
    const mesh = new THREE.InstancedMesh(this.geometry, this.material, this.items.length);
    mesh.castShadow = this.castShadow;
    mesh.receiveShadow = this.receiveShadow;
    mesh.frustumCulled = false;
    const color = new THREE.Color();
    for (let i = 0; i < this.items.length; i++) {
      const it = this.items[i];
      tmpPos.set(it.x, it.y, it.z);
      tmpEuler.set(it.rotX, it.rotY, it.rotZ);
      tmpQuat.setFromEuler(tmpEuler);
      tmpScale.set(it.sx, it.sy, it.sz);
      tmpMatrix.compose(tmpPos, tmpQuat, tmpScale);
      mesh.setMatrixAt(i, tmpMatrix);
      color.setHex(it.color);
      mesh.setColorAt(i, color);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    parent.add(mesh);
    return mesh;
  }
}

export function addBox(parent, w, h, d, x, y, z, color, opts = {}) {
  const mesh = new THREE.Mesh(GEO.box, opts.material || plastic(color, opts));
  mesh.scale.set(w, h, d);
  mesh.position.set(x, y, z);
  if (opts.rotY) mesh.rotation.y = opts.rotY;
  if (opts.rotX) mesh.rotation.x = opts.rotX;
  if (opts.rotZ) mesh.rotation.z = opts.rotZ;
  mesh.castShadow = opts.castShadow ?? true;
  mesh.receiveShadow = opts.receiveShadow ?? true;
  parent.add(mesh);
  return mesh;
}

export function addCylinder(parent, radiusTop, radiusBottom, height, x, y, z, color, opts = {}) {
  const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, opts.segments ?? 12);
  const mesh = new THREE.Mesh(geo, opts.material || plastic(color, opts));
  mesh.position.set(x, y, z);
  if (opts.rotX) mesh.rotation.x = opts.rotX;
  if (opts.rotY) mesh.rotation.y = opts.rotY;
  if (opts.rotZ) mesh.rotation.z = opts.rotZ;
  mesh.castShadow = opts.castShadow ?? true;
  mesh.receiveShadow = opts.receiveShadow ?? true;
  parent.add(mesh);
  return mesh;
}

export function addStuds(batch, cx, cz, width, depth, topY, color, step = 1.25, radius = 0.3) {
  // Legible roof studs: one every ~1.3 units, with a border.
  const cols = Math.max(1, Math.floor((width - 0.8) / step));
  const rows = Math.max(1, Math.floor((depth - 0.8) / step));
  const startX = cx - ((cols - 1) * step) / 2;
  const startZ = cz - ((rows - 1) * step) / 2;
  for (let ix = 0; ix < cols; ix++) {
    for (let iz = 0; iz < rows; iz++) {
      batch.add(startX + ix * step, topY + 0.085, startZ + iz * step, radius, 1, radius, color);
    }
  }
}

export function canvasRoundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

export function makeTextTexture(text, opts = {}) {
  const {
    width = 1024, height = 256, font = 'Lilita One', fontSize = 112,
    color = '#fff9e9', bg = 'rgba(8,23,35,0.88)', border = 'rgba(255,255,255,0.16)',
    accent = null, kicker = null, kickerColor, radius = 38, align = 'center',
    padding = 44, borderWidth = 2, shadow = true,
  } = opts;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);
  if (bg) {
    if (shadow) {
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.38)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 7;
      ctx.fillStyle = bg;
      canvasRoundRect(ctx, 5, 5, width - 10, height - 10, radius);
      ctx.fill();
      ctx.restore();
    } else {
      ctx.fillStyle = bg;
      canvasRoundRect(ctx, 0, 0, width, height, radius);
      ctx.fill();
    }
    if (border) {
      ctx.strokeStyle = border;
      ctx.lineWidth = borderWidth;
      canvasRoundRect(ctx, 4, 4, width - 8, height - 8, radius);
      ctx.stroke();
    }
  }
  if (accent) {
    ctx.fillStyle = accent;
    canvasRoundRect(ctx, 18, 18, 12, height - 36, 6);
    ctx.fill();
  }
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  const textX = align === 'left' ? padding + (accent ? 16 : 0) : width / 2;
  if (kicker) {
    ctx.font = `900 ${Math.round(fontSize * 0.27)}px 'Nunito Sans', sans-serif`;
    ctx.fillStyle = kickerColor || accent || '#ffd21f';
    ctx.letterSpacing = '6px';
    ctx.fillText(kicker.toUpperCase(), textX, height * 0.32);
  }
  ctx.letterSpacing = '0px';
  ctx.font = `${fontSize}px '${font}', 'Arial Black', sans-serif`;
  ctx.fillStyle = color;
  ctx.fillText(text, textX, kicker ? height * 0.61 : height * 0.53);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

export function makeLabelSprite(landmark) {
  const texture = makeTextTexture(landmark.short, {
    width: 750, height: 190, fontSize: 92, kicker: landmark.icon,
    accent: landmark.color, kickerColor: landmark.color,
    bg: 'rgba(8,23,35,0.9)', border: 'rgba(255,255,255,0.2)', radius: 30,
  });
  const material = new THREE.SpriteMaterial({
    map: texture, transparent: true, depthWrite: false, depthTest: true,
    sizeAttenuation: true, fog: true,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(7.5, 1.9, 1);
  sprite.renderOrder = 3;
  return sprite;
}

export function makeSign(text, opts = {}) {
  const texture = makeTextTexture(text, {
    width: opts.width || 1024, height: opts.height || 256,
    fontSize: opts.fontSize || 108,
    bg: opts.bg === undefined ? 'rgba(10,28,41,0.94)' : opts.bg,
    color: opts.color || '#fff9e9',
    accent: opts.accent || '#ffd21f',
    border: opts.border || 'rgba(255,255,255,0.18)',
    radius: opts.radius ?? 24,
  });
  const w = opts.planeWidth || 8;
  const h = w * ((opts.height || 256) / (opts.width || 1024));
  const material = new THREE.MeshStandardMaterial({
    map: texture, transparent: true, roughness: 0.45, metalness: 0,
    side: opts.twoSided ? THREE.DoubleSide : THREE.FrontSide, alphaTest: 0.02,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
  mesh.userData.isSign = true;
  return mesh;
}

const flagTextureCache = new Map();
const flagMaterialCache = new Map();

export function makeFlagTexture(type = 'swiss') {
  if (flagTextureCache.has(type)) return flagTextureCache.get(type);
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (type === 'swiss') {
    ctx.fillStyle = '#d52b1e'; ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = '#fff';
    ctx.fillRect(102, 52, 52, 152);
    ctx.fillRect(52, 102, 152, 52);
  } else if (type === 'geneva') {
    ctx.fillStyle = '#d52b1e'; ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = '#ffd21f';
    ctx.fillRect(0, 90, 105, 56);
    ctx.fillStyle = '#ffd21f';
    ctx.fillRect(26, 70, 54, 96);
  } else if (type === 'un') {
    ctx.fillStyle = '#4b92d4'; ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 4;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath(); ctx.arc(128, 128, 24 + i * 18, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.fillStyle = '#fff'; ctx.font = '700 34px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('UN', 128, 142);
  } else {
    const colors = ['#e43d38', '#f4c430', '#3183b9', '#4d9a57', '#8d65b1'];
    for (let i = 0; i < 3; i++) { ctx.fillStyle = colors[(type.charCodeAt(0) + i) % colors.length]; ctx.fillRect(i * 85, 0, 86, 256); }
  }
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  flagTextureCache.set(type, t);
  return t;
}

export function addFlag(parent, x, y, z, type = 'swiss', scale = 1, rotY = 0) {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  group.rotation.y = rotY;
  addCylinder(group, 0.055, 0.065, 4.7 * scale, 0, 2.35 * scale, 0, 0x676d70, { castShadow: false, segments: 6 });
  const flagGeo = new THREE.PlaneGeometry(2.0 * scale, 1.3 * scale, 4, 1);
  const pos = flagGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i);
    pos.setZ(i, Math.sin((px + 1) * 2.4) * 0.09 * scale);
  }
  if (!flagMaterialCache.has(type)) {
    flagMaterialCache.set(type, new THREE.MeshStandardMaterial({
      map: makeFlagTexture(type), side: THREE.DoubleSide, roughness: 0.65,
    }));
  }
  const mesh = new THREE.Mesh(flagGeo, flagMaterialCache.get(type));
  mesh.position.set(1.02 * scale, 4.0 * scale, 0);
  mesh.castShadow = true;
  group.add(mesh);
  parent.add(group);
  return group;
}

export function createMinifig(opts = {}) {
  const {
    shirt = 0x347abb, pants = 0x2b3d52, hair = 0x4b2d1d, skin = 0xf2c94c,
    cap = false, hatColor = 0xdb3b32, waving = false, suitcase = false,
    scale = 1,
  } = opts;
  const group = new THREE.Group();
  const add = (w, h, d, x, y, z, color, o = {}) => addBox(group, w, h, d, x, y, z, color, { castShadow: true, ...o });
  // legs
  add(0.37, 0.9, 0.5, -0.21, 0.47, 0, pants);
  add(0.37, 0.9, 0.5, 0.21, 0.47, 0, pants);
  add(0.78, 0.18, 0.53, 0, 0.94, 0, pants);
  // torso
  add(0.9, 0.8, 0.54, 0, 1.43, 0, shirt);
  add(0.95, 0.2, 0.56, 0, 1.14, 0, pants);
  add(0.2, 0.5, 0.57, 0, 1.47, 0.005, shirt, { castShadow: false });
  // arms
  const armL = new THREE.Group(); armL.position.set(-0.56, 1.72, 0); group.add(armL);
  addBox(armL, 0.2, 0.62, 0.24, 0, -0.27, 0, shirt, { rotZ: -0.12, castShadow: true });
  addCylinder(armL, 0.14, 0.14, 0.17, 0, -0.61, 0, skin, { castShadow: true, segments: 8 });
  const armR = new THREE.Group(); armR.position.set(0.56, 1.72, 0); group.add(armR);
  addBox(armR, 0.2, 0.62, 0.24, 0, -0.27, 0, shirt, { rotZ: 0.12, castShadow: true });
  addCylinder(armR, 0.14, 0.14, 0.17, 0, -0.61, 0, skin, { castShadow: true, segments: 8 });
  if (waving) armR.rotation.z = -2.25;
  // neck + head
  addCylinder(group, 0.17, 0.17, 0.14, 0, 1.9, 0, skin, { castShadow: true, segments: 10 });
  addCylinder(group, 0.31, 0.31, 0.44, 0, 2.17, 0, skin, { castShadow: true, segments: 12 });
  // little printed face
  addBox(group, 0.08, 0.1, 0.03, -0.1, 2.22, 0.305, 0x27201e, { castShadow: false });
  addBox(group, 0.08, 0.1, 0.03, 0.1, 2.22, 0.305, 0x27201e, { castShadow: false });
  addBox(group, 0.17, 0.035, 0.03, 0, 2.07, 0.305, 0x7b4b2e, { castShadow: false });
  // hair or cap
  if (cap) {
    addCylinder(group, 0.335, 0.335, 0.16, 0, 2.42, 0, hatColor, { castShadow: true, segments: 12 });
    addBox(group, 0.4, 0.06, 0.26, 0, 2.34, 0.23, hatColor, { castShadow: true });
    addBox(group, 0.27, 0.08, 0.17, 0, 2.51, -0.01, hatColor, { castShadow: true });
  } else {
    addCylinder(group, 0.32, 0.34, 0.15, 0, 2.43, 0, hair, { castShadow: true, segments: 10 });
    addBox(group, 0.34, 0.13, 0.19, 0, 2.31, -0.13, hair, { castShadow: true });
  }
  if (suitcase) {
    addBox(group, 0.62, 0.6, 0.38, 0.73, 0.36, 0.08, 0x815232, { castShadow: true });
    addCylinder(group, 0.035, 0.035, 0.42, 0.73, 0.89, 0.08, 0x3b2a1c, { castShadow: false, segments: 5 });
  }
  group.scale.setScalar(scale);
  group.userData.armR = armR;
  group.userData.armL = armL;
  return group;
}

export function createTree(kind = 'round') {
  const group = new THREE.Group();
  if (kind === 'cypress') {
    addCylinder(group, 0.27, 0.36, 3.2, 0, 1.6, 0, PALETTE.woodDark, { segments: 7 });
    const cone = new THREE.Mesh(new THREE.ConeGeometry(1.55, 5.2, 8), buildMaterial(PALETTE.grassDark));
    cone.position.y = 5.1; cone.castShadow = true; cone.receiveShadow = true; group.add(cone);
    const cone2 = new THREE.Mesh(new THREE.ConeGeometry(1.15, 3.3, 8), buildMaterial(PALETTE.leaf));
    cone2.position.y = 6.6; cone2.castShadow = true; group.add(cone2);
  } else {
    addCylinder(group, 0.26, 0.36, 2.3, 0, 1.15, 0, PALETTE.woodDark, { segments: 7 });
    const sizes = [[1.55, 1.1, 3.1, PALETTE.grassDark], [1.32, 1.0, 4.0, PALETTE.leaf], [1.02, 0.85, 4.9, PALETTE.leafLight]];
    for (const [r, sy, y, color] of sizes) {
      const geo = new THREE.IcosahedronGeometry(r, 1);
      const mesh = new THREE.Mesh(geo, buildMaterial(color));
      mesh.scale.y = sy;
      mesh.position.set((Math.random() - 0.5) * 0.4, y, (Math.random() - 0.5) * 0.4);
      mesh.castShadow = true; mesh.receiveShadow = true;
      group.add(mesh);
    }
    const stud = new THREE.Mesh(GEO.stud, plastic(PALETTE.leafLight));
    stud.scale.set(0.8, 0.7, 0.8); stud.position.y = 5.55; group.add(stud);
  }
  return group;
}

export function createLamp(color = 0x1f403e) {
  const group = new THREE.Group();
  addCylinder(group, 0.09, 0.16, 4.6, 0, 2.3, 0, color, { segments: 8 });
  addCylinder(group, 0.3, 0.42, 0.22, 0, 0.1, 0, color, { segments: 10 });
  addCylinder(group, 0.36, 0.36, 0.4, 0, 4.7, 0, 0xffefba, {
    material: new THREE.MeshStandardMaterial({ color: 0xfff2c9, emissive: 0xffd880, emissiveIntensity: 0.7, roughness: 0.25 }),
    segments: 8,
  });
  addCylinder(group, 0.43, 0.12, 0.2, 0, 4.98, 0, color, { segments: 8 });
  return group;
}

export function createBench() {
  const group = new THREE.Group();
  addBox(group, 2.3, 0.18, 0.58, 0, 0.62, 0, PALETTE.wood, { castShadow: true });
  addBox(group, 2.3, 0.16, 0.5, 0, 1.08, -0.24, PALETTE.wood, { castShadow: true });
  for (const x of [-0.9, 0.9]) {
    addBox(group, 0.12, 0.65, 0.55, x, 0.34, 0, 0x3c4548, { castShadow: true });
  }
  return group;
}

export function createBoat(color = 0xf5f0df) {
  const group = new THREE.Group();
  addBox(group, 3.2, 0.7, 7.5, 0, 0.4, 0, color, { castShadow: true });
  addBox(group, 3.25, 0.16, 7.4, 0, 0.74, 0, 0x2c5c6b, { castShadow: true });
  addBox(group, 2.7, 0.1, 5.6, 0, 0.05, 0, color, { castShadow: false });
  addBox(group, 2.5, 0.55, 3.8, 0, 1.0, -0.5, PALETTE.white, { castShadow: true });
  addBox(group, 1.8, 0.5, 2.0, 0, 1.44, -0.9, PALETTE.navy, { castShadow: true });
  addBox(group, 1.6, 0.08, 1.8, 0, 1.72, -0.9, 0xe25b46, { castShadow: false });
  addCylinder(group, 0.07, 0.08, 4.6, 0, 3.1, 1.3, 0x5f5140, { segments: 6, castShadow: true });
  const sail = addBox(group, 2.3, 2.8, 0.06, 0, 3.5, 0.85, 0xf3ecda, { castShadow: true, rotZ: 0.06 });
  sail.rotation.x = 0.08;
  sail.rotation.y = 0.12;
  const jib = addBox(group, 1.4, 1.8, 0.05, -1.25, 3.0, 1.0, 0xe5d9bd, { castShadow: true, rotZ: -0.15 });
  jib.rotation.y = 0.12;
  addFlag(group, 0, 0, 2.1, 'swiss', 0.34, 0.4);
  return group;
}

export function disposeObject(root) {
  root.traverse((o) => {
    if (o.geometry && !Object.values(GEO).includes(o.geometry)) o.geometry.dispose?.();
    if (o.material && o.material.map) o.material.map.dispose?.();
  });
}
