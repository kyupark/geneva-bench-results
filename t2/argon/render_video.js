const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { chromium } = require('playwright-core');

const ROOT_DIR = __dirname;
const OUTPUT_MP4 = path.join(ROOT_DIR, 'geneva_drone_tour.mp4');
const PREVIEW_DIR = '/Users/qm4/bench-geneva/max-t2/argon/tmp/opencode/previews';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg'
};

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const cleanUrl = req.url.split('?')[0];
      const relPath = cleanUrl === '/' ? '/index.html' : cleanUrl;
      const filePath = path.join(ROOT_DIR, relPath);
      if (!filePath.startsWith(ROOT_DIR) || !fs.existsSync(filePath)) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, port: server.address().port });
    });
  });
}

// Generate a stereo 44.1kHz WAV file with warm cinematic ambient pads, gentle Lake Geneva water breeze, and cathedral/aerial chimes
function generateCinematicAudioWav(wavPath, durationSec = 30) {
  const sampleRate = 44100;
  const numSamples = Math.floor(sampleRate * durationSec);
  const numChannels = 2;
  const bytesPerSample = 2;
  const dataSize = numSamples * numChannels * bytesPerSample;
  const buffer = Buffer.alloc(44 + dataSize);

  // WAV Header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20); // PCM
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * numChannels * bytesPerSample, 28);
  buffer.writeUInt16LE(numChannels * bytesPerSample, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  // 6 Chord progressions matching the 6 Geneva chapters (5s each)
  const chords = [
    [146.83, 220.00, 293.66, 369.99, 440.00], // 1. Old Town (D major warm cathedral)
    [130.81, 196.00, 246.94, 293.66, 392.00], // 2. Lakeside & Jet d'Eau (C maj9 shimmering)
    [110.00, 164.81, 220.00, 261.63, 329.63], // 3. Central Station Cornavin (A min7 motion)
    [174.61, 220.00, 261.63, 349.23, 440.00], // 4. UN Palais des Nations (F maj7 noble)
    [196.00, 246.94, 293.66, 392.00, 493.88], // 5. Place de Neuve (G6 classical opera)
    [146.83, 220.00, 293.66, 369.99, 587.33]  // 6. Bastions & Grand Finale (D maj soaring)
  ];

  let noiseL = 0;
  let noiseR = 0;

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const chapterIdx = Math.min(5, Math.floor(t / 5.0));
    const nextIdx = Math.min(5, chapterIdx + 1);
    const localT = (t % 5.0) / 5.0;
    // Smooth crossfade in the last 1.2s of each 5s chapter
    const crossfade = localT > 0.76 ? (localT - 0.76) / 0.24 : 0.0;
    const smoothFade = crossfade * crossfade * (3 - 2 * crossfade);

    let sigL = 0;
    let sigR = 0;

    const c1 = chords[chapterIdx];
    const c2 = chords[nextIdx];

    for (let n = 0; n < c1.length; n++) {
      const f1 = c1[n];
      const f2 = c2[n];
      const modL = Math.sin(2 * Math.PI * (0.18 + n * 0.05) * t) * 0.25 + 0.75;
      const modR = Math.cos(2 * Math.PI * (0.21 + n * 0.04) * t) * 0.25 + 0.75;

      const wave1L = Math.sin(2 * Math.PI * f1 * t) + 0.3 * Math.sin(2 * Math.PI * f1 * 2 * t);
      const wave1R = Math.sin(2 * Math.PI * (f1 * 1.0015) * t) + 0.3 * Math.sin(2 * Math.PI * f1 * 2 * t);
      const wave2L = Math.sin(2 * Math.PI * f2 * t) + 0.3 * Math.sin(2 * Math.PI * f2 * 2 * t);
      const wave2R = Math.sin(2 * Math.PI * (f2 * 1.0015) * t) + 0.3 * Math.sin(2 * Math.PI * f2 * 2 * t);

      const wL = wave1L * (1 - smoothFade) + wave2L * smoothFade;
      const wR = wave1R * (1 - smoothFade) + wave2R * smoothFade;

      sigL += wL * modL * (0.11 / (1 + n * 0.25));
      sigR += wR * modR * (0.11 / (1 + n * 0.25));
    }

    // Subtle chime harmonic at the start of each landmark chapter
    const chimeTime = t % 5.0;
    if (chimeTime < 2.8) {
      const env = Math.exp(-chimeTime * 1.8) * Math.min(1, chimeTime * 25);
      const chimeFreq = c1[4] * 2;
      sigL += Math.sin(2 * Math.PI * chimeFreq * t) * env * 0.06;
      sigR += Math.sin(2 * Math.PI * (chimeFreq * 1.002) * t) * env * 0.06;
    }

    // Gentle filtered breeze / water mist ambience (louder during Lakeside Jet d'Eau 5s-10s)
    noiseL = noiseL * 0.96 + (Math.random() * 2 - 1) * 0.04;
    noiseR = noiseR * 0.96 + (Math.random() * 2 - 1) * 0.04;
    const waterBoost = (t > 4.5 && t < 10.5) ? 0.065 : 0.022;
    sigL += noiseL * waterBoost;
    sigR += noiseR * waterBoost;

    // Master fade-in (first 1.0s) and fade-out (last 1.8s)
    let masterEnv = 1.0;
    if (t < 1.0) masterEnv = t / 1.0;
    if (t > durationSec - 1.8) masterEnv = (durationSec - t) / 1.8;

    const outL = Math.max(-0.95, Math.min(0.95, sigL * masterEnv));
    const outR = Math.max(-0.95, Math.min(0.95, sigR * masterEnv));

    const offset = 44 + i * 4;
    buffer.writeInt16LE(Math.floor(outL * 32767), offset);
    buffer.writeInt16LE(Math.floor(outR * 32767), offset + 2);
  }

  fs.writeFileSync(wavPath, buffer);
}

