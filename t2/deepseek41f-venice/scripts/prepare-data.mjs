import fs from 'fs';

const lat0 = 46.2055, lon0 = 6.1475;
const KX = 111320 * Math.cos(lat0 * Math.PI / 180);
const KZ = 110540;
const proj = (p) => [(p.lon - lon0) * KX, -(p.lat - lat0) * KZ];
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const same = (a, b) => Math.abs(a.lat - b.lat) < 1e-7 && Math.abs(a.lon - b.lon) < 1e-7;

function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const rnd = mulberry32(20261019);

function ringArea(poly) {
  let a = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    a += poly[j][0] * poly[i][1] - poly[i][0] * poly[j][1];
  }
  return a / 2;
}
function centroid(poly) {
  let x = 0, z = 0, a = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const f = poly[j][0] * poly[i][1] - poly[i][0] * poly[j][1];
    a += f; x += (poly[j][0] + poly[i][0]) * f; z += (poly[j][1] + poly[i][1]) * f;
  }
  if (Math.abs(a) < 1e-7) {
    return [poly.reduce((s, p) => s + p[0], 0) / poly.length, poly.reduce((s, p) => s + p[1], 0) / poly.length];
  }
  a *= 3;
  return [x / a, z / a];
}
function pointInPoly(x, z, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], zi = poly[i][1], xj = poly[j][0], zj = poly[j][1];
    if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}
function distToSeg(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const l2 = dx * dx + dz * dz;
  let t = l2 ? ((px - ax) * dx + (pz - az) * dz) / l2 : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t * dx), pz - (az + t * dz));
}
function distToPoly(x, z, poly) {
  let d = Infinity;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    d = Math.min(d, distToSeg(x, z, poly[j][0], poly[j][1], poly[i][0], poly[i][1]));
  }
  return d;
}

function simplify(points, tol) {
  if (points.length <= 3) return points;
  const keep = new Uint8Array(points.length);
  keep[0] = keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [first, last] = stack.pop();
    let maxD = 0, index = -1;
    const [ax, az] = points[first], [bx, bz] = points[last];
    for (let i = first + 1; i < last; i++) {
      const d = distToSeg(points[i][0], points[i][1], ax, az, bx, bz);
      if (d > maxD) { maxD = d; index = i; }
    }
    if (maxD > tol && index > 0) {
      keep[index] = 1;
      stack.push([first, index], [index, last]);
    }
  }
  return points.filter((_, i) => keep[i]);
}

function parseHeight(tags) {
  if (tags.height) {
    const m = String(tags.height).match(/([0-9]+(?:\.[0-9]+)?)/);
    if (m) return parseFloat(m[1]);
  }
  const levels = parseFloat(tags['building:levels']);
  if (!Number.isNaN(levels) && levels > 0) return levels * 3.05 + 1.5;
  return null;
}

function clipPoly(poly, minX, minZ, maxX, maxZ) {
  const edges = [
    (p) => p[0] >= minX,
    (p) => p[0] <= maxX,
    (p) => p[1] >= minZ,
    (p) => p[1] <= maxZ,
  ];
  const inters = [
    (a, b) => { const t = (minX - a[0]) / (b[0] - a[0]); return [minX, a[1] + t * (b[1] - a[1])]; },
    (a, b) => { const t = (maxX - a[0]) / (b[0] - a[0]); return [maxX, a[1] + t * (b[1] - a[1])]; },
    (a, b) => { const t = (minZ - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), minZ]; },
    (a, b) => { const t = (maxZ - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), maxZ]; },
  ];
  let out = poly;
  for (let e = 0; e < 4; e++) {
    const input = out;
    out = [];
    if (!input.length) break;
    let prev = input[input.length - 1];
    let prevIn = edges[e](prev);
    for (const cur of input) {
      const curIn = edges[e](cur);
      if (curIn) {
        if (!prevIn) out.push(inters[e](prev, cur));
        out.push(cur);
      } else if (prevIn) {
        out.push(inters[e](prev, cur));
      }
      prev = cur; prevIn = curIn;
    }
  }
  return out;
}

function assembleRings(members, role, project) {
  const ways = members.filter(m => m.role === role && m.geometry && m.geometry.length > 1)
    .map(m => ({ pts: m.geometry.filter(Boolean).map(project), used: false }))
    .filter(m => m.pts.length > 1);
  const rings = [];
  while (ways.some(w => !w.used)) {
    const first = ways.find(w => !w.used);
    first.used = true;
    let pts = first.pts.slice();
    let guard = 0;
    while (guard++ < ways.length + 5) {
      if (sameRaw(pts[0], pts[pts.length - 1])) break;
      const end = pts[pts.length - 1];
      const found = ways.find(w => !w.used && (sameRaw(w.pts[0], end) || sameRaw(w.pts[w.pts.length - 1], end)));
      if (!found) break;
      found.used = true;
      const reversed = !sameRaw(found.pts[0], end);
      const add = reversed ? found.pts.slice(0, -1).reverse() : found.pts.slice(1);
      pts = pts.concat(add);
    }
    if (pts.length > 3 && sameRaw(pts[0], pts[pts.length - 1])) rings.push(pts.slice(0, -1));
  }
  return rings;
}
function sameRaw(a, b) { return Math.abs(a[0] - b[0]) < 0.02 && Math.abs(a[1] - b[1]) < 0.02; }

