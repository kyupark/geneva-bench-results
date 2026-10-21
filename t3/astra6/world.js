import * as THREE from './vendor/three.module.js';

export const DISTRICTS = {
  oldtown: { name: 'Old Town', french: 'VIEILLE VILLE', x: 12, z: 18, view: [10, 10], spawn: [3, 20] },
  lakefront: { name: 'The Lakefront', french: 'LES QUAIS', x: 95, z: -48, view: [65, -48], spawn: [95, -56] },
  neuve: { name: 'Place de Neuve', french: 'PLACE DE NEUVE', x: -83, z: 48, view: [-65, 45], spawn: [-80, 45] },
  bastions: { name: 'Parc des Bastions', french: 'PARC DES BASTIONS', x: -40, z: 116, view: [-32, 94], spawn: [-42, 112] }
};
export const BOUNDS = { minX: -163, maxX: 164, minZ: -115, maxZ: 161 };
export const colliders = [];
export const buildings = [];
export const treePositions = [];
export const LAND = [[-175,-135],[-102,-123],[-63,-100],[-22,-84],[56,-77],[178,-55],[180,175],[-175,175]];
export const palette = { ground: '#b9b7a1', street:'#c4bba7', park:'#7d9570', water:'#5caaa7', roof:'#b97453' };
let seed = 4817;
export function random() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
const rand = (a,b) => a + random() * (b-a);
const materialCache = new Map();
export function material(color, options = {}) {
  const key = color + JSON.stringify(options);
  if (!materialCache.has(key)) materialCache.set(key, new THREE.MeshStandardMaterial({ color, roughness: .9, ...options }));
  return materialCache.get(key);
}
const geos = {
  box: new THREE.BoxGeometry(1,1,1),
  cylinder: new THREE.CylinderGeometry(1,1,1,10),
  cone: new THREE.ConeGeometry(1,1,8),
  sphere: new THREE.IcosahedronGeometry(1,1),
  roof: new THREE.CylinderGeometry(1,1,1,3,1,false,Math.PI/2),
};
export function meshBox(w,h,d,color,x=0,y=0,z=0) {
  const mesh = new THREE.Mesh(geos.box, material(color)); mesh.scale.set(w,h,d);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;return mesh;
}
export function disposeDynamic(root) {
  const sharedGeometry=new Set(Object.values(geos)),sharedMaterials=new Set(materialCache.values());
  const geometries=new Set(),materials=new Set();
  root.traverse(object=>{
    if(object.geometry&&!sharedGeometry.has(object.geometry))geometries.add(object.geometry);
    if(object.material)for(const mat of Array.isArray(object.material)?object.material:[object.material])if(!sharedMaterials.has(mat))materials.add(mat);
  });
  geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
}
export function inLand(x,z,margin=0) {
  if(x<BOUNDS.minX+margin||x>BOUNDS.maxX-margin||z>BOUNDS.maxZ-margin) return false;
  let coast;
  if(x<-102) coast=-135+(x+175)*12/73;
  else if(x<-63) coast=-123+(x+102)*23/39;
  else if(x<-22) coast=-100+(x+63)*16/41;
  else if(x<56) coast=-84+(x+22)*7/78;
  else coast=-77+(x-56)*22/122;
  return z>coast+6+margin;
}
export function blocked(x,z,r=1.1) {
  if(!inLand(x,z,r)) return true;
  return colliders.some(c=>x>c.x-c.w/2-r&&x<c.x+c.w/2+r&&z>c.z-c.d/2-r&&z<c.z+c.d/2+r);
}
export function districtAt(x,z) {
  if(z<-39) return 'lakefront';
  if(z>78&&x<40) return 'bastions';
  if(x<-50&&z>12&&z<85) return 'neuve';
  return 'oldtown';
}
export function segmentBlocked(x1,z1,x2,z2, padding=0) {
  const dx=x2-x1,dz=z2-z1;
  for(const c of colliders) {
    let lo=0,hi=1;
    for(const [o,v,min,max] of [[x1,dx,c.x-c.w/2-padding,c.x+c.w/2+padding],[z1,dz,c.z-c.d/2-padding,c.z+c.d/2+padding]]) {
      if(Math.abs(v)<.0001) { if(o<min||o>max){hi=-1;break;} }
      else {let a=(min-o)/v,b=(max-o)/v;if(a>b)[a,b]=[b,a];lo=Math.max(lo,a);hi=Math.min(hi,b);}
    }
    if(lo<=hi&&hi>=0&&lo<=1)return true;
  }
  return false;
}

