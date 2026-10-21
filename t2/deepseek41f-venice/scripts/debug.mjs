import { chromium } from 'playwright';
import fs from 'fs';
import { createServer } from './serve.mjs';

fs.mkdirSync('shots', { recursive: true });
const server = await createServer(8080);
const browser = await chromium.launch({
  headless: true,
  args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist', '--enable-webgl', '--disable-gpu-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('pageerror', e => console.log('[pageerror]', e.message));
await page.goto('http://127.0.0.1:8080/', { waitUntil: 'load' });
await page.waitForFunction(() => window.ready === true, null, { timeout: 240000 });
const mode = process.argv[2] || 'hide-water';
await page.evaluate((mode) => {
  const scene = window.__scene;
  if (mode === 'hide-water') {
    scene.traverse(o => { if (o.material === window.__waterMat) o.visible = false; });
  } else if (mode === 'only-water') {
    scene.traverse(o => {
      if (o.isMesh || o.isPoints || o.isSprite || o.isInstancedMesh) {
        o.visible = (o.material === window.__waterMat);
      }
    });
  } else if (mode === 'hide-water-jet') {
    scene.traverse(o => {
      if (o.material === window.__waterMat) o.visible = false;
      if (o.geometry && o.geometry.type === 'CylinderGeometry' && o.material && o.material.type === 'ShaderMaterial') o.visible = false;
    });
  }
  window.renderAt(0);
}, mode);
await page.waitForTimeout(200);
await page.screenshot({ path: `shots/debug-${mode}.png` });
console.log('saved', mode);
await browser.close();
await new Promise(r => server.close(r));
