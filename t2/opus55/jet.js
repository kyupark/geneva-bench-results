// Jet d'Eau: a deterministic particle plume (billboards sized in metres).
// Every particle follows a closed-form trajectory parameterised by the global
// time, so any frame can be rendered independently and reproducibly.
//
//   core   – vertical streaks (motion-blurred droplets) rising at ~52 m/s
//   spray  – puffs breaking off the crown and falling back downwind
//   mist   – large faint veils around the crown and the falling curtain
//   splash – foam and spray where the water lands and at the nozzle
import * as Cesium from 'https://cdn.jsdelivr.net/npm/cesium@1.146.0/Build/Cesium/index.js';

const G = 9.81;

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Soft gaussian sprite; `stretch` > 1 makes a vertically elongated streak.
function sprite(w, h, sharp) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  const img = g.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = ((x + 0.5) / w) * 2 - 1;
      const dy = ((y + 0.5) / h) * 2 - 1;
      const r2 = dx * dx + dy * dy;
      const a = r2 >= 1 ? 0 : Math.exp(-sharp * r2) * (1 - r2);
      const i = (y * w + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 255;
      img.data[i + 3] = Math.round(a * 255);
    }
  }
  g.putImageData(img, 0, 0);
  return c;
}

// Distance fallen with linear drag (terminal velocity vt), starting at rest.
function fallDistance(t, vt) {
  return vt * t - ((vt * vt) / G) * (1 - Math.exp((-G * t) / vt));
}

