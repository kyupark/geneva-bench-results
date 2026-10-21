// Geneva, local metres. East is +x. North is -z (Three.js forward).
// Landmark coordinates are WGS84 from public records:
// Broken Chair OSM 46.22280, 6.13885; Bains des Pâquis 46°12'37"N 6°9'15"E;
// Horloge fleurie 46.204192, 6.15097; Jardin Anglais / Quai Général-Guisan
// 46.204193, 6.15205; Place de Neuve 46.201235, 6.143504;
// Parc des Bastions 46.20021, 6.145925; Saint-Pierre 46°12'4"N 6°8'55"E;
// Jet d'Eau ~46.2074, 6.1560; Cornavin forecourt by the station hall.

import { forwardFromYaw, rightFromForward } from "./frame.js";

export const ORIGIN = { lat: 46.206, lon: 6.148 };
export const M_PER_DEG_LAT = 111320;
export const M_PER_DEG_LON = 111320 * Math.cos((ORIGIN.lat * Math.PI) / 180);

export function project(lat, lon) {
  return {
    x: (lon - ORIGIN.lon) * M_PER_DEG_LON,
    z: -((lat - ORIGIN.lat) * M_PER_DEG_LAT),
  };
}

export function unproject(x, z) {
  return {
    lat: ORIGIN.lat - z / M_PER_DEG_LAT,
    lon: ORIGIN.lon + x / M_PER_DEG_LON,
  };
}

export function offsetLL(lat, lon, east, north) {
  const p = project(lat, lon);
  return unproject(p.x + east, p.z - north);
}

let hill = { x: 0, z: 900 };

export function groundHeight(x, z) {
  const dx = x - hill.x;
  const dz = z - hill.z;
  return 20 * Math.exp(-(dx * dx + dz * dz) / (2 * 110 * 110));
}

export const LANDMARKS = [];
export const ROADS = [];
export const WATER = [];
export const MASKS = [];
export const PARKS = [];
export const GEO_ERRORS = [];
export const PROPS = {};

const SEGMENTS = [];
let segHash = new Map();

export function landmark(id) {
  for (let i = 0; i < LANDMARKS.length; i++) if (LANDMARKS[i].id === id) return LANDMARKS[i];
  return null;
}

export function pointInPoly(x, z, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x;
    const zi = poly[i].z;
    const xj = poly[j].x;
    const zj = poly[j].z;
    const intersect = zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

export function distToSegment(px, pz, ax, az, bx, bz) {
  const abx = bx - ax;
  const abz = bz - az;
  const len2 = abx * abx + abz * abz;
  let t = 0;
  if (len2 > 1e-8) t = ((px - ax) * abx + (pz - az) * abz) / len2;
  if (t < 0) t = 0;
  else if (t > 1) t = 1;
  const qx = ax + abx * t;
  const qz = az + abz * t;
  return { dist: Math.hypot(px - qx, pz - qz), t, x: qx, z: qz, dx: bx - ax, dz: bz - az };
}

function maskHit(x, z) {
  for (let i = 0; i < MASKS.length; i++) {
    const m = MASKS[i];
    if (m.kind === "circle") {
      if (Math.hypot(x - m.x, z - m.z) <= m.r) return m;
    } else if (distToSegment(x, z, m.ax, m.az, m.bx, m.bz).dist <= m.r) return m;
  }
  return null;
}

export function isDeadlyWater(x, z) {
  if (!pointInPoly(x, z, WATER)) return false;
  return !maskHit(x, z);
}

export function waterClearance(x, z) {
  if (pointInPoly(x, z, WATER)) return 0;
  let min = Infinity;
  for (let i = 0, j = WATER.length - 1; i < WATER.length; j = i++) {
    const d = distToSegment(x, z, WATER[j].x, WATER[j].z, WATER[i].x, WATER[i].z).dist;
    if (d < min) min = d;
  }
  return min;
}

export function inPark(x, z) {
  for (let i = 0; i < PARKS.length; i++) if (pointInPoly(x, z, PARKS[i])) return true;
  return false;
}

export function blockedPlaza(x, z) {
  for (let i = 0; i < LANDMARKS.length; i++) {
    const lm = LANDMARKS[i];
    const rad = lm.plaza || 34;
    const dx = x - lm.x;
    const dz = z - lm.z;
    if (dx * dx + dz * dz < rad * rad) return true;
  }
  return false;
}

const CELL = 90;
function segKey(ix, iz) {
  return ix + "," + iz;
}

export function nearestRoad(x, z) {
  const ix = Math.floor(x / CELL);
  const iz = Math.floor(z / CELL);
  let best = null;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      const bucket = segHash.get(segKey(ix + dx, iz + dz));
      if (!bucket) continue;
      for (let i = 0; i < bucket.length; i++) {
        const s = bucket[i];
        const hit = distToSegment(x, z, s.ax, s.az, s.bx, s.bz);
        if (!best || hit.dist < best.dist) {
          best = {
            dist: hit.dist,
            half: s.half,
            x: hit.x,
            z: hit.z,
            dx: hit.dx,
            dz: hit.dz,
            name: s.name,
            bridge: s.bridge,
            pier: s.pier,
          };
        }
      }
    }
  }
  return best;
}