export function buildWorld(scene) {
  const batches = new Map(), dummy = new THREE.Object3D();
  let activeBuilding=-1;
  const cutaways=[],roofMeshes=[];
  function shape(type,x,y,z,sx,sy,sz,color,rotation=0) {
    const key=type+color;
    if(!batches.has(key)) batches.set(key,{geo:geos[type],color,matrices:[],owners:[]});
    dummy.position.set(x,y,z);dummy.rotation.set(0,rotation,0);dummy.scale.set(sx,sy,sz);dummy.updateMatrix();
    batches.get(key).matrices.push(dummy.matrix.clone());
    batches.get(key).owners.push(activeBuilding);
  }
  function box(x,y,z,w,h,d,color,rot=0) {shape('box',x,y,z,w,h,d,color,rot);}
  function cylinder(x,y,z,r,h,color){shape('cylinder',x,y,z,r,h,r,color);}
  function foliage(x,y,z,r,color,squash=1){shape('sphere',x,y,z,r,r*squash,r,color);}
  function obstacle(x,z,w,d,h=8){colliders.push({x,z,w,d,h});}
  function building(x,z,w,d,h,color='#d9c9a6',roof='#b47758',style='gable') {
    buildings.push({x,z,w,d,h,color,roof});obstacle(x,z,w,d,h);
    activeBuilding=buildings.length-1;
    cutaways[activeBuilding]={factor:1,parts:[],bounds:new THREE.Box3(new THREE.Vector3(x-w/2-1,0,z-d/2-1),new THREE.Vector3(x+w/2+1,h+Math.min(w,d)*.4,z+d/2+1))};
    box(x,h/2,z,w,h,d,color);
    box(x,.5,z,w+.5,1,d+.5,'#b4a790');
    box(x,h-.4,z,w+.5,.65,d+.5,'#e2d6bc');
    if(style==='gable') {
      // A triangular prism gives the old town its familiar pitched rooftops.
      const geo=new THREE.BufferGeometry();
      const H=Math.min(w,d)*.34;
      const v=[-w/2,0,-d/2,w/2,0,-d/2,0,H,-d/2,-w/2,0,d/2,w/2,0,d/2,0,H,d/2];
      geo.setAttribute('position',new THREE.Float32BufferAttribute(v,3));
      geo.setIndex([0,2,1,3,4,5,0,3,5,0,5,2,2,5,4,2,4,1,0,1,4,0,4,3]);
      const flatGeo=geo.toNonIndexed();flatGeo.computeVertexNormals();geo.dispose();
      const m=new THREE.Mesh(flatGeo,material(roof));m.position.set(x,h,z);m.castShadow=true;m.receiveShadow=true;scene.add(m);
      roofMeshes.push({mesh:m,owner:activeBuilding,height:h});
      box(x-w*.2,h+H*.45,z+d*.2,1.1,2.5,1.2,'#aa8870');
    } else {box(x,h+.6,z,w+.8,1.2,d+.8,roof);box(x,h+1.4,z,w-2,.6,d-2,'#696f63');}
    const rows=Math.max(1,Math.floor(h/3.4)),cols=Math.floor(w/3.7),sides=Math.floor(d/3.7);
    for(let row=0;row<rows;row++) {
      const y=2+row*3.25;
      for(let col=0;col<cols;col++) {
        const X=x-w/2+(col+1)*w/(cols+1);
        for(const side of [-1,1]){
          const Z=z+side*(d/2+.04);box(X,y,Z,1,1.65,.16,'#526365');
          box(X,y-.85,Z,1.35,.17,.35,'#f0dfc0');
          if(random()>.4){box(X-.77,y,Z,.34,1.7,.17,'#648277');box(X+.77,y,Z,.34,1.7,.17,'#648277');}
        }
      }
      for(let col=0;col<sides;col++) {
        const Z=z-d/2+(col+1)*d/(sides+1);
        for(const side of [-1,1]) {box(x+side*(w/2+.04),y,Z,.16,1.65,1,'#526365');box(x+side*(w/2+.04),y-.85,Z,.35,.17,1.35,'#f0dfc0');}
      }
    }
    box(x,1.3,z+d/2+.08,1.7,2.6,.17,'#4e5b50');
    if(random()>.55&&h<16){box(x,2.9,z+d/2+1.4,w*.6,.3,2.4,random()>.5?'#c77b59':'#799989');box(x,2.5,z+d/2+2.5,w*.6,.5,.2,'#edddb8');}
    activeBuilding=-1;
  }
  function tree(x,z,r=3.4,h=7,color='#67886a') {
    treePositions.push({x,z,r});cylinder(x,h*.32,z,.38,h*.65,'#766958');
    foliage(x,h*.86,z,r,color,1.15);foliage(x-r*.5,h*.77,z+r*.15,r*.64,'#789771');
    obstacle(x,z,.9,.9,h);
  }
  function bench(x,z,rot=0){
    box(x,.9,z,3,.25,1,'#8c7052',rot);box(x,1.5,z-.38,3,1,.17,'#8c7052',rot);
    for(const dx of [-1,1])box(x+dx,.45,z,.17,.9,.85,'#465a51',rot);
  }
  function lamp(x,z) {cylinder(x,2.5,z,.11,5,'#455e55');box(x,5.1,z,.75,.9,.75,'#e7ddad');box(x,5.7,z,1,.2,1,'#465c54');}

  scene.background = new THREE.Color('#b0c5b8');
  scene.fog = new THREE.FogExp2('#b1c9bd',.0015);
  const sky = new THREE.HemisphereLight('#fff9e5','#738b77',2.3);scene.add(sky);
  const sun = new THREE.DirectionalLight('#fff1d2',3.3);sun.position.set(-100,180,-65);sun.castShadow=true;
  sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-210;sun.shadow.camera.right=210;sun.shadow.camera.top=210;sun.shadow.camera.bottom=-210;sun.shadow.camera.far=650;sun.shadow.normalBias=.5;sun.shadow.bias=-.0001;scene.add(sun);
  const waterMaterial = new THREE.MeshStandardMaterial({color:'#4d9d9a',roughness:.34,metalness:.22});
  const water = new THREE.Mesh(new THREE.PlaneGeometry(2400,2400),waterMaterial);water.rotation.x=-Math.PI/2;water.position.y=-.65;water.receiveShadow=true;scene.add(water);
  const landShape=new THREE.Shape();LAND.forEach(([x,z],i)=>i?landShape.lineTo(x,-z):landShape.moveTo(x,-z));landShape.closePath();
  const terrain=new THREE.Mesh(new THREE.ExtrudeGeometry(landShape,{depth:2,bevelEnabled:false}),material('#b4b5a1'));
  terrain.rotation.x=-Math.PI/2;terrain.position.y=-2;terrain.receiveShadow=true;scene.add(terrain);
  // Quays and retaining walls follow the shoreline.
  for(let i=0;i<4;i++) {
    const [ax,az]=LAND[i],[bx,bz]=LAND[i+1],len=Math.hypot(bx-ax,bz-az),angle=-Math.atan2(bz-az,bx-ax);
    box((ax+bx)/2,.1,(az+bz)/2,len,1.1,5.2,'#dbd5bf',angle);
    box((ax+bx)/2,1,(az+bz)/2,len,.35,.45,'#9d9f8a',angle);
  }
  // Broad streets and blocks of narrow Old Town lanes.
  box(0,.025,-56,330,.07,12,'#c8c1aa');box(-75,.025,-3,14,.07,165,'#b9b9a6');
  box(6,.025,21,15,.07,203,'#c8c1aa');box(68,.025,28,15,.07,181,'#c8c1aa');
  box(7,.03,-20,275,.08,10,'#c8c1aa');box(5,.03,52,290,.08,12,'#c8c1aa');
  box(-111,.03,26,10,.08,205,'#c8c1aa');box(123,.03,64,11,.08,180,'#c8c1aa');
  box(86,.03,105,160,.08,12,'#c8c1aa');
  const wallColors=['#cfbf9e','#ded3ba','#c7b798','#e2d0af','#bbc0ab','#cbbfa9','#d5c6a8'];
  const roofs=['#ad6c50','#c08459','#92664e','#b7785a','#b87d62'];
  const blocks=[
    [-145,-82,22,26,12],[-111,-77,25,26,15],[-49,-61,25,17,11],[-18,-57,24,18,12],
    [28,-51,30,20,13],[60,-49,20,18,11],[94,-42,23,14,12],[137,-31,23,23,11],
    [-142,-32,24,28,13],[-103,-33,20,24,15],[-53,-22,22,23,13],[-22,-21,21,19,11],
    [-144,5,24,26,13],[-103,2,20,23,12],[-48,10,26,24,15],[-20,10,18,21,13],
    [29,31,29,24,13],[55,29,15,21,12],[91,0,25,28,15],[129,7,24,25,13],[155,13,13,20,12],
    [93,34,25,22,13],[133,39,23,21,15],[-22,39,20,15,10],[-43,38,15,15,12],
    [28,73,28,21,14],[56,74,17,23,12],[94,73,28,23,14],[141,76,22,29,12],
    [62,132,23,25,12],[93,132,26,25,15],[141,132,23,26,13],[-145,64,21,27,14],[-145,101,24,24,12],[-145,139,23,24,15],
    [-108,140,21,25,12],[-105,100,18,22,11]
  ];
  blocks.forEach((b,i)=>building(...b,wallColors[i%wallColors.length],roofs[i%roofs.length]));
  // Saint-Pierre: nave, transepts, twin towers and the copper spire.
  building(37,-5,19,36,17,'#d6cbb2','#6f847d');
  building(37,0,35,12,12,'#d7cbb2','#75897d');
  for(const x of [27,47]){
    building(x,12,7,8,26,'#d8cdb4','#75897d','flat');
    shape('cone',x,31,12,5,9,5,'#70847c');
    for(const dx of [-2,2])box(x+dx,23.5,16.1,.8,3,.15,'#4d655f');
  }
  cylinder(37,26,-6,3.2,16,'#c7bfa8');shape('cone',37,41,-6,4,18,4,'#608a80');box(37,51,-6,.35,3,.35,'#9aab8a');box(37,51.7,-6,1.8,.25,.25,'#9aab8a');
  for(let i=0;i<6;i++)cylinder(24+i*5.2,5.8,17.5,.6,11,'#eee0c0');
  box(37,11.6,17.5,30,.8,3,'#d9d0ba');
  for(let i=0;i<4;i++)box(37,.2+i*.2,20+i*.5,30-i, .4,2,'#ded4b9');
  // Place du Bourg-de-Four fountain.
  cylinder(28,.5,52,3.2,1,'#a69f88');cylinder(28,1,52,2.6,.25,'#70aaa1');cylinder(28,2,52,.5,3.5,'#c3b69a');
  // Place de Neuve and the Grand Théâtre.
  cylinder(-80,.02,49,25,.08,'#c1bba8');
  building(-81,5,42,23,14,'#c8bba1','#7e8275','flat');
  box(-81,14.8,5,39,2.1,21,'#adb1a0');
  for(let i=0;i<7;i++) {cylinder(-98+i*5.6,6.5,18,.65,11,'#e0d5bb');box(-98+i*5.6,11.7,18,2,1.2,2,'#d5c9af');}
  box(-81,12.7,18,43,1.4,4,'#ddd1b4');box(-81,.4,21,46,.8,7,'#d1c8af');
  const pediment = new THREE.Mesh(new THREE.ConeGeometry(1,1,3),material('#d9cdb2'));pediment.position.set(-81,17,18.5);pediment.scale.set(22,6,2.5);pediment.rotation.z=Math.PI;scene.add(pediment);
  // General Dufour monument: horse and rider in the central square.
  cylinder(-80,1.25,48,3.5,2.5,'#a2a58c');box(-80,3.2,48,3.7,2,2.3,'#c5bda3');
  box(-80,5.9,48,3.7,1.8,1.3,'#526e60');
  for(const dx of [-1.3,1.3])for(const dz of [-.45,.45])box(-80+dx,4.7,48+dz,.3,1.8,.3,'#526e60');
  box(-81.7,7,48,.9,2,.8,'#526e60',-.2);foliage(-80,8.5,48,.6,'#526e60');box(-80,7.4,48,.8,1.7,.8,'#526e60');
  obstacle(-80,48,6,6,6);
  // Bastions: formal lawns, tree avenues, chess boards, and Reformation Wall.
  box(-29,.08,115,122,.12,76,'#829774');box(-27,.14,115,10,.1,75,'#cfccb2');box(-29,.14,101,123,.1,7,'#cfccb2');
  box(-29,.14,141,123,.1,6,'#cfccb2');box(-80,.14,115,5,.1,76,'#cfccb2');
  box(22,.14,115,5,.1,76,'#cfccb2');
  for(const x of [-66,-43,-11,10])for(const z of [87,114,133,153]){if((x===-43||x===-11)&&z===114)continue;tree(x,z,rand(3.2,4.8),rand(7.5,10));}
  for(let z=86;z<155;z+=12){tree(-88,z,3.3,8,'#688765');tree(30,z,3.2,8,'#72916b');}
  box(-26,3.5,156,92,7,3,'#b7b49d');box(-26,7.1,156,94,.4,3.6,'#cdc8af');obstacle(-26,156,94,3,7);
  for(let i=0;i<4;i++){box(-39+i*8,3.6,153.8,2.5,4.3,1.8,'#d6d1b9');foliage(-39+i*8,6.1,153.9,.85,'#d6d1b9');}
  for(let n=0;n<2;n++){
    const cx=-63+n*23,cz=117;
    box(cx,.22,cz,13,.2,13,'#e1d8bd');
    for(let i=0;i<8;i++)for(let j=0;j<8;j++)if((i+j)%2===0)box(cx-5.25+i*1.5,.35,cz-5.25+j*1.5,1.5,.08,1.5,'#6f7c67');
    for(let i=0;i<4;i++){cylinder(cx-4.5+i*3,.8,cz-4.5,.45,1,'#efdfbd');cylinder(cx-4.5+i*3,.8,cz+4.5,.45,1,'#4b6155');}
  }
  for(const x of [-70,-40,-13,14]){bench(x,94);bench(x,145,Math.PI);}
  // Lakefront promenade, trees, lamps, marina.
  for(let x=-55;x<166;x+=15){tree(x,-67+x*.08,3.3,8,'#78936c');lamp(x+6,-63+x*.08);}
  for(let x=-40;x<155;x+=29){bench(x,-72+x*.1);box(x,-.2,-86+x*.15,2,.4,18,'#afad92');}
  for(let x=-153;x<151;x+=33){lamp(x,-47);if(x>-10)bench(x+4,-46);}
  // More trees, market stalls, and small props to give the streets a lived-in scale.
  for(const [x,z] of [[-123,25],[-120,65],[-56,60],[-52,72],[12,71],[11,-35],[73,92],[112,117],[115,50],[159,54],[-100,-52],[-153,-57],[-7,83],[-122,-91]])tree(x,z,3.5,8);
  for(const [x,z] of [[-59,49],[-54,49],[14,39],[19,39]]){
    box(x,1,z,3,.6,2,'#ab8c64');box(x,3,z,4,.25,3,'#c98c61');
    for(const dx of [-1.5,1.5])box(x+dx,1.8,z,.12,2.5,.12,'#6e7965');
  }
  // Road paint and crossings.
  for(let x=-160;x<167;x+=10){box(x,.09,-56,3.5,.04,.22,'#e4dbbc');box(x,.09,52,3.5,.04,.22,'#e4dbbc');}
  for(let i=0;i<6;i++){box(-74,.11,-46+i*1.2,10,.05,.55,'#e9e0c7');box(68,.11,39+i*1.2,10,.05,.55,'#e9e0c7');}
  function car(x,z,color,rot=0) {
    const g=new THREE.Group();g.add(meshBox(3,1,6,color,0,.8,0));g.add(meshBox(2.7,1.1,3.2,'#61827f',0,1.8,-.3));g.add(meshBox(2.8,.2,3.4,color,0,2.4,-.3));
    for(const X of [-1.5,1.5])for(const Z of [-1.8,1.8])g.add(meshBox(.3,.8,1.1,'#435550',X,.5,Z));
    g.position.set(x,0,z);g.rotation.y=rot;scene.add(g);obstacle(x,z,rot?6:3,rot?3:6,2.5);
  }
  car(-66,-40,'#a3b6a3');car(116,63,'#b99d7b');car(20,-48,'#e5d2a3',Math.PI/2);car(-125,93,'#65857b');car(103,98,'#d1bc94',Math.PI/2);
  // Flags.
  for(const [x,z] of [[56,17],[-104,19],[-86,77]]){
    cylinder(x,5,z,.12,10,'#727e6b');box(x+1.2,9,z,2.3,1.6,.06,'#c9604b');
    box(x+1.2,9,z+.04,1,.3,.04,'#fff5db');box(x+1.2,9,z+.04,.3,1,.04,'#fff5db');
  }
  for(const {geo,color,matrices,owners} of batches.values()){
    const instanced=new THREE.InstancedMesh(geo,material(color),matrices.length);
    matrices.forEach((m,i)=>{instanced.setMatrixAt(i,m);if(owners[i]>=0)cutaways[owners[i]].parts.push({mesh:instanced,index:i,matrix:m});});instanced.castShadow=true;instanced.receiveShadow=true;instanced.computeBoundingSphere();scene.add(instanced);
  }
  // Boats remain animated independently of the city batches.
  const boats=[];
  for(let i=0;i<12;i++){
    const boat=new THREE.Group();boat.add(meshBox(3.4,.8,7.5,'#eee4c9',0,0,0));boat.add(meshBox(2.5,.7,4,'#b09c79',0,.65,0));
    boat.add(meshBox(.12,8,.12,'#c9d5bf',0,4,0));
    const sailGeo=new THREE.BufferGeometry();sailGeo.setAttribute('position',new THREE.Float32BufferAttribute([0,7.5,0,0,1,0,0,1,3.2],3));sailGeo.computeVertexNormals();
    boat.add(new THREE.Mesh(sailGeo,material('#f6edd3',{side:THREE.DoubleSide})));
    boat.position.set(-40+i*17,-.3,-107+(i%3)*7);boat.rotation.y=rand(-.5,.5);scene.add(boat);boats.push(boat);
  }
  const steamer=new THREE.Group();steamer.add(meshBox(7.5,1.8,27,'#eee5ca',0,0,0));steamer.add(meshBox(6,2,18,'#e5d8b6',0,1.8,0));steamer.add(meshBox(6.4,.3,19,'#6a8580',0,3,0));steamer.add(meshBox(1.6,4,2,'#bc8d54',0,4,-1));steamer.position.set(110,0,-131);steamer.rotation.y=.7;scene.add(steamer);boats.push(steamer);
  // Jet d'Eau: translucent arcs and a pale plume.
  const fountain=new THREE.Group();const fountainMat=material('#e4f4e7',{transparent:true,opacity:.68,roughness:.3});
  const jet=new THREE.Mesh(new THREE.ConeGeometry(1.4,43,10),fountainMat);jet.rotation.z=Math.PI;jet.position.y=21;fountain.add(jet);
  for(let i=0;i<7;i++) {
    const angle=i/7*Math.PI*2,pts=[];
    for(let j=0;j<=20;j++){const t=j/20;pts.push(new THREE.Vector3(Math.cos(angle)*t*t*10,40*(1-t*t),Math.sin(angle)*t*t*10));}
    const arc=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),20,.18,4,false),fountainMat);fountain.add(arc);
  }
  const splash=new THREE.Mesh(new THREE.CylinderGeometry(11,11,.1,32),material('#a9d5c3',{transparent:true,opacity:.45}));fountain.add(splash);
  fountain.position.set(108,-.3,-164);scene.add(fountain);
  const ripples=[];
  for(let i=0;i<25;i++){const r=new THREE.Mesh(new THREE.PlaneGeometry(rand(5,19),.25),new THREE.MeshBasicMaterial({color:'#c4e6d1',transparent:true,opacity:.2}));r.rotation.x=-Math.PI/2;r.position.set(rand(-220,270),-.6,rand(-230,-130));scene.add(r);ripples.push(r);}
  // The Alps make a distant, quiet silhouette.
  for(let i=0;i<18;i++){
    const x=-650+i*76,h=rand(65,155);
    const mountain=new THREE.Mesh(new THREE.ConeGeometry(rand(85,130),h,5),material(i%2?'#8faeaa':'#91b4ae'));
    mountain.position.set(x,h/2-5,-520-rand(0,150));mountain.rotation.y=rand(0,4);scene.add(mountain);
    const peak=new THREE.Mesh(new THREE.ConeGeometry(30,h*.28,5),material('#d5ded0'));peak.position.set(x,h*.86-5,mountain.position.z);peak.rotation.y=mountain.rotation.y;scene.add(peak);
  }
  const cutawayRay=new THREE.Ray(),cutawayMatrix=new THREE.Matrix4();
  return {sun,water,boats,fountain,updateCutaways(player,camera,dt){
    if(player){cutawayRay.origin.set(player.x,2,player.z);cutawayRay.direction.copy(camera.position).sub(cutawayRay.origin).normalize();}
    for(const entry of cutaways){
      const target=player&&cutawayRay.intersectsBox(entry.bounds)?.12:1;
      if(Math.abs(entry.factor-target)<.002)continue;
      entry.factor+=(target-entry.factor)*(1-Math.exp(-dt*10));
      if(Math.abs(entry.factor-target)<.002)entry.factor=target;
      for(const part of entry.parts){
        cutawayMatrix.copy(part.matrix);
        for(const i of [1,5,9,13])cutawayMatrix.elements[i]*=entry.factor;
        part.mesh.setMatrixAt(part.index,cutawayMatrix);part.mesh.instanceMatrix.needsUpdate=true;
      }
    }
    for(const roof of roofMeshes){roof.mesh.scale.y=cutaways[roof.owner].factor;roof.mesh.position.y=roof.height*cutaways[roof.owner].factor;}
  },update(t){
    boats.forEach((boat,i)=>{boat.position.y=Math.sin(t*1.2+i)*.12-.2;boat.rotation.z=Math.sin(t*.8+i)*.015;});
    fountain.scale.y=1+Math.sin(t*3)*.018;
    ripples.forEach((r,i)=>{r.material.opacity=.1+Math.sin(t*.6+i)*.07;});
  }};
}

