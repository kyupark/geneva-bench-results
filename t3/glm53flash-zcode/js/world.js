'use strict';
/* ============================================================
   GENÈVE — map of central Geneva, top-down.
   North = up. Lake Léman NE, Rhône flowing SW, Arve joining at
   Jonction. Old Town on the left-bank hill, Place de Neuve &
   Parc des Bastions SW of it, Cornavin on the right bank.
   ============================================================ */
const WORLD = { size: 4400 };

WORLD.lake = [
  [2380,-120],[4480,-120],[4480,1400],[4020,1330],[3560,1250],[3110,1170],
  [2810,1112],[2630,1062],[2558,895],[2528,690],[2496,440],[2452,170]
];
WORLD.rivers = [
  { hw: 92, pts: [[2700,1118],[2450,1148],[2200,1182],[1980,1238],[1740,1328],[1500,1468],[1290,1658],[1100,1918],[960,2248],[860,2648],[800,3048],[780,3448],[850,3748],[1000,3928],[1250,4078],[1520,4480]] },
  { hw: 72, pts: [[2720,4480],[2360,4300],[1960,4128],[1560,3968],[1200,3858],[1010,3798],[850,3748]] }
];
WORLD.islands = [(() => { // Île Rousseau (decorative, in the river)
  const pts = [];
  for (let i = 0; i < 18; i++) { const a = i / 18 * TAU; pts.push([2105 + Math.cos(a) * 95, 1206 + Math.sin(a) * 54]); }
  return pts;
})()];
WORLD.bridges = [
  { x: 2290, y: 1046, w: 84, h: 236 },  // Pont du Mont-Blanc
  { x: 1892, y: 1136, w: 80, h: 232 },  // Pont de la Machine
  { x: 1292, y: 1484, w: 78, h: 232 },  // Pont de la Coulouvrenière
  { x: 2585, y: 975,  w: 110, h: 42 },  // Bains des Pâquis pier
];

/* ---------------- water test (must precede procedural stamps) ---------------- */
WORLD.isWater = function (x, y) {
  for (const b of WORLD.bridges) if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) return false;
  for (const isl of WORLD.islands) if (pointInPoly(x, y, isl)) return false;
  if (pointInPoly(x, y, WORLD.lake)) return true;
  for (const r of WORLD.rivers) {
    const hw = r.hw;
    for (let i = 0, j = r.pts.length - 1; i < r.pts.length; j = i++) {
      if (segDist2(x, y, r.pts[j][0], r.pts[j][1], r.pts[i][0], r.pts[i][1]) < hw * hw) return true;
    }
  }
  return false;
};

