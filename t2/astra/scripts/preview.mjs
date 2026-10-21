import {chromium} from 'playwright';
import fs from 'node:fs/promises';
await fs.mkdir('previews',{recursive:true});
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--use-angle=metal','--disable-background-timer-throttling','--disable-renderer-backgrounding']});
const page=await browser.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1});
page.on('pageerror',e=>console.error('PAGE',e));page.on('console',m=>{if(m.type()==='error')console.error(m.text())});
await page.goto('http://127.0.0.1:8765/studio.html?capture=1');await page.waitForFunction(()=>window.ready,{},{timeout:120000});
console.log(await page.evaluate(()=>({gpu:film.renderer.getContext().getParameter(film.renderer.getContext().RENDERER),encoder:typeof VideoEncoder})));
for(const t of (process.argv.length>2?process.argv.slice(2).map(Number):[4,11,24,35,52,70,89,97])){const r=await page.evaluate(t=>{const info=film.renderFrame(t);return {info,png:film.canvas.toDataURL('image/png').split(',')[1]}},t);await fs.writeFile(`previews/frame-${t}.png`,Buffer.from(r.png,'base64'));console.log(r.info);}
await browser.close();
