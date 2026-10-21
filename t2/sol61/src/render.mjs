import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const browser=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox','--use-angle=metal','--disable-background-timer-throttling','--disable-renderer-backgrounding','--disable-backgrounding-occluded-windows','--js-flags=--max-old-space-size=8192'],defaultViewport:{width:1920,height:1080,deviceScaleFactor:1}});
const page=await browser.newPage();
let errors=[];
page.on('pageerror',e=>{errors.push(e.message);console.log('PAGE ERROR',e.message)});
page.on('console',m=>{if(m.type()==='error')console.log('BROWSER',m.text().slice(0,240));});
await page.goto('http://127.0.0.1:18765/?capture',{timeout:120000,waitUntil:'domcontentloaded'});
await page.waitForFunction(()=>window.ready,{timeout:120000});
await page.evaluate(()=>document.fonts.ready);
await page.addScriptTag({url:'http://127.0.0.1:18765/src/compose.js',type:'module'});
await page.waitForFunction(()=>window.captureFrame);
async function settle(t,limit=10000){
 await page.evaluate(t=>setTime(t),t);
 const begin=Date.now();let stable=0;
 while(Date.now()-begin<limit){
  await sleep(100);
  const status=await page.evaluate(()=>{viewer.render();return sceneReady();});
  if(status.tiles&&status.buildings&&status.trees&&status.pending===0){if(++stable>=3)return true;}else stable=0;
 }
 console.log('Settlement limit at',t,await page.evaluate(()=>sceneReady()));return false;
}
const samples=[8,23,36,49,63,74];
for(let i=0;i<samples.length;i++){
 await settle(samples[i],20000);
 await page.screenshot({path:`previews/scene-${i+1}.jpg`,type:'jpeg',quality:95});
 await fs.writeFile(`previews/composed-${i+1}.jpg`,Buffer.from(await page.evaluate(()=>captureFrame()),'base64'));
 console.log('PREVIEW',i+1,'time',samples[i]);
}
if(process.argv.includes('--preview')){await browser.close();process.exit(errors.length?1:0);}
for(let t=0;t<=84;t+=2){await settle(t,4000);if(t%10===0)console.log('PRELOAD',t,'/ 84');}
await page.evaluate(()=>{viewer.useDefaultRenderLoop=false;});
const fps=24,total=84*fps;
const ff=spawn('ffmpeg',['-y','-hide_banner','-loglevel','warning','-f','image2pipe','-vcodec','mjpeg','-framerate',String(fps),'-i','pipe:0','-i','output/original-score.wav','-map','0:v:0','-map','1:a:0','-c:v','libx264','-preset','medium','-crf','18','-pix_fmt','yuv420p','-profile:v','high','-level','4.2','-r',String(fps),'-c:a','aac','-b:a','192k','-af','loudnorm=I=-18:TP=-1.5:LRA=10','-ar','48000','-movflags','+faststart','-t','84','output/geneva-aerial-3d-master.mp4'],{stdio:['pipe','inherit','inherit']});
const started=Date.now();const notSettled=[];
for(let i=0;i<total;i++){
 const t=i/fps;
 await page.evaluate(t=>{setTime(t);},t);
 const status=await page.evaluate(()=>sceneReady());
 if(!status.tiles||!status.buildings){const ok=await settle(t,5000);if(!ok)notSettled.push(i);}
 const jpg=Buffer.from(await page.evaluate(()=>captureFrame()),'base64');
 if(!ff.stdin.write(jpg))await once(ff.stdin,'drain');
 if(i%120===0)console.log(`RENDER ${i}/${total} (${Math.round(i/total*100)}%) · ${Math.round((Date.now()-started)/1000)} s elapsed`);
}
ff.stdin.end();
const [code]=await once(ff,'exit');
await fs.writeFile('output/render-report.json',JSON.stringify({frames:total,fps,width:1920,height:1080,duration:84,renderSeconds:(Date.now()-started)/1000,errors,notSettled},null,2));
await browser.close();
if(code!==0||errors.length)throw new Error('Render failed: '+JSON.stringify({code,errors}));
console.log('RENDER COMPLETE');