/* ---------------- paint layers ---------------- */
WORLD.grass = [
  // Parc des Bastions
  [[1712,2258],[1830,2322],[1494,3186],[1332,3112]],
  // Jardin Anglais
  [[2740,1160],[3100,1205],[3140,1290],[3040,1345],[2820,1330],[2730,1245]],
  // Promenade de la Treille
  [[1995,1462],[2210,1462],[2210,1498],[1995,1498]],
  // Plaine de Plainpalais
  [[1050,3620],[1750,3620],[1750,4090],[1050,4090]],
];
WORLD.hill = [[2005,1405],[2475,1385],[2575,1520],[2585,1960],[2410,2140],[2090,2195],[1945,2040],[1930,1690]];
WORLD.plazaRects = [
  { x: 1545, y: 2005, w: 320, h: 200 },  // Place de Neuve
  { x: 1150, y: 930,  w: 310, h: 90 },   // station forecourt
];
WORLD.plazaCircles = [
  { x: 2340, y: 1668, r: 48 },           // Place du Bourg-de-Four
  { x: 1705, y: 2105, r: 34 },           // Place de Neuve centre
];
WORLD.promenades = [
  { w: 52, pts: [[1706,2262],[1752,2318],[1596,2688],[1480,3040],[1436,3150]] }, // Promenade des Bastions
  { w: 30, pts: [[1050,3850],[1750,3850]] }, // Plainpalais crossing
];
WORLD.checkers = [{ x: 1548, y: 2652, n: 8, cell: 14 }]; // giant chess, Bastions
WORLD.roads = [
  { w: 30, pts: [[2450,80],[2488,430],[2518,720],[2548,940],[2572,1052]] },                       // Quai du Mont-Blanc (r.bank)
  { w: 28, pts: [[2572,1052],[2460,1005],[2330,1040]] },                                          // to Mont-Blanc bridge
  { w: 28, pts: [[2330,1040],[2140,1080],[1920,1128],[1690,1210],[1440,1350],[1210,1550],[1030,1810],[900,2140],[820,2550],[770,2950],[755,3350],[830,3660],[980,3840],[1230,3990],[1490,4150],[1560,4400]] }, // right-bank quay
  { w: 28, pts: [[2330,1286],[2200,1300],[2010,1330],[1810,1400],[1590,1520],[1370,1690],[1180,1930],[1050,2250],[960,2620],[900,3020],[880,3400],[940,3660],[1090,3810]] }, // left-bank quay
  { w: 30, pts: [[2660,1105],[2900,1140],[3200,1190],[3560,1246],[4020,1322],[4400,1380]] },      // Quai Gustave-Ador (lake S shore)
  { w: 28, pts: [[2330,1286],[2470,1300],[2650,1280],[2730,1250],[2680,1180],[2665,1110]] },      // bridge → Jardin Anglais → shore
  { w: 28, pts: [[1300,952],[1560,990],[1820,1040],[2070,1082],[2260,1046],[2330,1040]] },        // station → bridge
  { w: 24, pts: [[1980,1372],[2520,1392],[2600,1560],[2600,1990],[2420,2160],[2060,2200],[1935,2050],[1928,1700],[1978,1430]] }, // old town ring
  { w: 24, pts: [[1868,2105],[1938,2105]] },                                                      // Neuve → old town
  { w: 22, pts: [[2600,1600],[2900,1650],[3200,1700],[3480,1760]] },                              // Eaux-Vives
  { w: 22, pts: [[1436,3190],[1440,3380],[1420,3620]] },                                          // Bastions → Plainpalais
  { w: 22, pts: [[860,3820],[1060,4040],[1220,4280]] },                                           // Carouge street
  { w: 22, pts: [[2560,2440],[2760,2760],[3000,3140],[3080,3320]] },                              // Champel road
];
WORLD.rails = [
  { pts: [[1140,845],[-60,805]] },
  { pts: [[1140,880],[-60,840]] },
  { pts: [[1140,915],[-60,875]] },
];
const JET = { x: 2840, y: 1075 }; // Jet d'Eau (in the lake)

/* ---------------- buildings ---------------- */
const CITY = ['#98a0ac','#a3a49f','#8f97a3','#a8aaa2'];
const OLD  = ['#b26a4c','#a75f45','#bd7454','#9d5a40'];
const PALE = ['#cfc9bd','#d8d3c8'];
WORLD.buildings = [];
const B = (x, y, w, h, c, lm) => WORLD.buildings.push({ x, y, w, h, c, lm });

function stampGrid(x0, y0, cols, rows, cw, ch, minS, maxS, colors, skipP, jitter = 10) {
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    if (Math.random() < skipP) continue;
    const s1 = rand(minS, maxS), s2 = rand(minS, maxS);
    const cx = x0 + i * cw + cw / 2 + rand(-jitter, jitter);
    const cy = y0 + j * ch + ch / 2 + rand(-jitter, jitter);
    if (WORLD.isWater && WORLD.isWater(cx, cy)) continue;
    B(cx - s1 / 2, cy - s2 / 2, s1, s2, pick(colors));
  }
}

