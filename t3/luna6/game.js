(() => {
  'use strict';

  const canvas = document.getElementById('world');
  const ctx = canvas.getContext('2d');
  const minimap = document.getElementById('minimap');
  const miniCtx = minimap.getContext('2d');
  const W = 2400;
  const H = 1800;
  const TAU = Math.PI * 2;
  const DPR_CAP = 2;
  const LANDMARKS = [
    { name: 'LAKEFRONT', x: 1390, y: 480, r: 260 },
    { name: 'OLD TOWN', x: 1090, y: 760, r: 260 },
    { name: 'PLACE NEUVE', x: 690, y: 940, r: 170 },
    { name: 'PARC DES BASTIONS', x: 790, y: 1220, r: 245 },
    { name: 'PLAINPALAIS', x: 1260, y: 1230, r: 300 },
    { name: 'LES EAUX-VIVES', x: 1770, y: 880, r: 300 },
    { name: 'SAINT-GERVAIS', x: 1510, y: 620, r: 230 },
  ];

  let viewW = innerWidth;
  let viewH = innerHeight;
  let zoom = 1;
  let lastFrame = 0;
  let matchState = 'lobby';
  let matchTime = 0;
  let lastShot = 0;
  let reloadTimer = 0;
  let isShooting = false;
  let touchFiring = false;
  let touchMove = { x: 0, y: 0 };
  let stickPointer = null;
  let stickOrigin = null;
  let mouse = { x: viewW / 2 + 80, y: viewH / 2 };
  let keys = new Set();
  let player = null;
  let actors = [];
  let projectiles = [];
  let grenades = [];
  let pickups = [];
  let effects = [];
  let trees = [];
  let buildings = [];
  let decor = [];
  let obstacleBuckets = new Map();
  let cameraX = W / 2;
  let cameraY = H / 2;
  let zone = { x: 1195, y: 895, radius: 1080, stage: 0 };
  let previousSector = '';
  let toastTimer = 0;
  let audio = null;
  let muted = false;
  let randSeed = 834291;

  const ui = {
    deploy: document.getElementById('deploy-screen'), deployBtn: document.getElementById('deploy-button'),
    end: document.getElementById('end-screen'), pause: document.getElementById('pause-screen'),
    help: document.getElementById('help-modal'), helpToggle: document.getElementById('help-toggle'),
    closeHelp: document.getElementById('close-help'), resume: document.getElementById('resume-button'),
    restart: document.getElementById('restart-button'), sound: document.getElementById('sound-toggle'),
    phase: document.getElementById('phase-label'), clock: document.getElementById('match-clock'),
    alive: document.getElementById('alive-count'), kills: document.getElementById('kill-count'),
    zoneCaption: document.getElementById('zone-caption'), zoneStatus: document.getElementById('zone-status'),
    sector: document.getElementById('sector-label'), hp: document.getElementById('hp-value'), hpText: document.getElementById('hp-text'),
    armorText: document.getElementById('armor-text'), health: document.getElementById('health-fill'), armor: document.getElementById('armor-fill'),
    ammo: document.getElementById('ammo-current'), ammoTotal: document.getElementById('ammo-total'), med: document.getElementById('med-count'), grenade: document.getElementById('grenade-count'),
    bearing: document.getElementById('bearing'), banner: document.getElementById('landmark-banner'), landmark: document.getElementById('landmark-name'),
    warning: document.getElementById('danger-warning'), feed: document.getElementById('kill-feed'), center: document.getElementById('center-message'),
    toast: document.getElementById('pickup-toast'), endTitle: document.getElementById('end-title'), endCopy: document.getElementById('end-copy'),
    endKills: document.getElementById('end-kills'), endTime: document.getElementById('end-time'), endPlace: document.getElementById('end-place'),
  };

  function rnd() {
    randSeed = (randSeed * 1664525 + 1013904223) >>> 0;
    return randSeed / 4294967296;
  }
  function range(min, max) { return min + rnd() * (max - min); }
  function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
  function distance(x1, y1, x2, y2) { return Math.hypot(x2 - x1, y2 - y1); }
  function fmtTime(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  }

  function resize() {
    viewW = innerWidth;
    viewH = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, DPR_CAP);
    canvas.width = Math.round(viewW * dpr);
    canvas.height = Math.round(viewH * dpr);
    canvas.style.width = `${viewW}px`;
    canvas.style.height = `${viewH}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    zoom = Math.min(1, Math.max(.66, Math.min(viewW / 1100, viewH / 680)));
  }

  function inPark(x, y) {
    return (x > 590 && x < 1005 && y > 1040 && y < 1420) || (x > 1650 && x < 1840 && y > 760 && y < 940) || (x > 1430 && x < 1550 && y > 1080 && y < 1210);
  }
  function inPlaza(x, y) { return x > 585 && x < 790 && y > 860 && y < 1035; }
  function inLakefront(x, y) { return y < 565 && x > 180 && x < 2210; }
  function inOldTown(x, y) { return x > 920 && x < 1325 && y > 580 && y < 965; }

  function addBuilding(x, y, w, h, kind = 'city') {
    const palettes = kind === 'old'
      ? ['#bcae91', '#c6b797', '#aa9f84', '#d0c2a1', '#b4a487']
      : ['#b7b49d', '#aaa993', '#c2bda6', '#9ea58f', '#c4b7a0', '#a7ab96'];
    buildings.push({ x, y, w, h, kind, color: palettes[Math.floor(rnd() * palettes.length)], seed: rnd() * 100, roof: rnd() > .56 ? 'tile' : 'flat' });
  }

  function generateMap() {
    buildings = [];
    trees = [];
    decor = [];
    randSeed = 834291;

    // Dense city blocks with clear corridors around the lakefront and major squares.
    for (let y = 485; y < 1600; y += 103) {
      for (let x = 250; x < 2240; x += 108) {
        const cx = x + 51;
        const cy = y + 48;
        if (inPark(cx, cy) || inPlaza(cx, cy) || inLakefront(cx, cy) || inOldTown(cx, cy)) continue;
        if ((cx < 450 && cy < 700) || (cx > 2090 && cy > 1480)) continue;
        const roadGap = (Math.floor((cx - 250) / 108) % 5 === 0) || (Math.floor((cy - 485) / 103) % 5 === 0);
        if (roadGap || rnd() < .14) continue;
        const bw = range(48, 73);
        const bh = range(42, 74);
        const ox = range(-8, 9);
        const oy = range(-8, 9);
        if (distance(cx, cy, 690, 940) < 120) continue;
        addBuilding(cx - bw / 2 + ox, cy - bh / 2 + oy, bw, bh);
      }
    }

    // Old Town keeps its tighter, irregular block pattern around the cathedral.
    for (let y = 595; y < 955; y += 70) {
      for (let x = 930; x < 1320; x += 72) {
        const cx = x + 34;
        const cy = y + 32;
        if (distance(cx, cy, 1090, 760) < 62) continue;
        if (rnd() < .13) continue;
        const bw = range(42, 62);
        const bh = range(39, 62);
        addBuilding(cx - bw / 2 + range(-3, 3), cy - bh / 2 + range(-3, 3), bw, bh, 'old');
      }
    }

    // Historic / public landmarks. Cathedral, opera hall and museums are stylized silhouettes.
    buildings.push({ x: 1060, y: 725, w: 66, h: 70, kind: 'cathedral', color: '#aaa58d', seed: 0, roof: 'stone' });
    buildings.push({ x: 542, y: 907, w: 69, h: 79, kind: 'opera', color: '#b7af98', seed: 12, roof: 'stone' });
    buildings.push({ x: 1365, y: 1000, w: 90, h: 64, kind: 'museum', color: '#c2b89e', seed: 13, roof: 'stone' });

    // Trees in the Bastions and small squares.
    for (let i = 0; i < 82; i++) {
      let x = range(610, 988), y = range(1060, 1404);
      if (x < 666 && y > 1275) continue;
      trees.push({ x, y, r: range(8, 14), shade: Math.floor(rnd() * 4), park: true });
    }
    for (let i = 0; i < 42; i++) {
      let x = range(275, 2120), y = range(500, 1580);
      if (inPark(x, y) || inLakefront(x, y) || inOldTown(x, y) || inPlaza(x, y)) continue;
      if (rnd() < .52) trees.push({ x, y, r: range(6, 10), shade: Math.floor(rnd() * 4), park: false });
    }
    // Boulevard rows and the leafy arcades along Bastions.
    for (let i = 0; i < 11; i++) trees.push({ x: 585 + i * 37, y: 1018 + (i % 2) * 9, r: 10, shade: i % 4, park: true });
    for (let i = 0; i < 11; i++) trees.push({ x: 632 + i * 31, y: 1115, r: 10, shade: (i + 1) % 4, park: true });
    for (let i = 0; i < 19; i++) {
      const x = 265 + i * 62;
      if (x > 1490) break;
      trees.push({ x, y: 475 + (i % 2) * 10, r: 9, shade: i % 4, park: true });
    }
    // Texture flecks and tiny street marks are deterministic and baked into the scene.
    for (let i = 0; i < 1700; i++) decor.push({ x: range(0, W), y: range(370, H), r: range(.6, 2), a: range(.035, .11) });
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.roundRect(x, y, w, h, r);
  }
  function path(c, pts, close = false) {
    c.beginPath();
    pts.forEach((p, i) => i === 0 ? c.moveTo(p[0], p[1]) : c.lineTo(p[0], p[1]));
    if (close) c.closePath();
  }
  function curve(c, points, color, width, dash = []) {
    c.beginPath();
    c.moveTo(points[0][0], points[0][1]);
    c.bezierCurveTo(points[1][0], points[1][1], points[2][0], points[2][1], points[3][0], points[3][1]);
    c.strokeStyle = color;
    c.lineWidth = width;
    c.lineCap = 'round';
    c.setLineDash(dash);
    c.stroke();
    c.setLineDash([]);
  }

  function drawLake() {
    const water = ctx.createLinearGradient(0, 40, 1850, 560);
    water.addColorStop(0, '#4b8585');
    water.addColorStop(.42, '#549393');
    water.addColorStop(1, '#497b7d');
    ctx.fillStyle = water;
    path(ctx, [[0, 0], [W, 0], [W, 370], [2220, 375], [2090, 340], [1900, 293], [1740, 242], [1590, 257], [1440, 229], [1280, 209], [1110, 223], [930, 250], [770, 295], [625, 329], [470, 347], [320, 377], [175, 420], [0, 455]], true);
    ctx.fill();
    // Current lines and pale lake reflections.
    ctx.save();
    ctx.globalAlpha = .18;
    for (let i = 0; i < 25; i++) {
      const y = 42 + i * 14;
      ctx.beginPath();
      ctx.moveTo(80 + (i % 3) * 90, y);
      ctx.bezierCurveTo(430, y - 10, 710, y + 12, 1090, y + 2);
      ctx.bezierCurveTo(1380, y - 6, 1690, y + 11, 2150, y - 3);
      ctx.strokeStyle = i % 3 === 0 ? '#b4ded2' : '#183f48';
      ctx.lineWidth = i % 3 === 0 ? 1.2 : .8;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawBaseMap() {
    ctx.fillStyle = '#718766';
    ctx.fillRect(0, 0, W, H);
    // broad natural variation beyond the built center
    for (let i = 0; i < 18; i++) {
      const x = (i * 271 + 79) % W;
      const y = 470 + ((i * 337) % 1210);
      const r = 140 + (i % 4) * 34;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, i % 2 ? 'rgba(157,169,111,.16)' : 'rgba(54,91,66,.12)');
      grad.addColorStop(1, 'rgba(111,134,99,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(x - r, y - r, 2 * r, 2 * r);
    }
    drawLake();

    // Urban paving and light curb bands follow the shoreline and street grid.
    ctx.fillStyle = '#9d9e87';
    ctx.fillRect(180, 508, 2020, 1050);
    ctx.fillStyle = '#b7b39a';
    ctx.fillRect(193, 521, 1995, 1023);
    // Break the urban field with the Parc, lakefront, and public squares.
    ctx.fillStyle = '#718766';
    ctx.fillRect(0, 475, W, 35);
    ctx.fillRect(0, 1555, W, 245);
    ctx.fillRect(0, 490, 188, 1085);
    ctx.fillRect(2205, 490, 195, 1085);
    ctx.fillStyle = '#c4c4a8';
    ctx.fillRect(220, 535, 1940, 13);
    ctx.fillStyle = '#8e9b74';
    ctx.fillRect(220, 548, 1940, 8);

    drawBastions();
    drawPlaza();
    drawStreets();
    drawPromenade();

    // Fine grass texture. This is deliberately quiet under the tactical overlays.
    ctx.save();
    for (const f of decor) {
      if (f.y < 470 || inLakefront(f.x, f.y)) continue;
      ctx.globalAlpha = f.a;
      ctx.fillStyle = f.r > 1.4 ? '#324f39' : '#e0d8b7';
      ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, TAU); ctx.fill();
    }
    ctx.restore();
  }

  function drawBastions() {
    // Parc des Bastions: lawns, promenades, the Reformation Wall and chessboard walk.
    roundRect(ctx, 586, 1044, 425, 381, 20);
    ctx.fillStyle = '#536e51'; ctx.fill();
    roundRect(ctx, 602, 1058, 393, 353, 17);
    ctx.fillStyle = '#88a16f'; ctx.fill();
    ctx.save();
    roundRect(ctx, 602, 1058, 393, 353, 17); ctx.clip();
    const lawn = ctx.createLinearGradient(600, 1070, 980, 1400);
    lawn.addColorStop(0, '#8da575'); lawn.addColorStop(.55, '#79966b'); lawn.addColorStop(1, '#91a976');
    ctx.fillStyle = lawn; ctx.fillRect(600, 1058, 398, 357);
    for (let i = 0; i < 20; i++) {
      ctx.globalAlpha = .1;
      ctx.fillStyle = i % 2 ? '#d0d3a0' : '#496d4a';
      ctx.fillRect(605, 1070 + i * 18, 390, 1);
    }
    ctx.globalAlpha = 1;
    // Cross paths and the central allée
    ctx.strokeStyle = '#d0c7a7'; ctx.lineWidth = 13; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(642, 1387); ctx.lineTo(782, 1075); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(951, 1387); ctx.lineTo(803, 1075); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(618, 1225); ctx.lineTo(979, 1225); ctx.stroke();
    ctx.strokeStyle = '#e2d9ba'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(797, 1073); ctx.lineTo(797, 1402); ctx.stroke();
    // Life-size chess area at the eastern edge
    for (let row = 0; row < 4; row++) for (let col = 0; col < 4; col++) {
      ctx.fillStyle = (row + col) % 2 ? '#c5c1a0' : '#66785c';
      ctx.fillRect(902 + col * 14, 1305 + row * 14, 14, 14);
    }
    ctx.restore();
    // Reformation Wall as a long pale masonry silhouette.
    roundRect(ctx, 638, 1091, 28, 94, 3); ctx.fillStyle = '#c8c0a8'; ctx.fill();
    ctx.fillStyle = '#dbd1b7'; ctx.fillRect(642, 1097, 20, 5);
    // Wall lettering marks
    ctx.fillStyle = '#85836c'; ctx.font = '700 9px serif'; ctx.textAlign = 'center';
    ctx.fillText('POST TENEBRAS LUX', 652, 1142);
    // Park paths/plaza connectors and subtle stone entrance
    ctx.fillStyle = '#d3c9ac'; ctx.fillRect(751, 1035, 92, 24);
    ctx.fillStyle = '#b6ad93'; ctx.fillRect(747, 1034, 5, 26); ctx.fillRect(842, 1034, 5, 26);
    ctx.strokeStyle = '#718a63'; ctx.lineWidth = 3; ctx.strokeRect(586, 1044, 425, 381);
  }

  function drawPlaza() {
    // Place de Neuve and its surrounding square, fountain, and theatre facade.
    ctx.fillStyle = '#d6d0b5';
    path(ctx, [[599, 857], [785, 857], [806, 885], [796, 1025], [604, 1035], [579, 1006], [580, 886]], true); ctx.fill();
    ctx.strokeStyle = 'rgba(120,115,94,.28)'; ctx.lineWidth = 2;
    for (let x = 610; x < 790; x += 22) { ctx.beginPath(); ctx.moveTo(x, 862); ctx.lineTo(x, 1026); ctx.stroke(); }
    for (let y = 873; y < 1026; y += 22) { ctx.beginPath(); ctx.moveTo(590, y); ctx.lineTo(799, y); ctx.stroke(); }
    // Fountain basin
    ctx.beginPath(); ctx.ellipse(695, 947, 25, 17, -.12, 0, TAU); ctx.fillStyle = '#7ca7a0'; ctx.fill();
    ctx.strokeStyle = '#eee4c8'; ctx.lineWidth = 4; ctx.stroke();
    ctx.beginPath(); ctx.arc(695, 947, 5, 0, TAU); ctx.fillStyle = '#d8e3cc'; ctx.fill();
    // tram tracks across the square
    ctx.strokeStyle = '#686e64'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(590, 906); ctx.lineTo(800, 899); ctx.moveTo(590, 914); ctx.lineTo(800, 907); ctx.stroke();
  }

  function drawStreets() {
    // A legible network of broad avenues that anchors the districts in the city.
    const roads = [
      [[170, 611], [670, 590], [1190, 626], [2210, 583], 30],
      [[190, 849], [680, 880], [1350, 834], [2220, 886], 25],
      [[230, 1034], [680, 1082], [1430, 1045], [2200, 1110], 24],
      [[285, 1452], [770, 1390], [1435, 1494], [2140, 1420], 30],
      [[441, 500], [391, 800], [520, 1230], [448, 1570], 26],
      [[823, 496], [872, 780], [763, 1240], [871, 1560], 22],
      [[1330, 495], [1270, 790], [1350, 1190], [1295, 1565], 25],
      [[1794, 510], [1715, 780], [1820, 1195], [1730, 1545], 28],
      [[925, 434], [1240, 406], [1470, 480], [1840, 536], 19],
    ];
    for (const r of roads) {
      curve(ctx, r.slice(0, 4), 'rgba(105,105,88,.35)', r[4] + 7);
      curve(ctx, r.slice(0, 4), '#c7c1a8', r[4]);
      curve(ctx, r.slice(0, 4), 'rgba(255,250,224,.25)', 1.3, [5, 9]);
    }
    // Narrow, historic lanes in Vieille Ville.
    ctx.strokeStyle = '#d8ceb3'; ctx.lineWidth = 13; ctx.lineCap = 'round';
    for (let x = 948; x < 1310; x += 74) { ctx.beginPath(); ctx.moveTo(x, 588); ctx.lineTo(x - 5, 961); ctx.stroke(); }
    for (let y = 613; y < 963; y += 70) { ctx.beginPath(); ctx.moveTo(922, y); ctx.lineTo(1332, y + 3); ctx.stroke(); }
    // Small crosswalk ticks at the bigger junctions.
    for (const [x, y] of [[820, 850], [1300, 846], [1790, 1104], [445, 1032], [1297, 1454]]) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(-.09); ctx.fillStyle = 'rgba(241,233,205,.52)';
      for (let i = -3; i <= 3; i++) ctx.fillRect(i * 7 - 2, -11, 4, 22);
      ctx.restore();
    }
  }

  function drawPromenade() {
    // Lakefront garden strip and stone quai.
    curve(ctx, [[165, 443], [520, 378], [1030, 352], [1500, 362]], '#c5c0a8', 22);
    curve(ctx, [[145, 460], [520, 396], [1030, 372], [1530, 383]], '#eee4c8', 4);
    ctx.fillStyle = '#738d69';
    ctx.beginPath(); ctx.moveTo(170, 466); ctx.bezierCurveTo(580, 405, 1050, 390, 1548, 403); ctx.lineTo(1540, 463); ctx.bezierCurveTo(1100, 453, 570, 471, 188, 521); ctx.closePath(); ctx.fill();
    // Port / dock fingers
    ctx.fillStyle = '#c8c0a5';
    for (let i = 0; i < 7; i++) {
      const x = 875 + i * 35;
      ctx.fillRect(x, 263 - (i % 3) * 8, 5, 105 + (i % 3) * 8);
      ctx.fillRect(x - 7, 255 - (i % 3) * 8, 19, 7);
    }
    // Iconic Jet d'Eau in the lake.
    ctx.save();
    ctx.shadowColor = 'rgba(223,252,242,.82)'; ctx.shadowBlur = 12;
    ctx.strokeStyle = 'rgba(225,248,239,.83)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(1545, 356); ctx.quadraticCurveTo(1555, 290, 1547, 211); ctx.stroke();
    ctx.strokeStyle = 'rgba(205,239,226,.44)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(1545, 350); ctx.quadraticCurveTo(1520, 279, 1536, 222); ctx.moveTo(1547, 350); ctx.quadraticCurveTo(1575, 280, 1557, 220); ctx.stroke();
    ctx.restore();
    ctx.beginPath(); ctx.ellipse(1545, 356, 12, 6, 0, 0, TAU); ctx.fillStyle = '#d7e7d8'; ctx.fill();
    // Lakefront trees and benches
    ctx.fillStyle = '#776d57';
    for (let i = 0; i < 8; i++) ctx.fillRect(478 + i * 72, 488 + (i % 2) * 7, 12, 3);
  }

  function drawBuilding(b) {
    const { x, y, w, h } = b;
    ctx.fillStyle = 'rgba(28,39,31,.2)';
    roundRect(ctx, x + 5, y + 7, w, h, b.kind === 'old' ? 4 : 2); ctx.fill();
    ctx.fillStyle = '#777a68';
    roundRect(ctx, x, y + 4, w, h, b.kind === 'old' ? 4 : 2); ctx.fill();
    ctx.fillStyle = b.color;
    roundRect(ctx, x, y, w, h, b.kind === 'old' ? 4 : 2); ctx.fill();
    if (b.kind === 'cathedral') {
      ctx.fillStyle = '#8b8a75'; roundRect(ctx, x + 7, y + 7, w - 14, h - 14, 8); ctx.fill();
      ctx.strokeStyle = '#d3c9ad'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(x + w / 2, y + h / 2, 17, 0, TAU); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + w / 2, y + 11); ctx.lineTo(x + w / 2, y + h - 11); ctx.moveTo(x + 12, y + h / 2); ctx.lineTo(x + w - 12, y + h / 2); ctx.stroke();
      ctx.fillStyle = '#a39c84'; ctx.fillRect(x + 5, y - 9, w - 10, 10);
      ctx.fillStyle = '#c7bba0'; ctx.fillRect(x + w / 2 - 3, y - 30, 6, 25); ctx.fillRect(x + w / 2 - 8, y - 22, 16, 3);
      return;
    }
    if (b.kind === 'opera' || b.kind === 'museum') {
      ctx.fillStyle = '#d5cbb1'; ctx.fillRect(x + 6, y + 6, w - 12, 7);
      ctx.fillStyle = '#777b68';
      for (let i = 0; i < 4; i++) { ctx.fillRect(x + 12 + i * (w - 24) / 4, y + 18, 4, h - 28); }
      ctx.fillRect(x + 8, y + h - 9, w - 16, 4);
      ctx.fillStyle = '#c8bea3'; ctx.fillRect(x + 3, y - 5, w - 6, 7);
    } else if (b.roof === 'tile') {
      ctx.fillStyle = 'rgba(123,89,68,.38)';
      for (let i = 1; i < 4; i++) { ctx.beginPath(); ctx.moveTo(x + 5, y + i * h / 4); ctx.lineTo(x + w - 5, y + i * h / 4); ctx.strokeStyle = 'rgba(123,89,68,.36)'; ctx.lineWidth = 1; ctx.stroke(); }
    } else {
      ctx.fillStyle = 'rgba(220,214,190,.35)'; ctx.fillRect(x + 5, y + 5, w - 10, 4);
      ctx.fillStyle = 'rgba(86,94,76,.35)';
      ctx.fillRect(x + w * .3, y + h * .25, Math.min(12, w * .24), 7);
    }
    // A tiny light well / skylight catches the roof.
    if (w > 54 && b.seed > .45) {
      ctx.fillStyle = 'rgba(229,221,193,.58)';
      ctx.fillRect(x + w * .57, y + h * .2, Math.min(11, w * .17), 5);
    }
  }

  const TREE_SHADES = ['#3f6849', '#54794d', '#5e8054', '#496f4e'];
  function drawTree(t) {
    ctx.fillStyle = 'rgba(25,38,27,.22)';
    ctx.beginPath(); ctx.ellipse(t.x + 3, t.y + 5, t.r * 1.1, t.r * .8, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#594e3e'; ctx.fillRect(t.x - 2, t.y + 1, 4, t.r * .8);
    ctx.fillStyle = TREE_SHADES[t.shade];
    ctx.beginPath(); ctx.arc(t.x, t.y, t.r, 0, TAU); ctx.fill();
    ctx.fillStyle = 'rgba(171,191,124,.27)'; ctx.beginPath(); ctx.arc(t.x - t.r * .32, t.y - t.r * .35, t.r * .48, 0, TAU); ctx.fill();
    ctx.strokeStyle = 'rgba(39,69,43,.42)'; ctx.lineWidth = 1; ctx.stroke();
  }

  function drawLabels() {
    const labels = [
      ['QUAI DU MONT-BLANC', 750, 443], ['L A C   L É M A N', 1110, 125], ['VIEILLE VILLE', 1091, 575],
      ['PLACE NEUVE', 693, 840], ['PARC DES BASTIONS', 805, 1458], ['PLAINPALAIS', 1265, 1360],
      ['LES EAUX-VIVES', 1842, 951], ['SAINT-GERVAIS', 1504, 559], ['JET D’EAU', 1594, 324],
      ['PONT DU MONT-BLANC', 1890, 439],
    ];
    ctx.textAlign = 'center';
    for (const [label, x, y] of labels) {
      ctx.fillStyle = 'rgba(34,54,41,.56)';
      ctx.font = '500 10px "DM Mono", monospace';
      ctx.fillText(label, x, y);
    }
    // A restrained landmark dot
    ctx.fillStyle = '#d5ec67';
    for (const [x, y] of [[1093, 714], [695, 947], [797, 1081], [1545, 356]]) {
      ctx.beginPath(); ctx.arc(x, y, 2.7, 0, TAU); ctx.fill();
    }
  }

  function buildObstacleIndex() {
    obstacleBuckets = new Map();
    const cellSize = 160;
    const add = (item, minX, minY, maxX, maxY) => {
      for (let cy = Math.floor(minY / cellSize); cy <= Math.floor(maxY / cellSize); cy++) {
        for (let cx = Math.floor(minX / cellSize); cx <= Math.floor(maxX / cellSize); cx++) {
          const key = `${cx},${cy}`;
          if (!obstacleBuckets.has(key)) obstacleBuckets.set(key, []);
          obstacleBuckets.get(key).push(item);
        }
      }
    };
    for (const b of buildings) add({ type: 'building', ref: b }, b.x, b.y, b.x + b.w, b.y + b.h);
    for (const t of trees) add({ type: 'tree', ref: t }, t.x - t.r, t.y - t.r, t.x + t.r, t.y + t.r);
  }

  function pointHitsObstacle(x, y, radius = 0) {
    const cellSize = 160;
    const cx = Math.floor(x / cellSize);
    const cy = Math.floor(y / cellSize);
    for (let gy = cy - 1; gy <= cy + 1; gy++) for (let gx = cx - 1; gx <= cx + 1; gx++) {
      const bucket = obstacleBuckets.get(`${gx},${gy}`);
      if (!bucket) continue;
      for (const entry of bucket) {
        if (entry.type === 'building') {
          const b = entry.ref;
          const nx = clamp(x, b.x, b.x + b.w);
          const ny = clamp(y, b.y, b.y + b.h);
          if ((x - nx) ** 2 + (y - ny) ** 2 < radius ** 2) return true;
        } else {
          const t = entry.ref;
          if (distance(x, y, t.x, t.y) < radius + t.r * .55) return true;
        }
      }
    }
    return false;
  }

  function moveActor(actor, dx, dy) {
    const radius = actor.isPlayer ? 12 : 11;
    const nx = clamp(actor.x + dx, 25, W - 25);
    if (!pointHitsObstacle(nx, actor.y, radius)) actor.x = nx;
    const ny = clamp(actor.y + dy, 385, H - 25);
    if (!pointHitsObstacle(actor.x, ny, radius)) actor.y = ny;
  }

  function lineBlocked(x1, y1, x2, y2) {
    const len = distance(x1, y1, x2, y2);
    const steps = Math.ceil(len / 12);
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      if (pointHitsObstacle(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, 1)) return true;
    }
    return false;
  }

  function randomOpenPoint(minRadius = 0, maxRadius = 1020, cx = 1195, cy = 895) {
    for (let tries = 0; tries < 500; tries++) {
      const a = rnd() * TAU;
      const r = range(minRadius, maxRadius);
      const x = clamp(cx + Math.cos(a) * r, 45, W - 45);
      const y = clamp(cy + Math.sin(a) * r, 480, H - 40);
      if (!pointHitsObstacle(x, y, 18) && !inPark(x, y) && !inLakefront(x, y)) return { x, y };
    }
    return { x: 710, y: 970 };
  }

  function initializeActors() {
    actors = [];
    projectiles = [];
    grenades = [];
    effects = [];
    pickups = [];
    const start = { x: 712, y: 962 };
    player = {
      id: 'you', name: 'ROGUE 07', x: start.x, y: start.y, angle: -Math.PI / 4,
      hp: 100, armor: 25, ammo: 30, reserve: 120, kills: 0, medkits: 2, grenades: 1,
      isPlayer: true, alive: true, speed: 185, radius: 12, color: '#d5ec67', nextBotShot: 0, invuln: 0,
    };
    actors.push(player);
    const names = ['GHOST','MOSS','GLASS','SAINT','NORTH','JUNO','CIPHER','WREN','SABLE','KITE','ECHO'];
    for (let i = 0; i < 11; i++) {
      let p;
      let tries = 0;
      do {
        p = randomOpenPoint(250, 970);
        tries++;
      } while (distance(p.x, p.y, start.x, start.y) < 260 && tries < 15);
      const angle = rnd() * TAU;
      actors.push({
        id: `bot-${i}`, name: names[i], x: p.x, y: p.y, angle,
        hp: 100, armor: i < 4 ? 18 : 0, ammo: 30, reserve: 90, kills: 0,
        isPlayer: false, alive: true, speed: range(92, 120), radius: 11,
        color: ['#c0c9be','#d8c6aa','#9eaba0','#c2b19d'][i % 4],
        nextBotShot: range(.4, 2), wanderAngle: angle, wanderTimer: range(1, 4),
        awareness: 0, target: null, strafe: rnd() > .5 ? 1 : -1, spawnX: p.x, spawnY: p.y,
      });
    }
    for (let i = 0; i < 22; i++) {
      const p = randomOpenPoint(90, 1000);
      const type = rnd() < .58 ? 'ammo' : rnd() < .76 ? 'med' : rnd() < .5 ? 'armor' : 'ammo';
      pickups.push({ x: p.x, y: p.y, type, alive: true, phase: rnd() * TAU, amount: type === 'ammo' ? 30 : type === 'med' ? 1 : 24 });
    }
    pickups.push({ x: 1090, y: 760, type: 'ammo', alive: true, phase: 0, amount: 48 });
    pickups.push({ x: 791, y: 1210, type: 'med', alive: true, phase: .6, amount: 1 });
    zone = { x: 1195, y: 895, radius: 1080, stage: 0 };
    matchTime = 0;
    lastShot = 0;
    reloadTimer = 0;
    previousSector = '';
    ui.feed.innerHTML = '';
    updateHUD();
  }

  function showCallout(message) {
    ui.center.innerHTML = `<div class="callout">${message}</div>`;
  }
  function showToast(message) {
    ui.toast.textContent = message;
    ui.toast.classList.add('show');
    toastTimer = 1.8;
  }
  function addFeed(text, danger = true) {
    const row = document.createElement('div');
    row.className = 'feed-item';
    row.innerHTML = text;
    if (!danger) row.style.borderLeftColor = '#d5ec67';
    ui.feed.prepend(row);
    while (ui.feed.children.length > 4) ui.feed.removeChild(ui.feed.lastElementChild);
    setTimeout(() => row.remove(), 5500);
  }
  function updateSector() {
    if (!player) return;
    let best = LANDMARKS[0];
    let bestDistance = Infinity;
    for (const l of LANDMARKS) {
      const d = distance(player.x, player.y, l.x, l.y);
      if (d < bestDistance) { best = l; bestDistance = d; }
    }
    const sector = bestDistance < best.r ? best.name : 'GENÈVE OUTSKIRTS';
    ui.sector.textContent = sector;
    if (sector !== previousSector) {
      previousSector = sector;
      if (matchState === 'playing') {
        ui.landmark.textContent = sector;
        ui.banner.classList.add('show');
        setTimeout(() => ui.banner.classList.remove('show'), 2500);
      }
    }
  }

  function updateHUD() {
    const alive = actors.length ? actors.reduce((sum, a) => sum + (a.alive ? 1 : 0), 0) : 12;
    ui.alive.textContent = String(alive).padStart(2, '0');
    ui.kills.textContent = String(player?.kills || 0).padStart(2, '0');
    ui.clock.textContent = fmtTime(matchTime);
    ui.phase.textContent = matchState === 'playing' ? `LIVE // PHASE ${Math.min(zone.stage + 1, 5)}` : matchState === 'paused' ? 'MISSION PAUSED' : 'PRE-MATCH LOBBY';
    if (player) {
      ui.hp.textContent = Math.ceil(player.hp);
      ui.hpText.textContent = `${Math.ceil(player.hp)} / 100`;
      ui.armorText.textContent = `${Math.ceil(player.armor)} / 100`;
      ui.health.style.width = `${clamp(player.hp, 0, 100)}%`;
      ui.armor.style.width = `${clamp(player.armor, 0, 100)}%`;
      ui.ammo.textContent = String(player.ammo).padStart(2, '0');
      ui.ammoTotal.textContent = String(player.reserve).padStart(3, '0');
      ui.med.textContent = String(player.medkits);
      ui.grenade.textContent = String(player.grenades);
      const d = distance(player.x, player.y, zone.x, zone.y);
      const inside = d <= zone.radius;
      ui.warning.classList.toggle('show', matchState === 'playing' && !inside);
      ui.zoneCaption.textContent = inside ? 'SAFE ZONE' : 'ZONE DAMAGE';
      ui.zoneStatus.textContent = matchState === 'playing' ? (inside ? `CLOSES IN ${fmtTime(Math.max(0, nextZoneIn() - matchTime))}` : 'RETURN TO THE CIRCLE') : 'AWAITING DEPLOYMENT';
      ui.bearing.textContent = `${String(Math.round(((player.angle * 180 / Math.PI + 360) % 360))).padStart(3, '0')}°`;
    }
    updateSector();
  }

  function nextZoneIn() {
    if (matchTime < 20) return 20;
    if (matchTime < 70) return 70;
    if (matchTime < 120) return 120;
    if (matchTime < 170) return 170;
    if (matchTime < 220) return 220;
    return 0;
  }
  function zoneRadiusAt(t) {
    const stages = [
      [0, 1080], [20, 1080], [70, 790], [120, 550], [170, 350], [220, 190], [250, 110], [300, 55],
    ];
    for (let i = 1; i < stages.length; i++) {
      const [t1, r1] = stages[i];
      const [t0, r0] = stages[i - 1];
      if (t <= t1) return r0 + (r1 - r0) * ((t - t0) / (t1 - t0));
    }
    return 40;
  }
  function updateZone() {
    zone.radius = zoneRadiusAt(matchTime);
    zone.stage = matchTime < 20 ? 0 : matchTime < 70 ? 1 : matchTime < 120 ? 2 : matchTime < 170 ? 3 : matchTime < 220 ? 4 : matchTime < 250 ? 5 : 6;
  }

  function createAudio() {
    if (audio) { if (audio.state === 'suspended') audio.resume(); return; }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audio = new AudioCtx();
  }
  function sfx(kind) {
    if (muted || !audio) return;
    const now = audio.currentTime;
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    const filter = audio.createBiquadFilter();
    osc.connect(filter); filter.connect(gain); gain.connect(audio.destination);
    if (kind === 'shot') {
      osc.type = 'sawtooth'; osc.frequency.setValueAtTime(125, now); osc.frequency.exponentialRampToValueAtTime(42, now + .07);
      filter.type = 'lowpass'; filter.frequency.value = 600;
      gain.gain.setValueAtTime(.035, now); gain.gain.exponentialRampToValueAtTime(.001, now + .075); osc.start(now); osc.stop(now + .08);
    } else {
      osc.type = 'sine'; osc.frequency.setValueAtTime(kind === 'hit' ? 210 : 640, now); osc.frequency.exponentialRampToValueAtTime(kind === 'hit' ? 120 : 920, now + .11);
      gain.gain.setValueAtTime(.045, now); gain.gain.exponentialRampToValueAtTime(.001, now + .13); osc.start(now); osc.stop(now + .14);
    }
  }

  function initMatch() {
    if (matchState === 'playing') return;
    createAudio();
    initializeActors();
    matchState = 'playing';
    ui.deploy.classList.add('dismissed');
    ui.end.classList.add('hidden');
    ui.pause.classList.add('hidden');
    showCallout('SURVIVE. ADAPT. OUTLAST.');
    updateHUD();
  }

  function setPaused(paused) {
    if (matchState !== 'playing' && matchState !== 'paused') return;
    if (paused) {
      matchState = 'paused'; isShooting = false; touchFiring = false; ui.pause.classList.remove('hidden');
    } else {
      matchState = 'playing'; ui.pause.classList.add('hidden'); lastFrame = performance.now();
    }
    updateHUD();
  }

  function endMatch(won) {
    if (matchState === 'ended') return;
    matchState = 'ended'; isShooting = false;
    ui.end.classList.remove('hidden');
    ui.endTitle.innerHTML = won ? 'CITY<br /><em>SECURED.</em>' : 'MISSION<br /><em>FAILED.</em>';
    ui.endCopy.textContent = won ? 'Geneva is quiet again. You are the last one standing.' : 'The streets belong to someone else tonight.';
    ui.endKills.textContent = String(player?.kills || 0).padStart(2, '0');
    ui.endTime.textContent = fmtTime(matchTime);
    const left = actors.filter(a => a.alive).length;
    ui.endPlace.innerHTML = `${won ? '01' : String(Math.max(2, left + 1)).padStart(2, '0')}<sup>${won ? 'ST' : left === 1 ? 'ND' : 'TH'}</sup>`;
    updateHUD();
  }

  function reload() {
    if (!player || !player.alive || reloadTimer > 0 || player.ammo >= 30 || player.reserve <= 0) return;
    reloadTimer = 1.15;
    showToast('RELOADING // 5.56 × 45 MM');
  }
  function finishReload() {
    if (!player) return;
    const take = Math.min(30 - player.ammo, player.reserve);
    player.ammo += take; player.reserve -= take;
    reloadTimer = 0;
  }
  function heal() {
    if (!player || !player.alive || player.medkits <= 0 || player.hp >= 95) return;
    player.medkits--;
    player.hp = Math.min(100, player.hp + 55);
    effects.push({ x: player.x, y: player.y, type: 'heal', life: .7, max: .7 });
    showToast('MED KIT APPLIED  +55 HP');
    sfx('pickup'); updateHUD();
  }

  function throwGrenade() {
    if (!player || !player.alive || player.grenades <= 0) return;
    const angle = player.angle;
    const distanceToLand = 260;
    const fromX = player.x + Math.cos(angle) * 15;
    const fromY = player.y + Math.sin(angle) * 15;
    const toX = clamp(player.x + Math.cos(angle) * distanceToLand, 25, W - 25);
    const toY = clamp(player.y + Math.sin(angle) * distanceToLand, 385, H - 25);
    player.grenades--;
    grenades.push({ x: fromX, y: fromY, fromX, fromY, toX, toY, travel: 0, fuse: 1.08, owner: player });
    showToast('FRAG OUT');
    sfx('pickup'); updateHUD();
  }

  function shoot(shooter, targetX, targetY, spread = .025, bot = false) {
    if (!shooter.alive || shooter.ammo <= 0) {
      if (shooter.isPlayer) reload();
      return;
    }
    const angle = Math.atan2(targetY - shooter.y, targetX - shooter.x) + range(-spread, spread);
    shooter.angle = angle;
    shooter.ammo--;
    projectiles.push({ x: shooter.x + Math.cos(angle) * 19, y: shooter.y + Math.sin(angle) * 19, vx: Math.cos(angle) * (bot ? 680 : 880), vy: Math.sin(angle) * (bot ? 680 : 880), owner: shooter, life: 1.15, damage: bot ? range(7, 13) : 27, color: bot ? '#ff886f' : '#e8f38d', size: bot ? 2.2 : 2.5 });
    effects.push({ x: shooter.x + Math.cos(angle) * 20, y: shooter.y + Math.sin(angle) * 20, type: 'muzzle', angle, life: .07, max: .07, color: bot ? '#ffb18b' : '#fff0a6' });
    if (shooter.isPlayer) { lastShot = matchTime; sfx('shot'); }
  }

  function damageActor(target, amount, source) {
    if (!target.alive) return;
    let damage = amount;
    if (target.armor > 0) {
      const absorbed = Math.min(target.armor, damage * .68);
      target.armor -= absorbed; damage -= absorbed;
    }
    target.hp -= damage;
    effects.push({ x: target.x, y: target.y, type: 'hit', life: .22, max: .22, color: target.isPlayer ? '#fa725b' : '#f6a277' });
    if (target.isPlayer) { sfx('hit'); updateHUD(); }
    if (target.hp <= 0) eliminate(target, source);
  }

  function eliminate(target, source) {
    target.hp = 0; target.alive = false;
    effects.push({ x: target.x, y: target.y, type: 'down', life: .8, max: .8, color: target.isPlayer ? '#fa725b' : '#d5ec67' });
    if (source && source.isPlayer && !target.isPlayer) {
      player.kills++;
      addFeed(`<b>YOU</b> <span class="feed-weapon">▸</span> ${target.name}`, false);
    } else if (!target.isPlayer) {
      addFeed(`<b>${source?.name || 'ZONE'}</b> <span class="feed-weapon">▸</span> ${target.name}`);
    }
    if (!target.isPlayer && rnd() < .72) pickups.push({ x: target.x + range(-10, 10), y: target.y + range(-8, 8), type: rnd() > .6 ? 'ammo' : 'med', alive: true, phase: rnd() * TAU, amount: 24 });
    if (target.isPlayer) endMatch(false);
    updateHUD();
    if (actors.filter(a => a.alive).length <= 1 && player.alive) endMatch(true);
  }

  function updatePlayer(dt) {
    if (!player || !player.alive) return;
    let mx = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0) + touchMove.x;
    let my = (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0) - (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) + touchMove.y;
    if (mx || my) {
      const norm = Math.hypot(mx, my); mx /= norm; my /= norm;
      const speed = player.speed * (keys.has('ShiftLeft') || keys.has('ShiftRight') ? 1.38 : 1);
      moveActor(player, mx * speed * dt, my * speed * dt);
    }
    if (touchFiring) {
      let nearest = null; let nearestD = 620;
      for (const a of actors) {
        if (!a.alive || a.isPlayer) continue;
        const d = distance(player.x, player.y, a.x, a.y);
        if (d < nearestD && !lineBlocked(player.x, player.y, a.x, a.y)) { nearest = a; nearestD = d; }
      }
      if (nearest) { mouse.x = viewW / 2 + (nearest.x - cameraX) * zoom; mouse.y = viewH / 2 + (nearest.y - cameraY) * zoom; }
    }
    const targetX = cameraX + (mouse.x - viewW / 2) / zoom;
    const targetY = cameraY + (mouse.y - viewH / 2) / zoom;
    player.angle = Math.atan2(targetY - player.y, targetX - player.x);
    if ((isShooting || touchFiring) && matchTime - lastShot > .115 && reloadTimer <= 0) shoot(player, targetX, targetY);
    if (reloadTimer > 0) { reloadTimer -= dt; if (reloadTimer <= 0) finishReload(); }
    // A little natural regeneration is excluded; supplies carry the recovery loop.
    if (distance(player.x, player.y, zone.x, zone.y) > zone.radius) player.hp -= 6.5 * dt;
  }

  function chooseTarget(bot) {
    const candidates = [];
    for (const other of actors) {
      if (!other.alive || other === bot) continue;
      const d = distance(bot.x, bot.y, other.x, other.y);
      if (d < 535) candidates.push({ actor: other, distance: d });
    }
    candidates.sort((a, b) => a.distance - b.distance);
    for (const candidate of candidates.slice(0, 3)) {
      if (!lineBlocked(bot.x, bot.y, candidate.actor.x, candidate.actor.y)) return candidate.actor;
    }
    return null;
  }

  function updateBots(dt) {
    for (const bot of actors) {
      if (bot.isPlayer || !bot.alive) continue;
      bot.target = chooseTarget(bot);
      if (bot.ammo <= 0 && bot.reserve > 0 && matchTime >= bot.nextBotShot) {
        const reloadAmount = Math.min(30, bot.reserve);
        bot.ammo = reloadAmount;
        bot.reserve -= reloadAmount;
        bot.nextBotShot = matchTime + 1.35;
      }
      let dx = 0; let dy = 0;
      if (bot.target) {
        const target = bot.target;
        const d = distance(bot.x, bot.y, target.x, target.y);
        const a = Math.atan2(target.y - bot.y, target.x - bot.x);
        bot.angle = a; bot.awareness = Math.min(1, bot.awareness + dt * 1.8);
        const strafe = a + Math.PI / 2 * bot.strafe;
        if (d > 265) { dx += Math.cos(a); dy += Math.sin(a); }
        if (d < 145) { dx -= Math.cos(a) * .9; dy -= Math.sin(a) * .9; }
        dx += Math.cos(strafe) * .27; dy += Math.sin(strafe) * .27;
        if (d < 450 && bot.ammo > 0 && matchTime >= bot.nextBotShot) {
          shoot(bot, target.x + range(-18, 18), target.y + range(-18, 18), .105, true);
          bot.nextBotShot = matchTime + range(.42, .86);
        }
      } else {
        bot.awareness = Math.max(0, bot.awareness - dt * .25);
        bot.wanderTimer -= dt;
        if (bot.wanderTimer <= 0) { bot.wanderTimer = range(1.2, 3.5); bot.wanderAngle += range(-1.5, 1.5); }
        dx = Math.cos(bot.wanderAngle) * .48; dy = Math.sin(bot.wanderAngle) * .48;
        if (distance(bot.x, bot.y, bot.spawnX || bot.x, bot.spawnY || bot.y) > 185) bot.wanderAngle = Math.atan2((bot.spawnY || bot.y) - bot.y, (bot.spawnX || bot.x) - bot.x);
      }
      const n = Math.hypot(dx, dy) || 1;
      const oldX = bot.x; const oldY = bot.y;
      moveActor(bot, dx / n * bot.speed * dt, dy / n * bot.speed * dt);
      if (Math.abs(oldX - bot.x) + Math.abs(oldY - bot.y) < .4 && bot.target) {
        bot.wanderAngle += range(1, 2.4); bot.strafe *= -1;
      }
      if (distance(bot.x, bot.y, zone.x, zone.y) > zone.radius) bot.hp -= 4 * dt;
    }
  }

  function updateProjectiles(dt) {
    for (let i = projectiles.length - 1; i >= 0; i--) {
      const p = projectiles[i];
      const oldX = p.x, oldY = p.y;
      p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt;
      let removed = false;
      const steps = Math.max(1, Math.ceil(distance(oldX, oldY, p.x, p.y) / 9));
      for (let s = 1; s <= steps && !removed; s++) {
        const t = s / steps; const sx = oldX + (p.x - oldX) * t; const sy = oldY + (p.y - oldY) * t;
        if (pointHitsObstacle(sx, sy, 1)) {
          effects.push({ x: sx, y: sy, type: 'spark', life: .2, max: .2, color: '#d5d3ae' }); removed = true; break;
        }
        for (const target of actors) {
          if (!target.alive || target === p.owner) continue;
          if (distance(sx, sy, target.x, target.y) < (target.isPlayer ? 12 : 11)) {
            damageActor(target, p.damage, p.owner);
            effects.push({ x: sx, y: sy, type: 'impact', life: .13, max: .13, color: p.color }); removed = true; break;
          }
        }
      }
      if (removed || p.life <= 0 || p.x < 0 || p.x > W || p.y < 0 || p.y > H) projectiles.splice(i, 1);
    }
  }

  function updateGrenades(dt) {
    for (let i = grenades.length - 1; i >= 0; i--) {
      const g = grenades[i];
      g.fuse -= dt;
      g.travel = Math.min(1, g.travel + dt / .34);
      const travel = 1 - (1 - g.travel) ** 2;
      g.x = g.fromX + (g.toX - g.fromX) * travel;
      g.y = g.fromY + (g.toY - g.fromY) * travel;
      if (g.fuse <= 0) {
        const blastRadius = 118;
        effects.push({ x: g.x, y: g.y, type: 'blast', life: .36, max: .36, color: '#ffd17d' });
        for (const target of actors) {
          if (!target.alive) continue;
          const d = distance(g.x, g.y, target.x, target.y);
          if (d < blastRadius && !lineBlocked(g.x, g.y, target.x, target.y)) damageActor(target, 78 * (1 - d / blastRadius), g.owner);
        }
        grenades.splice(i, 1);
      }
    }
  }

  function updatePickups(dt) {
    if (!player?.alive) return;
    for (const item of pickups) {
      if (!item.alive) continue;
      item.phase += dt * 2.4;
      if (distance(player.x, player.y, item.x, item.y) < 28) {
        let message = '';
        if (item.type === 'ammo' && player.reserve < 240) { const n = Math.min(item.amount, 240 - player.reserve); player.reserve += n; message = `5.56 AMMO  +${n}`; }
        else if (item.type === 'med' && player.medkits < 5) { player.medkits += item.amount; message = 'MED KIT  +1'; }
        else if (item.type === 'armor' && player.armor < 100) { const n = Math.min(item.amount, 100 - player.armor); player.armor += n; message = `ARMOR PLATE  +${n}`; }
        if (message) { item.alive = false; showToast(message); sfx('pickup'); updateHUD(); }
      }
    }
  }

  function updateEffects(dt) {
    for (let i = effects.length - 1; i >= 0; i--) { effects[i].life -= dt; if (effects[i].life <= 0) effects.splice(i, 1); }
    if (toastTimer > 0) { toastTimer -= dt; if (toastTimer <= 0) ui.toast.classList.remove('show'); }
  }

  function updateGame(dt) {
    if (matchState !== 'playing') return;
    matchTime += dt;
    updateZone();
    updatePlayer(dt);
    updateBots(dt);
    updateProjectiles(dt);
    updateGrenades(dt);
    updatePickups(dt);
    updateEffects(dt);
    if (player?.alive && player.hp <= 0) eliminate(player, null);
    for (const bot of actors) if (!bot.isPlayer && bot.alive && bot.hp <= 0) eliminate(bot, null);
    if (matchTime % .25 < dt) updateHUD();
    if (actors.filter(a => a.alive).length <= 1 && player?.alive) endMatch(true);
  }

  function drawLandmarkText(text, x, y, align = 'center') {
    ctx.save(); ctx.textAlign = align; ctx.font = '700 12px "Barlow Condensed", sans-serif'; ctx.letterSpacing = '1.7px';
    const w = ctx.measureText(text).width;
    ctx.fillStyle = 'rgba(19,31,25,.72)';
    roundRect(ctx, x - w / 2 - 10, y - 15, w + 20, 24, 2); ctx.fill();
    ctx.fillStyle = 'rgba(227,235,216,.9)'; ctx.fillText(text, x, y + 1);
    ctx.restore();
  }

  function drawLoot(item) {
    const bob = Math.sin(item.phase) * 2.1;
    ctx.save(); ctx.translate(item.x, item.y + bob);
    ctx.fillStyle = 'rgba(25,34,26,.26)'; ctx.beginPath(); ctx.ellipse(0, 10, 13, 6, 0, 0, TAU); ctx.fill();
    const col = item.type === 'ammo' ? '#e2ce83' : item.type === 'med' ? '#d9866d' : '#72cbd1';
    ctx.fillStyle = '#59634d'; roundRect(ctx, -11, -9, 22, 18, 3); ctx.fill();
    ctx.fillStyle = col; roundRect(ctx, -8, -7, 16, 13, 2); ctx.fill();
    ctx.fillStyle = '#3c4a3e'; ctx.fillRect(-8, -2, 16, 3);
    ctx.fillStyle = '#e7ebd9'; ctx.font = '700 8px monospace'; ctx.textAlign = 'center'; ctx.fillText(item.type === 'ammo' ? 'A' : item.type === 'med' ? '+' : '◇', 0, 3);
    ctx.strokeStyle = `${col}bb`; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(0, 0, 14 + Math.sin(item.phase) * 1, 0, TAU); ctx.stroke();
    ctx.restore();
  }

  function drawActor(a) {
    if (!a.alive) return;
    const r = a.isPlayer ? 11 : 10;
    ctx.save(); ctx.translate(a.x, a.y);
    ctx.fillStyle = 'rgba(20,31,25,.32)'; ctx.beginPath(); ctx.ellipse(0, 6, 14, 9, 0, 0, TAU); ctx.fill();
    ctx.rotate(a.angle);
    // backpack silhouette
    ctx.fillStyle = a.isPlayer ? '#526846' : '#697466';
    roundRect(ctx, -9, -7, 14, 14, 3); ctx.fill();
    // torso and helmet
    ctx.fillStyle = a.color;
    roundRect(ctx, -7, -7, 16, 14, 5); ctx.fill();
    ctx.fillStyle = a.isPlayer ? '#e4edbb' : '#b8c4b7';
    ctx.beginPath(); ctx.arc(5, 0, 5.4, 0, TAU); ctx.fill();
    ctx.fillStyle = a.isPlayer ? '#718a53' : '#7b897e';
    ctx.beginPath(); ctx.arc(5, -1, 5.1, Math.PI, TAU); ctx.fill();
    // rifle out toward aim direction
    ctx.fillStyle = '#252d29'; roundRect(ctx, 5, -2, 22, 4, 1.5); ctx.fill();
    ctx.fillStyle = a.isPlayer ? '#d5ec67' : '#fa725b'; ctx.fillRect(23, -1, 5, 2);
    ctx.fillStyle = '#394339'; ctx.fillRect(8, 3, 7, 3);
    ctx.restore();
    // health / target marker when hurt or near view center
    if (!a.isPlayer && a.hp < 100) {
      ctx.fillStyle = 'rgba(15,22,19,.7)'; ctx.fillRect(a.x - 12, a.y - 18, 24, 3);
      ctx.fillStyle = '#fa725b'; ctx.fillRect(a.x - 12, a.y - 18, 24 * Math.max(0, a.hp / 100), 3);
    }
    if (a.isPlayer) {
      ctx.strokeStyle = 'rgba(213,236,103,.72)'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(a.x, a.y, r + 5, 0, TAU); ctx.stroke();
    } else if (a.target === player && a.awareness > .1) {
      ctx.fillStyle = '#f7846b'; ctx.font = 'bold 10px monospace'; ctx.textAlign = 'center'; ctx.fillText('!', a.x, a.y - 20);
    }
  }

  function drawEffects() {
    for (const e of effects) {
      const p = e.life / e.max;
      ctx.save();
      if (e.type === 'muzzle') {
        ctx.translate(e.x, e.y); ctx.rotate(e.angle); ctx.globalAlpha = p;
        ctx.fillStyle = e.color; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(16, -4); ctx.lineTo(10, 0); ctx.lineTo(16, 4); ctx.closePath(); ctx.fill();
      } else if (e.type === 'heal') {
        ctx.globalAlpha = p; ctx.strokeStyle = '#d5ec67'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(e.x, e.y, 16 + (1 - p) * 28, 0, TAU); ctx.stroke();
        ctx.fillStyle = '#e5f29a'; ctx.font = 'bold 14px monospace'; ctx.textAlign = 'center'; ctx.fillText('+', e.x, e.y - 22 - (1 - p) * 15);
      } else if (e.type === 'hit' || e.type === 'impact') {
        ctx.globalAlpha = p; ctx.strokeStyle = e.color; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(e.x, e.y, 3 + (1 - p) * 12, 0, TAU); ctx.stroke();
      } else if (e.type === 'spark') {
        ctx.globalAlpha = p; ctx.fillStyle = e.color; ctx.beginPath(); ctx.arc(e.x, e.y, 1 + p * 2, 0, TAU); ctx.fill();
      } else if (e.type === 'blast') {
        ctx.globalAlpha = p * .55; ctx.fillStyle = '#ffc16f'; ctx.beginPath(); ctx.arc(e.x, e.y, 17 + (1 - p) * 88, 0, TAU); ctx.fill();
        ctx.globalAlpha = p; ctx.strokeStyle = '#ffe3a6'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(e.x, e.y, 17 + (1 - p) * 96, 0, TAU); ctx.stroke();
      } else if (e.type === 'down') {
        ctx.globalAlpha = p; ctx.strokeStyle = e.color; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(e.x, e.y, 11 + (1 - p) * 20, 0, TAU); ctx.stroke();
      }
      ctx.restore();
    }
  }

  function drawZoneOverlay() {
    const left = cameraX - viewW / (2 * zoom) - 10;
    const top = cameraY - viewH / (2 * zoom) - 10;
    const right = cameraX + viewW / (2 * zoom) + 10;
    const bottom = cameraY + viewH / (2 * zoom) + 10;
    ctx.save();
    ctx.fillStyle = 'rgba(34,65,102,.22)';
    ctx.beginPath();
    ctx.rect(left, top, right - left, bottom - top);
    ctx.arc(zone.x, zone.y, zone.radius, 0, TAU, true);
    ctx.fill('evenodd');
    ctx.beginPath(); ctx.arc(zone.x, zone.y, zone.radius, 0, TAU);
    ctx.strokeStyle = 'rgba(111,218,224,.92)'; ctx.lineWidth = 3; ctx.stroke();
    ctx.beginPath(); ctx.arc(zone.x, zone.y, zone.radius + 18, 0, TAU);
    ctx.strokeStyle = 'rgba(125,225,232,.23)'; ctx.lineWidth = 1; ctx.setLineDash([6, 10]); ctx.stroke(); ctx.setLineDash([]);
    ctx.restore();
  }

  function drawWorld() {
    ctx.save();
    ctx.translate(viewW / 2 - cameraX * zoom, viewH / 2 - cameraY * zoom);
    ctx.scale(zoom, zoom);
    // Ensure the map field continues beyond its boundary to the viewport edge.
    ctx.fillStyle = '#536b53'; ctx.fillRect(-2000, -2000, W + 4000, H + 4000);
    drawBaseMap();

    for (const b of buildings) drawBuilding(b);
    // promenade and key-site typography sit above roofs
    drawLabels();
    drawLandmarkText('CATHÉDRALE SAINT-PIERRE', 1093, 815);
    drawLandmarkText('GRAND THÉÂTRE', 576, 1006);
    drawLandmarkText('MUSÉE D’ART ET D’HISTOIRE', 1410, 1083);
    for (const t of trees) drawTree(t);
    for (const item of pickups) if (item.alive) drawLoot(item);
    for (const g of grenades) {
      const height = Math.sin(g.travel * Math.PI) * 20;
      ctx.fillStyle = 'rgba(16,24,19,.3)'; ctx.beginPath(); ctx.ellipse(g.x, g.y + 5, 7, 4, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = '#303a32'; ctx.beginPath(); ctx.arc(g.x, g.y - height, 5, 0, TAU); ctx.fill();
      ctx.fillStyle = g.fuse < .38 ? '#f37b5d' : '#d5ec67'; ctx.beginPath(); ctx.arc(g.x - 1, g.y - height - 1, 1.5, 0, TAU); ctx.fill();
    }
    for (const p of projectiles) {
      ctx.strokeStyle = `${p.color}b0`; ctx.lineWidth = p.size; ctx.beginPath(); ctx.moveTo(p.x - p.vx * .018, p.y - p.vy * .018); ctx.lineTo(p.x, p.y); ctx.stroke();
    }
    for (const a of actors) drawActor(a);
    drawEffects();
    if (matchState === 'playing' || matchState === 'paused' || matchState === 'ended') drawZoneOverlay();
    ctx.restore();
    drawReticle();
  }

  function drawReticle() {
    if (matchState !== 'playing') return;
    ctx.save();
    ctx.translate(mouse.x, mouse.y);
    ctx.strokeStyle = 'rgba(231,241,209,.9)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, TAU);
    ctx.moveTo(-12, 0); ctx.lineTo(-8, 0);
    ctx.moveTo(12, 0); ctx.lineTo(8, 0);
    ctx.moveTo(0, -12); ctx.lineTo(0, -8);
    ctx.moveTo(0, 12); ctx.lineTo(0, 8);
    ctx.stroke();
    ctx.fillStyle = '#d5ec67'; ctx.beginPath(); ctx.arc(0, 0, 1.2, 0, TAU); ctx.fill();
    ctx.restore();
  }

  function drawMinimap() {
    const w = minimap.width, h = minimap.height;
    const sx = w / W, sy = h / H;
    miniCtx.clearRect(0, 0, w, h);
    miniCtx.fillStyle = '#718766'; miniCtx.fillRect(0, 0, w, h);
    miniCtx.fillStyle = '#579090';
    path(miniCtx, [[0,0],[W,0],[W,370],[2220,375],[2090,340],[1900,293],[1740,242],[1590,257],[1440,229],[1280,209],[1110,223],[930,250],[770,295],[625,329],[470,347],[320,377],[175,420],[0,455]], true); miniCtx.fill();
    miniCtx.fillStyle = '#b6b39b'; miniCtx.fillRect(180*sx, 508*sy, 2020*sx, 1050*sy);
    miniCtx.fillStyle = '#78926b'; miniCtx.fillRect(586*sx,1044*sy,425*sx,381*sy);
    miniCtx.fillStyle = '#d5ccb0'; miniCtx.fillRect(585*sx,857*sy,214*sx,178*sy);
    miniCtx.fillStyle = 'rgba(82,111,69,.9)';
    for (const b of buildings) miniCtx.fillRect(b.x*sx,b.y*sy,Math.max(1,b.w*sx),Math.max(1,b.h*sy));
    if (matchState === 'playing' || matchState === 'paused' || matchState === 'ended') {
      miniCtx.save(); miniCtx.beginPath(); miniCtx.rect(0,0,w,h); miniCtx.arc(zone.x*sx,zone.y*sy,zone.radius*sx,0,TAU,true); miniCtx.fillStyle='rgba(55,124,154,.34)'; miniCtx.fill('evenodd');
      miniCtx.strokeStyle='#8edce3'; miniCtx.lineWidth=1.5; miniCtx.beginPath(); miniCtx.arc(zone.x*sx,zone.y*sy,zone.radius*sx,0,TAU); miniCtx.stroke(); miniCtx.restore();
    }
    for (const a of actors) if (a.alive && !a.isPlayer && player && distance(a.x,a.y,player.x,player.y)<760) {
      miniCtx.fillStyle='#fa725b'; miniCtx.beginPath(); miniCtx.arc(a.x*sx,a.y*sy,2.1,0,TAU); miniCtx.fill();
    }
    if (player) {
      miniCtx.save(); miniCtx.translate(player.x*sx,player.y*sy); miniCtx.rotate(player.angle);
      miniCtx.fillStyle='#d5ec67'; miniCtx.beginPath(); miniCtx.moveTo(0,-5); miniCtx.lineTo(4,4); miniCtx.lineTo(0,2); miniCtx.lineTo(-4,4); miniCtx.closePath(); miniCtx.fill(); miniCtx.restore();
    } else {
      miniCtx.fillStyle='#d5ec67'; miniCtx.beginPath(); miniCtx.arc(712*sx,962*sy,3,0,TAU); miniCtx.fill();
    }
  }

  function frame(timestamp) {
    const dt = Math.min(.033, lastFrame ? (timestamp - lastFrame) / 1000 : .016);
    lastFrame = timestamp;
    if (player && (matchState === 'playing' || matchState === 'paused' || matchState === 'ended')) {
      cameraX += (player.x - cameraX) * Math.min(1, dt * 6);
      cameraY += (player.y - cameraY) * Math.min(1, dt * 6);
    }
    updateGame(dt);
    ctx.clearRect(0, 0, viewW, viewH);
    drawWorld();
    drawMinimap();
    requestAnimationFrame(frame);
  }

  function pointerPosition(event) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  }

  function bindEvents() {
    addEventListener('resize', resize);
    canvas.addEventListener('pointermove', pointerPosition);
    canvas.addEventListener('pointerdown', event => {
      pointerPosition(event);
      if (event.button === 0 && matchState === 'playing') { isShooting = true; canvas.setPointerCapture?.(event.pointerId); }
    });
    addEventListener('pointerup', () => { isShooting = false; });
    addEventListener('keydown', event => {
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(event.code)) event.preventDefault();
      keys.add(event.code);
      if (event.repeat) return;
      if (event.code === 'Escape') {
        if (!ui.help.classList.contains('hidden')) { ui.help.classList.add('hidden'); return; }
        if (matchState === 'playing') setPaused(true); else if (matchState === 'paused') setPaused(false);
      }
      if (event.code === 'KeyR') reload();
      if (event.code === 'KeyF' || event.code === 'KeyQ') heal();
      if (event.code === 'KeyG') throwGrenade();
      if (event.code === 'KeyH') ui.help.classList.toggle('hidden');
    });
    addEventListener('keyup', event => keys.delete(event.code));
    addEventListener('blur', () => { isShooting = false; touchFiring = false; keys.clear(); touchMove = { x: 0, y: 0 }; });
    ui.deployBtn.addEventListener('click', initMatch);
    ui.restart.addEventListener('click', () => { ui.end.classList.add('hidden'); ui.deploy.classList.remove('dismissed'); matchState = 'lobby'; matchTime = 0; zone = { x: 1195, y: 895, radius: 1080, stage: 0 }; player = null; actors = []; projectiles = []; grenades = []; pickups = []; updateHUD(); });
    ui.resume.addEventListener('click', () => setPaused(false));
    ui.helpToggle.addEventListener('click', () => ui.help.classList.remove('hidden'));
    ui.closeHelp.addEventListener('click', () => ui.help.classList.add('hidden'));
    ui.help.addEventListener('click', event => { if (event.target === ui.help) ui.help.classList.add('hidden'); });
    ui.sound.addEventListener('click', () => { muted = !muted; ui.sound.classList.toggle('muted', muted); ui.sound.querySelector('.sound-icon').textContent = muted ? '◖×' : '◖))'; if (!muted) createAudio(); });
    const stick = document.getElementById('touch-stick');
    stick.addEventListener('pointerdown', event => {
      event.preventDefault();
      stickPointer = event.pointerId;
      stickOrigin = { x: event.clientX, y: event.clientY };
      stick.setPointerCapture(event.pointerId);
      moveStick(event);
    });
    stick.addEventListener('pointermove', event => { if (event.pointerId === stickPointer) moveStick(event); });
    const releaseStick = event => {
      if (event.pointerId !== stickPointer) return;
      stickPointer = null; stickOrigin = null; touchMove = { x: 0, y: 0 };
      stick.style.setProperty('--stick-x', '0px'); stick.style.setProperty('--stick-y', '0px');
    };
    stick.addEventListener('pointerup', releaseStick); stick.addEventListener('pointercancel', releaseStick);
    document.getElementById('touch-fire').addEventListener('pointerdown', event => { event.preventDefault(); touchFiring = true; createAudio(); });
    for (const eventName of ['pointerup','pointercancel','pointerleave']) document.getElementById('touch-fire').addEventListener(eventName, () => { touchFiring = false; });
    document.getElementById('touch-heal').addEventListener('pointerdown', event => { event.preventDefault(); heal(); });
    document.getElementById('touch-reload').addEventListener('pointerdown', event => { event.preventDefault(); reload(); });
    document.getElementById('touch-grenade').addEventListener('pointerdown', event => { event.preventDefault(); throwGrenade(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden && matchState === 'playing') setPaused(true); });
  }

  function moveStick(event) {
    if (!stickOrigin) return;
    const dx = event.clientX - stickOrigin.x;
    const dy = event.clientY - stickOrigin.y;
    const len = Math.hypot(dx, dy) || 1;
    const amount = Math.min(38, len);
    const nx = dx / len * amount;
    const ny = dy / len * amount;
    touchMove = { x: nx / 38, y: ny / 38 };
    const stick = document.getElementById('touch-stick');
    stick.style.setProperty('--stick-x', `${nx}px`);
    stick.style.setProperty('--stick-y', `${ny}px`);
  }

  function paintPreview() {
    cameraX = 1120; cameraY = 885;
    generateMap();
    buildObstacleIndex();
    updateHUD();
  }

  resize();
  paintPreview();
  bindEvents();
  requestAnimationFrame(frame);
})();