async function main() {
  const isPreview = process.argv.includes('--preview');
  const { server, port } = await startStaticServer();
  const url = `http://127.0.0.1:${port}/index.html?capture=1`;

  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: [
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--use-angle=metal',
      '--enable-gpu-rasterization',
      '--no-sandbox'
    ]
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();

  page.on('pageerror', err => console.error('Page error:', err));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.sceneReady === true);

  if (isPreview) {
    fs.mkdirSync(PREVIEW_DIR, { recursive: true });
    const previewTimes = [
      { name: '01_oldtown.jpg', t: 1.8 },
      { name: '02_lakeside.jpg', t: 7.4 },
      { name: '03_cornavin.jpg', t: 12.2 },
      { name: '04_un.jpg', t: 17.6 },
      { name: '05_placedeneuve.jpg', t: 22.8 },
      { name: '06_bastions.jpg', t: 27.6 },
      { name: '07_finale.jpg', t: 29.8 }
    ];
    for (const item of previewTimes) {
      await page.evaluate((t) => window.renderAtTime(t), item.t);
      const outPath = path.join(PREVIEW_DIR, item.name);
      await page.screenshot({ path: outPath, type: 'jpeg', quality: 92 });
      console.log(`Saved preview: ${outPath}`);
    }
    await browser.close();
    server.close();
    return;
  }

  // Full 30-second 30fps (900 frames) 1080p MP4 video render
  const fps = 30;
  const duration = 30;
  const totalFrames = fps * duration;

  const wavPath = '/Users/qm4/bench-geneva/max-t2/argon/tmp/opencode/geneva_audio.wav';
  fs.mkdirSync(path.dirname(wavPath), { recursive: true });
  console.log('Generating stereo cinematic soundtrack...');
  generateCinematicAudioWav(wavPath, duration);

  console.log(`Rendering ${totalFrames} frames at 1920x1080 (${fps} fps)...`);
  const ffmpeg = spawn('ffmpeg', [
    '-y',
    '-f', 'image2pipe',
    '-vcodec', 'mjpeg',
    '-framerate', String(fps),
    '-i', '-',
    '-i', wavPath,
    '-c:v', 'libx264',
    '-profile:v', 'high',
    '-level', '4.1',
    '-preset', 'medium',
    '-crf', '18',
    '-vf', 'format=yuv420p',
    '-pix_fmt', 'yuv420p',
    '-c:a', 'aac',
    '-b:a', '192k',
    '-shortest',
    '-movflags', '+faststart',
    OUTPUT_MP4
  ]);

  ffmpeg.stderr.on('data', () => {});

  const startTime = Date.now();
  for (let frame = 0; frame < totalFrames; frame++) {
    const t = frame / fps;
    await page.evaluate((timeVal) => window.renderAtTime(timeVal), t);
    const buf = await page.screenshot({ type: 'jpeg', quality: 94 });
    const canWrite = ffmpeg.stdin.write(buf);
    if (!canWrite) {
      await new Promise(res => ffmpeg.stdin.once('drain', res));
    }
    if ((frame + 1) % 90 === 0 || frame === totalFrames - 1) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`Progress: ${frame + 1}/${totalFrames} frames (${Math.round(((frame + 1) / totalFrames) * 100)}%) - ${elapsed}s`);
    }
  }

  ffmpeg.stdin.end();
  await new Promise((resolve, reject) => {
    ffmpeg.on('close', code => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`))));
  });

  await browser.close();
  server.close();
  console.log(`Successfully created 3D drone video: ${OUTPUT_MP4}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
