'use strict';
/* ============================================================
   Bot brain — wander, loot, rotate with the zone, fight.
   ============================================================ */
const BANDS = { fists: [30, 60], pistol: [180, 320], smg: [160, 300], shotgun: [90, 200], rifle: [240, 420], sniper: [380, 620] };

function botPerceive(g, b) {
  let best = null, bd = 1e9;
  for (const a of g.actors) {
    if (a === b || a.dead || a.landT > 0) continue;
    const d = dist(b.x, b.y, a.x, a.y);
    if (d < 480 && d < bd && WORLD.losClear(b.x, b.y, a.x, a.y)) { bd = d; best = a; }
  }
  if (best) {
    if (b.enemy !== best) { b.enemy = best; b.aimT = rand(0.45, 0.9) + (1 - b.skill) * 0.6; }
    b.enemyVis = true;
    b.lastSeen = { x: best.x, y: best.y };
    b.lastSeenT = g.t;
  } else {
    b.enemyVis = false;
    if (b.enemy && g.t - b.lastSeenT > 4) b.enemy = null;
  }
}

function botPickup(g, b) {
  for (let i = g.loot.length - 1; i >= 0; i--) {
    const L = g.loot[i];
    if (dist2(L.x, L.y, b.x, b.y) > 30 * 30) continue;
    let take = false;
    if (L.cat === 'weapon') {
      const empty = !b.slots[0] || !b.slots[1];
      const cur = b.wep();
      take = empty || (cur && WEAPONS[L.id].rarity > WEAPONS[cur.id].rarity);
      if (take && !empty && cur) { // drop worse gun
        g.loot.push({ x: b.x + rand(-20, 20), y: b.y + rand(-20, 20), cat: 'weapon', id: cur.id, count: cur.mag });
        b.slots[b.slot] = { id: L.id, mag: WEAPONS[L.id].mag };
      } else if (take) {
        const s = !b.slots[0] ? 0 : 1;
        b.slots[s] = { id: L.id, mag: WEAPONS[L.id].mag };
        if (b.slot < 0) b.slot = s;
      }
    } else if (L.cat === 'ammo') {
      const need = b.slots[0] && WEAPONS[b.slots[0].id].ammo === L.id || b.slots[1] && WEAPONS[b.slots[1].id].ammo === L.id;
      take = need && b.ammo[L.id] < 90;
      if (take) b.ammo[L.id] += L.count;
    } else if (L.cat === 'heal') {
      take = (L.id === 'bandage' || L.id === 'firstaid') ? b.heals[L.id] < 4 : b.heals[L.id] < 2;
      if (take) b.heals[L.id] += L.count;
    } else if (L.cat === 'vest') {
      take = L.lvl > b.vest;
      if (take) { if (b.vest > 0) g.loot.push({ x: b.x + rand(-20, 20), y: b.y + rand(-20, 20), cat: 'vest', lvl: b.vest }); b.vest = L.lvl; }
    } else if (L.cat === 'helm') {
      take = L.lvl > b.helm;
      if (take) { if (b.helm > 0) g.loot.push({ x: b.x + rand(-20, 20), y: b.y + rand(-20, 20), cat: 'helm', lvl: b.helm }); b.helm = L.lvl; }
    }
    if (take) g.loot.splice(i, 1);
  }
}

function updateBot(g, b, dt) {
  if (b.dead || b.landT > 0) return;
  b.strafeT -= dt; if (b.strafeT <= 0) { b.strafeT = rand(0.8, 1.8); b.strafe *= -1; }
  b.losT -= dt;
  if (b.losT <= 0) { b.losT = 0.18 + rand(0.15); botPerceive(g, b); }
  b.lootT -= dt;
  if (b.lootT <= 0) { b.lootT = 0.35; botPickup(g, b); }

  const e = (b.enemy && !b.enemy.dead) ? b.enemy : null;
  b.mvx = 0; b.mvy = 0;
  const safe = g.safeCircle();

  if (e) {
    b.aimT -= dt;
    const d = dist(b.x, b.y, e.x, e.y);
    if (!b.enemyVis) {
      botSeek(g, b, b.lastSeen.x, b.lastSeen.y, 235);
      if (dist2(b.x, b.y, b.lastSeen.x, b.lastSeen.y) < 50 * 50 && g.t - b.lastSeenT > 1.5) b.enemy = null;
    } else {
      const wd = b.wdef();
      const band = BANDS[wd.cls];
      const ang = Math.atan2(e.y - b.y, e.x - b.x);
      let want;
      if (d > band[1]) want = ang;
      else if (d < band[0]) want = ang + Math.PI;
      else want = ang + Math.PI / 2 * b.strafe;
      b.mvx = Math.cos(want); b.mvy = Math.sin(want);
      b.sprint = d > band[1];
      b.dir = ang;
      if (b.aimT <= 0 && b.reloadT <= 0 && !b.healKind) g.botFire(b, e, d);
    }
    return;
  }

  // no enemy visible — heal / rotate / loot / wander
  if (!b.healKind && b.hp < 55 && b.healCd <= 0 && g.t - b.lastSeenT > 2.5) {
    const kind = b.hp < 40 && b.heals.medkit > 0 ? 'medkit'
      : b.heals.firstaid > 0 ? 'firstaid'
      : b.heals.bandage > 0 ? 'bandage' : null;
    if (kind) { b.startHeal(kind); b.healCd = 3; }
  }
  if (b.healKind) return; // stands still while healing

  const dSafe = dist(b.x, b.y, safe.x, safe.y);
  if (dSafe > safe.r * 0.85) {
    const a = Math.atan2(safe.y - b.y, safe.x - b.x) + rand(-0.3, 0.3);
    b.mvx = Math.cos(a); b.mvy = Math.sin(a);
    b.sprint = dSafe > safe.r || b.hp > 40;
    return;
  }
  if (!b.slots[0] && !b.slots[1]) {
    let best = null, bd = 1e9;
    for (const L of g.loot) {
      if (L.cat !== 'weapon') continue;
      const d = dist2(L.x, L.y, b.x, b.y);
      if (d < 300 * 300 && d < bd && WORLD.losClear(b.x, b.y, L.x, L.y)) { bd = d; best = L; }
    }
    if (best) { botSeek(g, b, best.x, best.y, 250); return; }
  }
  // wander inside safe zone
  b.movePtT -= dt;
  if (!b.movePt || b.movePtT <= 0 || dist2(b.x, b.y, b.movePt.x, b.movePt.y) < 55 * 55) {
    b.movePt = WORLD.randLandPoint(safe.x, safe.y, safe.r * 0.75) || { x: safe.x, y: safe.y };
    b.movePtT = rand(8, 14);
  }
  botSeek(g, b, b.movePt.x, b.movePt.y, 215);
}

function botSeek(g, b, x, y, spd) {
  const a = Math.atan2(y - b.y, x - b.x);
  b.mvx = Math.cos(a); b.mvy = Math.sin(a);
  b.sprint = spd > 230;
  if (!b.enemy) b.dir = a;
}
