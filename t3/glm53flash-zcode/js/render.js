'use strict';
/* ============================================================
   Rendering — world, actors, effects, minimap, big map
   ============================================================ */
let MAPIMG = null;

function fillPoly(c, pts, style) {
  c.fillStyle = style;
  c.beginPath();
  c.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]);
  c.closePath();
  c.fill();
}
function strokePoly(c, pts, w, style) {
  c.strokeStyle = style;
  c.lineWidth = w;
  c.lineJoin = 'round';
  c.lineCap = 'round';
  c.beginPath();
  c.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]);
  c.stroke();
}

/* ---------- static world (shared by game view + baked map) ---------- */
function drawWorldStatic(c, vx0, vy0, vx1, vy1, detail) {
  const S = WORLD.size;
  c.fillStyle = '#7d786c';
  c.fillRect(vx0 - 20, vy0 - 20, vx1 - vx0 + 40, vy1 - vy0 + 40);
  c.fillStyle = '#b1ab9c';
  c.fillRect(0, 0, S, S);

  for (const p of WORLD.grass) fillPoly(c, p, '#96b46d');
  fillPoly(c, WORLD.hill, '#b3a88e');
  for (const r of WORLD.plazaRects) { c.fillStyle = '#c8c2b2'; c.fillRect(r.x, r.y, r.w, r.h); }
  for (const pc of WORLD.plazaCircles) {
    c.fillStyle = '#c8c2b2';
    c.beginPath(); c.arc(pc.x, pc.y, pc.r, 0, TAU); c.fill();
  }
  for (const pr of WORLD.promenades) strokePoly(c, pr.pts, pr.w, '#a9c47f');
  for (const ck of WORLD.checkers) {
    for (let j = 0; j < ck.n; j++) for (let i = 0; i < ck.n; i++) {
      c.fillStyle = (i + j) % 2 ? '#e3ded2' : '#4a463e';
      c.fillRect(ck.x + i * ck.cell, ck.y + j * ck.cell, ck.cell, ck.cell);
    }
  }
  // roads: dark edge then light top
  for (const rd of WORLD.roads) strokePoly(c, rd.pts, rd.w + 7, '#8f897c');
  for (const rd of WORLD.roads) strokePoly(c, rd.pts, rd.w, '#bcb6a7');
  // rails
  c.setLineDash([16, 14]);
  for (const rl of WORLD.rails) strokePoly(c, rl.pts, 5, '#837d70');
  c.setLineDash([]);
  // water banks
  c.lineJoin = 'round'; c.lineCap = 'round';
  c.strokeStyle = '#c3b998';
  for (const r of WORLD.rivers) strokePoly(c, r.pts, r.hw * 2 + 12, '#c3b998');
  strokePoly(c, WORLD.lake, 12, '#c3b998');
  // water
  fillPoly(c, WORLD.lake, '#5e9cc3');
  for (const r of WORLD.rivers) strokePoly(c, r.pts, r.hw * 2, '#5e9cc3');
  for (const r of WORLD.rivers) strokePoly(c, r.pts, r.hw * 0.9, '#5592ba');
  // foam
  strokePoly(c, WORLD.lake, 5, 'rgba(255,255,255,0.30)');
  for (const r of WORLD.rivers) strokePoly(c, r.pts, r.hw * 2 + 5, 'rgba(255,255,255,0.22)');
  // islands
  for (const isl of WORLD.islands) fillPoly(c, isl, '#c9bfa4');
  // bridges & pier
  for (const b of WORLD.bridges) {
    c.fillStyle = '#9d8f74';
    c.fillRect(b.x, b.y, b.w, b.h);
    c.strokeStyle = '#7d6f55';
    c.lineWidth = 2;
    c.strokeRect(b.x, b.y, b.w, b.h);
    c.strokeStyle = 'rgba(90,75,50,0.4)';
    c.lineWidth = 1.5;
    c.beginPath();
    if (b.h > b.w) { for (let y = b.y + 10; y < b.y + b.h; y += 14) { c.moveTo(b.x + 3, y); c.lineTo(b.x + b.w - 3, y); } }
    else { for (let x = b.x + 10; x < b.x + b.w; x += 14) { c.moveTo(x, b.y + 3); c.lineTo(x, b.y + b.h - 3); } }
    c.stroke();
  }

  // buildings
  for (const o of WORLD.obstacles) {
    if (o.kind !== 'building' && o.kind !== 'crate') continue;
    if (o.x + o.w < vx0 || o.x > vx1 || o.y + o.h < vy0 || o.y > vy1) continue;
    if (detail) { c.fillStyle = 'rgba(20,20,30,0.18)'; c.fillRect(o.x + 5, o.y + 7, o.w, o.h); }
    c.fillStyle = o.c || '#9aa0ab';
    c.fillRect(o.x, o.y, o.w, o.h);
    if (o.kind === 'crate') {
      c.strokeStyle = 'rgba(60,40,15,0.55)'; c.lineWidth = 2;
      c.strokeRect(o.x + 1, o.y + 1, o.w - 2, o.h - 2);
      c.beginPath(); c.moveTo(o.x + 2, o.y + 2); c.lineTo(o.x + o.w - 2, o.y + o.h - 2);
      c.moveTo(o.x + o.w - 2, o.y + 2); c.lineTo(o.x + 2, o.y + o.h - 2); c.stroke();
      continue;
    }
    c.strokeStyle = 'rgba(0,0,0,0.18)'; c.lineWidth = 1.5;
    c.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1);
    if (o.w > 30 && o.h > 30) { // roof ridge
      c.strokeStyle = 'rgba(255,255,255,0.14)';
      c.beginPath(); c.moveTo(o.x + 4, o.y + o.h / 2); c.lineTo(o.x + o.w - 4, o.y + o.h / 2); c.stroke();
    }
    if (detail && o.lm) drawLandmark(c, o);
  }
  // props
  for (const p of WORLD.props) {
    if (p.x < vx0 - 40 || p.x > vx1 + 40 || p.y < vy0 - 40 || p.y > vy1 + 40) continue;
    if (detail) { c.fillStyle = 'rgba(20,20,30,0.15)'; c.beginPath(); c.arc(p.x + 3, p.y + 4, p.r, 0, TAU); c.fill(); }
    if (p.type === 'clock') {
      const seg = 12;
      for (let i = 0; i < seg; i++) {
        c.fillStyle = ['#d94f4f', '#e8a13c', '#d9c94f', '#5fae57'][i % 4];
        c.beginPath(); c.moveTo(p.x, p.y);
        c.arc(p.x, p.y, p.r, i / seg * TAU, (i + 1) / seg * TAU); c.closePath(); c.fill();
      }
      c.strokeStyle = '#f2ead2'; c.lineWidth = 3;
      c.beginPath(); c.arc(p.x, p.y, p.r, 0, TAU); c.stroke();
      c.strokeStyle = '#3a3226'; c.lineWidth = 2.5;
      c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(p.x, p.y - p.r * 0.65);
      c.moveTo(p.x, p.y); c.lineTo(p.x + p.r * 0.45, p.y); c.stroke();
    } else if (p.type === 'fountain') {
      c.fillStyle = '#5e9cc3'; c.beginPath(); c.arc(p.x, p.y, p.r, 0, TAU); c.fill();
      c.strokeStyle = '#c8c2b2'; c.lineWidth = 3; c.stroke();
    } else if (p.type === 'volo') {
      c.fillStyle = '#8d9298'; c.beginPath(); c.arc(p.x, p.y, p.r, 0, TAU); c.fill();
      c.fillStyle = 'rgba(255,255,255,0.35)'; c.beginPath(); c.arc(p.x - p.r * 0.3, p.y - p.r * 0.3, p.r * 0.45, 0, TAU); c.fill();
    } else { // statue / reform
      c.fillStyle = '#8d9298'; c.beginPath(); c.arc(p.x, p.y, p.r, 0, TAU); c.fill();
      c.strokeStyle = 'rgba(0,0,0,0.3)'; c.lineWidth = 1.5; c.stroke();
    }
  }
  // jet d'eau base
  if (detail) {
    c.fillStyle = 'rgba(255,255,255,0.55)';
    c.beginPath(); c.arc(WORLD.JET.x, WORLD.JET.y, 26, 0, TAU); c.fill();
  }
  // trees
  for (const t of WORLD.trees) {
    if (t.x < vx0 - 40 || t.x > vx1 + 40 || t.y < vy0 - 40 || t.y > vy1 + 40) continue;
    if (detail) { c.fillStyle = 'rgba(20,20,30,0.16)'; c.beginPath(); c.arc(t.x + 5, t.y + 6, t.r, 0, TAU); c.fill(); }
    c.fillStyle = '#476f34';
    c.beginPath(); c.arc(t.x, t.y, t.r, 0, TAU); c.fill();
    c.fillStyle = detail ? '#5b8742' : '#527a3c';
    c.beginPath(); c.arc(t.x - t.r * 0.2, t.y - t.r * 0.22, t.r * 0.72, 0, TAU); c.fill();
  }
  // labels
  if (detail) {
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    for (const [x, y, text, size, alpha, water] of WORLD.labels) {
      if (x < vx0 - 200 || x > vx1 + 200 || y < vy0 - 100 || y > vy1 + 100) continue;
      c.font = `700 ${size}px "Helvetica Neue", Helvetica, Arial, sans-serif`;
      c.fillStyle = water ? `rgba(255,255,255,${alpha})` : `rgba(58,50,38,${alpha})`;
      c.fillText(text, x, y);
    }
  }
}

