import { circleOBB } from "./collide.js";
import { forwardFromYaw, rightFromForward, yawToFace } from "./frame.js";
import {
  LANDMARKS,
  PROPS,
  ROADS,
  blockedPlaza,
  groundHeight,
  inPark,
  isDeadlyWater,
  landmark,
  nearestRoad,
  pointOnRoad,
  surfaceY,
  waterClearance,
} from "./geo.js";

const rnd = mulberry32(1201);
const buildings = [];
const colliders = [];
const trees = [];
const lamps = [];
const flowers = [];
const pickups = [];
const heroes = [];
const decor = [];
const rails = [];
const errors = [];

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function styleAt(x, z) {
  if (groundHeight(x, z) > 3.2) return "old";
  const chair = landmark("chair");
  if (z < chair.z + 520 && x < chair.x + 220) return "nations";
  if (z > landmark("pont").z + 30) return "rive";
  return "paquis";
}

const WALL = {
  old: ["#e6d3b0", "#dcc6a0", "#cdb892"],
  nations: ["#f6f3ec", "#e6eef6", "#f3f1ea"],
  rive: ["#f4e3c6", "#edd8b6", "#e8d2ae"],
  paquis: ["#f7ebda", "#f0e1c8", "#e8d8bf", "#f3e7d4"],
};
const ROOF = {
  old: ["#8d342c", "#7c4030"],
  nations: ["#ddd6ca", "#c9d3de"],
  rive: ["#b33b32", "#8d4038"],
  paquis: ["#c4473a", "#2c5e98", "#3c7844", "#b33b32"],
};
const AWN = ["#d21f2b", "#1d4fa3", "#2f8f4e", "#f0c431", "#e07a2f"];

function overlaps(x, z, w, d, rot) {
  const hx = w / 2;
  const hz = d / 2;
  const c = Math.abs(Math.cos(rot));
  const s = Math.abs(Math.sin(rot));
  const ex = hx * c + hz * s;
  const ez = hx * s + hz * c;
  for (let i = 0; i < colliders.length; i++) {
    const b = colliders[i];
    if (b.kind === "rail") continue;
    const bc = Math.abs(Math.cos(b.rot));
    const bs = Math.abs(Math.sin(b.rot));
    const bx = b.hx * bc + b.hz * bs;
    const bz = b.hx * bs + b.hz * bc;
    if (Math.abs(x - b.cx) < ex + bx + 1.4 && Math.abs(z - b.cz) < ez + bz + 1.4) return true;
  }
  return false;
}

function hitsRoad(x, z, w, d, rot) {
  const c = Math.cos(rot);
  const s = Math.sin(rot);
  const pts = [
    [0, 0],
    [w / 2, d / 2],
    [w / 2, -d / 2],
    [-w / 2, d / 2],
    [-w / 2, -d / 2],
    [w / 2, 0],
    [-w / 2, 0],
    [0, d / 2],
    [0, -d / 2],
  ];
  for (let i = 0; i < pts.length; i++) {
    const lx = pts[i][0];
    const lz = pts[i][1];
    const wx = x + lx * c + lz * s;
    const wz = z - lx * s + lz * c;
    const n = nearestRoad(wx, wz);
    if (n && n.dist < n.half + 1.3) return true;
  }
  return false;
}

function canPlace(x, z, w, d, rot) {
  if (isDeadlyWater(x, z) || waterClearance(x, z) < 12) return false;
  if (inPark(x, z) || blockedPlaza(x, z)) return false;
  if (hitsRoad(x, z, w, d, rot)) return false;
  if (overlaps(x, z, w, d, rot)) return false;
  return true;
}

function addBuilding(x, z, w, d, h, rot, kind) {
  const district = styleAt(x, z);
  const wall = WALL[district][Math.floor(rnd() * WALL[district].length)];
  const roofs = ROOF[district];
  const roof = roofs[Math.floor(rnd() * roofs.length)];
  const awning = (district === "paquis" || district === "rive") && rnd() > 0.35 ? AWN[Math.floor(rnd() * AWN.length)] : null;
  const rec = { x, z, w, d, h, rot, wall, roof, awning, y0: groundHeight(x, z), kind: kind || "block" };
  buildings.push(rec);
  colliders.push({ cx: x, cz: z, hx: w / 2, hz: d / 2, rot, kind: rec.kind, top: rec.y0 + h });
}

function addHero(rec) {
  rec.y0 = groundHeight(rec.x, rec.z);
  heroes.push(rec);
  if (rec.solid !== false) {
    colliders.push({
      cx: rec.x,
      cz: rec.z,
      hx: rec.w / 2,
      hz: rec.d / 2,
      rot: rec.rot || 0,
      kind: rec.kind,
      top: rec.y0 + rec.h,
    });
  }
}

