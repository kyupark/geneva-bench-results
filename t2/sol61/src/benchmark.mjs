import puppeteer from 'puppeteer-core';
const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox','--use-angle=metal'],defaultViewport:{width:1920,height:1080}});
const p=await b.newPage();await p.goto('http://127.0.0.1:18765/?capture');await p.waitForFunction(()=>window.ready,{timeout:120000});await new Promise(r=>setTimeout(r,4000));
await p.evaluate(()=>{viewer.useDefaultRenderLoop=false;});
let start=Date.now();
for(let i=0;i<10;i++){await p.evaluate(t=>setTime(t),8+i/24);await p.screenshot({type:'jpeg',quality:94,optimizeForSpeed:true});}
console.log('Screenshot ms/frame',(Date.now()-start)/10);
start=Date.now();
for(let i=0;i<10;i++){const data=await p.evaluate(t=>{setTime(t);const out=document.createElement('canvas');out.width=1920;out.height=1080;const ctx=out.getContext('2d');ctx.drawImage(viewer.canvas,0,0);return out.toDataURL('image/jpeg',.94);},8+i/24);}
console.log('Canvas ms/frame',(Date.now()-start)/10);
await b.close();
