import * as THREE from 'three';

// ---------- scene ----------
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.Fog(0x87ceeb, 900, 2800);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.5, 5000);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const hemi = new THREE.HemisphereLight(0xcfe8ff, 0x4a6a3a, 0.8);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff2cc, 1.2);
sun.position.set(400, 600, 200);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -1500; sun.shadow.camera.right = 1500;
sun.shadow.camera.top = 1500; sun.shadow.camera.bottom = -1500;
sun.shadow.camera.near = 10; sun.shadow.camera.far = 2500;
scene.add(sun);

// ---------- helpers ----------
const brickMats = {};
function brickMat(color){ if(!brickMats[color]) brickMats[color]=new THREE.MeshStandardMaterial({ color, roughness:0.7, metalness:0.05 }); return brickMats[color]; }
function box(w,h,d,color,x,y,z){
  const m = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), brickMat(color));
  m.position.set(x,y,z); m.castShadow=true; m.receiveShadow=true; return m;
}
function cyl(r,h,color,x,y,z,rx=0,rz=0){
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,16), brickMat(color));
  m.position.set(x,y,z); m.rotation.x=rx; m.rotation.z=rz; m.castShadow=true; m.receiveShadow=true; return m;
}
function studs(parent,w,d,color,y=0){
  const step=1.6;
  for(let xi=-w/2+0.8; xi<w/2-0.4; xi+=step){
    for(let zi=-d/2+0.8; zi<d/2-0.4; zi+=step){
      const s=new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,0.35,12), brickMat(color));
      s.position.set(xi,y,zi); parent.add(s);
    }
  }
}
function groupAt(x,y,z){ const g=new THREE.Group(); g.position.set(x,y,z); return g; }

function addCrumb(g, meshes){ meshes.forEach(m=>g.add(m)); }

// ---------- ground / water ----------
const ground = new THREE.Mesh(new THREE.PlaneGeometry(3600,3600), brickMat(0x4f8a3a));
ground.rotation.x=-Math.PI/2; ground.receiveShadow=true; scene.add(ground);

const lake = new THREE.Mesh(new THREE.PlaneGeometry(1600,2200), new THREE.MeshStandardMaterial({color:0x2a78b5, transparent:true, opacity:0.88, roughness:0.2, metalness:0.1}));
lake.rotation.x=-Math.PI/2; lake.position.set(900,0.05,-200); scene.add(lake);
const shore = new THREE.Mesh(new THREE.PlaneGeometry(160,2200), brickMat(0xc9b37a));
shore.rotation.x=-Math.PI/2; shore.position.set(100,0.02,-200); scene.add(shore);

// ---------- roads ----------
const roadPts = [
  [[-700,-2100],[600,-2100]],
  [[-700,-2100],[-700,700]],
  [[-700,700],[300,700]],
  [[-400,-400],[700,-400]],
  [[-400,-400],[-400,700]],
  [[0,-1200],[0,-400]],
  [[200,500],[200,700]],
  [[-250,350],[250,350]],
  [[-250,350],[-250,650]],
  [[-160,600],[60,600]],
  [[100,-400],[100,-145]],
  [[315,133],[76,289]],
];
const roadMat=brickMat(0x3a3a3a);
const lineMat=brickMat(0xffffff);
function makeRoad(a,b,width=26){
  const dx=b[0]-a[0], dz=b[1]-a[1], len=Math.hypot(dx,dz), ang=Math.atan2(dx,dz);
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,len), roadMat);
  mesh.rotation.x=-Math.PI/2; mesh.position.set((a[0]+b[0])/2,0.01,(a[1]+b[1])/2); mesh.rotation.z=-ang; mesh.receiveShadow=true; scene.add(mesh);
  const dash=new THREE.Mesh(new THREE.PlaneGeometry(1.2,len), lineMat);
  dash.rotation.x=-Math.PI/2; dash.position.set((a[0]+b[0])/2,0.015,(a[1]+b[1])/2); dash.rotation.z=-ang; scene.add(dash);
}
roadPts.forEach(([a,b])=>makeRoad(a,b));

// ---------- rng ----------
let seed=1;
function R(){ seed+=1; return (Math.sin(seed)*10000) - Math.floor(Math.sin(seed)*10000); }

