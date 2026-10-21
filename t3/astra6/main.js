import * as THREE from './vendor/three.module.js';
import {buildWorld} from './world.js';
import {Game,AudioSystem} from './game.js';
import {UI} from './ui.js';

const settings={sound:true,quality:matchMedia('(pointer: coarse)').matches?'low':'high',difficulty:'normal'};
try{const saved=JSON.parse(localStorage.getItem('geneva-royale-settings')||'null');if(saved){if(typeof saved.sound==='boolean')settings.sound=saved.sound;if(['low','high'].includes(saved.quality))settings.quality=saved.quality;if(['normal','easy','hard'].includes(saved.difficulty))settings.difficulty=saved.difficulty;}}catch{}
const container=document.getElementById('world');
try {
  const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
  renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio,settings.quality==='high'?1.7:1));
  renderer.shadowMap.enabled=settings.quality==='high';renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  // The city is static: render its shadow map once instead of redrawing it every frame.
  renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
  renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','Game view. WASD to move, mouse to aim, click to fire. Press Escape to pause.');container.appendChild(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-170,170,110,-110,.1,1800);
  const world=buildWorld(scene),audio=new AudioSystem(),ui=new UI(settings,audio),game=new Game(scene,camera,renderer,ui,settings,audio);ui.attach(game);
  game.updateCamera(1,0);
  let previous=performance.now(),time=0;
  renderer.setAnimationLoop(now=>{
    const dt=Math.min((now-previous)/1000,.25);previous=now;time+=dt;
    world.update(time);
    // Substeps preserve match timing and collision accuracy on slower devices.
    let remaining=dt;
    while(remaining>0){const step=Math.min(remaining,.04);game.update(step,time);remaining-=step;}
    world.updateCutaways(game.mode==='lobby'?null:game.player,camera,dt);
    renderer.render(scene,camera);
  });
  addEventListener('resize',()=>{renderer.setSize(innerWidth,innerHeight);game.updateCamera(.1,time);});
  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();if(game.mode==='playing')game.pause();ui.toast('GRAPHICS INTERRUPTED — REFRESH TO RESTORE THE CITY');});
  requestAnimationFrame(()=>{document.getElementById('loading').style.opacity=0;setTimeout(()=>document.getElementById('loading').hidden=true,550);});
  // Explicit QA mode exposes simulation state only when requested by the local test runner.
  if(new URLSearchParams(location.search).has('qa'))window.__GENEVA__={game,scene,camera,renderer,ui,world,settings};
} catch(error) {
  console.error('Geneva Royale could not start:',error);
  const loading=document.getElementById('loading');loading.replaceChildren();
  const title=document.createElement('h2');title.textContent='THE CITY COULDN’T LOAD';
  const text=document.createElement('p');text.textContent='Enable WebGL / hardware acceleration in your browser, then reload.';
  const button=document.createElement('button');button.className='deploy-button';button.textContent='TRY AGAIN';button.onclick=()=>location.reload();
  loading.append(title,text,button);
}