export function surfaceAt(x, z) {
  const road = nearestRoad(x, z);
  if (road) {
    if (road.dist < road.half + 2.2) return 1;
    if (road.dist < road.half + 7) return 0.78;
  }
  if (inPark(x, z)) return 0.72;
  return 0.42;
}

export function surfaceY(x, z) {
  const g = groundHeight(x, z);
  let influence = 0;
  for (let i = 0; i < MASKS.length; i++) {
    const m = MASKS[i];
    let d;
    let r;
    if (m.kind === "circle") {
      d = Math.hypot(x - m.x, z - m.z);
      r = m.r;
    } else {
      d = distToSegment(x, z, m.ax, m.az, m.bx, m.bz).dist;
      r = m.r;
    }
    const outer = 16;
    let inf = 0;
    if (d <= r) inf = 1;
    else if (d < r + outer) inf = 1 - (d - r) / outer;
    if (inf > influence) influence = inf;
  }
  return g + 0.32 + influence * 0.9;
}

export function pointOnRoad(road, dist) {
  const segs = road.segs;
  if (!segs.length) return { x: road.points[0].x, z: road.points[0].z, dx: 0, dz: -1 };
  let d = dist;
  if (road.closed) d = ((dist % road.length) + road.length) % road.length;
  else d = Math.max(0, Math.min(road.length - 0.01, dist));
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    if (d > s.len && i < segs.length - 1) {
      d -= s.len;
      continue;
    }
    const t = s.len > 0 ? d / s.len : 0;
    return {
      x: s.ax + (s.bx - s.ax) * t,
      z: s.az + (s.bz - s.az) * t,
      dx: s.bx - s.ax,
      dz: s.bz - s.az,
    };
  }
  const last = segs[segs.length - 1];
  return { x: last.bx, z: last.bz, dx: last.bx - last.ax, dz: last.bz - last.az };
}

function addRoad(def) {
  const pts = def.points;
  const segs = [];
  let length = 0;
  const n = pts.length;
  const count = def.closed ? n : n - 1;
  for (let i = 0; i < count; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % n];
    const len = Math.hypot(b.x - a.x, b.z - a.z);
    if (len < 0.5) continue;
    const seg = {
      ax: a.x,
      az: a.z,
      bx: b.x,
      bz: b.z,
      len,
      half: def.width / 2,
      name: def.name,
      bridge: !!def.bridge,
      pier: !!def.pier,
    };
    segs.push(seg);
    SEGMENTS.push(seg);
    length += len;
    if (def.bridge || def.pier) {
      MASKS.push({
        kind: "capsule",
        ax: a.x,
        az: a.z,
        bx: b.x,
        bz: b.z,
        r: def.width / 2 + 3,
      });
    }
  }
  const road = {
    name: def.name,
    width: def.width,
    bridge: !!def.bridge,
    pier: !!def.pier,
    closed: !!def.closed,
    noBuildings: !!def.noBuildings || !!def.bridge || !!def.pier,
    trees: !!def.trees,
    lamps: def.lamps !== false && !def.pier,
    points: pts,
    segs,
    length,
  };
  ROADS.push(road);
  return road;
}

