import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.module.js';
import { getGenevaElevation, getWaterChannel } from './terrain_and_water.js';
import { createGenevaBuilding, createTree } from './landmarks_south.js';

export function buildNorthAndLakeLandmarks(scene, textures, animatedObjects) {
  const group = new THREE.Group();

  const stoneMat = new THREE.MeshStandardMaterial({ color: 0xded6c6, roughness: 0.65 });
  const travertineMat = new THREE.MeshStandardMaterial({ color: 0xf4f0e6, roughness: 0.52 });
  const darkStoneMat = new THREE.MeshStandardMaterial({ color: 0x9f9584, roughness: 0.78 });
  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x3b594f, roughness: 0.35, metalness: 0.68 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xe8c14a, roughness: 0.22, metalness: 0.88 });
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x78a5c4,
    roughness: 0.15,
    metalness: 0.75,
    transparent: true,
    opacity: 0.78
  });

  // ============================================================================
  // 4. LAKESIDE (호숫가 / RADE DE GENÈVE): JET D'EAU, JARDIN ANGLAIS, BAINS DES PÂQUIS
  // ============================================================================

  // 4A. JET D'EAU & JETÉE DES EAUX-VIVES (x = 340, z = 15)
  const jetGroup = new THREE.Group();
  // Stone jetty extending from southern shore (380, 145) to (340, 15)
  const jettyLen = Math.hypot(340 - 385, 15 - 145);
  const jettyAngle = Math.atan2(15 - 145, 340 - 385);
  const jetty = new THREE.Mesh(new THREE.BoxGeometry(jettyLen, 3.2, 7.5), stoneMat);
  jetty.position.set((340 + 385) * 0.5, 1.2, (15 + 145) * 0.5);
  jetty.rotation.y = -jettyAngle;
  jetGroup.add(jetty);

  // Nozzle pump bastion at tip of jetty
  const pumpBase = new THREE.Mesh(new THREE.CylinderGeometry(7.5, 8.5, 4.0, 16), stoneMat);
  pumpBase.position.set(340, 1.5, 15);
  jetGroup.add(pumpBase);

  // High-velocity central water core (140m tall!)
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.92
  });
  const jetCore = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 1.1, 138, 16), coreMat);
  jetCore.position.set(340, 71, 15);
  jetGroup.add(jetCore);

  // Outer cascading mist envelope
  const mistMat = new THREE.MeshBasicMaterial({
    color: 0xeaf7ff,
    transparent: true,
    opacity: 0.42,
    depthWrite: false
  });
  const jetMist = new THREE.Mesh(new THREE.ConeGeometry(22, 142, 20, 1, true), mistMat);
  jetMist.position.set(345, 71, 16);
  jetGroup.add(jetMist);

  // Dynamic 3D particle spray system for Jet d'Eau (800 droplets rising and drifting in wind)
  const particleCount = 800;
  const pGeo = new THREE.BufferGeometry();
  const pPositions = new Float32Array(particleCount * 3);
  const pSeeds = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    pSeeds[i * 3] = Math.random(); // phase [0..1]
    pSeeds[i * 3 + 1] = (Math.random() - 0.5) * 2; // radial spread X
    pSeeds[i * 3 + 2] = (Math.random() - 0.5) * 2; // radial spread Z
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xffffff,
    map: textures.sprayParticle,
    size: 5.5,
    transparent: true,
    opacity: 0.85,
    depthWrite: false
  });
  const jetParticles = new THREE.Points(pGeo, pMat);
  jetGroup.add(jetParticles);

  // Base foam rings on water around Jet d'Eau
  const foamRing = new THREE.Mesh(
    new THREE.RingGeometry(6, 28, 32),
    new THREE.MeshBasicMaterial({ color: 0xdff5ff, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
  );
  foamRing.rotation.x = -Math.PI / 2;
  foamRing.position.set(344, 0.35, 16);
  jetGroup.add(foamRing);

  // Subtle Rainbow Arc in the mist next to Jet d'Eau
  const rainbowColors = [0xff4444, 0xff9933, 0xffee44, 0x44dd66, 0x4499ff];
  rainbowColors.forEach((rCol, idx) => {
    const rArc = new THREE.Mesh(
      new THREE.TorusGeometry(32 - idx * 1.1, 0.55, 8, 36, Math.PI * 0.85),
      new THREE.MeshBasicMaterial({ color: rCol, transparent: true, opacity: 0.22, depthWrite: false })
    );
    rArc.position.set(355, 18, 22);
    rArc.rotation.y = 0.5;
    rArc.rotation.z = 0.15;
    jetGroup.add(rArc);
  });

  group.add(jetGroup);

  animatedObjects.push((t) => {
    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const phase = (pSeeds[i * 3] + t * 0.42) % 1.0;
      const sx = pSeeds[i * 3 + 1];
      const sz = pSeeds[i * 3 + 2];
      // Parabolic trajectory: fast upward shoot then gentle wind-drifted cascade
      const y = Math.sin(phase * Math.PI) * 142;
      const windDrift = Math.pow(phase, 1.5) * 18;
      const spread = Math.pow(phase, 1.1) * 14;
      pos[i * 3] = 340 + sx * spread + windDrift;
      pos[i * 3 + 1] = Math.max(0.5, y);
      pos[i * 3 + 2] = 15 + sz * spread + windDrift * 0.25;
    }
    pGeo.attributes.position.needsUpdate = true;
    foamRing.scale.setScalar(1.0 + Math.sin(t * 4.0) * 0.08);
  });

  // 4B. JARDIN ANGLAIS & HORLOGE FLEURIE (Flower Clock at x = 105, z = 122)
  const jardinGroup = new THREE.Group();
  const jardinY = getGenevaElevation(115, 128);

  // Horloge Fleurie (Famous Geneva Flower Clock at western edge of Jardin Anglais: x = 78, z = 116)
  const clockMound = new THREE.Group();
  clockMound.position.set(78, getGenevaElevation(78, 116), 116);
  clockMound.rotation.x = -0.22; // Sloped toward lake/promenade

  const flowerRings = [
    [6.2, 0x3b7a38],
    [5.4, 0xe83b3b],
    [4.4, 0xf5d027],
    [3.3, 0x2c6ed5],
    [2.1, 0xfaf6ec],
    [1.0, 0xd86020]
  ];
  flowerRings.forEach(([rad, col], idx) => {
    const ring = new THREE.Mesh(
      new THREE.CylinderGeometry(rad, rad + 0.3, 0.35 + idx * 0.08, 24),
      new THREE.MeshStandardMaterial({ color: col, roughness: 0.8 })
    );
    ring.position.y = 0.2 + idx * 0.05;
    clockMound.add(ring);
  });
  // Clock hands on Flower Clock
  const handHour = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.2, 3.2), goldMat);
  handHour.position.set(-0.6, 0.65, -0.8);
  handHour.rotation.y = 0.7;
  clockMound.add(handHour);
  const handMin = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 4.6), goldMat);
  handMin.position.set(0.9, 0.68, -1.1);
  handMin.rotation.y = -0.6;
  clockMound.add(handMin);
  jardinGroup.add(clockMound);

  // Fontaine des Quatre-Saisons (Ornate Bronze Fountain in center of Jardin Anglais: x = 132, z = 132)
  const fountY = getGenevaElevation(132, 132);
  const fountBasin = new THREE.Mesh(new THREE.CylinderGeometry(11, 11.8, 1.2, 24), stoneMat);
  fountBasin.position.set(132, fountY + 0.6, 132);
  jardinGroup.add(fountBasin);

  const fountWater = new THREE.Mesh(
    new THREE.CylinderGeometry(10.4, 10.4, 0.3, 24),
    new THREE.MeshStandardMaterial({ color: 0x228bb0, roughness: 0.15 })
  );
  fountWater.position.set(132, fountY + 1.15, 132);
  jardinGroup.add(fountWater);

  const fountTier1 = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 2.2, 4.5, 16), bronzeMat);
  fountTier1.position.set(132, fountY + 3.2, 132);
  jardinGroup.add(fountTier1);

  const fountTier2 = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 0.9, 4.0, 16), bronzeMat);
  fountTier2.position.set(132, fountY + 6.4, 132);
  jardinGroup.add(fountTier2);

  // Monument National (Two bronze figures representing Geneva & Helvetia at x = 96, z = 112)
  const monPed = new THREE.Mesh(new THREE.BoxGeometry(5.5, 3.6, 3.8), stoneMat);
  monPed.position.set(96, getGenevaElevation(96, 112) + 1.8, 112);
  jardinGroup.add(monPed);
  for (const mx of [-1.1, 1.1]) {
    const fig = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 3.8, 8), bronzeMat);
    fig.position.set(96 + mx, getGenevaElevation(96, 112) + 5.5, 112);
    jardinGroup.add(fig);
  }

  // Lush trees in Jardin Anglais & Quai Gustave-Ador
  for (let tx = 82; tx <= 310; tx += 18) {
    for (const tz of [112, 128, 146, 162]) {
      if (Math.hypot(tx - 132, tz - 132) < 18) continue;
      if (tx > 210 && tz > 135) continue;
      const tree = createTree(1.2, true, tx * 3 + tz);
      tree.position.set(tx, getGenevaElevation(tx, tz), tz);
      jardinGroup.add(tree);
    }
  }
  group.add(jardinGroup);

  // 4C. BAINS DES PÂQUIS & RED-AND-WHITE LIGHTHOUSE (x = 225, z = -135)
  const paquisGroup = new THREE.Group();
  const paquisPier = new THREE.Mesh(new THREE.BoxGeometry(85, 2.6, 10), stoneMat);
  paquisPier.position.set(215, 1.2, -135);
  paquisPier.rotation.y = -0.35;
  paquisGroup.add(paquisPier);

  const paquisDeck = new THREE.Mesh(
    new THREE.BoxGeometry(46, 2.2, 22),
    new THREE.MeshStandardMaterial({ color: 0xc29b68, roughness: 0.85 })
  );
  paquisDeck.position.set(232, 1.3, -118);
  paquisGroup.add(paquisDeck);

  // Iconic Red-and-White Phare des Pâquis Lighthouse at pier tip (x = 258, z = -114)
  const lhX = 258;
  const lhZ = -114;
  const lhBase = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.6, 3.2, 12), stoneMat);
  lhBase.position.set(lhX, 1.5, lhZ);
  paquisGroup.add(lhBase);

  const lhTowerWhite = new THREE.Mesh(
    new THREE.CylinderGeometry(1.4, 1.8, 9.5, 12),
    new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.5 })
  );
  lhTowerWhite.position.set(lhX, 7.8, lhZ);
  paquisGroup.add(lhTowerWhite);

  const lhTowerRed = new THREE.Mesh(
    new THREE.CylinderGeometry(1.5, 1.55, 3.4, 12),
    new THREE.MeshStandardMaterial({ color: 0xd42020, roughness: 0.5 })
  );
  lhTowerRed.position.set(lhX, 11.2, lhZ);
  paquisGroup.add(lhTowerRed);

  const lhLantern = new THREE.Mesh(
    new THREE.SphereGeometry(1.3, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xffe885 })
  );
  lhLantern.position.set(lhX, 13.8, lhZ);
  paquisGroup.add(lhLantern);
  group.add(paquisGroup);

  // 4D. CGN BELLE ÉPOQUE PADDLE STEAMERS & SAILBOATS ON LAKE GENEVA
  function createPaddleSteamer() {
    const boat = new THREE.Group();
    const hullMat = new THREE.MeshStandardMaterial({ color: 0xf7f5f0, roughness: 0.4 });
    const deckMat = new THREE.MeshStandardMaterial({ color: 0xb5834c, roughness: 0.75 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xc92820, roughness: 0.5 });
    const funnelMat = new THREE.MeshStandardMaterial({ color: 0xf0b828, roughness: 0.4 });

    const hull = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 5.2, 3.8, 16), hullMat);
    hull.scale.set(3.6, 1, 0.85);
    hull.position.y = 1.4;
    boat.add(hull);

    const cabin1 = new THREE.Mesh(new THREE.BoxGeometry(30, 3.2, 8.2), hullMat);
    cabin1.position.y = 4.2;
    boat.add(cabin1);

    const cabin2 = new THREE.Mesh(new THREE.BoxGeometry(20, 2.6, 6.8), deckMat);
    cabin2.position.y = 6.8;
    boat.add(cabin2);

    // Side Paddle-Wheel Boxes
    const wheelBox = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 11.6, 12), redMat);
    wheelBox.rotation.x = Math.PI / 2;
    wheelBox.position.set(0, 3.2, 0);
    boat.add(wheelBox);

    // Classic Yellow Smokestack Funnel
    const funnel = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.2, 7.5, 12), funnelMat);
    funnel.position.set(2, 10.2, 0);
    funnel.rotation.z = 0.12;
    boat.add(funnel);

    return boat;
  }

  const steamer1 = createPaddleSteamer();
  const steamer2 = createPaddleSteamer();
  group.add(steamer1);
  group.add(steamer2);

  // Sailboats on Lake Geneva
  const sailboats = [];
  const sailMat = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide, roughness: 0.4 });
  const boatHullMat = new THREE.MeshStandardMaterial({ color: 0x24476b, roughness: 0.4 });
  const yachtCoords = [
    [140, -25], [195, 35], [275, -55], [395, -90],
    [440, 45], [310, 72], [165, -75], [490, -20]
  ];
  for (const [yx, yz] of yachtCoords) {
    const sb = new THREE.Group();
    const sHull = new THREE.Mesh(new THREE.BoxGeometry(7.5, 1.4, 2.6), boatHullMat);
    sHull.position.y = 0.5;
    sb.add(sHull);

    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 11, 6), stoneMat);
    mast.position.y = 6.0;
    sb.add(mast);

    const sailGeo = new THREE.ConeGeometry(3.2, 9.8, 3);
    const sail = new THREE.Mesh(sailGeo, sailMat);
    sail.scale.set(1.2, 1, 0.15);
    sail.position.set(-0.8, 6.2, 0);
    sb.add(sail);

    sb.position.set(yx, 0, yz);
    sb.rotation.y = (yx * 0.03) % Math.PI;
    group.add(sb);
    sailboats.push({ mesh: sb, baseX: yx, baseZ: yz, phase: yx * 0.1 });
  }

  animatedObjects.push((t) => {
    // Steamer 1 cruising across Rade de Genève near Jet d'Eau
    steamer1.position.set(190 + t * 2.2, 0, -28 + Math.sin(t * 0.2) * 8);
    steamer1.rotation.y = -0.08;
    // Steamer 2 heading toward Quai du Mont-Blanc
    steamer2.position.set(420 - t * 1.8, 0, 52);
    steamer2.rotation.y = Math.PI + 0.1;

    for (const s of sailboats) {
      s.mesh.position.x = s.baseX + Math.sin(t * 0.35 + s.phase) * 8;
      s.mesh.position.z = s.baseZ + Math.cos(t * 0.28 + s.phase) * 5;
      s.mesh.rotation.z = Math.sin(t * 1.4 + s.phase) * 0.06;
    }
  });

  // ============================================================================
  // 5. CENTRAL STATION / GARE DE GENÈVE-CORNAVIN (x = -115, z = -345)
  // ============================================================================
  const cornavinGroup = new THREE.Group();
  const cornY = getGenevaElevation(-115, -345);
  cornavinGroup.position.set(-115, cornY - 0.5, -345);
  // Orient station facade slightly SE toward Rue du Mont-Blanc & Place de Cornavin
  cornavinGroup.rotation.y = -0.22;

  // Monumental 176m-wide Julien Flegenheimer Limestone Station Building
  const mainStation = createGenevaBuilding(176, 20, 28, textures.haussmannCream, textures.slateRoof, 'mansard');
  cornavinGroup.add(mainStation);

  // Rhythmic Ground Arcade Colonnade along the entire front of Gare Cornavin
  for (let cx = -82; cx <= 82; cx += 6.5) {
    const pilaster = new THREE.Mesh(new THREE.BoxGeometry(1.5, 19.5, 2.2), travertineMat);
    pilaster.position.set(cx, 9.8, 14.2);
    cornavinGroup.add(pilaster);
  }

  // Central Monumental Clock & Entrance Pavilion ("CFF · GENÈVE-CORNAVIN · FFS")
  const centerPav = new THREE.Mesh(new THREE.BoxGeometry(38, 28, 32), travertineMat);
  centerPav.position.set(0, 14, 2);
  centerPav.castShadow = true;
  cornavinGroup.add(centerPav);

  // Tall Vertical Glass Entrance Hall Windows in Central Pavilion
  for (let wx = -12; wx <= 12; wx += 6) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(3.8, 15, 0.8), glassMat);
    win.position.set(wx, 13.5, 18.0);
    cornavinGroup.add(win);
  }

  // Station Signboard Banner ("CFF GENÈVE-CORNAVIN FFS")
  const signBoard = new THREE.Mesh(
    new THREE.PlaneGeometry(34, 4.4),
    new THREE.MeshBasicMaterial({ map: textures.cornavinSign })
  );
  signBoard.position.set(0, 23.8, 18.2);
  cornavinGroup.add(signBoard);

  // Station Clock above the entrance
  const stationClock = new THREE.Mesh(
    new THREE.CircleGeometry(3.4, 24),
    new THREE.MeshBasicMaterial({ map: textures.clockFace })
  );
  stationClock.position.set(0, 30.2, 18.4);
  cornavinGroup.add(stationClock);

  const clockTowerTop = new THREE.Mesh(new THREE.BoxGeometry(16, 6.8, 12), travertineMat);
  clockTowerTop.position.set(0, 30.2, 12.2);
  cornavinGroup.add(clockTowerTop);

  // Geneva TPG Blue-and-White Trams on Place de Cornavin in front of the station
  const tramBodyMat = new THREE.MeshStandardMaterial({ color: 0xf5f7fa, roughness: 0.35 });
  const tramBlueMat = new THREE.MeshStandardMaterial({ color: 0x0066b3, roughness: 0.4 });
  for (const tx of [-28, 24]) {
    const tram = new THREE.Group();
    tram.position.set(tx, 0.5, 31);
    const tCar = new THREE.Mesh(new THREE.BoxGeometry(24, 3.3, 2.65), tramBodyMat);
    tCar.position.y = 2.0;
    tram.add(tCar);
    const tStripe = new THREE.Mesh(new THREE.BoxGeometry(24.1, 0.85, 2.7), tramBlueMat);
    tStripe.position.y = 1.2;
    tram.add(tStripe);
    cornavinGroup.add(tram);
  }

  // Flanking East & West Station Wing Towers
  for (const tx of [-84, 84]) {
    const wingTower = new THREE.Mesh(new THREE.BoxGeometry(22, 25, 32), travertineMat);
    wingTower.position.set(tx, 12.5, 1.5);
    wingTower.castShadow = true;
    cornavinGroup.add(wingTower);
  }

  // Modern Glass Entry Canopy in Place de Cornavin
  const forecourtCanopy = new THREE.Mesh(new THREE.BoxGeometry(64, 0.8, 14), glassMat);
  forecourtCanopy.position.set(0, 6.2, 24);
  cornavinGroup.add(forecourtCanopy);

  // Railway Platforms, Tracks, Overhead Catenary & Curved Glass Canopies behind Gare Cornavin (z = -20 to -85 local)
  const ballastBed = new THREE.Mesh(
    new THREE.BoxGeometry(280, 0.8, 72),
    new THREE.MeshStandardMaterial({ color: 0x56524d, roughness: 0.95 })
  );
  ballastBed.position.set(0, 0.4, -52);
  cornavinGroup.add(ballastBed);

  const railMat = new THREE.MeshStandardMaterial({ color: 0x8d949e, metalness: 0.8, roughness: 0.3 });
  const canopyRoofMat = new THREE.MeshStandardMaterial({ color: 0x67798a, metalness: 0.5, roughness: 0.35 });

  // 5 Passenger Platforms with Curved Canopies
  for (let p = 0; p < 5; p++) {
    const pz = -24 - p * 13.5;
    const plat = new THREE.Mesh(new THREE.BoxGeometry(210, 1.2, 5.8), stoneMat);
    plat.position.set(0, 1.0, pz);
    cornavinGroup.add(plat);

    const canopy = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.4, 185, 12, 1, false, -Math.PI * 0.35, Math.PI * 0.7), canopyRoofMat);
    canopy.rotation.z = Math.PI / 2;
    canopy.position.set(0, 4.8, pz);
    cornavinGroup.add(canopy);
  }

  // Steel Rails & Catenary Portals
  for (let r = 0; r < 8; r++) {
    const rz = -19.5 - r * 6.8;
    for (const roff of [-0.75, 0.75]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(280, 0.25, 0.18), railMat);
      rail.position.set(0, 0.95, rz + roff);
      cornavinGroup.add(rail);
    }
  }
  for (let gx = -110; gx <= 110; gx += 36) {
    const gantry = new THREE.Mesh(new THREE.BoxGeometry(0.6, 9.5, 68), railMat);
    gantry.position.set(gx, 5.2, -52);
    cornavinGroup.add(gantry);
  }

  // Animated SBB CFF FFS InterCity & TGV Lyria High-Speed Trains at Gare Cornavin
  function createSBBTrain(numCars = 6, isTGV = false) {
    const train = new THREE.Group();
    const bodyWhite = new THREE.MeshStandardMaterial({ color: isTGV ? 0xe5e8ec : 0xf7f7f7, roughness: 0.3 });
    const stripeRed = new THREE.MeshStandardMaterial({ color: isTGV ? 0xb51f38 : 0xd81e05, roughness: 0.35 });
    const winDark = new THREE.MeshStandardMaterial({ color: 0x1c242e, roughness: 0.2, metalness: 0.8 });

    for (let c = 0; c < numCars; c++) {
      const cx = (c - (numCars - 1) * 0.5) * 21.5;
      const car = new THREE.Mesh(new THREE.BoxGeometry(20.4, 3.8, 3.1), bodyWhite);
      car.position.set(cx, 2.9, 0);
      car.castShadow = true;
      train.add(car);

      const redStripe = new THREE.Mesh(new THREE.BoxGeometry(20.5, 0.75, 3.16), stripeRed);
      redStripe.position.set(cx, 4.3, 0);
      train.add(redStripe);

      const winBand = new THREE.Mesh(new THREE.BoxGeometry(18.8, 1.15, 3.18), winDark);
      winBand.position.set(cx, 3.1, 0);
      train.add(winBand);
    }
    return train;
  }

  const sbbTrain1 = createSBBTrain(6, false);
  const sbbTrain2 = createSBBTrain(5, true);
  const sbbTrain3 = createSBBTrain(6, false);
  cornavinGroup.add(sbbTrain1);
  cornavinGroup.add(sbbTrain2);
  cornavinGroup.add(sbbTrain3);

  animatedObjects.push((t) => {
    sbbTrain1.position.set(-45 + Math.sin(t * 0.25) * 55, 0, -30.5);
    sbbTrain2.position.set(35 - t * 3.2, 0, -44.2);
    sbbTrain3.position.set(-20 + t * 2.5, 0, -57.8);
  });

  group.add(cornavinGroup);

  // Basilique Notre-Dame de Genève right opposite Gare Cornavin (x = -175, z = -282)
  const ndGroup = new THREE.Group();
  ndGroup.position.set(-175, getGenevaElevation(-175, -282), -282);
  ndGroup.rotation.y = 0.35;
  const ndNave = createGenevaBuilding(22, 18, 38, textures.oldTownStone, textures.slateRoof, 'pitched');
  ndGroup.add(ndNave);
  for (const tx of [-7.5, 7.5]) {
    const tower = new THREE.Mesh(new THREE.BoxGeometry(6.5, 28, 6.5), stoneMat);
    tower.position.set(tx, 14, 18);
    ndGroup.add(tower);
    const spire = new THREE.Mesh(new THREE.ConeGeometry(4.2, 15, 8), stoneMat);
    spire.position.set(tx, 35.5, 18);
    ndGroup.add(spire);
  }
  group.add(ndGroup);

  // ============================================================================
  // 6. UNITED NATIONS (유엔 유럽본부 / PALAIS DES NATIONS & BROKEN CHAIR: x = -35, z = -690)
  // ============================================================================

  // 6A. PLACE DES NATIONS & BROKEN CHAIR SCULPTURE (x = -75, z = -555)
  const nationsY = getGenevaElevation(-75, -555);
  const nationsGroup = new THREE.Group();
  nationsGroup.position.set(-75, nationsY, -555);

  // Granite Esplanade of Place des Nations
  const esplanade = new THREE.Mesh(new THREE.CylinderGeometry(36, 36, 0.4, 32), stoneMat);
  esplanade.position.y = 0.2;
  nationsGroup.add(esplanade);

  // Animated Water Jets on Place des Nations
  const jetMats = new THREE.MeshBasicMaterial({ color: 0xdff6ff, transparent: true, opacity: 0.75 });
  const plazaJets = [];
  for (let jx = -14; jx <= 14; jx += 7) {
    for (let jz = -6; jz <= 12; jz += 6) {
      if (Math.hypot(jx, jz - 8) < 7) continue;
      const pj = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.35, 3.8, 8), jetMats);
      pj.position.set(jx, 1.9, jz);
      nationsGroup.add(pj);
      plazaJets.push({ mesh: pj, phase: jx * 0.4 + jz * 0.3 });
    }
  }

  // ICONIC BROKEN CHAIR SCULPTURE (부러진 의자 - 12m tall bright red-wood monument!)
  const chairGroup = new THREE.Group();
  chairGroup.position.set(0, 0.4, 10);
  chairGroup.rotation.y = 0.18;
  const redWoodMat = new THREE.MeshStandardMaterial({ color: 0xc92418, roughness: 0.55, metalness: 0.08 });

  // Seat (at height 5.8m)
  const seat = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.65, 5.0), redWoodMat);
  seat.position.y = 5.8;
  seat.castShadow = true;
  chairGroup.add(seat);

  // 3 Intact Legs (Back-Left, Back-Right, Front-Right)
  for (const [lx, lz] of [[-2.1, -2.0], [2.1, -2.0], [2.1, 2.0]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.78, 5.8, 0.78), redWoodMat);
    leg.position.set(lx, 2.9, lz);
    leg.castShadow = true;
    chairGroup.add(leg);
  }

  // 4th Leg (Front-Left): Dramatically Snapped / Broken mid-air!
  const brokenUpper = new THREE.Mesh(new THREE.BoxGeometry(0.82, 2.4, 0.82), redWoodMat);
  brokenUpper.position.set(-2.1, 4.6, 2.0);
  brokenUpper.rotation.z = -0.08;
  chairGroup.add(brokenUpper);

  const jaggedSplinter = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.3, 5), redWoodMat);
  jaggedSplinter.rotation.x = Math.PI;
  jaggedSplinter.position.set(-2.15, 3.1, 2.0);
  chairGroup.add(jaggedSplinter);

  // High Chair Backrest (rising to 12.5m)
  for (const bx of [-2.1, 2.1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.75, 6.8, 0.75), redWoodMat);
    post.position.set(bx, 9.2, -2.0);
    post.castShadow = true;
    chairGroup.add(post);
  }
  for (const by of [8.2, 10.2, 11.9]) {
    const slat = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.85, 0.55), redWoodMat);
    slat.position.set(0, by, -2.0);
    chairGroup.add(slat);
  }

  nationsGroup.add(chairGroup);

  // 6B. ALLÉE DES DRAPEAUX (Alley of 193 UN Member State Flags leading into Palais des Nations)
  const flagColors = [
    0x4b92db, // UN Light Blue
    0xd81e05, 0x0055a4, 0xffcc00, 0x008c45, 0xef3340, 0x0033a0, 0x009b3a, 0xff8200
  ];
  const unFlagMeshes = [];
  const poleMat = new THREE.MeshStandardMaterial({ color: 0xe6e6e6, metalness: 0.7, roughness: 0.25 });

  for (let i = 0; i < 18; i++) {
    const fz = -18 - i * 6.2;
    const fxShift = i * 1.65;
    // Raise base height smoothly as the alley ascends onto the Palais des Nations Cour d'Honneur terrace
    const baseLift = i > 8 ? 8.2 : (i * 0.9);
    for (const side of [-18, -12, 12, 18]) {
      const px = fxShift + side;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 11.5, 6), poleMat);
      pole.position.set(px, baseLift + 5.75, fz);
      nationsGroup.add(pole);

      const fColor = (Math.abs(side) > 15 && i % 2 === 0)
        ? 0x4b92db // UN Blue outer banner
        : flagColors[(i * 3 + (side > 0 ? 1 : 2)) % flagColors.length];
      const fMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(3.4, 2.2, 4, 2),
        new THREE.MeshStandardMaterial({ color: fColor, side: THREE.DoubleSide, roughness: 0.45 })
      );
      fMesh.position.set(px + 1.7, baseLift + 10.2, fz);
      nationsGroup.add(fMesh);
      unFlagMeshes.push({ mesh: fMesh, phase: i * 0.4 + side });
    }
  }

  group.add(nationsGroup);

  // 6C. PALAIS DES NATIONS (UN European Headquarters in Parc de l'Ariana: x = -20, z = -700)
  const palaisY = getGenevaElevation(-20, -700);
  const palaisGroup = new THREE.Group();
  palaisGroup.position.set(-20, palaisY - 0.5, -700);
  palaisGroup.rotation.y = 0.25; // Facing SE across Parc de l'Ariana toward Lake Geneva & Mont Blanc!

  const palaisTex = textures.palaisTravertine.clone();
  palaisTex.needsUpdate = true;
  palaisTex.repeat.set(6, 2);
  const palaisFacadeMat = new THREE.MeshStandardMaterial({
    map: palaisTex,
    roughness: 0.52,
    metalness: 0.05
  });

  // Grand Terrace Esplanade of the Cour d'Honneur
  const courTerrace = new THREE.Mesh(new THREE.BoxGeometry(185, 3.2, 130), travertineMat);
  courTerrace.position.set(0, 1.2, 10);
  courTerrace.receiveShadow = true;
  palaisGroup.add(courTerrace);

  // Central Secretariat & Council Wing (Back of Cour d'Honneur)
  const secWing = new THREE.Mesh(new THREE.BoxGeometry(118, 25, 22), palaisFacadeMat);
  secWing.position.set(0, 14.5, -16);
  secWing.castShadow = true;
  palaisGroup.add(secWing);

  // Monumental Stepped Art-Deco Penthouse Crown on Secretariat Wing
  const secCrown = new THREE.Mesh(new THREE.BoxGeometry(92, 5.5, 16), travertineMat);
  secCrown.position.set(0, 29.5, -16);
  palaisGroup.add(secCrown);

  // Sweeping Left & Right Wings enclosing the Cour d'Honneur
  for (const sx of [-62, 62]) {
    const sideWing = new THREE.Mesh(new THREE.BoxGeometry(24, 23, 78), palaisFacadeMat);
    sideWing.position.set(sx, 13.5, 18);
    sideWing.castShadow = true;
    palaisGroup.add(sideWing);

    // Extending outer pavilions (Library Wing & Assembly Wing)
    const outerWing = new THREE.Mesh(new THREE.BoxGeometry(48, 21, 24), palaisFacadeMat);
    outerWing.position.set(sx * 1.45, 12.5, 46);
    outerWing.castShadow = true;
    palaisGroup.add(outerWing);
  }

  // Tall Neoclassical Colonnade Peristyle along the Cour d'Honneur
  for (let cx = -48; cx <= 48; cx += 6) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 22, 10), travertineMat);
    col.position.set(cx, 13.0, -4.2);
    palaisGroup.add(col);
  }

  // Assembly Building & Iconic Circular Dome of Salle XX (Human Rights and Alliance of Civilizations Room)
  const assemblyBase = new THREE.Mesh(new THREE.BoxGeometry(58, 22, 52), palaisFacadeMat);
  assemblyBase.position.set(-42, 13.0, -56);
  assemblyBase.castShadow = true;
  palaisGroup.add(assemblyBase);

  const salleDomeDrum = new THREE.Mesh(new THREE.CylinderGeometry(19, 20, 7.5, 28), travertineMat);
  salleDomeDrum.position.set(-42, 27.0, -56);
  palaisGroup.add(salleDomeDrum);

  const salleDome = new THREE.Mesh(
    new THREE.SphereGeometry(18.5, 28, 16, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x7393a7, roughness: 0.35, metalness: 0.45 })
  );
  salleDome.scale.set(1, 0.48, 1);
  salleDome.position.set(-42, 30.2, -56);
  palaisGroup.add(salleDome);

  // Modern Bâtiment E (New Conference Wing on the northern terrace)
  const batimentE = createGenevaBuilding(96, 26, 32, textures.modernGlass, textures.slateRoof, 'mansard');
  batimentE.position.set(28, 2.0, -68);
  palaisGroup.add(batimentE);

  // Golden Armillary Sphere (Celestial Sphere / Woodrow Wilson Memorial) in Reflecting Pool of Cour d'Honneur
  const spherePool = new THREE.Mesh(
    new THREE.CylinderGeometry(12, 12.5, 0.8, 24),
    new THREE.MeshStandardMaterial({ color: 0x1b7fa3, roughness: 0.15, metalness: 0.7 })
  );
  spherePool.position.set(0, 3.0, 26);
  palaisGroup.add(spherePool);

  const armillaryGroup = new THREE.Group();
  armillaryGroup.position.set(0, 8.2, 26);
  for (const [rx, ry, rz] of [[0, 0, 0], [Math.PI / 3, 0.4, 0], [0, Math.PI / 2, Math.PI / 4], [Math.PI / 2, 0, 0]]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3.8, 0.22, 10, 32), goldMat);
    ring.rotation.set(rx, ry, rz);
    armillaryGroup.add(ring);
  }
  palaisGroup.add(armillaryGroup);

  group.add(palaisGroup);

  // Lush Cedar & Park Trees across Parc de l'Ariana surrounding the UN
  for (let tx = -165; tx <= 145; tx += 22) {
    for (let tz = -830; tz <= -540; tz += 22) {
      // Keep the Palais des Nations building footprint and Cour d'Honneur vista open
      if (tx > -115 && tx < 85 && tz > -785 && tz < -625) continue;
      if (tx > -105 && tx < -40 && tz > -640 && tz < -535) continue;
      const tree = createTree(1.35 + ((Math.abs(tx + tz)) % 3) * 0.18, false, tx - tz);
      tree.position.set(tx, getGenevaElevation(tx, tz), tz);
      group.add(tree);
    }
  }

  animatedObjects.push((t) => {
    armillaryGroup.rotation.y = t * 0.45;
    for (const uf of unFlagMeshes) {
      uf.mesh.rotation.y = Math.sin(t * 5.0 + uf.phase) * 0.25;
    }
    for (const pj of plazaJets) {
      pj.mesh.scale.y = 0.75 + Math.sin(t * 6.0 + pj.phase) * 0.3;
    }
  });

  // ============================================================================
  // 7. SURROUNDING GENEVA URBAN CITY BLOCKS (Quai du Mont-Blanc, Rues Basses, etc.)
  // ============================================================================
  const cityBlocks = [
    // Right Bank: Quai du Mont-Blanc Belle Époque Grand Hotels (Hôtel des Bergues, Beau-Rivage, de la Paix, Richemond)
    [-145, -108, 42, 23, 24, textures.haussmannCream, textures.slateRoof, 0.04], // Four Seasons Hôtel des Bergues
    [-85, -112, 38, 22, 22, textures.haussmannOchre, textures.slateRoof, 0.02],
    [-38, -115, 34, 24, 22, textures.haussmannCream, textures.slateRoof, -0.05],
    [42, -125, 44, 24, 24, textures.haussmannCream, textures.copperRoof, -0.32], // Hôtel de la Paix
    [98, -148, 48, 25, 24, textures.haussmannOchre, textures.slateRoof, -0.35],  // Hôtel Beau-Rivage
    [156, -172, 44, 23, 22, textures.haussmannCream, textures.slateRoof, -0.36],
    [215, -198, 46, 22, 24, textures.haussmannOchre, textures.slateRoof, -0.38], // Fairmont / Quai Wilson
    [280, -225, 52, 23, 24, textures.haussmannCream, textures.slateRoof, -0.38], // Palais Wilson

    // Rue du Mont-Blanc Corridor (connecting Lakeside to Gare Cornavin)
    [-42, -168, 36, 22, 26, textures.haussmannCream, textures.slateRoof, -0.34],
    [-68, -218, 38, 23, 26, textures.haussmannOchre, textures.slateRoof, -0.34],
    [-92, -268, 40, 22, 26, textures.haussmannCream, textures.slateRoof, -0.34], // Hôtel des Postes
    [12, -155, 36, 22, 24, textures.haussmannOchre, textures.slateRoof, -0.34],
    [-14, -205, 38, 23, 26, textures.haussmannCream, textures.slateRoof, -0.34],
    [-42, -255, 38, 22, 26, textures.haussmannOchre, textures.slateRoof, -0.34],
    [-148, -175, 38, 21, 26, textures.haussmannCream, textures.slateRoof, 0.1],
    [-156, -228, 36, 21, 24, textures.haussmannOchre, textures.slateRoof, 0.15],
    [48, -210, 42, 21, 26, textures.haussmannCream, textures.slateRoof, -0.25], // Le Richemond

    // Rue de Lausanne / Pâquis / Nations Corridor (connecting Gare Cornavin to UN Place des Nations)
    [-58, -445, 38, 22, 24, textures.haussmannCream, textures.slateRoof, 0.12],
    [-48, -495, 36, 21, 24, textures.modernGlass, textures.slateRoof, 0.12],
    [-128, -455, 38, 21, 24, textures.haussmannOchre, textures.slateRoof, 0.12],
    [-118, -505, 36, 22, 24, textures.haussmannCream, textures.slateRoof, 0.12],
    [15, -460, 40, 20, 24, textures.haussmannOchre, textures.slateRoof, -0.15],
    [35, -515, 42, 21, 24, textures.modernGlass, textures.slateRoof, -0.18], // WTO / Maison de la Paix

    // Left Bank: Rues Basses, Rue du Rhône, Bel-Air, Corraterie (between Lakeside, Old Town & Place de Neuve)
    [22, 132, 44, 24, 24, textures.haussmannCream, textures.slateRoof, 0.0],     // Métropole Genève
    [-35, 132, 46, 23, 24, textures.haussmannOchre, textures.slateRoof, 0.0],    // Rue du Rhône luxury block
    [-95, 132, 44, 23, 24, textures.haussmannCream, textures.slateRoof, 0.0],
    [-155, 132, 42, 24, 24, textures.haussmannOchre, textures.copperRoof, 0.0],  // Place Bel-Air
    [-25, 185, 42, 22, 24, textures.haussmannCream, textures.slateRoof, 0.05],
    [32, 188, 42, 22, 24, textures.haussmannOchre, textures.slateRoof, -0.05],
    [88, 195, 38, 21, 22, textures.haussmannCream, textures.slateRoof, -0.1],
    [148, 198, 42, 21, 24, textures.haussmannOchre, textures.slateRoof, -0.12],
    [210, 195, 44, 22, 24, textures.haussmannCream, textures.slateRoof, -0.12],  // Eaux-Vives

    // Rue de la Corraterie (connecting Bel-Air / Rhône to Place de Neuve)
    [-132, 215, 34, 21, 22, textures.haussmannCream, textures.slateRoof, 0.08],
    [-138, 268, 34, 21, 22, textures.haussmannOchre, textures.slateRoof, 0.08],
    [-142, 320, 34, 20, 22, textures.haussmannCream, textures.slateRoof, 0.08],
    [-218, 225, 36, 21, 24, textures.haussmannOchre, textures.slateRoof, -0.05],
    [-222, 285, 36, 21, 24, textures.haussmannCream, textures.slateRoof, -0.05],
    [-228, 342, 36, 20, 24, textures.haussmannOchre, textures.slateRoof, -0.05]
  ];

  for (const [bx, bz, bw, bh, bd, fTex, rTex, rotY] of cityBlocks) {
    const by = getGenevaElevation(bx, bz) - 0.8;
    const bldg = createGenevaBuilding(bw, bh, bd, fTex, rTex, 'mansard');
    bldg.position.set(bx, by, bz);
    bldg.rotation.y = rotY;
    group.add(bldg);
  }

  scene.add(group);
  return group;
}
