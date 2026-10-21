import { chromium } from 'playwright';
import fs from 'fs';
import { createServer } from './serve.mjs';

const times = process.argv.slice(2).map(Number);
fs.mkdirSync('shots', { recursive: true });
const server = await createServer(8080);
const browser = await chromium.launch({
  headless: true,
  args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist', '--enable-webgl', '--disable-gpu-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
page.on('console', msg => {
  if (msg.type() === 'error') console.log('[console]', msg.type(), msg.text());
});
page.on('pageerror', err => console.log('[pageerror]', err.message));
await page.goto('http://127.0.0.1:8080/', { waitUntil: 'load', timeout: 60000 });
await page.waitForFunction(() => window.ready === true, null, { timeout: 240000 });
console.log('ready');
for (const t of times) {
  await page.evaluate((tt) => window.renderAt(tt), t);
  await page.waitForTimeout(120);
  const out = `shots/t${String(t).replace('.', '_')}.png`;
  await page.screenshot({ path: out });
  console.log('saved', out);
}
await browser.close();
await new Promise(r => server.close(r));