function drawLandmark(c, o) {
  const cx = o.x + o.w / 2, cy = o.y + o.h / 2;
  c.strokeStyle = 'rgba(255,255,255,0.55)';
  c.lineWidth = 3;
  if (o.lm === 'cathedral') {
    c.beginPath();
    c.moveTo(cx, cy - 16); c.lineTo(cx, cy + 16);
    c.moveTo(cx - 10, cy - 6); c.lineTo(cx + 10, cy - 6);
    c.stroke();
  } else if (o.lm === 'hospital') {
    c.fillStyle = '#c0392b';
    c.fillRect(cx - 6, cy - 20, 12, 40);
    c.fillRect(cx - 20, cy - 6, 40, 12);
  } else if (o.lm === 'station') {
    c.strokeStyle = 'rgba(30,30,40,0.4)'; c.lineWidth = 3;
    for (let x = o.x + 20; x < o.x + o.w - 10; x += 34) {
      c.beginPath(); c.moveTo(x, o.y + 8); c.lineTo(x, o.y + o.h - 8); c.stroke();
    }
  } else if (o.lm === 'theatre') {
    c.strokeStyle = 'rgba(255,255,255,0.4)'; c.lineWidth = 4;
    c.beginPath(); c.arc(cx, cy, Math.min(o.w, o.h) * 0.32, 0, TAU); c.stroke();
  } else if (o.lm === 'reform') {
    c.fillStyle = '#e8e2d2';
    for (const p of WORLD.props) if (p.type === 'reform') { c.beginPath(); c.arc(p.x, p.y - 2, 4, 0, TAU); c.fill(); }
  }
}

