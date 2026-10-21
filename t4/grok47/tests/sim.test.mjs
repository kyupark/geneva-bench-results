import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { forwardFromYaw, rightFromForward, yawToFace, angDiff } from "../js/frame.js";
import { circleOBB, makeHash } from "../js/collide.js";
import { createTaxi, stepTaxi } from "../js/physics.js";
import {
  LANDMARKS,
  ROADS,
  WATER,
  GEO_ERRORS,
  PROPS,
  project,
  landmark,
  isDeadlyWater,
  nearestRoad,
  groundHeight,
  surfaceAt,
  surfaceY,
  pointOnRoad,
  roadByName,
} from "../js/geo.js";
import { CITY } from "../js/citygen.js";

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const p1 = (lat1 * Math.PI) / 180;
  const p2 = (lat2 * Math.PI) / 180;
  const dphi = ((lat2 - lat1) * Math.PI) / 180;
  const dl = ((lon2 - lon1) * Math.PI) / 180;
  const a = Math.sin(dphi / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(a)));
}

test("yaw 0 faces north (-z) and right is east", () => {
  const f = forwardFromYaw(0);
  assert.ok(Math.abs(f.x) < 1e-9);
  assert.ok(Math.abs(f.z + 1) < 1e-9);
  const r = rightFromForward(f);
  assert.ok(Math.abs(r.x - 1) < 1e-9);
  assert.ok(Math.abs(r.z) < 1e-9);
  const f2 = forwardFromYaw(Math.PI / 2);
  assert.ok(Math.abs(f2.x + 1) < 1e-9);
  assert.ok(Math.abs(f2.z) < 1e-9);
});

test("yawToFace round-trips forwardFromYaw", () => {
  for (const yaw of [0, 0.4, -1.2, 2.4, Math.PI, -Math.PI / 2]) {
    const f = forwardFromYaw(yaw);
    assert.ok(Math.abs(angDiff(yawToFace(f.x, f.z), yaw)) < 1e-6);
  }
});

test("circle vs box pushes east", () => {
  const hit = circleOBB(2.5, 0, 1, { cx: 0, cz: 0, hx: 2, hz: 2, rot: 0 });
  assert.ok(hit);
  assert.ok(Math.abs(hit.x - 0.5) < 1e-6);
  assert.ok(Math.abs(hit.z) < 1e-6);
  assert.equal(circleOBB(4, 0, 1, { cx: 0, cz: 0, hx: 2, hz: 2, rot: 0 }), null);
});

test("rotated box push uses the same yaw as the mesh", () => {
  const rot = Math.PI / 2;
  const hit = circleOBB(0, 5, 1.5, { cx: 0, cz: 0, hx: 4, hz: 1, rot });
  assert.ok(hit);
  assert.ok(hit.z > 0.4, "push should move the circle further toward +z");
});

function flatWorld() {
  return {
    surface: () => 1,
    height: () => 0,
    water: () => false,
    nearby: () => [],
  };
}

test("throttle at yaw 0 drives north", () => {
  const t = createTaxi(0, 0, 0);
  for (let i = 0; i < 180; i++) stepTaxi(t, { throttle: 1, brake: 0, steer: 0, handbrake: false, boost: false }, 1 / 60, flatWorld());
  assert.ok(t.z < -8, "expected north, z=" + t.z);
  assert.ok(Math.abs(t.x) < 1.5, "drifted sideways x=" + t.x);
  assert.ok(t.speed > 20);
});

test("right steer turns toward +x", () => {
  const t = createTaxi(0, 0, 0);
  for (let i = 0; i < 50; i++) stepTaxi(t, { throttle: 1, brake: 0, steer: 1, handbrake: false, boost: false }, 1 / 60, flatWorld());
  assert.ok(t.x > 1, "right steer should reach +x, x=" + t.x);
  const f = forwardFromYaw(t.yaw);
  assert.ok(f.x > 0.3, "nose should point east of north");
});

test("brake from a stop reverses toward +z", () => {
  const t = createTaxi(0, 0, 0);
  for (let i = 0; i < 90; i++) stepTaxi(t, { throttle: 0, brake: 1, steer: 0, handbrake: false, boost: false }, 1 / 60, flatWorld());
  assert.ok(t.speed < -2);
  assert.ok(t.z > 1);
});