function circlePts(lat, lon, radius, n) {
  const c = project(lat, lon);
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    pts.push({ x: c.x + radius * Math.sin(a), z: c.z + radius * Math.cos(a) });
  }
  return pts;
}

function ll(lat, lon) {
  return project(lat, lon);
}

function pushWater(pairs) {
  for (let i = 0; i < pairs.length; i++) WATER.push(ll(pairs[i][0], pairs[i][1]));
}

function park(pairs) {
  const poly = [];
  for (let i = 0; i < pairs.length; i++) poly.push(ll(pairs[i][0], pairs[i][1]));
  PARKS.push(poly);
}

function validate() {
  for (let i = 0; i < LANDMARKS.length; i++) {
    const lm = LANDMARKS[i];
    if (isDeadlyWater(lm.x, lm.z)) GEO_ERRORS.push(lm.id + " sits in the lake");
    let reached = false;
    const near = nearestRoad(lm.x, lm.z);
    if (near && near.dist < lm.radius - 3) reached = true;
    if (!reached) {
      for (let k = 0; k < 20; k++) {
        const a = (k / 20) * Math.PI * 2;
        const x = lm.x + Math.cos(a) * lm.radius * 0.72;
        const z = lm.z + Math.sin(a) * lm.radius * 0.72;
        const n = nearestRoad(x, z);
        if (n && n.dist <= n.half + 1) {
          reached = true;
          break;
        }
      }
    }
    if (!reached) GEO_ERRORS.push(lm.id + " zone does not meet a road");
  }

  for (let r = 0; r < ROADS.length; r++) {
    const road = ROADS[r];
    if (road.bridge || road.pier) continue;
    const steps = Math.max(2, Math.ceil(road.length / 8));
    for (let s = 0; s <= steps; s++) {
      const p = pointOnRoad(road, (road.length * s) / steps);
      if (isDeadlyWater(p.x, p.z)) {
        GEO_ERRORS.push(road.name + " dips into the lake");
        break;
      }
    }
  }

  const parent = SEGMENTS.map((_, i) => i);
  const find = (a) => {
    while (parent[a] !== a) {
      parent[a] = parent[parent[a]];
      a = parent[a];
    }
    return a;
  };
  const unite = (a, b) => {
    a = find(a);
    b = find(b);
    if (a !== b) parent[b] = a;
  };
  const joins = (a, b) => {
    return (
      distToSegment(a.ax, a.az, b.ax, b.az, b.bx, b.bz).dist < 8 ||
      distToSegment(a.bx, a.bz, b.ax, b.az, b.bx, b.bz).dist < 8 ||
      distToSegment(b.ax, b.az, a.ax, a.az, a.bx, a.bz).dist < 8 ||
      distToSegment(b.bx, b.bz, a.ax, a.az, a.bx, a.bz).dist < 8
    );
  };
  for (let i = 0; i < SEGMENTS.length; i++) {
    for (let j = i + 1; j < SEGMENTS.length; j++) {
      if (joins(SEGMENTS[i], SEGMENTS[j])) unite(i, j);
    }
  }
  const root = find(0);
  const seen = new Set();
  for (let i = 0; i < SEGMENTS.length; i++) {
    if (find(i) !== root && !seen.has(SEGMENTS[i].name)) {
      seen.add(SEGMENTS[i].name);
      GEO_ERRORS.push("disconnected road " + SEGMENTS[i].name);
    }
  }
}

