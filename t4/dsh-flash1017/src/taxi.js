import * as THREE from 'three';
import {
  PALETTE, plastic, addBox, addCylinder, addStuds, InstanceBatch, GEO,
  makeTextTexture,
} from './lego.js';

const TMP_FORWARD = new THREE.Vector2();

export class Input {
  constructor() {
    this.keys = new Set();
    this.bind();
    this.onPause = null;
    this.onHorn = null;
    this.onCamera = null;
    this._touchPointers = new Map();
  }
  bind() {
    const relevant = new Set([
      'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD',
      'Space', 'ShiftLeft', 'ShiftRight', 'KeyH', 'KeyR', 'KeyM', 'KeyC',
      'Escape', 'KeyP',
    ]);
    window.addEventListener('keydown', (e) => {
      if (relevant.has(e.code)) {
        if (e.code !== 'Escape' && e.code !== 'KeyP' && e.code !== 'KeyM') e.preventDefault();
        if (!e.repeat) {
          if (e.code === 'Escape' || e.code === 'KeyP') this.onPause?.();
          if (e.code === 'KeyH') this.onHorn?.();
          if (e.code === 'KeyM') this.onCamera?.('mute');
          if (e.code === 'KeyC') this.onCamera?.('camera');
        }
        this.keys.add(e.code);
      }
    });
    window.addEventListener('keyup', (e) => {
      if (relevant.has(e.code)) this.keys.delete(e.code);
    });
    window.addEventListener('blur', () => this.keys.clear());
    // On-screen controls for touch / click.
    document.querySelectorAll('[data-key]').forEach((button) => {
      const code = button.dataset.key;
      const press = (e) => {
        e.preventDefault();
        button.classList.add('pressed');
        this.keys.add(code);
        this._touchPointers.set(e.pointerId, { button, code });
        button.setPointerCapture?.(e.pointerId);
      };
      const release = (e) => {
        button.classList.remove('pressed');
        this.keys.delete(code);
        this._touchPointers.delete(e.pointerId);
      };
      button.addEventListener('pointerdown', press);
      button.addEventListener('pointerup', release);
      button.addEventListener('pointercancel', release);
      button.addEventListener('lostpointercapture', release);
    });
  }
  get throttle() {
    const up = this.keys.has('ArrowUp') || this.keys.has('KeyW');
    const down = this.keys.has('ArrowDown') || this.keys.has('KeyS');
    return (up ? 1 : 0) - (down ? 1 : 0);
  }
  get steer() {
    const left = this.keys.has('ArrowLeft') || this.keys.has('KeyA');
    const right = this.keys.has('ArrowRight') || this.keys.has('KeyD');
    return (right ? 1 : 0) - (left ? 1 : 0);
  }
  get drift() { return this.keys.has('Space'); }
  get boost() { return this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'); }
}

export function createTaxi() {
  const root = new THREE.Group();
  root.name = 'taxi';
  const visual = new THREE.Group();
  root.add(visual);

  const yellow = PALETTE.taxi;
  const yellowLight = 0xffca1a;
  const red = PALETTE.red;
  const dark = 0x24282a;
  const cream = PALETTE.cream;

  // Wheels first (so they sit under the body).
  const wheels = [];
  const wheelInfo = [
    [-1.7, -1.95, true], [1.7, -1.95, true],
    [-1.7, 2.02, false], [1.7, 2.02, false],
  ];
  for (const [x, z, front] of wheelInfo) {
    const pivot = new THREE.Group();
    pivot.position.set(x, 0.66, z);
    visual.add(pivot);
    const spinner = new THREE.Group();
    pivot.add(spinner);
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.42, 16), plastic(PALETTE.tire, { roughness: 0.78 }));
    tire.rotation.z = Math.PI / 2;
    tire.castShadow = true;
    spinner.add(tire);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.45, 12), plastic(0xd8d1bd, { roughness: 0.4 }));
    hub.rotation.z = Math.PI / 2;
    spinner.add(hub);
    for (let i = 0; i < 5; i++) {
      const spoke = addBox(spinner, 0.46, 0.06, 0.12, 0, 0, 0, 0x9e998f, { castShadow: false });
      spoke.rotation.x = (i / 5) * Math.PI * 2;
      spoke.position.set(0, 0, 0);
    }
    wheels.push({ pivot, spinner, front });
  }

  // Chassis and lower body.
  addBox(visual, 3.05, 0.34, 6.5, 0, 0.88, 0, 0x34383a, { castShadow: true });
  addBox(visual, 3.36, 0.48, 6.15, 0, 1.14, 0, yellow, { castShadow: true });
  addBox(visual, 3.22, 0.38, 6.45, 0, 1.1, 0, yellowLight, { castShadow: true });
  addBox(visual, 3.46, 0.17, 6.35, 0, 0.91, 0, 0x363a3c, { castShadow: false });

  // Hood + trunk slabs.
  addBox(visual, 3.18, 0.26, 1.56, 0, 1.42, -2.16, yellowLight, { castShadow: true });
  addBox(visual, 3.18, 0.26, 1.1, 0, 1.42, 2.42, yellowLight, { castShadow: true });
  // Hood stripes (racing taxi!)
  addBox(visual, 0.42, 0.035, 1.43, -0.58, 1.565, -2.14, cream, { castShadow: false });
  addBox(visual, 0.42, 0.035, 1.43, 0.58, 1.565, -2.14, cream, { castShadow: false });

  // Checker band along both sides.
  for (const side of [-1, 1]) {
    for (let i = 0; i < 10; i++) {
      const color = i % 2 === 0 ? 0x1c2224 : cream;
      addBox(visual, 0.035, 0.23, 0.51, side * 1.69, 1.34, -2.3 + i * 0.51, color, { castShadow: false });
    }
  }

  // Cabin pillars and glass.
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x28566a, roughness: 0.12, metalness: 0.22, transparent: true, opacity: 0.82,
  });
  addBox(visual, 2.96, 1.02, 0.1, 0, 2.0, -1.1, 0x34383a);
  addBox(visual, 2.96, 1.02, 0.1, 0, 2.0, 1.3, 0x34383a);
  addBox(visual, 2.85, 0.86, 0.06, 0, 2.0, -1.17, 0x000000, { material: glassMat, castShadow: false });
  addBox(visual, 2.85, 0.86, 0.06, 0, 2.0, 1.37, 0x000000, { material: glassMat, castShadow: false });
  for (const side of [-1, 1]) {
    addBox(visual, 0.09, 1.03, 2.0, side * 1.49, 2.02, 0.03, 0x34383a);
    addBox(visual, 0.07, 0.82, 1.73, side * 1.54, 2.02, 0.07, 0x000000, { material: glassMat, castShadow: false });
    addBox(visual, 0.12, 1.1, 0.18, side * 1.53, 2.0, 0.05, 0x34383a);
  }
  // Roof.
  addBox(visual, 3.22, 0.34, 2.82, 0, 2.62, 0.03, yellowLight, { castShadow: true });
  addBox(visual, 2.9, 0.08, 2.4, 0, 2.815, 0.02, yellow, { castShadow: false });
  const roofStuds = new InstanceBatch(GEO.stud, plastic(yellow), { castShadow: false });
  addStuds(roofStuds, 0, 0.02, 2.8, 2.2, 2.86, yellow, 0.95, 0.2);
  roofStuds.build(visual);

  // Roof taxi sign.
  const signCanvas = document.createElement('canvas');
  signCanvas.width = 512; signCanvas.height = 192;
  const sctx = signCanvas.getContext('2d');
  sctx.fillStyle = '#111b20'; sctx.fillRect(0, 0, 512, 192);
  for (let x = 0; x < 512; x += 48) {
    for (let y = 0; y < 192; y += 48) {
      if ((x / 48 + y / 48) % 2 === 0) { sctx.fillStyle = '#f7f2e6'; sctx.fillRect(x, y, 48, 48); }
    }
  }
  sctx.fillStyle = '#f6d20c'; sctx.fillRect(58, 40, 396, 112);
  sctx.strokeStyle = '#1b1d20'; sctx.lineWidth = 8; sctx.strokeRect(58, 40, 396, 112);
  sctx.fillStyle = '#161a1d'; sctx.font = '96px "Lilita One", sans-serif'; sctx.textAlign = 'center'; sctx.textBaseline = 'middle';
  sctx.fillText('TAXI', 256, 99);
  const signTex = new THREE.CanvasTexture(signCanvas);
  signTex.colorSpace = THREE.SRGBColorSpace;
  const signMat = new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.35, emissive: 0x241a00, emissiveIntensity: 0.5 });
  const taxSignFront = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.65, 0.18), signMat);
  taxSignFront.position.set(0, 3.09, -0.15); taxSignFront.castShadow = true; visual.add(taxSignFront);
  const signSideGeo = new THREE.PlaneGeometry(1.48, 0.48);
  for (const side of [-1, 1]) {
    const sm = new THREE.Mesh(signSideGeo, new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.35 }));
    sm.position.set(side * 0.84, 3.08, -0.15);
    sm.rotation.y = side * Math.PI / 2;
    visual.add(sm);
  }

  // Bumpers, lights, grille.
  addBox(visual, 3.5, 0.27, 0.33, 0, 0.88, -3.09, 0x2d3235, { castShadow: true });
  addBox(visual, 3.5, 0.27, 0.33, 0, 0.88, 3.1, 0x2d3235, { castShadow: true });
  addBox(visual, 1.5, 0.26, 0.08, 0, 1.28, -3.13, 0x1b1f21, { castShadow: false });
  for (let i = 0; i < 4; i++) addBox(visual, 1.32, 0.035, 0.04, 0, 1.8 + i * 0.06, -1.23, 0x111111, { castShadow: false });
  const headlightMat = new THREE.MeshStandardMaterial({ color: 0xfff8d7, emissive: 0xffe08a, emissiveIntensity: 0.85, roughness: 0.2 });
  for (const x of [-1.06, 1.06]) {
    addBox(visual, 0.6, 0.28, 0.08, x, 1.36, -3.15, 0xfff2b5, { material: headlightMat, castShadow: false });
  }
  const tailMat = new THREE.MeshStandardMaterial({ color: 0xc82423, emissive: 0x8c0909, emissiveIntensity: 0.8, roughness: 0.25 });
  const brakeLights = [];
  for (const x of [-1.08, 1.08]) {
    const light = addBox(visual, 0.55, 0.3, 0.07, x, 1.4, 3.14, 0xd42a27, { material: tailMat, castShadow: false });
    brakeLights.push(light);
  }
  // Exhausts.
  const boostFlames = [];
  for (const x of [-0.8, 0.8]) {
    addCylinder(visual, 0.12, 0.12, 0.38, x, 0.59, 3.18, 0x8b8d8d, { rotX: Math.PI / 2, segments: 8 });
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.8, 7), new THREE.MeshBasicMaterial({ color: 0x55d7ff, transparent: true, opacity: 0.85 }));
    flame.rotation.x = -Math.PI / 2;
    flame.position.set(x, 0.57, 3.85);
    flame.visible = false;
    visual.add(flame);
    boostFlames.push(flame);
  }
  // Side mirrors and door line.
  for (const side of [-1, 1]) {
    addBox(visual, 0.32, 0.2, 0.38, side * 1.87, 2.2, -1.15, 0x2a2f31, { castShadow: true });
    addBox(visual, 0.03, 0.72, 0.04, side * 1.7, 1.45, 0.4, 0x9f7d0e, { castShadow: false });
  }
  // Small Swiss flag antenna at the back.
  addCylinder(visual, 0.022, 0.022, 1.2, -1.32, 2.0, 2.62, 0x444a4c, { segments: 5, castShadow: false });
  const flag = addBox(visual, 0.42, 0.3, 0.025, -1.1, 2.48, 2.62, 0xd52b1e, { castShadow: false });
  addBox(visual, 0.25, 0.09, 0.03, -1.1, 2.48, 2.6, 0xffffff, { castShadow: false });
  addBox(visual, 0.09, 0.25, 0.03, -1.1, 2.48, 2.6, 0xffffff, { castShadow: false });

  // GVA 204 plate.
  const plateCanvas = document.createElement('canvas'); plateCanvas.width = 512; plateCanvas.height = 128;
  const pctx = plateCanvas.getContext('2d');
  pctx.fillStyle = '#f7f2e6'; pctx.fillRect(0, 0, 512, 128);
  pctx.fillStyle = '#d52b1e'; pctx.fillRect(0, 0, 54, 128);
  pctx.fillStyle = '#fff'; pctx.fillRect(17, 42, 20, 44); pctx.fillRect(5, 54, 44, 20);
  pctx.fillStyle = '#1b1d20'; pctx.font = '700 76px "Nunito Sans", sans-serif'; pctx.textAlign = 'center'; pctx.fillText('GE 204', 288, 92);
  const plateTex = new THREE.CanvasTexture(plateCanvas); plateTex.colorSpace = THREE.SRGBColorSpace;
  for (const z of [-3.17, 3.17]) {
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 0.29), new THREE.MeshBasicMaterial({ map: plateTex }));
    plate.position.set(0, 0.89, z);
    if (z < 0) plate.rotation.y = Math.PI;
    visual.add(plate);
  }

  // Minifigure driver — just the visible top half.
  const driver = new THREE.Group();
  driver.position.set(-0.52, 1.62, -0.2);
  driver.scale.setScalar(0.62);
  const dTorso = addBox(driver, 0.9, 0.8, 0.54, 0, 0, 0, 0x2f7e78, { castShadow: true });
  const dHead = new THREE.Mesh(GEO.cylinder12, plastic(0xf2c94c));
  dHead.scale.set(0.31, 0.44, 0.31); dHead.position.set(0, 0.66, 0); dHead.castShadow = true; driver.add(dHead);
  addBox(driver, 0.27, 0.1, 0.18, 0, 0.9, -0.03, 0x172f4a, { castShadow: false });
  addBox(driver, 0.08, 0.06, 0.03, -0.1, 0.71, 0.29, 0x27201e, { castShadow: false });
  addBox(driver, 0.08, 0.06, 0.03, 0.1, 0.71, 0.29, 0x27201e, { castShadow: false });
  addCylinder(driver, 0.32, 0.32, 0.1, 0, 0.99, -0.01, 0xc92e28, { segments: 10, castShadow: true });
  addBox(driver, 0.4, 0.055, 0.25, 0, 0.96, 0.22, 0xc92e28, { castShadow: true });
  driver.rotation.y = Math.PI;
  visual.add(driver);

  const passenger = new THREE.Group();
  passenger.position.set(0.4, 1.6, 0.86);
  passenger.scale.setScalar(0.6);
  const pTorso = addBox(passenger, 0.9, 0.8, 0.54, 0, 0, 0, 0xd87c3d, { castShadow: true });
  const pHead = new THREE.Mesh(GEO.cylinder12, plastic(0xf2c94c));
  pHead.scale.set(0.31, 0.44, 0.31); pHead.position.set(0, 0.66, 0); pHead.castShadow = true; passenger.add(pHead);
  addCylinder(passenger, 0.32, 0.34, 0.13, 0, 0.95, 0, 0x3a2419, { segments: 10, castShadow: true });
  addBox(passenger, 0.08, 0.06, 0.03, -0.1, 0.71, 0.29, 0x27201e, { castShadow: false });
  addBox(passenger, 0.08, 0.06, 0.03, 0.1, 0.71, 0.29, 0x27201e, { castShadow: false });
  passenger.rotation.y = Math.PI;
  passenger.visible = false;
  visual.add(passenger);

  root.traverse((o) => { if (o.isMesh) { o.castShadow = o.castShadow ?? true; o.receiveShadow = true; } });
  return { root, visual, wheels, brakeLights, boostFlames, passenger, driver };
}