/* ---------- baked map image (minimap + big map + menu) ---------- */
function buildMapImage() {
  const S = 1600;
  MAPIMG = document.createElement('canvas');
  MAPIMG.width = S; MAPIMG.height = S;
  const c = MAPIMG.getContext('2d');
  c.scale(S / WORLD.size, S / WORLD.size);
  drawWorldStatic(c, -100, -100, WORLD.size + 100, WORLD.size + 100, false);
  // darken slightly for map look
  c.fillStyle = 'rgba(30,30,40,0.08)';
  c.fillRect(0, 0, WORLD.size, WORLD.size);
}

/* ---------- dynamic scene ---------- */
function drawActor(c, a, g) {
  const fall = a.landT > 0;
  const scale = fall ? 1 + (a.landT / DROP_T) * 1.8 : 1;
  c.save();
  c.translate(a.x, a.y);
  if (fall) { // parachute drop: shadow on ground, body higher
    const sh = a.landT / DROP_T;
    c.fillStyle = `rgba(20,20,30,${0.2 - sh * 0.12})`;
    c.beginPath(); c.ellipse(sh * 60, sh * 80, 12, 8, 0, 0, TAU); c.fill();
    c.translate(-sh * 60, -sh * 80 - sh * 160);
  } else {
    c.fillStyle = 'rgba(20,20,30,0.2)';
    c.beginPath(); c.ellipse(3, 5, 14, 10, 0, 0, TAU); c.fill();
  }
  c.scale(scale, scale);
  // backpack
  c.rotate(a.dir);
  c.fillStyle = 'rgba(0,0,0,0.28)';
  c.beginPath(); c.arc(-9, 0, 8, 0, TAU); c.fill();
  // weapon
  const wd = a.wdef();
  if (wd.cls !== 'fists') {
    c.fillStyle = '#2c2c30';
    c.fillRect(8, -2.5, WLEN[wd.cls], 5);
    if (wd.cls === 'sniper' || wd.cls === 'rifle') { c.fillStyle = '#4a4a52'; c.fillRect(8 + WLEN[wd.cls] * 0.4, -4, 8, 8); }
  }
  // body
  c.fillStyle = a.color;
  c.beginPath(); c.arc(0, 0, a.r, 0, TAU); c.fill();
  c.lineWidth = 2;
  c.strokeStyle = 'rgba(0,0,0,0.35)';
  c.stroke();
  // chest stripe
  c.fillStyle = 'rgba(255,255,255,0.22)';
  c.beginPath(); c.arc(0, 0, a.r, -0.6, 0.6); c.lineTo(0, 0); c.fill();
  // hands
  c.fillStyle = '#e8c39a';
  if (wd.cls === 'fists') {
    c.beginPath(); c.arc(10, -7, 4.5, 0, TAU); c.arc(10, 7, 4.5, 0, TAU); c.fill();
  } else {
    c.beginPath(); c.arc(9, 6, 4.5, 0, TAU); c.arc(14, -5, 4.5, 0, TAU); c.fill();
  }
  c.restore();
  // parachute canopy
  if (fall) {
    const sh = a.landT / DROP_T;
    const cx = a.x - sh * 60, cy = a.y - sh * 80 - sh * 160;
    c.save();
    c.translate(cx, cy - 30 * scale);
    c.fillStyle = a.isPlayer ? '#d3452f' : '#d8d3c8';
    c.beginPath(); c.arc(0, 0, 20 * scale, Math.PI, TAU); c.closePath(); c.fill();
    c.strokeStyle = 'rgba(0,0,0,0.35)'; c.lineWidth = 1.5; c.stroke();
    c.strokeStyle = 'rgba(60,60,70,0.8)';
    c.beginPath();
    c.moveTo(-18 * scale, -2); c.lineTo(0, 30 * scale);
    c.moveTo(18 * scale, -2); c.lineTo(0, 30 * scale);
    c.stroke();
    c.restore();
  }
  // action ring
  if (!fall && !a.dead) {
    const prog = a.reloadT > 0 ? 1 - a.reloadT / a.reloadD
      : a.healKind ? 1 - a.healT / a.healD : -1;
    if (prog >= 0) {
      c.strokeStyle = a.reloadT > 0 ? '#f0c419' : '#7cd67c';
      c.lineWidth = 4;
      c.beginPath(); c.arc(a.x, a.y, 22, -Math.PI / 2, -Math.PI / 2 + prog * TAU); c.stroke();
    }
  }
}

