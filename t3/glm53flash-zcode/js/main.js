'use strict';
/* ============================================================
   Game — match flow, input, combat, zone, HUD
   ============================================================ */
const $ = id => document.getElementById(id);

const ZONE_R = [1550, 1000, 640, 400, 230, 110, 40];
const ZONE_WAIT = [40, 32, 26, 22, 18, 15, 12];
const ZONE_SHRINK = [42, 36, 30, 26, 22, 18, 15];
const ZONE_DPS = [0.8, 1.5, 3, 5, 7, 9, 12, 14];

const Game = {
  state: 'menu', t: 0, matchT: 0,
  actors: [], bots: [], player: null,
  loot: [], bullets: [], parts: [], crates: [], pings: [],
  alive: 0, placement: 0, killedBy: '', matchWinner: null, endsShown: false,
  cam: { x: 2050, y: 2050, z: 0.85 },
  mouse: { x: 0, y: 0, wx: 0, wy: 0, down: false },
  keys: {}, shake: 0, hitT: 9, dmgFlash: 0, zoneTick: 0,
  bigmapMode: null, paused: false,
  fast: new URLSearchParams(location.search).has('fast'),
  zone: { mode: 'off', x: WORLD.zoneStart.x, y: WORLD.zoneStart.y, r: WORLD.zoneStart.r, from: null, to: null, t: 0, phase: -1, dps: 0 },

  /* ---------- boot ---------- */
  init() {
    WORLD.build();
    this.canvas = $('game');
    this.ctx = this.canvas.getContext('2d');
    this.mmCanvas = $('minimap');
    this.mmCtx = this.mmCanvas.getContext('2d');
    this.bigCanvas = $('bigmap');
    this.bigCtx = this.bigCanvas.getContext('2d');
    buildMapImage();
    this.drawMenuMap();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.bindInput();
    $('btnDeploy').addEventListener('click', () => { AudioSys.deploy(); $('menu').classList.add('hidden'); this.reset(); });
    $('btnRestart').addEventListener('click', () => { $('endScreen').classList.add('hidden'); this.reset(); });
    $('btnResume').addEventListener('click', () => this.togglePause(false));
    $('btnQuit').addEventListener('click', () => location.reload());
    let last = performance.now();
    const loop = now => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!this.paused && this.state !== 'menu' && this.state !== 'drop_select') this.update(dt);
      else if (this.state === 'menu') { this.t += dt; this.cam.x = 2050 + Math.cos(this.t * 0.07) * 620; this.cam.y = 2050 + Math.sin(this.t * 0.05) * 620; this.cam.z = 0.85; }
      renderMain(this);
      if (this.state !== 'menu') renderMinimap(this);
      if (this.bigmapMode) renderBigmap(this);
      if (this.state !== 'menu') this.updateHUD(dt);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    window.G = this;
  },

  drawMenuMap() {
    const cv = $('menuMap');
    cv.width = cv.clientWidth; cv.height = cv.clientHeight;
    const c = cv.getContext('2d');
    // cover-fit the square map image
    const s = Math.max(cv.width, cv.height);
    c.drawImage(MAPIMG, (cv.width - s) / 2, (cv.height - s) / 2, s, s);
    c.fillStyle = 'rgba(8,10,14,0.72)';
    c.fillRect(0, 0, cv.width, cv.height);
  },

  resize() {
    this.dpr = Math.min(2, window.devicePixelRatio || 1);
    for (const [cv] of [[this.canvas], [this.bigCanvas]]) {
      if (!cv.clientWidth || !cv.clientHeight) continue;
      cv.width = cv.clientWidth * this.dpr;
      cv.height = cv.clientHeight * this.dpr;
    }
  },

  /* ---------- match setup ---------- */
  reset() {
    this.t = 0; this.matchT = 0;
    this.bullets = []; this.parts = []; this.crates = []; this.pings = [];
    this.player = null; this.actors = []; this.bots = [];
    this.alive = 0; this.placement = 0; this.killedBy = ''; this.matchWinner = null; this.endsShown = false;
    this.paused = false; this.shake = 0; this.hitT = 9; this.dmgFlash = 0; this.zoneTick = 0;
    this.zone = { mode: 'off', x: WORLD.zoneStart.x, y: WORLD.zoneStart.y, r: WORLD.zoneStart.r, from: null, to: null, t: 0, phase: -1, dps: 0 };
    $('killfeed').innerHTML = '';
    this.spawnLoot();
    this.spawnBots(39);
    this.alive = this.actors.length;
    this.state = 'drop_select';
    $('hud').classList.remove('hidden');
    this.openBigmap('drop', 'CLICK THE MAP TO CHOOSE YOUR DROP ZONE');
  },

  spawnLoot() {
    this.loot = [];
    for (const s of WORLD.lootSpawns) {
      const it = this.rollLoot(s.tier);
      if (it) { it.x = s.x; it.y = s.y; it.bob = rand(TAU); this.loot.push(it); }
    }
  },

  rollLoot(tier) {
    const cat = chooseWeighted([['weapon', 0.40], ['ammo', 0.24], ['heal', 0.18], ['vest', 0.09], ['helm', 0.09]]);
    if (cat === 'weapon') {
      const id = chooseWeighted([['p92', 0.30], ['mp5', 0.22], ['m1014', 0.18], ['sg550', 0.20], ['zfk55', 0.10]]);
      return { cat, id, count: 1 };
    }
    if (cat === 'ammo') {
      const id = chooseWeighted([['9mm', 0.34], ['5.56', 0.30], ['12g', 0.18], ['7.62', 0.18]]);
      return { cat, id, count: AMMO_PICK[id] };
    }
    if (cat === 'heal') {
      const id = chooseWeighted([['bandage', 0.36], ['firstaid', 0.27], ['medkit', 0.09], ['drink', 0.28]]);
      return { cat, id, count: id === 'bandage' ? 2 : 1 };
    }
    const r = Math.random() + tier;
    return { cat, lvl: r > 0.9 ? 3 : r > 0.55 ? 2 : 1, count: 1 };
  },

  spawnBots(n) {
    const zs = WORLD.zoneStart;
    for (let i = 0; i < n; i++) {
      let pt = null;
      for (let tries = 0; tries < 14 && !pt; tries++) {
        const c = WORLD.randLandPoint(zs.x, zs.y, zs.r * 0.93);
        if (c && this.bots.every(b => dist2(b.x, b.y, c.x, c.y) > 160 * 160)) pt = c;
      }
      if (!pt) pt = WORLD.randLandPoint(zs.x, zs.y, zs.r * 0.9) || { x: zs.x, y: zs.y };
      const name = WORLD.botNames[i % WORLD.botNames.length] + (i >= WORLD.botNames.length ? ' ' + (Math.floor(i / WORLD.botNames.length) + 1) : '');
      const b = new Actor(pt.x, pt.y, false, name);
      b.landT = rand(1.2, 4.6);
      if (Math.random() < 0.5) b.giveWeapon(chooseWeighted([['p92', 0.5], ['mp5', 0.3], ['sg550', 0.2]]));
      if (Math.random() < 0.35) b.vest = 1;
      if (Math.random() < 0.2) b.helm = 1;
      if (Math.random() < 0.5) b.heals.bandage = randi(1, 3);
      this.bots.push(b);
      this.actors.push(b);
    }
  },

  chooseDrop(wx, wy) {
    if (wx < 60 || wy < 60 || wx > WORLD.size - 60 || wy > WORLD.size - 60) return;
    if (WORLD.isWater(wx, wy)) { this.bigmapHintFlash('Cannot drop in water — pick land!'); return; }
    const p = new Actor(wx, wy, true, 'YOU');
    this.player = p;
    this.actors.push(p);
    this.state = 'dropping';
    this.closeBigmap();
    AudioSys.deploy();
    this.banner('GLIDING IN', 'steer with WASD');
  },

  /* ---------- big map ---------- */
  openBigmap(mode, hint) {
    this.bigmapMode = mode;
    $('bigmapWrap').classList.remove('hidden');
    this.resize();
    $('bigmapHint').textContent = hint || '';
  },
  closeBigmap() { this.bigmapMode = null; $('bigmapWrap').classList.add('hidden'); },
  bigmapHintFlash(text) {
    const el = $('bigmapHint');
    el.textContent = text;
    clearTimeout(this._bhf);
    this._bhf = setTimeout(() => { if (this.bigmapMode === 'drop') el.textContent = 'CLICK THE MAP TO CHOOSE YOUR DROP ZONE'; }, 1200);
  },

  /* ---------- update ---------- */
  update(dt) {
    this.t += dt;
    this.matchT += dt;
    for (const a of this.actors) this.updateActorCommon(a, dt);
    if (this.state === 'playing' && this.player && !this.player.dead) this.handlePlayerInput(dt);
    // separation
    for (let i = 0; i < this.actors.length; i++) {
      const a = this.actors[i];
      if (a.dead || a.landT > 0) continue;
      for (let j = i + 1; j < this.actors.length; j++) {
        const b = this.actors[j];
        if (b.dead || b.landT > 0) continue;
        const d2 = dist2(a.x, a.y, b.x, b.y);
        if (d2 < 26 * 26 && d2 > 0.01) {
          const d = Math.sqrt(d2), push = (26 - d) / 2;
          const ux = (a.x - b.x) / d, uy = (a.y - b.y) / d;
          if (!WORLD.collideStatic(a.x + ux * push, a.y + uy * push, a.r)) { a.x += ux * push; a.y += uy * push; }
          if (!WORLD.collideStatic(b.x - ux * push, b.y - uy * push, b.r)) { b.x -= ux * push; b.y -= uy * push; }
        }
      }
    }
    this.updateBullets(dt);
    this.updateZone(dt);
    this.updateParticles(dt);
    // camera
    if (this.player && this.state !== 'menu') {
      const p = this.player;
      if (this.state === 'dropping') this.cam.z = lerp(1, 0.3, clamp(p.landT / DROP_T, 0, 1));
      else this.cam.z = lerp(this.cam.z, 1, Math.min(1, dt * 3));
      const cw = this.canvas.clientWidth, ch = this.canvas.clientHeight;
      const tx = p.x + (this.mouse.x - cw / 2) * 0.10 / this.cam.z;
      const ty = p.y + (this.mouse.y - ch / 2) * 0.10 / this.cam.z;
      this.cam.x = lerp(this.cam.x, tx, Math.min(1, dt * 9));
      this.cam.y = lerp(this.cam.y, ty, Math.min(1, dt * 9));
    }
    this.shake = Math.max(0, this.shake - dt * 22);
    this.hitT += dt;
    this.dmgFlash = Math.max(0, this.dmgFlash - dt * 1.6);
    while (this.pings.length && this.t - this.pings[0].t > 2) this.pings.shift();
  },

  updateActorCommon(a, dt) {
    if (a.dead) return;
    a.fireCd -= dt;
    a.spawnProt -= dt;
    if (a.landT > 0) {
      a.landT -= dt;
      if (a.landT <= 0) {
        a.landT = 0;
        const fp = WORLD.resolveFree(a.x, a.y);
        a.x = fp.x; a.y = fp.y;
        if (a.isPlayer) {
          this.state = 'playing';
          AudioSys.land();
          this.zone.mode = 'grace';
          this.zone.t = this.fast ? 3 : 8;
          this.banner('FIND A WEAPON', 'loot the arrondissement — blue zone incoming');
        }
      }
      return;
    }
    if (a.reloadT > 0) {
      a.reloadT -= dt;
      if (a.reloadT <= 0) {
        const w = a.wep();
        if (w) {
          const d = WEAPONS[w.id];
          const take = Math.min(d.mag - w.mag, a.ammo[d.ammo]);
          w.mag += take; a.ammo[d.ammo] -= take;
          if (a.isPlayer) AudioSys.reload();
        }
      }
    }
    if (a.healKind) {
      if (a.isPlayer && a.healKind !== 'drink' && (a.mvx || a.mvy)) a.cancelHeal();
      else {
        a.healT += dt;
        if (a.healT >= a.healD) {
          const k = a.healKind;
          a.heals[k]--;
          a.healKind = null;
          if (k === 'bandage') a.hp = Math.min(75, a.hp + 15);
          else if (k === 'firstaid') a.hp = 75;
          else if (k === 'medkit') a.hp = 100;
          else a.boost = Math.min(100, a.boost + 40);
          if (a.isPlayer) (k === 'drink' ? AudioSys.drink : AudioSys.heal)();
        }
      }
    }
    if (a.boost > 0) {
      a.boost -= dt * 1.5;
      if (a.hp > 0 && a.hp < 100) a.hp = Math.min(100, a.hp + dt * 2);
    }
    if (!a.isPlayer) updateBot(this, a, dt);
    this.moveActor(a, dt);
  },

  moveActor(a, dt) {
    if (a.dead || a.landT > 0) return;
    let sp = a.speed * (a.sprint ? 1.45 : 1);
    if (a.healKind && a.healKind !== 'drink') sp = 0;
    if (a.avoidT > 0) {
      a.avoidT -= dt;
      const base = Math.atan2(a.mvy || 1, a.mvx || 0);
      const ang = base + Math.PI / 2 * a.avoidSide;
      a.mvx = Math.cos(ang); a.mvy = Math.sin(ang);
    }
    const vx = a.mvx * sp, vy = a.mvy * sp;
    a.vx = vx; a.vy = vy;
    const ox = a.x, oy = a.y;
    const nx = a.x + vx * dt;
    if (!WORLD.collideStatic(nx, a.y, a.r)) a.x = nx;
    const ny = a.y + vy * dt;
    if (!WORLD.collideStatic(a.x, ny, a.r)) a.y = ny;
    a.x = clamp(a.x, 24, WORLD.size - 24);
    a.y = clamp(a.y, 24, WORLD.size - 24);
    const want = Math.hypot(vx, vy) * dt;
    if (want > 0.01) {
      if (dist(ox, oy, a.x, a.y) < want * 0.25) a.stuckT += dt;
      else a.stuckT = Math.max(0, a.stuckT - dt * 2);
    }
    if (a.stuckT > 0.55) {
      a.stuckT = 0; a.avoidT = 0.5; a.avoidSide = Math.random() < 0.5 ? 1 : -1;
      a.movePt = null;
    }
  },

  handlePlayerInput() {
    const p = this.player, k = this.keys;
    let mx = 0, my = 0;
    if (k.KeyA || k.ArrowLeft) mx -= 1;
    if (k.KeyD || k.ArrowRight) mx += 1;
    if (k.KeyW || k.ArrowUp) my -= 1;
    if (k.KeyS || k.ArrowDown) my += 1;
    const m = Math.hypot(mx, my);
    if (m > 0) { mx /= m; my /= m; }
    p.mvx = mx; p.mvy = my;
    p.sprint = !!(k.ShiftLeft || k.ShiftRight) && m > 0;
    p.dir = Math.atan2(this.mouse.wy - p.y, this.mouse.wx - p.x);
    if (this.mouse.down && p.wdef().auto) this.tryFire(p);
  },

  /* ---------- combat ---------- */
  volAt(x, y) {
    const d = dist(x, y, this.cam.x, this.cam.y);
    return Math.pow(clamp(1 - d / 1150, 0, 1), 1.4);
  },
  currentSpread() {
    const p = this.player;
    if (!p) return 0;
    const wd = p.wdef();
    if (wd.melee) return 0;
    return wd.spread * ((p.mvx || p.mvy) ? 1.5 : 1) * (p.sprint ? 1.4 : 1);
  },
  addPing(x, y) { this.pings.push({ x, y, t: this.t }); if (this.pings.length > 40) this.pings.shift(); },

  tryFire(a) {
    if (a.dead || a.landT > 0 || a.fireCd > 0 || a.reloadT > 0) return;
    if (a.healKind && a.isPlayer) a.cancelHeal();
    const wd = a.wdef();
    if (wd.melee) {
      a.fireCd = wd.cd;
      AudioSys.melee(this.volAt(a.x, a.y));
      for (const t of this.actors) {
        if (t === a || t.dead || t.landT > 0) continue;
        const d = dist(a.x, a.y, t.x, t.y);
        if (d < wd.range + t.r && Math.abs(angDiff(a.dir, Math.atan2(t.y - a.y, t.x - a.x))) < 1.05)
          this.applyDamage(t, wd.dmg, a, 'FISTS');
      }
      return;
    }
    const w = a.wep();
    if (!w) return;
    if (w.mag <= 0) {
      if (a.isPlayer) AudioSys.empty();
      a.startReload();
      return;
    }
    w.mag--;
    a.fireCd = wd.cd;
    const moving = a.mvx || a.mvy;
    const spread = wd.spread * (moving ? 1.5 : 1) * (a.sprint ? 1.4 : 1) * (a.isPlayer ? 1 : 1.35 - a.skill * 0.5);
    const n = wd.pellets || 1;
    for (let i = 0; i < n; i++) {
      const ang = a.dir + rand(-1, 1) * (spread / 2) * Math.PI / 180;
      const sp = a.x + Math.cos(a.dir) * 20, sy = a.y + Math.sin(a.dir) * 20;
      this.bullets.push({
        x: sp, y: sy, vx: Math.cos(ang) * wd.speed, vy: Math.sin(ang) * wd.speed,
        dmg: wd.dmg, range: wd.range * rand(0.95, 1.05), traveled: 0,
        shooter: a, wname: wd.name, pellet: !!wd.pellets,
      });
    }
    AudioSys.shot(wd.cls, this.volAt(a.x, a.y));
    for (let i = 0; i < 3; i++)
      this.parts.push({ x: a.x + Math.cos(a.dir) * 22, y: a.y + Math.sin(a.dir) * 22, vx: Math.cos(a.dir) * rand(40, 160) + rand(-40, 40), vy: Math.sin(a.dir) * rand(40, 160) + rand(-40, 40), life: rand(0.06, 0.14), maxLife: 0.14, size: rand(2, 4), color: '#ffd873' });
    if (a.isPlayer) this.shake = Math.min(6, this.shake + (wd.cls === 'sniper' ? 4.5 : wd.cls === 'shotgun' ? 3.5 : 1.3));
    this.addPing(a.x, a.y);
    // nearby idle bots investigate the sound
    for (const b of this.bots) {
      if (b === a || b.dead || b.enemy || b.landT > 0) continue;
      if (dist2(b.x, b.y, a.x, a.y) < 430 * 430) { b.movePt = { x: a.x, y: a.y }; b.movePtT = 7; }
    }
  },

  botFire(b, e, d) {
    const w = b.wep();
    if (!w) { if (d < 52) this.tryFire(b); return; }
    const wd = WEAPONS[w.id];
    if (w.mag <= 0) {
      if (b.ammo[wd.ammo] > 0) b.startReload();
      else {
        const other = b.slots[1 - b.slot];
        if (other && other.mag > 0) { b.slot = 1 - b.slot; b.reloadT = 0; }
      }
      return;
    }
    const tt = d / wd.speed;
    const ax = e.x + e.vx * tt * 0.8, ay = e.y + e.vy * tt * 0.8;
    const err = (1 - b.skill) * 0.17 + d / 5500;
    b.dir = Math.atan2(ay - b.y, ax - b.x) + rand(-err, err);
    this.tryFire(b);
    if (wd.auto && Math.random() < 0.5) b.fireCd += rand(0.25, 0.6);
  },

  updateBullets(dt) {
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const b = this.bullets[i];
      const ex = b.x + b.vx * dt, ey = b.y + b.vy * dt;
      const segLen = dist(b.x, b.y, ex, ey);
      let bestT = 1, hitActor = null;
      const ray = WORLD.raycast(b.x, b.y, ex, ey);
      if (ray) bestT = ray.t;
      for (const a of this.actors) {
        if (a.dead || a.landT > 0 || a === b.shooter) continue;
        const t = segCircle(b.x, b.y, ex, ey, a.x, a.y, a.r + 2);
        if (t >= 0 && t < bestT) { bestT = t; hitActor = a; }
      }
      const hitDist = bestT * segLen;
      if (b.traveled + hitDist > b.range) { // expires mid-flight
        const rem = (b.range - b.traveled) / (segLen || 1);
        b.x += (ex - b.x) * clamp(rem, 0, 1); b.y += (ey - b.y) * clamp(rem, 0, 1);
        this.bullets.splice(i, 1);
        continue;
      }
      b.traveled += hitDist;
      b.x += (ex - b.x) * bestT; b.y += (ey - b.y) * bestT;
      if (hitActor) {
        let dmg = b.dmg;
        if (b.pellet) dmg *= clamp(1 - (b.traveled - 110) / 420, 0.3, 1);
        this.applyDamage(hitActor, dmg, b.shooter, b.wname);
        if (b.shooter && b.shooter.isPlayer) { this.hitT = 0; AudioSys.hitMark(); }
        this.bullets.splice(i, 1);
        continue;
      }
      if (ray && bestT === ray.t) { // obstacle
        for (let p = 0; p < 4; p++)
          this.parts.push({ x: b.x, y: b.y, vx: rand(-140, 140), vy: rand(-140, 140), life: rand(0.1, 0.25), maxLife: 0.25, size: rand(1.5, 3), color: '#cfc7b2' });
        this.bullets.splice(i, 1);
        continue;
      }
      if (segLen < 0.001) this.bullets.splice(i, 1);
    }
  },

  applyDamage(t, dmg, shooter, wname) {
    if (t.dead || t.landT > 0 || t.spawnProt > 0) return;
    if (shooter && !shooter.isPlayer && !t.isPlayer) dmg *= 0.5; // slower bot-vs-bot attrition
    const red = Math.min(0.72, VEST_RED[t.vest] + HELM_RED[t.helm] * 0.55);
    const final = dmg * (1 - red);
    t.hp -= final;
    if (shooter) shooter.dmgDealt += final;
    for (let i = 0; i < 5; i++)
      this.parts.push({ x: t.x, y: t.y, vx: rand(-120, 120), vy: rand(-120, 120), life: rand(0.15, 0.35), maxLife: 0.35, size: rand(2, 3.5), color: '#a83232' });
    if (t.isPlayer) { this.dmgFlash = 1; this.shake = Math.min(8, this.shake + 2); AudioSys.hurt(); }
    else AudioSys.hit(this.volAt(t.x, t.y) * 0.5);
    if (t.hp <= 0) this.kill(t, shooter, wname);
    else if (!t.isPlayer && shooter && !t.enemy) {
      t.enemy = shooter; t.enemyVis = false;
      t.lastSeen = { x: shooter.x, y: shooter.y }; t.lastSeenT = this.t;
      t.aimT = rand(0.2, 0.5);
    }
  },

  kill(t, shooter, wname) {
    if (t.dead) return;
    t.dead = true; t.hp = 0;
    this.dropDeathLoot(t);
    this.crates.push({ x: t.x, y: t.y });
    this.addFeed(shooter, wname, t);
    if (shooter) {
      shooter.kills++;
      if (shooter.isPlayer) { AudioSys.kill(); this.toast(`You eliminated ${t.name}`); }
    }
    this.alive = this.actors.filter(a => !a.dead).length;
    if (t.isPlayer) {
      this.placement = this.alive + 1;
      this.killedBy = shooter ? `${shooter.name} — ${wname}` : 'BLUE ZONE';
      AudioSys.lose();
      setTimeout(() => this.showEnd(false), 1300);
    }
    // end conditions
    if (this.alive <= 1) {
      const winr = this.actors.find(a => !a.dead);
      if (winr && winr.isPlayer) { this.placement = 1; this.showEnd(true); AudioSys.win(); }
      else if (winr) {
        this.matchWinner = winr.name;
        if (this.endsShown) $('endSub').textContent = `${winr.name} won the match.`;
      }
    }
  },

  dropDeathLoot(t) {
    const drops = [];
    for (const s of t.slots) if (s) drops.push({ cat: 'weapon', id: s.id, count: s.mag });
    for (const type in t.ammo) if (t.ammo[type] > 0) drops.push({ cat: 'ammo', id: type, count: t.ammo[type] });
    for (const k in t.heals) if (t.heals[k] > 0) drops.push({ cat: 'heal', id: k, count: Math.min(t.heals[k], 3) });
    if (t.vest > 0) drops.push({ cat: 'vest', lvl: t.vest });
    if (t.helm > 0) drops.push({ cat: 'helm', lvl: t.helm });
    for (const d of drops) {
      const a = rand(TAU), r = rand(6, 36);
      const fp = WORLD.resolveFree(t.x + Math.cos(a) * r, t.y + Math.sin(a) * r);
      this.loot.push({ x: fp.x, y: fp.y, ...d, bob: rand(TAU) });
    }
  },

  pickupNearest() {
    const p = this.player;
    if (!p || p.dead) return;
    let best = null, bd = 1e9;
    for (const L of this.loot) {
      const d = dist2(L.x, L.y, p.x, p.y);
      if (d < 34 * 34 && d < bd) { bd = d; best = L; }
    }
    if (!best) return;
    const idx = this.loot.indexOf(best);
    let ok = true, label = '';
    if (best.cat === 'weapon') {
      let slot;
      if (!p.slots[0]) slot = 0;
      else if (!p.slots[1]) slot = 1;
      else {
        slot = p.slot < 0 ? 0 : p.slot;
        const old = p.slots[slot];
        this.loot.push({ x: p.x + rand(-16, 16), y: p.y + rand(-16, 16), cat: 'weapon', id: old.id, count: old.mag, bob: rand(TAU) });
      }
      p.slots[slot] = { id: best.id, mag: WEAPONS[best.id].mag };
      p.slot = slot;
      p.cancelHeal();
      label = WEAPONS[best.id].name;
    } else if (best.cat === 'ammo') {
      p.ammo[best.id] += best.count;
      label = `${best.count}× ${best.id}`;
    } else if (best.cat === 'heal') {
      p.heals[best.id] = Math.min(HEAL_CAPS[best.id], p.heals[best.id] + best.count);
      label = `${best.count}× ${HEALS[best.id].name}`;
    } else if (best.cat === 'vest' || best.cat === 'helm') {
      const cur = best.cat === 'vest' ? p.vest : p.helm;
      if (best.lvl <= cur) { this.toast('Already have better'); return; }
      if (cur > 0) this.loot.push({ x: p.x + rand(-16, 16), y: p.y + rand(-16, 16), cat: best.cat, lvl: cur, bob: rand(TAU) });
      if (best.cat === 'vest') p.vest = best.lvl; else p.helm = best.lvl;
      label = `Level ${['', 'I', 'II', 'III'][best.lvl]} ${best.cat === 'vest' ? 'Vest' : 'Helmet'}`;
    }
    if (ok) { this.loot.splice(idx, 1); AudioSys.pickup(); this.toast(`+ ${label}`); }
  },

  /* ---------- zone ---------- */
  safeCircle() {
    const z = this.zone;
    if ((z.mode === 'wait' || z.mode === 'shrink') && z.to) return { x: z.to.x, y: z.to.y, r: z.to.r };
    return { x: z.x, y: z.y, r: z.r };
  },
  pickTarget(i) {
    const z = this.zone;
    const nr = ZONE_R[i];
    const maxOff = (z.r - nr) * 0.7;
    const a = rand(TAU), d = Math.pow(Math.random(), 0.8) * maxOff;
    let cx = z.x + Math.cos(a) * d, cy = z.y + Math.sin(a) * d;
    cx = lerp(cx, WORLD.zoneStart.x, 0.12); cy = lerp(cy, WORLD.zoneStart.y, 0.12);
    cx = clamp(cx, nr * 0.4, WORLD.size - nr * 0.4);
    cy = clamp(cy, nr * 0.4, WORLD.size - nr * 0.4);
    z.from = { x: z.x, y: z.y, r: z.r };
    z.to = { x: cx, y: cy, r: nr };
  },
  updateZone(dt) {
    const z = this.zone;
    const spd = this.fast ? 6 : 1;
    if (z.mode === 'grace') {
      z.t -= dt;
      if (z.t <= 0) { z.phase = 0; this.pickTarget(0); z.mode = 'wait'; z.t = ZONE_WAIT[0] / spd; AudioSys.zone(); this.banner('BLUE ZONE INCOMING', 'get inside the white circle'); }
    } else if (z.mode === 'wait') {
      z.t -= dt;
      if (z.t <= 0) { z.mode = 'shrink'; z.t = ZONE_SHRINK[z.phase] / spd; AudioSys.zone(); this.banner('THE ZONE IS CLOSING', 'move to the safe area'); }
    } else if (z.mode === 'shrink') {
      z.t -= dt;
      const total = ZONE_SHRINK[z.phase] / spd;
      const p = clamp(1 - z.t / total, 0, 1);
      z.x = lerp(z.from.x, z.to.x, p); z.y = lerp(z.from.y, z.to.y, p); z.r = lerp(z.from.r, z.to.r, p);
      if (z.t <= 0) {
        z.phase++;
        if (z.phase < ZONE_R.length) { this.pickTarget(z.phase); z.mode = 'wait'; z.t = ZONE_WAIT[z.phase] / spd; }
        else { z.mode = 'done'; z.dps = ZONE_DPS[ZONE_DPS.length - 1]; this.banner('FINAL ZONE', 'no way out but through'); }
      }
    }
    z.dps = z.mode === 'done' ? ZONE_DPS[ZONE_DPS.length - 1]
      : z.phase >= 0 ? ZONE_DPS[Math.min(z.phase, ZONE_DPS.length - 1)] : 0;
    if (z.mode === 'off' || z.mode === 'grace') return;
    // damage tick
    this.zoneTick += dt;
    if (this.zoneTick >= 0.5) {
      this.zoneTick = 0;
      const amt = z.dps * 0.5;
      for (const a of this.actors) {
        if (a.dead || a.landT > 0) continue;
        if (dist(a.x, a.y, z.x, z.y) > z.r) {
          a.hp -= amt;
          if (a.hp <= 0) this.kill(a, null, 'BLUE ZONE');
        }
      }
    }
  },

  /* ---------- particles ---------- */
  updateParticles(dt) {
    for (let i = this.parts.length - 1; i >= 0; i--) {
      const p = this.parts[i];
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.vx *= 0.92; p.vy *= 0.92;
      p.life -= dt;
      if (p.life <= 0) this.parts.splice(i, 1);
    }
  },

  /* ---------- HUD ---------- */
  banner(main, sub) {
    const el = $('banner');
    $('bannerMain').textContent = main;
    $('bannerSub').textContent = sub || '';
    el.classList.add('show');
    clearTimeout(this._bt);
    this._bt = setTimeout(() => el.classList.remove('show'), 2600);
  },
  toast(text) {
    const el = $('toast');
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => el.classList.remove('show'), 1800);
  },
  addFeed(shooter, wname, victim) {
    const feed = $('killfeed');
    const div = document.createElement('div');
    div.className = 'feeditem';
    const vn = `<b class="${victim.isPlayer ? 'me' : ''}">${victim.name}</b>`;
    if (shooter) {
      div.innerHTML = `<b class="${shooter.isPlayer ? 'me' : ''}">${shooter.name}</b><span class="wpn">${wname}</span>${vn}`;
    } else {
      div.innerHTML = `<b class="zn">BLUE ZONE</b><span class="wpn">✕</span>${vn}`;
    }
    feed.prepend(div);
    while (feed.children.length > 6) feed.lastChild.remove();
    setTimeout(() => div.remove(), 6500);
  },
  updateHUD() {
    const p = this.player;
    $('aliveN').textContent = this.alive;
    $('killsN').textContent = p ? p.kills : 0;
    const z = this.zone, spd = this.fast ? 6 : 1;
    const zt = $('zoneMsg');
    if (z.mode === 'off' || z.mode === 'grace') zt.textContent = z.mode === 'grace' ? `BLUE ZONE IN ${fmtTime(z.t)}` : 'WAITING FOR DROP';
    else if (z.mode === 'wait') zt.textContent = `ZONE CLOSES IN ${fmtTime(z.t * spd)}`;
    else if (z.mode === 'shrink') zt.textContent = `ZONE CLOSING`;
    else zt.textContent = 'FINAL ZONE';
    if (p) {
      const hp = Math.max(0, Math.round(p.hp));
      $('healthFill').style.width = hp + '%';
      $('healthFill').style.background = hp > 60 ? '#6fc76a' : hp > 25 ? '#e8b13c' : '#d3452f';
      $('healthNum').textContent = hp;
      $('boostFill').style.width = clamp(p.boost, 0, 100) + '%';
      $('armorChips').textContent =
        (p.vest ? `VEST ${['', 'I', 'II', 'III'][p.vest]}  ` : '') + (p.helm ? `HELM ${['', 'I', 'II', 'III'][p.helm]}` : '');
      for (const [i, elId] of [[0, 'slot0'], [1, 'slot1']]) {
        const el = $(elId), w = p.slots[i];
        el.classList.toggle('active', p.slot === i);
        if (w) {
          const d = WEAPONS[w.id];
          el.querySelector('.wname').textContent = d.name;
          el.querySelector('.wname').style.color = RARITY_COLORS[d.rarity];
          el.querySelector('.wammo').textContent = `${w.mag} / ${p.ammo[d.ammo]}`;
        } else {
          el.querySelector('.wname').textContent = '—';
          el.querySelector('.wname').style.color = '#777';
          el.querySelector('.wammo').textContent = '';
        }
      }
      $('hBand').textContent = p.heals.bandage;
      $('hAid').textContent = p.heals.firstaid + p.heals.medkit;
      $('hDrink').textContent = p.heals.drink;
      // prompt
      let prompt = '', bd = 1e9;
      for (const L of this.loot) {
        const d = dist2(L.x, L.y, p.x, p.y);
        if (d < 34 * 34 && d < bd) {
          bd = d;
          prompt = '[E] ' + (L.cat === 'weapon' ? WEAPONS[L.id].name
            : L.cat === 'ammo' ? `${L.count}× ${L.id} ammo`
            : L.cat === 'heal' ? HEALS[L.id].name
            : `Lvl ${['', 'I', 'II', 'III'][L.lvl]} ${L.cat}`);
        }
      }
      $('prompt').textContent = prompt;
      $('action').textContent = p.reloadT > 0 ? 'RELOADING…' : p.healKind ? 'USING ' + HEALS[p.healKind].name.toUpperCase() + '…' : '';
    }
    // vignettes
    $('vignette').style.opacity = this.dmgFlash * 0.85;
    const outside = p && !p.dead && this.zone.mode !== 'off' && this.zone.mode !== 'grace' && dist(p.x, p.y, this.zone.x, this.zone.y) > this.zone.r;
    $('zonevign').style.opacity = outside ? 0.7 : 0;
    $('lowhp').style.opacity = p && !p.dead && p.hp < 30 ? 0.35 + Math.sin(this.t * 6) * 0.15 : 0;
  },

  showEnd(win) {
    if (this.endsShown && !win) return;
    this.endsShown = true;
    this.state = 'over';
    $('endTitle').textContent = win ? 'WINNER WINNER FONDUE DINNER!' : 'ELIMINATED';
    $('endTitle').style.color = win ? '#e8b13c' : '#d3452f';
    $('endPlace').textContent = `#${win ? 1 : this.placement} / 40`;
    const p = this.player;
    $('endStats').innerHTML = p ? `Kills <b>${p.kills}</b> &nbsp;·&nbsp; Damage <b>${Math.round(p.dmgDealt)}</b> &nbsp;·&nbsp; Survived <b>${fmtTime(this.matchT)}</b>` : '';
    $('endKiller').textContent = win ? 'Last one standing in Genève.' : `Finished off by ${this.killedBy}`;
    $('endSub').textContent = this.matchWinner ? `${this.matchWinner} won the match.` : (win ? '' : 'The match continues behind this panel…');
    $('endScreen').classList.remove('hidden');
    if (win) for (let i = 0; i < 70; i++)
      this.parts.push({ x: p.x + rand(-60, 60), y: p.y + rand(-60, 60), vx: rand(-200, 200), vy: rand(-260, 80), life: rand(0.6, 1.4), maxLife: 1.4, size: rand(2, 5), color: pick(['#d3452f', '#e8b13c', '#fff', '#6fc76a']) });
  },

  togglePause(on) {
    if (this.state !== 'playing' && this.state !== 'dropping') return;
    this.paused = on === undefined ? !this.paused : on;
    $('pauseScreen').classList.toggle('hidden', !this.paused);
  },

  /* ---------- input ---------- */
  bindInput() {
    const cv = this.canvas;
    window.addEventListener('keydown', e => {
      if (e.code === 'Tab' || e.code === 'Space') e.preventDefault();
      this.keys[e.code] = true;
      if (e.repeat) return;
      if (e.code === 'Escape') {
        if (this.bigmapMode === 'view') this.closeBigmap();
        else if (!this.bigmapMode) this.togglePause();
        return;
      }
      if (e.code === 'KeyM' || e.code === 'Tab') {
        if (this.state === 'playing' || this.state === 'over') {
          if (this.bigmapMode === 'view') this.closeBigmap();
          else if (!this.bigmapMode) this.openBigmap('view', 'M / TAB to close — the match keeps running!');
        }
        return;
      }
      const p = this.player;
      if (!p || p.dead || this.state !== 'playing') return;
      if (e.code === 'KeyR') p.startReload();
      else if (e.code === 'KeyE') this.pickupNearest();
      else if (e.code === 'Digit1') p.switchSlot(0);
      else if (e.code === 'Digit2') p.switchSlot(1);
      else if (e.code === 'Digit3') p.switchSlot(-1);
      else if (e.code === 'Digit4') {
        if (p.hp < 75) {
          if (p.heals.bandage > 0) p.startHeal('bandage');
          else if (p.heals.firstaid > 0) p.startHeal('firstaid');
          else if (p.heals.medkit > 0) p.startHeal('medkit');
          else this.toast('No heals');
        } else if (p.heals.drink > 0 && p.boost < 99) p.startHeal('drink');
        else if (p.heals.medkit > 0 && p.hp < 100) p.startHeal('medkit');
        else this.toast('Health full');
      }
      else if (e.code === 'Digit5') { if (p.heals.medkit > 0 && p.hp < 100) p.startHeal('medkit'); else this.toast('No med kit needed'); }
      else if (e.code === 'KeyF') { if (p.heals.drink > 0 && p.boost < 99) p.startHeal('drink'); else this.toast('No energy drink'); }
      else if (e.code === 'KeyV') this.toast(AudioSys.toggleMute() ? 'Sound OFF' : 'Sound ON');
    });
    window.addEventListener('keyup', e => { this.keys[e.code] = false; });
    window.addEventListener('blur', () => { this.keys = {}; if (this.state === 'playing') this.togglePause(true); });
    cv.addEventListener('mousemove', e => {
      const r = cv.getBoundingClientRect();
      this.mouse.x = e.clientX - r.left;
      this.mouse.y = e.clientY - r.top;
      this.mouse.wx = this.cam.x + (this.mouse.x - cv.clientWidth / 2) / this.cam.z;
      this.mouse.wy = this.cam.y + (this.mouse.y - cv.clientHeight / 2) / this.cam.z;
    });
    $('bigmap').addEventListener('mousemove', e => {
      const r = $('bigmap').getBoundingClientRect();
      const rect = this.bigmapRect;
      if (!rect) return;
      this.mouse.wx = (e.clientX - r.left - rect.ox) / rect.size * WORLD.size;
      this.mouse.wy = (e.clientY - r.top - rect.oy) / rect.size * WORLD.size;
    });
    cv.addEventListener('mousedown', e => {
      if (e.button !== 0) return;
      AudioSys.shot('pistol', 0); // unlock audio cheaply
      this.mouse.down = true;
      const p = this.player;
      if (p && !p.dead && this.state === 'playing' && !this.bigmapMode) this.tryFire(p);
    });
    window.addEventListener('mouseup', () => { this.mouse.down = false; });
    cv.addEventListener('contextmenu', e => e.preventDefault());
    cv.addEventListener('wheel', e => {
      if (this.player && this.state === 'playing') this.player.cycleSlot(e.deltaY > 0 ? 1 : -1);
    }, { passive: true });
    $('bigmap').addEventListener('click', () => {
      if (this.bigmapMode === 'drop') this.chooseDrop(this.mouse.wx, this.mouse.wy);
    });
  },
};

/* ---------- debug helpers (used during development/testing) ---------- */
window.G_debug = {
  win() { Game.bots.forEach(b => { if (!b.dead) Game.kill(b, null, 'DEBUG'); }); },
  ff(sec) { const n = Math.min(600, Math.floor(sec / 0.05)); for (let i = 0; i < n; i++) Game.update(0.05); },
  give(id) { if (Game.player) { Game.player.giveWeapon(id || 'sg550'); Game.player.ammo[WEAPONS[id || 'sg550'].ammo] += 180; } },
};

WORLD.build();
Game.init();