export class Taxi {
  constructor(scene, collisionWorld) {
    const created = createTaxi();
    this.mesh = created.root;
    this.visual = created.visual;
    this.wheels = created.wheels;
    this.brakeLights = created.brakeLights;
    this.boostFlames = created.boostFlames;
    this.passengerMesh = created.passenger;
    this.driver = created.driver;
    scene.add(this.mesh);

    this.collisionWorld = collisionWorld;
    this.position = new THREE.Vector3();
    this.heading = 0;
    this.velocity = new THREE.Vector2();
    this.radius = 2.25;
    this.boost = 48;
    this.boosting = false;
    this.boostingVisual = 0;
    this.drifting = false;
    this.steerVisual = 0;
    this.wheelSpin = 0;
    this.speedKmh = 0;
    this.airborne = false;
    this.verticalVelocity = 0;
    this.jumpHeight = 0;
    this.landShake = 0;
    this.collisionShake = 0;
    this.collisionCooldown = 0;
    this.onCollision = null;
    this.onBoostStart = null;
    this.distanceTravelled = 0;
    this._surface = 1;
    this._accelVisual = 0;
    this._lastSpeed = 0;
    this._time = 0;
    this.rideHeight = 0.08;
    this.reset({ x: 0, z: 0, heading: 0 });
  }