// right bank
stampGrid(470, 170, 7, 5, 92, 90, 48, 70, CITY, 0.28);          // Sécheron
stampGrid(2100, 360, 4, 3, 92, 88, 46, 66, CITY, 0.25);         // Mont-Blanc centre
stampGrid(2050, 640, 5, 4, 88, 88, 44, 64, CITY, 0.22);         // Pâquis
stampGrid(1330, 930, 7, 2, 100, 92, 50, 72, CITY, 0.30);        // St-Gervais
B(430, 240, 300, 190, '#b9b2a2', 'nations');                    // Palais des Nations
B(1150, 790, 310, 140, '#8b93a0', 'station');                   // Gare Cornavin
// lakeside & left bank east
stampGrid(3230, 1310, 7, 1, 160, 90, 46, 60, ['#c8bfa8','#b8c0a8'], 0.2); // lakeside villas
stampGrid(2780, 1420, 6, 2, 150, 160, 70, 100, CITY, 0.3);      // Eaux-Vives N
stampGrid(2870, 1900, 5, 2, 150, 170, 70, 100, CITY, 0.35);     // Eaux-Vives S
B(2650, 1650, 90, 70, pick(CITY)); B(2650, 1760, 90, 70, pick(CITY)); B(2680, 1880, 90, 70, pick(CITY)); // Tranchées
// south east & south
stampGrid(2760, 2960, 4, 3, 170, 180, 70, 105, CITY, 0.4);      // Champel
B(2960, 3170, 230, 150, '#d5d2ca', 'hospital');                 // Hôpital
B(1000, 3420, 150, 110, '#97a08f'); B(1200, 3480, 130, 100, '#a0a89a'); // Jonction industry
stampGrid(860, 4030, 5, 3, 110, 105, 44, 60, OLD, 0.3);         // Carouge
// Place de Neuve ensemble
B(1375, 1985, 145, 215, '#5e7d72', 'theatre');                  // Grand Théâtre
B(1885, 2035, 95, 115, '#b8b2a6');                              // Conservatoire
B(1758, 2712, 112, 282, '#c6c0b4', 'uni');                      // Uni Bastions
B(1690, 2380, 40, 30, '#8a6f4f'); B(1430, 3050, 40, 30, '#8a6f4f'); // park kiosks
// Vieille Ville landmarks
B(2205, 1790, 135, 165, '#6f7680', 'cathedral');                // Cathédrale St-Pierre
B(2205, 1790, 48, 48, '#5d646e');
B(2035, 1565, 70, 88, '#cfc9bd', 'hdv');                        // Hôtel de Ville (courtyard)
B(2118, 1565, 72, 88, '#cfc9bd', 'hdv');
// Vieille Ville dense terracotta grid, masked to the hill
for (let x = 2035; x <= 2520; x += 82) for (let y = 1445; y <= 2120; y += 82) {
  const cx = x + rand(-12, 12), cy = y + rand(-12, 12);
  if (!pointInPoly(cx, cy, WORLD.hill)) continue;
  if (dist2(cx, cy, 2272, 1872) < 150 * 150) continue;          // cathedral
  if (dist2(cx, cy, 2112, 1610) < 120 * 120) continue;          // hôtel de ville
  if (dist2(cx, cy, 2340, 1668) < 75 * 75) continue;            // bourg-de-four
  if (cx > 1985 && cx < 2210 && cy > 1452 && cy < 1510) continue; // treille
  if (Math.random() < 0.32) continue;                           // alleys
  const s1 = rand(46, 66), s2 = rand(46, 66);
  B(cx - s1 / 2, cy - s2 / 2, s1, s2, pick(OLD));
}
// ramparts
B(1950, 2118, 470, 14, '#8b8577');
B(2578, 1560, 12, 380, '#8b8577');
// Mur des Réformateurs
B(1330, 3168, 240, 26, '#7f8790', 'reform');

/* crates (wooden cover) */
WORLD.crates = [];
const CR = (x, y) => { if (!WORLD.isWater(x, y)) WORLD.crates.push({ x, y }); };
const LOOT_POIS = [
  [1300, 880, 260, 26, 0], [2280, 830, 200, 16, 0], [2900, 1280, 190, 18, 0.06],
  [2280, 1790, 290, 34, 0.12], [1700, 2100, 170, 14, 0.02], [1590, 2740, 290, 26, 0.04],
  [1400, 3850, 290, 20, 0], [3230, 1720, 400, 22, 0], [3060, 3230, 300, 14, 0],
  [1140, 4170, 260, 16, 0], [1700, 1030, 220, 14, 0], [790, 420, 290, 12, 0],
  [580, 330, 180, 10, 0.05], [1200, 3520, 220, 10, 0],
];
for (const p of LOOT_POIS) {
  const n = randi(1, 2);
  for (let i = 0; i < n; i++) CR(p[0] + rand(-p[2] * 0.5, p[2] * 0.5), p[1] + rand(-p[2] * 0.5, p[2] * 0.5));
}
CR(2330, 1000); CR(2330, 1350); CR(1930, 1100); CR(1330, 1440); // bridgeheads

