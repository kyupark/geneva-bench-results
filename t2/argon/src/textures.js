import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.module.js';

export function createGenevaTextures() {
  const textures = {};

  // 1. Classic Geneva Haussmannian / Beaux-Arts Facade Texture
  function makeFacadeTexture(bgHex, trimHex, shutterHex, rows = 5, cols = 6, hasArcade = false) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = bgHex;
    ctx.fillRect(0, 0, 512, 512);

    // Subtle horizontal stone coursing lines
    ctx.strokeStyle = 'rgba(0,0,0,0.08)';
    ctx.lineWidth = 2;
    for (let y = 0; y < 512; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    // Cornice bands
    ctx.fillStyle = trimHex;
    ctx.fillRect(0, 0, 512, 14);
    ctx.fillRect(0, 96, 512, 8);
    ctx.fillRect(0, 410, 512, 10);

    const rowH = (hasArcade ? 400 : 480) / rows;
    const colW = 512 / cols;

    for (let r = 0; r < rows; r++) {
      const wy = 24 + r * rowH;
      const wh = rowH * 0.62;
      for (let c = 0; c < cols; c++) {
        const wx = c * colW + colW * 0.22;
        const ww = colW * 0.56;

        // Shutters
        if (shutterHex) {
          ctx.fillStyle = shutterHex;
          ctx.fillRect(wx - ww * 0.22, wy, ww * 0.2, wh);
          ctx.fillRect(wx + ww * 1.02, wy, ww * 0.2, wh);
        }

        // Window frame / lintel
        ctx.fillStyle = trimHex;
        ctx.fillRect(wx - 4, wy - 6, ww + 8, wh + 10);

        // Glass pane with warm interior or sky reflection
        const seed = (r * 17 + c * 31) % 10;
        if (seed < 3) {
          const grad = ctx.createLinearGradient(wx, wy, wx, wy + wh);
          grad.addColorStop(0, '#ffd996');
          grad.addColorStop(1, '#d89b48');
          ctx.fillStyle = grad;
        } else {
          const grad = ctx.createLinearGradient(wx, wy, wx + ww, wy + wh);
          grad.addColorStop(0, '#3a5772');
          grad.addColorStop(0.5, '#25394d');
          grad.addColorStop(1, '#587b99');
          ctx.fillStyle = grad;
        }
        ctx.fillRect(wx, wy, ww, wh);

        // Window mullions
        ctx.strokeStyle = trimHex;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(wx + ww / 2, wy);
        ctx.lineTo(wx + ww / 2, wy + wh);
        ctx.moveTo(wx, wy + wh * 0.45);
        ctx.lineTo(wx + ww, wy + wh * 0.45);
        ctx.stroke();

        // Wrought-iron balcony on 2nd and 4th floors
        if (r === 1 || r === 3) {
          ctx.fillStyle = '#222629';
          ctx.fillRect(wx - 6, wy + wh - 10, ww + 12, 12);
          ctx.strokeStyle = '#33393e';
          ctx.lineWidth = 2;
          for (let bx = wx - 4; bx <= wx + ww + 4; bx += 6) {
            ctx.beginPath();
            ctx.moveTo(bx, wy + wh - 10);
            ctx.lineTo(bx, wy + wh + 2);
            ctx.stroke();
          }
        }
      }
    }

    // Ground floor arcade if enabled
    if (hasArcade) {
      ctx.fillStyle = trimHex;
      ctx.fillRect(0, 415, 512, 97);
      for (let c = 0; c < cols; c++) {
        const ax = c * colW + colW * 0.14;
        const aw = colW * 0.72;
        ctx.fillStyle = '#2a231d';
        ctx.beginPath();
        ctx.arc(ax + aw / 2, 450, aw / 2, Math.PI, 0);
        ctx.lineTo(ax + aw, 512);
        ctx.lineTo(ax, 512);
        ctx.closePath();
        ctx.fill();

        // Warm shop window glow inside arch
        ctx.fillStyle = 'rgba(255, 210, 135, 0.65)';
        ctx.fillRect(ax + 6, 452, aw - 12, 48);
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  textures.haussmannCream = makeFacadeTexture('#e8dfd1', '#cfc2ae', '#4f6257', 5, 6, true);
  textures.haussmannOchre = makeFacadeTexture('#dfc69f', '#c4a97e', '#3f5147', 5, 6, true);
  textures.oldTownStone = makeFacadeTexture('#cbbba2', '#a8977e', '#6d372c', 4, 5, false);
  textures.oldTownWarm = makeFacadeTexture('#d8be98', '#b59972', '#3b5249', 4, 4, false);
  textures.palaisTravertine = makeFacadeTexture('#f3efe6', '#dcd5c7', null, 6, 8, false);
  textures.modernGlass = makeFacadeTexture('#9bb4c9', '#52687a', null, 6, 10, false);

  // 2. Roof Tile Textures (Terracotta & Mansard Slate)
  function makeRoofTexture(baseHex, lineHex) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = baseHex;
    ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = lineHex;
    ctx.lineWidth = 2;
    for (let y = 0; y < 256; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(256, y);
      ctx.stroke();
      for (let x = (y % 32 === 0 ? 0 : 8); x < 256; x += 16) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + 16);
        ctx.stroke();
      }
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  textures.terracottaRoof = makeRoofTexture('#a94e34', '#7d3420');
  textures.slateRoof = makeRoofTexture('#3f4854', '#2a313a');
  textures.copperRoof = makeRoofTexture('#4b8b7b', '#35695c');

  // 3. Water Shimmer & Normal Map for Lake Geneva
  {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#8080ff';
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 1800; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const w = 12 + Math.random() * 28;
      const h = 3 + Math.random() * 5;
      ctx.fillStyle = i % 2 === 0 ? 'rgba(155, 155, 255, 0.35)' : 'rgba(100, 100, 255, 0.35)';
      ctx.beginPath();
      ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(28, 28);
    textures.waterNormal = tex;
  }

  // 4. Clock Face Texture (St. Pierre Cathedral & Gare Cornavin)
  {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1d2228';
    ctx.beginPath();
    ctx.arc(128, 128, 120, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 10;
    ctx.stroke();

    for (let i = 0; i < 12; i++) {
      const a = (i * Math.PI) / 6;
      ctx.strokeStyle = '#f2d16b';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(128 + Math.cos(a) * 88, 128 + Math.sin(a) * 88);
      ctx.lineTo(128 + Math.cos(a) * 108, 128 + Math.sin(a) * 108);
      ctx.stroke();
    }
    // Hands at 10:10
    ctx.strokeStyle = '#f2d16b';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(128, 128);
    ctx.lineTo(75, 86);
    ctx.moveTo(128, 128);
    ctx.lineTo(188, 76);
    ctx.stroke();

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    textures.clockFace = tex;
  }

  // 5. Reformation Wall Inscription & Relief Texture ("POST TENEBRAS LUX")
  {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#e7e2d5';
    ctx.fillRect(0, 0, 1024, 256);

    // Ashlar stone blocks
    ctx.strokeStyle = 'rgba(90, 82, 70, 0.28)';
    ctx.lineWidth = 2;
    for (let y = 0; y < 256; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
      for (let x = (y % 64 === 0 ? 0 : 32); x < 1024; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + 32);
        ctx.stroke();
      }
    }

    // Carved frieze text at top
    ctx.fillStyle = '#8b7b62';
    ctx.font = 'bold 28px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('POST   T E N E B R A S   L U X', 512, 42);

    // Bas-relief panels on left and right wings
    ctx.fillStyle = '#d3cbb8';
    for (let px of [120, 260, 764, 904]) {
      ctx.fillRect(px - 50, 75, 100, 120);
      ctx.strokeStyle = '#9f9480';
      ctx.strokeRect(px - 50, 75, 100, 120);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    textures.reformationWall = tex;
  }

  // 6. Gare Cornavin Signboard Texture ("GARE DE GENÈVE-CORNAVIN · CFF FFS")
  {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#e5ded0';
    ctx.fillRect(0, 0, 1024, 128);
    ctx.strokeStyle = '#bfb4a0';
    ctx.lineWidth = 6;
    ctx.strokeRect(4, 4, 1016, 120);

    // Red SBB logo badge
    ctx.fillStyle = '#d40000';
    ctx.fillRect(190, 32, 72, 64);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 34px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('↔', 226, 76);

    ctx.fillStyle = '#2d3136';
    ctx.font = 'bold 42px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('CFF   GENÈVE - CORNAVIN   FFS', 565, 79);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    textures.cornavinSign = tex;
  }

  // 7. Soft Circular Water Spray Particle Sprite for Jet d'Eau
  {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.45, 'rgba(235, 248, 255, 0.75)');
    grad.addColorStop(1, 'rgba(210, 240, 255, 0.0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();
    textures.sprayParticle = new THREE.CanvasTexture(canvas);
  }

  return textures;
}
