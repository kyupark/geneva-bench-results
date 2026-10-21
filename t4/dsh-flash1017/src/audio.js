// Tiny WebAudio engine: synth only, no external files.
export class GameAudio {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.muted = false;
    this.master = null;
    this.engineRunning = false;
    this._lastCoin = 0;
  }

  init() {
    if (this.ready) {
      this.ctx?.resume?.();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 0.42;
      this.master.connect(this.ctx.destination);
      this._buildEngine();
      this._buildNoise();
      this.ready = true;
    } catch (err) {
      console.warn('Audio unavailable', err);
    }
  }

  _buildEngine() {
    const ctx = this.ctx;
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0.0;
    this.engineFilter = ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.value = 380;
    this.engineFilter.Q.value = 4;
    this.engineOsc1 = ctx.createOscillator();
    this.engineOsc1.type = 'sawtooth';
    this.engineOsc1.frequency.value = 48;
    this.engineOsc2 = ctx.createOscillator();
    this.engineOsc2.type = 'square';
    this.engineOsc2.frequency.value = 49.5;
    const sub = ctx.createGain();
    sub.gain.value = 0.35;
    this.engineOsc1.connect(this.engineFilter);
    this.engineOsc2.connect(sub); sub.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.master);
    this.engineOsc1.start();
    this.engineOsc2.start();
    this.engineRunning = true;
  }

  _buildNoise() {
    const ctx = this.ctx;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 1.2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      last = last * 0.84 + white * 0.16;
      data[i] = last * 1.6;
    }
    this.noiseBuffer = buffer;
    // Loopable tyre squeal bed.
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    this.squealFilter = ctx.createBiquadFilter();
    this.squealFilter.type = 'bandpass';
    this.squealFilter.frequency.value = 2200;
    this.squealFilter.Q.value = 8;
    this.squealGain = ctx.createGain();
    this.squealGain.gain.value = 0;
    src.connect(this.squealFilter).connect(this.squealGain).connect(this.master);
    src.start();
  }

  updateEngine(speed, throttle, drifting, boosting) {
    if (!this.ready || !this.engineRunning) return;
    const t = this.ctx.currentTime;
    const norm = Math.min(1, speed / 42);
    const base = 44 + norm * 115 + (boosting ? 18 : 0);
    this.engineOsc1.frequency.setTargetAtTime(base, t, 0.06);
    this.engineOsc2.frequency.setTargetAtTime(base * 1.012 + 0.8, t, 0.06);
    this.engineFilter.frequency.setTargetAtTime(260 + norm * 1100 + (boosting ? 500 : 0), t, 0.08);
    const targetGain = this.muted ? 0 : 0.018 + Math.abs(throttle) * 0.027 + norm * 0.04 + (boosting ? 0.02 : 0);
    this.engineGain.gain.setTargetAtTime(targetGain, t, 0.1);
    this.squealGain.gain.setTargetAtTime(this.muted ? 0 : (drifting && speed > 8 ? 0.028 : 0), t, 0.08);
  }

  _env(gain, attack, hold, release) {
    const t = this.ctx.currentTime;
    gain.gain.cancelScheduledValues(t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(1, t + attack);
    gain.gain.setValueAtTime(1, t + attack + hold);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + attack + hold + release);
  }

  _tone(freq, type, duration = 0.2, volume = 0.1, delay = 0, gliss = 0) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (gliss) osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq + gliss), t + duration);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(volume, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain).connect(this.master);
    osc.start(t); osc.stop(t + duration + 0.04);
  }

  horn() {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.09, t + 0.02);
    gain.gain.setValueAtTime(0.09, t + 0.22);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);
    gain.connect(this.master);
    for (const f of [330, 415]) {
      const osc = ctx.createOscillator();
      osc.type = 'square';
      osc.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = 0.4;
      osc.connect(g).connect(gain);
      osc.start(t); osc.stop(t + 0.4);
    }
  }

  pickup() {
    if (!this.ready) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => this._tone(f, 'triangle', 0.18, 0.075, i * 0.075));
  }

  dropoff() {
    if (!this.ready) return;
    const notes = [783.99, 987.77, 1174.66, 1567.98];
    notes.forEach((f, i) => this._tone(f, 'square', 0.16, 0.045, i * 0.06));
    setTimeout(() => this.cash(), 260);
  }

  cash() {
    if (!this.ready) return;
    this._tone(1318.5, 'triangle', 0.12, 0.08, 0);
    this._tone(1760, 'triangle', 0.26, 0.065, 0.07);
  }

  coin() {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    if (now - this._lastCoin < 0.035) return;
    this._lastCoin = now;
    this._tone(1046.5, 'sine', 0.07, 0.045);
    this._tone(1568, 'sine', 0.08, 0.03, 0.035);
  }

  boost() {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass'; filter.frequency.value = 500;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.08, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t); src.stop(t + 0.5);
    this._tone(110, 'sawtooth', 0.35, 0.045, 0, 180);
  }

  crash(intensity = 1) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass'; filter.frequency.value = 800;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.13 * intensity, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t); src.stop(t + 0.3);
    this._tone(72, 'triangle', 0.18, 0.08, 0, -22);
  }

  splash() {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass'; filter.frequency.value = 1500;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.12, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t); src.stop(t + 0.9);
  }

  timeWarning() {
    if (!this.ready) return;
    this._tone(880, 'square', 0.1, 0.035);
  }

  gameOver() {
    if (!this.ready) return;
    const notes = [392, 329.63, 261.63, 196];
    notes.forEach((f, i) => this._tone(f, 'triangle', 0.35, 0.06, i * 0.18));
  }

  setMuted(muted) {
    this.muted = muted;
    if (this.master && this.ctx) this.master.gain.setTargetAtTime(muted ? 0 : 0.42, this.ctx.currentTime, 0.03);
  }

  toggleMuted() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  pause() { this.ctx?.suspend?.(); }
  resume() { this.ctx?.resume?.(); }
}
