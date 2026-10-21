import numpy as np
from scipy import signal
from scipy.io import wavfile

SR = 48000
DUR = 80.0
N = int(SR * DUR)
t = np.arange(N) / SR
rng = np.random.default_rng(20261019)

NOTE = {
    'D2': 73.42, 'F2': 87.31, 'A2': 110.00, 'Bb2': 116.54, 'C3': 130.81, 'D3': 146.83,
    'E3': 164.81, 'F3': 174.61, 'G3': 196.00, 'A3': 220.00, 'Bb3': 233.08,
    'B3': 246.94, 'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23,
    'G4': 392.00, 'A4': 440.00, 'C5': 523.25, 'D5': 587.33, 'F5': 698.46,
}

CHORDS = [
    (0.0,  'Dm',  ['D2', 'D3', 'F3', 'A3', 'E4']),
    (8.0,  'Bb',  ['Bb2', 'D3', 'F3', 'A3', 'D4']),
    (16.0, 'F',   ['F2', 'A2', 'C3', 'F3', 'G3']),
    (24.0, 'C',   ['C3', 'E3', 'G3', 'C4', 'D4']),
    (32.0, 'Dm',  ['D2', 'D3', 'F3', 'A3', 'C4']),
    (40.0, 'Bb',  ['Bb2', 'D3', 'F3', 'A3', 'F4']),
    (48.0, 'F',   ['F2', 'C3', 'F3', 'A3', 'C4']),
    (56.0, 'C',   ['C3', 'E3', 'G3', 'B3', 'D4']),
    (64.0, 'Bb',  ['Bb2', 'D3', 'F3', 'Bb3', 'D4']),
    (72.0, 'F',   ['F2', 'A2', 'C3', 'F3', 'A3']),
]


def pad_note(freq, start, end, amp, pan, detune=0.0, attack=2.4, release=3.2):
    out = np.zeros((2, N), dtype=np.float64)
    a = int(start * SR)
    b = min(N, int((end + release) * SR))
    if b <= a:
        return out
    tt = np.arange(b - a) / SR
    env = np.minimum(1.0, tt / attack)
    env *= np.minimum(1.0, np.maximum(0.0, (end + release - start - tt) / release))
    env = env * env * (3 - 2 * env)
    wobble = 0.35 * np.sin(2 * np.pi * 0.055 * tt + freq * 0.07) + 0.18 * np.sin(2 * np.pi * 0.027 * tt + 1.7)
    f = freq * (1.0 + detune / 1200.0)
    tone = (
        0.58 * np.sin(2 * np.pi * f * tt + wobble)
        + 0.19 * np.sin(2 * np.pi * f * 2.003 * tt + 0.4 + wobble * 1.3)
        + 0.09 * np.sin(2 * np.pi * f * 3.001 * tt + 1.1)
        + 0.035 * np.sin(2 * np.pi * f * 4.007 * tt + 2.0)
    )
    tone *= env * amp
    l = np.sqrt(0.5 * (1 - pan))
    r = np.sqrt(0.5 * (1 + pan))
    out[0, a:b] += tone * l
    out[1, a:b] += tone * r
    return out


pad = np.zeros((2, N), dtype=np.float64)
for ci, (start, name, notes) in enumerate(CHORDS):
    end = CHORDS[ci + 1][0] if ci + 1 < len(CHORDS) else DUR + 2.0
    for vi, note in enumerate(notes):
        pan = -0.55 + 1.1 * (vi / max(1, len(notes) - 1))
        amp = 0.075 if vi == 0 else 0.052
        pad += pad_note(NOTE[note], start, end, amp, pan, detune=(vi - 1.5) * 2.6)
    root = NOTE[notes[0]]
    pad += pad_note(root / 2, start, end, 0.055, 0.0, detune=-4.0, attack=3.0, release=4.0)

