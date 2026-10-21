'use strict';
/* ============================================================
   Weapons, heals, actors
   ============================================================ */
const WEAPONS = {
  fists:  { name: 'FISTS', melee: true, dmg: 18, cd: 0.42, range: 48, cls: 'fists', rarity: 0 },
  p92:    { name: 'P92',    ammo: '9mm', dmg: 16, cd: 0.24,  mag: 15, reload: 1.5, spread: 3.2, speed: 1500, range: 560,  auto: false, cls: 'pistol',  rarity: 0 },
  mp5:    { name: 'MP5',    ammo: '9mm', dmg: 11, cd: 0.088, mag: 30, reload: 2.0, spread: 5.2, speed: 1500, range: 500,  auto: true,  cls: 'smg',     rarity: 1 },
  m1014:  { name: 'M1014',  ammo: '12g', dmg: 9,  cd: 0.95,  mag: 6,  reload: 2.8, spread: 8.5, speed: 1250, range: 330,  auto: false, cls: 'shotgun', rarity: 2, pellets: 8 },
  sg550:  { name: 'SG 550', ammo: '5.56',dmg: 20, cd: 0.128, mag: 30, reload: 2.4, spread: 3.0, speed: 2200, range: 900,  auto: true,  cls: 'rifle',   rarity: 2 },
  zfk55:  { name: 'ZfK 55', ammo: '7.62',dmg: 84, cd: 1.75,  mag: 5,  reload: 3.4, spread: 0.5, speed: 2900, range: 1500, auto: false, cls: 'sniper',  rarity: 3 },
};
const RARITY_COLORS = ['#b9bec6', '#63c76a', '#4aa3e8', '#c85ae8'];
const AMMO_COLORS = { '9mm': '#d8c26a', '5.56': '#c9784f', '7.62': '#9fc06a', '12g': '#c04f4f' };
const AMMO_PICK = { '9mm': 30, '5.56': 30, '7.62': 10, '12g': 8 };
const HEALS = {
  bandage:  { name: 'Bandage',       dur: 3.0 },
  firstaid: { name: 'First Aid Kit', dur: 5.0 },
  medkit:   { name: 'Med Kit',       dur: 7.5 },
  drink:    { name: 'Energy Drink',  dur: 2.2 },
};
const HEAL_CAPS = { bandage: 15, firstaid: 6, medkit: 3, drink: 10 };
const VEST_RED = [0, 0.30, 0.40, 0.55];
const HELM_RED = [0, 0.20, 0.30, 0.45];
const WLEN = { fists: 0, pistol: 16, smg: 22, shotgun: 24, rifle: 27, sniper: 32 };
const DROP_T = 3.0;

class Actor {
  constructor(x, y, isPlayer, name) {
    this.x = x; this.y = y; this.r = 14; this.dir = 0;
    this.hp = 100; this.boost = 0;
    this.mvx = 0; this.mvy = 0; this.vx = 0; this.vy = 0;
    this.sprint = false; this.speed = isPlayer ? 235 : 225;
    this.slots = [null, null]; this.slot = -1;      // -1 = fists
    this.ammo = { '9mm': 0, '5.56': 0, '7.62': 0, '12g': 0 };
    this.heals = { bandage: 0, firstaid: 0, medkit: 0, drink: 0 };
    this.vest = 0; this.helm = 0;
    this.fireCd = 0; this.reloadT = 0; this.reloadD = 0;
    this.healT = 0; this.healD = 0; this.healKind = null;
    this.dead = false; this.kills = 0; this.dmgDealt = 0;
    this.landT = isPlayer ? DROP_T : 0;             // >0 while parachuting
    this.spawnProt = 1.0;
    this.isPlayer = isPlayer; this.name = name;
    this.color = isPlayer ? '#2f6fb4' : `hsl(${Math.floor(rand(360))} 45% 45%)`;
    // AI scratch state
    this.enemy = null; this.enemyVis = false; this.lastSeen = null; this.lastSeenT = -99;
    this.aimT = 0; this.losT = rand(0.25); this.strafe = 1; this.strafeT = 0;
    this.movePt = null; this.movePtT = 0; this.lootT = rand(0.4);
    this.stuckT = 0; this.avoidT = 0; this.avoidSide = 1;
    this.skill = rand(0.45, 1); this.healCd = rand(2);
    this.fallingFrom = null;
  }
  wep() { return this.slot >= 0 ? this.slots[this.slot] : null; }
  wdef() { const w = this.wep(); return w ? WEAPONS[w.id] : WEAPONS.fists; }
  totalAmmo(type) { return this.ammo[type] | 0; }

  giveWeapon(id) { // used by debug / initial gear
    const slot = this.slots[0] ? (this.slots[1] ? this.slot < 0 ? 0 : this.slot : 1) : 0;
    this.slots[slot] = { id, mag: WEAPONS[id].mag };
    this.slot = slot;
  }

  switchSlot(i) {
    if (i === this.slot) return;
    if (i >= 0 && !this.slots[i]) return;
    this.slot = i;
    this.reloadT = 0; this.fireCd = Math.max(this.fireCd, 0.25);
    this.cancelHeal();
    AudioSys.swap();
  }
  cycleSlot(dir) {
    const avail = [];
    if (this.slots[0]) avail.push(0);
    if (this.slots[1]) avail.push(1);
    if (avail.length === 0) return;
    avail.push(-1); // fists always available
    let idx = avail.indexOf(this.slot);
    idx = (idx + dir + avail.length) % avail.length;
    this.switchSlot(avail[idx]);
  }

  startReload() {
    const w = this.wep();
    if (!w || this.reloadT > 0) return;
    const d = WEAPONS[w.id];
    if (w.mag >= d.mag || this.ammo[d.ammo] <= 0) return;
    this.cancelHeal();
    this.reloadT = this.reloadD = d.reload;
    if (this.isPlayer) AudioSys.reload();
  }
  startHeal(kind) {
    if (this.healKind || this.heals[kind] <= 0) return false;
    if (kind === 'bandage' && this.hp >= 75) return false;
    if (kind === 'firstaid' && this.hp >= 75) return false;
    if (kind === 'medkit' && this.hp >= 100) return false;
    if (kind === 'drink' && this.boost >= 99) return false;
    this.reloadT = 0;
    this.healKind = kind; this.healT = 0; this.healD = HEALS[kind].dur;
    return true;
  }
  cancelHeal() { this.healKind = null; }
}
