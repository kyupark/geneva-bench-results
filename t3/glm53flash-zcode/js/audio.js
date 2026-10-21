'use strict';
/* ---------- tiny WebAudio synth (no assets) ---------- */
const AudioSys = (() => {
  let ctx = null, master = null, muted = false;
  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.45;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return true;
  }
  let _nb = null;
  function noiseBuf() {
    if (_nb) return _nb;
    const b = ctx.createBuffer(1, ctx.sampleRate * 0.6 | 0, ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    _nb = b;
    return b;
  }
  function noise(f0, f1, dur, vol, when = 0) {
    if (muted || !ensure()) return;
    const t = ctx.currentTime + when;
    const src = ctx.createBufferSource(); src.buffer = noiseBuf(); src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass';
    f.frequency.setValueAtTime(Math.max(40, f0), t);
    f.frequency.exponentialRampToValueAtTime(Math.max(40, f1), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(t); src.stop(t + dur + 0.03);
  }
  function tone(f0, f1, dur, type, vol, when = 0) {
    if (muted || !ensure()) return;
    const t = ctx.currentTime + when;
    const o = ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(Math.max(30, f0), t);
    o.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.03);
  }
  const SHOTS = {
    pistol:  { f: 950,  d: 0.10 },
    smg:     { f: 1150, d: 0.07 },
    rifle:   { f: 760,  d: 0.12 },
    shotgun: { f: 430,  d: 0.20 },
    sniper:  { f: 310,  d: 0.32 },
  };
  return {
    toggleMute() { muted = !muted; return muted; },
    get muted() { return muted; },
    shot(kind, vol = 1) {
      const c = SHOTS[kind] || SHOTS.pistol;
      noise(c.f * 3, 160, c.d, 0.5 * vol);
      tone(c.f, 55, c.d, 'square', 0.11 * vol);
    },
    melee(vol = 1) { noise(700, 200, 0.09, 0.28 * vol); },
    hit(vol = 1) { tone(1300, 700, 0.05, 'triangle', 0.16 * vol); },
    hitMark() { tone(1500, 1100, 0.05, 'square', 0.12); },
    hurt() { tone(220, 90, 0.16, 'sawtooth', 0.22); noise(500, 150, 0.12, 0.2); },
    kill() { tone(880, 880, 0.07, 'square', 0.14); tone(1175, 1175, 0.09, 'square', 0.14, 0.08); },
    empty() { tone(1600, 1200, 0.04, 'square', 0.08); },
    reload() { tone(500, 500, 0.04, 'square', 0.1); tone(700, 700, 0.05, 'square', 0.1, 0.09); },
    swap() { noise(1200, 500, 0.06, 0.12); },
    pickup() { tone(660, 990, 0.09, 'triangle', 0.16); },
    heal() { tone(520, 780, 0.14, 'sine', 0.16); },
    drink() { tone(400, 620, 0.1, 'sine', 0.14); tone(500, 760, 0.1, 'sine', 0.12, 0.1); },
    zone() { tone(340, 340, 0.24, 'sawtooth', 0.14); tone(340, 340, 0.24, 'sawtooth', 0.14, 0.34); },
    deploy() { noise(300, 900, 0.5, 0.2); tone(180, 420, 0.5, 'sine', 0.12); },
    land() { noise(900, 150, 0.28, 0.3); },
    win() { [523, 659, 784, 1046].forEach((f, i) => tone(f, f, 0.22, 'triangle', 0.2, i * 0.14)); },
    lose() { [392, 311, 233].forEach((f, i) => tone(f, f * 0.97, 0.3, 'sawtooth', 0.14, i * 0.2)); },
  };
})();