plucks = np.zeros((2, N), dtype=np.float64)
melody = [
    (3.2, 'A4', 0.14, -0.2), (8.7, 'F4', 0.11, 0.25), (12.1, 'D5', 0.10, -0.1),
    (17.4, 'C5', 0.12, 0.35), (21.2, 'A4', 0.095, -0.3), (25.8, 'G4', 0.10, 0.15),
    (30.4, 'A4', 0.115, 0.0), (34.9, 'D5', 0.09, -0.35), (39.6, 'F5', 0.095, 0.3),
    (44.4, 'D5', 0.10, -0.15), (49.2, 'C5', 0.11, 0.25), (54.2, 'A4', 0.09, -0.2),
    (58.9, 'G4', 0.10, 0.3), (63.3, 'A4', 0.10, 0.0), (67.6, 'C5', 0.095, -0.25),
    (71.8, 'D5', 0.10, 0.2), (75.3, 'A4', 0.085, -0.1), (77.7, 'F4', 0.075, 0.2),
]
for start, note, amp, pan in melody:
    a = int(start * SR)
    ln = int(4.2 * SR)
    b = min(N, a + ln)
    if b <= a:
        continue
    tt = np.arange(b - a) / SR
    env = (1 - np.exp(-tt / 0.008)) * np.exp(-tt / 1.65)
    f = NOTE[note]
    tone = (
        0.62 * np.sin(2 * np.pi * f * tt)
        + 0.22 * np.sin(2 * np.pi * f * 2.001 * tt + 0.3)
        + 0.09 * np.sin(2 * np.pi * f * 3.004 * tt + 1.0)
        + 0.045 * np.sin(2 * np.pi * f * 4.009 * tt + 1.8)
    )
    tone += 0.03 * rng.standard_normal(b - a) * np.exp(-tt / 0.12)
    tone *= env * amp
    l = np.sqrt(0.5 * (1 - pan))
    r = np.sqrt(0.5 * (1 + pan))
    plucks[0, a:b] += tone * l
    plucks[1, a:b] += tone * r

white = rng.standard_normal((2, N))
b_low, a_low = signal.butter(2, 900 / (SR / 2), btype='low')
b_band, a_band = signal.butter(2, [320 / (SR / 2), 2800 / (SR / 2)], btype='band')
wind = signal.lfilter(b_low, a_low, white, axis=1)
spray = signal.lfilter(b_band, a_band, white, axis=1)
wind_env = 0.45 + 0.25 * np.sin(2 * np.pi * t / 19.0 + 0.8) + 0.12 * np.sin(2 * np.pi * t / 7.3)
wind *= wind_env * 0.006
spray_env = np.zeros(N)
spray_env += 0.010 * np.exp(-((t - 34.0) / 17.0) ** 2)
spray_env += 0.006 * np.exp(-((t - 66.0) / 11.0) ** 2)
spray *= spray_env
ambience = wind + spray

ir_len = int(3.8 * SR)
ir_t = np.arange(ir_len) / SR
ir = rng.standard_normal((2, ir_len)) * np.exp(-ir_t / 0.72)
ir[:, :int(0.012 * SR)] *= 0.35
ir += np.roll(ir, int(0.031 * SR), axis=1) * 0.28
ir /= np.max(np.abs(ir)) * 2.2
wet = np.stack([
    signal.fftconvolve(pad[0] + plucks[0], ir[0])[:N],
    signal.fftconvolve(pad[1] + plucks[1], ir[1])[:N],
])
mix = pad + plucks + ambience + wet * 0.58

# gentle low cut, harmonic warmth and smooth level
b_hp, a_hp = signal.butter(2, 28 / (SR / 2), btype='high')
mix = signal.lfilter(b_hp, a_hp, mix, axis=1)
mix = np.tanh(mix * 1.25) / np.tanh(1.25)
fade = np.ones(N)
fade *= np.minimum(1.0, t / 2.5)
fade *= np.minimum(1.0, np.maximum(0.0, (DUR - t) / 5.5))
mix *= fade

mix -= mix.mean(axis=1, keepdims=True)
peak = np.max(np.abs(mix))
mix *= 0.26 / max(peak, 1e-9)
wavfile.write('soundtrack.wav', SR, (mix.T * 32767).astype(np.int16))
print(f'wrote soundtrack.wav {DUR:.0f}s, peak {peak:.3f} -> 0.26')
