import * as Cesium from 'https://cdn.jsdelivr.net/npm/cesium@1.146.0/Build/Cesium/index.js';
import { createScene } from './scene.js';
import { buildFlight } from './flight.js';
import { createJet } from './jet.js';
import { createOverlay } from './overlay.js';
import { createWater } from './water.js';
import { addGrade } from './grade.js';
import { PLACES, LAKE_LEVEL, ENU_TO_ECEF, localToEcef, toLocal } from './geo.js';

const q = new URLSearchParams(location.search);
const flag = (name, def) => (q.has(name) ? q.get(name) !== '0' : def);
const num = (name, def) => (q.has(name) ? Number(q.get(name)) : def);
const mode = q.get('mode') || 'preview';

const ctx = await createScene('cesium', {
  shadows: flag('shadows', true),
  ao: flag('ao', false),
  drape: flag('drape', true),
  trees: flag('trees', true),
  msaa: num('msaa', 4),
  buildingSSE: num('bsse', 6),
  treeSSE: num('tsse', 6),
  globeSSE: num('gsse', 1.25),
  fov: num('fov', 70),
  sunTime: q.get('time') || '2026-08-20T09:45:00Z',
  hdr: flag('hdr', false),
  lift: num('lift', 0.12),
  envBrightness: num('envb', 1.6),
  sunIntensity: num('sun', 2.2),
  shadowDarkness: num('sd', 0.55),
  roofMosaic: flag('roofs', true),
  roofGain: num('roofgain', 0.78),
  roofSat: num('roofsat', 1.3),
});
const { viewer, scene, camera } = ctx;
if (num('scale', 1) !== 1) viewer.resolutionScale = num('scale', 1);
window.Cesium = Cesium;
window.ctx = ctx;

// --- flight, jet, overlay --------------------------------------------------
const flight = buildFlight();
const jet = flag('jet', true)
  ? createJet(scene, { lon: PLACES.jet.lon, lat: PLACES.jet.lat, height: LAKE_LEVEL + 0.6 })
  : null;
const water = flag('water', true) ? await createWater(scene) : null;
if (flag('grade', true)) addGrade(scene);

let minimap = null;
try {
  const res = await fetch('./data/minimap.json', { cache: 'no-cache' });
  if (res.ok) minimap = await res.json();
} catch {}

const overlayRoot = document.getElementById('overlay');
const overlay = flag('overlay', true)
  ? createOverlay(overlayRoot, {
      flight,
      duration: flight.duration,
      markTimes: flight.markTimes,
      minimap,
      places: PLACES,
      toLocal,
    })
  : null;

function fitOverlay() {
  const f = overlayRoot.querySelector('.ov-frame');
  if (f) f.style.transform = `scale(${window.innerWidth / 1920})`;
}
fitOverlay();
window.addEventListener('resize', fitOverlay);

// --- camera -----------------------------------------------------------------
const rot = Cesium.Matrix4.getMatrix3(ENU_TO_ECEF, new Cesium.Matrix3());
const scratchDir = new Cesium.Cartesian3();
const scratchUp = new Cesium.Cartesian3();
const scratchRight = new Cesium.Cartesian3();

function placeCamera(f) {
  const pos = localToEcef(f.p[0], f.p[1], f.p[2]);
  const dl = new Cesium.Cartesian3(f.look[0] - f.p[0], f.look[1] - f.p[1], f.look[2] - f.p[2]);
  Cesium.Matrix3.multiplyByVector(rot, dl, scratchDir);
  Cesium.Cartesian3.normalize(scratchDir, scratchDir);
  const geoUp = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(pos, new Cesium.Cartesian3());
  Cesium.Cartesian3.cross(scratchDir, geoUp, scratchRight);
  Cesium.Cartesian3.normalize(scratchRight, scratchRight);
  Cesium.Cartesian3.cross(scratchRight, scratchDir, scratchUp);
  camera.setView({
    destination: pos,
    orientation: { direction: Cesium.Cartesian3.clone(scratchDir), up: Cesium.Cartesian3.clone(scratchUp) },
  });
  return pos;
}

function frameInfo(i, pos) {
  const f = flight.frames[i];
  const c = Cesium.Cartographic.fromCartesian(pos);
  return {
    agl: f.p[2],
    lat: Cesium.Math.toDegrees(c.latitude),
    lon: Cesium.Math.toDegrees(c.longitude),
    heading: f.heading,
  };
}

function applyFrame(i) {
  i = Math.max(0, Math.min(flight.frameCount - 1, i));
  const t = i / flight.fps;
  const pos = placeCamera(flight.frames[i]);
  if (jet) jet.update(t);
  if (water) water.update(t);
  if (overlay) overlay.update(i, frameInfo(i, pos));
  return t;
}

async function renderFrame(i, opts = {}) {
  applyFrame(i);
  const r = await ctx.settle({ maxMs: opts.maxMs ?? 90000 });
  return r;
}

window.app = {
  fps: flight.fps,
  frameCount: flight.frameCount,
  duration: flight.duration,
  markTimes: flight.markTimes,
  renderFrame,
  applyFrame,
  settle: ctx.settle,
};

// --- still / explore helpers ----------------------------------------------
window.explore = {
  setView(v) {
    camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(v.lon, v.lat, v.h),
      orientation: {
        heading: Cesium.Math.toRadians(v.heading ?? 0),
        pitch: Cesium.Math.toRadians(v.pitch ?? -30),
        roll: 0,
      },
    });
    if (jet) jet.update(v.t ?? 0);
  },
  settle: (ms) => ctx.settle({ maxMs: ms }).then((r) => r.ms),
  async sampleHeights(points) {
    const carto = points.map((p) => Cesium.Cartographic.fromDegrees(p[1], p[0]));
    const res = await Cesium.sampleTerrainMostDetailed(ctx.terrainProvider, carto);
    return res.map((c) => c.height);
  },
};
window.exploreReady = true;

// --- interactive preview ----------------------------------------------------
if (mode === 'preview') {
  let playing = true;
  let t0 = performance.now();
  let tOffset = num('t', 0);
  document.addEventListener('keydown', (e) => {
    const now = (performance.now() - t0) / 1000 + tOffset;
    if (e.code === 'Space') {
      if (playing) tOffset = now; else t0 = performance.now();
      playing = !playing;
    } else if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
      tOffset = (playing ? now : tOffset) + (e.code === 'ArrowRight' ? 5 : -5);
      t0 = performance.now();
    }
  });
  let last = 0;
  const loop = () => {
    const t = playing ? (performance.now() - t0) / 1000 + tOffset : tOffset;
    const i = Math.floor(t * flight.fps) % flight.frameCount;
    if (i !== last || !playing) {
      applyFrame(i);
      last = i;
    }
    viewer.render();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
window.appReady = true;