// ---------- filler buildings ----------
for(let i=0;i<180;i++){
  const x=(R()*2-1)*1200, z=(R()*2-1)*1200;
  if(Math.hypot(x-900, z+200)<700) continue;
  const w=12+R()*28, d=12+R()*28, h=18+R()*70;
  const color=[0xe8e0d0,0xd9c9a8,0xc9c0b0,0xffe6a0,0xbfd7ea,0xf2c5c5][Math.floor(R()*6)];
  // will check landmark proximity after landmarks created; for now skip none (landmarks not yet). We'll just place; accept overlap rare.
  const b=box(w,h,d,color,x,h/2,z); scene.add(b);
  const sg=new THREE.Group(); sg.position.set(x,h,z); studs(sg,w,d,color); scene.add(sg);
}
// trees
function tree(x,z){
  scene.add(cyl(0.7,6,0x6b4a2b,x,3,z));
  const leaves=new THREE.Mesh(new THREE.SphereGeometry(4,10,8), brickMat(0x2e7d32));
  leaves.position.set(x,9,z); leaves.castShadow=true; scene.add(leaves);
}
for(let i=0;i<120;i++){
  const x=(R()*2-1)*1300, z=(R()*2-1)*1300;
  if(Math.hypot(x-900,z+200)<750) continue;
  tree(x,z);
}

// ---------- landmark builders ----------
function makeBrokenChair(g){
  g.add(box(80,2,50,0x9aa0a6,0,1,0));
  g.add(box(34,4,34,0xb5651d,0,12,0));
  g.add(box(34,46,6,0xb5651d,0,37,-14));
  g.add(box(5,12,5,0x5a3a1a,-14,6,14));
  g.add(box(5,12,5,0x5a3a1a,14,6,14));
  g.add(box(5,12,5,0x5a3a1a,-14,6,-14));
  const spl=box(2,6,2,0x5a3a1a,14,3,-14); spl.rotation.z=0.7; g.add(spl);
  g.add(cyl(0.6,12,0xcccccc,30,6,0));
  g.add(box(12,8,1,0x00a3e0,36,12,0));
  const sg=new THREE.Group(); sg.position.set(0,14,0); studs(sg,34,34,0xb5651d); g.add(sg);
  g.add(box(24,8,2,0xffffff,0,6,28));
}

function makeCornavin(g){
  g.add(box(150,34,40,0xdcd2b5,0,17,0));
  g.add(box(60,22,40,0xe8dcc0,-105,11,-10));
  g.add(box(60,22,40,0xe8dcc0,105,11,-10));
  g.add(box(160,4,46,0x7a3b2e,0,36,0));
  g.add(box(22,40,22,0xdcd2b5,0,56,0));
  const clock=cyl(7,2,0xffffff,0,78,11.1); clock.rotation.x=Math.PI/2; g.add(clock);
  g.add(box(40,18,6,0x8a7a5a,0,9,20));
  const sg=new THREE.Group(); sg.position.set(0,34,0); studs(sg,150,40,0xdcd2b5); g.add(sg);
  for(let i=-1;i<=1;i++) g.add(box(140,0.5,6,0x808080,0,0.25,-30+i*12));
}

function makeBains(g){
  g.add(box(200,1.2,30,0x8a7a5a,0,0.6,0));
  g.add(cyl(4,22,0xffffff,-70,11,0));
  g.add(cyl(5,4,0xffd166,-70,24,0));
  g.add(box(40,14,24,0xe6d8b8,40,7,0));
  g.add(box(44,3,28,0x8b4a2f,40,15,0));
  g.add(box(20,1,3,0x6a6a6a,100,4,0));
  const w=new THREE.Mesh(new THREE.PlaneGeometry(60,24), new THREE.MeshStandardMaterial({color:0x2a78b5,transparent:true,opacity:0.85}));
  w.rotation.x=-Math.PI/2; w.position.set(100,0.06,0); g.add(w);
}

function makePont(g){
  g.add(box(260,3,18,0x6a6a6a,0,1.5,0));
  for(let i=-3;i<=3;i++){
    const a=new THREE.Mesh(new THREE.TorusGeometry(9,1.6,8,16,Math.PI), brickMat(0x808080));
    a.position.set(i*32,0.5,0); a.rotation.x=Math.PI/2; a.rotation.z=Math.PI; g.add(a);
  }
  g.add(box(260,1.2,0.6,0xcccccc,0,4,8));
  g.add(box(260,1.2,0.6,0xcccccc,0,4,-8));
  for(let i=-4;i<=4;i++){ g.add(cyl(0.5,10,0x444444,i*30,5,9)); g.add(cyl(0.5,10,0x444444,i*30,5,-9)); }
  g.add(box(2,10,0.3,0xff0000,-120,8,0));
  g.add(box(8,5,0.3,0xff0000,-116,11,0));
  g.add(box(60,1.2,0.6,0xff0000,120,9,0));
}

