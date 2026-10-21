import * as THREE from 'three';
import { World } from './world.js';
import { Taxi, Input } from './taxi.js';
import { Effects } from './effects.js';
import { GameAudio } from './audio.js';
import { MiniMap } from './minimap.js';
import {
  LANDMARKS, LANDMARK_BY_ID, PLACES, RANKS, realDistance, worldDistance,
} from './data.js';
import { createMinifig, makeTextTexture } from './lego.js';

const SHIFT_SECONDS = 95;
const PASSENGER_NAMES = [
  'Camille', 'Noah', 'Léa', 'Émile', 'Sofia', 'Louis', 'Anna', 'Gabriel',
  'Jade', 'Luca', 'Manon', 'Théo', 'Chloé', 'Raphaël', 'Inès', 'Maxime',
  'Elena', 'Basile', 'Zoé', 'Arthur',
];
const SHIRTS = [0x347abb, 0xc25d48, 0x5b8b5c, 0xd1a53a, 0x7c62a2, 0x3e7e81, 0xd37d9c, 0x556c8a];
const PANTS = [0x2b3d52, 0x39485a, 0x5c4b39, 0x304444, 0x5a3a45];
const HAIRS = [0x4b2d1d, 0x2b211b, 0x8b5b34, 0xc39453, 0x312d28, 0x6d4024];

