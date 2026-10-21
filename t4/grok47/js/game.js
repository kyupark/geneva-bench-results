window.addEventListener("error", (e) => {
  const d = document.createElement("pre");
  d.id = "boot-error";
  d.textContent = String(e.message || "error") + "\n" + (e.error && e.error.stack ? e.error.stack : "");
  document.body.appendChild(d);
  document.title = "BOOT FAIL";
});

import * as THREE from "three";
import { forwardFromYaw, rightFromForward, yawToFace, angDiff } from "./frame.js";
import { circleOBB, makeHash } from "./collide.js";
import { createTaxi, stepTaxi } from "./physics.js";
import {
  LANDMARKS,
  ROADS,
  WATER,
  surfaceAt,
  surfaceY,
  isDeadlyWater,
  nearestRoad,
  pointOnRoad,
  landmark,
  roadByName,
} from "./geo.js";
import { CITY } from "./citygen.js";
import { buildCity, buildTaxi, buildMinifig, buildArrow } from "./mesh.js";
import { createAudio } from "./audio.js";

const mapBounds = (() => {
  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  const pts = WATER.concat(LANDMARKS);
  for (let i = 0; i < pts.length; i++) {
    minX = Math.min(minX, pts[i].x);
    maxX = Math.max(maxX, pts[i].x);
    minZ = Math.min(minZ, pts[i].z);
    maxZ = Math.max(maxZ, pts[i].z);
  }
  return { minX: minX - 80, maxX: maxX + 80, minZ: minZ - 80, maxZ: maxZ + 120 };
})();

const SAVE_KEY = "bricktaxi-geneve-v1";
const START_TIME = 90;
const NAMES = ["Léa", "Matteo", "Amina", "Jonas", "Chloé", "Luca", "Noor", "Hugo", "Inès", "Sami", "Elena", "Marc", "Yara", "Théo", "Nina", "Karim", "Camille", "Paolo"];
const CAR_COLORS = ["#d23b3b", "#2a6fbf", "#f4f4f4", "#2f8f4e", "#e07a2f", "#7a4b9a", "#14a3b8"];

const params = new URLSearchParams(location.search);
const SHOT = params.get("shot");

const ui = document.getElementById("ui");
const canvas = document.getElementById("view");

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  preserveDrawingBuffer: params.get("selftest") === "1" || !!SHOT,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.background = new THREE.Color("#9ecff0");
scene.fog = new THREE.Fog("#b7d7f2", 220, 1500);

const hemi = new THREE.HemisphereLight("#d7ecff", "#6d8a48", 0.9);
scene.add(hemi);
const sun = new THREE.DirectionalLight("#fff2d4", 1.45);
sun.position.set(-180, 320, -120);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 20;
sun.shadow.camera.far = 900;
sun.shadow.camera.left = -90;
sun.shadow.camera.right = 90;
sun.shadow.camera.top = 90;
sun.shadow.camera.bottom = -90;
sun.shadow.bias = -0.0004;
scene.add(sun);
scene.add(sun.target);

const city = buildCity(scene);
const taxiMesh = buildTaxi();
scene.add(taxiMesh.rig);
const nose = taxiMesh.visual.children.find((c) => c.userData && c.userData.cue === "nose" && !(c.isMesh));
const arrow = buildArrow();
arrow.visible = false;
scene.add(arrow);

const beacon = new THREE.Group();
const ring = new THREE.Mesh(
  new THREE.TorusGeometry(5.2, 0.38, 8, 24),
  new THREE.MeshStandardMaterial({ color: "#9dff57", emissive: "#3ad44a", emissiveIntensity: 0.7, roughness: 0.4 })
);
ring.rotation.x = Math.PI / 2;
const pillar = new THREE.Mesh(
  new THREE.CylinderGeometry(0.35, 0.35, 22, 8),
  new THREE.MeshBasicMaterial({ color: "#d8ffb0", transparent: true, opacity: 0.38 })
);
pillar.position.y = 11;
beacon.add(ring);
beacon.add(pillar);
beacon.visible = false;
scene.add(beacon);

const camera = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.2, 4000);
camera.position.set(0, 12, 20);

const hash = makeHash(CITY.colliders);
let ghost = false;
const world = {
  surface: (x, z) => (ghost ? 1 : surfaceAt(x, z)),
  height: (x, z) => (ghost ? 0 : surfaceY(x, z)),
  water: (x, z) => (ghost ? false : isDeadlyWater(x, z)),
  nearby(x, z, rad) {
    if (ghost) return [];
    const list = hash.query(x, z, rad);
    for (let i = 0; i < traffic.length; i++) {
      const box = traffic[i].box;
      if (Math.hypot(box.cx - x, box.cz - z) < rad + 6) list.push(box);
    }
    return list;
  },
};

const audio = createAudio();
const down = new Set();
const input = { throttle: 0, brake: 0, steer: 0, handbrake: false, boost: false };
const touch = { steer: 0, throttle: 0, brake: 0, drift: false, boost: false };

let mode = "title";
let time = START_TIME;
let score = 0;
let combo = 1;
let best = loadBest();
let simTime = 0;
let topDown = false;
let wideShot = false;
let countLeft = 3;
let countShown = 0;
let goFlash = 0;
let shake = 0;
let splashCd = 0;
let hornCd = 0;
let safeTimer = 0;
let wheelSpin = 0;
let fareLeft = 0;
let fareLimit = 1;
let rider = null;
let speech = "";
let speechT = 0;
let popT = 0;
const safe = { x: 0, z: 0, yaw: 0 };

const camDesired = new THREE.Vector3();
const lookAt = new THREE.Vector3();
const fwdVec = new THREE.Vector3();
const camTmp = new THREE.Vector3();

const montBlanc = roadByName("Rue du Mont-Blanc");
const startPoint = pointOnRoad(montBlanc, 6);
const startYaw = yawToFace(startPoint.dx, startPoint.dz);
let taxi = createTaxi(startPoint.x, startPoint.z, startYaw);
taxi.y = surfaceY(taxi.x, taxi.z);
safe.x = taxi.x;
safe.z = taxi.z;
safe.yaw = taxi.yaw;

const traffic = [];
const people = [];

buildTraffic();
buildPeople();
buildUi();
syncTaxiMesh();
snapCamera();

if (SHOT) poseShot(SHOT);
else if (params.get("selftest") === "1" || params.get("go") === "1") beginRide(true);
else if (params.get("play") === "1") beginRide(false);