function buildHeroes() {
  const corn = landmark("cornavin");
  addHero({ kind: "station", x: corn.x + 78, z: corn.z - 62, w: 108, d: 30, h: 18, rot: 0.08 });
  const old = landmark("oldtown");
  addHero({ kind: "cathedral", x: old.x + 6, z: old.z - 6, w: 20, d: 34, h: 16, rot: 0.15 });
  const chair = landmark("chair");
  addHero({ kind: "chair", x: chair.x, z: chair.z, w: 8, d: 8, h: 12, rot: 0.4, solid: true });
  addHero({ kind: "un", x: PROPS.un.x + 10, z: PROPS.un.z - 48, w: 92, d: 36, h: 16, rot: -0.2 });
  const bast = landmark("bastions");
  addHero({ kind: "wall", x: bast.x, z: bast.z, w: 72, d: 3.2, h: 9, rot: 0.02 });
  const bel = landmark("belair");
  addHero({ kind: "tower", x: bel.x - 34, z: bel.z + 26, w: 16, d: 16, h: 48, rot: 0.2 });
  const jet = landmark("jet");
  addHero({ kind: "nozzle", x: jet.x, z: jet.z, w: 4.2, d: 4.2, h: 3, rot: 0, solid: false });
  const paq = landmark("paquis");
  const pier = forwardFromYaw(0.15);
  const side = rightFromForward(pier);
  addHero({ kind: "cabin", x: paq.x + side.x * 8, z: paq.z + side.z * 8, w: 7, d: 5, h: 4.2, rot: 0.15 });
  addHero({ kind: "cabin", x: paq.x - side.x * 8, z: paq.z - side.z * 8, w: 6, d: 5, h: 3.6, rot: 0.15 });
  const neuve = landmark("neuve");
  addHero({ kind: "statue", x: neuve.x, z: neuve.z, w: 2.2, d: 2.2, h: 6, rot: 0 });

  let clock = { x: PROPS.flower.x, z: PROPS.flower.z };
  const near = nearestRoad(clock.x, clock.z);
  if (near && near.dist < near.half + 4) {
    const len = Math.hypot(near.dx, near.dz) || 1;
    const right = rightFromForward({ x: near.dx / len, z: near.dz / len });
    const a = { x: clock.x + right.x * 10, z: clock.z + right.z * 10 };
    const b = { x: clock.x - right.x * 10, z: clock.z - right.z * 10 };
    clock = waterClearance(a.x, a.z) >= waterClearance(b.x, b.z) ? a : b;
  }
  decor.push({ kind: "clock", x: clock.x, z: clock.z, rot: 0.2 });
  decor.push({ kind: "island", x: PROPS.ile.x, z: PROPS.ile.z });
}

function buildRails() {
  for (let r = 0; r < ROADS.length; r++) {
    const road = ROADS[r];
    if (!road.bridge && !road.pier) continue;
    for (let i = 0; i < road.segs.length; i++) {
      const seg = road.segs[i];
      const len = seg.len;
      const dx = (seg.bx - seg.ax) / len;
      const dz = (seg.bz - seg.az) / len;
      const midX = (seg.ax + seg.bx) / 2;
      const midZ = (seg.az + seg.bz) / 2;
      if (road.pier) {
        const jet = landmark("jet");
        const paq = landmark("paquis");
        if (Math.hypot(midX - jet.x, midZ - jet.z) < 20) continue;
        if (Math.hypot(midX - paq.x, midZ - paq.z) < 16) continue;
      }
      const right = rightFromForward({ x: dx, z: dz });
      const rot = yawToFace(dx, dz);
      const side = road.width / 2 - 0.4;
      for (const s of [-1, 1]) {
        const x = midX + right.x * s * side;
        const z = midZ + right.z * s * side;
        const y = surfaceY(x, z);
        rails.push({ x, z, len, rot, y });
        colliders.push({ cx: x, cz: z, hx: 0.32, hz: len / 2 - 0.3, rot, kind: "rail", top: y + 1 });
      }
    }
  }
}

function facingRoad(x, z) {
  const n = nearestRoad(x, z);
  if (!n) return 0;
  return yawToFace(n.x - x, n.z - z);
}