/* trees */
WORLD.trees = [];
const TR = (x, y, r) => { if (!WORLD.isWater(x, y)) WORLD.trees.push({ x, y, r }); };
(function plantTrees() {
  // Bastions rows along the promenade
  const p0 = [1768, 2308], p1 = [1452, 3150];
  const dx = p1[0] - p0[0], dy = p1[1] - p0[1], L = Math.hypot(dx, dy);
  const ux = dx / L, uy = dy / L, px = -uy, py = ux;
  for (let t = 0.06; t < 0.95; t += 0.075) for (const s of [-88, 88])
    TR(p0[0] + dx * t + px * s + rand(-10, 10), p0[1] + dy * t + py * s + rand(-10, 10), rand(22, 30));
  // Jardin Anglais
  for (let i = 0; i < 7; i++) { const a = rand(TAU), r = rand(55, 95); TR(2935 + Math.cos(a) * r, 1268 + Math.sin(a) * r * 0.7, rand(20, 27)); }
  // Île Rousseau
  for (let i = 0; i < 5; i++) TR(2105 + rand(-55, 55), 1206 + rand(-28, 28), rand(14, 19));
  // Tranchées row
  for (let y = 1440; y < 2090; y += 120) if (Math.random() < 0.75) TR(2640 + rand(-6, 6), y, rand(18, 24));
  // lake south shore
  for (let i = 0; i < 8; i++) { const t = i / 7, x = lerp(2750, 4250, t), y = lerp(1150, 1390, t) + 45; TR(x, y, rand(20, 27)); }
  // right bank quay (west of the shore road)
  for (let i = 0; i < 8; i++) { const y = 140 + i * 105; TR(2450 + (y - 80) * 0.101 - 36, y, rand(19, 25)); }
  // Plainpalais border
  TR(1090, 3660, 24); TR(1710, 3670, 24); TR(1080, 4050, 24); TR(1715, 4050, 24); TR(1400, 3655, 18); TR(1400, 4055, 18);
  // Mont-Blanc bridgehead
  TR(2600, 1030, 20); TR(2630, 1085, 18); TR(2290, 990, 20);
  // outskirts
  for (let i = 0; i < 6; i++) TR(rand(60, 400), rand(60, 500), rand(22, 30));
  for (let i = 0; i < 4; i++) TR(rand(60, 400), rand(3900, 4340), rand(22, 30));
  for (let i = 0; i < 4; i++) TR(rand(4050, 4340), rand(1550, 1950), rand(22, 30));
  for (let i = 0; i < 4; i++) TR(rand(2050, 2600), rand(4180, 4360), rand(22, 30));
})();

/* circular props (obstacles) */
WORLD.props = [
  { x: 1705, y: 2105, r: 11, type: 'statue' },   // Place de Neuve — General Dufour
  { x: 2340, y: 1668, r: 9,  type: 'fountain' }, // Bourg-de-Four fountain
  { x: 2935, y: 1268, r: 28, type: 'clock' },    // Horloge Fleurie
  { x: 1400, y: 3850, r: 12, type: 'volo' },     // Plainpalais sphere
  { x: 2105, y: 1206, r: 8,  type: 'statue' },   // Rousseau, Île Rousseau
  { x: 1360, y: 3156, r: 7, type: 'reform' }, { x: 1413, y: 3156, r: 7, type: 'reform' },
  { x: 1466, y: 3156, r: 7, type: 'reform' }, { x: 1519, y: 3156, r: 7, type: 'reform' },
];

