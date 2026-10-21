import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { spawn } from "node:child_process";

const root = decodeURIComponent(path.dirname(new URL(import.meta.url).pathname));
const args = process.argv.slice(2);
const full = args.includes("--full");
const fromArg = args.indexOf("--from");
const from = fromArg >= 0 ? Number(args[fromArg + 1]) : 0;
const timeArg = args.indexOf("--time");
const oneTime = timeArg >= 0 ? Number(args[timeArg + 1]) : null;
const fps = 24;
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function serve(dir) {
  const types = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
  };
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://127.0.0.1");
    const rel = decodeURIComponent(url.pathname);
    const file = path.normalize(path.join(dir, rel === "/" ? "/index.html" : rel));
    if (!file.startsWith(dir)) {
      res.writeHead(403);
      res.end();
      return;
    }
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("missing");
        return;
      }
      res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
      res.end(data);
    });
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

function ffmpeg(ffargs) {
  return new Promise((resolve, reject) => {
    const child = spawn("ffmpeg", ffargs, { stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    child.stderr.on("data", (buf) => {
      err += buf.toString();
      if (err.length > 8000) err = err.slice(-8000);
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg ${code}: ${err.slice(-1200)}`));
    });
  });
}

function synthWav(duration, file) {
  const sr = 44100;
  const n = Math.floor(duration * sr);
  const L = new Float32Array(n);
  const R = new Float32Array(n);
  const sections = [
    { t: 0, root: 110 },
    { t: 19, root: 130.81 },
    { t: 38.5, root: 110 },
    { t: 56, root: 87.31 },
    { t: 72, root: 130.81 },
    { t: 85, root: 110 },
  ];
  const degrees = [0, 7, 3, 12, 7, 5, 3, 10];
  let windL = 0;
  let windR = 0;
  const rootAt = (t) => {
    let root = sections[0].root;
    for (const s of sections) if (t >= s.t) root = s.root;
    return root;
  };
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    const root = rootAt(t);
    const fade = Math.min(1, t / 2.4) * Math.min(1, Math.max(0, (duration - t) / 3.4));
    const third = root < 100 ? 1.25 : root > 120 ? 1.2599 : 1.1892;
    const pad =
      Math.sin(2 * Math.PI * root * t) * 0.15 +
      Math.sin(2 * Math.PI * root * 1.004 * t) * 0.09 +
      Math.sin(2 * Math.PI * root * 1.5 * t) * 0.08 +
      Math.sin(2 * Math.PI * root * third * t) * 0.05 +
      Math.sin(2 * Math.PI * root * 2 * t) * 0.028;
    const lfo = 0.84 + 0.16 * Math.sin(2 * Math.PI * 0.05 * t);
    const step = 1.8;
    const k = Math.floor(t / step);
    const lt = t - k * step;
    const freq = root * 2 ** (degrees[k % degrees.length] / 12);
    const pluck = Math.sin(2 * Math.PI * freq * lt) * Math.exp(-lt * 2.5) * 0.11;
    windL += (Math.random() * 2 - 1 - windL) * 0.007;
    windR += (Math.random() * 2 - 1 - windR) * 0.007;
    let water = 0;
    if (t > 19 && t < 40) water = (Math.random() * 2 - 1) * 0.035 * Math.sin((Math.PI * (t - 19)) / 21);
    const tone = (pad * lfo + pluck) * fade;
    L[i] = tone + windL * 0.5 * fade + water;
    R[i] = tone * 0.94 + windR * 0.5 * fade + water * 0.75;
  }
  let peak = 1e-6;
  for (let i = 0; i < n; i++) peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i]));
  const gain = 0.82 / peak;
  const buf = Buffer.alloc(44 + n * 4);
  buf.write("RIFF", 0);
  buf.writeUInt32LE(36 + n * 4, 4);
  buf.write("WAVE", 8);
  buf.write("fmt ", 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);
  buf.writeUInt16LE(2, 22);
  buf.writeUInt32LE(sr, 24);
  buf.writeUInt32LE(sr * 4, 28);
  buf.writeUInt16LE(4, 32);
  buf.writeUInt16LE(16, 34);
  buf.write("data", 36);
  buf.writeUInt32LE(n * 4, 40);
  for (let i = 0; i < n; i++) {
    buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, L[i] * gain)) * 32767), 44 + i * 4);
    buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, R[i] * gain)) * 32767), 46 + i * 4);
  }
  fs.writeFileSync(file, buf);
}

const server = await serve(root);
const port = server.address().port;
const chromeArgs = [
  "--headless=new",
  "--use-angle=metal",
  "--enable-gpu",
  "--ignore-gpu-blocklist",
  "--disable-gpu-sandbox",
  "--no-sandbox",
  "--disable-dev-shm-usage",
  "--hide-scrollbars",
  "--force-color-profile=srgb",
  "--window-size=1920,1080",
];
function launchBrowser() {
  return puppeteer.launch({
    executablePath: chrome,
    headless: true,
    args: chromeArgs,
    defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
  });
}
let browser = await launchBrowser();

try {
  const page = await browser.newPage();
  page.on("console", (msg) => {
    const text = msg.text();
    if (msg.type() === "error" || text.includes("geneva") || text.includes("ramp") || text.includes("Error")) {
      console.log("PAGE", msg.type(), text);
    }
  });
  page.on("pageerror", (err) => console.log("PAGEERROR", err.message));
  const shot = async (url, file) => {
    await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });
    await page.waitForFunction(() => window.__BOOT_ERROR || (window.__GENEVA__ && window.__GENEVA__.ready), { timeout: 60000 });
    const boot = await page.evaluate(() => window.__BOOT_ERROR || "");
    if (boot) throw new Error(boot);
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    await page.screenshot({ path: file, type: "jpeg", quality: 86 });
  };

  if (oneTime != null) {
    const verify = path.join(root, "verify");
    fs.mkdirSync(verify, { recursive: true });
    const file = path.join(verify, `check-${String(oneTime).padStart(2, "0")}.jpg`);
    await shot(`http://127.0.0.1:${port}/?t=${oneTime}`, file);
    console.log("CHECK", file);
  } else if (!full) {
    const stills = path.join(root, "stills");
    fs.rmSync(stills, { recursive: true, force: true });
    fs.mkdirSync(stills, { recursive: true });
    await shot(`http://127.0.0.1:${port}/?top=1&debug=1`, path.join(stills, "top.jpg"));
    const times = [2, 12, 22, 32, 48, 64, 80, 90];
    for (const t of times) {
      const file = path.join(stills, `t${String(t).padStart(2, "0")}.jpg`);
      await shot(`http://127.0.0.1:${port}/?debug=1&t=${t}`, file);
      console.log("still", t);
    }
    const audit = await page.evaluate(() => window.__GENEVA__.audit());
    fs.writeFileSync(path.join(stills, "audit.json"), JSON.stringify(audit, null, 2));
    console.log(JSON.stringify(audit, null, 2));
    const seq = path.join(stills, "seq");
    fs.mkdirSync(seq, { recursive: true });
    const names = fs.readdirSync(stills).filter((name) => /^t\d+\.jpg$/.test(name)).sort();
    names.forEach((name, index) => fs.copyFileSync(path.join(stills, name), path.join(seq, `${String(index).padStart(2, "0")}.jpg`)));
    await ffmpeg([
      "-y",
      "-framerate", "1",
      "-i", path.join(seq, "%02d.jpg"),
      "-frames:v", "1",
      "-vf", `tile=${Math.min(4, names.length)}x${Math.ceil(names.length / 4)}:padding=4:color=black`,
      path.join(stills, "contact.jpg"),
    ]);
  } else {
    await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle0", timeout: 120000 });
    await page.waitForFunction(() => window.__BOOT_ERROR || (window.__GENEVA__ && window.__GENEVA__.ready), { timeout: 60000 });
    const boot = await page.evaluate(() => window.__BOOT_ERROR || "");
    if (boot) throw new Error(boot);
    const duration = await page.evaluate(() => window.__GENEVA__.duration);
    const framesDir = path.join(root, "frames");
    fs.mkdirSync(framesDir, { recursive: true });
    const progressLog = path.join(root, "progress.log");
    if (from === 0) fs.writeFileSync(progressLog, "");
    const note = (line) => {
      fs.appendFileSync(progressLog, line + "\n");
      console.log(line);
    };
    const total = Math.round(duration * fps);
    let livePage = page;
    const attach = (next) => {
      next.on("console", (msg) => {
        const text = msg.text();
        if (msg.type() === "error" || text.includes("geneva") || text.includes("Error")) {
          console.log("PAGE", msg.type(), text);
        }
      });
      next.on("pageerror", (err) => console.log("PAGEERROR", err.message));
    };
    const relaunch = async () => {
      await Promise.race([
        browser.close().catch(() => {}),
        new Promise((resolve) => setTimeout(resolve, 4000)),
      ]);
      browser = await launchBrowser();
      livePage = await browser.newPage();
      attach(livePage);
      await livePage.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle0", timeout: 120000 });
      await livePage.waitForFunction(() => window.__BOOT_ERROR || (window.__GENEVA__ && window.__GENEVA__.ready), { timeout: 60000 });
      const bootErr = await livePage.evaluate(() => window.__BOOT_ERROR || "");
      if (bootErr) throw new Error(bootErr);
    };
    const crashed = (err) => /Target closed|Session closed|Protocol error|Browser closed|Connection closed/.test(String(err && err.message ? err.message : err));
    const t0 = Date.now();
    for (let i = from; i < total; i++) {
      if (i > from && (i - from) % 450 === 0) {
        note(`relaunch ${i}`);
        await relaunch();
      }
      const t = i / fps;
      const file = path.join(framesDir, `${String(i).padStart(5, "0")}.jpg`);
      try {
        await livePage.evaluate((time) => window.__GENEVA__.seek(time), t);
        await livePage.screenshot({ path: file, type: "jpeg", quality: 84 });
      } catch (err) {
        if (!crashed(err)) throw err;
        note(`retry ${i} after browser closed`);
        await relaunch();
        i -= 1;
        continue;
      }
      if (i === from || i % 48 === 0 || i === total - 1) {
        const elapsed = (Date.now() - t0) / 1000;
        const done = i - from + 1;
        const rate = done / Math.max(elapsed, 0.001);
        const eta = (total - i - 1) / rate;
        note(`frame ${i}/${total - 1}  ${rate.toFixed(2)} fps  eta ${eta.toFixed(0)}s`);
      }
    }
    for (let i = 0; i < total; i++) {
      if (!fs.existsSync(path.join(framesDir, `${String(i).padStart(5, "0")}.jpg`))) {
        throw new Error(`missing frame ${i}`);
      }
    }
    const wav = path.join(root, "score.wav");
    synthWav(duration, wav);
    const out = path.join(root, "..", "geneva-drone.mp4");
    await ffmpeg([
      "-y",
      "-framerate", String(fps),
      "-start_number", "0",
      "-i", path.join(framesDir, "%05d.jpg"),
      "-i", wav,
      "-c:v", "libx264",
      "-pix_fmt", "yuv420p",
      "-crf", "17",
      "-preset", "medium",
      "-c:a", "aac",
      "-b:a", "192k",
      "-shortest",
      "-movflags", "+faststart",
      "-metadata", "title=제네바 드론 비행",
      "-metadata", "comment=올드타운, 호숫가, 중앙역, UN, 플라스 드 뇌브, 바스티옹",
      out,
    ]);
    note(`WROTE ${out}`);
  }
} finally {
  await Promise.race([
    browser.close().catch(() => {}),
    new Promise((resolve) => setTimeout(resolve, 4000)),
  ]);
  server.close();
}