const LOOT_GLOW = { weapon: null, ammo: null, heal: null, vest: null, helm: null };
function lootColor(L) {
  if (L.cat === 'weapon') return RARITY_COLORS[WEAPONS[L.id].rarity];
  if (L.cat === 'ammo') return AMMO_COLORS[L.id];
  if (L.cat === 'heal') return L.id === 'drink' ? '#e8a13c' : '#e05555';
  return '#4aa3e8';
}
function drawLoot(c, L, t) {
  const bob = Math.sin(t * 3 + L.bob) * 2.5;
  const col = lootColor(L);
  c.fillStyle = col + '55';
  c.beginPath(); c.arc(L.x, L.y + 2, 15, 0, TAU); c.fill();
  c.fillStyle = '#efe9da';
  c.strokeStyle = col;
  c.lineWidth = 2.5;
  c.beginPath(); c.roundRect(L.x - 11, L.y - 9 + bob, 22, 18, 4); c.fill(); c.stroke();
  // glyph
  c.fillStyle = '#3a3630';
  c.save();
  c.translate(L.x, L.y + bob);
  if (L.cat === 'weapon') {
    c.fillRect(-8, -1.5, 14, 3);
    c.fillRect(-6, 1, 3, 5);
    if (WEAPONS[L.id].cls === 'sniper') c.fillRect(4, -3.5, 4, 2);
  } else if (L.cat === 'ammo') {
    c.fillStyle = AMMO_COLORS[L.id];
    c.fillRect(-5, -5, 10, 10);
    c.fillStyle = '#3a3630';
    c.fillRect(-5, -1, 10, 1.5);
  } else if (L.cat === 'heal') {
    if (L.id === 'drink') { c.fillStyle = '#e8a13c'; c.fillRect(-3, -6, 6, 12); }
    else { c.fillStyle = L.id === 'bandage' ? '#e6e0d2' : '#e05555'; c.fillRect(-6, -5, 12, 10); c.fillStyle = '#fff'; c.fillRect(-1.5, -3.5, 3, 7); c.fillRect(-4.5, -0.5, 9, 3); }
  } else if (L.cat === 'vest') {
    c.fillStyle = '#4aa3e8';
    c.beginPath(); c.roundRect(-6, -5, 12, 11, [4, 4, 2, 2]); c.fill();
    c.fillStyle = '#c8c2b2';
    c.font = '700 7px Helvetica'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(['', 'I', 'II', 'III'][L.lvl], 0, 1);
  } else if (L.cat === 'helm') {
    c.fillStyle = '#4aa3e8';
    c.beginPath(); c.arc(0, 1, 6, Math.PI, TAU); c.closePath(); c.fill();
    c.fillStyle = '#c8c2b2';
    c.font = '700 7px Helvetica'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(['', 'I', 'II', 'III'][L.lvl], 0, 1);
  }
  c.restore();
}