function buildStreets() {
  for (let r = 0; r < ROADS.length; r++) {
    const road = ROADS[r];
    if (road.noBuildings || road.length < 30) continue;
    const step = road.width < 11 ? 18 : 24;
    for (let dist = 12; dist < road.length - 12; dist += step) {
      const p = pointOnRoad(road, dist);
      const flen = Math.hypot(p.dx, p.dz) || 1;
      const fwd = { x: p.dx / flen, z: p.dz / flen };
      const right = rightFromForward(fwd);
      for (const s of [-1, 1]) {
        const district = styleAt(p.x, p.z);
        const depth = district === "old" ? 9 + rnd() * 4 : 12 + rnd() * 5;
        const width = district === "old" ? 10 + rnd() * 6 : 13 + rnd() * 9;
        let height = district === "old" ? 8 + rnd() * 7 : 11 + rnd() * 14;
        if (district === "nations") height = 8 + rnd() * 8;
        if (district === "paquis" && rnd() > 0.92) height = 30 + rnd() * 12;
        const gap = road.width / 2 + 3.2 + depth / 2;
        const x = p.x + right.x * s * gap;
        const z = p.z + right.z * s * gap;
        const rot = yawToFace(p.x - x, p.z - z);
        if (!canPlace(x, z, width, depth, rot)) continue;
        addBuilding(x, z, width, depth, height, rot, "block");
        if (rnd() > 0.62 && district !== "old") {
          const depth2 = 10 + rnd() * 4;
          const x2 = x + right.x * s * (depth / 2 + 3 + depth2 / 2);
          const z2 = z + right.z * s * (depth / 2 + 3 + depth2 / 2);
          if (canPlace(x2, z2, width * 0.9, depth2, rot)) addBuilding(x2, z2, width * 0.9, depth2, height * (0.7 + rnd() * 0.4), rot, "block");
        }
      }
    }
  }
}

function buildFill() {
  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (let i = 0; i < LANDMARKS.length; i++) {
    minX = Math.min(minX, LANDMARKS[i].x);
    maxX = Math.max(maxX, LANDMARKS[i].x);
    minZ = Math.min(minZ, LANDMARKS[i].z);
    maxZ = Math.max(maxZ, LANDMARKS[i].z);
  }
  for (let x = minX - 30; x <= maxX + 40 && buildings.length < 820; x += 32) {
    for (let z = minZ - 20; z <= maxZ + 30 && buildings.length < 820; z += 32) {
      const jx = x + (rnd() - 0.5) * 10;
      const jz = z + (rnd() - 0.5) * 10;
      const n = nearestRoad(jx, jz);
      if (!n || n.dist < n.half + 18 || n.dist > 78) continue;
      const rot = facingRoad(jx, jz);
      const w = 12 + rnd() * 8;
      const d = 11 + rnd() * 6;
      const district = styleAt(jx, jz);
      let h = district === "old" ? 8 + rnd() * 6 : 10 + rnd() * 12;
      if (!canPlace(jx, jz, w, d, rot)) continue;
      addBuilding(jx, jz, w, d, h, rot, "fill");
    }
  }
}

function buildGreen() {
  for (let r = 0; r < ROADS.length; r++) {
    const road = ROADS[r];
    if (!road.trees) continue;
    for (let dist = 16; dist < road.length; dist += 34) {
      const p = pointOnRoad(road, dist);
      const flen = Math.hypot(p.dx, p.dz) || 1;
      const right = rightFromForward({ x: p.dx / flen, z: p.dz / flen });
      const a = { x: p.x + right.x * (road.width / 2 + 4.5), z: p.z + right.z * (road.width / 2 + 4.5) };
      const b = { x: p.x - right.x * (road.width / 2 + 4.5), z: p.z - right.z * (road.width / 2 + 4.5) };
      const land = waterClearance(a.x, a.z) >= waterClearance(b.x, b.z) ? a : b;
      if (isDeadlyWater(land.x, land.z) || blockedPlaza(land.x, land.z)) continue;
      if (overlaps(land.x, land.z, 2, 2, 0)) continue;
      trees.push({ x: land.x, z: land.z, kind: rnd() > 0.5 ? "round" : "pine", s: 0.85 + rnd() * 0.5 });
    }
  }
  const bast = landmark("bastions");
  for (let i = -3; i <= 3; i++) {
    for (let j = 0; j <= 4; j++) {
      const x = bast.x + i * 16;
      const z = bast.z + 18 + j * 14;
      if (!inPark(x, z) || overlaps(x, z, 2, 2, 0)) continue;
      trees.push({ x, z, kind: j % 2 ? "round" : "pine", s: 0.9 + rnd() * 0.4 });
    }
  }
  const jardin = landmark("jardin");
  for (let k = 0; k < 18; k++) {
    const a = rnd() * Math.PI * 2;
    const rad = 8 + rnd() * 22;
    const x = jardin.x + Math.cos(a) * rad;
    const z = jardin.z + Math.sin(a) * rad + 8;
    if (isDeadlyWater(x, z) || overlaps(x, z, 2, 2, 0)) continue;
    const n = nearestRoad(x, z);
    if (n && n.dist < n.half + 1) continue;
    trees.push({ x, z, kind: "round", s: 0.7 + rnd() * 0.5 });
    if (rnd() > 0.4) flowers.push({ x: x + 2, z: z + 1.5, color: AWN[Math.floor(rnd() * AWN.length)] });
  }
  for (let k = 0; k < 28; k++) {
    const a = rnd() * Math.PI * 2;
    const rad = 6 + rnd() * 16;
    flowers.push({
      x: jardin.x + Math.cos(a) * rad,
      z: jardin.z + 6 + Math.sin(a) * rad * 0.6,
      color: AWN[k % AWN.length],
    });
  }
}

