import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { createServer } from './serve.mjs';

const args = Object.fromEntries(process.argv.slice(2).map(a => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  return m ? [m[1], m[2] ?? 'true'] : [a, 'true'];
}));

const fps = Number(args.fps ?? 30);
const duration = Number(args.duration ?? 80);
const width = Number(args.width ?? 1920);
const height = Number(args.height ?? 1080);
const quality = Number(args.quality ?? 95);
const crf = Number(args.crf ?? 16);
const out = path.resolve(args.out ?? 'geneva_drone.mp4');
const framesDir = path.resolve(args.frames ?? 'frames');
const noEncode = args['no-encode'] === 'true';
const keepFrames = args.keep === 'true';
const port = Number(args.port ?? 8091);

if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir, { recursive: true });
for (const f of fs.readdirSync(framesDir)) {
  if (/^frame_\d+\.jpg$/.test(f)) fs.unlinkSync(path.join(framesDir, f));
}

const total = Math.round(duration * fps);
const started = performance.now();
const server = await createServer(port);
const browser = await chromium.launch({
  headless: true,
  args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist', '--enable-webgl', '--disable-gpu-sandbox'],
});
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
page.on('console', msg => { if (msg.type() === 'error') console.log('[console]', msg.text()); });
page.on('pageerror', err => console.log('[pageerror]', err.message));
await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'load', timeout: 60000 });
await page.waitForFunction(() => window.ready === true, null, { timeout: 240000 });
await page.addStyleTag({ content: '* { transition: none !important; animation: none !important; }' });
console.log(`ready: ${total} frames @ ${fps}fps, ${width}x${height}`);

for (let i = 0; i < total; i++) {
  const t = i / fps;
  await page.evaluate(tt => window.renderAt(tt), t);
  await page.screenshot({
    path: path.join(framesDir, `frame_${String(i).padStart(5, '0')}.jpg`),
    type: 'jpeg',
    quality,
  });
  if (i === 0 || (i + 1) % 30 === 0 || i === total - 1) {
    const elapsed = (performance.now() - started) / 1000;
    const rate = (i + 1) / elapsed;
    const eta = (total - i - 1) / Math.max(rate, 0.01);
    console.log(`frame ${i + 1}/${total}  ${rate.toFixed(2)} fps  eta ${Math.round(eta)}s`);
  }
}

await browser.close();
await new Promise(r => server.close(r));

if (noEncode) {
  console.log(`frames written to ${framesDir}`);
  process.exit(0);
}

const silent = args.silent ? path.resolve(args.silent) : out.replace(/\.mp4$/i, '_silent.mp4');
const audio = args.audio ? path.resolve(args.audio) : path.resolve('soundtrack.wav');
const noAudio = args['no-audio'] === 'true';

const ff = spawn('ffmpeg', [
  '-y', '-framerate', String(fps), '-i', path.join(framesDir, 'frame_%05d.jpg'),
  '-c:v', 'libx264', '-preset', 'slow', '-crf', String(crf),
  '-pix_fmt', 'yuv420p', '-movflags', '+faststart', silent,
], { stdio: ['ignore', 'inherit', 'inherit'] });
await new Promise((resolve, reject) => {
  ff.on('close', code => code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`)));
});
console.log(`silent video written to ${silent}`);

if (!noAudio && fs.existsSync(audio)) {
  const mux = spawn('ffmpeg', [
    '-y', '-i', silent, '-i', audio,
    '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-ar', '48000',
    '-shortest', '-movflags', '+faststart',
    '-metadata', 'title=Genève — Vue aérienne 3D', out,
  ], { stdio: ['ignore', 'inherit', 'inherit'] });
  await new Promise((resolve, reject) => {
    mux.on('close', code => code === 0 ? resolve() : reject(new Error(`ffmpeg mux exited ${code}`)));
  });
  fs.rmSync(silent, { force: true });
  console.log(`video with audio written to ${out}`);
} else {
  if (silent !== out) fs.renameSync(silent, out);
  console.log(`video written to ${out} (no audio)`);
}

if (!keepFrames) fs.rmSync(framesDir, { recursive: true, force: true });