// ---------- buildings ----------
const rawBuildings = JSON.parse(fs.readFileSync('raw/buildings.json'));
const landmarkIds = new Set([
  15256736, 397737238, 583876551, 1204850778, 82753315, 82753325,
]);
const palette = [
  0xe9dcc3, 0xe4d2b4, 0xdcc6a4, 0xd2b995, 0xc9ae88, 0xece4d4,
  0xe2d8c4, 0xd7c3a6, 0xcbb292, 0xbfa282, 0xe6d9c4, 0xd8cbb5,
  0xd9d5ca, 0xc9c7bd, 0xcdb9a1, 0xb9a898,
];
const buildings = [];
for (const e of rawBuildings.elements) {
  if (e.type !== 'way' || !e.geometry || e.geometry.length < 4) continue;
  if (landmarkIds.has(e.id)) continue;
  const tags = e.tags || {};
  let poly = e.geometry.map(proj);
  poly = simplify(poly, 0.55);
  if (poly.length < 3) continue;
  if (sameRaw(poly[0], poly[poly.length - 1])) poly.pop();
  if (poly.length < 3) continue;
  const area = Math.abs(ringArea(poly));
  if (area < 18) continue;
  const [cx, cz] = centroid(poly);
  const dCath = Math.hypot(cx - 81, cz - 489);
  let h = parseHeight(tags);
  let roof = 0;
  if (h == null) {
    const base = dCath < 420 ? 15.5 : dCath < 900 ? 14 : 12.5;
    h = base + (rnd() * 7 - 2.5) + Math.min(8, area / 600);
    if (tags.building === 'apartments' || tags.building === 'residential') h += 2;
  }
  h = Math.max(4.5, Math.min(h, 70));
  if (area < 420) {
    const p = dCath < 500 ? 0.86 : dCath < 1100 ? 0.55 : 0.25;
    if (rnd() < p && h < 30) roof = 2.2 + rnd() * 3.2;
  }
  if (tags['roof:shape'] === 'gabled' || tags['roof:shape'] === 'hipped') roof = Math.max(roof, 2.8 + rnd() * 2.5);
  let ci;
  if (dCath < 550) ci = Math.floor(rnd() * 10);
  else ci = 6 + Math.floor(rnd() * 10);
  if (tags.building === 'church' || tags.amenity === 'place_of_worship') h = Math.max(h, 16);
  const name = tags.name && /^(Gare|Palais|Cath|Grand|Musée|Hôtel de Ville|Temple|Église|Basilique)/.test(tags.name) ? tags.name : undefined;
  buildings.push({
    p: poly.map(([x, z]) => [Math.round(x * 10) / 10, Math.round(z * 10) / 10]),
    h: Math.round(h * 10) / 10,
    r: Math.round(roof * 10) / 10,
    c: ci,
    ...(name ? { n: name } : {}),
  });
}

// ---------- roads ----------
const rawRoads = JSON.parse(fs.readFileSync('raw/roads.json'));
const roadClass = { motorway: 0, trunk: 1, primary: 1, secondary: 2, tertiary: 2, unclassified: 3, residential: 3, living_street: 4, pedestrian: 4 };
const roadWidth = { 0: 18, 1: 14, 2: 10.5, 3: 6.6, 4: 3.4 };
const roads = [];
const rails = [];
for (const e of rawRoads.elements) {
  const tags = e.tags || {};
  if (!e.geometry || e.geometry.length < 2) continue;
  if (tags.tunnel === 'yes') continue;
  let pts = e.geometry.map(proj);
  pts = simplify(pts, 1.2).map(([x, z]) => [Math.round(x * 10) / 10, Math.round(z * 10) / 10]);
  if (pts.length < 2) continue;
  if (tags.highway && roadClass[tags.highway] !== undefined) {
    roads.push({ c: roadClass[tags.highway], w: roadWidth[roadClass[tags.highway]], p: pts });
  } else if (tags.railway && (tags.railway === 'rail' || tags.railway === 'light_rail')) {
    rails.push({ p: pts });
  }
}