window.__selfTestControls = selfTestControls;
if (params.get("selftest") === "1") {
  const result = selfTestControls();
  poseShot("chase");
  const banner = document.getElementById("selftest");
  banner.hidden = false;
  banner.textContent = result.lines.join("\n");
  document.title = result.ok ? "SELFTEST PASS" : "SELFTEST FAIL";
}

window.addEventListener("resize", resize);
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", (e) => down.delete(e.code));
window.addEventListener("pointerdown", () => audio.unlock());
canvas.addEventListener("contextmenu", (e) => e.preventDefault());

if (window.matchMedia("(pointer: coarse)").matches) document.body.classList.add("touch");

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  tick(dt);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
resize();
tick(0);
renderer.render(scene, camera);
if (params.get("sim") === "fare") {
  const peg = people[0];
  mode = "play";
  ghost = false;
  taxi.x = peg.x;
  taxi.z = peg.z + 1.2;
  taxi.speed = 0;
  taxi.lateral = 0;
  taxi.yaw = peg.yaw;
  tick(1 / 60);
  const boarded = !!(rider && rider.dest && rider.dest.id === "jet");
  if (boarded) {
    taxi.x = rider.dest.x + 3;
    taxi.z = rider.dest.z;
    taxi.speed = 0;
    taxi.lateral = 0;
    taxi.vx = 0;
    taxi.vz = 0;
    taxi.y = surfaceY(taxi.x, taxi.z);
    tick(1 / 60);
  }
  document.title = boarded && score > 0 && !rider ? "FARE PASS " + score : "FARE FAIL boarded=" + boarded + " score=" + score + " rider=" + !!rider;
}
if (params.get("selftest") === "1" || SHOT) {
  tick(1 / 60);
  renderer.render(scene, camera);
  const gl = renderer.getContext();
  const w = gl.drawingBufferWidth;
  const h = gl.drawingBufferHeight;
  const mid = new Uint8Array(4);
  const low = new Uint8Array(4);
  gl.readPixels((w / 2) | 0, (h / 2) | 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, mid);
  gl.readPixels((w / 2) | 0, 48, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, low);
  const diag = "buf " + w + "x" + h + " tri " + renderer.info.render.triangles + " mid " + mid[0] + "," + mid[1] + "," + mid[2] + " low " + low[0] + "," + low[1] + "," + low[2];
  document.title = document.title + " | " + diag;
  const shotFrame = document.createElement("textarea");
  shotFrame.id = "frame";
  shotFrame.hidden = true;
  shotFrame.textContent = canvas.toDataURL("image/jpeg", 0.86);
  document.body.appendChild(shotFrame);
} else if (params.get("sim") !== "fare") {
  requestAnimationFrame(frame);
}
window.__ready = true;

function tick(dt) {
  simTime += dt;
  if (splashCd > 0) splashCd -= dt;
  if (hornCd > 0) hornCd -= dt;
  if (speechT > 0) speechT -= dt;
  if (popT > 0) popT -= dt;
  if (goFlash > 0) goFlash -= dt;

  if (mode === "countdown") {
    const shown = Math.ceil(countLeft);
    if (shown !== countShown && shown > 0) {
      countShown = shown;
      audio.tick();
      setCountdown(String(shown));
    }
    countLeft -= dt;
    if (countLeft <= 0) {
      mode = "play";
      time = START_TIME;
      goFlash = 0.7;
      setCountdown("GO!");
      audio.tick();
    }
  } else if (mode === "play") {
    readInput();
    if (hornCd <= 0 && (down.has("KeyH") || touch.horn)) {
      hornCd = 0.45;
      touch.horn = false;
      audio.horn();
    }
    const res = stepTaxi(taxi, input, dt, world);
    if (res.splash && splashCd <= 0) {
      splashCd = 1.15;
      time -= 4;
      taxi.x = safe.x;
      taxi.z = safe.z;
      taxi.yaw = safe.yaw;
      taxi.speed = 0;
      taxi.lateral = 0;
      taxi.vx = 0;
      taxi.vz = 0;
      taxi.y = surfaceY(taxi.x, taxi.z);
      shake = Math.max(shake, 0.45);
      audio.splash();
      flashPop("SPLASH", "back on the road", "bad");
    }
    if (res.crash) {
      time -= res.impact > 24 ? 4 : 2;
      if (res.impact > 26) combo = 1;
      shake = Math.max(shake, 0.55);
      audio.crash();
    }
    safeTimer -= dt;
    if (safeTimer <= 0) {
      safeTimer = 0.4;
      const road = nearestRoad(taxi.x, taxi.z);
      if (road && road.dist < road.half * 0.8 && !isDeadlyWater(taxi.x, taxi.z)) {
        safe.x = taxi.x;
        safe.z = taxi.z;
        safe.yaw = taxi.yaw;
      }
    }
    updateFare(dt);
    if (!ghost) updateTraffic(dt);
    time -= dt;
    if (time <= 0) {
      time = 0;
      finish();
    }
  } else if (!ghost) {
    updateTraffic(dt * 0.6);
  }

  syncTaxiMesh();
  updatePeople(dt);
  updateProps(dt);
  updateCamera(dt);
  followSun();
  audio.update(taxi, dt);
  updateHud();
}

function readInput() {
  input.throttle = 0;
  input.brake = 0;
  input.steer = 0;
  input.handbrake = false;
  input.boost = false;
  if (down.has("KeyW") || down.has("ArrowUp")) input.throttle = 1;
  if (down.has("KeyS") || down.has("ArrowDown")) input.brake = 1;
  if (down.has("KeyA") || down.has("ArrowLeft")) input.steer -= 1;
  if (down.has("KeyD") || down.has("ArrowRight")) input.steer += 1;
  input.throttle = Math.max(input.throttle, touch.throttle);
  input.brake = Math.max(input.brake, touch.brake);
  input.steer = Math.max(-1, Math.min(1, input.steer + touch.steer));
  input.handbrake = down.has("Space") || touch.drift;
  input.boost = down.has("ShiftLeft") || down.has("ShiftRight") || touch.boost;
  if (ghost) return;
  const pads = navigator.getGamepads ? navigator.getGamepads() : null;
  const pad = pads && pads[0];
  if (!pad) return;
  const ax = pad.axes[0] || 0;
  const ay = pad.axes[1] || 0;
  if (Math.abs(ax) > 0.16) input.steer = Math.max(-1, Math.min(1, input.steer + ax));
  if (ay < -0.16) input.throttle = Math.max(input.throttle, Math.min(1, -ay));
  if (ay > 0.16) input.brake = Math.max(input.brake, Math.min(1, ay));
  if (pad.buttons[0] && pad.buttons[0].pressed) input.handbrake = true;
  if ((pad.buttons[1] && pad.buttons[1].pressed) || (pad.buttons[7] && pad.buttons[7].pressed)) input.boost = true;
  if (pad.buttons[2] && pad.buttons[2].pressed && hornCd <= 0) {
    hornCd = 0.45;
    audio.horn();
  }
}

