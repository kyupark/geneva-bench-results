import puppeteer from 'puppeteer-core';
const browser=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox','--use-angle=metal'],defaultViewport:{width:1920,height:1080}});
const page=await browser.newPage();
await page.goto('http://127.0.0.1:18765/?capture');await page.waitForFunction(()=>window.ready,{timeout:120000});
console.log(await page.evaluate(async()=>{
 const locations=[[6.1486,46.2011],[6.16605,46.20739],[6.14255,46.21015],[6.1403,46.2267],[6.14343,46.20095],[6.1456,46.1995]];
 const data=await Cesium.sampleTerrainMostDetailed(viewer.terrainProvider,locations.map(([x,y])=>Cesium.Cartographic.fromDegrees(x,y)));
 return data.map(p=>({lon:Cesium.Math.toDegrees(p.longitude),lat:Cesium.Math.toDegrees(p.latitude),height:p.height}));
}));
await browser.close();
