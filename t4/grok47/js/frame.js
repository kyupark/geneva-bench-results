// One heading convention for the whole game.
// Taxi, arrow, traffic, and camera all face local -z.
// Object3D.rotation.y = yaw. Positive yaw turns counter-clockwise from above.
// yaw 0 looks toward world -z (north, because the map stores north as -z).

export function forwardFromYaw(yaw) {
  return { x: -Math.sin(yaw), z: -Math.cos(yaw) };
}

// right = forward × up, for a y-up frame. forward (0, -1) → right (1, 0).
export function rightFromForward(f) {
  return { x: -f.z, z: f.x };
}

// Yaw that points local -z at a world direction (dx, dz).
export function yawToFace(dx, dz) {
  return Math.atan2(-dx, -dz);
}

export function angDiff(a, b) {
  let d = a - b;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}
