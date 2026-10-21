/**
 * LEGO® Brick Geometry, Material & Stop-Motion Physics Engine
 * Built for "LEGO® GENEVA: BRICK BY BRICK" Motion Graphic
 */
(function (global) {
  'use strict';

  const U = 0.8;       // 1 LEGO unit width/depth (8mm scale)
  const P = 0.32;      // 1 LEGO plate height (3.2mm scale; 3 plates = 1 brick = 0.96)
  const GAP = 0.028;   // Micro-seam between adjacent LEGO bricks for specular edge catch

  // Official LEGO Color Palette (LDraw / BrickLink standard pigments)
  const PALETTE = {
    white:            { hex: 0xF6F6F6, rough: 0.22, metal: 0.02 },
    cream:            { hex: 0xEFEAD8, rough: 0.24, metal: 0.02 },
    tan:              { hex: 0xE4CD9E, rough: 0.25, metal: 0.02 }, // Geneva sandstone
    darkTan:          { hex: 0x958A73, rough: 0.26, metal: 0.03 },
    lightBluishGray:  { hex: 0xA3A8AC, rough: 0.24, metal: 0.04 },
    mediumStoneGray:  { hex: 0x8A9094, rough: 0.25, metal: 0.04 },
    darkBluishGray:   { hex: 0x5C6064, rough: 0.26, metal: 0.05 },
    black:            { hex: 0x1B2228, rough: 0.20, metal: 0.05 },

    brightRed:        { hex: 0xD11919, rough: 0.18, metal: 0.03 }, // Swiss / SBB red
    darkRed:          { hex: 0x7A1315, rough: 0.22, metal: 0.03 },
    terracotta:       { hex: 0xC45238, rough: 0.25, metal: 0.02 }, // Old Town roof tiles
    nougat:           { hex: 0xD07A42, rough: 0.24, metal: 0.02 },
    reddishBrown:     { hex: 0x632F16, rough: 0.25, metal: 0.03 }, // Broken Chair wood
    darkBrown:        { hex: 0x3B1D0E, rough: 0.28, metal: 0.02 },

    brightOrange:     { hex: 0xFC8A17, rough: 0.20, metal: 0.02 },
    autumnGold:       { hex: 0xF5A623, rough: 0.22, metal: 0.03 },
    brightYellow:     { hex: 0xF5CD2F, rough: 0.20, metal: 0.02 }, // Minifigs & Mouettes
    coolYellow:       { hex: 0xFFF07C, rough: 0.22, metal: 0.02 },

    sandGreen:        { hex: 0x78B09A, rough: 0.22, metal: 0.04 }, // St. Pierre Spire & patina
    brightGreen:      { hex: 0x237841, rough: 0.22, metal: 0.02 },
    darkGreen:        { hex: 0x184632, rough: 0.24, metal: 0.02 },
    oliveGreen:       { hex: 0x8B9446, rough: 0.24, metal: 0.02 },
    lime:             { hex: 0xA6CA1E, rough: 0.22, metal: 0.02 },

    brightBlue:       { hex: 0x0055BF, rough: 0.20, metal: 0.03 }, // TPG Blue
    mediumAzure:      { hex: 0x36AEBF, rough: 0.20, metal: 0.03 }, // UN Blue
    skyBlue:          { hex: 0x56B4E9, rough: 0.20, metal: 0.02 },
    darkBlue:         { hex: 0x0A3463, rough: 0.22, metal: 0.04 },

    pearlGold:        { hex: 0xE5B83B, rough: 0.16, metal: 0.55 }, // Statues & Reformation motto
    silverMetallic:   { hex: 0xC0C6CC, rough: 0.18, metal: 0.65 },
    bronzePatina:     { hex: 0x4E8E76, rough: 0.25, metal: 0.35 },

    // Translucent & Emissive LEGO polycarbonate elements
    transDarkBlue:    { hex: 0x093B7A, rough: 0.08, metal: 0.05, transparent: true, opacity: 0.88 },
    transMediumBlue:  { hex: 0x1E82B8, rough: 0.08, metal: 0.05, transparent: true, opacity: 0.82 },
    transLightBlue:   { hex: 0x8CE8FF, rough: 0.06, metal: 0.02, transparent: true, opacity: 0.78 },
    transFoam:        { hex: 0xE6FBFF, rough: 0.10, metal: 0.02, transparent: true, opacity: 0.85 },
    transClear:       { hex: 0xD8EEF8, rough: 0.06, metal: 0.05, transparent: true, opacity: 0.62 },
    transYellowGlow:  { hex: 0xFFE066, rough: 0.12, metal: 0.0,  emissive: 0xFFAE19, emissiveIntensity: 0.55 },
    transOrangeGlow:  { hex: 0xFF9933, rough: 0.12, metal: 0.0,  emissive: 0xFF6600, emissiveIntensity: 0.65 },
    transCyanGlow:    { hex: 0x66F0FF, rough: 0.10, metal: 0.0,  emissive: 0x00D4FF, emissiveIntensity: 0.50 },
    transRedGlow:     { hex: 0xFF3333, rough: 0.12, metal: 0.0,  emissive: 0xFF1111, emissiveIntensity: 0.60 }
  };

  const materialCache = new Map();
  const geometryCache = new Map();
  const glowingMaterials = [];

  function getMaterial(colorKey) {
    if (materialCache.has(colorKey)) {
      return materialCache.get(colorKey);
    }
    const spec = PALETTE[colorKey] || PALETTE.white;
    const matConfig = {
      color: spec.hex,
      roughness: spec.rough !== undefined ? spec.rough : 0.22,
      metalness: spec.metal !== undefined ? spec.metal : 0.03
    };
    if (spec.transparent) {
      matConfig.transparent = true;
      matConfig.opacity = spec.opacity;
    }
    if (spec.emissive !== undefined) {
      matConfig.emissive = new THREE.Color(spec.emissive);
      matConfig.emissiveIntensity = spec.emissiveIntensity || 0.5;
    }
    const mat = new THREE.MeshStandardMaterial(matConfig);
    if (spec.emissive !== undefined) {
      mat.userData.baseEmissiveIntensity = spec.emissiveIntensity || 0.5;
      glowingMaterials.push(mat);
    }
    materialCache.set(colorKey, mat);
    return mat;
  }

  /**
   * Merge an array of BufferGeometries into a single BufferGeometry for fast rendering
   */
  function mergeBufferGeometries(geometries) {
    let totalVerts = 0;
    let totalIndices = 0;
    for (let i = 0; i < geometries.length; i++) {
      const g = geometries[i];
      totalVerts += g.attributes.position.count;
      if (g.index) {
        totalIndices += g.index.count;
      } else {
        totalIndices += g.attributes.position.count;
      }
    }

    const positions = new Float32Array(totalVerts * 3);
    const normals = new Float32Array(totalVerts * 3);
    const indices = new Uint32Array(totalIndices);

    let vertOffset = 0;
    let idxOffset = 0;

    for (let i = 0; i < geometries.length; i++) {
      const g = geometries[i];
      const posAttr = g.attributes.position;
      const normAttr = g.attributes.normal;
      const count = posAttr.count;

      positions.set(posAttr.array, vertOffset * 3);
      if (normAttr) {
        normals.set(normAttr.array, vertOffset * 3);
      }

      if (g.index) {
        const idxArr = g.index.array;
        for (let j = 0; j < idxArr.length; j++) {
          indices[idxOffset + j] = idxArr[j] + vertOffset;
        }
        idxOffset += idxArr.length;
      } else {
        for (let j = 0; j < count; j++) {
          indices[idxOffset + j] = vertOffset + j;
        }
        idxOffset += count;
      }

      vertOffset += count;
    }

    const merged = new THREE.BufferGeometry();
    merged.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    merged.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    merged.setIndex(new THREE.BufferAttribute(indices, 1));
    return merged;
  }

  // Shared single stud geometry (origin at bottom center of stud)
  let sharedStudGeo = null;
  function getStudGeometry() {
    if (sharedStudGeo) return sharedStudGeo;
    const studRadius = U * 0.30;
    const studHeight = U * 0.18;
    const cyl = new THREE.CylinderGeometry(studRadius * 0.96, studRadius, studHeight, 12, 1);
    cyl.translate(0, studHeight * 0.5, 0);
    sharedStudGeo = cyl;
    return sharedStudGeo;
  }

  /**
   * Standard rectangular LEGO brick/plate/tile geometry
   * Origin is at bottom-center (y = 0 to y = hPlates * P)
   */
  function getBrickGeometry(w, d, hPlates, isTile, studStride) {
    const stride = studStride || 1;
    const key = `brick_${w}_${d}_${hPlates}_${isTile ? 1 : 0}_${stride}`;
    if (geometryCache.has(key)) return geometryCache.get(key);

    const bw = Math.max(0.1, w * U - GAP);
    const bd = Math.max(0.1, d * U - GAP);
    const bh = Math.max(0.08, hPlates * P - GAP * 0.45);

    const parts = [];
    const body = new THREE.BoxGeometry(bw, bh, bd);
    body.translate(0, bh * 0.5, 0);
    parts.push(body);

    if (!isTile) {
      const studBase = getStudGeometry();
      const startX = -((w - 1) * U) * 0.5;
      const startZ = -((d - 1) * U) * 0.5;
      // For very large baseplates, allow stride so we still see rich studs without excess tris
      for (let ix = 0; ix < w; ix += stride) {
        for (let iz = 0; iz < d; iz += stride) {
          const s = studBase.clone();
          s.translate(startX + ix * U, bh, startZ + iz * U);
          parts.push(s);
        }
      }
    }

    const merged = mergeBufferGeometries(parts);
    geometryCache.set(key, merged);
    return merged;
  }

  /**
   * Cylindrical LEGO round brick/plate/column geometry
   * Origin at bottom-center
   */
  function getRoundBrickGeometry(diamUnits, hPlates, isTile, segments) {
    const segs = segments || 16;
    const key = `round_${diamUnits}_${hPlates}_${isTile ? 1 : 0}_${segs}`;
    if (geometryCache.has(key)) return geometryCache.get(key);

    const radius = (diamUnits * U - GAP) * 0.5;
    const bh = Math.max(0.08, hPlates * P - GAP * 0.45);
    const parts = [];

    const cyl = new THREE.CylinderGeometry(radius, radius, bh, segs);
    cyl.translate(0, bh * 0.5, 0);
    parts.push(cyl);

    if (!isTile) {
      const studBase = getStudGeometry();
      const s = studBase.clone();
      s.translate(0, bh, 0);
      parts.push(s);
    }

    const merged = mergeBufferGeometries(parts);
    geometryCache.set(key, merged);
    return merged;
  }

  /**
   * Cone / Spire LEGO geometry (e.g., Cathedral spire, tree tips, fountain nozzle)
   */
  function getConeBrickGeometry(bottomDiamUnits, topDiamUnits, hPlates, hasTopStud) {
    const key = `cone_${bottomDiamUnits}_${topDiamUnits}_${hPlates}_${hasTopStud ? 1 : 0}`;
    if (geometryCache.has(key)) return geometryCache.get(key);

    const rBottom = Math.max(0.04, (bottomDiamUnits * U - GAP) * 0.5);
    const rTop = Math.max(0.02, (topDiamUnits * U - GAP) * 0.5);
    const bh = Math.max(0.08, hPlates * P - GAP * 0.45);

    const parts = [];
    const cone = new THREE.CylinderGeometry(rTop, rBottom, bh, 16);
    cone.translate(0, bh * 0.5, 0);
    parts.push(cone);

    if (hasTopStud && topDiamUnits >= 0.7) {
      const s = getStudGeometry().clone();
      s.translate(0, bh, 0);
      parts.push(s);
    }

    const merged = mergeBufferGeometries(parts);
    geometryCache.set(key, merged);
    return merged;
  }

  /**
   * LEGO Slope Brick Geometry (for roofs, train noses, Broken Chair, pedestals)
   * slopes down along +Z by default (dir = 0, 1, 2, 3 rotates by 90 deg)
   */
  function getSlopeGeometry(w, d, hPlates, dir) {
    const rotDir = dir || 0;
    const key = `slope_${w}_${d}_${hPlates}_${rotDir}`;
    if (geometryCache.has(key)) return geometryCache.get(key);

    const bw = Math.max(0.1, w * U - GAP);
    const bd = Math.max(0.1, d * U - GAP);
    const bh = Math.max(0.08, hPlates * P - GAP * 0.45);
    const ridgeDepth = Math.min(bd * 0.35, U - GAP * 0.5);
    const lipHeight = Math.min(bh * 0.25, P * 0.75);

    // 2D profile in YZ plane extruded along X
    const shape = new THREE.Shape();
    const halfD = bd * 0.5;
    shape.moveTo(-halfD, 0);
    shape.lineTo(halfD, 0);
    shape.lineTo(halfD, lipHeight);
    shape.lineTo(-halfD + ridgeDepth, bh);
    shape.lineTo(-halfD, bh);
    shape.closePath();

    const extrude = new THREE.ExtrudeGeometry(shape, {
      depth: bw,
      bevelEnabled: false,
      steps: 1
    });
    // Extrude is along +Z in shape space; rotate so shape X->Z, Y->Y, extrude Z->X
    extrude.rotateY(Math.PI * 0.5);
    extrude.translate(-bw * 0.5, 0, 0);

    const parts = [extrude];
    // Add top row of studs along the flat ridge
    const studBase = getStudGeometry();
    const startX = -((w - 1) * U) * 0.5;
    const ridgeZ = -halfD + ridgeDepth * 0.5;
    for (let ix = 0; ix < w; ix++) {
      const s = studBase.clone();
      s.translate(startX + ix * U, bh, ridgeZ);
      parts.push(s);
    }

    const merged = mergeBufferGeometries(parts);
    if (rotDir !== 0) {
      merged.rotateY(rotDir * (Math.PI * 0.5));
    }
    merged.computeVertexNormals();
    geometryCache.set(key, merged);
    return merged;
  }

  /**
   * LEGO Arch Brick Geometry (span width w, depth d, height hPlates)
   */
  function getArchGeometry(w, d, hPlates) {
    const key = `arch_${w}_${d}_${hPlates}`;
    if (geometryCache.has(key)) return geometryCache.get(key);

    const bw = Math.max(0.2, w * U - GAP);
    const bd = Math.max(0.1, d * U - GAP);
    const bh = Math.max(0.2, hPlates * P - GAP * 0.45);

    const halfW = bw * 0.5;
    const pillarW = Math.max(U * 0.75, bw * 0.18);
    const archRx = Math.max(0.1, halfW - pillarW);
    const archRy = Math.max(0.1, bh * 0.72);

    const shape = new THREE.Shape();
    shape.moveTo(-halfW, 0);
    shape.lineTo(-halfW + pillarW, 0);
    // Semicircular arch cutout
    const steps = 14;
    for (let i = 0; i <= steps; i++) {
      const theta = Math.PI - (i / steps) * Math.PI;
      const ax = Math.cos(theta) * archRx;
      const ay = Math.sin(theta) * archRy;
      shape.lineTo(ax, ay);
    }
    shape.lineTo(halfW - pillarW, 0);
    shape.lineTo(halfW, 0);
    shape.lineTo(halfW, bh);
    shape.lineTo(-halfW, bh);
    shape.closePath();

    const extrude = new THREE.ExtrudeGeometry(shape, {
      depth: bd,
      bevelEnabled: false,
      steps: 1
    });
    extrude.translate(0, 0, -bd * 0.5);

    const parts = [extrude];
    const studBase = getStudGeometry();
    const startX = -((w - 1) * U) * 0.5;
    const startZ = -((d - 1) * U) * 0.5;
    for (let ix = 0; ix < w; ix++) {
      for (let iz = 0; iz < d; iz++) {
        const s = studBase.clone();
        s.translate(startX + ix * U, bh, startZ + iz * U);
        parts.push(s);
      }
    }

    const merged = mergeBufferGeometries(parts);
    merged.computeVertexNormals();
    geometryCache.set(key, merged);
    return merged;
  }

  /**
   * Landmark Builder Helper Class
   * Tracks bricks for a specific Geneva landmark so we can animate brick-by-brick assembly,
   * count total bricks, and attach kinetic sub-assemblies.
   */
  class LandmarkGroup {
    constructor(id, meta) {
      this.id = id;
      this.meta = meta || {};
      this.group = new THREE.Group();
      this.group.name = `landmark_${id}`;
      this.bricks = [];
      this.brickCount = 0;
      this.kineticUpdaters = [];
      this.callouts = [];
    }

    _registerMesh(mesh, x, y, z, w, d, hPlates, opts) {
      opts = opts || {};
      mesh.position.set(x, y, z);
      if (opts.rotY) mesh.rotation.y = opts.rotY;
      if (opts.rotX) mesh.rotation.x = opts.rotX;
      if (opts.rotZ) mesh.rotation.z = opts.rotZ;

      mesh.castShadow = opts.castShadow !== false;
      mesh.receiveShadow = opts.receiveShadow !== false;

      // Save assembly state for brick-by-brick drop & bounce animation
      mesh.userData = {
        landmarkId: this.id,
        baseX: x,
        baseY: y,
        baseZ: z,
        baseRotX: mesh.rotation.x,
        baseRotY: mesh.rotation.y,
        baseRotZ: mesh.rotation.z,
        layerY: y,
        radialDist: Math.hypot(x, z),
        dropOffset: 16 + Math.random() * 12 + y * 0.7,
        spinOffset: (Math.random() - 0.5) * 1.4,
        phaseJitter: Math.random() * 0.12
      };

      const targetParent = opts.parent || this.group;
      targetParent.add(mesh);
      if (!opts.skipAssembly) {
        this.bricks.push(mesh);
      }
      // Estimate realistic LEGO brick piece count represented
      const volumeUnits = Math.max(1, Math.round((w * d * Math.max(1, hPlates / 3)) / 2));
      this.brickCount += volumeUnits;
      return mesh;
    }

    /**
     * Add a standard rectangular LEGO brick or plate
     * x, z in LEGO units (relative to landmark origin), y in LEGO plate units
     */
    addBrick(uX, pY, uZ, w, d, hPlates, colorKey, opts) {
      opts = opts || {};
      const geo = getBrickGeometry(w, d, hPlates, !!opts.tile, opts.studStride || 1);
      const mat = getMaterial(colorKey);
      const mesh = new THREE.Mesh(geo, mat);
      return this._registerMesh(mesh, uX * U, pY * P, uZ * U, w, d, hPlates, opts);
    }

    /**
     * Add a cylindrical LEGO round brick/column
     */
    addRound(uX, pY, uZ, diamUnits, hPlates, colorKey, opts) {
      opts = opts || {};
      const geo = getRoundBrickGeometry(diamUnits, hPlates, !!opts.tile, opts.segments);
      const mat = getMaterial(colorKey);
      const mesh = new THREE.Mesh(geo, mat);
      return this._registerMesh(mesh, uX * U, pY * P, uZ * U, diamUnits, diamUnits, hPlates, opts);
    }

    /**
     * Add a cone/spire LEGO brick
     */
    addCone(uX, pY, uZ, bottomDiam, topDiam, hPlates, colorKey, opts) {
      opts = opts || {};
      const geo = getConeBrickGeometry(bottomDiam, topDiam, hPlates, opts.topStud !== false);
      const mat = getMaterial(colorKey);
      const mesh = new THREE.Mesh(geo, mat);
      return this._registerMesh(mesh, uX * U, pY * P, uZ * U, bottomDiam, bottomDiam, hPlates, opts);
    }

    /**
     * Add a sloped LEGO roof brick
     */
    addSlope(uX, pY, uZ, w, d, hPlates, colorKey, dir, opts) {
      opts = opts || {};
      const geo = getSlopeGeometry(w, d, hPlates, dir || 0);
      const mat = getMaterial(colorKey);
      const mesh = new THREE.Mesh(geo, mat);
      return this._registerMesh(mesh, uX * U, pY * P, uZ * U, w, d, hPlates, opts);
    }

    /**
     * Add a LEGO arch brick
     */
    addArch(uX, pY, uZ, w, d, hPlates, colorKey, opts) {
      opts = opts || {};
      const geo = getArchGeometry(w, d, hPlates);
      const mat = getMaterial(colorKey);
      const mesh = new THREE.Mesh(geo, mat);
      return this._registerMesh(mesh, uX * U, pY * P, uZ * U, w, d, hPlates, opts);
    }

    /**
     * Build a multi-brick facade wall with alternating LEGO window bricks
     */
    addWindowedFacade(uX, pY, uZ, widthUnits, stories, wallColor, windowColor, rotY, opts) {
      opts = opts || {};
      const holder = new THREE.Group();
      holder.position.set(uX * U, pY * P, uZ * U);
      if (rotY) holder.rotation.y = rotY;
      (opts.parent || this.group).add(holder);

      const storyPlates = opts.storyPlates || 4; // 1 brick + 1 plate per story
      for (let s = 0; s < stories; s++) {
        const sy = s * storyPlates;
        // Sill plate row
        this.addBrick(0, sy, 0, widthUnits, 2, 1, wallColor, { parent: holder });
        // Window & pillar row (2 plates high)
        const startX = -((widthUnits - 1) * 0.5);
        for (let ix = 0; ix < widthUnits; ix++) {
          const isEdge = ix === 0 || ix === widthUnits - 1;
          const isWindow = !isEdge && (ix % 2 === 1);
          const col = isWindow ? windowColor : wallColor;
          this.addBrick(startX + ix, sy + 1, 0, 1, 2, 2, col, { parent: holder });
        }
        // Lintel plate row
        this.addBrick(0, sy + 3, 0, widthUnits, 2, 1, wallColor, { parent: holder });
      }
      return holder;
    }

    /**
     * Add an authentic brick-built LEGO tree (cypress, lush chestnut, or autumn gold)
     */
    addTree(uX, pY, uZ, style, scale) {
      const s = scale || 1;
      // Brown trunk
      const trunkH = Math.round(4 * s);
      this.addRound(uX, pY, uZ, 1, trunkH, 'reddishBrown');

      if (style === 'cypress') {
        this.addCone(uX, pY + trunkH, uZ, 2.2 * s, 1.4 * s, Math.round(5 * s), 'darkGreen');
        this.addCone(uX, pY + trunkH + Math.round(5 * s), uZ, 1.5 * s, 0.5 * s, Math.round(5 * s), 'brightGreen');
      } else {
        const c1 = style === 'autumn' ? 'brightOrange' : 'brightGreen';
        const c2 = style === 'autumn' ? 'autumnGold' : 'darkGreen';
        const c3 = style === 'autumn' ? 'brightYellow' : 'lime';
        this.addBrick(uX, pY + trunkH, uZ, Math.max(2, Math.round(3 * s)), Math.max(2, Math.round(3 * s)), 2, c1);
        this.addBrick(uX, pY + trunkH + 2, uZ, Math.max(2, Math.round(3 * s)), Math.max(2, Math.round(3 * s)), 2, c2, { rotY: Math.PI * 0.25 });
        this.addBrick(uX, pY + trunkH + 4, uZ, Math.max(1, Math.round(2 * s)), Math.max(1, Math.round(2 * s)), 2, c3);
      }
    }

    /**
     * Add a cute LEGO Minifigure (legs, torso, yellow head + stud, optional hat/hair)
     */
    addMinifig(uX, pY, uZ, torsoColor, legColor, hatColor, opts) {
      opts = opts || {};
      const fig = new THREE.Group();
      fig.position.set(uX * U, pY * P, uZ * U);
      if (opts.rotY) fig.rotation.y = opts.rotY;
      (opts.parent || this.group).add(fig);

      // Legs
      this.addBrick(0, 0, 0, 1, 0.8, 2, legColor || 'darkBluishGray', { parent: fig, tile: true });
      // Torso
      this.addBrick(0, 2, 0, 1.1, 0.8, 2, torsoColor || 'brightRed', { parent: fig, tile: true });
      // Yellow cylindrical head with stud
      this.addRound(0, 4, 0, 0.85, 1.6, 'brightYellow', { parent: fig });
      // Optional hat/hair plate
      if (hatColor) {
        this.addRound(0, 5.6, 0, 0.95, 0.8, hatColor, { parent: fig });
      }

      if (opts.walkRadius) {
        const baseU = uX * U;
        const baseZ = uZ * U;
        const r = opts.walkRadius * U;
        const speed = opts.speed || 0.8;
        const phase = opts.phase || Math.random() * Math.PI * 2;
        this.kineticUpdaters.push((t) => {
          const ang = t * speed + phase;
          fig.position.x = baseU + Math.cos(ang) * r;
          fig.position.z = baseZ + Math.sin(ang) * r;
          fig.position.y = pY * P + Math.abs(Math.sin(t * 7 + phase)) * 0.08;
          fig.rotation.y = -ang;
          fig.rotation.z = Math.sin(t * 7 + phase) * 0.08;
        });
      } else {
        const phase = Math.random() * Math.PI * 2;
        this.kineticUpdaters.push((t) => {
          fig.position.y = pY * P + Math.abs(Math.sin(t * 4 + phase)) * 0.05;
          fig.rotation.z = Math.sin(t * 4 + phase) * 0.05;
        });
      }
      return fig;
    }

    /**
     * Add an ornate LEGO streetlamp with glowing lantern brick
     */
    addStreetLamp(uX, pY, uZ) {
      this.addRound(uX, pY, uZ, 0.7, 5, 'black', { tile: true });
      this.addRound(uX, pY + 5, uZ, 0.9, 1.5, 'transYellowGlow');
      this.addCone(uX, pY + 6.5, uZ, 1.1, 0.3, 1, 'black', { topStud: false });
    }

    /**
     * Register a 3D world-space callout pin for broadcast HUD motion graphics
     */
    addCallout(uX, pY, uZ, titleKo, titleSub, tagText) {
      this.callouts.push({
        localPos: new THREE.Vector3(uX * U, pY * P, uZ * U),
        titleKo,
        titleSub,
        tagText: tagText || ''
      });
    }
  }

  /**
   * Adjust emissive intensity of all glowing LEGO bricks based on Time-of-Day mode
   */
  function setLightingMoodIntensity(intensityMultiplier) {
    for (let i = 0; i < glowingMaterials.length; i++) {
      const m = glowingMaterials[i];
      m.emissiveIntensity = (m.userData.baseEmissiveIntensity || 0.5) * intensityMultiplier;
    }
  }

  global.LegoEngine = {
    U,
    P,
    PALETTE,
    getMaterial,
    getBrickGeometry,
    getRoundBrickGeometry,
    getConeBrickGeometry,
    getSlopeGeometry,
    getArchGeometry,
    LandmarkGroup,
    setLightingMoodIntensity
  };
})(window);
