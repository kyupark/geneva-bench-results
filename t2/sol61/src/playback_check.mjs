import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';
const browser=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox'],defaultViewport:{width:1440,height:1000}});
try{
 const p=await browser.newPage();
 await p.goto('http://127.0.0.1:18765/output/player.html',{waitUntil:'domcontentloaded',timeout:60000});
 await p.waitForFunction(()=>document.querySelector('video').readyState>=2,{timeout:60000});
 console.log('VIDEO READY');
 await p.evaluate(async()=>{const v=document.querySelector('video');v.muted=true;await Promise.race([v.play(),new Promise((_,reject)=>setTimeout(()=>reject(new Error('Playback timeout')),20000))]);});
 await new Promise(r=>setTimeout(r,1200));
 const first=await p.evaluate(()=>{const v=document.querySelector('video');return {duration:v.duration,width:v.videoWidth,height:v.videoHeight,currentTime:v.currentTime,error:v.error?.message??null};});
 if(first.currentTime<.3||first.width!==1920||first.height!==1080||first.error)throw new Error(JSON.stringify(first));
 console.log('PLAYING',first);
 await p.evaluate(()=>{document.querySelector('video').currentTime=49;});
 await p.waitForFunction(()=>{const v=document.querySelector('video');return !v.seeking&&v.currentTime>=49;},{timeout:60000});
 await new Promise(r=>setTimeout(r,500));
 await p.screenshot({path:'previews/player-playback.jpg',type:'jpeg',quality:92});
 const report={passed:true,initialPlayback:first,seekTime:await p.evaluate(()=>document.querySelector('video').currentTime)};
 await fs.writeFile('output/playback-check.json',JSON.stringify(report,null,2));console.log(report);
}finally{await browser.close();}