function build() {
  const specs = [
    ["cornavin", "Gare Cornavin", "CORNAVIN", 46.21042, 6.14288, 32, "#e23b2f", 28, "The trains are waiting.", ["Gare Cornavin — I'm late!", "The station, and step on it!"]],
    ["chair", "Broken Chair", "BROKEN CHAIR", 46.2228, 6.13885, 46, "#f0a020", 40, "Place des Nations.", ["The Broken Chair, Place des Nations!", "Up to the big chair — go!"]],
    ["paquis", "Bains des Pâquis", "PÂQUIS", 46.210278, 6.154167, 20, "#1aa6c9", 26, "The baths on the lake.", ["Bains des Pâquis, please!", "The baths — I'll swim if you're quick."]],
    ["pont", "Pont du Mont-Blanc", "MONT-BLANC", 46.20542, 6.14935, 24, "#3d6bff", 22, "The bridge off the lake.", ["Pont du Mont-Blanc, across the water!", "Stop on the bridge!"]],
    ["jet", "Jet d'Eau", "JET D'EAU", 46.2074, 6.15595, 18, "#2ec7ff", 24, "140 metres of lake water.", ["The Jet d'Eau — floor it!", "Out to the fountain!"]],
    ["jardin", "Jardin Anglais", "JARDIN ANGLAIS", 46.204193, 6.15205, 30, "#3cb44b", 30, "Flowers and the flower clock.", ["Jardin Anglais, by the clock!", "The English Garden, hurry!"]],
    ["belair", "Place Bel-Air", "BEL-AIR", 46.20468, 6.14308, 26, "#f2d23a", 24, "Where the Rhône meets the streets.", ["Place Bel-Air, the tower!", "Bel-Air — don't miss the turn."]],
    ["oldtown", "Old Town", "OLD TOWN", 46.20111, 6.14861, 30, "#c47a3a", 26, "Saint-Pierre and the hill.", ["Up to the Old Town!", "The cathedral — I'm late for the bells."]],
    ["neuve", "Place de Neuve", "PLACE DE NEUVE", 46.201235, 6.143504, 34, "#b45ad0", 28, "Dufour stands in the square.", ["Place de Neuve!", "The square by the theatre!"]],
    ["bastions", "Parc des Bastions", "BASTIONS", 46.20021, 6.145925, 34, "#2f9e6b", 30, "The Reformation Wall.", ["Parc des Bastions!", "The park — the big wall of statues."]],
  ];
  for (let i = 0; i < specs.length; i++) {
    const s = specs[i];
    const p = project(s[3], s[4]);
    LANDMARKS.push({
      id: s[0],
      name: s[1],
      short: s[2],
      lat: s[3],
      lon: s[4],
      x: p.x,
      z: p.z,
      radius: s[5],
      color: s[6],
      plaza: s[7],
      blurb: s[8],
      lines: s[9],
    });
  }

  const old = landmark("oldtown");
  hill = { x: old.x, z: old.z };

  pushWater([
    [46.20485, 6.136],
    [46.20515, 6.1402],
    [46.20542, 6.14308],
    [46.20552, 6.1451],
    [46.20542, 6.1469],
    [46.20518, 6.14835],
    [46.20478, 6.15015],
    [46.20458, 6.1514],
    [46.20458, 6.15275],
    [46.20528, 6.1541],
    [46.20618, 6.15545],
    [46.20635, 6.15615],
    [46.20655, 6.15745],
    [46.20705, 6.1602],
    [46.2078, 6.1632],
    [46.2087, 6.1662],
    [46.2146, 6.1662],
    [46.2136, 6.1604],
    [46.2123, 6.1575],
    [46.21138, 6.15585],
    [46.21102, 6.15432],
    [46.20962, 6.15268],
    [46.20842, 6.15112],
    [46.20702, 6.14952],
    [46.20622, 6.14818],
    [46.20638, 6.14662],
    [46.20642, 6.14492],
    [46.20628, 6.14312],
    [46.20602, 6.14085],
    [46.20578, 6.136],
  ]);

  park([
    [46.20105, 6.1437],
    [46.20102, 6.14815],
    [46.19985, 6.14845],
    [46.19882, 6.1469],
    [46.19888, 6.14435],
    [46.20015, 6.14365],
  ]);
  park([
    [46.2044, 6.15105],
    [46.2044, 6.15375],
    [46.2035, 6.1537],
    [46.2035, 6.1511],
  ]);

  const cornLat = 46.21012;
  const cornLon = 6.14305;
  const cornLoop = circlePts(cornLat, cornLon, 24, 8);
  const chairLoop = circlePts(46.2228, 6.13885, 36, 10);
  const neuveLoop = circlePts(46.201235, 6.143504, 22, 8);

  const cornWest = cornLoop[6];
  const chairSouth = chairLoop[0];
  const chairNorth = chairLoop[5];
  const neuveNorth = neuveLoop[4];
  const neuveSouth = neuveLoop[0];
  const neuveEast = neuveLoop[2];

  const mbN = ll(46.20622, 6.14818);
  const mbS = ll(46.20462, 6.15052);
  const pont = landmark("pont");
  pont.x = (mbN.x + mbS.x) / 2;
  pont.z = (mbN.z + mbS.z) / 2;
  const back = unproject(pont.x, pont.z);
  pont.lat = back.lat;
  pont.lon = back.lon;
  const mbMid = { x: pont.x, z: pont.z };

  const paquisQuay = ll(46.21128, 6.15422);
  const paquisEnd = ll(46.210278, 6.154167);
  const jetQuay = ll(46.20595, 6.156);
  const jetEnd = ll(46.2074, 6.15595);
  const belair = ll(46.20468, 6.14308);
  const rive = ll(46.2044, 6.1477);
  const berguesN = ll(46.20652, 6.14665);
  const berguesS = ll(46.20528, 6.14682);
  const machineN = ll(46.20662, 6.14495);
  const machineS = ll(46.20532, 6.14508);
  const ileN = ll(46.20645, 6.14312);
  const oldDrop = ll(46.20086, 6.14842);
  const bast = landmark("bastions");
  const bastRoad = { x: bast.x, z: bast.z + 30 };
  const bastEast = { x: bast.x + 55, z: bast.z + 30 };

  addRoad({
    name: "Place de Cornavin",
    width: 14,
    closed: true,
    noBuildings: true,
    points: cornLoop,
  });
  addRoad({
    name: "Avenue de la Paix",
    width: 16,
    trees: true,
    points: [cornWest, ll(46.2115, 6.14232), ll(46.2146, 6.14155), ll(46.2178, 6.14035), ll(46.2206, 6.13935), chairSouth],
  });
  addRoad({
    name: "Place des Nations",
    width: 14,
    closed: true,
    noBuildings: true,
    trees: true,
    points: chairLoop,
  });
  addRoad({
    name: "Avenue de la Paix nord",
    width: 14,
    trees: true,
    points: [chairNorth, ll(46.22415, 6.13955)],
  });
  addRoad({
    name: "Rue du Mont-Blanc",
    width: 16,
    points: [cornLoop[0], ll(46.20835, 6.14535), ll(46.20715, 6.14695), mbN],
  });
  addRoad({
    name: "Pont du Mont-Blanc",
    width: 20,
    bridge: true,
    points: [mbN, mbMid, mbS],
  });
  addRoad({
    name: "Quai du Mont-Blanc",
    width: 13,
    trees: true,
    points: [mbN, ll(46.20735, 6.14955), ll(46.20875, 6.15115), ll(46.20995, 6.1527), paquisQuay, ll(46.2117, 6.1557)],
  });
  addRoad({
    name: "Jetée des Pâquis",
    width: 16,
    pier: true,
    noBuildings: true,
    points: [paquisQuay, paquisEnd],
  });
  addRoad({
    name: "Quai du Général-Guisan",
    width: 14,
    trees: true,
    points: [mbS, ll(46.20432, 6.15155), ll(46.20428, 6.15255), ll(46.20485, 6.15405), jetQuay, ll(46.20615, 6.1573)],
  });
  addRoad({
    name: "Jetée du Jet d'Eau",
    width: 14,
    pier: true,
    points: [jetQuay, ll(46.20655, 6.156), jetEnd],
  });
  addRoad({
    name: "Rue du Rhône",
    width: 15,
    points: [belair, ll(46.20455, 6.1452), rive, ll(46.20438, 6.1494), mbS],
  });
  addRoad({
    name: "Quai des Bergues",
    width: 12,
    trees: true,
    points: [mbN, berguesN, machineN, ileN, ll(46.20648, 6.14125)],
  });
  addRoad({
    name: "Pont des Bergues",
    width: 14,
    bridge: true,
    points: [berguesN, berguesS],
  });
  addRoad({
    name: "Pont de la Machine",
    width: 12,
    bridge: true,
    points: [machineN, machineS],
  });
  addRoad({
    name: "Pont de l'Île",
    width: 16,
    bridge: true,
    points: [ileN, belair],
  });
  addRoad({
    name: "Rue de la Monnaie",
    width: 12,
    points: [berguesS, ll(46.20455, 6.1467)],
  });
  addRoad({
    name: "Rue de la Machine",
    width: 11,
    points: [machineS, ll(46.20452, 6.14515)],
  });
  addRoad({
    name: "Rue de la Corraterie",
    width: 13,
    points: [belair, ll(46.20335, 6.14328), ll(46.20225, 6.14342), neuveNorth],
  });
  addRoad({
    name: "Place de Neuve",
    width: 13,
    closed: true,
    noBuildings: true,
    points: neuveLoop,
  });
  addRoad({
    name: "Promenade de Saint-Pierre",
    width: 10,
    points: [neuveEast, ll(46.20116, 6.1454), ll(46.20108, 6.1469), oldDrop],
  });
  addRoad({
    name: "Rue de la Cité",
    width: 9,
    points: [rive, ll(46.20315, 6.14805), ll(46.20205, 6.1483), oldDrop],
  });
  addRoad({
    name: "Promenade des Bastions",
    width: 10,
    trees: true,
    noBuildings: true,
    points: [neuveSouth, { x: bast.x - 40, z: bast.z + 48 }, bastRoad, bastEast, oldDrop],
  });
  addRoad({
    name: "Rue des Pâquis",
    width: 11,
    points: [cornLoop[1], ll(46.21015, 6.1459), ll(46.21055, 6.1489), ll(46.21095, 6.1516), paquisQuay],
  });
  addRoad({
    name: "Rue de Monthoux",
    width: 11,
    points: [ll(46.21215, 6.14245), ll(46.21245, 6.1456), ll(46.21275, 6.1486), ll(46.2130, 6.1515), ll(46.21305, 6.1539)],
  });
  addRoad({
    name: "Rue de Neuchâtel",
    width: 10,
    points: [ll(46.2102, 6.14595), ll(46.2124, 6.1457)],
  });
  addRoad({
    name: "Rue du Môle",
    width: 10,
    points: [ll(46.2106, 6.14895), ll(46.2127, 6.14865)],
  });
  addRoad({
    name: "Rue de Lausanne link",
    width: 12,
    points: [ll(46.2115, 6.14232), ll(46.21215, 6.14245)],
  });

  const jet = landmark("jet");
  MASKS.push({ kind: "circle", x: jet.x, z: jet.z, r: 22 });
  const paquis = landmark("paquis");
  MASKS.push({ kind: "circle", x: paquis.x, z: paquis.z, r: 20 });

  const flower = ll(46.204192, 6.15097);
  const ile = ll(46.20572, 6.14815);
  PROPS.flower = flower;
  PROPS.ile = ile;
  PROPS.cornLoop = { lat: cornLat, lon: cornLon };
  PROPS.oldDrop = oldDrop;
  PROPS.un = ll(46.22415, 6.13955);

  for (let i = 0; i < SEGMENTS.length; i++) {
    const s = SEGMENTS[i];
    const pad = s.half + CELL;
    const ix0 = Math.floor((Math.min(s.ax, s.bx) - pad) / CELL);
    const ix1 = Math.floor((Math.max(s.ax, s.bx) + pad) / CELL);
    const iz0 = Math.floor((Math.min(s.az, s.bz) - pad) / CELL);
    const iz1 = Math.floor((Math.max(s.az, s.bz) + pad) / CELL);
    for (let ix = ix0; ix <= ix1; ix++) {
      for (let iz = iz0; iz <= iz1; iz++) {
        const k = segKey(ix, iz);
        let bucket = segHash.get(k);
        if (!bucket) segHash.set(k, (bucket = []));
        bucket.push(s);
      }
    }
  }

  validate();
}

build();

export function roadByName(name) {
  for (let i = 0; i < ROADS.length; i++) if (ROADS[i].name === name) return ROADS[i];
  return null;
}

export { forwardFromYaw, rightFromForward };
