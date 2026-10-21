// Camera flight: a centripetal Catmull-Rom path through hand-placed waypoints
// (local ENU metres around the cathedral, z above lake level), traversed with
// a smooth speed profile, then low-pass filtered so that both translation and
// rotation glide like a gimbal-stabilised drone.

export const FPS = 30;

// p: camera position, look: point the camera aims at, v: speed (m/s) when
// passing this waypoint. `mark` names a waypoint so overlays can be timed.
// Coordinates: x east, y north, z up (metres), origin = Saint-Pierre at lake level.
export const WAYPOINTS = [
  // --- La Rade: open over the lake, approach the Jet d'Eau -----------------
  { p: [1180, 1230, 225], look: [330, 450, 20], v: 36, mark: 'start' },
  { p: [950, 1060, 175], look: [480, 620, 50], v: 44 },
  { p: [790, 960, 140], look: [571, 699, 72], v: 40, mark: 'lake' },
  { p: [640, 890, 112], look: [571, 699, 78], v: 34 },
  // pass north-west of the jet, keep it framed, then swing to the old town
  { p: [450, 800, 98], look: [555, 650, 62], v: 32 },
  { p: [290, 650, 102], look: [180, 330, 30], v: 36 },
  { p: [160, 470, 115], look: [40, 120, 35], v: 36, mark: 'lakeEnd' },
  // --- Vieille Ville: orbit Saint-Pierre clockwise ----------------------------
  { p: [125, 280, 132], look: [0, 0, 40], v: 32, mark: 'oldtown' },
  { p: [190, 120, 140], look: [0, 0, 40], v: 30 },
  { p: [210, -45, 142], look: [0, 0, 40], v: 30 },
  { p: [140, -170, 140], look: [0, 0, 38], v: 30 },
  { p: [10, -225, 130], look: [-60, -30, 25], v: 30, mark: 'oldtownEnd' },
  // --- Parc des Bastions: drop over the Treille, glide north-west -------------
  { p: [-120, -370, 100], look: [-225, -185, 5], v: 26, mark: 'bastions' },
  { p: [-180, -285, 76], look: [-280, -110, 5], v: 22 },
  { p: [-240, -185, 66], look: [-340, -20, 10], v: 20 },
  { p: [-300, -90, 66], look: [-420, 60, 20], v: 20, mark: 'bastionsEnd' },
  // --- Place de Neuve: Grand Théâtre, rising crane ----------------------------
  { p: [-335, -30, 72], look: [-450, 72, 28], v: 18, mark: 'neuve' },
  { p: [-385, 30, 95], look: [-470, 170, 25], v: 22 },
  { p: [-420, 150, 128], look: [-450, 560, 20], v: 32, mark: 'neuveEnd' },
  // --- Gare Cornavin ----------------------------------------------------------
  { p: [-400, 430, 150], look: [-440, 950, 15], v: 42, mark: 'cornavin' },
  { p: [-340, 700, 140], look: [-440, 1000, 10], v: 34 },
  { p: [-260, 920, 135], look: [-450, 1060, 10], v: 30 },
  { p: [-300, 1180, 150], look: [-470, 1450, 20], v: 38, mark: 'cornavinEnd' },
  // --- Nations: Broken Chair and the Palais des Nations -----------------------
  { p: [-470, 1680, 180], look: [-690, 2400, 45], v: 62 },
  { p: [-640, 2120, 138], look: [-720, 2600, 45], v: 44, mark: 'un' },
  { p: [-760, 2380, 120], look: [-620, 2760, 45], v: 34 },
  { p: [-850, 2580, 150], look: [-590, 2790, 45], v: 32, mark: 'unEnd' },
  // --- Finale: climb and look back over the city and the lake ------------------
  { p: [-900, 2760, 225], look: [-560, 2760, 40], v: 32 },
  { p: [-930, 2950, 335], look: [-300, 2200, 20], v: 34, mark: 'outro' },
  { p: [-960, 3120, 450], look: [250, 1150, 0], v: 30, mark: 'end' },
];