function updateFare(dt) {
  if (ghost) return;
  if (rider) {
    fareLeft -= dt;
    if (fareLeft <= 0) {
      failFare();
      return;
    }
    const dx = rider.dest.x - taxi.x;
    const dz = rider.dest.z - taxi.z;
    if (dx * dx + dz * dz < rider.dest.radius * rider.dest.radius && Math.abs(taxi.speed) < 9) deliver();
    return;
  }
  let bestP = null;
  let bestD = Infinity;
  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    if (!p.waiting) continue;
    const d = Math.hypot(p.x - taxi.x, p.z - taxi.z);
    const close = d < 3.2 || (d < 5 && Math.abs(taxi.speed) < 16);
    if (close && d < bestD) {
      bestD = d;
      bestP = p;
    }
  }
  if (bestP) board(bestP);
}

function board(p) {
  rider = p;
  p.waiting = false;
  const from = { x: p.x, z: p.z };
  const dest = p.forced || chooseDest(p.near, from);
  p.dest = dest;
  const dist = Math.hypot(dest.x - from.x, dest.z - from.z);
  fareLimit = dist / 26 + 12;
  fareLeft = fareLimit;
  p.base = 70 + dist * 0.42;
  speech = dest.lines[Math.floor(Math.random() * dest.lines.length)];
  speechT = 4.2;
  audio.pickup();
  taxiMesh.visual.add(p.fig);
  p.fig.position.set(0.4, 0.96, 0.22);
  p.fig.rotation.set(0, 0.15, 0);
  p.fig.scale.setScalar(0.5);
  p.x = taxi.x;
  p.z = taxi.z;
}

function deliver() {
  const ratio = Math.max(0, fareLeft / fareLimit);
  let rating = "OK";
  let bonus = 8;
  if (ratio > 0.55) {
    rating = "CRAZY";
    bonus = 28;
  } else if (ratio > 0.35) {
    rating = "GREAT";
    bonus = 20;
  } else if (ratio > 0.15) {
    rating = "GOOD";
    bonus = 14;
  }
  const pay = Math.round(rider.base * (1 + ratio) * combo);
  score += pay;
  time += bonus;
  combo = Math.min(5, combo + 1);
  audio.deliver(rating === "CRAZY");
  flashPop(rating, "+" + pay + "  ·  +" + bonus + "s", rating === "CRAZY" || rating === "GREAT" ? "good" : "ok");
  releaseRider();
}

function failFare() {
  combo = 1;
  time -= 4;
  audio.crash();
  flashPop("TOO SLOW", rider ? rider.name + " bailed" : "", "bad");
  releaseRider();
}

function releaseRider() {
  if (!rider) return;
  const p = rider;
  rider = null;
  fareLeft = 0;
  scene.attach(p.fig);
  p.fig.scale.setScalar(1);
  const spot = freeSpot(p.near);
  p.x = spot.x;
  p.z = spot.z;
  p.yaw = spot.yaw;
  p.near = spot.near;
  p.forced = null;
  p.waiting = true;
  p.fig.position.set(spot.x, surfaceY(spot.x, spot.z), spot.z);
  p.fig.rotation.set(0, spot.yaw, 0);
}

function chooseDest(nearId, from) {
  const pool = [];
  for (let i = 0; i < LANDMARKS.length; i++) {
    const lm = LANDMARKS[i];
    if (lm.id === nearId) continue;
    const d = Math.hypot(lm.x - from.x, lm.z - from.z);
    if (d < 180) continue;
    pool.push(lm);
  }
  if (pool.length === 0) {
    for (let i = 0; i < LANDMARKS.length; i++) if (LANDMARKS[i].id !== nearId) pool.push(LANDMARKS[i]);
  }
  if (pool.length === 0) return LANDMARKS[0];
  return pool[Math.floor(Math.random() * pool.length)];
}

function nearestLandmarkId(x, z) {
  let id = LANDMARKS[0].id;
  let bestD = Infinity;
  for (let i = 0; i < LANDMARKS.length; i++) {
    const d = Math.hypot(LANDMARKS[i].x - x, LANDMARKS[i].z - z);
    if (d < bestD) {
      bestD = d;
      id = LANDMARKS[i].id;
    }
  }
  return id;
}

function syncTaxiMesh() {
  taxiMesh.rig.position.set(taxi.x, taxi.y, taxi.z);
  taxiMesh.rig.rotation.y = taxi.yaw;
  const ahead = forwardFromYaw(taxi.yaw);
  const yA = ghost ? 0 : surfaceY(taxi.x + ahead.x * 3, taxi.z + ahead.z * 3);
  const yB = ghost ? 0 : surfaceY(taxi.x - ahead.x * 3, taxi.z - ahead.z * 3);
  const pitch = Math.atan2(yA - yB, 6);
  const leanTarget = Math.max(-0.2, Math.min(0.2, -input.steer * 0.11 - taxi.lateral * 0.004));
  taxiMesh.visual.rotation.x += (pitch - taxiMesh.visual.rotation.x) * 0.2;
  taxiMesh.visual.rotation.z += (leanTarget - taxiMesh.visual.rotation.z) * 0.18;
  wheelSpin += taxi.speed * 0.016;
  for (let i = 0; i < taxiMesh.wheels.length; i++) {
    const w = taxiMesh.wheels[i];
    w.rotation.x = wheelSpin;
    w.rotation.y = i < 2 ? input.steer * 0.32 : 0;
  }
}