function makeJet(g){
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(18,22,2,24), brickMat(0x9aa0a6)));
  const base=g.children[g.children.length-1]; base.position.set(0,1,0);
  g.add(cyl(3,4,0xcccccc,0,3,0));
  const water=new THREE.Mesh(new THREE.CylinderGeometry(1.2,2.4,120,12), new THREE.MeshStandardMaterial({color:0x4fc3f7,transparent:true,opacity:0.65,roughness:0.1}));
  water.position.set(0,62,0); g.add(water);
  for(let i=0;i<6;i++){
    const sp=new THREE.Mesh(new THREE.SphereGeometry(2+i*0.5,8,6), new THREE.MeshStandardMaterial({color:0x81d4fa,transparent:true,opacity:0.7}));
    sp.position.set((Math.random()-0.5)*8,120+Math.random()*10,(Math.random()-0.5)*8);
    g.add(sp);
  }
  g.userData.water=water;
}

function makeJardin(g){
  const clock=new THREE.Mesh(new THREE.CircleGeometry(16,32), brickMat(0x2e7d32));
  clock.rotation.x=-Math.PI/2; clock.position.set(0,0.1,0); g.add(clock);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(16,1.2,8,32), brickMat(0xffffff));
  rim.rotation.x=Math.PI/2; rim.position.set(0,0.5,0); g.add(rim);
  g.add(box(0.6,0.2,12,0x111111,0,0.6,-4));
  g.add(box(0.6,0.2,8,0x111111,4,0.6,0));
  const cols=[0xff5555,0xffdd44,0xff88cc,0xaa55ff];
  for(let i=0;i<8;i++){
    const a=i/8*Math.PI*2;
    const fl=new THREE.Mesh(new THREE.SphereGeometry(2,8,6), brickMat(cols[i%4]));
    fl.position.set(Math.cos(a)*22,1.5,Math.sin(a)*22); g.add(fl);
  }
  g.add(box(12,1,3,0x8b5a2b,-30,1.5,10));
  g.add(box(12,3,0.4,0x8b5a2b,-30,3,9));
}

function makeBelAir(g){
  const round=new THREE.Mesh(new THREE.CylinderGeometry(12,12,0.8,24), brickMat(0x777777));
  round.position.set(0,0.4,0); g.add(round);
  g.add(box(28,90,28,0xe0e7ef,0,45,0));
  for(let i=0;i<6;i++) g.add(box(0.6,86,1,0x6aa0ff,-12+i*4.8,45,14.1));
  g.add(cyl(0.6,18,0xcccccc,0,100,0));
  g.add(box(24,3,24,0x888888,0,91.5,0));
}

function makeOldTown(g){
  g.add(box(60,28,40,0xd9c9a8,0,14,0));
  g.add(box(10,55,10,0x8a7a5a,0,55.5,0));
  const top=new THREE.Mesh(new THREE.ConeGeometry(7,14,4), brickMat(0x6a5a4a));
  top.position.set(0,90,0); top.rotation.y=Math.PI/4; g.add(top);
  const rw=new THREE.Mesh(new THREE.CircleGeometry(6,24), brickMat(0x4a6fa5));
  rw.position.set(0,22,20.1); g.add(rw);
  for(let i=-2;i<=2;i++){
    g.add(box(14,16+(i%2?6:0),12,[0xe8d8b0,0xd8c0a0,0xc8b090][Math.abs(i)%3], -50+i*26, (16+(i%2?6:0))/2, -30));
  }
  g.add(box(8,0.3,60,0x888888,0,0.15,-10));
}

function makePlaceNeuve(g){
  g.add(box(110,40,26,0xf0e8d8,0,20,0));
  for(let i=-4;i<=4;i++) g.add(cyl(1.4,36,0xe8dfcf,-40+i*10,18,13));
  g.add(box(120,10,6,0xd8cfbf,0,45,0));
  g.add(box(14,10,1,0xb00020,0,5,13.1));
  g.add(cyl(1.2,6,0xbbbbbb,0,3,-25));
  g.add(box(2,4,1.2,0xbbbbbb,0,5,-25));
}

function makeBastions(g){
  g.add(box(180,14,4,0x9aa0a6,0,7,0));
  for(let i=0;i<4;i++){
    const x=-60+i*40;
    g.add(cyl(1.6,8,0xbbbbbb,x,4,-6));
    g.add(box(2.6,6,1.2,0xbbbbbb,x,7,-6));
    g.add(box(1.2,3,1,0xbbbbbb,x,12,-6));
  }
  for(let i=0;i<8;i++){
    const x=(i/(7)-0.5)*160;
    g.add(cyl(0.5,5,0x6b4a2b,x,2.5,-25+(i%2)*6));
    const leaves=new THREE.Mesh(new THREE.SphereGeometry(3,8,6), brickMat(0x2e7d32));
    leaves.position.set(x,7,-25+(i%2)*6); leaves.castShadow=true; g.add(leaves);
  }
  for(let i=0;i<3;i++) g.add(box(6,1.2,6,0xffffff,-40+i*40,0.6,20));
  // sign
  g.add(box(30,6,1,0xffffff,0,18,2.1));
}