// Extra seconds of gentle drift appended at the very end (end card).
export const END_HOLD = 4.0;

// Global multiplier on all waypoint speeds (tunes the total running time).
export const SPEED_SCALE = 1.12;

function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
function len(a) { return Math.hypot(a[0], a[1], a[2]); }

// Centripetal Catmull-Rom segment between p1 and p2 at u in [0,1].
function catmullRom(p0, p1, p2, p3, u) {
  const alpha = 0.5;
  const t0 = 0;
  const t1 = t0 + Math.max(Math.pow(len(sub(p1, p0)), alpha), 1e-3);
  const t2 = t1 + Math.max(Math.pow(len(sub(p2, p1)), alpha), 1e-3);
  const t3 = t2 + Math.max(Math.pow(len(sub(p3, p2)), alpha), 1e-3);
  const t = t1 + (t2 - t1) * u;
  const out = [0, 0, 0];
  for (let k = 0; k < 3; k++) {
    const A1 = ((t1 - t) / (t1 - t0)) * p0[k] + ((t - t0) / (t1 - t0)) * p1[k];
    const A2 = ((t2 - t) / (t2 - t1)) * p1[k] + ((t - t1) / (t2 - t1)) * p2[k];
    const A3 = ((t3 - t) / (t3 - t2)) * p2[k] + ((t - t2) / (t3 - t2)) * p3[k];
    const B1 = ((t2 - t) / (t2 - t0)) * A1 + ((t - t0) / (t2 - t0)) * A2;
    const B2 = ((t3 - t) / (t3 - t1)) * A2 + ((t - t1) / (t3 - t1)) * A3;
    out[k] = ((t2 - t) / (t2 - t1)) * B1 + ((t - t1) / (t2 - t1)) * B2;
  }
  return out;
}

function curve(points, U) {
  const n = points.length;
  const i = Math.min(Math.floor(U), n - 2);
  const u = U - i;
  const p0 = i > 0 ? points[i - 1] : extrapolate(points[0], points[1]);
  const p3 = i + 2 < n ? points[i + 2] : extrapolate(points[n - 1], points[n - 2]);
  return catmullRom(p0, points[i], points[i + 1], p3, u);
}

function extrapolate(a, b) {
  return [2 * a[0] - b[0], 2 * a[1] - b[1], 2 * a[2] - b[2]];
}

function smoothstep(x) { return x * x * (3 - 2 * x); }

function gaussianSmooth(arr, sigmaFrames) {
  if (sigmaFrames <= 0) return arr.map((v) => v.slice());
  const r = Math.ceil(sigmaFrames * 3);
  const w = [];
  for (let k = -r; k <= r; k++) w.push(Math.exp(-(k * k) / (2 * sigmaFrames * sigmaFrames)));
  const n = arr.length;
  const out = new Array(n);
  for (let i = 0; i < n; i++) {
    const acc = [0, 0, 0];
    let ws = 0;
    for (let k = -r; k <= r; k++) {
      // Reflect around the ends so the path keeps its end velocity.
      let j = i + k;
      let v;
      if (j < 0) {
        const a = arr[0], b = arr[Math.min(-j, n - 1)];
        v = [2 * a[0] - b[0], 2 * a[1] - b[1], 2 * a[2] - b[2]];
      } else if (j >= n) {
        const a = arr[n - 1], b = arr[Math.max(2 * (n - 1) - j, 0)];
        v = [2 * a[0] - b[0], 2 * a[1] - b[1], 2 * a[2] - b[2]];
      } else {
        v = arr[j];
      }
      const wk = w[k + r];
      acc[0] += v[0] * wk; acc[1] += v[1] * wk; acc[2] += v[2] * wk;
      ws += wk;
    }
    out[i] = [acc[0] / ws, acc[1] / ws, acc[2] / ws];
  }
  return out;
}