function updatePeople(dt) {
  const bob = Math.sin(simTime * 3) * 0.06;
  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    if (!p.waiting) {
      if (p.fig.userData.arm) p.fig.userData.arm.rotation.x = Math.sin(simTime * 6) * 0.8;
      continue;
    }
    p.fig.position.y = surfaceY(p.x, p.z) + bob;
    if (p.fig.userData.arm) p.fig.userData.arm.rotation.x = Math.sin(simTime * 4 + i) * 0.6;
    p.fig.rotation.y = p.yaw + Math.sin(simTime * 1.4 + i) * 0.15;
  }
  if (rider && rider.dest) {
    const dx = rider.dest.x - taxi.x;
    const dz = rider.dest.z - taxi.z;
    arrow.visible = mode === "play" || mode === "countdown" || !!SHOT;
    arrow.position.set(taxi.x, taxi.y + 4.4 + Math.sin(simTime * 5) * 0.25, taxi.z);
    arrow.rotation.y = yawToFace(dx, dz);
    beacon.visible = arrow.visible;
    beacon.position.set(rider.dest.x, surfaceY(rider.dest.x, rider.dest.z) + 0.4, rider.dest.z);
    ring.material.color.set(rider.dest.color);
    ring.material.emissive.set(rider.dest.color);
    pillar.material.color.set(rider.dest.color);
  } else if (mode === "play" || mode === "countdown") {
    const near = nearestWaiter();
    if (near) {
      arrow.visible = true;
      arrow.position.set(taxi.x, taxi.y + 4.2 + Math.sin(simTime * 4) * 0.2, taxi.z);
      arrow.rotation.y = yawToFace(near.x - taxi.x, near.z - taxi.z);
    } else arrow.visible = false;
    beacon.visible = false;
  } else if (!SHOT) {
    arrow.visible = false;
    beacon.visible = false;
  }
}

function nearestWaiter() {
  let best = null;
  let bestD = Infinity;
  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    if (!p.waiting) continue;
    const d = Math.hypot(p.x - taxi.x, p.z - taxi.z);
    if (d < bestD) {
      bestD = d;
      best = p;
    }
  }
  return best;
}

function updateProps(dt) {
  const drops = city.special.jet.userData.drops;
  if (drops) {
    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      const h = (simTime * 24 + d.userData.h) % 140;
      const spread = (h / 140) * 7;
      d.position.set(Math.sin(i * 1.7) * spread, h, Math.cos(i * 1.1) * spread);
      d.scale.setScalar(0.4 + h / 90);
    }
  }
  const hands = city.special.clock;
  if (hands.hour && hands.minute) {
    const now = new Date();
    const mins = now.getMinutes() + now.getSeconds() / 60;
    const hrs = (now.getHours() % 12) + mins / 60;
    const angM = (mins / 60) * Math.PI * 2;
    const angH = (hrs / 12) * Math.PI * 2;
    hands.minute.rotation.y = yawToFace(Math.sin(angM), Math.cos(angM));
    hands.hour.rotation.y = yawToFace(Math.sin(angH), Math.cos(angH));
  }
  if (city.waterTex) {
    city.waterTex.offset.x = (simTime * 0.012) % 1;
    city.waterTex.offset.y = (simTime * 0.006) % 1;
  }
  if (city.clouds) city.clouds.position.x = Math.sin(simTime * 0.03) * 50;
}

function updateCamera(dt) {
  if (wideShot) {
    const p = landmark("pont");
    scene.fog.near = 500;
    scene.fog.far = 7000;
    camera.up.set(0, 0, -1);
    camera.position.set(p.x + 40, 1680, p.z + 80);
    camera.lookAt(p.x, 0, p.z);
    setFov(48);
    return;
  }
  scene.fog.near = 220;
  scene.fog.far = 1500;
  if (mode === "title") {
    const j = landmark("jet");
    const a = simTime * 0.15;
    camera.up.set(0, 1, 0);
    camera.position.set(j.x - 36 + Math.sin(a) * 24, 26 + Math.sin(simTime * 0.4) * 2, j.z + 62);
    camera.lookAt(j.x, 16, j.z);
    setFov(66);
    return;
  }
  if (topDown) {
    camera.up.set(0, 0, -1);
    camera.position.set(taxi.x, taxi.y + 240, taxi.z);
    camera.lookAt(taxi.x, taxi.y, taxi.z);
    setFov(52);
    return;
  }
  taxiMesh.rig.updateWorldMatrix(true, false);
  fwdVec.set(0, 0, -1).applyQuaternion(taxiMesh.rig.quaternion);
  fwdVec.y = 0;
  if (fwdVec.lengthSq() < 1e-8) fwdVec.set(0, 0, -1);
  else fwdVec.normalize();
  const dist = 11 + Math.abs(taxi.speed) * 0.1;
  lookAt.set(taxi.x, taxi.y + 1.55, taxi.z).addScaledVector(fwdVec, 6);
  camDesired.set(taxi.x, taxi.y + 5.2, taxi.z).addScaledVector(fwdVec, -dist);
  const k = 1 - Math.exp(-4 * Math.max(dt, 0.001));
  camera.position.lerp(camDesired, k);
  pullCamera(camera.position, lookAt);
  if (shake > 0.01) {
    camera.position.x += (Math.random() - 0.5) * shake;
    camera.position.y += (Math.random() - 0.5) * shake * 0.4;
    shake *= Math.max(0, 1 - dt * 3.2);
  }
  camera.up.set(0, 1, 0);
  camera.lookAt(lookAt);
  const fov = Math.max(66, Math.min(80, 66 + Math.abs(taxi.speed) * 0.2));
  setFov(fov);
}

function pullCamera(cam, focus) {
  const dx = focus.x - cam.x;
  const dy = focus.y - cam.y;
  const dz = focus.z - cam.z;
  const dist = Math.hypot(dx, dz);
  if (dist < 3) return;
  const steps = Math.ceil(dist / 3);
  let hit = 1;
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    const x = cam.x + dx * t;
    const z = cam.z + dz * t;
    const y = cam.y + dy * t;
    const near = hash.query(x, z, 4);
    let blocked = false;
    for (let k = 0; k < near.length; k++) {
      const b = near[k];
      if (b.kind === "rail") continue;
      const top = b.top == null ? 1e9 : b.top;
      if (y > top + 1) continue;
      if (circleOBB(x, z, 0.7, b)) {
        blocked = true;
        break;
      }
    }
    if (blocked) {
      hit = t;
      break;
    }
  }
  if (hit < 0.98) {
    const t = Math.max(0.12, hit - 0.12);
    cam.x += dx * t;
    cam.z += dz * t;
    cam.y = Math.max(focus.y + 1.8, cam.y + dy * t);
  }
}

