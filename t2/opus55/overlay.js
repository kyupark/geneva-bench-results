// HTML overlay: title card, location captions, drone telemetry, minimap and
// end card. Everything is a pure function of the flight time so that frames
// can be rendered out of order.

const SEGMENTS = [
  { mark: 'lake', end: 'lakeEnd', no: '01', fr: 'La Rade · Jet d’Eau', ko: 'Lakeside — Lake Geneva and the Jet d’Eau' },
  { mark: 'oldtown', end: 'oldtownEnd', no: '02', fr: 'Vieille Ville', ko: 'Old Town — St. Pierre Cathedral' },
  { mark: 'bastions', end: 'bastionsEnd', no: '03', fr: 'Parc des Bastions', ko: 'Parc des Bastions — Reformation Wall' },
  { mark: 'neuve', end: 'neuveEnd', no: '04', fr: 'Place de Neuve', ko: 'Place de Neuve — Grand Théâtre de Genève' },
  { mark: 'cornavin', end: 'cornavinEnd', no: '05', fr: 'Gare Cornavin', ko: 'Central Station — Geneva Cornavin Station' },
  { mark: 'un', end: 'unEnd', no: '06', fr: 'Palais des Nations', ko: 'UN European HQ — Palais des Nations' },
];

const MAP_PLACES = [
  { name: 'jet', label: '1' },
  { name: 'cathedral', label: '2' },
  { name: 'bastions', label: '3' },
  { name: 'placeNeuve', label: '4' },
  { name: 'cornavin', label: '5' },
  { name: 'palais', label: '6' },
];

function clamp01(x) { return Math.min(1, Math.max(0, x)); }
function ease(x) { x = clamp01(x); return x * x * (3 - 2 * x); }
// Opacity envelope: fade in over `fi` seconds from `a`, out over `fo` ending at `b`.
function envelope(t, a, b, fi = 0.9, fo = 0.9) {
  if (t < a || t > b) return 0;
  return Math.min(ease((t - a) / fi), ease((b - t) / fo));
}

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

