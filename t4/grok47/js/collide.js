// Circle vs oriented box in the x/z plane.
// box.rot uses the same yaw as Object3D.rotation.y (see frame.js).

export function circleOBB(px, pz, radius, box) {
  const c = Math.cos(box.rot);
  const s = Math.sin(box.rot);
  const dx = px - box.cx;
  const dz = pz - box.cz;
  const lx = dx * c - dz * s;
  const lz = dx * s + dz * c;
  const clx = Math.max(-box.hx, Math.min(box.hx, lx));
  const clz = Math.max(-box.hz, Math.min(box.hz, lz));
  const ox = lx - clx;
  const oz = lz - clz;
  const d2 = ox * ox + oz * oz;

  let nlx;
  let nlz;
  let pen;
  if (d2 >= 1e-10) {
    const d = Math.sqrt(d2);
    if (d > radius) return null;
    nlx = ox / d;
    nlz = oz / d;
    pen = radius - d;
  } else {
    const pxp = box.hx - Math.abs(lx);
    const pzp = box.hz - Math.abs(lz);
    if (pxp < pzp) {
      nlx = lx >= 0 ? 1 : -1;
      nlz = 0;
      pen = radius + pxp;
    } else {
      nlx = 0;
      nlz = lz >= 0 ? 1 : -1;
      pen = radius + pzp;
    }
  }
  const nx = nlx * c + nlz * s;
  const nz = -nlx * s + nlz * c;
  return { x: nx * pen, z: nz * pen, nx, nz, pen };
}

export function resolveCircle(px, pz, radius, colliders) {
  let nx = 0;
  let nz = 0;
  let pen = 0;
  for (let iter = 0; iter < 4; iter++) {
    let hit = false;
    for (let i = 0; i < colliders.length; i++) {
      const push = circleOBB(px, pz, radius, colliders[i]);
      if (!push) continue;
      px += push.x;
      pz += push.z;
      hit = true;
      if (push.pen > pen) {
        pen = push.pen;
        nx = push.nx;
        nz = push.nz;
      }
    }
    if (!hit) break;
  }
  return { x: px, z: pz, nx, nz, pen };
}

export function makeHash(colliders, cell = 56) {
  const map = new Map();
  const key = (ix, iz) => ix + "," + iz;
  for (let i = 0; i < colliders.length; i++) {
    const b = colliders[i];
    const ext = Math.hypot(b.hx, b.hz) + 2;
    const ix0 = Math.floor((b.cx - ext) / cell);
    const ix1 = Math.floor((b.cx + ext) / cell);
    const iz0 = Math.floor((b.cz - ext) / cell);
    const iz1 = Math.floor((b.cz + ext) / cell);
    for (let ix = ix0; ix <= ix1; ix++) {
      for (let iz = iz0; iz <= iz1; iz++) {
        const k = key(ix, iz);
        let bucket = map.get(k);
        if (!bucket) map.set(k, (bucket = []));
        bucket.push(b);
      }
    }
  }
  return {
    query(x, z, rad) {
      const ix = Math.floor(x / cell);
      const iz = Math.floor(z / cell);
      const reach = Math.ceil(rad / cell);
      const out = [];
      const seen = new Set();
      for (let dx = -reach; dx <= reach; dx++) {
        for (let dz = -reach; dz <= reach; dz++) {
          const bucket = map.get(key(ix + dx, iz + dz));
          if (!bucket) continue;
          for (let i = 0; i < bucket.length; i++) {
            const b = bucket[i];
            if (seen.has(b)) continue;
            seen.add(b);
            out.push(b);
          }
        }
      }
      return out;
    },
  };
}