function snapCamera() {
  taxiMesh.rig.position.set(taxi.x, taxi.y, taxi.z);
  taxiMesh.rig.rotation.set(0, taxi.yaw, 0);
  taxiMesh.rig.updateWorldMatrix(true, true);
  fwdVec.set(0, 0, -1).applyQuaternion(taxiMesh.rig.quaternion);
  fwdVec.y = 0;
  fwdVec.normalize();
  camera.up.set(0, 1, 0);
  camera.position.set(taxi.x, taxi.y + 5.2, taxi.z).addScaledVector(fwdVec, -12);
  lookAt.set(taxi.x, taxi.y + 1.5, taxi.z).addScaledVector(fwdVec, 6);
  camera.lookAt(lookAt);
}

function followSun() {
  sun.position.set(taxi.x - 70, taxi.y + 160, taxi.z + 40);
  sun.target.position.set(taxi.x, taxi.y, taxi.z);
  sun.target.updateMatrixWorld();
}

function setFov(v) {
  if (Math.abs(camera.fov - v) < 0.15) return;
  camera.fov = v;
  camera.updateProjectionMatrix();
}

function updateTraffic(dt) {
  for (let i = 0; i < traffic.length; i++) {
    const car = traffic[i];
    car.dist += car.speed * dt * car.dir;
    if (car.road.closed) {
      car.dist = ((car.dist % car.road.length) + car.road.length) % car.road.length;
    } else if (car.dist > car.road.length - 4) {
      car.dist = car.road.length - 4;
      car.dir = -1;
    } else if (car.dist < 4) {
      car.dist = 4;
      car.dir = 1;
    }
    const p = pointOnRoad(car.road, car.dist);
    const len = Math.hypot(p.dx, p.dz) || 1;
    const fwd = { x: (p.dx / len) * car.dir, z: (p.dz / len) * car.dir };
    const right = rightFromForward(fwd);
    const x = p.x + right.x * car.lane;
    const z = p.z + right.z * car.lane;
    const yaw = yawToFace(fwd.x, fwd.z);
    const y = surfaceY(x, z);
    car.mesh.position.set(x, y, z);
    car.mesh.rotation.y = yaw;
    car.box.cx = x;
    car.box.cz = z;
    car.box.rot = yaw;
    car.box.top = y + 1.6;
  }
}

function buildTraffic() {
  const list = [];
  const named = [
    "Rue du Mont-Blanc",
    "Quai du Mont-Blanc",
    "Quai du Général-Guisan",
    "Rue du Rhône",
    "Quai des Bergues",
    "Rue de la Corraterie",
    "Avenue de la Paix",
    "Rue des Pâquis",
  ];
  for (let i = 0; i < named.length; i++) {
    const road = roadByName(named[i]);
    if (road && road.length > 70) list.push(road);
  }
  let n = 0;
  for (let r = 0; r < list.length; r++) {
    const road = list[r];
    const cars = road.length > 400 ? 3 : 2;
    for (let c = 0; c < cars; c++) {
      const dist = (road.length * (c + 1)) / (cars + 1);
      const lane = (c % 2 === 0 ? 1 : -1) * Math.min(3.2, road.width * 0.22);
      const color = CAR_COLORS[n % CAR_COLORS.length];
      const mesh = makeCar(color);
      const box = { cx: 0, cz: 0, hx: 0.95, hz: 2.05, rot: 0, kind: "traffic", top: 2 };
      const car = { road, dist, dir: 1, lane, speed: 12 + (n % 5) * 1.6, mesh, box };
      traffic.push(car);
      scene.add(mesh);
      n++;
    }
  }
  updateTraffic(0);
}

function makeCar(color) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(1.7, 0.42, 3.5),
    new THREE.MeshStandardMaterial({ color, roughness: 0.5 })
  );
  body.position.y = 0.55;
  body.castShadow = true;
  g.add(body);
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.4, 1.5),
    new THREE.MeshStandardMaterial({ color, roughness: 0.45 })
  );
  cabin.position.set(0, 0.95, 0.15);
  cabin.castShadow = true;
  g.add(cabin);
  const glass = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 0.28, 1.2),
    new THREE.MeshStandardMaterial({ color: "#b9e4f6", roughness: 0.15, transparent: true, opacity: 0.85 })
  );
  glass.position.set(0, 1.0, 0.15);
  g.add(glass);
  return g;
}

function buildPeople() {
  const scripted = sidewalkAhead() || pickupNear("cornavin");
  const fig0 = buildMinifig(0);
  scene.add(fig0);
  people.push({
    name: "Léa",
    fig: fig0,
    x: scripted.x,
    z: scripted.z,
    yaw: scripted.yaw,
    near: "cornavin",
    forced: landmark("jet"),
    waiting: true,
    dest: null,
    base: 0,
  });
  fig0.position.set(scripted.x, surfaceY(scripted.x, scripted.z), scripted.z);
  fig0.rotation.y = scripted.yaw;

  const used = new Set();
  used.add(keyOf(scripted.x, scripted.z));
  let made = 1;
  for (let i = 0; i < CITY.pickups.length && made < 7; i++) {
    const s = CITY.pickups[i];
    if (s.near === "jet") continue;
    if (Math.hypot(s.x - scripted.x, s.z - scripted.z) < 30) continue;
    const k = keyOf(s.x, s.z);
    if (used.has(k)) continue;
    used.add(k);
    const fig = buildMinifig(made);
    scene.add(fig);
    const near = s.near || nearestLandmarkId(s.x, s.z);
    people.push({
      name: NAMES[made % NAMES.length],
      fig,
      x: s.x,
      z: s.z,
      yaw: s.yaw,
      near,
      forced: null,
      waiting: true,
      dest: null,
      base: 0,
    });
    fig.position.set(s.x, surfaceY(s.x, s.z), s.z);
    fig.rotation.y = s.yaw;
    made++;
  }
}

function keyOf(x, z) {
  return Math.round(x) + ":" + Math.round(z);
}

function sidewalkAhead() {
  const road = montBlanc;
  const p = pointOnRoad(road, 26);
  const len = Math.hypot(p.dx, p.dz) || 1;
  const right = rightFromForward({ x: p.dx / len, z: p.dz / len });
  for (const s of [1, -1]) {
    const x = p.x + right.x * s * (road.width / 2 + 1.7);
    const z = p.z + right.z * s * (road.width / 2 + 1.7);
    if (isDeadlyWater(x, z)) continue;
    if (blocked(x, z)) continue;
    return { x, z, yaw: yawToFace(p.x - x, p.z - z) };
  }
  return null;
}

function blocked(x, z) {
  const near = hash.query(x, z, 3);
  for (let i = 0; i < near.length; i++) {
    if (near[i].kind === "rail") continue;
    if (circleOBB(x, z, 0.7, near[i])) return true;
  }
  return false;
}