function drawJet(c, t) {
  const J = WORLD.JET;
  const pulse = 1 + Math.sin(t * 2.2) * 0.08;
  c.fillStyle = 'rgba(255,255,255,0.5)';
  c.beginPath(); c.arc(J.x, J.y, 30 * pulse, 0, TAU); c.fill();
  c.fillStyle = 'rgba(255,255,255,0.75)';
  c.beginPath(); c.arc(J.x, J.y, 16 * pulse, 0, TAU); c.fill();
  // plume drifting NE
  for (let i = 0; i < 5; i++) {
    const ph = (t * 0.55 + i * 0.2) % 1;
    const dx = ph * 55 + 10, dy = -ph * 30 + Math.sin(i * 2 + t) * 6;
    c.fillStyle = `rgba(255,255,255,${0.5 * (1 - ph)})`;
    c.beginPath(); c.arc(J.x + dx, J.y + dy, 10 * (1 - ph * 0.6), 0, TAU); c.fill();
  }
}

/* ---------- main game view ---------- */
function renderMain(g) {
  const cv = g.canvas, c = g.ctx;
  const cw = cv.clientWidth, ch = cv.clientHeight;
  c.setTransform(g.dpr, 0, 0, g.dpr, 0, 0);
  c.clearRect(0, 0, cw, ch);

  const z = g.cam.z;
  let sx = 0, sy = 0;
  if (g.shake > 0) { sx = rand(-g.shake, g.shake); sy = rand(-g.shake, g.shake); }
  c.translate(cw / 2 + sx, ch / 2 + sy);
  c.scale(z, z);
  c.translate(-g.cam.x, -g.cam.y);

  const vx0 = g.cam.x - cw / 2 / z - 20, vx1 = g.cam.x + cw / 2 / z + 20;
  const vy0 = g.cam.y - ch / 2 / z - 20, vy1 = g.cam.y + ch / 2 / z + 20;
  drawWorldStatic(c, vx0, vy0, vx1, vy1, true);
  if (g.state !== 'menu') drawJet(c, g.t);

  // death crates
  for (const cr of g.crates) {
    c.fillStyle = '#7a5a35';
    c.fillRect(cr.x - 12, cr.y - 9, 24, 18);
    c.strokeStyle = '#4c3620'; c.lineWidth = 2;
    c.strokeRect(cr.x - 12, cr.y - 9, 24, 18);
    c.beginPath(); c.moveTo(cr.x - 12, cr.y - 9); c.lineTo(cr.x + 12, cr.y + 9); c.stroke();
  }
  // loot
  for (const L of g.loot) {
    if (L.x < vx0 || L.x > vx1 || L.y < vy0 || L.y > vy1) continue;
    drawLoot(c, L, g.t);
  }
  // bullets
  c.lineCap = 'round';
  for (const b of g.bullets) {
    const bl = 30;
    const m = Math.hypot(b.vx, b.vy) || 1;
    const ux = b.vx / m, uy = b.vy / m;
    c.strokeStyle = 'rgba(255,238,170,0.9)';
    c.lineWidth = 2.5;
    c.beginPath();
    c.moveTo(b.x - ux * bl, b.y - uy * bl);
    c.lineTo(b.x, b.y);
    c.stroke();
  }
  // actors
  for (const a of g.actors) {
    if (a.dead) continue;
    if (a.x < vx0 - 60 || a.x > vx1 + 60 || a.y < vy0 - 120 || a.y > vy1 + 60) continue;
    drawActor(c, a, g);
  }
  // particles
  for (const p of g.parts) {
    c.globalAlpha = clamp(p.life / p.maxLife, 0, 1);
    c.fillStyle = p.color;
    c.beginPath(); c.arc(p.x, p.y, p.size, 0, TAU); c.fill();
  }
  c.globalAlpha = 1;

  // zone
  const zo = g.zone;
  if (zo.mode !== 'off') {
    c.fillStyle = 'rgba(58,110,220,0.22)';
    c.beginPath();
    c.rect(vx0 - 50, vy0 - 50, vx1 - vx0 + 100, vy1 - vy0 + 100);
    c.arc(zo.x, zo.y, zo.r, 0, TAU, true);
    c.fill();
    c.strokeStyle = 'rgba(80,140,255,0.85)';
    c.lineWidth = 3;
    c.beginPath(); c.arc(zo.x, zo.y, zo.r, 0, TAU); c.stroke();
    if (zo.to) {
      c.strokeStyle = 'rgba(255,255,255,0.9)';
      c.lineWidth = 2.5;
      c.setLineDash([14, 10]);
      c.beginPath(); c.arc(zo.to.x, zo.to.y, zo.to.r, 0, TAU); c.stroke();
      c.setLineDash([]);
    }
  }

  // screen space UI (crosshair, hitmarker)
  c.setTransform(g.dpr, 0, 0, g.dpr, 0, 0);
  if (g.state === 'playing' && g.player && !g.player.dead) {
    const m = g.mouse;
    const sp = g.currentSpread();
    const gap = 7 + sp * 1.6;
    c.strokeStyle = 'rgba(0,0,0,0.7)';
    c.lineWidth = 3.5;
    c.beginPath();
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      c.moveTo(m.x + dx * gap, m.y + dy * gap);
      c.lineTo(m.x + dx * (gap + 7), m.y + dy * (gap + 7));
    }
    c.stroke();
    c.strokeStyle = '#fff';
    c.lineWidth = 1.8;
    c.beginPath();
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      c.moveTo(m.x + dx * gap, m.y + dy * gap);
      c.lineTo(m.x + dx * (gap + 7), m.y + dy * (gap + 7));
    }
    c.stroke();
    c.fillStyle = '#fff';
    c.beginPath(); c.arc(m.x, m.y, 1.6, 0, TAU); c.fill();
    if (g.hitT < 0.18) {
      const a = 1 - g.hitT / 0.18;
      c.strokeStyle = `rgba(255,70,60,${a})`;
      c.lineWidth = 3;
      c.beginPath();
      for (const [dx, dy] of [[1, 1], [-1, -1], [1, -1], [-1, 1]]) {
        c.moveTo(m.x + dx * 5, m.y + dy * 5);
        c.lineTo(m.x + dx * 13, m.y + dy * 13);
      }
      c.stroke();
    }
  }
}