test("full throttle settles in the crazy-taxi band", () => {
  const t = createTaxi(0, 0, 0);
  for (let i = 0; i < 60 * 6; i++) stepTaxi(t, { throttle: 1, brake: 0, steer: 0, handbrake: false, boost: false }, 1 / 60, flatWorld());
  assert.ok(t.speed > 42 && t.speed < 58, "speed " + t.speed);
});

test("handbrake builds lateral speed", () => {
  const t = createTaxi(0, 0, 0);
  t.speed = 30;
  for (let i = 0; i < 40; i++) stepTaxi(t, { throttle: 1, brake: 0, steer: 1, handbrake: true, boost: false }, 1 / 60, flatWorld());
  assert.ok(Math.abs(t.lateral) > 4, "lateral " + t.lateral);
});

test("a wall stops the taxi", () => {
  const t = createTaxi(-8, 0, yawToFace(1, 0));
  t.speed = 20;
  const world = {
    surface: () => 1,
    height: () => 0,
    water: () => false,
    nearby: () => [{ cx: 6, cz: 0, hx: 2, hz: 8, rot: 0 }],
  };
  for (let i = 0; i < 180; i++) stepTaxi(t, { throttle: 1, brake: 0, steer: 0, handbrake: false, boost: false }, 1 / 60, world);
  assert.ok(t.x < 5, "taxi drove through the wall, x=" + t.x);
});

test("map has the ten landmarks and a connected road net", () => {
  assert.equal(LANDMARKS.length, 10);
  assert.deepEqual(
    LANDMARKS.map((l) => l.id).sort(),
    ["bastions", "belair", "chair", "cornavin", "jardin", "jet", "neuve", "oldtown", "paquis", "pont"].sort()
  );
  assert.deepEqual(GEO_ERRORS, [], GEO_ERRORS.join("\n"));
  assert.ok(ROADS.length > 15);
});

test("straight-line distances match Geneva", () => {
  const ranges = [
    ["paquis", "jet", 250, 500],
    ["neuve", "jardin", 550, 950],
    ["neuve", "jet", 950, 1450],
    ["cornavin", "paquis", 650, 1150],
    ["cornavin", "chair", 1200, 1800],
    ["neuve", "bastions", 80, 400],
    ["oldtown", "neuve", 250, 600],
    ["jardin", "jet", 250, 750],
    ["cornavin", "belair", 450, 1100],
    ["belair", "oldtown", 250, 750],
    ["pont", "jet", 150, 800],
    ["chair", "bastions", 2000, 3400],
    ["cornavin", "jet", 700, 1600],
  ];
  for (const [a, b, lo, hi] of ranges) {
    const A = landmark(a);
    const B = landmark(b);
    const d = haversine(A.lat, A.lon, B.lat, B.lon);
    assert.ok(d >= lo && d <= hi, a + " → " + b + " is " + d.toFixed(0) + "m, expected " + lo + "-" + hi);
    const proj = Math.hypot(A.x - B.x, A.z - B.z);
    assert.ok(Math.abs(proj - d) / d < 0.035, "projection drift " + a + " " + proj + " vs " + d);
  }
});

test("bearings match the real city", () => {
  const lat = (id) => landmark(id).lat;
  const lon = (id) => landmark(id).lon;
  assert.ok(lat("chair") > lat("cornavin"));
  assert.ok(lon("jet") > lon("jardin"));
  assert.ok(lat("jet") > lat("jardin"));
  assert.ok(lat("bastions") < lat("neuve"));
  assert.ok(lon("belair") < lon("jardin"));
  assert.ok(lat("paquis") > lat("jet"));
  assert.ok(lat("oldtown") < lat("belair"));
  assert.ok(lon("neuve") < lon("oldtown"));
  assert.ok(lat("pont") < lat("cornavin") && lat("pont") > lat("jardin"));
  assert.ok(lon("paquis") > lon("cornavin"));
  assert.ok(lat("belair") > lat("neuve"));
});

