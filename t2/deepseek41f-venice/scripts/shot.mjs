import { chromium } from 'playwright';
import fs from 'fs';
import { createServer } from './serve.mjs';

const t = Number(process.argv[2] ?? 0);
const out = process.argv[3] ?? `shots/t${t}.png`;
fs.mkdirSync('shots', { recursive: true });

const server = await createServer(8080);
const browser = await chromium.launch({
  headless: true,
  args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist', '--enable-webgl', '--disable-gpu-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
page.on('console', msg => {
  if (msg.type() === 'error' || msg.type() === 'warning') console.log('[console]', msg.type(), msg.text());
});
page.on('pageerror', err => console.log('[pageerror]', err.message));
await page.goto('http://127.0.0.1:8080/', { waitUntil: 'load', timeout: 60000 });
await page.waitForFunction(() => window.ready === true, null, { timeout: 240000 });
console.log('ready');
const info = await page.evaluate(() => {
  const gl = window.__renderer.getContext();
  const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  return {
    renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
    vendor: dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR),
  };
});
console.log(info);
await page.evaluate((tt) => window.renderAt(tt), t);
await page.waitForTimeout(250);
await page.screenshot({ path: out });
await browser.close();
await new Promise(r => server.close(r));
console.log('saved', out);