// landmark list (name, pos, builder)
const landmarkDefs = [
  { name:'Gare Cornavin', x:-338, z:-445, build:makeCornavin },
  { name:'Broken Chair', x:-462, z:-2045, build:makeBrokenChair },
  { name:"Bains des P\u00e2quis", x:254, z:-289, build:makeBains },
  { name:'Pont du Mont-Blanc', x:108, z:-145, build:makePont },
  { name:"Jet d'Eau", x:692, z:-67, build:makeJet },
  { name:'Jardin Anglais', x:315, z:133, build:makeJardin },
  { name:'Place Bel-Air', x:77, z:289, build:makeBelAir },
  { name:'Old Town', x:-23, z:600, build:makeOldTown },
  { name:'Place de Neuve', x:-108, z:489, build:makePlaceNeuve },
  { name:'Parc des Bastions', x:-162, z:578, build:makeBastions },
];

const landmarks = [];
landmarkDefs.forEach(def => {
  const g = groupAt(def.x, 0, def.z);
  def.build(g);
  scene.add(g);
  landmarks.push({ name:def.name, x:def.x, z:def.z, group:g });
});

// label sprites
function makeLabel(text) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const font = 'bold 26px system-ui';
  ctx.font = font;
  const w = Math.ceil(ctx.measureText(text).width) + 30;
  canvas.width = w; canvas.height = 46;
  ctx.font = font;
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.roundRect(0,0,w,46,12); ctx.fill();
  ctx.fillStyle = '#ffd166';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, w/2, 23);
  const tex = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: tex, depthTest:false });
  const sp = new THREE.Sprite(mat);
  sp.scale.set(w*0.5, 23, 1);
  return sp;
}
landmarks.forEach(L => {
  const sp = makeLabel(L.name);
  sp.position.set(L.x, 26, L.z);
  scene.add(sp);
});

// distance check landmarks for pickup
function nearestLandmark(x,z){
  let best=null, bd=Infinity;
  for(const L of landmarks){ const d=Math.hypot(x-L.x,z-L.z); if(d<bd){bd=d;best=L;} }
  return { L:best, d:bd };
}

// ---------- CAR ----------

// ---------- CAR build ----------
const CAR = new THREE.Group();
scene.add(CAR);

// taxi body (LEGO studs)
const bodyMesh = box(2.6, 1.0, 5.0, 0xffd166, 0, 0.9, 0);
CAR.add(bodyMesh);
const cabin = box(2.2, 0.9, 2.6, 0x4fc3f7, 0, 1.85, -0.4);
CAR.add(cabin);
// windows tint
const winF = box(2.22, 0.85, 0.05, 0x222244, 0, 1.85, 0.92);
CAR.add(winF);
// taxi sign
const taxiSign = box(1.0, 0.4, 0.6, 0xffffff, 0, 2.35, -0.4);
CAR.add(taxiSign);
const taxiSignTop = box(1.0, 0.15, 0.6, 0xffcc00, 0, 2.55, -0.4);
CAR.add(taxiSignTop);
// bumper
CAR.add(box(2.7, 0.35, 0.6, 0xcc0000, 0, 0.4, 2.6));
CAR.add(box(2.7, 0.35, 0.6, 0xcc0000, 0, 0.4, -2.6));
// wheels
const wheelGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.5, 16);
const wheelMat = brickMat(0x1a1a1a);
function addWheel(x,z){
  const w = new THREE.Mesh(wheelGeo, wheelMat);
  w.rotation.z = Math.PI/2;
  w.position.set(x, 0.55, z);
  w.castShadow = true;
  CAR.add(w);
}
addWheel(-1.5, 1.7); addWheel(1.5, 1.7);
addWheel(-1.5, -1.7); addWheel(1.5, -1.7);
// wheel caps (studs)
[-1.5,1.5].forEach(x=>[1.7,-1.7].forEach(z=>{
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.2,0.2,0.55,8), brickMat(0xffd166));
  cap.rotation.z = Math.PI/2; cap.position.set(x,0.55,z); CAR.add(cap);
}));
// studs on body
const bodyStuds = new THREE.Group(); bodyStuds.position.set(0,1.4,0);
studs(bodyStuds, 2.6, 5.0, 0, 0xffd166);
CAR.add(bodyStuds);
// rear view / exhaust
CAR.add(box(0.15,0.15,0.6,0x444444,1.2,0.5,2.7));
CAR.add(box(0.15,0.15,0.6,0x444444,-1.2,0.5,2.7));

