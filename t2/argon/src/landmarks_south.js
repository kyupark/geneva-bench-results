import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.module.js';
import { getGenevaElevation } from './terrain_and_water.js';

// Helper to create a pitched / mansard roof building
export function createGenevaBuilding(w, h, d, facadeTex, roofTex, roofStyle = 'pitched', trimColor = 0xd6cbb9) {
  const bGroup = new THREE.Group();

  const fTex = facadeTex.clone();
  fTex.needsUpdate = true;
  fTex.repeat.set(Math.max(1, Math.round(w / 14)), Math.max(1, Math.round(h / 14)));

  const bodyMat = new THREE.MeshStandardMaterial({
    map: fTex,
    roughness: 0.72,
    metalness: 0.08
  });
  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), bodyMat);
  body.position.y = h * 0.5;
  body.castShadow = true;
  body.receiveShadow = true;
  bGroup.add(body);

  // Cornice ledge
  const cornice = new THREE.Mesh(
    new THREE.BoxGeometry(w + 0.8, 0.7, d + 0.8),
    new THREE.MeshStandardMaterial({ color: trimColor, roughness: 0.65 })
  );
  cornice.position.y = h + 0.2;
  bGroup.add(cornice);

  // Roof
  const roofH = roofStyle === 'mansard' ? Math.min(4.8, Math.max(2.6, h * 0.18)) : Math.min(5.5, Math.max(3.0, Math.min(w, d) * 0.28));
  const roofGeo = new THREE.ConeGeometry(Math.hypot(w, d) * 0.52, roofH, 4);
  roofGeo.rotateY(Math.PI / 4);
  const roofMat = new THREE.MeshStandardMaterial({
    map: roofTex,
    roughness: 0.68,
    metalness: 0.1
  });
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.scale.set(w / Math.hypot(w, d) * 1.38, 1, d / Math.hypot(w, d) * 1.38);
  roof.position.y = h + roofH * 0.5;
  roof.castShadow = true;
  bGroup.add(roof);

  // Chimneys
  const chimMat = new THREE.MeshStandardMaterial({ color: 0xb56345, roughness: 0.85 });
  for (let cx of [-w * 0.28, w * 0.28]) {
    const chim = new THREE.Mesh(new THREE.BoxGeometry(1.1, roofH * 0.85, 1.1), chimMat);
    chim.position.set(cx, h + roofH * 0.55, 0);
    bGroup.add(chim);
  }

  return bGroup;
}

// Helper to create lush park or street trees
export function createTree(scale = 1.0, autumnMix = false, seed = 0) {
  const tGroup = new THREE.Group();
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4d3826, roughness: 0.9 });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.35 * scale, 0.55 * scale, 4.2 * scale, 6), trunkMat);
  trunk.position.y = 2.1 * scale;
  tGroup.add(trunk);

  const palette = autumnMix
    ? [0x3b6e38, 0x4e8243, 0x6b8e3d, 0xc98a2c, 0xd86927, 0x46733b]
    : [0x356834, 0x457a3f, 0x528848, 0x2d592c];
  const crownColor = palette[Math.abs(seed) % palette.length];
  const crownMat = new THREE.MeshStandardMaterial({ color: crownColor, roughness: 0.82 });

  const c1 = new THREE.Mesh(new THREE.SphereGeometry(3.2 * scale, 9, 8), crownMat);
  c1.position.set(0, 5.6 * scale, 0);
  c1.scale.set(1, 1.15, 1);
  c1.castShadow = true;
  tGroup.add(c1);

  const c2 = new THREE.Mesh(new THREE.SphereGeometry(2.3 * scale, 8, 7), crownMat);
  c2.position.set(1.2 * scale, 4.8 * scale, 0.9 * scale);
  tGroup.add(c2);

  const c3 = new THREE.Mesh(new THREE.SphereGeometry(2.2 * scale, 8, 7), crownMat);
  c3.position.set(-1.1 * scale, 5.0 * scale, -0.8 * scale);
  tGroup.add(c3);

  return tGroup;
}