export function makeSoldier(isPlayer=false) {
  const root=new THREE.Group(),body=new THREE.Group();
  root.add(body);
  const uniform=isPlayer?'#c8be8a':'#a77a64',vest=isPlayer?'#4e6b56':'#53655a';
  body.add(meshBox(1.2,1.4,.7,uniform,0,1.9,0));body.add(meshBox(1.3,.95,.85,vest,0,1.85,0));
  const head=new THREE.Mesh(new THREE.SphereGeometry(.42,8,6),material('#cda880'));head.position.y=2.98;head.castShadow=true;body.add(head);
  const helmet=new THREE.Mesh(new THREE.SphereGeometry(.49,8,6,0,Math.PI*2,0,Math.PI*.6),material(isPlayer?'#607a55':'#6b7866'));helmet.position.y=3.1;helmet.castShadow=true;body.add(helmet);
  body.add(meshBox(.85,1,.5,'#6b795a',0,1.9,.63));
  const leftLeg=meshBox(.44,1.15,.5,'#697460',-.34,.65,0),rightLeg=meshBox(.44,1.15,.5,'#697460',.34,.65,0);body.add(leftLeg,rightLeg);
  body.add(meshBox(.38,.45,.9,uniform,.72,2.1,-.3));body.add(meshBox(.35,.4,.9,uniform,-.58,2.1,-.25));
  const gun=meshBox(.24,.3,1.8,'#394f48',.55,2.22,-1.05);body.add(gun);body.add(meshBox(.16,.14,.9,'#293f3c',.55,2.22,-2.25));
  const flash=new THREE.Mesh(new THREE.OctahedronGeometry(.45),new THREE.MeshBasicMaterial({color:'#ffdd88'}));flash.position.set(.55,2.22,-2.8);flash.visible=false;body.add(flash);
  const ring=new THREE.Mesh(new THREE.RingGeometry(1.15,1.32,32),new THREE.MeshBasicMaterial({color:isPlayer?'#d7fa77':'#e8af86',transparent:true,opacity:isPlayer?.8:.4,side:THREE.DoubleSide,depthTest:false}));
  ring.rotation.x=-Math.PI/2;ring.position.y=.2;ring.renderOrder=5;root.add(ring);
  return {root,body,leftLeg,rightLeg,flash,ring};
}

export function makeCrate(type='supply') {
  const group=new THREE.Group();
  const color=type==='weapon'?'#7b9371':type==='medkit'?'#c1c5a2':'#bc9d68';
  group.add(meshBox(1.8,1.2,1.4,color,0,.8,0));
  group.add(meshBox(1.9,.25,1.5,'#536b51',0,1.43,0));
  group.add(meshBox(.2,1.3,1.52,'#e7d5a6',-.52,.8,0));group.add(meshBox(.2,1.3,1.52,'#e7d5a6',.52,.8,0));
  const glow=new THREE.Mesh(new THREE.CylinderGeometry(1.5,2.1,4,12,1,true),new THREE.MeshBasicMaterial({color:type==='weapon'?'#d7fa77':'#f5d890',transparent:true,opacity:.09,depthWrite:false,side:THREE.DoubleSide}));glow.position.y=2;group.add(glow);
  const ring=new THREE.Mesh(new THREE.RingGeometry(1.6,1.8,24),new THREE.MeshBasicMaterial({color:'#d7fa77',transparent:true,opacity:.6,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.13;group.add(ring);
  return group;
}
