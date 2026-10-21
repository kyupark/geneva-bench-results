(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,ee=1029,k=1030,te=1031,ne=1033,re=33776,A=33777,ie=33778,j=33779,M=35840,N=35841,ae=35842,oe=35843,se=36196,ce=37492,le=37496,P=37488,ue=37489,de=37490,fe=37491,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,Ee=37821,De=36492,Oe=36494,ke=36495,Ae=36283,je=36284,Me=36285,Ne=36286,F=2300,Pe=2301,Fe=2302,Ie=2303,I=2400,Le=2401,L=2402,Re=3200,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=35048,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,R(...e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var nt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=Math.PI/180,ot=180/Math.PI;function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function ct(e,t){return(e%t+t)%t}function lt(e,t,n){return(1-n)*e+n*t}function ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var V=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pt.copy(this).projectOnVector(e),this.sub(pt)}reflect(e){return this.sub(pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pt=new H,mt=new ft,U=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return et(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ht.makeScale(e,t)),this}rotate(e){return et(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ht.makeRotation(-e)),this}translate(e,t){return et(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ht.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ht=new U,gt=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_t=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vt(){let e={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=bt(e.r),e.g=bt(e.g),e.b=bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=xt(e.r),e.g=xt(e.g),e.b=xt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return et(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return et(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Be]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:gt,fromXYZ:_t,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:He,toXYZ:gt,fromXYZ:_t,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var yt=vt();function bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function xt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var St,Ct=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{St===void 0&&(St=Ye(`canvas`)),St.width=e.width,St.height=e.height;let t=St.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=St}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=bt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(bt(t[e]/255)*255):t[e]=bt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},wt=0,Tt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wt++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Et(r[t].image)):e.push(Et(r[t]))}else e=Et(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Et(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ct.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Dt=0,Ot=new H,kt=class e extends rt{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dt++}),this.uuid=st(),this.name=``,this.source=new Tt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ot).x}get height(){return this.source.getSize(Ot).y}get depth(){return this.source.getSize(Ot).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=300,kt.DEFAULT_ANISOTROPY=1;var At=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let r=new kt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Tt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mt=class extends jt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nt=class extends kt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Pt=class extends kt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},W=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ft.setFromMatrixColumn(e,0).length(),i=1/Ft.setFromMatrixColumn(e,1).length(),a=1/Ft.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lt,e,Rt)}lookAt(e,t,n){let r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),zt.crossVectors(n,Vt),zt.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),zt.crossVectors(n,Vt)),zt.normalize(),Bt.crossVectors(Vt,zt),r[0]=zt.x,r[4]=Bt.x,r[8]=Vt.x,r[1]=zt.y,r[5]=Bt.y,r[9]=Vt.y,r[2]=zt.z,r[6]=Bt.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*ee+c*re,i[4]=a*S+o*E+s*k+c*A,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*j,i[1]=l*x+u*T+d*ee+f*re,i[5]=l*S+u*E+d*k+f*A,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*j,i[2]=p*x+m*T+h*ee+g*re,i[6]=p*S+m*E+h*k+g*A,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*j,i[3]=_*x+v*T+y*ee+b*re,i[7]=_*S+v*E+y*k+b*A,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Ft.set(r[0],r[1],r[2]).length(),o=Ft.set(r[4],r[5],r[6]).length(),s=Ft.set(r[8],r[9],r[10]).length();i<0&&(a=-a),It.copy(this);let c=1/a,l=1/o,u=1/s;return It.elements[0]*=c,It.elements[1]*=c,It.elements[2]*=c,It.elements[4]*=l,It.elements[5]*=l,It.elements[6]*=l,It.elements[8]*=u,It.elements[9]*=u,It.elements[10]*=u,t.setFromRotationMatrix(It),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ft=new H,It=new W,Lt=new H(0,0,0),Rt=new H(1,1,1),zt=new H,Bt=new H,Vt=new H,Ht=new W,Ut=new ft,Wt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ht.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ht,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ut.setFromEuler(this),this.setFromQuaternion(Ut,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wt.DEFAULT_ORDER=`XYZ`;var Gt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Kt=0,qt=new H,Jt=new ft,Yt=new W,Xt=new H,Zt=new H,Qt=new H,$t=new ft,en=new H(1,0,0),tn=new H(0,1,0),nn=new H(0,0,1),rn={type:`added`},an={type:`removed`},on={type:`childadded`,child:null},sn={type:`childremoved`,child:null},cn=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new Wt,r=new ft,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new W},normalMatrix:{value:new U}}),this.matrix=new W,this.matrixWorld=new W,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jt.setFromAxisAngle(e,t),this.quaternion.multiply(Jt),this}rotateOnWorldAxis(e,t){return Jt.setFromAxisAngle(e,t),this.quaternion.premultiply(Jt),this}rotateX(e){return this.rotateOnAxis(en,e)}rotateY(e){return this.rotateOnAxis(tn,e)}rotateZ(e){return this.rotateOnAxis(nn,e)}translateOnAxis(e,t){return qt.copy(e).applyQuaternion(this.quaternion),this.position.add(qt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(en,e)}translateY(e){return this.translateOnAxis(tn,e)}translateZ(e){return this.translateOnAxis(nn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xt.copy(e):Xt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Zt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(Zt,Xt,this.up):Yt.lookAt(Xt,Zt,this.up),this.quaternion.setFromRotationMatrix(Yt),r&&(Yt.extractRotation(r.matrixWorld),Jt.setFromRotationMatrix(Yt),this.quaternion.premultiply(Jt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rn),on.child=e,this.dispatchEvent(on),on.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(an),sn.child=e,this.dispatchEvent(sn),sn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rn),on.child=e,this.dispatchEvent(on),on.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zt,e,Qt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zt,$t,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};cn.DEFAULT_UP=new H(0,1,0),cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=class extends cn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},un={type:`move`},dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(un)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},mn={h:0,s:0,l:0};function hn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=ct(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=hn(i,r,e+1/3),this.g=hn(i,r,e),this.b=hn(i,r,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=fn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bt(e.r),this.g=bt(e.g),this.b=bt(e.b),this}copyLinearToSRGB(e){return this.r=xt(e.r),this.g=xt(e.g),this.b=xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return yt.workingToColorSpace(gn.copy(this),e),Math.round(B(gn.r*255,0,255))*65536+Math.round(B(gn.g*255,0,255))*256+Math.round(B(gn.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(gn.copy(this),t);let n=gn.r,r=gn.g,i=gn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=ze){yt.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,r=gn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(pn),this.setHSL(pn.h+e,pn.s+t,pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(mn);let n=lt(pn.h,mn.h,t),r=lt(pn.s,mn.s,t),i=lt(pn.l,mn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new G;G.NAMES=fn;var _n=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new G(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},vn=class extends cn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new H,bn=new H,xn=new H,Sn=new H,Cn=new H,wn=new H,Tn=new H,En=new H,Dn=new H,On=new H,kn=new At,An=new At,jn=new At,Mn=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yn.subVectors(e,t),r.cross(yn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){yn.subVectors(r,t),bn.subVectors(n,t),xn.subVectors(e,t);let a=yn.dot(yn),o=yn.dot(bn),s=yn.dot(xn),c=bn.dot(bn),l=bn.dot(xn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Sn)!==null&&Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Sn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Sn.x),s.addScaledVector(a,Sn.y),s.addScaledVector(o,Sn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return kn.setScalar(0),An.setScalar(0),jn.setScalar(0),kn.fromBufferAttribute(e,t),An.fromBufferAttribute(e,n),jn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(kn,i.x),a.addScaledVector(An,i.y),a.addScaledVector(jn,i.z),a}static isFrontFacing(e,t,n,r){return yn.subVectors(n,t),bn.subVectors(e,t),yn.cross(bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),yn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Cn.subVectors(r,n),wn.subVectors(i,n),En.subVectors(e,n);let s=Cn.dot(En),c=wn.dot(En);if(s<=0&&c<=0)return t.copy(n);Dn.subVectors(e,r);let l=Cn.dot(Dn),u=wn.dot(Dn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Cn,a);On.subVectors(e,i);let f=Cn.dot(On),p=wn.dot(On);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(wn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Tn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Tn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Cn,a).addScaledVector(wn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Fn):Fn.fromBufferAttribute(r,t),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),In.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),In.copy(e.boundingBox)),In.applyMatrix4(e.matrixWorld),this.union(In)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Un),Wn.subVectors(this.max,Un),Ln.subVectors(e.a,Un),Rn.subVectors(e.b,Un),zn.subVectors(e.c,Un),Bn.subVectors(Rn,Ln),Vn.subVectors(zn,Rn),Hn.subVectors(Ln,zn);let t=[0,-Bn.z,Bn.y,0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,Bn.z,0,-Bn.x,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,-Bn.y,Bn.x,0,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0];return!qn(t,Ln,Rn,zn,Wn)||(t=[1,0,0,0,1,0,0,0,1],!qn(t,Ln,Rn,zn,Wn))?!1:(Gn.crossVectors(Bn,Vn),t=[Gn.x,Gn.y,Gn.z],qn(t,Ln,Rn,zn,Wn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pn=[new H,new H,new H,new H,new H,new H,new H,new H],Fn=new H,In=new Nn,Ln=new H,Rn=new H,zn=new H,Bn=new H,Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new H;function qn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Kn.fromArray(e,a);let o=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),s=t.dot(Kn),c=n.dot(Kn),l=r.dot(Kn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Jn=new H,Yn=new V,Xn=0,Zn=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix3(e),this.setXY(t,Yn.x,Yn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix3(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix4(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyNormalMatrix(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.transformDirection(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ut(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ut(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ut(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ut(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ut(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Qn=class extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},$n=class extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},er=class extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}},tr=new Nn,nr=new H,rr=new H,ir=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?tr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(nr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(rr)),this.expandByPoint(nr.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ar=0,or=new W,sr=new cn,cr=new H,lr=new Nn,ur=new Nn,dr=new H,fr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ar++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?$n:Qn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return or.makeRotationFromQuaternion(e),this.applyMatrix4(or),this}rotateX(e){return or.makeRotationX(e),this.applyMatrix4(or),this}rotateY(e){return or.makeRotationY(e),this.applyMatrix4(or),this}rotateZ(e){return or.makeRotationZ(e),this.applyMatrix4(or),this}translate(e,t,n){return or.makeTranslation(e,t,n),this.applyMatrix4(or),this}scale(e,t,n){return or.makeScale(e,t,n),this.applyMatrix4(or),this}lookAt(e){return sr.lookAt(e),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new er(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];lr.setFromBufferAttribute(n),this.morphTargetsRelative?(dr.addVectors(this.boundingBox.min,lr.min),this.boundingBox.expandByPoint(dr),dr.addVectors(this.boundingBox.max,lr.max),this.boundingBox.expandByPoint(dr)):(this.boundingBox.expandByPoint(lr.min),this.boundingBox.expandByPoint(lr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(lr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ur.setFromBufferAttribute(n),this.morphTargetsRelative?(dr.addVectors(lr.min,ur.min),lr.expandByPoint(dr),dr.addVectors(lr.max,ur.max),lr.expandByPoint(dr)):(lr.expandByPoint(ur.min),lr.expandByPoint(ur.max))}lr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)dr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(dr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)dr.fromBufferAttribute(a,t),o&&(cr.fromBufferAttribute(e,t),dr.add(cr)),r=Math.max(r,n.distanceToSquared(dr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Zn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dr.fromBufferAttribute(e,t),dr.normalize(),e.setXYZ(t,dr.x,dr.y,dr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Zn(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},pr=new H,mr=new H,hr=new U,gr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=pr.subVectors(n,t).cross(mr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(pr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hr.getNormalMatrix(e),r=this.coplanarPoint(pr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},_r=0,vr=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_r++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new gr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},yr=new H,br=new H,xr=new H,Sr=new H,Cr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){br.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(br);let i=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=Sr.dot(this.direction),s=-Sr.dot(xr),c=Sr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(br).addScaledVector(xr,d),f}intersectSphere(e,t){if(e.radius<0)return null;yr.subVectors(e.center,this.origin);let n=yr.dot(this.direction),r=yr.dot(yr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,te,ne,re;if(y>=b&&y>=x?(w=s,D=u,k=p,re=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,te=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,re=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,te=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,te=g,ne=v)):(w=l,D=f,k=h,re=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,te=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,te=_,ne=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,M=T-A*D,N=E-ie*D,ae=O-A*k,oe=ee-ie*k,se=te-A*re,ce=ne-ie*re,le=se*oe-ce*ae,P=M*ce-N*se,ue=ae*N-oe*M;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=j*(le*D+P*k+ue*re);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wr=class extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tr=new W,Er=new Cr,Dr=new ir,Or=new H,kr=new H,Ar=new H,jr=new H,Mr=new H,Nr=new H,Pr=new H,Fr=new H,K=class extends cn{constructor(e=new fr,t=new wr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Nr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Mr.fromBufferAttribute(s,e),a?Nr.addScaledVector(Mr,r):Nr.addScaledVector(Mr.sub(t),r))}t.add(Nr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Er.copy(e.ray).recast(e.near),!(Dr.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Dr,Or)===null||Er.origin.distanceToSquared(Or)>(e.far-e.near)**2))&&(Tr.copy(i).invert(),Er.copy(e.ray).applyMatrix4(Tr),(n.boundingBox===null||Er.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Lr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Lr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Lr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Lr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ir(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Fr.copy(s),Fr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Fr);return l<n.near||l>n.far?null:{distance:l,point:Fr.clone(),object:e}}function Lr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,kr),e.getVertexPosition(c,Ar),e.getVertexPosition(l,jr);let u=Ir(e,t,n,r,kr,Ar,jr,Pr);if(u){let e=new H;Mn.getBarycoord(Pr,kr,Ar,jr,e),i&&(u.uv=Mn.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Mn.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Mn.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Mn.getNormal(kr,Ar,jr,t.normal),u.face=t,u.barycoord=e}return u}var Rr=new At,zr=new At,Br=new At,Vr=new At,Hr=new W,Ur=new H,Wr=new ir,Gr=new W,Kr=new Cr,qr=class extends K{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new W,this.bindMatrixInverse=new W,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ur),this.boundingBox.expandByPoint(Ur)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ir),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ur),this.boundingSphere.expandByPoint(Ur)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(r),e.ray.intersectsSphere(Wr)!==!1&&(Gr.copy(r).invert(),Kr.copy(e.ray).applyMatrix4(Gr),(this.boundingBox===null||Kr.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Kr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():R(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;zr.fromBufferAttribute(r.attributes.skinIndex,e),Br.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Rr.copy(t),t.set(0,0,0,0)):(Rr.set(...t,1),t.set(0,0,0)),Rr.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Br.getComponent(e);if(r!==0){let i=zr.getComponent(e);Hr.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Vr.copy(Rr).applyMatrix4(Hr),r)}}return t.isVector4&&(t.w=Rr.w),t.applyMatrix4(this.bindMatrixInverse)}},Jr=class extends cn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Yr=class extends kt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xr=new W,Zr=new W,Qr=class e{constructor(e=[],t=[]){this.uuid=st(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){R(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new W)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new W;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Zr;Xr.multiplyMatrices(i,t[r]),Xr.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Yr(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(R(`Skeleton: No bone found with UUID:`,r),i=new Jr),this.bones.push(i),this.boneInverses.push(new W().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},$r=class extends Zn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ei=new W,ti=new W,ni=[],ri=new Nn,ii=new W,ai=new K,oi=new ir,si=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ii)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ei),ri.copy(e.boundingBox).applyMatrix4(ei),this.boundingBox.union(ri)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ei),oi.copy(e.boundingSphere).applyMatrix4(ei),this.boundingSphere.union(oi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ai.geometry=this.geometry,ai.material=this.material,ai.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oi.copy(this.boundingSphere),oi.applyMatrix4(n),e.ray.intersectsSphere(oi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ei),ti.multiplyMatrices(n,ei),ai.matrixWorld=ti,ai.raycast(e,ni);for(let e=0,n=ni.length;e<n;e++){let n=ni[e];n.instanceId=i,n.object=this,t.push(n)}ni.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ci=new ir,li=new V(.5,.5),ui=new H,di=class{constructor(e=new gr,t=new gr,n=new gr,r=new gr,i=new gr,a=new gr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476+li.distanceTo(e.center),ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ui.x=r.normal.x>0?e.max.x:e.min.x,ui.y=r.normal.y>0?e.max.y:e.min.y,ui.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ui)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fi=class extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pi=new H,mi=new H,hi=new W,gi=new Cr,_i=new ir,vi=new H,yi=new H,bi=class extends cn{constructor(e=new fr,t=new fi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)pi.fromBufferAttribute(t,e-1),mi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=pi.distanceTo(mi);e.setAttribute(`lineDistance`,new er(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_i.copy(n.boundingSphere),_i.applyMatrix4(r),_i.radius+=i,e.ray.intersectsSphere(_i)===!1)return;hi.copy(r).invert(),gi.copy(e.ray).applyMatrix4(hi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=xi(this,e,gi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=xi(this,e,gi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=xi(this,e,gi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=xi(this,e,gi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function xi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(pi.fromBufferAttribute(s,i),mi.fromBufferAttribute(s,a),n.distanceSqToSegment(pi,mi,vi,yi)>r)return;vi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(vi);if(!(c<t.near||c>t.far))return{distance:c,point:yi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Si=new H,Ci=new H,wi=class extends bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Si.fromBufferAttribute(t,e),Ci.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Si.distanceTo(Ci);e.setAttribute(`lineDistance`,new er(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ti=class extends kt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ei=class extends kt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Di=class extends kt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oi=class extends Di{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ki=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ai=class e extends fr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new er(c,3)),this.setAttribute(`normal`,new er(l,3)),this.setAttribute(`uv`,new er(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ji=class e extends fr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new V;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new er(a,3)),this.setAttribute(`normal`,new er(o,3)),this.setAttribute(`uv`,new er(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mi=class e extends fr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new er(u,3)),this.setAttribute(`normal`,new er(d,3)),this.setAttribute(`uv`,new er(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ni=class e extends Mi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pi=class e extends fr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new er(i,3)),this.setAttribute(`normal`,new er(i.slice(),3)),this.setAttribute(`uv`,new er(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Fi=class e extends Pi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ii=class e extends fr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new er(p,3)),this.setAttribute(`normal`,new er(m,3)),this.setAttribute(`uv`,new er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Li=class e extends fr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new er(p,3)),this.setAttribute(`normal`,new er(m,3)),this.setAttribute(`uv`,new er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ri=class e extends fr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new er(c,3)),this.setAttribute(`normal`,new er(l,3)),this.setAttribute(`uv`,new er(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function zi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Vi(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Vi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Bi(e){let t={};for(let n=0;n<e.length;n++){let r=zi(e[n]);for(let e in r)t[e]=r[e]}return t}function Vi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Hi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ui(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:yt.workingColorSpace}var Wi={clone:zi,merge:Bi},Gi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ki=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qi=class extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gi,this.fragmentShader=Ki,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Hi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new At().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new W().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ji=class extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Yi=class extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xi=class extends vr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zi=class extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Re,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qi=class extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $i(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ea(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ta=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},na=class extends ta{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:I,endingEnd:I}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case L:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case L:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ra=class extends ta{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ia=class extends ta{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},aa=class extends ta{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ca(n,t,g,y,r);i[p]=oa(x,o,_,b,m)}return i}};function oa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function sa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ca(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=oa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=sa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var la=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=$i(t,this.TimeBufferType),this.values=$i(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$i(e.times,Array),values:$i(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ea(e.settings)&&(n.settings={inTangents:$i(e.settings.inTangents,Array),outTangents:$i(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case F:t=this.InterpolantFactoryMethodDiscrete;break;case Pe:t=this.InterpolantFactoryMethodLinear;break;case Fe:t=this.InterpolantFactoryMethodSmooth;break;case Ie:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return F;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return Fe;case this.InterpolantFactoryMethodBezier:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ea(this.settings)&&(ua(this.settings.inTangents,e),ua(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ea(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ua(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}la.prototype.ValueTypeName=``,la.prototype.TimeBufferType=Float32Array,la.prototype.ValueBufferType=Float32Array,la.prototype.DefaultInterpolation=Pe;var da=class extends la{constructor(e,t,n){super(e,t,n)}};da.prototype.ValueTypeName=`bool`,da.prototype.ValueBufferType=Array,da.prototype.DefaultInterpolation=F,da.prototype.InterpolantFactoryMethodLinear=void 0,da.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends la{constructor(e,t,n,r){super(e,t,n,r)}};fa.prototype.ValueTypeName=`color`;var pa=class extends la{constructor(e,t,n,r){super(e,t,n,r)}};pa.prototype.ValueTypeName=`number`;var ma=class extends ta{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ft.slerpFlat(i,0,a,c-o,a,c,s);return i}},ha=class extends la{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}};ha.prototype.ValueTypeName=`quaternion`,ha.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends la{constructor(e,t,n){super(e,t,n)}};ga.prototype.ValueTypeName=`string`,ga.prototype.ValueBufferType=Array,ga.prototype.DefaultInterpolation=F,ga.prototype.InterpolantFactoryMethodLinear=void 0,ga.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends la{constructor(e,t,n,r){super(e,t,n,r)}};_a.prototype.ValueTypeName=`vector`;var va=class extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ya=class extends va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ba=new W,xa=new H,Sa=new H,Ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new W,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new di,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xa.setFromMatrixPosition(e.matrixWorld),t.position.copy(xa),Sa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ba,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wa=new H,Ta=new ft,Ea=new H,Da=class extends cn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new W,this.projectionMatrix=new W,this.projectionMatrixInverse=new W,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Ta,Ea),Ea.x===1&&Ea.y===1&&Ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Ea.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wa,Ta,Ea),Ea.x===1&&Ea.y===1&&Ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oa=new H,ka=new V,Aa=new V,ja=class extends Da{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,t){return this.getViewBounds(e,ka,Aa),t.subVectors(Aa,ka)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(at*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ma=class extends Da{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Na=class extends Ca{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pa=class extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Na}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Fa=class extends fr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Ia=-90,La=1,Ra=class extends cn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ja(Ia,La,e,t);r.layers=this.layers,this.add(r);let i=new ja(Ia,La,e,t);i.layers=this.layers,this.add(i);let a=new ja(Ia,La,e,t);a.layers=this.layers,this.add(a);let o=new ja(Ia,La,e,t);o.layers=this.layers,this.add(o);let s=new ja(Ia,La,e,t);s.layers=this.layers,this.add(s);let c=new ja(Ia,La,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},za=class extends ja{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ba=`\\[\\]\\.:\\/`,Va=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ha=`[^\\[\\]\\.:\\/]`,Ua=`[^`+Ba.replace(`\\.`,``)+`]`,Wa=`((?:WC+[\\/:])*)`.replace(`WC`,Ha),Ga=`(WCOD+)?`.replace(`WCOD`,Ua),Ka=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ha),qa=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ha),Ja=RegExp(`^`+Wa+Ga+Ka+qa+`$`),Ya=[`material`,`materials`,`bones`,`map`],Xa=class{constructor(e,t,n){let r=n||Za.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Za=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Va,``)}static parseTrackName(e){let t=Ja.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ya.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Za.Composite=Xa,Za.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Za.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Za.prototype.GetterByBindingType=[Za.prototype._getValue_direct,Za.prototype._getValue_array,Za.prototype._getValue_arrayElement,Za.prototype._getValue_toArray],Za.prototype.SetterByBindingTypeAndVersioning=[[Za.prototype._setValue_direct,Za.prototype._setValue_direct_setNeedsUpdate,Za.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Za.prototype._setValue_array,Za.prototype._setValue_array_setNeedsUpdate,Za.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Za.prototype._setValue_arrayElement,Za.prototype._setValue_arrayElement_setNeedsUpdate,Za.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Za.prototype._setValue_fromArray,Za.prototype._setValue_fromArray_setNeedsUpdate,Za.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Qa(e,t,n,r){let i=$a(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case re:case A:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case N:case oe:return Math.max(e,16)*Math.max(t,8)/4;case M:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case ce:case P:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case le:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case De:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function $a(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function eo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function to(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},no={basic:{uniforms:Bi([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:Bi([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:Bi([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:Bi([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:Bi([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new G(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:Bi([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:Bi([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:Bi([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:Bi([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:Bi([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:Bi([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:Bi([J.common,J.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:Bi([J.lights,J.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};no.physical={uniforms:Bi([no.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var ro={r:0,b:0,g:0},io=new W,ao=new U;ao.set(-1,0,0,0,1,0,0,0,1);function oo(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new K(new Ai(1,1,1),new qi({name:`BackgroundCubeMaterial`,uniforms:zi(no.backgroundCube.uniforms),vertexShader:no.backgroundCube.vertexShader,fragmentShader:no.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(io.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ao),l.material.toneMapped=yt.getTransfer(i.colorSpace)!==He,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new K(new Ii(2,2),new qi({name:`BackgroundMaterial`,uniforms:zi(no.background.uniforms),vertexShader:no.background.vertexShader,fragmentShader:no.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=yt.getTransfer(i.colorSpace)!==He,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ro,Ui(e)),n.buffers.color.setClear(ro.r,ro.g,ro.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function so(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function co(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function lo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function uo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new gr,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var fo=4,po=6,mo=20,ho=256,go=new Ma,_o=new G,vo=null,yo=0,bo=0,xo=!1,So=new H,Co=new H,wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=So}=i;vo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,yo,bo),this._renderer.xr.enabled=xo,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:Be,depthBuffer:!1},r=Eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=To(r)),this._blurMaterial=ko(r,e,t),this._ggxMaterial=Oo(r,e,t)}return r}_compileMaterial(e){let t=new K(new fr,e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,r,i){let a=new ja(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(_o),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new Ai,new wr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(_o),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Do(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Do(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,go)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-fo?n-d+fo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Do(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,go),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Do(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,go)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Do(t,3*l*(r>this._lodMax-fo?r-this._lodMax+fo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,go)}};function To(e){let t=[],n=[],r=e,i=e-fo+1+po;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Co.set(1,r,n):e===1?Co.set(-n,1,-r):e===2?Co.set(-n,r,1):e===3?Co.set(-1,r,-n):e===4?Co.set(-n,-1,r):Co.set(n,r,-1),Co.toArray(l,(e*6+t)*3)}}let u=new fr;u.setAttribute(`position`,new Zn(c,3)),u.setAttribute(`outputDirection`,new Zn(l,3)),n.push(new K(u,null)),r>fo&&r--}return{lodMeshes:n,sizeLods:t}}function Eo(e,t,n){let r=new Mt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Do(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Oo(e,t,n){return new qi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ho,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ko(e,t,n){return new qi({name:`SphericalGaussianBlur`,defines:{SAMPLES:mo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ao(){return new qi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jo(){return new qi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var No=class extends Mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ti(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ai(5,5,5),i=new qi({name:`CubemapFromEquirect`,uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new Ra(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Po(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new No(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new wo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new wo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Fo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Io(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?$n:Qn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Lo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ro(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function zo(e,t,n){let r=new WeakMap,i=new At;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new Nt(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new V(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Bo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Vo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ho(e,t,n,r,i,a){let o=new Mt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new fr;l.setAttribute(`position`,new er([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new er([0,2,0,0,2,0],2));let u=new Ji({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new K(l,u),f=new Ma(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Mt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new Mt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},yt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Vo[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Uo=new kt,Wo=new Di(1,1),Go=new Nt,Ko=new Pt,qo=new Ti,Jo=[],Yo=[],Xo=new Float32Array(16),Zo=new Float32Array(9),Qo=new Float32Array(4);function $o(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Jo[i];if(a===void 0&&(a=new Float32Array(i),Jo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function es(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ts(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ns(e,t){let n=Yo[t];n===void 0&&(n=new Int32Array(t),Yo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function rs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(es(n,t))return;e.uniform2fv(this.addr,t),ts(n,t)}}function as(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(es(n,t))return;e.uniform3fv(this.addr,t),ts(n,t)}}function os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(es(n,t))return;e.uniform4fv(this.addr,t),ts(n,t)}}function ss(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(es(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ts(n,t)}else{if(es(n,r))return;Qo.set(r),e.uniformMatrix2fv(this.addr,!1,Qo),ts(n,r)}}function cs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(es(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ts(n,t)}else{if(es(n,r))return;Zo.set(r),e.uniformMatrix3fv(this.addr,!1,Zo),ts(n,r)}}function ls(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(es(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ts(n,t)}else{if(es(n,r))return;Xo.set(r),e.uniformMatrix4fv(this.addr,!1,Xo),ts(n,r)}}function us(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(es(n,t))return;e.uniform2iv(this.addr,t),ts(n,t)}}function fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(es(n,t))return;e.uniform3iv(this.addr,t),ts(n,t)}}function ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(es(n,t))return;e.uniform4iv(this.addr,t),ts(n,t)}}function ms(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(es(n,t))return;e.uniform2uiv(this.addr,t),ts(n,t)}}function gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(es(n,t))return;e.uniform3uiv(this.addr,t),ts(n,t)}}function _s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(es(n,t))return;e.uniform4uiv(this.addr,t),ts(n,t)}}function vs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Wo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Wo):a=Uo,n.setTexture2D(t||a,i)}function ys(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ko,i)}function bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||qo,i)}function xs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Go,i)}function Ss(e){switch(e){case 5126:return rs;case 35664:return is;case 35665:return as;case 35666:return os;case 35674:return ss;case 35675:return cs;case 35676:return ls;case 5124:case 35670:return us;case 35667:case 35671:return ds;case 35668:case 35672:return fs;case 35669:case 35673:return ps;case 5125:return ms;case 36294:return hs;case 36295:return gs;case 36296:return _s;case 35678:case 36198:case 36298:case 36306:case 35682:return vs;case 35679:case 36299:case 36307:return ys;case 35680:case 36300:case 36308:case 36293:return bs;case 36289:case 36303:case 36311:case 36292:return xs}}function Cs(e,t){e.uniform1fv(this.addr,t)}function ws(e,t){let n=$o(t,this.size,2);e.uniform2fv(this.addr,n)}function Ts(e,t){let n=$o(t,this.size,3);e.uniform3fv(this.addr,n)}function Es(e,t){let n=$o(t,this.size,4);e.uniform4fv(this.addr,n)}function Ds(e,t){let n=$o(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Os(e,t){let n=$o(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ks(e,t){let n=$o(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function As(e,t){e.uniform1iv(this.addr,t)}function js(e,t){e.uniform2iv(this.addr,t)}function Ms(e,t){e.uniform3iv(this.addr,t)}function Ns(e,t){e.uniform4iv(this.addr,t)}function Ps(e,t){e.uniform1uiv(this.addr,t)}function Fs(e,t){e.uniform2uiv(this.addr,t)}function Is(e,t){e.uniform3uiv(this.addr,t)}function Ls(e,t){e.uniform4uiv(this.addr,t)}function Rs(e,t,n){let r=this.cache,i=t.length,a=ns(n,i);es(r,a)||(e.uniform1iv(this.addr,a),ts(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Wo:Uo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function zs(e,t,n){let r=this.cache,i=t.length,a=ns(n,i);es(r,a)||(e.uniform1iv(this.addr,a),ts(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ko,a[e])}function Bs(e,t,n){let r=this.cache,i=t.length,a=ns(n,i);es(r,a)||(e.uniform1iv(this.addr,a),ts(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||qo,a[e])}function Vs(e,t,n){let r=this.cache,i=t.length,a=ns(n,i);es(r,a)||(e.uniform1iv(this.addr,a),ts(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Go,a[e])}function Hs(e){switch(e){case 5126:return Cs;case 35664:return ws;case 35665:return Ts;case 35666:return Es;case 35674:return Ds;case 35675:return Os;case 35676:return ks;case 5124:case 35670:return As;case 35667:case 35671:return js;case 35668:case 35672:return Ms;case 35669:case 35673:return Ns;case 5125:return Ps;case 36294:return Fs;case 36295:return Is;case 36296:return Ls;case 35678:case 36198:case 36298:case 36306:case 35682:return Rs;case 35679:case 36299:case 36307:return zs;case 35680:case 36300:case 36308:case 36293:return Bs;case 36289:case 36303:case 36311:case 36292:return Vs}}var Us=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ss(t.type)}},Ws=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hs(t.type)}},Gs=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ks=/(\w+)(\])?(\[|\.)?/g;function qs(e,t){e.seq.push(t),e.map[t.id]=t}function Js(e,t,n){let r=e.name,i=r.length;for(Ks.lastIndex=0;;){let a=Ks.exec(r),o=Ks.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){qs(n,l===void 0?new Us(s,e,t):new Ws(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Gs(s),qs(n,e)),n=e}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Js(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Xs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Zs=37297,Qs=0;function $s(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ec=new U;function tc(e){yt._getMatrix(ec,yt.workingColorSpace,e);let t=`mat3( ${ec.elements.map(e=>e.toFixed(4))} )`;switch(yt.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function nc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+$s(e.getShaderSource(t),r)}return i}function rc(e,t){let n=tc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ic={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ac(e,t){let n=ic[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var oc=new H;function sc(){return yt.getLuminanceCoefficients(oc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${oc.x.toFixed(4)}, ${oc.y.toFixed(4)}, ${oc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function cc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(dc).join(`
`)}function lc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function uc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function dc(e){return e!==``}function fc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mc=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(e){return e.replace(mc,_c)}var gc=new Map;function _c(e,t){let n=q[t];if(n===void 0){let e=gc.get(t);if(e!==void 0)n=q[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return hc(n)}var vc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(e){return e.replace(vc,bc)}function bc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function xc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Sc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Cc(e){return Sc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var wc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Tc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:wc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ec={302:`ENVMAP_MODE_REFRACTION`};function Dc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ec[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Oc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function kc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Oc[e.combine]||`ENVMAP_BLENDING_NONE`}function Ac(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function jc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Cc(n),l=Tc(n),u=Dc(n),d=kc(n),f=Ac(n),p=cc(n),m=lc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(dc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(dc).join(`
`),_.length>0&&(_+=`
`)):(g=[xc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(dc).join(`
`),_=[xc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:ac(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,rc(`linearToOutputTexel`,n.outputColorSpace),sc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(dc).join(`
`)),o=hc(o),o=fc(o,n),o=pc(o,n),s=hc(s),s=fc(s,n),s=pc(s,n),o=yc(o),s=yc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Xs(i,i.VERTEX_SHADER,y),S=Xs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=nc(i,x,`vertex`),n=nc(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ys(i,h),T=uc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Zs)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Qs++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Mc=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pc(e),t.set(e,n)),n}},Pc=class{constructor(e){this.id=Mc++,this.code=e,this.usedTimes=0}};function Fc(e){return e===1030||e===37490||e===36285}function Ic(e,t,n,r,i,a){let o=new Gt,s=new Nc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=no[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,M=!!x,N=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,F=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:M,envMapMode:M&&x.mapping,envMapCubeUVHeight:S,aoMap:N,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Fc(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:F,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:N&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&yt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&yt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=no[t];n=Wi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new jc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Lc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Rc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Bc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Rc),r.length>1&&r.sort(t||zc),i.length>1&&i.sort(t||zc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Vc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Bc,e.set(t,[i])):n>=r.length?(i=new Bc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Hc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new G};break;case`SpotLight`:n={position:new H,direction:new H,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Uc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Wc=0;function Gc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Kc(e){let t=new Hc,n=Uc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new W,o=new W;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Gc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Wc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function qc(e){let t=new Kc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Jc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new qc(e),t.set(n,[a])):r>=i.length?(a=new qc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zc=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Qc=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],$c=new W,el=new H,tl=new H;function nl(e,t,n){let r=new di,a=new V,o=new V,c=new At,l=new Zi,u=new Qi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Yc,fragmentShader:Xc}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new fr;y.setAttribute(`position`,new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new K(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){R(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Mt(a.x,a.y,{format:k,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Di(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new No(a.x),p.map.depthTexture=new Oi(a.x,h)):(p.map=new Mt(a.x,a.y),p.map.depthTexture=new Di(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),el.setFromMatrixPosition(d.matrixWorld),e.position.copy(el),tl.copy(e.position),tl.add(Zc[t]),e.up.copy(Qc[t]),e.lookAt(tl),e.updateMatrixWorld(),n.makeTranslation(-el.x,-el.y,-el.z),$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix($c,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Mt(a.x,a.y,{format:k,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function rl(e,t){function n(){let t=!1,n=new At,r=null,i=new At(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,M={},N=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new At().fromArray(N),se=new At().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function we(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=M[r];i===void 0&&(i={type:void 0,texture:void 0},M[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=M[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function L(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,M={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:L,uniformBlockBinding:Re,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:ze}}function il(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ye(`canvas`)}function T(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Ve:yt.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),M(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function M(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let N=0;function ae(){N=0}function oe(){return N}function se(e){N=e}function ce(){let e=N;return e>=p.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),N+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,n){let r=f.get(t);if(t.isVideoTexture&&F(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ue(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?be(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function de(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?be(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version?xe(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let pe={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},me={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,pe[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,pe[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,pe[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,me[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,me[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,he[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=le(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=ve(r.start,n.width,4),c=ve(t.start,n.width,4);r.start<=i+1&&s===c&&ve(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function be(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=_e(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=yt.getPrimaries(yt.workingColorSpace),r=n.colorSpace===``?null:yt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Pe(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=k(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ge(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ne(n,t);if(n.isDepthTexture)u=te(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&ye(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=Qa(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=Qa(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Fe(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Fe(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function xe(t,n,r){if(n.image.length!==6)return;let i=_e(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=yt.getPrimaries(yt.workingColorSpace),s=n.colorSpace===``?null:yt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Pe(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ne(n,h);ge(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Fe(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Se(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Ne(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Me(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ne(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Ne(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,re)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ge(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else P(n.depthTexture,0);let o=a.__webglTexture,s=Me(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Ne(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Ne(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)we(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?we(n.__webglFramebuffer[0],t,0):we(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Ce(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,r){let i=f.get(t);n!==void 0&&Se(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Te(t)}function De(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,A);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Ne(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ge(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Se(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Se(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ge(s,i),Se(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ge(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Se(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Se(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Ne(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ke.push(o),Ae.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(p.maxSamples,e.samples)}function Ne(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function F(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(yt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=P,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function al(e,t){function n(n,r=``){let i,a=yt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ol=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ki(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qi({vertexShader:ol,fragmentShader:sl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ll=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new cl,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new V,ee=null,k=null,te=new ja;te.viewport=new At;let ne=new ja;ne.viewport=new At;let re=[te,ne],A=new za,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new dn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new dn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new dn,C[e]=t),t.getHandSpace()};function M(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function N(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,N),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(O.width,O.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,N),r.addEventListener(`inputsourceschange`,ae),y.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Mt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new Di(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Mt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let oe=new H,se=new H;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=ne.near=te.near=t,A.far=ne.far=te.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,te.layers.mask=A.layers.mask&-5,ne.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;le(A,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(A,te,ne):A.projectionMatrix.copy(te.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),P(e,A,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new ja,o.layers.enable(n),o.viewport=new At,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ki,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let fe=new eo;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},ul=new W,dl=new U;dl.set(-1,0,0,0,1,0,0,0,1);function fl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ui(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ul.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(dl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function pl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ml=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hl=null;function gl(){return hl===null&&(hl=new Yr(ml,16,16,k,_),hl.name=`DFG_LUT`,hl.minFilter=s,hl.magFilter=s,hl.wrapS=n,hl.wrapT=n,hl.generateMipmaps=!1,hl.needsUpdate=!0),hl}var _l=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([ne,te,ee]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new H,O=null,k=null,re=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,M=!1,N=null,ae=null,oe=null,se=null;this._outputColorSpace=ze;let ce=0,le=0,P=null,ue=-1,de=null,fe=new At,pe=new At,me=null,he=new G(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new At(0,0,_e,ve),Ce=new At(0,0,_e,ve),we=!1,Te=new di,Ee=!1,De=!1,Oe=new W,ke=new H,Ae=new At,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ye:1}let F=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,I,Le,L,Re,Be,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,et,nt,rt,it,at,ot;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),z(`WebGLRenderer: `+e.message),e}function st(){Fe=new Fo(F),Fe.init(),it=new al(F,Fe),Ie=new lo(F,Fe,e,it),I=new rl(F,Fe),Ie.reversedDepthBuffer&&m&&I.buffers.depth.setReversed(!0),ae=F.createFramebuffer(),oe=F.createFramebuffer(),se=F.createFramebuffer(),Le=new Ro(F),L=new Lc,Re=new il(F,Fe,I,L,Ie,it,Le),Be=new Po(j),Ve=new to(F),at=new so(F,Ve),He=new Io(F,Ve,Le,at),Ue=new Bo(F,He,Ve,at,Le),et=new zo(F,Ie,Re),Ye=new uo(L),We=new Ic(j,Be,Fe,Ie,at,Ye),Ge=new fl(j,L),qe=new Vc,Je=new Jc(Fe),$e=new oo(j,Be,I,Ue,x,s),Ze=new nl(j,Ue,Ie),ot=new pl(F,Le,Ie,I),nt=new co(F,Fe,Le),rt=new Lo(F,Fe,Le),Le.programs=We.programs,j.capabilities=Ie,j.extensions=Fe,j.properties=L,j.renderLists=qe,j.shadowMap=Ze,j.state=I,j.info=Le}S!==1009&&(ie=new Ho(S,t.width,t.height,o,r,i));let B=new ll(j,F);this.xr=B,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){B.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),N=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),$e.dispose(),qe.dispose(),Je.dispose(),L.dispose(),Be.dispose(),Ue.dispose(),at.dispose(),ot.dispose(),We.dispose(),B.dispose(),B.removeEventListener(`sessionstart`,ht),B.removeEventListener(`sessionend`,gt),_t.stop()};function ct(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),M=!0}function lt(){Qe(`WebGLRenderer: Context Restored.`),M=!1;let e=Le.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;st(),Le.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function ut(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),V(t)}function V(e){ft(e),L.remove(e)}function ft(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=Ve.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){N!==null&&e.isNodeMaterial&&N.setObject(r,e),Ee===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,r),e.side=0,e.needsUpdate=!0,wt(e,t,r),e.side=2):wt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),N!==null&&N.renderStart(e,t,n),k=Je.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),N!==null&&N.updateLights(k.state.lightsArray),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),Ee===!0&&Ye.setGlobalState(this.clippingPlanes,t),N!==null&&Ze.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),k=A.pop(),N!==null&&N.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function U(e){mt&&mt(e)}function ht(){_t.stop()}function gt(){_t.start()}let _t=new eo;_t.setAnimationLoop(U),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(e){mt=e,B.setAnimationLoop(e),e===null?_t.stop():_t.start()},B.addEventListener(`sessionstart`,ht),B.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(M===!0)return;N!==null&&N.renderStart(e,t);let n=B.enabled===!0&&B.isPresenting===!0,r=ie!==null&&(P===null||n)&&ie.begin(j,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(B.cameraAutoUpdate===!0&&B.updateCamera(t),t=B.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,P),k=Je.get(e,A.length),k.init(t),k.state.textureUnits=Re.getTextureUnits(),A.push(k),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,Ke,t.reversedDepth),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),O=qe.get(e,re.length),O.init(),re.push(O),B.enabled===!0&&B.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,j.sortObjects)}vt(e,t,0,j.sortObjects),O.finish(),N!==null&&N.updateLights(k.state.lightsArray),j.sortObjects===!0&&O.sort(be,xe),Me=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Me&&$e.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ye.beginShadows();let i=k.state.shadowsArray;if(Ze.render(i,e,t),Ee===!0&&Ye.endShadows(),(r&&ie.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Me&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(O,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Me&&$e.render(e),bt(O,e,t)}P!==null&&le===0&&(Re.updateMultisampleRenderTarget(P),Re.updateRenderTargetMipmap(P)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),at.resetDefaultState(),ue=-1,de=null,A.pop(),A.length>0?(k=A[A.length-1],Re.setTextureUnits(k.state.textureUnits),Ee===!0&&Ye.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,re.pop(),O=re.length>0?re[re.length-1]:null,N!==null&&N.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Te)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=Ue.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Ae.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Te))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&O.push(e,i,a,n,Ae.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Ee===!0&&Ye.setGlobalState(j.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Mt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(he),ge=j.getClearAlpha(),ge<1&&j.setClearColor(16777215,.5),j.clear(),Me&&$e.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Ee===!0&&Ye.setGlobalState(j.clippingPlanes,r),St(e,n,r),Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,d),j.setClearColor(he,ge),p!==void 0&&(r.viewport=p),j.toneMapping=f}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){N!==null&&i.isNodeMaterial&&N.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=je);let r=L.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=We.getUniforms(e),N!==null&&e.isNodeMaterial&&N.build(e,n,s),e.onBeforeCompile(s,j),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Et(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ys.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=je),Re.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?j.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:yt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=k.state.lights;if(Ee===!0&&(De===!0||e!==de)){let t=e===de&&r.id===ue;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),N&&r.isNodeMaterial&&N.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ue&&(ue=r.id,C=!0),v.needsLights){let e=Dt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(F,`projectionMatrix`,e.projectionMatrix),T.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&T.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(F,`sunShadowMap`,y.state.sunShadowMap,Re),y.state.directionalShadowMap.length>0&&T.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,Re),y.state.spotShadowMap.length>0&&T.setValue(F,`spotShadowMap`,y.state.spotShadowMap,Re),y.state.pointShadowMap.length>0&&T.setValue(F,`pointShadowMap`,y.state.pointShadowMap,Re)),i.isSkinnedMesh){T.setOptional(F,i,`bindMatrix`),T.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(F,`boneTexture`,e.boneTexture,Re))}i.isBatchedMesh&&(T.setOptional(F,i,`batchingTexture`),T.setValue(F,`batchingTexture`,i._matricesTexture,Re),T.setOptional(F,i,`batchingIdTexture`),T.setValue(F,`batchingIdTexture`,i._indirectTexture,Re),T.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(F,`batchingColorTexture`,i._colorsTexture,Re));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&et.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=gl()),C){if(T.setValue(F,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&kt(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,ye,ve,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Ys.upload(F,Tt(v),E,Re)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ys.upload(F,Tt(v),E,Re),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(F,`center`,i.center),T.setValue(F,`modelViewMatrix`,i.modelViewMatrix),T.setValue(F,`normalMatrix`,i.normalMatrix),T.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,x),ot.bind(n,x)}}return x}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)Re.setupRenderTarget(e);else if(o.__hasExternalTextures)Re.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Re.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Re.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ae),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function Nt(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tt(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Re.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(Re.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Re.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Re.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,oe),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&Re.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Re.setTextureCube(e,0):e.isData3DTexture?Re.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Re.setTexture2DArray(e,0):Re.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}},vl=1600,yl=[[-1400,390],[-1e3,250],[-800,175],[-560,85],[-400,30],[-260,-20],[-120,-70],[-40,-110],[60,-160],[150,-215],[175,-240],[215,-300],[280,-390],[340,-470],[390,-560],[430,-650],[470,-760],[500,-860],[540,-1e3],[600,-1400],[2600,-1400],[2600,-700],[1400,-380],[1e3,-170],[820,-120],[680,-80],[560,-45],[420,-35],[320,-40],[260,-70],[160,-40],[60,0],[-30,30],[-140,60],[-250,95],[-400,140],[-560,190],[-800,270],[-1e3,340],[-1400,480]],bl=[{name:`Île Rousseau`,poly:[[71.2,-85.2],[87.6,-83.6],[115.6,-101],[117.1,-113.8],[105,-118],[77,-100.6]]},{name:`L'Île`,poly:[[-308.3,58.5],[-288.3,64.2],[-203.7,34.4],[-191.7,17.5],[-211.7,11.8],[-296.3,41.6]]}],xl=[{name:`Pont du Mont-Blanc`,a:[171,-248],b:[264,-62],w:24,flags:!0,road:!0},{name:`Pont des Bergues`,a:[36,-158],b:[110,-11],w:9,road:!1},{name:`Pont de la Machine`,a:[-44,-118],b:[26,21],w:8,road:!1},{name:`Pont de l'Île`,a:[-277,-24],b:[-243,103],w:16,road:!0},{name:`Pont de la Coulouvrenière`,a:[-564,74],b:[-530,191],w:18,road:!0}],Sl={height:24,poly:[[-58.9,348.5],[5,318],[60,305],[170,305],[300,330],[370,410],[380,500],[300,595],[181.5,588.9]],ramp:[40,90,90,90,80,80,60,40,40]},Cl=[-20,550],wl=[.70710678,.70710678],Tl=[.70710678,-.70710678],El=(e,t)=>[Cl[0]+wl[0]*e+Tl[0]*t,Cl[1]+wl[1]*e+Tl[1]*t],Dl={c:Cl,d:wl,n:Tl,hl:170,hw:75,at:El,height:8},Ol=[-330,-560],kl=[.9659,-.2588],Al=[.2588,.9659],jl=(e,t)=>[Ol[0]+kl[0]*e+Al[0]*t,Ol[1]+kl[1]*e+Al[1]*t],Ml={c:Ol,a:kl,f:Al,at:jl,height:12},Nl=[{name:`Parc des Bastions`,poly:[El(-170,75),El(170,75),El(170,-75),El(-170,-75)],trees:`bastions`,ground:`grass`},{name:`Promenade de la Treille`,poly:[El(-170,75),El(170,75),El(170,115),El(-170,115)],trees:`slope`,ground:`grass`},{name:`Jardin Anglais`,poly:[[278,-54],[320,-32],[420,-28],[560,-38],[575,38],[440,48],[310,34]],trees:`garden`,ground:`grass`},{name:`Jardin des Alpes`,poly:[[128,-352],[172,-352],[172,-308],[128,-308]],trees:`garden`,ground:`grass`},{name:`Île Rousseau`,poly:bl[0].poly,trees:`island`,ground:`gravel`}],Pl=[{name:`Place de Cornavin`,poly:[jl(-85,14),jl(85,14),jl(85,64),jl(-85,64)],ground:`paving`},{name:`Place de Neuve`,poly:[[-242,335],[-170,328],[-128,375],[-150,428],[-212,415],[-247,380]],ground:`paving`},{name:`Place Bel-Air`,poly:[[-275,105],[-215,88],[-205,128],[-262,140]],ground:`paving`},{name:`Place du Molard`,poly:[[41.1,40.2],[79.1,27.7],[90.9,63.8],[52.9,76.4]],ground:`paving`},{name:`Place de la Fusterie`,poly:[[-118,160],[-75,146],[-66,175],[-109,189]],ground:`paving`},{name:`Cour Saint-Pierre`,poly:[[92,395],[124,395],[124,452],[92,452]],ground:`cobble`},{name:`Place du Bourg-de-Four`,poly:[[262,458],[308,452],[332,488],[310,518],[270,508]],ground:`cobble`},{name:`Place du Port`,poly:[[255,-60],[285,-70],[298,-40],[270,-30]],ground:`paving`},{name:`Plaine de Plainpalais`,poly:[[-560,520],[-385,585],[-440,760],[-620,700]],ground:`gravel`}],Fl=[{name:`Rue du Mont-Blanc`,pts:[[-262,-537],[171,-248]],w:18,kind:`ped`,frontage:`B`,style:`grand`},{name:`Quai du Mont-Blanc`,pts:[[171,-248],[200,-312],[262,-398],[322,-478],[372,-568],[412,-660],[450,-770],[470,-830]],w:16,kind:`road`,frontage:`L`,style:`hotel`},{name:`Quai des Bergues`,pts:[[-820,158],[-560,63],[-400,8],[-260,-42],[-120,-92],[-40,-132],[60,-182],[140,-230],[171,-248]],w:14,kind:`road`,frontage:`L`,style:`grand`},{name:`Rue de Cornavin`,pts:[[-318,-505],[-305,-380],[-292,-250],[-284,-120],[-277,-24]],w:14,kind:`road`,frontage:`B`,style:`mixed`,tram:!0},{name:`Rue des Alpes`,pts:[[-134,-583],[226,-338]],w:12,kind:`road`,frontage:`B`,style:`mixed`},{name:`Quai Général-Guisan`,pts:[[-820,297],[-560,212],[-400,162],[-250,117],[-140,82],[-30,52],[60,22],[160,-18],[264,-62]],w:14,kind:`road`,frontage:`R`,style:`grand`},{name:`Quai Gustave-Ador`,pts:[[264,-62],[300,45],[440,58],[580,48],[680,-48],[820,-98],[900,-122]],w:16,kind:`road`,frontage:`R`,style:`grand`},{name:`Rue du Rhône`,pts:[[-226,179],[-30,113],[180,44],[300,110],[450,125]],w:13,kind:`road`,frontage:`B`,style:`luxury`},{name:`Rues Basses`,pts:[[-220,241],[-10,175],[200,106],[320,172],[480,190]],w:13,kind:`ped`,frontage:`B`,style:`luxury`,tram:!0},{name:`Rue de la Corraterie`,pts:[[-243,103],[-238,118],[-225,230],[-208,330]],w:16,kind:`road`,frontage:`B`,style:`grand`,tram:!0},{name:`Rue de la Cité`,pts:[[-150,215],[-110,262],[-60,305],[-15,338]],w:8,kind:`cobble`,frontage:`B`,style:`old`},{name:`Grand-Rue`,pts:[[-15,338],[50,352],[100,372],[125,392]],w:8,kind:`cobble`,frontage:`B`,style:`old`},{name:`Rue de l'Hôtel-de-Ville`,pts:[[75,362],[86,418],[95,466],[130,478],[210,470],[268,478]],w:7,kind:`cobble`,frontage:`B`,style:`old`},{name:`Rue de la Fontaine`,pts:[[222,400],[262,352],[296,300],[322,240],[335,185]],w:8,kind:`cobble`,frontage:`B`,style:`old`},{name:`Rue Saint-Léger`,pts:[[54,730],[160,624],[230,560],[275,512]],w:10,kind:`road`,frontage:`R`,style:`mixed`},{name:`Rampe de la Treille`,pts:[[-150,372],[-100,360],[-55,345],[-15,338]],w:8,kind:`cobble`,frontage:`L`,style:`old`},{name:`Promenade de la Treille`,pts:[El(-160,121),El(160,121)],w:8,kind:`gravel`,frontage:``,style:`old`},{name:`Boulevard du Théâtre`,pts:[[-215,322],[-300,318],[-420,312],[-560,305],[-820,300]],w:14,kind:`road`,frontage:`B`,style:`mixed`},{name:`Boulevard Georges-Favon`,pts:[[-212,415],[-300,500],[-385,585]],w:20,kind:`road`,frontage:`B`,style:`mixed`,tram:!0},{name:`Rue de Candolle`,pts:[El(-180,-85),El(185,-85)],w:14,kind:`road`,frontage:`R`,style:`mixed`},{name:`Boulevard Helvétique`,pts:[[480,190],[455,330],[440,520],[430,800]],w:16,kind:`road`,frontage:`B`,style:`mixed`},{name:`Rue de Lyon`,pts:[[-318,-505],[-500,-455],[-820,-380]],w:14,kind:`road`,frontage:`B`,style:`mixed`},{name:`Rue de Montbrillant`,pts:[[-470,-820],[-430,-640]],w:12,kind:`road`,frontage:`B`,style:`mixed`},{name:`Route de Florissant`,pts:[[275,512],[420,600],[620,640],[820,660]],w:14,kind:`road`,frontage:`B`,style:`mixed`},{name:`Rue de Carouge`,pts:[[54,730],[-60,820]],w:14,kind:`road`,frontage:`B`,style:`mixed`},{name:`Rue de la Servette`,pts:[[-280,-660],[-640,-830]],w:12,kind:`road`,frontage:`B`,style:`mixed`},{name:`Rue des Eaux-Vives`,pts:[[480,190],[640,160],[820,120]],w:12,kind:`road`,frontage:`B`,style:`mixed`}],Il=[[[-318,-505],[-305,-380],[-292,-250],[-284,-120],[-277,-24],[-243,103],[-238,118],[-225,230],[-208,330],[-200,370],[-212,415],[-300,500],[-385,585]],[[-224,240],[-10,175],[200,106],[320,172],[480,190]]],Ll={pts:[[-820,-468],[-533.2,-545.4],[-340,-597.2],[-146.8,-649],[-75,-675],[-30,-725],[8,-820]],halfWidth:30},Rl={cornavin:{x:Ol[0],z:Ol[1],a:kl,f:Al,height:12},notreDame:{x:-262,z:-468},brunswick:{x:150,z:-330},bainsPaquis:{root:[397,-575],dir:[.9939,-.1104],len:160},jetDeau:{root:[795,-118],tip:[755,-275]},flowerClock:{x:296,z:6},steamer:{x:470,z:-62,yaw:4.1},cathedral:{x:175,z:430},hotelDeVille:{x:40,z:392},arsenal:{x:66,z:440},maisonTavel:{x:12,z:360},palaisJustice:{x:312,z:535},bourgFountain:{x:292,z:485},grandTheatre:{x:-285,z:360},museeRath:{x:-165,z:304},conservatoire:{x:-186,z:452},dufour:{x:-196,z:377},uniBastions:El(0,-48),reformationWall:El(0,66),chess:El(-128,22),parkCafe:El(62,10),molardTower:{x:64,z:33},tourIle:{x:-238,z:31},machine:{x:-9,z:-48.5}},zl=[{name:`Pâquis`,yaw:-34.2,block:[62,50],street:12,floors:[5,7],style:`mixed`,enter:.2,poly:[[-300,-540],[171,-250],[480,-800],[0,-800],[-100,-640],[-300,-600]]},{name:`Saint-Gervais`,yaw:22.4,block:[56,46],street:11,floors:[5,7],style:`grand`,enter:.2,poly:[[-800,-430],[-300,-540],[171,-250],[140,-232],[60,-184],[-40,-134],[-120,-94],[-260,-44],[-400,6],[-560,61],[-800,150]]},{name:`Les Grottes`,yaw:15,block:[60,50],street:12,floors:[5,8],style:`modern`,enter:.14,poly:[[-800,-800],[0,-800],[-35,-720],[-100,-661],[-340,-597],[-520,-546],[-800,-471]]},{name:`Rues Basses`,yaw:18.2,block:[96,48],street:12,floors:[5,7],style:`luxury`,enter:.24,poly:[[-232,125],[-140,90],[60,28],[160,-12],[258,-55],[300,52],[450,125],[480,195],[340,235],[200,230],[40,270],[-60,300],[-212,290]]},{name:`Vieille Ville`,yaw:5,block:[34,26],street:7,floors:[4,5],style:`old`,enter:.32,poly:Sl.poly},{name:`Coulouvrenière`,yaw:18,block:[62,44],street:12,floors:[5,7],style:`mixed`,enter:.2,poly:[[-800,288],[-560,218],[-400,168],[-250,124],[-238,140],[-226,240],[-212,318],[-560,300],[-800,294]]},{name:`Jonction`,yaw:44,block:[56,46],street:12,floors:[5,7],style:`mixed`,enter:.16,poly:[[-800,306],[-215,326],[-245,335],[-250,380],[-212,418],[-385,585],[-560,520],[-800,560]]},{name:`Plainpalais`,yaw:44,block:[60,50],street:12,floors:[5,7],style:`mixed`,enter:.16,poly:[[-800,560],[-560,520],[-620,700],[-440,760],[-385,585],[-300,500],[-205,492],[40,735],[56,745],[0,800],[-800,800]]},{name:`Champel`,yaw:0,block:[60,50],street:12,floors:[5,7],style:`modern`,enter:.15,poly:[[56,745],[160,628],[230,566],[300,600],[380,505],[440,520],[800,520],[800,800],[0,800]]},{name:`Eaux-Vives`,yaw:20,block:[64,50],street:12,floors:[5,7],style:`grand`,enter:.18,poly:[[300,52],[440,62],[580,52],[680,-44],[800,-90],[800,520],[440,520],[385,500],[375,410],[305,330],[335,230],[480,200],[450,130]]}],Bl=[{name:`Gare Cornavin`,x:-330,z:-560,r:140,loot:1.4,hot:!0},{name:`Les Pâquis`,x:140,z:-560,r:220,loot:1},{name:`Bains des Pâquis`,x:470,z:-586,r:70,loot:1.3,hot:!0},{name:`Saint-Gervais`,x:-360,z:-250,r:220,loot:1},{name:`Les Grottes`,x:-430,z:-710,r:200,loot:.9},{name:`Île Rousseau`,x:95,z:-100,r:30,loot:1.2},{name:`Rues Basses`,x:60,z:110,r:200,loot:1.1},{name:`Jardin Anglais`,x:420,z:5,r:120,loot:1.1},{name:`Jet d'Eau`,x:770,z:-200,r:80,loot:1.25,hot:!0},{name:`Vieille Ville`,x:170,z:430,r:170,loot:1.4,hot:!0},{name:`Bourg-de-Four`,x:290,z:485,r:60,loot:1.2},{name:`Place de Neuve`,x:-210,z:375,r:90,loot:1.4,hot:!0},{name:`Parc des Bastions`,x:-20,z:550,r:150,loot:1.3,hot:!0},{name:`Plainpalais`,x:-500,z:640,r:180,loot:.9},{name:`Eaux-Vives`,x:600,z:260,r:230,loot:.9},{name:`Champel`,x:420,z:680,r:220,loot:.85},{name:`Coulouvrenière`,x:-520,z:250,r:140,loot:.95},{name:`L'Île`,x:-250,z:38,r:50,loot:1.15}],Vl=[{name:`LAC LÉMAN`,x:690,z:-560,size:2,water:!0},{name:`Le Rhône`,x:-560,z:128,size:1.1,water:!0,rot:-.33}],Hl=Math.PI*2,Y=(e,t,n)=>e<t?t:e>n?n:e,X=(e,t,n)=>e+(t-e)*n;function Ul(e,t,n){let r=(n-e)/(t-e);return r=r<0?0:r>1?1:r,r*r*(3-2*r)}function Wl(e){return e=(e+Math.PI)%Hl,e<0&&(e+=Hl),e-Math.PI}var Gl=(e,t)=>Wl(t-e),Kl=(e,t,n,r)=>X(e,t,1-Math.exp(-n*r)),ql=(e,t)=>Math.atan2(e,-t),Jl=e=>Math.PI-e,Yl=class{constructor(e=1){this.s=e>>>0||1}next(){let e=this.s=this.s+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(e+(t-e+1)*this.next())}pick(e){return e[Math.floor(this.next()*e.length)]}chance(e){return this.next()<e}weighted(e){let t=0;for(let n of e)t+=n[1];let n=this.next()*t;for(let t of e)if(n-=t[1],n<=0)return t[0];return e[e.length-1][0]}gauss(){let e=0,t=0;for(;e===0;)e=this.next();for(;t===0;)t=this.next();return Math.sqrt(-2*Math.log(e))*Math.cos(Hl*t)}},Z=(e=0,t=1)=>e+(t-e)*Math.random(),Xl=(e,t)=>Math.floor(e+(t-e+1)*Math.random()),Zl=e=>e[Math.floor(Math.random()*e.length)];function Ql(e,t){let n=Math.imul((e|0)^668265261,374761393)^Math.imul((t|0)+2654435769,2246822507);return n=Math.imul(n^n>>>15,3266489909),n^=n>>>13,(n>>>0)/4294967296}function $l(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=Ql(n,r),l=Ql(n+1,r),u=Ql(n,r+1),d=Ql(n+1,r+1);return X(X(c,l,o),X(u,d,o),s)}function eu(e,t,n=4){let r=0,i=.5,a=1,o=0;for(let s=0;s<n;s++)r+=$l(e*a+s*17.3,t*a-s*9.1)*i,o+=i,i*=.5,a*=2.03;return r/o}function tu(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i][0],s=n[i][1],c=n[a][0],l=n[a][1];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function nu(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>0?((e-n)*o+(t-r)*s)/c:0;l=l<0?0:l>1?1:l;let u=n+o*l-e,d=r+s*l-t;return Math.sqrt(u*u+d*d)}function ru(e,t,n,r=!1){let i={d:1/0,x:0,z:0,seg:0,t:0,along:0},a=0,o=r?n.length:n.length-1;for(let r=0;r<o;r++){let o=n[r],s=n[(r+1)%n.length],c=s[0]-o[0],l=s[1]-o[1],u=c*c+l*l,d=Math.sqrt(u),f=u>0?((e-o[0])*c+(t-o[1])*l)/u:0;f=f<0?0:f>1?1:f;let p=o[0]+c*f,m=o[1]+l*f,h=Math.hypot(p-e,m-t);h<i.d&&(i={d:h,x:p,z:m,seg:r,t:f,along:a+d*f}),a+=d}return i}function iu(e,t,n,r=!1){let i=1/0,a=r?n.length:n.length-1;for(let r=0;r<a;r++){let a=n[r],o=n[(r+1)%n.length],s=nu(e,t,a[0],a[1],o[0],o[1]);s<i&&(i=s)}return i}function au(e){let t=0;for(let n=1;n<e.length;n++)t+=Math.hypot(e[n][0]-e[n-1][0],e[n][1]-e[n-1][1]);return t}function ou(e,t){for(let n=1;n<e.length;n++){let r=e[n-1],i=e[n],a=Math.hypot(i[0]-r[0],i[1]-r[1]);if(t<=a||n===e.length-1){let e=a>0?Y(t/a,0,1):0;return{x:X(r[0],i[0],e),z:X(r[1],i[1],e),dx:(i[0]-r[0])/(a||1),dz:(i[1]-r[1])/(a||1)}}t-=a}let n=e[e.length-1];return{x:n[0],z:n[1],dx:1,dz:0}}function su(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)a[0]<t&&(t=a[0]),a[0]>r&&(r=a[0]),a[1]<n&&(n=a[1]),a[1]>i&&(i=a[1]);return{minx:t,minz:n,maxx:r,maxz:i}}function cu(e,t,n,r,i,a,o,s){let c=(o-i)*(t-a)-(s-a)*(e-i),l=(o-i)*(r-a)-(s-a)*(n-i),u=(n-e)*(a-t)-(r-t)*(i-e),d=(n-e)*(s-t)-(r-t)*(o-e);return c*l<0&&u*d<0}function lu(e,t,n){let r=Math.cos(e.yaw),i=Math.sin(e.yaw);return[e.x+t*r+n*i,e.z-t*i+n*r]}function uu(e,t,n){let r=Math.cos(e.yaw),i=Math.sin(e.yaw),a=t-e.x,o=n-e.z;return[a*r-o*i,a*i+o*r]}function du(e,t=0){let n=e.hw+t,r=e.hd+t;return[lu(e,-n,-r),lu(e,n,-r),lu(e,n,r),lu(e,-n,r)]}function fu(e,t,n,r=0){let[i,a]=uu(e,t,n);return Math.abs(i)<=e.hw+r&&Math.abs(a)<=e.hd+r}function pu(e,t,n=0){let r=[];for(let n of[e,t]){let e=Math.cos(n.yaw),t=Math.sin(n.yaw);r.push([e,-t],[t,e])}let i=du(e,n),a=du(t,n);for(let e of r){let t=1/0,n=-1/0,r=1/0,o=-1/0;for(let r of i){let i=r[0]*e[0]+r[1]*e[1];i<t&&(t=i),i>n&&(n=i)}for(let t of a){let n=t[0]*e[0]+t[1]*e[1];n<r&&(r=n),n>o&&(o=n)}if(n<r||o<t)return!1}return!0}function mu(e,t,n=0){let r=du(e,n);for(let e of r)if(tu(e[0],e[1],t))return!0;if(tu(e.x,e.z,t))return!0;for(let r of t)if(fu(e,r[0],r[1],n))return!0;for(let e=0;e<4;e++){let n=r[e],i=r[(e+1)%4];for(let e=0,r=t.length-1;e<t.length;r=e++)if(cu(n[0],n[1],i[0],i[1],t[r][0],t[r][1],t[e][0],t[e][1]))return!0}return!1}function hu(e,t){let n=du(e),r=1/0;for(let i=0;i<t.length-1;i++){let a=t[i],o=t[i+1];if(fu(e,a[0],a[1])||fu(e,o[0],o[1]))return 0;for(let e=0;e<4;e++){let t=n[e],i=n[(e+1)%4];if(cu(t[0],t[1],i[0],i[1],a[0],a[1],o[0],o[1]))return 0;r=Math.min(r,nu(t[0],t[1],a[0],a[1],o[0],o[1])),r=Math.min(r,nu(a[0],a[1],t[0],t[1],i[0],i[1]))}r=Math.min(r,nu(o[0],o[1],n[0][0],n[0][1],n[1][0],n[1][1]))}return r}function gu(e){e=Math.max(0,Math.floor(e));let t=Math.floor(e/60),n=e%60;return`${t}:${n<10?`0`:``}${n}`}var _u=20,vu=(()=>{let e=yl.map(e=>e.slice()),t=e.findIndex(e=>e[0]===600&&e[1]===-1400);return e.splice(t+1,2,[1800,-6e3],[7e3,-6e3],[7e3,-1800]),e[0]=[-1400,390],e.unshift([-5e3,1500]),e.push([-5e3,1650]),e})(),yu=class{constructor(){this.cell=4,this.n=vl/this.cell+1,this.min=-800,this.heights=new Float32Array(this.n*this.n),this.water=vu,this.pads=[],this.pads.push({x:Dl.c[0],z:Dl.c[1],hw:Dl.hl+6,hd:Dl.hw+2,yaw:-Math.PI/4,h:Dl.height,m:10});let e=Ml.at(0,-6);this.pads.push({x:e[0],z:e[1],hw:185,hd:76,yaw:Math.PI/180*15,h:Ml.height,m:40}),this.maxHeight=30}addPad(e){this.pads.push(e)}shoreInfo(e,t){let n=tu(e,t,this.water),r=!1;for(let i of bl)tu(e,t,i.poly)&&(n=!1,r=!0);let i=1/0,a=0,o=this.water;for(let n=0,r=o.length-1;n<o.length;r=n++){let s=nu(e,t,o[r][0],o[r][1],o[n][0],o[n][1]);s<i&&(i=s,a=r)}for(let n of bl){let r=n.poly;for(let n=0,o=r.length-1;n<r.length;o=n++){let s=nu(e,t,r[o][0],r[o][1],r[n][0],r[n][1]);s<i&&(i=s,a=-1)}}let s=a>=0&&a<=_u;return{sd:n?-i:i,right:s,island:r}}plateauWeight(e,t){let n=Sl.poly;if(tu(e,t,n))return 1;let r=0;for(let i=0;i<n.length;i++){let a=n[i],o=n[(i+1)%n.length],s=nu(e,t,a[0],a[1],o[0],o[1]),c=Sl.ramp[i];s<c&&(r=Math.max(r,1-Ul(0,c,s)))}return r}rawHeight(e,t){let{sd:n,right:r,island:i}=this.shoreInfo(e,t),a;if(a=n<2?X(-5.5,1.6,Ul(-16,2,n)):i?1.6:r?1.6+10.4*Ul(60,420,n):1.6+6.4*Ul(80,300,n),n>2){a+=(eu(e/70,t/70,3)-.5)*.9*Ul(2,30,n);let r=this.plateauWeight(e,t);if(r>0){let n=2.5*Math.exp(-((e-175)**2+(t-430)**2)/11250);a=X(a,Sl.height+n,r)}for(let n of this.pads){let[r,i]=uu(n,e,t),o=Math.abs(r)-n.hw,s=Math.abs(i)-n.hd,c=Math.max(o,s);if(c<n.m){let e=c<=0?1:1-Ul(0,n.m,c);a=X(a,n.h,e)}}}return a}compute(){let e=this.n;for(let t=0;t<e;t++){let n=this.min+t*this.cell;for(let r=0;r<e;r++){let i=this.min+r*this.cell;this.heights[t*e+r]=this.rawHeight(i,n)}}let t=-1/0;for(let e=0;e<this.heights.length;e++)this.heights[e]>t&&(t=this.heights[e]);this.maxHeight=t+1}heightAt(e,t){let n=(e-this.min)/this.cell,r=(t-this.min)/this.cell,i=this.n;if(n<0||r<0||n>=i-1||r>=i-1){let a=Y(n,0,i-1.001),o=Y(r,0,i-1.001);return Math.abs(a-n)>2||Math.abs(o-r)>2?this.rawHeight(e,t):this._interp(a,o)}return this._interp(n,r)}_interp(e,t){let n=this.n,r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=this.heights,c=s[i*n+r],l=s[i*n+r+1],u=s[(i+1)*n+r],d=s[(i+1)*n+r+1];return o>a?c+(d-u)*a+(u-c)*o:c+(l-c)*a+(d-l)*o}normalAt(e,t,n){let r=this.heightAt(e+1,t)-this.heightAt(e-1,t),i=this.heightAt(e,t+1)-this.heightAt(e,t-1);return n.set(-r,2,-i).normalize(),n}isWater(e,t){return this.heightAt(e,t)<-.15}waterDepth(e,t){return 0-this.heightAt(e,t)}buildMeshes(e,t=50){let n=new ln;n.name=`terrain`;let r=this.n,i=this.heights,a=this.cell,o=(r-1)/t,s=(e,t)=>{let n=Math.max(0,e-1),o=Math.min(r-1,e+1),s=Math.max(0,t-1),c=Math.min(r-1,t+1),l=(i[t*r+o]-i[t*r+n])/((o-n)*a),u=(i[c*r+e]-i[s*r+e])/((c-s)*a),d=Math.hypot(l,1,u);return[-l/d,1/d,-u/d]};for(let c=0;c<o;c++)for(let l=0;l<o;l++){let o=t+1,u=new Float32Array(o*o*3),d=new Float32Array(o*o*3),f=new Uint32Array(t*t*6),p=0;for(let e=0;e<o;e++)for(let n=0;n<o;n++){let o=l*t+n,f=c*t+e;u[p]=this.min+o*a,u[p+1]=i[f*r+o],u[p+2]=this.min+f*a;let m=s(o,f);d[p]=m[0],d[p+1]=m[1],d[p+2]=m[2],p+=3}let m=0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let t=e*o+n,r=e*o+n+1,i=(e+1)*o+n,a=(e+1)*o+n+1;f[m++]=t,f[m++]=i,f[m++]=a,f[m++]=t,f[m++]=a,f[m++]=r}let h=new fr;h.setAttribute(`position`,new Zn(u,3)),h.setAttribute(`normal`,new Zn(d,3)),h.setIndex(new Zn(f,1)),h.computeBoundingSphere(),h.computeBoundingBox();let g=new K(h,e);g.receiveShadow=!0,g.matrixAutoUpdate=!1,n.add(g)}return n}buildOuterMesh(e){let t=new Float32Array(98283),n=new Float32Array(98283),r=new Float32Array(32761);for(let e=0;e<181;e++)for(let i=0;i<181;i++){let a=-3600+i*40,o=-3600+e*40,s;s=Math.abs(a)<798&&Math.abs(o)<798?this.heightAt(a,o)-2.5:this.rawHeight(a,o);let c=Math.max(Math.abs(a),Math.abs(o));s>1&&c>1300&&(s+=Ul(1300,3400,c)*(eu(a/600,o/600,3)*60)),r[e*181+i]=s;let l=(e*181+i)*3;t[l]=a,t[l+1]=s,t[l+2]=o;let u=eu(a/230,o/230,3),d=1-Ul(1e3,2600,c),f=.8+u*.4,p=s<-.2?[.03,.07,.09]:[X(.07,.16,d)*f,X(.12,.15,d)*f,X(.05,.13,d)*f];n[l]=p[0],n[l+1]=p[1],n[l+2]=p[2]}let i=[];for(let e=0;e<180;e++)for(let t=0;t<180;t++){let n=-3600+t*40,r=-3600+e*40;if(n>-760&&n+40<760&&r>-760&&r+40<760)continue;let a=e*181+t,o=e*181+t+1,s=(e+1)*181+t,c=(e+1)*181+t+1;i.push(a,s,c,a,c,o)}let a=new fr;a.setAttribute(`position`,new Zn(t,3)),a.setAttribute(`color`,new Zn(n,3)),a.setIndex(i),a.computeVertexNormals();let o=new K(a,e);return o.receiveShadow=!1,o.matrixAutoUpdate=!1,o.name=`outerTerrain`,o}},Q={MOVE:1,BULLET:2,SIGHT:4,CAM:8},$={STONE:0,WOOD:1,METAL:2,GLASS:3,FOLIAGE:4,DIRT:5,WATER:6,FLESH:7,GRASS:8},bu=class{constructor(){this.t=1/0,this.box=-1,this.terrain=!1,this.nx=0,this.ny=1,this.nz=0,this.x=0,this.y=0,this.z=0,this.surf=0,this.dyn=null}},xu=class{constructor(e){this.terrain=e,this.cell=8,this.min=-896,this.span=vl+192,this.dim=Math.ceil(this.span/this.cell),this.cap=65536,this.n=0,this._alloc(this.cap),this.built=!1,this.qbuf=new Int32Array(8192),this.dynamic=[]}_alloc(e){let t=(t,n=1)=>{let r=new Float32Array(e*n);return t&&r.set(t),r};this.cx=t(this.cx),this.cy=t(this.cy),this.cz=t(this.cz),this.hx=t(this.hx),this.hy=t(this.hy),this.hz=t(this.hz),this.cs=t(this.cs),this.sn=t(this.sn);let n=new Uint8Array(e);this.flags&&n.set(this.flags),this.flags=n;let r=new Uint8Array(e);this.surf&&r.set(this.surf),this.surf=r,this.cap=e}addBox(e,t,n,r,i,a,o=0,s=15,c=$.STONE){if(this.built)throw Error(`collision world already built`);this.n>=this.cap&&this._alloc(this.cap*2);let l=this.n++;return this.cx[l]=e,this.cy[l]=t,this.cz[l]=n,this.hx[l]=r,this.hy[l]=i,this.hz[l]=a,this.cs[l]=Math.cos(o),this.sn[l]=Math.sin(o),this.flags[l]=s,this.surf[l]=c,l}build(){let e=this.dim,t=this.cell,n=this.min,r=new Uint32Array(e*e+1),i=new Int32Array(this.n*4);for(let a=0;a<this.n;a++){let o=Math.abs(this.cs[a]),s=Math.abs(this.sn[a]),c=o*this.hx[a]+s*this.hz[a],l=s*this.hx[a]+o*this.hz[a],u=Math.max(0,Math.floor((this.cx[a]-c-n)/t)),d=Math.min(e-1,Math.floor((this.cx[a]+c-n)/t)),f=Math.max(0,Math.floor((this.cz[a]-l-n)/t)),p=Math.min(e-1,Math.floor((this.cz[a]+l-n)/t));i[a*4]=u,i[a*4+1]=d,i[a*4+2]=f,i[a*4+3]=p;for(let t=f;t<=p;t++)for(let n=u;n<=d;n++)r[t*e+n+1]++}for(let t=1;t<=e*e;t++)r[t]+=r[t-1];this.cellStart=r,this.cellItems=new Int32Array(r[e*e]);let a=new Uint32Array(e*e);for(let t=0;t<this.n;t++){let n=i[t*4],o=i[t*4+1],s=i[t*4+2],c=i[t*4+3];for(let i=s;i<=c;i++)for(let s=n;s<=o;s++){let n=i*e+s;this.cellItems[r[n]+a[n]++]=t}}this.stamp=new Uint32Array(this.n),this.stampId=1,this.built=!0}_nextStamp(){return++this.stampId>=4294967280&&(this.stamp.fill(0),this.stampId=1),this.stampId}query(e,t,n,r){let i=this.dim,a=this.cell,o=this.min,s=Math.max(0,Math.floor((e-o)/a)),c=Math.min(i-1,Math.floor((n-o)/a)),l=Math.max(0,Math.floor((t-o)/a)),u=Math.min(i-1,Math.floor((r-o)/a)),d=this._nextStamp(),f=0,p=this.cellStart,m=this.cellItems,h=this.stamp,g=this.qbuf;for(let e=l;e<=u;e++)for(let t=s;t<=c;t++){let n=e*i+t;for(let e=p[n],t=p[n+1];e<t;e++){let t=m[e];h[t]!==d&&(h[t]=d,f<g.length&&(g[f++]=t))}}return f}resolveCylinder(e,t,n,r,i,a,o,s=null){let c=this.query(e-r-.05,t-r-.05,e+r+.05,t+r+.05),l=e,u=t;for(let e=0;e<3;e++){let e=!1;for(let t=0;t<c;t++){let o=this.qbuf[t];if(!(this.flags[o]&Q.MOVE))continue;let s=this.cy[o]+this.hy[o],c=this.cy[o]-this.hy[o];s<=n+a||c>=n+i||this._pushOut(o,l,u,r)&&(l=this._px,u=this._pz,e=!0)}for(let t of this.dynamic){if(t===s||!(t.flags&Q.MOVE))continue;let o=t.cy+t.hy,c=t.cy-t.hy;o<=n+a||c>=n+i||this._pushOutDyn(t,l,u,r)&&(l=this._px,u=this._pz,e=!0)}if(!e)break}return o[0]=l,o[1]=u,o}_pushOutGeneric(e,t,n,r,i,a,o,s,c){let l=o-e,u=s-t,d=l*i-u*a,f=l*a+u*i,p=d<-n?-n:d>n?n:d,m=f<-r?-r:f>r?r:f,h=d-p,g=f-m,_=h*h+g*g;if(_>=c*c)return!1;if(_>1e-10){let e=Math.sqrt(_),t=(c-e)/e;d+=h*t,f+=g*t}else n-Math.abs(d)<r-Math.abs(f)?d=(d>=0?1:-1)*(n+c):f=(f>=0?1:-1)*(r+c);return this._px=e+d*i+f*a,this._pz=t-d*a+f*i,!0}_pushOut(e,t,n,r){return this._pushOutGeneric(this.cx[e],this.cz[e],this.hx[e],this.hz[e],this.cs[e],this.sn[e],t,n,r)}_pushOutDyn(e,t,n,r){return this._pushOutGeneric(e.cx,e.cz,e.hx,e.hz,e.cs,e.sn,t,n,r)}_circleOverlaps(e,t,n,r,i,a,o,s,c){let l=o-e,u=s-t,d=l*i-u*a,f=l*a+u*i,p=d<-n?-n:d>n?n:d,m=f<-r?-r:f>r?r:f,h=d-p,g=f-m;return h*h+g*g<c*c}support(e,t,n,r,i,a=null){let o=this.terrain.heightAt(e,t),s=-1,c=-1,l=this.query(e-n,t-n,e+n,t+n);for(let i=0;i<l;i++){let a=this.qbuf[i];if(!(this.flags[a]&Q.MOVE))continue;let l=this.cy[a]+this.hy[a];l>r||l<=o||this._circleOverlaps(this.cx[a],this.cz[a],this.hx[a],this.hz[a],this.cs[a],this.sn[a],e,t,n)&&(o=l,s=this.surf[a],c=a)}for(let i of this.dynamic){if(i===a||!(i.flags&Q.MOVE))continue;let l=i.cy+i.hy;l>r||l<=o||this._circleOverlaps(i.cx,i.cz,i.hx,i.hz,i.cs,i.sn,e,t,n)&&(o=l,s=i.surf,c=-2)}return i&&(i.h=o,i.surf=s,i.box=c),o}ceiling(e,t,n,r){let i=1/0,a=this.query(e-n,t-n,e+n,t+n);for(let o=0;o<a;o++){let a=this.qbuf[o];if(!(this.flags[a]&Q.MOVE))continue;let s=this.cy[a]-this.hy[a];s<r||s>=i||this._circleOverlaps(this.cx[a],this.cz[a],this.hx[a],this.hz[a],this.cs[a],this.sn[a],e,t,n)&&(i=s)}return i}cylinderFree(e,t,n,r,i,a=Q.MOVE){let o=this.query(e-r,n-r,e+r,n+r);for(let s=0;s<o;s++){let o=this.qbuf[s];if(!(this.flags[o]&a))continue;let c=this.cy[o]+this.hy[o],l=this.cy[o]-this.hy[o];if(!(c<=t||l>=t+i)&&this._circleOverlaps(this.cx[o],this.cz[o],this.hx[o],this.hz[o],this.cs[o],this.sn[o],e,n,r))return!1}return!0}_rayBox(e,t,n,r,i,a,o,s,c,l,u,d,f,p){let m=c-e,h=u-n,g=l-t,_=m*o-h*s,v=m*s+h*o,y=d*o-p*s,b=d*s+p*o,x=-1/0,S=1/0,C=-1,w=0;if(Math.abs(y)<1e-9){if(_<-r||_>r)return 1/0}else{let e=(-r-_)/y,t=(r-_)/y,n=-1;if(e>t){let r=e;e=t,t=r,n=1}if(e>x&&(x=e,C=0,w=n),t<S&&(S=t),x>S)return 1/0}if(Math.abs(f)<1e-9){if(g<-i||g>i)return 1/0}else{let e=(-i-g)/f,t=(i-g)/f,n=-1;if(e>t){let r=e;e=t,t=r,n=1}if(e>x&&(x=e,C=1,w=n),t<S&&(S=t),x>S)return 1/0}if(Math.abs(b)<1e-9){if(v<-a||v>a)return 1/0}else{let e=(-a-v)/b,t=(a-v)/b,n=-1;if(e>t){let r=e;e=t,t=r,n=1}if(e>x&&(x=e,C=2,w=n),t<S&&(S=t),x>S)return 1/0}return S<0?1/0:x<0?(this._ax=-1,0):(this._ax=C,this._sg=w,x)}_setNormal(e,t,n,r,i,a){let o=this._ax,s=this._sg;if(o===-1){e.nx=-r,e.ny=-i,e.nz=-a;return}let c=0,l=0,u=0;o===0?c=s:o===1?l=s:u=s,e.nx=c*t+u*n,e.ny=l,e.nz=-c*n+u*t}rayTerrain(e,t,n,r,i,a,o){let s=this.terrain,c=s.maxHeight,l=0,u=t;if(u>c&&i>=0||u>c&&i<0&&(l=(c-t)/i,l>o))return 1/0;let d=l,f=t+i*l-s.heightAt(e+r*l,n+a*l);if(f<0)return l;for(;l<o;){let u=Math.min(8,Math.max(.8,f*.7));l=Math.min(l+u,o);let p=t+i*l;if(f=p-s.heightAt(e+r*l,n+a*l),f<0){let o=d,c=l;for(let l=0;l<7;l++){let l=(o+c)*.5;t+i*l-s.heightAt(e+r*l,n+a*l)<0?c=l:o=l}return c}if(p>c&&i>=0)return 1/0;d=l}return 1/0}raycast(e,t,n,r,i,a,o,s,c,l=!1,u=null){c.t=o,c.box=-1,c.terrain=!1,c.dyn=null;let d=o;if(!l){let s=this.rayTerrain(e,t,n,r,i,a,o);s<d&&(d=s,c.terrain=!0,c.surf=$.DIRT)}let f=this.dim,p=this.cell,m=this.min,h=Math.floor((e-m)/p),g=Math.floor((n-m)/p),_=r>0?1:-1,v=a>0?1:-1,y=Math.abs(r)>1e-9?p/Math.abs(r):1/0,b=Math.abs(a)>1e-9?p/Math.abs(a):1/0,x=Math.abs(r)>1e-9?((h+ +(r>0))*p+m-e)/r:1/0,S=Math.abs(a)>1e-9?((g+ +(a>0))*p+m-n)/a:1/0,C=this._nextStamp(),w=this.cellStart,T=this.cellItems,E=this.stamp,D=0,O=-1,ee=1,k=0,te=0;for(;D<=d&&te++<2e3;){if(h>=0&&g>=0&&h<f&&g<f){let o=g*f+h;for(let c=w[o],l=w[o+1];c<l;c++){let o=T[c];if(E[o]===C||(E[o]=C,!(this.flags[o]&s)))continue;let l=this._rayBox(this.cx[o],this.cy[o],this.cz[o],this.hx[o],this.hy[o],this.hz[o],this.cs[o],this.sn[o],e,t,n,r,i,a);l<d&&(d=l,O=o,ee=this.cs[o],k=this.sn[o],this._bax=this._ax,this._bsg=this._sg)}}else if(h<0&&_<0||h>=f&&_>0||g<0&&v<0||g>=f&&v>0)break;if(x<S?(D=x,x+=y,h+=_):(D=S,S+=b,g+=v),y===1/0&&b===1/0)break}let ne=null;for(let o of this.dynamic){if(o===u||!(o.flags&s))continue;let c=this._rayBox(o.cx,o.cy,o.cz,o.hx,o.hy,o.hz,o.cs,o.sn,e,t,n,r,i,a);c<d&&(d=c,O=-2,ne=o,ee=o.cs,k=o.sn,this._bax=this._ax,this._bsg=this._sg)}if(O!==-1)c.terrain=!1,c.box=O,c.dyn=ne,c.surf=ne?ne.surf:this.surf[O],this._ax=this._bax,this._sg=this._bsg,this._setNormal(c,ee,k,r,i,a);else if(c.terrain){let t=e+r*d,i=n+a*d,o=.5,s=this.terrain,l=s.heightAt(t+o,i)-s.heightAt(t-o,i),u=s.heightAt(t,i+o)-s.heightAt(t,i-o),f=Math.hypot(l,2*o,u);c.nx=-l/f,c.ny=2*o/f,c.nz=-u/f}return c.t=d,c.x=e+r*d,c.y=t+i*d,c.z=n+a*d,O!==-1||c.terrain}lineClear(e,t,n,r,i,a,o=Q.SIGHT,s=this._losHit||=new bu){let c=r-e,l=i-t,u=a-n,d=Math.hypot(c,l,u);return d<1e-4||!this.raycast(e,t,n,c/d,l/d,u/d,d,o,s)}addDynamic(e){return e.cs=Math.cos(e.yaw||0),e.sn=Math.sin(e.yaw||0),this.dynamic.push(e),e}removeDynamic(e){let t=this.dynamic.indexOf(e);t>=0&&this.dynamic.splice(t,1)}},Su=new G;function Cu(e,t){return Array.isArray(e)?(t[0]=e[0],t[1]=e[1],t[2]=e[2]):(Su.setHex(e),t[0]=Su.r,t[1]=Su.g,t[2]=Su.b),t}var wu=class{constructor(e){this.vcap=2048,this.icap=3072,this.facade=e,this.pos=new Float32Array(this.vcap*3),this.nrm=new Float32Array(this.vcap*3),this.uv=new Float32Array(this.vcap*2),this.col=new Uint8Array(this.vcap*4),this.fac=e?new Uint8Array(this.vcap*4):null,this.idx=new Uint32Array(this.icap),this.vn=0,this.in=0}ensure(e,t){if(this.vn+e>this.vcap){let t=this.vcap;for(;this.vn+e>t;)t*=2;let n=(e,n)=>{let r=new e.constructor(t*n);return r.set(e),r};this.pos=n(this.pos,3),this.nrm=n(this.nrm,3),this.uv=n(this.uv,2),this.col=n(this.col,4),this.fac&&=n(this.fac,4),this.vcap=t}if(this.in+t>this.icap){let e=this.icap;for(;this.in+t>e;)e*=2;let n=new Uint32Array(e);n.set(this.idx),this.idx=n,this.icap=e}}vert(e,t,n,r,i,a,o,s,c,l){let u=this.vn++,d=u*3;this.pos[d]=e,this.pos[d+1]=t,this.pos[d+2]=n,this.nrm[d]=r,this.nrm[d+1]=i,this.nrm[d+2]=a,this.uv[u*2]=o,this.uv[u*2+1]=s;let f=u*4;return this.col[f]=Math.min(255,c[0]*255),this.col[f+1]=Math.min(255,c[1]*255),this.col[f+2]=Math.min(255,c[2]*255),this.col[f+3]=255,this.fac&&(l?(this.fac[f]=l[0],this.fac[f+1]=l[1],this.fac[f+2]=l[2],this.fac[f+3]=l[3]):this.fac[f]=this.fac[f+1]=this.fac[f+2]=this.fac[f+3]=0),u}},Tu=[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],Eu=[{name:`px`,c:[5,1,2,6],n:[1,0,0],side:!0},{name:`nx`,c:[0,4,7,3],n:[-1,0,0],side:!0},{name:`pz`,c:[4,5,6,7],n:[0,0,1],side:!0},{name:`nz`,c:[1,0,3,2],n:[0,0,-1],side:!0},{name:`py`,c:[7,6,2,3],n:[0,1,0],side:!1},{name:`ny`,c:[5,4,0,1],n:[0,-1,0],side:!1}],Du=class{constructor(e=200){this.chunk=e,this.dim=Math.ceil(1600/e),this.buffers=new Map,this.materials=new Map,this.rgb=[0,0,0],this.rgb2=[0,0,0],this._w=new Float32Array(24),this.stats={boxes:0},this._geoCache=new Map}registerMaterial(e,t,{cast:n=!0,receive:r=!0,facade:i=!1}={}){this.materials.set(e,{material:t,cast:n,receive:r,facade:i})}chunkIndex(e,t){let n=Math.floor((e+800)/this.chunk),r=Math.floor((t+800)/this.chunk);return n=Math.max(0,Math.min(this.dim-1,n)),r=Math.max(0,Math.min(this.dim-1,r)),r*this.dim+n}buf(e,t,n){let r=e+`#`+this.chunkIndex(t,n),i=this.buffers.get(r);if(!i){let t=this.materials.get(e);if(!t)throw Error(`unknown material `+e);i=new wu(t.facade),i.mat=e,this.buffers.set(r,i)}return i}box(e){this.stats.boxes++;let t=e.sx/2,n=e.sy/2,r=e.sz/2,i=e.yaw||0,a=Math.cos(i),o=Math.sin(i),s=this._w;for(let i=0;i<8;i++){let c=Tu[i][0]*t,l=Tu[i][1]*n,u=Tu[i][2]*r;s[i*3]=e.x+c*a+u*o,s[i*3+1]=e.y+l,s[i*3+2]=e.z-c*o+u*a}let c=e.skip,l=e.mat||`plaster`,u=Cu(e.color===void 0?16777215:e.color,this.rgb),d=e.s||2;for(let t of Eu){if(c&&(c.includes?c.includes(t.name):c.has(t.name)))continue;let r=e.faces&&e.faces[t.name];if(r&&r.skip)continue;let i=r&&r.mat||l,f=r&&r.color!==void 0?Cu(r.color,this.rgb2):u,p=this.buf(i,e.x,e.z);p.ensure(4,6);let m=t.n[0]*a+t.n[2]*o,h=t.n[1],g=-t.n[0]*o+t.n[2]*a,_=r&&r.uv||e.uv||`world`,v=e.facade&&e.facade.fac,y=p.vn;for(let r=0;r<4;r++){let i=t.c[r],a=s[i*3],o=s[i*3+1],c=s[i*3+2],l,u;if(_===`facade`&&t.side){let i=t.name===`px`||t.name===`nx`?e.sz:e.sx,a=e.facade,s=Math.max(1,Math.round(i/a.bay));l=r===0||r===3?0:s;let c=a.yb===void 0?e.y-n:a.yb;u=(a.v0||0)+(o-c)/a.fh}else if(_===`unit`)l=r===0||r===3?0:1,u=r<2?0:1;else if(t.side){let e=-g,t=m;l=(a*e+c*t)/d,u=o/d}else l=a/d,u=c/d;p.vert(a,o,c,m,h,g,l,u,f,_===`facade`?v:null)}let b=p.idx,x=p.in;b[x++]=y,b[x++]=y+1,b[x++]=y+2,b[x++]=y,b[x++]=y+2,b[x++]=y+3,p.in=x}}quad(e,t,n,r,i,a,o=2,s=null,c=null){let l=Cu(a===void 0?16777215:a,this.rgb),u=n[0]-t[0],d=n[1]-t[1],f=n[2]-t[2],p=i[0]-t[0],m=i[1]-t[1],h=i[2]-t[2],g=d*h-f*m,_=f*p-u*h,v=u*m-d*p,y=Math.hypot(g,_,v)||1;g/=y,_/=y,v/=y;let b=(t[0]+r[0])/2,x=(t[2]+r[2])/2,S=this.buf(e,b,x);S.ensure(4,6);let C=S.vn,w=[t,n,r,i];for(let e=0;e<4;e++){let t=w[e],n,r;if(s)n=s[e*2],r=s[e*2+1];else if(Math.abs(_)>.6)n=t[0]/o,r=t[2]/o;else{let e=Math.hypot(g,v)||1;n=(t[0]*-v+t[2]*g)/e/o,r=t[1]/o}S.vert(t[0],t[1],t[2],g,_,v,n,r,l,c)}let T=S.idx,E=S.in;T[E++]=C,T[E++]=C+1,T[E++]=C+2,T[E++]=C,T[E++]=C+2,T[E++]=C+3,S.in=E}tri(e,t,n,r,i,a=2){let o=Cu(i===void 0?16777215:i,this.rgb),s=n[0]-t[0],c=n[1]-t[1],l=n[2]-t[2],u=r[0]-t[0],d=r[1]-t[1],f=r[2]-t[2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u,g=Math.hypot(p,m,h)||1;p/=g,m/=g,h/=g;let _=this.buf(e,t[0],t[2]);_.ensure(3,3);let v=_.vn;for(let e of[t,n,r]){let t,n;if(Math.abs(m)>.6)t=e[0]/a,n=e[2]/a;else{let r=Math.hypot(p,h)||1;t=(e[0]*-h+e[2]*p)/r/a,n=e[1]/a}_.vert(e[0],e[1],e[2],p,m,h,t,n,o,null)}_.idx[_.in++]=v,_.idx[_.in++]=v+1,_.idx[_.in++]=v+2}geom(e,t,n,r,{s:i=2,smooth:a=!0}={}){let o=Cu(r===void 0?16777215:r,this.rgb),s=e.attributes.position,c=e.attributes.normal,l=e.attributes.uv,u=e.index,d=t.elements,f=d[12],p=d[14],m=this.buf(n,f,p),h=s.count,g=u?u.count:h;m.ensure(h,g);let _=new U().getNormalMatrix(t).elements,v=m.vn;for(let e=0;e<h;e++){let t=s.getX(e),n=s.getY(e),r=s.getZ(e),a=d[0]*t+d[4]*n+d[8]*r+d[12],u=d[1]*t+d[5]*n+d[9]*r+d[13],f=d[2]*t+d[6]*n+d[10]*r+d[14],p=c.getX(e),h=c.getY(e),g=c.getZ(e),v=_[0]*p+_[3]*h+_[6]*g,y=_[1]*p+_[4]*h+_[7]*g,b=_[2]*p+_[5]*h+_[8]*g,x=Math.hypot(v,y,b)||1;p=v/x,h=y/x,g=b/x;let S,C;i===0&&l?(S=l.getX(e),C=l.getY(e)):Math.abs(h)>.7?(S=a/i,C=f/i):Math.abs(p)>Math.abs(g)?(S=f/i,C=u/i):(S=a/i,C=u/i),m.vert(a,u,f,p,h,g,S,C,o,null)}if(u)for(let e=0;e<g;e++)m.idx[m.in++]=v+u.getX(e);else for(let e=0;e<g;e++)m.idx[m.in++]=v+e}unit(e,t=8){let n=e+t,r=this._geoCache.get(n);return r||(e===`cyl`?r=new Mi(1,1,1,t,1,!1):e===`cylOpen`?r=new Mi(1,1,1,t,1,!0):e===`cone`?r=new Ni(1,1,t,1,!1):e===`sphere`?r=new Li(1,t,Math.max(4,t>>1)):e===`hemi`?r=new Li(1,t,Math.max(3,t>>2),0,Math.PI*2,0,Math.PI/2):e===`ico`?r=new Fi(1,+(t>8)):e===`torus`&&(r=new Ri(1,.08,6,t)),this._geoCache.set(n,r)),r}cylinder(e,t,n,r,i,a,o,s=8,c={}){let l=new W().compose(new H(e,t+i/2,n),new ft().setFromEuler(new Wt(c.rx||0,c.yaw||0,c.rz||0)),new H(r,i,c.rz2===void 0?r:c.rz2));this.geom(this.unit(c.open?`cylOpen`:`cyl`,s),l,a,o,c)}cone(e,t,n,r,i,a,o,s=8,c={}){let l=new W().compose(new H(e,t+i/2,n),new ft().setFromEuler(new Wt(0,c.yaw||0,0)),new H(r,i,r));this.geom(this.unit(`cone`,s),l,a,o,c)}sphere(e,t,n,r,i,a,o=10,s={}){let c=new W().compose(new H(e,t,n),new ft().setFromEuler(new Wt(0,s.yaw||0,0)),new H(r,s.ry||r,s.rz||r));this.geom(this.unit(s.hemi?`hemi`:`sphere`,o),c,i,a,s)}build(){let e=new ln;e.name=`static`;let t=0,n=0;for(let[r,i]of this.buffers){if(i.vn===0)continue;let a=this.materials.get(i.mat),o=new fr;o.setAttribute(`position`,new Zn(i.pos.slice(0,i.vn*3),3)),o.setAttribute(`normal`,new Zn(i.nrm.slice(0,i.vn*3),3)),o.setAttribute(`uv`,new Zn(i.uv.slice(0,i.vn*2),2)),o.setAttribute(`color`,new Zn(i.col.slice(0,i.vn*4),4,!0)),i.fac&&o.setAttribute(`fac`,new Zn(i.fac.slice(0,i.vn*4),4,!1));let s=i.vn<65536?new Uint16Array(i.idx.subarray(0,i.in)):i.idx.slice(0,i.in);o.setIndex(new Zn(s,1)),o.computeBoundingSphere(),o.computeBoundingBox();let c=new K(o,a.material);c.castShadow=a.cast,c.receiveShadow=a.receive,c.matrixAutoUpdate=!1,c.name=r,e.add(c),t+=i.vn,n+=i.in/3}return this.buffers.clear(),e.userData.stats={verts:t,tris:n,meshes:e.children.length},e}};function Ou(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=(r%n+n)%n,u=(i%n+n)%n,d=(l+1)%n,f=(u+1)%n,p=Ql(l,u),m=Ql(d,u),h=Ql(l,f),g=Ql(d,f);return X(X(p,m,s),X(h,g,s),c)}function ku(e,t,n,r,i=4){let a=0,o=.5,s=0,c=r;for(let r=0;r<i;r++)a+=Ou(e/n*c+r*31,t/n*c+r*17,c)*o,s+=o,o*=.5,c*=2;return a/s}function Au(e,n,{srgb:r=!0,repeat:i=!0,aniso:a=8}={}){let o=new Uint8Array(e*e*4),c=[0,0,0,255];for(let t=0;t<e;t++)for(let r=0;r<e;r++){n(r,t,c);let i=(t*e+r)*4;o[i]=Y(c[0]*255,0,255),o[i+1]=Y(c[1]*255,0,255),o[i+2]=Y(c[2]*255,0,255),o[i+3]=Y(c[3]*255,0,255)}let u=new Yr(o,e,e,T);return u.colorSpace=r?ze:``,i&&(u.wrapS=u.wrapT=t),u.magFilter=s,u.minFilter=l,u.generateMipmaps=!0,u.anisotropy=a,u.needsUpdate=!0,u}function ju(e=512){let t=e/8,n=e/24;return Au(e,(r,i,a)=>{let o=.5+(ku(r,i,e,32,3)-.5)*.22+(Ou(r/3,i/3,e/3)-.5)*.18,s=Ql(r*7+3,i*13+1);s>.985?o+=.22:s<.01&&(o-=.15);let c=Math.floor(i/t),l=r+c%2*t*.5,u=(l%t+t)%t,d=i%t,f;f=u<2||d<2?.3:.5+(Ql(Math.floor(l/t)%8,c)-.5)*.16+(Ou(r/4,i/4,e/4)-.5)*.08;let p=Math.floor(i/n),m=r+p%2*n*.5,h=Math.floor(m/n),g=(m-h*n)/n,_=(i-p*n)/n,v=Math.abs(g-.5)*2,y=Math.abs(_-.5)*2,b=(v**3+y**3)**(1/3),x;x=b>.86?.2:(.42+Ql(h%24+100,p)*.26)*(1-b**4*.45)+(Ql(r,i+7)-.5)*.05;let S=.5+(ku(r,i,e,16,4)-.5)*.35+(Ql(r*3,Math.floor(i/3))-.5)*.18;a[0]=o,a[1]=f,a[2]=x,a[3]=S},{srgb:!1})}function Mu(e=512){let t=e/64,n=e/4,r=e/8;return Au(e,(i,a,o)=>{let s=.5+(Ql(Math.floor(i/2.5),Math.floor(a/2.5))-.5)*.35+(ku(i,a,e,16,3)-.5)*.2,c=.5+(ku(i,a,e,8,4)-.5)*.4,l=Math.floor(i/t),u=Math.floor(a/t),d=i/t-l-.5,f=a/t-u-.5,p=(.35+Ql(l,u)*.45)*(1-(d*d+f*f)*1.2),m=Math.floor(a/r),h=i+m%2*n*.5,g=(h%n+n)%n,_=a%r,v;v=g<3||_<3?.3:.52+(Ql(Math.floor(h/n)%4,m)-.5)*.14+(Ou(i/5,a/5,e/5)-.5)*.12,o[0]=s,o[1]=c,o[2]=p,o[3]=v},{srgb:!1})}function Nu(e=256){return Au(e,(t,n,r)=>{let i=ku(t,n,e,4,5),a=ku(t+77,n+33,e,8,4);r[0]=i,r[1]=a,r[2]=ku(t+13,n+91,e,16,3),r[3]=1},{srgb:!1})}function Pu(e=256){return Au(e,(t,n,r)=>{r[0]=r[1]=r[2]=.86+(ku(t,n,e,8,4)-.5)*.12+(Ql(t,n)-.5)*.04-Math.max(0,ku(t+50,n*.5,e,4,3)-.62)*.4,r[3]=1})}function Fu(e=512){let t=e/5,n=e/10;return Au(e,(r,i,a)=>{let o=Math.floor(i/n),s=r+o%2*t*.5,c=(s%t+t)%t,l=i%n,u=Ql(Math.floor(s/t)%5,o),d;d=c<2||l<2?.62:.8+(u-.5)*.1+(ku(r,i,e,16,3)-.5)*.1+(Ql(r,i)-.5)*.04,a[0]=d,a[1]=d*.97,a[2]=d*.92,a[3]=1})}function Iu(e=256){let t=e/8,n=e/10;return Au(e,(e,r,i)=>{let a=Math.floor(r/t),o=e+a%2*n*.5,s=(o%n+n)%n/n,c=r%t/t,l=Ql(Math.floor(o/n)%10,a),u=Math.abs(s-.5)*2,d=.72+(l-.5)*.14-c*.18-(u>.94?.12:0);c>.9&&(d-=.2),d+=(Ql(e,r)-.5)*.05,i[0]=i[1]=i[2]=d,i[3]=1})}function Lu(e=256){let t=e/12;return Au(e,(n,r,i)=>{let a=Math.floor(r/t),o=Ql(a,3)*e,s=Math.sin((n+o)/e*40+Ou(n/16,r/4,e/16)*6)*.5+.5,c=.62+(Ql(a,9)-.5)*.18+s*.08;r%t<1.5&&(c-=.25),(n+o)%e<1.5&&(c-=.2),i[0]=c,i[1]=c*.8,i[2]=c*.6,i[3]=1})}function Ru(e=256){let t=e/5;return Au(e,(n,r,i)=>{let a=Math.floor(n/t),o=Math.floor(r/t),s=(a+o)%2?.82:.6;s+=(Ql(a,o+40)-.5)*.05+(Ou(n/8,r/8,e/8)-.5)*.05,(n%t<1.2||r%t<1.2)&&(s=.45),i[0]=s,i[1]=s,i[2]=s*.97,i[3]=1})}function zu(e=128){return Au(e,(t,n,r)=>{r[0]=r[1]=r[2]=.7+(Ou(t/2,n/32,e/2)-.5)*.15+(Ql(t,n)-.5)*.05,r[3]=1})}function Bu(e=128){return Au(e,(t,n,r)=>{let i=ku(t,n,e,8,4),a=Ql(Math.floor(t/3),Math.floor(n/3));r[0]=r[1]=r[2]=Y(.84+(i-.5)*.34+(a-.5)*.14,.45,1),r[3]=1})}function Vu(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}var Hu=class{constructor(e=2048,t=2048,n=512,r=128){this.canvas=Vu(e,t),this.ctx=this.canvas.getContext(`2d`),this.slotW=n,this.slotH=r,this.cols=Math.floor(e/n),this.rows=Math.floor(t/r),this.next=0,this.cache=new Map,this.w=e,this.h=t}get(e,t={}){let n=e+`|`+JSON.stringify(t);if(this.cache.has(n))return this.cache.get(n);if(this.next>=this.cols*this.rows)return this.cache.values().next().value;let r=this.next++,i=r%this.cols*this.slotW,a=Math.floor(r/this.cols)*this.slotH,o=this.ctx,{bg:s=`#1d3b6e`,fg:c=`#ffffff`,font:l=`bold`,border:u=null,serif:d=!1,italic:f=!1,cross:p=!1}=t;o.save(),o.translate(i,a),o.fillStyle=s,o.fillRect(0,0,this.slotW,this.slotH),u&&(o.strokeStyle=u,o.lineWidth=8,o.strokeRect(6,6,this.slotW-12,this.slotH-12));let m=78,h=d?`Georgia, "Times New Roman", serif`:`"Helvetica Neue", Helvetica, Arial, sans-serif`;o.font=`${f?`italic `:``}${l} ${m}px ${h}`;let g=o.measureText(e).width,_=this.slotW-(p?150:40);g>_&&(m=Math.floor(m*_/g),o.font=`${f?`italic `:``}${l} ${m}px ${h}`,g=o.measureText(e).width),o.fillStyle=c,o.textBaseline=`middle`,o.textAlign=`center`,o.fillText(e,this.slotW/2+(p?50:0),this.slotH/2+4),p&&(o.fillStyle=p,o.fillRect(22,(this.slotH-90)/2,90,90),o.fillStyle=`#fff`,o.fillRect(58,(this.slotH-90)/2+13.5,18,90*.7),o.fillRect(35.5,(this.slotH-90)/2+36,90*.7,18)),o.restore();let v=[i/this.w,a/this.h,(i+this.slotW)/this.w,(a+this.slotH)/this.h];return this.cache.set(n,v),v}texture(){let e=new Ei(this.canvas);return e.colorSpace=ze,e.flipY=!1,e.anisotropy=8,e.generateMipmaps=!0,e.minFilter=l,e}};function Uu(){let e=Vu(768,256),t=e.getContext(`2d`);t.fillStyle=`#d52b1e`,t.fillRect(0,0,256,256),t.fillStyle=`#fff`,t.fillRect(104,48,48,160),t.fillRect(48,104,160,48),t.save(),t.translate(256,0),t.fillStyle=`#f6c500`,t.fillRect(0,0,128,256),t.fillStyle=`#c8102e`,t.fillRect(128,0,128,256),t.fillStyle=`#111`,t.beginPath(),t.moveTo(128,40),t.lineTo(96,52),t.lineTo(80,80),t.lineTo(30,70),t.lineTo(46,96),t.lineTo(20,110),t.lineTo(52,124),t.lineTo(30,146),t.lineTo(70,150),t.lineTo(84,180),t.lineTo(70,216),t.lineTo(104,200),t.lineTo(128,214),t.closePath(),t.fill(),t.fillStyle=`#c8102e`,t.beginPath(),t.arc(108,66,6,0,Math.PI*2),t.fill(),t.fillRect(100,30,28,12),t.fillStyle=`#f6c500`,t.lineWidth=12,t.strokeStyle=`#f6c500`,t.beginPath(),t.arc(190,80,24,0,Math.PI*2),t.stroke(),t.fillRect(184,102,12,110),t.fillRect(196,176,26,12),t.fillRect(196,198,20,12),t.restore(),t.fillStyle=`#123f8c`,t.fillRect(512,0,256,256),t.fillStyle=`#fff`,t.font=`bold 90px Helvetica, Arial`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`GE`,640,132);let n=new Ei(e);return n.colorSpace=ze,n.flipY=!1,n}function Wu(){let e=Vu(768,256),t=e.getContext(`2d`);t.fillStyle=`#fff`,t.beginPath(),t.arc(128,128,124,0,Math.PI*2),t.fill(),t.strokeStyle=`#222`,t.lineWidth=6,t.stroke(),t.fillStyle=`#111`;for(let e=0;e<60;e++){let n=e/60*Math.PI*2,r=e%5==0;t.save(),t.translate(128,128),t.rotate(n),t.fillRect(-(r?5:2),-116,r?10:4,r?34:12),t.restore()}t.save(),t.translate(384,128),t.fillStyle=`#2f7d32`,t.beginPath(),t.arc(0,0,126,0,Math.PI*2),t.fill();for(let e=0;e<900;e++){let n=Math.sqrt(Ql(e,5))*120,r=Ql(e,9)*Math.PI*2,i=[`#f4e04d`,`#e04848`,`#ffffff`,`#c25be0`,`#ff9a3c`][e%5];t.fillStyle=n>95?`#d93a3a`:i,n<86&&n>70&&(t.fillStyle=`#b8e0a0`),t.beginPath(),t.arc(Math.cos(r)*n,Math.sin(r)*n,3,0,Math.PI*2),t.fill()}t.fillStyle=`#fff`;for(let e=0;e<12;e++){let n=e/12*Math.PI*2;t.save(),t.rotate(n),t.fillRect(-5,-112,10,24),t.restore()}t.restore(),t.save(),t.translate(640,128),t.fillStyle=`#1b1b1b`,t.beginPath(),t.arc(0,0,124,0,Math.PI*2),t.fill(),t.strokeStyle=`#d4af37`,t.lineWidth=8,t.stroke(),t.fillStyle=`#d4af37`,t.font=`bold 30px Georgia`,t.textAlign=`center`,t.textBaseline=`middle`;let n=[`XII`,`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`,`XI`];for(let e=0;e<12;e++){let r=e/12*Math.PI*2-Math.PI/2;t.fillText(n[e],Math.cos(r)*92,Math.sin(r)*92)}t.restore();let r=new Ei(e);return r.colorSpace=ze,r.flipY=!1,r}function Gu(){let e=Vu(128,128),t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.6)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new Ei(e);return r.colorSpace=ze,r}function Ku(){let e=Vu(128,128),t=e.getContext(`2d`),n=t.createImageData(128,128);for(let e=0;e<128;e++)for(let t=0;t<128;t++){let r=(t-64)/64,i=(e-64)/64,a=Math.sqrt(r*r+i*i),o=ku(t,e,128,4,4),s=Y((1-a)*1.6*(.55+o*.9)-.15,0,1),c=(e*128+t)*4;n.data[c]=n.data[c+1]=n.data[c+2]=255,n.data[c+3]=s*255}t.putImageData(n,0,0);let r=new Ei(e);return r.colorSpace=ze,r}var qu={time:{value:0},wind:{value:new V(1,.4)}},Ju=`
float gr_hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float gr_rect(vec2 f, vec2 a, vec2 b, vec2 w) {
  vec2 s = smoothstep(a - w, a + w, f) * (1.0 - smoothstep(b - w, b + w, f));
  return s.x * s.y;
}
`;function Yu(){let e=new Yi({vertexColors:!0,roughness:.88,metalness:0});return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 fac;
varying vec4 vFac;
varying vec2 vFUv;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vFac = fac;
vFUv = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec4 vFac;
varying vec2 vFUv;
`+Ju+Xu).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
`+Zu)},e.customProgramCacheKey=()=>`facade-v1`,e}var Xu=`
vec3 gr_shutter(float i) {
  if (i < 1.5) return vec3(0.045, 0.12, 0.06);
  if (i < 2.5) return vec3(0.16, 0.17, 0.18);
  if (i < 3.5) return vec3(0.12, 0.06, 0.025);
  if (i < 4.5) return vec3(0.62, 0.62, 0.58);
  if (i < 5.5) return vec3(0.17, 0.23, 0.29);
  if (i < 6.5) return vec3(0.17, 0.03, 0.02);
  return vec3(0.14, 0.15, 0.07);
}
`,Zu=`
{
  vec2 m = vFUv;
  vec2 fw = max(fwidth(m), vec2(1e-4));
  float fl = floor(m.y);
  float mi = floor(m.x);
  vec2 f = fract(m);
  float style = floor(vFac.x + 0.5);
  float seed = vFac.y;
  float flags = vFac.w;
  float shops = mod(flags, 2.0);
  float balcony = mod(floor(flags / 2.0), 2.0);
  float hasShutter = step(0.5, vFac.z);
  float h = gr_hash12(vec2(mi + seed * 7.13, fl + seed * 3.71));
  vec3 base = diffuseColor.rgb;
  vec3 col = base;
  vec2 wmin = vec2(0.28, 0.22);
  vec2 wmax = vec2(0.72, 0.84);
  vec3 frameC = vec3(0.72, 0.71, 0.68);
  float frameW = 0.035;
  bool shop = shops > 0.5 && fl < 0.5;
  if (style > 2.5 && style < 3.5) { // modern ribbon
    wmin = vec2(0.02, 0.32); wmax = vec2(0.98, 0.86); frameC = vec3(0.06); frameW = 0.012; hasShutter = 0.0;
  } else if (style > 1.5 && style < 2.5) { // old town
    float off = (h - 0.5) * 0.12;
    wmin = vec2(0.31 + off, 0.27); wmax = vec2(0.69 + off, 0.80);
  } else if (style > 0.5 && style < 1.5) { // grand
    wmin = vec2(0.27, 0.16); wmax = vec2(0.73, 0.86); hasShutter = 0.0;
  } else if (style > 3.5) { // plain
    wmin = vec2(0.36, 0.42); wmax = vec2(0.64, 0.80); hasShutter = 0.0;
  }
  // facade bands / cornices
  if (style < 2.5 || style > 3.5) {
    float band = 1.0 - smoothstep(0.045 - fw.y, 0.045 + fw.y, f.y);
    float lit = gr_rect(f, vec2(-1.0, 0.045), vec2(2.0, 0.075), fw);
    col = mix(col, base * 0.78, band * step(0.5, fl));
    col = mix(col, base * 1.12, lit * step(0.5, fl));
    if (fl < 0.5 && !shop) {
      // rusticated ground floor: horizontal grooves
      float groove = step(0.46, abs(fract(f.y * 5.0) - 0.5));
      col = mix(col, base * 0.8, groove * 0.7);
    }
  }
  float inWin = 0.0;
  vec3 glass;
  if (shop) {
    bool door = abs(mi - floor(seed / 16.0)) < 0.5;
    vec2 a = vec2(0.06, 0.05);
    vec2 b = vec2(0.94, 0.80);
    float frame = gr_rect(f, a - 0.03, b + 0.03, fw);
    col = mix(col, vec3(0.04, 0.045, 0.05), frame);
    inWin = gr_rect(f, a, b, fw);
    float lum = 0.25 + 0.35 * h;
    glass = mix(vec3(0.05, 0.06, 0.07), vec3(lum, lum * 0.85, lum * 0.6) * 0.5, smoothstep(0.1, 0.7, f.y));
    if (door) glass = mix(vec3(0.02), glass, 0.4);
    // awning-coloured fascia above
    float fascia = gr_rect(f, vec2(-1.0, 0.84), vec2(2.0, 0.97), fw);
    col = mix(col, gr_shutter(mod(seed, 7.0) + 1.0) * 1.2, fascia);
  } else {
    float frame = gr_rect(f, wmin - frameW, wmax + frameW, fw);
    col = mix(col, frameC, frame);
    inWin = gr_rect(f, wmin, wmax, fw);
    float t = (f.y - wmin.y) / (wmax.y - wmin.y);
    glass = mix(vec3(0.018, 0.024, 0.032), vec3(0.075, 0.09, 0.11), smoothstep(0.2, 1.0, t));
    // curtains / open windows variety
    if (h > 0.82) glass = mix(glass, vec3(0.32, 0.30, 0.26), 0.55 * step(0.55, fract((f.x - wmin.x) / (wmax.x - wmin.x) * 2.0 + 0.25)));
    if (h < 0.08) glass *= 0.4;
    // mullion
    float mul = 1.0 - smoothstep(0.0, fw.x * 1.5, abs(f.x - (wmin.x + wmax.x) * 0.5) - 0.008);
    float tr = 1.0 - smoothstep(0.0, fw.y * 1.5, abs(t - 0.68) - 0.012);
    if (style < 2.5 || style > 3.5) glass = mix(glass, frameC * 0.9, max(mul, tr) * 0.9);
    // shutters
    if (hasShutter > 0.5) {
      vec3 sc = gr_shutter(vFac.z);
      float sw = (wmax.x - wmin.x) * 0.5;
      float closed = step(0.9, h);
      float sl = gr_rect(f, vec2(wmin.x - frameW - sw, wmin.y), vec2(wmin.x - frameW - 0.01, wmax.y), fw);
      float sr = gr_rect(f, vec2(wmax.x + frameW + 0.01, wmin.y), vec2(wmax.x + frameW + sw, wmax.y), fw);
      float slats = 0.85 + 0.15 * step(0.5, fract(f.y * 40.0));
      col = mix(col, sc * slats, max(sl, sr) * (1.0 - closed));
      glass = mix(glass, sc * slats, closed);
    }
    // balconies
    if (balcony > 0.5 && fl > 0.5 && (style > 0.5 && style < 1.5 || mod(fl, 3.0) < 0.5)) {
      float rail = gr_rect(f, vec2(wmin.x - 0.06, wmin.y - 0.02), vec2(wmax.x + 0.06, wmin.y + 0.2), fw);
      float bars = step(0.55, fract(f.x * 26.0));
      float edge = gr_rect(f, vec2(wmin.x - 0.06, wmin.y + 0.17), vec2(wmax.x + 0.06, wmin.y + 0.2), fw);
      col = mix(col, vec3(0.02), rail * max(bars, edge) * 0.95);
      glass = mix(glass, vec3(0.02), rail * max(bars, edge) * 0.95);
    }
  }
  col = mix(col, glass, inWin);
  // distant LOD: average out the pattern instead of aliasing
  float lod = smoothstep(0.12, 0.45, max(fw.x, fw.y));
  vec3 avg = mix(base * 0.95, vec3(0.05, 0.06, 0.07), shop ? 0.6 : 0.24);
  col = mix(col, avg, lod);
  inWin *= (1.0 - lod);
  diffuseColor.rgb = col;
  roughnessFactor = mix(roughnessFactor, 0.12, inWin);
}
`;function Qu(e,t,n,r){let i=new Yi({color:16777215,roughness:.94,metalness:0}),a=[5592666,11577756,9406072,6261308,12891284,8020552,7300957,10985360].map(e=>new G(e));return i.onBeforeCompile=i=>{i.uniforms.tId={value:e},i.uniforms.tDetA={value:t},i.uniforms.tDetB={value:n},i.uniforms.tNoise={value:r},i.uniforms.palette={value:a},i.uniforms.uSdfR={value:e.userData.R||2},i.vertexShader=i.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vGWorld;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vGWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vGWorld;
uniform sampler2D tId;
uniform sampler2D tDetA;
uniform sampler2D tDetB;
uniform sampler2D tNoise;
uniform vec3 palette[8];
uniform float uSdfR;
void gr_acc(float id, float w, inout vec4 a, inout vec4 b) {
  a += w * vec4(equal(vec4(id), vec4(0.0, 1.0, 2.0, 3.0)));
  b += w * vec4(equal(vec4(id), vec4(4.0, 5.0, 6.0, 7.0)));
}`).replace(`#include <map_fragment>`,`{
  ivec2 ts = textureSize(tId, 0);
  vec2 g = (vGWorld.xz + 800.0) / 1600.0 * vec2(ts) - 0.5;
  vec2 fg = fract(g);
  ivec2 b0 = ivec2(floor(g));
  ivec2 mx = ts - 1;
  vec4 t00 = texelFetch(tId, clamp(b0, ivec2(0), mx), 0);
  vec4 t10 = texelFetch(tId, clamp(b0 + ivec2(1, 0), ivec2(0), mx), 0);
  vec4 t01 = texelFetch(tId, clamp(b0 + ivec2(0, 1), ivec2(0), mx), 0);
  vec4 t11 = texelFetch(tId, clamp(b0 + ivec2(1, 1), ivec2(0), mx), 0);
  vec4 nz = texture2D(tNoise, vGWorld.xz / 97.0);
  vec4 nz2 = texture2D(tNoise, vGWorld.xz / 23.0);
  vec4 nz3 = texture2D(tNoise, vGWorld.xz / 3.1);
  // decode texels: inside material, outside material, signed distance
  vec4 T[4];
  T[0] = t00; T[1] = t10; T[2] = t01; T[3] = t11;
  float W4[4];
  W4[0] = (1.0 - fg.x) * (1.0 - fg.y); W4[1] = fg.x * (1.0 - fg.y); W4[2] = (1.0 - fg.x) * fg.y; W4[3] = fg.x * fg.y;
  float vA[4], vB[4], vD[4], vis[4];
  float refA = -1.0, refB = -1.0, best = 1e9;
  for (int k = 0; k < 4; k++) {
    vA[k] = floor(T[k].r * 255.0 / 32.0 + 0.5);
    vB[k] = floor(T[k].g * 255.0 / 32.0 + 0.5);
    vD[k] = (T[k].b * 255.0 - 127.5) / 127.5 * uSdfR;
    vis[k] = vD[k] >= 0.0 ? vA[k] : vB[k];
    if (vA[k] != vB[k] && abs(vD[k]) < best) { best = abs(vD[k]); refA = vA[k]; refB = vB[k]; }
  }
  vec4 wa = vec4(0.0), wb = vec4(0.0);
  float dd = 0.0, wsum = 0.0;
  for (int k = 0; k < 4; k++) {
    if (vis[k] == refA) { dd += W4[k] * abs(vD[k]); wsum += W4[k]; }
    else if (vis[k] == refB) { dd -= W4[k] * abs(vD[k]); wsum += W4[k]; }
  }
  float d = wsum > 0.0 ? dd / wsum : 0.0;
  float organic = (refA == 3.0 || refB == 3.0 || refA == 4.0 || refB == 4.0) ? 1.0 : 0.0;
  d += organic * (nz3.r - 0.5) * 0.45;
  // derivatives must be taken in uniform control flow
  float aa = max(fwidth(d) * 0.75, 0.01);
  float sIn = smoothstep(-aa, aa, d);
  for (int k = 0; k < 4; k++) {
    if (refA >= 0.0 && (vis[k] == refA || vis[k] == refB)) {
      gr_acc(refA, W4[k] * sIn, wa, wb);
      gr_acc(refB, W4[k] * (1.0 - sIn), wa, wb);
    } else gr_acc(vis[k], W4[k], wa, wb);
  }
  // quay stone along the water's edge (terrain height based)
  float wq = smoothstep(1.34, 1.16, vGWorld.y + (nz3.g - 0.5) * 0.08);
  wa *= (1.0 - wq);
  wb *= (1.0 - wq);
  wb.w += wq;
  vec2 duv = vGWorld.xz / 4.0;
  vec4 dA = texture2D(tDetA, duv);
  vec4 dB = texture2D(tDetB, duv);
  vec3 grass = palette[3] * mix(vec3(0.85, 1.0, 0.8), vec3(1.15, 1.02, 0.85), nz.g) * (0.85 + 0.3 * nz2.b);
  vec3 c = palette[0] * wa.x * (0.55 + dA.r * 0.95) * (0.9 + 0.2 * nz.r)
         + palette[1] * wa.y * (0.45 + dA.g * 1.1)
         + palette[2] * wa.z * (0.25 + dA.b * 1.5)
         + grass * wa.w * (0.55 + dA.a * 0.9)
         + palette[4] * wb.x * (0.5 + dB.r * 1.0)
         + palette[5] * wb.y * (0.55 + dB.g * 0.9)
         + palette[6] * wb.z * (0.4 + dB.b * 1.3)
         + palette[7] * wb.w * (0.45 + dB.a * 1.1);
  c *= 0.88 + 0.24 * nz.r;
  diffuseColor.rgb *= c;
}`)},i.customProgramCacheKey=()=>`ground-v3`,i}function $u(e){let t=new Yi({color:16777215,roughness:.95,metalness:0,map:e,flatShading:!1,vertexColors:!0});return t.onBeforeCompile=e=>{e.uniforms.uTime=qu.time,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
#ifdef USE_INSTANCING
  vec3 gIp = instanceMatrix[3].xyz;
#else
  vec3 gIp = vec3(0.0);
#endif
  float gSw = sin(uTime * 1.3 + gIp.x * 0.11 + gIp.z * 0.07) * 0.035 + sin(uTime * 2.9 + gIp.x * 0.3 + position.y * 2.0) * 0.012;
  transformed.x += gSw * max(position.y, 0.0);
  transformed.z += gSw * 0.6 * max(position.y, 0.0);`)},t.customProgramCacheKey=()=>`foliage-v1`,t}function ed(e){let t=new Yi({map:e,side:2,roughness:.9});return t.onBeforeCompile=e=>{e.uniforms.uTime=qu.time,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  float gU = uv.x * 3.0 - floor(uv.x * 3.0);
  float gPh = position.x * 0.37 + position.z * 0.29;
  float gW = sin(uTime * 5.0 - gU * 7.0 + gPh) * 0.22 * gU + sin(uTime * 8.3 - gU * 11.0 + gPh) * 0.06 * gU;
  transformed.y += gW * 0.3;
  transformed.x += gW * normal.x;
  transformed.z += gW * normal.z;`)},t.customProgramCacheKey=()=>`flag-v1`,t}function td(e=8){let t={plaster:Pu(),stone:Fu(),roof:Iu(),wood:Lu(),tile:Ru(),metal:zu(),foliage:Bu()};for(let n of Object.values(t))n.anisotropy=e;let n=e=>new Yi({vertexColors:!0,roughness:.9,metalness:0,...e}),r={facade:Yu(),plaster:n({map:t.plaster}),stone:n({map:t.stone,roughness:.85}),roof:n({map:t.roof,roughness:.8}),wood:n({map:t.wood,roughness:.8}),tile:n({map:t.tile,roughness:.55}),metal:n({map:t.metal,roughness:.42,metalness:.15}),glass:n({roughness:.08,metalness:.1}),paint:n({roughness:.55}),matte:n({roughness:.95}),hedge:n({map:t.foliage,roughness:.95}),glow:new wr({vertexColors:!0})};return r.signTex=null,r.textures=t,r.foliage=$u(t.foliage),r.flagMaterial=ed,r.groundMaterial=Qu,r}var nd={GRID:0,INDOOR:1,DOOR:2,BRIDGE:4,SPECIAL:8},rd=class{constructor(){this._x=[],this._y=[],this._z=[],this._f=[],this._adj=[],this.doorNodes=[],this.n=0,this.ready=!1}addNode(e,t,n,r=0){let i=this.n++;return this._x.push(e),this._y.push(t),this._z.push(n),this._f.push(r),this._adj.push([]),i}link(e,t){e!==t&&e!==null&&t!==null&&e!==void 0&&t!==void 0&&(this._adj[e].includes(t)||this._adj[e].push(t),this._adj[t].includes(e)||this._adj[t].push(e))}pos(e){return this.ready?[this.x[e],this.y[e],this.z[e]]:[this._x[e],this._y[e],this._z[e]]}walkable(e,t,n,r,i,a,o,s){for(let c of[.65,1.45]){let l=i-t,u=a+c-(n+c),d=o-r,f=Math.hypot(l,u,d);if(!(f<.01)&&e.raycast(t,n+c,r,l/f,u/f,d/f,f,Q.MOVE,s,!0))return!1}return!0}buildGrid(e,t=8){let n=e.C,r=e.T,i=Math.floor(1580/t)+1,a=new Int32Array(i*i).fill(-1),o={h:0,surf:0,box:-1};for(let e=0;e<i;e++)for(let s=0;s<i;s++){let c=-790+s*t,l=-790+e*t,u=r.heightAt(c,l),d=Math.max(u,0)+2.5,f=n.support(c,l,.35,d,o);f<.15||n.cylinderFree(c,f+.3,l,.45,1.5)&&(a[e*i+s]=this.addNode(c,f,l,nd.GRID))}let s=new bu,c=(e,t)=>{if(e<0||t<0)return;let r=this._x[e],i=this._y[e],a=this._z[e],c=this._x[t],l=this._y[t],u=this._z[t],d=Math.hypot(c-r,u-a);if(Math.abs(l-i)>d*.5)return;let f=(r+c)/2,p=(a+u)/2,m=n.support(f,p,.35,Math.max(i,l)+.6,o);m<.1||Math.abs(m-(i+l)/2)>1.2||this.walkable(n,r,i,a,c,l,u,s)&&this.link(e,t)};for(let e=0;e<i;e++)for(let t=0;t<i;t++){let n=a[e*i+t];n<0||(t+1<i&&c(n,a[e*i+t+1]),e+1<i&&c(n,a[(e+1)*i+t]),t+1<i&&e+1<i&&c(n,a[(e+1)*i+t+1]),t>0&&e+1<i&&c(n,a[(e+1)*i+t-1]))}this.gridInfo={nx:i,spacing:t,lim:790,grid:a};for(let e of this.doorNodes){let r=this._x[e],o=this._y[e],c=this._z[e],l=Math.round((r+790)/t),u=Math.round((c+790)/t),d=[];for(let e=-2;e<=2;e++)for(let t=-2;t<=2;t++){let n=l+t,s=u+e;if(n<0||s<0||n>=i||s>=i)continue;let f=a[s*i+n];if(f<0)continue;let p=Math.hypot(this._x[f]-r,this._z[f]-c);p<15&&Math.abs(this._y[f]-o)<2.5&&d.push([p,f])}d.sort((e,t)=>e[0]-t[0]);let f=0;for(let[,t]of d)if(this.walkable(n,r,o,c,this._x[t],this._y[t],this._z[t],s)&&(this.link(e,t),++f>=3))break}}finalize(){let e=this.n;this.x=Float32Array.from(this._x),this.y=Float32Array.from(this._y),this.z=Float32Array.from(this._z),this.flags=Uint8Array.from(this._f);let t=new Int32Array(e+1);for(let n=0;n<e;n++)t[n+1]=t[n]+this._adj[n].length;let n=new Int32Array(t[e]);for(let r=0;r<e;r++)n.set(this._adj[r],t[r]);this.adjStart=t,this.adjItems=n,this._x=this._y=this._z=this._f=this._adj=null,this.hcell=16,this.hdim=Math.ceil(1664/this.hcell);let r=new Int32Array(this.hdim*this.hdim+1),i=e=>{let t=Math.max(0,Math.min(this.hdim-1,Math.floor((this.x[e]+800+32)/this.hcell)));return Math.max(0,Math.min(this.hdim-1,Math.floor((this.z[e]+800+32)/this.hcell)))*this.hdim+t};for(let t=0;t<e;t++)r[i(t)+1]++;for(let e=1;e<r.length;e++)r[e]+=r[e-1];let a=new Int32Array(e),o=new Int32Array(this.hdim*this.hdim);for(let t=0;t<e;t++){let e=i(t);a[r[e]+o[e]++]=t}this.hstart=r,this.hitems=a,this.g=new Float32Array(e),this.came=new Int32Array(e),this.seen=new Uint32Array(e),this.closed=new Uint32Array(e),this.searchId=0,this.heap=new Int32Array(e+1),this.heapF=new Float32Array(e+1),this.comp=new Int32Array(e).fill(-1);let s=0,c=[];for(let r=0;r<e;r++)if(!(this.comp[r]>=0)){for(c.push(r),this.comp[r]=s;c.length;){let e=c.pop();for(let r=t[e];r<t[e+1];r++){let e=n[r];this.comp[e]<0&&(this.comp[e]=s,c.push(e))}}s++}let l=new Int32Array(s);for(let t=0;t<e;t++)l[this.comp[t]]++;this.compSize=l,this.ready=!0}degree(e){return this.adjStart[e+1]-this.adjStart[e]}nearest(e,t,n,r=24,i=!0,a=null){let o=this.hcell,s=Math.floor((e+800+32)/o),c=Math.floor((n+800+32)/o),l=Math.ceil(r/o),u=-1,d=1/0;for(let o=-l;o<=l;o++)for(let f=-l;f<=l;f++){let l=s+f,p=c+o;if(l<0||p<0||l>=this.hdim||p>=this.hdim)continue;let m=p*this.hdim+l;for(let o=this.hstart[m];o<this.hstart[m+1];o++){let s=this.hitems[o];if(i&&this.degree(s)===0||a&&!a(s))continue;let c=this.x[s]-e,l=this.z[s]-n,f=this.y[s]-t,p=Math.hypot(c,l);if(p>r)continue;let m=p+(t===t?Math.abs(f)*4:0)+(this.compSize[this.comp[s]]<30?30:0);m<d&&(d=m,u=s)}}return u}findPath(e,t,n=6e4){if(e<0||t<0||this.comp[e]!==this.comp[t])return null;if(e===t)return[e];let r=++this.searchId,i=this.x,a=this.y,o=this.z,s=this.g,c=this.came,l=this.seen,u=this.closed,d=this.heap,f=this.heapF,p=0,m=i[t],h=a[t],g=o[t],_=e=>Math.hypot(i[e]-m,(a[e]-h)*1.5,o[e]-g),v=(e,t)=>{let n=p++;for(d[n]=e,f[n]=t;n>0;){let e=n-1>>1;if(f[e]<=f[n])break;let t=d[e],r=f[e];d[e]=d[n],f[e]=f[n],d[n]=t,f[n]=r,n=e}},y=()=>{let e=d[0];if(p--,p>0){d[0]=d[p],f[0]=f[p];let e=0;for(;;){let t=2*e+1,n=t+1,r=e;if(t<p&&f[t]<f[r]&&(r=t),n<p&&f[n]<f[r]&&(r=n),r===e)break;let i=d[r],a=f[r];d[r]=d[e],f[r]=f[e],d[e]=i,f[e]=a,e=r}}return e};s[e]=0,l[e]=r,c[e]=-1,v(e,_(e));let b=0;for(;p>0;){let e=y();if(u[e]===r)continue;if(u[e]=r,e===t){let t=[],n=e;for(;n!==-1;)t.push(n),n=c[n];return t.reverse(),t}if(++b>n)return null;let d=s[e];for(let t=this.adjStart[e];t<this.adjStart[e+1];t++){let n=this.adjItems[t];if(u[n]===r)continue;let f=i[n]-i[e],p=a[n]-a[e],m=o[n]-o[e],h=d+Math.sqrt(f*f+p*p*2+m*m);(l[n]!==r||h<s[n])&&(l[n]=r,s[n]=h,c[n]=e,v(n,h+_(n)))}}return null}nodesInCircle(e,t,n,r=400){let i=this.hcell,a=[],o=Math.max(0,Math.floor((e-n+832)/i)),s=Math.min(this.hdim-1,Math.floor((e+n+832)/i)),c=Math.max(0,Math.floor((t-n+832)/i)),l=Math.min(this.hdim-1,Math.floor((t+n+832)/i));for(let i=c;i<=l;i++)for(let c=o;c<=s;c++){let o=i*this.hdim+c;for(let i=this.hstart[o];i<this.hstart[o+1];i++){let o=this.hitems[i];if(!(this.degree(o)===0||this.compSize[this.comp[o]]<200)&&!(Math.hypot(this.x[o]-e,this.z[o]-t)>n)&&(a.push(o),a.length>=r))return a}}return a}randomNear(e,t,n,r=Math.random){for(let i=0;i<30;i++){let i=r()*Math.PI*2,a=Math.sqrt(r())*n,o=this.nearest(e+Math.cos(i)*a,NaN,t+Math.sin(i)*a,30);if(o>=0&&this.compSize[this.comp[o]]>200&&(this.flags[o]&nd.INDOOR)===0)return o}return this.nearest(e,NaN,t,80)}},id={classic:0,grand:1,old:2,modern:3,plain:4},ad={grand:[15326402,15722194,14470578,15919832,14209476,14931126,13616043,15130834],luxury:[15525076,14866111,14208440,15854559,13617339,14998731],hotel:[15985884,15327176,15722974,14471871,16183782],mixed:[15128765,14206886,13615789,15261904,13808780,12564136,15324080,14271136,12892328,14343382,13093828],old:[15255968,14464138,15718837,14067578,14927544,13226424,15327432,12559754,14202784,15786688,14272464,13161688],modern:[14277078,12567492,11052188,14867924,10331046,13154720,11906723]},od=[5857386,4936025,6712436,5528163],sd=[10111794,9062965,10902847,8339504,9721148],cd=[15262938,14472904,15327696,14015968,15129803],ld=[[`PHARMACIE`,{bg:`#ffffff`,fg:`#0a8a3a`,cross:`#12a14a`}],[`BOULANGERIE`,{bg:`#7a2e1d`,fg:`#f6e3c5`,serif:!0}],[`CHOCOLATIER`,{bg:`#3b2116`,fg:`#e9c78b`,serif:!0,italic:!0}],[`HORLOGERIE`,{bg:`#101820`,fg:`#d4af37`,serif:!0}],[`BIJOUTERIE`,{bg:`#1c1c1c`,fg:`#e8d29a`,serif:!0}],[`BANQUE PRIVÉE`,{bg:`#0d2240`,fg:`#d6c08a`,serif:!0}],[`FROMAGERIE`,{bg:`#f4d35e`,fg:`#5a3a12`}],[`CAFÉ DU LAC`,{bg:`#1f4d3a`,fg:`#ffffff`,serif:!0,italic:!0}],[`BRASSERIE`,{bg:`#5b1a18`,fg:`#f1e1c6`,serif:!0}],[`TABAC`,{bg:`#b3202b`,fg:`#ffffff`}],[`LIBRAIRIE`,{bg:`#20365c`,fg:`#ffffff`,serif:!0}],[`KEBAB`,{bg:`#f0a500`,fg:`#7a1010`}],[`PIZZERIA`,{bg:`#0f6b35`,fg:`#ffffff`,italic:!0}],[`FLEURISTE`,{bg:`#f5f0e6`,fg:`#6a2c70`,italic:!0,serif:!0}],[`OPTICIEN`,{bg:`#ffffff`,fg:`#1b1b1b`}],[`ÉPICERIE`,{bg:`#2d6a4f`,fg:`#ffffff`}],[`COUTEAUX SUISSES`,{bg:`#c8102e`,fg:`#ffffff`,cross:`#c8102e`}],[`MONTRES`,{bg:`#0b0b0b`,fg:`#ffffff`,serif:!0}],[`RESTAURANT`,{bg:`#3a2a1a`,fg:`#f6e7c8`,serif:!0}],[`FONDUE & RACLETTE`,{bg:`#f7f1e3`,fg:`#9b2915`,serif:!0}],[`BOUTIQUE`,{bg:`#e8e2d8`,fg:`#333333`,serif:!0}],[`TEA ROOM`,{bg:`#a3c4bc`,fg:`#2b2b2b`,italic:!0,serif:!0}],[`POSTE`,{bg:`#ffcc00`,fg:`#000000`}],[`KIOSQUE`,{bg:`#1d5aa8`,fg:`#ffffff`}]],ud=[`HÔTEL BEAU-RIVAGE`,`HÔTEL DE LA PAIX`,`GRAND HÔTEL DU LAC`,`HÔTEL D'ANGLETERRE`,`HÔTEL DU RHÔNE`,`HÔTEL DES BERGUES`,`HÔTEL BRISTOL`,`HÔTEL CORNAVIN`],dd=[[`CHRONOMÈTRE`,{bg:`#0b1f3a`,fg:`#ffffff`,serif:!0}],[`LÉMAN WATCHES`,{bg:`#0f0f0f`,fg:`#d4af37`,serif:!0}],[`PRÉCISION GENÈVE`,{bg:`#7a0d16`,fg:`#ffffff`,serif:!0}],[`HELVETIA`,{bg:`#ffffff`,fg:`#c8102e`}],[`MONT-BLANC CHRONO`,{bg:`#003366`,fg:`#ffffff`}],[`CALVIN & FILS`,{bg:`#121212`,fg:`#f0e6c8`,serif:!0,italic:!0}]],fd=class{constructor(){this.cell=40,this.cells=new Map,this.stamp=0}_key(e,t){return e*100003+t}_add(e,t){let n=this.cell;for(let r=Math.floor(t.minx/n);r<=Math.floor(t.maxx/n);r++)for(let i=Math.floor(t.minz/n);i<=Math.floor(t.maxz/n);i++){let t=this._key(r,i),n=this.cells.get(t);n||this.cells.set(t,n=[]),n.push(e)}}addOBB(e,t=0,n=`obb`){let r={type:`obb`,o:e,margin:t,tag:n,st:0},i=du(e,t);return this._add(r,su(i)),r}addPoly(e,t=0,n=`poly`){let r={type:`poly`,poly:e,margin:t,tag:n,st:0},i=su(e);return this._add(r,{minx:i.minx-t,minz:i.minz-t,maxx:i.maxx+t,maxz:i.maxz+t}),r}addLine(e,t,n=`line`){let r={type:`line`,pts:e,hw:t,tag:n,st:0};for(let n=0;n<e.length-1;n++){let i=su([e[n],e[n+1]]);this._add(r,{minx:i.minx-t,minz:i.minz-t,maxx:i.maxx+t,maxz:i.maxz+t})}return r}blocked(e,t=0,n=null){let r=su(du(e,t+.5)),i=this.cell,a=++this.stamp;for(let o=Math.floor(r.minx/i);o<=Math.floor(r.maxx/i);o++)for(let s=Math.floor(r.minz/i);s<=Math.floor(r.maxz/i);s++){let r=this.cells.get(this._key(o,s));if(r){for(let i of r)if(i.st!==a&&(i.st=a,!n||n(i))){if(i.type===`obb`){if(pu(e,i.o,i.margin+t))return i}else if(i.type===`poly`){if(mu(e,i.poly,i.margin+t))return i}else if(i.type===`line`&&hu(e,i.pts)<i.hw+t)return i}}}return null}};function pd(e){let t=Math.cos(e.yaw),n=Math.sin(e.yaw);return{c:t,s:n,x:(r,i)=>e.x+r*t+i*n,z:(r,i)=>e.z-r*n+i*t}}function md(e,t){let n=pd(t),r=1/0,i=-1/0;for(let a of[-1,-.5,0,.5,1])for(let o of[-1,-.5,0,.5,1]){let s=e.heightAt(n.x(a*t.hw,o*t.hd),n.z(a*t.hw,o*t.hd));s<r&&(r=s),s>i&&(i=s)}return[r,i]}function hd(e,t,n,r,i,a,o,s,c,l){let u=pd(t),d=(e,t,n)=>[u.x(e,n),t,u.z(e,n)],f=Math.max(.01,n-o),p=Math.max(.01,r-s),m=[d(-n,i,-r),d(n,i,-r),d(n,i,r),d(-n,i,r)],h=[d(-f,a,-p),d(f,a,-p),d(f,a,p),d(-f,a,p)],g=a-i,_=Math.hypot(s,g),v=Math.hypot(o,g),y=(e,t,n)=>[-e/2,0,e/2,0,t/2,n/2,-t/2,n/2];e.B.quad(c,m[3],m[2],h[2],h[3],l,2,y(n,f,_)),e.B.quad(c,m[1],m[0],h[0],h[1],l,2,y(n,f,_)),e.B.quad(c,m[2],m[1],h[1],h[2],l,2,y(r,p,v)),e.B.quad(c,m[0],m[3],h[3],h[0],l,2,y(r,p,v)),f>.05&&p>.05&&e.B.quad(c,h[3],h[2],h[1],h[0],l,2)}function gd(e,t,n,r,i,a,o,s,c,l){let u=pd(t),d=(e,t,n)=>[u.x(e,n),t,u.z(e,n)];if(l===`x`){let t=Math.hypot(r,a);e.B.quad(o,d(-n,i,r),d(n,i,r),d(n,i+a,0),d(-n,i+a,0),s,2,[-n/2,0,n/2,0,n/2,t/2,-n/2,t/2]),e.B.quad(o,d(n,i,-r),d(-n,i,-r),d(-n,i+a,0),d(n,i+a,0),s,2,[-n/2,0,n/2,0,n/2,t/2,-n/2,t/2]),e.B.tri(`plaster`,d(n-.4,i,r-.4),d(n-.4,i,-r+.4),d(n-.4,i+a-.35,0),c),e.B.tri(`plaster`,d(-n+.4,i,-r+.4),d(-n+.4,i,r-.4),d(-n+.4,i+a-.35,0),c)}else{let t=Math.hypot(n,a);e.B.quad(o,d(n,i,r),d(n,i,-r),d(0,i+a,-r),d(0,i+a,r),s,2,[-r/2,0,r/2,0,r/2,t/2,-r/2,t/2]),e.B.quad(o,d(-n,i,-r),d(-n,i,r),d(0,i+a,r),d(0,i+a,-r),s,2,[-r/2,0,r/2,0,r/2,t/2,-r/2,t/2]),e.B.tri(`plaster`,d(-n+.4,i,r-.4),d(n-.4,i,r-.4),d(0,i+a-.35,r-.4),c),e.B.tri(`plaster`,d(n-.4,i,-r+.4),d(-n+.4,i,-r+.4),d(0,i+a-.35,-r+.4),c)}}function _d(e,t,n,r){let i=t.roof,a=t.hw,o=t.hd,s=pd(t);if(i===`mansard`){let i=t.roofColor,c=n+.42,l=Math.min(1.35,Math.min(a,o)*.35);hd(e,t,a+.1,o+.1,c,c+2.9,l,l,`roof`,i);let u=a+.1-l,d=o+.1-l,f=Math.min(u,d);hd(e,t,u,d,c+2.9,c+2.9+Math.min(1.4,f*.35),f,f,`roof`,i);let p=Math.max(1,Math.floor((a*2-2)/(t.bay*2)));for(let n of[1,-1])for(let r=0;r<p;r++){let u=-a+1+(r+.5)*(a*2-2)/p,d=n*(o+.1-l*.55),f=s.x(u,d),m=s.z(u,d);e.B.box({x:f,y:c+1.15,z:m,sx:1.1,sy:1.5,sz:1,yaw:t.yaw+(n<0?Math.PI:0),mat:`facade`,color:t.trim,uv:`facade`,facade:{bay:1.1,fh:1.5,v0:2,yb:c+.4,fac:[4,t.seed,0,0]},skip:[`ny`,`py`]}),hd(e,{...t,x:f,z:m,yaw:t.yaw},.65,.6,c+1.9,c+2.4,.64,.01,`roof`,i)}e.C.addBox(t.x,n+3.62/2,t.z,a,3.62/2,o,t.yaw,15,$.STONE);let m=r.int(1,3);for(let n=0;n<m;n++){let n=r.range(-u*.7,u*.7),i=r.range(-d*.5,d*.5);e.B.box({x:s.x(n,i),y:c+3.6,z:s.z(n,i),sx:.7,sy:1.8,sz:.5,yaw:t.yaw,mat:`plaster`,color:t.trim,skip:[`ny`]})}}else if(i===`tile`||i===`hip`){let c=t.roofColor,l=.45,u=a>=o?`x`:`z`,d=u===`x`?o:a,f=Math.min(6.5,(d+l)*.85);if(i===`tile`)gd(e,t,a+l,o+l,n,f,`roof`,c,t.wall,u);else{let r=u===`x`?d+l:a+l,i=u===`x`?o+l:d+l;hd(e,t,a+l,o+l,n,n+f,Math.min(r,a+l),Math.min(i,o+l),`roof`,c)}if(e.C.addBox(t.x,n+f*.35,t.z,a,f*.35,o,t.yaw,15,$.STONE),r.chance(.7)){let i=r.range(-a*.6,a*.6),c=r.range(-o*.3,o*.3);e.B.box({x:s.x(i,c),y:n+f*.75,z:s.z(i,c),sx:.6,sy:f*.9,sz:.6,yaw:t.yaw,mat:`plaster`,color:t.wall,skip:[`ny`]})}}else{let i=t.trim,c=.9,l=(r,a,o,l)=>e.B.box({x:s.x(r,a),y:n+c/2,z:s.z(r,a),sx:o,sy:c,sz:l,yaw:t.yaw,mat:`plaster`,color:i,skip:[`ny`]});l(0,o-.15,a*2,.3),l(0,-o+.15,a*2,.3),l(a-.15,0,.3,o*2-.6),l(-a+.15,0,.3,o*2-.6);for(let[r,i,l,u]of[[0,o-.15,a*2,.3],[0,-o+.15,a*2,.3],[a-.15,0,.3,o*2],[-a+.15,0,.3,o*2]])e.C.addBox(s.x(r,i),n+c/2,s.z(r,i),l/2,c/2,u/2,t.yaw,15,$.STONE);if(!t.noClutter){let i=r.int(1,3);for(let c=0;c<i;c++){let i=r.range(1.2,3),c=r.range(1.2,2.5),l=r.range(.8,2.6),u=r.range(-a+i,a-i),d=r.range(-o+c,o-c);Math.abs(u)>a-1||Math.abs(d)>o-1||(e.B.box({x:s.x(u,d),y:n+l/2,z:s.z(u,d),sx:i,sy:l,sz:c,yaw:t.yaw,mat:r.chance(.5)?`metal`:`plaster`,color:12105908,skip:[`ny`]}),e.C.addBox(s.x(u,d),n+l/2,s.z(u,d),i/2,l/2,c/2,t.yaw,15,$.METAL))}}}}function vd(e,t,n){let[r,i]=md(e.T,t),a=t.gyOverride===void 0?i+.05:t.gyOverride,o=t.byOverride===void 0?r-1.2:t.byOverride,s=t.g,c=t.fh,l=s+(t.floors-1)*c,u=[t.fstyle,t.seed,t.shutter,t.flags],d=a+l;if(e.B.box({x:t.x,y:(o+a+s)/2,z:t.z,sx:t.hw*2,sy:a+s-o,sz:t.hd*2,yaw:t.yaw,mat:`facade`,color:t.wall,uv:`facade`,facade:{bay:t.bay,fh:s,v0:0,yb:a,fac:u},skip:[`ny`,`py`]}),t.floors>1){let n=t.roof===`flat`;e.B.box({x:t.x,y:a+s+(l-s)/2,z:t.z,sx:t.hw*2,sy:l-s,sz:t.hd*2,yaw:t.yaw,mat:`facade`,color:t.wall,uv:`facade`,facade:{bay:t.bay,fh:c,v0:1,yb:a+s,fac:u},skip:n?[`ny`]:[`ny`,`py`],faces:n?{py:{mat:`matte`,color:9276294,uv:`world`}}:void 0})}return(t.roof!==`flat`||n.chance(.5))&&e.B.box({x:t.x,y:d+.2,z:t.z,sx:t.hw*2+.5,sy:.42,sz:t.hd*2+.5,yaw:t.yaw,mat:`stone`,color:t.trim,skip:t.roof===`flat`?[]:[`py`]}),e.C.addBox(t.x,(o+d)/2,t.z,t.hw,(d-o)/2,t.hd,t.yaw,15,$.STONE),_d(e,t,d,n),e.footprints.push({x:t.x,z:t.z,hw:t.hw,hd:t.hd,yaw:t.yaw,h:d,enter:!1,style:t.style}),{gy:a,top:d}}function yd(e,t,n){let[r,i]=md(e.T,t),a=t.gyOverride===void 0?i+.12:t.gyOverride,o=t.byOverride===void 0?r-1.2:t.byOverride;t.gy=a;let s=pd(t),{hw:c,hd:l}=t,u=t.fh,d=t.enter,f=Math.max(t.floors,t.enter),p=.3,m=t.wall,h=t.interior,g=t.floorMat||`wood`,_=g===`wood`?n.pick([13148794,11568736,13939852,10451541]):n.pick([15262940,14209216,13222584]),v=n.chance(.5)?-1:1,y=t.yaw,b=e.B,x=e.C,S=(e,t,n,r,i,o,c={})=>{let l=s.x(e,n),u=s.z(e,n),d=a+t+i/2;b.box({x:l,y:d,z:u,sx:r,sy:i,sz:o,yaw:y,...c}),c.col!==0&&x.addBox(l,d,u,r/2,i/2,o/2,y,c.col===void 0?15:c.col,c.surf===void 0?$.STONE:c.surf)},C=e=>e*v,w=(e,t)=>{let n=t-e,r=Math.max(1,Math.floor(n/3)),i=n/r,a=[];for(let t=0;t<r;t++)a.push(e+(t+.5)*i);return{arr:a,sp:i}},T=w(-c+.6,c-.6),E=0;{let e=1/0;T.arr.forEach((n,r)=>{let i=Math.abs(n-t.doorBias*c*.5);i<e&&(e=i,E=r)})}let D=T.arr[E],O=t.backDoor===void 0?n.chance(.45):t.backDoor,ee=w(-l+.8,l-.8),k=u/14,te=.3,ne=14*te,re=1.2,A=.12,ie=-l+p,j=[ie,ie+re],M=[ie+re+A,ie+2*re+A],N=-c+p+1,ae=N+ne,oe=e=>e%2==0?j:M,se=t.roofAccess&&f===d,ce=se?d:d-1,le=null;if(c*2-2*p>12.5&&n.chance(.8)){let e=ae+1.6,t=c-3.5;if(t>e){let r=n.range(e,t);Math.abs(C(r)-D)<1.4&&(r=Y(r+2.2,e,t)),Math.abs(C(r)-D)>=1.3&&(le=C(r))}}let P=(e,t,n,r,i,a,o,s,c)=>{let l=o.slice().sort((e,t)=>e.c-t.c),u=n,d=(n,r,a,o,l)=>{let u=r-n;if(u<.03||o-a<.03)return;let d=(n+r)/2,f={mat:`plaster`,color:h,faces:{[s]:{color:m},[c]:{color:h}},skip:l===`pier`?[`py`,`ny`]:l===`below`?[`ny`]:[`py`],s:2.5};e===`x`?S(d,i+a,t,u,o-a,p,f):S(t,i+a,d,p,o-a,u,f)};for(let e of l){let t=e.c-e.w/2,n=e.c+e.w/2;d(u,t,0,a,`pier`),d(t,n,0,e.y0,`below`),d(t,n,e.y1,a,`above`),u=n}d(u,r,0,a,`pier`)},ue=(e,n,r,i,a,o,s,c,l)=>{for(let u of i){let i=e===`x`?u:n+r*.09,d=e===`x`?n+r*.09:u,f=e===`x`?a+.24:.2,p=e===`x`?.2:a+.24;if(s>.2&&S(i,o+s-.1,d,f,.1,p,{mat:`stone`,color:t.trim,col:0,skip:[`ny`]}),S(i,o+c,d,f,.16,p,{mat:`stone`,color:t.trim,col:0,skip:[`ny`]}),t.shutter&&!l){let i=a*.52;for(let l of[-1,1]){let d=u+l*(a/2+i/2+.04),f=e===`x`?d:n+r*.04,p=e===`x`?n+r*.04:d;S(f,o+s,p,e===`x`?i:.06,c-s,e===`x`?.06:i,{mat:`wood`,color:t.shutterHex,col:0,skip:[`ny`,`py`]})}}}};for(let e=0;e<d;e++){let r=e*u,i=e===0,a=i&&t.shop?Math.min(2.3,T.sp-.9):1.15,o=i&&t.shop?.45:.9,s=i?2.55:2.4,d=T.arr.map((e,t)=>i&&t===E?{c:e,w:1.6,y0:0,y1:2.6}:{c:e,w:a,y0:o,y1:s});P(`x`,l-p/2,-c,c,r,u,d,`pz`,`nz`),ue(`x`,l,1,T.arr.filter((e,t)=>!(i&&t===E)),a,r,o,s,i&&t.shop);let f=T.arr.map((e,t)=>{let n=ce>0&&Math.abs(e-C((N+ae)/2))<2.9000000000000004;return i&&O&&t===T.arr.length-1-E&&!n?{c:e,w:1.4,y0:0,y1:2.5}:{c:e,w:1.15,y0:n?1.6:.9,y1:2.4}});P(`x`,-l+p/2,-c,c,r,u,f,`nz`,`pz`);let m=ee.arr.filter((e,t)=>t%2==0||ee.arr.length<=2).map(e=>({c:e,w:1.1,y0:.9,y1:2.4})),g=v>0?m.filter(e=>e.c>M[1]+.7):m,_=v<0?m.filter(e=>e.c>M[1]+.7):m;if(P(`z`,-c+p/2,-l+p,l-p,r,u,g,`nx`,`px`),P(`z`,c-p/2,-l+p,l-p,r,u,_,`px`,`nx`),ue(`z`,c,1,_.map(e=>e.c),1.1,r,.9,2.4,!1),ue(`z`,-c,-1,g.map(e=>e.c),1.1,r,.9,2.4,!1),e>0&&(S(0,r-.12,l+.08,c*2+.3,.24,.16,{mat:`stone`,color:t.trim,col:0}),S(0,r-.12,-l-.08,c*2+.3,.24,.16,{mat:`stone`,color:t.trim,col:0}),S(c+.08,r-.12,0,.16,.24,l*2,{mat:`stone`,color:t.trim,col:0}),S(-c-.08,r-.12,0,.16,.24,l*2,{mat:`stone`,color:t.trim,col:0})),le!==null){let i=n.range(M[1]+1.2,l-p-1.2),a=-l+p,o=l-p,s=[{c:i,w:1.1,y0:0,y1:2.3}],c={mat:`plaster`,color:h,s:2.5},d=a;for(let e of s){let t=e.c-e.w/2,n=e.c+e.w/2;t-d>.05&&S(le,r,(d+t)/2,.15,u-.25,t-d,{...c,skip:[`ny`,`py`]}),S(le,r+e.y1,e.c,.15,u-.25-e.y1,e.w,{...c,skip:[`py`]}),d=n}o-d>.05&&S(le,r,(d+o)/2,.15,u-.25,o-d,{...c,skip:[`ny`,`py`]}),t._doorways=t._doorways||[],t._doorways[e]=i}}S(0,o-a,0,c*2,-(o-a),l*2,{mat:`stone`,color:t.trim,faces:{py:{mat:g,color:_}},skip:[`ny`],surf:g===`wood`?$.WOOD:$.STONE});let de=(e,t)=>{let n=e*u-.25,r=-c+p,i=c-p,a=-l+p,o=l-p,s={mat:`plaster`,color:15789800,faces:{py:{mat:g,color:_}},surf:g===`wood`?$.WOOD:$.STONE},d=(e,t,r,i)=>{t-e<.05||i-r<.05||S((e+t)/2,n,(r+i)/2,t-e,.25,i-r,s)};if(!t){d(r,i,a,o);return}let f=Math.min(C(t[0]),C(t[1])),m=Math.max(C(t[0]),C(t[1]));d(r,f,a,o),d(m,i,a,o),d(f,m,a,t[2]),d(f,m,t[3],o)};for(let e=1;e<=d;e++){let t=e-1,n=t<ce,r=oe(t);e<d||se?de(e,n?[N-.05,ae+.05,r[0],r[1]]:null):S(0,e*u-.25,0,c*2-2*p,.25,l*2-2*p,{mat:`plaster`,color:15789800,faces:{py:{mat:`matte`,color:9276294}}})}let fe={mat:g===`wood`?`wood`:`stone`,color:g===`wood`?10188371:13157046,surf:g===`wood`?$.WOOD:$.STONE};for(let e=0;e<ce;e++){let t=oe(e),n=e%2==0?1:-1,r=e*u,i=(t[0]+t[1])/2;for(let e=0;e<14;e++){let t=n>0?N+e*te:ae-(e+1)*te,a=(e+1)*k;S(C(t+te/2),r,i,te,a,re,{...fe,skip:[`ny`]})}}if(ce>0){let e=d*u-.25;S(C((N+ae)/2),0,j[1]+A/2,ne,e,A,{mat:`plaster`,color:h,skip:[`ny`]})}for(let e=1;e<=d;e++){let t=e-1;if(t>=ce)continue;let n=oe(t),r=e*u;(n===M||e===d&&se)&&S(C((N+ae)/2),r,M[1]+.05,ne,1,.08,{mat:`metal`,color:2763306,col:Q.MOVE,surf:$.METAL}),e===d&&se&&(S(C(n===j?N:ae),r,(n[0]+n[1])/2,.08,1,re,{mat:`metal`,color:2763306,col:Q.MOVE,surf:$.METAL}),n===j&&S(C((N+ae)/2),r,j[1]+A/2,ne,1,A,{mat:`metal`,color:2763306,col:Q.MOVE,surf:$.METAL}))}let pe=a+f*u;if(f>d){let e=a+d*u,n=[t.fstyle,t.seed,t.shutter,t.flags&-2];b.box({x:t.x,y:(e+pe)/2,z:t.z,sx:c*2,sy:pe-e,sz:l*2,yaw:y,mat:`facade`,color:m,uv:`facade`,facade:{bay:t.bay,fh:u,v0:d,yb:e,fac:n},skip:t.roof===`flat`?[`ny`]:[`ny`,`py`],faces:t.roof===`flat`?{py:{mat:`matte`,color:9276294,uv:`world`}}:void 0}),x.addBox(t.x,(e+pe)/2,t.z,c,(pe-e)/2,l,y,15,$.STONE)}t.roof!==`flat`||f>d?(t.roof!==`flat`&&S(0,f*u,0,c*2+.5,.42,l*2+.5,{mat:`stone`,color:t.trim,skip:[`py`],col:0}),_d(e,{...t,roof:se?`flat`:t.roof},pe,n)):_d(e,{...t,noClutter:se},pe,n);{S(D,2.6,l+.05,2,.3,.2,{mat:`stone`,color:t.trim,col:0});let r=a-e.T.heightAt(s.x(D,l+1.2),s.z(D,l+1.2));if(r>.35){let e=Math.min(4,Math.ceil(r/.3));for(let t=0;t<e;t++){let n=r-t*r/e;S(D,-r-.3,l+.35+t*.35,2,n+.3,.36,{mat:`stone`,color:12433066})}}if(t.sign){let n=e.signs.get(t.sign[0],t.sign[1]),r=Math.min(c*2-1,5.5),i=r/4,o=a+2.95,u=l+.07,d=(e,t)=>[s.x(e,u),t,s.z(e,u)];e.B.quad(`sign`,d(-r/2,o),d(r/2,o),d(r/2,o+i),d(-r/2,o+i),16777215,1,[n[0],n[3],n[2],n[3],n[2],n[1],n[0],n[1]])}if(t.shop&&n.chance(.6)){let t=(e,t,n)=>[s.x(e,n),t,s.z(e,n)],r=Math.min(c*2-.6,7),i=n.pick([9182227,2051386,2112092,13214247,7022391,15262416]),o=D-r/2,u=D+r/2;e.B.quad(`paint`,t(o,a+3.3,l),t(u,a+3.3,l),t(u,a+2.7,l+1.4),t(o,a+2.7,l+1.4),i),e.B.quad(`paint`,t(u,a+3.3,l),t(o,a+3.3,l),t(o,a+2.7,l+1.4),t(u,a+2.7,l+1.4),i)}}let me=e.nav,he=(e,t,n)=>[s.x(e,n),a+t,s.z(e,n)],ge=(e,t,n)=>{let r=he(e,t*u,n);return me.addNode(r[0],r[1],r[2],1)},_e=le===null?[[-c+p,c-p]]:[[-c+p,le-.08],[le+.08,c-p]],ve=[],ye=(e,t,n,r,i)=>{for(let a of ve)if(a.lv===e&&!(r<a.x0||t>a.x1||i<a.z0||n>a.z1))return!1;return!0},be={x0:Math.min(C(N-1),C(ae+1.1)),x1:Math.max(C(N-1),C(ae+1.1)),z0:-l,z1:M[1]+.9},xe=[];for(let r=0;r<=(se?d:d-1);r++){let i=se&&r===d;ce>0&&ve.push({lv:r,...be}),r===0&&ve.push({lv:r,x0:D-1.2,x1:D+1.2,z0:l-2.4,z1:l}),le!==null&&t._doorways&&t._doorways[r]!==void 0&&ve.push({lv:r,x0:le-1.2,x1:le+1.2,z0:t._doorways[r]-1,z1:t._doorways[r]+1});let o=[];if(i)o.push({id:ge(0,r,(M[1]+l)/2+.5),room:null});else for(let e of _e){let t=(e[0]+e[1])/2,n=(M[1]+1+l-p)/2;o.push({id:ge(t,r,n),room:e})}if(xe.push(o),!i)for(let e of _e){let t=(e[0]+e[1])/2,n=(M[1]+1+l-p)/2;ve.push({lv:r,x0:t-.9,x1:t+.9,z0:n-.9,z1:n+.9})}if(!i&&o.length===2&&t._doorways&&t._doorways[r]!==void 0){let e=ge(le,r,t._doorways[r]);me.link(e,o[0].id),me.link(e,o[1].id)}if(i)continue;let c=n.int(1,3);for(let i=0;i<c;i++){let i=n.pick(_e),o=n.pick(r===0&&t.shop?[`counter`,`shelf`,`shelf`,`table`]:[`table`,`shelf`,`bed`,`sofa`,`crate`,`table`]),c={counter:[2.6,1,.7],shelf:[2,1.9,.45],table:[1.6,.76,.9],bed:[2,.55,1.5],sofa:[2,.8,.9],crate:[1,1,1]}[o];for(let d=0;d<6;d++){let d=o===`shelf`||o===`sofa`||o===`bed`||o===`counter`,f,m;if(d){if(f=n.range(i[0]+c[0]/2+.2,i[1]-c[0]/2-.2),m=l-p-c[2]/2-.05,r===0&&Math.abs(f-D)<2)continue}else f=n.range(i[0]+1.3,i[1]-1.3),m=n.range(M[1]+1.6,l-p-1.3);let h=f-c[0]/2-.4,g=f+c[0]/2+.4,_=m-c[2]/2-.4,v=m+c[2]/2+.4;if(!Number.isFinite(f)||h<i[0]-.1||g>i[1]+.1||!ye(r,h,_,g,v))continue;ve.push({lv:r,x0:h,x1:g,z0:_,z1:v});let b=o===`sofa`?n.pick([5910062,3030874,4872750,7035722]):o===`bed`?14209736:o===`crate`?10254923:8017464,C=o===`bed`||o===`sofa`?`matte`:`wood`;if(o===`table`){S(f,r*u+.7,m,c[0],.06,c[2],{mat:C,color:b,col:Q.BULLET|Q.SIGHT,surf:$.WOOD});for(let[e,t]of[[-1,-1],[1,-1],[1,1],[-1,1]])S(f+e*(c[0]/2-.06),r*u,m+t*(c[2]/2-.06),.07,.7,.07,{mat:C,color:b,col:0});x.addBox(s.x(f,m),a+r*u+.38,s.z(f,m),c[0]/2,.38,c[2]/2,y,Q.MOVE,$.WOOD),e.loot.push({x:s.x(f,m),y:a+r*u+.74,z:s.z(f,m),q:t.lootQ,indoor:!0})}else S(f,r*u,m,c[0],c[1],c[2],{mat:C,color:b,surf:$.WOOD});break}}let f=n.int(2,3)+(t.lootBonus||0);for(let i=0;i<f;i++)for(let i=0;i<8;i++){let i=n.pick(_e),o=n.range(i[0]+.7,i[1]-.7),c=n.range(M[1]+1,l-p-.6);if(ye(r,o-.3,c-.3,o+.3,c+.3)){ve.push({lv:r,x0:o-.6,x1:o+.6,z0:c-.6,z1:c+.6}),e.loot.push({x:s.x(o,c),y:a+r*u+.04,z:s.z(o,c),q:t.lootQ,indoor:!0});break}}}let Se=(e,t)=>{let n=xe[e];return n?n.length===1||t<le?n[0].id:n[1].id:null};for(let e=0;e<ce;e++){let t=oe(e),n=(t[0]+t[1])/2,r=e%2==0?1:-1,i=r>0?N-.55:ae+.6,a=r>0?ae+.6:N-.55,o=ge(C(i),e,n),s=ge(C(a),e+1,n);me.link(o,s);let c=Se(e,C(i)),l=Se(e+1,C(a));c!==null&&me.link(o,c),l!==null&&me.link(s,l)}{let t=ge(D,0,l-1.2),n=he(D,0,l+1.6),r=e.T.heightAt(n[0],n[2]),i=me.addNode(n[0],Math.max(r,a-1.2),n[2],2);if(me.link(t,i),me.link(t,Se(0,D)),me.doorNodes.push(i),O){let t=T.arr.length-1-E,n=T.arr[t];if(!(ce>0&&Math.abs(n-C((N+ae)/2))<2.9000000000000004)){let t=ge(n,0,-l+1.2),r=he(n,0,-l-1.6),i=e.T.heightAt(r[0],r[2]);if(Math.abs(i-a)<.6){let e=me.addNode(r[0],i,r[2],2);me.link(t,e),me.link(t,Se(0,n)),me.doorNodes.push(e)}}}}return e.footprints.push({x:t.x,z:t.z,hw:c,hd:l,yaw:y,h:pe,enter:!0,style:t.style}),e.stats.enterable++,{gy:a,top:pe}}var bd=class{constructor(e){this.W=e,this.rng=new Yl(1536),this.lots=[],this.res=e.reserver}reserveBase(){let e=this.res;for(let t of Fl)e.addLine(t.pts,t.w/2+(t.kind===`cobble`?1:3),`road`);e.addLine(Ll.pts,Ll.halfWidth+3,`rail`);for(let t of Nl)e.addPoly(t.poly,1.5,`park`);for(let t of Pl)e.addPoly(t.poly,1,`plaza`);for(let t of bl)e.addPoly(t.poly,4,`island`)}okLot(e){if(Math.abs(e.x)>788||Math.abs(e.z)>788||e.hw<3.5||e.hd<3.5||this.res.blocked(e,.4))return!1;let t=this.W.T;for(let n of[...du(e,0),[e.x,e.z]]){let{sd:e}=t.shoreInfo(n[0],n[1]);if(e<24)return!1}return!0}accept(e,t){let n={...e,...t};return this.res.addOBB(e,0,`lot`),this.lots.push(n),n}frontage(){let e=this.rng;for(let t of Fl){if(!t.frontage)continue;let n=t.frontage===`B`?[1,-1]:t.frontage===`L`?[1]:[-1];for(let r of n)for(let n=0;n<t.pts.length-1;n++){let i=t.pts[n],a=t.pts[n+1],o=a[0]-i[0],s=a[1]-i[1],c=Math.hypot(o,s);if(c<14)continue;let l=o/c,u=s/c,d=u*r,f=-l*r,p=t.w/2+(t.kind===`cobble`?1.2:3.2),m=3;for(;m<c-8;){let n=t.style===`old`,r=n?e.range(8,14):t.style===`hotel`?e.range(22,34):e.range(13,24);if(m+r>c-2)break;let a=n?e.range(12,17):t.style===`hotel`?e.range(18,26):e.range(14,21),o=i[0]+l*(m+r/2)+d*(p+a/2),s=i[1]+u*(m+r/2)+f*(p+a/2),h=Math.atan2(-d,-f),g={x:o,z:s,hw:r/2,hd:a/2,yaw:h};this.okLot(g)&&this.accept(g,{road:t,style:t.style,front:!0}),m+=r+(n?e.chance(.06)?e.range(2.2,3):.04:e.chance(.18)?e.range(2.5,4.5):.05)}}}}districts(){let e=this.rng;for(let t of zl){let n=t.yaw*Math.PI/180,r=Math.cos(n),i=Math.sin(n),a=su(t.poly),o=(a.minx+a.maxx)/2,s=(a.minz+a.maxz)/2,c=t.block[0]+t.street,l=t.block[1]+t.street,u=Math.hypot(a.maxx-a.minx,a.maxz-a.minz)/2+c,d=Math.ceil(u/c),f=Math.ceil(u/l);for(let a=-d;a<=d;a++)for(let u=-f;u<=f;u++){let d=a*c,f=u*l,p=o+d*r+f*i,m=s-d*i+f*r;if(!tu(p,m,t.poly))continue;let h=t.block[1]>=34,g=h?[1,-1]:[1],_=h?Math.min(18,t.block[1]/2-1):t.block[1];for(let a of g){let o=-t.block[0]/2;for(;o<t.block[0]/2-6;){let s=t.style===`old`?e.range(8,13):e.range(13,22);if(o+s>t.block[0]/2&&(s=t.block[0]/2-o),s<7)break;let c=h?a*(t.block[1]/2-_/2):0,l=o+s/2,u=p+l*r+c*i,d=m-l*i+c*r,f=a>0?n:n+Math.PI,g={x:u,z:d,hw:s/2-.05,hd:_/2-.05,yaw:f};this.okLot(g)&&this.accept(g,{district:t,style:t.style,front:!1}),o+=s+(e.chance(.15)?e.range(2.5,4):.1)}}}}}infill(){let e=this.rng;for(let t of zl){let n=su(t.poly),r=t.style===`old`,i=(n.maxx-n.minx)*(n.maxz-n.minz),a=Math.round(i/(r?25:70));for(let i=0;i<a;i++){let i=e.range(n.minx,n.maxx),a=e.range(n.minz,n.maxz);if(!tu(i,a,t.poly))continue;let o=null;for(let e of Fl){let t=ru(i,a,e.pts);t.d<(o?o.d:40)&&(o={...t,r:e})}let s;s=o&&o.d>.5?Math.atan2(o.x-i,o.z-a):t.yaw*Math.PI/180+(e.chance(.5)?0:Math.PI);for(let n=0;n<4;n++){let c=1-n*.2,l=(r?e.range(7,12):e.range(11,20))*c,u=(r?e.range(9,15):e.range(10,18))*c,d={x:i,z:a,hw:l/2,hd:u/2,yaw:s};if(this.okLot(d)){this.accept(d,{district:t,style:t.style,front:!!o&&o.d<u/2+10});break}}}}}decorate(e){let t=this.rng,n=e.style,r=e.district,i;i=n===`old`?t.int(3,5):n===`hotel`?t.int(6,8):n===`luxury`||n===`grand`?t.int(5,7):n===`modern`?t.int(5,9):r?t.int(r.floors[0],r.floors[1]):t.int(5,7);let a=ad[n]||ad.mixed,o=id.classic,s=`mansard`;n===`old`?(o=id.old,s=t.chance(.65)?`tile`:`hip`):n===`modern`?(o=t.chance(.75)?id.modern:id.classic,s=o===id.modern?`flat`:t.chance(.5)?`mansard`:`flat`):n===`grand`||n===`luxury`||n===`hotel`?(o=t.chance(.55)?id.grand:id.classic,s=`mansard`):(o=t.weighted([[id.classic,5],[id.modern,2],[id.grand,1]]),s=o===id.modern?`flat`:t.chance(.75)?`mansard`:`flat`);let c=e.front&&n!==`hotel`&&(n===`luxury`||n===`grand`||n===`mixed`||n===`old`)&&t.chance(n===`old`?.5:.85),l=o===id.grand||o===id.modern?0:t.chance(.7)?t.int(1,7):0,u=(o===id.grand||o===id.classic)&&t.chance(.55),d=t.pick(a),f=o===id.modern?12171700:t.pick([15327954,14209215,15920868,13616820]),p=s===`tile`||s===`hip`?t.pick(sd):t.pick(od),m=[0,2050602,5922402,5913120,14605266,6189443,6035988,5593135];return{...e,floors:i,fstyle:o,roof:s,wall:d,trim:f,roofColor:p,shutter:l,shutterHex:m[l]||2050602,flags:!!c|(u?2:0),shop:c,seed:t.int(0,255),bay:n===`old`?t.range(2.6,3.2):t.range(2.9,3.7),g:c?4.2:n===`old`?3.2:3.8,fh:n===`old`?3.1:t.range(3.2,3.5),interior:t.pick(cd),doorBias:t.range(-1,1)}}build(){let e=this.W;this.reserveBase(),this.frontage(),this.districts(),this.infill();let t=this.rng,n=0;for(let r of this.lots){let i=this.decorate(r),[a,o]=md(e.T,i),s=o-a<.9,c=r.district?r.district.enter:r.style===`old`?.34:r.style===`hotel`?.3:.24,l=i.hw*2>=9.5&&i.hd*2>=9.5&&i.hw*2<=30&&i.hd*2<=26;s&&l&&t.chance(c)?(i.fh=3.4,i.enter=Math.min(i.floors,t.weighted([[2,4],[3,4],[4,1]])),i.style===`old`&&(i.floors=Math.max(i.floors,i.enter)),i.roofAccess=i.floors===i.enter&&t.chance(.6),i.roofAccess&&(i.roof=`flat`),i.floorMat=t.chance(.65)?`wood`:`tile`,i.lootQ=this.lootQuality(i.x,i.z),i.shop&&t.chance(.85)&&(i.sign=t.pick(ld)),yd(e,i,t),n++):(vd(e,i,t),i.shop&&t.chance(.5)&&this.solidSign(i),i.style===`hotel`&&t.chance(.6)&&this.hotelSign(i))}e.stats.lots=this.lots.length,e.stats.entered=n}lootQuality(e,t){let n=1;for(let r of this.W.locations)Math.hypot(e-r.x,t-r.z)<r.r&&(n=Math.max(n,r.loot));return n}solidSign(e){let t=this.W,n=pd(e),[,r]=md(t.T,e),i=this.rng.pick(ld),a=t.signs.get(i[0],i[1]),o=Math.min(e.hw*2-2,6),s=o/4,c=this.rng.range(-e.hw+o/2+.5,e.hw-o/2-.5),l=e.hd+.06,u=r+.05+e.g-s-.15,d=(e,t)=>[n.x(e,l),t,n.z(e,l)];t.B.quad(`sign`,d(c-o/2,u),d(c+o/2,u),d(c+o/2,u+s),d(c-o/2,u+s),16777215,1,[a[0],a[3],a[2],a[3],a[2],a[1],a[0],a[1]])}hotelSign(e){let t=this.W,n=pd(e),[,r]=md(t.T,e),i=this.rng.pick(ud),a=t.signs.get(i,{bg:`#00000000`,fg:`#c9a94a`,serif:!0}),o=Math.min(e.hw*2-2,14),s=o/4,c=e.hd+.08,l=r+.05+e.g+(e.floors-1)*e.fh-s-.1,u=(e,t)=>[n.x(e,c),t,n.z(e,c)];if(t.B.quad(`sign`,u(-o/2,l),u(o/2,l),u(o/2,l+s),u(-o/2,l+s),16777215,1,[a[0],a[3],a[2],a[3],a[2],a[1],a[0],a[1]]),this.rng.chance(.6)){let i=this.rng.pick(dd),a=t.signs.get(i[0],i[1]),o=Math.min(e.hw*2-1,16),s=o/4,c=r+.05+e.g+(e.floors-1)*e.fh+4.6,l=e.hd-1.6,u=(e,t)=>[n.x(e,l),t,n.z(e,l)];t.B.quad(`sign`,u(-o/2,c),u(o/2,c),u(o/2,c+s),u(-o/2,c+s),16777215,1,[a[0],a[3],a[2],a[3],a[2],a[1],a[0],a[1]]),t.B.box({x:n.x(0,l-.15),y:c+s/2-.6,z:n.z(0,l-.15),sx:o,sy:s+1.2,sz:.25,yaw:e.yaw,mat:`metal`,color:3158582,faces:{pz:{skip:!0}}})}}};function xd(e){return{fstyle:id.classic,roof:`mansard`,wall:14735044,trim:15327954,roofColor:5857386,shutter:0,shutterHex:2050602,flags:0,shop:!1,seed:77,bay:3.2,g:3.8,fh:3.4,interior:15262938,doorBias:0,floors:3,enter:2,lootQ:1.2,floorMat:`wood`,style:`grand`,...e}}function Sd(e,t,n,r,i,a,o,s,c,l,u={}){let d=Math.cos(r),f=Math.sin(r),p=t+i*d+o*f,m=n-i*f+o*d;e.B.box({...u,x:p,y:a+c/2,z:m,sx:s,sy:c,sz:l,yaw:r+(u.yaw||0)}),u.col&&e.C.addBox(p,a+c/2,m,s/2,c/2,l/2,r+(u.yaw||0),u.col,u.surf===void 0?$.METAL:u.surf)}function Cd(e,t,n,r,i=null){let a=i===null?e.T.heightAt(t,n):i,o=8084026;Sd(e,t,n,r,0,a+.42,0,1.9,.06,.5,{mat:`wood`,color:o}),Sd(e,t,n,r,0,a+.55,-.24,1.9,.38,.05,{mat:`wood`,color:o});for(let i of[-.8,.8])Sd(e,t,n,r,i,a,0,.06,.45,.5,{mat:`metal`,color:2500650,skip:[`ny`]});Sd(e,t,n,r,0,a,0,1.9,.45,.5,{col:Q.MOVE|Q.BULLET,surf:$.WOOD,skip:[`px`,`nx`,`py`,`ny`,`pz`,`nz`]})}function wd(e,t,n,r=5.2,i=null,a=!0){let o=i===null?e.T.heightAt(t,n):i;e.B.cylinder(t,o,n,.1,r,`metal`,2829872,6),e.B.cylinder(t,o,n,.18,.6,`metal`,2829872,6),e.B.box({x:t,y:o+r+.25,z:n,sx:.45,sy:.5,sz:.45,mat:a?`glow`:`metal`,color:16773576}),e.B.box({x:t,y:o+r+.56,z:n,sx:.6,sy:.12,sz:.6,mat:`metal`,color:2829872}),e.C.addBox(t,o+r/2,n,.12,r/2,.12,0,Q.MOVE|Q.BULLET,$.METAL)}function Td(e,t,n){let r=e.T.heightAt(t,n);e.B.cylinder(t,r,n,.3,.95,`metal`,3104058,8),e.C.addBox(t,r+.47,n,.3,.47,.3,0,Q.MOVE|Q.BULLET,$.METAL)}var Ed=[15263974,1908514,9277846,2902650,9051935,3095091,13222837,5926276,14275269,3947584,8028031,10697258];function Dd(e,t,n,r,i,a=null){let o=a===null?e.T.heightAt(t,n):a,s=i.pick(Ed),c=i.weighted([[`sedan`,5],[`hatch`,4],[`van`,1.4],[`suv`,2]]),l=c===`van`?5.2:c===`hatch`?3.9:c===`suv`?4.7:4.6,u=c===`van`?2:1.8,d=c===`van`?1.9:c===`suv`?1.05:.8;if(Sd(e,t,n,r,0,o+.32,0,l,d,u,{mat:`paint`,color:s,skip:[`ny`]}),c!==`van`){let i=c===`hatch`?l*.6:l*.5,a=c===`hatch`?-l*.12:-l*.04;Sd(e,t,n,r,a,o+.32+d,0,i,.62,u-.2,{mat:`glass`,color:2238253,skip:[`ny`]}),Sd(e,t,n,r,a,o+.32+d+.6,0,i-.3,.06,u-.3,{mat:`paint`,color:s,skip:[`ny`]})}else Sd(e,t,n,r,l/2-.4,o+1.2,0,.82,.7,u+.01,{mat:`glass`,color:2238253,skip:[`ny`]});for(let i of[-l*.33,l*.33])for(let a of[-u/2+.12,u/2-.12])Sd(e,t,n,r,i,o,a,.66,.66,.24,{mat:`matte`,color:1118481,skip:[`ny`,`py`]});Sd(e,t,n,r,l/2-.02,o+.55,u/2-.3,.06,.16,.3,{mat:`glow`,color:16774877}),Sd(e,t,n,r,l/2-.02,o+.55,-u/2+.3,.06,.16,.3,{mat:`glow`,color:16774877}),Sd(e,t,n,r,-l/2+.02,o+.62,u/2-.3,.06,.14,.3,{mat:`glow`,color:13115434}),Sd(e,t,n,r,-l/2+.02,o+.62,-u/2+.3,.06,.14,.3,{mat:`glow`,color:13115434});let f=.32+d+(c===`van`?0:.66);e.C.addBox(t,o+f/2,n,l/2,f/2,u/2,r,15,$.METAL)}function Od(e,t,n,r,i=null,a=3){let o=i===null?e.T.heightAt(t,n):i,s=10.5,c=a*s+(a-1)*.6;for(let i=0;i<a;i++){let a=-c/2+s/2+i*11.1;Sd(e,t,n,r,a,o+.35,0,s,3.1,2.3,{mat:`paint`,color:15790316,skip:[`ny`]}),Sd(e,t,n,r,a,o+1.35,0,9.9,1.25,2.32,{mat:`glass`,color:1843752,skip:[`ny`,`py`]}),Sd(e,t,n,r,a,o+.55,0,10.52,.45,2.33,{mat:`paint`,color:1347710,skip:[`ny`,`py`]}),Sd(e,t,n,r,a,o+3.45,0,s*.5,.35,1.4,{mat:`metal`,color:9080208,skip:[`ny`]}),Sd(e,t,n,r,a,o,0,s,3.45,2.3,{col:15,surf:$.METAL,skip:[`px`,`nx`,`py`,`ny`,`pz`,`nz`]})}Sd(e,t,n,r,-c/2-.25,o+.6,0,.5,2.4,2.1,{mat:`paint`,color:1347710,col:15}),Sd(e,t,n,r,c/2+.25,o+.6,0,.5,2.4,2.1,{mat:`paint`,color:1347710,col:15}),Sd(e,t,n,r,0,o+3.8,0,1.6,.6,.1,{mat:`metal`,color:3355443})}function kd(e,t,n,r,i=null){let a=i===null?e.T.heightAt(t,n):i;e.B.cylinder(t,a,n,.45,.04,`metal`,2829099,10),e.B.cylinder(t,a,n,.05,.74,`metal`,2829099,6),e.B.cylinder(t,a+.72,n,.45,.04,`metal`,14605008,12),e.B.cylinder(t,a+.74,n,.03,1.6,`metal`,7035461,6),e.B.cone(t,a+2,n,1.5,.55,`paint`,r,8),e.C.addBox(t,a+.38,n,.45,.38,.45,0,Q.MOVE|Q.BULLET,$.METAL);for(let r=0;r<3;r++){let i=r/3*Math.PI*2+.4,o=t+Math.cos(i)*.95,s=n+Math.sin(i)*.95;e.B.box({x:o,y:a+.45,z:s,sx:.42,sy:.05,sz:.42,yaw:-i,mat:`metal`,color:3815994}),e.B.box({x:o+Math.cos(i)*.2,y:a+.7,z:s+Math.sin(i)*.2,sx:.05,sy:.5,sz:.42,yaw:-i,mat:`metal`,color:3815994})}}function Ad(e,t,n,r,i=null){let a=i===null?e.T.heightAt(t,n):i;Sd(e,t,n,r,0,a+2.6,0,6,.15,2,{mat:`metal`,color:4014663,col:Q.BULLET}),Sd(e,t,n,r,0,a,-.95,6,2.6,.06,{mat:`glass`,color:7176072,col:Q.MOVE});for(let i of[-2.9,2.9])Sd(e,t,n,r,i,a,0,.1,2.6,.1,{mat:`metal`,color:4014663});Sd(e,t,n,r,0,a+.45,-.7,3,.06,.4,{mat:`metal`,color:7829367}),Sd(e,t,n,r,2.4,a,.2,.1,2.2,1.2,{mat:`glow`,color:15265522})}function jd(e,t,n,r,i=2776892,a=null){let o=a===null?e.T.heightAt(t,n):a;Sd(e,t,n,r,0,o,0,3.2,2.6,2.4,{mat:`paint`,color:i,col:15,surf:$.METAL}),Sd(e,t,n,r,0,o+2.6,0,3.8,.25,3,{mat:`paint`,color:2039583}),Sd(e,t,n,r,0,o+1,1.21,2.4,.9,.04,{mat:`glow`,color:15852736})}function Md(e,t,n,r=2.6,i=null){let a=i===null?e.T.heightAt(t,n):i;e.B.cylinder(t,a,n,r,.7,`stone`,12169635,8),e.B.cylinder(t,a+.62,n,r-.3,.05,`glass`,4026246,8),e.B.cylinder(t,a,n,.35,2.4,`stone`,12169635,8),e.B.cylinder(t,a+2,n,.9,.25,`stone`,12169635,8),e.C.addBox(t,a+.35,n,r*.9,.35,r*.9,0,Q.MOVE|Q.BULLET,$.STONE),e.C.addBox(t,a+1.2,n,.4,1.2,.4,0,15,$.STONE)}function Nd(e){let t=new Yl(4242),n=e.reserver,r=Il,i=e=>n.blocked(e,.2,e=>e.tag===`lot`||e.tag===`landmark`),a=0;for(let n of Fl){let r=au(n.pts),o=n.w/2,s=!!n.tram;for(let a=6;a<r-4;a+=t.range(24,32)){let t=ou(n.pts,a),r=-t.dz,s=t.dx;for(let a of[1,-1]){if(n.kind===`cobble`&&a<0)continue;let c=o+(n.kind===`cobble`?.4:1.4),l=t.x+r*c*a,u=t.z+s*c*a;Math.abs(l)>794||Math.abs(u)>794||i({x:l,z:u,hw:.3,hd:.3,yaw:0})||e.T.isWater(l,u)||wd(e,l,u,n.kind===`cobble`?4.2:5.6)}}if(n.kind===`road`&&n.w>=12)for(let c=14;c<r-14;c+=t.range(6,9)){if(!t.chance(.38))continue;let r=ou(n.pts,c),l=!1;for(let e of Fl)if(e!==n&&iu(r.x,r.z,e.pts)<e.w/2+9){l=!0;break}if(l)continue;for(let e of n.pts)Math.hypot(e[0]-r.x,e[1]-r.z)<10&&(l=!0);if(l||s)continue;let u=t.chance(.5)?1:-1,d=-r.dz,f=r.dx,p=o-1.2,m=r.x+d*p*u,h=r.z+f*p*u;if(Math.abs(m)>790||Math.abs(h)>790||e.T.isWater(m,h))continue;let g=Math.atan2(-r.dz,r.dx)+(t.chance(.5)?Math.PI:0);i({x:m,z:h,hw:2.5,hd:1.1,yaw:g})||(Dd(e,m,h,g,t),a++)}if(n.kind===`ped`||n.kind===`gravel`)for(let i=10;i<r-10;i+=t.range(18,30)){let r=ou(n.pts,i),a=-r.dz,s=r.dx,c=t.chance(.5)?1:-1,l=n.kind===`gravel`?-o+1:o-2,u=r.x+a*l*c,d=r.z+s*l*c,f=Math.atan2(-r.dz,r.dx)+(c>0?Math.PI:0);t.chance(.65)?Cd(e,u,d,n.kind===`gravel`?Math.atan2(-r.dz,r.dx)+Math.PI:f):Td(e,u,d)}}for(let t of r){let n=au(t);for(let r=0;r<n-.1;r+=5){let i=ou(t,r),a=ou(t,Math.min(n,r+5)),o=-i.dz,s=i.dx;for(let t of[-1.6,1.6])for(let n of[-.72,.72]){let r=t+n,c=i.x+o*r,l=i.z+s*r,u=a.x+o*r,d=a.z+s*r,f=e.T.heightAt(c,l)+.025,p=e.T.heightAt(u,d)+.025;if(f<.5||p<.5)continue;let m=.05;e.B.quad(`paint`,[c+o*m,f,l+s*m],[u+o*m,p,d+s*m],[u-o*m,p,d-s*m],[c-o*m,f,l-s*m],10130830)}}}e.stats.cars=a}var Pd=12893097,Fd=11117204,Id=4148290,Ld=6200454,Rd=5462371,zd=15855592,Bd=2303271,Vd=class{constructor(e,t,n,r=0,i=null){this.W=e,this.x=t,this.z=n,this.yaw=r,this.c=Math.cos(r),this.s=Math.sin(r),this.y0=i===null?e.T.heightAt(t,n):i}wx(e,t){return this.x+e*this.c+t*this.s}wz(e,t){return this.z-e*this.s+t*this.c}P(e,t,n){return[this.wx(e,n),this.y0+t,this.wz(e,n)]}box(e,t,n,r,i,a,o={}){let s=this.wx(e,n),c=this.wz(e,n),l=this.y0+t+i/2,u=this.yaw+(o.yaw||0);o.invisible||this.W.B.box({...o,x:s,y:l,z:c,sx:r,sy:i,sz:a,yaw:u});let d=o.col===void 0?15:o.col;d&&this.W.C.addBox(s,l,c,r/2,i/2,a/2,u,d,o.surf===void 0?$.STONE:o.surf)}cyl(e,t,n,r,i,a,o,s=10,c=15,l={}){this.W.B.cylinder(this.wx(e,n),this.y0+t,this.wz(e,n),r,i,a,o,s,{yaw:this.yaw,...l}),c&&this.W.C.addBox(this.wx(e,n),this.y0+t+i/2,this.wz(e,n),r*.85,i/2,r*.85,this.yaw,c,$.STONE)}cone(e,t,n,r,i,a,o,s=8){this.W.B.cone(this.wx(e,n),this.y0+t,this.wz(e,n),r,i,a,o,s,{yaw:this.yaw})}sphere(e,t,n,r,i,a,o=10,s={}){this.W.B.sphere(this.wx(e,n),this.y0+t,this.wz(e,n),r,i,a,o,{yaw:this.yaw,...s})}quad(e,t,n,r,i,a,o=null){this.W.B.quad(e,this.P(...t),this.P(...n),this.P(...r),this.P(...i),a,2,o)}tri(e,t,n,r,i){this.W.B.tri(e,this.P(...t),this.P(...n),this.P(...r),i)}sign(e,t,n,r,i,a,o,s=1){let c=this.W.signs.get(e,t),l=[c[0],c[3],c[2],c[3],c[2],c[1],c[0],c[1]];s>0?this.quad(`sign`,[n-a/2,r,i],[n+a/2,r,i],[n+a/2,r+o,i],[n-a/2,r+o,i],16777215,l):this.quad(`sign`,[n+a/2,r,i],[n-a/2,r,i],[n-a/2,r+o,i],[n+a/2,r+o,i],16777215,l)}signX(e,t,n,r,i,a,o,s=1){let c=this.W.signs.get(e,t),l=[c[0],c[3],c[2],c[3],c[2],c[1],c[0],c[1]];s>0?this.quad(`sign`,[n,r,i+a/2],[n,r,i-a/2],[n,r+o,i-a/2],[n,r+o,i+a/2],16777215,l):this.quad(`sign`,[n,r,i-a/2],[n,r,i+a/2],[n,r+o,i+a/2],[n,r+o,i-a/2],16777215,l)}node(e,t,n,r=1){let i=this.P(e,t,n);return this.W.nav.addNode(i[0],i[1],i[2],r)}door(e,t,n){let r=this.node(e,t,n,2);return this.W.nav.doorNodes.push(r),r}loot(e,t,n,r=1.25,i=!0){let a=this.P(e,t,n);this.W.loot.push({x:a[0],y:a[1]+.04,z:a[2],q:r,indoor:i})}reserve(e,t,n=1.5,r=0,i=0,a=15){let o={x:this.wx(r,i),z:this.wz(r,i),hw:e,hd:t,yaw:this.yaw};this.W.reserver.addOBB(o,n,`landmark`),this.W.footprints.push({...o,h:this.y0+a,enter:!1,landmark:!0})}};function Hd(e,t,n,r,i,a,o,s,c,l){let u=c.map(e=>({c:e.c,w:e.w,ys:e.ys||[[e.y0,e.y1]]})).sort((e,t)=>e.c-t.c),d=r,f=(r,i,o,c)=>{if(i-r<.02||c-o<.02)return;let u=(r+i)/2;t===`x`?e.box(u,a+o,n,i-r,c-o,s,l):e.box(n,a+o,u,s,c-o,i-r,l)};for(let e of u){let t=e.c-e.w/2,n=e.c+e.w/2;f(d,t,0,o);let r=0;for(let[i,a]of e.ys.slice().sort((e,t)=>e[0]-t[0]))f(t,n,r,i),r=a;f(t,n,r,o),d=n}f(d,i,0,o)}function Ud(e,t){let{x0:n,x1:r,z0:i,z1:a,h:o,t:s=.8}=t,c={mat:t.mat||`stone`,color:t.color||Pd,s:3,surf:$.STONE},l=t.open||{};Hd(e,`x`,a-s/2,n,r,0,o,s,l.pz||[],c),Hd(e,`x`,i+s/2,n,r,0,o,s,l.nz||[],c),Hd(e,`z`,n+s/2,i+s,a-s,0,o,s,l.nx||[],c),Hd(e,`z`,r-s/2,i+s,a-s,0,o,s,l.px||[],c);let u=t.foundation||2.5;e.box((n+r)/2,-u,(i+a)/2,r-n,u,a-i,{mat:`stone`,color:t.baseColor||Fd,faces:{py:{mat:t.floorMat||`tile`,color:t.floorColor||14078148}},skip:[`ny`]}),t.ceiling!==!1&&e.box((n+r)/2,o-.3,(i+a)/2,r-n-2*s,.3,a-i-2*s,{mat:`plaster`,color:t.ceilColor||15130836,faces:{py:{mat:`matte`,color:9276294}}})}function Wd(e,t,n,r,i,a,o,s,c,l=`x`,u=Pd){let d=.5;if(l===`x`){let l=(r+i)/2;e.quad(s,[t-d,a,i+d],[n+d,a,i+d],[n+d,a+o,l],[t-d,a+o,l],c),e.quad(s,[n+d,a,r-d],[t-d,a,r-d],[t-d,a+o,l],[n+d,a+o,l],c),e.tri(`stone`,[n,a,i],[n,a,r],[n,a+o,l],u),e.tri(`stone`,[t,a,r],[t,a,i],[t,a+o,l],u)}else{let l=(t+n)/2;e.quad(s,[n+d,a,i+d],[n+d,a,r-d],[l,a+o,r-d],[l,a+o,i+d],c),e.quad(s,[t-d,a,r-d],[t-d,a,i+d],[l,a+o,i+d],[l,a+o,r-d],c),e.tri(`stone`,[t,a,i],[n,a,i],[l,a+o,i],u),e.tri(`stone`,[n,a,r],[t,a,r],[l,a+o,r],u)}}function Gd(e,t,n,r,i,a,o,s,c){let l=[t-r,a,n-i],u=[t+r,a,n-i],d=[t+r,a,n+i],f=[t-r,a,n+i],p=[t,a+o,n];e.tri(s,f,d,p,c),e.tri(s,d,u,p,c),e.tri(s,u,l,p,c),e.tri(s,l,f,p,c)}function Kd(e,t){let n=new Vd(e,t.x,t.z,t.yaw||0,t.y0),r=t.sx/2,i=t.sz/2,a=t.wt||.9,o=-i+a,s=i-a,c=-r+a,l=t.lh||3.6,u=l/14,d=.3,f=14*d,p=1.2,m=.12,h=c+1,g=h+f,_=[o,o+p],v=[o+p+m,o+2*p+m],y=e=>e%2==0?_:v,b=t.levels,x=b*l,S=t.belfry?4.6:1.1,C={mat:`stone`,color:t.color||Pd,s:3};for(let e=0;e<=b;e++){let o=e*l,s=e<b?l:S,c=e===b,u=n=>c?t.belfry?[{c:0,w:Math.min(2.8,n-2.4),y0:1,y1:3.6}]:[]:e%2==1?[{c:0,w:.45,y0:1.3,y1:2.7}]:[],d=u(t.sx);e===0&&t.doorSide===`pz`&&(d=[{c:t.doorX||0,w:1.5,y0:0,y1:2.7}]),t.noSouthBelow&&o<t.noSouthBelow||Hd(n,`x`,i-a/2,-r,r,o,s,a,d,C),Hd(n,`x`,-i+a/2,-r,r,o,s,a,c?u(t.sx):[],C);let f=u(t.sz),p=u(t.sz);e===0&&t.doorSide===`nx`&&(f=[{c:t.doorZ||0,w:1.5,y0:0,y1:2.7}]),e===0&&t.doorSide===`px`&&(p=[{c:t.doorZ||0,w:1.5,y0:0,y1:2.7}]),Hd(n,`z`,-r+a/2,-i+a,i-a,o,s,a,f,C),Hd(n,`z`,r-a/2,-i+a,i-a,o,s,a,p,C)}n.box(0,-3,0,t.sx,3,t.sz,{...C,faces:{py:{mat:`stone`,color:12103842}},skip:[`ny`]});for(let e=1;e<=b;e++){let t=y(e-1),i=e*l-.25,c=-r+a,u=r-a,d={mat:`stone`,color:12103842,s:3},f=(e,t,r,a)=>{t-e>.05&&a-r>.05&&n.box((e+t)/2,i,(r+a)/2,t-e,.25,a-r,d)};f(c,h-.05,o,s),f(g+.05,u,o,s),f(h-.05,g+.05,o,t[0]),f(h-.05,g+.05,t[1],s)}for(let e=0;e<b;e++){let t=y(e),r=e%2==0?1:-1,i=(t[0]+t[1])/2;for(let t=0;t<14;t++){let a=r>0?h+t*d:g-(t+1)*d;n.box(a+d/2,e*l,i,d,(t+1)*u,p,{mat:`stone`,color:10919826,skip:[`ny`]})}}n.box((h+g)/2,0,_[1]+m/2,f,x,m,{...C});for(let e=1;e<=b;e++)y(e-1)===v&&n.box((h+g)/2,e*l,v[1]+.05,f,1,.08,{mat:`metal`,color:Bd,col:Q.MOVE,surf:$.METAL});{let e=y(b-1),t=e===_?h:g;n.box(t,x,(e[0]+e[1])/2,.08,1,p,{mat:`metal`,color:Bd,col:Q.MOVE,surf:$.METAL}),e===_&&n.box((h+g)/2,x,_[1]+m/2,f,1,m,{mat:`metal`,color:Bd,col:Q.MOVE,surf:$.METAL})}t.belfry&&(n.box(0,x+S,0,t.sx+.4,.5,t.sz+.4,{mat:`stone`,color:t.color||Pd}),Gd(n,0,0,r+.3,i+.3,x+S+.5,t.roofH||7,`roof`,t.roofColor||Rd),e.C.addBox(n.wx(0,0),n.y0+x+S+.5+(t.roofH||7)*.3,n.wz(0,0),r*.6,(t.roofH||7)*.3,i*.6,n.yaw,15,$.STONE));let w=e.nav,T=(v[1]+s)/2,E=[];for(let e=0;e<=b;e++)E.push(n.node(.8,e*l,T));for(let e=0;e<b;e++){let t=y(e),r=(t[0]+t[1])/2,i=e%2==0?1:-1,a=n.node(i>0?h-.5:g+.55,e*l,r),o=n.node(i>0?g+.55:h-.5,(e+1)*l,r);w.link(a,o),w.link(a,E[e]),w.link(o,E[e+1])}for(let e=0;e<=b;e++)e===b?(n.loot(-r+a+1,e*l,T+.8,t.lootQ||1.4),n.loot(r-a-1,e*l,T+.6,t.lootQ||1.4)):e%3==2&&n.loot(r-a-1,e*l,T,t.lootQ||1.2);return{F:n,centers:E,H:x,zc:T}}function qd(e){let t=Rl.cathedral,n=-1/0;for(let r=t.x-60;r<=t.x+48;r+=6)for(let i=t.z-24;i<=t.z+24;i+=6)n=Math.max(n,e.T.heightAt(r,i));let r=n+.6,i=new Vd(e,t.x,t.z,0,r);i.reserve(54,23,2,-4,0,60);let a=[9,15.5],o=[];for(let e of[-38,-31,-17,-10,24,30])o.push({c:e,w:2,y0:a[0],y1:a[1]});Ud(i,{x0:-45,x1:35,z0:-11,z1:11,h:19,t:1.2,color:Fd,floorMat:`stone`,floorColor:13222580,open:{nx:[{c:0,w:3.6,ys:[[0,7],[10.5,14.5]]}],nz:[...o,{c:-25,w:2.2,y0:0,y1:3.6},{c:0,w:1.4,y0:0,y1:2.6}],pz:[...o,{c:-25,w:2.2,y0:0,y1:3.6}],px:[{c:0,w:3,y0:8,y1:14}]}}),Wd(i,-45,35,-11,11,19,8,`roof`,Rd,`x`,Fd),e.C.addBox(i.wx(-5,0),r+19+2.5,i.wz(-5,0),40,2.5,9.5,0,15,$.STONE);for(let e of[-1,1])i.box(13,0,e*15,14,19,8,{mat:`stone`,color:Fd,skip:[`ny`]}),Wd(i,6,20,e>0?11:-19,e>0?19:-11,19,6,`roof`,Rd,`z`,Fd);{let t=new Mi(1,1,1,10,1,!1,0,Math.PI),n=new W().compose(new H(i.wx(35,0),r+8,i.wz(35,0)),new ft,new H(10.5,16,10.5));e.B.geom(t,n,`stone`,Fd,{s:3});let a=new Ni(1,1,10,1,!0,0,Math.PI),o=new W().compose(new H(i.wx(35,0),r+19,i.wz(35,0)),new ft,new H(11,6,11));e.B.geom(a,o,`roof`,Rd,{s:2}),e.C.addBox(i.wx(40,0),r+8,i.wz(40,0),5,8,9,0,15,$.STONE)}i.box(13,27,0,7,4,7,{mat:`paint`,color:Ld}),i.cyl(13,31,0,3.4,4,`paint`,Ld,8,15),i.cone(13,35,0,3.4,26,`paint`,Ld,8),i.sphere(13,61.4,0,.6,`paint`,13938487,8),i.box(13,61.8,0,.12,2.2,.12,{mat:`paint`,color:13938487,col:0}),e.C.addBox(i.wx(13,0),r+19+22,i.wz(13,0),2.2,6,2.2,0,15,$.METAL);for(let e=0;e<5;e++)i.box(-58.6+e*.8,-2,0,.8,1+e*.25,26,{mat:`stone`,color:12432806});i.box(-50,-1.5,0,10,1.5,24,{mat:`stone`,color:12432806});for(let e=0;e<6;e++){let t=-9+e*3.6;i.cyl(-52.5,0,t,.75,12,`stone`,14209474,12,15),i.box(-52.5,0,t,1.8,.5,1.8,{mat:`stone`,color:13682872}),i.box(-52.5,11.6,t,1.9,.5,1.9,{mat:`stone`,color:13682872,col:0})}i.box(-50,12,0,10,1.6,24,{mat:`stone`,color:13682872});{let e=13.6;i.tri(`stone`,[-55,e,-12],[-55,e,12],[-55,18.6,0],14209474),i.quad(`roof`,[-55.2,e,12.2],[-45,e,12.2],[-45,18.6,0],[-55.2,18.6,0],Rd),i.quad(`roof`,[-45,e,-12.2],[-55.2,e,-12.2],[-55.2,18.6,0],[-45,18.6,0],Rd)}i.cyl(-38,19,0,4,2.5,`stone`,Fd,12,0),i.sphere(-38,21.5,0,4,`paint`,Ld,12,{hemi:!0});let s=Kd(e,{x:t.x,z:t.z-16,yaw:0,y0:r,sx:10,sz:10,wt:1,levels:9,lh:3.6,belfry:!0,roofH:6,color:Fd,roofColor:Rd,lootQ:1.6,doorSide:`pz`,doorX:0});i.box(0,0,16,10,37,10,{mat:`stone`,color:Fd,skip:[`ny`]}),i.box(0,37,16,10.4,.5,10.4,{mat:`stone`,color:Fd}),Gd(i,0,16,5.3,5.3,37.5,6,`roof`,Rd);for(let e of[-1,1])i.box(e*5.02,32,16,.05,3.2,2.4,{mat:`matte`,color:1710618,col:0}),i.box(0,32,16+e*5.02,2.4,3.2,.05,{mat:`matte`,color:1710618,col:0});for(let e of[-5,5])for(let t=-36;t<=18;t+=6.5)i.box(t,0,e,1.2,18.7,1.2,{mat:`stone`,color:12564392});for(let e=-34;e<=-2;e+=2.3)for(let t of[-2.4,2.4])i.box(e,0,t,.55,.9,3.4,{mat:`wood`,color:6045222,surf:$.WOOD});i.box(28,0,0,10,.6,14,{mat:`stone`,color:13222580}),i.box(30,.6,0,2.2,1,4,{mat:`stone`,color:14735560}),i.cyl(-10,0,-8,.7,2.6,`wood`,6045222,8,15);let c=e.nav,l=e=>{let t=[];for(let n=-41;n<=31;n+=6)t.push(i.node(n,0,e));for(let e=0;e<t.length-1;e++)c.link(t[e],t[e+1]);return t},u=l(0),d=l(-8.2),f=l(8.2);for(let e=0;e<u.length;e+=2)e<d.length&&c.link(u[e],d[e]),e<f.length&&c.link(u[e],f[e]);let p=i.door(-60.5,-1.2,0),m=i.node(-49,0,0);c.link(p,m),c.link(m,u[0]);let h=i.door(-25,0,-13.5);c.link(h,d[2]);let g=i.door(-25,0,13.5);c.link(g,f[2]);let _=i.node(0,0,-11);c.link(_,d[7]===void 0?d[d.length-1]:d[7]),c.link(_,s.centers[0]);for(let[e,t]of[[-30,-8.5],[-18,8.5],[-6,-8.5],[6,8.5],[14,0],[28,4],[30,-4],[-40,0],[20,-8.5],[-22,0]])i.loot(e,0,t,1.5);i.loot(-49,0,6,1.2,!1),i.loot(-49,0,-6,1.2,!1),e.special.cathedral={x:t.x,z:t.z,y:r}}function Jd(e){let t=Ml,n=15*Math.PI/180,r=t.height+.1,i=new Vd(e,t.c[0],t.c[1],n,r);i.reserve(96,15,2,0,0,22),Ud(i,{x0:-26,x1:26,z0:-14,z1:14,h:18,t:1,color:14076334,floorMat:`tile`,floorColor:14275526,open:{pz:[-13,0,13].map(e=>({c:e,w:5,ys:[[0,7.5],[9,15.5]]})),nz:[-13,0,13].map(e=>({c:e,w:4,y0:0,y1:4.2}))}}),i.box(0,18,0,52.6,.6,28.6,{mat:`stone`,color:13615782}),i.box(0,18.6,12.6,40,4.4,2.2,{mat:`stone`,color:14076334}),i.sign(`GARE CORNAVIN`,{bg:`#d6c9ae`,fg:`#2a2a2a`,serif:!0},0,19.2,13.75,26,3.25),i.sign(`CFF  SBB  FFS`,{bg:`#c8102e`,fg:`#ffffff`},-13,7.9,14.05,6,1.5),i.sign(`GENÈVE`,{bg:`#1d1d1d`,fg:`#ffffff`},13,7.9,14.05,6,1.5),e.special.stationClock={pos:i.P(0,16.4,14.1),yaw:n,r:1.6};for(let e of[-6,6])for(let t of[-18,-6,6,18])i.box(t,0,e,1.1,17.7,1.1,{mat:`stone`,color:13615782});i.box(-17,0,-12.3,14,1.15,1,{mat:`wood`,color:7031602,surf:$.WOOD}),i.box(-17,1.15,-12.6,14,1.6,.1,{mat:`glass`,color:7309200,col:Q.MOVE}),i.box(17,0,-9,4,2.8,3,{mat:`paint`,color:2838394}),i.sign(`PRESSE`,{bg:`#2b4f7a`,fg:`#ffffff`},17,2,-7.45,3,.75),i.box(-10,0,10,3,2.6,2,{mat:`paint`,color:11545130}),i.sign(`CAFÉ`,{bg:`#b02a2a`,fg:`#ffffff`,italic:!0},-10,1.9,11.05,2.4,.6),i.box(0,6.5,-13.2,9,2,.4,{mat:`matte`,color:1118481,col:0}),i.sign(`DÉPARTS  ·  LAUSANNE  ·  ZÜRICH  ·  LYON  ·  AÉROPORT`,{bg:`#0d0d0d`,fg:`#ffd500`},0,6.7,-12.98,8.4,1.6);for(let e of[-22,22])for(let t of[-3,3])i.box(e,0,t,2.2,.45,.6,{mat:`wood`,color:8018491,surf:$.WOOD});for(let e of[-4,4])i.box(e,0,-12.5,.8,1.6,.6,{mat:`paint`,color:13111342});for(let t of[-1,1])vd(e,xd({x:i.wx(t*60.5,0),z:i.wz(t*60.5,0),hw:34.5,hd:14,yaw:n,floors:4,g:4.4,fh:3.5,fstyle:id.grand,roof:`mansard`,wall:14076334,trim:14998214,roofColor:Rd,flags:1,seed:40+t,bay:3.6,gyOverride:r,byOverride:r-3}),new Yl(7+t));for(let[e,t]of[[-17,6],[-33,6],[-49,6]]){i.box(0,0,e,300,.45,t,{mat:`stone`,color:11907754,faces:{py:{mat:`matte`,color:10263189}}});for(let n of[-1,1])i.box(0,.45,e+n*(t/2-.35),296,.01,.12,{mat:`paint`,color:15921906,col:0});let n=e===-17?6:8.5;i.box(0,5.1,e,240,.3,n,{mat:`metal`,color:5330523,col:Q.BULLET|Q.MOVE|Q.CAM});for(let t=-112;t<=112;t+=16)i.box(t,.45,e,.35,4.65,.35,{mat:`metal`,color:3948870});for(let t=-100;t<=100;t+=40)i.box(t+3,.45,e,2,.45,.5,{mat:`wood`,color:8018491,surf:$.WOOD}),i.loot(t-4,.45,e+1.2,1.2,!1);i.sign(e===-17?`VOIE 1`:e===-33?`VOIE 3   4`:`VOIE 5   6`,{bg:`#1d3b6e`,fg:`#ffffff`},0,3.6,e+.2,3.2,.8)}for(let[e,t,n]of[[-22.5,-118,8],[-38.5,-60,6],[-54.5,-96,5],[-43.5,30,4]])for(let r=0;r<n;r++){let n=t+r*26+12.5,a=r===0,o=a?13111342:15921904;i.box(n,.65,e,25,3.9,2.95,{mat:`paint`,color:o,surf:$.METAL,skip:[`ny`]}),i.box(n,2.2,e,23.4,1.1,3,{mat:`glass`,color:1777702,col:0,skip:[`ny`,`py`]}),a||i.box(n,.8,e,25.02,.55,2.97,{mat:`paint`,color:13111342,col:0,skip:[`ny`,`py`]}),i.box(n,4.55,e,24,.25,2.4,{mat:`metal`,color:7698813,col:0}),i.box(n,0,e,22,.65,2.4,{mat:`matte`,color:1973790,col:0})}let a=Yd(Ll.pts,3);for(let t of[-16,-11,0,5,16,21])for(let n of[-.72,.72]){let r=Xd(a,t+n);for(let t=0;t<r.length-1;t++){let n=r[t],i=r[t+1],a=Math.hypot(i[0]-n[0],i[1]-n[1]),o=(n[0]+i[0])/2,s=(n[1]+i[1])/2,c=e.T.heightAt(o,s),l=Math.atan2(-(i[1]-n[1]),i[0]-n[0]);e.B.box({x:o,y:c+.09,z:s,sx:a+.05,sy:.14,sz:.09,yaw:l,mat:`metal`,color:8025714,skip:[`ny`]})}}{let t=Xd(a,Ll.halfWidth+1);for(let n=0;n<t.length-1;n++){let r=t[n],i=t[n+1],a=Math.hypot(i[0]-r[0],i[1]-r[1]),o=(r[0]+i[0])/2,s=(r[1]+i[1])/2,c=e.T.heightAt(o,s),l=Math.atan2(-(i[1]-r[1]),i[0]-r[0]);e.B.box({x:o,y:c+1,z:s,sx:a,sy:2,sz:.06,yaw:l,mat:`metal`,color:4869971}),e.C.addBox(o,c+1,s,a/2,1,.1,l,Q.MOVE,$.METAL)}}let o=e.nav,s=[];for(let e=0;e<3;e++){s.push([]);for(let t=0;t<5;t++)s[e].push(i.node(-20+t*10,0,-9+e*9))}for(let e=0;e<3;e++)for(let t=0;t<5;t++)t<4&&o.link(s[e][t],s[e][t+1]),e<2&&o.link(s[e][t],s[e+1][t]);for(let[e,t]of[[-13,1],[0,2],[13,3]]){let n=i.door(e,0,16.5);o.link(n,s[2][t]);let r=i.door(e,.45,-16.8);o.link(r,s[0][t])}for(let[e,t]of[[-20,0],[-8,9],[8,-9],[20,4],[0,0],[-14,-9],[14,9],[24,-11],[-24,11],[10,3]])i.loot(e,0,t,1.45);let c=new Vd(e,...t.at(0,39),n,r-.1);Ad(e,c.wx(-30,8),c.wz(-30,8),n,r-.1),Ad(e,c.wx(30,8),c.wz(30,8),n,r-.1),Od(e,c.wx(-5,13),c.wz(-5,13),n,r-.1,3);for(let t=-3;t<=3;t++)wd(e,c.wx(t*24,-20),c.wz(t*24,-20),6.5,r-.1);for(let t=-2;t<=2;t++)Cd(e,c.wx(t*18+6,-12),c.wz(t*18+6,-12),n,r-.1);for(let e of[-60,-40,40,60])i.loot(e,-.1,30,1.1,!1);e.special.cornavin={F:i}}function Yd(e,t){let n=e;for(let e=0;e<t;e++){let e=[n[0]];for(let t=0;t<n.length-1;t++){let r=n[t],i=n[t+1];e.push([r[0]*.75+i[0]*.25,r[1]*.75+i[1]*.25],[r[0]*.25+i[0]*.75,r[1]*.25+i[1]*.75])}e.push(n[n.length-1]),n=e}return n}function Xd(e,t){let n=[];for(let r=0;r<e.length;r++){let i=e[Math.max(0,r-1)],a=e[Math.min(e.length-1,r+1)],o=a[0]-i[0],s=a[1]-i[1],c=Math.hypot(o,s)||1;n.push([e[r][0]+s/c*t,e[r][1]+-o/c*t])}return n}function Zd(e){let t=Rl.notreDame,n=Ml.f,r=Math.atan2(-n[0],-n[1]),i=-1/0;for(let[n,a]of[[-10,-26],[10,-26],[-10,26],[10,26],[0,0]]){let o=new Vd(e,t.x,t.z,r,0);i=Math.max(i,e.T.heightAt(o.wx(n,a),o.wz(n,a)))}let a=i+.4,o=new Vd(e,t.x,t.z,r,a);o.reserve(11,27,2,0,0,40);let s=12235686,c=[];for(let e=-18;e<=14;e+=8)c.push({c:e,w:1.6,y0:6,y1:12});Ud(o,{x0:-9,x1:9,z0:-24,z1:20,h:15,t:1,color:s,floorMat:`stone`,floorColor:13156528,open:{pz:[{c:0,w:2.8,y0:0,y1:5.5}],nx:[...c,{c:-10,w:1.8,y0:0,y1:3.2}],px:c}}),Wd(o,-9,9,-24,20,15,9,`roof`,Rd,`z`,s),o.box(0,0,23.5,8,30,7,{mat:`stone`,color:s,skip:[`ny`]}),o.box(0,0,27.05,3.2,5.6,.1,{mat:`matte`,color:2759956,col:0}),o.cone(0,30,23.5,4.6,24,`roof`,Rd,8);for(let e of[-1,1])for(let t of[-1,1])o.cone(e*3.6,30,23.5+t*3.1,.7,4,`stone`,s,6);o.cyl(0,20,27,2,.2,`glass`,5073571,12,0,{rx:Math.PI/2});for(let e=-6;e<=6;e+=3)for(let t=-16;t<=8;t+=2.4)o.box(e,0,t,2.2,.85,.5,{mat:`wood`,color:6045222,surf:$.WOOD});o.box(0,0,-20,8,.5,5,{mat:`stone`,color:13946044});let l=e.nav,u=o.node(0,0,16),d=o.node(0,0,2),f=o.node(0,0,-12),p=o.node(-7.5,0,-10),m=o.node(7.5,0,2);l.link(u,d),l.link(d,f),l.link(f,p),l.link(d,m),l.link(p,o.node(-7.5,0,4));let h=o.door(0,-.4,28.5);l.link(h,u);let g=o.door(-11.5,0,-10);l.link(g,p);for(let[e,t]of[[0,12],[-7.5,-4],[7.5,6],[0,-18],[7.5,-14]])o.loot(e,0,t,1.3)}function Qd(e){for(let t of xl){let[n,r]=t.a,[i,a]=t.b,o=i-n,s=a-r,c=Math.hypot(o,s),l=o/c,u=s/c,d=Math.atan2(l,u),f=Math.max(e.T.heightAt(n,r),e.T.heightAt(i,a),1.6)+.12,p=new Vd(e,(n+i)/2,(r+a)/2,d,f);e.reserver.addOBB({x:p.x,z:p.z,hw:t.w/2,hd:c/2,yaw:d},2,`landmark`);let m=t.road?4737357:9406845;if(p.box(0,-1.1,0,t.w,1.1,c,{mat:`stone`,color:11774876,faces:{py:{mat:`matte`,color:m}},s:3}),t.road)for(let e of[-1,1])p.box(e*(t.w/2-1.8),0,0,3,.14,c,{mat:`stone`,color:10722706,col:Q.MOVE});let h=t.name===`Pont des Bergues`,g=t.name===`Pont de la Machine`;for(let e of[-1,1]){let n=[];h&&e>0?n.push([-c/2,-24],[0,c/2]):g?n.push([-c/2,-9],[9,c/2]):n.push([-c/2,c/2]);for(let[r,i]of n)if(t.road||t.flags)p.box(e*(t.w/2-.25),0,(r+i)/2,.5,1.05,i-r,{mat:`stone`,color:12827822});else{p.box(e*(t.w/2-.1),.95,(r+i)/2,.12,.08,i-r,{mat:`metal`,color:Bd,col:0}),p.box(e*(t.w/2-.1),0,(r+i)/2,.1,1,i-r,{mat:`metal`,color:Bd,invisible:!0,col:Q.MOVE});for(let n=r+1;n<i;n+=2)p.box(e*(t.w/2-.1),0,n,.06,.95,.06,{mat:`metal`,color:Bd,col:0})}}let _=Math.floor(c/30);for(let n=1;n<=_;n++){let r=-c/2+n*c/(_+1),i=e.T.heightAt(p.wx(0,r),p.wz(0,r));i>-.5||p.box(0,i-f-.5,r,t.w*.55,f+.5-i-1.1,2.6,{mat:`stone`,color:10656395})}for(let n=-c/2+8;n<c/2-4;n+=t.flags?14:24)for(let r of[-1,1]){let i=p.wx(r*(t.w/2-.3),n),a=p.wz(r*(t.w/2-.3),n);if(t.flags){e.B.cylinder(i,f+1,a,.07,7.5,`metal`,14540253,6);let o=Math.round((n+c)/14)%2,s=o/3,l=(o+1)/3,u=f+8.3,d=u-1.25,m=(e,n)=>[p.wx(r*(t.w/2-.3),e),n,p.wz(r*(t.w/2-.3),e)];e.B.quad(`flag`,m(n,d),m(n+1.9,d),m(n+1.9,u),m(n,u),16777215,1,[s,1,l,1,l,0,s,0])}else wd(e,i,a,4.2,f+(t.road?.14:0))}if(t.flags)for(let n=-c/2+15;n<c/2-4;n+=28)for(let r of[-1,1])wd(e,p.wx(r*(t.w/2-1),n),p.wz(r*(t.w/2-1),n),5.5,f+.14);let v=e.nav,y=null,b=Math.max(2,Math.round(c/7));for(let t=0;t<=b;t++){let n=-c/2+1+(c-2)*t/b;if(g&&Math.abs(n)<9)continue;let r=p.node(0,0,n,4);y!==null&&v.link(y,r),y=r,(t===0||t===b)&&v.doorNodes.push(r),g&&n<-9&&n>-16&&(e.special.machineN=r),g&&n>9&&n<16&&e.special.machineS===void 0&&(e.special.machineS=r)}if(g){let t=xd({x:p.x,z:p.z,hw:5.6,hd:8.6,yaw:d,floors:2,enter:2,fh:3.4,fstyle:id.classic,roof:`hip`,wall:15129800,trim:14208957,roofColor:9062965,shutter:2,shutterHex:5922402,gyOverride:f,byOverride:-6,backDoor:!0,doorBias:0,lootQ:1.3,sign:[`LA MACHINE`,{bg:`#1f3f5c`,fg:`#ffffff`,serif:!0}]});e._machineDoorStart=e.nav.doorNodes.length,yd(e,t,new Yl(99));for(let t=e._machineDoorStart;t<e.nav.doorNodes.length;t++){let n=e.nav.doorNodes[t],r=e.nav.pos(n),i=[e.special.machineN,e.special.machineS].filter(e=>e!==void 0),a=null,o=1/0;for(let t of i){let n=e.nav.pos(t),i=Math.hypot(n[0]-r[0],n[2]-r[2]);i<o&&(o=i,a=t)}a!==null&&e.nav.link(n,a)}}h&&(p.box(t.w/2+3,-.5,-12,6,.5,4,{mat:`wood`,color:9071176,surf:$.WOOD}),e.special.berguesF=p)}}function $d(e){let t=new Vd(e,97,-103,Math.atan2(-.53,-.85),1.6);t.reserve(18,8,1,0,0,6),t.box(0,0,0,2.4,2.6,2.4,{mat:`stone`,color:13814717}),t.box(0,2.6,0,1.3,.6,1.4,{mat:`paint`,color:Id}),t.box(0,3.2,-.25,.8,1.1,.6,{mat:`paint`,color:Id,col:0}),t.sphere(0,4.55,-.2,.28,`paint`,Id,8),t.box(0,2.9,.45,.9,.35,.7,{mat:`paint`,color:Id,col:0});for(let[n,r,i]of[[-6,2,0],[6,2,0],[-10,-1,.3],[10,-2,-.3]])Cd(e,t.wx(n,r),t.wz(n,r),t.yaw+i,1.6);jd(e,t.wx(-14,0),t.wz(-14,0),t.yaw,9055019,1.6),t.loot(-12,0,2.5,1.25,!1),t.loot(8,0,-2.5,1.25,!1),t.loot(14,0,1,1.25,!1);let n=t.node(-8,0,0),r=t.node(4,0,0),i=t.node(14,0,0);e.nav.link(n,r),e.nav.link(r,i),e.nav.doorNodes.push(n);let a=Rl.tourIle,o=Math.atan2(-.94,.33),s=Kd(e,{x:a.x,z:a.z,yaw:o,y0:1.75,sx:9,sz:9,wt:.9,levels:6,lh:3.6,belfry:!0,roofH:6,color:12103064,roofColor:8339504,doorSide:`pz`,doorX:1.2,lootQ:1.35});e.reserver.addOBB({x:a.x,z:a.z,hw:4.5,hd:4.5,yaw:o},1.5,`landmark`),e.footprints.push({x:a.x,z:a.z,hw:4.5,hd:4.5,yaw:o,h:31.75,landmark:!0});let c=s.F.door(1.2,0,6.2);e.nav.link(c,s.centers[0]);let l=-220.2,u=26.5,d=xd({x:l,z:u,hw:7.5,hd:5.5,yaw:Math.atan2(.33,.94)+Math.PI,floors:4,enter:3,fh:3.4,fstyle:id.classic,roof:`mansard`,wall:14931387,trim:15327954,roofColor:Rd,shutter:1,shutterHex:2050602,gyOverride:1.75,byOverride:-3,lootQ:1.3,shop:!0,flags:1,sign:[`CAFÉ DE L'ÎLE`,{bg:`#1f4d3a`,fg:`#ffffff`,serif:!0,italic:!0}]});yd(e,d,new Yl(12)),e.reserver.addOBB({x:l,z:u,hw:7.5,hd:5.5,yaw:d.yaw},1,`landmark`);for(let[t,n]of[[-280,50],[-300,48],[-205,22]])Cd(e,t,n,Math.atan2(.33,.94),1.6);for(let[t,n]of[[-285,52],[-232,40],[-206,24]])e.loot.push({x:t,y:1.64,z:n,q:1.15,indoor:!1});let f=e.nav.addNode(-290,1.6,48,0),p=e.nav.addNode(-245,1.6,40,0),m=e.nav.addNode(-208,1.6,26,0);e.nav.link(f,p),e.nav.link(p,m),e.nav.doorNodes.push(f,p,m)}function ef(e){let t=Rl.jetDeau,[n,r]=t.root,[i,a]=t.tip,o=i-n,s=a-r,c=Math.hypot(o,s),l=Math.atan2(o/c,s/c),u=1.45,d=new Vd(e,(n+i)/2,(r+a)/2,l,u);e.reserver.addOBB({x:d.x,z:d.z,hw:5,hd:c/2,yaw:l},2,`landmark`),d.box(0,-2.2,0,7,2.2,c,{mat:`stone`,color:11116689,faces:{py:{mat:`stone`,color:12367014}},s:3});for(let e of[-1,1])d.box(e*3.3,0,0,.4,.55,c-6,{mat:`stone`,color:13222322});d.cyl(0,0,c/2-2.5,1.7,9.5,`paint`,zd,12,15),d.cyl(0,9.5,c/2-2.5,1.3,1.9,`glow`,16734794,10,0),d.cone(0,11.4,c/2-2.5,1.6,1.4,`paint`,11740702,10),d.box(4.6,-.9,c/2-14,2.2,1.4,2.2,{mat:`metal`,color:7830400}),e.special.jet={x:d.wx(4.6,c/2-14),z:d.wz(4.6,c/2-14),y:1.95};for(let t=-c/2+20;t<c/2-20;t+=26)Cd(e,d.wx(-2.2,t),d.wz(-2.2,t),l-Math.PI/2,u);for(let t=-c/2+15;t<c/2-10;t+=34)wd(e,d.wx(2.6,t),d.wz(2.6,t),4.2,u);let f=e.nav,p=null;for(let e=-c/2+2;e<=c/2-6;e+=8){let t=d.node(0,0,e,4);p===null?f.doorNodes.push(t):f.link(p,t),p=t}for(let e of[-50,-10,30,60,70])d.loot(e>50?-2:1.5,0,e,1.25,!1)}function tf(e){let t=Rl.bainsPaquis,n=t.dir,r=[-n[1],n[0]],i=Math.atan2(n[0],n[1]),a=1.5,o=(e,i)=>[t.root[0]+n[0]*e+r[0]*i,t.root[1]+n[1]*e+r[1]*i],s=o(28,0),c=new Vd(e,s[0],s[1],i,a);e.reserver.addOBB({x:s[0],z:s[1],hw:15,hd:24,yaw:i},2,`landmark`),c.box(0,-2.4,0,30,2.4,46,{mat:`wood`,color:10193780,faces:{py:{mat:`wood`,color:11902589}},surf:$.WOOD,s:2});for(let e of[-1,1])c.box(e*14.9,0,2,.12,1,40,{mat:`metal`,color:14606046,col:Q.MOVE,surf:$.METAL});c.box(-8,0,22.9,13,1,.12,{mat:`metal`,color:14606046,col:Q.MOVE,surf:$.METAL}),c.box(8,0,22.9,13,1,.12,{mat:`metal`,color:14606046,col:Q.MOVE,surf:$.METAL}),yd(e,xd({x:c.wx(9,-4),z:c.wz(9,-4),hw:13,hd:4.5,yaw:i-Math.PI/2,floors:1,enter:1,fh:3.6,fstyle:id.modern,roof:`flat`,roofAccess:!0,wall:15328472,trim:16777215,interior:15657698,gyOverride:a,byOverride:1.1,lootQ:1.35,shop:!0,flags:1,sign:[`BAINS DES PÂQUIS`,{bg:`#ffffff`,fg:`#1d4f91`}]}),new Yl(31)),c.box(-9,0,14,3,.3,3,{mat:`wood`,color:8087120,col:15});for(let e of[-1,1])for(let t of[-1,1])c.box(-9+e*1.3,0,14+t*1.3,.2,5,.2,{mat:`metal`,color:14540253});c.box(-9,5,14,3.2,.25,3.2,{mat:`wood`,color:8087120}),c.box(-9,5.25,15.5,3.2,1,.1,{mat:`metal`,color:14540253,col:Q.MOVE});for(let[t,n]of[[-6,-12],[-10,-17],[-4,18],[2,15]])kd(e,c.wx(t,n),c.wz(t,n),2844595,a);let l=t.len-50,u=o(50+l/2,0),d=new Vd(e,u[0],u[1],i,1.3);e.reserver.addOBB({x:u[0],z:u[1],hw:3,hd:l/2,yaw:i},2,`landmark`),d.box(0,-2,0,5,2,l,{mat:`stone`,color:11116689,s:3});for(let e of[-1,1])d.box(e*2.35,0,0,.3,.6,l-4,{mat:`stone`,color:13222322});d.cyl(0,0,l/2-2,1.5,8.5,`paint`,zd,12,15),d.cyl(0,8.5,l/2-2,1.1,1.7,`glow`,7208842,10,0),d.cone(0,10.2,l/2-2,1.4,1.2,`paint`,2062906,10);let f=e.nav,p=c.node(0,0,-20),m=c.node(4,0,0),h=c.node(4,0,18);f.link(p,m),f.link(m,h),f.doorNodes.push(p);let g=h;for(let e=-l/2+2;e<=l/2-6;e+=9){let t=d.node(0,0,e,4);f.link(g,t),g=t}for(let[e,t]of[[-4,-8],[-4,9],[-10,4],[-9,14]])c.loot(e,e===-9?.3:0,t,1.3,!1);d.loot(0,0,l/2-6,1.35,!1),d.loot(1,0,0,1.2,!1)}function nf(e){let t=Rl.flowerClock,n=e.T.heightAt(t.x,t.z),r=Math.atan2(-.9,.44);e.special.flowerClock={x:t.x,y:n+.6,z:t.z,yaw:r};let i=new Vd(e,t.x,t.z,r,n);e.reserver.addOBB({x:t.x,z:t.z,hw:4.2,hd:4.2,yaw:r},1,`landmark`),i.box(0,-.5,-.8,6.6,1,5.4,{mat:`hedge`,color:5208628,col:Q.MOVE});let a=new Vd(e,392,-2,Math.atan2(0,-1));a.reserve(4,4,1,0,0,8),a.box(0,0,0,5,1.2,5,{mat:`stone`,color:13222580}),a.box(0,1.2,0,3.2,2.6,3.2,{mat:`stone`,color:13946303});for(let e of[-.6,.6])a.box(e,3.8,0,.8,2.2,.7,{mat:`paint`,color:Id,col:0}),a.sphere(e,6.2,0,.26,`paint`,Id,8);a.loot(3.5,0,0,1.15,!1);let o=new Vd(e,470,10,0);o.reserve(6,6,1,0,0,7),o.cyl(0,0,0,5.2,.9,`stone`,13222580,10,15);for(let e=0;e<8;e++){let t=e/8*Math.PI*2;o.cyl(Math.cos(t)*4.7,.9,Math.sin(t)*4.7,.12,3.4,`metal`,15262938,6,Q.MOVE|Q.BULLET)}o.cone(0,4.3,0,5.8,2.4,`roof`,6200454,10),e.C.addBox(o.x,o.y0+4.6,o.z,4.4,.3,4.4,0,Q.BULLET|Q.MOVE|Q.CAM,$.METAL),o.loot(1.5,.9,1,1.25,!1),o.loot(-1.5,.9,-1,1.2,!1);let s=o.node(2.5,.9,2.5);e.nav.doorNodes.push(s),Md(e,520,-6,3.2);for(let[t,n,r]of[[350,-20,0],[380,25,Math.PI],[430,-18,0],[520,22,Math.PI],[545,-26,0],[330,10,-1.2]])Cd(e,t,n,r);for(let[t,n]of[[340,-15],[420,20],[500,30],[560,-10]])e.loot.push({x:t,y:e.T.heightAt(t,n)+.04,z:n,q:1.1,indoor:!1})}function rf(e){let t=Rl.steamer,n=t.yaw*Math.PI/180,r=2.3,i=new Vd(e,t.x,t.z,n,0);e.reserver.addOBB({x:t.x,z:t.z,hw:36,hd:9,yaw:n},1,`landmark`),i.box(-2,-2.2,0,56,4.5,10,{mat:`paint`,color:zd,faces:{py:{mat:`wood`,color:11967092}},surf:$.WOOD}),i.box(-2,-.3,0,56.1,.5,10.1,{mat:`paint`,color:1907997,col:0});{let t=-2.2,a=r,o=(e,t,n)=>[e,t,n];i.quad(`paint`,o(26,t,5),o(34,t,0),o(34,a,0),o(26,a,5),zd),i.quad(`paint`,o(34,t,0),o(26,t,-5),o(26,a,-5),o(34,a,0),zd),i.tri(`wood`,o(26,a,5),o(34,a,0),o(26,a,-5),11967092),e.C.addBox(i.wx(29,0),r/2-1.1,i.wz(29,0),4,4.5/2,2.6,n,15,$.WOOD)}for(let e of[-1,1])i.box(0,-1.2000000000000002,e*6.6,9,6.2,3.2,{mat:`paint`,color:zd}),i.sign(`GENÈVE`,{bg:`#f1efe8`,fg:`#0d3b78`,serif:!0},0,2.6999999999999997,e*8.25,7,1.75,e);let a=2.7,o=[];for(let e=-17;e<=9;e+=3.2)o.push({c:e,w:1.6,y0:.9,y1:2.1});let s={mat:`wood`,color:9067062,s:2,surf:$.WOOD};Hd(i,`x`,3.5,-20,12,r,a,.2,o,s),Hd(i,`x`,-3.5,-20,12,r,a,.2,o,s),Hd(i,`z`,-19.9,-3.4,3.4,r,a,.2,[{c:0,w:1.4,y0:0,y1:2.2}],s),Hd(i,`z`,11.9,-3.4,3.4,r,a,.2,[{c:0,w:1.4,y0:0,y1:2.2}],s),i.box(-4,5,0,32.6,.2,7.8,{mat:`wood`,color:13217929,faces:{ny:{color:15261904}},surf:$.WOOD});let c=5.2;i.box(-4,c,3.8000000000000003,32.6,1,.08,{mat:`metal`,color:16777215,col:Q.MOVE,surf:$.METAL}),i.box(-1.5,c,-3.8000000000000003,27.6,1,.08,{mat:`metal`,color:16777215,col:Q.MOVE,surf:$.METAL}),i.box(12.2,c,0,.08,1,7.2+.4,{mat:`metal`,color:16777215,col:Q.MOVE,surf:$.METAL}),i.box(-20.2,c,0,.08,1,7.2+.4,{mat:`metal`,color:16777215,col:Q.MOVE,surf:$.METAL});for(let e=0;e<12;e++)i.box(-20.65+e*.3,r,-4.3,.3,(e+1)*.2416666666666667,1,{mat:`wood`,color:9071176,skip:[`ny`],surf:$.WOOD});i.cyl(0,c,0,1.2,5.5,`paint`,15722184,12,15),i.cyl(0,10.7,0,1.25,.9,`paint`,1710618,12,0),i.box(8,c,0,3,2.4,3.2,{mat:`wood`,color:9067062,surf:$.WOOD}),i.box(8,6.4,0,3.05,.9,3.25,{mat:`glass`,color:1975852,col:0});for(let[t,n]of[[-27,0],[31,1]]){i.cyl(t,r,0,.08,7,`metal`,14540253,6,0);let a=n/3,o=(n+1)/3,s=(e,t)=>i.P(e,t,0);e.B.quad(`flag`,s(t,8),s(t-1.8,8),s(t-1.8,9.2),s(t,9.2),16777215,1,[a,1,o,1,o,0,a,0])}for(let e of[-1,1])e>0?(i.box(-20.25,r,e*4.95,13.5,1,.08,{mat:`metal`,color:16777215,col:Q.MOVE,surf:$.METAL}),i.box(-8.75,r,e*4.95,3.5,1,.08,{mat:`metal`,color:16777215,col:Q.MOVE,surf:$.METAL})):i.box(-17,r,e*4.95,20,1,.08,{mat:`metal`,color:16777215,col:Q.MOVE,surf:$.METAL}),i.box(16,r,e*4.95,18,1,.08,{mat:`metal`,color:16777215,col:Q.MOVE,surf:$.METAL});i.box(-29.9,r,0,.08,1,9.9,{mat:`metal`,color:16777215,col:Q.MOVE,surf:$.METAL}),i.box(-12,1.6,20.5,2.4,.3,13,{mat:`wood`,color:9071176,surf:$.WOOD}),i.box(-12,1.9,9.5,2.4,.3,9,{mat:`wood`,color:9071176,surf:$.WOOD});for(let e of[-1,1])i.box(-12+e*1.15,2,15,.06,1,20,{mat:`metal`,color:14540253,col:Q.MOVE});for(let e=8;e<=26;e+=6)i.box(-12,-3,e,.4,4.6,.4,{mat:`wood`,color:5916210,col:0});let l=e.nav,u=i.node(-12,1.6,28.5),d=i.node(-12,2.2,10),f=i.node(-12,r,3.6);l.doorNodes.push(u),l.link(u,d),l.link(d,f);let p=[i.node(-24,r,4.2),f,i.node(0,r,4.2),i.node(16,r,4.2),i.node(24,r,0),i.node(16,r,-4.2),i.node(0,r,-4.2),i.node(-16,r,-4.2),i.node(-24,r,-4.2)];for(let e=0;e<p.length;e++)l.link(p[e],p[(e+1)%p.length]);let m=i.node(-18.8,r,0),h=i.node(-4,r,0),g=i.node(10.8,r,0),_=i.node(-21,r,0),v=i.node(13.2,r,0);l.link(_,m),l.link(m,h),l.link(h,g),l.link(g,v),l.link(_,p[0]),l.link(_,p[8]),l.link(v,p[3]),l.link(v,p[5]);let y=i.node(-21.2,r,-4.3),b=i.node(-16.4,c,-3.2),x=i.node(-4,c,0);l.link(y,p[8]),l.link(y,b),l.link(b,x);for(let[e,t]of[[-14,1.5],[-8,-1.5],[0,1.5],[6,-1.5]])i.loot(e,r,t,1.4);i.loot(-6,c,2,1.35,!1),i.loot(4,c,-2.5,1.35,!1),i.loot(20,r,2,1.3,!1),i.loot(-25,r,-2,1.2,!1)}function af(e){let t=Rl.brunswick,n=new Vd(e,t.x,t.z,0);n.reserve(8,8,1,0,0,24);let r=14275268;n.box(0,0,0,15,.6,15,{mat:`stone`,color:13222580}),n.box(0,.6,0,13,.6,13,{mat:`stone`,color:13222580});for(let e of[-1,1])for(let t of[-1,1])n.box(e*3.6,1.2,t*3.6,1.6,6,1.6,{mat:`stone`,color:r});n.box(0,7.2,0,9,1.4,9,{mat:`stone`,color:r}),n.box(0,1.2,0,3.4,1.4,1.6,{mat:`stone`,color:15262422}),n.box(0,8.6,0,6.5,4.5,6.5,{mat:`stone`,color:r});for(let e of[-1,1])for(let t of[-1,1])n.cone(e*4,8.6,t*4,.6,6.5,`stone`,r,6);n.cone(0,13.1,0,3.6,5,`stone`,r,8),n.box(0,18.1,0,2.2,.7,1.2,{mat:`paint`,color:Id}),n.box(0,18.8,0,2,1,.7,{mat:`paint`,color:Id,col:0}),n.box(.2,19.8,0,.5,1.2,.5,{mat:`paint`,color:Id,col:0}),n.sphere(.2,21.2,0,.25,`paint`,Id,8),n.loot(0,1.2,2,1.25,!1),n.loot(5.5,1.2,-5.5,1.1,!1);let i=n.node(0,1.2,3);e.nav.doorNodes.push(i)}function of(e){let t=new Yl(5),n=Rl.grandTheatre,r=Math.PI/2,i=xd({x:n.x,z:n.z,hw:24,hd:26,yaw:r,floors:5,enter:2,fh:3.8,fstyle:id.grand,roof:`mansard`,wall:14273971,trim:15261644,roofColor:6197116,flags:2,seed:120,bay:4.2,lootQ:1.5,lootBonus:2,sign:[`GRAND THÉÂTRE`,{bg:`#00000000`,fg:`#c9a94a`,serif:!0}],backDoor:!0});e.reserver.addOBB({x:n.x,z:n.z,hw:24,hd:26,yaw:r},2.5,`landmark`),yd(e,i,t);{let t=new Vd(e,n.x,n.z,r,i.gy);for(let e=-3;e<=3;e++)t.cyl(e*5.2,3.8,26.9,.55,7.4,`stone`,15261644,10,15);t.box(0,3.6,27.4,38,.3,2.4,{mat:`stone`,color:14735042}),t.box(0,11.2,27,38,1,1.6,{mat:`stone`,color:14735042,col:0}),t.cyl(0,24.1,0,6,1.5,`stone`,14273971,14,0),t.sphere(0,25.6,0,6,`paint`,6197116,14,{hemi:!0}),t.cyl(0,31.4,0,.8,2.2,`paint`,6197116,8,0);for(let e=-3;e<=3;e+=2)t.box(e*5.2,19.2,26.4,.9,2.6,.9,{mat:`paint`,color:12562042,col:0})}let a=Rl.museeRath,o=Math.atan2(-.3,.95),s=xd({x:a.x,z:a.z,hw:19,hd:10,yaw:o,floors:2,enter:1,fh:5.4,fstyle:id.plain,roof:`hip`,wall:14866627,trim:15656662,roofColor:Rd,seed:9,bay:6,lootQ:1.4,lootBonus:2});e.reserver.addOBB({x:a.x,z:a.z,hw:19,hd:15,yaw:o},2,`landmark`),yd(e,s,t);{let t=new Vd(e,a.x,a.z,o,s.gy);for(let e=0;e<6;e++)t.cyl(-8+e*3.2,0,13.2,.6,8.4,`stone`,15656662,12,15);t.box(0,-.6,12.5,20,.6,6,{mat:`stone`,color:14208957}),t.box(0,8.4,12.2,21,1.4,6.4,{mat:`stone`,color:15656662}),t.tri(`stone`,[-10.5,9.8,15.4],[10.5,9.8,15.4],[0,13.2,15.4],15656662),t.quad(`roof`,[10.6,9.8,15.5],[10.6,9.8,9],[0,13.2,9],[0,13.2,15.5],Rd),t.quad(`roof`,[-10.6,9.8,9],[-10.6,9.8,15.5],[0,13.2,15.5],[0,13.2,9],Rd),t.sign(`MUSÉE RATH`,{bg:`#eee6d6`,fg:`#3a3a3a`,serif:!0},0,8.6,15.45,8,1)}let c=Rl.conservatoire,l=Math.atan2(-.7071,-.7071),u=xd({x:c.x,z:c.z,hw:19,hd:10,yaw:l,floors:3,enter:2,fh:3.8,fstyle:id.grand,roof:`mansard`,wall:14010800,trim:15129803,roofColor:Rd,seed:44,bay:3.8,lootQ:1.45,sign:[`CONSERVATOIRE DE MUSIQUE`,{bg:`#d5c9b0`,fg:`#2f2f2f`,serif:!0}]});e.reserver.addOBB({x:c.x,z:c.z,hw:19,hd:10,yaw:l},2,`landmark`),yd(e,u,t);let d=Rl.dufour,f=new Vd(e,d.x,d.z,Math.PI);f.reserve(4,5,1,0,0,10),f.box(0,0,0,7,.5,9,{mat:`stone`,color:12432806}),f.box(0,.5,0,4.4,4.2,6.2,{mat:`stone`,color:13156528}),f.box(0,4.7,0,1.3,1.5,3.4,{mat:`paint`,color:Id});for(let[e,t]of[[-.45,-1.3],[.45,-1.3],[-.45,1.3],[.45,1.3]])f.box(e,4.7,t,.28,1,.28,{mat:`paint`,color:Id,col:0});f.box(0,5.9,2,.7,1.4,.9,{mat:`paint`,color:Id,col:0,yaw:0}),f.box(0,6.6,2.6,.5,.6,1,{mat:`paint`,color:Id,col:0}),f.box(0,6.2,0,.8,1.3,.6,{mat:`paint`,color:Id,col:0}),f.sphere(0,7.8,0,.27,`paint`,Id,8),f.box(0,8,0,.9,.22,.35,{mat:`paint`,color:2765612,col:0}),f.sign(`DUFOUR`,{bg:`#c8c0b0`,fg:`#3a3a3a`,serif:!0},0,2.6,3.12,2.6,.65);for(let[e,t]of[[-4.5,0],[4.5,0],[0,-5.5]])f.loot(e,0,t,1.25,!1);let p=f.node(0,0,-6);e.nav.doorNodes.push(p),Ad(e,-222,352,Math.atan2(.17,.98)+Math.PI/2),Od(e,-218,272,Math.atan2(-.986,.168),null,3),Od(e,60,152,Math.atan2(.313,.95),null,3);for(let[t,n]of[[-175,345],[-160,395],[-235,370]])wd(e,t,n,6)}function sf(e){let t=Dl,n=t.height,r=-Math.PI/4,i=new Yl(77),a=Rl.reformationWall,o=Math.atan2(-t.n[0],-t.n[1]),s=new Vd(e,a[0],a[1],o,n);s.reserve(52,7,1,0,0,12),s.box(0,-1,0,100,11,3,{mat:`stone`,color:11774875,s:4}),s.box(0,-1,1.6,26,9,1.2,{mat:`stone`,color:12367012,s:4}),s.box(0,0,3.2,26,1.6,2,{mat:`stone`,color:13024942}),s.sign(`POST TENEBRAS LUX`,{bg:`#bcb4a4`,fg:`#4a443b`,serif:!0},0,7,2.22,18,1.6);for(let[t,r]of[[0,-6.6],[1,-2.2],[2,2.2],[3,6.6]]){let i=7236710;s.box(r,1.6,3.2,1.5,3.4,1.1,{mat:`stone`,color:i,col:0}),s.box(r,1.6,3.2,1.1,4,.8,{mat:`stone`,color:i,col:0}),s.box(r,5,3.2,1.25,.9,.9,{mat:`stone`,color:i,col:0}),s.sphere(r,6.25,3.25,.36,`stone`,i,8),s.box(r,6.55,3.25,.62,.18,.62,{mat:`stone`,color:5986901,col:0}),t===1&&s.box(r+.4,4.5,3.9,.5,.6,.18,{mat:`stone`,color:5986901,col:0}),e.C.addBox(s.wx(r,3.2),n+1.6+2.6,s.wz(r,3.2),.7,2.6,.55,s.yaw,15,$.STONE)}for(let e of[-20,-15,15,20])s.box(e,0,2.2,1.6,1.4,1.2,{mat:`stone`,color:12367012}),s.box(e,1.4,2.2,.8,2.6,.6,{mat:`stone`,color:7762796,col:0}),s.sphere(e,4.3,2.2,.3,`stone`,7762796,8);for(let e of[7,11.5])s.box(0,0,e,104,.45,.5,{mat:`stone`,color:13024942,col:Q.MOVE|Q.BULLET});s.box(0,.32,9.25,103.6,.02,4,{mat:`glass`,color:3497580,col:0});let c=Rl.uniBastions,l=Math.atan2(t.n[0],t.n[1]);for(let[n,r,a,o,s]of[[0,15.5,10,3,3],[33,17,9,3,2],[-33,17,9,3,2]]){let u=c[0]-t.d[0]*n,d=c[1]-t.d[1]*n,f=xd({x:u,z:d,hw:r,hd:a,yaw:l,floors:n===0?4:o,enter:s,fh:3.6,fstyle:id.grand,roof:`mansard`,wall:14537405,trim:15459283,roofColor:Rd,seed:60+n,bay:3.6,lootQ:1.35,doorBias:0,backDoor:!0,sign:n===0?[`UNIVERSITÉ`,{bg:`#ddd2bd`,fg:`#2c2c2c`,serif:!0}]:void 0});e.reserver.addOBB({x:u,z:d,hw:r,hd:a,yaw:l},1.5,`landmark`),yd(e,f,i)}let u=Rl.parkCafe,d=xd({x:u[0],z:u[1],hw:9,hd:6,yaw:o,floors:1,enter:1,fh:3.8,fstyle:id.classic,roof:`flat`,roofAccess:!0,wall:15262161,trim:16777215,roofColor:Rd,seed:3,bay:3,lootQ:1.3,shop:!0,flags:1,sign:[`RESTAURANT DU PARC`,{bg:`#1f4d3a`,fg:`#f3ead2`,serif:!0,italic:!0}]});e.reserver.addOBB({x:u[0],z:u[1],hw:9,hd:6,yaw:o},2,`landmark`),yd(e,d,i);for(let r=0;r<6;r++){let i=t.at(50+r*4.5,1);kd(e,i[0],i[1],15262416,n)}for(let a of[-136,-122]){let o=t.at(a,22),s=new Vd(e,o[0],o[1],r,n);s.reserve(4,4,.5,0,0,1);let c=.8;for(let e=0;e<8;e++)for(let t=0;t<8;t++)s.box(-3.2+c*(e+.5),0,-3.2+c*(t+.5),c,.06,c,{mat:`stone`,color:(e+t)%2?2829099:15262938,col:0});for(let e=0;e<14;e++){let t=i.int(0,7),n=i.int(0,7),r=e%2==0,a=i.pick([.55,.7,.85,1]);s.cyl(-3.2+c*(t+.5),.06,-3.2+c*(n+.5),.22,a,`paint`,r?15789282:1907997,8,Q.MOVE),s.sphere(-3.2+c*(t+.5),.06+a+.12,-3.2+c*(n+.5),.17,`paint`,r?15789282:1907997,6)}for(let t of[-5,5])Cd(e,s.wx(t,0),s.wz(t,0),r+Math.PI/2*Math.sign(t),n)}let f=t.at(-170,0),p=new Vd(e,f[0],f[1],o+Math.PI/2,n);for(let e of[-8,8])p.box(e,0,0,1.6,4.6,1.6,{mat:`stone`,color:13222321}),p.sphere(e,5,0,.55,`stone`,13222321,8),p.box(e-Math.sign(e)*1.6,0,-1.6,.08,3.2,3,{mat:`metal`,color:Bd,col:Q.MOVE});let m=(i,a,o)=>{let s=t.at(i,o),c=t.at(a,o),l=(s[0]+c[0])/2,u=(s[1]+c[1])/2,d=Math.hypot(c[0]-s[0],c[1]-s[1]);e.B.box({x:l,y:n+1,z:u,sx:d,sy:.06,sz:.06,yaw:r,mat:`metal`,color:Bd}),e.B.box({x:l,y:n+1.9,z:u,sx:d,sy:.06,sz:.06,yaw:r,mat:`metal`,color:Bd});for(let s=0;s<=d;s+=2.4){let c=t.at(i+(a-i)*s/d,o);e.B.box({x:c[0],y:n+1,z:c[1],sx:.06,sy:2,sz:.06,yaw:r,mat:`metal`,color:Bd})}e.C.addBox(l,n+1,u,d/2,1,.08,r,Q.MOVE,$.METAL)};m(-168,-100,-74.5),m(-88,-10,-74.5),m(4,90,-74.5),m(104,168,-74.5);for(let r=-150;r<=150;r+=20){if(Math.abs(r)<8)continue;let i=t.at(r,16),a=t.at(r,-18);if((r<45||r>80)&&Cd(e,i[0],i[1],o,n),Cd(e,a[0],a[1],o+Math.PI,n),r%40==10||r%40==-30){let i=t.at(r+5,20);wd(e,i[0],i[1],4.6,n)}}for(let[r,i]of[[-150,0],[-100,-10],[-60,30],[-20,0],[20,40],[60,-25],[100,10],[140,-5],[-130,40],[120,50]]){let a=t.at(r,i);e.loot.push({x:a[0],y:n+.04,z:a[1],q:1.15,indoor:!1})}e.special.reformation={F:s}}function cf(e){let t=new Yl(1602),n=Rl.hotelDeVille,r=135*Math.PI/180,i=xd({x:n.x,z:n.z,hw:20,hd:15,yaw:r,floors:4,enter:3,fh:3.6,fstyle:id.grand,roof:`hip`,wall:14076853,trim:14932680,roofColor:8342069,seed:15,bay:3.6,lootQ:1.5,lootBonus:1,sign:[`HÔTEL DE VILLE`,{bg:`#d6cbb5`,fg:`#333333`,serif:!0}],backDoor:!0});e.reserver.addOBB({x:n.x,z:n.z,hw:20,hd:15,yaw:r},2,`landmark`),yd(e,i,t);{let t=new Vd(e,n.x,n.z,r,i.gy);for(let[n,r]of[[-6,0],[6,1]]){t.box(n,7.4,15.5,.08,.08,1,{mat:`metal`,color:14540253,col:0});let i=r/3,a=(r+1)/3;e.B.quad(`flag`,t.P(n,6.2,16),t.P(n+1.6,6.2,16),t.P(n+1.6,7.4,16),t.P(n,7.4,16),16777215,1,[i,1,a,1,a,0,i,0])}}let a=Rl.arsenal,o=new Vd(e,a.x,a.z,r).y0+.1,s=new Vd(e,a.x,a.z,r,o);s.reserve(12,7,1.5,0,0,12),s.box(0,-1.5,0,24,1.5,13,{mat:`stone`,color:12235168,faces:{py:{mat:`stone`,color:11116690}}});for(let e=0;e<=5;e++)s.box(-12+e*4.8,0,6,1,4.2,1,{mat:`stone`,color:13813421});s.box(0,0,-6.1,24,4.2,.8,{mat:`plaster`,color:13607786}),s.box(0,4.2,0,24,5.8,13,{mat:`facade`,color:14271644,uv:`facade`,facade:{bay:3.2,fh:2.9,v0:1,yb:o+4.2,fac:[2,30,1,0]}}),s.sign(`ANCIEN ARSENAL`,{bg:`#d9c49c`,fg:`#4a3a24`,serif:!0},0,3.6,6.52,6,.6),_d(e,{x:s.x,z:s.z,yaw:r,hw:12,hd:6.5,roof:`tile`,roofColor:9062965,wall:14271644,trim:14735044,bay:3,seed:3},o+10,t);for(let e=0;e<4;e++){let t=-8.4+e*5.6;s.box(t,0,1.2,1,.7,2.2,{mat:`wood`,color:5914664,surf:$.WOOD}),s.cyl(t,.95,1.6,.24,2.8,`metal`,3027252,8,0,{rx:Math.PI/2-.12});for(let e of[-.55,.55])s.cyl(t+e,.45,.6,.45,.12,`wood`,4863008,10,0,{rz:Math.PI/2});s.loot(t+2.4,0,2.4,1.3,!1)}let c=s.node(0,0,2.5),l=s.node(-9,0,3),u=s.node(9,0,3);e.nav.link(c,l),e.nav.link(c,u),e.nav.doorNodes.push(l,u,s.node(0,0,8.5)),e.nav.link(c,e.nav.doorNodes[e.nav.doorNodes.length-1]);let d=Rl.maisonTavel,f=xd({x:d.x,z:d.z,hw:7,hd:6.2,yaw:Math.PI,floors:4,enter:3,fh:3.3,fstyle:id.old,roof:`hip`,wall:13616045,trim:14274493,roofColor:9062965,shutter:3,shutterHex:5913120,seed:21,bay:2.9,lootQ:1.45,sign:[`MAISON TAVEL`,{bg:`#cfc3ad`,fg:`#3b2a1a`,serif:!0}]});e.reserver.addOBB({x:d.x,z:d.z,hw:7,hd:6.2,yaw:Math.PI},1.5,`landmark`),yd(e,f,t);let p=Rl.palaisJustice,m=Math.atan2(-.4,-.92),h=xd({x:p.x,z:p.z,hw:15,hd:9,yaw:m,floors:4,enter:3,fh:3.6,fstyle:id.grand,roof:`mansard`,wall:14208180,trim:15129803,roofColor:Rd,seed:81,bay:3.6,lootQ:1.45,sign:[`PALAIS DE JUSTICE`,{bg:`#d8ccb4`,fg:`#2e2e2e`,serif:!0}]});e.reserver.addOBB({x:p.x,z:p.z,hw:15,hd:9,yaw:m},1.5,`landmark`),yd(e,h,t);let g=Rl.bourgFountain;Md(e,g.x,g.z,2.4),e.reserver.addOBB({x:g.x,z:g.z,hw:3,hd:3,yaw:0},1,`landmark`);for(let[t,n,r]of[[275,470,9182227],[282,498,2051386],[303,470,2112092],[310,497,9182227],[268,488,13214247]])kd(e,t,n,r);for(let[t,n]of[[285,476],[300,492],[272,495]])e.loot.push({x:t,y:e.T.heightAt(t,n)+.04,z:n,q:1.2,indoor:!1});let _=Dl,v=-Math.PI/4,y=_.at(-150,117.5),b=_.at(-30,117.5);{let t=(y[0]+b[0])/2,n=(y[1]+b[1])/2,r=e.T.heightAt(t,n);e.B.box({x:t,y:r+.45,z:n,sx:120,sy:.08,sz:.5,yaw:v,mat:`paint`,color:3107642});let i=_.at(-90,117.78);e.B.box({x:i[0],y:r+.75,z:i[1],sx:120,sy:.5,sz:.06,yaw:v,mat:`paint`,color:3107642}),e.C.addBox(t,r+.24,n,60,.24,.3,v,Q.MOVE|Q.BULLET,$.WOOD),e.special.treilleBench=!0}for(let t=-165;t<165;t+=12){if(Math.abs((t+165)%48-24)<6)continue;let n=_.at(t+6,115.5),r=e.T.heightAt(n[0],n[1]);e.B.box({x:n[0],y:r+.5,z:n[1],sx:12,sy:1,sz:.5,yaw:v,mat:`stone`,color:13222321}),e.C.addBox(n[0],r+.5,n[1],6,.5,.25,v,Q.MOVE|Q.BULLET|Q.CAM,$.STONE)}for(let t of[-140,-80,-20,40,100]){let n=_.at(t,121);e.loot.push({x:n[0],y:e.T.heightAt(n[0],n[1])+.04,z:n[1],q:1.2,indoor:!1}),wd(e,n[0]+1.5,n[1]+1.5,4.2)}let x=Rl.molardTower,S=new Vd(e,x.x,x.z,18.2*Math.PI/180);S.reserve(4,4,1,0,0,25),S.box(0,-1,0,7,21,7,{mat:`stone`,color:12892319,skip:[`ny`],s:3}),Gd(S,0,0,3.8,3.8,20,6.5,`roof`,9062965),e.special.molardClock={pos:S.P(0,16.5,3.56),yaw:S.yaw,r:1.3},Md(e,74,58,2)}function lf(e){let t=new Yl(88),n=Pl.find(e=>e.name===`Plaine de Plainpalais`).poly,r=new Vd(e,n.reduce((e,t)=>e+t[0],0)/4,n.reduce((e,t)=>e+t[1],0)/4,Math.atan2(.35,.94)),i=[14239803,3049131,16172101,3833156,15262416,9323693];for(let e=0;e<4;e++)for(let n=0;n<6;n++){if(t.chance(.2))continue;let a=-45+n*14,o=-30+e*13,s=t.pick(i);r.box(a,0,o,4,.85,1.6,{mat:`wood`,color:9071176,surf:$.WOOD});for(let e of[-1.9,1.9])for(let t of[-1.1,1.1])r.box(a+e,0,o+t,.08,2.4,.08,{mat:`metal`,color:5592405,col:0});r.box(a,2.4,o,4.4,.08,2.6,{mat:`paint`,color:s,col:Q.BULLET}),t.chance(.6)?r.loot(a,.85,o,1,!1):r.loot(a,0,o+2.2,.95,!1),t.chance(.4)&&r.box(a+t.range(-1,1),0,o-2,.9,.9,.9,{mat:`wood`,color:10254923,surf:$.WOOD})}for(let e=0;e<7;e++){let e=30+t.range(-12,12),n=30+t.range(-12,12);r.box(e,0,n,t.range(3,7),t.range(.4,1.3),t.range(1,3),{mat:`stone`,color:11052188,yaw:t.range(0,Math.PI)})}for(let e=0;e<4;e++)r.loot(26+e*4,0,30,1,!1)}function uf(e){e.special=e.special||{},qd(e),Jd(e),Zd(e),Qd(e),$d(e),ef(e),tf(e),nf(e),rf(e),af(e),of(e),sf(e),cf(e),lf(e)}function df(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new fr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=ff(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=ff(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function ff(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Zn(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function pf(e){let t=[],n=(e,n,r,i,a,o,s)=>{e.scale(a,o,s),e.translate(n,r,i),t.push(e)};if(e===`round`){n(new Fi(1,1),0,.64,0,.46,.34,.46);for(let[e,t,r,i]of[[.3,.6,.18,.3],[-.28,.62,.2,.29],[.12,.6,-.32,.3],[-.2,.58,-.26,.27],[.24,.8,-.08,.27],[-.12,.84,.12,.26],[.02,.92,-.04,.22],[.36,.5,-.12,.22],[-.36,.5,-.02,.22]])n(new Fi(1,0),e,t,r,i,i*.82,i)}else if(e===`poplar`)n(new Fi(1,1),0,.6,0,.18,.42,.18),n(new Fi(1,1),.02,.86,0,.12,.16,.12);else if(e===`conifer`)for(let e=0;e<4;e++)n(new Ni(.42-e*.08,.32,8),0,.32+e*.17,0,1,1,1);else n(new Fi(1,1),0,.5,0,.5,.45,.5),n(new Fi(1,0),.3,.45,.2,.35,.3,.35);let r=t.map(e=>e.index?e.toNonIndexed():e);for(let e of r)e.deleteAttribute(`uv`);let i=df(r,!1),a=i.attributes.position;for(let e=0;e<a.count;e++){let t=a.getX(e),n=a.getY(e),r=a.getZ(e),i=Math.sin(t*12.9+n*7.1)*Math.cos(r*9.3-n*4.7);a.setXYZ(e,t*(1+i*.08),n+i*.02,r*(1+i*.08))}i.computeVertexNormals();let o=i.attributes.normal,s=e===`conifer`?.5:e===`poplar`?.62:e===`bush`?.45:.68;for(let t=0;t<a.count;t++){let n=a.getX(t),r=(a.getY(t)-s)*(e===`poplar`?.35:.9),i=a.getZ(t),c=Math.hypot(n,r,i)||1;n/=c,r/=c,i/=c;let l=o.getX(t)*.3+n*.7,u=o.getY(t)*.3+r*.7+.08,d=o.getZ(t)*.3+i*.7,f=Math.hypot(l,u,d)||1;o.setXYZ(t,l/f,u/f,d/f)}let c=new Float32Array(a.count*3);for(let e=0;e<a.count;e++){let t=a.getX(e),n=a.getY(e),r=a.getZ(e),i=Math.min(1,Math.max(0,(n-.25)/.75)),o=Math.min(1,Math.hypot(t,r)/.55),s=.62+.3*i+.12*o;c[e*3]=s*.97,c[e*3+1]=s,c[e*3+2]=s*.92}i.setAttribute(`color`,new Zn(c,3));let l=new Float32Array(a.count*2);for(let e=0;e<a.count;e++)l[e*2]=a.getX(e)*2+a.getZ(e),l[e*2+1]=a.getY(e)*2;return i.setAttribute(`uv`,new Zn(l,2)),i}var mf={plane:{crown:`round`,h:[11,16],w:[8,11],trunkH:.32,colors:[7313989,8103500,6459454,8826197]},chestnut:{crown:`round`,h:[9,13],w:[8,11],trunkH:.28,colors:[6262588,7051330,5603126]},lime:{crown:`round`,h:[8,12],w:[6,8],trunkH:.3,colors:[8038474,8958804,7249476]},poplar:{crown:`poplar`,h:[16,22],w:[3.5,5],trunkH:.2,colors:[6392894,7116612]},conifer:{crown:`conifer`,h:[10,15],w:[5,7],trunkH:.18,colors:[4156734,4617027,3695417]},bush:{crown:`bush`,h:[1.4,2.4],w:[1.8,3.2],trunkH:0,colors:[6197056,6986310,5406521]}},hf=class{constructor(e){this.W=e,this.rng=new Yl(1815),this.list=[],this.grid=new Map}_key(e,t){return Math.floor(e/6)*10007+Math.floor(t/6)}tooClose(e,t,n){let r=Math.floor(e/6),i=Math.floor(t/6);for(let a=r-1;a<=r+1;a++)for(let r=i-1;r<=i+1;r++){let i=this.grid.get(a*10007+r);if(i){for(let r of i)if(Math.hypot(r.x-e,r.z-t)<n)return!0}}return!1}add(e,t,n,{minD:r=4.5,checkRoads:i=!1,y:a=null,scale:o=1}={}){let s=this.W;if(Math.abs(e)>796||Math.abs(t)>796)return!1;let c=s.T.heightAt(e,t);if(c<.9||this.tooClose(e,t,r))return!1;let l={x:e,z:t,hw:.6,hd:.6,yaw:0};if(s.reserver.blocked(l,.6,e=>e.tag===`lot`||e.tag===`landmark`||i&&(e.tag===`road`||e.tag===`rail`)))return!1;let u=mf[n],d=this.rng,f=d.range(u.h[0],u.h[1])*o,p=d.range(u.w[0],u.w[1])*o,m={x:e,y:a===null?c:a,z:t,sp:n,h:f,w:p,rot:d.range(0,Math.PI*2),col:d.pick(u.colors),shade:d.range(.85,1.12)};this.list.push(m);let h=this._key(e,t),g=this.grid.get(h);return g||this.grid.set(h,g=[]),g.push(m),u.trunkH>0&&s.C.addBox(e,m.y+1.6,t,.3*o,1.6,.3*o,0,15,$.WOOD),!0}fillPolygon(e,t,n,r={}){let i=su(e),a=(i.maxx-i.minx)*(i.maxz-i.minz),o=Math.round(a*n);for(let n=0;n<o;n++){let n=this.rng.range(i.minx,i.maxx),a=this.rng.range(i.minz,i.maxz);tu(n,a,e)&&(r.avoid&&r.avoid(n,a)||this.add(n,a,typeof t==`function`?t():t,r))}}row(e,t,n,r,i={}){let a=au(e);for(let o=n/2;o<a;o+=n){let a=ou(e,o),s=-a.dz,c=a.dx;for(let e of t)this.add(a.x+s*e,a.z+c*e,typeof r==`function`?r():r,{minD:n*.7,...i})}}plant(){let e=Dl,t=this.rng;for(let t=-160;t<=160;t+=10)for(let n of[-12,12,-44,44,-66]){let r=e.at(t,n);this.add(r[0],r[1],`chestnut`,{minD:6})}for(let t=-165;t<=165;t+=11){for(let n of[88,103]){let r=e.at(t+(n===103?5:0),n);this.add(r[0],r[1],`chestnut`,{minD:6})}let n=e.at(t,119.6);this.add(n[0],n[1],`chestnut`,{minD:6})}for(let e of Nl)e.name!==`Parc des Bastions`&&e.name!==`Promenade de la Treille`&&(e.name===`Île Rousseau`?this.fillPolygon(e.poly,()=>t.chance(.5)?`poplar`:`plane`,.02,{minD:6}):this.fillPolygon(e.poly,()=>t.weighted([[`plane`,3],[`lime`,2],[`conifer`,1],[`bush`,2]]),.0045,{minD:7,avoid:(e,t)=>Math.hypot(e-296,t-6)<12||Math.hypot(e-470,t-10)<10||Math.hypot(e-392,t+2)<8}));for(let e of Fl){if(!e.name.startsWith(`Quai`))continue;let n=e.frontage===`L`?-1:1;this.row(e.pts,[n*(e.w/2+6)],11,()=>t.chance(.8)?`plane`:`lime`,{minD:8})}for(let e of Fl)/Boulevard|Rue de Candolle|Rue du Mont-Blanc/.test(e.name)&&this.row(e.pts,[e.w/2+1.2,-(e.w/2+1.2)],12,`plane`,{minD:9});for(let e of Pl)if(e.name===`Plaine de Plainpalais`){let t=e.poly;for(let e=0;e<t.length;e++){let n=t[e],r=t[(e+1)%t.length];(n[0]+r[0])/2,(n[1]+r[1])/2;let i=[n,r],a=Math.hypot(r[0]-n[0],r[1]-n[1]);for(let e=6;e<a-6;e+=10){let t=ou(i,e),n=-501-t.x,r=641-t.z,a=Math.hypot(n,r);for(let e of[4,11])this.add(t.x+n/a*e,t.z+r/a*e,`plane`,{minD:7})}}}else[`Place de la Fusterie`,`Place de Neuve`,`Place du Bourg-de-Four`,`Cour Saint-Pierre`,`Place de Cornavin`].includes(e.name)&&this.fillPolygon(e.poly,`lime`,e.name===`Place de Cornavin`?.0012:.004,{minD:9,avoid:(e,t)=>Math.hypot(e+196,t-377)<9||Math.hypot(e-292,t-485)<7||Math.hypot(e+320,t+522)<30});for(let e=0;e<10;e++){let t=e/10*Math.PI*2;this.add(150+Math.cos(t)*17,-330+Math.sin(t)*17,`plane`,{minD:6})}let n=this.W,r=0;for(;r++<2600;){let e=t.range(-780,780),r=t.range(-780,780);n.T.heightAt(e,r)<1||this.add(e,r,t.weighted([[`plane`,2],[`lime`,2],[`bush`,1.5],[`conifer`,.4]]),{minD:10,checkRoads:!0})}n.stats.trees=this.list.length}build(e){let t=this.W.M.textures.foliage,n=$u(t),r=new Yi({color:10127988,roughness:.95,map:this.W.M.textures.stone}),i=new Mi(.42,.62,1,7,1,!1);i.translate(0,.5,0);let a={};for(let e of this.list){let t=mf[e.sp].crown;(a[t]=a[t]||[]).push(e)}let o=new ln;o.name=`trees`;let s=new W,c=new ft,l=new Wt,u=new G,d=this.list.filter(e=>mf[e.sp].trunkH>0),f=new si(i,r,d.length);d.forEach((e,t)=>{let n=mf[e.sp],r=e.h*(n.crown===`poplar`?.35:.45);s.compose(new H(e.x,e.y-.2,e.z),c.setFromEuler(l.set(0,e.rot,0)),new H(e.w*.045+.12,r,e.w*.045+.12)),f.setMatrixAt(t,s)}),f.castShadow=!0,f.receiveShadow=!0,f.frustumCulled=!1,o.add(f);for(let[e,t]of Object.entries(a)){let r=new si(pf(e),n,t.length);t.forEach((t,n)=>{let i=e===`poplar`?t.w*1.4:t.w;s.compose(new H(t.x,t.y,t.z),c.setFromEuler(l.set(0,t.rot,0)),new H(i,t.h,i)),r.setMatrixAt(n,s),u.setHex(t.col).multiplyScalar(t.shade),r.setColorAt(n,u)}),r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!1,o.add(r)}return e.add(o),this.group=o,o}},gf={ASPHALT:0,PAVING:1,COBBLE:2,GRASS:3,GRAVEL:4,DIRT:5,BALLAST:6,QUAY:7},_f={road:0,ped:1,cobble:2,gravel:4,grass:3,paving:1,dirt:5},vf=class{constructor(e=2048,t=2){this.size=e,this.k=e/vl,this.R=t;let n=e*e;this.A=new Uint8Array(n),this.Bm=new Uint8Array(n),this.D=new Float32Array(n)}fillAll(e){this.A.fill(e),this.Bm.fill(e),this.D.fill(this.R)}paint(e,t,n,r,i,a){let o=this.size,s=this.R,c=this.k,l=Math.max(0,Math.floor((e-s+800)*c)),u=Math.min(o-1,Math.ceil((n+s+800)*c)),d=Math.max(0,Math.floor((t-s+800)*c)),f=Math.min(o-1,Math.ceil((r+s+800)*c)),p=1/c,m=this.A,h=this.Bm,g=this.D;for(let e=d;e<=f;e++){let t=(e+.5)*p-800;for(let n=l;n<=u;n++){let r=i((n+.5)*p-800,t);if(r<=-s)continue;let c=e*o+n;if(r>=s){m[c]=a,h[c]=a,g[c]=s;continue}let l=m[c],u=h[c],d=g[c];if(l===a&&u!==a)g[c]=Math.max(d,r);else if(u===a&&l!==a)m[c]=a,h[c]=l,g[c]=Math.max(-d,r);else{let e=d>=0?l:u;if(e===a&&l===u)continue;(r>0||-r<Math.abs(d))&&(m[c]=a,h[c]=e,g[c]=r)}}}}fillPolygon(e,t){let n=su(e),r=e.length;this.paint(n.minx,n.minz,n.maxx,n.maxz,(t,n)=>{let i=1/0;for(let a=0,o=r-1;a<r;o=a++){let r=nu(t,n,e[o][0],e[o][1],e[a][0],e[a][1]);r<i&&(i=r)}return tu(t,n,e)?i:-i},t)}fillCircle(e,t,n,r){this.paint(e-n,t-n,e+n,t+n,(r,i)=>n-Math.hypot(r-e,i-t),r)}stroke(e,t,n){let r=1/0,i=1/0,a=-1/0,o=-1/0;for(let t of e)r=Math.min(r,t[0]),a=Math.max(a,t[0]),i=Math.min(i,t[1]),o=Math.max(o,t[1]);for(let r=0;r<e.length-1;r++){let i=e[r],a=e[r+1];this.paint(Math.min(i[0],a[0])-t,Math.min(i[1],a[1])-t,Math.max(i[0],a[0])+t,Math.max(i[1],a[1])+t,(e,n)=>t-nu(e,n,i[0],i[1],a[0],a[1]),n)}}fillOBB(e,t,n=0){let r=Math.cos(e.yaw),i=Math.sin(e.yaw),a=su(du(e,n));this.paint(a.minx,a.minz,a.maxx,a.maxz,(t,a)=>{let o=t-e.x,s=a-e.z,c=Math.abs(o*r-s*i)-e.hw,l=Math.abs(o*i+s*r)-e.hd;return n-(Math.hypot(Math.max(c,0),Math.max(l,0))+Math.min(Math.max(c,l),0))},t)}visible(e){return this.D[e]>=0?this.A[e]:this.Bm[e]}get(e,t){let n=this.size,r=Math.floor((e+800)*this.k),i=Math.floor((t+800)*this.k);return r<0||i<0||r>=n||i>=n?gf.ASPHALT:this.visible(i*n+r)}texture(){let e=this.size,t=this.R,n=new Uint8Array(e*e*4);for(let r=0;r<e*e;r++)n[r*4]=this.A[r]*32,n[r*4+1]=this.Bm[r]*32,n[r*4+2]=Math.max(0,Math.min(255,Math.round(this.D[r]/t*127.5+127.5))),n[r*4+3]=255;let r=new Yr(n,e,e,T,u);return r.magFilter=i,r.minFilter=i,r.generateMipmaps=!1,r.flipY=!1,r.needsUpdate=!0,r.userData.R=t,r}};function yf(e){return new qi({uniforms:{uTime:qu.time,uSunDir:{value:e.sunDir.clone()},uSunColor:{value:new G(1,.92,.78)},uSkyTop:{value:e.skyTop.clone()},uSkyHorizon:{value:e.skyHorizon.clone()},uDeep:{value:new G(1792620)},uShallow:{value:new G(4035733)},fogColor:{value:e.fogColor.clone()},fogDensity:{value:e.fogDensity},uRipple:{value:1}},vertexShader:`
      varying vec3 vW;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uSunDir, uSunColor, uSkyTop, uSkyHorizon, uDeep, uShallow, fogColor;
      uniform float fogDensity, uRipple;
      varying vec3 vW;
      float gFp;
      vec2 wave(vec2 p, vec2 dir, float k, float w, float a, float t) {
        float ph = dot(dir, p) * k + t * w;
        // fade waves whose wavelength gets close to the pixel footprint (prevents moire)
        float att = 1.0 - smoothstep(0.05, 0.22, gFp * k / 6.2832);
        return dir * cos(ph) * a * k * att;
      }
      void main() {
        vec2 p = vW.xz;
        gFp = max(length(fwidth(p)), 1e-4);
        float t = uTime;
        vec2 g = vec2(0.0);
        g += wave(p, normalize(vec2(1.0, 0.3)), 0.21, 1.3, 0.12, t);
        g += wave(p, normalize(vec2(0.6, -0.8)), 0.37, 1.9, 0.07, t);
        g += wave(p, normalize(vec2(-0.4, 1.0)), 0.71, 2.6, 0.035, t);
        g += wave(p, normalize(vec2(0.9, 0.9)), 1.31, 3.7, 0.018, t);
        g += wave(p, normalize(vec2(-1.0, 0.2)), 2.17, 5.1, 0.010, t);
        g += wave(p, normalize(vec2(0.2, -1.0)), 3.73, 6.9, 0.006, t);
        float dist = length(cameraPosition - vW);
        g *= mix(1.0, 0.25, smoothstep(60.0, 900.0, dist)) * uRipple;
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 V = normalize(cameraPosition - vW);
        float ndv = max(dot(N, V), 0.0);
        float fres = 0.02 + 0.98 * pow(1.0 - ndv, 5.0);
        vec3 R = reflect(-V, N);
        vec3 sky = mix(uSkyHorizon, uSkyTop, pow(clamp(R.y, 0.0, 1.0), 0.5));
        vec3 body = mix(uShallow, uDeep, smoothstep(0.0, 0.6, ndv) * 0.6 + 0.4);
        vec3 col = mix(body, sky, clamp(fres, 0.0, 1.0));
        float sp = pow(max(dot(R, uSunDir), 0.0), 260.0);
        col += uSunColor * sp * 3.0 * (1.0 - smoothstep(200.0, 1500.0, dist) * 0.7);
        col += uSunColor * pow(max(dot(R, uSunDir), 0.0), 40.0) * 0.03;
        float f = 1.0 - exp(-fogDensity * fogDensity * dist * dist);
        col = mix(col, fogColor, clamp(f, 0.0, 1.0));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function bf(e,t=9e3){let n=new Ii(t,t,1,1);n.rotateX(-Math.PI/2);let r=new K(n,yf(e));return r.position.y=0,r.name=`water`,r.matrixAutoUpdate=!1,r.updateMatrix(),r.renderOrder=1,r}function xf(){let e=232*Math.PI/180,t=38*Math.PI/180,n=new H(Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)).normalize(),r=e=>new G(e);return{sunDir:n,skyTop:r(3108800),skyHorizon:r(12178410),fogColor:r(12571878),fogDensity:62e-5,sunColor:r(16773596)}}function Sf(e){let t=new qi({side:1,depthWrite:!1,fog:!1,uniforms:{uSunDir:{value:e.sunDir},uTop:{value:e.skyTop},uHorizon:{value:e.skyHorizon},uTime:qu.time},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }
    `,fragmentShader:`
      uniform vec3 uSunDir, uTop, uHorizon;
      uniform float uTime;
      varying vec3 vDir;
      float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(h21(i), h21(i + vec2(1, 0)), u.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), u.x), u.y);
      }
      float fbm(vec2 p) {
        float s = 0.0, a = 0.5;
        for (int i = 0; i < 5; i++) { s += vn(p) * a; p = p * 2.03 + 17.1; a *= 0.5; }
        return s;
      }
      void main() {
        vec3 d = normalize(vDir);
        float h = d.y;
        vec3 col = mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.42));
        col = mix(col, uHorizon * 0.92, smoothstep(0.0, -0.08, h));
        float sd = max(dot(d, uSunDir), 0.0);
        col += vec3(1.0, 0.86, 0.62) * pow(sd, 6.0) * 0.22;
        col += vec3(1.0, 0.96, 0.88) * pow(sd, 900.0) * 30.0;
        col += vec3(1.0, 0.9, 0.7) * pow(sd, 90.0) * 0.6;
        if (h > 0.0) {
          vec2 uv = d.xz / (h + 0.12) * 0.75 + vec2(uTime * 0.0035, uTime * 0.0012);
          float c = fbm(uv * 1.1);
          float cover = smoothstep(0.5, 0.78, c) * smoothstep(0.0, 0.18, h);
          float shadeC = fbm(uv * 1.1 + vec2(0.08, 0.05));
          vec3 cc = mix(vec3(1.02, 1.0, 0.98), vec3(0.72, 0.76, 0.82), smoothstep(0.45, 0.85, shadeC));
          cc += vec3(1.0, 0.85, 0.6) * pow(sd, 8.0) * 0.25;
          col = mix(col, cc, cover * 0.9);
        }
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),n=new K(new Li(4800,32,16),t);return n.name=`sky`,n.frustumCulled=!1,n.renderOrder=-10,n}var Cf=(e,t,n,r)=>{let i=Math.abs(e-t);return i=Math.min(i,360-i),i>n?0:r*(.5+.5*Math.cos(i/n*Math.PI))},wf=(e,t,n,r=6)=>{let i=e;return n>360&&i<t&&(i+=360),Ul(t,t+r,i)*(1-Ul(n-r,n,i))},Tf=(e,t,n)=>{let r=eu(e*t+n,n*1.7,4);return 1-Math.abs(r*2-1)};function Ef(e){e=(e%360+360)%360;let t=.25+eu(e*.05,3.3,3)*.35,n=wf(e,214,372,14)*(2.7+.5*Math.sin((e-214)*.05)+eu(e*.09,1.1,4)*.9+Cf(e,268,16,.6)+Cf(e,343,10,.8)+Cf(e,8,12,.4));t=Math.max(t,n);let r=wf(e,112,206,7)*(5+Cf(e,119,8,-.6)-Cf(e,131,7,1.4)+wf(e,138,190,10)*1.9+eu(e*.25,7.1,3)*.55-Ul(186,206,e)*3.5);t=Math.max(t,r),t=Math.max(t,Cf(e,77,22,3.6)+Cf(e,82,6,.4)+eu(e*.3,2.2,3)*.25),t=Math.max(t,Cf(e,101,7,3.3)*(1-Math.abs(e-101)*.02));let i=wf(e,14,56,8);return t=X(t,.12+eu(e*.2,9.9,2)*.15,i),t}function Df(e){e=(e%360+360)%360;let t=wf(e,86,165,8);if(t<=0)return 0;let n=2+Tf(e,.55,4.2)*1.4+Tf(e,1.9,8.8)*.45;return n+=Cf(e,128,7,1.3)+Cf(e,122,2.5,.5)+Cf(e,134,2,.45)+Cf(e,106,4,.6),n*t}function Of(e,t,n,r,i){let a=[],o=[],s=[],c=new G;for(let s=0;s<=t;s++){let l=s/t*360,u=l*Math.PI/180,d=Math.sin(u),f=-Math.cos(u),p=r(l),m=e*Math.tan(Math.max(.01,p)*Math.PI/180);for(let t=0;t<=n;t++){let r=t/n,s=X(-80,m,r);a.push(d*e,s,f*e),i(c,l,p,r),o.push(c.r,c.g,c.b)}}for(let e=0;e<t;e++)for(let t=0;t<n;t++){let r=e*(n+1)+t,i=(e+1)*(n+1)+t;s.push(r,r+1,i+1,r,i+1,i)}let l=new fr;return l.setAttribute(`position`,new er(a,3)),l.setAttribute(`color`,new er(o,3)),l.setIndex(s),l}function kf(e){let t=e.skyHorizon,n=new G(3097909),r=new G(8224632),i=new G(11052956),a=new G(7307927),o=new G(16054267),s=Of(4300,1080,8,Ef,(e,a,o,s)=>{let c=wf(a,112,206,7),l=X(.62,.36,c)+wf(a,14,56,8)*.25;e.copy(n),c>.2&&s>.45&&s<.85&&e.lerp(i,.55*c*(.6+.4*eu(a*.8,s*6,2))),o>3&&s>.8&&e.lerp(r,.35),e.lerp(t,l*(1-s*.2))}),c=Of(4700,1440,8,Df,(e,n,r,i)=>{e.copy(a);let s=.55+eu(n*.7,2.5,3)*.25;r>2.4&&i>s&&e.lerp(o,Math.min(1,(i-s)/.15)*.9),e.lerp(t,.5*(1-i*.25))}),l=new wr({vertexColors:!0,fog:!1,side:2}),u=new ln,d=new K(c,l),f=new K(s,l);return d.renderOrder=-6,f.renderOrder=-5,d.frustumCulled=f.frustumCulled=!1,u.add(d,f),u.name=`mountains`,u}var Af=()=>new Promise(e=>setTimeout(e,0)),jf=class{constructor(e,t){this.renderer=e,this.scene=t,this.stats={enterable:0},this.special={},this.locations=Bl,this.clocks=[]}async build(e=()=>{}){let t=performance.now(),n=async(t,n)=>{e(t,n),await Af()};await n(`Shaping the hills of Geneva`,.02),this.T=new yu,this.T.compute(),this.C=new xu(this.T),this.B=new Du(200),this.M=td(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.signs=new Hu,this.nav=new rd,this.loot=[],this.footprints=[],this.reserver=new fd,this.env=xf(),this._registerMaterials(),await n(`Raising the cathedral and the landmarks`,.12),uf(this),await n(`Building the streets of the city`,.28),new bd(this).build(),await n(`Street furniture and trams`,.45),Nd(this),await n(`Planting chestnut trees`,.5),this.veg=new hf(this),this.veg.plant(),await n(`Collision`,.56),this.C.build(),await n(`Painting cobblestones`,.6);let r=this._paintGround();await n(`Assembling meshes`,.7),this._buildScene(r),await n(`Teaching bots the way around`,.8),this.nav.buildGrid(this),this.nav.finalize(),await n(`Drawing the map`,.95),this.mapImage=this._buildMapImage(),this.stats.buildMs=Math.round(performance.now()-t),this.stats.boxes=this.C.n,this.stats.navNodes=this.nav.n,this.stats.lootSpots=this.loot.length,e(`Ready`,1)}_registerMaterials(){let e=this.B,t=this.M;e.registerMaterial(`facade`,t.facade,{facade:!0});for(let n of[`plaster`,`stone`,`roof`,`wood`,`tile`,`metal`,`glass`,`paint`,`matte`,`hedge`])e.registerMaterial(n,t[n]);e.registerMaterial(`glow`,t.glow,{cast:!1,receive:!1}),this.signMat=new Yi({roughness:.6,alphaTest:.5,emissive:16777215,emissiveIntensity:.12}),e.registerMaterial(`sign`,this.signMat,{cast:!1}),this.flagMat=t.flagMaterial(Uu()),e.registerMaterial(`flag`,this.flagMat,{cast:!0})}_paintGround(){let e=new vf(2048,2);this.ground=e,e.fillAll(gf.ASPHALT),e.fillPolygon(Sl.poly,gf.COBBLE);for(let t of Fl)t.name.startsWith(`Quai`)&&e.stroke(t.pts,t.w/2+30,gf.PAVING);for(let t of this.footprints)t.style!==`old`&&e.fillOBB(t,gf.PAVING,t.landmark?4:3.2);for(let t of Fl)t.kind===`road`&&e.stroke(t.pts,t.w/2+3,gf.PAVING);for(let t of Fl)e.stroke(t.pts,t.w/2,_f[t.kind]??gf.ASPHALT);e.stroke(Ll.pts,Ll.halfWidth,gf.BALLAST);for(let t of Pl)e.fillPolygon(t.poly,_f[t.ground]??gf.PAVING);for(let t of Nl)e.fillPolygon(t.poly,t.ground===`gravel`?gf.GRAVEL:gf.GRASS);let t=Dl,n=(n,r,i,a,o)=>e.fillPolygon([t.at(n,i),t.at(r,i),t.at(r,a),t.at(n,a)],o);n(-170,170,-7,7,gf.GRAVEL),n(-170,170,25,31,gf.GRAVEL),n(-170,170,-30,-25,gf.GRAVEL);for(let e of[-130,-60,0,60,130])n(e-3,e+3,-75,75,gf.GRAVEL);return n(-140,-116,16,28,gf.PAVING),n(-60,60,52,62,gf.GRAVEL),e.stroke([[285,-45],[330,-25],[420,-22],[555,-32]],3.5,gf.GRAVEL),e.stroke([[310,28],[440,40],[570,30]],2.5,gf.GRAVEL),e.stroke([[420,-22],[430,40]],2.5,gf.GRAVEL),e.fillCircle(470,10,9,gf.GRAVEL),e.fillCircle(150,-330,12,gf.GRAVEL),e.texture()}_buildScene(e){let t=this.scene,n=this.env,r=this.M.groundMaterial(e,ju(),Mu(),Nu());this.groundMat=r,this.terrainGroup=this.T.buildMeshes(r),t.add(this.terrainGroup);let i=new Xi({vertexColors:!0});this.outer=this.T.buildOuterMesh(i),t.add(this.outer),this.signMat.map=this.signs.texture(),this.signMat.emissiveMap=this.signMat.map,this.signMat.needsUpdate=!0,this.staticGroup=this.B.build(),t.add(this.staticGroup),Object.assign(this.stats,this.staticGroup.userData.stats),this.veg.build(t),this.water=bf(n),t.add(this.water),this.sky=Sf(n),t.add(this.sky),this.mountains=kf(n),t.add(this.mountains),this._buildClocks(),this._buildDistantCity()}_buildClocks(){let e=Wu(),t=(t,n,r,i,a=0)=>{let o=new ji(i,40),s=o.attributes.uv;for(let e=0;e<s.count;e++)s.setX(e,t+s.getX(e)/3);for(let e=0;e<s.count;e++)s.setY(e,1-s.getY(e));let c=new K(o,new Yi({map:e,roughness:.8})),l=new ln;l.position.set(n[0],n[1],n[2]),l.rotation.order=`YXZ`,l.rotation.y=r,l.rotation.x=-a,l.add(c);let u=new Yi({color:t>.3&&t<.6?1776411:1118481,roughness:.5}),d=new K(new Ai(i*.09,i*.55,.05),u);d.geometry.translate(0,i*.25,.03);let f=new K(new Ai(i*.06,i*.85,.05),u);f.geometry.translate(0,i*.4,.06);let p=new K(new Ai(i*.025,i*.8,.04),new wr({color:13111342}));if(p.geometry.translate(0,i*.32,.09),l.add(d,f),t<.1){l.add(p);let e=new K(new ji(i*.08,16),new wr({color:13111342}));e.position.set(0,i*.68,.1),p.add(e)}this.scene.add(l),this.clocks.push({hour:d,minute:f,sec:t<.1?p:null})},n=this.special.flowerClock;n&&t(1/3,[n.x,n.y+.25,n.z],n.yaw,2.5,.6);let r=this.special.stationClock;r&&t(0,r.pos,r.yaw,r.r);let i=this.special.molardClock;i&&t(2/3,i.pos,i.yaw,i.r)}updateClocks(){let e=new Date,t=e.getSeconds()+e.getMilliseconds()/1e3,n=e.getMinutes()+t/60,r=e.getHours()%12+n/60;for(let e of this.clocks)e.hour.rotation.z=-(r/12)*Math.PI*2,e.minute.rotation.z=-(n/60)*Math.PI*2,e.sec&&(e.sec.rotation.z=-(Math.min(59,t)/58.5)*Math.PI*2)}_buildDistantCity(){let e=new Ai(1,1,1);e.translate(0,.5,0);let t=e.attributes.normal,n=new Float32Array(t.count*3);for(let e=0;e<t.count;e++){let r=t.getY(e)>.5?.42:1;n[e*3]=n[e*3+1]=n[e*3+2]=r}e.setAttribute(`color`,new Zn(n,3));let r=[],i=9,a=()=>(i=i*16807%2147483647,i/2147483647);for(let e=0;e<5200;e++){let e=a()*Math.PI*2,t=825+a()**1.6*1500,n=Math.cos(e)*t*1.15,i=Math.sin(e)*t*1.15;if(Math.abs(n)<812&&Math.abs(i)<812)continue;let o=this.T.rawHeight(n,i);if(o<1)continue;let s=Math.min(1,(Math.max(Math.abs(n),Math.abs(i))-800)/1500);r.push([n,o,i,12+a()*16,(12+a()*14)*(1-s*.55),11+a()*14,Math.round(a()*4)*(Math.PI/8)])}let o=new si(e,new Xi({vertexColors:!0}),r.length),s=new W,c=new ft,l=new G,u=[15129803,14208182,15722198,13616824,14472392,13155496,14865076];r.forEach((e,t)=>{s.compose(new H(e[0],e[1]-1,e[2]),c.setFromAxisAngle(new H(0,1,0),e[6]),new H(e[3],e[4],e[5])),o.setMatrixAt(t,s),l.setHex(u[Math.floor(a()*u.length)]),o.setColorAt(t,l)}),o.frustumCulled=!1,o.receiveShadow=!1,this.scene.add(o),this.distantCity=o}groundY(e,t,n=1e3){return this.C.support(e,t,.3,n)}isIndoorAt(e,t,n){return this.C.ceiling(e,n,.1,t+1.9)<t+14}_buildMapImage(){let e=1024,t=document.createElement(`canvas`);t.width=e,t.height=e;let n=t.getContext(`2d`),r=n.createImageData(e,e),i=this.ground,a=i.size/e,o={[gf.ASPHALT]:[118,118,116],[gf.PAVING]:[196,190,178],[gf.COBBLE]:[178,166,146],[gf.GRASS]:[126,160,92],[gf.GRAVEL]:[206,192,160],[gf.DIRT]:[150,120,90],[gf.BALLAST]:[126,116,104],[gf.QUAY]:[176,170,158]};for(let t=0;t<e;t++)for(let n=0;n<e;n++){let s=(n+.5)/e*vl-800,c=(t+.5)/e*vl-800,l=this.T.heightAt(s,c),u=(t*e+n)*4;if(l<0){let e=Math.min(1,-l/5);r.data[u]=70-e*20,r.data[u+1]=140-e*30,r.data[u+2]=178-e*20}else{let e=o[l<1.2?gf.QUAY:i.visible(Math.floor(t*a)*i.size+Math.floor(n*a))]||o[0],s=.9+Math.min(.2,l/120);r.data[u]=e[0]*s,r.data[u+1]=e[1]*s,r.data[u+2]=e[2]*s}r.data[u+3]=255}n.putImageData(r,0,0);let s=(t,n)=>[(t+800)/vl*e,(n+800)/vl*e];n.fillStyle=`#d8d4cc`;for(let t of xl){let[r,i]=s(...t.a),[a,o]=s(...t.b);n.save(),n.strokeStyle=`#d6d1c6`,n.lineWidth=t.w/vl*e,n.beginPath(),n.moveTo(r,i),n.lineTo(a,o),n.stroke(),n.restore()}for(let e of this.footprints){let t=du(e,0);n.beginPath(),t.forEach((e,t)=>{let[r,i]=s(e[0],e[1]);t===0?n.moveTo(r,i):n.lineTo(r,i)}),n.closePath(),n.fillStyle=e.landmark?`#8f857a`:e.enter?`#a39686`:`#b3aa9e`,n.fill(),n.strokeStyle=`rgba(60,50,40,0.45)`,n.lineWidth=.8,n.stroke()}return this.mapCanvas=t,t}},Mf=class{constructor(e){this.target=e,this.keys=new Set,this.pressed=new Set,this.released=new Set,this.mouseDX=0,this.mouseDY=0,this.buttons=new Set,this.mousePressed=new Set,this.mouseReleased=new Set,this.wheel=0,this.locked=!1,this.enabled=!0,this.onLockChange=null;let t=e=>{let t=e.target;return t&&(t.tagName===`INPUT`||t.tagName===`SELECT`||t.tagName===`TEXTAREA`)};window.addEventListener(`keydown`,e=>{t(e)||([`Tab`,`Space`,`ArrowUp`,`ArrowDown`,`AltLeft`,`AltRight`,`F1`,`ControlLeft`].includes(e.code)&&e.preventDefault(),e.ctrlKey&&[`KeyW`,`KeyS`,`KeyD`,`KeyR`,`KeyF`].includes(e.code)&&this.locked&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code))}),window.addEventListener(`keyup`,e=>{this.keys.delete(e.code),this.released.add(e.code)}),window.addEventListener(`blur`,()=>{this.keys.clear(),this.buttons.clear()}),window.addEventListener(`mousemove`,e=>{this.locked&&Math.abs(e.movementX)<400&&Math.abs(e.movementY)<400&&(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY)}),e.addEventListener(`mousedown`,e=>{this.buttons.add(e.button),this.mousePressed.add(e.button)}),window.addEventListener(`mouseup`,e=>{this.buttons.has(e.button)&&this.mouseReleased.add(e.button),this.buttons.delete(e.button)}),e.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`wheel`,e=>{this.locked&&(this.wheel+=Math.sign(e.deltaY))},{passive:!0}),document.addEventListener(`pointerlockchange`,()=>{this.locked=document.pointerLockElement===this.target,this.locked||this.buttons.clear(),this.onLockChange&&this.onLockChange(this.locked)})}requestLock(){if(!this.locked)try{let e=this.target.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(()=>this.target.requestPointerLock())}catch{this.target.requestPointerLock()}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}down(e){return this.enabled&&this.keys.has(e)}hit(e){return this.enabled&&this.pressed.has(e)}up(e){return this.released.has(e)}mouse(e){return this.enabled&&this.buttons.has(e)}mouseHit(e){return this.enabled&&this.mousePressed.has(e)}mouseUp(e){return this.mouseReleased.has(e)}endFrame(){this.pressed.clear(),this.released.clear(),this.mousePressed.clear(),this.mouseReleased.clear(),this.mouseDX=0,this.mouseDY=0,this.wheel=0}},Nf={AR:{f:1700,q:.7,decay:.09,body:.95,thump:120,crack:!0},SMG:{f:2300,q:.8,decay:.06,body:.75,thump:150,crack:!1},SG:{f:650,q:.6,decay:.22,body:1.15,thump:80,crack:!1},DMR:{f:1400,q:.7,decay:.14,body:1.1,thump:100,crack:!0},SR:{f:1150,q:.6,decay:.2,body:1.25,thump:85,crack:!0},PISTOL:{f:2600,q:.9,decay:.05,body:.7,thump:170,crack:!1}},Pf=class{constructor(){this.ctx=null,this.volume=.7,this.lx=0,this.ly=0,this.lz=0,this.active=0}init(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.volume;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,n.attack.value=.003,n.release.value=.2,this.master.connect(n),n.connect(t.destination);let r=t.sampleRate*2,i=t.createBuffer(1,r,t.sampleRate),a=i.getChannelData(0);for(let e=0;e<r;e++)a[e]=Math.random()*2-1;this.noise=i;let o=t.createBuffer(1,r,t.sampleRate),s=o.getChannelData(0),c=0;for(let e=0;e<r;e++)c=(c+.02*(Math.random()*2-1))/1.02,s[e]=c*3.5;this.brown=o;let l=t.sampleRate*1.6,u=t.createBuffer(2,l,t.sampleRate);for(let e=0;e<2;e++){let n=u.getChannelData(e);for(let e=0;e<l;e++){let r=e/t.sampleRate;n[e]=(Math.random()*2-1)*(1-e/l)**2.4*(r<.03?.2:1)*(Math.random()<.002?3:1)}}this.reverb=t.createConvolver(),this.reverb.buffer=u,this.revGain=t.createGain(),this.revGain.gain.value=.35,this.reverb.connect(this.revGain),this.revGain.connect(this.master),this.loops={},this.loops.wind=this._loop(this.noise,`bandpass`,600,.6),this.loops.plane=this._planeLoop(),this.loops.jet=this._loop(this.noise,`lowpass`,1200,.5,!0),this.loops.zone=this._zoneLoop(),this.loops.ambient=this._loop(this.brown,`lowpass`,400,.6),this.loops.ambient.gain.gain.value=.05,this.loops.engine=this._engineLoop()}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}_loop(e,t,n,r,i=!1){let a=this.ctx,o=a.createBufferSource();o.buffer=e,o.loop=!0;let s=a.createBiquadFilter();s.type=t,s.frequency.value=n,s.Q.value=r;let c=a.createGain();c.gain.value=0,o.connect(s),s.connect(c);let l=c,u=null;return i&&(u=this._panner(),c.connect(u),l=u),l.connect(this.master),o.start(),{src:o,filter:s,gain:c,panner:u}}_planeLoop(){let e=this.ctx,t=e.createGain();t.gain.value=0;let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=520;let r=this._panner();n.connect(t),t.connect(r),r.connect(this.master);let i=[];for(let[t,r]of[[61,.5],[62.3,.45],[122,.25],[183,.12]]){let a=e.createOscillator();a.type=`sawtooth`,a.frequency.value=t;let o=e.createGain();o.gain.value=r,a.connect(o),o.connect(n),a.start(),i.push(a)}let a=e.createBufferSource();a.buffer=this.noise,a.loop=!0;let o=e.createGain();return o.gain.value=.25,a.connect(o),o.connect(n),a.start(),{gain:t,panner:r,oscs:i,filter:n}}_engineLoop(){let e=this.ctx,t=e.createGain();t.gain.value=0;let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=900,n.connect(t),t.connect(this.master);let r=e.createOscillator(),i=e.createOscillator();r.type=`sawtooth`,i.type=`square`,r.frequency.value=40,i.frequency.value=80.5;let a=e.createGain();return a.gain.value=.3,r.connect(n),i.connect(a),a.connect(n),r.start(),i.start(),{gain:t,o1:r,o2:i,filter:n}}_zoneLoop(){let e=this.ctx,t=e.createGain();t.gain.value=0;let n=e.createOscillator();n.type=`sine`,n.frequency.value=78;let r=e.createOscillator();r.type=`square`,r.frequency.value=156.5;let i=e.createGain();return i.gain.value=.05,n.connect(t),r.connect(i),i.connect(t),t.connect(this.master),n.start(),r.start(),{gain:t}}_panner(){let e=this.ctx.createPanner();return e.panningModel=`HRTF`,e.distanceModel=`inverse`,e.refDistance=6,e.maxDistance=4e3,e.rolloffFactor=1,e}update(e,t){if(!this.ctx)return;let n=this.ctx,r=n.currentTime,i=n.listener,a=e.position;this.lx=a.x,this.ly=a.y,this.lz=a.z;let o=t.forward,s=t.up;i.positionX?(i.positionX.setTargetAtTime(a.x,r,.02),i.positionY.setTargetAtTime(a.y,r,.02),i.positionZ.setTargetAtTime(a.z,r,.02),i.forwardX.setTargetAtTime(o.x,r,.02),i.forwardY.setTargetAtTime(o.y,r,.02),i.forwardZ.setTargetAtTime(o.z,r,.02),i.upX.setTargetAtTime(s.x,r,.02),i.upY.setTargetAtTime(s.y,r,.02),i.upZ.setTargetAtTime(s.z,r,.02)):(i.setPosition(a.x,a.y,a.z),i.setOrientation(o.x,o.y,o.z,s.x,s.y,s.z));let c=this.loops,l=Y(t.windSpeed/60,0,1);if(c.wind.gain.gain.setTargetAtTime(l*.55+(t.altitude>60?.03:0),r,.2),c.wind.filter.frequency.setTargetAtTime(350+l*1400,r,.2),t.planePos){let e=c.plane;e.panner.positionX.setTargetAtTime(t.planePos.x,r,.05),e.panner.positionY.setTargetAtTime(t.planePos.y,r,.05),e.panner.positionZ.setTargetAtTime(t.planePos.z,r,.05),e.gain.gain.setTargetAtTime(t.inPlane?.5:2.2,r,.3),e.filter.frequency.setTargetAtTime(t.inPlane?380:650,r,.3)}else c.plane.gain.gain.setTargetAtTime(0,r,.5);if(t.jetPos){let e=c.jet;e.panner.positionX.value=t.jetPos.x,e.panner.positionY.value=t.jetPos.y+20,e.panner.positionZ.value=t.jetPos.z,e.gain.gain.setTargetAtTime(.9,r,.5)}if(c.zone.gain.gain.setTargetAtTime(t.inBlue?.12:0,r,.2),t.engine){let e=t.engine,n=(e.boat?55:38)+e.speed*(e.boat?3.2:4.2);c.engine.o1.frequency.setTargetAtTime(n,r,.08),c.engine.o2.frequency.setTargetAtTime(n*2.01,r,.08),c.engine.filter.frequency.setTargetAtTime(500+e.speed*60+e.throttle*500,r,.1),c.engine.gain.gain.setTargetAtTime(.1+e.throttle*.08,r,.1)}else c.engine.gain.gain.setTargetAtTime(0,r,.2);c.ambient.gain.gain.setTargetAtTime(t.ambient??.04,r,1)}dist(e){return Math.hypot(e.x-this.lx,e.y-this.ly,e.z-this.lz)}_out(e,t,n){let r=this.ctx.createGain();if(r.gain.value=t,n.direct||!e)return r.connect(this.master),r;let i=this._panner();return i.positionX.value=e.x,i.positionY.value=e.y,i.positionZ.value=e.z,n.ref&&(i.refDistance=n.ref),r.connect(i),i.connect(this.master),r}_noise(e,t,n,r=1){let i=this.ctx.createBufferSource();return i.buffer=this.noise,i.playbackRate.value=r,i.connect(n),i.start(e,Math.random()*1.5,t+.05),i}_env(e,t,n,r,i,a=1e-4){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(r,t+n),e.gain.exponentialRampToValueAtTime(a,t+n+i)}gunshot(e,t,n,r=!1){if(!this.ctx)return;let i=n?0:this.dist(t);if(i>1400||this.active>48)return;let a=this.ctx,o=Nf[e]||Nf.AR,s=a.currentTime+(n?0:Math.min(2.5,i/343)),c=Y(1-i/900,0,1),l=n?.9:Y(14/(8+i),.02,.9)*(r?.4:1),u=this._out(t,1,{direct:n,ref:12}),d=a.createBiquadFilter();d.type=`lowpass`,d.frequency.value=n?14e3:900+12e3*c**2,d.connect(u);let f=a.createBiquadFilter();f.type=`bandpass`,f.frequency.value=o.f*(.9+Math.random()*.2),f.Q.value=o.q;let p=a.createGain();f.connect(p),p.connect(d),this._env(p,s,.002,l*o.body*1.6,o.decay*(n?1.4:1+(1-c)*2)),this._noise(s,.6,f);let m=a.createOscillator();m.type=`sine`,m.frequency.setValueAtTime(o.thump*1.6,s),m.frequency.exponentialRampToValueAtTime(o.thump*.4,s+.12);let h=a.createGain();if(this._env(h,s,.003,l*1.1,.16),m.connect(h),h.connect(d),m.start(s),m.stop(s+.3),o.crack&&i<250){let e=a.createBiquadFilter();e.type=`highpass`,e.frequency.value=3500;let t=a.createGain();this._env(t,s,8e-4,l*.8,.025),e.connect(t),t.connect(d),this._noise(s,.05,e)}let g=a.createGain();g.gain.value=(n?.5:.9)*Math.max(l,.04),d.connect(g),g.connect(this.reverb),this.active++,setTimeout(()=>this.active--,700+(n?0:i/343*1e3))}explosion(e){if(!this.ctx)return;let t=this.ctx,n=this.dist(e),r=t.currentTime+Math.min(2.5,n/343),i=Y(30/(10+n),.03,1.2),a=this._out(e,1,{ref:20}),o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=700+3e3*Y(1-n/400,0,1),o.connect(a);let s=t.createGain();s.connect(o),this._env(s,r,.004,i*1.6,1.4),this._noise(r,1.6,s,.7);let c=t.createOscillator();c.frequency.setValueAtTime(90,r),c.frequency.exponentialRampToValueAtTime(28,r+.7);let l=t.createGain();this._env(l,r,.005,i*1.8,.8),c.connect(l),l.connect(o),c.start(r),c.stop(r+1);let u=t.createGain();u.gain.value=i*.8,o.connect(u),u.connect(this.reverb)}play(e,t,n={}){if(!this.ctx)return;let r=this.ctx,i=r.currentTime,a=n.gain??1;if(t&&!n.direct&&this.dist(t)>(e===`explosion`?1500:120)||this.active>60)return;if(e===`explosion`)return this.explosion(t);let o=this._out(t,a,n),s=(e,t,n,i,a,s=`bandpass`,c=1)=>{let l=r.createBiquadFilter();l.type=s,l.frequency.value=n,l.Q.value=i;let u=r.createGain();l.connect(u),u.connect(o),this._env(u,e,.003,a,t),this._noise(e,t+.05,l,c)},c=(e,t,n,i,a,s=`sine`)=>{let c=r.createOscillator();c.type=s,c.frequency.setValueAtTime(n,e),c.frequency.exponentialRampToValueAtTime(Math.max(20,i),e+t);let l=r.createGain();this._env(l,e,.003,a,t),c.connect(l),l.connect(o),c.start(e),c.stop(e+t+.05)};switch(e){case`step`:{let e=n.surf;s(i,.05,(e===8?500:e===1?700:e===2?1800:e===6?900:1100)*(.9+Math.random()*.25),1.4,.5),e===1&&c(i,.06,180,120,.15),e===2&&c(i,.08,2400,2e3,.05,`triangle`);break}case`impact`:s(i,.03,2500,2,.4,`highpass`);break;case`reload`:{let e=n.dur||2.2;s(i+.15,.04,2200,3,.7),s(i+e*.55,.05,1600,3,.9),s(i+e*.85,.05,2600,4,.8);break}case`dry`:s(i,.02,3e3,6,.6);break;case`switch`:s(i,.18,900,.6,.25),s(i+.25,.03,2400,4,.5);break;case`hit`:c(i,.04,1500,1300,.35,`square`);break;case`headshot`:c(i,.12,2600,2500,.3,`triangle`),c(i+.02,.1,3900,3800,.12,`sine`);break;case`kill`:c(i,.09,900,880,.35,`square`),c(i+.09,.14,1350,1300,.3,`square`);break;case`hurt`:s(i,.12,300,.8,.8,`lowpass`),c(i,.12,120,60,.6);break;case`heal`:{let e=n.dur||4;for(let t=0;t<e*2.5;t++)s(i+t*.4+Math.random()*.1,.25,1400+Math.random()*600,.6,.18);break}case`pickup`:s(i,.12,1200,.7,.35),s(i+.08,.03,2800,5,.25);break;case`throw`:s(i,.2,700,.5,.35,`bandpass`,.6);break;case`pin`:c(i,.06,3200,3e3,.25,`triangle`);break;case`bounce`:c(i,.07,700,500,.4,`triangle`);break;case`smoke`:s(i,2.2,3e3,.4,.4,`highpass`);break;case`land`:s(i,.15,220,.7,1,`lowpass`),c(i,.12,90,45,.6);break;case`splash`:s(i,.6,900,.5,.9,`bandpass`,.8);break;case`swim`:s(i,.35,700,.6,.35,`bandpass`,.7);break;case`vault`:s(i,.2,800,.6,.35);break;case`chute`:s(i,.5,400,.4,1,`lowpass`,.5),c(i,.25,160,90,.4);break;case`beep`:c(i,.12,880,880,.25,`square`),c(i+.18,.12,880,880,.25,`square`);break;case`ui`:c(i,.05,1200,1100,.15,`triangle`);break;case`win`:[523,659,784,1046].forEach((e,t)=>c(i+t*.16,.5,e,e,.22,`triangle`));break;case`crack`:s(i,.03,4200,1.5,.9,`highpass`),c(i,.05,900,300,.15);break;case`chirp`:{let e=2400+Math.random()*1600;for(let t=0;t<3;t++)c(i+t*.11,.07,e,e*1.35,.06,`sine`);break}}}},Ff=`geneva-royale-settings-v1`,If={playerName:`Calvin`,sensitivity:1,adsSensitivity:.75,fov:78,quality:`high`,bots:49,difficulty:`normal`,volume:.7,invertY:!1,showFps:!0};function Lf(){try{let e=document.createElement(`canvas`),t=e.getContext(`webgl2`)||e.getContext(`webgl`);if(!t)return`low`;let n=t.getExtension(`WEBGL_debug_renderer_info`),r=(n?t.getParameter(n.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER))+``,i=t.getExtension(`WEBGL_lose_context`);return i&&i.loseContext(),/swiftshader|llvmpipe|software|mali|adreno|powervr/i.test(r)?`low`:/intel/i.test(r)&&!/arc/i.test(r)?`medium`:`high`}catch{return`medium`}}function Rf(){try{let e=localStorage.getItem(Ff);if(e)return{...If,...JSON.parse(e)}}catch{}return{...If,quality:Lf()}}var zf=Rf();function Bf(){try{localStorage.setItem(Ff,JSON.stringify(zf))}catch{}}function Vf(){return zf.quality===`low`?0:zf.quality===`medium`?1:2}var Hf=2763822,Uf=1908256,Wf=8014374,Gf=6175262,Kf=10257760,qf=4870710,Jf=10510378,Yf=3948356,Xf={sg550:{muzzle:.78,parts:[[0,.05,.1,.06,.095,.44,Hf],[0,.07,.56,.026,.026,.44,Yf],[0,.06,.4,.062,.075,.24,Uf],[0,.04,-.26,.05,.1,.3,Uf],[0,-.045,0,.036,.11,.05,Uf],[0,-.08,.17,.035,.18,.075,Jf],[0,.115,.1,.022,.02,.22,Hf],[0,.02,.62,.03,.03,.08,Hf]]},m416:{muzzle:.74,parts:[[0,.05,.1,.058,.09,.42,Uf],[0,.07,.52,.025,.025,.42,Yf],[0,.06,.4,.06,.07,.22,Kf],[0,.03,-.24,.05,.09,.26,Kf],[0,-.04,0,.035,.1,.05,Uf],[0,-.07,.16,.035,.16,.07,Uf],[0,.11,.12,.022,.02,.24,Hf]]},akm:{muzzle:.72,parts:[[0,.05,.1,.06,.09,.4,Yf],[0,.07,.5,.026,.026,.42,Yf],[0,.05,.36,.06,.07,.2,Wf],[0,0,-.25,.05,.11,.3,Wf],[0,-.045,0,.035,.1,.05,Wf],[0,-.1,.18,.035,.2,.07,Jf],[0,.1,.32,.03,.02,.18,Yf]]},mp9:{muzzle:.36,parts:[[0,.04,.08,.05,.08,.26,Uf],[0,.05,.25,.022,.022,.14,Yf],[0,-.06,.02,.034,.18,.045,Uf],[0,-.03,.17,.03,.08,.03,Uf],[0,.03,-.12,.04,.03,.14,Hf],[0,.095,.08,.02,.02,.14,Hf]]},ump:{muzzle:.48,parts:[[0,.04,.1,.06,.1,.34,Uf],[0,.06,.33,.026,.026,.18,Yf],[0,-.04,0,.035,.1,.05,Uf],[0,-.08,.15,.035,.16,.06,Uf],[0,.02,-.2,.045,.08,.2,Uf],[0,.105,.1,.02,.02,.18,Hf]]},s686:{muzzle:.74,parts:[[0,.05,.06,.06,.07,.18,Yf],[.016,.07,.44,.028,.028,.6,Yf],[-.016,.07,.44,.028,.028,.6,Yf],[0,.04,.3,.05,.04,.26,Gf],[0,-.01,-.24,.05,.11,.34,Gf],[0,-.04,-.02,.035,.09,.06,Gf]]},mini14:{muzzle:.86,parts:[[0,.05,.1,.055,.08,.36,Yf],[0,.07,.56,.024,.024,.6,Yf],[0,.03,.36,.055,.07,.34,Wf],[0,0,-.26,.05,.11,.34,Wf],[0,-.04,0,.034,.09,.05,Wf],[0,-.06,.14,.033,.11,.06,Hf],[0,.105,.1,.02,.02,.16,Hf]]},k31:{muzzle:.98,parts:[[0,.05,.12,.05,.07,.34,Yf],[0,.07,.64,.024,.024,.68,Yf],[0,.03,.42,.055,.075,.5,Gf],[0,-.01,-.27,.05,.12,.38,Gf],[0,-.04,-.02,.034,.08,.06,Gf],[.04,.07,.04,.03,.03,.08,Yf],[0,-.03,.14,.04,.05,.08,Yf]]},awm:{muzzle:1,parts:[[0,.05,.12,.06,.08,.36,Hf],[0,.07,.62,.03,.03,.66,Hf],[0,.04,.4,.07,.08,.36,qf],[0,.01,-.28,.06,.13,.38,qf],[0,-.04,-.02,.036,.1,.06,qf],[0,-.06,.16,.036,.1,.07,Hf],[.045,.07,.06,.03,.03,.07,Hf],[0,.105,.12,.02,.02,.18,Hf]]},p226:{muzzle:.2,parts:[[0,.06,.08,.034,.045,.2,Uf],[0,0,0,.03,.12,.05,Uf],[0,.02,.08,.03,.03,.06,Uf]]},frag:{muzzle:.05,parts:[[0,0,0,.07,.09,.07,qf],[0,.055,0,.03,.03,.03,Yf]]},smoke:{muzzle:.05,parts:[[0,0,0,.065,.13,.065,7237746],[0,.075,0,.03,.025,.03,Yf]]}},Zf=new Map,Qf=null;function $f(){return Qf||=new Yi({vertexColors:!0,roughness:.55,metalness:.35}),Qf}function ep(e){return df(e.map(([e,t,n,r,i,a,o])=>{let s=new Ai(r,i,a);s.translate(e,t,n),s.deleteAttribute(`uv`);let c=new G(o),l=s.attributes.position.count,u=new Float32Array(l*3);for(let e=0;e<l;e++)u[e*3]=c.r,u[e*3+1]=c.g,u[e*3+2]=c.b;return s.setAttribute(`color`,new Zn(u,3)),s}),!1)}function tp(e){return Zf.has(e)||Zf.set(e,ep(Xf[e].parts)),Zf.get(e)}var np={reddot:[[0,.145,.1,.04,.045,.06,Uf],[0,.15,.13,.03,.03,.005,16724016]],holo:[[0,.145,.1,.045,.05,.07,Hf],[0,.15,.135,.035,.035,.005,16752672]],x2:[[0,.155,.1,.04,.04,.13,Hf]],x4:[[0,.16,.1,.045,.045,.19,Hf],[0,.16,.2,.055,.055,.03,Hf]],x8:[[0,.165,.12,.05,.05,.3,Hf],[0,.165,.27,.065,.065,.04,Hf],[0,.165,-.04,.06,.06,.04,Hf]]};function rp(e){let t=`scope:`+e;return Zf.has(t)||Zf.set(t,ep(np[e])),Zf.get(t)}function ip(e,t=null){let n=new ln,r=new K(tp(e),$f());if(r.castShadow=!0,n.add(r),t&&t.scope&&np[t.scope]){let e=new K(rp(t.scope),$f());e.castShadow=!0,n.add(e)}let i=new cn;return i.position.set(0,.07,Xf[e].muzzle),n.add(i),n.userData.muzzle=i,n.userData.id=e,n}function ap(e){return tp(e)}var op=[[`root`,-1,[0,0,0]],[`hips`,0,[0,.95,0]],[`spine`,1,[0,.12,0]],[`chest`,2,[0,.22,0]],[`neck`,3,[0,.2,0]],[`head`,4,[0,.07,0]],[`shoulderL`,3,[.19,.15,0]],[`forearmL`,6,[0,-.29,0]],[`handL`,7,[0,-.26,0]],[`shoulderR`,3,[-.19,.15,0]],[`forearmR`,9,[0,-.29,0]],[`handR`,10,[0,-.26,0]],[`thighL`,1,[.1,-.04,0]],[`shinL`,12,[0,-.43,0]],[`footL`,13,[0,-.42,0]],[`thighR`,1,[-.1,-.04,0]],[`shinR`,15,[0,-.43,0]],[`footR`,16,[0,-.42,0]]],sp=Object.fromEntries(op.map((e,t)=>[e[0],t])),cp=(()=>{let e=[];for(let t=0;t<op.length;t++){let[,n,r]=op[t],i=n>=0?e[n]:[0,0,0];e.push([i[0]+r[0],i[1]+r[1],i[2]+r[2]])}return e})(),lp=[15845797,14724230,13011554,10250309,7227954,16111293],up=[2825492,4861984,9067056,13214554,1710618,7031347,10526880],dp=[15921903,3100543,9055019,3955258,2236962,13214247,6969994,13658666,5929610,15259840,8007503,2779754],fp=[3095898,3815994,5917237,2763306,6974042,4872762,2042436,9075290],pp=[1710618,5913120,15263976,3816010,8006170];function mp(e,t,n,r,i,a){let o=new Ai(t,n,r),s=cp[sp[e]];o.translate(s[0]+i[0],s[1]+i[1],s[2]+i[2]);let c=o.attributes.position.count,l=new Uint16Array(c*4),u=new Float32Array(c*4),d=new Float32Array(c*3),f=new G(a);for(let t=0;t<c;t++)l[t*4]=sp[e],u[t*4]=1,d[t*3]=f.r,d[t*3+1]=f.g,d[t*3+2]=f.b;return o.setAttribute(`skinIndex`,new Qn(l,4)),o.setAttribute(`skinWeight`,new er(u,4)),o.setAttribute(`color`,new er(d,3)),o.deleteAttribute(`uv`),o}function hp(e){let t=[];t.push(mp(`hips`,.34,.2,.21,[0,-.02,0],e.pants)),t.push(mp(`spine`,.32,.24,.19,[0,.1,0],e.shirt)),t.push(mp(`chest`,.4,.3,.22,[0,.1,0],e.shirt)),t.push(mp(`neck`,.1,.1,.1,[0,.03,0],e.skin)),t.push(mp(`head`,.21,.25,.23,[0,.12,.01],e.skin)),t.push(mp(`head`,.23,.07,.25,[0,.23,-.005],e.hair)),t.push(mp(`head`,.23,.16,.06,[0,.16,-.11],e.hair)),t.push(mp(`head`,.15,.03,.02,[0,.15,.125],1710618));for(let n of[`L`,`R`]){let r=n===`L`?1:-1;t.push(mp(`shoulder`+n,.11,.3,.11,[.01*r,-.14,0],e.sleeves?e.shirt:e.skin)),t.push(mp(`forearm`+n,.095,.27,.095,[0,-.13,0],e.skin)),t.push(mp(`hand`+n,.085,.1,.06,[0,-.04,.01],e.gloves||e.skin)),t.push(mp(`thigh`+n,.15,.44,.16,[0,-.2,0],e.pants)),t.push(mp(`shin`+n,.125,.42,.135,[0,-.2,0],e.pants)),t.push(mp(`foot`+n,.115,.08,.26,[0,-.03,.06],e.shoes))}return df(t,!1)}var gp=new Map;function _p(){return gp.has(`body`)||gp.set(`body`,new Yi({vertexColors:!0,roughness:.82,metalness:0})),gp.get(`body`)}function vp(e,t=.7,n=.1){let r=e+`:`+t;return gp.has(r)||gp.set(r,new Yi({color:e,roughness:t,metalness:n})),gp.get(r)}function yp(e=Math.random){let t=t=>t[Math.floor(e()*t.length)];return{skin:t(lp),hair:t(up),shirt:t(dp),pants:t(fp),shoes:t(pp),sleeves:e()<.55,gloves:e()<.2?2763306:null}}var bp={skin:15845797,hair:2825492,shirt:15921903,pants:3095898,shoes:1710618,sleeves:!1,gloves:null},xp=class{constructor(e){this.group=new ln;let t=[];for(let e=0;e<op.length;e++){let n=new Jr;n.name=op[e][0];let r=op[e][2];n.position.set(r[0],r[1],r[2]),t.push(n),op[e][1]>=0&&t[op[e][1]].add(n)}this.bones=t,this.b=Object.fromEntries(op.map((e,n)=>[e[0],t[n]]));let n=new qr(hp(e),_p());n.add(t[0]),n.bind(new Qr(t)),n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1,this.mesh=n,this.group.add(n),this.phase=Math.random()*10,this.st={crouch:0,aim:0,speedS:0,swim:0,ff:0,chute:0,dead:0,pitch:0,lean:0,hold:0},this.gear={helmet:null,vest:null,pack:null},this.weaponMeshes={},this.handWeapon=null,this.backWeapon=null,this.deathSide=Math.random()<.5?-1:1,this.recoilKick=0}setGear(e,t){let n=this.gear[e];if(n&&n.level===t||(n&&n.mesh.parent.remove(n.mesh),this.gear[e]=null,!t))return;let r;if(e===`helmet`){let e=[0,5595194,3882818,2898474][t],n=new Ai(.255,.15,.27);if(n.translate(0,.22,0),r=new K(n,vp(e,.6,.2)),t===3){let e=new K(new Ai(.2,.05,.03),vp(1118481,.3,.5));e.position.set(0,.17,.135),r.add(e)}this.b.head.add(r)}else if(e===`vest`){let e=[0,7039818,4016698,2829872][t],n=new Ai(.44,.36,.27);if(n.translate(0,.08,.005),r=new K(n,vp(e,.85)),t>=2){let e=new K(new Ai(.3,.09,.05),vp(2763298,.9));e.position.set(0,-.02,.15),r.add(e)}this.b.chest.add(r)}else{let e=[0,8022602,4872762,3815994][t],n=.32+t*.07,i=new Ai(.34,n,.18+t*.03);i.translate(0,.07-(t-1)*.03,-.22-t*.015),r=new K(i,vp(e,.9));let a=new K(new Mi(.06,.06,.34,8),vp(5917237,.9));a.rotation.z=Math.PI/2,a.position.set(0,.07+n/2-(t-1)*.03,-.22-t*.015),r.add(a),this.b.chest.add(r)}r.castShadow=!0,r.traverse(e=>e.castShadow=!0),this.gear[e]={level:t,mesh:r}}setWeapons(e,t,n=null){let r=(e,t)=>e+(t&&t.scope?`:`+t.scope:``);if(this.handKey!==r(e,n)){if(this.handWeapon&&this.handWeapon.parent.remove(this.handWeapon),this.handWeapon=null,e){let t=ip(e,n);this.handWeapon=t,this.b.chest.add(t)}this.handKey=r(e,n)}if(this.backKey!==t){if(this.backWeapon&&this.backWeapon.parent.remove(this.backWeapon),this.backWeapon=null,t){let e=ip(t,null);e.position.set(.05,.12,-.2),e.rotation.set(0,0,.9),e.rotation.order=`ZYX`,e.rotation.set(0,Math.PI,-.8),this.backWeapon=e,this.b.chest.add(e)}this.backKey=t}this.handKind=e?e===`p226`?`pistol`:e===`frag`||e===`smoke`?`throw`:`rifle`:`none`}muzzleWorld(e){return this.handWeapon&&this.handWeapon.userData.muzzle?(this.handWeapon.userData.muzzle.getWorldPosition(e),!0):!1}update(e,t){let n=this.st,r=this.b;n.crouch=Kl(n.crouch,+!!t.crouch,10,e),n.aim=Kl(n.aim,+!!t.aiming,14,e),n.speedS=Kl(n.speedS,t.speed,8,e),n.swim=Kl(n.swim,+(t.mode===`swim`),6,e),n.ff=Kl(n.ff,+(t.mode===`freefall`),4,e),n.chute=Kl(n.chute,+(t.mode===`parachute`),5,e),n.dead=Kl(n.dead,+(t.mode===`dead`),t.mode===`dead`?4:20,e),n.pitch=Kl(n.pitch,t.pitch,18,e),this.recoilKick=Kl(this.recoilKick,0,12,e);let i=n.speedS,a=t.sprint&&i>4.5;this.phase+=e*(i*(a?1.5:1.85)+(n.swim>.5?3.5:0));let o=this.phase,s=Math.sin(o),c=Math.cos(o),l=Y(i/4.5,0,1.2)*(a?1:.75)*(1-n.swim)*(1-n.ff)*(1-n.chute)*(1-n.dead),u=n.crouch*(1-n.swim)*(1-n.ff)*(1-n.chute),d=+(t.mode===`air`);r.thighL.rotation.set(-s*.65*l-u*1.25-d*.5-n.chute*.35-n.ff*.2,0,.05+n.ff*.35),r.thighR.rotation.set(s*.65*l-u*1.25-d*.2-n.chute*.2-n.ff*.2,0,-.05-n.ff*.35),r.shinL.rotation.set(Math.max(0,c)*1*l+u*2+d*.8+n.ff*.9+n.chute*.3,0,0),r.shinR.rotation.set(Math.max(0,-c)*1*l+u*2+d*.4+n.ff*.9+n.chute*.2,0,0),r.footL.rotation.x=-u*.75,r.footR.rotation.x=-u*.75,n.swim>.01&&(r.thighL.rotation.x+=Math.sin(o*2)*.35*n.swim,r.thighR.rotation.x-=Math.sin(o*2)*.35*n.swim);let f=Math.abs(s)*.045*l;r.hips.position.y=.95-u*.44+f,r.hips.position.z=-u*.08,r.hips.rotation.y=s*.08*l;let p=n.pitch*(1-n.ff)*(1-n.dead)*(1-n.swim),m=u*.28+(a?.2:0)+(t.healing?.25:0);if(r.spine.rotation.set(m-p*.35,-s*.05*l,0),r.chest.rotation.set(-p*.35-this.recoilKick*.4,-s*.06*l+(t.aiming?.08:0),0),r.neck.rotation.set(-p*.15,0,0),r.head.rotation.set(-p*.15-n.ff*.9-n.swim*.9,0,0),(t.hold===`rifle`||t.hold===`pistol`)&&!a&&n.swim<.5&&n.ff<.5&&n.chute<.5&&!t.healing){let e=t.hold===`pistol`,i=n.aim;if(r.shoulderR.rotation.set(-.95-i*.45-(e?.25:0),0,-.12+(e?.15:0)),r.forearmR.rotation.set(-1.05+i*.35+(e?.55:0),0,0),r.shoulderL.rotation.set(-1.2-i*.35-(e?.15:0),0,.42+(e?.2:0)),r.forearmL.rotation.set(-.55+i*.1-(e?.4:0),.2,0),t.reloading){let e=Math.sin(t.reloadT*9)*.3;r.shoulderL.rotation.x+=.5+e,r.forearmL.rotation.x-=.6}}else if(t.hold===`throw`&&n.swim<.5){let e=+!!t.cooking;r.shoulderR.rotation.set(-.6-e*2,0,-.2-e*.3),r.forearmR.rotation.set(-.9-e*.4,0,0),r.shoulderL.rotation.set(-.4-e*.8,0,.3),r.forearmL.rotation.set(-.5,0,0)}else if(t.healing)r.shoulderR.rotation.set(-.7,0,-.35),r.forearmR.rotation.set(-1.3+Math.sin(o*4+t.healT*10)*.2,0,0),r.shoulderL.rotation.set(-.7,0,.35),r.forearmL.rotation.set(-1.3,0,0);else{let e=a?1:.6;if(r.shoulderR.rotation.set(-s*.7*l*e-n.chute*2.7-d*1.2,0,-.08-n.ff*1.3+n.chute*.25),r.forearmR.rotation.set(-.35-(a?.9:.2)*l-n.ff*.5-n.chute*.3,0,0),r.shoulderL.rotation.set(s*.7*l*e-n.chute*2.7-d*1.2,0,.08+n.ff*1.3-n.chute*.25),r.forearmL.rotation.set(-.35-(a?.9:.2)*l-n.ff*.5-n.chute*.3,0,0),n.swim>.01){let e=o*1;r.shoulderR.rotation.x=-1.6+Math.sin(e)*1.4,r.shoulderL.rotation.x=-1.6-Math.sin(e)*1.4,r.shoulderR.rotation.z=-.3,r.shoulderL.rotation.z=.3}}let h=r.root,g=n.dead*(Math.PI/2)*.97;if(h.rotation.set(n.ff*1.35+n.swim*1.25-g*+(this.deathSide>0),0,g*(this.deathSide>0?0:1)*-1),h.position.y=n.dead*.14-n.swim*.55+n.ff*.9,h.position.z=-n.ff*.6-n.dead*.6*(this.deathSide>0),this.handWeapon){let e=!a&&n.swim<.5&&n.ff<.5&&n.chute<.5&&!t.healing;this.handWeapon.visible=e||t.hold===`throw`;let r=t.hold===`pistol`;this.handWeapon.position.set(r?-.06:-.1,r?.12+n.aim*.08:.06+n.aim*.12,r?.42:.22+n.aim*.04-this.recoilKick*.06),this.handWeapon.rotation.set(-this.recoilKick*.3,0,0),t.hold===`throw`&&this.handWeapon.position.set(-.22,t.cooking?.45:0,t.cooking?-.05:.2)}this.backWeapon&&(this.backWeapon.visible=n.swim<.5)}},Sp={556:{name:`5.56mm`,weight:.4,stack:30,color:5208634},762:{name:`7.62mm`,weight:.5,stack:30,color:9067050},"9mm":{name:`9mm`,weight:.3,stack:30,color:12100170},"12g":{name:`12 Gauge`,weight:1,stack:10,color:11020842},300:{name:`.300 Magnum`,weight:1,stack:10,color:2771594}},Cp={sg550:{name:`SG 550`,cls:`AR`,ammo:`556`,mag:30,extMag:40,rpm:700,dmg:41,vel:905,modes:[`auto`,`single`],recoil:.62,recoilH:.32,spread:2.2,adsSpread:.12,reload:2.4,range:600,scopes:!0,swiss:!0},m416:{name:`M416`,cls:`AR`,ammo:`556`,mag:30,extMag:40,rpm:690,dmg:40,vel:880,modes:[`auto`,`single`],recoil:.58,recoilH:.36,spread:2.3,adsSpread:.13,reload:2.2,range:580,scopes:!0},akm:{name:`AKM`,cls:`AR`,ammo:`762`,mag:30,extMag:40,rpm:600,dmg:47,vel:715,modes:[`auto`,`single`],recoil:.9,recoilH:.5,spread:2.6,adsSpread:.16,reload:2.6,range:520,scopes:!0},mp9:{name:`MP9`,cls:`SMG`,ammo:`9mm`,mag:30,extMag:40,rpm:1e3,dmg:25,vel:400,modes:[`auto`,`single`],recoil:.34,recoilH:.3,spread:1.9,adsSpread:.2,reload:1.8,range:200,scopes:!0,swiss:!0},ump:{name:`UMP45`,cls:`SMG`,ammo:`9mm`,mag:25,extMag:35,rpm:650,dmg:35,vel:360,modes:[`auto`,`single`],recoil:.4,recoilH:.26,spread:1.8,adsSpread:.2,reload:2,range:220,scopes:!0},s686:{name:`S686`,cls:`SG`,ammo:`12g`,mag:2,extMag:2,rpm:260,dmg:24,pellets:9,pelletSpread:3.2,vel:370,modes:[`single`],recoil:2.8,recoilH:.6,spread:2,adsSpread:1.2,reload:2.8,range:60,scopes:!1},mini14:{name:`Mini 14`,cls:`DMR`,ammo:`556`,mag:20,extMag:30,rpm:300,dmg:46,vel:990,modes:[`single`],recoil:1.2,recoilH:.3,spread:3,adsSpread:.05,reload:2.6,range:900,scopes:!0},k31:{name:`K31`,cls:`SR`,ammo:`762`,mag:6,extMag:6,rpm:46,dmg:79,vel:780,modes:[`single`],recoil:2.6,recoilH:.4,spread:4,adsSpread:.02,reload:3.4,range:1e3,scopes:!0,bolt:!0,swiss:!0},p226:{name:`P226`,cls:`PISTOL`,ammo:`9mm`,mag:15,extMag:20,rpm:400,dmg:35,vel:350,modes:[`single`],recoil:.9,recoilH:.4,spread:1.6,adsSpread:.3,reload:1.6,range:120,scopes:!1,swiss:!0},awm:{name:`AWM`,cls:`SR`,ammo:`300`,mag:5,extMag:7,rpm:32,dmg:105,vel:945,modes:[`single`],recoil:3.2,recoilH:.5,spread:4,adsSpread:.01,reload:4.2,range:1200,scopes:!0,bolt:!0,crate:!0}},wp={AR:`primary`,SMG:`primary`,SG:`primary`,DMR:`primary`,SR:`primary`,PISTOL:`pistol`};function Tp(e){let t=Cp[e];return{AR:4,DMR:3,SR:3,SMG:2.5,SG:2,PISTOL:0}[t.cls]+(t.crate?2:0)}var Ep={helmet1:{name:`Helmet (Lv.1)`,type:`helmet`,level:1,dur:80,reduce:.3},helmet2:{name:`Helmet (Lv.2)`,type:`helmet`,level:2,dur:150,reduce:.4},helmet3:{name:`Helmet (Lv.3)`,type:`helmet`,level:3,dur:230,reduce:.55},vest1:{name:`Vest (Lv.1)`,type:`vest`,level:1,dur:200,reduce:.3},vest2:{name:`Vest (Lv.2)`,type:`vest`,level:2,dur:220,reduce:.4},vest3:{name:`Vest (Lv.3)`,type:`vest`,level:3,dur:250,reduce:.55},pack1:{name:`Backpack (Lv.1)`,type:`pack`,level:1,cap:100},pack2:{name:`Backpack (Lv.2)`,type:`pack`,level:2,cap:150},pack3:{name:`Backpack (Lv.3)`,type:`pack`,level:3,cap:200}},Dp={bandage:{name:`Bandage`,weight:2,time:4,heal:10,cap:75,stack:5},firstaid:{name:`First Aid Kit`,weight:10,time:6,healTo:75,cap:75,stack:1},medkit:{name:`Med Kit`,weight:20,time:8,healTo:100,cap:100,stack:1},drink:{name:`Energy Drink`,weight:4,time:4,boost:40,stack:2},painkiller:{name:`Painkiller`,weight:10,time:6,boost:60,stack:1}},Op={reddot:{name:`Red Dot Sight`,kind:`scope`,zoom:1,weight:8},holo:{name:`Holographic Sight`,kind:`scope`,zoom:1,weight:8},x2:{name:`2x Scope`,kind:`scope`,zoom:2,weight:10},x4:{name:`4x ACOG`,kind:`scope`,zoom:4,weight:12},x8:{name:`8x CQBSS`,kind:`scope`,zoom:8,weight:15},extmag:{name:`Extended Mag`,kind:`mag`,weight:8},comp:{name:`Compensator`,kind:`muzzle`,weight:6}},kp={frag:{name:`Frag Grenade`,weight:12,fuse:5},smoke:{name:`Smoke Grenade`,weight:10,fuse:2}};function Ap(e,t){let n=Cp[e],r=Op[t];return!n||!r?!1:r.kind===`scope`?n.cls===`PISTOL`||n.cls===`SG`?r.zoom<=1:r.zoom>=8?n.cls===`SR`||n.cls===`DMR`:!0:r.kind===`mag`?n.cls!==`SG`&&n.cls!==`SR`||e===`awm`:r.kind===`muzzle`&&n.cls!==`SG`}function jp(e){return e.kind===`weapon`?Cp[e.id].name:e.kind===`ammo`?`${Sp[e.id].name} ×${e.count}`:e.kind===`armor`?Ep[e.id].name:e.kind===`med`?Dp[e.id].name+(e.count>1?` ×${e.count}`:``):e.kind===`att`?Op[e.id].name:e.kind===`throw`?kp[e.id].name+(e.count>1?` ×${e.count}`:``):`?`}function Mp(e){return e.kind===`ammo`?Sp[e.id].weight*e.count:e.kind===`med`?Dp[e.id].weight*e.count:e.kind===`att`?Op[e.id].weight:e.kind===`throw`?kp[e.id].weight*e.count:0}function Np(e,t=0){return{kind:`weapon`,id:e,loaded:t,att:{scope:null,mag:null,muzzle:null},mode:0}}var Pp=(e,t)=>{let n=0;for(let e of t)n+=e[1];let r=e()*n;for(let e of t)if(r-=e[1],r<=0)return e[0];return t[t.length-1][0]};function Fp(e=1,t=Math.random){let n=[],r=Math.max(0,e-1),i=Pp(t,[[`weapon`,30+r*25],[`ammo`,20],[`armor`,15+r*10],[`med`,17],[`att`,10+r*6],[`throw`,6]]);if(i===`weapon`){let e=Pp(t,[[`p226`,22-r*15],[`mp9`,12],[`ump`,12],[`s686`,12],[`sg550`,10+r*12],[`m416`,10+r*10],[`akm`,9+r*8],[`mini14`,5+r*8],[`k31`,3+r*7]]);n.push(Np(e,0));let i=Cp[e],a=t()<.5?2:1;for(let e=0;e<a;e++)n.push({kind:`ammo`,id:i.ammo,count:Sp[i.ammo].stack})}else if(i===`ammo`){let e=Pp(t,[[`556`,30],[`762`,24],[`9mm`,26],[`12g`,14]]);n.push({kind:`ammo`,id:e,count:Sp[e].stack})}else if(i===`armor`){let e=Pp(t,[[`helmet`,38],[`vest`,34],[`pack`,28]]),i=Pp(t,[[1,60-r*40],[2,32+r*18],[3,6+r*14]]);n.push({kind:`armor`,id:(e===`pack`?`pack`:e)+i})}else if(i===`med`){let e=Pp(t,[[`bandage`,45],[`firstaid`,28],[`medkit`,4+r*6],[`drink`,16],[`painkiller`,7]]);n.push({kind:`med`,id:e,count:e===`bandage`?5:1})}else if(i===`att`){let e=Pp(t,[[`reddot`,22],[`holo`,14],[`x2`,18],[`x4`,10+r*8],[`x8`,2+r*4],[`extmag`,22],[`comp`,16]]);n.push({kind:`att`,id:e})}else{let e=Pp(t,[[`frag`,65],[`smoke`,35]]);n.push({kind:`throw`,id:e,count:1})}return n}function Ip(e=Math.random){let t=Np(e()<.6?`awm`:`sg550`,0);t.att.scope=t.id===`awm`?`x8`:`x4`,t.att.mag=`extmag`,t.id!==`awm`&&(t.att.muzzle=`comp`);let n=Cp[t.id];return t.loaded=t.att.mag?n.extMag:n.mag,[t,{kind:`ammo`,id:n.ammo,count:t.id===`awm`?20:60},{kind:`armor`,id:e()<.5?`helmet3`:`vest3`},{kind:`med`,id:`medkit`,count:1},{kind:`med`,id:`painkiller`,count:1},{kind:`throw`,id:`frag`,count:2}]}var Lp=20,Rp=5.4,zp=.32,Bp=1.78,Vp=1.22,Hp=.52,Up=-1.25,Wp=1,Gp=new H,Kp=[0,0],qp={h:0,surf:0,box:-1},Jp=class{constructor(e,{name:t,isPlayer:n=!1,outfit:r,skill:i=.6}){this.game=e,this.id=Wp++,this.name=t,this.isPlayer=n,this.skill=i,this.pos=new H,this.vel=new H,this.yaw=0,this.pitch=0,this.mode=`plane`,this.onGround=!1,this.crouching=!1,this.sprinting=!1,this.health=100,this.boost=0,this.alive=!0,this.kills=0,this.damageDealt=0,this.killer=null,this.helmet=null,this.vest=null,this.pack=0,this.inv={ammo:{556:0,762:0,"9mm":0,"12g":0,300:0},meds:{bandage:0,firstaid:0,medkit:0,drink:0,painkiller:0},throws:{frag:0,smoke:0},atts:[]},this.weapons=[null,null,null],this.active=-1,this.throwType=`frag`,this.action=null,this.cooldown=0,this.bloom=0,this.shotsInBurst=0,this.cooking=0,this.input={mx:0,mz:0,sprint:!1,crouch:!1,jump:!1,fire:!1,firePressed:!1,aim:!1,reload:!1,interact:!1,slot:-2,heal:null,cancel:!1,deploy:!1,dive:0},this.aimOrigin=new H,this.aimDir=new H(0,0,-1),this.model=new xp(r),this.root=this.model.group,this.fallStartY=0,this.lastStepPhase=0,this.stepAcc=0,this.surface=$.STONE,this.lastDamageTime=-100,this.lastAttacker=null,this.lastHitDir=null,this.deathTime=0,this.crateDropped=!1,this.parachute=null,this.inBlue=!1,this.placement=0,this.vehicle=null,this.vehicleInput={throttle:0,steer:0,brake:!1,boost:!1},this.hitboxes={headY:1.62,torsoA:.95,torsoB:1.45,legA:.1,legB:.92,rHead:.15,rTorso:.24,rLeg:.18},this.anim={speed:0,crouch:!1,aiming:!1,mode:`ground`,pitch:0,hold:`none`,sprint:!1,reloading:!1,reloadT:0,healing:!1,healT:0,cooking:!1}}get height(){return this.crouching?Vp:Bp}get weapon(){return this.active>=0&&this.active<=2?this.weapons[this.active]:null}get weaponDef(){let e=this.weapon;return e?Cp[e.id]:null}eyePos(e=new H){let t;return t=this.mode===`swim`?1.42:this.mode===`freefall`?1:this.crouching?1.12:1.64,e.set(this.pos.x,this.pos.y+t,this.pos.z)}magSize(e){let t=Cp[e.id];return e.att.mag?t.extMag:t.mag}capacity(){return 50+(this.vest?50:0)+(this.pack?Ep[`pack`+this.pack].cap:0)}weight(){let e=0;for(let[t,n]of Object.entries(this.inv.ammo))e+=Sp[t].weight*n;for(let[t,n]of Object.entries(this.inv.meds))e+=Dp[t].weight*n;for(let[t,n]of Object.entries(this.inv.throws))e+=kp[t].weight*n;for(let t of this.inv.atts)e+=Op[t].weight;return e}freeWeight(){return this.capacity()-this.weight()}fits(e,t,n){let r=e===`ammo`?Sp[t].weight:e===`med`?Dp[t].weight:e===`throw`?kp[t].weight:Op[t].weight;return Math.max(0,Math.min(n,Math.floor((this.freeWeight()+1e-6)/r)))}takeItem(e){let t={taken:!1,remainder:null,dropped:[]};if(e.kind===`weapon`){let n=wp[Cp[e.id].cls],r;r=n===`pistol`?2:this.weapons[0]?this.weapons[1]?this.isPlayer?+(this.active===1):+(Tp(this.weapons[1].id)<Tp(this.weapons[0].id)):1:0;let i=this.weapons[r];i&&t.dropped.push(i),this.weapons[r]=e;for(let t=this.inv.atts.length-1;t>=0;t--){let n=this.inv.atts[t],r=Op[n].kind;!e.att[r]&&Ap(e.id,n)&&(e.att[r]=n,this.inv.atts.splice(t,1))}if(i){for(let t of[`scope`,`mag`,`muzzle`]){let n=i.att[t];n&&!e.att[t]&&Ap(e.id,n)&&(e.att[t]=n,i.att[t]=null)}i.loaded>0&&(this.inv.ammo[Cp[i.id].ammo]+=i.loaded,i.loaded=0)}return(this.active===-1||this.active===3||this.active===r&&i)&&this.switchTo(r,!0),t.taken=!0,this.refreshModel(),t}if(e.kind===`armor`){let n=Ep[e.id];if(n.type===`pack`){if(this.pack>=n.level)return t;this.pack&&t.dropped.push({kind:`armor`,id:`pack`+this.pack}),this.pack=n.level}else{let r=this[n.type];if(r){let i=Ep[r.id];if(i.level>n.level||i.level===n.level&&r.dur>=(e.dur??n.dur)-1)return t;t.dropped.push({kind:`armor`,id:r.id,dur:r.dur})}this[n.type]={id:e.id,dur:e.dur??n.dur}}return t.taken=!0,this.refreshModel(),t}if(e.kind===`att`){let n=Op[e.id].kind,r=[this.active,0,1,2].filter(e=>e>=0&&e<=2);for(let i of r){let r=this.weapons[i];if(r&&!r.att[n]&&Ap(r.id,e.id))return r.att[n]=e.id,t.taken=!0,this.refreshModel(),t}if(n===`scope`)for(let n of r){let r=this.weapons[n];if(r&&r.att.scope&&Ap(r.id,e.id)&&Op[e.id].zoom>Op[r.att.scope].zoom&&(Cp[r.id].cls===`SR`||Cp[r.id].cls===`DMR`||Op[e.id].zoom<=4)){let n=r.att.scope;return r.att.scope=e.id,this.fits(`att`,n,1)?this.inv.atts.push(n):t.dropped.push({kind:`att`,id:n}),t.taken=!0,this.refreshModel(),t}}return this.fits(`att`,e.id,1)&&(this.inv.atts.push(e.id),t.taken=!0),t}let n=e.kind===`ammo`?this.inv.ammo:e.kind===`med`?this.inv.meds:this.inv.throws,r=this.fits(e.kind,e.id,e.count);return r<=0||(n[e.id]+=r,t.taken=!0,r<e.count&&(t.remainder={...e,count:e.count-r}),e.kind===`throw`&&this.active===-1&&!this.weapons.some(Boolean)&&(this.throwType=e.id)),t}allItems(){let e=[];for(let t of this.weapons)t&&e.push(t);for(let[t,n]of Object.entries(this.inv.ammo))n>0&&e.push({kind:`ammo`,id:t,count:n});for(let[t,n]of Object.entries(this.inv.meds))n>0&&e.push({kind:`med`,id:t,count:n});for(let[t,n]of Object.entries(this.inv.throws))n>0&&e.push({kind:`throw`,id:t,count:n});for(let t of this.inv.atts)e.push({kind:`att`,id:t});return this.helmet&&e.push({kind:`armor`,id:this.helmet.id,dur:this.helmet.dur}),this.vest&&e.push({kind:`armor`,id:this.vest.id,dur:this.vest.dur}),this.pack&&e.push({kind:`armor`,id:`pack`+this.pack}),e}refreshModel(){let e=this.model;e.setGear(`helmet`,this.helmet?Ep[this.helmet.id].level:0),e.setGear(`vest`,this.vest?Ep[this.vest.id].level:0),e.setGear(`pack`,this.pack);let t=this.active===3?this.throwType:this.weapon?this.weapon.id:null,n=null;for(let e of[0,1])this.weapons[e]&&e!==this.active&&(n=this.weapons[e].id);e.setWeapons(t,n,this.weapon?this.weapon.att:null)}busy(){return!!this.action}cancelAction(){this.action&&(this.action.type===`heal`||this.action.type===`reload`)&&(this.action=null)}switchTo(e,t=!1){e!==this.active&&(e===3&&this.inv.throws.frag+this.inv.throws.smoke<=0||e>=0&&e<=2&&!this.weapons[e]||(e===3&&this.inv.throws[this.throwType]<=0&&(this.throwType=this.inv.throws.frag>0?`frag`:`smoke`),this.cancelAction(),this.active=e,this.cooking=0,this.action=t?null:{type:`switch`,t:0,dur:.55},this.refreshModel(),this.isPlayer&&this.game.audio.play(`switch`,this.pos,{gain:.5})))}startReload(){let e=this.weapon;if(!e||this.action)return!1;let t=Cp[e.id];return e.loaded>=this.magSize(e)||this.inv.ammo[t.ammo]<=0?!1:(this.action={type:`reload`,t:0,dur:t.reload},this.game.audio.play(`reload`,this.isPlayer?null:this.pos,{gain:this.isPlayer?.8:.5,dur:t.reload,direct:this.isPlayer}),!0)}startHeal(e){if(this.action||!this.alive||this.inv.meds[e]<=0)return!1;let t=Dp[e];if(t.heal||t.healTo){let e=t.cap;if(this.health>=e-.5)return!1}return t.boost&&this.boost>=99?!1:(this.action={type:`heal`,t:0,dur:t.time,id:e},this.game.audio.play(`heal`,this.isPlayer?null:this.pos,{gain:this.isPlayer?.6:.35,dur:t.time,direct:this.isPlayer}),!0)}bestHeal(){let e=this.inv.meds;if(this.health<75){if(this.health<45&&e.firstaid>0)return`firstaid`;if(this.health<60&&e.medkit>0&&e.firstaid===0)return`medkit`;if(e.bandage>0)return`bandage`;if(e.firstaid>0)return`firstaid`;if(e.medkit>0)return`medkit`}else if(this.health<99&&e.medkit>0&&this.health<80)return`medkit`;return null}bestBoost(){let e=this.inv.meds;return this.boost<60&&e.painkiller>0?`painkiller`:this.boost<90&&e.drink>0?`drink`:null}finishAction(){let e=this.action;if(this.action=null,e.type===`reload`){let e=this.weapon;if(!e)return;let t=Cp[e.id],n=this.magSize(e)-e.loaded,r=Math.min(n,this.inv.ammo[t.ammo]);this.inv.ammo[t.ammo]-=r,e.loaded+=r}else if(e.type===`heal`){let t=Dp[e.id];if(this.inv.meds[e.id]<=0)return;this.inv.meds[e.id]--,t.heal&&(this.health=Math.max(this.health,Math.min(t.cap,this.health+t.heal))),t.healTo&&(this.health=Math.max(this.health,t.healTo)),t.boost&&(this.boost=Math.min(100,this.boost+t.boost)),this.health=Math.min(100,this.health)}}spreadDeg(){let e=this.weaponDef;if(!e)return 0;let t=Math.hypot(this.vel.x,this.vel.z),n=this.input.aim?e.adsSpread:e.spread,r=this.input.aim?.35:1;return n+=Math.min(t,7)*.22*r*(e.cls===`SR`?3:1),!this.onGround&&this.mode===`ground`&&(n+=3),this.crouching&&(n*=.78),n+=this.bloom,n}canFire(){return!(!this.alive||this.mode!==`ground`||this.action&&this.action.type!==`reload`||this.sprinting)}tryFire(e){let t=this.weapon,n=this.weaponDef;t&&n&&(!(n.modes[t.mode%n.modes.length]===`auto`?this.input.fire:this.input.firePressed)||this.cooldown>0||!this.canFire()||(t.loaded<=0?this.input.firePressed&&(this.startReload()||this.game.audio.play(`dry`,this.pos,{gain:.6})):(this.action&&this.action.type===`reload`&&(this.action=null),this.fire())))}fire(){let e=this.weapon,t=this.weaponDef;e.loaded--,this.cooldown=60/t.rpm;let n=Gp;this.model.muzzleWorld(n)||this.eyePos(n);let r=this.spreadDeg()*Math.PI/180,i=t.pellets||1,a=e.att.muzzle===`comp`;for(let a=0;a<i;a++){let a=i>1?t.pelletSpread*Math.PI/180+r*.5:r,o=Qp(this.aimDir,a*Math.sqrt(Math.random()));this.game.ballistics.fire(this,this.aimOrigin,o,e.id,n)}let o=t.cls===`SR`?0:t.recoil*(this.input.aim?.16:.4)*(a?.7:1);this.bloom=Math.min(this.bloom+o,this.input.aim?1.6:3.2),this.shotsInBurst++,this.model.recoilKick=Math.min(1,this.model.recoilKick+.35+t.recoil*.12),this.game.onShot(this,e.id,n)}throwGrenade(){let e=this.throwType;if(this.inv.throws[e]<=0)return;this.inv.throws[e]--;let t=this.eyePos(new H),n=this.aimDir.clone(),r=17+(this.input.aim?0:3),i=n.multiplyScalar(r);i.y+=3,i.add(new H(this.vel.x,0,this.vel.z).multiplyScalar(.5));let a=kp[e].fuse-(e===`frag`?this.cooking:0);if(this.game.throwables.spawn(e,t.addScaledVector(this.aimDir,.4),i,Math.max(.05,a),this),this.cooking=0,this.game.audio.play(`throw`,this.pos,{gain:.6}),this.inv.throws.frag+this.inv.throws.smoke<=0){let e=this.weapons[0]?0:this.weapons[1]?1:this.weapons[2]?2:-1;this.active=e,this.refreshModel()}else this.inv.throws[e]<=0&&(this.throwType=e===`frag`?`smoke`:`frag`,this.refreshModel())}takeDamage(e,t,n,r,i){if(!this.alive)return 0;let a=e;return t===`head`&&this.helmet?(a=e*(1-Ep[this.helmet.id].reduce),this.helmet.dur-=e*.5,this.helmet.dur<=0&&(this.helmet=null,this.refreshModel())):t===`torso`&&this.vest&&(a=e*(1-Ep[this.vest.id].reduce),this.vest.dur-=e*.45,this.vest.dur<=0&&(this.vest=null,this.refreshModel())),a=Math.min(a,this.health),this.health-=a,this.lastDamageTime=this.game.time,n&&n!==this&&(this.lastAttacker=n,n.damageDealt+=a),i&&(this.lastHitDir=new H().subVectors(i,this.pos)),this.action&&this.action.type===`heal`&&(this.action=null),this.game.onDamage(this,a,t,n,r,i),this.health<=.01&&this.die(n,r),a}die(e,t){this.alive&&(this.alive=!1,this.health=0,this.mode=`dead`,this.action=null,this.killer=e,this.deathCause=t,this.deathTime=this.game.time,this.parachute&&(this.parachute.visible=!1),this.vehicle&&this.game.vehicles.exit(this,!0),this.mode=`dead`,e&&e!==this&&e.kills++,this.vel.set(0,Math.min(0,this.vel.y),0),this.game.onKill(this,e,t))}hitShape(){return this.mode===`vehicle`?{head:1.1,ta:.4,tb:.9,la:.1,lb:.3}:this.mode===`swim`?{head:1.42,ta:.6,tb:1.2,la:0,lb:.6}:this.mode===`freefall`?{head:1,ta:.4,tb:1,la:.2,lb:.6}:this.crouching?{head:1.12,ta:.55,tb:.98,la:.08,lb:.55}:{head:1.62,ta:.92,tb:1.44,la:.08,lb:.9}}update(e){if(this.game,!this.alive){this.updateDead(e);return}this.cooldown=Math.max(0,this.cooldown-e);let t=this.weaponDef,n=this.input.fire&&t&&t.modes[this.weapon.mode%t.modes.length]===`auto`?2.2:6.5;if(this.bloom=Math.max(0,this.bloom-e*n),this.input.fire||(this.shotsInBurst=0),this.boost>0){this.boost=Math.max(0,this.boost-e*.85);let t=this.boost>60?1.1:this.boost>20?.6:.35;this.health=Math.min(100,this.health+t*e)}this.action&&(this.action.t+=e,this.action.t>=this.action.dur&&this.finishAction());let r=this.input;switch((this.mode===`ground`||this.mode===`swim`)&&(r.slot!==-2&&r.slot!==void 0&&(r.slot===-1?(this.cancelAction(),this.cooking=0,this.active=-1,this.refreshModel()):this.switchTo(r.slot),r.slot=-2),r.reload&&(r.reload=!1,this.startReload()),r.heal&&=(this.startHeal(r.heal),null),r.cancel&&(r.cancel=!1,this.cancelAction()),this.mode===`ground`&&(this.active===3?this.updateThrow(e):this.tryFire(e))),this.mode){case`plane`:case`vehicle`:break;case`freefall`:case`parachute`:this.updateAir(e);break;case`climb`:this.updateClimb(e);break;case`swim`:this.updateSwim(e);break;default:this.updateGround(e)}this.pos.x=Y(this.pos.x,-792,792),this.pos.z=Y(this.pos.z,-792,792),this.syncModel(e)}updateThrow(e){let t=this.input;this.action||(t.fire&&this.inv.throws[this.throwType]>0?(this.cooking===0&&this.game.audio.play(`pin`,this.pos,{gain:.5}),this.cooking+=e,this.throwType===`frag`&&this.cooking>=kp.frag.fuse&&this.throwGrenade()):this.cooking>0&&this.throwGrenade())}moveSpeed(){let e=this.input,t=5.2,n=e.mz<-.1;this.sprinting=e.sprint&&e.mz>.3&&!e.aim&&!this.crouching&&!(this.action&&this.action.type===`heal`)&&this.cooking===0,this.sprinting&&(t=6.8),this.crouching&&(t=2.7),e.aim&&(t=Math.min(t,3.3)),this.action&&this.action.type===`heal`&&(t=Math.min(t,2)),n&&(t*=.78),this.boost>60&&(t*=1.06);let r=this.weaponDef;return r&&r.cls===`SR`&&!this.sprinting&&(t*=.95),t}updateGround(e){let t=this.game,n=t.world.C;t.world.T;let r=this.input;r.crouch&&(r.crouch=!1,this.crouching?n.ceiling(this.pos.x,this.pos.z,.25,this.pos.y+.3)>this.pos.y+Bp&&(this.crouching=!1):this.crouching=!0);let i=Math.hypot(r.mx,r.mz),a=0,o=0;if(i>.01){let e=r.mx/Math.max(1,i),t=r.mz/Math.max(1,i),n=Math.sin(this.yaw),s=Math.cos(this.yaw);a=n*t+s*e,o=-s*t+n*e}let s=this.moveSpeed(),c=a*s,l=o*s,u=this.onGround?i>.01?38:26:4;if(this.vel.x=Yp(this.vel.x,c,u*e),this.vel.z=Yp(this.vel.z,l,u*e),!(r.jump&&(r.jump=!1,this.onGround&&!this.tryVault()&&(this.crouching?n.ceiling(this.pos.x,this.pos.z,.25,this.pos.y+.3)>this.pos.y+Bp&&(this.crouching=!1):(this.vel.y=Rp,this.onGround=!1,this.fallStartY=this.pos.y)),this.mode===`climb`))){if(this.vel.y-=Lp*e,this.integrate(e),this.pos.y<Up-.05)this.enterSwim();else if(this.onGround){let n=Math.hypot(this.vel.x,this.vel.z);if(n>.8&&!this.crouching){this.stepAcc+=n*e;let r=this.sprinting?1.9:1.55;this.stepAcc>r&&(this.stepAcc=0,t.onFootstep(this,this.sprinting))}}}}integrate(e){let t=this.game,n=t.world.C,r=t.world.T,i=this.height,a=Math.hypot(this.vel.x*e,this.vel.z*e),o=Math.max(1,Math.ceil(a/.25)),s=e/o,c=this.onGround;for(let e=0;e<o;e++){let e=this.pos.x+this.vel.x*s,t=this.pos.z+this.vel.z*s;n.resolveCylinder(e,t,this.pos.y,zp,i,Hp,Kp),e=Kp[0],t=Kp[1],r.heightAt(e,t)>this.pos.y+Hp&&this.mode===`ground`&&(r.heightAt(e,this.pos.z)<=this.pos.y+Hp?t=this.pos.z:r.heightAt(this.pos.x,t)<=this.pos.y+Hp?e=this.pos.x:(e=this.pos.x,t=this.pos.z));let a=e-this.pos.x,o=t-this.pos.z;if(s>0){let e=a/s,t=o/s;Math.abs(e)<Math.abs(this.vel.x)&&(this.vel.x=e),Math.abs(t)<Math.abs(this.vel.z)&&(this.vel.z=t)}this.pos.x=e,this.pos.z=t}let l=n.support(this.pos.x,this.pos.z,zp*.75,this.pos.y+Hp,qp),u=this.pos.y+this.vel.y*e;if(this.vel.y>0){let e=n.ceiling(this.pos.x,this.pos.z,zp*.7,this.pos.y+i-.05);u+i>e?(this.vel.y=0,this.pos.y=Math.min(u,e-i)):this.pos.y=u,this.onGround=!1}else u<=l?(c||this.land(l,-this.vel.y),this.pos.y=l,this.vel.y=0,this.onGround=!0,this.surface=qp.box>=0?qp.surf:this.game.groundSurface(this.pos.x,this.pos.z)):c&&this.pos.y-l<.5700000000000001&&this.vel.y<=0?(this.pos.y=l,this.vel.y=0,this.onGround=!0):(c&&(this.fallStartY=this.pos.y),this.pos.y=u,this.onGround=!1)}land(e,t){if(this.mode!==`ground`)return;let n=this.fallStartY-e;n>4.5&&this.takeDamage((n-4.5)*7.5,`fall`,null,`fall`,null),t>6&&this.game.audio.play(`land`,this.isPlayer?null:this.pos,{gain:Math.min(1,t/14),direct:this.isPlayer}),this.fallStartY=e}tryVault(){let e=this.game,t=e.world.C,n=Math.sin(this.yaw),r=-Math.cos(this.yaw),i=this.mode===`swim`?3.7:2;for(let a of[.55,.85]){let o=this.pos.x+n*a,s=this.pos.z+r*a,c=t.support(o,s,.2,this.pos.y+i,qp);if(c<this.pos.y+Hp+.05||c<.1||!t.cylinderFree(o,c+.05,s,.28,1.25)||t.ceiling(this.pos.x,this.pos.z,.25,this.pos.y+.3)<c+1.3)continue;let l=this.pos.x+n*(a+.6),u=this.pos.z+r*(a+.6),d=t.support(l,u,.2,c+.3),f,p,m;if(d>=c-.3)f=this.pos.x+n*(a+.3),m=this.pos.z+r*(a+.3),p=c;else if(f=this.pos.x+n*(a+1.05),m=this.pos.z+r*(a+1.05),!t.cylinderFree(f,c-.2,m,.3,1.3)||(p=Math.max(t.support(f,m,.25,c+.3),-1.25),this.pos.y-p>(this.isPlayer?9:3)))continue;this.mode=`climb`;let h=.3+(c-this.pos.y)*.28;return this.climb={t:0,dur:h,sx:this.pos.x,sy:this.pos.y,sz:this.pos.z,tx:f,ty:p,tz:m,apex:c+.12},this.vel.set(0,0,0),e.audio.play(`vault`,this.isPlayer?null:this.pos,{gain:.5,direct:this.isPlayer}),!0}return!1}findDescent(e=30){let t=this.game.world.C,n=this.pos.y,r=null;for(let i=0;i<16;i++){let a=i/16*Math.PI*2,o=Math.sin(a),s=-Math.cos(a);for(let i=.8;i<e;i+=.8){let e=this.pos.x+o*i,a=this.pos.z+s*i,c=t.support(e,a,.3,n+.4);if(n-c>3){let l=e+o*.7,u=a+s*.7,d=t.support(l,u,.3,c+.5);if(d<=.2||!t.cylinderFree(l,d+.3,u,.4,1.5)||!t.lineClear(this.pos.x,n+1.3,this.pos.z,e,n+1.3,a,Q.MOVE))break;(!r||i<r.d)&&(r={d:i,x:l,y:d,z:u});break}if(c>n+.6)break}}return r}startClimbTo(e,t,n,r){this.mode=`climb`,this.climb={t:0,dur:r,sx:this.pos.x,sy:this.pos.y,sz:this.pos.z,tx:e,ty:t,tz:n,apex:this.pos.y+.05,descent:!0},this.vel.set(0,0,0)}updateClimb(e){let t=this.climb;t.t+=e;let n=Math.min(1,t.t/t.dur),r=Math.min(1,n/.5),i=n<.35?0:(n-.35)/.65,a;if(t.descent){let e=Math.min(1,n/.25),r=Math.max(0,(n-.25)/.75);this.pos.set(X(t.sx,t.tx,e),X(t.sy,t.ty,r),X(t.sz,t.tz,e))}else a=n<.5?t.sy+(t.apex-t.sy)*r*(2-r):t.apex+(t.ty-t.apex)*((n-.5)/.5)**2,this.pos.set(X(t.sx,t.tx,i*i*(3-2*i)),a,X(t.sz,t.tz,i*i*(3-2*i)));if(n>=1){this.mode=`ground`,this.onGround=!0,this.fallStartY=this.pos.y,this.vel.set(0,0,0);let e=this.game.world.C;e.resolveCylinder(this.pos.x,this.pos.z,this.pos.y,zp,this.height,Hp,Kp),this.pos.x=Kp[0],this.pos.z=Kp[1],this.pos.y<Up+.05&&e.support(this.pos.x,this.pos.z,.3,this.pos.y+.5)<Up&&this.enterSwim()}}enterSwim(){this.mode=`swim`,this.fallStartY=Up,this.crouching=!1,this.vel.y=0,this.pos.y=Up,this.cancelAction(),this.cooking=0,this.game.onSplash(this)}updateSwim(e){let t=this.game,n=t.world.C,r=this.input,i=Math.hypot(r.mx,r.mz),a=0,o=0;if(i>.01){let e=r.mx/Math.max(1,i),t=r.mz/Math.max(1,i),n=Math.sin(this.yaw),s=Math.cos(this.yaw);a=n*t+s*e,o=-s*t+n*e}let s=r.sprint?3.4:2.5;this.vel.x=Yp(this.vel.x,a*s,6*e),this.vel.z=Yp(this.vel.z,o*s,6*e);let c=this.pos.x+this.vel.x*e,l=this.pos.z+this.vel.z*e;n.resolveCylinder(c,l,this.pos.y,zp,Bp,.2,Kp),this.pos.x=Kp[0],this.pos.z=Kp[1],this.pos.y=Kl(this.pos.y,Up+Math.sin(t.time*2+this.id)*.05,4,e);let u=n.support(this.pos.x,this.pos.z,zp*.75,this.pos.y+1,qp);u>Up+.05&&(this.mode=`ground`,this.pos.y=u,this.onGround=!0,this.vel.y=0,this.fallStartY=u),r.jump?(r.jump=!1,this.tryVault()):i>.5&&r.mz>.3&&(this._climbCheck=(this._climbCheck||0)+e,this._climbCheck>.35&&(this._climbCheck=0,this.tryVault())),this.stepAcc+=Math.hypot(this.vel.x,this.vel.z)*e,this.stepAcc>2.2&&(this.stepAcc=0,t.audio.play(`swim`,this.pos,{gain:this.isPlayer?.5:.35,owner:this}))}updateAir(e){let t=this.game,n=t.world.C,r=this.input,i=n.support(this.pos.x,this.pos.z,.4,this.pos.y+.5),a=this.pos.y-Math.max(i,0),o=Math.sin(this.yaw),s=Math.cos(this.yaw);if(this.mode===`freefall`){(r.deploy&&a<420||a<120)&&(r.deploy=!1,this.mode=`parachute`,this.chuteOpenT=0,t.onParachute(this));let n=Y(r.mz,-1,1),i=Y(r.dive||0,0,1),c=14+Math.max(0,n)*26-Math.max(0,-n)*8,l=o*c*(n>=0?1:.3)+s*r.mx*10,u=-s*c*(n>=0?1:.3)+o*r.mx*10;this.vel.x=Yp(this.vel.x,l,18*e),this.vel.z=Yp(this.vel.z,u,18*e);let d=-(40+i*26+Math.max(0,n)*6);this.vel.y=Yp(this.vel.y,d,30*e)}else{let t=Y(r.mz,-1,1),n=9+t*(t>0?6:7),i=o*n+s*r.mx*4,a=-s*n+o*r.mx*4;this.vel.x=Yp(this.vel.x,i,6*e),this.vel.z=Yp(this.vel.z,a,6*e);let c=-(6.2+Math.max(0,t)*2.5-Math.max(0,-t)*1.5);this.chuteOpenT=(this.chuteOpenT||0)+e,this.vel.y=Yp(this.vel.y,c,(this.chuteOpenT<2.5?55:12)*e)}let c=this.pos.y+this.vel.y*e,l=this.pos.x+this.vel.x*e,u=this.pos.z+this.vel.z*e;a<40&&(n.resolveCylinder(l,u,this.pos.y,zp,1.8,.3,Kp),l=Kp[0],u=Kp[1]),this.pos.x=l,this.pos.z=u;let d=n.support(this.pos.x,this.pos.z,zp*.75,this.pos.y+.6,qp);if(c<=d){this.pos.y=d;let e=-this.vel.y;this.mode=`ground`,this.onGround=!0,this.vel.set(this.vel.x*.3,0,this.vel.z*.3),t.onLanded(this),this.fallStartY=d,e>20&&this.takeDamage(Math.min(100,(e-20)*3),`fall`,null,`fall`,null)}else c<Up&&d<Up?(this.pos.y=Up,this.mode=`ground`,t.onLanded(this),this.enterSwim()):this.pos.y=c}updateDead(e){let t=this.game,n=t.world.C,r=Math.max(n.support(this.pos.x,this.pos.z,.3,this.pos.y+.5),this.mode===`dead`&&this.pos.y<Up?Up:-100);this.pos.y>r&&(this.vel.y-=Lp*e,this.pos.y=Math.max(r,this.pos.y+this.vel.y*e)),!this.crateDropped&&t.time-this.deathTime>2.2&&(this.crateDropped=!0,t.loot.dropDeathCrate(this),this.root.visible=!1),this.syncModel(e)}syncModel(e){let t=this.root;if(this.mode===`vehicle`){t.visible=!1;return}t.position.copy(this.pos),t.rotation.y=Jl(this.yaw);let n=this.anim;n.speed=this.mode===`ground`||this.mode===`swim`?Math.hypot(this.vel.x,this.vel.z):0,n.crouch=this.crouching&&this.mode===`ground`,n.aiming=this.input.aim&&this.mode===`ground`,n.mode=this.mode===`ground`?this.onGround?`ground`:`air`:this.mode===`climb`?`air`:this.mode,n.pitch=this.pitch,n.sprint=this.sprinting&&this.mode===`ground`,n.hold=this.active===3?`throw`:this.weapon?this.weapon.id===`p226`?`pistol`:`rifle`:`none`,n.reloading=!!(this.action&&this.action.type===`reload`),n.reloadT=this.action?this.action.t:0,n.healing=!!(this.action&&this.action.type===`heal`),n.healT=n.reloadT,n.cooking=this.cooking>0,this.model.update(e,n),this.parachute&&(this.parachute.visible=this.mode===`parachute`,this.parachute.visible&&(this.parachute.position.copy(this.pos),this.parachute.position.y+=2,this.parachute.rotation.y=Jl(this.yaw),this.parachute.rotation.z=-this.input.mx*.25))}};function Yp(e,t,n){return e<t?Math.min(t,e+n):Math.max(t,e-n)}var Xp=new H,Zp=new H;function Qp(e,t){if(t<=0)return e.clone();let n=Math.abs(e.y)<.95?Xp.set(0,1,0):Xp.set(1,0,0),r=Zp.crossVectors(e,n).normalize(),i=new H().crossVectors(r,e).normalize(),a=Math.random()*Math.PI*2,o=Math.tan(t);return e.clone().addScaledVector(r,Math.cos(a)*o).addScaledVector(i,Math.sin(a)*o).normalize()}var $p=new bu,em=new H,tm=new H,nm=new H,rm=class{constructor(e,t,n){this.game=e,this.ch=t,this.camera=n,this.view=`tpp`,this.ads=0,this.camPos=new H,this.recoilQueue=[],this.recoverPitch=0,this.shake=0,this.planeYaw=0,this.planePitch=-.35,this.spectate=null,this.specYaw=0,this.lookYaw=0,this.lookPitch=0,this.camDist=3.1,this.viewmodel=null,this.vmId=null,this.vmKick=0,this.lastTarget=null,this.target=new H,this.freeLook=!1,this.fovCur=zf.fov}onShot(e){let t=Cp[e],n=this.ch,r=1,i=n.weapon;i&&i.att.muzzle===`comp`&&(r*=.72),n.crouching&&(r*=.85),n.input.aim&&(r*=.85);let a=t.recoil*(.85+Math.random()*.3)*r,o=(Math.random()-.5)*2*t.recoilH*r;this.recoilQueue.push({p:a*Math.PI/180,y:o*Math.PI/180,t:0}),this.vmKick=Math.min(1,this.vmKick+.5),this.shake=Math.max(this.shake,t.cls===`SR`||t.cls===`SG`?.3:.08)}addShake(e){this.shake=Math.max(this.shake,e)}scopeZoom(){let e=this.ch.weapon;return!e||!e.att.scope?1.25:Math.max(1.25,Op[e.att.scope].zoom)}update(e){let t=this.game,n=t.input,r=this.ch,i=r.input,a=.0021*zf.sensitivity,o=this.ads>.5?this.scopeZoom():1,s=this.ads>.5?zf.adsSensitivity/o**.75:1,c=n.mouseDX*a*s,l=n.mouseDY*a*s*(zf.invertY?-1:1),u=t.ui&&t.ui.blocking();if(!r.alive){this.updateSpectate(e,c,l);return}u||(r.mode===`plane`?(this.planeYaw-=c,this.planePitch=Y(this.planePitch-l,-1.2,.5)):(r.yaw=Wl(r.yaw+c),r.pitch=Y(r.pitch-l,-1.45,1.45)));for(let t=this.recoilQueue.length-1;t>=0;t--){let n=this.recoilQueue[t],i=Math.min(e,.06-n.t),a=i/.06;r.pitch=Y(r.pitch+n.p*a,-1.45,1.45),r.yaw+=n.y*a,this.recoverPitch+=n.p*a*.35,n.t+=i,n.t>=.059999&&this.recoilQueue.splice(t,1)}if(!i.fire&&this.recoverPitch>0){let t=Math.min(this.recoverPitch,e*.9);r.pitch-=t,this.recoverPitch-=t}let d=u,f=e=>!d&&n.down(e);if(i.mx=+!!f(`KeyD`)-!!f(`KeyA`),i.mz=+!!f(`KeyW`)-!!f(`KeyS`),i.sprint=f(`ShiftLeft`)||f(`ShiftRight`),r.mode===`vehicle`){let a=r.vehicleInput;a.throttle=i.mz,a.steer=i.mx,a.brake=f(`Space`),a.boost=i.sprint,i.mx=i.mz=0,!d&&n.hit(`KeyF`)&&t.vehicles.exit(r),this.prompt=null,this.updateCamera(e),this.hideVM()}else{if(!d){if((n.hit(`KeyC`)||n.hit(`ControlLeft`))&&(i.crouch=!0),n.hit(`Space`)&&(i.jump=!0),n.hit(`KeyR`)&&(i.reload=!0),n.hit(`Digit1`)&&(i.slot=0),n.hit(`Digit2`)&&(i.slot=1),n.hit(`Digit3`)&&(i.slot=2),(n.hit(`Digit4`)||n.hit(`Digit5`))&&(i.slot=3),n.hit(`KeyX`)&&(i.slot=-1),n.hit(`KeyH`)){let e=r.bestHeal();e?i.heal=e:t.hud.toast(r.health>=75?`Health is already high — use a Med Kit to go above 75`:`No healing items`)}if(n.hit(`KeyJ`)){let e=r.bestBoost();e?i.heal=e:t.hud.toast(`No boost items`)}if(n.hit(`Digit7`)&&(i.heal=`bandage`),n.hit(`Digit8`)&&(i.heal=`firstaid`),n.hit(`Digit9`)&&(i.heal=`medkit`),n.hit(`Digit0`)&&(i.heal=`drink`),n.hit(`Minus`)&&(i.heal=`painkiller`),n.hit(`KeyB`)){let e=r.weapon;if(e){let n=Cp[e.id];n.modes.length>1&&(e.mode=(e.mode+1)%n.modes.length,t.hud.toast(`Fire mode: `+n.modes[e.mode].toUpperCase()),t.audio.play(`dry`,null,{direct:!0,gain:.4}))}}if(n.hit(`KeyG`)){let e=r.inv.throws,n=r.throwType===`frag`?`smoke`:`frag`;e[n]>0&&(r.throwType=n,r.refreshModel(),t.hud.toast(n===`frag`?`Frag Grenade`:`Smoke Grenade`))}n.hit(`KeyV`)&&(this.view=this.view===`tpp`?`fpp`:`tpp`)}i.fire=!d&&n.mouse(0)&&n.locked,i.firePressed=!d&&n.mouseHit(0)&&n.locked,i.aim=!d&&n.mouse(2)&&n.locked&&r.mode===`ground`&&!r.sprinting&&r.active>=0&&r.active<=2,i.dive=r.mode===`freefall`&&i.mz>0?Y(-r.pitch/.9,0,1):0,!d&&n.hit(`KeyF`)&&this.interact(),r.mode===`freefall`&&!d&&n.hit(`Space`)&&(i.deploy=!0),this.ads=Kl(this.ads,+!!i.aim,18,e),this.updatePrompt(),this.updateCamera(e),this.updateViewmodel(e)}}interact(){let e=this.game,t=this.ch;if(t.mode===`plane`)e.jumpFromPlane(t);else if(t.mode===`freefall`)t.input.deploy=!0;else if(this.prompt&&this.prompt.kind===`container`)e.ui.openInventory(this.prompt.container);else if(this.prompt&&this.prompt.kind===`item`)e.pickUp(t,this.prompt.ent);else if(this.prompt&&this.prompt.kind===`vehicle`)e.vehicles.enter(t,this.prompt.vehicle);else if(this.prompt&&this.prompt.kind===`descend`){let e=this.prompt.target;t.yaw=ql(e.x-t.pos.x,e.z-t.pos.z),t.startClimbTo(e.x,e.y,e.z,1+(t.pos.y-e.y)*.07+e.d*.15),this.descent=null}}updatePrompt(){let e=this.game,t=this.ch;if(this.prompt=null,t.mode===`plane`){this.prompt={kind:`jump`,text:e.plane.insideMap()?`Jump`:`Wait for Geneva…`};return}if(t.mode===`freefall`){this.prompt={kind:`chute`,text:`Deploy parachute`};return}if(t.mode!==`ground`)return;let n=t.eyePos(em),r=this.camera.getWorldDirection(nm),i=e.loot.near(t.pos.x,t.pos.y,t.pos.z,2.6),a=null,o=1/0;for(let e of i){let t=e.x-n.x,i=e.y+.1-n.y,s=e.z-n.z,c=Math.hypot(t,i,s)||1,l=(1-(t*r.x+i*r.y+s*r.z)/c)*6+c*.35;l<o&&(o=l,a=e)}let s=e.loot.containersNear(t.pos.x,t.pos.y,t.pos.z,2.4)[0];if(s&&(!a||o>1.2)){this.prompt={kind:`container`,container:s,text:`Open ${s.kind===`package`?`Care Package`:s.name+`'s crate`}`};return}if(a&&o<2.2){this.prompt={kind:`item`,ent:a,text:e.loot.describe(a)};return}if(this.descentT=(this.descentT||0)-1/60,t.onGround&&t.pos.y-e.world.T.heightAt(t.pos.x,t.pos.z)>4.5){if(this.descentT<=0){this.descentT=.4;let n=e.world.nav.nearest(t.pos.x,t.pos.y,t.pos.z,10),r=n>=0&&Math.abs(e.world.nav.y[n]-t.pos.y)<1.5;this.descent=r?null:t.findDescent(3.2)}if(this.descent&&!a){this.prompt={kind:`descend`,text:`Climb down`,target:this.descent};return}}else this.descent=null;let c=e.vehicles.nearest(t.pos);c?this.prompt={kind:`vehicle`,vehicle:c,text:c.kind===`boat`?`Drive the boat`:`Drive the car`}:a&&(this.prompt={kind:`item`,ent:a,text:e.loot.describe(a)})}updateCamera(e){let t=this.game,n=this.ch,r=this.camera,i=t.world.C,a=zf.fov;this.shake=Math.max(0,this.shake-e*1.8);let o=this.shake*this.shake,s=(Math.random()-.5)*o*.06,c=(Math.random()-.5)*o*.06;if(n.mode===`plane`){let i=t.plane.pos,o=Math.cos(this.planePitch);r.position.set(i.x-Math.sin(this.planeYaw)*o*46,i.y-Math.sin(this.planePitch)*46+6,i.z+Math.cos(this.planeYaw)*o*46),r.lookAt(i.x,i.y+4,i.z),n.yaw=Wl(-this.planeYaw+Math.PI),n.yaw=ql(i.x-r.position.x,i.z-r.position.z),n.pitch=0,this.setFov(a,e),n.root.visible=!1,this.hideVM();return}if(n.mode===`vehicle`&&n.vehicle){let a=n.vehicle;t.ui.blocking()||(this.lookYaw=Y(this.lookYaw-t.input.mouseDX*.003,-2.6,2.6),this.lookPitch=Y(this.lookPitch-t.input.mouseDY*.003,-.5,.6)),Math.abs(t.input.mouseDX)<.5&&(this.lookYaw=Kl(this.lookYaw,0,1.2,e));let o=a.yaw+this.lookYaw,s=a.kind===`boat`?9:7.5,c=a.pos.x,l=a.pos.y+1.6,u=a.pos.z,d=c-Math.sin(o)*s*Math.cos(this.lookPitch+.15),f=u+Math.cos(o)*s*Math.cos(this.lookPitch+.15),p=l+Math.sin(this.lookPitch+.15)*s+1,m=d-c,h=p-l,g=f-u,_=Math.hypot(m,h,g);if(i.raycast(c,l,u,m/_,h/_,g/_,_,Q.CAM,$p,!1,a.col)){let e=Math.max(.2,($p.t-.3)/_);d=c+m*e,p=l+h*e,f=u+g*e}r.position.set(d,Math.max(p,t.world.T.heightAt(d,f)+.4),f),r.lookAt(c+Math.sin(o)*6,l+.4,u-Math.cos(o)*6),this.setFov(zf.fov+Math.min(12,Math.abs(a.speed)*.4),e),n.aimOrigin.copy(r.position),r.getWorldDirection(n.aimDir);return}n.root.visible=!0;let l=this.view===`fpp`||this.ads>.5,u=n.yaw,d=n.pitch,f=Math.sin(u)*Math.cos(d),p=Math.sin(d),m=-Math.cos(u)*Math.cos(d),h=Math.cos(u),g=Math.sin(u),_=n.eyePos(em),v,y,b;if(l&&n.mode===`ground`)v=_.x+f*.12,y=_.y+.02,b=_.z+m*.12,this.ads>.5&&(a=this.fovForZoom(this.scopeZoom())),n.root.visible=!1;else{let r=n.mode===`freefall`||n.mode===`parachute`,a=r?5.5:n.mode===`swim`?3.4:3,o=r?0:.62,s=r?1:.22,c=_.y+(r?.5:.08),l=-f*a+h*o,u=-p*a+s,d=-m*a+g*o,x=Math.hypot(l,u,d),S=x;i.raycast(_.x,c,_.z,l/x,u/x,d/x,x,Q.CAM|Q.MOVE,$p)&&(S=Math.max(.25,$p.t-.25)),this.camDist=S<this.camDist?S:Kl(this.camDist,S,6,e);let C=this.camDist/x;v=_.x+l*C,y=c+u*C,b=_.z+d*C;let w=Math.max(t.world.T.heightAt(v,b),n.mode===`swim`?.2:-100)+.3;y<w&&(y=w)}r.position.set(v,y,b),tm.set(v+f*10,y+p*10,b+m*10),r.lookAt(tm),r.rotation.x+=c,r.rotation.y+=s,this.setFov(a,e);let x=r.getWorldDirection(nm),S=tm.subVectors(_,r.position).dot(x);n.aimOrigin.copy(r.position).addScaledVector(x,Math.max(0,S)),n.aimDir.copy(x)}fovForZoom(e){let t=zf.fov*Math.PI/180;return 2*Math.atan(Math.tan(t/2)/e)*180/Math.PI}setFov(e,t){this.fovCur=Kl(this.fovCur,e,16,t),Math.abs(this.camera.fov-this.fovCur)>.01&&(this.camera.fov=this.fovCur,this.camera.updateProjectionMatrix())}hideVM(){this.viewmodel&&(this.viewmodel.visible=!1)}updateViewmodel(e){let t=this.ch,n=(this.view===`fpp`||this.ads>.5)&&t.mode===`ground`&&t.alive,r=t.active===3?null:t.weapon,i=this.ads>.5&&r&&r.att.scope&&Op[r.att.scope].zoom>=2,a=n&&r&&!i&&!t.sprinting&&!(t.action&&t.action.type===`heal`),o=r?r.id+(r.att.scope||``):null;if(this.vmId!==o&&(this.viewmodel&&this.camera.remove(this.viewmodel),this.viewmodel=r?ip(r.id,r.att):null,this.viewmodel&&(this.vmMat||=new Yi({vertexColors:!0,roughness:.5,metalness:.2,emissive:2500134}),this.viewmodel.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.renderOrder=50,e.material=this.vmMat)}),this.camera.add(this.viewmodel)),this.vmId=o),!this.viewmodel||(this.viewmodel.visible=!!a,!a))return;this.vmKick=Kl(this.vmKick,0,14,e);let s=this.ads,c=Math.hypot(t.vel.x,t.vel.z),l=Math.sin(this.game.time*9)*Math.min(1,c/5)*.012*(1-s),u=r.att.scope?.155:.11;this.viewmodel.position.set(X(.2,0,s),X(-.22,-u-.012,s)+l,X(-.42,-.36,s)+this.vmKick*.05),this.viewmodel.rotation.set(this.vmKick*.08,Math.PI,0);let d=t.action&&t.action.type===`reload`?Math.sin(Math.min(1,t.action.t/t.action.dur)*Math.PI):0;this.viewmodel.rotation.x+=d*.6,this.viewmodel.position.y-=d*.12}updateSpectate(e,t,n){let r=this.game,i=this.camera;this.hideVM(),this.prompt=null;let a=this.spectate;if(!a||!a.alive||a.mode===`plane`){let e=this.ch.killer;a=e&&e.alive&&e.mode!==`plane`?e:r.characters.find(e=>e.alive&&!e.isPlayer&&e.mode!==`plane`)||null,this.spectate=a}if(!a&&r.plane.active){let n=r.plane.pos;this.specYaw-=t,i.position.set(n.x-Math.sin(this.specYaw)*60,n.y+12,n.z+Math.cos(this.specYaw)*60),i.lookAt(n.x,n.y,n.z),this.setFov(zf.fov,e);return}let o=a?a.pos:this.ch.pos;r.ui.blocking()||(this.specYaw-=t),i.position.set(o.x-Math.sin(this.specYaw)*5,o.y+3,o.z+Math.cos(this.specYaw)*5),i.lookAt(o.x,o.y+1.3,o.z),this.setFov(zf.fov,e)}},im=new bu,am=new H,om=new H,sm=[],cm=9.81,lm=`GenevaConvention,JeanCalvin_99,Farel_Fury,KnoxOut,TheoBeza,Rousseau.exe,GeneralDufour,FondueLord,RacletteRaider,ChocolatSniper,ToblerKnight,LemanLurker,JetDeauJoe,PlainpalaisPunk,CornavinCowboy,PaquisPirate,TreilleTroll,BastionBoss,SwissMiss,Edelweiss,Matterhorn_X,GruyereGrim,RostiRex,Vacherin,EmmentalEd,AlpineAce,Helvetica_Bold,CERN_Particle,PeaceTalks,RedCrossMedic,NeutralNoMore,CuckooClock,SwissArmyKnife,BankSecrecy,Escalade1602,MereRoyaume,Saleve_Sniper,JuraJumper,MontBlancMamba,Mouette_GE,BainsDesPaquis,Molard_Mole,BourgDeFour,HorlogeFleurie,PontMachine,IleRousseau,Carouge_Kid,EauxVivesViper,ChampelChamp,Servette_FC,RhoneRanger,Leman_Lad,Cervin_Cobra,Tete_de_Moine,Zurich_Tourist,Bern_Bear,Lausanne_Lynx,Ticino_Tiger`.split(`,`),um=class{constructor(e,t){this.game=e,this.ch=t;let n=t.skill;this.react=X(.85,.22,n),this.turnRate=X(3.2,9.5,n),this.aimNoise=X(1.25,.22,n),this.state=`plane`,this.target=null,this.targetSeen=-100,this.lastKnown=new H,this.firstSeen=-100,this.path=null,this.pathIdx=0,this.goal=null,this.goalKind=null,this.repathAt=0,this.thinkT=Math.random()*.3,this.perceiveT=Math.random()*.25,this.stuckT=0,this.lastPos=new H,this.progressT=0,this.strafe=0,this.strafeT=0,this.burstLeft=0,this.burstPause=0,this.aimErr=new V,this.desiredYaw=0,this.desiredPitch=0,this.lootTarget=null,this.ignoreLoot=new Set,this.investigate=null,this.investigateT=0,this.landTarget=null,this.jumpF=.5,this.holdUntil=0,this.lootUntil=0,this.failCount=0,this.crouchToggleT=0}planDrop(e,t){let n=[];for(let r of t){let t=e.closestF(r.x,r.z),i=e.pointAt(t),a=Math.hypot(i.x-r.x,i.z-r.z),o=r.loot**3*(r.hot?1.6:1)/(1+(a/380)**2.5);n.push([r,o])}let r=0;for(let e of n)r+=e[1];let i=Math.random()*r,a=n[0][0];for(let e of n)if(i-=e[1],i<=0){a=e[0];break}let o=this.game.world.nav,s=-1;for(let e=0;e<16&&s<0;e++){let t=Z(0,Math.PI*2),n=Math.sqrt(Math.random())*a.r,r=o.nearest(a.x+Math.cos(t)*n,NaN,a.z+Math.sin(t)*n,30);if(r>=0&&o.compSize[o.comp[r]]>200&&o.flags[r]===nd.GRID){if(e<9&&!this.game.world.C.cylinderFree(o.x[r],o.y[r]+.4,o.z[r],5,40))continue;s=r}}s<0&&(s=o.nearest(a.x,NaN,a.z,120));let c=o.pos(s);this.landTarget=new H(c[0],c[1],c[2]),e.closestF(c[0],c[2]),this.reach=Z(260,360),this.locName=a.name}pickZoneGoal(e){let t=this.game.world.nav,n=this.ch,r=t.nodesInCircle(e.x,e.z,Math.max(8,e.r*.65),300),i=-1;if(r.length){let a=1/0;for(let o=0;o<12;o++){let o=r[Math.floor(Math.random()*r.length)],s=Math.hypot(t.x[o]-n.pos.x,t.z[o]-n.pos.z)+Math.random()*e.r*.5;s<a&&(a=s,i=o)}}else i=t.nearest(e.x,NaN,e.z,Math.max(60,e.r));i>=0&&this.setGoal(new H(t.x[i],t.y[i],t.z[i]),`zone`)}checkStranded(e){let t=this.game,n=this.ch;t.world.C;let r=t.world.T,i=t.world.nav;if(!n.onGround||n.mode!==`ground`||n.pos.y-r.heightAt(n.pos.x,n.pos.z)<4.5){this.strandT=0;return}let a=i.nearest(n.pos.x,n.pos.y,n.pos.z,12);if(a>=0&&Math.abs(i.y[a]-n.pos.y)<2.5){this.strandT=0;return}if(this.strandT=(this.strandT||0)+e,this.strandT<5)return;let o=n.findDescent(30);o&&(this.strandT=0,n.yaw=ql(o.x-n.pos.x,o.z-n.pos.z),n.startClimbTo(o.x,o.y,o.z,1.2+(n.pos.y-o.y)*.08+o.d*.15),this.path=null)}eye(e){return this.ch.eyePos(e)}canSee(e){let t=this.game,n=this.eye(am),r=e.hitShape(),i=e.pos.x,a=e.pos.y+(r.ta+r.tb)/2,o=e.pos.z;return t.effects.smokeBlocks(n.x,n.y,n.z,i,a,o)?!1:t.world.C.lineClear(n.x,n.y,n.z,i,a,o,Q.SIGHT)?!0:t.world.C.lineClear(n.x,n.y,n.z,i,e.pos.y+r.head,o,Q.SIGHT)}needs(){let e=this.ch,t=e.weapons[0]||e.weapons[1],n=t=>t?e.inv.ammo[Cp[t.id].ammo]+t.loaded:0;return{weapon:!t||!this.hasAmmo(),ammo:e.weapons.some(e=>e&&n(e)<60),armor:!e.helmet||!e.vest||e.pack<2,meds:e.inv.meds.bandage<5||e.inv.meds.firstaid<1}}usefulItem(e){let t=this.ch;if(e.kind===`weapon`){let n=Cp[e.id];if(wp[n.cls]===`pistol`)return!t.weapons[2]&&!t.weapons[0];let r=[t.weapons[0],t.weapons[1]].filter(Boolean);return r.length<2?!r.some(t=>t.id===e.id)&&(n.cls!==`SR`||Math.random()<.6):Math.min(...r.map(e=>Tp(e.id)))<Tp(e.id)-.4}if(e.kind===`ammo`)return t.weapons.some(t=>t&&Cp[t.id].ammo===e.id)&&t.inv.ammo[e.id]<150&&t.fits(`ammo`,e.id,1)>0;if(e.kind===`armor`){let n=Ep[e.id];if(n.type===`pack`)return t.pack<n.level;let r=t[n.type];return!r||Ep[r.id].level<n.level}return e.kind===`med`?t.inv.meds[e.id]<(e.id===`bandage`?10:3)&&t.fits(`med`,e.id,1)>0:e.kind===`att`?t.weapons.some(t=>t&&!t.att[Op[e.id].kind]&&Ap(t.id,e.id)):e.kind===`throw`&&t.inv.throws[e.id]<2&&t.fits(`throw`,e.id,1)>0}bestWeaponFor(e){let t=this.ch,n=-1,r=-1e9;for(let i=0;i<3;i++){let a=t.weapons[i];if(!a)continue;let o=Cp[a.id];if(a.loaded+t.inv.ammo[o.ammo]<=0)continue;let s=0;s=o.cls===`SG`?e<18?10:e<35?3:-5:o.cls===`SMG`?e<40?8:e<90?4:0:o.cls===`AR`?e<150?7:5:o.cls===`DMR`?e>60?9:4:o.cls===`SR`?e>80?10:e>35?5:1:1,s>r&&(r=s,n=i)}return n}setGoal(e,t){this.goal=e.clone?e.clone():new H(e.x,e.y,e.z),this.goalKind=t,this.path=null,this.pathIdx=0,this.repathAt=0,this.progressT=0}requestPath(){let e=this.game,t=e.world.nav,n=this.ch,r=e.world.T,i=n.mode===`swim`,a=i?t.nearest(n.pos.x,NaN,n.pos.z,70,!0,e=>!(t.flags[e]&nd.INDOOR)&&t.compSize[t.comp[e]]>200&&Math.abs(r.heightAt(t.x[e],t.z[e])-t.y[e])<.4):t.nearest(n.pos.x,n.pos.y,n.pos.z,20),o=t.nearest(this.goal.x,this.goal.y,this.goal.z,30);if(a<0||o<0){this.path=i&&a>=0?[a]:[];return}let s=t.findPath(a,o,4e4);this.path=s||(i?[a]:[]),this.pathIdx=0,s||this.failCount++}followPath(e,t=!1){let n=this.game,r=n.world.nav,i=this.ch,a=i.input;if(!this.goal)return!1;if(Math.hypot(this.goal.x-i.pos.x,this.goal.z-i.pos.z)<1.1&&Math.abs(this.goal.y-i.pos.y)<2.2)return!0;if(!this.path){if(n.pathBudget>0)n.pathBudget--,this.requestPath();else return!1}let o,s,c;if(this.path&&this.pathIdx<this.path.length){let e=this.path[this.pathIdx];o=r.x[e],s=r.y[e],c=r.z[e];let t=Math.hypot(o-i.pos.x,c-i.pos.z),a=r.flags[e]&nd.INDOOR;if(t<(a?.9:2.2)&&Math.abs(s-i.pos.y)<2&&(this.pathIdx++,this.progressT=0),this.pathIdx+1<this.path.length&&!a&&(n.frame+i.id)%15==0){let e=this.path[this.pathIdx+1];!(r.flags[e]&nd.INDOOR)&&Math.abs(r.y[e]-i.pos.y)<1.5&&r.walkable(n.world.C,i.pos.x,i.pos.y,i.pos.z,r.x[e],r.y[e],r.z[e],im)&&this.solidLine(i.pos.x,i.pos.y,i.pos.z,r.x[e],r.y[e],r.z[e])&&this.pathIdx++}}else o=this.goal.x,s=this.goal.y,c=this.goal.z;return t?this.moveWorld(o-i.pos.x,c-i.pos.z):this.steerTo(o,c,e,!0),this.progressT+=e,this.lastPos.distanceTo(i.pos)>.8?(this.lastPos.copy(i.pos),this.stuckT=0):(this.stuckT+=e,this.stuckT>1&&Math.random()<.08&&!this.ledgeAhead(i.yaw,1.4)&&(a.jump=!0),this.stuckT>2.4&&(this.stuckT=0,this.lastPos.copy(i.pos),this.strafe=Math.random()<.5?-1:1,this.strafeT=.7,this.path&&this.pathIdx<this.path.length-1&&this.pathIdx++,this.failCount++,this.failCount>5&&(this.failCount=0,this.path=null,this.goalKind===`loot`&&this.lootTarget&&this.ignoreLoot.add(this.lootTarget.id),this.goal=null,this.lootTarget=null))),!1}moveWorld(e,t){let n=this.ch,r=n.input,i=Math.hypot(e,t);if(i<.001){r.mx=0,r.mz=0;return}let a=e/i,o=t/i,s=Math.sin(n.yaw),c=Math.cos(n.yaw);r.mz=a*s-o*c,r.mx=a*c+o*s}solidLine(e,t,n,r,i,a){let o=this.game.world.C,s=Math.ceil(Math.hypot(r-e,a-n)/3);for(let c=1;c<s;c++){let l=c/s,u=t+(i-t)*l,d=o.support(e+(r-e)*l,n+(a-n)*l,.3,u+.8);if(d<-.6||d<u-1.5)return!1}return!0}deeperWaterAhead(e,t=1){let n=this.ch,r=this.game.world.C.support(n.pos.x+Math.sin(e)*t,n.pos.z-Math.cos(e)*t,.25,n.pos.y+.6);return r<-.9&&r<n.pos.y-.05}ledgeAhead(e,t=1.1){let n=this.ch,r=this.game.world.C,i=n.pos.x+Math.sin(e)*t,a=n.pos.z-Math.cos(e)*t,o=Math.max(r.support(i,a,.25,n.pos.y+.6),-1.25);return n.pos.y-o>3.6}steerTo(e,t,n,r){let i=this.ch,a=i.input,o=ql(e-i.pos.x,t-i.pos.z);this.desiredYaw=o,this.turn(n,o,0);let s=Math.abs(Gl(i.yaw,o));if(a.mz=s<1.2?1:.2,a.mx=0,this.ledgeAhead(i.yaw)){let e=this.game.world.C,t=i.pos.x+Math.sin(i.yaw)*1.1,r=i.pos.z-Math.cos(i.yaw)*1.1,o=i.pos.y-e.support(t,r,.25,i.pos.y+.6);this.ledgeT=(this.ledgeT||0)+n,o<8.5&&this.ledgeT>4||(a.mz=0,this.strafe=Math.random()<.5?-1:1,this.strafeT=.5)}else this.ledgeT=0;this.strafeT>0&&(this.strafeT-=n,a.mx=this.strafe),a.sprint=r&&s<.5&&!this.target}turn(e,t,n){let r=this.ch,i=Gl(r.yaw,t),a=this.turnRate*e;r.yaw=Wl(r.yaw+Y(i,-a,a));let o=n-r.pitch;r.pitch+=Y(o,-a,a)}perceive(){let e=this.game,t=this.ch;this.eye(am);let n=null,r=1/0,i=Math.sin(t.yaw),a=-Math.cos(t.yaw);for(let o of e.characters){if(o===t||!o.alive||o.mode===`plane`||e.observer&&o.isPlayer)continue;let s=o.pos.x-t.pos.x,c=o.pos.z-t.pos.z,l=o.pos.y-t.pos.y,u=Math.hypot(s,c);if(u>(o.mode===`parachute`||o.mode===`freefall`?300:230))continue;let d=(s*i+c*a)/(u||1),f=t.lastAttacker===o&&e.time-t.lastDamageTime<4;if(u>14&&d<.25&&!f&&o!==this.target)continue;let p=u<60?1:1-(u-60)/260;if(o.crouching&&(p*=.7),o.mode===`swim`&&(p*=.6),Math.abs(l)>25&&(p*=.6),o!==this.target&&!f&&Math.random()>p||!this.canSee(o))continue;let m=u-(f?100:0)-(o===this.target?30:0);m<r&&(r=m,n=o)}n?(n!==this.target&&(this.firstSeen=e.time,this.aimErr.set(Z(-1,1),Z(-1,1)).multiplyScalar(X(9,4,t.skill))),this.target=n,this.targetSeen=e.time,this.lastKnown.copy(n.pos)):this.target&&e.time-this.targetSeen>7&&(this.target=null),!n&&t.lastAttacker&&e.time-t.lastDamageTime<1.5&&t.lastHitDir&&(this.investigate=t.pos.clone().add(t.lastHitDir),this.investigateT=e.time)}hear(e,t,n){n===this.ch||this.target||this.ch.pos.distanceTo(e)>t||(!this.investigate||Math.random()<.5)&&(this.investigate=e.clone(),this.investigateT=this.game.time)}update(e){let t=this.game,n=this.ch,r=n.input;if(!n.alive)return;if(r.firePressed=!1,r.fire=!1,r.aim=!1,n.mode===`plane`){let e=t.plane;if(e.insideMap()&&this.landTarget){let r=Math.hypot(e.pos.x-this.landTarget.x,e.pos.z-this.landTarget.z),i=e.progress()>e.closestF(this.landTarget.x,this.landTarget.z);(r<this.reach||i)&&t.jumpFromPlane(n)}else e.pastMap()&&t.jumpFromPlane(n);return}if(n.mode===`freefall`||n.mode===`parachute`){this.updateDrop(e);return}if(n.mode===`climb`)return;this.roofCheckT=(this.roofCheckT||0)-e,this.roofCheckT<=0&&(this.roofCheckT=1.5,this.checkStranded(1.5));let i=t.player&&n.pos.distanceTo(t.player.pos)>420;this.perceiveT-=e,this.perceiveT<=0&&(this.perceiveT=(i?.5:.2)+Math.random()*.1,this.perceive()),this.thinkT-=e,this.thinkT<=0&&(this.thinkT=(i?.8:.4)+Math.random()*.2,this.think());let a=this.target&&t.time-this.targetSeen<.6;a&&t.time-this.firstSeen>this.react?this.combat(e):this.target&&t.time-this.targetSeen<6&&this.state!==`zone`&&this.hasAmmo()?((!this.goal||this.goalKind!==`chase`)&&this.setGoal(this.lastKnown,`chase`),this.followPath(e),r.sprint=!1,this.goal&&n.pos.distanceTo(this.lastKnown)<3&&(this.target=null)):this.act(e),!a&&n.crouching&&this.state!==`hold`&&Math.random()<.02&&(r.crouch=!0),this.guardLedges(e)}guardLedges(e){let t=this.ch,n=t.input;if(t.mode!==`ground`||n.mx===0&&n.mz===0)return;let r=Math.sin(t.yaw),i=Math.cos(t.yaw),a=r*n.mz+i*n.mx,o=-i*n.mz+r*n.mx,s=Math.hypot(a,o);if(s<.001)return;let c=Math.atan2(a/s,-o/s);if(this.ledgeAhead(c,.9)){let e=this.game.world.C,r=t.pos.x+a/s*.9,i=t.pos.z+o/s*.9;if(t.pos.y-e.support(r,i,.25,t.pos.y+.6)<8.5&&(this.ledgeT||0)>4)return;n.mx=0,n.mz=0,n.jump=!1}else this.deeperWaterAhead(c)&&(n.mx=0,n.mz=0,n.jump=!1)}think(){let e=this.game,t=this.ch,n=e.zone,r=e.redZone&&e.redZone.active;if(r&&e.redZone.contains(t.pos.x,t.pos.z)&&!e.world.isIndoorAt(t.pos.x,t.pos.y,t.pos.z)){if(this.goalKind!==`redzone`||!this.goal){let n=t.pos.x-r.x,i=t.pos.z-r.z,a=Math.hypot(n,i)||1;n/=a,i/=a;let o=e.world.nav;for(let t of[0,.6,-.6,1.2,-1.2]){let a=n*Math.cos(t)-i*Math.sin(t),s=n*Math.sin(t)+i*Math.cos(t),c=o.nearest(r.x+a*(r.r+25),NaN,r.z+s*(r.r+25),30);if(c>=0&&!e.redZone.contains(o.x[c],o.z[c])){this.setGoal(new H(o.x[c],o.y[c],o.z[c]),`redzone`);break}}}return}let i=n.safeTarget(),a=Math.hypot(t.pos.x-i.x,t.pos.z-i.z),o=n.isOutside(t.pos.x,t.pos.z)&&n.damagePerSecond()>0,s=n.state===`wait`?n.timer:n.state===`shrink`?0:999,c=n.next&&a>i.r*.8&&s<a/3.8+45||o;if(this.zonePressure=c,!this.target||e.time-this.targetSeen>4){if(!t.action&&t.health<70){let e=t.bestHeal();if(e&&!(o&&t.health>40)){t.input.heal=e,this.state=`heal`;return}}if(!t.action&&t.health<90&&t.boost<50){let e=t.bestBoost();if(e&&!c){t.input.heal=e;return}}let e=t.weapon;e&&e.loaded<t.magSize(e)*.5&&t.inv.ammo[Cp[e.id].ammo]>0&&!t.action&&(t.input.reload=!0)}if(c){if(!o&&this.needs().weapon){if(this.goalKind===`loot`&&this.lootTarget)return;let t=this.findLoot(30);if(t){this.lootTarget=t,this.setGoal(new H(t.x,t.y,t.z),`loot`),this.lootDeadline=e.time+15,this.state=`loot`;return}}(this.state!==`zone`||!this.goal)&&this.pickZoneGoal(i),this.state=`zone`;return}this.state===`zone`&&this.goal&&Math.hypot(t.pos.x-i.x,t.pos.z-i.z)<i.r*.7&&(this.state=`loot`,this.goal=null),this.investigate&&e.time-this.investigateT<8&&!this.target&&(t.skill>.35&&Math.random()<.6&&(this.desiredYaw=ql(this.investigate.x-t.pos.x,this.investigate.z-t.pos.z),t.pos.distanceTo(this.investigate)<70&&this.needsMet()&&Math.random()<.5&&this.setGoal(this.investigate,`investigate`)),this.investigate=null);let l=e.zone.phase>=4;if(!l&&(!this.goal||this.goalKind===`wander`||this.goalKind===`investigate`)){let t=this.findLoot();if(t){this.lootTarget=t,this.setGoal(new H(t.x,t.y,t.z),`loot`),this.lootDeadline=e.time+22,this.state=`loot`;return}}if(!this.goal&&!t.action){if(l&&Math.random()<.7){this.state=`hold`,this.holdUntil=e.time+Z(4,10),!t.crouching&&Math.random()<.5&&(t.input.crouch=!0);return}let n=e.world.nav,r=Math.min(i.r*.7,160),a=n.randomNear(X(t.pos.x,i.x,.5),X(t.pos.z,i.z,.5),r);a>=0&&this.setGoal(new H(n.x[a],n.y[a],n.z[a]),`wander`),this.state=`wander`}}hasAmmo(){let e=this.ch;return e.weapons.some(t=>t&&(t.loaded>0||e.inv.ammo[Cp[t.id].ammo]>0))}needsMet(){let e=this.needs();return!e.weapon&&!e.ammo}lootComp(e){if(e.navComp===void 0){let t=this.game.world.nav,n=t.nearest(e.x,e.y,e.z,3.5);e.navComp=n>=0&&Math.abs(t.y[n]-e.y)<1.4?t.comp[n]:-1}return e.navComp}findLoot(e=55){let t=this.game,n=this.ch,r=t.world.nav,i=r.nearest(n.pos.x,n.pos.y,n.pos.z,20),a=i>=0?r.comp[i]:-2,o=t.loot.near(n.pos.x,n.pos.y,n.pos.z,e,sm,-10,10),s=null,c=1/0;for(let e of o){if(this.ignoreLoot.has(e.id)||!this.usefulItem(e.item))continue;let t=Math.abs(e.y-n.pos.y);if(t>1.6&&this.lootComp(e)!==a)continue;let r=Math.hypot(e.x-n.pos.x,e.z-n.pos.z)+t*3;e.item.kind===`weapon`&&!n.weapons[0]&&(r-=25),r<c&&(c=r,s=e)}for(let r of t.loot.containers){if(!r.items.length||r.botLooted===n.id||this.ignoreLoot.has(r.id))continue;let t=Math.abs(r.y-n.pos.y),i=Math.hypot(r.x-n.pos.x,r.z-n.pos.z)+t*3;i<e+5&&i<c&&(t<1.6||this.lootComp(r)===a)&&r.items.some(e=>this.usefulItem(e))&&(c=i,s={id:r.id,x:r.x,y:r.y,z:r.z,container:r})}return s}act(e){let t=this.game,n=this.ch,r=n.input;if(this.state===`heal`&&n.action&&n.action.type===`heal`){r.mx=0,r.mz=0,this.lookAround(e);return}if(this.state===`hold`){r.mx=0,r.mz=0,this.lookAround(e),t.time>this.holdUntil&&(this.state=`wander`);return}if(n.active<0||n.active===3){let e=n.weapons[0]?0:n.weapons[1]?1:n.weapons[2]?2:-1;e>=0&&!n.action&&(r.slot=e)}if(!this.goal){r.mx=0,r.mz=0,this.lookAround(e);return}let i=this.followPath(e);if(this.goalKind===`loot`&&this.lootTarget&&t.time>(this.lootDeadline||0))this.ignoreLoot.add(this.lootTarget.id),this.lootTarget=null,this.goal=null,this.thinkT=.1;else{if(this.goalKind===`loot`&&this.lootTarget){let e=this.lootTarget;if(Math.hypot(e.x-n.pos.x,e.z-n.pos.z)<1.7&&Math.abs(e.y-n.pos.y)<1.6){if(e.container){let r=e.container;for(let e=r.items.length-1;e>=0;e--)this.usefulItem(r.items[e])&&t.loot.takeFromContainer(r,e,n);r.botLooted=n.id}else if(t.loot.items.has(e.id)){t.pickUp(n,e);for(let r of t.loot.near(e.x,e.y,e.z,2.6,[]))this.usefulItem(r.item)&&t.pickUp(n,r);for(let e of t.loot.near(n.pos.x,n.pos.y,n.pos.z,2,[]))this.usefulItem(e.item)&&t.pickUp(n,e)}this.ignoreLoot.add(e.id),this.lootTarget=null,this.goal=null,this.thinkT=.15;return}!t.loot.items.has(e.id)&&!e.container&&(this.lootTarget=null,this.goal=null)}(i||this.goalKind===`flee`&&this.progressT>6)&&(this.goal=null,this.state===`flee`&&(this.state=`loot`),(this.goalKind===`investigate`||this.goalKind===`chase`)&&this.lookAround(e))}}lookAround(e){let t=this.ch;Math.random()<e*.6&&(this.desiredYaw=t.yaw+Z(-2,2)),this.turn(e*.5,this.desiredYaw,0)}combat(e){let t=this.game,n=this.ch,r=n.input,i=this.target,a=n.pos.distanceTo(i.pos),o=this.bestWeaponFor(a);o>=0&&o!==n.active&&!n.action&&Math.random()<.08&&(r.slot=o);let s=n.weapon;if(s&&s.loaded===0&&n.inv.ammo[Cp[s.id].ammo]===0){let e=this.bestWeaponFor(a);if(e>=0&&e!==n.active&&!n.action){r.slot=e;return}s=null}if(!s){let t=n.weapons.findIndex((e,t)=>e&&(e.loaded>0||n.inv.ammo[Cp[e.id].ammo]>0)&&t!==n.active);if(t>=0&&!n.action){r.slot=t;return}if(i.weapon&&a<60&&this.goalKind!==`loot`){this.state=`flee`;let t=n.pos.clone().sub(i.pos).setY(0).normalize().multiplyScalar(30).add(n.pos);(!this.goal||this.goalKind!==`flee`)&&this.setGoal(t,`flee`),this.followPath(e)}else this.state===`flee`&&(this.state=`loot`),this.act(e);return}let c=Cp[s.id];if(s.loaded===0){if(n.inv.ammo[c.ammo]>0)n.action||(r.reload=!0);else{let e=this.bestWeaponFor(a);e>=0&&e!==n.active&&(r.slot=e)}}let l=i.hitShape(),u=n.skill>.65&&a<60&&Math.random()<.02?l.head:(l.ta+l.tb)/2,d=a/c.vel,f=this.eye(am),p=Y(n.skill*1.2,.2,1);om.set(i.pos.x+i.vel.x*d*p,i.pos.y+u+i.vel.y*d*.3+.5*cm*d*d*X(.5,1,n.skill),i.pos.z+i.vel.z*d*p);let m=om.x-f.x,h=om.y-f.y,g=om.z-f.z,_=Math.hypot(m,g),v=Math.exp(-(t.time-this.firstSeen)*X(.9,2.4,n.skill)),y=this.aimNoise*(1+a/220)*(1+Math.hypot(i.vel.x,i.vel.z)*.05)+v*3.2+n.shotsInBurst*.05*(1-n.skill);Math.random()<e*3&&this.aimErr.set(Z(-1,1),Z(-1,1));let b=y*Math.PI/180,x=ql(m,g)+this.aimErr.x*b,S=Math.atan2(h,_)+this.aimErr.y*b*.7;this.turn(e,x,S),n.aimDir.set(Math.sin(n.yaw)*Math.cos(n.pitch),Math.sin(n.pitch),-Math.cos(n.yaw)*Math.cos(n.pitch)),n.aimOrigin.copy(f);let C=Math.abs(Gl(n.yaw,ql(m,g))),w=a<c.range*(c.cls===`SG`?.7:c.cls===`PISTOL`||c.cls===`SMG`?.9:1);r.aim=a>15&&n.mode===`ground`,this.strafeT-=e,this.strafeT<=0&&(this.strafeT=Z(.4,1.4),this.strafe=Math.random()<.5?-1:1,Math.random()<.25&&(this.strafe=0));let T=c.cls===`SG`?8:c.cls===`SMG`?20:c.cls===`SR`?120:c.cls===`DMR`?80:45,E=0;if(a>T*1.6&&a>25&&(E=.6),a<T*.4&&c.cls!==`SG`&&(E=-.6),n.health<35&&a>20&&(E=-1),r.mx=this.strafe*(n.skill>.3?1:.5),r.mz=E,r.sprint=!1,this.zonePressure){let n=t.zone.safeTarget();(!this.goal||this.goalKind!==`zone`)&&(this.pickZoneGoal(n),this.state=`zone`),this.followPath(e,!0),r.mx+=this.strafe*.3}this.crouchToggleT-=e,this.crouchToggleT<=0&&(this.crouchToggleT=Z(1.5,4),(a>70&&Math.random()<.6)!==n.crouching&&(r.crouch=!0),a<25&&n.skill>.5&&Math.random()<.15&&n.onGround&&(r.jump=!0));let D=c.modes[s.mode%c.modes.length]===`auto`,O=(2.2+140/(a+10))*(Math.PI/180)+b;w&&C<O&&!n.action&&(this.burstPause>0?this.burstPause-=e:D?(r.fire=!0,this.burstLeft<=0&&(this.burstLeft=a<25?Xl(8,18):a<60?Xl(4,8):Xl(2,4)),n.cooldown<=.001&&s.loaded>0&&(this.burstLeft--,this.burstLeft<=0&&(this.burstPause=a<25?Z(.1,.3):Z(.3,.8)))):n.cooldown<=0&&Math.random()<e*(c.cls===`SR`?2.2:7)&&(r.firePressed=!0,r.fire=!0,this.burstPause=c.cls===`SR`?Z(.3,.9):Z(.05,.3))),n.inv.throws.frag>0&&a>12&&a<30&&Math.random()<e*.05&&n.active!==3&&(this.pendingThrow=!0)}updateDrop(e){let t=this.ch,n=t.input,r=this.landTarget;if(!r)return;let i=r.x-t.pos.x,a=r.z-t.pos.z,o=Math.hypot(i,a),s=ql(i,a);t.yaw=Wl(t.yaw+Y(Gl(t.yaw,s),-2*e,2*e));let c=t.pos.y-Math.max(r.y,0);if(t.mode===`freefall`){let e=o/Math.max(1,c-120);n.mz=+(e>.15),n.dive=+(e<.55),t.pitch=-.6,n.mx=0}else{n.mz=o>30?1:o>10?.3:-1,n.mx=0;let e=this.game.world.C,i=e.support(t.pos.x,t.pos.z,.5,t.pos.y+.5),a=e.support(t.pos.x+Math.sin(t.yaw)*8,t.pos.z-Math.cos(t.yaw)*8,.5,t.pos.y+.5);t.pos.y-i<30&&i>r.y+2.5?n.mz=1:t.pos.y-a<12&&a>r.y+2.5&&o<25&&(n.mz=-1)}}},dm=9.81,fm=new bu,pm=new H;function mm(e,t,n,r,i,a,o,s,c,l,u,d){let f=e-s,p=n-c,m=r,h=a,g=m*m+h*h,_=g>1e-9?-(f*m+p*h)/g:0;_=Y(_,0,o);for(let e=0;e<2;e++){let e=t-Y(t+i*_,l,u),n=g+i*i;_=Y(-(f*r+e*i+p*a)/n,0,o)}let v=e+r*_-s,y=t+i*_,b=n+a*_-c,x=Y(y,l,u);return d.t=_,Math.sqrt(v*v+(y-x)*(y-x)+b*b)}var hm={t:0},gm=class{constructor(e){this.game=e,this.bullets=[]}clear(){this.bullets.length=0}fire(e,t,n,r,i){let a=Cp[r],o=this.game,s=t.x,c=t.y,l=t.z;if(i){let e=pm.subVectors(i,t).dot(n);e>0&&(s+=n.x*e,c+=n.y*e,l+=n.z*e);let r=s-t.x,a=c-t.y,u=l-t.z,d=Math.hypot(r,a,u);d>.01&&o.world.C.raycast(t.x,t.y,t.z,r/d,a/d,u/d,d,Q.BULLET,fm,!0)&&(s=fm.x-r/d*.02,c=fm.y-a/d*.02,l=fm.z-u/d*.02)}let u={x:s,y:c,z:l,vx:n.x*a.vel,vy:n.y*a.vel,vz:n.z*a.vel,shooter:e,wid:r,dmg:a.dmg,dist:0,life:0,maxLife:Math.min(3,a.range*1.6/a.vel),tracer:e.isPlayer?Math.random()<.5:Math.random()<.35,sx:i?i.x:s,sy:i?i.y:c,sz:i?i.z:l,cracked:!1};this.bullets.push(u),u.tracer&&o.effects.tracerStart(u)}update(e){let t=this.game,n=t.world.C,r=t.characters,i=t.player;for(let a=this.bullets.length-1;a>=0;a--){let o=this.bullets[a];o.life+=e;let s=o.x,c=o.y,l=o.z,u=s+o.vx*e,d=c+o.vy*e-.5*dm*e*e,f=l+o.vz*e;o.vy-=dm*e;let p=u-s,m=d-c,h=f-l,g=Math.hypot(p,m,h),_=p/g,v=m/g,y=h/g,b=g,x=null;if(n.raycast(s,c,l,_,v,y,g,Q.BULLET,fm)&&(b=fm.t,x=`world`),c>0&&d<=0){let e=(c-0)/(c-d)*g;e<b&&(b=e,x=`water`)}let S=null,C=null;for(let e of r){if(!e.alive||e===o.shooter||e.mode===`plane`)continue;let t=e.pos.x,n=e.pos.z,r=e.pos.y,i=t-s,a=r+.9-c,u=n-l,d=Y(i*_+a*v+u*y,0,b),f=s+_*d-t,p=c+v*d-(r+.9),m=l+y*d-n;if(f*f+p*p+m*m>2.6*2.6)continue;let h=e.hitShape(),g=t-s,w=r+h.head-c,T=n-l,E=Y(g*_+w*v+T*y,0,b);(s+_*E-t)**2+(c+v*E-(r+h.head))**2+(l+y*E-n)**2<.0225&&E<b&&(b=E,S=e,C=`head`,x=`char`),mm(s,c,l,_,v,y,b,t,n,r+h.ta,r+h.tb,hm)<.24&&hm.t<b&&(b=hm.t,S=e,C=`torso`,x=`char`),mm(s,c,l,_,v,y,b,t,n,r+h.la,r+h.lb,hm)<.19&&hm.t<b&&(b=hm.t,S=e,C=`limb`,x=`char`)}if(i&&i.alive&&o.shooter!==i&&!o.cracked){let e=i.eyePos(pm),n=e.x-s,r=e.y-c,a=e.z-l,u=Y(n*_+r*v+a*y,0,b),d=Math.hypot(s+_*u-e.x,c+v*u-e.y,l+y*u-e.z);d<3.5&&(o.cracked=!0,t.onBulletNear(o,d))}let w=s+_*b,T=c+v*b,E=l+y*b;if(o.dist+=b,x){let e=Cp[o.wid];if(x===`char`){let n=Y(1-Math.max(0,o.dist-e.range*.5)/e.range*.4,.6,1),r=C===`head`?e.cls===`SR`?2.5:e.cls===`SG`?1.5:2.3:C===`torso`?1:.85;e.cls===`SG`&&(r*=Y(1.2-o.dist/40,.2,1.1));let i=o.dmg*r*n;S.takeDamage(i,C,o.shooter,o.wid,new H(o.sx,o.sy,o.sz)),t.effects.blood(w,T,E,_,v,y),o.shooter.isPlayer&&t.onHitMarker(S,C,!S.alive)}else x===`water`?t.effects.splash(w,0,E,.6):(fm.dyn&&fm.dyn.vehicle&&fm.dyn.vehicle.damage(o.dmg*.45,o.shooter),t.effects.impact(w,T,E,fm.nx,fm.ny,fm.nz,fm.terrain?$.DIRT:fm.surf),Math.random()<.35&&t.audio.play(`impact`,{x:w,y:T,z:E},{gain:.35,surf:fm.surf}));o.tracer&&t.effects.tracerEnd(o,w,T,E),this.bullets.splice(a,1)}else o.x=u,o.y=d,o.z=f,o.tracer&&t.effects.tracerMove(o),(o.life>o.maxLife||o.y<-20)&&(o.tracer&&t.effects.tracerEnd(o,o.x,o.y,o.z),this.bullets.splice(a,1))}}},_m=class{constructor(e,t,n,r){this.max=e,this.list=[];let i=new Ii(1,1),a=new Fa;a.index=i.index,a.attributes.position=i.attributes.position,a.attributes.uv=i.attributes.uv,this.iPos=new Float32Array(e*3),this.iCol=new Float32Array(e*4),this.iSR=new Float32Array(e*2),a.setAttribute(`iPos`,new $r(this.iPos,3).setUsage(Ge)),a.setAttribute(`iCol`,new $r(this.iCol,4).setUsage(Ge)),a.setAttribute(`iSR`,new $r(this.iSR,2).setUsage(Ge)),a.instanceCount=0,this.geo=a;let o=new qi({uniforms:{map:{value:t},fogColor:{value:r.fogColor},fogDensity:{value:r.fogDensity}},vertexShader:`
        attribute vec3 iPos; attribute vec4 iCol; attribute vec2 iSR;
        varying vec2 vUv; varying vec4 vCol; varying float vFog;
        uniform float fogDensity;
        void main() {
          vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
          float c = cos(iSR.y), s = sin(iSR.y);
          vec2 p = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * iSR.x;
          mv.xy += p;
          gl_Position = projectionMatrix * mv;
          vUv = uv; vCol = iCol;
          float d = length(mv.xyz);
          vFog = 1.0 - exp(-fogDensity * fogDensity * d * d);
        }`,fragmentShader:`
        uniform sampler2D map; uniform vec3 fogColor;
        varying vec2 vUv; varying vec4 vCol; varying float vFog;
        void main() {
          vec4 t = texture2D(map, vUv);
          vec4 c = vec4(vCol.rgb, vCol.a * t.a) * vec4(t.rgb, 1.0);
          ${n?`c.rgb *= c.a; c.rgb *= (1.0 - vFog);`:`c.rgb = mix(c.rgb, fogColor, vFog);`}
          if (c.a < 0.003) discard;
          gl_FragColor = c;
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,blending:n?2:1});this.mesh=new K(a,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?20:10}spawn(e){this.list.length>=this.max&&this.list.shift(),e.t=0,e.rot=e.rot??Z(0,6.28),e.rv=e.rv??0,e.drag=e.drag??0,e.grav=e.grav??0,e.a1=e.a1??0,e.s1=e.s1??e.s0,this.list.push(e)}update(e){let t=this.list,n=0;for(let n=t.length-1;n>=0;n--){let r=t[n];r.t+=e,r.t>=r.life&&(t[n]=t[t.length-1],t.pop())}for(let r of t){let t=Math.exp(-r.drag*e);r.vx*=t,r.vy=r.vy*t-r.grav*e,r.vz*=t,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.rot+=r.rv*e;let i=r.t/r.life,a=r.a0+(r.a1-r.a0)*i;r.fadeIn&&(a*=Math.min(1,r.t/r.fadeIn)),this.iPos[n*3]=r.x,this.iPos[n*3+1]=r.y,this.iPos[n*3+2]=r.z,this.iCol[n*4]=r.r,this.iCol[n*4+1]=r.g,this.iCol[n*4+2]=r.b,this.iCol[n*4+3]=Math.max(0,a),this.iSR[n*2]=r.s0+(r.s1-r.s0)*Math.sqrt(i),this.iSR[n*2+1]=r.rot,n++}this.geo.instanceCount=n,n>0&&(this.geo.attributes.iPos.needsUpdate=!0,this.geo.attributes.iCol.needsUpdate=!0,this.geo.attributes.iSR.needsUpdate=!0,this.geo.attributes.iPos.addUpdateRange(0,n*3),this.geo.attributes.iCol.addUpdateRange(0,n*4),this.geo.attributes.iSR.addUpdateRange(0,n*2))}},vm=class{constructor(e){this.max=e,this.list=[];let t=new Fa;t.setAttribute(`position`,new er([0,-1,0,1,-1,0,1,1,0,0,1,0],3)),t.setIndex([0,1,2,0,2,3]),this.iA=new Float32Array(e*3),this.iB=new Float32Array(e*3),this.iW=new Float32Array(e*2),t.setAttribute(`iA`,new $r(this.iA,3).setUsage(Ge)),t.setAttribute(`iB`,new $r(this.iB,3).setUsage(Ge)),t.setAttribute(`iW`,new $r(this.iW,2).setUsage(Ge)),t.instanceCount=0,this.geo=t;let n=new qi({vertexShader:`
        attribute vec3 iA; attribute vec3 iB; attribute vec2 iW;
        varying float vT; varying float vA; varying float vS;
        void main() {
          vec3 P = mix(iA, iB, position.x);
          vec3 axis = iB - iA;
          vec3 toCam = cameraPosition - P;
          vec3 side = normalize(cross(axis, toCam) + vec3(1e-5));
          P += side * position.y * iW.x;
          vT = position.x; vA = iW.y; vS = position.y;
          gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
        }`,fragmentShader:`
        varying float vT; varying float vA; varying float vS;
        void main() {
          float a = vA * vT * (1.0 - abs(vS));
          gl_FragColor = vec4(vec3(1.0, 0.82, 0.45) * a * 2.2, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,blending:2});this.mesh=new K(t,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=21}update(){let e=0;for(let t of this.list){if(e>=this.max)break;this.iA.set([t.ax,t.ay,t.az],e*3),this.iB.set([t.bx,t.by,t.bz],e*3),this.iW[e*2]=t.w,this.iW[e*2+1]=t.a,e++}this.geo.instanceCount=e,e&&(this.geo.attributes.iA.needsUpdate=!0,this.geo.attributes.iB.needsUpdate=!0,this.geo.attributes.iW.needsUpdate=!0)}},ym=class{constructor(e,t=400){let n=document.createElement(`canvas`);n.width=n.height=64;let r=n.getContext(`2d`),i=r.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,`rgba(10,8,6,1)`),i.addColorStop(.35,`rgba(30,26,22,0.95)`),i.addColorStop(.55,`rgba(90,82,72,0.5)`),i.addColorStop(1,`rgba(120,110,100,0)`),r.fillStyle=i,r.fillRect(0,0,64,64);let a=new Ei(n);a.colorSpace=ze;let o=new wr({map:a,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.mesh=new si(new Ii(.16,.16),o,t),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,e.add(this.mesh),this.max=t,this.next=0,this.m4=new W,this.q=new ft,this.n=new H,this.z=new H(0,0,1)}add(e,t,n,r,i,a){this.n.set(r,i,a).normalize(),this.q.setFromUnitVectors(this.z,this.n);let o=.7+Math.random()*.6;this.m4.compose(new H(e+r*.012,t+i*.012,n+a*.012),this.q,new H(o,o,o)),this.mesh.setMatrixAt(this.next,this.m4),this.next=(this.next+1)%this.max,this.mesh.count=Math.min(this.max,Math.max(this.mesh.count,this.next===0?this.max:this.next)),this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.mesh.count=0,this.next=0}},bm=class{constructor(e,t,n){this.game=e;let r=Gu(),i=Ku();this.alpha=new _m(4e3,i,!1,n),this.add=new _m(1500,r,!0,n),this.streaks=new vm(400),t.add(this.alpha.mesh,this.add.mesh,this.streaks.mesh),this.decals=new ym(t),this.tracers=new Map,this.dyingTracers=[],this.smokes=[],this.jet=null,this.jetAcc=0,this.redSmokes=[],this.scene=t}clear(){this.decals.clear(),this.alpha.list.length=0,this.add.list.length=0,this.streaks.list.length=0,this.dyingTracers.length=0,this.tracers.clear(),this.smokes.length=0,this.redSmokes.length=0}muzzle(e,t,n=!1){let r=n?.9:.55;this.add.spawn({x:e.x+t.x*.1,y:e.y+t.y*.1,z:e.z+t.z*.1,vx:0,vy:0,vz:0,life:.05,s0:r,s1:r*1.3,r:1,g:.75,b:.35,a0:1,a1:.2}),this.add.spawn({x:e.x+t.x*.35,y:e.y+t.y*.35,z:e.z+t.z*.35,vx:0,vy:0,vz:0,life:.04,s0:r*.6,r:1,g:.9,b:.6,a0:.9,a1:0}),this.alpha.spawn({x:e.x+t.x*.2,y:e.y,z:e.z+t.z*.2,vx:t.x*1.5,vy:.5,vz:t.z*1.5,life:.7,s0:.25,s1:.9,r:.8,g:.8,b:.8,a0:.25,a1:0,drag:2})}tracerStart(e){this.tracers.set(e,{ax:e.sx,ay:e.sy,az:e.sz,bx:e.x,by:e.y,bz:e.z,w:.045,a:.9})}tracerMove(e){let t=this.tracers.get(e);if(!t)return;t.bx=e.x,t.by=e.y,t.bz=e.z;let n=t.bx-t.ax,r=t.by-t.ay,i=t.bz-t.az,a=Math.hypot(n,r,i);if(a>18){let e=(a-18)/a;t.ax+=n*e,t.ay+=r*e,t.az+=i*e}}tracerEnd(e,t,n,r){let i=this.tracers.get(e);i&&(i.bx=t,i.by=n,i.bz=r,i.dying=.05,this.tracers.delete(e),this.dyingTracers.push(i))}impact(e,t,n,r,i,a,o){let s=o===$.METAL;o!==$.FOLIAGE&&o!==$.WATER&&this.decals.add(e,t,n,r,i,a);let c=o===$.WOOD,l=o===$.DIRT||o===$.GRASS?[.45,.38,.28]:c?[.45,.32,.2]:[.72,.7,.66];for(let o=0;o<3;o++)this.alpha.spawn({x:e+r*.05,y:t+i*.05,z:n+a*.05,vx:r*Z(1,3)+Z(-1,1),vy:i*Z(1,3)+Z(0,1.5),vz:a*Z(1,3)+Z(-1,1),life:Z(.5,1.1),s0:.15,s1:Z(.6,1),r:l[0],g:l[1],b:l[2],a0:.75,a1:0,drag:3,grav:1});if(s||Math.random()<.3)for(let o=0;o<(s?6:2);o++)this.add.spawn({x:e,y:t,z:n,vx:r*4+Z(-3,3),vy:i*4+Z(0,4),vz:a*4+Z(-3,3),life:Z(.15,.35),s0:.06,s1:.03,r:1,g:.75,b:.35,a0:1,a1:0,grav:12})}blood(e,t,n,r,i,a){for(let i=0;i<4;i++)this.alpha.spawn({x:e,y:t,z:n,vx:r*Z(.5,2)+Z(-.8,.8),vy:Z(-.2,1.2),vz:a*Z(.5,2)+Z(-.8,.8),life:Z(.35,.7),s0:.15,s1:Z(.45,.8),r:.45,g:.02,b:.02,a0:.9,a1:0,drag:2.5,grav:4})}splash(e,t,n,r=1){for(let i=0;i<8*r;i++)this.alpha.spawn({x:e+Z(-.3,.3)*r,y:t,z:n+Z(-.3,.3)*r,vx:Z(-1.5,1.5)*r,vy:Z(2,5)*r,vz:Z(-1.5,1.5)*r,life:Z(.5,1),s0:.25*r,s1:.8*r,r:.92,g:.96,b:1,a0:.75,a1:0,grav:9})}dust(e,t,n,r=1){for(let i=0;i<10*r;i++){let r=Z(0,6.28);this.alpha.spawn({x:e,y:t+.1,z:n,vx:Math.cos(r)*Z(1,4),vy:Z(.2,1),vz:Math.sin(r)*Z(1,4),life:Z(.8,1.6),s0:.4,s1:Z(1.5,2.5),r:.6,g:.55,b:.48,a0:.45,a1:0,drag:2.5})}}explosion(e,t,n){this.add.spawn({x:e,y:t+.5,z:n,vx:0,vy:0,vz:0,life:.18,s0:6,s1:9,r:1,g:.85,b:.55,a0:1,a1:0});for(let r=0;r<14;r++)this.add.spawn({x:e,y:t+.4,z:n,vx:Z(-6,6),vy:Z(1,7),vz:Z(-6,6),life:Z(.25,.55),s0:Z(1.2,2.2),s1:Z(2.5,3.5),r:1,g:Z(.4,.7),b:.15,a0:.9,a1:0,drag:4});for(let r=0;r<18;r++)this.alpha.spawn({x:e+Z(-1,1),y:t+Z(.2,1.5),z:n+Z(-1,1),vx:Z(-3,3),vy:Z(.5,3),vz:Z(-3,3),life:Z(2.5,4.5),s0:1.5,s1:Z(4,6),r:.25,g:.24,b:.23,a0:.7,a1:0,drag:1.5,rv:Z(-.5,.5)});for(let r=0;r<12;r++)this.alpha.spawn({x:e,y:t+.3,z:n,vx:Z(-9,9),vy:Z(4,11),vz:Z(-9,9),life:Z(.8,1.4),s0:.12,s1:.1,r:.15,g:.13,b:.1,a0:1,a1:1,grav:14})}smokeCloud(e,t,n,r=[.86,.86,.86],i=24,a=7){let o={x:e,y:t+2,z:n,r:a,until:this.game.time+i,color:r,emit:3,acc:0};return this.smokes.push(o),o}update(e){let t=this.game;for(let n=this.smokes.length-1;n>=0;n--){let r=this.smokes[n];if(t.time>r.until)this.smokes.splice(n,1);else if(r.emit>0)for(r.emit-=e,r.acc+=e*16;r.acc>1;){r.acc--;let e=Z(0,6.28),n=Z(0,r.r*.7);this.alpha.spawn({x:r.x+Math.cos(e)*n*.4,y:r.y-1.5,z:r.z+Math.sin(e)*n*.4,vx:Math.cos(e)*Z(1.5,3.5),vy:Z(.3,1.4),vz:Math.sin(e)*Z(1.5,3.5),life:Math.max(4,r.until-t.time-Z(0,2)),s0:3,s1:Z(8,11),r:r.color[0],g:r.color[1],b:r.color[2],a0:.85,a1:0,drag:.9,rv:Z(-.2,.2),fadeIn:.5})}}for(let t=this.redSmokes.length-1;t>=0;t--){let n=this.redSmokes[t];if(this.game.time>n.until)this.redSmokes.splice(t,1);else for(n.acc=(n.acc||0)+e*6;n.acc>1;)n.acc--,this.alpha.spawn({x:n.x+Z(-.3,.3),y:n.y+.6,z:n.z+Z(-.3,.3),vx:Z(-.4,.4)+.9,vy:Z(3,5),vz:Z(-.4,.4)+.3,life:Z(5,8),s0:.8,s1:Z(5,8),r:.85,g:.12,b:.1,a0:.8,a1:0,drag:.3,rv:Z(-.3,.3)})}this.jet&&this.updateJet(e),this.alpha.update(e),this.add.update(e);let n=this.dyingTracers;for(let t=n.length-1;t>=0;t--){let r=n[t];r.dying-=e,r.a=Math.max(0,r.dying/.05)*.9,r.dying<=0&&n.splice(t,1)}this.streaks.list=[...this.tracers.values(),...n],this.streaks.update()}initJet(e){this.jet={x:e.x,y:e.y,z:e.z};let t=new Mi(2.6,.9,136,16,28,!0);t.translate(0,68,0);let n=new K(t,new qi({uniforms:{uTime:qu.time,fogColor:{value:this.game.world.env.fogColor},fogDensity:{value:this.game.world.env.fogDensity}},vertexShader:`
        uniform float uTime;
        varying float vH; varying vec3 vN; varying vec3 vW; varying float vFog;
        uniform float fogDensity;
        void main() {
          vH = position.y / ${136 .toFixed(1)};
          vec3 p = position;
          // wind bends the top
          p.x += pow(vH, 2.2) * 7.0 + sin(uTime * 1.7 + vH * 9.0) * vH * 0.6;
          p.z += pow(vH, 2.4) * 2.0;
          float swell = 1.0 + vH * 0.6 + sin(uTime * 6.0 + vH * 40.0) * 0.08;
          p.xz *= mix(1.0, swell, 1.0);
          vec4 w = modelMatrix * vec4(p, 1.0);
          vW = w.xyz;
          vN = normalize(normalMatrix * normal);
          vec4 mv = viewMatrix * w;
          float d = length(mv.xyz);
          vFog = 1.0 - exp(-fogDensity * fogDensity * d * d);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uTime; uniform vec3 fogColor;
        varying float vH; varying vec3 vN; varying vec3 vW; varying float vFog;
        float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          float streak = h21(vec2(floor(atan(vW.z, vW.x) * 9.0), floor(vW.y * 0.6 - uTime * 26.0)));
          float a = (0.7 + streak * 0.3) * (1.0 - smoothstep(0.62, 1.0, vH)) * smoothstep(0.0, 0.02, vH);
          float rim = pow(1.0 - abs(dot(normalize(vN), vec3(0.0, 0.0, 1.0))), 2.0);
          vec3 c = mix(vec3(0.92, 0.96, 1.0), vec3(1.0), streak) * (0.85 + rim * 0.3);
          c = mix(c, fogColor, vFog);
          gl_FragColor = vec4(c, a * (1.0 - vFog * 0.6));
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,side:2}));n.position.set(e.x,e.y,e.z),n.renderOrder=9,n.frustumCulled=!1,this.scene.add(n),this.jetMesh=n}updateJet(e){let t=this.jet;for(this.jetAcc+=e*95;this.jetAcc>1;){this.jetAcc--;let e=Z(45,52);this.alpha.spawn({x:t.x+Z(-.6,.6),y:t.y+Z(0,3),z:t.z+Z(-.6,.6),vx:Z(-.8,.8)+2.2,vy:e,vz:Z(-.8,.8)+.7,life:Z(6.5,9),s0:2.2,s1:Z(14,22),r:.97,g:.985,b:1,a0:.62,a1:0,grav:9.8,drag:.1,rv:Z(-.3,.3),fadeIn:.2})}Math.random()<e*20&&this.alpha.spawn({x:t.x+Z(-6,6)+4,y:t.y+Z(0,2),z:t.z+Z(-6,6),vx:Z(-1,1)+1,vy:Z(.5,2),vz:Z(-1,1),life:Z(2,3.5),s0:3,s1:8,r:.95,g:.97,b:1,a0:.35,a1:0,drag:.5})}smokeBlocks(e,t,n,r,i,a){for(let o of this.smokes){if(this.game.time>o.until-2||o.until-this.game.time>22)continue;let s=r-e,c=i-t,l=a-n,u=s*s+c*c+l*l,d=((o.x-e)*s+(o.y-t)*c+(o.z-n)*l)/(u||1);d=Y(d,0,1);let f=e+s*d-o.x,p=t+c*d-o.y,m=n+l*d-o.z;if(f*f+p*p*.5+m*m<o.r*o.r)return!0}return!1}},xm=new bu,Sm=class{constructor(e,t){this.game=e,this.scene=t,this.list=[]}clear(){for(let e of this.list)this.scene.remove(e.mesh);this.list.length=0}spawn(e,t,n,r,i){let a=ip(e);a.position.copy(t),this.scene.add(a),this.list.push({type:e,pos:t.clone(),vel:n.clone(),fuse:r,owner:i,mesh:a,rest:!1,spin:new H(Math.random()*8,Math.random()*8,Math.random()*8)}),this.game.onNoise(t,25,i)}update(e){let t=this.game,n=t.world.C;for(let r=this.list.length-1;r>=0;r--){let i=this.list[r];if(i.fuse-=e,!i.rest){i.vel.y-=9.81*e;let r=i.vel.clone().multiplyScalar(e),a=r.length();if(a>1e-5){let e=r.x/a,o=r.y/a,s=r.z/a;if(n.raycast(i.pos.x,i.pos.y,i.pos.z,e,o,s,a+.06,Q.MOVE|Q.BULLET,xm)){i.pos.set(xm.x-e*.06,xm.y-o*.06,xm.z-s*.06);let n=new H(xm.nx,xm.ny,xm.nz),r=i.vel.dot(n);i.vel.addScaledVector(n,-1.35*r),i.vel.multiplyScalar(.65),Math.abs(r)>2&&t.audio.play(`bounce`,i.pos,{gain:Y(Math.abs(r)/10,.1,.6)}),xm.ny>.6&&i.vel.length()<1.2&&(i.rest=!0,i.vel.set(0,0,0))}else i.pos.add(r)}i.pos.y<-.1&&t.world.T.heightAt(i.pos.x,i.pos.z)<-.2&&(i.wet||t.effects.splash(i.pos.x,0,i.pos.z,.6),i.wet=!0,i.vel.multiplyScalar(.2),i.pos.y=Math.max(i.pos.y,t.world.T.heightAt(i.pos.x,i.pos.z)+.05)),i.mesh.rotation.x+=i.spin.x*e,i.mesh.rotation.y+=i.spin.y*e}i.mesh.position.copy(i.pos),i.fuse<=0&&(this.detonate(i),this.scene.remove(i.mesh),this.list.splice(r,1))}}detonate(e){let t=this.game;if(e.type===`smoke`){t.effects.smokeCloud(e.pos.x,e.pos.y,e.pos.z),t.audio.play(`smoke`,e.pos,{gain:.7});return}let n=e.pos;e.wet?(t.effects.splash(n.x,0,n.z,3),t.audio.play(`explosion`,n,{gain:.6})):(t.effects.explosion(n.x,n.y,n.z),t.audio.play(`explosion`,n,{gain:1})),t.onNoise(n,200,e.owner);for(let r of t.characters){if(!r.alive||r.mode===`plane`)continue;let i=r.pos.x,a=r.pos.y+1,o=r.pos.z,s=Math.hypot(i-n.x,a-n.y,o-n.z);if(s>9||!t.world.C.lineClear(n.x,n.y+.3,n.z,i,a,o,Q.BULLET)&&!t.world.C.lineClear(n.x,n.y+.3,n.z,i,r.pos.y+1.6,o,Q.BULLET))continue;let c=160*Y(1-s/9,0,1)**1.4*(e.wet?.3:1);c>1&&r.takeDamage(c,`torso`,e.owner,`frag`,n.clone())}t.onExplosion(n)}},Cm=[[120,80,430,.6],[80,60,250,1.2],[60,45,140,2.5],[50,35,80,4.5],[40,30,44,7],[30,22,20,10],[20,18,0,14]],wm=class{constructor(e,t){this.game=e;let n=new Mi(1,1,1,128,1,!0);n.translate(0,.5,0),this.mat=new qi({uniforms:{uTime:{value:0},uR:{value:1e3}},vertexShader:`
        varying vec3 vW; varying vec2 vUv;
        void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vUv = uv; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
        uniform float uTime; uniform float uR;
        varying vec3 vW; varying vec2 vUv;
        void main() {
          float ang = vUv.x * 6.2832 * uR / 6.0;
          float stripes = 0.5 + 0.5 * sin(vW.y * 0.35 - uTime * 1.6 + sin(ang * 0.05) * 2.0);
          float grid = smoothstep(0.92, 1.0, abs(sin(vW.y * 0.8 + uTime * 0.5))) * 0.35;
          float d = length(cameraPosition.xz - vW.xz);
          float near = 1.0 - smoothstep(30.0, 900.0, d);
          float a = (0.16 + stripes * 0.12 + grid) * (0.35 + 0.65 * near);
          a *= smoothstep(600.0, 200.0, vW.y);
          gl_FragColor = vec4(vec3(0.16, 0.42, 1.0) * (1.1 + stripes * 0.4), a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,side:2}),this.mesh=new K(n,this.mat),this.mesh.position.y=-20,this.mesh.frustumCulled=!1,this.mesh.renderOrder=30,t.add(this.mesh),this.reset()}reset(){this.t=0,this.phase=-1,this.cur={x:0,z:0,r:1150},this.from={...this.cur},this.next=null,this.state=`idle`,this.timer=0,this.dps=0,this.mesh.visible=!0}landScore(e,t,n){let r=this.game.world.T,i=0,a=0;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,c=n*Math.sqrt(o%6/6+.08),l=e+Math.cos(s)*c,u=t+Math.sin(s)*c;a++,Math.abs(l)<800&&Math.abs(u)<800&&r.heightAt(l,u)>.3&&i++}return i/a}pickNext(e){let t=null,n=-1,r=Math.max(0,this.cur.r-e);for(let i=0;i<40;i++){let i=Z(0,Math.PI*2),a=Math.sqrt(Math.random())*r,o=this.cur.x+Math.cos(i)*a,s=this.cur.z+Math.sin(i)*a,c=Math.max(0,800-e*.6-20);if(o=Y(o,-c,c),s=Y(s,-c,c),Math.hypot(o-this.cur.x,s-this.cur.z)>r+1)continue;let l=this.landScore(o,s,Math.max(e,15))+Math.random()*.15;if(e<200){let t=this.game.world.nav.nodesInCircle(o,s,Math.max(e*.7,10),60).length;l+=Math.min(1,t/(e<40?6:30))*1.5}l>n&&(n=l,t={x:o,z:s,r:e})}return t||{x:this.cur.x,z:this.cur.z,r:e}}update(e){if(this.t+=e,this.state===`idle`)this.t>=55&&(this.phase=0,this.next=this.pickNext(Cm[0][2]),this.state=`wait`,this.timer=Cm[0][0],this.game.onZoneEvent(`reveal`,0));else if(this.state===`wait`)this.timer-=e,this.timer<=0&&(this.state=`shrink`,this.timer=Cm[this.phase][1],this.from={...this.cur},this.dps=Cm[this.phase][3],this.game.onZoneEvent(`shrink`,this.phase));else if(this.state===`shrink`){this.timer-=e;let t=Cm[this.phase][1],n=Y(1-this.timer/t,0,1);this.cur={x:X(this.from.x,this.next.x,n),z:X(this.from.z,this.next.z,n),r:X(this.from.r,this.next.r,n)},this.timer<=0&&(this.cur={...this.next},this.phase++,this.phase>=Cm.length?(this.state=`done`,this.next=null,this.dps=Cm[Cm.length-1][3]):(this.next=this.pickNext(Cm[this.phase][2]),this.state=`wait`,this.timer=Cm[this.phase][0],this.game.onZoneEvent(`reveal`,this.phase)))}this.mesh.visible=this.state===`shrink`||this.state===`done`||this.state===`wait`&&this.phase>0,this.mat.uniforms.uTime.value+=e,this.mat.uniforms.uR.value=this.cur.r,this.mesh.position.set(this.cur.x,-20,this.cur.z),this.mesh.scale.set(Math.max(.5,this.cur.r),700,Math.max(.5,this.cur.r))}isOutside(e,t){return Math.hypot(e-this.cur.x,t-this.cur.z)>this.cur.r}damagePerSecond(){return this.state===`shrink`||this.state===`done`||this.state===`wait`&&this.phase>0?Math.max(this.dps,this.phase>0?Cm[Math.max(0,this.phase-1)][3]:0):0}safeTarget(){return this.next||this.cur}status(){return this.state===`idle`?{text:`Play area revealed in`,time:55-this.t,kind:`info`}:this.state===`wait`?{text:`Restricting the play area in`,time:this.timer,kind:`wait`}:this.state===`shrink`?{text:`Restricting the play area`,time:this.timer,kind:`shrink`}:{text:`Final zone`,time:0,kind:`done`}}};function Tm(e,t,n,r,i=0,a=0,o=0,s=null){let c=new K(new Ai(e,t,n),s||new Yi({color:r,roughness:.6,metalness:.2}));return c.position.set(i,a,o),c.castShadow=!0,c}function Em(){let e=new ln,t=new Yi({color:15330286,roughness:.5,metalness:.25}),n=new Yi({color:13111342,roughness:.5}),r=new Yi({color:5988454,roughness:.6,metalness:.3}),i=new Yi({color:1712168,roughness:.1,metalness:.6}),a=new K(new Mi(2.3,2.3,28,16),t);a.rotation.x=Math.PI/2,e.add(a);let o=new K(new Li(2.3,16,10,0,Math.PI*2,0,Math.PI/2),t);o.rotation.x=Math.PI/2,o.position.z=14,o.scale.set(1,1.6,1),e.add(o);let s=Tm(2.6,.9,2.2,0,0,1.3,15.2,i);e.add(s);let c=new K(new Mi(2.3,.6,10,14),t);c.rotation.x=-Math.PI/2,c.position.set(0,.9,-18.5),e.add(c),e.add(Tm(42,.5,4.6,0,0,2,2,t)),e.add(Tm(10,.4,3.2,0,0,2.6,-22,t));let l=Tm(.5,7,4.5,0,0,5.8,-21,n);e.add(l);for(let n of[-.27,.27])e.add(Tm(.02,3.4,.9,0,n,6,-21,t)),e.add(Tm(.02,.9,3,0,n,6,-21,t));e.userData.props=[];for(let t of[-14,-7,7,14]){let n=new K(new Mi(.75,.9,4.4,10),r);n.rotation.x=Math.PI/2,n.position.set(t,1.6,3.4),e.add(n);let i=new ln;i.position.set(t,1.6,5.8);for(let e=0;e<4;e++){let t=Tm(.3,2.4,.08,2236962,0,1.2,0),n=new ln;n.rotation.z=e/4*Math.PI*2,n.add(t),i.add(n)}e.add(i),e.userData.props.push(i)}return e.add(Tm(4.7,.6,26,0,0,-1.2,0,n)),e.add(Tm(3.6,.3,6,0,0,-1.6,-21.5,r)),e.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),e}var Dm=class{constructor(e){this.model=Em(),this.model.visible=!1,e.add(this.model),this.pos=new H,this.dir=new H(1,0,0),this.active=!1}setup(e=460,t=82,n=Math.random){let r=n()*Math.PI*2,i=new H(Math.cos(r),0,Math.sin(r)),a=new H(-i.z,0,i.x),o=(n()-.5)*520;this.start=new H().addScaledVector(i,-1500).addScaledVector(a,o),this.end=new H().addScaledVector(i,1500).addScaledVector(a,o),this.start.y=this.end.y=e,this.dir.copy(i),this.speed=t,this.length=this.start.distanceTo(this.end),this.t=0,this.active=!0,this.model.visible=!0,this.pos.copy(this.start),this.model.position.copy(this.pos),this.model.rotation.set(0,Math.atan2(i.x,i.z),0)}progress(){return this.t*this.speed/this.length}insideMap(){return Math.abs(this.pos.x)<790&&Math.abs(this.pos.z)<790}pastMap(){return this.progress()>.5&&!this.insideMap()}update(e){if(!this.active)return;this.t+=e;let t=Math.min(1.05,this.progress());this.pos.lerpVectors(this.start,this.end,t),this.model.position.copy(this.pos);for(let t of this.model.userData.props)t.rotation.z+=e*40;t>=1.05&&(this.active=!1,this.model.visible=!1)}closestF(e,t){let n=this.start.x,r=this.start.z,i=this.end.x-n,a=this.end.z-r;return Math.max(0,Math.min(1,((e-n)*i+(t-r)*a)/(i*i+a*a)))}pointAt(e,t=new H){return t.lerpVectors(this.start,this.end,e)}},Om=null;function km(){if(!Om){let e=new Li(4.2,16,6,0,Math.PI*2,0,Math.PI/2.6);e.scale(1.25,.55,.85);let t=e.attributes.position,n=new Float32Array(t.count*3),r=new G(13111342),i=new G(15921906);for(let e=0;e<t.count;e++){let a=Math.atan2(t.getZ(e),t.getX(e)),o=Math.floor(a/(Math.PI*2)*16+16)%2?r:i;n[e*3]=o.r,n[e*3+1]=o.g,n[e*3+2]=o.b}e.setAttribute(`color`,new Zn(n,3)),Om=e}let e=new ln,t=new K(Om,new Yi({vertexColors:!0,roughness:.85,side:2}));t.position.y=3.2,t.castShadow=!0,e.add(t);let n=new fi({color:3355443}),r=[];for(let[e,t]of[[-4.4,0],[4.4,0],[-3,2.4],[3,2.4],[-3,-2.4],[3,-2.4]])r.push(new H(0,-.4,0),new H(e,3.2,t));let i=new fr().setFromPoints(r);return e.add(new wi(i,n)),e}var Am=8;function jm(e,t,n,r=null){if(!r){let r=new Ai(e,t,n);return r.translate(0,t/2,0),r}return null}function Mm(e){switch(e){case`ammo`:{let e=new Ai(.28,.16,.18);return e.translate(0,.08,0),e}case`helmet`:{let e=new Li(.16,10,6,0,Math.PI*2,0,Math.PI/2);return e.scale(1,.85,1.1),e}case`vest`:{let e=new Ai(.46,.1,.55);return e.translate(0,.05,0),e}case`pack`:{let e=new Ai(.38,.5,.25);return e.translate(0,.25,0),e}case`medbox`:{let e=new Ai(.3,.14,.22);return e.translate(0,.07,0),e}case`can`:{let e=new Mi(.045,.045,.17,8);return e.translate(0,.085,0),e}case`att`:{let e=new Mi(.04,.04,.2,8);return e.rotateZ(Math.PI/2),e.translate(0,.05,0),e}case`crate`:{let e=new Ai(.9,.55,.65);return e.translate(0,.275,0),e}default:return jm(.2,.2,.2)}}function Nm(e){return e.kind===`weapon`||e.kind===`throw`?`w:`+e.id:e.kind===`ammo`?`ammo`:e.kind===`armor`?Ep[e.id].type===`pack`?`pack`:Ep[e.id].type:e.kind===`med`?e.id===`drink`||e.id===`painkiller`?`can`:`medbox`:(e.kind,`att`)}function Pm(e){if(e.kind===`ammo`)return Sp[e.id].color;if(e.kind===`armor`){let t=Ep[e.id];return t.type===`helmet`?[0,5595194,3882818,2898474][t.level]:t.type===`vest`?[0,7039818,4016698,2829872][t.level]:[0,8022602,4872762,3815994][t.level]}return e.kind===`med`?{bandage:15262416,firstaid:15921906,medkit:13111342,drink:2783960,painkiller:15263976}[e.id]:e.kind===`att`?1908256:16777215}var Fm=class{constructor(e,t){this.game=e,this.scene=t,this.items=new Map,this.nextId=1,this.grid=new Map,this.meshes=new Map,this.containers=[],this.nextContainer=1,this.group=new ln,t.add(this.group),this.m4=new W,this.q=new ft,this.e=new Wt,this.c=new G,this.crateMat=new Yi({color:9071168,roughness:.9})}clear(){for(let{mesh:e}of this.meshes.values())this.group.remove(e),e.dispose();this.meshes.clear(),this.items.clear(),this.grid.clear();for(let e of this.containers)this.scene.remove(e.mesh),e.col&&this.game.world.C.removeDynamic(e.col);this.containers.length=0}_pool(e){let t=this.meshes.get(e);if(!t){let n=e.startsWith(`w:`)?400:900,r,i;e.startsWith(`w:`)?(r=ap(e.slice(2)),this.lootWeaponMat||=new Yi({vertexColors:!0,roughness:.5,metalness:.2,emissive:2763306}),i=this.lootWeaponMat):(r=Mm(e),i=new Yi({color:16777215,roughness:.7,metalness:.05,emissive:1842204}));let a=new si(r,i,n);a.count=0,a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1,e.startsWith(`w:`)||(a.instanceColor=new $r(new Float32Array(n*3),3)),this.group.add(a),t={mesh:a,free:[],cap:n,used:0},this.meshes.set(e,t)}return t}_key(e,t){return Math.floor(e/Am)*4099+Math.floor(t/Am)}add(e,t,n,r,i=Math.random()*Math.PI*2){let a=Nm(e),o=this._pool(a),s;if(o.free.length)s=o.free.pop();else if(o.used<o.cap)s=o.used++;else return null;o.used>o.mesh.count&&(o.mesh.count=o.used);let c={id:this.nextId++,item:e,x:t,y:n,z:r,yaw:i,vis:a,idx:s};this.items.set(c.id,c);let l=this._key(t,r),u=this.grid.get(l);if(u||this.grid.set(l,u=new Set),u.add(c.id),a.startsWith(`w:`)){let a=e.kind===`weapon`;this.e.set(0,i,a?Math.PI/2:0,`YXZ`),this.m4.compose(new H(t,n+(a?.04:.05),r),this.q.setFromEuler(this.e),new H(1.15,1.15,1.15))}else{this.e.set(0,i,0);let a=e.kind===`med`&&e.id===`medkit`?1.4:e.kind===`med`&&e.id===`bandage`?.7:1;this.m4.compose(new H(t,n,r),this.q.setFromEuler(this.e),new H(a,a,a)),this.c.setHex(Pm(e)),o.mesh.setColorAt(s,this.c),o.mesh.instanceColor.needsUpdate=!0}return o.mesh.setMatrixAt(s,this.m4),o.mesh.instanceMatrix.needsUpdate=!0,c}remove(e){if(!this.items.has(e.id))return;this.items.delete(e.id);let t=this.grid.get(this._key(e.x,e.z));t&&t.delete(e.id);let n=this.meshes.get(e.vis);this.m4.makeScale(0,0,0),n.mesh.setMatrixAt(e.idx,this.m4),n.mesh.instanceMatrix.needsUpdate=!0,n.free.push(e.idx)}near(e,t,n,r,i=[],a=-1.2,o=1.6){i.length=0;let s=r*r;for(let c=Math.floor((e-r)/Am);c<=Math.floor((e+r)/Am);c++)for(let l=Math.floor((n-r)/Am);l<=Math.floor((n+r)/Am);l++){let r=this.grid.get(c*4099+l);if(r)for(let c of r){let r=this.items.get(c),l=r.x-e,u=r.z-n,d=r.y-t;l*l+u*u<s&&d>a&&d<o&&i.push(r)}}return i}placeGroup(e,t,n,r){let i=e.length;e.forEach((e,a)=>{let o=a/Math.max(1,i)*Math.PI*2+Math.random(),s=i>1?.28+Math.random()*.15:0;this.add(e,t+Math.cos(o)*s,n,r+Math.sin(o)*s)})}spawnAll(e,t=1){let n=0;for(let r of e){let e=(r.indoor?.62:.36)*t*(.85+(r.q-1)*.6);if(Math.random()>e)continue;let i=Fp(r.q);this.placeGroup(i,r.x,r.y,r.z),n+=i.length,r.q>1.3&&Math.random()<.25&&this.placeGroup(Fp(r.q),r.x+.6,r.y,r.z+.4)}return n}drop(e,t,n,r){let i=Math.random()*Math.PI*2;return this.add(e,t+Math.cos(i)*.6,n+.02,r+Math.sin(i)*.6)}_container(e,t,n,r,i,a){let o=new ln;if(i===`crate`){let e=new K(Mm(`crate`),this.crateMat);e.castShadow=!0,e.receiveShadow=!0,o.add(e);let t=new K(new Ai(.94,.05,.69),new Yi({color:6966828,roughness:.9}));t.position.y=.57,o.add(t)}else{let e=new K(new Ai(1.4,1.1,1.4),new Yi({color:3104666,roughness:.6,metalness:.2}));e.position.y=.55,e.castShadow=!0,o.add(e);for(let e of[-1,1]){let t=new K(new Ai(1.42,.12,.12),new Yi({color:14211288}));t.position.set(0,.3+(e>0?.55:0),.71),o.add(t)}let t=new K(new Ai(.5,.12,1.42),new Yi({color:13111342}));t.position.y=1.11,o.add(t)}o.position.set(t,n,r),o.rotation.y=Math.random()*Math.PI*2,this.scene.add(o);let s={id:`c`+this.nextContainer++,kind:i,name:a,items:e,x:t,y:n,z:r,mesh:o,opened:!1};return i===`package`&&(s.col=this.game.world.C.addDynamic({cx:t,cy:n+.55,cz:r,hx:.7,hy:.55,hz:.7,yaw:o.rotation.y,flags:15,surf:$.METAL})),this.containers.push(s),s}dropDeathCrate(e){let t=e.allItems().filter(e=>e.kind!==`ammo`||e.count>0);if(!t.length)return;let n=e.pos.y;this._container(t,e.pos.x,n,e.pos.z,`crate`,e.name)}carePackage(e,t,n){return this._container(Ip(),e,t,n,`package`,`Care Package`)}containersNear(e,t,n,r){return this.containers.filter(i=>i.items.length&&Math.hypot(i.x-e,i.z-n)<r&&Math.abs(i.y-t)<2)}takeFromContainer(e,t,n){let r=e.items[t];if(!r)return!1;let i=n.takeItem(r);if(!i.taken)return!1;e.items.splice(t,1),i.remainder&&e.items.splice(t,0,i.remainder);for(let t of i.dropped)e.items.push(t);return!e.items.length&&e.kind===`crate`&&(this.scene.remove(e.mesh),this.containers.splice(this.containers.indexOf(e),1)),!0}update(e){}describe(e){return jp(e.item)}},Im=[200,400],Lm=class{constructor(e,t){this.game=e,this.scene=t,this.plane=Em(),this.plane.visible=!1,this.plane.scale.setScalar(.8),t.add(this.plane),this.reset()}reset(){this.done=0,this.flight=null;for(let e of this.drops||[])this.scene.remove(e.mesh),this.scene.remove(e.chute);this.drops=[],this.plane.visible=!1}update(e){let t=this.game;if(this.done<Im.length&&t.matchTime>Im[this.done]&&t.zone.phase>=0&&(this.done++,this.startFlight()),this.flight){let t=this.flight;t.t+=e;let n=new H().lerpVectors(t.a,t.b,Math.min(1,t.t/t.dur));this.plane.position.copy(n);for(let t of this.plane.userData.props)t.rotation.z+=e*40;!t.dropped&&t.t/t.dur>=t.dropF&&(t.dropped=!0,this.spawnCrate(n.clone().add(new H(0,-6,0)),t.target)),t.t>=t.dur&&(this.flight=null,this.plane.visible=!1)}for(let n of this.drops){if(n.landed)continue;n.pos.y-=e*11,n.pos.x+=(n.target.x-n.pos.x)*Math.min(1,e*.5),n.pos.z+=(n.target.z-n.pos.z)*Math.min(1,e*.5);let r=Math.max(t.world.C.support(n.pos.x,n.pos.z,.7,n.pos.y+.5),0);n.pos.y<=r?(n.pos.y=r,n.landed=!0,this.scene.remove(n.mesh),this.scene.remove(n.chute),n.container=t.loot.carePackage(n.pos.x,n.pos.y,n.pos.z),t.effects.redSmokes.push({x:n.pos.x,y:n.pos.y+1.1,z:n.pos.z,until:t.time+120}),t.effects.dust(n.pos.x,n.pos.y,n.pos.z,2),t.audio.play(`land`,n.pos,{gain:1}),t.onCareLanded(n)):(n.mesh.position.copy(n.pos),n.chute.position.copy(n.pos).add(new H(0,1.4,0)))}}startFlight(){let e=this.game,t=e.zone.safeTarget(),n=null;for(let r=0;r<40&&!n;r++){let r=Z(0,Math.PI*2),i=Math.sqrt(Math.random())*t.r*.8,a=t.x+Math.cos(r)*i,o=t.z+Math.sin(r)*i,s=e.world.nav.nearest(a,NaN,o,30);if(s>=0&&e.world.nav.flags[s]===0){let t=e.world.nav.pos(s);n=new H(t[0],t[1],t[2])}}if(!n)return;let r=Z(0,Math.PI*2),i=new H(Math.cos(r),0,Math.sin(r)),a=n.clone().addScaledVector(i,-1400),o=n.clone().addScaledVector(i,1400);a.y=o.y=260,this.flight={a,b:o,t:0,dur:2800/90,dropF:.5,dropped:!1,target:n},this.plane.visible=!0,this.plane.rotation.set(0,Math.atan2(i.x,i.z),0),e.onCareIncoming(n)}spawnCrate(e,t){let n=new ln,r=new K(new Ai(1.4,1.1,1.4),new Yi({color:3104666,roughness:.6}));r.position.y=.55,n.add(r);let i=km();i.scale.setScalar(.9),this.scene.add(n,i),this.drops.push({pos:e,target:t,mesh:n,chute:i,landed:!1})}},Rm=[0,0],zm=null;function Bm(){if(zm)return zm;let e=Vu(256,64),t=e.getContext(`2d`);return t.fillStyle=`#fff`,t.fillRect(0,0,256,64),t.strokeStyle=`#111`,t.lineWidth=4,t.strokeRect(2,2,252,60),t.fillStyle=`#d52b1e`,t.fillRect(10,14,36,36),t.fillStyle=`#fff`,t.fillRect(24,19,8,26),t.fillRect(15,28,26,8),t.fillStyle=`#111`,t.font=`bold 34px Helvetica, Arial`,t.textBaseline=`middle`,t.fillText(`GE 1536`,60,34),zm=new Ei(e),zm.colorSpace=ze,zm}var Vm={m:null};function Hm(){return Vm.m||=new Yi({vertexColors:!0,roughness:.45,metalness:.1}),Vm.m}function Um(e,t,n,r,i,a,o,s=null){let c=new Ai(e,t,n);s&&s(c),c.translate(r,i,a),c.deleteAttribute(`uv`);let l=new G(o),u=c.attributes.position.count,d=new Float32Array(u*3);for(let e=0;e<u;e++)d[e*3]=l.r,d[e*3+1]=l.g,d[e*3+2]=l.b;return c.setAttribute(`color`,new Zn(d,3)),c}function Wm(e){let t=new ln,n=new K(df([Um(1.86,.62,4.3,0,.62,0,e),Um(1.7,.6,2.2,0,1.22,-.25,1448221),Um(1.62,.06,2,0,1.54,-.3,e),Um(1.88,.14,.5,0,.42,2.1,2236962),Um(.34,.12,.05,.62,.72,2.16,16776168),Um(.34,.12,.05,-.62,.72,2.16,16776168),Um(.3,.12,.05,.66,.78,-2.16,14164010),Um(.3,.12,.05,-.66,.78,-2.16,14164010)],!1),Hm());n.castShadow=!0,n.receiveShadow=!0,t.add(n);let r=new K(new Ii(.52,.13),new wr({map:Bm()}));return r.position.set(0,.55,-2.161),r.rotation.y=Math.PI,t.add(r),t.userData.wheels=[[.86,1.35,1],[-.86,1.35,1],[.86,-1.35,0],[-.86,-1.35,0]],t}function Gm(e){let t=new ln,n=new K(df([Um(2.3,.8,4.6,0,.1,-.3,e),Um(1.6,.8,1.6,0,.12,2.3,e,e=>e.rotateY(Math.PI/4)),Um(2.1,.08,4.2,0,.52,-.3,10122832),Um(1.7,.9,.12,0,.98,.9,8362150),Um(.6,.5,.6,0,.8,.3,15921904),Um(.5,.7,.5,0,.4,-2.75,2236962)],!1),Hm());return n.castShadow=!0,t.add(n),t.userData.wheels=[],t}var Km=class{constructor(e,t=160){let n=new Mi(.36,.36,.26,14);n.rotateZ(Math.PI/2),this.mesh=new si(n,new Yi({color:1315860,roughness:.9}),t),this.mesh.count=0,this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.add(this.mesh),this.m4=new W,this.q=new ft,this.e=new Wt,this.p=new H,this.one=new H(1,1,1),this.n=0}begin(){this.n=0}push(e){let t=e.model.userData.wheels;if(!t.length)return;let n=Math.PI-e.yaw,r=Math.cos(n),i=Math.sin(n);for(let[a,o,s]of t){let t=e.pos.x+a*r+o*i,c=e.pos.z-a*i+o*r;this.p.set(t,e.pos.y+.36+Math.sin(e.pitch)*-o,c),this.e.set(e.wheelSpin,n-(s?e.steer:0),0,`YXZ`),this.q.setFromEuler(this.e),this.m4.compose(this.p,this.q,this.one),this.mesh.setMatrixAt(this.n++,this.m4)}}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0}},qm=class{constructor(e,t,n,r,i){this.game=e,this.kind=t,this.pos=new H(n,0,r),this.yaw=i,this.speed=0,this.steer=0,this.vy=0,this.health=t===`boat`?140:180,this.driver=null,this.alive=!0,this.halfW=t===`boat`?1.15:.95,this.halfL=t===`boat`?3:2.2,this.maxSpeed=t===`boat`?19:25,this.model=t===`boat`?Gm(Zl([16777215,14201402,2841242,11546672])):Wm(Zl([13111342,2046574,15329766,2960688,3894858,14263585,8028808])),e.scene.add(this.model),this.pitch=0,this.roll=0,this.wheelSpin=0,this.col=e.world.C.addDynamic({cx:n,cy:0,cz:r,hx:this.halfW,hy:.8,hz:this.halfL,yaw:0,flags:15,surf:$.METAL,vehicle:this});let a=e.world.C;t===`boat`?this.pos.y=-.25:this.pos.y=a.support(n,r,.5,e.world.T.heightAt(n,r)+2),this.sync(0),this.smoke=0}remove(){this.game.scene.remove(this.model),this.game.world.C.removeDynamic(this.col)}forward(){return[Math.sin(this.yaw),-Math.cos(this.yaw)]}seat(e){let[t,n]=this.forward(),r=Math.cos(this.yaw),i=Math.sin(this.yaw);return e.set(this.pos.x+t*-.3-r*.4,this.pos.y+.3,this.pos.z+n*-.3-i*.4)}exitPoint(){let e=Math.cos(this.yaw),t=Math.sin(this.yaw);for(let n of[1,-1]){let r=this.pos.x-e*(this.halfW+.9)*n,i=this.pos.z-t*(this.halfW+.9)*n,a=this.game.world.C,o=a.support(r,i,.3,this.pos.y+1.5);if(a.cylinderFree(r,o+.2,i,.35,1.6)&&o>-.2)return new H(r,o,i)}return new H(this.pos.x-e*2.4,this.pos.y+.5,this.pos.z-t*2.4)}damage(e,t){this.alive&&(this.health-=e,this.health<=0&&this.explode(t))}explode(e){this.alive=!1;let t=this.game;t.effects.explosion(this.pos.x,this.pos.y+.8,this.pos.z),t.audio.play(`explosion`,this.pos,{gain:1}),t.onNoise(this.pos,220,e);for(let n of t.characters){if(!n.alive)continue;let t=n.pos.distanceTo(this.pos);t<7&&n.takeDamage((n===this.driver?120:90)*(1-t/7)+(n===this.driver?40:0),`torso`,e,`vehicle`,this.pos.clone())}this.driver&&t.vehicles.exit(this.driver,!0),this.model.traverse(e=>{e.isMesh&&e.material&&e.material.color&&(e.material=e.material.clone(),e.material.color.setScalar(.18))}),this.speed=0}update(e,t){let n=this.game,r=n.world.C,i=n.world.T,a=this.kind===`boat`,o=t||{throttle:0,steer:0,brake:!1};this.alive||(this.smoke<30&&Math.random()<e*4&&(this.smoke+=e,n.effects.alpha.spawn({x:this.pos.x+Z(-.5,.5),y:this.pos.y+1.2,z:this.pos.z+Z(-.5,.5),vx:.4,vy:Z(1.5,3),vz:.2,life:Z(3,5),s0:1,s1:4,r:.15,g:.15,b:.15,a0:.6,a1:0,drag:.4})),o.throttle=0,o.steer=0);let s=this.speed;o.throttle>0?this.speed+=(s<0?16:a?6:8.5*(1-Math.abs(s)/this.maxSpeed*.6))*o.throttle*e:o.throttle<0?this.speed+=(s>.5?-16:-5)*-o.throttle*e:this.speed=Kl(this.speed,0,a?.7:.9,e),o.brake&&(this.speed=Kl(this.speed,0,4,e)),this.speed=Y(this.speed,a?-5:-8,this.maxSpeed*(o.boost?1.1:1));let c=a?.55:.6-Math.min(.42,Math.abs(this.speed)/60);this.steer=Kl(this.steer,o.steer*c,6,e);let l=a?3.5:2.6,u=this.speed/l*Math.tan(this.steer)*(o.brake&&!a?1.6:1);this.yaw=Wl(this.yaw+u*e);let[d,f]=this.forward(),p=this.pos.x+d*this.speed*e,m=this.pos.z+f*this.speed*e;p=Y(p,-792,792),m=Y(m,-792,792);let h=0,g=p,_=m,v=this.halfW+.05;for(let e of[-this.halfL+v,0,this.halfL-v]){let t=g+d*e,n=_+f*e;r.resolveCylinder(t,n,this.pos.y,v,1.4,a?.25:.45,Rm,this.col);let i=Rm[0]-t,o=Rm[1]-n;(i||o)&&(g+=i,_+=o,h=Math.max(h,Math.hypot(i,o)))}if(a?i.heightAt(g+d*this.halfL,_+f*this.halfL)>-.7&&(g=this.pos.x,_=this.pos.z,h=Math.max(h,.5)):r.support(g+d*this.halfL*.9,_+f*this.halfL*.9,.4,this.pos.y+.6)>this.pos.y+.55&&(g=this.pos.x,_=this.pos.z,h=Math.max(h,.6)),h>.02){let e=Math.abs(this.speed);e>9&&(this.damage((e-9)*3,null),this.driver&&this.driver.takeDamage((e-9)*1.5,`torso`,null,`vehicle`,null),n.audio.play(`land`,this.pos,{gain:.9}),this.driver&&this.driver.isPlayer&&n.pc.addShake(.5)),this.speed*=.35}if(this.pos.x=g,this.pos.z=_,a)this.pos.y=-.25+Math.sin(n.time*1.7+this.pos.x*.1)*.08,this.pitch=Kl(this.pitch,-this.speed*.006+Math.sin(n.time*1.3)*.02,3,e),this.roll=Kl(this.roll,this.steer*this.speed*.012,3,e),Math.abs(this.speed)>4&&Math.random()<e*14&&n.effects.splash(this.pos.x-d*this.halfL,0,this.pos.z-f*this.halfL,.5);else{let t=r.support(this.pos.x+d*1.35,this.pos.z+f*1.35,.3,this.pos.y+.6,null,this.col),i=r.support(this.pos.x-d*1.35,this.pos.z-f*1.35,.3,this.pos.y+.6,null,this.col),a=Math.max(t,i),o=(t+i)/2;this.vy-=20*e;let s=this.pos.y+this.vy*e;s<=a&&(s=Math.max(o,s),s<o&&(s=o),this.vy=0,s=o),this.pos.y=s,this.pitch=Kl(this.pitch,Math.atan2(i-t,2.7),8,e),this.roll=Kl(this.roll,-this.steer*Math.abs(this.speed)*.006,4,e),this.pos.y<-.9&&(this.speed*=.9,this.alive&&this.health>0&&(this.health-=e*25),this.health<=0&&this.alive&&(this.alive=!1,this.driver&&n.vehicles.exit(this.driver,!0)))}if(Math.abs(this.speed)>4)for(let e of n.characters){if(!e.alive||e===this.driver||e.mode!==`ground`)continue;let t=e.pos.x-this.pos.x,n=e.pos.z-this.pos.z,r=t*d+n*f,i=t*Math.cos(this.yaw)+n*Math.sin(this.yaw);Math.abs(r)<this.halfL+.3&&Math.abs(i)<this.halfW+.3&&Math.abs(e.pos.y-this.pos.y)<1.5&&(e.takeDamage(Math.abs(this.speed)*4.5,`torso`,this.driver,`vehicle`,this.pos.clone()),e.vel.x+=d*this.speed*.6,e.vel.z+=f*this.speed*.6,this.speed*=.7)}this.sync(e)}sync(e){let t=this.model;t.position.copy(this.pos),t.rotation.order=`YXZ`,t.rotation.set(this.pitch,Math.PI-this.yaw,this.roll),this.wheelSpin+=this.speed*e/.36;let n=this.col;n.cx=this.pos.x,n.cz=this.pos.z,n.cy=this.pos.y+.8,n.cs=Math.cos(this.yaw),n.sn=-Math.sin(this.yaw)}},Jm=class{constructor(e){this.game=e,this.list=[],this.wheels=new Km(e.scene)}clear(){for(let e of this.list)e.remove();this.list.length=0,this.wheels.begin(),this.wheels.end()}spawnAll(){let e=this.game,t=e.world,n=Fl.filter(e=>e.kind===`road`&&e.w>=12),r=0,i=0;for(;r<26&&i++<400;){let i=Zl(n),a=Z(15,au(i.pts)-15),o=ou(i.pts,a),s=Math.random()<.5?1:-1,c=i.w/2-2,l=o.x-o.dz*c*s,u=o.z+o.dx*c*s;if(Math.abs(l)>772||Math.abs(u)>772||t.T.isWater(l,u))continue;let d=t.C.support(l,u,.5,t.T.heightAt(l,u)+1.5);if(!t.C.cylinderFree(l,d+.3,u,2.4,1.6)||!t.C.cylinderFree(l+o.dx*5.5,d+.3,u+o.dz*5.5,1.2,1.6)||!t.C.cylinderFree(l-o.dx*5.5,d+.3,u-o.dz*5.5,1.2,1.6)||this.list.some(e=>e.pos.distanceTo(new H(l,d,u))<60))continue;let f=Math.atan2(o.dx,-o.dz)+(s>0?0:Math.PI);this.list.push(new qm(e,`car`,l,u,f)),r++}for(let[n,r,i]of[[300,-330,.6],[360,-560,1.2],[520,-110,1.6],[650,-150,1.7],[-120,-60,1.9],[-430,70,1.9],[130,-150,2.6],[430,-470,.9]])t.T.isWater(n,r)&&this.list.push(new qm(e,`boat`,n,r,i))}nearest(e,t=3.6){let n=null,r=t;for(let t of this.list){if(!t.alive||t.driver)continue;let i=Math.hypot(t.pos.x-e.x,t.pos.z-e.z)-(t.halfL-1);i<r&&Math.abs(t.pos.y-e.y)<2.5&&(r=i,n=t)}return n}enter(e,t){return t.driver||!t.alive?!1:(t.driver=e,e.vehicle=t,e.mode=`vehicle`,e.cancelAction(),e.crouching=!1,e.root.visible=!1,e.vel.set(0,0,0),this.game.audio.play(`switch`,null,{direct:e.isPlayer,gain:.6}),!0)}exit(e,t=!1){let n=e.vehicle;if(!n)return;let r=n.exitPoint();n.driver=null,e.vehicle=null,e.pos.copy(r),e.vel.set(n.forward()[0]*n.speed*.3,0,n.forward()[1]*n.speed*.3),e.root.visible=!0,e.fallStartY=r.y,e.mode=`ground`,e.onGround=!1,(r.y<-.2||this.game.world.T.heightAt(r.x,r.z)<-1.2)&&e.enterSwim(),!t&&Math.abs(n.speed)>12&&e.takeDamage((Math.abs(n.speed)-12)*4,`torso`,null,`vehicle`,null)}update(e){this.wheels.begin();for(let t of this.list){let n=t.driver,r=null;n&&n.alive&&(r=n.vehicleInput),t.update(e,r),n&&n.alive&&n.vehicle===t&&(t.seat(n.pos),n.yaw=t.yaw),this.wheels.push(t)}this.wheels.end()}},Ym=[150,330,510],Xm=class{constructor(e,t){this.game=e;let n=new Mi(1,1,1,64,1,!0);n.translate(0,.5,0),this.mesh=new K(n,new wr({color:16722458,transparent:!0,opacity:.12,side:2,depthWrite:!1})),this.mesh.visible=!1,this.mesh.renderOrder=31,t.add(this.mesh),this.reset()}reset(){this.done=0,this.active=null,this.mesh.visible=!1}update(e){let t=this.game;!this.active&&this.done<Ym.length&&t.matchTime>Ym[this.done]&&t.zone.phase>=0&&(this.done++,this.start());let n=this.active;if(n){if(n.t+=e,this.mesh.visible=!0,this.mesh.position.set(n.x,-10,n.z),this.mesh.scale.set(n.r,260,n.r),this.mesh.material.opacity=.08+.05*Math.sin(t.time*4),n.t>n.warn)for(n.acc+=e*n.rate;n.acc>1;)n.acc--,this.shell();n.t>n.warn+n.dur&&(this.active=null,this.mesh.visible=!1)}}start(){let e=this.game,t=e.zone.cur,n=0,r=0;for(let i=0;i<20;i++){let i=Z(0,Math.PI*2),a=Math.sqrt(Math.random())*t.r*.85;if(n=t.x+Math.cos(i)*a,r=t.z+Math.sin(i)*a,Math.abs(n)<740&&Math.abs(r)<740&&e.world.T.heightAt(n,r)>.5)break}let i=Y(t.r*.35,45,85);this.active={x:n,z:r,r:i,t:0,warn:6,dur:20,rate:3.2,acc:0};let a=null,o=1/0;for(let e of Bl){let t=Math.hypot(e.x-n,e.z-r);t<o&&(o=t,a=e)}e.player&&e.player.alive&&(e.hud.center(`L'ESCALADE !`,`Bombardment incoming near ${a?a.name:`Genève`} — take cover indoors`,4),e.audio.play(`beep`,null,{direct:!0,gain:.6}))}shell(){let e=this.game,t=this.active,n=Z(0,Math.PI*2),r=Math.sqrt(Math.random())*t.r,i=t.x+Math.cos(n)*r,a=t.z+Math.sin(n)*r,o=e.world.C.support(i,a,.3,300);e.effects.explosion(i,o,a),e.audio.play(`explosion`,{x:i,y:o,z:a},{gain:.9});for(let t of e.characters){if(!t.alive||t.mode===`plane`)continue;let n=Math.hypot(t.pos.x-i,t.pos.y+1-o,t.pos.z-a);n>7||e.world.C.lineClear(i,o+.4,a,t.pos.x,t.pos.y+1,t.pos.z,Q.BULLET)&&t.takeDamage(140*(1-n/7)**1.3,`torso`,null,`escalade`,new H(i,o,a))}if(e.player){let t=e.camera.position.distanceTo(new H(i,o,a));t<60&&e.pc.addShake(Y(1-t/60,0,1)*.9)}}contains(e,t){let n=this.active;return!!n&&Math.hypot(e-n.x,t-n.z)<n.r+6}},Zm=e=>document.getElementById(e),Qm=class{constructor(e){this.game=e,this.el=Zm(`hud`),this.compass=Zm(`compassCanvas`).getContext(`2d`),this.mm=Zm(`minimap`).getContext(`2d`),this.kf=Zm(`killfeed`),this.hitT=0,this.toastT=0,this.centerT=0,this.flash=0,this.indicators=[],this.last={},this.fpsAcc=0,this.fpsN=0,this.fps=0,this.slowT=0}show(e){this.el.classList.toggle(`hidden`,!e)}set(e,t,n,r){this.last[t]!==n&&(this.last[t]=n,r(Zm(e),n))}toast(e,t=2.2){let n=Zm(`toast`);n.textContent=e,n.style.opacity=1,this.toastT=t}center(e,t=``,n=3){let r=Zm(`centerMsg`);r.querySelector(`.big`).textContent=e,r.querySelector(`.small`).textContent=t,r.style.opacity=1,this.centerT=n}killfeed(e,t,n,r){let i=document.createElement(`div`);i.className=`kf`;let a=e=>e?`<b class="${e.isPlayer?`me`:``}">${$m(e.name)}</b>`:`<b>Blue Zone</b>`,o=n===`zone`?`blue zone`:n===`fall`?`fall`:n===`frag`?`grenade`:n===`vehicle`?`vehicle`:n===`escalade`?`L'Escalade`:Cp[n]?Cp[n].name:n;for(i.innerHTML=!e||e===t?`${a(t)}<span class="w">${n===`zone`?`died outside the play area`:n===`fall`?`fell to their death`:n===`escalade`?`was hit by L'Escalade`:`died`}</span>`:`${a(e)}<span class="w">[${$m(o)}]</span>${a(t)}`,r&&(i.style.background=`rgba(242,194,48,0.18)`),this.kf.prepend(i);this.kf.children.length>6;)this.kf.lastChild.remove();setTimeout(()=>i.style.opacity=0,6500),setTimeout(()=>i.remove(),7200)}hitmarker(e,t){let n=Zm(`hitmarker`);n.className=t?`kill`:e===`head`?`head`:``,n.style.opacity=1,this.hitT=t?.35:.14}damage(e){if(this.flash=Math.min(.9,this.flash+.45),!e)return;let t=document.createElement(`div`);t.className=`dmgi`,Zm(`dmgIndicators`).appendChild(t),this.indicators.push({el:t,dir:Math.atan2(e.x,-e.z),t:1.2})}update(e){let t=this.game,n=t.player,r=t.pc;if(!n)return;this.fpsAcc+=e,this.fpsN++,this.fpsAcc>.5&&(this.fps=Math.round(this.fpsN/this.fpsAcc),this.fpsAcc=0,this.fpsN=0,Zm(`fps`).textContent=zf.showFps?`${this.fps} FPS`:``),this.hitT>0&&(this.hitT-=e,this.hitT<=0&&(Zm(`hitmarker`).style.opacity=0)),this.toastT>0&&(this.toastT-=e,this.toastT<=0&&(Zm(`toast`).style.opacity=0)),this.centerT>0&&(this.centerT-=e,this.centerT<=0&&(Zm(`centerMsg`).style.opacity=0)),this.flash=Math.max(0,this.flash-e*1.6),Zm(`damageFlash`).style.opacity=this.flash.toFixed(2);let i=Math.atan2(-t.cameraDir.x,t.cameraDir.z)+Math.PI;for(let t=this.indicators.length-1;t>=0;t--){let n=this.indicators[t];n.t-=e;let r=n.dir-i;n.el.style.transform=`rotate(${r}rad)`,n.el.style.opacity=Y(n.t,0,1).toFixed(2),n.t<=0&&(n.el.remove(),this.indicators.splice(t,1))}let a=!n.alive&&r.spectate&&r.spectate.name;if(this.set(`bottom`,`specB`,+!!a,(e,t)=>e.style.display=t?`none`:``),this.set(`weaponPanel`,`specW`,+!!a,(e,t)=>e.style.visibility=t?`hidden`:``),a){let e=r.spectate;this.set(`hint`,`hint`,`SPECTATING <b>${$m(e.name)}</b> · ${e.kills} kill${e.kills===1?``:`s`} · ${Math.round(e.health)} HP`,(e,t)=>e.innerHTML=t)}this.set(`aliveNum`,`alive`,t.aliveCount(),(e,t)=>e.textContent=t),this.set(`killNum`,`kills`,n.kills,(e,t)=>e.textContent=t);let o=Math.max(0,n.health);this.set(`healthFill`,`hp`,Math.round(o*2),(e,t)=>{e.style.width=t/2+`%`,e.className=t/2<25?`low`:t/2<50?`mid`:``}),this.set(`healthLag`,`hplag`,Math.round(o),(e,t)=>e.style.width=t+`%`),this.set(`boostBar`,`boost`,Math.ceil(n.boost/5),e=>{let t=e.children,r=n.boost,i=[0,20,60,90];for(let e=0;e<4;e++)t[e].className=r>i[e]+.5?`on`:``});let s=[n.helmet&&n.helmet.id,n.helmet&&Math.round(n.helmet.dur/10),n.vest&&n.vest.id,n.vest&&Math.round(n.vest.dur/10),n.pack].join(`|`);this.set(`equip`,`eq`,s,e=>{let t=(e,t,n,r)=>`<div class="eq ${t?``:`off`}">${e}${t?`<span class="lv">${t}</span>`:``}${n!==null&&t?`<span class="dur" style="width:${Y(n/r,0,1)*100}%"></span>`:``}</div>`;e.innerHTML=t(`HLM`,n.helmet?Ep[n.helmet.id].level:0,n.helmet?n.helmet.dur:null,n.helmet?Ep[n.helmet.id].dur:1)+t(`VST`,n.vest?Ep[n.vest.id].level:0,n.vest?n.vest.dur:null,n.vest?Ep[n.vest.id].dur:1)+t(`BAG`,n.pack,null,1)});let c=n.vehicle,l=n.weapon,u=[c?`drive`:`foot`,n.active,...n.weapons.map(e=>e?e.id+e.loaded+(e.att.scope||``)+e.mode:`-`),l?n.inv.ammo[Cp[l.id].ammo]:0,n.inv.throws.frag,n.inv.throws.smoke,n.throwType].join(`|`);if(c||this.set(`weaponPanel`,`w`,u,e=>{let t=``,r=[`1`,`2`,`3`];if(n.weapons.forEach((e,i)=>{if(!e)return;let a=Cp[e.id];t+=`<div class="wslot ${n.active===i?`active`:``}"><div class="wn"><span class="num">${r[i]}</span>${a.name}</div><div class="wa">${e.att.scope?Op[e.att.scope].name:`Iron sights`}</div></div>`}),n.inv.throws.frag+n.inv.throws.smoke&&(t+=`<div class="wslot ${n.active===3?`active`:``}"><div class="wn"><span class="num">4</span>${n.throwType===`frag`?`Frag`:`Smoke`} ×${n.inv.throws[n.throwType]}</div><div class="wa">G to switch</div></div>`),l){let e=Cp[l.id];t+=`<div id="ammoBig">${l.loaded}<small> / ${n.inv.ammo[e.ammo]}</small><span class="mode">${e.modes[l.mode%e.modes.length].toUpperCase()} · ${Sp[e.ammo].name}</span></div>`}else n.active===3?t+=`<div id="ammoBig">${n.inv.throws[n.throwType]}<span class="mode">HOLD LMB · RELEASE TO THROW</span></div>`:t+=`<div id="ammoBig"><small>FISTS</small></div>`;e.innerHTML=t}),c){let e=Math.round(Y(c.health/(c.kind===`boat`?140:180),0,1)*100),t=`veh`+Math.round(Math.abs(c.speed)*3.6)+`:`+e;this.last.w!==t&&(this.last.w=t,Zm(`weaponPanel`).innerHTML=`<div id="ammoBig">${Math.round(Math.abs(c.speed)*3.6)}<small> km/h</small><span class="mode">${c.kind===`boat`?`MOTORBOAT`:`CAR`} · SPACE BRAKE · F EXIT</span></div>
          <div class="wslot active" style="min-width:140px"><div class="wn">Vehicle</div><div class="wa"><div style="height:5px;background:rgba(255,255,255,.2);margin-top:5px"><div style="height:100%;width:${e}%;background:${e<30?`#e2402f`:`#fff`}"></div></div></div></div>`)}let d=c?null:n.action;d&&(d.type===`reload`||d.type===`heal`)?(Zm(`actionBar`).classList.remove(`hidden`),Zm(`actionText`).textContent=d.type===`reload`?`Reloading`:`Using ${Dp[d.id].name}`,Zm(`actionFill`).style.width=Y(d.t/d.dur,0,1)*100+`%`):n.cooking>0?(Zm(`actionBar`).classList.remove(`hidden`),Zm(`actionText`).textContent=`Cooking grenade`,Zm(`actionFill`).style.width=Y(n.cooking/5,0,1)*100+`%`):Zm(`actionBar`).classList.add(`hidden`);let f=r.prompt,p=f?f.text:``;this.set(`prompt`,`prompt`,p+(f?f.kind:``),e=>{e.innerHTML=f?f.kind===`jump`||f.kind===`chute`?`<span class="key">F</span>${f.text}`:f.kind===`container`||f.kind===`vehicle`||f.kind===`drive`||f.kind===`descend`?`<span class="key">F</span>${$m(f.text)}`:`<span class="key">F</span>Pick up ${$m(f.text)}`:``});let m=t.zone.status();this.set(`zoneText`,`zt`,m.text,(e,t)=>{e.textContent=t,e.className=m.kind===`shrink`?`shrink`:``}),this.set(`zoneTime`,`ztime`,m.kind===`done`?``:gu(m.time),(e,t)=>e.textContent=t);let h=t.zone.isOutside(n.pos.x,n.pos.z)&&t.zone.damagePerSecond()>0;this.set(`blueTint`,`blue`,h&&n.alive?1:0,(e,t)=>e.style.opacity=t);let g=r.ads>.5&&l&&l.att.scope&&Op[l.att.scope].zoom>=2&&n.alive;this.set(`scope`,`scope`,+!!g,(e,t)=>e.classList.toggle(`hidden`,!t));let _=g||n.mode===`plane`||!n.alive||n.mode!==`ground`&&n.mode!==`swim`,v=Zm(`crosshair`);if(v.style.display=_?`none`:``,!_){let e=l?n.spreadDeg():2,i=window.innerHeight,a=Y(Math.tan(e*Math.PI/180)/Math.tan(t.camera.fov*Math.PI/360)*(i/2),3,90),o=r.ads>.5,s=v.children;s[0].style.top=-a-9+`px`,s[1].style.top=a+`px`,s[2].style.left=-a-9+`px`,s[3].style.left=a+`px`;for(let e=0;e<4;e++)s[e].style.display=o?`none`:``;s[4].style.background=o&&l&&l.att.scope?`#ff3030`:``,s[4].style.width=s[4].style.height=o?`4px`:`2px`}let y=``;n.mode===`plane`?y=`Mouse to look around · <b>F</b> to jump out over Geneva`:n.mode===`freefall`?y=`<b>W</b> + look down to dive · <b>A/D</b> steer · <b>F</b> deploy parachute`:n.mode===`parachute`?y=`<b>W/S</b> speed · <b>A/D</b> steer`:t.matchTime-(t.landedAt||0)<25&&t.landedAt&&(y=`<b>F</b> pick up · <b>Tab</b> inventory · <b>M</b> map · <b>H</b> heal · <b>V</b> camera`),a||this.set(`hint`,`hint`,y,(e,t)=>e.innerHTML=t),this.drawCompass(i),this.drawMinimap()}drawCompass(e){let t=this.compass;t.clearRect(0,0,640,44);let n=(e*180/Math.PI+360)%360;t.fillStyle=`rgba(0,0,0,0.25)`,t.fillRect(0,0,640,26),t.textAlign=`center`,t.textBaseline=`middle`;let r=640/150;for(let e=-80;e<=80;e++){let i=Math.round(n)+e,a=(i%360+360)%360,o=320+(i-n)*r;if(!(o<0||o>640)){if(a%15==0){let e={0:`N`,45:`NE`,90:`E`,135:`SE`,180:`S`,225:`SW`,270:`W`,315:`NW`}[a];t.fillStyle=e?a===0?`#f2c230`:`#fff`:`rgba(255,255,255,0.85)`,t.font=e?`bold 15px Helvetica, Arial`:`12px Helvetica, Arial`,t.fillText(e||String(a),o,13)}else a%5==0&&(t.fillStyle=`rgba(255,255,255,0.55)`,t.fillRect(o-.5,20,1,6))}}t.fillStyle=`#fff`,t.beginPath(),t.moveTo(315,31),t.lineTo(325,31),t.lineTo(320,26),t.fill(),t.font=`bold 12px Helvetica, Arial`,t.fillText(String(Math.round(n)%360),320,39);let i=this.game,a=i.marker;if(a&&i.player){let e=(Math.atan2(a.x-i.player.pos.x,-(a.z-i.player.pos.z))*180/Math.PI-n+540)%360-180;e=Y(e,-74,74);let o=320+e*r;t.fillStyle=`#f2c230`,t.beginPath(),t.moveTo(o-5,0),t.lineTo(o+5,0),t.lineTo(o,7),t.fill()}}drawMinimap(){let e=this.game,t=e.player,n=this.mm,r=e.world.mapCanvas,i=t.mode===`plane`||t.mode===`freefall`?900:t.mode===`parachute`?520:340,a=r.width/vl,o=t.alive?t.pos.x:e.pc.spectate?e.pc.spectate.pos.x:0,s=t.alive?t.pos.z:e.pc.spectate?e.pc.spectate.pos.z:0,c=(o+800-i/2)*a,l=(s+800-i/2)*a;n.fillStyle=`#3a6e8a`,n.fillRect(0,0,236,236),n.drawImage(r,c,l,i*a,i*a,0,0,236,236);let u=(e,t)=>[(e-o)/i*236+118,(t-s)/i*236+118],d=e.zone;n.save(),n.beginPath(),n.rect(0,0,236,236);let[f,p]=u(d.cur.x,d.cur.z);if(n.arc(f,p,d.cur.r/i*236,0,Math.PI*2,!0),n.fillStyle=`rgba(40,90,255,0.32)`,n.fill(`evenodd`),n.restore(),n.strokeStyle=`rgba(80,140,255,0.95)`,n.lineWidth=2,n.beginPath(),n.arc(f,p,d.cur.r/i*236,0,Math.PI*2),n.stroke(),d.next){let[e,r]=u(d.next.x,d.next.z);n.strokeStyle=`#fff`,n.lineWidth=1.6,n.beginPath(),n.arc(e,r,d.next.r/i*236,0,Math.PI*2),n.stroke(),t.alive&&d.isOutside(t.pos.x,t.pos.z)&&(n.setLineDash([4,4]),n.beginPath(),n.moveTo(118,118),n.lineTo(e,r),n.stroke(),n.setLineDash([]))}if(e.plane.active){let[t,r]=u(e.plane.start.x,e.plane.start.z),[i,a]=u(e.plane.end.x,e.plane.end.z);n.strokeStyle=`rgba(255,255,255,0.7)`,n.setLineDash([6,5]),n.beginPath(),n.moveTo(t,r),n.lineTo(i,a),n.stroke(),n.setLineDash([]);let[o,s]=u(e.plane.pos.x,e.plane.pos.z);n.fillStyle=`#fff`,n.beginPath(),n.arc(o,s,4,0,Math.PI*2),n.fill()}if(e.redZone.active){let t=e.redZone.active,[r,a]=u(t.x,t.z);n.fillStyle=`rgba(230,40,30,0.28)`,n.strokeStyle=`rgba(255,60,40,0.9)`,n.beginPath(),n.arc(r,a,t.r/i*236,0,Math.PI*2),n.fill(),n.stroke()}for(let t of e.loot.containers){if(t.kind!==`package`)continue;let[e,r]=u(t.x,t.z);n.fillStyle=`#e8332a`,n.fillRect(e-4,r-4,8,8)}for(let t of e.airdrops.drops){if(t.landed)continue;let[e,r]=u(t.target.x,t.target.z);n.strokeStyle=`#e8332a`,n.strokeRect(e-5,r-5,10,10)}if(e.marker){let[t,r]=u(e.marker.x,e.marker.z);n.fillStyle=`#f2c230`,n.beginPath(),n.moveTo(t,r),n.lineTo(t-5,r-10),n.lineTo(t+5,r-10),n.fill()}t.alive&&t.mode!==`plane`&&(n.save(),n.translate(118,118),n.rotate(t.yaw),n.fillStyle=`#f2c230`,n.strokeStyle=`#000`,n.lineWidth=1,n.beginPath(),n.moveTo(0,-8),n.lineTo(5.5,6),n.lineTo(0,3),n.lineTo(-5.5,6),n.closePath(),n.fill(),n.stroke(),n.restore());let m=null,h=1/0;for(let e of Bl){let t=Math.hypot(e.x-o,e.z-s)/e.r;t<h&&(h=t,m=e)}this.set(`mmCoords`,`loc`,m&&h<1.4?m.name:`Genève`,(e,t)=>e.textContent=t)}};function $m(e){return String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var eh=e=>document.getElementById(e),th=class{constructor(e){this.game=e,this.mapOpen=!1,this.invOpen=!1,this.paused=!1,this.endOpen=!1,this.container=null,this.contRefs=[],this.fm=eh(`fullmapCanvas`),eh(`playerName`).value=zf.playerName,eh(`playerName`).addEventListener(`change`,e=>{zf.playerName=e.target.value.trim().slice(0,16)||`Calvin`,Bf()}),eh(`btnPlay`).onclick=()=>{this.game.audio.init(),this.game.audio.play(`ui`,null,{direct:!0}),this.game.startMatch()},eh(`btnSettings`).onclick=()=>this.togglePanel(`menuPanel`,`settings`),eh(`btnControls`).onclick=()=>this.togglePanel(`menuPanel`,`controls`),eh(`btnResume`).onclick=()=>this.resume(),eh(`btnPauseSettings`).onclick=()=>this.togglePanel(`pausePanel`,`settings`),eh(`btnQuit`).onclick=()=>this.game.toMenu(),eh(`clickToPlay`).onclick=()=>this.resume(),this.fm.addEventListener(`contextmenu`,e=>{e.preventDefault();let t=this.fm.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*vl-800,r=(e.clientY-t.top)/t.height*vl-800,i=this.game;i.marker=i.marker&&Math.hypot(i.marker.x-n,i.marker.z-r)<25?null:{x:n,z:r},this.drawMap()}),this.fm.addEventListener(`mousedown`,e=>e.preventDefault())}blocking(){return this.mapOpen||this.invOpen||this.paused||this.endOpen||this.game.state!==`match`}togglePanel(e,t){let n=eh(e);!n.classList.contains(`hidden`)&&n.dataset.kind===t?n.classList.add(`hidden`):(n.dataset.kind=t,n.classList.remove(`hidden`),t===`settings`?this.renderSettings(n):this.renderControls(n))}renderSettings(e){let t=zf,n=(e,n,r,i,a,o=e=>e)=>`<div class="row"><span>${n}</span><input type="range" data-k="${e}" min="${r}" max="${i}" step="${a}" value="${t[e]}"><span class="val" data-v="${e}">${o(t[e])}</span></div>`;e.innerHTML=`<h3>SETTINGS</h3>
      ${n(`sensitivity`,`Mouse sensitivity`,.2,3,.05,e=>(+e).toFixed(2))}
      ${n(`adsSensitivity`,`Aim / scope sensitivity`,.2,2,.05,e=>(+e).toFixed(2))}
      ${n(`fov`,`Field of view`,60,100,1)}
      ${n(`volume`,`Volume`,0,1,.05,e=>Math.round(e*100))}
      ${n(`bots`,`Opponents (bots)`,5,79,1)}
      <div class="row"><span>Bot difficulty</span><select data-k="difficulty"><option>easy</option><option>normal</option><option>hard</option></select></div>
      <div class="row"><span>Graphics quality</span><select data-k="quality"><option>low</option><option>medium</option><option>high</option></select></div>
      <div class="row"><span>Invert mouse Y</span><input type="checkbox" data-k="invertY" ${t.invertY?`checked`:``}></div>
      <div class="row"><span>Show FPS</span><input type="checkbox" data-k="showFps" ${t.showFps?`checked`:``}></div>
      <div class="row" style="color:#999">Quality changes apply on the next match.</div>`,e.querySelectorAll(`select`).forEach(e=>{e.value=t[e.dataset.k],e.onchange=()=>{t[e.dataset.k]=e.value,Bf(),this.game.applySettings()}}),e.querySelectorAll(`input[type=range]`).forEach(n=>{n.oninput=()=>{let r=n.dataset.k;t[r]=r===`bots`||r===`fov`?parseInt(n.value,10):parseFloat(n.value);let i=e.querySelector(`[data-v="${r}"]`);i.textContent=r===`volume`?Math.round(t[r]*100):r.includes(`ensitivity`)?t[r].toFixed(2):t[r],Bf(),this.game.applySettings()}}),e.querySelectorAll(`input[type=checkbox]`).forEach(e=>{e.onchange=()=>{t[e.dataset.k]=e.checked,Bf(),this.game.applySettings()}})}renderControls(e){e.innerHTML=`<h3>CONTROLS</h3><div class="keys">${[[`W A S D`,`Move`],[`Shift`,`Sprint`],[`C / Ctrl`,`Crouch`],[`Space`,`Jump · vault · climb out of water`],[`Mouse`,`Look`],[`Left click`,`Fire · hold to cook grenade`],[`Right click (hold)`,`Aim down sights / scope`],[`R`,`Reload`],[`F`,`Pick up · open crate · jump · parachute`],[`1 2 3`,`Primary / secondary / pistol`],[`4`,`Grenades`],[`G`,`Frag / smoke`],[`X`,`Holster`],[`B`,`Fire mode (auto / single)`],[`H`,`Best heal`],[`J`,`Boost (drink / painkiller)`],[`7 8 9 0 -`,`Bandage · First aid · Med kit · Drink · Painkiller`],[`Tab`,`Inventory`],[`M`,`Map (right-click: marker)`],[`V`,`First / third person`],[`Esc`,`Pause`]].map(([e,t])=>`<b>${e}</b><span>${t}</span>`).join(``)}</div>
      <h3 style="margin-top:20px">HOW TO WIN</h3>
      <div style="font-size:13px;color:#ccc;line-height:1.6">Jump from the plane over Geneva, loot weapons, armour and meds in the buildings,
      stay inside the white circle as the blue zone closes in, and be the last one standing.
      Hot spots: Gare Cornavin, the Vieille Ville and the cathedral tower, Place de Neuve, the Parc des Bastions, the Bains des Pâquis and the paddle steamer at the Jardin Anglais.
      Care packages drop twice per match, and three times per match <b>L'Escalade</b> bombards a red circle — take cover indoors.</div>`}pause(){this.game.state===`match`&&(this.closeOverlays(),this.paused=!0,eh(`pause`).classList.remove(`hidden`),eh(`pausePanel`).classList.add(`hidden`),this.game.input.exitLock())}resume(){this.endOpen||(this.paused=!1,eh(`pause`).classList.add(`hidden`),eh(`clickToPlay`).classList.add(`hidden`),this.game.input.requestLock())}toggleMap(){this.invOpen&&this.closeInventory(),this.mapOpen=!this.mapOpen,eh(`fullmap`).classList.toggle(`hidden`,!this.mapOpen),this.mapOpen?(this.game.input.exitLock(),this.drawMap()):this.game.input.requestLock()}drawMap(){let e=this.game,t=Math.min(window.innerHeight-70,window.innerWidth-60,1100),n=this.fm;n.width!==t&&(n.width=t,n.height=t);let r=n.getContext(`2d`);r.drawImage(e.world.mapCanvas,0,0,t,t);let i=(e,n)=>[(e+800)/vl*t,(n+800)/vl*t];r.strokeStyle=`rgba(255,255,255,0.12)`,r.lineWidth=1,r.font=`bold 11px Helvetica`,r.fillStyle=`rgba(255,255,255,0.45)`;for(let e=1;e<8;e++){let n=e/8*t;r.beginPath(),r.moveTo(n,0),r.lineTo(n,t),r.moveTo(0,n),r.lineTo(t,n),r.stroke()}for(let e=0;e<8;e++)r.fillText(String.fromCharCode(65+e),(e+.5)*(t/8)-4,12),r.fillText(String(e+1),4,(e+.5)*(t/8)+4);r.textAlign=`center`;for(let e of Bl){let[n,a]=i(e.x,e.z);n=Y(n,60,t-60),a=Y(a,16,t-10),r.font=`${e.hot?`bold `:``}${e.hot?15:12}px Helvetica, Arial`,r.lineWidth=3,r.strokeStyle=`rgba(0,0,0,0.7)`,r.strokeText(e.name.toUpperCase(),n,a),r.fillStyle=e.hot?`#ffe9a8`:`#fff`,r.fillText(e.name.toUpperCase(),n,a)}for(let e of Vl){let[n,a]=i(e.x,e.z);n=Y(n,90,t-90),r.save(),r.translate(n,a),r.rotate(e.rot||0),r.font=`italic ${Math.round(14*e.size)}px Georgia, serif`,r.fillStyle=`rgba(210,235,255,0.85)`,r.fillText(e.name,0,0),r.restore()}r.textAlign=`left`;let a=e.zone,[o,s]=i(a.cur.x,a.cur.z);if(r.save(),r.beginPath(),r.rect(0,0,t,t),r.arc(o,s,a.cur.r/vl*t,0,Math.PI*2,!0),r.fillStyle=`rgba(40,90,255,0.3)`,r.fill(`evenodd`),r.restore(),r.strokeStyle=`#4f8cff`,r.lineWidth=2.5,r.beginPath(),r.arc(o,s,a.cur.r/vl*t,0,Math.PI*2),r.stroke(),a.next){let[e,n]=i(a.next.x,a.next.z);r.strokeStyle=`#fff`,r.lineWidth=2,r.beginPath(),r.arc(e,n,a.next.r/vl*t,0,Math.PI*2),r.stroke()}if(e.plane.active||e.player.mode===`plane`){let[t,n]=i(e.plane.start.x,e.plane.start.z),[a,o]=i(e.plane.end.x,e.plane.end.z);r.strokeStyle=`rgba(255,255,255,0.8)`,r.setLineDash([10,8]),r.lineWidth=2,r.beginPath(),r.moveTo(t,n),r.lineTo(a,o),r.stroke(),r.setLineDash([]);let[s,c]=i(e.plane.pos.x,e.plane.pos.z);r.fillStyle=`#fff`,r.beginPath(),r.arc(s,c,6,0,Math.PI*2),r.fill()}if(e.redZone.active){let n=e.redZone.active,[a,o]=i(n.x,n.z);r.fillStyle=`rgba(230,40,30,0.3)`,r.strokeStyle=`rgba(255,60,40,0.95)`,r.lineWidth=2,r.beginPath(),r.arc(a,o,n.r/vl*t,0,Math.PI*2),r.fill(),r.stroke()}for(let t of e.loot.containers){if(t.kind!==`package`)continue;let[e,n]=i(t.x,t.z);r.fillStyle=`#e8332a`,r.fillRect(e-5,n-5,10,10)}if(e.marker){let[t,n]=i(e.marker.x,e.marker.z);r.fillStyle=`#f2c230`,r.beginPath(),r.moveTo(t,n),r.lineTo(t-7,n-14),r.lineTo(t+7,n-14),r.fill()}let c=e.player;if(c.alive){let[e,t]=i(c.pos.x,c.pos.z);r.save(),r.translate(e,t),r.rotate(c.yaw),r.fillStyle=`#f2c230`,r.strokeStyle=`#000`,r.beginPath(),r.moveTo(0,-11),r.lineTo(7,8),r.lineTo(0,4),r.lineTo(-7,8),r.closePath(),r.fill(),r.stroke(),r.restore()}}toggleInventory(){this.invOpen?this.closeInventory():this.openInventory(null)}openInventory(e){this.mapOpen&&this.toggleMap(),this.invOpen=!0,this.container=e,eh(`inventory`).classList.remove(`hidden`),this.game.input.exitLock(),this.renderInventory()}closeInventory(){this.invOpen=!1,this.container=null,eh(`inventory`).classList.add(`hidden`),this.game.state===`match`&&!this.paused&&!this.endOpen&&this.game.input.requestLock()}closeOverlays(){this.invOpen&&this.closeInventory(),this.mapOpen&&(this.mapOpen=!1,eh(`fullmap`).classList.add(`hidden`))}resetScreens(){this.closeOverlays(),this.paused=!1,this.endOpen=!1,eh(`pause`).classList.add(`hidden`),eh(`endScreen`).classList.add(`hidden`)}renderInventory(){let e=this.game,t=e.player,n=eh(`inventory`);if(!t)return;let r=e.loot.near(t.pos.x,t.pos.y,t.pos.z,3.2),i=this.container?[this.container]:e.loot.containersNear(t.pos.x,t.pos.y,t.pos.z,3),a=``,o=this.contRefs=[];for(let e of i){a+=`<h4 style="margin-top:6px"><span>${$m(e.kind===`package`?`CARE PACKAGE`:(e.name+`'s crate`).toUpperCase())}</span></h4>`;for(let t of e.items)a+=`<div class="item" data-act="cont" data-r="${o.length}"><span>${$m(jp(t))}</span><span class="q">${Mp(t)?Mp(t).toFixed(0):``}</span></div>`,o.push({c:e,it:t})}r.length&&(a+=`<h4 style="margin-top:6px"><span>GROUND</span></h4>`);for(let e of r)a+=`<div class="item" data-act="ground" data-id="${e.id}"><span>${$m(jp(e.item))}</span><span class="q">${Mp(e.item)?Mp(e.item).toFixed(0):``}</span></div>`;a||=`<div class="q" style="color:#888">Nothing nearby</div>`;let s=t.weight(),c=t.capacity(),l=`<div class="cap"><div style="width:${Y(s/c,0,1)*100}%"></div></div>`;for(let[e,n]of Object.entries(t.inv.ammo))n>0&&(l+=`<div class="item" data-act="drop" data-kind="ammo" data-id="${e}"><span>${Sp[e].name}</span><span class="q">${n}</span></div>`);for(let[e,n]of Object.entries(t.inv.meds))n>0&&(l+=`<div class="item" data-act="use" data-id="${e}"><span>${Dp[e].name}</span><span class="q">${n}</span></div>`);for(let[e,n]of Object.entries(t.inv.throws))n>0&&(l+=`<div class="item" data-act="drop" data-kind="throw" data-id="${e}"><span>${kp[e].name}</span><span class="q">${n}</span></div>`);t.inv.atts.forEach((e,t)=>l+=`<div class="item" data-act="attach" data-i="${t}"><span>${Op[e].name}</span><span class="q">attach</span></div>`);let u=(e,t,n)=>{if(!t)return`<div style="opacity:.35">${e}<br>—</div>`;let r=n===`pack`?Ep[`pack`+t]:Ep[t.id];return`<div data-act="dropgear" data-type="${n}">${e}<br><b>Lv.${r.level}</b>${t.dur===void 0?``:`<br><span class="q">${Math.round(t.dur)}/${r.dur}</span>`}</div>`},d=`<div class="gear">${u(`Helmet`,t.helmet,`helmet`)}${u(`Vest`,t.vest,`vest`)}${u(`Backpack`,t.pack||null,`pack`)}</div>`;t.weapons.forEach((e,n)=>{if(!e)return;let r=Cp[e.id],i=(t,r)=>{let i=e.att[t];return i?`<span class="att" data-act="detach" data-s="${n}" data-kind="${t}">${Op[i].name} ✕</span>`:`<span class="att empty">${r}</span>`};d+=`<div class="wcard"><div class="t"><span>${n+1}. ${r.name}</span><span class="q">${e.loaded}/${t.magSize(e)} · ${Sp[r.ammo].name}</span></div>
        <div class="atts">${i(`scope`,`Sight`)}${r.cls===`SG`?``:i(`mag`,`Magazine`)+i(`muzzle`,`Muzzle`)}<span class="att" data-act="dropw" data-s="${n}">Drop</span></div></div>`}),n.innerHTML=`<div class="col"><h4><span>VICINITY</span></h4>${a}</div>
      <div class="col"><h4><span>BACKPACK</span><span>${s.toFixed(0)} / ${c}</span></h4>${l}</div>
      <div class="col"><h4><span>EQUIPMENT</span><span>HP ${Math.round(t.health)}</span></h4>${d}</div>
      <div class="help">Click: pick up / use / attach · Right-click a backpack item to drop it · Tab / Esc to close</div>`,n.querySelectorAll(`[data-act]`).forEach(e=>{e.onclick=t=>this.invAction(e.dataset,!1),e.oncontextmenu=t=>{t.preventDefault(),this.invAction(e.dataset,!0)}})}invAction(e,t){let n=this.game,r=n.player;if(r.alive){if(e.act===`ground`){let t=n.loot.items.get(parseInt(e.id,10));t&&n.pickUp(r,t)}else if(e.act===`cont`){let t=this.contRefs[parseInt(e.r,10)],i=t&&t.c,a=i?i.items.indexOf(t.it):-1;if(a<0){this.renderInventory();return}n.loot.takeFromContainer(i,a,r)?(n.audio.play(`pickup`,null,{direct:!0}),i.items.length||(this.container=null)):n.hud.toast(`Not enough space`)}else if(e.act===`use`)t?this.dropStack(`med`,e.id):(r.input.heal=e.id,this.closeInventory());else if(e.act===`drop`)this.dropStack(e.kind,e.id);else if(e.act===`attach`){let i=parseInt(e.i,10),a=r.inv.atts[i];if(t)r.inv.atts.splice(i,1),n.loot.drop({kind:`att`,id:a},r.pos.x,r.pos.y,r.pos.z);else{let e=Op[a].kind,t=[r.active,0,1,2].filter(e=>e>=0&&e<=2);for(let n of t){let t=r.weapons[n];if(t&&Ap(t.id,a)){let n=t.att[e];t.att[e]=a,r.inv.atts.splice(i,1),n&&r.inv.atts.push(n),r.refreshModel();break}}}}else if(e.act===`detach`){let t=r.weapons[parseInt(e.s,10)],i=t&&t.att[e.kind];i&&(t.att[e.kind]=null,e.kind===`mag`&&t.loaded>r.magSize(t)&&(r.inv.ammo[Cp[t.id].ammo]+=t.loaded-r.magSize(t),t.loaded=r.magSize(t)),r.fits(`att`,i,1)?r.inv.atts.push(i):n.loot.drop({kind:`att`,id:i},r.pos.x,r.pos.y,r.pos.z),r.refreshModel())}else if(e.act===`dropw`){let t=parseInt(e.s,10),i=r.weapons[t];i&&(i.loaded>0&&(r.inv.ammo[Cp[i.id].ammo]+=i.loaded,i.loaded=0),r.weapons[t]=null,n.loot.drop(i,r.pos.x,r.pos.y,r.pos.z),r.active===t&&(r.active=-1),r.refreshModel())}else if(e.act===`dropgear`){let t=e.type;t===`pack`?r.pack&&=(n.loot.drop({kind:`armor`,id:`pack`+r.pack},r.pos.x,r.pos.y,r.pos.z),0):r[t]&&(n.loot.drop({kind:`armor`,id:r[t].id,dur:r[t].dur},r.pos.x,r.pos.y,r.pos.z),r[t]=null),r.refreshModel()}this.renderInventory()}}dropStack(e,t){let n=this.game,r=n.player,i=e===`ammo`?r.inv.ammo:e===`med`?r.inv.meds:r.inv.throws,a=i[t];if(!a)return;let o=e===`ammo`?Math.min(a,30):a;i[t]-=o,n.loot.drop({kind:e,id:t,count:o},r.pos.x,r.pos.y,r.pos.z)}showEnd(e,t){let n=eh(`endScreen`);n.classList.remove(`hidden`),n.innerHTML=`
      <div class="rank"><b>#${t.rank}</b> / ${t.total}</div>
      <div class="title ${e?`win`:``}">${e?`WINNER WINNER FONDUE DINNER!`:`BETTER LUCK NEXT TIME`}</div>
      ${t.killer?`<div style="color:#ccc">Eliminated by <b>${$m(t.killer)}</b>${t.weapon?` with `+$m(t.weapon):``}</div>`:``}
      <div class="stats">
        <div><b>${t.kills}</b><small>KILLS</small></div>
        <div><b>${Math.round(t.damage)}</b><small>DAMAGE</small></div>
        <div><b>${gu(t.time)}</b><small>SURVIVED</small></div>
        <div><b>${$m(t.landed||`—`)}</b><small>DROPPED AT</small></div>
      </div>
      <div class="btns">
        <button class="big" id="btnAgain">PLAY AGAIN</button>
        ${e?``:`<button id="btnSpectate">SPECTATE</button>`}
        <button id="btnMenu">MAIN MENU</button>
      </div>`,eh(`btnAgain`).onclick=()=>this.game.startMatch(),eh(`btnMenu`).onclick=()=>this.game.toMenu();let r=eh(`btnSpectate`);r&&(r.onclick=()=>{this.endOpen=!1,n.classList.add(`hidden`),this.game.input.requestLock()})}},nh={AR:170,SMG:120,SG:130,DMR:200,SR:240,PISTOL:100};new class{constructor(){this.state=`loading`,this.time=0,this.matchTime=0,this.frame=0,this.characters=[],this.bots=[],this.player=null,this.marker=null,this.cameraDir=new H(0,0,-1)}async init(){let e=Vf(),t=new _l({antialias:e>=1,powerPreference:`high-performance`,stencil:!1});t.setPixelRatio(Math.min(e===2?2:e===1?1.25:1,window.devicePixelRatio||1)),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=4,t.toneMappingExposure=1,t.shadowMap.enabled=e>=1,t.shadowMap.type=1,document.getElementById(`app`).prepend(t.domElement),this.renderer=t,this.scene=new vn,this.camera=new ja(zf.fov,window.innerWidth/window.innerHeight,.15,6e3),this.scene.add(this.camera),window.addEventListener(`resize`,()=>this.onResize()),this.input=new Mf(t.domElement),this.audio=new Pf,this.audio.setVolume(zf.volume);let n=document.getElementById(`loadFill`),r=document.getElementById(`loadText`);this.world=new jf(t,this.scene),await this.world.build((e,t)=>{n.style.width=Math.round(t*100)+`%`,r.textContent=e});let i=this.world.env;this.scene.fog=new _n(i.fogColor,i.fogDensity),this.hemi=new ya(13163762,10722186,1.55),this.scene.add(this.hemi);let a=new Pa(16773336,3.1);a.castShadow=e>=1;let o=e===2?2048:1024;a.shadow.mapSize.set(o,o);let s=a.shadow.camera,c=e===2?95:70;s.left=-c,s.right=c,s.top=c,s.bottom=-c,s.near=1,s.far=900,a.shadow.bias=-5e-4,a.shadow.normalBias=.5,this.scene.add(a,a.target),this.sun=a,this.shadowExt=c,this.effects=new bm(this,this.scene,i),this.world.special.jet&&this.effects.initJet(this.world.special.jet),this.ballistics=new gm(this),this.throwables=new Sm(this,this.scene),this.zone=new wm(this,this.scene),this.zone.mesh.visible=!1,this.plane=new Dm(this.scene),this.loot=new Fm(this,this.scene),this.airdrops=new Lm(this,this.scene),this.vehicles=new Jm(this),this.redZone=new Xm(this,this.scene),this.hud=new Qm(this),this.ui=new th(this),this.input.onLockChange=e=>{!e&&this.state===`match`&&!this.ui.mapOpen&&!this.ui.invOpen&&!this.ui.paused&&!this.ui.endOpen&&this.ui.pause()},window.addEventListener(`keydown`,e=>this.onKey(e)),t.domElement.addEventListener(`click`,()=>{this.state===`match`&&!this.input.locked&&!this.ui.mapOpen&&!this.ui.invOpen&&!this.ui.paused&&!this.ui.endOpen&&this.input.requestLock()});let l=this.world.stats;document.getElementById(`menuStats`).innerHTML=`${l.lots+20} buildings (${l.enterable} you can enter) · ${l.trees} trees · ${l.lootSpots} loot spots<br>Map generated in ${l.buildMs} ms`,this.toMenu(),this.last=performance.now(),this.renderer.setAnimationLoop(()=>this.loop()),window.__game=this}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui&&this.ui.mapOpen&&this.ui.drawMap()}applySettings(){this.audio.setVolume(zf.volume)}onKey(e){this.state!==`match`||this.ui.endOpen||e.target&&e.target.tagName===`INPUT`||(e.code===`KeyM`?this.ui.toggleMap():e.code===`Tab`||e.code===`KeyI`?this.player&&this.player.alive&&this.ui.toggleInventory():e.code===`Escape`&&(this.ui.invOpen?this.ui.closeInventory():this.ui.mapOpen?this.ui.toggleMap():this.ui.paused&&this.ui.resume()))}toMenu(){this.state=`menu`,this.input.exitLock(),this.cleanupMatch(),document.getElementById(`loading`).classList.add(`hidden`),document.getElementById(`menu`).classList.remove(`hidden`),document.getElementById(`endScreen`).classList.add(`hidden`),this.hud.show(!1),this.zone.mesh.visible=!1,this.menuT=0}cleanupMatch(){clearTimeout(this.endTimer),this.endTimer=0,this.ui.resetScreens();for(let e of this.characters)this.scene.remove(e.root),e.parachute&&this.scene.remove(e.parachute);this.characters=[],this.bots=[],this.player=null,this.pc=null,this.ballistics.clear(),this.effects.clear(),this.throwables.clear(),this.loot.clear(),this.airdrops.reset(),this.redZone.reset(),this.vehicles.clear(),this.plane.active=!1,this.plane.model.visible=!1,this.ui.closeOverlays(),this.marker=null}startMatch(){this.input.requestLock(),this.cleanupMatch(),document.getElementById(`menu`).classList.add(`hidden`),document.getElementById(`endScreen`).classList.add(`hidden`),this.hud.show(!0),this.state=`match`,this.matchTime=0,this.ended=!1,this.endShown=!1,this.landedAt=0,this.landedName=null,this.deathInfo=null,this.deathMatchTime=0;let e=Y(zf.bots|0,1,99),t=zf.difficulty,n=[...lm].sort(()=>Math.random()-.5),r=new Jp(this,{name:zf.playerName||`Calvin`,isPlayer:!0,outfit:bp});this.player=r,this.pc=new rm(this,r,this.camera),this.characters.push(r);for(let r=0;r<e;r++){let e=Y((t===`easy`?.3:t===`hard`?.72:.5)+(Math.random()-.5)*.45,.08,.98),i=new Jp(this,{name:n[r%n.length]+(r>=n.length?`_`+r:``),outfit:yp(),skill:e});this.characters.push(i),this.bots.push(new um(this,i))}for(let e of this.characters)this.scene.add(e.root),e.root.visible=!1,e.mode=`plane`,e.refreshModel();this.observer&&(r.alive=!1,r.mode=`dead`,r.crateDropped=!0,this.endShown=!0);let i=this.loot.spawnAll(this.world.loot,1);this.lootCount=i,this.vehicles.spawnAll(),this.zone.reset(),this.zone.mesh.visible=!0,this.plane.setup();for(let e of this.bots)e.planDrop(this.plane,Bl);this.pc.planeYaw=Math.atan2(-this.plane.dir.x,this.plane.dir.z)+Math.PI,this.hud.center(`WELCOME TO GENÈVE`,`${this.characters.length} players · the plane is crossing Geneva — press F to jump`,5),this.audio.play(`beep`,null,{direct:!0,gain:.4})}debugSpawn(e,t,n=!0){let r=this.player;if(!r)return;let i=this.world.C.support(e,t,.3,200);if(r.mode=`ground`,r.pos.set(e,i,t),r.vel.set(0,0,0),r.onGround=!0,r.root.visible=!0,n){let e=Np(`sg550`,30);e.att.scope=`x4`,r.weapons[0]=e,r.weapons[2]=Np(`p226`,15),r.inv.ammo[556]=120,r.inv.ammo[`9mm`]=45,r.inv.meds.bandage=5,r.inv.meds.firstaid=1,r.inv.throws.frag=2,r.helmet={id:`helmet2`,dur:150},r.vest={id:`vest2`,dur:220},r.pack=2,r.active=0,r.refreshModel()}this.landedAt=this.matchTime}aliveCount(){let e=0;for(let t of this.characters)t.alive&&e++;return e}jumpFromPlane(e){e.mode===`plane`&&(!this.plane.insideMap()&&!this.plane.pastMap()?e.isPlayer&&this.hud.toast(`Wait until the plane is over Geneva`):(e.mode=`freefall`,e.pos.copy(this.plane.pos).add(new H(Z(-3,3),-5,Z(-3,3))),e.vel.copy(this.plane.dir).multiplyScalar(this.plane.speed*.4),e.vel.y=-5,e.root.visible=!0,e.isPlayer||(e.yaw=ql(this.plane.dir.x,this.plane.dir.z)),e.isPlayer&&(e.pitch=-.35,this.audio.play(`chute`,null,{direct:!0,gain:.4}))))}onParachute(e){e.parachute||(e.parachute=km(),this.scene.add(e.parachute)),e.parachute.visible=!0,this.audio.play(`chute`,e.isPlayer?null:e.pos,{direct:e.isPlayer,gain:e.isPlayer?.9:.6})}onLanded(e){if(e.parachute&&(e.parachute.visible=!1),this.effects.dust(e.pos.x,e.pos.y,e.pos.z,.6),e.isPlayer){this.landedAt=this.matchTime;let t=null,n=1/0;for(let r of Bl){let i=Math.hypot(r.x-e.pos.x,r.z-e.pos.z)/r.r;i<n&&(n=i,t=r)}this.landedName=t?t.name:`Genève`,this.hud.center(this.landedName.toUpperCase(),`Find a weapon. The blue zone will close in soon.`,3.5)}}onSplash(e){this.effects.splash(e.pos.x,0,e.pos.z,1.2),this.audio.play(`splash`,e.isPlayer?null:e.pos,{direct:e.isPlayer,gain:.8})}onShot(e,t,n){let r=Cp[t];this.effects.muzzle(n,e.aimDir,r.cls===`SG`||r.cls===`SR`),this.audio.gunshot(r.cls,n,e.isPlayer),e.isPlayer&&this.pc.onShot(t),this.onNoise(n,nh[r.cls]||150,e)}onNoise(e,t,n){for(let r of this.bots)r.ch.alive&&r.ch!==n&&r.ch.pos.distanceTo(e)<t&&r.hear(e,t,n)}onFootstep(e,t){(e.isPlayer||e.pos.distanceTo(this.camera.position)<45)&&this.audio.play(`step`,e.isPlayer?null:e.pos,{direct:e.isPlayer,gain:e.isPlayer?.22:t?.9:.6,surf:e.surface}),(t||Math.random()<.5)&&this.onNoise(e.pos,t?30:18,e)}groundSurface(e,t){let n=this.world.ground.get(e,t);return n===gf.GRASS||n===gf.DIRT?$.GRASS:n===gf.GRAVEL||n===gf.BALLAST?$.DIRT:$.STONE}onDamage(e,t,n,r,i,a){e.isPlayer&&(this.hud.damage(a?new H().subVectors(a,e.pos):null),t>3&&this.audio.play(`hurt`,null,{direct:!0,gain:Y(t/40,.3,1)}),this.pc.addShake(Y(t/60,.1,.6)))}onHitMarker(e,t,n){this.hud.hitmarker(t,n),this.audio.play(n?`kill`:t===`head`?`headshot`:`hit`,null,{direct:!0})}onBulletNear(e,t){this.audio.play(`crack`,null,{direct:!0,gain:Y(1.2-t/3.5,.2,1)}),this.pc.addShake(.08)}onExplosion(e){let t=this.camera.position.distanceTo(e);t<40&&this.pc.addShake(Y(1-t/40,0,1)*1.2)}onKill(e,t,n){let r=e.isPlayer||t&&t.isPlayer;this.hud.killfeed(t,e,n,r),t&&t.isPlayer&&e!==t&&this.hud.center(`YOU KILLED ${e.name.toUpperCase()}`,`${t.kills} kill${t.kills>1?`s`:``}`,2),e.placement=this.aliveCount()+1,e.isPlayer&&(this.deathInfo={killer:t&&t!==e?t.name:null,weapon:Cp[n]?Cp[n].name:n===`zone`?`the blue zone`:n===`frag`?`a grenade`:n===`escalade`?`L'Escalade bombardment`:n===`vehicle`?`a vehicle`:null},this.deathMatchTime=this.matchTime,this.ui.closeOverlays(),clearTimeout(this.endTimer),this.endTimer=setTimeout(()=>this.showEnd(!1),2200)),this.checkWin()}checkWin(){if(this.ended)return;let e=this.characters.filter(e=>e.alive);if(e.length<=1){this.ended=!0;let t=e[0];t&&t.isPlayer?(clearTimeout(this.endTimer),this.endTimer=setTimeout(()=>this.showEnd(!0),1500),this.audio.play(`win`,null,{direct:!0}),this.hud.center(`WINNER WINNER FONDUE DINNER!`,`Geneva is yours`,6)):t&&this.hud.center(`${t.name.toUpperCase()} WINS`,`Winner winner fondue dinner`,6)}}showEnd(e){this.endTimer=0;let t=this.player;!t||this.state!==`match`||this.endShown&&!e||(this.endShown=!0,this.ui.endOpen=!0,this.ui.closeOverlays(),this.input.exitLock(),this.ui.showEnd(e,{rank:e?1:t.placement||this.aliveCount()+1,total:this.characters.length,kills:t.kills,damage:t.damageDealt,time:e?this.matchTime:this.deathMatchTime,killer:this.deathInfo&&this.deathInfo.killer,weapon:this.deathInfo&&this.deathInfo.weapon,landed:this.landedName}))}onZoneEvent(e,t){this.player&&this.player.alive&&(e===`reveal`?(this.hud.center(t===0?`PLAY AREA REVEALED`:`NEW PLAY AREA`,`Proceed to the white circle on the map`,3.5),this.audio.play(`beep`,null,{direct:!0,gain:.5})):e===`shrink`&&(this.hud.center(`RESTRICTING THE PLAY AREA`,``,3),this.audio.play(`beep`,null,{direct:!0,gain:.5})))}onCareIncoming(e){if(!this.player)return;let t=null,n=1/0;for(let r of Bl){let i=Math.hypot(r.x-e.x,r.z-e.z);i<n&&(n=i,t=r)}this.hud.toast(`A care package is dropping near ${t?t.name:`Genève`}!`,4)}onCareLanded(){}pickUp(e,t){if(!this.loot.items.has(t.id))return!1;let n=e.takeItem(t.item);if(!n.taken)return e.isPlayer&&this.hud.toast(t.item.kind===`armor`?`You already have better gear`:`Not enough space`),!1;this.loot.remove(t),n.remainder&&this.loot.add(n.remainder,t.x,t.y,t.z);for(let t of n.dropped)this.loot.drop(t,e.pos.x,e.pos.y,e.pos.z);return e.isPlayer&&(this.audio.play(`pickup`,null,{direct:!0,gain:.7}),this.ui.invOpen&&this.ui.renderInventory()),!0}loop(){let e=performance.now(),t=(e-this.last)/1e3;if(this.last=e,t=Math.min(t,.05),this.time+=t,this.frame++,qu.time.value=this.time,this.state===`match`){let e=this.timeScale||1;for(let n=0;n<e;n++)n>0&&(this.time+=t),this.updateMatch(t)}else this.state===`menu`&&this.updateMenu(t);this.world.updateClocks(),this.effects.update(t),this.updateSun(),this.renderer.render(this.scene,this.camera),this.input.endFrame()}updateMenu(e){this.menuT+=e;let t=this.menuT*.035;this.camera.position.set(120+Math.cos(t)*520,170+Math.sin(t*.7)*30,120+Math.sin(t)*520),this.camera.lookAt(48,20,8),this.camera.fov!==55&&(this.camera.fov=55,this.camera.updateProjectionMatrix()),this.camera.getWorldDirection(this.cameraDir),this.audio.update(this.camera,{forward:this.cameraDir,up:this.camera.up,windSpeed:8,altitude:150,planePos:null,jetPos:this.world.special.jet,inBlue:!1,ambient:.03})}updateMatch(e){if(this.ui.paused)return;if(this.matchTime+=e,this.pathBudget=4,this.plane.update(e),this.plane.pastMap())for(let e of this.characters)e.mode===`plane`&&this.jumpFromPlane(e);for(let e of this.characters)e.mode===`plane`&&e.pos.copy(this.plane.pos);this.pc.update(e);for(let t of this.bots)t.update(e);for(let t of this.characters)t.update(e);this.zone.update(e);let t=this.zone.damagePerSecond();if(t>0){let n=[];for(let r of this.characters){if(!r.alive||r.mode===`plane`)continue;let i=this.zone.isOutside(r.pos.x,r.pos.z);r.inBlue=i,i&&(r.health-=t*e,r.isPlayer&&Math.random()<e*2&&this.hud.damage(null),r.health<=0&&n.push(r))}if(n.length){n.length>=this.aliveCount()&&(n.sort((e,t)=>t.health-e.health),n[0].health=1,n.shift());for(let e of n)e.die(null,`zone`)}}this.vehicles.update(e),this.redZone.update(e),this.ballistics.update(e),this.throwables.update(e),this.airdrops.update(e),this.ui.mapOpen&&this.frame%10==0&&this.ui.drawMap(),this.ui.invOpen&&this.frame%30==0&&this.ui.renderInventory();let n=this.camera.position;for(let e of this.characters){if(e.mode===`plane`||e.mode===`vehicle`||!e.alive&&e.crateDropped)continue;let t=e.pos.distanceTo(n);e.root.visible=t<650&&!(e.isPlayer&&(this.pc.view===`fpp`||this.pc.ads>.5)&&e.alive)}this.camera.getWorldDirection(this.cameraDir),this.hud.update(e);let r=this.player;this.audio.update(this.camera,{forward:this.cameraDir,up:this.camera.up,windSpeed:r.mode===`freefall`?Math.hypot(r.vel.x,r.vel.y,r.vel.z):r.mode===`parachute`?14:0,altitude:r.pos.y,planePos:this.plane.active?this.plane.pos:null,inPlane:r.mode===`plane`,jetPos:this.world.special.jet,inBlue:r.alive&&r.inBlue,ambient:.04,engine:r.alive&&r.vehicle?{speed:Math.abs(r.vehicle.speed),throttle:Math.abs(r.vehicleInput.throttle),boat:r.vehicle.kind===`boat`}:null}),this.frame%600==0&&this.ambientBirds()}ambientBirds(){let e=this.player;e&&e.alive&&(this.world.ground.get(e.pos.x,e.pos.z)===gf.GRASS||Math.random()<.3)&&this.audio.play(`chirp`,{x:e.pos.x+Z(-20,20),y:e.pos.y+8,z:e.pos.z+Z(-20,20)},{gain:.5})}updateSun(){let e=this.sun;if(!e.castShadow)return;let t=this.cameraDir,n=this.camera.position,r=this.state===`menu`?0:this.shadowExt*.55,i=n.x+t.x*r,a=n.z+t.z*r,o=this.player&&this.player.alive&&this.player.mode!==`plane`?this.player.pos.y:this.world.T.heightAt(i,a),s=this.shadowExt*2/e.shadow.mapSize.x;i=Math.round(i/s)*s,a=Math.round(a/s)*s,e.target.position.set(i,o,a),e.position.set(i,o,a).addScaledVector(this.world.env.sunDir,450),e.target.updateMatrixWorld()}}().init().catch(e=>{console.error(e);let t=document.getElementById(`loadText`);t&&(t.textContent=`Error: `+e.message)});