export function buildSouthLandmarks(scene, textures) {
  const group = new THREE.Group();

  const stoneMat = new THREE.MeshStandardMaterial({ color: 0xd9d0be, roughness: 0.68 });
  const darkStoneMat = new THREE.MeshStandardMaterial({ color: 0xa69b86, roughness: 0.78 });
  const marbleMat = new THREE.MeshStandardMaterial({ color: 0xf0ece1, roughness: 0.45 });
  const copperMat = new THREE.MeshStandardMaterial({ color: 0x458b77, roughness: 0.42, metalness: 0.35 });
  const slateMat = new THREE.MeshStandardMaterial({ map: textures.slateRoof, roughness: 0.65 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xe6be4a, roughness: 0.25, metalness: 0.85 });
  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x3b594f, roughness: 0.38, metalness: 0.65 });

  // ============================================================================
  // 1. OLD TOWN (VIEILLE VILLE) & CATHÉDRALE SAINT-PIERRE (x = 45, z = 310)
  // ============================================================================
  const cathedralGroup = new THREE.Group();
  const catBaseY = getGenevaElevation(45, 310);
  cathedralGroup.position.set(45, catBaseY - 0.5, 310);
  // Orient West Portico slightly toward WNW (Place de Neuve / Rhône)
  cathedralGroup.rotation.y = 0.18;

  // Stone podium steps
  const catPodium = new THREE.Mesh(new THREE.BoxGeometry(66, 3.0, 38), darkStoneMat);
  catPodium.position.y = 1.2;
  cathedralGroup.add(catPodium);

  // Main Gothic Nave (West-East axis along X)
  const nave = new THREE.Mesh(new THREE.BoxGeometry(52, 22, 18), stoneMat);
  nave.position.set(2, 12, 0);
  nave.castShadow = true;
  nave.receiveShadow = true;
  cathedralGroup.add(nave);

  // Nave Pitched Slate/Copper Roof
  const naveRoofGeo = new THREE.ConeGeometry(14, 9.5, 4);
  naveRoofGeo.rotateY(Math.PI / 4);
  const naveRoof = new THREE.Mesh(naveRoofGeo, slateMat);
  naveRoof.scale.set(2.65, 1, 0.95);
  naveRoof.position.set(2, 27.5, 0);
  cathedralGroup.add(naveRoof);

  // Side Aisles & Flying Buttresses
  const aisles = new THREE.Mesh(new THREE.BoxGeometry(46, 13, 28), stoneMat);
  aisles.position.set(2, 7.5, 0);
  cathedralGroup.add(aisles);

  for (let bx = -16; bx <= 18; bx += 6.8) {
    const buttress = new THREE.Mesh(new THREE.BoxGeometry(1.6, 19, 30.5), darkStoneMat);
    buttress.position.set(bx, 10.5, 0);
    cathedralGroup.add(buttress);
  }

  // Transept (North-South axis along Z)
  const transept = new THREE.Mesh(new THREE.BoxGeometry(16, 22, 38), stoneMat);
  transept.position.set(10, 12, 0);
  cathedralGroup.add(transept);

  const transRoofGeo = new THREE.ConeGeometry(12, 9.0, 4);
  transRoofGeo.rotateY(Math.PI / 4);
  const transRoof = new THREE.Mesh(transRoofGeo, slateMat);
  transRoof.scale.set(0.95, 1, 2.25);
  transRoof.position.set(10, 27.2, 0);
  cathedralGroup.add(transRoof);

  // Twin Square Towers (North Tower & South Tower on the eastern transept corners)
  for (const [tz, towerH, hasPyramidCap] of [[-14.5, 39, false], [14.5, 37, true]]) {
    const tower = new THREE.Mesh(new THREE.BoxGeometry(11.5, towerH, 11.5), stoneMat);
    tower.position.set(16, towerH * 0.5, tz);
    tower.castShadow = true;
    cathedralGroup.add(tower);

    // Belfry gothic arched openings
    const belfryMat = new THREE.MeshStandardMaterial({ color: 0x2a2723, roughness: 0.9 });
    const belfry1 = new THREE.Mesh(new THREE.BoxGeometry(11.8, 6.5, 4.8), belfryMat);
    belfry1.position.set(16, towerH - 6.5, tz);
    cathedralGroup.add(belfry1);
    const belfry2 = new THREE.Mesh(new THREE.BoxGeometry(4.8, 6.5, 11.8), belfryMat);
    belfry2.position.set(16, towerH - 6.5, tz);
    cathedralGroup.add(belfry2);

    // Stone balustrade / crenellation at top of tower
    const topBal = new THREE.Mesh(new THREE.BoxGeometry(12.6, 2.2, 12.6), darkStoneMat);
    topBal.position.set(16, towerH + 0.8, tz);
    cathedralGroup.add(topBal);

    // Clock faces on tower
    const clock = new THREE.Mesh(
      new THREE.CircleGeometry(2.4, 20),
      new THREE.MeshBasicMaterial({ map: textures.clockFace })
    );
    clock.position.set(16, towerH - 12.5, tz + (tz > 0 ? 5.85 : -5.85));
    if (tz < 0) clock.rotation.y = Math.PI;
    cathedralGroup.add(clock);

    if (hasPyramidCap) {
      const cap = new THREE.Mesh(new THREE.ConeGeometry(8.2, 8.5, 4), copperMat);
      cap.rotation.y = Math.PI / 4;
      cap.position.set(16, towerH + 5.8, tz);
      cathedralGroup.add(cap);
    }
  }

  // Iconic Green-Copper Needle Spire (Flèche de Saint-Pierre) rising at the crossing!
  const spireBase = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.8, 12, 8), copperMat);
  spireBase.position.set(10, 32, 0);
  cathedralGroup.add(spireBase);

  const spireCone = new THREE.Mesh(new THREE.ConeGeometry(3.1, 34, 8), copperMat);
  spireCone.position.set(10, 54, 0);
  spireCone.castShadow = true;
  cathedralGroup.add(spireCone);

  const spireCross = new THREE.Mesh(new THREE.SphereGeometry(0.9, 10, 10), goldMat);
  spireCross.position.set(10, 71.5, 0);
  cathedralGroup.add(spireCross);

  // Neoclassical 18th-Century West Portico (6 Corinthian Columns + Triangular Pediment)
  const porticoBase = new THREE.Mesh(new THREE.BoxGeometry(9, 2.5, 22), marbleMat);
  porticoBase.position.set(-26, 2.2, 0);
  cathedralGroup.add(porticoBase);

  for (let cz = -9; cz <= 9; cz += 3.6) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.98, 15.5, 14), marbleMat);
    col.position.set(-29.2, 11.0, cz);
    col.castShadow = true;
    cathedralGroup.add(col);
  }

  const pedimentBox = new THREE.Mesh(new THREE.BoxGeometry(7.5, 2.4, 22.4), marbleMat);
  pedimentBox.position.set(-27.2, 19.8, 0);
  cathedralGroup.add(pedimentBox);

  const pedimentRoof = new THREE.Mesh(new THREE.ConeGeometry(13.2, 5.2, 4), marbleMat);
  pedimentRoof.rotation.y = Math.PI / 4;
  pedimentRoof.scale.set(0.55, 1, 1.22);
  pedimentRoof.position.set(-27.2, 23.4, 0);
  cathedralGroup.add(pedimentRoof);

  // Maccabees Chapel on SW corner of Cathedral
  const chapel = createGenevaBuilding(14, 16, 11, textures.oldTownStone, textures.terracottaRoof, 'pitched');
  chapel.position.set(-18, 1.0, 15);
  cathedralGroup.add(chapel);

  group.add(cathedralGroup);

  // Place du Bourg-de-Four (x = 98, z = 332) with Fountain & Bistro Parasols
  const bdfY = getGenevaElevation(98, 332);
  const bdfFountain = new THREE.Group();
  bdfFountain.position.set(98, bdfY, 332);
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.8, 1.4, 8), marbleMat);
  basin.position.y = 0.7;
  bdfFountain.add(basin);
  const waterDisk = new THREE.Mesh(
    new THREE.CylinderGeometry(4.1, 4.1, 0.2, 8),
    new THREE.MeshStandardMaterial({ color: 0x2685a8, roughness: 0.2 })
  );
  waterDisk.position.y = 1.35;
  bdfFountain.add(waterDisk);
  const obelisk = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.85, 6.2, 8), marbleMat);
  obelisk.position.y = 3.8;
  bdfFountain.add(obelisk);
  group.add(bdfFountain);

  // Café parasols on Place du Bourg-de-Four
  const parasolMatRed = new THREE.MeshStandardMaterial({ color: 0xb8372a, roughness: 0.7 });
  const parasolMatCream = new THREE.MeshStandardMaterial({ color: 0xf5efe0, roughness: 0.7 });
  for (let i = 0; i < 10; i++) {
    const px = 86 + (i % 5) * 6.5;
    const pz = 320 + Math.floor(i / 5) * 22;
    const py = getGenevaElevation(px, pz);
    const umbrella = new THREE.Mesh(
      new THREE.ConeGeometry(2.4, 1.1, 8),
      i % 2 === 0 ? parasolMatRed : parasolMatCream
    );
    umbrella.position.set(px, py + 2.8, pz);
    group.add(umbrella);
  }

  // Medieval Old Town Stone Ramparts along the southern edge of Vieille Ville (Promenade de la Treille, z = 384)
  const rampartWall = new THREE.Mesh(
    new THREE.BoxGeometry(205, 19, 7),
    darkStoneMat
  );
  rampartWall.position.set(18, 14.5, 385);
  rampartWall.castShadow = true;
  rampartWall.receiveShadow = true;
  group.add(rampartWall);

  // Dense Cluster of Old Town Historic Buildings on the Hill (around Cathedral & Bourg-de-Four)
  const oldTownBlocks = [
    // Hôtel de Ville & Tour Baudet
    [-6, 354, 34, 19, 24, textures.oldTownStone, textures.terracottaRoof, 0.08],
    [-25, 348, 13, 27, 13, textures.oldTownStone, textures.slateRoof, 0.1], // Tour Baudet
    // Maison Tavel & Rue du Puits-Saint-Pierre
    [6, 286, 26, 20, 18, textures.oldTownWarm, textures.terracottaRoof, 0.15],
    [-22, 298, 24, 19, 17, textures.oldTownStone, textures.slateRoof, -0.12],
    [-42, 322, 26, 18, 19, textures.oldTownWarm, textures.terracottaRoof, 0.2],
    // Around Place du Bourg-de-Four
    [88, 296, 28, 21, 18, textures.oldTownStone, textures.terracottaRoof, -0.15],
    [122, 325, 24, 22, 28, textures.oldTownWarm, textures.terracottaRoof, 0.05],
    [104, 362, 32, 20, 19, textures.oldTownStone, textures.slateRoof, -0.08],
    [66, 358, 28, 19, 18, textures.oldTownWarm, textures.terracottaRoof, 0.04],
    [35, 362, 29, 18, 17, textures.oldTownStone, textures.terracottaRoof, 0.0],
    // Grand-Rue & Northern slope down toward Rues Basses
    [-38, 265, 30, 21, 18, textures.oldTownWarm, textures.terracottaRoof, 0.12],
    [-2, 255, 32, 20, 19, textures.oldTownStone, textures.slateRoof, 0.05],
    [36, 260, 34, 21, 19, textures.oldTownWarm, textures.terracottaRoof, -0.06],
    [74, 264, 30, 20, 18, textures.oldTownStone, textures.terracottaRoof, -0.1],
    [112, 278, 28, 20, 20, textures.oldTownWarm, textures.slateRoof, 0.18],
    [-58, 290, 25, 19, 20, textures.haussmannOchre, textures.slateRoof, 0.25],
    [-65, 345, 26, 20, 22, textures.oldTownStone, textures.terracottaRoof, -0.18],
    [136, 356, 26, 19, 22, textures.oldTownWarm, textures.terracottaRoof, 0.14]
  ];

  for (const [bx, bz, bw, bh, bd, fTex, rTex, rotY] of oldTownBlocks) {
    const by = getGenevaElevation(bx, bz) - 1.2;
    const bldg = createGenevaBuilding(bw, bh, bd, fTex, rTex, 'pitched');
    bldg.position.set(bx, by, bz);
    bldg.rotation.y = rotY;
    group.add(bldg);
  }

  // ============================================================================
  // 2. PARC DES BASTIONS & MUR DES RÉFORMATEURS (x = -45, z = 435)
  // ============================================================================
  const bastionsBaseY = getGenevaElevation(-35, 435);

  // Mur des Réformateurs (Reformation Wall) built against the Old Town ramparts at (x = -25, z = 392)
  const wallGroup = new THREE.Group();
  wallGroup.position.set(-25, bastionsBaseY, 392);

  // Monumental 96m limestone wall
  const refWallMesh = new THREE.Mesh(
    new THREE.BoxGeometry(96, 11.5, 3.2),
    new THREE.MeshStandardMaterial({ map: textures.reformationWall, roughness: 0.55 })
  );
  refWallMesh.position.set(0, 5.75, 0);
  refWallMesh.castShadow = true;
  wallGroup.add(refWallMesh);

  // Central protruding stone projection behind the 4 Reformers
  const centerProj = new THREE.Mesh(new THREE.BoxGeometry(24, 12.6, 4.4), marbleMat);
  centerProj.position.set(0, 6.3, 0.5);
  wallGroup.add(centerProj);

  // Reflecting water moat in front of the wall
  const moatBorder = new THREE.Mesh(new THREE.BoxGeometry(98, 0.8, 9.5), marbleMat);
  moatBorder.position.set(0, 0.4, 5.5);
  wallGroup.add(moatBorder);

  const moatWater = new THREE.Mesh(
    new THREE.BoxGeometry(94, 0.9, 7.2),
    new THREE.MeshStandardMaterial({ color: 0x1d7ea1, roughness: 0.15, metalness: 0.7 })
  );
  moatWater.position.set(0, 0.48, 5.5);
  wallGroup.add(moatWater);

  // The 4 Monumental Central Statues: Guillaume Farel, Jean Calvin, Théodore de Bèze, John Knox
  const statueXPositions = [-7.2, -2.4, 2.4, 7.2];
  for (const sx of statueXPositions) {
    const sGroup = new THREE.Group();
    sGroup.position.set(sx, 1.2, 2.8);

    // Tall Inscribed Pedestal ("FAREL / CALVIN / BEZE / KNOX")
    const ped = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.6, 2.2), marbleMat);
    ped.position.y = 1.3;
    sGroup.add(ped);

    // Geneva Robe Torso (tall austere sculpted vertical folds)
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.22, 6.2, 8), marbleMat);
    robe.position.y = 5.6;
    robe.scale.set(1.1, 1, 0.85);
    robe.castShadow = true;
    sGroup.add(robe);

    // Shoulders & Cloak
    const shoulders = new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.6, 1.4), marbleMat);
    shoulders.position.y = 8.0;
    sGroup.add(shoulders);

    // Bible held in front
    const bible = new THREE.Mesh(new THREE.BoxGeometry(0.85, 1.0, 0.45), darkStoneMat);
    bible.position.set(0.2, 6.6, 0.95);
    sGroup.add(bible);

    // Head, Beard & Scholar's Cap
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.68, 12, 10), marbleMat);
    head.position.y = 9.45;
    sGroup.add(head);

    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.52, 1.2, 6), marbleMat);
    beard.rotation.x = Math.PI;
    beard.position.set(0, 8.85, 0.35);
    sGroup.add(beard);

    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.7, 0.38, 8), darkStoneMat);
    cap.position.y = 10.0;
    sGroup.add(cap);

    wallGroup.add(sGroup);
  }

  // Flanking smaller statues along the left and right wings of the wall
  for (const fx of [-36, -22, 22, 36]) {
    const fPed = new THREE.Mesh(new THREE.BoxGeometry(2.0, 2.0, 1.8), marbleMat);
    fPed.position.set(fx, 1.8, 2.2);
    wallGroup.add(fPed);
    const fStat = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.85, 4.2, 8), marbleMat);
    fStat.position.set(fx, 4.9, 2.2);
    wallGroup.add(fStat);
    const fHead = new THREE.Mesh(new THREE.SphereGeometry(0.48, 10, 10), marbleMat);
    fHead.position.set(fx, 7.4, 2.2);
    wallGroup.add(fHead);
  }

  group.add(wallGroup);

  // Uni Bastions (University of Geneva Historic Complex facing the Reformation Wall across the park)
  const uniGroup = new THREE.Group();
  uniGroup.position.set(-30, bastionsBaseY, 488);

  // Central Academic Pavilion with Pediment & Dome
  const uniCenter = createGenevaBuilding(34, 21, 22, textures.haussmannCream, textures.slateRoof, 'mansard');
  uniGroup.add(uniCenter);

  const uniDome = new THREE.Mesh(new THREE.SphereGeometry(6.8, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), slateMat);
  uniDome.position.set(0, 23.5, 0);
  uniGroup.add(uniDome);

  // Left and Right Symmetrical University Wings
  for (const wx of [-44, 44]) {
    const wing = createGenevaBuilding(56, 17.5, 18, textures.haussmannCream, textures.slateRoof, 'mansard');
    wing.position.set(wx, 0, -2);
    uniGroup.add(wing);
  }
  group.add(uniGroup);

  // Palais Eynard (Neoclassical columned villa on the eastern side of Parc des Bastions)
  const eynard = createGenevaBuilding(26, 14, 18, textures.palaisTravertine, textures.slateRoof, 'mansard');
  eynard.position.set(48, getGenevaElevation(48, 425), 425);
  group.add(eynard);

  // Parc des Bastions Central Promenade Walkways
  const gravelMat = new THREE.MeshStandardMaterial({ color: 0xd8cfc0, roughness: 0.9 });
  const mainProm = new THREE.Mesh(new THREE.BoxGeometry(195, 0.25, 14), gravelMat);
  mainProm.position.set(-40, bastionsBaseY + 0.15, 434);
  group.add(mainProm);

  const crossProm = new THREE.Mesh(new THREE.BoxGeometry(14, 0.25, 86), gravelMat);
  crossProm.position.set(-25, bastionsBaseY + 0.16, 440);
  group.add(crossProm);

  // Iconic Giant Outdoor Chessboards at the West Entrance of Parc des Bastions (x = -124, z = 420..448)
  const whiteTileMat = new THREE.MeshStandardMaterial({ color: 0xf4f1ea, roughness: 0.5 });
  const blackTileMat = new THREE.MeshStandardMaterial({ color: 0x26292e, roughness: 0.5 });
  for (const [cbx, cbz] of [[-122, 418], [-108, 418], [-122, 448], [-108, 448]]) {
    const boardGroup = new THREE.Group();
    boardGroup.position.set(cbx, bastionsBaseY + 0.22, cbz);

    const border = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.15, 9.6), darkStoneMat);
    boardGroup.add(border);

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const tile = new THREE.Mesh(
          new THREE.BoxGeometry(1.05, 0.2, 1.05),
          (r + c) % 2 === 0 ? whiteTileMat : blackTileMat
        );
        tile.position.set((r - 3.5) * 1.05, 0.05, (c - 3.5) * 1.05);
        boardGroup.add(tile);
      }
    }

    // Giant Chess Pieces on the board
    for (let p = 0; p < 10; p++) {
      const pr = ((p * 3) % 8) - 3.5;
      const pc = ((p * 5 + 1) % 8) - 3.5;
      const pieceMat = p % 2 === 0 ? whiteTileMat : blackTileMat;
      const piece = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 1.35, 10), pieceMat);
      piece.position.set(pr * 1.05, 0.78, pc * 1.05);
      boardGroup.add(piece);
      const pieceHead = new THREE.Mesh(new THREE.SphereGeometry(0.32, 8, 8), pieceMat);
      pieceHead.position.set(pr * 1.05, 1.55, pc * 1.05);
      boardGroup.add(pieceHead);
    }

    group.add(boardGroup);
  }

  // Chestnut Tree Alleys in Parc des Bastions (Lush green & golden autumn accents)
  for (let tx = -112; tx <= 35; tx += 13) {
    for (const tz of [414, 424, 444, 456, 468]) {
      if (Math.abs(tx + 25) < 36 && tz < 448) continue; // Keep clear sightline in front of the Reformation Wall & moat
      const tree = createTree(1.15 + ((tx * 7 + tz) % 3) * 0.12, true, tx + tz);
      tree.position.set(tx, getGenevaElevation(tx, tz), tz);
      group.add(tree);
    }
  }

  // ============================================================================
  // 3. PLACE DE NEUVE (x = -185, z = 420)
  // ============================================================================
  const neuveBaseY = getGenevaElevation(-185, 420);

  // Monumental Wrought-Iron & Stone Gate between Place de Neuve and Parc des Bastions (x = -140, z = 434)
  const gateGroup = new THREE.Group();
  gateGroup.position.set(-140, neuveBaseY, 434);
  const ironMat = new THREE.MeshStandardMaterial({ color: 0x1e2226, metalness: 0.7, roughness: 0.35 });
  for (const gz of [-28, -10, 10, 28]) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(2.8, 7.5, 2.8), marbleMat);
    pillar.position.set(0, 3.75, gz);
    gateGroup.add(pillar);
    const finial = new THREE.Mesh(new THREE.SphereGeometry(0.95, 10, 10), goldMat);
    finial.position.set(0, 8.1, gz);
    gateGroup.add(finial);
  }
  const fence = new THREE.Mesh(new THREE.BoxGeometry(0.5, 4.8, 64), ironMat);
  fence.position.set(0, 2.4, 0);
  gateGroup.add(fence);
  group.add(gateGroup);

  // 3A. GRAND THÉÂTRE DE GENÈVE (Opera House at x = -238, z = 412, facing Place de Neuve)
  const operaGroup = new THREE.Group();
  operaGroup.position.set(-238, neuveBaseY, 412);
  operaGroup.rotation.y = -0.12;

  // Rusticated Ground Podium & Steps
  const operaPodium = new THREE.Mesh(new THREE.BoxGeometry(44, 2.6, 56), marbleMat);
  operaPodium.position.y = 1.3;
  operaGroup.add(operaPodium);

  // Main Auditorium & Facade Block
  const operaMain = createGenevaBuilding(38, 22, 48, textures.haussmannCream, textures.slateRoof, 'mansard');
  operaMain.position.y = 2.2;
  operaGroup.add(operaMain);

  // Grand Corinthian Loggia Colonnade on East Facade facing Place de Neuve
  for (let cz = -18; cz <= 18; cz += 4.5) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 13, 12), marbleMat);
    col.position.set(19.8, 13.5, cz);
    col.castShadow = true;
    operaGroup.add(col);
  }

  // Attic balustrade with golden statues/lyres
  const operaAttic = new THREE.Mesh(new THREE.BoxGeometry(4.5, 3.2, 44), marbleMat);
  operaAttic.position.set(18.5, 22.2, 0);
  operaGroup.add(operaAttic);

  for (let sz = -18; sz <= 18; sz += 9) {
    const stat = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 2.8, 8), goldMat);
    stat.position.set(20.2, 25.0, sz);
    operaGroup.add(stat);
  }

  // Copper Auditorium Dome & High Stage Flytower
  const operaDome = new THREE.Mesh(
    new THREE.SphereGeometry(12.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2),
    copperMat
  );
  operaDome.scale.set(1.0, 0.85, 1.15);
  operaDome.position.set(2, 24.5, 0);
  operaGroup.add(operaDome);

  const flyTower = new THREE.Mesh(new THREE.BoxGeometry(20, 31, 34), stoneMat);
  flyTower.position.set(-11, 16.5, 0);
  flyTower.castShadow = true;
  operaGroup.add(flyTower);

  const flyRoof = new THREE.Mesh(new THREE.ConeGeometry(18, 6.5, 4), copperMat);
  flyRoof.rotation.y = Math.PI / 4;
  flyRoof.scale.set(0.85, 1, 1.38);
  flyRoof.position.set(-11, 35.2, 0);
  operaGroup.add(flyRoof);

  group.add(operaGroup);

  // 3B. MUSÉE RATH (Classical Greek Temple Museum at x = -172, z = 368 on North side of Place de Neuve)
  const rathGroup = new THREE.Group();
  rathGroup.position.set(-172, neuveBaseY, 368);

  const rathPodium = new THREE.Mesh(new THREE.BoxGeometry(30, 3.5, 42), darkStoneMat);
  rathPodium.position.y = 1.75;
  rathGroup.add(rathPodium);

  const rathBody = new THREE.Mesh(new THREE.BoxGeometry(24, 14, 34), stoneMat);
  rathBody.position.set(0, 10.5, -2);
  rathBody.castShadow = true;
  rathGroup.add(rathBody);

  // Hexastyle Corinthian Portico facing South into Place de Neuve
  for (let cx = -10; cx <= 10; cx += 4) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.88, 12.5, 12), marbleMat);
    col.position.set(cx, 9.75, 16.8);
    col.castShadow = true;
    rathGroup.add(col);
  }

  const rathPediment = new THREE.Mesh(new THREE.ConeGeometry(16, 5.5, 4), marbleMat);
  rathPediment.rotation.y = Math.PI / 4;
  rathPediment.scale.set(1.12, 1, 2.45);
  rathPediment.position.set(0, 19.8, 0);
  rathGroup.add(rathPediment);

  group.add(rathGroup);

  // 3C. CONSERVATOIRE DE MUSIQUE DE GENÈVE (Ornate Beaux-Arts building at x = -212, z = 472)
  const consGroup = new THREE.Group();
  consGroup.position.set(-212, neuveBaseY, 472);
  consGroup.rotation.y = 0.15;

  const consBody = createGenevaBuilding(36, 19, 26, textures.haussmannOchre, textures.slateRoof, 'mansard');
  consGroup.add(consBody);

  // Signature twin rounded corner towers with slate domes
  for (const cx of [-18, 18]) {
    const tower = new THREE.Mesh(
      new THREE.CylinderGeometry(5.5, 5.5, 21, 16),
      new THREE.MeshStandardMaterial({ color: 0xc97c63, roughness: 0.7 })
    );
    tower.position.set(cx, 10.5, -12);
    tower.castShadow = true;
    consGroup.add(tower);

    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(5.8, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      slateMat
    );
    dome.position.set(cx, 21, -12);
    consGroup.add(dome);
  }
  group.add(consGroup);

  // 3D. EQUESTRIAN MONUMENT OF GENERAL GUILLAUME-HENRI DUFOUR (Center of Place de Neuve: x = -185, z = 422)
  const dufourGroup = new THREE.Group();
  dufourGroup.position.set(-185, neuveBaseY, 422);

  // Elliptical garden island & stone curb
  const islandCurb = new THREE.Mesh(new THREE.CylinderGeometry(14, 14.5, 0.5, 24), marbleMat);
  islandCurb.scale.set(1.0, 1, 1.35);
  islandCurb.position.y = 0.25;
  dufourGroup.add(islandCurb);

  const islandLawn = new THREE.Mesh(
    new THREE.CylinderGeometry(12.5, 12.5, 0.6, 24),
    new THREE.MeshStandardMaterial({ color: 0x457d3f, roughness: 0.85 })
  );
  islandLawn.scale.set(1.0, 1, 1.35);
  islandLawn.position.y = 0.3;
  dufourGroup.add(islandLawn);

  // Stepped Granite Pedestal
  const pedStep1 = new THREE.Mesh(new THREE.BoxGeometry(6.8, 1.4, 9.2), darkStoneMat);
  pedStep1.position.y = 1.0;
  dufourGroup.add(pedStep1);

  const pedCore = new THREE.Mesh(new THREE.BoxGeometry(3.8, 5.6, 6.2), marbleMat);
  pedCore.position.y = 4.5;
  pedCore.castShadow = true;
  dufourGroup.add(pedCore);

  // Bronze Horse & Rider (General Dufour pointing forward)
  const horseBody = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.0, 3.6, 10), bronzeMat);
  horseBody.rotation.x = Math.PI / 2;
  horseBody.position.set(0, 8.6, 0);
  dufourGroup.add(horseBody);

  for (const [lx, lz] of [[-0.65, -1.3], [0.65, -1.3], [-0.65, 1.3], [0.65, 1.3]]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 1.8, 6), bronzeMat);
    leg.position.set(lx, 7.6, lz);
    dufourGroup.add(leg);
  }

  const horseNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.7, 1.8, 8), bronzeMat);
  horseNeck.position.set(0, 9.7, -1.5);
  horseNeck.rotation.x = 0.45;
  dufourGroup.add(horseNeck);

  const riderTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 1.9, 8), bronzeMat);
  riderTorso.position.set(0, 10.1, 0.1);
  dufourGroup.add(riderTorso);

  const riderHead = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 10), bronzeMat);
  riderHead.position.set(0, 11.3, 0.1);
  dufourGroup.add(riderHead);

  const riderArm = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.5, 6), bronzeMat);
  riderArm.rotation.x = Math.PI / 2.4;
  riderArm.position.set(0.55, 10.5, -0.7);
  dufourGroup.add(riderArm);

  group.add(dufourGroup);

  scene.add(group);
  return group;
}