export function createOverlay(root, { flight, duration, markTimes, minimap, places, toLocal }) {
  root.innerHTML = '';
  const frame = el('div', 'ov-frame');
  root.appendChild(frame);

  // --- title card -----------------------------------------------------------
  const title = el('div', 'ov-title');
  title.appendChild(el('div', 'ov-title-main', 'GENÈVE'));
  title.appendChild(el('div', 'ov-title-rule'));
  title.appendChild(el('div', 'ov-title-sub', 'Geneva Drone Flythrough'));
  title.appendChild(
    el('div', 'ov-title-list', 'Old Town · Lakeside · Central Station · UN · Place de Neuve · Bastions'),
  );
  frame.appendChild(title);

  // --- captions ---------------------------------------------------------------
  const captions = SEGMENTS.map((s) => {
    const c = el('div', 'ov-caption');
    c.appendChild(el('div', 'ov-caption-no', `${s.no}<span>/06</span>`));
    const body = el('div', 'ov-caption-body');
    body.appendChild(el('div', 'ov-caption-fr', s.fr));
    body.appendChild(el('div', 'ov-caption-ko', s.ko));
    c.appendChild(body);
    frame.appendChild(c);
    const a = markTimes[s.mark] + 0.6;
    const b = Math.max(markTimes[s.end] - 0.4, a + 5.5);
    return { node: c, a, b };
  });

  // --- telemetry -------------------------------------------------------------
  const hud = el('div', 'ov-hud');
  const hudAlt = el('span', 'ov-hud-item');
  const hudPos = el('span', 'ov-hud-item');
  const hudHdg = el('span', 'ov-hud-item');
  hud.append(hudAlt, hudPos, hudHdg);
  frame.appendChild(hud);

  const credit = el('div', 'ov-credit', '3D data © swisstopo · OpenStreetMap contributors');
  frame.appendChild(credit);

  // --- minimap ---------------------------------------------------------------
  let map = null;
  if (minimap) {
    const box = el('div', 'ov-map');
    const img = el('img', 'ov-map-img');
    img.src = minimap.image;
    const canvas = el('canvas', 'ov-map-canvas');
    const W = 240, H = Math.round(240 * minimap.heightPx / minimap.widthPx);
    box.style.width = `${W}px`;
    box.style.height = `${H}px`;
    canvas.width = W * 2;
    canvas.height = H * 2;
    box.append(img, canvas);
    frame.appendChild(box);
    const toPx = (x, y) => [
      ((x - minimap.x0) / (minimap.x1 - minimap.x0)) * W * 2,
      ((minimap.y1 - y) / (minimap.y1 - minimap.y0)) * H * 2,
    ];
    const route = flight.frames.map((f) => toPx(f.p[0], f.p[1]));
    const pts = MAP_PLACES.map((m) => {
      const p = places[m.name];
      const l = toLocal(p.lat, p.lon, p.ground);
      return { ...m, px: toPx(l[0], l[1]) };
    });
    map = { box, canvas, ctx: canvas.getContext('2d'), route, pts, W, H };
  }

  const blackout = el('div', 'ov-black');
  frame.appendChild(blackout);

  // --- end card --------------------------------------------------------------
  const endCard = el('div', 'ov-end');
  endCard.appendChild(el('div', 'ov-end-main', 'GENÈVE'));
  endCard.appendChild(el('div', 'ov-title-rule'));
  endCard.appendChild(el('div', 'ov-end-sub', 'Geneva · an international city on Lake Geneva'));
  endCard.appendChild(
    el(
      'div',
      'ov-end-credits',
      '3D Buildings swissBUILDINGS3D · Terrain swissALTI3D · Aerial SWISSIMAGE © swisstopo<br>' +
        'Landmark locations © OpenStreetMap contributors · Rendered with CesiumJS',
    ),
  );
  frame.appendChild(endCard);

  const titleA = 0.8, titleB = 7.0;
  const endA = duration - 7.0, endB = duration - 0.05;

  function drawMap(i) {
    if (!map) return;
    const { ctx, route, pts } = map;
    const S = 2;
    ctx.clearRect(0, 0, map.canvas.width, map.canvas.height);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    // full route (faint)
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 2 * S;
    ctx.setLineDash([3 * S, 4 * S]);
    ctx.beginPath();
    for (let k = 0; k < route.length; k += 3) {
      const [x, y] = route[k];
      if (k === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.setLineDash([]);
    // travelled part
    ctx.strokeStyle = 'rgba(255,214,102,0.95)';
    ctx.lineWidth = 2.6 * S;
    ctx.beginPath();
    for (let k = 0; k <= i; k += 2) {
      const [x, y] = route[k];
      if (k === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.lineTo(route[i][0], route[i][1]);
    ctx.stroke();
    // landmarks
    ctx.font = `${10 * S}px "Avenir Next", "Helvetica Neue", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const p of pts) {
      ctx.fillStyle = 'rgba(20,24,30,0.85)';
      ctx.beginPath();
      ctx.arc(p.px[0], p.px[1], 7.5 * S, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.9)';
      ctx.lineWidth = 1.2 * S;
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.fillText(p.label, p.px[0], p.px[1] + 0.5 * S);
    }
    // drone + view cone
    const f = flight.frames[i];
    const [x, y] = route[i];
    const h = f.heading;
    const cone = 0.62; // half angle (rad) of the horizontal field of view
    const r = 26 * S;
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, 'rgba(255,214,102,0.55)');
    grad.addColorStop(1, 'rgba(255,214,102,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(x, y);
    // canvas angle: 0 = +x (east), heading 0 = north (-y)
    ctx.arc(x, y, r, h - Math.PI / 2 - cone, h - Math.PI / 2 + cone);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#ffd666';
    ctx.strokeStyle = 'rgba(0,0,0,0.6)';
    ctx.lineWidth = 1.5 * S;
    ctx.beginPath();
    ctx.arc(x, y, 4.2 * S, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  function update(i, info) {
    const t = i / flight.fps;
    title.style.opacity = envelope(t, titleA, titleB, 1.4, 1.2).toFixed(3);
    for (const c of captions) {
      const o = envelope(t, c.a, c.b, 0.9, 0.9);
      c.node.style.opacity = o.toFixed(3);
      c.node.style.transform = `translateY(${((1 - o) * 10).toFixed(2)}px)`;
    }
    const chrome = Math.min(ease((t - 5.5) / 1.5), ease((endA + 0.5 - t) / 1.2));
    hud.style.opacity = (0.85 * chrome).toFixed(3);
    credit.style.opacity = (0.7 * chrome).toFixed(3);
    if (map) map.box.style.opacity = (0.95 * chrome).toFixed(3);
    endCard.style.opacity = envelope(t, endA, endB, 1.6, 1.2).toFixed(3);
    // Fade from black at the start, to black at the very end.
    const fadeIn = 1 - ease(t / 1.4);
    const fadeOut = ease((t - (duration - 1.6)) / 1.5);
    blackout.style.opacity = Math.max(fadeIn, fadeOut).toFixed(3);

    if (info) {
      hudAlt.textContent = `ALT ${info.agl.toFixed(0).padStart(3, ' ')} m`;
      hudPos.textContent = `${info.lat.toFixed(5)}° N   ${info.lon.toFixed(5)}° E`;
      const hd = ((info.heading * 180) / Math.PI + 360) % 360;
      hudHdg.textContent = `HDG ${hd.toFixed(0).padStart(3, '0')}°`;
    }
    drawMap(i);
  }

  return { update };
}
