import {DISTRICTS, LAND, buildings, treePositions} from './world.js';
import {WEAPONS, formatTime} from './game.js';
const $=id=>document.getElementById(id);
const show=(id,on=true)=>$(id).hidden=!on;

export class UI {
  constructor(settings,audio) {
    this.settings=settings;this.audio=audio;this.game=null;this.lastMapDraw=0;this.modalHistory=[];this.toastTimeout=null;
    this.mini=$('minimap').getContext('2d');this.map=$('tactical-map').getContext('2d');
    this.baseMap=document.createElement('canvas');this.baseMap.width=700;this.baseMap.height=650;this.drawBase(this.baseMap.getContext('2d'));
    this.touch=matchMedia('(pointer: coarse)').matches;
    if(this.touch)document.querySelector('.lobby-footer>span:nth-child(2)').textContent='LEFT STICK MOVE  ·  RIGHT STICK AIM & FIRE';
    this.bindUI();this.syncSettings();
  }
  attach(game){this.game=game;}
  bindUI(){
    $('deploy').onclick=()=>this.game.start();
    document.querySelectorAll('[data-district]').forEach(b=>b.onclick=()=>{this.game.selectDistrict(b.dataset.district);this.audio.tone(500,.08,'sine',.03,650);});
    $('nav-play').onclick=()=>{this.closeAll();};
    $('nav-guide').onclick=()=>this.openModal('guide-modal');
    $('nav-settings').onclick=()=>this.openModal('settings-modal');
    $('home').onclick=()=>this.game.prepareLobby();
    $('sound-toggle').onclick=()=>{this.settings.sound=!this.settings.sound;this.syncSettings();this.saveSettings();};
    $('setting-sound').onchange=e=>{this.settings.sound=e.target.checked;this.syncSettings();this.saveSettings();};
    $('setting-quality').onchange=e=>{this.settings.quality=e.target.value;this.applyQuality();this.saveSettings();};
    $('setting-difficulty').onchange=e=>{this.settings.difficulty=e.target.value;this.saveSettings();};
    $('pause-btn').onclick=()=>this.game.pause();
    $('resume').onclick=()=>this.game.pause();
    $('quit').onclick=()=>this.game.prepareLobby();
    $('pause-guide').onclick=()=>this.openModal('guide-modal');
    $('play-again').onclick=()=>this.game.start();
    $('back-lobby').onclick=()=>this.game.prepareLobby();
    $('minimap-button').onclick=()=>this.toggleMap();
    $('slot-primary').onclick=()=>this.game.switchWeapon(1);
    $('slot-secondary').onclick=()=>this.game.switchWeapon(2);
    document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>this.closeModal(b.closest('.modal-backdrop').id));
    document.querySelectorAll('.modal-backdrop').forEach(b=>b.addEventListener('pointerdown',e=>{if(e.target===b&&!['result-modal','pause-modal'].includes(b.id))this.closeModal(b.id);}));
    // Keep keyboard focus within the topmost visible dialog.
    document.addEventListener('keydown',e=>{
      if(e.code!=='Tab')return;
      const dialogs=[...document.querySelectorAll('.modal-backdrop:not([hidden])')];
      if(!dialogs.length)return;
      const modal=this.modalHistory.length?$(this.modalHistory.at(-1).id):dialogs.at(-1);
      const focusables=[...modal.querySelectorAll('button,select,input,[tabindex="0"]')];
      if(!focusables.length)return;
      const first=focusables[0],last=focusables.at(-1);
      if(e.shiftKey&&(document.activeElement===first||!modal.contains(document.activeElement))){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&(document.activeElement===last||!modal.contains(document.activeElement))){e.preventDefault();first.focus();}
    });
  }
  syncSettings(){
    this.audio.enabled=this.settings.sound;
    $('setting-sound').checked=this.settings.sound;
    $('setting-quality').value=this.settings.quality;
    $('setting-difficulty').value=this.settings.difficulty;
    $('sound-toggle').classList.toggle('muted',!this.settings.sound);
    $('sound-toggle').setAttribute('aria-label',this.settings.sound?'Mute sound':'Enable sound');
  }
  saveSettings(){try{localStorage.setItem('geneva-royale-settings',JSON.stringify(this.settings));}catch{}}
  applyQuality(){
    if(!this.game)return;
    const r=this.game.renderer,high=this.settings.quality==='high';
    r.setPixelRatio(Math.min(devicePixelRatio,high?1.7:1));r.shadowMap.enabled=high;r.shadowMap.needsUpdate=true;
    this.game.scene.traverse(o=>{if(o.material){const m=Array.isArray(o.material)?o.material:[o.material];m.forEach(x=>x.needsUpdate=true);}});
  }
  openModal(id){
    if(!$(id).hidden)return;
    this.modalHistory.push({id,focus:document.activeElement});
    show(id);$(id).style.zIndex=String(30+this.modalHistory.length);
    $(id).querySelector('button,input,select')?.focus();
    if(this.game){this.game.firing=false;this.game.focusing=false;}
  }
  closeModal(id){
    show(id,false);const idx=this.modalHistory.findIndex(m=>m.id===id),entry=this.modalHistory[idx];
    if(idx>=0)this.modalHistory.splice(idx,1);
    entry?.focus?.focus({preventScroll:true});
  }
  closeAll(){
    document.querySelectorAll('.modal-backdrop').forEach(m=>m.hidden=true);this.modalHistory=[];
  }
  escape(game){
    const active=this.modalHistory.at(-1)?.id;
    if(active&&active!=='pause-modal'&&active!=='result-modal'){this.closeModal(active);return;}
    if(game.mode==='paused'||game.mode==='playing')game.pause();
  }
  lobby(){
    this.closeAll();show('lobby');show('header');show('hud',false);show('mobile-controls',false);
    $('world').style.cursor='default';$('kill-feed').replaceChildren();$('drop-announcement').style.display='none';
    $('damage-vignette').style.opacity=0;this.selectDistrict(this.game?.selected||'oldtown');
  }
  selectDistrict(key){
    document.querySelectorAll('[data-district]').forEach(b=>{const selected=b.dataset.district===key;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
    $('scene-label').textContent=DISTRICTS[key].french;
  }
  start(key){
    this.closeAll();show('lobby',false);show('header',false);show('hud');show('mobile-controls',this.touch);
    $('world').style.cursor='crosshair';this.location(key);$('kill-feed').replaceChildren();
    this.game.renderer.domElement.focus({preventScroll:true});$('toast').classList.remove('visible');this.pickupPrompt(null);
  }
  announceDrop(key){$('drop-announcement').style.display='flex';$('drop-announcement').querySelector('strong').textContent=DISTRICTS[key].name.toUpperCase();}
  hideDrop(){$('drop-announcement').style.display='none';}
  location(key){$('location-label').querySelector('strong').textContent=DISTRICTS[key].name.toUpperCase();$('minimap-location').textContent=DISTRICTS[key].name.toUpperCase();}
  pause(paused){
    if(paused){this.closeAll();this.openModal('pause-modal');show('mobile-controls',false);}
    else{this.closeAll();show('mobile-controls',this.touch);this.game.renderer.domElement.focus({preventScroll:true});}
  }
  toggleMap(){
    if(!['playing','paused'].includes(this.game.mode))return;
    if($('map-modal').hidden)this.openModal('map-modal');else this.closeModal('map-modal');
  }
  toast(message){
    $('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(this.toastTimeout);
    this.toastTimeout=setTimeout(()=>$('toast').classList.remove('visible'),2600);
  }
  hit(x,y){
    const marker=$('hit-marker');marker.style.left=`${x}px`;marker.style.top=`${y}px`;marker.style.opacity=1;
    clearTimeout(this.hitTimeout);this.hitTimeout=setTimeout(()=>marker.style.opacity=0,120);
  }
  damage(){
    $('damage-vignette').style.opacity=.8;clearTimeout(this.damageTimeout);
    this.damageTimeout=setTimeout(()=>$('damage-vignette').style.opacity=0,180);
  }
  pickupPrompt(loot){
    const el=$('pickup-prompt');el.style.display=loot?'flex':'none';if(!loot)return;
    el.querySelector('span').textContent=loot.type==='weapon'?WEAPONS[loot.weapon].name:loot.type==='medkit'?'MEDICAL SUPPLIES':'SUPPLY CRATE';
    el.querySelector('small').textContent=loot.type==='weapon'?'WEAPON + AMMO':loot.type==='medkit'?'+2 MEDKITS':'AMMO + ARMOR + MEDKIT';
  }
  feed(source,victim,isPlayer){
    const el=document.createElement('div');el.textContent=`${source}  ${source==='BLUE ZONE'?'◎':'⌁'}  ${victim}`;if(isPlayer)el.className='you';$('kill-feed').prepend(el);
    while($('kill-feed').children.length>5)$('kill-feed').lastElementChild.remove();
    setTimeout(()=>el.remove(),7000);
  }
  hud(game){
    const p=game.player,z=game.zone;
    $('alive-count').textContent=game.actors.filter(a=>a.alive).length;
    $('kill-count').textContent=p.kills;
    $('hp-number').textContent=Math.ceil(p.hp);
    $('health-bar').style.width=`${p.hp}%`;$('health-bar').parentElement.classList.toggle('low',p.hp<30);
    $('armor-bar').style.width=`${p.armor}%`;$('stamina-bar').style.width=`${p.stamina}%`;
    $('medkit-count').textContent=p.medkits;
    $('weapon-name').textContent=WEAPONS[p.weapon].name;$('weapon-type').textContent=WEAPONS[p.weapon].type;
    $('ammo-count').textContent=String(p.ammo).padStart(2,'0');$('reserve-count').textContent=p.reserve;
    $('slot-primary').classList.toggle('selected',p.weapon!=='P18');$('slot-secondary').classList.toggle('selected',p.weapon==='P18');
    $('slot-primary').querySelector('span').textContent=WEAPONS[p.primary].name;
    const outside=Math.hypot(p.x-z.x,p.z-z.z)>z.radius;
    $('zone-label').textContent=outside?'OUTSIDE SAFE ZONE':z.shrinking?'ZONE CLOSING':'SAFE ZONE';
    $('zone-timer').textContent=formatTime(z.remaining);
    $('zone-detail').textContent=z.phase>=7?'FINAL CIRCLE':z.shrinking?`PHASE ${z.phase+1} · MOVE IN`:`PHASE ${z.phase+1} · HOLD POSITION`;
    document.querySelector('.zone-status').classList.toggle('danger',outside);
    const progress=$('action-progress');
    if(p.reload>0||p.heal>0){
      progress.style.display='block';const healing=p.heal>0,time=healing?p.heal:p.reload,total=healing?p.healTotal:p.reloadTotal;
      progress.querySelector('span').style.width=`${clamp01(1-time/total)*100}%`;progress.querySelector('strong').textContent=healing?'HEALING':'RELOADING';
    }else progress.style.display='none';
  }
  result({win,description,rank,kills,time,damage}){
    this.closeAll();show('mobile-controls',false);this.openModal('result-modal');$('pickup-prompt').style.display='none';$('action-progress').style.display='none';
    $('result-eyebrow').textContent=win?'THE CITY HAS A NEW CHAMPION':'EVERY DROP IS A NEW CHANCE';
    $('result-rank').innerHTML=`#${rank}<span>/24</span>`;
    $('result-title').innerHTML=win?'LAST ONE<br>STANDING<span>.</span>':'UNTIL THE<br>NEXT DROP<span>.</span>';
    $('result-description').textContent=description;$('result-kills').textContent=kills;$('result-time').textContent=formatTime(time);$('result-damage').textContent=Math.round(damage);
  }
  // A local, north-up tactical map generated from the same collision geometry as the game.
  drawBase(ctx){
    const W=ctx.canvas.width,H=ctx.canvas.height;
    ctx.fillStyle='#376968';ctx.fillRect(0,0,W,H);ctx.save();
    const X=x=>(x+185)/370*W,Z=z=>(z+170)/350*H;
    ctx.strokeStyle='#96beb326';ctx.lineWidth=1;for(let i=0;i<=10;i++){ctx.beginPath();ctx.moveTo(i*W/10,0);ctx.lineTo(i*W/10,H);ctx.stroke();ctx.beginPath();ctx.moveTo(0,i*H/10);ctx.lineTo(W,i*H/10);ctx.stroke();}
    ctx.beginPath();LAND.forEach(([x,z],i)=>i?ctx.lineTo(X(x),Z(z)):ctx.moveTo(X(x),Z(z)));ctx.closePath();ctx.fillStyle='#637464';ctx.fill();ctx.strokeStyle='#bbc5a2';ctx.lineWidth=3;ctx.stroke();
    ctx.fillStyle='#708365';ctx.fillRect(X(-90),Z(78),W*123/370,H*80/350);
    ctx.strokeStyle='#a1a58b';ctx.lineWidth=W*8/370;
    for(const [ax,az,bx,bz]of[[-160,-56,165,-56],[-156,52,160,52],[6,-74,6,140],[-75,-100,-75,78],[68,-65,68,150],[-160,-20,157,-20],[5,105,164,105],[-111,-102,-111,160]]){
      ctx.beginPath();ctx.moveTo(X(ax),Z(az));ctx.lineTo(X(bx),Z(bz));ctx.stroke();
    }
    ctx.strokeStyle='#b2b495';ctx.lineWidth=W*5/370;
    for(const [ax,az,bx,bz]of[[-27,80,-27,155],[-87,101,32,101],[-87,141,32,141]]){
      ctx.beginPath();ctx.moveTo(X(ax),Z(az));ctx.lineTo(X(bx),Z(bz));ctx.stroke();
    }
    for(const b of buildings){ctx.fillStyle='#c3b295';ctx.fillRect(X(b.x-b.w/2),Z(b.z-b.d/2),b.w/370*W,b.d/350*H);ctx.strokeStyle='#4f6151';ctx.lineWidth=.7;ctx.strokeRect(X(b.x-b.w/2),Z(b.z-b.d/2),b.w/370*W,b.d/350*H);}
    for(const t of treePositions){ctx.beginPath();ctx.arc(X(t.x),Z(t.z),t.r/370*W,0,Math.PI*2);ctx.fillStyle='#456e54';ctx.fill();}
    ctx.strokeStyle='#c0d8c866';ctx.lineWidth=2;ctx.beginPath();ctx.arc(X(108),Z(-164),9,0,Math.PI*2);ctx.stroke();
    ctx.fillStyle='#e5e4cb';ctx.font='500 14px monospace';ctx.textAlign='center';ctx.fillText('L A C   L É M A N',X(30),Z(-128));
    ctx.restore();
  }
  drawMaps(game){
    const now=performance.now();if(now-this.lastMapDraw<90)return;this.lastMapDraw=now;
    this.drawMap(this.mini,game,false);if(!$('map-modal').hidden)this.drawMap(this.map,game,true);
  }
  drawMap(ctx,game,big){
    const w=ctx.canvas.width,h=ctx.canvas.height;ctx.clearRect(0,0,w,h);ctx.drawImage(this.baseMap,0,0,w,h);
    const X=x=>(x+185)/370*w,Z=z=>(z+170)/350*h,z=game.zone,p=game.player;
    // Mask the unsafe area using an even-odd path.
    ctx.fillStyle='#4d67c94a';ctx.beginPath();ctx.rect(0,0,w,h);ctx.ellipse(X(z.x),Z(z.z),z.radius/370*w,z.radius/350*h,0,0,Math.PI*2);ctx.fill('evenodd');
    ctx.strokeStyle='#98bcff';ctx.lineWidth=big?2.3:1.5;ctx.beginPath();ctx.ellipse(X(z.x),Z(z.z),z.radius/370*w,z.radius/350*h,0,0,Math.PI*2);ctx.stroke();
    ctx.setLineDash(big?[6,4]:[3,2]);ctx.strokeStyle='#f7f5e0';ctx.lineWidth=big?1.6:1;ctx.beginPath();ctx.ellipse(X(z.nextX),Z(z.nextZ),z.nextRadius/370*w,z.nextRadius/350*h,0,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);
    for(const l of game.loot){if(!l.active)continue;ctx.fillStyle=l.type==='weapon'?'#d6fa77':'#edc888';const s=big?4:2;ctx.fillRect(X(l.x)-s/2,Z(l.z)-s/2,s,s);}
    if(big){
      ctx.textAlign='center';
      for(const [key,d]of Object.entries(DISTRICTS)){
        ctx.font='bold 13px monospace';ctx.lineWidth=4;ctx.strokeStyle='#263e32';const offset=key==='oldtown'?-10:key==='lakefront'?15:0;
        ctx.strokeText(d.name.toUpperCase(),X(d.x),Z(d.z)+offset);ctx.fillStyle='#f0f0d9';ctx.fillText(d.name.toUpperCase(),X(d.x),Z(d.z)+offset);
      }
    }
    // Nearby gunfire gives a brief, approximate tactical hint.
    for(const a of game.actors){if(a===p||!a.alive||a.cooldown<.3||Math.hypot(a.x-p.x,a.z-p.z)>60)continue;ctx.fillStyle='#ef9d75';ctx.beginPath();ctx.arc(X(a.x),Z(a.z),big?3:1.5,0,Math.PI*2);ctx.fill();}
    ctx.save();ctx.translate(X(p.x),Z(p.z));ctx.rotate(p.angle);const s=big?8:5;
    ctx.shadowColor='#192d25';ctx.shadowBlur=3;ctx.fillStyle='#e2ff8a';ctx.strokeStyle='#1d3c2c';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(0,-s);ctx.lineTo(s*.7,s*.7);ctx.lineTo(0,s*.3);ctx.lineTo(-s*.7,s*.7);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();
    ctx.font=big?'12px monospace':'9px monospace';ctx.fillStyle='#e9f0d6';ctx.textAlign='right';ctx.fillText('N ↑',w-10,16);
  }
}
function clamp01(n){return Math.max(0,Math.min(1,n));}
