import { forwardFromYaw, rightFromForward } from "./frame.js";
import { resolveCircle } from "./collide.js";

export const TAXI_RADIUS = 1.02;
const AXLE = 1.18;
const ACCEL = 32;
const BRAKE = 55;
const REVERSE = 18;
const MAX_SPEED = 54;
const BOOST_MAX = 72;
const LINEAR_DRAG = 0.22;
const QUAD_DRAG = 0.008;

export function createTaxi(x, z, yaw) {
  return {
    x,
    z,
    y: 0,
    yaw,
    speed: 0,
    lateral: 0,
    vx: 0,
    vz: 0,
    boostMeter: 1,
    boosting: false,
    crashCd: 0,
  };
}

function substep(t, input, dt, world) {
  const surface = clamp(world.surface(t.x, t.z), 0.3, 1);
  const steer = clamp(input.steer || 0, -1, 1);
  const hb = !!input.handbrake && Math.abs(t.speed) > 5;
  const yawRate = (hb ? 3.15 : 2.2) * (0.4 + 0.6 * Math.min(1, Math.abs(t.speed) / 16));
  const reverseSteer = t.speed < -0.8 ? -1 : 1;
  t.yaw -= steer * yawRate * reverseSteer * dt;

  if ((input.throttle || 0) > 0) t.speed += ACCEL * surface * input.throttle * dt;
  if ((input.brake || 0) > 0) {
    if (t.speed > 0.4) t.speed -= BRAKE * input.brake * dt;
    else t.speed -= REVERSE * input.brake * dt;
  }
  const wantBoost = !!input.boost && t.boostMeter > 0.02 && t.speed > -1;
  if (wantBoost) {
    t.speed += 26 * dt;
    t.boostMeter = Math.max(0, t.boostMeter - 0.34 * dt);
    t.boosting = true;
  } else {
    t.boosting = false;
    t.boostMeter = Math.min(1, t.boostMeter + 0.16 * dt);
  }

  t.speed -= t.speed * LINEAR_DRAG * dt;
  t.speed -= t.speed * Math.abs(t.speed) * QUAD_DRAG * dt;
  if (hb) t.speed -= t.speed * 0.35 * dt;

  const cap = (t.boosting ? BOOST_MAX : MAX_SPEED) * (0.42 + 0.58 * surface);
  if (t.speed > cap) t.speed = cap;
  if (t.speed < -16) t.speed = -16;

  if (hb) t.lateral += steer * t.speed * 1.2 * dt;
  else if (Math.abs(t.speed) > 22) t.lateral += steer * t.speed * 0.12 * dt;

  const grip = (hb ? 1.05 : 8.2) * (0.35 + 0.65 * surface);
  t.lateral *= Math.max(0, 1 - grip * dt);
  const latCap = Math.max(5, Math.abs(t.speed) * 0.9);
  if (t.lateral > latCap) t.lateral = latCap;
  if (t.lateral < -latCap) t.lateral = -latCap;

  const fwd = forwardFromYaw(t.yaw);
  const right = rightFromForward(fwd);
  let vx = fwd.x * t.speed + right.x * t.lateral;
  let vz = fwd.z * t.speed + right.z * t.lateral;

  const prevX = t.x;
  const prevZ = t.z;
  t.x += vx * dt;
  t.z += vz * dt;

  let impact = 0;
  let nx = 0;
  let nz = 0;
  for (let pass = 0; pass < 3; pass++) {
    for (const off of [AXLE, -AXLE]) {
      const ox = t.x + fwd.x * off;
      const oz = t.z + fwd.z * off;
      const near = world.nearby(ox, oz, 10);
      if (!near || near.length === 0) continue;
      const res = resolveCircle(ox, oz, TAXI_RADIUS, near);
      const dx = res.x - ox;
      const dz = res.z - oz;
      if (dx * dx + dz * dz < 1e-8) continue;
      t.x += dx;
      t.z += dz;
      if (res.pen > impact) {
        impact = res.pen;
        nx = res.nx;
        nz = res.nz;
      }
    }
  }

  let crash = false;
  if (impact > 0.02 && (nx !== 0 || nz !== 0)) {
    const into = vx * nx + vz * nz;
    if (into < 0) {
      vx -= nx * into;
      vz -= nz * into;
      const speedIn = -into;
      if (speedIn > 16) crash = true;
    }
  }

  if (world.water(t.x, t.z)) {
    t.x = prevX;
    t.z = prevZ;
    t.speed *= -0.15;
    t.lateral = 0;
    vx = 0;
    vz = 0;
    t.vx = 0;
    t.vz = 0;
    t.y = world.height(t.x, t.z);
    return { crash: false, impact: 0, splash: true };
  }

  t.speed = vx * fwd.x + vz * fwd.z;
  t.lateral = vx * right.x + vz * right.z;
  t.vx = vx;
  t.vz = vz;
  t.y = world.height(t.x, t.z);
  if (t.crashCd > 0) t.crashCd -= dt;
  return { crash: crash && t.crashCd <= 0, impact: crash ? Math.abs(vx * nx + vz * nz) : 0, splash: false };
}

export function stepTaxi(t, input, dt, world) {
  const steps = dt > 0.04 ? 3 : dt > 0.025 ? 2 : 1;
  const h = dt / steps;
  let crash = false;
  let impact = 0;
  let splash = false;
  for (let i = 0; i < steps; i++) {
    const r = substep(t, input, h, world);
    if (r.splash) splash = true;
    if (r.crash) {
      crash = true;
      t.crashCd = 1.15;
    }
    if (r.impact > impact) impact = r.impact;
  }
  return { crash, impact, splash };
}

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}