function $(sel) { return document.querySelector(sel); }
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function pick(arr, rng = Math.random) { return arr[Math.floor(rng() * arr.length)]; }
function normalizeAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}
function formatTime(seconds) {
  const s = Math.max(0, Math.ceil(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}
function formatDistance(worldUnits) {
  const m = worldUnits * 10;
  if (m < 950) return `${Math.max(10, Math.round(m / 10) * 10)} m`;
  return `${(m / 1000).toFixed(1)} km`;
}
function formatCash(n) { return `CHF ${Math.round(n).toLocaleString('de-CH')}`; }

class CrazyTaxiGame {
  constructor() {
    this.canvas = $('#game');
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.4, 900);
    this.clock = new THREE.Clock();
    this.state = {
      mode: 'loading',
      timeLeft: SHIFT_SECONDS,
      cash: 0,
      fares: 0,
      combo: 1,
      bestCombo: 1,
      visited: new Set(),
      target: null,
      targetMode: 'pickup',
      targetStartDistance: 1,
      fare: null,
      fareName: null,
      elapsed: 0,
      introTime: 0,
      cameraFar: false,
      respawning: 0,
      lastSafe: { x: PLACES.start.x, z: PLACES.start.z, heading: PLACES.start.heading },
      best: this._loadBest(),
      transitioning: 0,
    };
    this.cameraShake = 0;
    this.cameraLook = new THREE.Vector3();
    this.camLookGoal = new THREE.Vector3();
    this.lastBeepSecond = null;
    this.toastTimeout = null;
    this.pickupActor = null;
    this.pickupBubble = null;
    this.farewellActors = [];
    this.isTouch = window.matchMedia('(pointer: coarse)').matches;
    this._safeSampleTimer = 0;
    this._shiftToken = 0;

    this._setupRenderer();
    this._bindUI();
    this._buildStampPreview();
    this._init();
  }

  _loadBest() {
    try { return Math.max(0, Number(localStorage.getItem('crazyTaxiGenevaBest') || 0)); } catch { return 0; }
  }
  _saveBest(value) {
    try { localStorage.setItem('crazyTaxiGenevaBest', String(Math.round(value))); } catch { /* private mode */ }
  }

  _setupRenderer() {
    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas, antialias: true, powerPreference: 'high-performance',
      });
    } catch (err) {
      console.error(err);
      document.getElementById('unsupported')?.classList.remove('is-hidden');
      document.getElementById('loader')?.classList.add('done');
      this.state.mode = 'unsupported';
      return;
    }
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.isTouch ? 1.3 : 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.16;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.needsUpdate = true;
    this.shadowFrame = 0;
    window.addEventListener('resize', () => this._resize());
    this._resize();
  }

  _resize() {
    const w = window.innerWidth, h = window.innerHeight;
    if (!this.renderer) return;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.isTouch ? 1.3 : 1.5));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  async _init() {
    if (this.state.mode === 'unsupported') return;
    try {
      await document.fonts.ready;
      // Let the loader paint before the city is assembled.
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      this.world = new World(this.scene);
      this.taxi = new Taxi(this.scene, this.world);
      this.taxi.position.set(PLACES.start.x, 0, PLACES.start.z);
      this.taxi.heading = PLACES.start.heading;
      this.taxi.rideHeight = 0.08;
      this.taxi.mesh.position.set(PLACES.start.x, 0.08, PLACES.start.z);
      this.taxi.mesh.rotation.y = -PLACES.start.heading;
      this.taxi.boost = 48;
      this.effects = new Effects(this.scene);
      this.audio = new GameAudio();
      this.audio.muted = false;
      this.minimap = new MiniMap($('#minimap'));
      this._wireTaxi();
      this._setIntroCamera(true);
      this.world.setLabelsVisible(false);
      this.world.updateLabels(this.camera, null, false);
      this.world.setTarget(null);
      this._updateHighScoreUI();
      this._bindGameplayUI();
      this.state.mode = 'intro';
      this.clock.start();
      this._animate();
      setTimeout(() => document.getElementById('loader')?.classList.add('done'), 380);
      window.__CRAZY_TAXI__ = this;
    } catch (err) {
      console.error('Failed to build Geneva', err);
      const loader = document.getElementById('loader');
      if (loader) {
        loader.querySelector('p').textContent = 'THE BRICKS WOULD NOT SNAP.';
        loader.querySelector('span').textContent = 'Check the console for details, then refresh.';
      }
    }
  }

  _wireTaxi() {
    this.taxi.onCollision = (intensity, hit) => {
      this.audio?.crash(intensity);
      this.effects?.sparks(
        this.taxi.position.x + Math.sin(this.taxi.heading) * 2.2,
        0.75,
        this.taxi.position.z - Math.cos(this.taxi.heading) * 2.2,
        10 + Math.round(intensity * 14),
      );
      this.cameraShake = Math.max(this.cameraShake, intensity * 1.1);
    };
    this.taxi.onBoostStart = () => this.audio?.boost();
    this.taxi.onJump = () => {
      this.cameraShake = Math.max(this.cameraShake, 0.3);
      this.showToast('CRAZY MOVE', 'NICE AIR!', '+ brick boost on landing', 'good', 1300);
    };
    this.taxi.onLand = () => {
      this.cameraShake = Math.max(this.cameraShake, 0.32);
      this.effects?.burst(this.taxi.position.x, 0.2, this.taxi.position.z, [0xe1d7c1, 0xbcb4a2], 12, 3.5);
      this.audio?.crash(0.28);
    };
  }

  _bindUI() {
    document.getElementById('start-btn')?.addEventListener('click', () => {
      this.audio?.init();
      this.audio?.resume();
      this.startShift();
    });
    document.getElementById('restart-btn')?.addEventListener('click', () => {
      this.audio?.init();
      this.audio?.resume();
      this.startShift();
    });
    document.getElementById('resume-btn')?.addEventListener('click', () => this.togglePause(false));
    document.getElementById('menu-btn')?.addEventListener('click', () => this.returnToMenu());
    document.getElementById('audio-btn')?.addEventListener('click', () => this.toggleMute());
    document.getElementById('pause-audio-btn')?.addEventListener('click', () => this.toggleMute());
    document.getElementById('pause-btn')?.addEventListener('click', () => this.togglePause(true));
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyR' && this.state.mode === 'playing') { e.preventDefault(); this._resetTaxiToSafe(); }
      if (e.code === 'Enter') {
        if (this.state.mode === 'gameover') {
          e.preventDefault(); this.audio?.init(); this.audio?.resume(); this.startShift();
        } else if (this.state.mode === 'intro') {
          e.preventDefault(); this.audio?.init(); this.audio?.resume(); this.startShift();
        }
      }
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state.mode === 'playing') this.togglePause(true);
    });
  }

  _bindGameplayUI() {
    this.input = new Input();
    this.input.onPause = () => this.togglePause();
    this.input.onHorn = () => this.audio?.horn();
    this.input.onCamera = (action) => {
      if (action === 'mute') this.toggleMute();
      if (action === 'camera' && this.state.mode === 'playing') this.state.cameraFar = !this.state.cameraFar;
    };
    $('#minimap').addEventListener('click', () => this.togglePause(true));
  }

  _buildStampPreview() {
    const tray = document.getElementById('stamp-tray');
    if (tray) {
      tray.innerHTML = '';
      const trayLabel = document.createElement('span');
      trayLabel.className = 'stamp-tray-label';
      trayLabel.innerHTML = '<b>CITY</b><em>STAMPS</em>';
      tray.appendChild(trayLabel);
      for (const lm of LANDMARKS) {
        const el = document.createElement('span');
        el.className = 'stamp';
        el.dataset.id = lm.id;
        el.title = lm.name;
        el.textContent = lm.icon;
        tray.appendChild(el);
      }
    }
    const final = document.getElementById('final-stamp-list');
    if (final) {
      final.innerHTML = '';
      for (const lm of LANDMARKS) {
        const el = document.createElement('span');
        el.className = 'stamp';
        el.dataset.id = lm.id;
        el.innerHTML = `<i>${lm.icon}</i>${lm.short}`;
        final.appendChild(el);
      }
    }
  }

  _updateHighScoreUI() {
    const el = document.getElementById('intro-high-score');
    if (el) el.textContent = this.state.best > 0 ? `YOUR BEST: ${formatCash(this.state.best)}` : '';
  }

  startShift() {
    if (!this.taxi || !this.world) return;
    const wasIntro = this.state.mode === 'intro';
    this.state.mode = 'playing';
    this.hideTransientUI();
    document.body.classList.add('touch-playing');
    this._shiftToken += 1;
    this.state.timeLeft = SHIFT_SECONDS;
    this.state.cash = 0;
    this.state.fares = 0;
    this.state.combo = 1;
    this.state.bestCombo = 1;
    this.state.visited = new Set();
    this.state.allStamped = false;
    this.state.fare = null;
    this.state.fareName = null;
    this.state.respawning = 0;
    this.state.transitioning = 1.6;
    this.state.elapsed = 0;
    this.state.targetStartDistance = 1;
    this.state.lastSafe = { x: PLACES.start.x, z: PLACES.start.z, heading: PLACES.start.heading };
    this.lastBeepSecond = null;
    this.cameraShake = 0;
    this.taxi.reset(PLACES.start);
    this.taxi.boost = 48;
    this.taxi.distanceTravelled = 0;
    this.taxi.setPassengerVisible(false);
    this.taxi.rideHeight = 0.08;
    this.taxi.mesh.position.y = 0.08;
    this.input?.keys.clear();
    this.effects?.resetSkids();
    this.world.resetCollectibles();
    this._clearPickupActor();
    this._clearFarewellActors();
    this.world.setTarget(null);
    this.updateStampUI();
    this._updateHUD(true);
    this.spawnPickup('cornavin');
    this.hud = document.getElementById('hud');
    this.hud?.classList.remove('is-hidden');
    const intro = document.getElementById('intro');
    if (wasIntro) {
      intro.classList.add('leaving');
      setTimeout(() => intro.classList.add('is-hidden'), 650);
    }
    document.getElementById('gameover')?.classList.add('is-hidden');
    document.getElementById('pause')?.classList.add('is-hidden');
    document.activeElement?.blur?.();
    this.clock.getDelta();
    this.showToast('SHIFT STARTED', 'FIND YOUR FIRST FARE', 'Gare Cornavin · roll up slowly', 'good', 2600);
  }

  returnToMenu() {
    this.state.mode = 'intro';
    document.body.classList.remove('touch-playing');
    this.hideTransientUI();
    this.state.introTime = 0;
    this.state.transitioning = 0;
    this.input?.keys.clear();
    this._clearPickupActor();
    this._clearFarewellActors();
    this.world?.setTarget(null);
    this.state.target = null;
    this.state.fare = null;
    this.hud?.classList.add('is-hidden');
    document.getElementById('gameover')?.classList.add('is-hidden');
    document.getElementById('pause')?.classList.add('is-hidden');
    const intro = document.getElementById('intro');
    intro?.classList.remove('is-hidden', 'leaving');
    this.taxi?.reset(PLACES.start);
    if (this.taxi) {
      this.taxi.rideHeight = 0.08;
    this.taxi.mesh.position.y = 0.08;
      this.taxi.setPassengerVisible(false);
      this.taxi.velocity.set(0, 0);
    }
    this.taxi && (this.taxi.boost = 48);
    this.world?.setLabelsVisible(false);
    this._setIntroCamera(true);
    this._updateHighScoreUI();
    this.audio?.updateEngine(0, 0, false, false);
    this.audio?.resume();
  }

  toggleMute() {
    if (!this.audio) {
      this.audio = new GameAudio();
      this.audio.init();
    }
    this.audio.init();
    const muted = this.audio.toggleMuted();
    document.getElementById('audio-btn')?.classList.toggle('muted', muted);
    document.getElementById('audio-btn')?.setAttribute('aria-label', muted ? 'Unmute sound' : 'Mute sound');
    if (this.state.mode === 'playing' || this.state.mode === 'paused') {
      this.showToast(muted ? 'SOUND OFF' : 'SOUND ON', muted ? 'Silent running' : 'Geneva has a soundtrack', '', 'good', 1100);
    }
  }

  hideTransientUI() {
    const toast = document.getElementById('toast');
    if (toast) toast.classList.remove('show');
    clearTimeout(this.toastTimeout);
    document.getElementById('cash-float-layer')?.replaceChildren();
  }

  togglePause(force = null) {
    if (this.state.mode === 'playing' && force !== false) {
      this.state.mode = 'paused';
      document.body.classList.remove('touch-playing');
      this.input?.keys.clear();
      this.hideTransientUI();
      this.audio?.pause();
      document.getElementById('pause-cash').textContent = formatCash(this.state.cash);
      document.getElementById('pause-fares').textContent = String(this.state.fares);
      document.getElementById('pause-time').textContent = formatTime(this.state.timeLeft);
      document.getElementById('pause')?.classList.remove('is-hidden');
    } else if (this.state.mode === 'paused' && force !== true) {
      this.state.mode = 'playing';
      document.body.classList.add('touch-playing');
      document.getElementById('pause')?.classList.add('is-hidden');
      this.audio?.resume();
      document.activeElement?.blur?.();
      this.clock.getDelta();
    }
  }

  _chooseDestination(pickupId) {
    const unvisited = LANDMARKS.filter((l) => !this.state.visited.has(l.id) && l.id !== pickupId);
    if (this.state.fares === 0) {
      const jardin = LANDMARK_BY_ID.jardin;
      if (jardin && jardin.id !== pickupId) return jardin;
    }
    let pool = unvisited;
    if (!pool.length) pool = LANDMARKS.filter((l) => l.id !== pickupId);
    // Keep early trips lively: avoid sending the very first shift straight to the far north.
    if (this.state.fares < 2) pool = pool.filter((l) => l.id !== 'chair');
    if (!pool.length) pool = LANDMARKS.filter((l) => l.id !== pickupId);
    return pick(pool);
  }

  _chooseNextPickup(excludeId) {
    const candidates = LANDMARKS.filter((l) => l.id !== excludeId);
    const ranked = candidates
      .map((l) => ({ l, d: Math.hypot(l.position.x - LANDMARK_BY_ID[excludeId].position.x, l.position.z - LANDMARK_BY_ID[excludeId].position.z) }))
      .sort((a, b) => a.d - b.d);
    const near = ranked.filter((c) => c.d < 130).slice(0, 5);
    return (near.length ? pick(near) : pick(ranked)).l;
  }

  spawnPickup(id) {
    if (!this.world) return;
    const lm = LANDMARK_BY_ID[id];
    if (!lm) return;
    this._clearPickupActor();
    const shirt = pick(SHIRTS);
    const fig = createMinifig({
      shirt, pants: pick(PANTS), hair: pick(HAIRS), cap: Math.random() > 0.7,
      waving: true, suitcase: Math.random() > 0.55, scale: 1.0,
    });
    const actorY = lm.id === 'jet' ? 0.29 : lm.id === 'bains' ? 0.16 : 0.15;
    fig.position.set(lm.stand.x, actorY, lm.stand.z);
    const faceAngle = Math.atan2(lm.position.x - lm.stand.x, -(lm.position.z - lm.stand.z));
    fig.rotation.y = faceAngle;
    fig.userData.baseY = actorY;
    this.scene.add(fig);
    const bubbleTex = makeTextTexture('!', {
      width: 192, height: 192, fontSize: 142, color: '#102436', bg: 'rgba(25,184,166,.97)',
      border: 'rgba(255,255,255,.6)', radius: 54, padding: 10,
    });
    const bubble = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTex, transparent: true, depthWrite: false, depthTest: true }));
    bubble.position.set(0, 4.1, 0);
    bubble.scale.set(2.1, 2.1, 1);
    fig.add(bubble);
    this.pickupActor = fig;
    this.pickupBubble = bubble;
    this.state.pickupName = pick(PASSENGER_NAMES);
    this.setTarget('pickup', lm);
    this.effects?.burst(lm.stand.x, 0.4, lm.stand.z, [0x19b8a6, 0xffd21f, 0xffffff], 14, 4);
  }

  _clearPickupActor() {
    if (this.pickupActor) {
      this.scene.remove(this.pickupActor);
      if (this.pickupBubble?.material?.map) this.pickupBubble.material.map.dispose();
      this.pickupActor = null;
      this.pickupBubble = null;
    }
  }

  _spawnFarewell(lm, name) {
    const shirt = pick(SHIRTS);
    const fig = createMinifig({ shirt, pants: pick(PANTS), hair: pick(HAIRS), waving: true, suitcase: Math.random() > 0.65, scale: 0.95 });
    const actorY = lm.id === 'jet' ? 0.29 : lm.id === 'bains' ? 0.16 : 0.15;
    fig.position.set(lm.stand.x, actorY, lm.stand.z);
    fig.rotation.y = Math.PI;
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 180;
    const c = canvas.getContext('2d');
    c.fillStyle = 'rgba(255,249,233,.95)';
    c.beginPath(); c.roundRect(8, 8, 496, 164, 50); c.fill();
    c.fillStyle = '#102436'; c.font = '900 58px "Nunito Sans", sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText('MERCI!', 256, 95);
    const tex = new THREE.CanvasTexture(canvas); tex.colorSpace = THREE.SRGBColorSpace;
    const bubble = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    bubble.position.set(0, 3.5, 0);
    bubble.scale.set(2.4, 0.84, 1);
    fig.add(bubble);
    this.scene.add(fig);
    this.farewellActors.push({ mesh: fig, life: 2.4, bubble, baseY: actorY });
    this.effects?.burst(lm.position.x, 0.8, lm.position.z, [0xffd21f, 0xffffff, 0x19b8a6], 26, 7);
  }

  _clearFarewellActors() {
    for (const a of this.farewellActors) {
      this.scene.remove(a.mesh);
      if (a.bubble?.material?.map) a.bubble.material.map.dispose();
    }
    this.farewellActors = [];
  }

  setTarget(mode, lm) {
    this.state.target = lm || null;
    this.state.targetMode = mode;
    this.state.targetStartDistance = lm ? Math.max(1, Math.hypot(this.taxi.position.x - lm.position.x, this.taxi.position.z - lm.position.z)) : 1;
    this.world?.setTarget(lm?.id, mode);
  }

  _beginFare() {
    const lm = this.state.target;
    if (!lm || this.state.fare) return;
    const name = this.state.pickupName || pick(PASSENGER_NAMES);
    const destination = this._chooseDestination(lm.id);
    const realMeters = realDistance(lm, destination);
    const distanceWorld = worldDistance(lm.position, destination.position);
    this.state.fare = {
      name, pickupId: lm.id, destinationId: destination.id,
      realMeters, distanceWorld, startedAt: this.state.elapsed,
    };
    this.state.fareName = name;
    this.state.timeLeft = Math.max(this.state.timeLeft, 1.4);
    this._clearPickupActor();
    this.taxi.setPassengerVisible(true);
    this.audio?.pickup();
    this.effects?.burst(lm.position.x, 1.3, lm.position.z, [0x19b8a6, 0xffd21f, 0xffffff], 30, 6);
    this.setTarget('dropoff', destination);
    this.showToast('PASSENGER ON BOARD', `${name} → ${destination.name}`, destination.request, 'good', 3600);
    this._updateHUD(true);
  }

  _completeFare() {
    if (!this.state.fare) return;
    const fare = this.state.fare;
    const destination = LANDMARK_BY_ID[fare.destinationId];
    const actual = Math.max(0.5, this.state.elapsed - fare.startedAt);
    const par = 7 + fare.distanceWorld / 16;
    const good = actual <= par + 3;
    this.state.bestCombo = Math.max(this.state.bestCombo, this.state.combo);
    this.state.combo = good ? Math.min(5, this.state.combo + 1) : 1;
    const multiplier = 1 + (this.state.combo - 1) * 0.16;
    const baseFare = 16 + fare.realMeters * 0.033;
    const tip = Math.max(3, Math.round(Math.max(0, par + 8 - actual) * 4)) + (good ? 12 : 0);
    const fareCash = Math.round(baseFare * multiplier + tip);
    const timeBonus = Math.round(clamp(17 + fare.realMeters / 100 + this.state.combo * 1.5, 18, 38));
    this.state.cash += fareCash;
    this.state.fares += 1;
    this.state.visited.add(destination.id);
    this.state.timeLeft += timeBonus;
    this.state.fare = null;
    this.taxi.setPassengerVisible(false);
    this.audio?.dropoff();
    this.cameraShake = Math.max(this.cameraShake, 0.32);
    this.effects?.burst(destination.position.x, 1.1, destination.position.z, [0xffd21f, 0xffffff, 0xeb5545, 0x19b8a6], 42, 9);
    this._spawnFarewell(destination, fare.name);
    this._cashFloat(`+ CHF ${fareCash}`);
    this._showTimeBonus(timeBonus);
    this.updateStampUI();
    this.world.setTarget(null);
    this.state.target = null;
    this.showToast('FARE COMPLETE', `+ CHF ${fareCash}`, `${destination.name} · +${timeBonus}s · COMBO x${this.state.combo}`, 'cash', 2800);
    this._updateHUD(true);
    if (this.state.visited.size === 10 && !this.state.allStamped) {
      this.state.allStamped = true;
      this.state.cash += 250;
      this.state.timeLeft += 25;
      this._showTimeBonus(25);
      const token = this._shiftToken;
      setTimeout(() => {
        if (this.state.mode === 'playing' && token === this._shiftToken) {
          this.showToast('ALL 10 STAMPS', 'GENEVA IS YOURS', 'Collector bonus +CHF 250 · +25s', 'cash', 3400);
          this._cashFloat('+ CHF 250');
        }
      }, 2900);
    }
    // New customer, nearby — Crazy Taxi never stops for long.
    const next = this._chooseNextPickup(destination.id);
    const token = this._shiftToken;
    this.taxi.passengerMesh.visible = false;
    setTimeout(() => {
      if ((this.state.mode === 'playing' || this.state.mode === 'paused') && token === this._shiftToken) this.spawnPickup(next.id);
    }, 520);
  }

  _collectStuds() {
    if (!this.world?.collectibles) return;
    for (const c of this.world.collectibles) {
      if (!c.active) continue;
      const dx = this.taxi.position.x - c.x;
      const dz = this.taxi.position.z - c.z;
      if (dx * dx + dz * dz < 3.2 * 3.2) {
        c.active = false;
        this.state.cash += 2;
        this.taxi.addBoost(7);
        this.effects?.coinSparkle(c.x, c.baseY, c.z);
        this.audio?.coin();
      }
    }
  }

  _showTimeBonus(seconds) {
    const el = document.getElementById('timer-plus');
    if (!el) return;
    el.textContent = `+${seconds}s`;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
  }

  _cashFloat(text, worldY = 4) {
    const layer = document.getElementById('cash-float-layer');
    if (!layer) return;
    const v = new THREE.Vector3(this.taxi.position.x, worldY, this.taxi.position.z).project(this.camera);
    if (v.z > 1) return;
    const x = (v.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-v.y * 0.5 + 0.5) * window.innerHeight;
    const el = document.createElement('span');
    el.className = 'cash-float';
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    layer.appendChild(el);
    setTimeout(() => el.remove(), 1550);
  }

  showToast(kicker, title, sub = '', type = 'good', duration = 2200) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.replaceChildren();
    const k = document.createElement('span');
    k.className = 'toast-kicker';
    k.textContent = kicker;
    const t = document.createElement('span');
    t.className = 'toast-title';
    t.textContent = title;
    toast.append(k, t);
    if (sub) {
      const s = document.createElement('span');
      s.className = 'toast-sub';
      s.textContent = sub;
      toast.appendChild(s);
    }
    toast.className = `toast show ${type}`;
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  _resetTaxiToSafe() {
    if (!this.state.lastSafe || this.state.respawning > 0) return;
    this.state.timeLeft = Math.max(0, this.state.timeLeft - 2);
    this.taxi.reset(this.state.lastSafe);
    this.taxi.rideHeight = 0.08;
    this.taxi.mesh.position.y = 0.08;
    this.cameraShake = 0.3;
    this.showToast('UNSTUCK', 'BACK ON THE ROAD', '−2 seconds on the clock', 'warn', 1500);
  }

  _splash() {
    if (this.state.respawning > 0) return;
    this.state.respawning = 1.15;
    this.state.timeLeft = Math.max(0, this.state.timeLeft - 3);
    this.taxi.velocity.set(0, 0);
    this.effects?.splash(this.taxi.position.x, this.taxi.position.z);
    this.audio?.splash();
    this.cameraShake = 0.75;
    this.showToast('SPLASH!', 'TAXI OVERBOARD', 'Back to the last dry bit of Geneva · −3s', 'warn', 2000);
    this._updateHUD(true);
  }

  _checkProgress() {
    if (!this.state.target || this.state.fare === null && this.state.targetMode === 'dropoff') return;
    const lm = this.state.target;
    const dx = this.taxi.position.x - lm.position.x;
    const dz = this.taxi.position.z - lm.position.z;
    const dist = Math.hypot(dx, dz);
    const speed = this.taxi.speed;
    const slowEnough = speed < 6.4;
    if (this.state.targetMode === 'pickup') {
      if (dist < 8.0 && slowEnough) { this._beginFare(); return; }
    } else if (this.state.fare) {
      if (dist < 8.0 && slowEnough) { this._completeFare(); return; }
    }
    const hint = document.getElementById('zone-hint');
    const hintText = document.getElementById('zone-hint-text');
    if (hint && hintText) {
      if (dist < 22 && !slowEnough) {
        hint.classList.remove('is-hidden');
        hintText.textContent = this.state.targetMode === 'pickup' ? 'SLOW DOWN TO PICK UP' : 'SLOW DOWN TO DROP OFF';
      } else if (dist < 13 && slowEnough) {
        hint.classList.remove('is-hidden');
        hintText.textContent = this.state.targetMode === 'pickup' ? 'PULL IN TO COLLECT' : 'PULL IN TO DROP OFF';
      } else {
        hint.classList.add('is-hidden');
      }
    }
  }

  _updateHUD(force = false) {
    if (!this.taxi) return;
    const state = this.state;
    const speed = this.taxi.speedKmh;
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.textContent = formatTime(state.timeLeft);
    const timerPanel = document.getElementById('timer-panel');
    if (timerPanel) timerPanel.classList.toggle('warning', state.timeLeft <= 15 && state.mode === 'playing');
    document.getElementById('cash').textContent = formatCash(state.cash);
    document.getElementById('fare-count').textContent = state.fares;
    const speedEl = document.getElementById('speed');
    if (speedEl) speedEl.textContent = String(Math.round(speed));
    const gearEl = document.getElementById('gear');
    if (gearEl) {
      gearEl.textContent = this.taxi.signedSpeed < -0.5 ? 'R' : (speed < 0.4 ? 'N' : 'D');
    }
    const speedo = document.querySelector('.speedo');
    if (speedo) speedo.style.setProperty('--speed-arc', `${clamp(speed / 180, 0, 1) * 270}deg`);
    const boostFill = document.getElementById('boost-fill');
    if (boostFill) boostFill.style.width = `${clamp(this.taxi.boost, 0, 100)}%`;
    const driftLabel = document.getElementById('drift-label');
    if (driftLabel) {
      driftLabel.textContent = this.taxi.drifting ? 'CHARGING BRICK BOOST' : 'DRIFT TO CHARGE';
      driftLabel.classList.toggle('charging', this.taxi.drifting);
    }
    const combo = document.getElementById('combo');
    const comboWrap = document.getElementById('combo-chip');
    if (combo) combo.textContent = `x${state.combo}`;
    if (comboWrap) comboWrap.classList.toggle('is-hidden', state.combo < 2);
    const target = state.target;
    const card = document.getElementById('objective');
    if (target) {
      const dist = Math.hypot(this.taxi.position.x - target.position.x, this.taxi.position.z - target.position.z);
      const progress = clamp((1 - dist / Math.max(1, state.targetStartDistance)) * 100, 0, 100);
      document.getElementById('objective-icon').textContent = target.icon;
      document.getElementById('objective-kicker').textContent = state.targetMode === 'pickup' ? 'PICK UP' : 'DROP OFF';
      document.getElementById('objective-name').textContent = target.name;
      document.getElementById('objective-distance').textContent = `${formatDistance(dist)} away`;
      card?.setAttribute('data-mode', state.targetMode);
      card?.style.setProperty('--progress', `${progress}%`);
      const targetAngle = Math.atan2(target.position.x - this.taxi.position.x, -(target.position.z - this.taxi.position.z));
      const relative = normalizeAngle(targetAngle - this.taxi.heading);
      const arrow = document.getElementById('objective-arrow');
      if (arrow) {
        arrow.textContent = '▲';
        arrow.style.transform = `rotate(${relative * 180 / Math.PI}deg)`;
      }
    } else if (state.mode === 'playing') {
      document.getElementById('objective-icon').textContent = '🏁';
      document.getElementById('objective-kicker').textContent = 'NEXT FARE';
      document.getElementById('objective-name').textContent = 'Fare complete!';
      document.getElementById('objective-distance').textContent = 'Looking for another passenger…';
      card?.style.setProperty('--progress', '100%');
    }
    const near = this.world?.nearestLandmark(this.taxi.position.x, this.taxi.position.z);
    const district = document.getElementById('district');
    if (district) district.textContent = near ? near.landmark.district : 'GENÈVE';
    const app = document.getElementById('app');
    app?.classList.toggle('speed-vignette-on', this.taxi.boost > 2 && (this.taxi.boosting || speed > 140));
  }

  _setIntroCamera(snap = false) {
    if (!this.camera) return;
    const pos = new THREE.Vector3(4.5, 8.6, -13);
    const look = new THREE.Vector3(-27, 2.2, -31);
    if (snap) {
      this.camera.position.copy(pos);
      this.cameraLook.copy(look);
    } else {
      this.camera.position.lerp(pos, 0.06);
      this.cameraLook.lerp(look, 0.06);
    }
    this.camera.fov = 44;
    this.camera.updateProjectionMatrix();
    this.camera.lookAt(this.cameraLook);
  }

  _updateCamera(dt) {
    if (!this.taxi) return;
    let desiredFov = 50;
    if (this.state.mode === 'intro') {
      const t = this.state.introTime;
      const desired = new THREE.Vector3(
        4.2 + Math.sin(t * 0.11) * 2.4,
        8.4 + Math.sin(t * 0.08) * 0.25,
        -12.6 - Math.cos(t * 0.1) * 1.6,
      );
      this.camera.position.lerp(desired, 1 - Math.exp(-dt * 1.3));
      this.camLookGoal.set(-27 + Math.sin(t * 0.07) * 1.4, 2.2, -31);
      this.cameraLook.lerp(this.camLookGoal, 1 - Math.exp(-dt * 1.5));
      desiredFov = 44;
    } else {
      const f = new THREE.Vector3(Math.sin(this.taxi.heading), 0, -Math.cos(this.taxi.heading));
      const speedNorm = clamp(this.taxi.speed / 35, 0, 1);
      const far = this.state.cameraFar;
      const portrait = this.camera.aspect < 0.9;
      const mobile = window.innerWidth < 700 || portrait;
      const dist = (far ? 30 : 22) + speedNorm * 2.0 + (mobile ? 6 : 0) + (portrait ? 3 : 0);
      const height = (far ? 30 : 17.5) + speedNorm * 1.4 + (mobile ? 5 : 0) + (portrait ? 3 : 0);
      const desired = new THREE.Vector3(
        this.taxi.position.x - f.x * dist,
        height + this.taxi.jumpHeight * 0.5,
        this.taxi.position.z - f.z * dist,
      );
      // Pull the camera in when a building would block the view of the taxi.
      if (this.world) {
        const clear = this.world.cameraClearDistance(this.taxi.position.x, this.taxi.position.z, desired.x, desired.z);
        if (clear < dist - 0.2) {
          const k = clamp(clear / dist, 0.3, 1);
          desired.x = this.taxi.position.x + (desired.x - this.taxi.position.x) * k;
          desired.z = this.taxi.position.z + (desired.z - this.taxi.position.z) * k;
          desired.y += (1 - k) * 7;
        }
      }
      // Slight lag opposite to the direction of travel gives a nice drift feel.
      const smooth = 1 - Math.exp(-dt * (this.state.transitioning > 0 ? 5.2 : 3.3));
      this.camera.position.lerp(desired, smooth);
      if (this.world?.isPointInBuilding(this.camera.position.x, this.camera.position.z, 0.4)) {
        this.camera.position.copy(desired);
      }
      this.camLookGoal.set(
        this.taxi.position.x + f.x * (4.2 + speedNorm * 1.5),
        3.1 + this.taxi.jumpHeight * 0.7,
        this.taxi.position.z + f.z * (4.2 + speedNorm * 1.5),
      );
      this.cameraLook.lerp(this.camLookGoal, 1 - Math.exp(-dt * 5.5));
      desiredFov = 50 + speedNorm * 4.5 + (this.taxi.boosting ? 6 : 0) + (portrait ? 14 : 0);
      if (this.state.transitioning > 0) this.state.transitioning = Math.max(0, this.state.transitioning - dt);
    }
    this.cameraShake = Math.max(0, this.cameraShake - dt * 2.1);
    if (this.cameraShake > 0) {
      const s = this.cameraShake;
      this.camera.position.x += (Math.random() - 0.5) * 0.7 * s;
      this.camera.position.y += (Math.random() - 0.5) * 0.5 * s;
      this.camera.position.z += (Math.random() - 0.5) * 0.7 * s;
    }
    this.camera.fov += (desiredFov - this.camera.fov) * (1 - Math.exp(-dt * 3.4));
    this.camera.updateProjectionMatrix();
    this.camera.lookAt(this.cameraLook);
    if (this.world) {
      if (this.state.mode === 'intro') this.world.setLabelsVisible(false);
      else this.world.updateLabels(this.camera, this.state.target?.id, false);
    }
  }

  updateStampUI() {
    document.querySelectorAll('#stamp-tray .stamp').forEach((el) => {
      el.classList.toggle('visited', this.state.visited.has(el.dataset.id));
    });
  }

  _showGameOver() {
    if (this.state.mode === 'gameover') return;
    this.state.mode = 'gameover';
    document.body.classList.remove('touch-playing');
    this.input?.keys.clear();
    this.hideTransientUI();
    this._clearPickupActor();
    this.world?.setTarget(null);
    this.state.target = null;
    this.taxi.setPassengerVisible(false);
    this.taxi.velocity.set(0, 0);
    this.audio?.gameOver();
    this.audio?.updateEngine(0, 0, false, false);
    this.cameraShake = 0;
    this.hud?.classList.add('is-hidden');
    const rank = [...RANKS].reverse().find((r) => this.state.cash >= r.min) || RANKS[0];
    document.getElementById('rank-badge').textContent = rank.name;
    document.getElementById('gameover-blurb').textContent = this.state.visited.size >= 10
      ? `${rank.blurb} All ten landmarks stamped. The whole city is yours.`
      : rank.blurb;
    document.getElementById('final-cash').textContent = formatCash(this.state.cash);
    document.getElementById('final-fares').textContent = String(this.state.fares);
    document.getElementById('final-combo').textContent = `x${Math.max(1, this.state.bestCombo)}`;
    document.getElementById('final-distance').textContent = `${(this.taxi.distanceTravelled * 10 / 1000).toFixed(1)} km`;
    const isBest = this.state.cash > this.state.best;
    if (isBest && this.state.cash > 0) {
      this.state.best = this.state.cash;
      this._saveBest(this.state.best);
    }
    document.getElementById('best-cash').textContent = this.state.best > 0 ? `BEST ${formatCash(this.state.best)}` : '';
    document.getElementById('stamp-count').textContent = `${this.state.visited.size} / 10`;
    document.querySelectorAll('#final-stamp-list .stamp').forEach((el) => {
      el.classList.toggle('visited', this.state.visited.has(el.dataset.id));
    });
    document.getElementById('gameover')?.classList.remove('is-hidden');
    this._updateHighScoreUI();
  }

  _resetShiftState() {
    // (startShift handles the reset; kept here for readability / future modes)
  }

  _animate() {
    requestAnimationFrame(() => this._animate());
    if (!this.renderer) return;
    let dt = this.clock.getDelta();
    if (!Number.isFinite(dt) || dt < 0) dt = 0;
    dt = Math.min(dt, 0.05);
    const state = this.state;
    if (!this.world || !this.taxi) {
      this.renderer.render(this.scene, this.camera);
      return;
    }

    if (state.mode === 'intro') {
      state.introTime += dt;
      this.world.update(dt, this.camera, this.taxi.position);
      this._updateCamera(dt);
      if (this.minimap) this.minimap.update(this.taxi, null, 'pickup', state.introTime, state.visited);
    } else if (state.mode === 'playing') {
      state.elapsed += dt;
      state.timeLeft -= dt;
      if (state.timeLeft <= 0) {
        state.timeLeft = 0;
        this._updateHUD(true);
        this._showGameOver();
      } else {
        if (state.timeLeft <= 15) {
          const second = Math.ceil(state.timeLeft);
          if (second !== this.lastBeepSecond) {
            this.lastBeepSecond = second;
            this.audio?.timeWarning();
          }
        }
        const surface = this.world.surfaceFactor(this.taxi.position.x, this.taxi.position.z);
        if (state.respawning > 0) {
          state.respawning -= dt;
          this.taxi.mesh.position.y = Math.max(-0.75, this.taxi.mesh.position.y - dt * 0.8);
          this.taxi.visual.rotation.z += dt * 0.9;
          if (state.respawning <= 0) {
            const safe = state.lastSafe;
            this.taxi.reset({ x: safe.x, z: safe.z, heading: safe.heading });
            this.taxi.rideHeight = 0.08;
    this.taxi.mesh.position.y = 0.08;
            this.taxi.boost = Math.max(20, this.taxi.boost);
            state.respawning = 0;
          }
        } else {
          this.taxi.rideHeight = this.world.surfaceHeight(this.taxi.position.x, this.taxi.position.z) - 0.04;
          this.taxi.update(dt, this.input, surface, (pos, vel) => this.world.onRamp(pos.x, pos.z, vel));
          // Last dry, drivable point for splash recovery.
          this._safeSampleTimer -= dt;
          if (this._safeSampleTimer <= 0 && (!this.world.isInWater(this.taxi.position.x, this.taxi.position.z) || this.world.isOnSafeSurface(this.taxi.position.x, this.taxi.position.z))) {
            this._safeSampleTimer = 0.45;
            state.lastSafe = { x: this.taxi.position.x, z: this.taxi.position.z, heading: this.taxi.heading };
          }
          if (this.world.isInWater(this.taxi.position.x, this.taxi.position.z) && !this.world.isOnSafeSurface(this.taxi.position.x, this.taxi.position.z)) {
            this._splash();
          }
          const tHit = this.world.resolveTraffic(this.taxi.position, this.taxi.radius, this.taxi.velocity);
          if (tHit) {
            this.cameraShake = Math.max(this.cameraShake, 0.22);
            this.taxi.onCollision?.(0.4, tHit);
          }
          this._checkProgress();
          this._collectStuds();
        }
        this._updateHUD();
        this.audio?.updateEngine(this.taxi.speed, this.input.throttle, this.taxi.drifting, this.taxi.boosting);
        this.effects?.update(dt, this.taxi, this.taxi.drifting, this.taxi.boosting);
        this.world.update(dt, this.camera, this.taxi.position);
        this._updateCamera(dt);
        this.minimapAccumulator = (this.minimapAccumulator || 0) + dt;
        if (this.minimap && this.minimapAccumulator >= 0.075) {
          this.minimap.update(this.taxi, state.target, state.targetMode, state.elapsed, state.visited);
          this.minimapAccumulator = 0;
        }
      }
      // Farewell actors bob and disappear.
      for (let i = this.farewellActors.length - 1; i >= 0; i--) {
        const a = this.farewellActors[i];
        a.life -= dt;
        a.mesh.position.y = a.baseY + Math.sin((2.4 - a.life) * 5) * 0.06;
        a.mesh.rotation.z = Math.sin((2.4 - a.life) * 4) * 0.02;
        if (a.life <= 0) {
          this.scene.remove(a.mesh);
          if (a.bubble?.material?.map) a.bubble.material.map.dispose();
          this.farewellActors.splice(i, 1);
        }
      }
      if (this.pickupActor && this.pickupActor.visible) {
        const t = this.state.elapsed + this.state.introTime;
        this.pickupActor.position.y = this.pickupActor.userData.baseY + Math.sin(t * 2.6) * 0.035;
        if (this.pickupBubble) this.pickupBubble.position.y = 4.1 + Math.sin(t * 2.2) * 0.16;
      }
    } else if (state.mode === 'paused') {
      this.world.update(0, this.camera, this.taxi.position);
      this._updateCamera(0.001);
    } else if (state.mode === 'gameover') {
      this.world.update(dt, this.camera, this.taxi.position);
      this._updateCamera(dt);
      this.audio?.updateEngine(0, 0, false, false);
    }
    this.shadowFrame++;
    if (this.shadowFrame % 2 === 0) this.renderer.shadowMap.needsUpdate = true;
    this.renderer.render(this.scene, this.camera);
  }
}

new CrazyTaxiGame();