// Builds the per-frame camera table.
export function buildFlight(
  waypoints = WAYPOINTS,
  { fps = FPS, endHold = END_HOLD, speedScale = SPEED_SCALE, lookSigma = 1.0, posSigma = 0.45 } = {},
) {
  waypoints = waypoints.map((w) => ({ ...w, v: w.v * speedScale }));
  const P = waypoints.map((w) => w.p);
  const T = waypoints.map((w) => w.look);
  const n = P.length;

  // Dense sampling of the parametric curve -> arc length table.
  const STEPS = 400;
  const samples = []; // { U, s }
  let s = 0;
  let prev = curve(P, 0);
  samples.push({ U: 0, s: 0 });
  for (let i = 1; i <= (n - 1) * STEPS; i++) {
    const U = i / STEPS;
    const cur = curve(P, U);
    s += len(sub(cur, prev));
    samples.push({ U, s });
    prev = cur;
  }
  const totalS = s;
  const sAtWaypoint = waypoints.map((_, i) => samples[i * STEPS].s);

  // Speed profile along arc length: smoothstep between waypoint speeds.
  function speedAt(sv) {
    let i = 0;
    while (i < n - 2 && sv > sAtWaypoint[i + 1]) i++;
    const a = sAtWaypoint[i], b = sAtWaypoint[i + 1];
    const x = b > a ? Math.min(Math.max((sv - a) / (b - a), 0), 1) : 0;
    return waypoints[i].v + (waypoints[i + 1].v - waypoints[i].v) * smoothstep(x);
  }

  // Integrate time along the samples.
  const times = new Float64Array(samples.length);
  for (let i = 1; i < samples.length; i++) {
    const ds = samples[i].s - samples[i - 1].s;
    const vMid = speedAt((samples[i].s + samples[i - 1].s) / 2);
    times[i] = times[i - 1] + ds / vMid;
  }
  const flightTime = times[times.length - 1];
  const markTimes = {};
  waypoints.forEach((w, i) => {
    if (w.mark) markTimes[w.mark] = times[i * STEPS];
  });

  // Extend the path past the last waypoint for the end hold (keep drifting).
  const endVel = waypoints[n - 1].v * 0.6;
  const lastDir = (() => {
    const a = curve(P, n - 1 - 1 / STEPS), b = curve(P, n - 1);
    const d = sub(b, a); const l = len(d) || 1;
    return [d[0] / l, d[1] / l, d[2] / l];
  })();

  const duration = flightTime + endHold;
  const frameCount = Math.round(duration * fps);
  const rawPos = [];
  const rawLook = [];
  let j = 0;
  for (let f = 0; f < frameCount; f++) {
    const t = f / fps;
    if (t <= flightTime) {
      while (j < times.length - 2 && times[j + 1] < t) j++;
      const k = (t - times[j]) / Math.max(times[j + 1] - times[j], 1e-9);
      const U = samples[j].U + (samples[j + 1].U - samples[j].U) * Math.min(Math.max(k, 0), 1);
      rawPos.push(curve(P, U));
      rawLook.push(curve(T, U));
    } else {
      const dt = t - flightTime;
      // Decelerate smoothly to a slow drift.
      const dist = endVel * dt * (1 - 0.25 * Math.min(dt / endHold, 1));
      const end = P[n - 1];
      rawPos.push([end[0] + lastDir[0] * dist, end[1] + lastDir[1] * dist, end[2] + lastDir[2] * dist * 0.5]);
      rawLook.push(T[n - 1].slice());
    }
  }

  const pos = gaussianSmooth(rawPos, posSigma * fps);
  const look = gaussianSmooth(rawLook, lookSigma * fps);

  const frames = pos.map((p, i) => {
    const d = sub(look[i], p);
    const horiz = Math.hypot(d[0], d[1]);
    const heading = Math.atan2(d[0], d[1]); // clockwise from north
    const pitch = Math.atan2(d[2], horiz);
    return { p, look: look[i], heading, pitch };
  });

  return { frames, duration, fps, frameCount, markTimes, totalLength: totalS, flightTime };
}
