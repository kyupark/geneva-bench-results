import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.module.js';

// Returns the water width (half-span in Z) and centerline Z for a given X coordinate
export function getWaterChannel(x) {
  // For x > 0: Lake Geneva (Rade de Genève) widens steadily toward the East
  // For x <= 0: Rhône River narrows slightly and curves gently West-Southwest
  if (x >= 0) {
    const t = Math.min(x / 900, 1.5);
    const northZ = -95 - 240 * Math.pow(t, 1.15);
    const southZ = 95 + 95 * Math.pow(t, 1.05);
    return { northZ, southZ, centerZ: (northZ + southZ) * 0.5, halfWidth: (southZ - northZ) * 0.5 };
  } else {
    const t = Math.min(-x / 600, 1.5);
    const centerZ = 22 * Math.sin(t * 1.4);
    const halfWidth = Math.max(54, 95 - 32 * t);
    return {
      northZ: centerZ - halfWidth,
      southZ: centerZ + halfWidth,
      centerZ,
      halfWidth
    };
  }
}

// Deterministic terrain height (Y in meters) for any (X, Z) in Geneva
export function getGenevaElevation(x, z) {
  const ch = getWaterChannel(x);
  if (z > ch.northZ + 4 && z < ch.southZ - 4) {
    return -2.2; // Underwater lake/river bed
  }

  let h = 2.5;

  // 1. Old Town Hill (Vieille Ville): centered at (x = 45, z = 310), elevation up to 31m
  // Drops cleanly along the southern medieval rampart wall (z = 386) into flat Parc des Bastions (z >= 390)
  if (z < 390) {
    const dxOld = (x - 42) / 155;
    const dzOld = (z - 315) / 145;
    const distOldSq = dxOld * dxOld + dzOld * dzOld;
    if (distOldSq < 2.2) {
      const rampartCut = z > 370 ? Math.max(0, 1 - (z - 370) / 20) : 1.0;
      const hill = 28.5 * Math.exp(-distOldSq * 1.45) * rampartCut;
      h += hill;
    }
  }

  // 2. Southern Left Bank base elevation (Bastions & Place de Neuve around y = 6m)
  if (z >= ch.southZ) {
    const distFromShore = z - ch.southZ;
    h += Math.min(3.5, distFromShore * 0.025);
  }

  // 3. Right Bank (North, z < ch.northZ): rises gently to Gare Cornavin (z = -340, y ~ 10m)
  // and then climbs into Parc de l'Ariana / UN Palais des Nations (z = -690, y ~ 26m)
  if (z <= ch.northZ) {
    const northDist = Math.max(0, ch.northZ - z);
    // Gentle slope to Cornavin, then hill around Ariana/UN
    h += Math.min(8.0, northDist * 0.032);
    const dxUN = (x + 25) / 260;
    const dzUN = (z + 700) / 210;
    const distUNSq = dxUN * dxUN + dzUN * dzUN;
    if (distUNSq < 2.5) {
      h += 16.0 * Math.exp(-distUNSq * 1.1);
    }
  }

  return h;
}