// ---------- green ----------
const rawGreen = JSON.parse(fs.readFileSync('raw/green.json'));
const greens = [];
const treeParks = [];
for (const e of rawGreen.elements) {
  const tags = e.tags || {};
  if (!e.geometry || e.geometry.length < 4) continue;
  let poly = e.geometry.map(proj);
  if (sameRaw(poly[0], poly[poly.length - 1])) poly.pop();
  if (poly.length < 3) continue;
  const area = Math.abs(ringArea(poly));
  if (area < 90) continue;
  let type = 'park';
  if (tags.landuse === 'forest' || tags.natural === 'wood') type = 'forest';
  else if (tags.landuse === 'cemetery') type = 'cemetery';
  else if (tags.leisure === 'pitch') type = 'pitch';
  else if (tags.landuse === 'grass' || tags.natural === 'scrub') type = 'grass';
  greens.push({ t: type, p: poly.map(([x, z]) => [Math.round(x * 10) / 10, Math.round(z * 10) / 10]) });
  const isPark = tags.leisure === 'park' || tags.leisure === 'garden' || tags.landuse === 'forest' || tags.natural === 'wood';
  if (isPark && area > 250) treeParks.push({ poly, area, kind: tags.leisure === 'garden' ? 'garden' : 'park' });
}

// ---------- water ----------
const lakeRaw = JSON.parse(fs.readFileSync('raw/lake.json'));
const lakeMembers = lakeRaw.elements[0].members;
let lakeRings = assembleRings(lakeMembers, 'outer', proj);
const lake = [];
for (const ring of lakeRings) {
  const clipped = clipPoly(ring, -26000, -30000, 34000, 22000);
  if (clipped.length > 3) {
    const simp = simplify(clipped, 2.2);
    lake.push(simp.map(([x, z]) => [Math.round(x * 10) / 10, Math.round(z * 10) / 10]));
  }
}
const rhoneRaw = JSON.parse(fs.readFileSync('raw/rhone.json'));
const rrel = rhoneRaw.elements[0];
const riverRings = assembleRings(rrel.members, 'outer', proj);
const river = [];
for (const ring of riverRings) {
  const clipped = clipPoly(ring, -9000, -9000, 9000, 9000);
  if (clipped.length > 3) river.push(clipped.map(([x, z]) => [Math.round(x * 10) / 10, Math.round(z * 10) / 10]));
}

// ---------- trees ----------
const trees = [];
let treeBudget = 4300;
for (const park of treeParks) {
  const n = Math.min(Math.floor(park.area / 130), park.kind === 'garden' ? 90 : 190);
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const [x, z] of park.poly) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z); }
  const cell = Math.max(6, Math.sqrt(park.area / Math.max(1, n)));
  const cols = Math.max(1, Math.ceil((maxX - minX) / cell));
  const rows = Math.max(1, Math.ceil((maxZ - minZ) / cell));
  let placed = 0;
  for (let iy = 0; iy < rows && placed < n; iy++) {
    for (let ix = 0; ix < cols && placed < n; ix++) {
      const x = minX + (ix + 0.15 + rnd() * 0.7) * cell;
      const z = minZ + (iy + 0.15 + rnd() * 0.7) * cell;
      if (!pointInPoly(x, z, park.poly)) continue;
      if (distToPoly(x, z, park.poly) < 3.5) continue;
      const s = 0.65 + rnd() * 0.75 + (park.kind === 'garden' ? 0 : 0.15);
      trees.push([Math.round(x * 10) / 10, Math.round(z * 10) / 10, Math.round(s * 100) / 100, Math.floor(rnd() * 4)]);
      placed++; treeBudget--;
      if (treeBudget <= 0) break;
    }
    if (treeBudget <= 0) break;
  }
  if (treeBudget <= 0) break;
}

// lakefront and quai tree rows (world coordinates)
const treeRows = [
  [[-215, 250], [520, 225], [810, 250], [980, 330]],
  [[-480, 1850], [-40, 1900], [430, 1970], [760, 2140]],
  [[-1710, -1800], [-1100, -1830], [-520, -1890], [80, -1960]],
];
for (const row of treeRows) {
  for (let i = 0; i < row.length - 1; i++) {
    const a = row[i], b = row[i + 1];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const n = Math.floor(len / 17);
    for (let k = 0; k <= n; k++) {
      const t = k / Math.max(1, n);
      const x = a[0] + (b[0] - a[0]) * t + (rnd() - 0.5) * 2.5;
      const z = a[1] + (b[1] - a[1]) * t + (rnd() - 0.5) * 2.5;
      trees.push([Math.round(x * 10) / 10, Math.round(z * 10) / 10, Math.round((0.6 + rnd() * 0.45) * 100) / 100, Math.floor(rnd() * 4)]);
    }
  }
}

const out = {
  meta: { lat0, lon0, kx: KX, kz: KZ, buildingCount: buildings.length, treeCount: trees.length },
  buildings,
  roads,
  rails,
  greens,
  water: { lake, river },
  trees,
};
fs.writeFileSync('data/city.json', JSON.stringify(out));
console.log('buildings', buildings.length, 'roads', roads.length, 'rails', rails.length, 'greens', greens.length, 'trees', trees.length);
console.log('lake rings', lake.length, lake.map(r => r.length), 'river rings', river.length, river.map(r => r.length));
console.log('size MB', (fs.statSync('data/city.json').size / 1048576).toFixed(1));
