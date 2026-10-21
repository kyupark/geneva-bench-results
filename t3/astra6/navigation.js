import {blocked, inLand, BOUNDS} from './world.js';

// Shared walkability grid. A* paths steer opponents through streets and around cover.
export class Navigation {
  constructor(step=5) {
    this.step=step;this.minX=-165;this.minZ=-125;this.cols=67;this.rows=59;
    this.walk=new Uint8Array(this.cols*this.rows);
    for(let z=0;z<this.rows;z++)for(let x=0;x<this.cols;x++){
      this.walk[z*this.cols+x]=blocked(this.minX+x*step,this.minZ+z*step,1.15)?0:1;
    }
  }
  closest(x,z) {
    const gx=Math.max(0,Math.min(this.cols-1,Math.round((x-this.minX)/this.step)));
    const gz=Math.max(0,Math.min(this.rows-1,Math.round((z-this.minZ)/this.step)));
    if(this.walk[gz*this.cols+gx])return gz*this.cols+gx;
    for(let r=1;r<12;r++)for(let dz=-r;dz<=r;dz++)for(let dx=-r;dx<=r;dx++){
      if(Math.abs(dx)!==r&&Math.abs(dz)!==r)continue;
      const X=gx+dx,Z=gz+dz;
      if(X>=0&&Z>=0&&X<this.cols&&Z<this.rows&&this.walk[Z*this.cols+X])return Z*this.cols+X;
    }
    return -1;
  }
  point(id) {return {x:this.minX+(id%this.cols)*this.step,z:this.minZ+Math.floor(id/this.cols)*this.step};}
  path(x,z,tx,tz) {
    const start=this.closest(x,z),goal=this.closest(tx,tz);
    if(start<0||goal<0||start===goal)return [];
    const g=new Float32Array(this.walk.length).fill(Infinity),parent=new Int32Array(this.walk.length).fill(-1),closed=new Uint8Array(this.walk.length),open=[start];
    g[start]=0;const gx=goal%this.cols,gz=Math.floor(goal/this.cols);
    const h=id=>Math.hypot(id%this.cols-gx,Math.floor(id/this.cols)-gz);
    let count=0;
    while(open.length&&count++<2200) {
      let best=0;
      for(let i=1;i<open.length;i++)if(g[open[i]]+h(open[i])<g[open[best]]+h(open[best]))best=i;
      const id=open.splice(best,1)[0];
      if(id===goal){const result=[];let n=id;while(n!==start&&n>=0){result.unshift(this.point(n));n=parent[n];}return result;}
      closed[id]=1;
      const X=id%this.cols,Z=Math.floor(id/this.cols);
      for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]]) {
        const nx=X+dx,nz=Z+dz,n=nz*this.cols+nx;
        if(nx<0||nz<0||nx>=this.cols||nz>=this.rows||!this.walk[n]||closed[n])continue;
        if(dx&&dz&&(!this.walk[Z*this.cols+nx]||!this.walk[nz*this.cols+X]))continue;
        const ng=g[id]+(dx&&dz?1.414:1);
        if(ng<g[n]){parent[n]=id;g[n]=ng;if(!open.includes(n))open.push(n);}
      }
    }
    return [];
  }
  randomPoint(random=Math.random) {
    for(let i=0;i<500;i++){const id=Math.floor(random()*this.walk.length);if(this.walk[id])return this.point(id);}
    return {x:0,z:50};
  }
}