export function buildTerrainAndWater(scene, textures, animatedObjects) {
  const group = new THREE.Group();

  // 1. Procedural Golden-Hour Sky Dome
  const skyGeo = new THREE.SphereGeometry(3600, 48, 32);
  const skyCanvas = document.createElement('canvas');
  skyCanvas.width = 1024;
  skyCanvas.height = 512;
  const sctx = skyCanvas.getContext('2d');
  const skyGrad = sctx.createLinearGradient(0, 0, 0, 512);
  skyGrad.addColorStop(0.0, '#13294b');
  skyGrad.addColorStop(0.32, '#2d5c8f');
  skyGrad.addColorStop(0.46, '#7ba4c7');
  skyGrad.addColorStop(0.51, '#f4c68b');
  skyGrad.addColorStop(0.54, '#f8a866');
  skyGrad.addColorStop(1.0, '#2a3542');
  sctx.fillStyle = skyGrad;
  sctx.fillRect(0, 0, 1024, 512);

  // Soft wispy high-altitude clouds (kept away from UV seam at x=0/1024)
  for (let i = 0; i < 80; i++) {
    const cx = 140 + ((i * 73) % 740);
    const cy = 125 + ((i * 41) % 115);
    const rw = 40 + (i % 5) * 20;
    const rh = 6 + (i % 4) * 3.5;
    const cgrad = sctx.createRadialGradient(cx, cy, 2, cx, cy, rw);
    cgrad.addColorStop(0, 'rgba(255, 244, 224, 0.30)');
    cgrad.addColorStop(1, 'rgba(255, 220, 185, 0)');
    sctx.fillStyle = cgrad;
    sctx.beginPath();
    sctx.ellipse(cx, cy, rw, rh, 0, 0, Math.PI * 2);
    sctx.fill();
  }

  const skyTex = new THREE.CanvasTexture(skyCanvas);
  skyTex.colorSpace = THREE.SRGBColorSpace;
  const skyMat = new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, depthWrite: false });
  const skyMesh = new THREE.Mesh(skyGeo, skyMat);
  group.add(skyMesh);

  // Glowing Golden-Hour Sun Disc in the East-Southeast over Mont Blanc
  const sunGeo = new THREE.SphereGeometry(85, 24, 24);
  const sunMat = new THREE.MeshBasicMaterial({ color: 0xfff2cc });
  const sunMesh = new THREE.Mesh(sunGeo, sunMat);
  sunMesh.position.set(2200, 540, 650);
  group.add(sunMesh);

  // 2. Alpine Backdrop (Mont Blanc Massif to the East/SE, Mont Salève to the South, Jura to the NW)
  function createMountainRange(points, snowLineY, baseColorHex, snowColorHex) {
    const mGroup = new THREE.Group();
    const baseMat = new THREE.MeshStandardMaterial({ color: baseColorHex, roughness: 0.92, metalness: 0.02 });
    const snowMat = new THREE.MeshStandardMaterial({ color: snowColorHex, roughness: 0.65, metalness: 0.05 });

    for (const [mx, mz, radius, height] of points) {
      const coneGeo = new THREE.ConeGeometry(radius, height, 7);
      const cone = new THREE.Mesh(coneGeo, baseMat);
      cone.position.set(mx, height * 0.45 - 10, mz);
      cone.rotation.y = (mx * 0.13 + mz * 0.07);
      mGroup.add(cone);

      if (height > snowLineY) {
        const capRatio = (height - snowLineY) / height;
        const capGeo = new THREE.ConeGeometry(radius * capRatio * 1.03, height * capRatio, 7);
        const cap = new THREE.Mesh(capGeo, snowMat);
        cap.position.set(mx, height * 0.45 - 10 + height * (0.5 - capRatio * 0.5) + 1.5, mz);
        cap.rotation.y = cone.rotation.y;
        mGroup.add(cap);
      }
    }
    return mGroup;
  }

  // Mont Blanc & Savoy Alps (East / Southeast)
  const alpsPoints = [
    [1850, 480, 520, 460],  // Mont Blanc summit
    [1720, 220, 430, 360],
    [1900, 820, 480, 410],  // Aiguille du Midi
    [1650, -120, 390, 310],
    [1550, 680, 420, 320],
    [1480, -420, 380, 270],
    [1750, -680, 440, 290]
  ];
  group.add(createMountainRange(alpsPoints, 195, 0x566c84, 0xfaf7f0));

  // Mont Salève (South behind Old Town & Bastions)
  const salevePoints = [
    [350, 1450, 520, 240],
    [-120, 1480, 490, 230],
    [-580, 1420, 460, 210],
    [820, 1380, 480, 250]
  ];
  group.add(createMountainRange(salevePoints, 260, 0x4f645d, 0xf2efe9));

  // Jura Mountains (Northwest behind UN & Cornavin)
  const juraPoints = [
    [-1450, -950, 520, 260],
    [-1100, -1350, 560, 280],
    [-600, -1480, 510, 250],
    [-1550, -400, 480, 220]
  ];
  group.add(createMountainRange(juraPoints, 270, 0x4b5f73, 0xf2efe9));

  // 3. Geneva Terrain Mesh (1900m x 1900m high-resolution heightfield)
  const terrainSize = 2200;
  const segs = 180;
  const terrainGeo = new THREE.PlaneGeometry(terrainSize, terrainSize, segs, segs);
  terrainGeo.rotateX(-Math.PI / 2);

  const posAttr = terrainGeo.attributes.position;
  const colors = new Float32Array(posAttr.count * 3);
  const cPark = new THREE.Color(0x4b7742);
  const cGrass = new THREE.Color(0x5c824c);
  const cUrban = new THREE.Color(0xd2cabd);
  const cOldTown = new THREE.Color(0xb8ae9c);
  const cPlaza = new THREE.Color(0xc5beb0);
  const cBed = new THREE.Color(0x1b455c);

  for (let i = 0; i < posAttr.count; i++) {
    const vx = posAttr.getX(i);
    const vz = posAttr.getZ(i);
    const vy = getGenevaElevation(vx, vz);
    posAttr.setY(i, vy);

    let col = cUrban;
    if (vy < 0) {
      col = cBed;
    } else if (
      // Parc des Bastions
      (vx > -145 && vx < 65 && vz > 388 && vz < 500) ||
      // Jardin Anglais & Parc La Grange / Eaux-Vives
      (vx > 65 && vx < 520 && vz > 95 && vz < 190) ||
      // Parc Mon Repos & Perle du Lac & Parc de l'Ariana (UN)
      (vx > -240 && vx < 260 && vz < -520 && vz > -880)
    ) {
      col = (i % 3 === 0) ? cPark : cGrass;
    } else if (vx > -50 && vx < 150 && vz > 220 && vz < 388) {
      col = cOldTown; // Cobblestone Old Town hill
    } else if (Math.abs(vx) > 650 || Math.abs(vz) > 850) {
      col = cGrass;
    } else {
      col = cPlaza;
    }

    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  terrainGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  terrainGeo.computeVertexNormals();

  const terrainMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.88,
    metalness: 0.04
  });
  const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
  terrainMesh.receiveShadow = true;
  group.add(terrainMesh);

  // 4. Shimmering Lake Geneva (Lac Léman) & Rhône River Surface
  const waterGeo = new THREE.PlaneGeometry(2200, 1200, 64, 32);
  waterGeo.rotateX(-Math.PI / 2);
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x16698a,
    emissive: 0x072536,
    emissiveIntensity: 0.35,
    roughness: 0.16,
    metalness: 0.78,
    normalMap: textures.waterNormal,
    normalScale: new THREE.Vector2(0.35, 0.35)
  });
  const waterMesh = new THREE.Mesh(waterGeo, waterMat);
  waterMesh.position.set(150, 0.0, -40);
  waterMesh.receiveShadow = true;
  group.add(waterMesh);

  animatedObjects.push((t) => {
    textures.waterNormal.offset.x = (t * 0.03) % 1;
    textures.waterNormal.offset.y = (t * 0.018) % 1;
  });

  // 5. Stone Quays / Embankment Walls along both shores of Lake Geneva & Rhône
  const quayMat = new THREE.MeshStandardMaterial({ color: 0xc8c0b0, roughness: 0.75 });
  const promMat = new THREE.MeshStandardMaterial({ color: 0xded6c6, roughness: 0.8 });
  for (let x = -480; x <= 680; x += 20) {
    const ch1 = getWaterChannel(x);
    const ch2 = getWaterChannel(x + 20);
    for (const side of ['north', 'south']) {
      const z1 = side === 'north' ? ch1.northZ : ch1.southZ;
      const z2 = side === 'north' ? ch2.northZ : ch2.southZ;
      const dx = 20;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dz, dx);

      const wall = new THREE.Mesh(new THREE.BoxGeometry(len + 1, 3.6, 5), quayMat);
      wall.position.set(x + 10, 1.0, (z1 + z2) * 0.5);
      wall.rotation.y = -angle;
      group.add(wall);

      const walk = new THREE.Mesh(new THREE.BoxGeometry(len + 1, 0.4, 14), promMat);
      const offsetZ = side === 'north' ? -6 : 6;
      walk.position.set(x + 10, 2.8, (z1 + z2) * 0.5 + offsetZ);
      walk.rotation.y = -angle;
      group.add(walk);
    }
  }

  // 6. Pont du Mont-Blanc (x = 0, spanning z = -95 to +95) with Swiss & Genevan Flags
  const bridgeGroup = new THREE.Group();
  const bridgeLen = 194;
  const deck = new THREE.Mesh(
    new THREE.BoxGeometry(24, 2.4, bridgeLen),
    new THREE.MeshStandardMaterial({ color: 0xd5cec0, roughness: 0.65 })
  );
  deck.position.set(0, 4.2, 0);
  deck.castShadow = true;
  bridgeGroup.add(deck);

  // Asphalt roadway on bridge
  const roadDeck = new THREE.Mesh(
    new THREE.BoxGeometry(15, 0.25, bridgeLen),
    new THREE.MeshStandardMaterial({ color: 0x363a3f, roughness: 0.85 })
  );
  roadDeck.position.set(0, 5.45, 0);
  bridgeGroup.add(roadDeck);

  // 7 Bridge piers in water
  for (let z = -75; z <= 75; z += 25) {
    const pier = new THREE.Mesh(
      new THREE.CylinderGeometry(3.2, 3.8, 7, 12),
      quayMat
    );
    pier.scale.set(3.6, 1, 0.8);
    pier.position.set(0, 1.2, z);
    bridgeGroup.add(pier);
  }

  // Swiss & Genevan Flags along both sides of Pont du Mont-Blanc
  const poleMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.6, roughness: 0.3 });
  const swissFlagMat = new THREE.MeshStandardMaterial({ color: 0xd81e05, side: THREE.DoubleSide });
  const genevaFlagMat = new THREE.MeshStandardMaterial({ color: 0xf2c511, side: THREE.DoubleSide });
  const flagMeshes = [];

  for (let z = -84; z <= 84; z += 14) {
    for (const sx of [-11.2, 11.2]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 7.5, 6), poleMat);
      pole.position.set(sx, 8.8, z);
      bridgeGroup.add(pole);

      const isSwiss = (Math.round((z + 90) / 14) + (sx > 0 ? 1 : 0)) % 2 === 0;
      const flag = new THREE.Mesh(
        new THREE.PlaneGeometry(2.8, 1.9, 4, 2),
        isSwiss ? swissFlagMat : genevaFlagMat
      );
      flag.position.set(sx + 1.4, 11.4, z);
      bridgeGroup.add(flag);
      flagMeshes.push({ mesh: flag, phase: z * 0.15 + sx });
    }
  }

  // 7. Île Rousseau & Pont des Bergues (x = -110, z = 0)
  const berguesDeck = new THREE.Mesh(
    new THREE.BoxGeometry(11, 1.8, 175),
    new THREE.MeshStandardMaterial({ color: 0xcabfa9, roughness: 0.75 })
  );
  berguesDeck.position.set(-108, 3.8, 4);
  bridgeGroup.add(berguesDeck);

  // Île Rousseau teardrop island
  const ileGeo = new THREE.CylinderGeometry(24, 27, 3.5, 24);
  ileGeo.scale(1.65, 1, 0.82);
  const ileMesh = new THREE.Mesh(ileGeo, quayMat);
  ileMesh.position.set(-108, 1.2, 10);
  bridgeGroup.add(ileMesh);

  const ileLawn = new THREE.Mesh(
    new THREE.CylinderGeometry(21, 21, 0.5, 24),
    new THREE.MeshStandardMaterial({ color: 0x4f7d44, roughness: 0.9 })
  );
  ileLawn.scale.set(1.6, 1, 0.78);
  ileLawn.position.set(-108, 3.1, 10);
  bridgeGroup.add(ileLawn);

  // Rousseau Statue on pedestal in the middle of Île Rousseau
  const rousseauPed = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.2, 3.6, 8), quayMat);
  rousseauPed.position.set(-122, 4.8, 10);
  bridgeGroup.add(rousseauPed);
  const rousseauStat = new THREE.Mesh(
    new THREE.CylinderGeometry(0.7, 0.9, 2.8, 8),
    new THREE.MeshStandardMaterial({ color: 0x456b5c, roughness: 0.4, metalness: 0.6 })
  );
  rousseauStat.position.set(-122, 7.6, 10);
  bridgeGroup.add(rousseauStat);

  // Pont de la Machine & L'Île further west (x = -240)
  const machineBridge = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1.6, 165),
    quayMat
  );
  machineBridge.position.set(-220, 3.5, 12);
  bridgeGroup.add(machineBridge);

  const machineBldg = new THREE.Mesh(
    new THREE.BoxGeometry(34, 9, 14),
    new THREE.MeshStandardMaterial({ color: 0xe6decb, roughness: 0.7 })
  );
  machineBldg.position.set(-220, 7.2, 5);
  bridgeGroup.add(machineBldg);

  group.add(bridgeGroup);

  // 8. Major Geneva Boulevards & Avenues (Asphalt ribbons laid slightly above terrain)
  const roadMat = new THREE.MeshStandardMaterial({ color: 0x34383e, roughness: 0.88 });
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xe8d89b });

  function addRoadSegment(x1, z1, x2, z2, width = 14) {
    const steps = Math.max(4, Math.ceil(Math.hypot(x2 - x1, z2 - z1) / 22));
    for (let i = 0; i < steps; i++) {
      const t1 = i / steps;
      const t2 = (i + 1) / steps;
      const sx1 = x1 + (x2 - x1) * t1;
      const sz1 = z1 + (z2 - z1) * t1;
      const sx2 = x1 + (x2 - x1) * t2;
      const sz2 = z1 + (z2 - z1) * t2;
      const mx = (sx1 + sx2) * 0.5;
      const mz = (sz1 + sz2) * 0.5;
      const my = Math.max(2.7, getGenevaElevation(mx, mz) + 0.22);
      const segLen = Math.hypot(sx2 - sx1, sz2 - sz1) + 1.2;
      const angle = Math.atan2(sz2 - sz1, sx2 - sx1);

      const seg = new THREE.Mesh(new THREE.BoxGeometry(segLen, 0.28, width), roadMat);
      seg.position.set(mx, my, mz);
      seg.rotation.y = -angle;
      group.add(seg);

      const stripe = new THREE.Mesh(new THREE.BoxGeometry(segLen * 0.6, 0.32, 0.35), lineMat);
      stripe.position.set(mx, my + 0.02, mz);
      stripe.rotation.y = -angle;
      group.add(stripe);
    }
  }

  // Rue du Mont-Blanc (Pont du Mont-Blanc -> Gare Cornavin)
  addRoadSegment(0, -98, -110, -310, 18);
  // Quai du Mont-Blanc & Quai Wilson (Right Bank Lakeside)
  addRoadSegment(-250, -90, 0, -98, 16);
  addRoadSegment(0, -98, 420, -245, 16);
  // Rue de Lausanne / Avenue de France / Avenue de la Paix (Gare Cornavin -> Place des Nations -> UN)
  addRoadSegment(-110, -310, -75, -555, 18);
  addRoadSegment(-75, -555, -180, -680, 15);
  // Left Bank Rues Basses / Quai du Général-Guisan / Quai Gustave-Ador
  addRoadSegment(-240, 105, 60, 105, 18);
  addRoadSegment(60, 105, 480, 165, 16);
  // Rue de la Corraterie & Boulevard Georges-Favon (Bel-Air -> Place de Neuve)
  addRoadSegment(-165, 105, -185, 420, 16);
  // Boulevard Helvétique / Rue Saint-Léger around Old Town to Bastions
  addRoadSegment(70, 105, 130, 380, 14);
  addRoadSegment(-185, 420, 120, 515, 15);

  animatedObjects.push((t) => {
    for (const f of flagMeshes) {
      f.mesh.rotation.y = Math.sin(t * 4.5 + f.phase) * 0.22;
    }
  });

  scene.add(group);
  return group;
}