  reset({ x, z, heading = 0 }) {
    this.position.set(x, 0.08, z);
    this.heading = heading;
    this.velocity.set(0, 0);
    this.boost = Math.max(36, this.boost ?? 36);
    this.boosting = false;
    this.drifting = false;
    this.jumpHeight = 0;
    this.verticalVelocity = 0;
    this.airborne = false;
    this.visual.rotation.set(0, 0, 0);
    this.visual.position.y = 0;
    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = -this.heading;
  }

  get forward() {
    return TMP_FORWARD.set(Math.sin(this.heading), -Math.cos(this.heading));
  }

  get speed() {
    return this.velocity.length();
  }

  get signedSpeed() {
    return this.velocity.dot(this.forward);
  }

  update(dt, input, surface = 1, rampCheck = null) {
    this._time += dt;
    const forward = this.forward.clone();
    const right = new THREE.Vector2(Math.cos(this.heading), Math.sin(this.heading));
    const fwdSpeed = this.velocity.dot(forward);
    const latSpeed = this.velocity.dot(right);
    const throttle = input.throttle;
    const steer = input.steer;
    const wantDrift = input.drift && Math.abs(fwdSpeed) > 4;
    const wantBoost = input.boost && this.boost > 1 && !this.airborne;
    this._surface = surface;

    // Engine / brakes.
    let drive = 0;
    const maxSpeed = surface > 0.8 ? 31 : 19;
    if (throttle > 0) {
      drive = fwdSpeed < -0.5 ? 30 : 19.5;
    } else if (throttle < 0) {
      drive = fwdSpeed > 0.7 ? -31 : -10;
    }
    if (fwdSpeed > maxSpeed && throttle > 0) drive = 0;
    if (wantDrift) drive *= 0.72;

    // Boost meter behaviour.
    if (wantBoost && !this.boosting) {
      this.boosting = true;
      this.onBoostStart?.();
    }
    if (!input.boost || this.boost <= 0.2) this.boosting = false;
    if (this.boosting) {
      this.boost = Math.max(0, this.boost - 26 * dt);
      drive += 36;
    } else if (wantDrift && Math.abs(fwdSpeed) > 10) {
      this.boost = Math.min(100, this.boost + 16 * dt);
    }
    this.boostingVisual += ((this.boosting ? 1 : 0) - this.boostingVisual) * (1 - Math.exp(-dt * 8));

    // Drag / rolling resistance. Off-road is slower and draggy.
    const rolling = surface > 0.8 ? 1.05 : 3.2;
    this.velocity.multiplyScalar(Math.exp(-rolling * dt * 0.16));
    this.velocity.addScaledVector(forward, (drive * surface) * dt);
    // Air drag.
    this.velocity.multiplyScalar(1 / (1 + this.velocity.length() * 0.009 * dt));

    // Steering. Less lock with speed, extra rotation in a drift.
    const speedNorm = THREE.MathUtils.clamp(Math.abs(fwdSpeed) / 18, 0, 1);
    const steerStrength = (0.75 + (1 - speedNorm) * 0.65) * (wantDrift ? 1.48 : 1);
    const direction = fwdSpeed < -0.2 ? -1 : 1;
    const yawRate = steer * direction * steerStrength * THREE.MathUtils.clamp(Math.abs(fwdSpeed) / 7, 0, 1.25);
    this.heading += yawRate * dt;
    this.steerVisual += (steer - this.steerVisual) * (1 - Math.exp(-dt * 11));

    // Lateral grip: keep momentum in a drift, bite hard when gripping.
    const grip = wantDrift ? 1.3 : 8.5;
    this.velocity.addScaledVector(right, -latSpeed * Math.min(1, grip * dt));

    // Convert some lateral slip into forward momentum for a lively drift.
    if (wantDrift) {
      this.velocity.multiplyScalar(1 / (1 + dt * 0.22));
    }

    this.drifting = wantDrift;
    if (wantDrift) this.boost = Math.min(100, this.boost + 7 * dt);

    // Clamp reverse.
    if (this.velocity.dot(forward) < -11) {
      const excess = this.velocity.dot(forward) + 11;
      this.velocity.addScaledVector(forward, -excess);
    }
    const max = this.boosting ? 43 : maxSpeed;
    if (this.velocity.length() > max) this.velocity.setLength(THREE.MathUtils.lerp(this.velocity.length(), max, 0.25));

    // Move with a few collision substeps.
    const dist = this.velocity.length() * dt;
    const steps = Math.max(1, Math.ceil(dist / 1.8));
    const stepDt = dt / steps;
    for (let i = 0; i < steps; i++) {
      this.position.x += this.velocity.x * stepDt;
      this.position.z += this.velocity.y * stepDt;
      const hit = this.collisionWorld.resolveCircle(this.position, this.radius);
      if (hit) this.handleCollision(hit);
    }

    this.distanceTravelled += this.velocity.length() * dt;
    this.speedKmh = THREE.MathUtils.lerp(this.speedKmh, this.velocity.length() * 4.2, 1 - Math.exp(-dt * 9));
    this._accelVisual += ((fwdSpeed - this._lastSpeed) / Math.max(dt, 0.001) - this._accelVisual) * (1 - Math.exp(-dt * 5));
    this._lastSpeed = fwdSpeed;

    // Kick off ramps, if any.
    if (!this.airborne && rampCheck) {
      const ramp = rampCheck(this.position, this.velocity);
      if (ramp) this.launch(ramp);
    }
    if (this.airborne) {
      this.verticalVelocity -= 30 * dt;
      this.jumpHeight += this.verticalVelocity * dt;
      if (this.jumpHeight <= 0) {
        this.jumpHeight = 0;
        this.airborne = false;
        this.landShake = Math.min(1, Math.abs(this.verticalVelocity) / 13);
        this.verticalVelocity = 0;
        this.onLand?.();
      }
    }

    this.mesh.position.set(this.position.x, this.rideHeight + this.jumpHeight, this.position.z);
    this.mesh.rotation.y = -this.heading;

    this.collisionShake = Math.max(0, this.collisionShake - dt * 2.8);
    this.landShake = Math.max(0, this.landShake - dt * 1.4);
    this.collisionCooldown = Math.max(0, this.collisionCooldown - dt);

    // Body lean and suspension.
    const speedFactor = THREE.MathUtils.clamp(this.velocity.length() / 30, 0, 1.4);
    const lean = yawRate * speedFactor * 0.075;
    const accelPitch = THREE.MathUtils.clamp(this._accelVisual * 0.0035, -0.05, 0.05);
    this.visual.rotation.z = THREE.MathUtils.lerp(this.visual.rotation.z, lean, 1 - Math.exp(-dt * 7));
    this.visual.rotation.x = THREE.MathUtils.lerp(this.visual.rotation.x, accelPitch + (this.airborne ? this.verticalVelocity * 0.012 : 0), 1 - Math.exp(-dt * 6));
    const bob = Math.sin(this._time * 18) * 0.012 * speedFactor + this.collisionShake * Math.sin(this._time * 46) * 0.05;
    this.visual.position.y = 0.045 * (this.jumpHeight > 0 ? 0 : 1) + bob;
    this.visual.rotation.y = this.drifting ? -this.steerVisual * 0.035 : 0;

    // Wheels spin and steer.
    this.wheelSpin += fwdSpeed * dt * 1.8;
    for (const w of this.wheels) {
      w.spinner.rotation.x = this.wheelSpin;
      if (w.front) w.pivot.rotation.y = -this.steerVisual * 0.48;
    }
    // Brake lights.
    for (const light of this.brakeLights) {
      light.material.emissiveIntensity = throttle < 0 || (throttle === 0 && Math.abs(fwdSpeed) < 1.2) ? 2.3 : 0.7;
    }
    // Boost jets.
    for (let i = 0; i < this.boostFlames.length; i++) {
      const f = this.boostFlames[i];
      f.visible = this.boostingVisual > 0.12;
      if (f.visible) {
        const s = 0.7 + this.boostingVisual * 0.8 + Math.sin(this._time * 31 + i * 2.1) * 0.16;
        f.scale.set(0.8 + s * 0.3, s * 1.3, 0.8 + s * 0.3);
        f.material.opacity = this.boostingVisual * (0.55 + Math.random() * 0.35);
      }
    }
  }