/* ---------- minimap ---------- */
function renderMinimap(g) {
  const cv = g.mmCanvas, c = g.mmCtx;
  const S = 200;
  c.setTransform(1, 0, 0, 1, 0, 0);
  c.clearRect(0, 0, S, S);
  if (!MAPIMG) return;
  const view = 950; // world units across
  const k = MAPIMG.width / WORLD.size;
  const px = g.cam.x, py = g.cam.y;
  c.drawImage(MAPIMG, (px - view / 2) * k, (py - view / 2) * k, view * k, view * k, 0, 0, S, S);
  const w2m = S / view; // world→minimap px
  const to = (x, y) => [(x - px + view / 2) * w2m, (y - py + view / 2) * w2m];
  const zo = g.zone;
  if (zo.mode !== 'off') {
    let [zx, zy] = to(zo.x, zo.y);
    c.strokeStyle = 'rgba(80,140,255,0.95)'; c.lineWidth = 2;
    c.beginPath(); c.arc(zx, zy, zo.r * w2m, 0, TAU); c.stroke();
    if (zo.to) {
      [zx, zy] = to(zo.to.x, zo.to.y);
      c.strokeStyle = '#fff'; c.lineWidth = 1.6;
      c.beginPath(); c.arc(zx, zy, zo.to.r * w2m, 0, TAU); c.stroke();
    }
  }
  // shot pings
  for (const p of g.pings) {
    const age = g.t - p.t;
    if (age > 2) continue;
    const [x, y] = to(p.x, p.y);
    c.fillStyle = `rgba(230,60,50,${0.85 * (1 - age / 2)})`;
    c.beginPath(); c.arc(x, y, 3.2, 0, TAU); c.fill();
  }
  // player
  if (g.player) {
    const [x, y] = to(g.player.x, g.player.y);
    c.save();
    c.translate(x, y);
    c.rotate(g.player.dir);
    c.fillStyle = '#fff';
    c.strokeStyle = 'rgba(0,0,0,0.6)'; c.lineWidth = 1.5;
    c.beginPath(); c.moveTo(7, 0); c.lineTo(-5, -5); c.lineTo(-5, 5); c.closePath();
    c.fill(); c.stroke();
    c.restore();
  }
  c.strokeStyle = 'rgba(255,255,255,0.25)';
  c.lineWidth = 1;
  c.strokeRect(0.5, 0.5, S - 1, S - 1);
}