function pickupNear(id) {
  for (let i = 0; i < CITY.pickups.length; i++) {
    if (CITY.pickups[i].near === id) return CITY.pickups[i];
  }
  const lm = landmark(id);
  return { x: lm.x + 8, z: lm.z + 8, yaw: 0, near: id };
}

function freeSpot(avoid) {
  for (let i = 0; i < CITY.pickups.length; i++) {
    const s = CITY.pickups[i];
    if (s.near && s.near === avoid) continue;
    let taken = false;
    for (let k = 0; k < people.length; k++) {
      if (!people[k].waiting) continue;
      if (Math.hypot(people[k].x - s.x, people[k].z - s.z) < 4) taken = true;
    }
    if (!taken) return s;
  }
  return CITY.pickups[0];
}

function beginRide(skipCount) {
  audio.unlock();
  resetRun();
  if (skipCount) {
    mode = "play";
    time = START_TIME;
    setCountdown("");
  } else {
    mode = "countdown";
    countLeft = 3;
    countShown = 0;
    setCountdown("3");
  }
  showMenu(false);
  snapCamera();
}

function resetRun() {
  if (rider) {
    scene.attach(rider.fig);
    rider.fig.scale.setScalar(1);
    rider.waiting = true;
    rider = null;
  }
  taxi.x = startPoint.x;
  taxi.z = startPoint.z;
  taxi.yaw = startYaw;
  taxi.speed = 0;
  taxi.lateral = 0;
  taxi.vx = 0;
  taxi.vz = 0;
  taxi.boostMeter = 1;
  taxi.boosting = false;
  taxi.y = surfaceY(taxi.x, taxi.z);
  safe.x = taxi.x;
  safe.z = taxi.z;
  safe.yaw = taxi.yaw;
  score = 0;
  combo = 1;
  time = START_TIME;
  fareLeft = 0;
  speech = "";
  speechT = 0;
  topDown = false;
  wideShot = false;
  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    if (p.fig.parent !== scene) scene.attach(p.fig);
    p.fig.scale.setScalar(1);
    p.waiting = true;
    p.forced = i === 0 ? landmark("jet") : null;
    p.fig.position.set(p.x, surfaceY(p.x, p.z), p.z);
    p.fig.rotation.set(0, p.yaw, 0);
  }
}

function finish() {
  mode = "over";
  if (score > best) {
    best = score;
    try {
      localStorage.setItem(SAVE_KEY, String(best));
    } catch (err) {
      /* private mode */
    }
  }
  arrow.visible = false;
  beacon.visible = false;
  const over = document.getElementById("over");
  over.hidden = false;
  document.getElementById("over-score").textContent = String(score);
  document.getElementById("over-best").textContent = String(best);
  document.getElementById("menu").hidden = true;
}

function poseShot(shot) {
  mode = "play";
  time = 76.4;
  score = 1860;
  combo = 2;
  showMenu(false);
  document.getElementById("over").hidden = true;
  const road = roadByName("Pont du Mont-Blanc");
  const p = pointOnRoad(road, road.length * 0.48);
  taxi.x = p.x;
  taxi.z = p.z;
  taxi.yaw = yawToFace(p.dx, p.dz);
  taxi.speed = shot === "top" || shot === "wide" ? 0 : 22;
  taxi.y = surfaceY(taxi.x, taxi.z);
  taxi.lateral = 0;
  if (!rider) board(people[0]);
  if (shot === "top") topDown = true;
  if (shot === "wide") wideShot = true;
  syncTaxiMesh();
  snapCamera();
  if (shot === "top" || shot === "wide") updateCamera(0.016);
}

function onKeyDown(e) {
  if (e.repeat) return;
  if (e.code === "Space" || e.code === "ArrowUp" || e.code === "ArrowDown" || e.code === "ArrowLeft" || e.code === "ArrowRight") {
    e.preventDefault();
  }
  down.add(e.code);
  audio.unlock();
  if (e.code === "Enter") {
    if (mode === "title" || mode === "over") beginRide(false);
  } else if (e.code === "Escape" && mode === "play") {
    mode = "pause";
    document.getElementById("pause").hidden = false;
  } else if (e.code === "Escape" && mode === "pause") {
    mode = "play";
    document.getElementById("pause").hidden = true;
  } else if (e.code === "KeyC" && (mode === "play" || mode === "pause")) {
    topDown = !topDown;
    wideShot = false;
  } else if (e.code === "KeyM") {
    const muted = audio.toggleMute();
    document.getElementById("mute").hidden = !muted;
  } else if (e.code === "KeyR" && mode === "play") {
    taxi.x = safe.x;
    taxi.z = safe.z;
    taxi.yaw = safe.yaw;
    taxi.speed = 0;
    taxi.lateral = 0;
    taxi.vx = 0;
    taxi.vz = 0;
    taxi.y = surfaceY(taxi.x, taxi.z);
  }
}

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / Math.max(1, h);
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
}

function loadBest() {
  try {
    return Number(localStorage.getItem(SAVE_KEY) || 0) || 0;
  } catch (err) {
    return 0;
  }
}

function fmtTime(t) {
  const s = Math.max(0, t);
  if (s < 15) return s.toFixed(1);
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return m + ":" + String(r).padStart(2, "0");
}

function setCountdown(text) {
  const el = document.getElementById("count");
  el.textContent = text;
  el.hidden = !text;
}

function flashPop(title, sub, kind) {
  const el = document.getElementById("pop");
  el.className = "pop " + (kind || "ok");
  el.innerHTML = "<b>" + title + "</b><span>" + sub + "</span>";
  el.hidden = false;
  popT = 1.35;
}

function showMenu(on) {
  document.getElementById("menu").hidden = !on;
  document.getElementById("over").hidden = true;
  document.getElementById("pause").hidden = true;
}

