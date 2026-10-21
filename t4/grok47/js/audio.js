export function createAudio() {
  let ctx = null;
  let master = null;
  let engine = null;
  let engineGain = null;
  let noise = null;
  let noiseGain = null;
  let muted = false;
  let musicOn = true;
  let musicTimer = 0;

  function unlock() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.7;
      master.connect(ctx.destination);
      engine = ctx.createOscillator();
      engine.type = "sawtooth";
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 240;
      engineGain = ctx.createGain();
      engineGain.gain.value = 0;
      engine.connect(filter);
      filter.connect(engineGain);
      engineGain.connect(master);
      engine.start();
      const len = ctx.sampleRate * 1;
      const data = ctx.createBuffer(1, len, ctx.sampleRate);
      const ch = data.getChannelData(0);
      for (let i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
      noise = ctx.createBufferSource();
      noise.buffer = data;
      noise.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 900;
      noiseGain = ctx.createGain();
      noiseGain.gain.value = 0;
      noise.connect(bp);
      bp.connect(noiseGain);
      noiseGain.connect(master);
      noise.start();
    }
    if (ctx.state === "suspended") ctx.resume();
  }

  function blip(freq, dur, type, gain) {
    if (!ctx || muted) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type || "square";
    o.frequency.value = freq;
    g.gain.setValueAtTime(gain || 0.08, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.connect(g);
    g.connect(master);
    o.start();
    o.stop(ctx.currentTime + dur + 0.02);
  }

  return {
    unlock,
    toggleMute() {
      muted = !muted;
      if (master) master.gain.value = muted ? 0 : 0.7;
      return muted;
    },
    toggleMusic() {
      musicOn = !musicOn;
      return musicOn;
    },
    update(taxi, dt) {
      if (!ctx || muted) return;
      const speed = Math.abs(taxi.speed);
      engine.frequency.setTargetAtTime(48 + speed * 2.4 + (taxi.boosting ? 30 : 0), ctx.currentTime, 0.08);
      engineGain.gain.setTargetAtTime(Math.min(0.045, 0.008 + speed * 0.0007), ctx.currentTime, 0.08);
      const skid = Math.min(0.05, Math.max(0, (Math.abs(taxi.lateral) - 3) * 0.004));
      noiseGain.gain.setTargetAtTime(skid, ctx.currentTime, 0.05);
      if (!musicOn) return;
      musicTimer -= dt;
      if (musicTimer <= 0) {
        const notes = [196, 247, 294, 196, 330, 294, 247, 220];
        const step = Math.floor(ctx.currentTime * 4) % notes.length;
        blip(notes[step], 0.12, "triangle", 0.03);
        if (step % 2 === 0) blip(80, 0.08, "sine", 0.04);
        musicTimer = 0.28;
      }
    },
    pickup() {
      blip(520, 0.08, "square", 0.07);
      blip(780, 0.14, "square", 0.06);
    },
    deliver(crazy) {
      blip(660, 0.1, "square", 0.08);
      blip(crazy ? 990 : 880, 0.18, "square", 0.07);
      if (crazy) blip(1320, 0.22, "square", 0.05);
    },
    crash() {
      blip(90, 0.2, "sawtooth", 0.09);
    },
    splash() {
      blip(300, 0.16, "sine", 0.06);
      blip(180, 0.24, "triangle", 0.05);
    },
    tick() {
      blip(880, 0.06, "square", 0.05);
    },
    horn() {
      blip(494, 0.13, "square", 0.07);
      blip(370, 0.18, "square", 0.05);
    },
  };
}
