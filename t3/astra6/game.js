import * as THREE from './vendor/three.module.js';
import {DISTRICTS, blocked, segmentBlocked, makeSoldier, makeCrate, material, districtAt, disposeDynamic} from './world.js';
import {Navigation} from './navigation.js';

export const WEAPONS = {
  M416:{name:'M416',type:'ASSAULT RIFLE',mag:30,damage:23,interval:.13,reload:1.9,spread:.012,range:92},
  SCAR:{name:'SCAR-L',type:'ASSAULT RIFLE',mag:30,damage:29,interval:.17,reload:2.15,spread:.009,range:105},
  VECTOR:{name:'VECTOR',type:'SUBMACHINE GUN',mag:33,damage:18,interval:.075,reload:1.55,spread:.025,range:65},
  P18:{name:'P18',type:'SIDEARM',mag:18,damage:25,interval:.28,reload:1.3,spread:.02,range:68}
};
const NAMES=['Léman','AlpineFox','StoneRook','MontBlanc','NightHeron','RiveGauche','Edelweiss','CopperWolf','Aiguille','QuaiGhost','TheWatch','Sable','VieuxLoup','NorthPier','Cobalt','Marmot','SilverFinch','Chamois','RhoneRunner','Lynx','Jura','Raven04','Helvetic'];
const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
export const formatTime = t => `${String(Math.floor(Math.max(0,t)/60)).padStart(2,'0')}:${String(Math.floor(Math.max(0,t)%60)).padStart(2,'0')}`;
export class AudioSystem {
  constructor(){this.enabled=true;this.ctx=null;}
  unlock(){try{this.ctx??=new(window.AudioContext||window.webkitAudioContext)();if(this.ctx.state==='suspended')this.ctx.resume();}catch{}}
  tone(freq=400,duration=.12,type='sine',volume=.05,end=100) {
    if(!this.enabled||!this.ctx)return;
    const t=this.ctx.currentTime,o=this.ctx.createOscillator(),g=this.ctx.createGain();
    o.type=type;o.frequency.setValueAtTime(freq,t);o.frequency.exponentialRampToValueAtTime(Math.max(20,end),t+duration);
    g.gain.setValueAtTime(volume,t);g.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(g);g.connect(this.ctx.destination);o.start(t);o.stop(t+duration);
  }
  shot(distance=0,weapon='M416'){
    if(!this.enabled||!this.ctx||distance>115)return;
    const volume=Math.max(.006,.085/(1+distance*.09));this.tone(weapon==='P18'?210:145,.095,'sawtooth',volume,40);
    const length=Math.floor(this.ctx.sampleRate*.07),buffer=this.ctx.createBuffer(1,length,this.ctx.sampleRate),data=buffer.getChannelData(0);
    for(let i=0;i<length;i++)data[i]=(Math.random()*2-1)*(1-i/length);
    const src=this.ctx.createBufferSource(),gain=this.ctx.createGain();src.buffer=buffer;gain.gain.value=volume*.8;src.connect(gain);gain.connect(this.ctx.destination);src.start();
  }
  pickup(){this.tone(600,.13,'sine',.06,950);setTimeout(()=>this.tone(950,.15,'sine',.04,1200),100);}
  hit(){this.tone(900,.05,'triangle',.07,350);}
  alert(){this.tone(320,.3,'sine',.09,650);}
}