test("jet and baths are offshore, plazas are dry, hill is the old town", () => {
  assert.equal(isDeadlyWater(landmark("jet").x, landmark("jet").z), false);
  assert.equal(isDeadlyWater(landmark("paquis").x, landmark("paquis").z), false);
  assert.equal(isDeadlyWater(landmark("oldtown").x, landmark("oldtown").z), false);
  assert.equal(isDeadlyWater(landmark("cornavin").x, landmark("cornavin").z), false);
  assert.equal(isDeadlyWater(landmark("belair").x, landmark("belair").z), false);
  assert.equal(isDeadlyWater(landmark("jardin").x, landmark("jardin").z), false);
  assert.equal(isDeadlyWater(landmark("bastions").x, landmark("bastions").z), false);
  assert.equal(isDeadlyWater(landmark("chair").x, landmark("chair").z), false);
  assert.equal(isDeadlyWater(PROPS.ile.x, PROPS.ile.z), true);
  const midLake = project(46.2088, 6.1565);
  assert.equal(isDeadlyWater(midLake.x, midLake.z), true);
  assert.ok(groundHeight(landmark("oldtown").x, landmark("oldtown").z) > 18);
  assert.ok(groundHeight(landmark("neuve").x, landmark("neuve").z) < 2);
  assert.ok(groundHeight(landmark("cornavin").x, landmark("cornavin").z) < 1);
});

test("buildings leave every road drivable", () => {
  assert.deepEqual(CITY.errors, [], CITY.errors.join("\n"));
  assert.ok(CITY.buildings.length > 200);
  assert.ok(CITY.pickups.length >= 12);
  assert.equal(CITY.heroes.length, 10);
});

test("write a map preview", () => {
  const xs = WATER.map((p) => p.x).concat(LANDMARKS.map((l) => l.x));
  const zs = WATER.map((p) => p.z).concat(LANDMARKS.map((l) => l.z));
  let minX = Math.min(...xs) - 160;
  let maxX = Math.max(...xs) + 160;
  let minZ = Math.min(...zs) - 160;
  let maxZ = Math.max(...zs) + 160;
  const scale = 0.42;
  const W = (maxX - minX) * scale;
  const H = (maxZ - minZ) * scale;
  const X = (x) => (x - minX) * scale;
  const Y = (z) => (z - minZ) * scale;
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W.toFixed(0)}" height="${H.toFixed(0)}" viewBox="0 0 ${W.toFixed(1)} ${H.toFixed(1)}">`;
  svg += `<rect width="100%" height="100%" fill="#d7eccb"/>`;
  svg += `<polygon fill="#7eb7e6" points="${WATER.map((p) => X(p.x).toFixed(1) + "," + Y(p.z).toFixed(1)).join(" ")}"/>`;
  for (const road of ROADS) {
    const pts = road.points.map((p) => X(p.x).toFixed(1) + "," + Y(p.z).toFixed(1)).join(" ");
    svg += `<polyline points="${pts}" fill="none" stroke="${road.bridge || road.pier ? "#c9843a" : "#4a4e55"}" stroke-width="${Math.max(1.2, road.width * scale * 0.45)}" stroke-linejoin="round" stroke-linecap="round"/>`;
  }
  for (const lm of LANDMARKS) {
    svg += `<circle cx="${X(lm.x).toFixed(1)}" cy="${Y(lm.z).toFixed(1)}" r="${(lm.radius * scale).toFixed(1)}" fill="none" stroke="${lm.color}" stroke-width="1.5"/>`;
    svg += `<circle cx="${X(lm.x).toFixed(1)}" cy="${Y(lm.z).toFixed(1)}" r="3" fill="${lm.color}"/>`;
    svg += `<text x="${(X(lm.x) + 6).toFixed(1)}" y="${(Y(lm.z) - 4).toFixed(1)}" font-size="11" font-family="sans-serif" fill="#1b1b1b">${lm.short}</text>`;
  }
  svg += `<text x="12" y="20" font-size="13" font-family="sans-serif">north is up · 200 m grid</text>`;
  svg += `</svg>`;
  fs.writeFileSync("/tmp/geneva-map.svg", svg);
  const corn = landmark("cornavin");
  const near = nearestRoad(corn.x, corn.z);
  assert.ok(near && near.dist < corn.radius);
});

function cityWorld() {
  const hash = makeHash(CITY.colliders);
  return {
    surface: surfaceAt,
    height: surfaceY,
    water: isDeadlyWater,
    nearby: (x, z, rad) => hash.query(x, z, rad),
  };
}

function blendYaw(a, b, t) {
  return a + angDiff(b, a) * t;
}

