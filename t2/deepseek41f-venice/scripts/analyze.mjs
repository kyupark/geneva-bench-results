import fs from 'fs';

const lat0 = 46.2055, lon0 = 6.1475;
const kx = 111320 * Math.cos(lat0 * Math.PI / 180);
const kz = 110540;
const proj = (p) => [(p.lon - lon0) * kx, -(p.lat - lat0) * kz];

const B = JSON.parse(fs.readFileSync('raw/buildings.json'));
function pts(id) {
  const e = B.elements.find(x => x.id === id);
  return e.geometry.map(proj);
}
function pca(P) {
  const n = P.length;
  const cx = P.reduce((s, p) => s + p[0], 0) / n;
  const cz = P.reduce((s, p) => s + p[1], 0) / n;
  let xx = 0, xz = 0, zz = 0;
  for (const [x, z] of P) {
    const dx = x - cx, dz = z - cz;
    xx += dx * dx; xz += dx * dz; zz += dz * dz;
  }
  const ang = 0.5 * Math.atan2(2 * xz, xx - zz);
  return { cx, cz, angDeg: ang * 180 / Math.PI };
}
for (const id of [397737238, 15256736, 583876551, 1204850778]) {
  const p = pts(id);
  const r = pca(p);
  console.log(id, 'center', r.cx.toFixed(1), r.cz.toFixed(1), 'ang', r.angDeg.toFixed(1));
}

const R = JSON.parse(fs.readFileSync('raw/roads.json'));
const rails = R.elements.filter(e => e.tags && e.tags.railway);
console.log('rails', rails.length);
for (const e of rails.filter(e => {
  const g = e.geometry;
  const la = g.reduce((s, p) => s + p.lat, 0) / g.length;
  const lo = g.reduce((s, p) => s + p.lon, 0) / g.length;
  return Math.hypot((la - 46.2102) * 110540, (lo - 6.1428) * kx) < 500;
}).slice(0, 14)) {
  const g = e.geometry;
  const a = g[0], b = g[g.length - 1];
  const [ax, az] = proj(a), [bx, bz] = proj(b);
  console.log(e.id, e.tags.name, e.tags.railway, 'pts', g.length, 'delta', (bx - ax).toFixed(0), (bz - az).toFixed(0));
}

const lake = JSON.parse(fs.readFileSync('raw/lake.json'));
const rel = lake.elements[0];
console.log('lake members', rel.members.length, rel.members.slice(0, 4).map(m => ({ type: m.type, role: m.role, pts: m.geometry && m.geometry.length })));
const roles = {};
for (const m of rel.members) roles[m.role] = (roles[m.role] || 0) + 1;
console.log(roles);

const rhone = JSON.parse(fs.readFileSync('raw/rhone.json'));
const rrel = rhone.elements[0];
const rroles = {};
for (const m of rrel.members) rroles[m.role] = (rroles[m.role] || 0) + 1;
console.log('rhone members', rrel.members.length, rroles);