/* labels */
WORLD.labels = [
  [3400, 720, 'LAC LÉMAN', 64, 0.5, 1], [4300, 1150, 'LAC LÉMAN', 36, 0.35, 1],
  [890, 2850, 'RHÔNE', 26, 0.55, 1], [1600, 4050, 'ARVE', 24, 0.55, 1],
  [2840, 985, "JET D'EAU", 14, 0.8, 1],
  [2270, 1520, 'VIEILLE VILLE', 30, 0.5], [2272, 1758, 'CATHÉDRALE ST-PIERRE', 14, 0.6],
  [2075, 1540, 'HÔTEL DE VILLE', 13, 0.6], [1998, 1482, 'LA TREILLE', 11, 0.55],
  [1705, 2232, 'PLACE DE NEUVE', 20, 0.6], [1620, 2540, 'PARC DES BASTIONS', 24, 0.55],
  [1450, 3232, 'MUR DES RÉFORMATEURS', 14, 0.6], [1400, 3830, 'PLAINPALAIS', 28, 0.5],
  [2950, 1372, 'JARDIN ANGLAIS', 16, 0.6], [1305, 760, 'GARE CORNAVIN', 20, 0.6],
  [2270, 590, 'PÂQUIS', 22, 0.5], [800, 120, 'SÉCHERON', 20, 0.45],
  [580, 175, 'NATIONS', 18, 0.5], [1680, 880, 'ST-GERVAIS', 18, 0.5],
  [3230, 1560, 'EAUX-VIVES', 24, 0.45], [3080, 3260, 'CHAMPEL', 22, 0.45],
  [1130, 4210, 'CAROUGE', 22, 0.55], [1050, 3640, 'JONCTION', 16, 0.5],
  [2585, 945, 'BAINS DES PÂQUIS', 10, 0.6], [2105, 1140, 'ÎLE ROUSSEAU', 10, 0.7, 1],
  [1815, 2115, 'GRAND THÉÂTRE', 11, 0.6], [1815, 2660, 'UNI BASTIONS', 11, 0.55],
];

/* loot spawn points (built in WORLD.build()) */
WORLD.lootSpawns = [];
WORLD.zoneStart = { x: 2050, y: 2050, r: 2350 };
WORLD.JET = JET;

WORLD.botNames = ['Pâquis','Servette','Eaux-Vives','Champel','Carouge','Jonction','Acacias','Plainpalais',
  'Charmilles','Vernets','Grottes','St-Gervais','Bourg-de-Four','Rousseau','Calvin','Môle',
  'Coulouvrenière','Malagnou','Florissant','Lancy','Vessy','Tranchées','La-Treille','Mont-Blanc',
  'Cornavin','Bastions','Neuve','Clémenceau','Carl-Vogt','Rive','Cité','Roseraie','Varembé','Secheron',
  'B extract','Atlas','Philosophes','Bel-Air','Trembley','Debud'];

/* ================= build & queries ================= */
WORLD.obstacles = [];
WORLD.build = function () {
  const ob = WORLD.obstacles;
  ob.length = 0;
  for (const b of WORLD.buildings) ob.push({ shape: 'rect', x: b.x, y: b.y, w: b.w, h: b.h, kind: 'building', lm: b.lm, c: b.c });
  for (const c of WORLD.crates) ob.push({ shape: 'rect', x: c.x - 13, y: c.y - 13, w: 26, h: 26, kind: 'crate', c: '#a97e4e' });
  for (const t of WORLD.trees) ob.push({ shape: 'circle', x: t.x, y: t.y, r: Math.min(t.r * 0.42, 12), kind: 'trunk' });
  for (const p of WORLD.props) ob.push({ shape: 'circle', x: p.x, y: p.y, r: p.r, kind: 'prop', type: p.type });
  // spatial grid
  const CELL = 160;
  WORLD.CELL = CELL;
  WORLD.GW = Math.ceil(WORLD.size / CELL) + 1;
  WORLD.grid = new Array(WORLD.GW * WORLD.GW);
  for (let i = 0; i < ob.length; i++) {
    const o = ob[i];
    const x0 = o.shape === 'rect' ? o.x : o.x - o.r, x1 = o.shape === 'rect' ? o.x + o.w : o.x + o.r;
    const y0 = o.shape === 'rect' ? o.y : o.y - o.r, y1 = o.shape === 'rect' ? o.y + o.h : o.y + o.r;
    const c0 = clamp(Math.floor(x0 / CELL), 0, WORLD.GW - 1), c1 = clamp(Math.floor(x1 / CELL), 0, WORLD.GW - 1);
    const r0 = clamp(Math.floor(y0 / CELL), 0, WORLD.GW - 1), r1 = clamp(Math.floor(y1 / CELL), 0, WORLD.GW - 1);
    for (let gy = r0; gy <= r1; gy++) for (let gx = c0; gx <= c1; gx++) {
      const idx = gy * WORLD.GW + gx;
      (WORLD.grid[idx] || (WORLD.grid[idx] = [])).push(i);
    }
  }
  // loot spawns
  const S = WORLD.lootSpawns; S.length = 0;
  for (const p of LOOT_POIS) {
    for (let i = 0; i < p[3]; i++) {
      const pt = WORLD.randLandPoint(p[0], p[1], p[2]);
      if (pt) S.push({ x: pt.x, y: pt.y, tier: p[4] });
    }
  }
  for (let i = 0; i < 44; i++) {
    const pt = WORLD.randLandPoint(WORLD.size / 2, WORLD.size / 2, WORLD.size * 0.48);
    if (pt) S.push({ x: pt.x, y: pt.y, tier: 0 });
  }
};