function buildUi() {
  const stops = LANDMARKS.map((lm) => `<li style="--c:${lm.color}"><b>${lm.short}</b><span>${lm.blurb}</span></li>`).join("");
  ui.innerHTML = `
    <div id="hud">
      <div class="timer panel" id="timer">1:30</div>
      <div class="fare panel" id="farebox">
        <div class="fare-top"><b id="dest">FIND A FARE</b><span id="faretime"></span></div>
        <div class="bar"><i id="farebar"></i></div>
      </div>
      <div class="score panel"><b id="score">0</b><span id="combo">x1</span></div>
      <div class="speed panel"><b id="speed">0</b><span>km/h</span></div>
      <div class="boost panel"><i id="boostbar"></i></div>
      <canvas id="map" width="180" height="180"></canvas>
      <div id="speech" class="panel" hidden></div>
      <div id="pop" class="pop" hidden></div>
      <div id="count" hidden></div>
      <div id="mute" class="panel" hidden>MUTE</div>
      <div id="selftest" hidden></div>
    </div>
    <div id="menu">
      <div class="card">
        <p class="eyebrow">a brick cab · real streets</p>
        <h1>BRICK TAXI <em>— GENÈVE</em></h1>
        <p class="lead">Pick up a minifig and race them across Geneva before the fare clock runs out. The ten stops sit where they really are.</p>
        <ol class="stops">${stops}</ol>
        <div class="keys">
          <span><b>W</b> gas</span><span><b>S</b> brake</span><span><b>A D</b> steer</span>
          <span><b>Space</b> drift</span><span><b>Shift</b> boost</span><span><b>C</b> overhead</span>
          <span><b>H</b> horn</span><span><b>R</b> recover</span><span><b>M</b> mute</span>
        </div>
        <button id="start" type="button">START THE METER</button>
        <p class="best">Best fare sheet <b id="best">${best}</b></p>
      </div>
    </div>
    <div id="pause" class="veil" hidden><div class="card slim"><h2>PAUSED</h2><p>Esc to roll again.</p></div></div>
    <div id="over" class="veil" hidden>
      <div class="card slim">
        <p class="eyebrow">shift over</p>
        <h2>TIME'S UP</h2>
        <p class="bigscore" id="over-score">0</p>
        <p class="best">Best <b id="over-best">0</b></p>
        <button id="again" type="button">ANOTHER SHIFT</button>
      </div>
    </div>
    <div id="touch">
      <div id="stick" aria-hidden="true"><i id="knob"></i></div>
      <div class="tbtn">
        <button type="button" id="btn-boost">BOOST</button>
        <button type="button" id="btn-drift">DRIFT</button>
        <button type="button" id="btn-horn">HORN</button>
      </div>
    </div>
  `;
  document.getElementById("start").addEventListener("click", () => beginRide(false));
  document.getElementById("again").addEventListener("click", () => beginRide(false));
  const stick = document.getElementById("stick");
  const knob = document.getElementById("knob");
  let stickId = null;
  stick.addEventListener("pointerdown", (e) => {
    stickId = e.pointerId;
    stick.setPointerCapture(e.pointerId);
    moveStick(e);
    audio.unlock();
  });
  stick.addEventListener("pointermove", (e) => {
    if (e.pointerId === stickId) moveStick(e);
  });
  const endStick = (e) => {
    if (e.pointerId !== stickId) return;
    stickId = null;
    touch.steer = 0;
    touch.throttle = 0;
    touch.brake = 0;
    knob.style.transform = "translate(-50%, -50%)";
  };
  stick.addEventListener("pointerup", endStick);
  stick.addEventListener("pointercancel", endStick);
  holdButton("btn-boost", "boost");
  holdButton("btn-drift", "drift");
  document.getElementById("btn-horn").addEventListener("pointerdown", () => {
    touch.horn = true;
    audio.unlock();
  });
  document.body.addEventListener("touchstart", () => document.body.classList.add("touch"), { passive: true });

  function moveStick(e) {
    const rect = stick.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = e.clientX - cx;
    let dy = e.clientY - cy;
    const max = rect.width * 0.38;
    const len = Math.hypot(dx, dy) || 1;
    const clamped = Math.min(max, len);
    dx = (dx / len) * clamped;
    dy = (dy / len) * clamped;
    knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    touch.steer = Math.max(-1, Math.min(1, dx / max));
    const vy = -dy / max;
    touch.throttle = vy > 0.12 ? Math.min(1, vy) : 0;
    touch.brake = vy < -0.12 ? Math.min(1, -vy) : 0;
  }
  function holdButton(id, field) {
    const el = document.getElementById(id);
    const on = (e) => {
      e.preventDefault();
      touch[field] = true;
      audio.unlock();
    };
    const off = () => {
      touch[field] = false;
    };
    el.addEventListener("pointerdown", on);
    el.addEventListener("pointerup", off);
    el.addEventListener("pointerleave", off);
    el.addEventListener("pointercancel", off);
  }
}

function updateHud() {
  const timer = document.getElementById("timer");
  if (!timer) return;
  timer.textContent = fmtTime(mode === "title" ? START_TIME : time);
  timer.classList.toggle("low", mode === "play" && time < 12);
  document.getElementById("score").textContent = String(score);
  document.getElementById("combo").textContent = "x" + combo;
  document.getElementById("speed").textContent = String(Math.round(Math.abs(taxi.speed) * 3.6));
  document.getElementById("boostbar").style.width = Math.round(taxi.boostMeter * 100) + "%";
  const dest = document.getElementById("dest");
  const faretime = document.getElementById("faretime");
  const farebar = document.getElementById("farebar");
  if (rider && rider.dest) {
    dest.textContent = rider.dest.short;
    dest.style.color = rider.dest.color;
    faretime.textContent = Math.max(0, fareLeft).toFixed(1) + "s";
    farebar.style.width = Math.max(0, Math.min(100, (fareLeft / fareLimit) * 100)) + "%";
    farebar.style.background = rider.dest.color;
  } else {
    dest.textContent = mode === "play" ? "FIND A FARE" : "BRICK TAXI";
    dest.style.color = "";
    faretime.textContent = "";
    farebar.style.width = "0%";
  }
  const bubble = document.getElementById("speech");
  if (speechT > 0 && rider) {
    bubble.hidden = false;
    bubble.textContent = rider.name + ": “" + speech + "”";
  } else bubble.hidden = true;
  const pop = document.getElementById("pop");
  if (popT <= 0 && pop) pop.hidden = true;
  const count = document.getElementById("count");
  if (count && mode !== "countdown" && goFlash <= 0) count.hidden = true;
  drawMap();
}