function buildLamps() {
  for (let r = 0; r < ROADS.length; r++) {
    const road = ROADS[r];
    if (!road.lamps || road.width < 9) continue;
    for (let dist = 18; dist < road.length; dist += 42) {
      const p = pointOnRoad(road, dist);
      const flen = Math.hypot(p.dx, p.dz) || 1;
      const fwd = { x: p.dx / flen, z: p.dz / flen };
      const right = rightFromForward(fwd);
      const sides = road.width >= 13 ? [-1, 1] : [1];
      for (const s of sides) {
        const x = p.x + right.x * s * (road.width / 2 + 1.1);
        const z = p.z + right.z * s * (road.width / 2 + 1.1);
        if (isDeadlyWater(x, z)) continue;
        lamps.push({ x, z, rot: yawToFace(fwd.x, fwd.z) });
      }
    }
  }
}

function blockedCircle(x, z, rad) {
  for (let i = 0; i < colliders.length; i++) {
    if (colliders[i].kind === "rail") continue;
    if (circleOBB(x, z, rad, colliders[i])) return true;
  }
  return false;
}

function buildPickups() {
  for (let i = 0; i < LANDMARKS.length; i++) {
    const lm = LANDMARKS[i];
    let placed = null;
    for (let k = 0; k < 28 && !placed; k++) {
      const a = (k / 28) * Math.PI * 2;
      for (const rad of [10, 16, 22, lm.radius * 0.65]) {
        const x = lm.x + Math.cos(a) * rad;
        const z = lm.z + Math.sin(a) * rad;
        if (isDeadlyWater(x, z)) continue;
        const n = nearestRoad(x, z);
        if (!n || n.dist > n.half + 2.5) continue;
        const flen = Math.hypot(n.dx, n.dz) || 1;
        const right = rightFromForward({ x: n.dx / flen, z: n.dz / flen });
        for (const s of [-1, 1]) {
          const sx = n.x + right.x * s * (n.half + 2.5);
          const sz = n.z + right.z * s * (n.half + 2.5);
          if (isDeadlyWater(sx, sz) || blockedCircle(sx, sz, 1.1)) continue;
          placed = { x: sx, z: sz, yaw: yawToFace(n.x - sx, n.z - sz), near: lm.id };
          break;
        }
        if (placed) break;
      }
    }
    if (placed) pickups.push(placed);
  }
  for (let r = 0; r < ROADS.length; r++) {
    const road = ROADS[r];
    if (road.noBuildings || road.bridge || road.pier || road.width < 10) continue;
    for (let dist = 40; dist < road.length - 20; dist += 170) {
      const p = pointOnRoad(road, dist);
      const flen = Math.hypot(p.dx, p.dz) || 1;
      const right = rightFromForward({ x: p.dx / flen, z: p.dz / flen });
      const s = rnd() > 0.5 ? 1 : -1;
      const x = p.x + right.x * s * (road.width / 2 + 2.4);
      const z = p.z + right.z * s * (road.width / 2 + 2.4);
      if (isDeadlyWater(x, z) || blockedPlaza(x, z) || blockedCircle(x, z, 1.1)) continue;
      pickups.push({ x, z, yaw: yawToFace(p.x - x, p.z - z), near: null });
    }
  }
}

function audit() {
  for (let i = 0; i < heroes.length; i++) {
    const h = heroes[i];
    if (h.solid === false) continue;
    if (isDeadlyWater(h.x, h.z) && h.kind !== "nozzle" && h.kind !== "cabin") errors.push(h.kind + " is in the lake");
  }
  const solid = colliders.filter((c) => c.kind !== "rail");
  for (let r = 0; r < ROADS.length; r++) {
    const road = ROADS[r];
    const steps = Math.max(1, Math.ceil(road.length / 8));
    for (let s = 0; s <= steps; s++) {
      const p = pointOnRoad(road, (road.length * s) / steps);
      for (let i = 0; i < solid.length; i++) {
        const hit = circleOBB(p.x, p.z, 1.15, solid[i]);
        if (hit && hit.pen > 0.2) {
          errors.push(road.name + " runs through " + solid[i].kind);
          break;
        }
      }
    }
  }
  if (pickups.length < 12) errors.push("only " + pickups.length + " pickup spots");
}

buildHeroes();
buildRails();
buildStreets();
buildFill();
buildGreen();
buildLamps();
buildPickups();
audit();

export const CITY = { buildings, colliders, trees, lamps, flowers, pickups, heroes, decor, rails, errors };