// car state
const carState = { x:0, z:0, yaw:Math.PI, speed:0, vx:0, vz:0, gas:false, brake:false, left:false, right:false, handbrake:false };

// ---------- passengers ----------
const passengers = []; // waiting passengers
const colors = [0xef476f,0xffd166,0x06d6a0,0x118ab2,0x9b5de5,0xf15bb5,0xfee440,0x00bbf9];
function makePassengerMesh(color) {
  const g = new THREE.Group();
  const bodyM = brickMat(color);
  const legs = new THREE.Mesh(new THREE.BoxGeometry(0.6,0.7,0.35), bodyM);
  legs.position.set(0,0.35,0); g.add(legs);
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.7,0.9,0.45), bodyM);
  torso.position.set(0,1.15,0); g.add(torso);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.6,0.6,0.6), brickMat(0xffe0bd));
  head.position.set(0,1.9,0); g.add(head);
  // face dots
  const eye = new THREE.Mesh(new THREE.BoxGeometry(0.08,0.08,0.02), brickMat(0x111111));
  eye.position.set(-0.15,2.0,0.31); g.add(eye.clone());
  const eye2 = eye.clone(); eye2.position.x=0.15; g.add(eye2);
  // hair
  g.add(box(0.7,0.15,0.65, color>0? 0x3a2a1a : 0x333333, 0, 2.22, 0));
  // arms (studs)
  g.add(box(0.2,0.7,0.2, color, -0.45,1.15,0));
  g.add(box(0.2,0.7,0.2, color, 0.45,1.15,0));
  // destination marker floating above
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.9,0.08,8,24), brickMat(0xff0000));
  ring.rotation.x = Math.PI/2; ring.position.set(0,2.6,0); g.add(ring);
  g.userData.ring = ring;
  return g;
}

// passenger instance state
let activePassenger = null; // { mesh, destName, destX, destZ, timeLeft, timeMax, color }

function spawnWaitingPassengers() {
  // keep up to 5 waiting at random landmarks
  while (passengers.length < 5) {
    const spawnLm = landmarks[Math.floor(Math.random()*landmarks.length)];
    let destLm = landmarks[Math.floor(Math.random()*landmarks.length)];
    while (destLm === spawnLm) destLm = landmarks[Math.floor(Math.random()*landmarks.length)];
    const color = colors[Math.floor(Math.random()*colors.length)];
    const mesh = makePassengerMesh(color);
    mesh.position.set(spawnLm.x + (Math.random()-0.5)*6, 0, spawnLm.z + (Math.random()-0.5)*6);
    mesh.userData.dest = destLm.name;
    mesh.userData.destLm = destLm;
    mesh.userData.color = color;
    mesh.userData.spawn = spawnLm.name;
    // waiting flag
    mesh.userData.waiting = true;
    scene.add(mesh);
    passengers.push(mesh);
  }
}

// ---------- input ----------
const input = { gas:false, brake:false, left:false, right:false, handbrake:false };
window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'w' || k === 'arrowup') input.gas = true;
  if (k === 's' || k === 'arrowdown') input.brake = true;
  if (k === 'a' || k === 'arrowleft') input.left = true;
  if (k === 'd' || k === 'arrowright') input.right = true;
  if (k === ' ' ) input.handbrake = true;
  if (['arrowup','arrowdown','arrowleft','arrowright',' '].includes(k)) e.preventDefault();
});
window.addEventListener('keyup', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'w' || k === 'arrowup') input.gas = false;
  if (k === 's' || k === 'arrowdown') input.brake = false;
  if (k === 'a' || k === 'arrowleft') input.left = false;
  if (k === 'd' || k === 'arrowright') input.right = false;
  if (k === ' ') input.handbrake = false;
});