export class Game {
  constructor(scene,camera,renderer,ui,settings,audio) {
    this.scene=scene;this.camera=camera;this.renderer=renderer;this.ui=ui;this.settings=settings;this.audio=audio;
    this.navigation=new Navigation();this.mode='lobby';this.actors=[];this.loot=[];this.effects=[];this.keys=new Set();
    this.mouse=new THREE.Vector2(.25,.05);this.mouseScreen={x:innerWidth*.625,y:innerHeight*.475};this.raycaster=new THREE.Raycaster();this.ground=new THREE.Plane(new THREE.Vector3(0,1,0),-1.4);this.aim=new THREE.Vector3();
    this.cameraTarget=new THREE.Vector3(0,0,15);this.cameraOffset=new THREE.Vector3(60,145,76);this.viewSize=225;this.selected='oldtown';
    this.firing=false;this.focusing=false;this.mobileMove={x:0,y:0};this.mobileAim=null;this.heldTouchFire=false;this.time=0;this.hudTick=0;this.matchCount=0;
    this.createZoneMeshes();this.bindInput();this.prepareLobby();
  }
  createZoneMeshes(){
    this.zoneWall=new THREE.Mesh(new THREE.CylinderGeometry(1,1,30,128,1,true),new THREE.MeshBasicMaterial({color:'#6b9ff0',transparent:true,opacity:.16,side:THREE.DoubleSide,depthWrite:false}));
    this.zoneWall.position.y=15;this.zoneWall.visible=false;this.scene.add(this.zoneWall);
    const ringGeo=new THREE.RingGeometry(.992,1,128);
    this.zoneRing=new THREE.Mesh(ringGeo,new THREE.MeshBasicMaterial({color:'#8bb9ff',side:THREE.DoubleSide,transparent:true,opacity:.75,depthWrite:false}));this.zoneRing.rotation.x=-Math.PI/2;this.zoneRing.position.y=.25;this.zoneRing.visible=false;this.scene.add(this.zoneRing);
    this.nextRing=new THREE.Mesh(new THREE.RingGeometry(.996,1,128),new THREE.MeshBasicMaterial({color:'#f3edcf',side:THREE.DoubleSide,transparent:true,opacity:.4,depthWrite:false}));this.nextRing.rotation.x=-Math.PI/2;this.nextRing.position.y=.2;this.nextRing.visible=false;this.scene.add(this.nextRing);
  }
  prepareLobby(){
    this.mode='lobby';this.zoneWall.visible=false;this.zoneRing.visible=false;this.nextRing.visible=false;
    this.actors.forEach(a=>{this.scene.remove(a.model.root);disposeDynamic(a.model.root);});this.actors=[];this.loot.forEach(l=>{this.scene.remove(l.mesh);disposeDynamic(l.mesh);});this.loot=[];
    this.effects.forEach(e=>{this.scene.remove(e.mesh);e.mesh.geometry.dispose();e.mesh.material.dispose();});this.effects=[];
    this.ui.lobby();this.firing=false;this.keys.clear();this.mobileMove={x:0,y:0};this.heldTouchFire=false;this.mobileAim=null;
  }
  selectDistrict(key){this.selected=key;this.ui.selectDistrict(key);}
  createActor(x,z,isPlayer,name,i=0){
    const model=makeSoldier(isPlayer);model.root.position.set(x,0,z);this.scene.add(model.root);
    return {x,z,hp:100,armor:isPlayer?50:20,isPlayer,name,model,alive:true,angle:0,weapon:'M416',ammo:30,reserve:120,sideAmmo:18,sideReserve:72,primary:'M416',medkits:2,stamina:100,cooldown:Math.random(),reload:0,heal:0,kills:0,path:[],pathTimer:Math.random()*2,think:Math.random()*.2,target:null,strafe:Math.random()>.5?1:-1,phase:i,movePhase:0,moving:false,stuck:0};
  }
  start(){
    this.prepareLobby();this.audio.unlock();this.mode='dropping';this.dropTime=3;this.time=0;this.damageDealt=0;this.matchCount++;this.hudTick=0;this.lastDistrict=this.selected;this.difficulty=this.settings.difficulty;
    const d=DISTRICTS[this.selected],spawn=this.navigation.point(this.navigation.closest(...d.spawn));
    this.player=this.createActor(spawn.x,spawn.z,true,'YOU');this.actors=[this.player];
    for(let i=0;i<23;i++){
      let p,attempts=0;
      do{p=this.navigation.randomPoint();attempts++;}while(attempts<200&&(Math.hypot(p.x-spawn.x,p.z-spawn.z)<35||this.actors.some(a=>Math.hypot(a.x-p.x,a.z-p.z)<11)));
      const a=this.createActor(p.x,p.z,false,NAMES[i],i);a.cooldown=2+Math.random()*2;this.actors.push(a);
    }
    this.spawnLoot();this.setupZone();
    // A compact parachute descent lands at the selected district.
    this.parachute=new THREE.Group();
    const canopy=new THREE.Mesh(new THREE.SphereGeometry(5,16,8,0,Math.PI*2,0,Math.PI/2),material('#d9e0b6',{side:THREE.DoubleSide}));canopy.scale.y=.45;canopy.position.y=7;this.parachute.add(canopy);
    for(const x of [-3,3])for(const z of [-2,2]){
      const geo=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x,7,z),new THREE.Vector3(0,2,0)]);
      this.parachute.add(new THREE.Line(geo,new THREE.LineBasicMaterial({color:'#ede8cc'})));
    }
    this.player.model.root.add(this.parachute);this.player.model.root.position.y=35;this.cameraTarget.set(spawn.x,0,spawn.z);this.viewSize=140;
    this.ui.start(this.selected);this.ui.hud(this);this.ui.announceDrop(this.selected);
  }
  spawnLoot(){
    for(const d of Object.values(DISTRICTS)){
      const p=this.navigation.point(this.navigation.closest(d.spawn[0]+7,d.spawn[1]+4));this.addLoot(p.x,p.z,'supply');
    }
    for(let i=0;i<58;i++){
      let p=this.navigation.randomPoint(),tries=0;
      while(this.loot.some(l=>Math.hypot(l.x-p.x,l.z-p.z)<9)&&tries++<50)p=this.navigation.randomPoint();
      this.addLoot(p.x,p.z,i%5===0?'weapon':i%4===0?'medkit':'supply',i%2?'SCAR':'VECTOR');
    }
  }
  addLoot(x,z,type='supply',weapon='SCAR'){
    const mesh=makeCrate(type);mesh.position.set(x,0,z);this.scene.add(mesh);
    const loot={x,z,type,weapon,mesh,active:true};this.loot.push(loot);return loot;
  }
  setupZone(){
    const centers=[{x:0,z:25}],radii=[245,155,108,74,46,25,10,1],waits=[40,30,25,20,15,10,5],shrinks=[22,22,22,22,20,20,20];
    for(let i=1;i<radii.length;i++){
      const prev=centers[i-1];let p;
      for(let n=0;n<50;n++){
        const angle=Math.random()*Math.PI*2,dist=Math.random()*Math.min(22,(radii[i-1]-radii[i])*.5);
        p=this.navigation.point(this.navigation.closest(prev.x+Math.cos(angle)*dist,prev.z+Math.sin(angle)*dist));
        if(Math.hypot(p.x-prev.x,p.z-prev.z)+radii[i]<radii[i-1])break;
      }
      centers.push(p);
    }
    this.zone={phase:0,elapsed:0,shrinking:false,x:0,z:25,radius:245,centers,radii,waits,shrinks,nextX:centers[1].x,nextZ:centers[1].z,nextRadius:155,remaining:40,damage:2};
    this.zoneWall.visible=this.zoneRing.visible=this.nextRing.visible=true;this.updateZone(0);
  }
  updateZone(dt){
    const z=this.zone;z.elapsed+=dt;
    if(z.phase<z.waits.length){
      const duration=z.shrinking?z.shrinks[z.phase]:z.waits[z.phase];z.remaining=Math.max(0,duration-z.elapsed);
      if(z.shrinking){
        const t=clamp(z.elapsed/duration,0,1),a=z.centers[z.phase],b=z.centers[z.phase+1];z.x=a.x+(b.x-a.x)*t;z.z=a.z+(b.z-a.z)*t;z.radius=z.radii[z.phase]+(z.radii[z.phase+1]-z.radii[z.phase])*t;
      }
      if(z.elapsed>=duration){
        z.elapsed=0;z.shrinking=!z.shrinking;
        if(z.shrinking){this.ui.toast('THE BLUE ZONE IS CLOSING');this.audio.alert();}
        else {z.phase++;z.damage=2+z.phase*1.7;if(z.phase<z.waits.length){const c=z.centers[z.phase+1];z.nextX=c.x;z.nextZ=c.z;z.nextRadius=z.radii[z.phase+1];}this.ui.toast(z.phase<z.waits.length?'NEW SAFE ZONE MARKED':'FINAL CIRCLE — NO ROOM LEFT');}
      }
    }else{z.remaining=0;z.damage=18;z.radius=Math.max(.05,1-z.elapsed*.03);}
    this.zoneWall.position.set(z.x,15,z.z);this.zoneWall.scale.set(z.radius,1,z.radius);
    this.zoneRing.position.set(z.x,.25,z.z);this.zoneRing.scale.setScalar(z.radius);
    this.nextRing.position.set(z.nextX,.24,z.nextZ);this.nextRing.scale.setScalar(z.nextRadius);
  }
  move(a,dx,dz,dt) {
    a.moving=Math.abs(dx)+Math.abs(dz)>.05;
    const oldX=a.x,oldZ=a.z;
    // Split long frames into small steps to prevent tunneling through cover.
    const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.65));
    for(let i=0;i<steps;i++){
      const nx=a.x+dx/steps,nz=a.z+dz/steps;
      if(!blocked(nx,a.z,1.05))a.x=nx;
      if(!blocked(a.x,nz,1.05))a.z=nz;
    }
    if(a.moving&&Math.hypot(a.x-oldX,a.z-oldZ)<.02)a.stuck+=dt;else a.stuck=0;
    if(a.moving)a.movePhase+=dt*13;
    a.model.leftLeg.rotation.x=a.moving?Math.sin(a.movePhase)*.55:0;a.model.rightLeg.rotation.x=-a.model.leftLeg.rotation.x;
    a.model.body.position.y=a.moving?Math.abs(Math.sin(a.movePhase))*.08:0;
  }
  updatePlayer(dt){
    const p=this.player;if(!p.alive)return;
    let vx=0,vz=0;
    if(this.keys.has('KeyW')||this.keys.has('ArrowUp'))vz-=1;
    if(this.keys.has('KeyS')||this.keys.has('ArrowDown'))vz+=1;
    if(this.keys.has('KeyA')||this.keys.has('ArrowLeft'))vx-=1;
    if(this.keys.has('KeyD')||this.keys.has('ArrowRight'))vx+=1;
    vx+=this.mobileMove.x;vz+=this.mobileMove.y;
    const len=Math.hypot(vx,vz);if(len>1){vx/=len;vz/=len;}
    const sprint=this.keys.has('ShiftLeft')||this.keys.has('ShiftRight');
    let speed=sprint&&p.stamina>2&&len>.1?15:9.8;
    if(p.heal>0)speed*=.4;if(this.focusing)speed*=.7;
    if(sprint&&len>.1&&p.stamina>0)p.stamina=Math.max(0,p.stamina-dt*26);else p.stamina=Math.min(100,p.stamina+dt*18);
    // Match screen-relative movement to the fixed isometric camera bearing.
    const angle=Math.atan2(this.cameraOffset.x,this.cameraOffset.z),c=Math.cos(angle),s=Math.sin(angle);
    this.move(p,(vx*c+vz*s)*speed*dt,(-vx*s+vz*c)*speed*dt,dt);
    if(this.mobileAim){const {x,y}=this.mobileAim;p.angle=Math.atan2(x*c+y*s,-(-x*s+y*c));}
    else {
      this.raycaster.setFromCamera(this.mouse,this.camera);this.raycaster.ray.intersectPlane(this.ground,this.aim);
      p.angle=Math.atan2(this.aim.x-p.x,-(this.aim.z-p.z));
    }
    if(this.firing||this.heldTouchFire)this.fire(p);
    let nearest=null,best=5.3;
    for(const loot of this.loot){if(!loot.active)continue;const d=Math.hypot(loot.x-p.x,loot.z-p.z);if(d<best&&!segmentBlocked(p.x,p.z,loot.x,loot.z)){nearest=loot;best=d;}}
    this.nearestLoot=nearest;this.ui.pickupPrompt(nearest);
    const location=districtAt(p.x,p.z);if(location!==this.lastDistrict){this.lastDistrict=location;this.ui.location(location);}
  }
  updateBot(a,dt){
    if(!a.alive)return;
    a.think-=dt;a.pathTimer-=dt;
    const z=this.zone;
    const inDanger=Math.hypot(a.x-z.x,a.z-z.z)>z.radius-5;
    const needsZone=Math.hypot(a.x-z.nextX,a.z-z.nextZ)>z.nextRadius*.86;
    if(a.think<=0){
      a.think=.2+Math.random()*.15;let nearest=null,best=68;
      for(const other of this.actors){
        if(other===a||!other.alive)continue;
        const dist=Math.hypot(other.x-a.x,other.z-a.z);
        if(dist<best&&!segmentBlocked(a.x,a.z,other.x,other.z,.2)){best=dist;nearest=other;}
      }
      a.target=nearest;
    }
    if(a.target&&!a.target.alive)a.target=null;
    const target=a.target;
    if(target&&!inDanger){
      const dx=target.x-a.x,dz=target.z-a.z,dist=Math.hypot(dx,dz);
      const difficulty=this.difficulty,accuracy=difficulty==='easy'?.14:difficulty==='hard'?.035:.075;
      a.angle=Math.atan2(dx,-dz)+(Math.random()-.5)*accuracy;
      if(dist<63&&!segmentBlocked(a.x,a.z,target.x,target.z))this.fire(a);
      if(dist>27){
        if(!segmentBlocked(a.x,a.z,target.x,target.z,1.3))this.move(a,dx/dist*6.6*dt,dz/dist*6.6*dt,dt);
        else this.followPath(a,target.x,target.z,dt);
      } else {
        const back=dist<13?-1:0;
        const sx=(-dz/dist*a.strafe*.7+dx/dist*back)*4,sz=(dx/dist*a.strafe*.7+dz/dist*back)*4;
        this.move(a,sx*dt,sz*dt,dt);if(a.stuck>.3){a.strafe*=-1;a.stuck=0;}
      }
    } else {
      if(a.pathTimer<=0||!a.path.length||a.stuck>1.1){
        let p;
        if(needsZone||inDanger) {
          const angle=Math.random()*Math.PI*2,radius=z.nextRadius*.55*Math.random();
          p={x:z.nextX+Math.cos(angle)*radius,z:z.nextZ+Math.sin(angle)*radius};
        } else if(this.time>90){
          const alive=this.actors.filter(o=>o!==a&&o.alive);alive.sort((b,c)=>Math.hypot(b.x-a.x,b.z-a.z)-Math.hypot(c.x-a.x,c.z-a.z));
          const enemy=alive[0];p=enemy?{x:enemy.x+Math.random()*12-6,z:enemy.z+Math.random()*12-6}:this.navigation.randomPoint();
        } else p=this.navigation.randomPoint();
        a.path=this.navigation.path(a.x,a.z,p.x,p.z);a.pathTimer=3+Math.random()*3;a.stuck=0;
      }
      this.walkPath(a,dt,inDanger?9.5:6.2);
    }
    if(a.ammo===0&&a.reload<=0){a.reserve=Math.max(a.reserve,30);this.reload(a);}
    if(a.hp<45&&a.medkits>0&&!target&&a.heal===0&&!inDanger){a.heal=3;a.healTotal=3;}
    if(Math.random()<dt*.5){
      const loot=this.loot.find(l=>l.active&&Math.hypot(l.x-a.x,l.z-a.z)<4);
      if(loot){a.reserve+=60;a.armor=Math.min(60,a.armor+30);a.medkits=Math.min(3,a.medkits+1);this.collectLoot(loot);}
    }
  }
  followPath(a,tx,tz,dt){if(a.pathTimer<=0||!a.path.length){a.path=this.navigation.path(a.x,a.z,tx,tz);a.pathTimer=1.5;}this.walkPath(a,dt,6.2);}
  walkPath(a,dt,speed){
    if(!a.path.length){a.moving=false;return;}
    const p=a.path[0],dx=p.x-a.x,dz=p.z-a.z,dist=Math.hypot(dx,dz);
    if(dist<1.5){a.path.shift();return;}
    a.angle=Math.atan2(dx,-dz);this.move(a,dx/dist*speed*dt,dz/dist*speed*dt,dt);
  }
  fire(a){
    if(!a.alive||a.cooldown>0||a.reload>0||this.mode!=='playing')return;
    if(a.ammo<=0){if(a.isPlayer)this.reload(a);return;}
    if(a.heal>0){a.heal=0;if(a.isPlayer)this.ui.toast('HEALING INTERRUPTED');}
    const w=WEAPONS[a.weapon];a.ammo--;
    a.cooldown=a.isPlayer?w.interval:(this.difficulty==='hard'?.38:this.difficulty==='easy'?.72:.52)+Math.random()*.25;
    let spread=w.spread;
    if(a.isPlayer){if(this.focusing)spread*=.35;if(a.moving)spread*=2;}
    else spread=this.difficulty==='hard'?.045:this.difficulty==='easy'?.18:.11;
    const angle=a.angle+(Math.random()-.5)*spread*2,dx=Math.sin(angle),dz=-Math.cos(angle);
    const fromX=a.x,fromZ=a.z;let nearestDist=w.range,hit=null;
    for(const other of this.actors){
      if(other===a||!other.alive)continue;
      const rx=other.x-fromX,rz=other.z-fromZ,along=rx*dx+rz*dz;
      if(along<0||along>nearestDist)continue;
      const perpendicular=Math.abs(rx*dz-rz*dx);
      if(perpendicular<1.25){const near=along-Math.sqrt(1.25**2-perpendicular**2);if(near<nearestDist){nearestDist=Math.max(0,near);hit=other;}}
    }
    // Find the nearest piece of architecture before resolving damage.
    let endX=fromX+dx*nearestDist,endZ=fromZ+dz*nearestDist;
    if(segmentBlocked(fromX,fromZ,endX,endZ)){
      hit=null;let lo=0,hi=nearestDist;
      for(let i=0;i<10;i++){const mid=(lo+hi)/2;if(segmentBlocked(fromX,fromZ,fromX+dx*mid,fromZ+dz*mid))hi=mid;else lo=mid;}
      nearestDist=lo;endX=fromX+dx*lo;endZ=fromZ+dz*lo;
    }
    if(hit) {
      let damage=w.damage;
      if(!a.isPlayer)damage*=hit.isPlayer?(this.difficulty==='hard'?.65:this.difficulty==='easy'?.3:.45):.8;
      if(a.isPlayer&&nearestDist>w.range*.7)damage*=.8;
      this.hurt(hit,damage,a);
      if(a.isPlayer){this.audio.hit();this.ui.hit(this.mouseScreen.x,this.mouseScreen.y);this.damageDealt+=damage;}
    }
    const geo=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(fromX+dx*1.8,2,endZ===fromZ?fromZ:fromZ+dz*1.8),new THREE.Vector3(endX,1.9,endZ)]);
    const line=new THREE.Line(geo,new THREE.LineBasicMaterial({color:a.isPlayer?'#fff3b3':'#f5c09c',transparent:true,opacity:.85}));
    this.scene.add(line);this.effects.push({mesh:line,life:.11,total:.11});
    a.model.flash.visible=true;a.flashTimer=.055;
    this.audio.shot(a.isPlayer?0:Math.hypot(a.x-this.player.x,a.z-this.player.z),a.weapon);
  }
  hurt(a,amount,source=null){
    if(!a.alive)return;
    if(source&&a.armor>0){const absorb=Math.min(a.armor,amount*.5);a.armor-=absorb;amount-=absorb;}
    a.hp=Math.max(0,a.hp-amount);
    if(a.isPlayer)this.ui.damage();
    else if(source&&source.alive){a.target=source;a.think=.5;}
    if(a.hp<=0)this.eliminate(a,source);
  }
  eliminate(a,source){
    if(!a.alive)return;
    a.alive=false;a.model.root.visible=false;a.hp=0;if(source)source.kills++;
    this.addLoot(a.x,a.z,'supply');this.ui.feed(source?.name||'BLUE ZONE',a.name,source===this.player);
    if(a.isPlayer){this.finish(false,source?`Eliminated by ${source.name}. Next drop, a new story.`:'The blue zone caught you. Move toward the circle earlier.');}
    else if(this.actors.filter(o=>o.alive).length===1&&this.player.alive)this.finish(true,'The last circle belongs to you. Geneva is yours.');
  }
  reload(a=this.player){
    if(!a||!a.alive||a.reload>0||a.ammo>=WEAPONS[a.weapon].mag)return;
    if(a.reserve<=0){if(a.isPlayer)this.ui.toast('OUT OF AMMO — FIND SUPPLIES OR SWITCH WEAPONS');return;}
    a.heal=0;a.reloadTotal=WEAPONS[a.weapon].reload;a.reload=a.reloadTotal;
    if(a.isPlayer)this.audio.tone(180,.18,'triangle',.04,260);
  }
  heal(){
    const p=this.player;if(!p?.alive||this.mode!=='playing'||p.heal>0)return;
    if(p.medkits<=0){this.ui.toast('NO MEDKITS — FIND A SUPPLY CRATE');return;}
    if(p.hp>=100){this.ui.toast('HEALTH IS ALREADY FULL');return;}
    p.reload=0;p.heal=3;p.healTotal=3;this.firing=false;this.heldTouchFire=false;this.ui.toast('HEALING — KEEP YOUR WEAPON DOWN');
  }
  switchWeapon(slot){
    const p=this.player;if(!p?.alive||!['playing','paused'].includes(this.mode))return;
    const target=slot===1?p.primary:'P18';if(p.weapon===target)return;
    [p.ammo,p.sideAmmo]=[p.sideAmmo,p.ammo];[p.reserve,p.sideReserve]=[p.sideReserve,p.reserve];p.weapon=target;p.reload=0;p.heal=0;
    this.ui.hud(this);this.audio.tone(260,.08,'triangle',.03,180);
  }
  pickup(){
    if(this.mode!=='playing'||!this.nearestLoot)return;
    const p=this.player,l=this.nearestLoot;
    if(l.type==='weapon') {
      if(p.weapon==='P18'){p.primary=l.weapon;p.sideAmmo=WEAPONS[l.weapon].mag;p.sideReserve+=90;}
      else{p.primary=l.weapon;p.weapon=l.weapon;p.ammo=WEAPONS[l.weapon].mag;p.reserve+=90;}
      this.ui.toast(`${WEAPONS[l.weapon].name} EQUIPPED · +90 ROUNDS`);
    } else if(l.type==='medkit'){p.medkits=Math.min(5,p.medkits+2);this.ui.toast('+2 MEDKITS');}
    else{
      p.reserve=Math.min(360,p.reserve+60);p.sideReserve=Math.min(360,p.sideReserve+30);p.medkits=Math.min(5,p.medkits+1);p.armor=Math.min(100,p.armor+35);this.ui.toast('+60 AMMO · +1 MEDKIT · ARMOR RESTORED');
    }
    p.reload=0;this.collectLoot(l);this.nearestLoot=null;this.audio.pickup();this.ui.hud(this);
  }
  collectLoot(l){l.active=false;l.mesh.visible=false;}
  pause(){
    if(this.mode==='dropping')return;
    if(this.mode==='playing'){this.mode='paused';this.keys.clear();this.firing=false;this.focusing=false;this.mobileMove={x:0,y:0};this.heldTouchFire=false;this.ui.pause(true);}
    else if(this.mode==='paused'){this.mode='playing';this.ui.pause(false);}
  }
  finish(win,description){
    if(this.mode==='result')return;
    this.mode='result';this.firing=false;this.heldTouchFire=false;this.keys.clear();
    this.ui.result({win,description,rank:win?1:this.actors.filter(a=>a.alive).length+1,kills:this.player.kills,time:this.time,damage:this.damageDealt});
    if(win){this.audio.tone(440,.3,'triangle',.1,660);setTimeout(()=>this.audio.tone(660,.5,'triangle',.1,880),200);}
    else this.audio.tone(240,.6,'triangle',.08,70);
  }
  update(dt,t){
    if(this.mode==='dropping'){
      this.dropTime-=dt;this.player.model.root.position.y=Math.max(0,this.dropTime/3*35);
      if(this.dropTime<=0){this.player.model.root.remove(this.parachute);this.parachute.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.isLine)o.material.dispose();});this.parachute=null;this.mode='playing';this.ui.hideDrop();this.ui.toast('STAY IN THE CIRCLE. BE THE LAST SURVIVOR.');}
    }
    if(this.mode==='playing'){
      this.time+=dt;this.updateZone(dt);this.updatePlayer(dt);
      for(const a of this.actors){
        if(!a.alive)continue;
        a.cooldown=Math.max(0,a.cooldown-dt);
        if(a.reload>0){a.reload-=dt;if(a.reload<=0){const rounds=Math.min(WEAPONS[a.weapon].mag-a.ammo,a.reserve);a.ammo+=rounds;a.reserve-=rounds;}}
        if(a.heal>0){a.heal-=dt;if(a.heal<=0){a.medkits--;a.hp=Math.min(100,a.hp+65);if(a.isPlayer){this.ui.toast('HEALTH RESTORED');this.audio.pickup();}}}
        if(!a.isPlayer)this.updateBot(a,dt);
        if(Math.hypot(a.x-this.zone.x,a.z-this.zone.z)>this.zone.radius)this.hurt(a,this.zone.damage*dt);
        a.model.root.position.set(a.x,0,a.z);a.model.body.rotation.y=-a.angle;
        a.flashTimer=(a.flashTimer||0)-dt;if(a.flashTimer<=0)a.model.flash.visible=false;
        if(this.mode!=='playing')break;
      }
      this.hudTick+=dt;if(this.hudTick>.08){this.ui.hud(this);this.hudTick=0;}
    }
    if(this.mode!=='paused'){
      for(let i=this.effects.length-1;i>=0;i--){
        const e=this.effects[i];e.life-=dt;e.mesh.material.opacity=Math.max(0,e.life/e.total);
        if(e.life<=0){this.scene.remove(e.mesh);e.mesh.geometry.dispose();e.mesh.material.dispose();this.effects.splice(i,1);}
      }
    }
    this.updateCamera(dt,t);
    if(['playing','paused','dropping'].includes(this.mode))this.ui.drawMaps(this);
  }
  updateCamera(dt,t){
    let target,size,offset;
    if(this.mode==='lobby'){
      const d=DISTRICTS[this.selected];target=new THREE.Vector3(d.view[0]-36,0,d.view[1]+18);
      size=innerWidth<600?225:220;
      offset=new THREE.Vector3(140+Math.sin(t*.055)*10,150,175+Math.cos(t*.055)*8);
    } else{
      target=new THREE.Vector3(this.player.x,0,this.player.z);
      size=this.mode==='dropping'?105:this.focusing?66:92;
      if(innerWidth<600)size=112;
      offset=this.cameraOffset;
    }
    const lerp=1-Math.exp(-dt*4);this.cameraTarget.lerp(target,lerp);this.viewSize+=(size-this.viewSize)*lerp;
    const aspect=innerWidth/innerHeight;
    this.camera.left=-this.viewSize*aspect/2;this.camera.right=this.viewSize*aspect/2;this.camera.top=this.viewSize/2;this.camera.bottom=-this.viewSize/2;this.camera.updateProjectionMatrix();
    this.camera.position.copy(this.cameraTarget).add(offset);this.camera.lookAt(this.cameraTarget);
  }
  bindInput(){
    addEventListener('keydown',e=>{
      if(e.code==='Escape'){this.ui.escape(this);return;}
      if(['INPUT','SELECT','TEXTAREA'].includes(document.activeElement?.tagName))return;
      if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','Tab'].includes(e.code)&&this.mode!=='lobby')e.preventDefault();
      if(e.repeat)return;
      if(this.mode==='playing'){
        this.keys.add(e.code);
        if(e.code==='KeyR')this.reload();
        if(e.code==='KeyQ')this.heal();
        if(e.code==='KeyE')this.pickup();
        if(e.code==='Digit1')this.switchWeapon(1);
        if(e.code==='Digit2')this.switchWeapon(2);
        if(e.code==='KeyM')this.ui.toggleMap();
      }
    });
    addEventListener('keyup',e=>this.keys.delete(e.code));
    addEventListener('blur',()=>{this.keys.clear();this.firing=false;this.focusing=false;if(this.mode==='playing')this.pause();});
    document.addEventListener('visibilitychange',()=>{if(document.hidden&&this.mode==='playing')this.pause();});
    const canvas=this.renderer.domElement;
    canvas.addEventListener('pointermove',e=>{this.mouse.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1);this.mouseScreen={x:e.clientX,y:e.clientY};});
    canvas.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')return;this.audio.unlock();if(this.mode==='playing'){if(e.button===0)this.firing=true;if(e.button===2)this.focusing=true;}});
    addEventListener('pointerup',e=>{if(e.button===0)this.firing=false;if(e.button===2)this.focusing=false;});
    canvas.addEventListener('contextmenu',e=>e.preventDefault());
    this.bindTouch();
  }
  bindTouch(){
    const move=document.getElementById('move-stick'),knob=move.firstElementChild,fire=document.getElementById('fire-stick');
    const handleMove=e=>{
      const rect=move.getBoundingClientRect();let x=(e.clientX-rect.left-rect.width/2)/40,y=(e.clientY-rect.top-rect.height/2)/40;
      const len=Math.hypot(x,y);if(len>1){x/=len;y/=len;}this.mobileMove={x,y};knob.style.transform=`translate(${x*30}px,${y*30}px)`;
    };
    move.addEventListener('pointerdown',e=>{move.setPointerCapture(e.pointerId);this.movePointer=e.pointerId;handleMove(e);});
    move.addEventListener('pointermove',e=>{if(e.pointerId===this.movePointer)handleMove(e);});
    const reset=()=>{this.movePointer=null;this.mobileMove={x:0,y:0};knob.style.transform='';};
    move.addEventListener('pointerup',reset);move.addEventListener('pointercancel',reset);
    const aim=e=>{const r=fire.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;if(Math.hypot(x,y)>6)this.mobileAim={x,y};};
    fire.addEventListener('pointerdown',e=>{fire.setPointerCapture(e.pointerId);this.firePointer=e.pointerId;this.heldTouchFire=true;this.mobileAim??={x:0,y:-1};this.audio.unlock();aim(e);});
    fire.addEventListener('pointermove',e=>{if(this.firePointer===e.pointerId)aim(e);});
    const stopFire=()=>{this.heldTouchFire=false;this.firePointer=null;};
    fire.addEventListener('pointerup',stopFire);fire.addEventListener('pointercancel',stopFire);
    document.getElementById('touch-heal').onclick=()=>this.heal();document.getElementById('touch-reload').onclick=()=>this.reload();document.getElementById('touch-loot').onclick=()=>this.pickup();
  }
}
