import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
const total=Number(process.argv[2]||3000),fps=30;
await fs.mkdir('output',{recursive:true});
const filename=total===3000?'output/geneva-flight.h264':'output/encoding-check.h264';
const file=await fs.open(filename,'w');
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--use-angle=metal','--disable-background-timer-throttling','--disable-renderer-backgrounding','--disable-backgrounding-occluded-windows']});
const page=await browser.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1});
page.on('pageerror',e=>console.error(e));
page.on('console',m=>{if(m.type()==='error')console.error(m.text())});
await page.exposeFunction('saveVideoChunk',async base64=>{await file.write(Buffer.from(base64,'base64'));});
const start=Date.now();await page.exposeFunction('reportProgress',(frame)=>console.log(JSON.stringify({frame,total,seconds:Math.round((Date.now()-start)/1000),percent:Math.round(frame/total*100)})));
try{
 await page.goto('http://127.0.0.1:8765/studio.html?capture=1');await page.waitForFunction(()=>window.ready,{},{timeout:120000});
 const info=await page.evaluate(async({total,fps})=>{
   const config={codec:'avc1.640028',width:1920,height:1080,bitrate:16000000,framerate:fps,hardwareAcceleration:'prefer-hardware',latencyMode:'realtime',avc:{format:'annexb'}};
   const support=await VideoEncoder.isConfigSupported(config);if(!support.supported)config.hardwareAcceleration='no-preference';
   let chunks=[],failure;
   const encoder=new VideoEncoder({output:chunk=>{const b=new Uint8Array(chunk.byteLength);chunk.copyTo(b);chunks.push(b);},error:e=>failure=e.message});
   encoder.configure(config);
   async function drain(){await encoder.flush();if(failure)throw Error(failure);let size=chunks.reduce((n,c)=>n+c.length,0),combined=new Uint8Array(size),offset=0;for(const c of chunks){combined.set(c,offset);offset+=c.length;}chunks=[];let str='';for(let i=0;i<combined.length;i+=32768)str+=String.fromCharCode(...combined.subarray(i,i+32768));await window.saveVideoChunk(btoa(str));}
   for(let i=0;i<total;i++){
     film.renderFrame(i/fps);
     const frame=new VideoFrame(film.canvas,{timestamp:Math.round(i*1000000/fps),duration:Math.round(1000000/fps)});
     encoder.encode(frame,{keyFrame:i%60===0});frame.close();
     if(encoder.encodeQueueSize>6)await new Promise(resolve=>encoder.addEventListener('dequeue',resolve,{once:true}));
     if(failure)throw Error(failure);
     if((i+1)%150===0){await drain();await window.reportProgress(i+1);}
   }
   await drain();encoder.close();return {frames:total,width:1920,height:1080,fps,hardwareSupported:support.supported,chapters:film.chapters};
 },{total,fps});
 await fs.writeFile(filename.replace('.h264','.json'),JSON.stringify(info,null,2));console.log('Complete',info.frames,'frames in',Math.round((Date.now()-start)/1000),'s');
}finally{await file.close();await browser.close();}