// touch buttons
const btns = document.querySelectorAll('.controls button');
btns.forEach(b => {
  const start = (e) => { e.preventDefault(); b.classList.add('active'); };
  const end = (e) => { e.preventDefault(); b.classList.remove('active'); };
  b.addEventListener('touchstart', start, {passive:false});
  b.addEventListener('touchend', end, {passive:false});
  b.addEventListener('touchcancel', end, {passive:false});
  b.addEventListener('mousedown', start);
  b.addEventListener('mouseup', end);
  b.addEventListener('mouseleave', end);
});
function bindBtn(sel, onDown, onUp) {
  const el = document.querySelector(sel);
  if(!el) return;
  const down = (e)=>{ e.preventDefault(); onDown(true); };
  const up = (e)=>{ e.preventDefault(); onUp(false); };
  el.addEventListener('touchstart', down, {passive:false});
  el.addEventListener('touchend', up, {passive:false});
  el.addEventListener('touchcancel', up, {passive:false});
  el.addEventListener('mousedown', down);
  el.addEventListener('mouseup', up);
  el.addEventListener('mouseleave', up);
}
bindBtn('.gas', v=>input.gas=v, v=>input.gas=v);
bindBtn('.brk', v=>input.brake=v, v=>input.brake=v);
bindBtn('.left', v=>input.left=v, v=>input.left=v);
bindBtn('.right', v=>input.right=v, v=>input.right=v);
bindBtn('.hb', v=>input.handbrake=v, v=>input.handbrake=v);

// ---------- Audio ----------
let audioCtx = null;
function beep(freq=440, dur=0.12, type='square', vol=0.12) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime + dur);
  } catch(e){}
}
function sndPickup(){ beep(660,0.12,'square',0.15); setTimeout(()=>beep(990,0.15,'square',0.12),120); }
function sndDeliver(){ beep(523,0.1,'triangle',0.18); setTimeout(()=>beep(659,0.1,'triangle',0.18),100); setTimeout(()=>beep(784,0.18,'triangle',0.18),200); }
function sndTick(){ beep(880,0.04,'square',0.08); }
function sndCrash(){ beep(120,0.2,'sawtooth',0.12); }
function sndGameOver(){ beep(300,0.25,'sawtooth',0.15); setTimeout(()=>beep(220,0.4,'sawtooth',0.15),260); }

// ---------- Game state ----------
let gameRunning = false;
let totalTimer = 60;
let money = 0;
let lastTime = null;
let countdown = 0;
let tickAccum = 0;

const HUD = {
  time: document.getElementById('time'),
  money: document.getElementById('money'),
  speed: document.getElementById('speed'),
  pass: document.getElementById('pass'),
  passdest: document.getElementById('passdest'),
  passfill: document.getElementById('passfill'),
};
const startScreen = document.getElementById('start');
const overScreen = document.getElementById('over');
const overTitle = document.getElementById('overtitle');
const overSub = document.getElementById('oversub');
const startBtn = document.getElementById('startbtn');
const restartBtn = document.getElementById('restartbtn');

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

function startGame() {
  // reset
  // remove passengers
  passengers.forEach(p => scene.remove(p));
  passengers.length = 0;
  if (activePassenger) {
    if (activePassenger.mesh) scene.remove(activePassenger.mesh);
    activePassenger = null;
  }
  totalTimer = 60;
  money = 0;
  carState.x = landmarks[0].x + 6; carState.z = landmarks[0].z;
  carState.yaw = Math.PI; carState.speed = 0; carState.vx=0; carState.vz=0;
  CAR.position.set(carState.x, 0, carState.z);
  CAR.rotation.y = carState.yaw;
  spawnWaitingPassengers();
  gameRunning = true;
  countdown = 3;
  lastTime = null;
  startScreen.style.display = 'none';
  overScreen.style.display = 'none';
  beep(440,0.1); setTimeout(()=>beep(550,0.1),300); setTimeout(()=>beep(700,0.2),600);
}

function endGame() {
  gameRunning = false;
  overTitle.textContent = 'Time\'s Up!';
  overSub.textContent = `You earned $${money}!`;
  overScreen.style.display = 'flex';
  sndGameOver();
}

// ---------- camera ----------
const camOffset = new THREE.Vector3(0, 18, -22);
const camLook = new THREE.Vector3(0, 2, 0);