function driveRoute(legs, seconds, goal) {
  const world = cityWorld();
  const path = [];
  for (const leg of legs) {
    const spec = typeof leg === "string" ? { name: leg } : leg;
    const road = roadByName(spec.name);
    if (!road) throw new Error("missing road " + spec.name);
    const from = spec.from || 0;
    const to = spec.to == null ? road.length : spec.to;
    const forward = to >= from;
    for (let d = from; forward ? d <= to : d >= to; d += forward ? 8 : -8) {
      const clamped = Math.max(0, Math.min(road.length - 0.05, d));
      const p = pointOnRoad(road, road.closed ? ((clamped % road.length) + road.length) % road.length : clamped);
      const prev = path[path.length - 1];
      if (prev && Math.hypot(prev.x - p.x, prev.z - p.z) < 3) continue;
      path.push(p);
    }
  }
  const taxi = createTaxi(path[0].x, path[0].z, yawToFace(path[1].x - path[0].x, path[1].z - path[0].z));
  let cursor = 1;
  let splashes = 0;
  let slow = 0;
  let minDist = Infinity;
  const frames = Math.round(seconds * 60);
  for (let i = 0; i < frames; i++) {
    const goalDist = Math.hypot(taxi.x - goal.x, taxi.z - goal.z);
    if (goalDist < minDist) minDist = goalDist;
    if (goalDist < goal.radius) break;
    while (cursor < path.length - 1 && Math.hypot(path[cursor].x - taxi.x, path[cursor].z - taxi.z) < 16) cursor++;
    const target = path[Math.min(cursor, path.length - 1)];
    let aim = yawToFace(target.x - taxi.x, target.z - taxi.z);
    const road = nearestRoad(taxi.x, taxi.z);
    if (road && road.dist > 1.2) {
      const back = yawToFace(road.x - taxi.x, road.z - taxi.z);
      aim = blendYaw(aim, back, Math.min(1, (road.dist - 1.2) / 4));
    }
    const diff = angDiff(aim, taxi.yaw);
    let steer = Math.max(-1, Math.min(1, -diff * 1.8));
    let throttle = Math.abs(diff) > 0.55 ? 0.45 : 1;
    let brake = 0;
    if (Math.abs(taxi.speed) < 1.2) slow += 1 / 60;
    else slow = 0;
    if (slow > 0.8) {
      throttle = 0;
      brake = 1;
      steer = Math.sin(i / 8);
    }
    const res = stepTaxi(taxi, { throttle, brake, steer, handbrake: false, boost: false }, 1 / 60, world);
    if (res.splash) splashes++;
  }
  const goalDist = Math.hypot(taxi.x - goal.x, taxi.z - goal.z);
  if (goalDist < minDist) minDist = goalDist;
  return { taxi, splashes, cursor, path: path.length, minDist };
}

test("a taxi can drive Cornavin to the Jet d'Eau on the roads", () => {
  const goal = landmark("jet");
  const quay = roadByName("Quai du Général-Guisan");
  const pier = roadByName("Jetée du Jet d'Eau");
  let joinAt = 0;
  let joinGap = Infinity;
  for (let d = 0; d <= quay.length; d += 2) {
    const p = pointOnRoad(quay, Math.min(d, quay.length - 0.05));
    const gap = Math.hypot(p.x - pier.points[0].x, p.z - pier.points[0].z);
    if (gap < joinGap) {
      joinGap = gap;
      joinAt = d;
    }
  }
  const run = driveRoute(
    ["Rue du Mont-Blanc", "Pont du Mont-Blanc", { name: "Quai du Général-Guisan", to: joinAt }, "Jetée du Jet d'Eau"],
    50,
    goal
  );
  assert.equal(run.splashes, 0, "splashes at " + run.taxi.x.toFixed(1) + "," + run.taxi.z.toFixed(1));
  assert.ok(run.minDist < goal.radius, "closest " + run.minDist.toFixed(1) + " m, cursor " + run.cursor + "/" + run.path);
});

test("a taxi can drive Bel-Air to the Parc des Bastions", () => {
  const goal = landmark("bastions");
  const loop = roadByName("Place de Neuve");
  const run = driveRoute(
    ["Rue de la Corraterie", { name: "Place de Neuve", from: loop.length / 2, to: loop.length }, "Promenade des Bastions"],
    60,
    goal
  );
  assert.equal(run.splashes, 0, "splashes at " + run.taxi.x.toFixed(1) + "," + run.taxi.z.toFixed(1));
  assert.ok(run.minDist < goal.radius, "closest " + run.minDist.toFixed(1) + " m, cursor " + run.cursor + "/" + run.path);
});