WORLD.collideStatic = function (x, y, r) {
  if (x < 24 || y < 24 || x > WORLD.size - 24 || y > WORLD.size - 24) return true;
  if (WORLD.isWater(x, y)) return true;
  const CELL = WORLD.CELL;
  const c0 = clamp(Math.floor((x - r) / CELL), 0, WORLD.GW - 1), c1 = clamp(Math.floor((x + r) / CELL), 0, WORLD.GW - 1);
  const r0 = clamp(Math.floor((y - r) / CELL), 0, WORLD.GW - 1), r1 = clamp(Math.floor((y + r) / CELL), 0, WORLD.GW - 1);
  for (let gy = r0; gy <= r1; gy++) for (let gx = c0; gx <= c1; gx++) {
    const cell = WORLD.grid[gy * WORLD.GW + gx];
    if (!cell) continue;
    for (const oi of cell) {
      const o = WORLD.obstacles[oi];
      if (o.shape === 'rect') { if (circleRect(x, y, r, o.x, o.y, o.w, o.h)) return true; }
      else if (dist2(x, y, o.x, o.y) < (r + o.r) * (r + o.r)) return true;
    }
  }
  return false;
};

WORLD.raycast = function (x0, y0, x1, y1) {
  let best = null, bt = 1;
  const CELL = WORLD.CELL;
  const c0 = clamp(Math.floor(Math.min(x0, x1) / CELL), 0, WORLD.GW - 1);
  const c1 = clamp(Math.floor(Math.max(x0, x1) / CELL), 0, WORLD.GW - 1);
  const r0 = clamp(Math.floor(Math.min(y0, y1) / CELL), 0, WORLD.GW - 1);
  const r1 = clamp(Math.floor(Math.max(y0, y1) / CELL), 0, WORLD.GW - 1);
  const seen = new Set();
  for (let gy = r0; gy <= r1; gy++) for (let gx = c0; gx <= c1; gx++) {
    const cell = WORLD.grid[gy * WORLD.GW + gx];
    if (!cell) continue;
    for (const oi of cell) {
      if (seen.has(oi)) continue;
      seen.add(oi);
      const o = WORLD.obstacles[oi];
      const t = o.shape === 'rect'
        ? segRect(x0, y0, x1, y1, o.x, o.y, o.w, o.h)
        : segCircle(x0, y0, x1, y1, o.x, o.y, o.r);
      if (t >= 0 && t < bt) { bt = t; best = o; }
    }
  }
  return best ? { t: bt, ob: best } : null;
};

WORLD.losClear = function (x0, y0, x1, y1) { return WORLD.raycast(x0, y0, x1, y1) === null; };

WORLD.randLandPoint = function (cx, cy, rad) {
  for (let i = 0; i < 30; i++) {
    const a = rand(TAU), d = Math.sqrt(Math.random()) * rad;
    const x = clamp(cx + Math.cos(a) * d, 40, WORLD.size - 40);
    const y = clamp(cy + Math.sin(a) * d, 40, WORLD.size - 40);
    if (!WORLD.collideStatic(x, y, 16)) return { x, y };
  }
  return null;
};
WORLD.resolveFree = function (x, y) {
  if (!WORLD.collideStatic(x, y, 16)) return { x, y };
  for (let r = 20; r <= 260; r += 24) for (let i = 0; i < 12; i++) {
    const a = rand(TAU);
    const nx = clamp(x + Math.cos(a) * r, 40, WORLD.size - 40), ny = clamp(y + Math.sin(a) * r, 40, WORLD.size - 40);
    if (!WORLD.collideStatic(nx, ny, 16)) return { x: nx, y: ny };
  }
  return { x: WORLD.zoneStart.x, y: WORLD.zoneStart.y };
};