// ---------- minimap ----------
const mm = document.getElementById('minimap');
const mmCtx = mm.getContext('2d');
mm.width = 180; mm.height = 180;
const mmScale = 0.09;
function drawMinimap() {
  mmCtx.fillStyle = 'rgba(0,0,0,0.6)';
  mmCtx.fillRect(0,0,180,180);
  mmCtx.save();
  mmCtx.translate(90,90);
  // landmarks
  landmarks.forEach(L => {
    mmCtx.fillStyle = L.name === (activePassenger?.destName) ? '#ff5555' : '#ffd166';
    mmCtx.beginPath();
    mmCtx.arc(L.x*mmScale, L.z*mmScale, 4, 0, Math.PI*2);
    mmCtx.fill();
  });
  // passengers
  passengers.forEach(p => {
    mmCtx.fillStyle = '#06d6a0';
    mmCtx.beginPath();
    mmCtx.arc(p.position.x*mmScale, p.position.z*mmScale, 3, 0, Math.PI*2);
    mmCtx.fill();
  });
  if (activePassenger) {
    mmCtx.fillStyle = '#ffffff';
    mmCtx.beginPath();
    mmCtx.arc(activePassenger.mesh.position.x*mmScale, activePassenger.mesh.position.z*mmScale, 4, 0, Math.PI*2);
    mmCtx.fill();
    // dest ring
    const dl = landmarks.find(l=>l.name===activePassenger.destName);
    if (dl) {
      mmCtx.strokeStyle = '#ff5555';
      mmCtx.lineWidth = 2;
      mmCtx.beginPath();
      mmCtx.arc(dl.x*mmScale, dl.z*mmScale, 7, 0, Math.PI*2);
      mmCtx.stroke();
    }
  }
  // car
  mmCtx.fillStyle = '#ffffff';
  mmCtx.save();
  mmCtx.translate(carState.x*mmScale, carState.z*mmScale);
  mmCtx.rotate(-carState.yaw); // approx
  mmCtx.fillRect(-3, -5, 6, 10);
  mmCtx.restore();
  mmCtx.restore();
}

// ---------- loop ----------
function clamp(v,a,b){ return Math.max(a,Math.min(b,v)); }
function lerp(a,b,t){ return a+(b-a)*t; }

function updateCar(dt) {
  const st = carState;
  st.gas = input.gas; st.brake = input.brake; st.left = input.left; st.right = input.right; st.handbrake = input.handbrake;

  const maxSpeed = 75;
  const accel = 55;
  const brakeDecel = 70;
  const reverseMax = 20;
  // throttle
  if (st.gas) {
    if (st.speed >= 0) st.speed += accel*dt;
    else st.speed += brakeDecel*dt; // brake out of reverse
  } else if (st.brake) {
    if (st.speed <= 0) st.speed -= accel*dt*0.6;
    else st.speed -= brakeDecel*dt;
  } else {
    if (st.speed > 0) { st.speed -= 18*dt; if(st.speed<0) st.speed=0; }
    else if (st.speed < 0) { st.speed += 18*dt; if(st.speed>0) st.speed=0; }
  }
  st.speed = clamp(st.speed, -reverseMax, maxSpeed);

  // steering
  let steer = 0;
  if (st.left) steer = 1;
  if (st.right) steer = -1;
  const speedRatio = clamp(Math.abs(st.speed)/maxSpeed, 0, 1);
  let turnRate = 2.2 * (0.35 + 0.65*speedRatio);
  if (st.handbrake && Math.abs(st.speed) > 8) turnRate *= 1.9;
  const dir = st.speed >= 0 ? 1 : -1;
  st.yaw += steer * turnRate * dt * dir;

  // velocity
  const fx = Math.sin(st.yaw), fz = Math.cos(st.yaw);
  const targetVx = fx*st.speed;
  const targetVz = fz*st.speed;
  if (st.handbrake) {
    st.vx = lerp(st.vx, targetVx, dt*2.2);
    st.vz = lerp(st.vz, targetVz, dt*2.2);
    // speed bleed
    st.speed *= (1 - 0.4*dt);
    // recompute magnitude? keep st.speed as engine; apply velocity derived
  } else {
    st.vx = targetVx; st.vz = targetVz;
  }

  st.x += st.vx*dt;
  st.z += st.vz*dt;

  // bounds (keep within world)
  const B = 1700;
  if (st.x > B) { st.x = B; st.vx=0; st.speed=0; sndCrash(); }
  if (st.x < -B) { st.x = -B; st.vx=0; st.speed=0; sndCrash(); }
  if (st.z > B) { st.z = B; st.vz=0; st.speed=0; sndCrash(); }
  if (st.z < -B) { st.z = -B; st.vz=0; st.speed=0; sndCrash(); }

  // simple building collision: avoid entering buildings? skip for flow; add gentle stop if inside filler? We'll do landmark proximity slowdown not block.

  CAR.position.set(st.x, 0, st.z);
  CAR.rotation.y = st.yaw;
}