function drawMap() {
  const c = document.getElementById("map");
  if (!c) return;
  const g = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  g.clearRect(0, 0, w, h);
  g.fillStyle = "#e7f6d8";
  g.fillRect(0, 0, w, h);
  const X = (x) => 10 + ((x - mapBounds.minX) / (mapBounds.maxX - mapBounds.minX)) * (w - 20);
  const Y = (z) => 10 + ((z - mapBounds.minZ) / (mapBounds.maxZ - mapBounds.minZ)) * (h - 20);
  g.fillStyle = "#8ec8ee";
  g.beginPath();
  g.moveTo(X(WATER[0].x), Y(WATER[0].z));
  for (let i = 1; i < WATER.length; i++) g.lineTo(X(WATER[i].x), Y(WATER[i].z));
  g.closePath();
  g.fill();
  g.strokeStyle = "#3c434c";
  g.lineWidth = 2;
  g.lineCap = "round";
  for (let i = 0; i < ROADS.length; i++) {
    const road = ROADS[i];
    g.strokeStyle = road.bridge || road.pier ? "#c9843a" : "#3c434c";
    g.lineWidth = road.bridge ? 3 : 2;
    g.beginPath();
    g.moveTo(X(road.points[0].x), Y(road.points[0].z));
    for (let k = 1; k < road.points.length; k++) g.lineTo(X(road.points[k].x), Y(road.points[k].z));
    if (road.closed) g.closePath();
    g.stroke();
  }
  for (let i = 0; i < LANDMARKS.length; i++) {
    const lm = LANDMARKS[i];
    g.fillStyle = lm.color;
    g.beginPath();
    g.arc(X(lm.x), Y(lm.z), 3.2, 0, Math.PI * 2);
    g.fill();
  }
  for (let i = 0; i < people.length; i++) {
    if (!people[i].waiting) continue;
    g.fillStyle = "#f5c400";
    g.fillRect(X(people[i].x) - 2, Y(people[i].z) - 2, 4, 4);
  }
  if (rider && rider.dest) {
    g.strokeStyle = rider.dest.color;
    g.lineWidth = 2;
    g.beginPath();
    g.arc(X(rider.dest.x), Y(rider.dest.z), 7, 0, Math.PI * 2);
    g.stroke();
  }
  const fx = X(taxi.x);
  const fy = Y(taxi.z);
  const fwd = forwardFromYaw(taxi.yaw);
  const scale = (w - 20) / (mapBounds.maxX - mapBounds.minX);
  g.save();
  g.translate(fx, fy);
  const scaleZ = (h - 20) / (mapBounds.maxZ - mapBounds.minZ);
  g.rotate(Math.atan2(fwd.x * scale, -fwd.z * scaleZ));
  g.fillStyle = "#f5c400";
  g.strokeStyle = "#1a1a1a";
  g.lineWidth = 1;
  g.beginPath();
  g.moveTo(0, -7);
  g.lineTo(5, 6);
  g.lineTo(-5, 6);
  g.closePath();
  g.fill();
  g.stroke();
  g.restore();
  g.fillStyle = "#1a1a1a";
  g.font = "700 11px Nunito, sans-serif";
  g.fillText("N", w / 2 - 3, 12);
}

function selfTestControls() {
  const lines = [];
  let fails = 0;
  const check = (cond, msg) => {
    lines.push((cond ? "PASS " : "FAIL ") + msg);
    if (!cond) fails++;
  };
  const prevGhost = ghost;
  const prevMode = mode;
  ghost = true;
  mode = "play";
  topDown = false;
  wideShot = false;

  const measureForward = (yaw) => {
    taxi.yaw = yaw;
    taxiMesh.rig.rotation.set(0, yaw, 0);
    taxiMesh.visual.rotation.set(0, 0, 0);
    taxiMesh.rig.updateWorldMatrix(true, true);
    const qf = new THREE.Vector3(0, 0, -1).applyQuaternion(taxiMesh.rig.quaternion);
    const f = forwardFromYaw(yaw);
    return qf.x * f.x + qf.y * 0 + qf.z * f.z;
  };
  check(measureForward(0) > 0.999, "quaternion forward matches yaw 0");
  check(measureForward(0.7) > 0.999, "quaternion forward matches yaw 0.7");

  const drive = (codes, frames) => {
    for (const code of codes) down.add(code);
    for (let i = 0; i < frames; i++) tick(1 / 60);
    for (const code of codes) down.delete(code);
  };

  taxi.x = 0;
  taxi.z = 0;
  taxi.yaw = 0;
  taxi.speed = 0;
  taxi.lateral = 0;
  taxi.vx = 0;
  taxi.vz = 0;
  taxiMesh.visual.rotation.set(0, 0, 0);
  snapCamera();
  drive(["KeyW"], 36);
  check(taxi.z < -2, "W decreases z (" + taxi.z.toFixed(2) + ")");
  taxiMesh.rig.updateWorldMatrix(true, true);
  const nosePos = new THREE.Vector3();
  const rigPos = new THREE.Vector3();
  nose.getWorldPosition(nosePos);
  taxiMesh.rig.getWorldPosition(rigPos);
  nosePos.sub(rigPos);
  nosePos.y = 0;
  nosePos.normalize();
  const vel = new THREE.Vector3(taxi.vx, 0, taxi.vz);
  vel.normalize();
  check(nosePos.dot(vel) > 0.9, "nose aligns with velocity (" + nosePos.dot(vel).toFixed(3) + ")");
  const camOff = camTmp.copy(camera.position).sub(taxiMesh.rig.position);
  camOff.y = 0;
  fwdVec.set(0, 0, -1).applyQuaternion(taxiMesh.rig.quaternion);
  fwdVec.y = 0;
  fwdVec.normalize();
  const behind = camOff.dot(fwdVec);
  check(behind < -4, "camera sits behind the nose (" + behind.toFixed(2) + ")");

  taxi.x = 0;
  taxi.z = 0;
  taxi.yaw = 0;
  taxi.speed = 0;
  taxi.lateral = 0;
  taxi.vx = 0;
  taxi.vz = 0;
  drive(["KeyW", "KeyD"], 42);
  const f = forwardFromYaw(taxi.yaw);
  check(taxi.x > 1, "D turns toward +x (" + taxi.x.toFixed(2) + ")");
  check(f.x > 0.25, "right steer faces east (" + f.x.toFixed(2) + ")");

  taxi.x = 0;
  taxi.z = 0;
  taxi.yaw = 0;
  taxi.speed = 0;
  taxi.lateral = 0;
  drive(["ArrowUp", "ArrowRight"], 30);
  check(taxi.x > 0.4, "ArrowRight turns toward +x (" + taxi.x.toFixed(2) + ")");

  ghost = prevGhost;
  mode = prevMode;
  down.clear();
  input.steer = 0;
  input.throttle = 0;
  const result = { ok: fails === 0, lines };
  window.__selfTestResult = result;
  return result;
}