  handleCollision(hit) {
    const speed = this.velocity.length();
    if (speed < 0.5) return;
    // Reflect most of the velocity away from the surface normal.
    const dot = this.velocity.dot(hit.normal);
    if (dot < 0) {
      this.velocity.addScaledVector(hit.normal, -dot * 1.5);
      this.velocity.multiplyScalar(0.55);
      this.collisionShake = Math.min(1, speed / 25);
      if (this.collisionCooldown <= 0 && speed > 3.5) {
        this.collisionCooldown = 0.3;
        this.onCollision?.(Math.min(1, speed / 28), hit);
      }
    }
  }

  launch(ramp) {
    this.airborne = true;
    this.verticalVelocity = 8.2;
    this.jumpHeight = 0.05;
    this.boost = Math.min(100, this.boost + 12);
    this.onJump?.();
  }

  addBoost(amount) {
    this.boost = Math.min(100, this.boost + amount);
  }

  setPassengerVisible(visible) {
    this.passengerMesh.visible = visible;
    if (visible) this.passengerMesh.rotation.z = 0;
  }

  celebratePassenger() {
    this.passengerMesh.visible = true;
    this.passengerMesh.position.y = 1.65 + Math.sin(this._time * 9) * 0.02;
  }
}

export function makeCoin(radius = 0.55) {
  const group = new THREE.Group();
  const outer = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, 0.16, 16), new THREE.MeshStandardMaterial({
    color: 0xffc61c, emissive: 0x5b3900, emissiveIntensity: 0.35, metalness: 0.45, roughness: 0.25,
  }));
  outer.rotation.x = Math.PI / 2;
  outer.castShadow = true;
  group.add(outer);
  const inner = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.56, radius * 0.13, 6, 16), plastic(0xffe684, { metalness: 0.2, roughness: 0.25 }));
  inner.position.z = 0.09;
  group.add(inner);
  return group;
}