function updateGame(dt) {
  if (!gameRunning) return;
  if (countdown > 0) {
    countdown -= dt;
    if (countdown <= 0) { countdown = 0; beep(880,0.15); }
    // still run car? maybe allow driving after 0; during countdown freeze? Let's freeze until countdown done
    // freeze
    return;
  }

  totalTimer -= dt;
  if (totalTimer <= 0) { totalTimer = 0; endGame(); return; }

  // engine sound? no.

  // tick sfx every second when active passenger
  tickAccum += dt;
  if (tickAccum > 1) { tickAccum = 0; if (activePassenger && activePassenger.timeLeft < 6) sndTick(); }

  updateCar(dt);

  // animate passengers rings
  passengers.forEach((p, idx) => {
    if (p.userData.waiting) {
      p.position.y = 0; // ground
      const ring = p.children.find(c=>c.geometry && c.geometry.type==='TorusGeometry');
      if (ring) ring.rotation.z += dt*2;
      // bob
      p.position.y = Math.sin(performance.now()/400 + idx)*0.15;
    }
  });
  if (activePassenger && activePassenger.mesh) {
    const m = activePassenger.mesh;
    // follow car? passenger rides on car roof/backseat -> attach visually to car
    // position passenger at car position slightly behind
    const localX = -Math.sin(carState.yaw)*1.6;
    const localZ = -Math.cos(carState.yaw)*1.6;
    m.position.set(carState.x + localX, 0.2, carState.z + localZ);
    m.rotation.y = carState.yaw;
    activePassenger.timeLeft -= dt;
    HUD.passfill.style.width = (activePassenger.timeLeft/activePassenger.timeMax*100) + '%';
    HUD.passdest.textContent = `\u2192 ${activePassenger.destName}  (${activePassenger.timeLeft.toFixed(1)}s)`;
    if (activePassenger.timeLeft <= 0) {
      // fail, drop
      scene.remove(m);
      activePassenger = null;
      HUD.pass.style.display = 'none';
      sndCrash();
      spawnWaitingPassengers();
    }
  }

  // pickup: if no active, check proximity to waiting passenger
  if (!activePassenger) {
    for (let i = passengers.length - 1; i >= 0; i--) {
      const p = passengers[i];
      if (Math.hypot(p.position.x - carState.x, p.position.z - carState.z) < 6) {
        // pickup
        passengers.splice(i, 1);
        p.userData.waiting = false;
        // remove ring? keep
        activePassenger = {
          mesh: p,
          destName: p.userData.dest,
          destX: p.userData.destLm.x,
          destZ: p.userData.destLm.z,
          color: p.userData.color,
        };
        const dist = Math.hypot(p.position.x - p.userData.destLm.x, p.position.z - p.userData.destLm.z);
        activePassenger.timeMax = Math.max(12, dist / 18 + 8);
        activePassenger.timeLeft = activePassenger.timeMax;
        HUD.pass.style.display = 'block';
        HUD.passdest.textContent = '\u2192 ' + activePassenger.destName;
        sndPickup();
        // remove from scene? will reposition in update
        break;
      }
    }
  }

  // delivery: if active, check proximity to destination landmark
  if (activePassenger) {
    const d = Math.hypot(carState.x - activePassenger.destX, carState.z - activePassenger.destZ);
    if (d < 16) {
      // deliver
      const bonus = Math.round(activePassenger.timeLeft * 15);
      const fare = 30 + bonus;
      money += fare;
      totalTimer += 12;
      HUD.money.textContent = '$' + money;
      scene.remove(activePassenger.mesh);
      activePassenger = null;
      HUD.pass.style.display = 'none';
      sndDeliver();
      spawnWaitingPassengers();
    }
  }

  // ensure passengers count
  spawnWaitingPassengers();

  // camera follow
  const behind = new THREE.Vector3(
    carState.x - Math.sin(carState.yaw)*22,
    16,
    carState.z - Math.cos(carState.yaw)*22
  );
  camera.position.lerp(behind, 0.08);
  camera.lookAt(carState.x, 2, carState.z);

  HUD.time.textContent = totalTimer.toFixed(1);
  HUD.speed.textContent = Math.round(Math.abs(carState.speed));

  drawMinimap();
}

// HUD initial
HUD.speed.textContent = '0';

function animate() {
  requestAnimationFrame(animate);
  const now = performance.now()/1000;
  if (lastTime === null) lastTime = now;
  let dt = now - lastTime;
  lastTime = now;
  if (dt > 0.1) dt = 0.1;
  if (gameRunning) {
    updateGame(dt);
  } else {
    // idle camera rotate
    camera.position.set(0, 60, 120);
    camera.lookAt(0,0,0);
    drawMinimap();
  }
  // jet animation
  landmarks.forEach(L => {
    if (L.name === "Jet d'Eau" && L.group.userData.water) {
      const w = L.group.userData.water;
      w.scale.y = 1 + Math.sin(now*2)*0.03;
    }
  });
  renderer.render(scene, camera);
}
animate();

// initial car pos already set in startGame; set default view
carState.x = 0; carState.z = 0;
CAR.position.set(0,0,0);