export function createJet(
  scene,
  { lon, lat, height, windBearing = 205, windSpeed = 4.0, sunAzimuth = 135 } = {},
) {
  const sa = Cesium.Math.toRadians(sunAzimuth);
  const sun = [Math.sin(sa), Math.cos(sa)]; // horizontal direction towards the sun
  const origin = Cesium.Cartesian3.fromDegrees(lon, lat, height);
  const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(origin);
  // OPAQUE_AND_TRANSLUCENT: the TRANSLUCENT-only mode writes depth, so the
  // transparent fringe of a near particle would punch holes in the ones behind.
  const collection = scene.primitives.add(
    new Cesium.BillboardCollection({ modelMatrix, blendOption: Cesium.BlendOption.OPAQUE_AND_TRANSLUCENT }),
  );
  const streakImg = sprite(32, 128, 2.2);
  const puffImg = sprite(64, 64, 2.6);
  const veilImg = sprite(64, 64, 1.6);
  const wb = Cesium.Math.toRadians(windBearing);
  const wind = [Math.sin(wb), Math.cos(wb)]; // east, north
  const UP = new Cesium.Cartesian3(0, 0, 1);

  const rand = mulberry32(1891);
  const particles = [];
  const add = (p, image, aligned) => {
    p.bb = collection.add({
      image,
      sizeInMeters: true,
      width: 1,
      height: 1,
      alignedAxis: aligned ? UP : Cesium.Cartesian3.ZERO,
      color: new Cesium.Color(1, 1, 1, 0),
    });
    particles.push(p);
  };

  const V0 = 52.0;
  const H = (V0 * V0) / (2 * G); // ~138 m

  // Core streaks: one ascent each, period = ascent time.
  for (let i = 0; i < 1800; i++) {
    const ang = rand() * Math.PI * 2;
    const r = Math.pow(rand(), 1.4);
    const ox = Math.cos(ang) * r, oy = Math.sin(ang) * r;
    add({
      kind: 0,
      phase: rand(),
      v0: V0 * (0.965 + 0.035 * rand()),
      ox,
      oy,
      grow: 0.6 + rand() * 1.2,
      gain: 0.7 + rand() * 0.5,
      // Droplets on the sunward side of the column read brighter.
      shade: 0.84 + 0.16 * (ox * sun[0] + oy * sun[1]),
    }, streakImg, true);
  }
  // Spray: born in the crown, falls back with drag, drifts downwind.
  for (let i = 0; i < 2600; i++) {
    const ang = rand() * Math.PI * 2;
    const vt = 7 + rand() * 12;
    const z0 = H * (0.82 + 0.18 * rand());
    let tDown = 0.5;
    while (fallDistance(tDown, vt) < z0 && tDown < 60) tDown += 0.05;
    add({
      kind: 1,
      phase: rand(),
      life: tDown,
      z0,
      vt,
      ang,
      out: 1.0 + rand() * 3.0, // radial spread speed (m/s)
      drift: 0.6 + rand() * 0.7,
      size0: 4 + rand() * 5,
      gain: 0.7 + rand() * 0.6,
    }, puffImg, false);
  }
  // Mist veils.
  for (let i = 0; i < 520; i++) {
    add({
      kind: 2,
      phase: rand(),
      life: 10 + rand() * 8,
      z0: 45 + rand() * 100,
      r0: rand() * 8,
      ang: rand() * Math.PI * 2,
      drift: 0.5 + rand() * 0.9,
      sink: 1.5 + rand() * 3.5,
      size0: 10 + rand() * 14,
      gain: 0.6 + rand() * 0.7,
    }, veilImg, false);
  }
  // Splash and foam at the nozzle and where the curtain lands.
  for (let i = 0; i < 260; i++) {
    const landing = rand() < 0.55;
    add({
      kind: 3,
      phase: rand(),
      life: 2.5 + rand() * 3.5,
      landing,
      ang: rand() * Math.PI * 2,
      r0: landing ? 6 + rand() * 22 : rand() * 3,
      out: 1 + rand() * 5,
      rise: landing ? 1 + rand() * 4 : 3 + rand() * 9,
      size0: 3 + rand() * 6,
      gain: 0.6 + rand() * 0.6,
    }, puffImg, false);
  }

  const pos = new Cesium.Cartesian3();
  const col = new Cesium.Color(1, 1, 1, 1);

  function set(p, x, y, z, w, h, a, shade) {
    pos.x = x; pos.y = y; pos.z = z;
    p.bb.position = pos;
    p.bb.width = w;
    p.bb.height = h;
    col.red = col.green = col.blue = shade;
    col.alpha = Math.max(0, Math.min(1, a));
    p.bb.color = col;
  }

  function update(time) {
    const landDrift = windSpeed * 6.5;
    for (const p of particles) {
      if (p.kind === 0) {
        const T = p.v0 / G;
        const age = ((((time / T) + p.phase) % 1) + 1) % 1 * T;
        const v = p.v0 - G * age;
        const z = p.v0 * age - 0.5 * G * age * age;
        const u = z / H;
        const spread = 0.6 + p.grow * 3.4 * Math.pow(u, 1.4);
        const x = p.ox * spread + wind[0] * windSpeed * 0.06 * age * age;
        const y = p.oy * spread + wind[1] * windSpeed * 0.06 * age * age;
        const w = 1.4 + 3.8 * Math.pow(u, 1.3);
        const len = Math.max(w * 1.2, 0.16 * Math.abs(v) + 2.0);
        let a = (0.2 + 0.12 * (1 - u)) * p.gain;
        a *= Math.min(1, age / 0.06);
        set(p, x, y, z, w, len, a, p.shade);
      } else if (p.kind === 1) {
        const age = ((((time / p.life) + p.phase) % 1) + 1) % 1 * p.life;
        const f = age / p.life;
        const z = p.z0 - fallDistance(age, p.vt);
        const r = 1.5 + p.out * age;
        const d = p.drift * windSpeed * age;
        const x = Math.cos(p.ang) * r + wind[0] * d;
        const y = Math.sin(p.ang) * r + wind[1] * d;
        const s = p.size0 * (1 + 2.2 * f);
        let a = (0.3 - 0.22 * f) * p.gain;
        a *= Math.min(1, age / 0.6);
        a *= Math.min(1, Math.max(z, 0) / 10);
        set(p, x, y, Math.max(z, 0.5), s, s, a, 0.97);
      } else if (p.kind === 2) {
        const age = ((((time / p.life) + p.phase) % 1) + 1) % 1 * p.life;
        const f = age / p.life;
        const d = p.drift * windSpeed * age + 12;
        const x = Math.cos(p.ang) * (p.r0 + age * 1.5) + wind[0] * d;
        const y = Math.sin(p.ang) * (p.r0 + age * 1.5) + wind[1] * d;
        const z = Math.max(p.z0 - p.sink * age, 3);
        const s = p.size0 * (1 + 1.2 * f);
        const a = 0.085 * Math.sin(Math.PI * f) * p.gain * Math.min(1, z / 20);
        set(p, x, y, z, s, s, a, 0.95);
      } else {
        const age = ((((time / p.life) + p.phase) % 1) + 1) % 1 * p.life;
        const f = age / p.life;
        const cx = p.landing ? wind[0] * landDrift : 0;
        const cy = p.landing ? wind[1] * landDrift : 0;
        const r = p.r0 + p.out * Math.sqrt(f);
        const x = cx + Math.cos(p.ang) * r;
        const y = cy + Math.sin(p.ang) * r;
        const z = 0.6 + p.rise * Math.sin(Math.PI * Math.min(f * 1.3, 1));
        const s = p.size0 * (1 + 0.8 * f);
        const a = (p.landing ? 0.2 : 0.35) * (1 - f) * p.gain;
        set(p, x, y, z, s, s, a, 0.98);
      }
    }
  }

  return { collection, update };
}
