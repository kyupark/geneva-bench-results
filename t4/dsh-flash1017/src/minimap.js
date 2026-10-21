import { ROADS, WATER, LANDMARKS } from './data.js';

export class MiniMap {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.bounds = { minX: -124, maxX: 166, minZ: -226, maxZ: 106 };
    this.bg = document.createElement('canvas');
    this.bg.width = this.width;
    this.bg.height = this.height;
    const s = Math.min(this.width / (this.bounds.maxX - this.bounds.minX), this.height / (this.bounds.maxZ - this.bounds.minZ));
    this.scale = s;
    this.offsetX = (this.width - (this.bounds.maxX - this.bounds.minX) * s) / 2;
    this.offsetY = (this.height - (this.bounds.maxZ - this.bounds.minZ) * s) / 2;
    this._drawBase(this.bg.getContext('2d'));
  }

  px(x, z) {
    return [this.offsetX + (x - this.bounds.minX) * this.scale, this.offsetY + (z - this.bounds.minZ) * this.scale];
  }

  _drawBase(ctx) {
    const { width: w, height: h } = this;
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, '#102c39');
    g.addColorStop(1, '#15394a');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    // Technical grid.
    ctx.strokeStyle = 'rgba(255,255,255,.032)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 0; y < h; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
    const drawPoly = (poly, color, stroke) => {
      ctx.beginPath();
      const p0 = this.px(poly[0][0], poly[0][1]);
      ctx.moveTo(p0[0], p0[1]);
      for (let i = 1; i < poly.length; i++) { const p = this.px(poly[i][0], poly[i][1]); ctx.lineTo(p[0], p[1]); }
      ctx.closePath();
      ctx.fillStyle = color; ctx.fill();
      if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
    };
    drawPoly(WATER.lake, '#1b6c83', 'rgba(142,225,231,.25)');
    drawPoly(WATER.river, '#1b6c83', 'rgba(142,225,231,.25)');
    // Parks.
    ctx.fillStyle = 'rgba(78,145,85,.52)';
    for (const [x, z, ww, dd] of [[41, 34, 31, 24], [-17, 89, 56, 27], [-83, -47, 16, 12], [90, -30, 17, 9], [-80, 50, 18, 26]]) {
      const p = this.px(x - ww / 2, z - dd / 2);
      ctx.fillRect(p[0], p[1], ww * this.scale, dd * this.scale);
    }
    // Roads. Wide dark base plus lighter core.
    for (const pass of [0, 1]) {
      for (const road of ROADS) {
        ctx.beginPath();
        const p0 = this.px(road.points[0][0], road.points[0][1]);
        ctx.moveTo(p0[0], p0[1]);
        for (let i = 1; i < road.points.length; i++) {
          const p = this.px(road.points[i][0], road.points[i][1]);
          ctx.lineTo(p[0], p[1]);
        }
        const isWater = road.type === 'pier' || road.type === 'bridge';
        if (pass === 0) {
          ctx.strokeStyle = isWater ? 'rgba(140,102,63,.9)' : (road.major ? '#2f424b' : '#273a43');
          ctx.lineWidth = Math.max(3, road.width * this.scale * 0.55);
        } else {
          ctx.strokeStyle = isWater ? 'rgba(222,185,126,.8)' : (road.major ? '#5b7078' : '#435760');
          ctx.lineWidth = Math.max(1, road.width * this.scale * 0.17);
          if (!road.major) ctx.globalAlpha = 0.6;
        }
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
    // Tiny city blocks.
    ctx.fillStyle = 'rgba(190,201,190,.08)';
    for (let i = 0; i < 70; i++) {
      const x = this.bounds.minX + Math.random() * (this.bounds.maxX - this.bounds.minX);
      const z = this.bounds.minZ + Math.random() * (this.bounds.maxZ - this.bounds.minZ);
      const p = this.px(x, z);
      ctx.fillRect(p[0], p[1], 3 + Math.random() * 6, 3 + Math.random() * 6);
    }
    // Shore trim.
    ctx.strokeStyle = 'rgba(173,226,225,.3)'; ctx.lineWidth = 1.4;
    for (const poly of [WATER.lake, WATER.river]) {
      ctx.beginPath();
      const p0 = this.px(poly[0][0], poly[0][1]); ctx.moveTo(p0[0], p0[1]);
      for (let i = 1; i < poly.length; i++) { const p = this.px(poly[i][0], poly[i][1]); ctx.lineTo(p[0], p[1]); }
      ctx.closePath(); ctx.stroke();
    }
  }

  update(taxi, target, mode, time, visited = new Set()) {
    const ctx = this.ctx;
    const { width: w, height: h } = this;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(this.bg, 0, 0);
    const car = this.px(taxi.position.x, taxi.position.z);
    const targetLm = target;
    // Dotted line to current fare objective.
    if (targetLm) {
      const tp = this.px(targetLm.position.x, targetLm.position.z);
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([8, 9]);
      ctx.lineDashOffset = -time * 14;
      ctx.moveTo(car[0], car[1]);
      ctx.lineTo(tp[0], tp[1]);
      ctx.strokeStyle = mode === 'pickup' ? 'rgba(36,218,196,.65)' : 'rgba(255,210,31,.65)';
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.restore();
    }
    // Landmarks.
    for (const lm of LANDMARKS) {
      const [x, y] = this.px(lm.position.x, lm.position.z);
      const active = targetLm?.id === lm.id;
      const seen = visited.has(lm.id);
      const pulse = active ? 1 + Math.sin(time * 4.2) * 0.14 : 1;
      if (active) {
        ctx.beginPath();
        ctx.arc(x, y, 16 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = mode === 'pickup' ? 'rgba(25,184,166,.16)' : 'rgba(255,210,31,.16)';
        ctx.fill();
        ctx.strokeStyle = mode === 'pickup' ? '#38ead4' : '#ffd21f';
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(x, y, active ? 8.5 : 6.2, 0, Math.PI * 2);
      ctx.fillStyle = active ? (mode === 'pickup' ? '#19b8a6' : '#ffd21f') : lm.color;
      ctx.fill();
      ctx.lineWidth = seen ? 2.5 : 1.4;
      ctx.strokeStyle = seen ? '#fff9e9' : 'rgba(7,23,34,.9)';
      ctx.stroke();
      if (seen && !active) {
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = '#fff9e9'; ctx.fill();
      }
    }
    // Active label.
    if (targetLm) {
      const [x, y] = this.px(targetLm.position.x, targetLm.position.z);
      const label = targetLm.short.toUpperCase();
      ctx.font = '800 17px "Nunito Sans", sans-serif';
      const tw = ctx.measureText(label).width;
      const lx = Math.min(w - tw - 22, Math.max(10, x - tw / 2 - 8));
      const ly = Math.max(24, y - 37);
      ctx.fillStyle = 'rgba(6,20,29,.88)';
      ctx.beginPath();
      ctx.roundRect(lx, ly - 16, tw + 16, 22, 7);
      ctx.fill();
      ctx.strokeStyle = mode === 'pickup' ? 'rgba(25,184,166,.6)' : 'rgba(255,210,31,.55)';
      ctx.lineWidth = 1.4; ctx.stroke();
      ctx.fillStyle = '#fff9e9';
      ctx.fillText(label, lx + 8, ly - 1);
    }
    // Car arrow.
    ctx.save();
    ctx.translate(car[0], car[1]);
    ctx.rotate(taxi.heading);
    ctx.beginPath();
    ctx.moveTo(0, -15);
    ctx.lineTo(11, 10);
    ctx.lineTo(0, 5);
    ctx.lineTo(-11, 10);
    ctx.closePath();
    ctx.fillStyle = '#ffd21f';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#102436';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 5);
    ctx.lineTo(0, 2.5);
    ctx.lineTo(-5, 5);
    ctx.closePath();
    ctx.fillStyle = '#e23a30'; ctx.fill();
    ctx.restore();
    // 500 m scale bar (world units: 50).
    const bx = 16, by = h - 18;
    const bar = 50 * this.scale;
    ctx.strokeStyle = 'rgba(255,249,233,.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + bar, by); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(bx, by - 4); ctx.lineTo(bx, by + 4); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(bx + bar, by - 4); ctx.lineTo(bx + bar, by + 4); ctx.stroke();
    ctx.fillStyle = 'rgba(255,249,233,.42)';
    ctx.font = '700 12px "Nunito Sans", sans-serif'; ctx.fillText('500 m', bx + bar + 7, by + 4);
  }
}