/* ---------- big map / drop select ---------- */
function renderBigmap(g) {
  const cv = g.bigCanvas, c = g.bigCtx;
  const cw = cv.clientWidth, ch = cv.clientHeight;
  c.setTransform(g.dpr, 0, 0, g.dpr, 0, 0);
  c.clearRect(0, 0, cw, ch);
  if (!MAPIMG) return;
  const size = Math.min(cw, ch) * 0.92;
  const ox = (cw - size) / 2, oy = (ch - size) / 2;
  const k = size / WORLD.size; // world → screen
  const W2S = (x, y) => [ox + x * k, oy + y * k];
  c.drawImage(MAPIMG, ox, oy, size, size);
  // grid
  c.strokeStyle = 'rgba(255,255,255,0.13)';
  c.lineWidth = 1;
  c.font = '600 11px Helvetica';
  c.fillStyle = 'rgba(255,255,255,0.35)';
  c.textAlign = 'center';
  const CELLS = 8, step = WORLD.size / CELLS;
  for (let i = 1; i < CELLS; i++) {
    const p = i * step;
    c.beginPath(); c.moveTo(ox + p * k, oy); c.lineTo(ox + p * k, oy + size); c.stroke();
    c.beginPath(); c.moveTo(ox, oy + p * k); c.lineTo(ox + size, oy + p * k); c.stroke();
  }
  c.fillText('A', ox + step * 0.5 * k, oy - 6);
  c.fillText('B', ox + step * 1.5 * k, oy - 6);
  c.fillText('C', ox + step * 2.5 * k, oy - 6);
  c.fillText('D', ox + step * 3.5 * k, oy - 6);
  c.fillText('E', ox + step * 4.5 * k, oy - 6);
  c.fillText('F', ox + step * 5.5 * k, oy - 6);
  c.fillText('G', ox + step * 6.5 * k, oy - 6);
  c.fillText('H', ox + step * 7.5 * k, oy - 6);
  // zone
  const zo = g.zone;
  if (zo.mode !== 'off') {
    let [zx, zy] = W2S(zo.x, zo.y);
    c.strokeStyle = 'rgba(90,150,255,0.95)'; c.lineWidth = 2.5;
    c.beginPath(); c.arc(zx, zy, zo.r * k, 0, TAU); c.stroke();
    if (zo.to) {
      [zx, zy] = W2S(zo.to.x, zo.to.y);
      c.strokeStyle = '#fff'; c.lineWidth = 2;
      c.beginPath(); c.arc(zx, zy, zo.to.r * k, 0, TAU); c.stroke();
    }
  }
  // player marker
  if (g.player && !g.player.dead && g.bigmapMode === 'view') {
    const [x, y] = W2S(g.player.x, g.player.y);
    c.fillStyle = '#fff';
    c.strokeStyle = '#d3452f'; c.lineWidth = 2.5;
    c.beginPath(); c.arc(x, y, 6, 0, TAU); c.fill(); c.stroke();
  }
  // drop select cursor
  if (g.bigmapMode === 'drop') {
    const wx = ox + g.mouse.wx * k, wy = oy + g.mouse.wy * k;
    if (g.mouse.wx >= 0 && g.mouse.wy >= 0 && g.mouse.wx <= WORLD.size && g.mouse.wy <= WORLD.size) {
      const ok = !WORLD.isWater(g.mouse.wx, g.mouse.wy);
      const pu = 1 + Math.sin(performance.now() / 180) * 0.15;
      c.strokeStyle = ok ? '#ff4030' : 'rgba(255,255,255,0.5)';
      c.lineWidth = 2.5;
      c.beginPath(); c.arc(wx, wy, 14 * pu, 0, TAU); c.stroke();
      c.beginPath(); c.moveTo(wx - 22, wy); c.lineTo(wx - 6, wy); c.moveTo(wx + 6, wy); c.lineTo(wx + 22, wy);
      c.moveTo(wx, wy - 22); c.lineTo(wx, wy - 6); c.moveTo(wx, wy + 6); c.lineTo(wx, wy + 22);
      c.stroke();
      // nearest POI name
      let best = null, bd = 1e9;
      for (const [x, y, text] of WORLD.labels) {
        const d = dist2(x, y, g.mouse.wx, g.mouse.wy);
        if (d < 340 * 340 && d < bd) { bd = d; best = text; }
      }
      if (best) {
        c.font = '700 15px "Helvetica Neue", Helvetica, Arial';
        c.textAlign = 'center';
        c.fillStyle = 'rgba(0,0,0,0.65)';
        const wpx = c.measureText(best).width;
        c.fillRect(wx - wpx / 2 - 8, wy - 46, wpx + 16, 22);
        c.fillStyle = '#fff';
        c.fillText(best, wx, wy - 31);
      }
    }
  }
  g.bigmapRect = { ox, oy, size };
}
