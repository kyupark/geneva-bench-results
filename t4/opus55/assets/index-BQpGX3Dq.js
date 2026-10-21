(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,ne=33779,N=35840,re=35841,P=35842,ie=35843,ae=36196,oe=37492,se=37496,ce=37488,F=37489,le=37490,ue=37491,de=37808,fe=37809,pe=37810,me=37811,he=37812,ge=37813,_e=37814,ve=37815,ye=37816,be=37817,xe=37818,Se=37819,Ce=37820,we=37821,Te=36492,Ee=36494,De=36495,Oe=36283,ke=36284,Ae=36285,je=36286,Me=2300,I=2301,Ne=2302,Pe=2303,Fe=2400,L=2401,Ie=2402,R=3200,Le=`srgb`,z=`srgb-linear`,Re=`linear`,ze=`srgb`,Be=7680,Ve=35044,He=35048,Ue=2e3;function We(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ge(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ke(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qe(){let e=Ke(`canvas`);return e.style.display=`block`,e}var Je={};function Ye(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ze(...e){let t=e.join(` `);t in Je||(Je[t]=!0,B(...e))}function Qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $e={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tt[e&255]+tt[e>>8&255]+tt[e>>16&255]+tt[e>>24&255]+`-`+tt[t&255]+tt[t>>8&255]+`-`+tt[t>>16&15|64]+tt[t>>24&255]+`-`+tt[n&63|128]+tt[n>>8&255]+`-`+tt[n>>16&255]+tt[n>>24&255]+tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]).toLowerCase()}function H(e,t,n){return Math.max(t,Math.min(n,e))}function at(e,t){return(e%t+t)%t}function ot(e,t,n){return(1-n)*e+n*t}function st(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var U=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(H(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ut.copy(this).projectOnVector(e),this.sub(ut)}reflect(e){return this.sub(ut.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ut=new W,dt=new lt,G=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ze(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ft.makeScale(e,t)),this}rotate(e){return Ze(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ft.makeRotation(-e)),this}translate(e,t){return Ze(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ft=new G,pt=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mt=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ht(){let e={enabled:!0,workingColorSpace:z,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=_t(e.r),e.g=_t(e.g),e.b=_t(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=vt(e.r),e.g=vt(e.g),e.b=vt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Re:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[z]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:pt,fromXYZ:mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:pt,fromXYZ:mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),e}var gt=ht();function _t(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var yt,bt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yt===void 0&&(yt=Ke(`canvas`)),yt.width=e.width,yt.height=e.height;let t=yt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=yt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ke(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=_t(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(_t(t[e]/255)*255):t[e]=_t(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},xt=0,St=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xt++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ct(r[t].image)):e.push(Ct(r[t]))}else e=Ct(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ct(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?bt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var wt=0,Tt=new W,Et=class r extends et{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wt++}),this.uuid=it(),this.name=``,this.source=new St(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tt).x}get height(){return this.source.getSize(Tt).y}get depth(){return this.source.getSize(Tt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Et.DEFAULT_IMAGE=null,Et.DEFAULT_MAPPING=300,Et.DEFAULT_ANISOTROPY=1;var Dt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this.w=H(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this.w=H(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ot=class extends et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r=new Et({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new St(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},kt=class extends Ot{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},At=class extends Et{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},jt=class extends Et{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},K=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Mt.setFromMatrixColumn(e,0).length(),i=1/Mt.setFromMatrixColumn(e,1).length(),a=1/Mt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pt,e,Ft)}lookAt(e,t,n){let r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),It.crossVectors(n,Rt),It.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),It.crossVectors(n,Rt)),It.normalize(),Lt.crossVectors(Rt,It),r[0]=It.x,r[4]=Lt.x,r[8]=Rt.x,r[1]=It.y,r[5]=Lt.y,r[9]=Rt.y,r[2]=It.z,r[6]=Lt.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*N,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*N,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*N,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Mt.set(r[0],r[1],r[2]).length(),o=Mt.set(r[4],r[5],r[6]).length(),s=Mt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Nt.copy(this);let c=1/a,l=1/o,u=1/s;return Nt.elements[0]*=c,Nt.elements[1]*=c,Nt.elements[2]*=c,Nt.elements[4]*=l,Nt.elements[5]*=l,Nt.elements[6]*=l,Nt.elements[8]*=u,Nt.elements[9]*=u,Nt.elements[10]*=u,t.setFromRotationMatrix(Nt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mt=new W,Nt=new K,Pt=new W(0,0,0),Ft=new W(1,1,1),It=new W,Lt=new W,Rt=new W,zt=new K,Bt=new lt,Vt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(H(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-H(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(H(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-H(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(H(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-H(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bt.setFromEuler(this),this.setFromQuaternion(Bt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vt.DEFAULT_ORDER=`XYZ`;var Ht=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ut=0,Wt=new W,Gt=new lt,Kt=new K,qt=new W,Jt=new W,Yt=new W,Xt=new lt,Zt=new W(1,0,0),Qt=new W(0,1,0),$t=new W(0,0,1),en={type:`added`},tn={type:`removed`},nn={type:`childadded`,child:null},rn={type:`childremoved`,child:null},an=class e extends et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new Vt,r=new lt,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new K},normalMatrix:{value:new G}}),this.matrix=new K,this.matrixWorld=new K,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ht,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gt.setFromAxisAngle(e,t),this.quaternion.multiply(Gt),this}rotateOnWorldAxis(e,t){return Gt.setFromAxisAngle(e,t),this.quaternion.premultiply(Gt),this}rotateX(e){return this.rotateOnAxis(Zt,e)}rotateY(e){return this.rotateOnAxis(Qt,e)}rotateZ(e){return this.rotateOnAxis($t,e)}translateOnAxis(e,t){return Wt.copy(e).applyQuaternion(this.quaternion),this.position.add(Wt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zt,e)}translateY(e){return this.translateOnAxis(Qt,e)}translateZ(e){return this.translateOnAxis($t,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qt.copy(e):qt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Jt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(Jt,qt,this.up):Kt.lookAt(qt,Jt,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),Gt.setFromRotationMatrix(Kt),this.quaternion.premultiply(Gt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(en),nn.child=e,this.dispatchEvent(nn),nn.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tn),rn.child=e,this.dispatchEvent(rn),rn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(en),nn.child=e,this.dispatchEvent(nn),nn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jt,e,Yt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jt,Xt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};an.DEFAULT_UP=new W(0,1,0),an.DEFAULT_MATRIX_AUTO_UPDATE=!0,an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=class extends an{constructor(){super(),this.isGroup=!0,this.type=`Group`}},sn={type:`move`},cn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},dn={h:0,s:0,l:0};function fn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=at(e,1),t=H(t,0,1),n=H(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=fn(i,r,e+1/3),this.g=fn(i,r,e),this.b=fn(i,r,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Le){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){let n=ln[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_t(e.r),this.g=_t(e.g),this.b=_t(e.b),this}copyLinearToSRGB(e){return this.r=vt(e.r),this.g=vt(e.g),this.b=vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return gt.workingToColorSpace(pn.copy(this),e),Math.round(H(pn.r*255,0,255))*65536+Math.round(H(pn.g*255,0,255))*256+Math.round(H(pn.b*255,0,255))}getHexString(e=Le){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(pn.copy(this),t);let n=pn.r,r=pn.g,i=pn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Le){gt.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,r=pn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(dn);let n=ot(un.h,dn.h,t),r=ot(un.s,dn.s,t),i=ot(un.l,dn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new q;q.NAMES=ln;var mn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new q(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},hn=class extends an{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gn=new W,_n=new W,vn=new W,yn=new W,bn=new W,xn=new W,Sn=new W,Cn=new W,wn=new W,Tn=new W,En=new Dt,Dn=new Dt,On=new Dt,kn=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gn.subVectors(e,t),r.cross(gn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){gn.subVectors(r,t),_n.subVectors(n,t),vn.subVectors(e,t);let a=gn.dot(gn),o=gn.dot(_n),s=gn.dot(vn),c=_n.dot(_n),l=_n.dot(vn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yn)!==null&&yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,yn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,yn.x),s.addScaledVector(a,yn.y),s.addScaledVector(o,yn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return En.setScalar(0),Dn.setScalar(0),On.setScalar(0),En.fromBufferAttribute(e,t),Dn.fromBufferAttribute(e,n),On.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(En,i.x),a.addScaledVector(Dn,i.y),a.addScaledVector(On,i.z),a}static isFrontFacing(e,t,n,r){return gn.subVectors(n,t),_n.subVectors(e,t),gn.cross(_n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),gn.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;bn.subVectors(r,n),xn.subVectors(i,n),Cn.subVectors(e,n);let s=bn.dot(Cn),c=xn.dot(Cn);if(s<=0&&c<=0)return t.copy(n);wn.subVectors(e,r);let l=bn.dot(wn),u=xn.dot(wn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(bn,a);Tn.subVectors(e,i);let f=bn.dot(Tn),p=xn.dot(Tn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(xn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Sn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Sn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(bn,a).addScaledVector(xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},An=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Mn):Mn.fromBufferAttribute(r,t),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Nn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Nn.copy(e.boundingBox)),Nn.applyMatrix4(e.matrixWorld),this.union(Nn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bn),Vn.subVectors(this.max,Bn),Pn.subVectors(e.a,Bn),Fn.subVectors(e.b,Bn),In.subVectors(e.c,Bn),Ln.subVectors(Fn,Pn),Rn.subVectors(In,Fn),zn.subVectors(Pn,In);let t=[0,-Ln.z,Ln.y,0,-Rn.z,Rn.y,0,-zn.z,zn.y,Ln.z,0,-Ln.x,Rn.z,0,-Rn.x,zn.z,0,-zn.x,-Ln.y,Ln.x,0,-Rn.y,Rn.x,0,-zn.y,zn.x,0];return!Wn(t,Pn,Fn,In,Vn)||(t=[1,0,0,0,1,0,0,0,1],!Wn(t,Pn,Fn,In,Vn))?!1:(Hn.crossVectors(Ln,Rn),t=[Hn.x,Hn.y,Hn.z],Wn(t,Pn,Fn,In,Vn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},jn=[new W,new W,new W,new W,new W,new W,new W,new W],Mn=new W,Nn=new An,Pn=new W,Fn=new W,In=new W,Ln=new W,Rn=new W,zn=new W,Bn=new W,Vn=new W,Hn=new W,Un=new W;function Wn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Un.fromArray(e,a);let o=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),s=t.dot(Un),c=n.dot(Un),l=r.dot(Un);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Gn=new W,Kn=new U,qn=0,Jn=class extends et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ve,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix3(e),this.setXY(t,Kn.x,Kn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix3(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=st(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=st(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=st(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=st(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=st(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),r=ct(r,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Yn=class extends Jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Xn=class extends Jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Zn=class extends Jn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qn=new An,$n=new W,er=new W,tr=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Qn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$n.subVectors(e,this.center);let t=$n.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector($n,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($n.copy(e.center).add(er)),this.expandByPoint($n.copy(e.center).sub(er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nr=0,rr=new K,ir=new an,ar=new W,or=new An,sr=new An,cr=new W,lr=class e extends et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nr++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(We(e)?Xn:Yn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rr.makeRotationFromQuaternion(e),this.applyMatrix4(rr),this}rotateX(e){return rr.makeRotationX(e),this.applyMatrix4(rr),this}rotateY(e){return rr.makeRotationY(e),this.applyMatrix4(rr),this}rotateZ(e){return rr.makeRotationZ(e),this.applyMatrix4(rr),this}translate(e,t,n){return rr.makeTranslation(e,t,n),this.applyMatrix4(rr),this}scale(e,t,n){return rr.makeScale(e,t,n),this.applyMatrix4(rr),this}lookAt(e){return ir.lookAt(e),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Zn(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];or.setFromBufferAttribute(n),this.morphTargetsRelative?(cr.addVectors(this.boundingBox.min,or.min),this.boundingBox.expandByPoint(cr),cr.addVectors(this.boundingBox.max,or.max),this.boundingBox.expandByPoint(cr)):(this.boundingBox.expandByPoint(or.min),this.boundingBox.expandByPoint(or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];sr.setFromBufferAttribute(n),this.morphTargetsRelative?(cr.addVectors(or.min,sr.min),or.expandByPoint(cr),cr.addVectors(or.max,sr.max),or.expandByPoint(cr)):(or.expandByPoint(sr.min),or.expandByPoint(sr.max))}or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)cr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(cr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)cr.fromBufferAttribute(a,t),o&&(ar.fromBufferAttribute(e,t),cr.add(ar)),r=Math.max(r,n.distanceToSquared(cr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Jn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let c=new W,l=new W,u=new W,d=new U,f=new U,p=new U,m=new W,h=new W;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new W,y=new W,b=new W,x=new W;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Jn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cr.fromBufferAttribute(e,t),cr.normalize(),e.setXYZ(t,cr.x,cr.y,cr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Jn(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ur=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ve,this.updateRanges=[],this.version=0,this.uuid=it()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=it()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=it()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},dr=new W,fr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix4(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyNormalMatrix(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.transformDirection(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=st(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=st(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=st(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=st(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=st(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),r=ct(r,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ye(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Jn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ye(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pr=new W,mr=new W,hr=new G,gr=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=pr.subVectors(n,t).cross(mr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(pr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hr.getNormalMatrix(e),r=this.coplanarPoint(pr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},_r=0,vr=class extends et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_r++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Be,this.stencilZFail=Be,this.stencilZPass=Be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new gr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},yr=class extends vr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,xr=new W,Sr=new W,Cr=new W,wr=new U,Tr=new U,Er=new K,Dr=new W,Or=new W,kr=new W,Ar=new U,jr=new U,Mr=new U,Nr=class extends an{constructor(e=new yr){if(super(),this.isSprite=!0,this.type=`Sprite`,br===void 0){br=new lr;let e=new ur(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);br.setIndex([0,1,2,0,2,3]),br.setAttribute(`position`,new fr(e,3,0,!1)),br.setAttribute(`uv`,new fr(e,2,3,!1))}this.geometry=br,this.material=e,this.center=new U(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&V(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Sr.setFromMatrixScale(this.matrixWorld),Er.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-Cr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Pr(Dr.set(-.5,-.5,0),Cr,a,Sr,r,i),Pr(Or.set(.5,-.5,0),Cr,a,Sr,r,i),Pr(kr.set(.5,.5,0),Cr,a,Sr,r,i),Ar.set(0,0),jr.set(1,0),Mr.set(1,1);let o=e.ray.intersectTriangle(Dr,Or,kr,!1,xr);if(o===null&&(Pr(Or.set(-.5,.5,0),Cr,a,Sr,r,i),jr.set(0,1),o=e.ray.intersectTriangle(Dr,kr,Or,!1,xr),o===null))return;let s=e.ray.origin.distanceTo(xr);s<e.near||s>e.far||t.push({distance:s,point:xr.clone(),uv:kn.getInterpolation(xr,Dr,Or,kr,Ar,jr,Mr,new U),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Pr(e,t,n,r,i,a){wr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Tr.copy(wr):(Tr.x=a*wr.x-i*wr.y,Tr.y=i*wr.x+a*wr.y),e.copy(t),e.x+=Tr.x,e.y+=Tr.y,e.applyMatrix4(Er)}var Fr=new W,Ir=new W,Lr=new W,Rr=new W,zr=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fr.copy(this.origin).addScaledVector(this.direction,t),Fr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ir.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Ir);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Rr.dot(this.direction),s=-Rr.dot(Lr),c=Rr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ir).addScaledVector(Lr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Fr.subVectors(e.center,this.origin);let n=Fr.dot(this.direction),r=Fr.dot(Fr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*D,P=E-ne*D,ie=O-M*A,ae=k-ne*A,oe=ee-M*te,se=j-ne*te,ce=oe*ae-se*ie,F=re*se-P*oe,le=ie*P-ae*re;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=N*(ce*D+F*A+le*te);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Br=class extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vr=new K,Hr=new zr,Ur=new tr,Wr=new W,Gr=new W,Kr=new W,qr=new W,Jr=new W,Yr=new W,Xr=new W,Zr=new W,J=class extends an{constructor(e=new lr,t=new Br){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Yr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Jr.fromBufferAttribute(s,e),a?Yr.addScaledVector(Jr,r):Yr.addScaledVector(Jr.sub(t),r))}t.add(Yr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Hr.copy(e.ray).recast(e.near),!(Ur.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ur,Wr)===null||Hr.origin.distanceToSquared(Wr)>(e.far-e.near)**2))&&(Vr.copy(i).invert(),Hr.copy(e.ray).applyMatrix4(Vr),(n.boundingBox===null||Hr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=$r(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=$r(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=$r(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=$r(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Qr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Zr.copy(s),Zr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Zr);return l<n.near||l>n.far?null:{distance:l,point:Zr.clone(),object:e}}function $r(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Gr),e.getVertexPosition(c,Kr),e.getVertexPosition(l,qr);let u=Qr(e,t,n,r,Gr,Kr,qr,Xr);if(u){let e=new W;kn.getBarycoord(Xr,Gr,Kr,qr,e),i&&(u.uv=kn.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=kn.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=kn.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};kn.getNormal(Gr,Kr,qr,t.normal),u.face=t,u.barycoord=e}return u}var ei=class extends Et{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ti=class extends Jn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ni=new K,ri=new K,ii=[],ai=new An,oi=new K,si=new J,ci=new tr,li=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ti(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,oi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ni),ai.copy(e.boundingBox).applyMatrix4(ni),this.boundingBox.union(ai)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ni),ci.copy(e.boundingSphere).applyMatrix4(ni),this.boundingSphere.union(ci)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(si.geometry=this.geometry,si.material=this.material,si.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ci.copy(this.boundingSphere),ci.applyMatrix4(n),e.ray.intersectsSphere(ci)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ni),ri.multiplyMatrices(n,ni),si.matrixWorld=ri,si.raycast(e,ii);for(let e=0,n=ii.length;e<n;e++){let n=ii[e];n.instanceId=i,n.object=this,t.push(n)}ii.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ei(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ui=new tr,di=new U(.5,.5),fi=new W,pi=class{constructor(e=new gr,t=new gr,n=new gr,r=new gr,i=new gr,a=new gr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ue,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476+di.distanceTo(e.center),ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fi.x=r.normal.x>0?e.max.x:e.min.x,fi.y=r.normal.y>0?e.max.y:e.min.y,fi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mi=class extends Et{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hi=class extends Et{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class extends Et{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new St(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_i=class extends gi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},vi=class extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yi=class e extends lr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Zn(c,3)),this.setAttribute(`normal`,new Zn(l,3)),this.setAttribute(`uv`,new Zn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},bi=class e extends lr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new U;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Zn(a,3)),this.setAttribute(`normal`,new Zn(o,3)),this.setAttribute(`uv`,new Zn(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xi=class e extends lr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Zn(u,3)),this.setAttribute(`normal`,new Zn(d,3)),this.setAttribute(`uv`,new Zn(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Si=class e extends lr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Zn(i,3)),this.setAttribute(`normal`,new Zn(i.slice(),3)),this.setAttribute(`uv`,new Zn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new U,s=new U,c=new U;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ci=class e extends Si{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},wi=class e extends lr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Zn(p,3)),this.setAttribute(`normal`,new Zn(m,3)),this.setAttribute(`uv`,new Zn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ti=class e extends lr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new W,p=new U;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Zn(s,3)),this.setAttribute(`normal`,new Zn(c,3)),this.setAttribute(`uv`,new Zn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ei=class e extends lr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Zn(p,3)),this.setAttribute(`normal`,new Zn(m,3)),this.setAttribute(`uv`,new Zn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Di(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ki(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ki(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Oi(e){let t={};for(let n=0;n<e.length;n++){let r=Di(e[n]);for(let e in r)t[e]=r[e]}return t}function ki(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ai(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ji(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:gt.workingColorSpace}var Mi={clone:Di,merge:Oi},Ni=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fi=class extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ni,this.fragmentShader=Pi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Ai(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new q().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Dt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new K().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ii=class extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Li=class extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ri=class extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=R,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zi=class extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Vi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Hi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ui=class extends Hi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case L:i=e,o=2*t-n;break;case Ie:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case L:a=e,s=2*n-t;break;case Ie:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Wi=class extends Hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Gi=class extends Hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ki=class extends Hi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Yi(n,t,g,y,r);i[p]=qi(x,o,_,b,m)}return i}};function qi(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ji(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Yi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=qi(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ji(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Xi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Bi(t,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bi(e.times,Array),values:Bi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Vi(e.settings)&&(n.settings={inTangents:Bi(e.settings.inTangents,Array),outTangents:Bi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ui(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ki(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case I:t=this.InterpolantFactoryMethodLinear;break;case Ne:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return I;case this.InterpolantFactoryMethodSmooth:return Ne;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Vi(this.settings)&&(Zi(this.settings.inTangents,e),Zi(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ge(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ne,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Vi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Zi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Xi.prototype.ValueTypeName=``,Xi.prototype.TimeBufferType=Float32Array,Xi.prototype.ValueBufferType=Float32Array,Xi.prototype.DefaultInterpolation=I;var Qi=class extends Xi{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName=`bool`,Qi.prototype.ValueBufferType=Array,Qi.prototype.DefaultInterpolation=Me,Qi.prototype.InterpolantFactoryMethodLinear=void 0,Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}};$i.prototype.ValueTypeName=`color`;var ea=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}};ea.prototype.ValueTypeName=`number`;var ta=class extends Hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)lt.slerpFlat(i,0,a,c-o,a,c,s);return i}},na=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}};na.prototype.ValueTypeName=`quaternion`,na.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends Xi{constructor(e,t,n){super(e,t,n)}};ra.prototype.ValueTypeName=`string`,ra.prototype.ValueBufferType=Array,ra.prototype.DefaultInterpolation=Me,ra.prototype.InterpolantFactoryMethodLinear=void 0,ra.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}};ia.prototype.ValueTypeName=`vector`;var aa=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new q(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},oa=class extends aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},sa=new K,ca=new W,la=new W,ua=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new K,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pi,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ca.setFromMatrixPosition(e.matrixWorld),t.position.copy(ca),la.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(la),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(sa,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},da=new W,fa=new lt,pa=new W,ma=class extends an{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new K,this.projectionMatrix=new K,this.projectionMatrixInverse=new K,this.coordinateSystem=Ue,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(da,fa,pa),pa.x===1&&pa.y===1&&pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,pa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(da,fa,pa),pa.x===1&&pa.y===1&&pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,pa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ha=new W,ga=new U,_a=new U,va=class extends ma{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ha.x,ha.y).multiplyScalar(-e/ha.z),ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ha.x,ha.y).multiplyScalar(-e/ha.z)}getViewSize(e,t){return this.getViewBounds(e,ga,_a),t.subVectors(_a,ga)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ya=class extends ma{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ba=class extends ua{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xa=class extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new ba}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Sa=-90,Ca=1,wa=class extends an{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new va(Sa,Ca,e,t);r.layers=this.layers,this.add(r);let i=new va(Sa,Ca,e,t);i.layers=this.layers,this.add(i);let a=new va(Sa,Ca,e,t);a.layers=this.layers,this.add(a);let o=new va(Sa,Ca,e,t);o.layers=this.layers,this.add(o);let s=new va(Sa,Ca,e,t);s.layers=this.layers,this.add(s);let c=new va(Sa,Ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ta=class extends va{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ea=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Da.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Da(){this._document.hidden===!1&&this.reset()}var Oa=`\\[\\]\\.:\\/`,ka=RegExp(`[\\[\\]\\.:\\/]`,`g`),Aa=`[^\\[\\]\\.:\\/]`,ja=`[^`+Oa.replace(`\\.`,``)+`]`,Ma=`((?:WC+[\\/:])*)`.replace(`WC`,Aa),Na=`(WCOD+)?`.replace(`WCOD`,ja),Pa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Aa),Fa=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Aa),Ia=RegExp(`^`+Ma+Na+Pa+Fa+`$`),La=[`material`,`materials`,`bones`,`map`],Ra=class{constructor(e,t,n){let r=n||za.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},za=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ka,``)}static parseTrackName(e){let t=Ia.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);La.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};za.Composite=Ra,za.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},za.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},za.prototype.GetterByBindingType=[za.prototype._getValue_direct,za.prototype._getValue_array,za.prototype._getValue_arrayElement,za.prototype._getValue_toArray],za.prototype.SetterByBindingTypeAndVersioning=[[za.prototype._setValue_direct,za.prototype._setValue_direct_setNeedsUpdate,za.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[za.prototype._setValue_array,za.prototype._setValue_array_setNeedsUpdate,za.prototype._setValue_array_setMatrixWorldNeedsUpdate],[za.prototype._setValue_arrayElement,za.prototype._setValue_arrayElement_setNeedsUpdate,za.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[za.prototype._setValue_fromArray,za.prototype._setValue_fromArray_setNeedsUpdate,za.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Ba(e,t,n,r){let i=Va(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ie:return Math.max(e,16)*Math.max(t,8)/4;case N:case P:return Math.max(e,8)*Math.max(t,8)/2;case ae:case oe:case ce:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Te:case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Va(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ha(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ua(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},X={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},Wa={basic:{uniforms:Oi([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:Oi([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:Oi([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:Oi([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:Oi([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new q(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:Oi([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:Oi([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:Oi([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:Oi([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:Oi([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:Oi([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:Oi([X.common,X.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:Oi([X.lights,X.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Wa.physical={uniforms:Oi([Wa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var Ga={r:0,b:0,g:0},Ka=new K,qa=new G;qa.set(-1,0,0,0,1,0,0,0,1);function Ja(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new J(new yi(1,1,1),new Fi({name:`BackgroundCubeMaterial`,uniforms:Di(Wa.backgroundCube.uniforms),vertexShader:Wa.backgroundCube.vertexShader,fragmentShader:Wa.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ka.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qa),l.material.toneMapped=gt.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new wi(2,2),new Fi({name:`BackgroundMaterial`,uniforms:Di(Wa.background.uniforms),vertexShader:Wa.background.vertexShader,fragmentShader:Wa.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=gt.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ga,ji(e)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ya(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Xa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Za(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Qa(e){let t=this,n=null,r=0,i=!1,a=!1,o=new gr,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var $a=4,eo=6,to=20,no=256,ro=new ya,io=new q,ao=null,oo=0,so=0,co=!1,lo=new W,uo=new W,fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=lo}=i;ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,oo,so),this._renderer.xr.enabled=co,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:z,depthBuffer:!1},r=mo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=po(r)),this._blurMaterial=_o(r,e,t),this._ggxMaterial=go(r,e,t)}return r}_compileMaterial(e){let t=new J(new lr,e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,n,r,i){let a=new va(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(io),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new yi,new Br({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(io),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ho(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ho(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ro)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-$a?n-d+$a:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ho(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ro),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ho(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ro)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];ho(t,3*l*(r>this._lodMax-$a?r-this._lodMax+$a:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,ro)}};function po(e){let t=[],n=[],r=e,i=e-$a+1+eo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?uo.set(1,r,n):e===1?uo.set(-n,1,-r):e===2?uo.set(-n,r,1):e===3?uo.set(-1,r,-n):e===4?uo.set(-n,-1,r):uo.set(n,r,-1),uo.toArray(l,(e*6+t)*3)}}let u=new lr;u.setAttribute(`position`,new Jn(c,3)),u.setAttribute(`outputDirection`,new Jn(l,3)),n.push(new J(u,null)),r>$a&&r--}return{lodMeshes:n,sizeLods:t}}function mo(e,t,n){let r=new kt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ho(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function go(e,t,n){return new Fi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:no,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function _o(e,t,n){return new Fi({name:`SphericalGaussianBlur`,defines:{SAMPLES:to,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function vo(){return new Fi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function yo(){return new Fi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xo=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new mi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yi(5,5,5),i=new Fi({name:`CubemapFromEquirect`,uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new wa(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function So(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new xo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new fo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new fo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Co(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function wo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Xn:Yn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function To(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Eo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Do(e,t,n){let r=new WeakMap,i=new Dt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new At(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new U(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Oo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ko={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ao(e,t,n,r,i,a){let o=new kt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new lr;l.setAttribute(`position`,new Zn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Zn([0,2,0,0,2,0],2));let u=new Ii({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new J(l,u),f=new ya(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new kt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new kt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},gt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ko[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var jo=new Et,Mo=new gi(1,1),No=new At,Po=new jt,Fo=new mi,Io=[],Lo=[],Ro=new Float32Array(16),zo=new Float32Array(9),Bo=new Float32Array(4);function Vo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Io[i];if(a===void 0&&(a=new Float32Array(i),Io[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ho(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Uo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Wo(e,t){let n=Lo[t];n===void 0&&(n=new Int32Array(t),Lo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Go(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ko(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ho(n,t))return;e.uniform2fv(this.addr,t),Uo(n,t)}}function qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ho(n,t))return;e.uniform3fv(this.addr,t),Uo(n,t)}}function Jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ho(n,t))return;e.uniform4fv(this.addr,t),Uo(n,t)}}function Yo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ho(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Uo(n,t)}else{if(Ho(n,r))return;Bo.set(r),e.uniformMatrix2fv(this.addr,!1,Bo),Uo(n,r)}}function Xo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ho(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Uo(n,t)}else{if(Ho(n,r))return;zo.set(r),e.uniformMatrix3fv(this.addr,!1,zo),Uo(n,r)}}function Zo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ho(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Uo(n,t)}else{if(Ho(n,r))return;Ro.set(r),e.uniformMatrix4fv(this.addr,!1,Ro),Uo(n,r)}}function Qo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function $o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ho(n,t))return;e.uniform2iv(this.addr,t),Uo(n,t)}}function es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ho(n,t))return;e.uniform3iv(this.addr,t),Uo(n,t)}}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ho(n,t))return;e.uniform4iv(this.addr,t),Uo(n,t)}}function ns(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ho(n,t))return;e.uniform2uiv(this.addr,t),Uo(n,t)}}function is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ho(n,t))return;e.uniform3uiv(this.addr,t),Uo(n,t)}}function as(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ho(n,t))return;e.uniform4uiv(this.addr,t),Uo(n,t)}}function os(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Mo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Mo):a=jo,n.setTexture2D(t||a,i)}function ss(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Po,i)}function cs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Fo,i)}function ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||No,i)}function us(e){switch(e){case 5126:return Go;case 35664:return Ko;case 35665:return qo;case 35666:return Jo;case 35674:return Yo;case 35675:return Xo;case 35676:return Zo;case 5124:case 35670:return Qo;case 35667:case 35671:return $o;case 35668:case 35672:return es;case 35669:case 35673:return ts;case 5125:return ns;case 36294:return rs;case 36295:return is;case 36296:return as;case 35678:case 36198:case 36298:case 36306:case 35682:return os;case 35679:case 36299:case 36307:return ss;case 35680:case 36300:case 36308:case 36293:return cs;case 36289:case 36303:case 36311:case 36292:return ls}}function ds(e,t){e.uniform1fv(this.addr,t)}function fs(e,t){let n=Vo(t,this.size,2);e.uniform2fv(this.addr,n)}function ps(e,t){let n=Vo(t,this.size,3);e.uniform3fv(this.addr,n)}function ms(e,t){let n=Vo(t,this.size,4);e.uniform4fv(this.addr,n)}function hs(e,t){let n=Vo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function gs(e,t){let n=Vo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function _s(e,t){let n=Vo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function vs(e,t){e.uniform1iv(this.addr,t)}function ys(e,t){e.uniform2iv(this.addr,t)}function bs(e,t){e.uniform3iv(this.addr,t)}function xs(e,t){e.uniform4iv(this.addr,t)}function Ss(e,t){e.uniform1uiv(this.addr,t)}function Cs(e,t){e.uniform2uiv(this.addr,t)}function ws(e,t){e.uniform3uiv(this.addr,t)}function Ts(e,t){e.uniform4uiv(this.addr,t)}function Es(e,t,n){let r=this.cache,i=t.length,a=Wo(n,i);Ho(r,a)||(e.uniform1iv(this.addr,a),Uo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Mo:jo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ds(e,t,n){let r=this.cache,i=t.length,a=Wo(n,i);Ho(r,a)||(e.uniform1iv(this.addr,a),Uo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Po,a[e])}function Os(e,t,n){let r=this.cache,i=t.length,a=Wo(n,i);Ho(r,a)||(e.uniform1iv(this.addr,a),Uo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Fo,a[e])}function ks(e,t,n){let r=this.cache,i=t.length,a=Wo(n,i);Ho(r,a)||(e.uniform1iv(this.addr,a),Uo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||No,a[e])}function As(e){switch(e){case 5126:return ds;case 35664:return fs;case 35665:return ps;case 35666:return ms;case 35674:return hs;case 35675:return gs;case 35676:return _s;case 5124:case 35670:return vs;case 35667:case 35671:return ys;case 35668:case 35672:return bs;case 35669:case 35673:return xs;case 5125:return Ss;case 36294:return Cs;case 36295:return ws;case 36296:return Ts;case 35678:case 36198:case 36298:case 36306:case 35682:return Es;case 35679:case 36299:case 36307:return Ds;case 35680:case 36300:case 36308:case 36293:return Os;case 36289:case 36303:case 36311:case 36292:return ks}}var js=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=us(t.type)}},Ms=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=As(t.type)}},Ns=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ps=/(\w+)(\])?(\[|\.)?/g;function Fs(e,t){e.seq.push(t),e.map[t.id]=t}function Is(e,t,n){let r=e.name,i=r.length;for(Ps.lastIndex=0;;){let a=Ps.exec(r),o=Ps.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Fs(n,l===void 0?new js(s,e,t):new Ms(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ns(s),Fs(n,e)),n=e}}}var Ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Is(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Rs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var zs=37297,Bs=0;function Vs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Hs=new G;function Us(e){gt._getMatrix(Hs,gt.workingColorSpace,e);let t=`mat3( ${Hs.elements.map(e=>e.toFixed(4))} )`;switch(gt.getTransfer(e)){case Re:return[t,`LinearTransferOETF`];case ze:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ws(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Vs(e.getShaderSource(t),r)}return i}function Gs(e,t){let n=Us(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ks={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function qs(e,t){let n=Ks[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Js=new W;function Ys(){return gt.getLuminanceCoefficients(Js),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Js.x.toFixed(4)}, ${Js.y.toFixed(4)}, ${Js.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Xs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter($s).join(`
`)}function Zs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Qs(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function $s(e){return e!==``}function ec(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nc=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(e){return e.replace(nc,ac)}var ic=new Map;function ac(e,t){let n=Y[t];if(n===void 0){let e=ic.get(t);if(e!==void 0)n=Y[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return rc(n)}var oc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(e){return e.replace(oc,cc)}function cc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function lc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var uc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function dc(e){return uc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var fc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function pc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:fc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var mc={302:`ENVMAP_MODE_REFRACTION`};function hc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:mc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var gc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function _c(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:gc[e.combine]||`ENVMAP_BLENDING_NONE`}function vc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function yc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=dc(n),l=pc(n),u=hc(n),d=_c(n),f=vc(n),p=Xs(n),m=Zs(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter($s).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter($s).join(`
`),_.length>0&&(_+=`
`)):(g=[lc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter($s).join(`
`),_=[lc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:qs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Gs(`linearToOutputTexel`,n.outputColorSpace),Ys(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter($s).join(`
`)),o=rc(o),o=ec(o,n),o=tc(o,n),s=rc(s),s=ec(s,n),s=tc(s,n),o=sc(o),s=sc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Rs(i,i.VERTEX_SHADER,y),S=Rs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ws(i,x,`vertex`),n=Ws(i,S,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ls(i,h),T=Qs(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,zs)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bs++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var bc=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sc(e),t.set(e,n)),n}},Sc=class{constructor(e){this.id=bc++,this.code=e,this.usedTimes=0}};function Cc(e){return e===1030||e===37490||e===36285}function wc(e,t,n,r,i,a){let o=new Ht,s=new xc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Wa[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,ne=!!i.map,N=!!i.matcap,re=!!x,P=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=ue&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,I=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:N,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:P,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Cc(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:I,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:P&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&gt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&gt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Wa[t];n=Mi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new yc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Tc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ec(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Dc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Oc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ec),r.length>1&&r.sort(t||Dc),i.length>1&&i.sort(t||Dc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function kc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Oc,e.set(t,[i])):n>=r.length?(i=new Oc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ac(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new q};break;case`SpotLight`:n={position:new W,direction:new W,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function jc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Mc=0;function Nc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Pc(e){let t=new Ac,n=jc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new K,o=new K;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Nc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Mc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Fc(e){let t=new Pc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ic(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Fc(e),t.set(n,[a])):r>=i.length?(a=new Fc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Lc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rc=`uniform sampler2D shadow_pass;
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
}`,zc=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Bc=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Vc=new K,Hc=new W,Uc=new W;function Wc(e,t,n){let i=new pi,a=new U,s=new U,c=new Dt,l=new Ri,u=new zi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:Lc,fragmentShader:Rc}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new lr;y.setAttribute(`position`,new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new J(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){B(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new kt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new gi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new xo(a.x),p.map.depthTexture=new _i(a.x,m)):(p.map=new kt(a.x,a.y),p.map.depthTexture=new gi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Hc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Hc),Uc.copy(e.position),Uc.add(zc[t]),e.up.copy(Bc[t]),e.lookAt(Uc),e.updateMatrixWorld(),n.makeTranslation(-Hc.x,-Hc.y,-Hc.z),Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Vc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new kt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Gc(e,t){function n(){let t=!1,n=new Dt,r=null,i=new Dt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$e[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},P=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Dt().fromArray(P),oe=new Dt().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(te&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function Ce(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function I(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function L(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Ie(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function R(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function z(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:I,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:R,uniformBlockBinding:Le,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:L,viewport:Ie,reset:z}}function Kc(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new U,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ke(`canvas`)}function T(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Re:gt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function N(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function re(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let P=0;function ie(){P=0}function ae(){return P}function oe(e){P=e}function se(){let e=P;return e>=p.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),P+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(e,t){let n=f.get(e);if(e.isVideoTexture&&I(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function le(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ye(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ue(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ye(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?be(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let fe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},pe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},me={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function he(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,fe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,fe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,fe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,pe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,pe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,me[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ge(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ce(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&N(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=_e(r.start,t.width,4),c=_e(n.start,t.width,4);r.start<=o+1&&s===c&&_e(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function ye(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ge(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=gt.getPrimaries(gt.workingColorSpace),n=t.colorSpace===``?null:gt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ne(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);he(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ve(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Ba(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Ba(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Pe(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Pe(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function be(e,t,n){if(t.image.length!==6)return;let r=ge(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=gt.getPrimaries(gt.workingColorSpace),o=t.colorSpace===``?null:gt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ne(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);he(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Pe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,je(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Se(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ce(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,te)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),he(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else F(t.depthTexture,0);let a=i.__webglTexture,o=je(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ce(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Ce(t.__webglFramebuffer[0],e,0):Ce(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Se(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Se(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){let r=f.get(e);t!==void 0&&xe(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&we(e)}function Ee(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Me(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=je(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Se(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),he(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)xe(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),he(o,r),xe(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),he(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else xe(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&we(e)}function De(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Oe=[],ke=[];function Ae(e){if(e.samples>0){if(Me(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Oe.length=0,ke.length=0,Oe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Oe.push(a),ke.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,ke)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Oe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function je(e){return Math.min(p.maxSamples,e.samples)}function Me(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function I(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ne(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(gt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=F,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function qc(e,t){function n(n,r=``){let i,a=gt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Jc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yc=`
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

}`,Xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new vi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Fi({vertexShader:Jc,fragmentShader:Yc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zc=class extends et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Xc,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new U,k=null,A=null,ee=new va;ee.viewport=new Dt;let j=new va;j.viewport=new Dt;let te=[ee,j],M=new Ta,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new cn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new cn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new cn,C[e]=t),t.getHandSpace()};function re(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function P(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,P),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ne=null,N=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,P),r.addEventListener(`inputsourceschange`,ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new kt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new gi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new kt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ae=new W,oe=new W;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;ce(M,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(M,ee,j):M.projectionMatrix.copy(ee.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),F(e,M,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let le=null;function ue(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new va,o.layers.enable(n),o.viewport=new Dt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new vi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let de=new Ha;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Qc=new K,$c=new G;$c.set(-1,0,0,0,1,0,0,0,1);function el(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ji(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Qc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply($c),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function tl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var nl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rl=null;function il(){return rl===null&&(rl=new ei(nl,16,16,k,g),rl.name=`DFG_LUT`,rl.minFilter=o,rl.magFilter=o,rl.wrapS=t,rl.wrapT=t,rl.generateMipmaps=!1,rl.needsUpdate=!0),rl}var al=class{constructor(e={}){let{canvas:t=qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new W,k=null,j=null,te=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,P=null,ie=null,ae=null,oe=null;this._outputColorSpace=Le;let se=0,ce=0,F=null,le=-1,ue=null,de=new Dt,fe=new Dt,pe=null,me=new q(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Dt(0,0,ge,_e),Se=new Dt(0,0,ge,_e),Ce=!1,we=new pi,Te=!1,Ee=!1,De=new K,Oe=new W,ke=new Dt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return F===null?ve:1}let I=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,L,Ie,R,z,Re,ze,Be,Ve,He,We,Ge,Ke,Je,Xe,Ze,$e,et,tt,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ot,!1),t.addEventListener(`webglcontextrestored`,st,!1),t.addEventListener(`webglcontextcreationerror`,ct,!1),I===null){let t=`webgl2`;if(I=Ne(t,e),I===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}H()}catch(e){throw t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),V(`WebGLRenderer: `+e.message),e}function H(){Pe=new Co(I),Pe.init(),nt=new qc(I,Pe),Fe=new Za(I,Pe,e,nt),L=new Gc(I,Pe),Fe.reversedDepthBuffer&&h&&L.buffers.depth.setReversed(!0),ie=I.createFramebuffer(),ae=I.createFramebuffer(),oe=I.createFramebuffer(),Ie=new Eo(I),R=new Tc,z=new Kc(I,Pe,L,R,Fe,nt,Ie),Re=new So(N),ze=new Ua(I),rt=new Ya(I,ze),Be=new wo(I,ze,Ie,rt),Ve=new Oo(I,Be,ze,rt,Ie),$e=new Do(I,Fe,z),Je=new Qa(R),He=new wc(N,Re,Pe,Fe,rt,Je),We=new el(N,R),Ge=new kc,Ke=new Ic(Pe),Ze=new Ja(N,Re,L,Ve,x,s),Xe=new Wc(N,Ve,Fe),it=new tl(I,Ie,Fe,L),et=new Xa(I,Pe,Ie),tt=new To(I,Pe,Ie),Ie.programs=He.programs,N.capabilities=Fe,N.extensions=Pe,N.properties=R,N.renderLists=Ge,N.shadowMap=Xe,N.state=L,N.info=Ie}S!==1009&&(ne=new Ao(S,t.width,t.height,o,r,i));let at=new Zc(N,I);this.xr=at,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){at.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=C.has(t)}if(e){let e=F.texture.type,t=w.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,I.clearBufferuiv(I.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,I.clearBufferiv(I.COLOR,0,E))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),Ze.dispose(),Ge.dispose(),Ke.dispose(),R.dispose(),Re.dispose(),Ve.dispose(),rt.dispose(),it.dispose(),He.dispose(),at.dispose(),at.removeEventListener(`sessionstart`,pt),at.removeEventListener(`sessionend`,mt),ht.stop()};function ot(e){e.preventDefault(),Ye(`WebGLRenderer: Context Lost.`),re=!0}function st(){Ye(`WebGLRenderer: Context Restored.`),re=!1;let e=Ie.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;H(),Ie.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ct(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function U(e){let t=e.target;t.removeEventListener(`dispose`,U),lt(t)}function lt(e){ut(e),R.remove(e)}function ut(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=ze.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){P!==null&&e.isNodeMaterial&&P.setObject(r,e),Te===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),P!==null&&P.renderStart(e,t,n),j=Ke.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),P!==null&&P.updateLights(j.state.lightsArray),Ee=this.localClippingEnabled,Te=Je.init(this.clippingPlanes,Ee),Te===!0&&Je.setGlobalState(this.clippingPlanes,t),P!==null&&Xe.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),j=M.pop(),P!==null&&P.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let G=null;function ft(e){G&&G(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new Ha;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){G=e,at.setAnimationLoop(e),e===null?ht.stop():ht.start()},at.addEventListener(`sessionstart`,pt),at.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;P!==null&&P.renderStart(e,t);let n=at.enabled===!0&&at.isPresenting===!0,r=ne!==null&&(F===null||n)&&ne.begin(N,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(t),t=at.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,F),j=Ke.get(e,M.length),j.init(t),j.state.textureUnits=z.getTextureUnits(),M.push(j),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(De,Ue,t.reversedDepth),Ee=this.localClippingEnabled,Te=Je.init(this.clippingPlanes,Ee),k=Ge.get(e,te.length),k.init(),te.push(k),at.enabled===!0&&at.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,N.sortObjects)}_t(e,t,0,N.sortObjects),k.finish(),P!==null&&P.updateLights(j.state.lightsArray),N.sortObjects===!0&&k.sort(ye,be),je=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,je&&Ze.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Je.beginShadows();let i=j.state.shadowsArray;if(Xe.render(i,e,t),Te===!0&&Je.endShadows(),(r&&ne.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}je&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(k,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),je&&Ze.render(e),vt(k,e,t)}F!==null&&ce===0&&(z.updateMultisampleRenderTarget(F),z.updateRenderTargetMipmap(F)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),rt.resetDefaultState(),le=-1,ue=null,M.pop(),M.length>0?(j=M[M.length-1],z.setTextureUnits(j.state.textureUnits),Te===!0&&Je.setGlobalState(N.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,P!==null&&P.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(we)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=Ve.update(e),a=e.material;a.visible&&k.push(e,i,a,n,ke.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(we))){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,ke.z,s,t)}}else a.visible&&k.push(e,i,a,n,ke.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Te===!0&&Je.setGlobalState(N.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new kt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),u=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(me),he=N.getClearAlpha(),he<1&&N.setClearColor(16777215,.5),N.clear(),je&&Ze.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Te===!0&&Je.setGlobalState(N.clippingPlanes,r),bt(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}N.setRenderTarget(s,u,d),N.setClearColor(me,he),p!==void 0&&(r.viewport=p),N.toneMapping=f}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){P!==null&&i.isNodeMaterial&&P.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function St(e,t,n){t.isScene!==!0&&(t=Ae);let r=R.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,U),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=He.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,N),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),wt(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ls.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Et(e,t,n,r,i){t.isScene!==!0&&(t=Ae),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:gt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=j.state.lights;if(Te===!0&&(Ee===!0||e!==ue)){let t=e===ue&&r.id===le;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=St(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(L.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==le&&(le=r.id,C=!0),v.needsLights){let e=Tt(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(I,`projectionMatrix`,e.projectionMatrix),T.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(I,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&T.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(I,`sunShadowMap`,y.state.sunShadowMap,z),y.state.directionalShadowMap.length>0&&T.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,z),y.state.spotShadowMap.length>0&&T.setValue(I,`spotShadowMap`,y.state.spotShadowMap,z),y.state.pointShadowMap.length>0&&T.setValue(I,`pointShadowMap`,y.state.pointShadowMap,z)),i.isSkinnedMesh){T.setOptional(I,i,`bindMatrix`),T.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(I,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(T.setOptional(I,i,`batchingTexture`),T.setValue(I,`batchingTexture`,i._matricesTexture,z),T.setOptional(I,i,`batchingIdTexture`),T.setValue(I,`batchingIdTexture`,i._indirectTexture,z),T.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(I,`batchingColorTexture`,i._colorsTexture,z));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=il()),C){if(T.setValue(I,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&Ot(E,w),a&&r.fog===!0&&We.refreshFogUniforms(E,a),We.refreshMaterialUniforms(E,r,ve,_e,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Ls.upload(I,Ct(v),E,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ls.upload(I,Ct(v),E,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(I,`center`,i.center),T.setValue(I,`modelViewMatrix`,i.modelViewMatrix),T.setValue(I,`normalMatrix`,i.normalMatrix),T.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),le=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=ie),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}le=-1};function jt(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=jt(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=jt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Qe(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,ae),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,L.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}},ol=.4,sl=.48,cl={lgTime:{value:0},lgSunDir:{value:new W(-.45,.75,.48).normalize()}},ll=`
varying vec3 vLgObj;
varying vec3 vLgObjN;
varying vec3 vLgWorld;
varying vec3 vLgTanX;
varying vec3 vLgTanY;
varying vec3 vLgTanZ;
#ifdef LG_WINDOWS
attribute vec4 aWall;
attribute vec3 aTrim;
attribute vec2 aStyle;
varying vec4 vWall;
varying vec3 vTrim;
varying vec2 vStyle;
#endif
#ifdef LG_WAVE
uniform float lgTime;
attribute float aWave;
#endif
`,ul=`
vLgObj = transformed;
vLgObjN = objectNormal;
#ifdef LG_WAVE
  // flags: ripple along local x, amplitude grows away from the pole
  float wv = aWave;
  transformed.z += sin(transformed.x * 2.2 - lgTime * 7.0 + position.y * 0.6) * 0.22 * wv;
  transformed.y += sin(transformed.x * 1.3 - lgTime * 5.0) * 0.05 * wv;
#endif
{
  vec4 lgW = vec4(transformed, 1.0);
  mat3 lgM = mat3(modelMatrix);
  #ifdef USE_INSTANCING
    lgW = instanceMatrix * lgW;
    lgM = lgM * mat3(instanceMatrix);
  #endif
  lgW = modelMatrix * lgW;
  vLgWorld = lgW.xyz;
  vLgTanX = normalize(lgM * vec3(1.0, 0.0, 0.0));
  vLgTanY = normalize(lgM * vec3(0.0, 1.0, 0.0));
  vLgTanZ = normalize(lgM * vec3(0.0, 0.0, 1.0));
}
#ifdef LG_WINDOWS
vWall = aWall;
vTrim = aTrim;
vStyle = aStyle;
#endif
`,dl=`
uniform float lgTime;
uniform vec3 lgSunDir;
varying vec3 vLgObj;
varying vec3 vLgObjN;
varying vec3 vLgWorld;
varying vec3 vLgTanX;
varying vec3 vLgTanY;
varying vec3 vLgTanZ;
#ifdef LG_WINDOWS
varying vec4 vWall;
varying vec3 vTrim;
varying vec2 vStyle;
#endif
#ifdef LG_GROUND
uniform sampler2D lgSurfA;
uniform sampler2D lgSurfB;
uniform vec4 lgSurfRect;
uniform vec3 lgColSidewalk;
uniform vec3 lgColAsphalt;
uniform vec3 lgColGrass;
uniform vec3 lgColPaving;
uniform vec3 lgColBallast;
uniform vec3 lgColSand;
#endif

float lgHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

// Studs on an up-facing surface; p in stud units, sun in object space.
float lgStudShade(vec2 p, vec3 sun, out vec2 nOff) {
  nOff = vec2(0.0);
  vec2 fw = fwidth(p);
  float px = max(fw.x, fw.y);
  float vis = 1.0 - smoothstep(0.07, 0.28, px);
  if (vis <= 0.0) return 1.0;
  vec2 cell = fract(p) - 0.5;
  float r = length(cell);
  const float R = 0.3;
  float aa = max(px * 1.1, 0.012);
  float inside = 1.0 - smoothstep(R - aa, R + aa, r);
  float rim = smoothstep(R - 0.08, R, r) * inside;
  vec2 dir = cell / max(r, 1e-4);
  nOff = dir * rim * 1.6 * vis;
  vec2 sd = normalize(sun.xz + vec2(1e-4, 0.0));
  float lift = 0.14 * clamp(1.25 - sun.y, 0.25, 1.0);
  float rs = length(cell + sd * lift);
  float shadowArea = (1.0 - smoothstep(R - aa, R + aa, rs)) * (1.0 - inside);
  float ao = 1.0 - (1.0 - smoothstep(R, R + 0.11, r)) * (1.0 - inside) * 0.25;
  float top = 1.0 - smoothstep(R - 0.13 - aa, R - 0.13 + aa, r);
  float shade = (1.0 - shadowArea * 0.34) * ao * (1.0 + top * 0.06);
  return mix(1.0, shade, vis);
}

// Running-bond brick seams on a vertical face. u along the wall, y height (m).
float lgSeamShade(float u, float y, float brickLen) {
  float v = y / ${sl.toFixed(2)};
  float row = floor(v);
  float uu = u / brickLen + mod(row, 2.0) * 0.5;
  float col = floor(uu);
  float rnd = lgHash(vec2(row, col));
  float fv = fract(v), fu = fract(uu);
  float wv = fwidth(v), wu = fwidth(uu);
  float vis = 1.0 - smoothstep(0.07, 0.22, max(wv, wu * 0.6));
  if (vis <= 0.0) return 1.0;
  float lineV = 1.0 - smoothstep(0.03, 0.03 + wv * 1.5, min(fv, 1.0 - fv));
  float lineU = 1.0 - smoothstep(0.012, 0.012 + wu * 1.5, min(fu, 1.0 - fu));
  float seam = max(lineV, lineU * 0.85);
  float grad = 0.965 + 0.06 * fv;
  return mix(1.0, grad * (1.0 - seam * 0.36) * (0.975 + 0.05 * rnd), vis);
}
`,fl=`
#ifdef LG_NEARFADE
{
  // dissolve things right in front of the camera so they never hide the taxi
  float camD = distance(vLgWorld, cameraPosition);
  float keep = smoothstep(4.0, 9.0, camD);
  const float BAYER[16] = float[16](0., 8., 2., 10., 12., 4., 14., 6., 3., 11., 1., 9., 15., 7., 13., 5.);
  vec2 bq = mod(floor(gl_FragCoord.xy), 4.0);
  float threshold = (BAYER[int(bq.x + bq.y * 4.0)] + 0.5) / 16.0;
  if (keep < 0.999 && threshold > keep) discard;
}
#endif
vec3 lgN = normalize(vLgObjN);
vec3 lgSunObj = vec3(dot(lgSunDir, vLgTanX), dot(lgSunDir, vLgTanY), dot(lgSunDir, vLgTanZ));
float lgShade = 1.0;
vec3 lgPerturb = vec3(0.0);
float lgGlass = 0.0;
float lgStudMask = 1.0;
#ifdef LG_GROUND
{
  vec2 suv = (vLgWorld.xz - lgSurfRect.xy) * lgSurfRect.zw;
  vec3 sa = texture2D(lgSurfA, suv).rgb;
  vec3 sb = texture2D(lgSurfB, suv).rgb;
  #ifdef LG_DISCARD_WATER
    if (sb.r > 0.5) discard;
  #endif
  float aspd = smoothstep(0.42, 0.58, sa.r);
  float grn = smoothstep(0.42, 0.58, sa.g);
  float pav = smoothstep(0.42, 0.58, sa.b);
  float bal = smoothstep(0.42, 0.58, sb.g);
  float snd = smoothstep(0.42, 0.58, sb.b);
  vec3 c = lgColSidewalk;
  c = mix(c, lgColGrass, grn);
  c = mix(c, lgColSand, snd);
  c = mix(c, lgColBallast, bal * (1.0 - grn * 0.5));
  // paving: 2x2 tiles with a little colour variation (cobbles)
  vec2 tp = vLgWorld.xz / 0.8;
  vec2 tf = fract(tp);
  vec2 tw = fwidth(tp);
  float tvis = 1.0 - smoothstep(0.1, 0.35, max(tw.x, tw.y));
  float tline = 1.0 - smoothstep(0.03, 0.03 + max(tw.x, tw.y) * 1.5, min(min(tf.x, 1.0 - tf.x), min(tf.y, 1.0 - tf.y)));
  vec3 pavC = lgColPaving * (0.95 + 0.08 * lgHash(floor(tp))) * (1.0 - tline * 0.22 * tvis);
  c = mix(c, pavC, pav);
  // asphalt: smooth road plates with faint seams every 32 studs
  vec2 rp = vLgWorld.xz / 12.8;
  vec2 rf = fract(rp);
  vec2 rw = fwidth(rp);
  float rline = 1.0 - smoothstep(0.002, 0.002 + max(rw.x, rw.y) * 1.5, min(min(rf.x, 1.0 - rf.x), min(rf.y, 1.0 - rf.y)));
  vec3 roadC = lgColAsphalt * (1.0 - rline * 0.18);
  c = mix(c, roadC, aspd);
  // a light curb line where the road meets the sidewalk
  float curb = aspd * (1.0 - aspd) * 4.0;
  c = mix(c, lgColSidewalk * 1.15, curb * 0.5);
  diffuseColor.rgb = c;
  lgStudMask = (1.0 - aspd) * (1.0 - pav) * (1.0 - bal * 0.8);
}
#endif
#ifdef LG_WINDOWS
if (abs(lgN.y) < 0.5) {
  float u = vWall.x;
  float L = vWall.y;
  float y = vLgWorld.y;
  float baseY = vWall.z;
  float topY = vWall.w;
  float H = topY - baseY;
  float yRel = y - baseY;
  float seed = vStyle.x;
  float style = vStyle.y;
  vec3 trim = vTrim;
  float sp = seed > 0.5 ? 3.2 : 2.8;
  float ww = seed > 0.25 ? 1.6 : 1.2;
  float fh = 3.36;
  float gf = H > 9.0 ? 4.32 : 0.6;
  float nWin = floor((L - 0.6) / sp);
  float off = (L - nWin * sp) * 0.5;
  float local = u - off;
  float idx = floor(local / sp);
  float fx = local - (idx + 0.5) * sp;
  bool colOk = nWin >= 1.0 && idx >= 0.0 && idx < nWin;
  // cornice and plinth
  if (yRel > H - 0.48) {
    diffuseColor.rgb = trim;
  } else if (yRel > H - 0.62) {
    lgShade *= 0.72;
  } else if (yRel < 0.42) {
    diffuseColor.rgb *= 0.78;
  }
  if (colOk && yRel < H - 0.75 && style < 1.5) {
    if (style > 0.5) {
      // modern office: ribbon windows on every floor
      float f = floor((yRel - gf) / fh);
      float fy = (yRel - gf) - f * fh;
      if (yRel > gf && fy > 0.55 && fy < 2.85 && abs(fx) < sp * 0.5 - 0.12) {
        float edge = min(min(fy - 0.55, 2.85 - fy), sp * 0.5 - 0.12 - abs(fx));
        if (edge < 0.07) diffuseColor.rgb = trim * 0.9;
        else { lgGlass = 1.0; diffuseColor.rgb = vec3(0.10, 0.17, 0.25) + 0.05 * lgHash(vec2(idx, f + seed * 31.0)); }
      }
    } else {
      float f = floor((yRel - gf) / fh);
      float fy = (yRel - gf) - f * fh - 0.72;
      float wh = 1.92;
      bool rowOk = yRel > gf && fy > -0.12 && gf + f * fh + 0.72 + wh < H - 0.7;
      if (rowOk && abs(fx) < ww * 0.5 + 0.12 && fy < 0.0) {
        diffuseColor.rgb = trim; // sill
      } else if (rowOk && fy >= 0.0 && fy <= wh && abs(fx) < ww * 0.5) {
        float edge = min(ww * 0.5 - abs(fx), min(fy, wh - fy));
        bool mullion = abs(fx) < 0.04 || abs(fy - wh * 0.68) < 0.04;
        if (edge < 0.1 || mullion) {
          diffuseColor.rgb = trim;
        } else {
          float rnd = lgHash(vec2(idx + seed * 17.0, f + seed * 53.0));
          vec3 glass = vec3(0.07, 0.11, 0.17);
          if (rnd > 0.82) glass = vec3(0.55, 0.42, 0.25);       // warm curtains
          else if (rnd > 0.72) glass = vec3(0.16, 0.25, 0.32);
          diffuseColor.rgb = glass * (0.85 + 0.3 * fy / wh);
          lgGlass = rnd > 0.82 ? 0.3 : 1.0;
          if (fy > wh - 0.22) lgShade *= 0.8;
        }
      }
    }
    // ground floor shop fronts
    if (H > 9.0 && yRel > 0.42 && yRel < 3.6) {
      float sw = sp - 0.5;
      if (abs(fx) < sw * 0.5) {
        float doorIdx = floor(seed * 7.0);
        bool door = mod(idx, 7.0) == doorIdx && abs(fx) < 0.7 && yRel < 2.9;
        float edge = min(sw * 0.5 - abs(fx), min(yRel - 0.42, 3.6 - yRel));
        if (door) {
          diffuseColor.rgb = trim * 0.45;
          if (abs(fx) < 0.62 && yRel < 2.8) diffuseColor.rgb = vec3(0.2, 0.12, 0.07);
        } else if (edge < 0.1) {
          diffuseColor.rgb = trim * 0.85;
        } else {
          lgGlass = 1.0;
          diffuseColor.rgb = vec3(0.09, 0.13, 0.18) + vec3(0.08, 0.06, 0.02) * step(yRel, 1.2);
        }
      }
      // awning band above the shops
      if (yRel > 3.6 && yRel < 4.0) diffuseColor.rgb = trim * 0.95;
    }
  }
}
#endif
#ifdef LG_STUDS
if (lgN.y > 0.8 && lgStudMask > 0.02) {
  vec2 nOff;
  float s = lgStudShade(vLgObj.xz / ${ol.toFixed(2)}, lgSunObj, nOff);
  lgShade *= mix(1.0, s, lgStudMask);
  lgPerturb += vec3(nOff.x, 0.0, nOff.y) * lgStudMask;
}
#endif
#ifdef LG_SEAMS
if (abs(lgN.y) < 0.35 && lgGlass < 0.5) {
  #ifdef LG_WINDOWS
    float su = vWall.x;
  #else
    vec2 lgT = normalize(vec2(-lgN.z, lgN.x) + vec2(1e-5));
    float su = dot(vLgObj.xz, lgT);
  #endif
  lgShade *= lgSeamShade(su, vLgObj.y, ${(ol*4).toFixed(2)});
}
#endif
diffuseColor.rgb *= lgShade;
`,pl=`
if (dot(lgPerturb, lgPerturb) > 0.0) {
  vec3 lgPW = vLgTanX * lgPerturb.x + vLgTanY * lgPerturb.y + vLgTanZ * lgPerturb.z;
  normal = normalize(normal + (viewMatrix * vec4(lgPW, 0.0)).xyz);
}
`,ml=`
roughnessFactor = mix(roughnessFactor, 0.12, lgGlass);
`,hl=0;function gl(e={}){let{studs:t=!0,seams:n=!1,windows:r=!1,ground:i=!1,discardWater:a=!1,wave:o=!1,paint:s=!1,nearFade:c=!1,uniforms:l={},...u}=e,d=new Li({roughness:.32,metalness:0,vertexColors:!i,envMapIntensity:.55,...u}),f={};t&&(f.LG_STUDS=``),n&&(f.LG_SEAMS=``),r&&(f.LG_WINDOWS=``),i&&(f.LG_GROUND=``),a&&(f.LG_DISCARD_WATER=``),o&&(f.LG_WAVE=``),s&&(f.LG_PAINT=``),c&&(f.LG_NEARFADE=``),d.defines={...d.defines||{},...f};let p=`lego:`+Object.keys(f).sort().join(`,`)+`:`+hl++;return d.userData.lgUniforms=l,d.onBeforeCompile=e=>{Object.assign(e.uniforms,cl,l),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
`+ll).replace(`#include <begin_vertex>`,`#include <begin_vertex>
`+ul),s&&(e.vertexShader=e.vertexShader.replace(`#include <color_vertex>`,`#include <color_vertex>
        #if defined(USE_COLOR) && defined(USE_INSTANCING_COLOR)
          float lgPaint = step(0.99, color.r) * step(color.g, 0.01) * step(0.99, color.b);
          vColor.rgb = mix(color.rgb, instanceColor.rgb, lgPaint);
        #endif`)),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
`+dl).replace(`#include <color_fragment>`,`#include <color_fragment>
`+fl).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
`+pl).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
`+ml),d.userData.shader=e},d.customProgramCacheKey=()=>p.replace(/:\d+$/,i?`:g`:``),d}function _l(e,t=.45,n={}){return new Li({color:e,roughness:.08,metalness:0,transparent:!0,opacity:t,depthWrite:!1,envMapIntensity:1,...n})}var vl=class{constructor(e={}){this.pos=[],this.nor=[],this.col=[],this.idx=[],this.extra={};for(let[t,n]of Object.entries(e))this.extra[t]={size:n,data:[]};this.count=0}v(e,t,n,r,i,a,o,s){if(this.pos.push(e,t,n),this.nor.push(r,i,a),this.col.push(o.r,o.g,o.b),s)for(let e in this.extra)this.extra[e].data.push(...s[e]);return this.count++}tri(e,t,n){this.idx.push(e,t,n)}quad(e,t,n,r){this.idx.push(e,t,n,e,n,r)}box(e,t,n,r,i,a,o,{bottom:s=!1}={}){let c=(e,t,n,r)=>{let i=this.v(r[0][0],r[0][1],r[0][2],e,t,n,o),a=this.v(r[1][0],r[1][1],r[1][2],e,t,n,o),s=this.v(r[2][0],r[2][1],r[2][2],e,t,n,o),c=this.v(r[3][0],r[3][1],r[3][2],e,t,n,o);this.quad(i,a,s,c)};c(0,1,0,[[e,i,a],[r,i,a],[r,i,n],[e,i,n]]),s&&c(0,-1,0,[[e,t,n],[r,t,n],[r,t,a],[e,t,a]]),c(0,0,1,[[e,t,a],[r,t,a],[r,i,a],[e,i,a]]),c(0,0,-1,[[r,t,n],[e,t,n],[e,i,n],[r,i,n]]),c(1,0,0,[[r,t,a],[r,t,n],[r,i,n],[r,i,a]]),c(-1,0,0,[[e,t,n],[e,t,a],[e,i,a],[e,i,n]])}get empty(){return this.count===0}toGeometry(){let e=new lr;e.setAttribute(`position`,new Zn(this.pos,3)),e.setAttribute(`normal`,new Zn(this.nor,3)),e.setAttribute(`color`,new Zn(this.col,3));for(let[t,n]of Object.entries(this.extra))e.setAttribute(t,new Zn(n.data,n.size));return e.setIndex(this.count>65535?new Xn(this.idx,1):new Yn(this.idx,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}},yl={horizon:new q(14281204),zenith:new q(4884168),fog:new q(13624047)},bl=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,xl=`
uniform vec3 uHorizon;
uniform vec3 uZenith;
uniform vec3 lgSunDir;
varying vec3 vDir;
#include <common>
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.2, 1.0);
  vec3 col = mix(uHorizon, uZenith, pow(max(h, 0.0), 0.55));
  col = mix(col, uHorizon * 0.92, smoothstep(0.0, -0.2, h));
  float s = max(dot(d, normalize(lgSunDir)), 0.0);
  col += vec3(1.0, 0.86, 0.62) * (pow(s, 12.0) * 0.25 + pow(s, 400.0) * 1.5);
  col += vec3(1.0) * smoothstep(0.9993, 0.9996, s) * 4.0;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function Sl(){let e=new Fi({uniforms:{uHorizon:{value:yl.horizon},uZenith:{value:yl.zenith},lgSunDir:cl.lgSunDir},vertexShader:bl,fragmentShader:xl,side:1,depthWrite:!1,fog:!1}),t=new J(new Ei(1,48,24),e);return t.scale.setScalar(2e4),t.frustumCulled=!1,t.renderOrder=-10,t.name=`sky`,t}var Cl=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},wl=(e,t,n)=>{let r=Math.abs((e-t+540)%360-180);return Math.max(0,1-(r/n)**2)};function Tl(e,t){let n=e=>t*Math.tan(e*Math.PI/180),r=.35+.25*Math.sin(e*.21)*Math.sin(e*.07+1),i=e>235||e<45?2.4+.45*Math.sin(e*.31)+.25*Math.sin(e*.9):0,a=e>235?Cl(235,260,e):e<45?1-Cl(25,45,e):0;r=Math.max(r,i*a),r=Math.max(r,4*wl(e,78,22)+.4*Math.sin(e*.8));let o=5+2.6*Cl(140,175,e)-1.2*wl(e,150,8)+.3*Math.sin(e*.7);return r=Math.max(r,o*Cl(124,132,e)*(1-Cl(198,215,e))),n(Math.max(.2,r))}function El(e,t){let n=e=>t*Math.tan(e*Math.PI/180),r=0;return r=Math.max(r,(2.2+.6*Math.sin(e*1.7)+.4*Math.sin(e*3.1))*Cl(55,75,e)*(1-Cl(150,175,e))),r=Math.max(r,3.6*wl(e,121,7)+1*wl(e,123,2)),r=Math.max(r,2.9*wl(e,103,5)),n(r)}function Dl(e,t,n,r,i=.75){let a=new vl;for(let o=0;o<360;o+=i){let s=o*Math.PI/180,c=(o+i)*Math.PI/180,l=Math.round(t(o+i/2,e)/r)*r;if(l<=0)continue;let u=Math.sin(s)*e,d=-Math.cos(s)*e,f=Math.sin(c)*e,p=-Math.cos(c)*e,m=-Math.sin((s+c)/2),h=Math.cos((s+c)/2),g=n(o,l,e,Math.floor(o/i));for(let e=0;e+1<g.length;e++){let[t,n]=g[e],[r,i]=g[e+1],o=a.v(u,t,d,m,0,h,n),s=a.v(f,t,p,m,0,h,n),c=a.v(f,r,p,m,0,h,i),l=a.v(u,r,d,m,0,h,i);a.idx.push(o,s,c,o,c,l)}}return a}function Ol(){let e=yl.fog.clone(),t=new on;t.name=`mountains`;let n=new Br({vertexColors:!0,fog:!1}),r=new q(15857402),i=new q(10927309),a=new J(Dl(3660,El,(t,n,a)=>{let o=Math.atan(n/a)*180/Math.PI,s=e.clone().lerp(i,.3);if(o<2.2)return[[-200,s],[n,i]];let c=n*.72;return[[-200,s],[c,i],[c,r],[n,r]]},30).toGeometry(),n);a.renderOrder=-9,a.frustumCulled=!1,t.add(a);let o=new q(5599626),s=new q(7508136),c=new q(6717300),l=new J(Dl(3600,Tl,(t,n,r,i)=>{let a=t>128&&t<210,l=i%2?1:.965,u=(a?o:s).clone().multiplyScalar(l);return[[-200,e.clone().lerp(a?c:s,a?.45:.2)],[n,u]]},22).toGeometry(),n);return l.renderOrder=-8,l.frustumCulled=!1,t.add(l),t}function kl(e,t){let n=new vl,r=new q(16777215),i=new q(15134195);for(let a=0;a<34;a++){let a=e.minX-800+t()*(e.maxX-e.minX+1600),o=e.minZ-800+t()*(e.maxZ-e.minZ+1600),s=260+t()*220,c=4+Math.floor(t()*7);for(let e=0;e<c;e++){let c=18+t()*40,l=14+t()*30,u=8+t()*12,d=(t()-.5)*70,f=(t()-.5)*50,p=(t()-.3)*10;n.box(a+d-c/2,s+p,o+f-l/2,a+d+c/2,s+p+u,o+f+l/2,e%3==0?i:r,{bottom:!0})}}let a=gl({studs:!0,seams:!1,roughness:.9,emissive:10135732,envMapIntensity:.2}),o=new J(n.toGeometry(),a);return o.name=`clouds`,o}function Al(e,t){let n=new al({antialias:!0,powerPreference:`high-performance`,stencil:!1});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t.pixelRatio)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=t.shadows,n.shadowMap.type=1,n.toneMapping=7,n.toneMappingExposure=1.05,n.outputColorSpace=Le,e.appendChild(n.domElement),n}function jl(e,t){let n=new hn;n.background=yl.horizon.clone(),n.fog=new mn(yl.fog,72e-5);let r=new oa(14084351,9075298,1.25);n.add(r);let i=new xa(16773336,2.7);i.castShadow=t.shadows,i.shadow.mapSize.set(t.shadowSize,t.shadowSize);let a=t.shadowRange;Object.assign(i.shadow.camera,{left:-a,right:a,top:a,bottom:-a,near:10,far:900}),i.shadow.bias=-5e-4,i.shadow.normalBias=.04,n.add(i),n.add(i.target);let o=new fo(e),s=new hn,c=new Ei(10,32,16),l=new Fi({side:1,uniforms:{top:{value:new q(6988508)},mid:{value:new q(15397882)},bottom:{value:new q(7828330)}},vertexShader:`varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; varying vec3 vP; void main(){ float h = normalize(vP).y; vec3 c = h > 0.0 ? mix(mid, top, pow(h, 0.6)) : mix(mid, bottom, pow(-h, 0.4)); gl_FragColor = vec4(c, 1.0); }`});s.add(new J(c,l));let u=new J(new Ei(1.2,16,8),new Br({color:new q(8,7.4,6.4)}));u.position.copy(cl.lgSunDir.value).multiplyScalar(8),s.add(u),n.environment=o.fromScene(s,.02).texture,o.dispose();let d=cl.lgSunDir.value;return{scene:n,sun:i,hemi:r,updateSun:e=>{let n=2*a/(i.shadow.mapSize.x||t.shadowSize),r=Math.round(e.x/n)*n,o=Math.round(e.z/n)*n;i.target.position.set(r,e.y,o),i.position.set(r+d.x*400,e.y+d.y*400,o+d.z*400),i.target.updateMatrixWorld()}}}var Ml=class{constructor(e){this.minX=e.minX,this.minZ=e.minZ,this.spacing=e.spacing,this.cols=e.cols,this.rows=e.rows,this.maxX=this.minX+(this.cols-1)*this.spacing,this.maxZ=this.minZ+(this.rows-1)*this.spacing,this.h=Float32Array.from(e.h,e=>e/10)}heightAt(e,t){let n=this.spacing,r=(e-this.minX)/n,i=(t-this.minZ)/n;r=r<0?0:r>this.cols-1.0001?this.cols-1.0001:r,i=i<0?0:i>this.rows-1.0001?this.rows-1.0001:i;let a=r|0,o=i|0,s=r-a,c=i-o,l=o*this.cols+a,u=this.h,d=u[l],f=u[l+1],p=u[l+this.cols],m=u[l+this.cols+1];return s+c<=1?d+(f-d)*s+(p-d)*c:m+(p-m)*(1-s)+(f-m)*(1-c)}gradientAt(e,t,n=[0,0]){let r=1.5;return n[0]=(this.heightAt(e+r,t)-this.heightAt(e-r,t))/(2*r),n[1]=(this.heightAt(e,t+r)-this.heightAt(e,t-r))/(2*r),n}buildMesh(e,t=32){let n=new on;n.name=`ground`;let{cols:r,rows:i,spacing:a,minX:o,minZ:s,h:c}=this,l=(e,t)=>c[Math.min(i-1,Math.max(0,t))*r+Math.min(r-1,Math.max(0,e))];for(let c=0;c<i-1;c+=t)for(let u=0;u<r-1;u+=t){let d=Math.min(t,r-1-u),f=Math.min(t,i-1-c),p=d+1,m=f+1,h=new Float32Array(p*m*3),g=new Float32Array(p*m*3),_=0;for(let e=0;e<m;e++)for(let t=0;t<p;t++){let n=u+t,r=c+e;h[_]=o+n*a,h[_+1]=l(n,r),h[_+2]=s+r*a;let i=(l(n+1,r)-l(n-1,r))/(2*a),d=(l(n,r+1)-l(n,r-1))/(2*a),f=Math.hypot(i,1,d);g[_]=-i/f,g[_+1]=1/f,g[_+2]=-d/f,_+=3}let v=new Uint32Array(d*f*6);_=0;for(let e=0;e<f;e++)for(let t=0;t<d;t++){let n=e*p+t,r=n+1,i=n+p,a=i+1;v[_++]=n,v[_++]=i,v[_++]=r,v[_++]=r,v[_++]=i,v[_++]=a}let y=new lr;y.setAttribute(`position`,new Jn(h,3)),y.setAttribute(`normal`,new Jn(g,3)),y.setIndex(new Jn(v,1)),y.computeBoundingSphere(),y.computeBoundingBox();let b=new J(y,e);b.receiveShadow=!0,b.matrixAutoUpdate=!1,n.add(b)}return n}},Nl=class{constructor(e,t=1){let n=e.bounds;this.res=t,this.minX=n.minX,this.minZ=n.minZ,this.W=Math.ceil((n.maxX-n.minX)/t),this.H=Math.ceil((n.maxZ-n.minZ)/t),this.canvasA=this.#e(e,`A`),this.canvasB=this.#e(e,`B`);let r=this.canvasB.getContext(`2d`,{willReadFrequently:!0}).getImageData(0,0,this.W,this.H).data;this.water=new Uint8Array(this.W*this.H);for(let e=0,t=0;e<this.water.length;e++,t+=4)this.water[e]=r[t]}#e(e,t){let n=document.createElement(`canvas`);n.width=this.W,n.height=this.H;let r=n.getContext(`2d`,{willReadFrequently:t===`B`});r.fillStyle=`#000`,r.fillRect(0,0,this.W,this.H),r.setTransform(1/this.res,0,0,1/this.res,-this.minX/this.res,-this.minZ/this.res),r.globalCompositeOperation=`lighter`,r.lineCap=`round`,r.lineJoin=`round`;let i=(e,t)=>{r.fillStyle=t;for(let t of e){r.beginPath();for(let e of t){for(let t=0;t<e.length;t+=2)t===0?r.moveTo(e[t],e[t+1]):r.lineTo(e[t],e[t+1]);r.closePath()}r.fill(`evenodd`)}},a=(e,t,n)=>{r.strokeStyle=n,r.lineWidth=t,r.beginPath();for(let t=0;t<e.length;t+=2)t===0?r.moveTo(e[t],e[t+1]):r.lineTo(e[t],e[t+1]);r.stroke()};if(t===`A`){i(e.areas.green,`#00ff00`),i(e.areas.pitch,`#00ff00`),i(e.areas.paving,`#0000ff`);for(let t of e.piers)i([t.r],`#0000ff`);for(let t of e.pierLines)a(t.p,t.w,`#0000ff`);for(let t of e.roads)t.k>=8&&a(t.p,t.w,`#0000ff`);i(e.areas.asphalt,`#ff0000`);for(let t of e.roads)t.k<8&&a(t.p,t.w,`#ff0000`)}else{i(e.water,`#ff0000`),i(e.areas.ballast,`#00ff00`);for(let t of e.rails)t.k===0&&a(t.p,3.6,`#00ff00`);i(e.areas.sand,`#0000ff`)}return n}textures(e){let n=n=>{let r=new hi(n);return r.flipY=!1,r.colorSpace=``,r.wrapS=r.wrapT=t,r.minFilter=c,r.magFilter=o,r.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),r.generateMipmaps=!0,r};return{a:n(this.canvasA),b:n(this.canvasB)}}rect(){return new Dt(this.minX,this.minZ,1/(this.W*this.res),1/(this.H*this.res))}waterAt(e,t){let n=(e-this.minX)/this.res-.5,r=(t-this.minZ)/this.res-.5;if(n<0||r<0||n>=this.W-1||r>=this.H-1)return 0;let i=n|0,a=r|0,o=n-i,s=r-a,c=a*this.W+i,l=this.water;return((l[c]*(1-o)+l[c+1]*o)*(1-s)+(l[c+this.W]*(1-o)+l[c+this.W+1]*o)*s)/255}isWater(e,t){return this.waterAt(e,t)>.5}shoreSegments(){let{W:e,H:t,water:n,res:r,minX:i,minZ:a}=this,o=[],s=127.5,c=e=>i+(e+.5)*r,l=e=>a+(e+.5)*r,u=(e,t)=>(s-e)/(t-e);for(let r=0;r<t-1;r++){let t=r*e;for(let i=0;i<e-1;i++){let a=n[t+i],d=n[t+i+1],f=n[t+e+i+1],p=n[t+e+i],m=a>s|(d>s?2:0)|(f>s?4:0)|(p>s?8:0);if(m===0||m===15)continue;let h=c(i),g=c(i+1),_=l(r),v=l(r+1),y=()=>[h+(g-h)*u(a,d),_],b=()=>[g,_+(v-_)*u(d,f)],x=()=>[h+(g-h)*u(p,f),v],S=()=>[h,_+(v-_)*u(a,p)],C=[];switch(m){case 1:case 14:C.push([S(),y()]);break;case 2:case 13:C.push([y(),b()]);break;case 3:case 12:C.push([S(),b()]);break;case 4:case 11:C.push([b(),x()]);break;case 6:case 9:C.push([y(),x()]);break;case 7:case 8:C.push([S(),x()]);break;case 5:C.push([S(),y()],[b(),x()]);break;case 10:C.push([y(),b()],[x(),S()])}for(let[e,t]of C){let n=t[0]-e[0],r=t[1]-e[1],i=Math.hypot(n,r);if(i<1e-4)continue;let a=r/i,s=-n/i,c=(e[0]+t[0])/2,l=(e[1]+t[1])/2;this.waterAt(c+a*.6,l+s*.6)<this.waterAt(c-a*.6,l-s*.6)&&(a=-a,s=-s),o.push(e[0],e[1],t[0],t[1],a,s)}}}return o}},Pl=class{constructor(e,t){this.cell=t,this.minX=e.minX-50,this.minZ=e.minZ-50,this.cols=Math.ceil((e.maxX-e.minX+100)/t),this.rows=Math.ceil((e.maxZ-e.minZ+100)/t),this.cells=Array(this.cols*this.rows)}range(e,t,n,r,i){let a=Math.max(0,Math.floor((Math.min(e,n)-this.minX)/this.cell)),o=Math.min(this.cols-1,Math.floor((Math.max(e,n)-this.minX)/this.cell)),s=Math.max(0,Math.floor((Math.min(t,r)-this.minZ)/this.cell)),c=Math.min(this.rows-1,Math.floor((Math.max(t,r)-this.minZ)/this.cell));for(let e=s;e<=c;e++)for(let t=a;t<=o;t++)i(e*this.cols+t)}insert(e,t,n,r,i){this.range(e,t,n,r,e=>(this.cells[e]||(this.cells[e]=[])).push(i))}},Fl=class{constructor(e,t=12){this.grid=new Pl(e,t),this.d=[],this.count=0,this.stamp=new Uint32Array(1024),this.stampId=1}add(e,t,n,r,i=1/0,a=0){let o=this.count++;if(this.d.push(e,t,n,r,i===1/0?1e9:i,a),this.grid.insert(e,t,n,r,o),this.count>this.stamp.length){let e=new Uint32Array(this.stamp.length*2);e.set(this.stamp),this.stamp=e}return o}finalize(){}query(e,t,n,r,i){let a=++this.stampId,o=this.stamp,s=this.grid.cells;this.grid.range(e,t,n,r,e=>{let t=s[e];if(t)for(let e=0;e<t.length;e++){let n=t[e];o[n]!==a&&(o[n]=a,i(n))}})}collideCircle(e,t,n,r,i){let a=this.d;this.query(e-n,t-n,e+n,t+n,o=>{let s=o*6,c=a[s+4];if(r>c)return;let l=a[s],u=a[s+1],d=a[s+2],f=a[s+3],p=d-l,m=f-u,h=p*p+m*m,g=h>0?((e-l)*p+(t-u)*m)/h:0;g=g<0?0:g>1?1:g;let _=l+p*g,v=u+m*g,y=e-_,b=t-v,x=y*y+b*b;if(x>=n*n)return;let S=Math.sqrt(x),C,w;if(S>1e-6)C=y/S,w=b/S;else{let e=Math.sqrt(h)||1;C=-m/e,w=p/e}i(C,w,n-S,_,v,c,a[s+5])})}raycast(e,t,n,r,i=4){let a=this.d,o=1,s=n-e,c=r-t;return this.query(e,t,n,r,n=>{let r=n*6;if(a[r+4]<i)return;let l=a[r],u=a[r+1],d=a[r+2]-l,f=a[r+3]-u,p=s*f-c*d;if(Math.abs(p)<1e-9)return;let m=((l-e)*f-(u-t)*d)/p,h=((l-e)*c-(u-t)*s)/p;m>=0&&m<o&&h>=0&&h<=1&&(o=m)}),o}},Il=class{constructor(e,t=16){this.grid=new Pl(e,t),this.items=[],this.stampId=0}add(e,t,n,r,i=null){let a={x:e,z:t,r:n,top:r,data:i,active:!0},o=this.items.length;return this.items.push(a),this.grid.insert(e-n,t-n,e+n,t+n,o),a}query(e,t,n,r){let i=++this.stampId;this.grid.range(e-n,t-n,e+n,t+n,a=>{let o=this.grid.cells[a];if(o)for(let a of o){let o=this.items[a];if(o.stamp===i||(o.stamp=i,!o.active))continue;let s=e-o.x,c=t-o.z,l=n+o.r;s*s+c*c<l*l&&r(o)}})}};function Ll(e,t,n){let r=!1;for(let i=0,a=n.length-2;i<n.length;a=i,i+=2){let o=n[i],s=n[i+1],c=n[a],l=n[a+1];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}var Rl=class{constructor(e){this.grid=new Pl(e,24),this.list=[]}#e(e,t,n){let r=this.list.length;this.list.push(e),this.grid.insert(Math.min(...t),Math.min(...n),Math.max(...t),Math.max(...n),r)}addPolygon(e,t,n){let r=[],i=[];for(let t=0;t<e.length;t+=2)r.push(e[t]),i.push(e[t+1]);this.#e({type:0,ring:e,heightFn:t,kind:n},r,i)}addLine(e,t,n,r){let i=[],a=[];for(let n=0;n<e.length;n+=2)i.push(e[n]-t,e[n]+t),a.push(e[n+1]-t,e[n+1]+t);this.#e({type:1,p:e,hw:t/2,heightFn:n,kind:r},i,a)}heightAt(e,t){let n=-1/0,r=Math.floor((e-this.grid.minX)/this.grid.cell),i=Math.floor((t-this.grid.minZ)/this.grid.cell);if(r<0||i<0||r>=this.grid.cols||i>=this.grid.rows)return n;let a=this.grid.cells[i*this.grid.cols+r];if(!a)return n;for(let r of a){let i=this.list[r],a=!1;if(i.type===0)a=Ll(e,t,i.ring);else{let n=i.p;for(let r=0;r+3<n.length&&!a;r+=2){let o=n[r],s=n[r+1],c=n[r+2]-o,l=n[r+3]-s,u=c*c+l*l||1,d=((e-o)*c+(t-s)*l)/u;d=d<0?0:d>1?1:d;let f=o+c*d-e,p=s+l*d-t;f*f+p*p<=i.hw*i.hw&&(a=!0)}}if(a){let r=i.heightFn(e,t);r>n&&(n=r)}}return n}},zl=class{constructor(e,t,n){this.terrain=e,this.surface=t,this.decks=n,this.kind=0}heightAt(e,t){let n=-1/0;this.kind=2,this.surface.isWater(e,t)||(n=this.terrain.heightAt(e,t),this.kind=0);let r=this.decks.heightAt(e,t);return r>n&&(n=r,this.kind=1),n}visualHeight(e,t){let n=this.heightAt(e,t);return n===-1/0?0:n}},Bl=new Set,Vl=!1;function Hl(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length;Bl.size&&Bl.clear();let a=Ul(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s=0,c=0,l=0;if(r&&(a=Zl(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Gl(a,o,s,c,l),o}function Ul(e,t,n,r,i){let a=null;if(i===Fu(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Mu(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Mu(i/r|0,e[i],e[i+1],a);return a&&Tu(a,a.next)&&(Nu(a),a=a.next),a}function Wl(e,t=e){let n=t===e,r=e,i;do i=!1,r!==r.next&&(Bl.size===0||!Bl.has(r))&&(Tu(r,r.next)||wu(r.prev,r,r.next)===0)?((n||r===t)&&(t=r.prev),Vl=!0,Nu(r),r=r.prev,i=!0):(n||r!==t)&&(r=r.next,i=!n);while(i||r!==t);return t}function Gl(e,t,n,r,i){i&&_u(e,n,r,i);let a=e,o=!1;for(;e.prev!==e.next;){let s=e.prev,c=e.next;if(wu(s,e,c)<0&&(i?ql(e,n,r,i):Kl(e)))t.push(s.i,e.i,c.i),Nu(e),e=c,a=c;else if(e=c,e===a){if(Vl=!1,e=Wl(e),Vl){a=e;continue}if(!o){e=Jl(e,t),a=e,o=!0;continue}Yl(e,t,n,r,i);break}}}function Kl(e){let t=e.prev,n=e,r=e.next,i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&(i!==m.x||s!==m.y)&&Su(i,s,a,c,o,l,m.x,m.y)&&wu(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ql(e,t,n,r){let i=e.prev,a=e,o=e.next,s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=bu(p,m,t,n,r),v=bu(h,g,t,n,r),y=e.prevZ;for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==o&&(s!==y.x||u!==y.y)&&Su(s,u,c,d,l,f,y.x,y.y)&&wu(y.prev,y,y.next)>=0)return!1;y=y.prevZ}let b=e.nextZ;for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==o&&(s!==b.x||u!==b.y)&&Su(s,u,c,d,l,f,b.x,b.y)&&wu(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Jl(e,t){let n=e,r=!1;do{let i=n.prev,a=n.next.next;Eu(i,n,n.next,a,!1)&&ku(i,a)&&ku(a,i)&&(t.push(i.i,n.i,a.i),Nu(n),Nu(n.next),n=e=a,r=!0),n=n.next}while(n!==e);return r?Wl(n):n}function Yl(e,t,n,r,i){let a=e;do{let e=a.next.next;for(;e!==a.prev;){if(a.i!==e.i&&Cu(a,e)){let o=ju(a,e);a=Wl(a,a.next),o=Wl(o,o.next),Gl(a,t,n,r,i),Gl(o,t,n,r,i);return}e=e.next}a=a.next}while(a!==e)}var Xl=!1;function Zl(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ul(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&Bl.add(o),i.push(xu(o))}i.sort(Ql),au(e.length/r,t.length),ou(n,n),Xl=!0;for(let e=0;e<i.length;e++)n=$l(i[e],n);return Xl=!1,Wl(n)}function Ql(e,t){return e.x-t.x||e.y-t.y||(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x)}function $l(e,t){let n=uu(e,t);if(!n)return t;let r=ju(n,e),i=r.next;return ou(n,i.next),Wl(r,r.next),Wl(n,n.next)}var eu=16,tu=new Float64Array,nu=0,ru=[],iu=[];function au(e,t){let n=Math.ceil((e+2*t)/eu)+t+2;tu.length<n*4&&(tu=new Float64Array(n*4)),nu=0}function ou(e,t){let n=e;do{let e=nu++;ru[e]=n;let r=n.x,i=n.y,a=n.x,o=n.y,s=0;do{let t=n.next;n.z=e,t.x<r&&(r=t.x),t.x>a&&(a=t.x),t.y<i&&(i=t.y),t.y>o&&(o=t.y),n=t}while(++s<eu&&n!==t);iu[e]=n;let c=e*4;tu[c]=r,tu[c+1]=i,tu[c+2]=a,tu[c+3]=o}while(n!==t)}function su(e,t){let n=e.z*4;t.x<tu[n]&&(tu[n]=t.x),t.y<tu[n+1]&&(tu[n+1]=t.y),t.x>tu[n+2]&&(tu[n+2]=t.x),t.y>tu[n+3]&&(tu[n+3]=t.y)}function cu(e){let t=iu[e];for(;t.prev.next!==t;)t=t.next;return iu[e]=t,t}function lu(e){let t=ru[e];for(;t.prev.next!==t;)t=t.next;return ru[e]=t,t}function uu(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Tu(e,n))return n;for(let t=0,s=0;t<nu;t++,s+=4){if(i<tu[s+1]||i>tu[s+3]||tu[s]>r||tu[s+2]<=a)continue;let c=cu(t);n=lu(t);do{if(n.prev.next===n){if(Tu(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}}n=n.next}while(n!==c)}if(!o)return null;let s=o.x,c=o.y,l=Math.min(i,c),u=Math.max(i,c),d=1/0;for(let t=0,f=0;t<nu;t++,f+=4){if(tu[f+2]<s||tu[f]>r||tu[f+3]<l||tu[f+1]>u)continue;let p=cu(t);n=lu(t);do{if(n.prev.next===n&&r>=n.x&&n.x>=s&&r!==n.x&&Su(i<c?r:a,i,s,c,i<c?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);(ku(n,e)||n.y===i&&n.next.y===i&&n.next.x>r)&&(t<d||t===d&&(n.x>o.x||n.x===o.x&&du(o,n)))&&(o=n,d=t)}n=n.next}while(n!==p)}return o}function du(e,t){return wu(e.prev,e,t.prev)<0&&wu(t.next,e,e.next)<0}var fu=[],pu=[],mu=new Uint32Array,hu=new Uint32Array,gu=new Uint32Array(256);function _u(e,t,n,r){let i=e,a=0;do i.z=bu(i.x,i.y,t,n,r),fu[a++]=i,i=i.next;while(i!==e);vu(a);let o=null;for(let e=0;e<a;e++){let t=fu[e];t.prevZ=o,o&&(o.nextZ=t),o=t}o.nextZ=null,fu.fill(null,0,a),pu.fill(null,0,a)}function vu(e){if(e<=32)for(let t=1;t<e;t++){let e=fu[t],n=e.z,r=t-1;for(;r>=0&&fu[r].z>n;)fu[r+1]=fu[r],r--;fu[r+1]=e}else{mu.length<e&&(mu=new Uint32Array(e),hu=new Uint32Array(e),pu=Array(e));for(let t=0;t<e;t++)mu[t]=fu[t].z;yu(e,fu,mu,pu,hu,0),yu(e,pu,hu,fu,mu,8),yu(e,fu,mu,pu,hu,16),yu(e,pu,hu,fu,mu,24)}}function yu(e,t,n,r,i,a){gu.fill(0);for(let t=0;t<e;t++)gu[n[t]>>>a&255]++;let o=0;for(let e=0;e<256;e++){let t=gu[e];gu[e]=o,o+=t}for(let o=0;o<e;o++){let e=n[o],s=gu[e>>>a&255]++;r[s]=t[o],i[s]=e}}function bu(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function xu(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Su(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Cu(e,t){let n=Tu(e,t)&&wu(e.prev,e,e.next)>0&&wu(t.prev,t,t.next)>0;return e.next.i!==t.i&&(n||ku(e,t)&&ku(t,e)&&(wu(e.prev,e,t.prev)!==0||wu(e,t.prev,t)!==0))&&!Ou(e,t)&&(n||Au(e,t))}function wu(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Tu(e,t){return e.x===t.x&&e.y===t.y}function Eu(e,t,n,r,i=!0){let a=wu(e,t,n),o=wu(e,t,r),s=wu(n,r,e),c=wu(n,r,t);return(a>0&&o<0||a<0&&o>0)&&(s>0&&c<0||s<0&&c>0)?!0:i?!!(a===0&&Du(e,n,t)||o===0&&Du(e,r,t)||s===0&&Du(n,e,r)||c===0&&Du(n,t,r)):!1}function Du(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ou(e,t){let n=Math.min(e.x,t.x),r=Math.max(e.x,t.x),i=Math.min(e.y,t.y),a=Math.max(e.y,t.y),o=e;do{let s=o.next;if(o.x>r&&s.x>r||o.x<n&&s.x<n||o.y>a&&s.y>a||o.y<i&&s.y<i)o=s;else{if(o.i!==e.i&&s.i!==e.i&&o.i!==t.i&&s.i!==t.i&&Eu(o,s,e,t))return!0;o=s}}while(o!==e);return!1}function ku(e,t){return wu(e.prev,e,e.next)<0?wu(e,t,e.next)>=0&&wu(e,e.prev,t)>=0:wu(e,t,e.prev)<0||wu(e,e.next,t)<0}function Au(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do{let e=n.next;n.y>a!=e.y>a&&i<(e.x-n.x)*(a-n.y)/(e.y-n.y)+n.x&&(r=!r),n=e}while(n!==e);return r}function ju(e,t){let n=Pu(e.i,e.x,e.y),r=Pu(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Mu(e,t,n,r){let i=Pu(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Nu(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ),Xl&&su(e.prev,e.next)}function Pu(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function Fu(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Z={white:16053492,lightBluishGray:10528169,darkBluishGray:7106152,black:1780276,red:13179401,darkRed:7474703,blue:21951,darkBlue:668771,mediumBlue:5936091,mediumAzure:3583679,darkAzure:494537,sandBlue:6321313,yellow:15912247,brightLightYellow:16773178,orange:16681496,brightLightOrange:16300861,darkOrange:11097344,green:2324545,brightGreen:4955978,lime:12314891,sandGreen:10534060,darkGreen:1590834,oliveGreen:10197594,tan:14994846,darkTan:9800307,lightNougat:16177075,nougat:13668712,mediumNougat:11173205,reddishBrown:5777938,darkBrown:3481856,pearlGold:11173678,flatSilver:9013128,pink:16553900,magenta:9582968,mediumLavender:11303098,coral:16738703,transClear:16579836,transLightBlue:11463151,transRed:13179401,transYellow:16108847,transOrange:15765276,transGreen:8697485},Iu=[[Z.tan,14],[Z.lightNougat,9],[Z.white,10],[Z.lightBluishGray,8],[Z.sandBlue,4],[Z.sandGreen,4],[Z.darkTan,5],[Z.mediumNougat,3],[Z.brightLightOrange,2],[Z.red,2],[Z.darkRed,2],[Z.blue,1.5],[Z.mediumAzure,1.5],[Z.yellow,1.5],[Z.nougat,2],[Z.oliveGreen,1],[Z.brightLightYellow,.8],[Z.mediumBlue,1]],Lu=[[Z.white,10],[Z.darkBluishGray,3],[Z.reddishBrown,2],[Z.darkRed,1.5],[Z.tan,2],[Z.black,1.5],[Z.darkBlue,1],[Z.sandGreen,1]],Ru=[[Z.darkBluishGray,10],[Z.black,3],[Z.darkRed,2],[Z.reddishBrown,2],[Z.sandGreen,1.2],[Z.darkTan,1.5],[Z.lightBluishGray,2]],zu=[Z.red,Z.blue,Z.white,Z.black,Z.brightGreen,Z.orange,Z.mediumAzure,Z.lime,Z.darkBlue,Z.darkRed,Z.lightBluishGray,Z.sandGreen,Z.darkAzure,Z.magenta,Z.brightLightOrange,Z.mediumLavender],Bu=[Z.red,Z.blue,Z.white,Z.black,Z.green,Z.orange,Z.mediumAzure,Z.darkBlue,Z.darkRed,Z.sandBlue,Z.tan,Z.lime,Z.magenta,Z.yellow,Z.reddishBrown,Z.darkBluishGray,Z.coral,Z.mediumLavender,Z.sandGreen],Vu=[Z.darkBlue,Z.black,Z.darkBluishGray,Z.tan,Z.blue,Z.reddishBrown,Z.white,Z.darkTan,Z.sandBlue,Z.darkRed],Hu=[Z.reddishBrown,Z.black,Z.darkBrown,Z.tan,Z.darkOrange,Z.lightBluishGray,Z.white,Z.yellow,Z.darkBluishGray];function Uu(e,t){let n=0;for(let[,t]of e)n+=t;let r=t*n;for(let[t,n]of e)if((r-=n)<=0)return t;return e[e.length-1][0]}function Wu(e,t=0){let n=e^t*2654435769;return n=Math.imul(n^n>>>16,73244475),n=Math.imul(n^n>>>16,73244475),n^=n>>>16,(n>>>0)/4294967296}var Gu=new Set([`church`,`chapel`,`cathedral`,`shed`,`garage`,`garages`,`service`,`toilets`,`transformer_tower`,`greenhouse`,`bunker`,`hut`]),Ku={cathedral:{wall:Z.lightBluishGray,trim:Z.darkBluishGray,roof:Z.darkBluishGray,style:2},station:{wall:Z.tan,trim:Z.white,roof:Z.darkBluishGray,style:0},theatre:{wall:Z.lightNougat,trim:Z.white,roof:Z.sandGreen,style:0},tower_ile:{wall:Z.lightBluishGray,trim:Z.darkBluishGray,roof:Z.darkBluishGray,style:2},tower_molard:{wall:Z.tan,trim:Z.darkTan,roof:Z.darkBluishGray,style:2},palais_nations:{wall:Z.white,trim:Z.tan,roof:Z.lightBluishGray,style:0},brunswick:{wall:Z.lightBluishGray,trim:Z.pearlGold,roof:Z.sandGreen,style:2},church:{wall:Z.tan,trim:Z.darkTan,roof:Z.darkBluishGray,style:2}};function qu(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}function Ju(e){let t=Wu(e.id,1),n=Ku[e.special],r=Gu.has(e.t)||e.h<6,i=n?n.style:r?2:+((e.t===`office`||e.t===`commercial`)&&Wu(e.id,7)<.6);!n&&!r&&e.h>30&&Wu(e.id,9)<.5&&(i=1);let a=new q(n?n.wall:Uu(Iu,Wu(e.id,2))),o=new q(n?n.trim:Uu(Lu,Wu(e.id,3))),s=new q(n?n.roof:Uu(Ru,Wu(e.id,4))),c=e.g-.6,l=e.g+e.s*.6+e.h;return{seed:t,style:i,wall:a,trim:o,roof:s,base:c,top:l}}function Yu(e,t,{skip:n=new Set,chunkSize:r=320}={}){let i=gl({studs:!0,seams:!0,windows:!0}),a=new Map,o=(e,t)=>{let n=`${Math.floor(e/r)},${Math.floor(t/r)}`,i=a.get(n);return i||a.set(n,i=new vl({aWall:4,aTrim:3,aStyle:2})),i},s={aWall:[0,0,0,0],aTrim:[0,0,0],aStyle:[0,2]};for(let r of e.buildings){let e=qu(r.r),i=(r.holes||[]).map(qu);if(!(r.mh>3.5))for(let n of[e,...i])for(let e=0;e<n.length;e++){let r=n[e],i=n[(e+1)%n.length];t.add(r[0],r[1],i[0],i[1],1/0,1)}if(n.has(r.special)||n.has(r.id))continue;let{base:a,top:c,wall:l,trim:u,roof:d,seed:f,style:p}=Ju(r),m=r.mh>2.5?r.g+r.mh:a,h=0,g=0;for(let t of e)h+=t[0],g+=t[1];let _=o(h/e.length,g/e.length),v=[u.r,u.g,u.b],y=[f,p];for(let t of[e,...i])for(let e=0;e<t.length;e++){let n=t[e],r=t[(e+1)%t.length],i=r[0]-n[0],o=r[1]-n[1],s=Math.hypot(i,o);if(s<.05)continue;let u=o/s,d=-i/s,f={aWall:[0,s,a,c],aTrim:v,aStyle:y},p={aWall:[s,s,a,c],aTrim:v,aStyle:y},h=_.v(n[0],m,n[1],u,0,d,l,f),g=_.v(r[0],m,r[1],u,0,d,l,p),b=_.v(r[0],c,r[1],u,0,d,l,p),x=_.v(n[0],c,n[1],u,0,d,l,f);_.idx.push(h,b,g,h,x,b)}let b=[],x=[];for(let t of e)b.push(t[0],t[1]);for(let e of i){x.push(b.length/2);for(let t of e)b.push(t[0],t[1])}let S=Hl(b,x),C=_.count;for(let e=0;e<b.length;e+=2)_.v(b[e],c,b[e+1],0,1,0,d,s);for(let e=0;e<S.length;e+=3){let t=S[e],n=S[e+1],r=S[e+2],i=b[t*2],a=b[t*2+1];(b[n*2+1]-a)*(b[r*2]-i)-(b[n*2]-i)*(b[r*2+1]-a)>=0?_.tri(C+t,C+n,C+r):_.tri(C+t,C+r,C+n)}if(r.mh>2.5){let e=_.count;for(let e=0;e<b.length;e+=2)_.v(b[e],m,b[e+1],0,-1,0,l,s);for(let t=0;t<S.length;t+=3)_.tri(e+S[t],e+S[t+2],e+S[t+1])}}let c=new on;c.name=`buildings`;for(let e of a.values()){if(e.empty)continue;let t=new J(e.toGeometry(),i);t.castShadow=!0,t.receiveShadow=!0,t.matrixAutoUpdate=!1,c.add(t)}return{group:c,material:i}}function Xu(e,t){let n=new vl,r=new q(Z.darkBluishGray),i=new q(Z.lightBluishGray),a=new q(Z.darkBluishGray);for(let o of e.canopies){let e=qu(o.r),s=0,c=0;for(let t of e)s+=t[0],c+=t[1];s/=e.length,c/=e.length;let l=t.heightAt(s,c)+Math.max(3.4,o.h),u=e.flat(),d=Hl(u,[]),f=n.count;for(let t of e)n.v(t[0],l,t[1],0,1,0,r);let p=n.count;for(let t of e)n.v(t[0],l-.32,t[1],0,-1,0,i);for(let e=0;e<d.length;e+=3){let t=d[e],r=d[e+1],i=d[e+2];(u[r*2+1]-u[t*2+1])*(u[i*2]-u[t*2])-(u[r*2]-u[t*2])*(u[i*2+1]-u[t*2+1])>=0?(n.tri(f+t,f+r,f+i),n.tri(p+t,p+i,p+r)):(n.tri(f+t,f+i,f+r),n.tri(p+t,p+r,p+i))}for(let t=0;t<e.length;t++){let i=e[t],a=e[(t+1)%e.length],o=a[0]-i[0],s=a[1]-i[1],c=Math.hypot(o,s)||1,u=s/c,d=-o/c,f=n.v(i[0],l-.32,i[1],u,0,d,r),p=n.v(a[0],l-.32,a[1],u,0,d,r),m=n.v(a[0],l,a[1],u,0,d,r),h=n.v(i[0],l,i[1],u,0,d,r);n.idx.push(f,m,p,f,h,m)}if(e.length>=3){let e=t.heightAt(s,c);n.box(s-.2,e,c-.2,s+.2,l-.3,c+.2,a)}}if(n.empty)return null;let o=new J(n.toGeometry(),gl({studs:!0,seams:!1}));return o.castShadow=!0,o.receiveShadow=!0,o}var Zu=`
varying vec3 vW;
#include <common>
#include <fog_pars_vertex>
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,Qu=`
uniform float lgTime;
uniform vec3 lgSunDir;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uHorizon;
uniform vec3 uZenith;
uniform sampler2D uMask;
uniform vec4 uRect;
varying vec3 vW;
#include <common>
#include <fog_pars_fragment>

float wave(vec2 p, vec2 dir, float freq, float speed, float t) {
  return sin(dot(p, dir) * freq + t * speed);
}
vec2 waveGrad(vec2 p, vec2 dir, float freq, float speed, float amp, float t, float fp) {
  // fade out waves that are smaller than a couple of pixels (no moire)
  float vis = 1.0 - smoothstep(0.15, 0.6, fp * freq);
  return dir * freq * amp * vis * cos(dot(p, dir) * freq + t * speed);
}

void main() {
  vec2 p = vW.xz;
  float t = lgTime;
  vec2 g = vec2(0.0);
  float fp = length(fwidth(p));
  g += waveGrad(p, normalize(vec2(0.8, 0.6)), 0.55, 1.6, 0.05, t, fp);
  g += waveGrad(p, normalize(vec2(-0.3, 0.95)), 0.9, 2.1, 0.03, t, fp);
  g += waveGrad(p, normalize(vec2(0.95, -0.2)), 1.7, 2.9, 0.016, t, fp);
  g += waveGrad(p, normalize(vec2(-0.7, -0.7)), 3.1, 3.7, 0.008, t, fp);
  vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
  vec3 V = normalize(cameraPosition - vW);
  float dist = length(cameraPosition - vW);
  // flatten the ripples far away to avoid shimmer
  n = normalize(mix(n, vec3(0.0, 1.0, 0.0), smoothstep(150.0, 900.0, dist)));
  float ndv = max(dot(n, V), 0.0);
  float fres = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);
  vec3 R = reflect(-V, n);
  vec3 sky = mix(uHorizon, uZenith, clamp(R.y * 1.8, 0.0, 1.0));
  // LEGO touch: the lake is made of transparent blue 2x2 tiles
  vec2 tp = p / 0.8;
  vec2 tf = fract(tp);
  vec2 tw = fwidth(tp);
  float tvis = 1.0 - smoothstep(0.03, 0.12, max(tw.x, tw.y));
  float tline = 1.0 - smoothstep(0.02, 0.02 + max(tw.x, tw.y) * 1.5, min(min(tf.x, 1.0 - tf.x), min(tf.y, 1.0 - tf.y)));
  vec3 body = mix(uDeep, uShallow, 0.35 + 0.25 * sin(p.x * 0.013 + p.y * 0.017));
  body *= 1.0 - tline * 0.18 * tvis;
  // shore foam using the water mask
  vec2 muv = (p - uRect.xy) * uRect.zw;
  float m = texture2D(uMask, muv).r;
  float foam = smoothstep(0.75, 0.55, m) * (0.6 + 0.4 * sin(t * 2.0 + p.x * 0.7 + p.y * 0.5));
  vec3 col = mix(body, sky, fres);
  float spec = pow(max(dot(R, lgSunDir), 0.0), 260.0) * 4.0 + pow(max(dot(R, lgSunDir), 0.0), 24.0) * 0.12;
  col += vec3(1.0, 0.96, 0.86) * spec;
  col = mix(col, vec3(0.92, 0.96, 1.0), clamp(foam, 0.0, 1.0) * 0.55);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`;function $u(e,t){let n=Mi.merge([X.fog,{uDeep:{value:new q(1006974)},uShallow:{value:new q(3116968)},uHorizon:{value:new q(14215410)},uZenith:{value:new q(6067663)},uMask:{value:null},uRect:{value:e.rect()}}]);n.uMask.value=t,n.lgTime=cl.lgTime,n.lgSunDir=cl.lgSunDir;let r=new Fi({uniforms:n,vertexShader:Zu,fragmentShader:Qu,fog:!0}),i=new wi(24e3,24e3,1,1);i.rotateX(-Math.PI/2);let a=new J(i,r);return a.position.y=0,a.name=`water`,a.renderOrder=-1,a}function ed(e){let t=(e,t)=>`${Math.round(e*1e3)},${Math.round(t*1e3)}`,n=e.length/6,r=new Map,i=new Map;for(let a=0;a<n;a++)r.set(t(e[a*6],e[a*6+1]),a),i.set(t(e[a*6+2],e[a*6+3]),a);let a=new Uint8Array(n),o=[];for(let s=0;s<n;s++){if(a[s])continue;a[s]=1;let n=[[e[s*6],e[s*6+1]],[e[s*6+2],e[s*6+3]]];for(;;){let o=n[n.length-1],s=r.get(t(o[0],o[1]));if(s===void 0||a[s]){if(s=i.get(t(o[0],o[1])),s===void 0||a[s])break;a[s]=1,n.push([e[s*6],e[s*6+1]])}else a[s]=1,n.push([e[s*6+2],e[s*6+3]])}for(;;){let o=n[0],s=i.get(t(o[0],o[1]));if(s===void 0||a[s]){if(s=r.get(t(o[0],o[1])),s===void 0||a[s])break;a[s]=1,n.unshift([e[s*6+2],e[s*6+3]])}else a[s]=1,n.unshift([e[s*6],e[s*6+1]])}o.push(td(n,.12))}return o}function td(e,t){if(e.length<3)return e;let n=new Uint8Array(e.length);n[0]=n[e.length-1]=1;let r=[[0,e.length-1]];for(;r.length;){let[i,a]=r.pop(),[o,s]=e[i],[c,l]=e[a],u=c-o,d=l-s,f=u*u+d*d,p=-1,m=t*t;for(let t=i+1;t<a;t++){let n=f>0?((e[t][0]-o)*u+(e[t][1]-s)*d)/f:0;n=Math.max(0,Math.min(1,n));let r=o+u*n-e[t][0],i=s+d*n-e[t][1],a=r*r+i*i;a>m&&(m=a,p=t)}p>=0&&(n[p]=1,r.push([i,p],[p,a]))}return e.filter((e,t)=>n[t])}function nd(e,t,n,r,i,a,o,s,c,l,u,d){let f=e.v(t,a,n,l,0,u,d),p=e.v(r,o,i,l,0,u,d),m=e.v(r,c,i,l,0,u,d),h=e.v(t,s,n,l,0,u,d);(i-n)*l-(r-t)*u>=0?e.idx.push(f,m,p,f,h,m):e.idx.push(f,p,m,f,m,h)}function rd(e,t,n,r){let i=ed(e.shoreSegments()),a=new vl,o=new q(Z.lightBluishGray),s=new q(Z.white),c=.48,l=.4,u=0;for(let d of i)for(let i=0;i+1<d.length;i++){let[f,p]=d[i],[m,h]=d[i+1],g=m-f,_=h-p,v=Math.hypot(g,_);if(v<.01)continue;let y=_/v,b=-g/v,x=(f+m)/2,S=(p+h)/2;e.waterAt(x+y*.8,S+b*.8)<e.waterAt(x-y*.8,S-b*.8)&&(y=-y,b=-b);let C=!1;for(let e of[.6,1.5,3])if(n.heightAt(x+y*e,S+b*e)>-1/0){C=!0;break}let w=t.heightAt(f-y*.5,p-b*.5),T=t.heightAt(m-y*.5,h-b*.5),E=w+(C?.03:c),D=T+(C?.03:c);nd(a,f,p,m,h,-1.6,-1.6,E,D,y,b,o);let O=-y*l,k=-b*l,A=a.v(f,E,p,0,1,0,s),ee=a.v(m,D,h,0,1,0,s),j=a.v(m+O,D,h+k,0,1,0,s),te=a.v(f+O,E,p+k,0,1,0,s);(m-f)*k-(h-p)*O<0?a.idx.push(A,ee,j,A,j,te):a.idx.push(A,j,ee,A,te,j),C||(nd(a,f+O,p+k,m+O,h+k,w-.2,T-.2,E,D,-y,-b,s),r.add(f+O,p+k,m+O,h+k,Math.max(E,D),2),u++)}let d=new J(a.toGeometry(),gl({studs:!0,seams:!0}));return d.receiveShadow=!0,d.castShadow=!1,d.name=`quays`,{mesh:d,curbCount:u,lines:i.length}}function id(e,t){let n=new vl,r=new vl,i=new q(4171721),a=new q(Z.lightBluishGray);for(let o of e.areas.pond){let e=o[0],s=e.length/2;if(s<3)continue;let c=0,l=0;for(let t=0;t<e.length;t+=2)c+=e[t],l+=e[t+1];c/=s,l/=s;let u=1/0;for(let n=0;n<e.length;n+=2)u=Math.min(u,t.heightAt(e[n],e[n+1]));u+=.12;let d=Hl(e,[]),f=n.count;for(let t=0;t<e.length;t+=2)n.v(e[t],u,e[t+1],0,1,0,i);for(let t=0;t<d.length;t+=3){let r=d[t],i=d[t+1],a=d[t+2];(e[i*2+1]-e[r*2+1])*(e[a*2]-e[r*2])-(e[i*2]-e[r*2])*(e[a*2+1]-e[r*2+1])>=0?n.tri(f+r,f+i,f+a):n.tri(f+r,f+a,f+i)}for(let t=0;t<s;t++){let n=e[t*2],i=e[t*2+1],o=e[(t+1)%s*2],c=e[(t+1)%s*2+1],l=Math.hypot(o-n,c-i);if(l<.01)continue;let d=(c-i)/l,f=-(o-n)/l,p=r.v(n,u-.4,i,d,0,f,a),m=r.v(o,u-.4,c,d,0,f,a),h=r.v(o,u+.3,c,d,0,f,a),g=r.v(n,u+.3,i,d,0,f,a);r.idx.push(p,h,m,p,g,h,p,m,h,p,h,g)}}let o=new on;if(!n.empty){let e=new J(n.toGeometry(),new Li({vertexColors:!0,roughness:.05,metalness:.1,envMapIntensity:1.2}));e.receiveShadow=!0,o.add(e)}if(!r.empty){let e=new J(r.toGeometry(),gl({studs:!1,seams:!0}));e.receiveShadow=!0,o.add(e)}return o}function ad(e){let[t,n]=e.c,[r,i]=e.a,[a,o]=e.t,[s,c]=e.h,l=o-a||1;return(e,o)=>{let u=((e-t)*r+(o-n)*i-a)/l;return u=u<0?0:u>1?1:u,s+(c-s)*u}}function od(e,t,n,r){let i=[],a=e.length/2;for(let r=0;r<a;r++){let o=e[r*2],s=e[r*2+1],c=e[(r+1)%a*2],l=e[(r+1)%a*2+1],u=Math.hypot(c-o,l-s),d=Math.max(1,Math.ceil(u/3));for(let e=0;e<d;e++){let r=o+(c-o)*e/d,a=s+(l-s)*e/d;for(let[e,o]of[[0,0],[2.5,0],[-2.5,0],[0,2.5],[0,-2.5]])if(n.waterAt(r+e,a+o)<.2){i.push(r,a,t.heightAt(r+e,a+o)+.04);break}}}if(!i.length)return r;let o=1/14**4;return(e,t)=>{let n=o,a=o*r(e,t);for(let r=0;r<i.length;r+=3){let o=e-i[r],s=t-i[r+1],c=o*o+s*s;if(c<.04)return Math.max(1,i[r+2]);let l=1/(c*c);n+=l,a+=l*i[r+2]}return Math.max(1,a/n)}}function sd(e,t){let n=e.length/2,r=[],i=[];for(let a=0;a<n;a++){let o=e[a*2],s=e[a*2+1],c=0,l=0;if(a>0){let t=o-e[a*2-2],n=s-e[a*2-1],r=Math.hypot(t,n)||1;c+=t/r,l+=n/r}if(a<n-1){let t=e[a*2+2]-o,n=e[a*2+3]-s,r=Math.hypot(t,n)||1;c+=t/r,l+=n/r}let u=Math.hypot(c,l)||1;c/=u,l/=u;let d=l,f=-c,p=1;if(a>0&&a<n-1){let t=o-e[a*2-2],n=s-e[a*2-1],r=Math.hypot(t,n)||1,i=n/r*d-t/r*f;p=Math.min(2,1/Math.max(.5,Math.abs(i)))}let m=t/2*p;r.push([o-d*m,s-f*m]),i.push([o+d*m,s+f*m])}return{L:r,R:i}}function cd(e,t,n,r,i,a){let o=new vl,s=new vl,c=new q(Z.lightBluishGray),l=new q(Z.darkTan),u=new q(Z.white),d=new q(Z.darkBluishGray),f=[],p=(e,t,i,a)=>{let c=e.length/2,l=Hl(e,[]),u=o.count;for(let n=0;n<e.length;n+=2)o.v(e[n],t(e[n],e[n+1]),e[n+1],0,1,0,i);for(let t=0;t<l.length;t+=3){let n=l[t],r=l[t+1],i=l[t+2];(e[r*2+1]-e[n*2+1])*(e[i*2]-e[n*2])-(e[r*2]-e[n*2])*(e[i*2+1]-e[n*2+1])>=0?o.tri(u+n,u+r,u+i):o.tri(u+n,u+i,u+r)}let d=0;for(let t=0,n=c-1;t<c;n=t++)d+=(e[n*2]-e[t*2])*(e[n*2+1]+e[t*2+1]);let p=d>=0?1:-1;for(let o=0;o<c;o++){let l=e[o*2],u=e[o*2+1],d=e[(o+1)%c*2],m=e[(o+1)%c*2+1],h=Math.hypot(d-l,m-u);if(h<.01)continue;let g=p*(m-u)/h,_=-p*(d-l)/h,v=t(l,u),y=t(d,m);nd(s,l,u,d,m,v-1.1,y-1.1,v,y,g,_,i);let b=(l+d)/2+g*.6,x=(u+m)/2+_*.6;a&&n.isWater(b,x)&&r.heightAt(b,x)===-1/0&&f.push([l-g*.25,u-_*.25,v,d-g*.25,m-_*.25,y])}},m=(e,t,i,a,c)=>{let{L:l,R:u}=sd(e,t),d=o.count;for(let e=0;e<l.length;e++)o.v(l[e][0],i(l[e][0],l[e][1]),l[e][1],0,1,0,a),o.v(u[e][0],i(u[e][0],u[e][1]),u[e][1],0,1,0,a);for(let e=0;e+1<l.length;e++){let t=d+e*2,n=t+1,r=t+3,i=t+2,a=u[e][0]-l[e][0],s=u[e][1]-l[e][1],c=l[e+1][0]-l[e][0],f=l[e+1][1]-l[e][1];s*c-a*f>=0?o.idx.push(t,n,r,t,r,i):o.idx.push(t,r,n,t,i,r)}for(let t of[l,u])for(let o=0;o+1<t.length;o++){let[l,u]=t[o],[d,p]=t[o+1],m=d-l,h=p-u,g=Math.hypot(m,h)||1,_=(e[o*2]+e[o*2+2])/2,v=(e[o*2+1]+e[o*2+3])/2,y=h/g,b=-m/g;y*((l+d)/2-_)+b*((u+p)/2-v)<0&&(y=-y,b=-b);let x=i(l,u),S=i(d,p);nd(s,l,u,d,p,x-1,S-1,x,S,y,b,a);let C=(l+d)/2+y*.6,w=(u+p)/2+b*.6;c&&n.isWater(C,w)&&r.heightAt(C,w)===-1/0&&f.push([l-y*.25,u-b*.25,x,d-y*.25,p-b*.25,S])}},h=(e,t)=>{let{L:n,R:r}=sd(e,t);return[...n,...r.reverse()].flat()},g=e.bridges.map(e=>od(e.r[0],t,n,ad(e))),_=e.piers.map(e=>od(e.r[0],t,n,ad(e))),v=e.pierLines.map(e=>od(h(e.p,e.w),t,n,ad(e))),y=e.roadDecks.map(e=>od(h(e.p,e.w),t,n,ad(e)));e.bridges.forEach((e,t)=>r.addPolygon(e.r[0],g[t],1)),e.piers.forEach((e,t)=>r.addPolygon(e.r[0],_[t],2)),e.pierLines.forEach((e,t)=>r.addLine(e.p,e.w,v[t],2)),e.roadDecks.forEach((e,t)=>r.addLine(e.p,e.w,y[t],1)),e.bridges.forEach((e,t)=>p(e.r[0],g[t],c,!0)),e.piers.forEach((e,t)=>p(e.r[0],_[t],l,!1)),e.pierLines.forEach((e,t)=>m(e.p,e.w,v[t],l,!1)),e.roadDecks.forEach((e,t)=>m(e.p,e.w,y[t],c,!0));let b=new vl;for(let[e,t,n,r,a,o]of f){let s=Math.hypot(r-e,a-t);if(s<.05)continue;let c=(r-e)/s,l=(a-t)/s*.07,f=-c*.07,p=(i,s)=>{let c=[[e+l,n+i,t+f],[r+l,o+i,a+f],[r-l,o+i,a-f],[e-l,n+i,t-f]];for(let[e,t]of[[s,1],[0,-1]]){let n=b.v(c[0][0],c[0][1]+e,c[0][2],0,t,0,u),r=b.v(c[1][0],c[1][1]+e,c[1][2],0,t,0,u),i=b.v(c[2][0],c[2][1]+e,c[2][2],0,t,0,u),a=b.v(c[3][0],c[3][1]+e,c[3][2],0,t,0,u);b.idx.push(n,r,i,n,i,a,n,i,r,n,a,i)}for(let c of[1,-1])nd(b,e+l*c,t+f*c,r+l*c,a+f*c,n+i,o+i,n+i+s,o+i+s,l*c/.07,f*c/.07,u)};p(.95,.16),p(.5,.1);let m=Math.max(1,Math.round(s/1.6));for(let i=0;i<=m;i++){let s=i/m,c=e+(r-e)*s,l=t+(a-t)*s,u=n+(o-n)*s;b.box(c-.08,u,l-.08,c+.08,u+1.12,l+.08,d)}i.add(e,t,r,a,Math.max(n,o)+1.1,3)}let x=new on;if(x.name=`decks`,!o.empty){let e=new J(o.toGeometry(),a);e.receiveShadow=!0,x.add(e)}let S=gl({studs:!0,seams:!0});if(!s.empty){let e=new J(s.toGeometry(),S);e.receiveShadow=!0,e.castShadow=!0,x.add(e)}if(!b.empty){let e=new J(b.toGeometry(),gl({studs:!0,seams:!1}));e.castShadow=!0,x.add(e)}return{group:x,railings:f}}var ld=()=>new Promise(e=>requestAnimationFrame(()=>e())),ud=class{constructor(e,t,n,r){this.map=e,this.renderer=t,this.scene=n,this.rng=r,this.bounds=e.bounds,this.play=e.play,this.group=new on,this.group.name=`world`,n.add(this.group)}async build(e=()=>{}){let{map:t}=this,n=performance.now(),r=async(t,n)=>{e(t,n),await ld()};await r(`Shaping the terrain`,.05),this.terrain=new Ml(t.terrain),this.segments=new Fl(this.bounds),this.circles=new Il(this.bounds),this.decks=new Rl(this.bounds),await r(`Laying the baseplates`,.12),this.surface=new Nl(t,1);let i=this.surface.textures(this.renderer);this.surfaceTextures=i;let a={lgSurfA:{value:i.a},lgSurfB:{value:i.b},lgSurfRect:{value:this.surface.rect()},lgColSidewalk:{value:new q(Z.lightBluishGray).multiplyScalar(1.02)},lgColAsphalt:{value:new q(5790295)},lgColGrass:{value:new q(4033599)},lgColPaving:{value:new q(14271642)},lgColBallast:{value:new q(9142126)},lgColSand:{value:new q(15653800)}};this.groundMaterial=gl({ground:!0,studs:!0,discardWater:!0,uniforms:a,roughness:.6}),this.deckMaterial=gl({ground:!0,studs:!0,uniforms:a,roughness:.6}),this.group.add(this.terrain.buildMesh(this.groundMaterial)),await r(`Building bridges`,.3);let o=cd(t,this.terrain,this.surface,this.decks,this.segments,this.deckMaterial);this.group.add(o.group),this.ground=new zl(this.terrain,this.surface,this.decks),await r(`Filling the lake`,.38),this.water=$u(this.surface,i.b),this.group.add(this.water);let s=rd(this.surface,this.terrain,this.decks,this.segments);this.group.add(s.mesh),this.group.add(id(t,this.terrain)),await r(`Stacking 6,700 buildings`,.5);let c=Yu(t,this.segments,{skip:new Set([`cathedral`,`monument_national`])});this.buildingMaterial=c.material,this.group.add(c.group);let l=Xu(t,this.terrain);l&&this.group.add(l),await r(`Painting the sky`,.7),this.sky=Sl(),this.scene.add(this.sky),this.mountains=Ol(),this.scene.add(this.mountains),this.clouds=kl(this.bounds,this.rng),this.scene.add(this.clouds);let u=this.play;this.segments.add(u.minX,u.minZ,u.maxX,u.minZ,1/0,9),this.segments.add(u.maxX,u.minZ,u.maxX,u.maxZ,1/0,9),this.segments.add(u.maxX,u.maxZ,u.minX,u.maxZ,1/0,9),this.segments.add(u.minX,u.maxZ,u.minX,u.minZ,1/0,9),this.buildTime=performance.now()-n}finalize(){this.segments.finalize()}update(e,t){this.sky.position.copy(t.position),this.mountains.position.set(t.position.x,0,t.position.z),this.clouds.position.x+=e*1.6,this.clouds.position.z+=e*.6}};function dd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new lr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=fd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=fd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function fd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Jn(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var pd=new W,md=new W,hd=new W,gd=new Map;function _d(e){if(e instanceof q)return e;let t=gd.get(e);return t||gd.set(e,t=new q(e)),t}var Q=class extends vl{face(e,t,n){let r=_d(n);pd.set(e[1][0]-e[0][0],e[1][1]-e[0][1],e[1][2]-e[0][2]),md.set(e[2][0]-e[0][0],e[2][1]-e[0][1],e[2][2]-e[0][2]),hd.crossVectors(pd,md);let i=hd.x*t[0]+hd.y*t[1]+hd.z*t[2]<0,a=e.map(e=>this.v(e[0],e[1],e[2],t[0],t[1],t[2],r));for(let e=1;e+1<a.length;e++)i?this.tri(a[0],a[e+1],a[e]):this.tri(a[0],a[e],a[e+1])}cube(e,t,n,r,i,a,o,s){this.box(Math.min(e,r),Math.min(t,i),Math.min(n,a),Math.max(e,r),Math.max(t,i),Math.max(n,a),_d(o),s)}brick(e,t,n,r,i,a,o,s=!1){this.cube(e-r/2,t,n-a/2,e+r/2,t+i,n+a/2,o),s&&this.studs(e-r/2,n-a/2,e+r/2,n+a/2,t+i,o)}studs(e,t,n,r,i,a,o=ol){let s=Math.max(1,Math.round((n-e)/o)),c=Math.max(1,Math.round((r-t)/o)),l=(n-e)/s,u=(r-t)/c,d=Math.min(l,u)*.3;for(let n=0;n<s;n++)for(let r=0;r<c;r++)this.cyl(e+(n+.5)*l,i,t+(r+.5)*u,d,d*.6,a,8)}cyl(e,t,n,r,i,a,o=12,{bottom:s=!1,top:c=!0,r2:l=r}={}){let u=_d(a),d=this.count;for(let a=0;a<=o;a++){let s=a/o*Math.PI*2,c=Math.sin(s),d=Math.cos(s),f=(r-l)/i,p=Math.hypot(1,f);this.v(e+c*r,t,n+d*r,c/p,f/p,d/p,u),this.v(e+c*l,t+i,n+d*l,c/p,f/p,d/p,u)}for(let e=0;e<o;e++){let t=d+e*2;this.idx.push(t,t+2,t+1,t+1,t+2,t+3)}if(c&&l>0){let r=this.v(e,t+i,n,0,1,0,u),a=this.count;for(let r=0;r<=o;r++){let a=r/o*Math.PI*2;this.v(e+Math.sin(a)*l,t+i,n+Math.cos(a)*l,0,1,0,u)}for(let e=0;e<o;e++)this.tri(r,a+e,a+e+1)}if(s){let i=this.v(e,t,n,0,-1,0,u),a=this.count;for(let i=0;i<=o;i++){let a=i/o*Math.PI*2;this.v(e+Math.sin(a)*r,t,n+Math.cos(a)*r,0,-1,0,u)}for(let e=0;e<o;e++)this.tri(i,a+e+1,a+e)}}cylX(e,t,n,r,i,a,o=14){let s=_d(a),c=this.count;for(let a=0;a<=o;a++){let c=a/o*Math.PI*2,l=Math.sin(c),u=Math.cos(c);this.v(e,n+u*i,r+l*i,0,u,l,s),this.v(t,n+u*i,r+l*i,0,u,l,s)}for(let e=0;e<o;e++){let t=c+e*2;this.idx.push(t,t+2,t+1,t+1,t+2,t+3)}for(let[a,c]of[[e,-1],[t,1]]){let e=this.v(a,n,r,c,0,0,s),t=this.count;for(let e=0;e<=o;e++){let t=e/o*Math.PI*2;this.v(a,n+Math.cos(t)*i,r+Math.sin(t)*i,c,0,0,s)}for(let n=0;n<o;n++)c>0?this.tri(e,t+n,t+n+1):this.tri(e,t+n+1,t+n)}}prismX(e,t,n,r){this.#e(e,r,(e,t,n)=>[n,t,e],t,n,[1,0,0])}prismZ(e,t,n,r){this.#e(e,r,(e,t,n)=>[e,t,n],t,n,[0,0,1])}prismY(e,t,n,r){this.#e(e,r,(e,t,n)=>[e,n,t],t,n,[0,1,0])}#e(e,t,n,r,i,a){let o=e.length,s=0;for(let t=0,n=o-1;t<o;n=t++)s+=(e[n][0]-e[t][0])*(e[n][1]+e[t][1]);let c=s>0;for(let a=0;a<o;a++){let s=e[a],l=e[(a+1)%o],u=l[0]-s[0],d=l[1]-s[1],f=Math.hypot(u,d)||1,p=d/f,m=-u/f;c||(p=-p,m=-m);let h=n(p,m,0);this.face([n(s[0],s[1],r),n(l[0],l[1],r),n(l[0],l[1],i),n(s[0],s[1],i)],h,t)}let l=Hl(e.flat(),[]);for(let[o,s]of[[r,-1],[i,1]]){let r=a.map(e=>e*s);for(let i=0;i<l.length;i+=3)this.face([0,1,2].map(t=>n(e[l[i+t]][0],e[l[i+t]][1],o)),r,t)}}pyramid(e,t,n,r,i,a,o){let s=[(e+n)/2,a,(t+r)/2],c=[[e,t],[n,t],[n,r],[e,r]];for(let e=0;e<4;e++){let t=[c[e][0],i,c[e][1]],n=[c[(e+1)%4][0],i,c[(e+1)%4][1]];pd.set(n[0]-t[0],0,n[2]-t[2]),md.set(s[0]-t[0],s[1]-t[1],s[2]-t[2]),hd.crossVectors(pd,md).normalize(),hd.y<0&&hd.negate(),this.face([t,n,s],[hd.x,hd.y,hd.z],o)}}cone(e,t,n,r,i,a,o=10){this.cyl(e,t,n,r,i,a,o,{r2:1e-4,top:!1,bottom:!0})}toMesh(e){let t=new J(this.toGeometry(),e);return t.castShadow=!0,t.receiveShadow=!0,t}},$=.05;function vd(e){let t=document.createElement(`canvas`);t.width=512,t.height=128;let n=t.getContext(`2d`);if(n.fillStyle=`#fff`,n.fillRect(0,0,512,128),n.fillStyle=`#1b1b1b`,n.strokeStyle=`#1b1b1b`,n.lineCap=`round`,e===`scared`){for(let e of[-26,26])n.beginPath(),n.ellipse(256+e,54,9,11,0,0,Math.PI*2),n.fill();n.beginPath(),n.ellipse(256,92,13,15,0,0,Math.PI*2),n.fill(),n.lineWidth=4;for(let e of[-1,1])n.beginPath(),n.moveTo(256+e*16,34),n.lineTo(256+e*38,30),n.stroke()}else{for(let e of[-26,26])n.beginPath(),n.ellipse(256+e,56,8,10,0,0,Math.PI*2),n.fill(),n.fillStyle=`#fff`,n.beginPath(),n.arc(256+e+3,52,3,0,Math.PI*2),n.fill(),n.fillStyle=`#1b1b1b`;n.lineWidth=6,n.beginPath(),n.arc(256,70,30,.18*Math.PI,.82*Math.PI),n.stroke(),n.lineWidth=4;for(let e of[-1,1])n.beginPath(),n.moveTo(256+e*16,36),n.lineTo(256+e*36,38),n.stroke()}let r=new hi(t);return r.colorSpace=Le,r.anisotropy=4,r}function yd(){let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`);t.fillStyle=`#fff`,t.fillRect(0,0,128,128),t.fillStyle=`#d4d4d4`,t.beginPath(),t.moveTo(52,0),t.lineTo(64,40),t.lineTo(76,0),t.fill(),t.strokeStyle=`#8a8a8a`,t.lineWidth=3,t.beginPath(),t.moveTo(64,40),t.lineTo(64,128),t.stroke(),t.fillStyle=`#7a7a7a`;for(let e of[62,86,110])t.beginPath(),t.arc(71,e,3.5,0,Math.PI*2),t.fill();let n=new hi(e);return n.colorSpace=Le,n}function bd(e,t=.02,n=.98){let r=e.attributes.position.count,i=new Float32Array(r*2);for(let e=0;e<r;e++)i[e*2]=t,i[e*2+1]=n;return e.setAttribute(`uv`,new Jn(i,2)),e}function xd(e){let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))[`position`,`normal`,`uv`].includes(e)||t.deleteAttribute(e);return t}function Sd(){let e=new q(1,1,1),t={},n=new Q;n.cube(-7.8*$,-1.6*$,-4*$,7.8*$,1.6*$,4*$,e),t.hips=bd(xd(n.toGeometry()));for(let r of[`L`,`R`])n=new Q,n.cube(-3.8*$,-12.8*$,-4*$,3.8*$,-.6*$,4*$,e),n.cube(-3.8*$,-12.8*$,-5.2*$,3.8*$,-10.5*$,-4*$,e),t[`leg`+r]=bd(xd(n.toGeometry()));n=new Q,n.prismZ([[-7.8*$,0],[7.8*$,0],[6*$,12.8*$],[-6*$,12.8*$]],-4*$,4*$,e);let r=xd(n.toGeometry());{let e=r.attributes.position,t=r.attributes.normal,n=new Float32Array(e.count*2);for(let r=0;r<e.count;r++)t.getZ(r)<-.9?(n[r*2]=.5-e.getX(r)/(16*$),n[r*2+1]=e.getY(r)/(12.8*$)):(n[r*2]=.02,n[r*2+1]=.98);r.setAttribute(`uv`,new Jn(n,2))}t.torso=r;for(let[r,i]of[[`L`,-1],[`R`,1]])n=new Q,n.cube(i*.6*$-1.9*$,-9.5*$,-1.9*$,i*.6*$+1.9*$,1.2*$,1.9*$,e),t[`arm`+r]=bd(xd(n.toGeometry()));n=new Q,n.cyl(0,-3.2*$,0,1.8*$,3.2*$,e,10,{bottom:!0}),t.hand=bd(xd(n.toGeometry()));let i=new xi(4.8*$,4.8*$,8.8*$,24,1,!0);i.translate(0,.28,0),n=new Q,n.cyl(0,10*$,0,4.8*$,.001,e,24,{top:!0}),n.cyl(0,10*$,0,3*$,1.7*$,e,16),n.cyl(0,0,0,3*$,1.2*$,e,12);let a=bd(xd(n.toGeometry()),.02,.02);return t.head=dd([xd(i),a]),n=new Q,n.cyl(0,6.2*$,0,5.3*$,4.2*$,e,20,{r2:4.3*$}),n.cube(-5.2*$,2.6*$,.5*$,5.2*$,8*$,5.4*$,e),t.hairShort=bd(xd(n.toGeometry())),n=new Q,n.cyl(0,6*$,0,5.4*$,4.6*$,e,20,{r2:4.4*$}),n.cube(-5.6*$,-2.5*$,-.5*$,5.6*$,8*$,5.6*$,e),t.hairLong=bd(xd(n.toGeometry())),n=new Q,n.cyl(0,8.5*$,0,5.2*$,3.4*$,e,20,{r2:4.8*$}),n.cube(-4*$,8.5*$,-9.5*$,4*$,9.3*$,-3*$,e),t.cap=bd(xd(n.toGeometry())),n=new Q,n.cyl(0,8.5*$,0,7.5*$,.8*$,e,20),n.cyl(0,9.3*$,0,4.9*$,5.5*$,e,20),t.topHat=bd(xd(n.toGeometry())),t}var Cd=[`hairShort`,`hairLong`,`cap`,`topHat`],wd=class{constructor(e,t,n){this.sys=e,this.slot=t,this.pos=new W,this.yaw=0,this.pitch=0,this.roll=0,this.scale=1,this.legL=0,this.legR=0,this.armL=0,this.armR=0,this.armLz=.08,this.armRz=.08,this.handL=0,this.handR=0,this.headYaw=0,this.scared=!1,this.visible=!0,this.parent=null,this.colors=n,e.paint(this)}pose(e,t=0){if(this.pitch=0,this.roll=0,this.armLz=.08,this.armRz=.08,this.headYaw=0,e===`stand`)this.legL=this.legR=0,this.armL=.05+Math.sin(t*1.3)*.03,this.armR=.05+Math.sin(t*1.3+1)*.03;else if(e===`walk`||e===`run`){let n=e===`run`?.85:.5,r=Math.sin(t);this.legL=r*n,this.legR=-r*n,this.armL=-r*n*.8,this.armR=r*n*.8}else e===`wave`?(this.legL=this.legR=0,this.armL=.05,this.armR=2.7,this.armRz=.25+Math.sin(t*9)*.35,this.handR=.4):e===`cheer`?(this.legL=this.legR=0,this.armL=2.8+Math.sin(t*10)*.2,this.armR=2.8+Math.sin(t*10+1.5)*.2,this.armLz=this.armRz=.35):e===`sit`?(this.legL=this.legR=Math.PI/2,this.armL=this.armR=.9):e===`drive`?(this.legL=this.legR=Math.PI/2,this.armL=this.armR=1.25,this.armLz=this.armRz=-.12):e===`dive`?(this.legL=.3,this.legR=-.3,this.armL=this.armR=2.9):e===`swim`?(this.legL=Math.sin(t*6)*.4,this.legR=-this.legL,this.armL=2.6+Math.sin(t*3)*.6,this.armR=2.6-Math.sin(t*3)*.6):e===`angry`&&(this.legL=this.legR=0,this.armL=1.3+Math.sin(t*14)*.4,this.armR=.2,this.armLz=-.3)}dispose(){this.sys.release(this)}},Td=class{constructor(e,t=160){this.capacity=t,this.geo=Sd(),this.figs=Array(t).fill(null);let n=vd(`happy`),r=vd(`scared`),i=gl({studs:!1,vertexColors:!1}),a=gl({studs:!1,vertexColors:!1,map:yd()}),o=gl({studs:!1,vertexColors:!1,map:n,roughness:.25}),s=gl({studs:!1,vertexColors:!1,map:r,roughness:.25});this.meshes={};let c=(n,r,i)=>{let a=new li(r,i,t);a.instanceMatrix.setUsage(He),a.frustumCulled=!1,a.castShadow=!0,a.receiveShadow=!0,a.setColorAt(0,new q(1,1,1));let o=new K().makeScale(0,0,0);for(let e=0;e<t;e++)a.setMatrixAt(e,o);a.count=0,a.name=`minifig-`+n,e.add(a),this.meshes[n]=a};c(`hips`,this.geo.hips,i),c(`legL`,this.geo.legL,i),c(`legR`,this.geo.legR,i),c(`torso`,this.geo.torso,a),c(`armL`,this.geo.armL,i),c(`armR`,this.geo.armR,i),c(`handL`,this.geo.hand,i),c(`handR`,this.geo.hand,i),c(`head`,this.geo.head,o),c(`headScared`,this.geo.head,s);for(let e of Cd)c(e,this.geo[e],i);this._m=new K,this._t=new K,this._q=new lt,this._e=new Vt,this._s=new W(1,1,1),this._zero=new K().makeScale(0,0,0)}create(e={}){let t=this.figs.indexOf(null);if(t<0)return null;let n=new wd(this,t,{skin:e.skin??Z.yellow,shirt:e.shirt??Z.red,pants:e.pants??Z.darkBlue,hair:e.hair??Z.reddishBrown,hairStyle:e.hairStyle??`hairShort`,arms:e.arms??e.shirt??Z.red});return this.figs[t]=n,n}release(e){this.figs[e.slot]===e&&(this.figs[e.slot]=null)}paint(e){let t=e.colors,n=e=>new q(e);e.partColors={hips:n(t.pants),legL:n(t.pants),legR:n(t.pants),torso:n(t.shirt),armL:n(t.arms),armR:n(t.arms),handL:n(t.skin),handR:n(t.skin),head:n(t.skin),headScared:n(t.skin),hair:n(t.hair)}}update(){let{_m:e,_t:t,_q:n,_e:r,_s:i}=this,a={};for(let e of Object.keys(this.meshes))a[e]=0;let o=(e,t,n)=>{let r=this.meshes[e],i=a[e]++;r.setMatrixAt(i,t),r.setColorAt(i,n)},s=new K,c=new K,l=new K,u=new K;for(let a of this.figs){if(!a||!a.visible)continue;let d=a.partColors;r.set(a.pitch,a.yaw,a.roll,`YXZ`),n.setFromEuler(r),s.compose(a.pos,n,i.set(a.scale,a.scale,a.scale)),a.parent&&s.premultiply(a.parent.matrixWorld),c.multiplyMatrices(s,t.makeTranslation(0,12.8*$,0)),o(`hips`,c,d.hips),e.multiplyMatrices(c,t.makeTranslation(-3.9*$,0,0)),e.multiply(t.makeRotationX(a.legL)),o(`legL`,e,d.legL),e.multiplyMatrices(c,t.makeTranslation(3.9*$,0,0)),e.multiply(t.makeRotationX(a.legR)),o(`legR`,e,d.legR),l.multiplyMatrices(c,t.makeTranslation(0,1.6*$,0)),o(`torso`,l,d.torso);for(let[n,r]of[[`L`,-1],[`R`,1]])u.multiplyMatrices(l,t.makeTranslation(r*6.4*$,10.6*$,0)),u.multiply(t.makeRotationZ(r*(n===`L`?a.armLz:a.armRz))),u.multiply(t.makeRotationX(n===`L`?a.armL:a.armR)),o(`arm`+n,u,d[`arm`+n]),e.multiplyMatrices(u,t.makeTranslation(r*.6*$,-9.2*$,-1.4*$)),e.multiply(t.makeRotationX(-.6+(n===`L`?a.handL:a.handR))),o(`hand`+n,e,d[`hand`+n]);e.multiplyMatrices(l,t.makeTranslation(0,12.8*$,0)),e.multiply(t.makeRotationY(a.headYaw)),o(a.scared?`headScared`:`head`,e,d.head),Cd.includes(a.colors.hairStyle)&&o(a.colors.hairStyle,e,d.hair)}for(let[e,t]of Object.entries(this.meshes))t.count=a[e],t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}},Ed={up:[`ArrowUp`,`KeyW`,`KeyZ`],down:[`ArrowDown`,`KeyS`],left:[`ArrowLeft`,`KeyA`,`KeyQ`],right:[`ArrowRight`,`KeyD`],handbrake:[`Space`],boost:[`ShiftLeft`,`ShiftRight`]},Dd=[[0,`Enter`],[3,`KeyC`],[8,`KeyM`],[9,`Escape`],[12,`ArrowUp`],[13,`ArrowDown`]],Od=class{constructor(e=window){this.down=new Set,this.pressed=new Set,this.steer=0,this.touch={left:!1,right:!1,gas:!1,brake:!1,drift:!1,boost:!1},this.enabled=!0,this.pad={steer:null,throttle:0,brake:0,handbrake:!1,boost:!1},this.padButtons=new Set,e.addEventListener(`keydown`,e=>{e.repeat||(this.down.add(e.code),this.pressed.add(e.code),[`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Tab`].includes(e.code)&&e.preventDefault())}),e.addEventListener(`keyup`,e=>this.down.delete(e.code)),e.addEventListener(`blur`,()=>this.down.clear())}any(e){return e.some(e=>this.down.has(e))}hit(e){return this.pressed.has(e)?(this.pressed.delete(e),!0):!1}beginFrame(){let e=this.pad;e.steer=null,e.throttle=e.brake=0,e.handbrake=e.boost=!1;let t=navigator.getGamepads?navigator.getGamepads():[];for(let n of t){if(!n||!n.connected)continue;let t=n.axes[0]||0;Math.abs(t)>.12&&(e.steer=-t),e.throttle=Math.max(e.throttle,n.buttons[7]?.value||0),e.brake=Math.max(e.brake,n.buttons[6]?.value||0),(n.buttons[1]?.pressed||n.buttons[5]?.pressed)&&(e.handbrake=!0),(n.buttons[2]?.pressed||n.buttons[4]?.pressed)&&(e.boost=!0);for(let[e,t]of Dd){let r=n.index*100+e,i=!!n.buttons[e]?.pressed,a=this.padButtons.has(r);i&&!a?(this.pressed.add(t),this.padButtons.add(r)):!i&&a&&this.padButtons.delete(r)}}}poll(e){let t=this.pad,n=Math.max(this.any(Ed.up)||this.touch.gas?1:0,t.throttle),r=Math.max(this.any(Ed.down)||this.touch.brake?1:0,t.brake),i=(this.any(Ed.left)||this.touch.left?1:0)-(this.any(Ed.right)||this.touch.right?1:0),a=this.any(Ed.handbrake)||this.touch.drift||t.handbrake,o=this.any(Ed.boost)||this.touch.boost||t.boost;if(t.steer!==null)this.steer=t.steer;else{let t=i===0?7:Math.sign(i)===Math.sign(this.steer)?4.2:9,n=i-this.steer;this.steer+=Math.sign(n)*Math.min(Math.abs(n),t*e)}return this.enabled?{throttle:n,brake:r,steer:this.steer,handbrake:a,boost:o}:{throttle:0,brake:0,steer:0,handbrake:!1,boost:!1}}endFrame(){this.pressed.clear()}},kd=16711935;function Ad(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`),e,t);let i=new hi(r);return i.colorSpace=Le,i.anisotropy=4,i}function jd(e){return Ad(256,64,(t,n,r)=>{t.fillStyle=`#f7f7f2`,t.fillRect(0,0,n,r),t.strokeStyle=`#111`,t.lineWidth=6,t.strokeRect(3,3,n-6,r-6),t.fillStyle=`#d52b1e`,t.fillRect(12,14,30,36),t.fillStyle=`#fff`,t.fillRect(23,19,8,26),t.fillRect(15,28,24,8),t.fillStyle=`#f2cd37`,t.fillRect(n-42,14,15,36),t.fillStyle=`#c91a09`,t.fillRect(n-27,14,15,36),t.fillStyle=`#111`,t.font=`bold 38px Arial, Helvetica, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(e,n/2,r/2+2)})}function Md(){return Ad(256,96,(e,t,n)=>{e.fillStyle=`#fff6c8`,e.fillRect(0,0,t,n),e.fillStyle=`#1b1b1b`,e.font=`900 64px "Arial Black", Arial, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`TAXI`,t/2,n/2+4),e.fillStyle=`#1b1b1b`;for(let t=0;t<16;t++)e.fillRect(t*16,t%2?0:4,8,4);for(let t=0;t<16;t++)e.fillRect(t*16+8,n-8+(t%2?0:4),8,4)})}function Nd(e=.44,t=.34){let n=new Q;n.cylX(-t/2,t/2,0,0,e,Z.black,18),n.cylX(-t/2-.02,t/2+.02,0,0,e*.58,Z.lightBluishGray,14),n.cylX(-t/2-.04,t/2+.04,0,0,e*.22,Z.darkBluishGray,10);for(let r=0;r<9;r++){let i=r/9*Math.PI*2,a=Math.cos(i)*e,o=Math.sin(i)*e,s=new K().makeRotationX(-i),c=new Q;c.cube(-t/2+.03,-.04,-.06,t/2-.03,.03,.06,Z.darkBluishGray);let l=c.toGeometry();l.applyMatrix4(s),l.translate(0,a,o);let u=l.attributes.position,d=l.attributes.normal,f=l.attributes.color,p=n.count;for(let e=0;e<u.count;e++)n.v(u.getX(e),u.getY(e),u.getZ(e),d.getX(e),d.getY(e),d.getZ(e),new q(f.getX(e),f.getY(e),f.getZ(e)));for(let e=0;e<l.index.count;e++)n.idx.push(p+l.index.getX(e))}return n.toGeometry()}function Pd(){let e=Z.yellow,t=Z.black,n=Z.darkBluishGray,r=Z.lightBluishGray,i=Z.white,a=new Q,o=1.5;a.cube(-1.1,.36,-2.36,1.1,.54,2.36,n),a.cube(-1.2,.54,-2.42,1.2,1.02,-2,e),a.cube(-1.2,.54,-1,1.2,1.02,1,e),a.cube(-1.2,.54,2,1.2,1.02,2.42,e),a.cube(-.84,.54,-2,.84,1.02,-1,e),a.cube(-.84,.54,1,.84,1.02,2,e);for(let e of[-1.5,o])for(let n of[-1,1])a.cube(n*.84,.94,e-.52,n*1.24,1.06,e+.52,t);for(let e of[-1,1])for(let[n,r]of[[-.96,.96],[-2.4,-2.02],[2.02,2.4]]){let o=Math.round((r-n)/.24),s=(r-n)/o;for(let r=0;r<o;r++)for(let o=0;o<2;o++){let c=(r+o)%2?t:i,l=e*1.2,u=e*1.215;a.cube(l,.7+o*.12,n+r*s,u,.82+o*.12,n+(r+1)*s,c)}}a.cube(-1.2,1.02,-2.42,1.2,1.18,-1,e),a.studs(-1.2,-2.4,1.2,-1.6,1.18,e),a.cube(-1.2,1.02,1.6,1.2,1.18,2.42,e),a.studs(-1.2,1.62,1.2,2.42,1.18,e),a.cube(-1.05,1.02,-1,1.05,1.28,-.82,t);for(let t of[-1,1])a.prismX([[-1,1.18],[-.86,1.18],[-.3,2.16],[-.44,2.16]],t>0?1.02:-1.16,t>0?1.16:-1.02,e),a.cube(t*1.02,1.18,1.3,t*1.16,2.16,1.46,e),a.cube(t*1.02,1.02,.15,t*1.2,1.32,.95,e);a.cube(-1.16,2.16,-.46,1.16,2.32,1.46,e),a.studs(-1.16,-.46,1.16,.06,2.32,e),a.studs(-1.16,.86,1.16,1.46,2.32,e),a.cube(-.95,.54,-.35,-.15,.66,.12,t),a.cube(-.95,.66,.02,-.15,1.4,.16,t),a.cube(.15,.54,-.35,.95,.66,.12,t),a.cube(.15,.66,.02,.95,1.4,.16,t),a.cube(-.98,.54,.62,.98,.66,1.2,t),a.cube(-.98,.66,1.08,.98,1.42,1.22,t),a.cube(-.72,1.18,-.86,-.38,1.46,-.8,t),a.cyl(-.55,1.28,-.84,.05,.12,n,8),a.cube(-1.16,.46,-2.54,1.16,.64,-2.4,n),a.cube(-1.16,.46,2.4,1.16,.64,2.54,n),a.cube(-.5,.68,-2.44,.5,.96,-2.4,r);for(let e of[-1,1])a.cube(e*1.16,1.22,-.92,e*1.38,1.4,-.76,t);let s=a.toMesh(gl({studs:!1})),c=new Q;for(let e of[-1,1])c.cube(e*.62,.7,-2.45,e*1.02,.94,-2.41,i);let l=c.toMesh(new Li({color:16775392,emissive:16773568,emissiveIntensity:.6,roughness:.1})),u=new Q;for(let e of[-1,1])u.cube(e*.7,.72,2.41,e*1.1,.94,2.45,Z.transRed);let d=new Li({color:13179401,emissive:16719888,emissiveIntensity:.3,roughness:.15}),f=u.toMesh(d),p=new Q;p.face([[-1.02,1.18,-.93],[1.02,1.18,-.93],[1.02,2.16,-.37],[-1.02,2.16,-.37]],[0,.5,-.87],i),p.face([[-1.02,1.18,1.62],[1.02,1.18,1.62],[1.02,2.16,1.4],[-1.02,2.16,1.4]],[0,.22,.97],i);let m=new J(p.toGeometry(),_l(13625845,.35,{side:2,vertexColors:!1})),h=Md(),g=new Li({map:h,emissive:16771488,emissiveMap:h,emissiveIntensity:.9,roughness:.3}),_=new Li({color:Z.yellow,roughness:.3}),v=new J(new yi(1.1,.36,.4),[_,_,_,_,g,g]);v.position.set(0,2.52,.46),v.castShadow=!0;let y=new Li({map:jd(`GE 1898`),roughness:.4}),b=new J(new wi(.72,.18),y);b.position.set(0,.55,-2.555),b.rotation.y=Math.PI;let x=new J(new wi(.72,.18),y);x.position.set(0,.55,2.555);let S=Nd(),C=gl({studs:!1}),w=[],T=[];for(let[e,t]of[[-1,-1.5],[1,-1.5],[-1,o],[1,o]]){let n=new on;n.position.set(e*1.05,.44,t);let r=new J(S,C);r.castShadow=!0,n.add(r),w.push(r),t<0&&T.push(n),n.userData.wheel=r}let E=new on;E.name=`taxi`;let D=new on;D.add(s,l,f,m,v,b,x),E.add(D);for(let e of w)E.add(e.parent);return{root:E,chassis:D,wheels:w,steer:T,sign:v,signLit:g,tailMat:d,driverSeat:new W(-.55,.1,-.08),passengerSeat:new W(.45,.1,.92),setFree(e){g.emissiveIntensity=e?.9:0}}}function Fd(e){let t=new Q,n=Z.black,r=Z.darkBluishGray,i=Z.lightBluishGray,a=Z.white,o=2504778,s=kd,c=(e,r,a=.4)=>{t.cylX(e-.15,e+.15,a,r,a,n,12),t.cylX(e-.17,e+.17,a,r,a*.55,i,10)};if(e===`hatch`){t.cube(-1,.32,-2,1,.48,2,r),t.cube(-1,.48,-2.06,1,.96,2.06,s),t.cube(-1,.96,-2.06,1,1.08,-.9,s),t.studs(-1,-2,1,-1.2,1.08,s),t.prismX([[-.9,1.08],[-.5,1.8],[1.5,1.8],[1.9,.96],[-.9,.96]],-.96,.96,o),t.cube(-.98,1.8,-.55,.98,1.94,1.55,s),t.studs(-.98,-.55,.98,1.55,1.94,s);for(let e of[-.96,.96])for(let t of[-1.3,1.3])c(e,t);t.cube(-.9,.62,-2.1,-.5,.82,-2.05,a),t.cube(.5,.62,-2.1,.9,.82,-2.05,a),t.cube(-.95,.62,2.05,-.6,.82,2.1,Z.red),t.cube(.6,.62,2.05,.95,.82,2.1,Z.red)}else if(e===`sedan`){t.cube(-1.05,.32,-2.3,1.05,.48,2.3,r),t.cube(-1.05,.48,-2.36,1.05,.98,2.36,s),t.cube(-1.05,.98,-2.36,1.05,1.1,-1,s),t.cube(-1.05,.98,1.4,1.05,1.1,2.36,s),t.studs(-1.05,-2.3,1.05,-1.4,1.1,s),t.prismX([[-1,1.1],[-.45,1.78],[.9,1.78],[1.4,1.1]],-1,1,o),t.cube(-1,1.78,-.5,1,1.9,.95,s);for(let e of[-1,1])for(let t of[-1.45,1.45])c(e,t);t.cube(-.95,.66,-2.42,-.55,.86,-2.36,a),t.cube(.55,.66,-2.42,.95,.86,-2.36,a),t.cube(-1,.66,2.36,-.6,.86,2.42,Z.red),t.cube(.6,.66,2.36,1,.86,2.42,Z.red)}else if(e===`van`){t.cube(-1.1,.34,-2.5,1.1,.5,2.5,r),t.cube(-1.1,.5,-2.56,1.1,1.1,2.56,s),t.cube(-1.1,1.1,-1.6,1.1,2.4,2.56,s),t.prismX([[-2.56,1.1],[-1.6,2.2],[-1.6,1.1]],-1.1,1.1,o),t.cube(-1.1,2.4,-1.6,1.1,2.5,2.56,a),t.studs(-1.1,-1.6,1.1,2.56,2.5,a),t.cube(-1.12,1.4,-1.3,1.12,2,-.2,o);for(let e of[-1.04,1.04])for(let t of[-1.6,1.7])c(e,t,.44);t.cube(-1,.7,-2.62,-.6,.9,-2.56,a),t.cube(.6,.7,-2.62,1,.9,-2.56,a)}else if(e===`truck`){t.cube(-1.15,.36,-3.2,1.15,.56,3.2,r),t.cube(-1.15,.56,-3.26,1.15,2.3,-1.6,s),t.cube(-1.12,1.5,-3.3,1.12,2.1,-3.2,o),t.cube(-1.15,2.3,-3.26,1.15,2.42,-1.6,s),t.studs(-1.15,-3.26,1.15,-1.6,2.42,s),t.cube(-1.2,.56,-1.4,1.2,3.1,3.3,a),t.studs(-1.2,-1.4,1.2,3.3,3.1,a),t.cube(-1.21,1.2,-1.2,1.21,2.1,3.1,s);for(let e of[-1.08,1.08])for(let t of[-2.3,1.2,2.5])c(e,t,.46);t.cube(-1,.8,-3.32,-.6,1,-3.26,a),t.cube(.6,.8,-3.32,1,1,-3.26,a)}else if(e===`mini`){t.cube(-.9,.3,-1.7,.9,.46,1.7,r),t.cube(-.9,.46,-1.74,.9,.92,1.74,s),t.prismX([[-.9,.92],[-.55,1.56],[1.35,1.56],[1.6,.92]],-.86,.86,o),t.cube(-.88,1.56,-.6,.88,1.68,1.4,a),t.studs(-.88,-.6,.88,1.4,1.68,a),t.studs(-.9,-1.7,.9,-1,.92,s);for(let e of[-.86,.86])for(let t of[-1.1,1.15])c(e,t,.36);t.cube(-.8,.6,-1.8,-.45,.8,-1.74,a),t.cube(.45,.6,-1.8,.8,.8,-1.74,a)}return t.toGeometry()}var Id={hatch:{length:4.1,width:2,radius:1},sedan:{length:4.7,width:2.1,radius:1.05},van:{length:5.1,width:2.2,radius:1.1},truck:{length:6.6,width:2.4,radius:1.2},mini:{length:3.5,width:1.8,radius:.9}};function Ld(e,t=16){let n=gl({studs:!1,paint:!0}),r={},i=new K().makeScale(0,0,0);for(let a of Object.keys(Id)){let o=new li(Fd(a),n,t);o.instanceMatrix.setUsage(He),o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1;for(let e=0;e<t;e++)o.setMatrixAt(e,i),o.setColorAt(e,new q(1,1,1));o.name=`traffic-`+a,e.add(o),r[a]=o}return r}var Rd=9.81,zd={mass:1,inertia:2.3,maxSpeed:33,boostSpeed:45,accel:15,boostAccel:14,brake:30,reverseAccel:10,maxReverse:13,wheelBase:3,grip:26,driftGrip:10,steerLow:.62,steerHigh:.1,circleR:1.2,circleOffsets:[-1.25,0,1.25],halfLength:2.45,halfWidth:1.2},Bd=class{constructor(e,t=zd){this.world=e,this.p=t,this.x=0,this.y=0,this.z=0,this.vx=0,this.vy=0,this.vz=0,this.yaw=0,this.yawRate=0,this.pitch=0,this.roll=0,this.visPitch=0,this.visRoll=0,this.bodyPitchVel=0,this.bodyRollVel=0,this.steerVis=0,this.wheelSpin=0,this.airborne=!1,this.airTime=0,this.lastAirTime=0,this.inWater=!1,this.sinkTime=0,this.slip=0,this.drifting=!1,this.boost=1,this.boosting=!1,this.speed=0,this.fwdSpeed=0,this.groundKind=0,this.events=[],this.prevAccel=0,this.latAccel=0,this.frozen=!1,this._grad=[0,0]}place(e,t,n){this.x=e,this.z=t,this.yaw=Math.atan2(Math.sin(n),Math.cos(n)),this.vx=this.vy=this.vz=0,this.yawRate=0;let r=this.world.ground.heightAt(e,t);this.y=r===-1/0?1:r,this.airborne=!1,this.airTime=0,this.inWater=!1,this.sinkTime=0,this.pitch=this.roll=0,this.visPitch=this.visRoll=0,this.bodyPitchVel=this.bodyRollVel=0,this.steerVis=0,this.wheelSpin=0,this.prevAccel=0,this.latAccel=0,this.slip=0,this.boosting=!1,this.drifting=!1,this.speed=this.fwdSpeed=0}doorPoint(){let e=Math.cos(this.yaw),t=-Math.sin(this.yaw);return{x:this.x+e*2-this.fx*.9,y:this.y,z:this.z+t*2-this.fz*.9}}get fx(){return-Math.sin(this.yaw)}get fz(){return-Math.cos(this.yaw)}update(e,t){if(!(e>0))return;let n=Math.max(1,Math.ceil(e/(1/120))),r=e/n;for(let e=0;e<n;e++)this.step(r,t);this.speed=Math.hypot(this.vx,this.vz),this.fwdSpeed=this.vx*this.fx+this.vz*this.fz,this.visuals(e,t)}step(e,t){let n=this.p,r=this.world.ground;if(this.frozen){this.vx=this.vz=this.vy=0,this.yawRate=0,this.boosting=this.drifting=!1,this.slip=0;return}let i=-Math.sin(this.yaw),a=-Math.cos(this.yaw),o=Math.cos(this.yaw),s=-Math.sin(this.yaw),c=this.vx*i+this.vz*a,l=this.vx*o+this.vz*s,u=this.inWater?0:t.throttle,d=this.inWater?0:t.brake,f=!this.airborne;if(this.boosting=t.boost&&this.boost>.02&&f&&u>0,this.boost=this.boosting?Math.max(0,this.boost-e*.28):Math.min(1,this.boost+e*.06),f&&!this.inWater){let r=this.boosting?n.boostSpeed:n.maxSpeed,o=0;if(u>0){if(c<-.5)o+=n.brake*u;else{let e=Math.max(0,c)/r;o+=u*(n.accel*Math.max(0,1-e*e)+(this.boosting?n.boostAccel*Math.max(0,1-e):0))}}d>0&&(o-=c>.5?n.brake*d:d*n.reverseAccel*Math.max(0,1-Math.max(0,-c)/n.maxReverse)),u===0&&d===0&&(o-=Math.sign(c)*Math.min(Math.abs(c)/e,2.6)),o-=c*.04+c*Math.abs(c)*.0025,this.world.terrain.gradientAt(this.x,this.z,this._grad),this.groundKind===0&&(o-=Rd*(this._grad[0]*i+this._grad[1]*a)*.9),c+=o*e,t.handbrake&&(c-=Math.sign(c)*Math.min(Math.abs(c),(u>0?1.2:3.5)*e));let s=Math.abs(c),f=Math.min(1,s/32),p=n.steerLow+(n.steerHigh-n.steerLow)*Math.sqrt(f),m=c*Math.tan(t.steer*p)/n.wheelBase;t.handbrake&&s>6&&(m*=1.32),m=Math.max(-2.8,Math.min(2.8,m)),this.yawRate+=(m-this.yawRate)*(1-Math.exp(-9*e));let h=(t.handbrake&&s>7?n.driftGrip:n.grip)*(this.groundKind===0?1:.9),g=Math.min(Math.abs(l),h*e);l-=Math.sign(l)*g,this.latAccel=this.yawRate*c}else this.yawRate*=Math.exp(-.6*e),c*=Math.exp(-(this.inWater?3:.05)*e),l*=Math.exp(-(this.inWater?3:.05)*e);this.yaw+=this.yawRate*e,this.yaw>Math.PI?this.yaw-=Math.PI*2:this.yaw<-Math.PI&&(this.yaw+=Math.PI*2),this.vx=i*c+o*l,this.vz=a*c+s*l,this.slip=Math.abs(l),this.drifting=f&&this.slip>3.2&&Math.abs(c)>8;let p=this.x,m=this.z;this.x+=this.vx*e,this.z+=this.vz*e,this.vy-=Rd*e,this.y+=this.vy*e;let h=r.heightAt(this.x,this.z);if(this.groundKind=r.kind,h===-1/0||r.kind===2)this.y<.35&&!this.inWater&&(this.inWater=!0,this.events.push({type:`splash`,x:this.x,y:0,z:this.z,speed:this.speed})),this.inWater&&(this.y=Math.max(this.y,-2.2),this.vy=Math.max(this.vy,-1.2),this.sinkTime+=e),this.inWater||(this.airTime+=e,this.airborne=!0);else{let t=r.heightAt(p,m),n=Math.hypot(this.vx,this.vz),i=t===-1/0?0:(h-t)/e,a=i>n*.42+.3?0:Math.max(-25,i);this.y<=h+.03?(h-this.y>1.3&&this.airTime===0?(this.x=p,this.z=m,this.vx*=-.3,this.vz*=-.3,this.y=t===-1/0?this.y:t):(this.airTime>.25&&(this.events.push({type:`land`,x:this.x,y:h,z:this.z,vy:this.vy,air:this.airTime}),this.lastAirTime=this.airTime),this.y=h,this.vy=Math.max(this.vy,a),this.airTime=0),this.inWater=!1):this.airTime+=e,this.airborne=this.airTime>.12&&this.y-h>.15}this.collide(e)}collide(){let e=this.p,t=-Math.sin(this.yaw),n=-Math.cos(this.yaw),r=this.y+.25;for(let i of e.circleOffsets){let a=this.x+t*i,o=this.z+n*i;this.world.segments.collideCircle(a,o,e.circleR,r,(e,t,n,r,i,a,o)=>{this.resolve(e,t,n,r,i,o===2||o===3?.15:.32,o)}),this.world.circles.query(a,o,e.circleR,t=>{if(r>t.top)return;let n=a-t.x,i=o-t.z,s=Math.hypot(n,i)||1e-4,c=e.circleR+t.r-s;if(c<=0)return;let l=n/s,u=i/s;t.data&&t.data.onHit&&t.data.onHit(this,l,u)||this.resolve(l,u,c,t.x+l*t.r,t.z+u*t.r,.25,5)})}}resolve(e,t,n,r,i,a=.3,o=0){let s=this.p;this.x+=e*n,this.z+=t*n;let c=r-this.x,l=i-this.z,u=this.vx+this.yawRate*l,d=this.vz-this.yawRate*c,f=u*e+d*t;if(f>=0)return;let p=l*e-c*t,m=1/s.mass,h=1/s.inertia,g=-(1+a)*f/(m+p*p*h);this.vx+=g*e*m,this.vz+=g*t*m,this.yawRate+=g*p*h*.6;let _=-t,v=e,y=u*_+d*v,b=l*_-c*v,x=-y/(m+b*b*h),S=.25*g;x=Math.max(-S,Math.min(S,x)),this.vx+=x*_*m,this.vz+=x*v*m,-f>2.5&&this.events.push({type:`hit`,x:r,y:this.y+.8,z:i,impact:-f,nx:e,nz:t,kind:o})}visuals(e,t){let n=this.world.ground,r=this.fx,i=this.fz,a=Math.cos(this.yaw),o=-Math.sin(this.yaw),s=1.5;if(!this.airborne&&!this.inWater){let t=n.visualHeight(this.x+r*s,this.z+i*s),c=n.visualHeight(this.x-r*s,this.z-i*s),l=n.visualHeight(this.x+a*1,this.z+o*1),u=n.visualHeight(this.x-a*1,this.z-o*1),d=Math.atan2(t-c,2*s),f=Math.atan2(l-u,2);this.pitch+=(d-this.pitch)*(1-Math.exp(-14*e)),this.roll+=(f-this.roll)*(1-Math.exp(-14*e))}else this.airborne&&(this.pitch+=(-.12-this.pitch)*(1-Math.exp(-1.5*e)));let c=(this.fwdSpeed-this.prevAccel)/Math.max(e,.001);this.prevAccel=this.fwdSpeed;let l=Math.max(-.08,Math.min(.08,-c*.004)),u=Math.max(-.09,Math.min(.09,this.latAccel*.0035));this.bodyPitchVel+=((l-this.visPitch)*90-this.bodyPitchVel*9)*e,this.bodyRollVel+=((u-this.visRoll)*90-this.bodyRollVel*9)*e,this.visPitch+=this.bodyPitchVel*e,this.visRoll+=this.bodyRollVel*e,this.steerVis+=(t.steer*.5-this.steerVis)*(1-Math.exp(-12*e)),this.wheelSpin+=this.fwdSpeed/.44*e}},Vd=class{constructor(e,t,n){this.world=e,this.model=Pd(),t.add(this.model.root),this.vehicle=new Bd(e),this.driver=n.create({shirt:Z.white,arms:Z.white,pants:Z.black,hair:Z.black,hairStyle:`cap`}),this.driver.parent=this.model.chassis,this.driver.pos.copy(this.model.driverSeat),this.driver.pose(`drive`),this.passenger=null,this.time=0}place(e,t,n){this.vehicle.place(e,t,n),this.sync(0)}update(e,t){this.time+=e,this.vehicle.update(e,t),this.sync(e,t)}sync(){let e=this.vehicle,t=this.model,n=e.inWater?Math.min(1.4,e.sinkTime*1.5):0;t.root.position.set(e.x,e.y-n,e.z),t.root.rotation.set(e.pitch,e.yaw,e.roll,`YXZ`),t.chassis.rotation.set(e.visPitch,0,e.visRoll),t.chassis.position.y=Math.sin(this.time*31)*Math.min(.012,e.speed*6e-4);for(let n of t.wheels)n.rotation.x=-e.wheelSpin;for(let n of t.steer)n.rotation.y=e.steerVis;t.tailMat.emissiveIntensity=e.fwdSpeed>1&&this.braking?1.6:.3,t.root.updateMatrixWorld(!0),this.driver.headYaw=-e.steerVis*.6,this.driver.armLz=-.12+e.steerVis*.2,this.driver.armRz=-.12-e.steerVis*.2,this.passenger&&(this.passenger.parent=t.chassis,this.passenger.pos.copy(t.passengerSeat))}get position(){return new W(this.vehicle.x,this.vehicle.y,this.vehicle.z)}},Hd=e=>{for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Ud=[{dist:8.6,height:3.5,look:1.5,ahead:3},{dist:13.5,height:5.6,look:1.2,ahead:4},{dist:5.6,height:2.6,look:1.6,ahead:6}],Wd=class{constructor(e,t){this.camera=e,this.world=t,this.yaw=0,this.pos=new W,this.look=new W,this.mode=0,this.shake=0,this.fov=64,this.orbit=0,this._d=new W}cycle(){this.mode=(this.mode+1)%Ud.length}snap(e){this.yaw=e.yaw,this.update(1,e,!0)}update(e,t,n=!1){let r=Ud[this.mode],i=t.speed,a=t.yaw;if(i>4&&t.fwdSpeed>0){let e=Math.atan2(-t.vx,-t.vz);a=t.yaw+Hd(e-t.yaw)*.45}a+=this.orbit;let o=n?1:1-Math.exp(-(t.airborne?2:4.2)*e);this.yaw=Hd(this.yaw+Hd(a-this.yaw)*o);let s=r.dist+Math.min(i,45)*.055,c=r.height+Math.min(i,45)*.02,l=Math.sin(this.yaw),u=Math.cos(this.yaw),d=t.x,f=t.z,p=d+l*s,m=f+u*s,h=this.world.segments.raycast(d,f,p,m,3),g=s;h<1&&(g=Math.max(2.2,s*h-.6),p=d+l*g,m=f+u*g);let _=t.y+c*(.6+g/s*.4),v=this.world.ground.visualHeight(p,m)+1.2;_<v&&(_=v);let y=this._d.set(p,_,m);n?this.pos.copy(y):this.pos.lerp(y,1-Math.exp(-11*e));let b=t.x+t.fx*r.ahead,x=t.z+t.fz*r.ahead,S=t.y+r.look;if(n?this.look.set(b,S,x):this.look.lerp(new W(b,S,x),1-Math.exp(-14*e)),this.camera.position.copy(this.pos),this.shake>0){let t=this.shake;this.camera.position.x+=(Math.random()-.5)*t,this.camera.position.y+=(Math.random()-.5)*t,this.camera.position.z+=(Math.random()-.5)*t,this.shake=Math.max(0,this.shake-e*2.5)}this.camera.lookAt(this.look);let C=62+Math.min(i,45)*.3+(t.boosting?6:0);this.fov+=(C-this.fov)*(1-Math.exp(-3*e)),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}},Gd=e=>e<=7,Kd=[1,1,1,1,1,1,1.1,1.3,1.4,3,2.2,6,1.8],qd=class{constructor(){this.a=[],this.p=[]}get size(){return this.a.length}push(e,t){let n=this.a,r=this.p;n.push(e),r.push(t);let i=n.length-1;for(;i>0;){let e=i-1>>1;if(r[e]<=t)break;n[i]=n[e],r[i]=r[e],i=e}n[i]=e,r[i]=t}pop(){let e=this.a,t=this.p,n=e[0],r=e.pop(),i=t.pop();if(e.length){let n=0,a=e.length;for(;;){let r=2*n+1;if(r>=a||(r+1<a&&t[r+1]<t[r]&&r++,t[r]>=i))break;e[n]=e[r],t[n]=t[r],n=r}e[n]=r,t[n]=i}return n}},Jd=class{constructor(e){let t=e.graph;this.nx=Float64Array.from(t.nodes.filter((e,t)=>t%2==0)),this.nz=Float64Array.from(t.nodes.filter((e,t)=>t%2==1));let n=this.nx.length;this.names=e.names,this.edges=t.edges.map(e=>{let t=[this.nx[e.a],this.nz[e.a],...e.p||[],this.nx[e.b],this.nz[e.b]],n=[0];for(let e=2;e<t.length;e+=2)n.push(n[n.length-1]+Math.hypot(t[e]-t[e-2],t[e+1]-t[e-1]));return{a:e.a,b:e.b,k:e.k,w:e.w,len:n[n.length-1],pts:t,cum:n,o:e.o||0,bw:!!e.bw,n:e.n??-1}}),this.adj=Array.from({length:n},()=>[]),this.edges.forEach((e,t)=>{this.adj[e.a].push(t),e.b!==e.a&&this.adj[e.b].push(t)}),this.cell=24;let r=e.bounds;this.minX=r.minX-50,this.minZ=r.minZ-50,this.cols=Math.ceil((r.maxX-r.minX+100)/this.cell),this.rows=Math.ceil((r.maxZ-r.minZ+100)/this.cell),this.grid=Array(this.cols*this.rows),this.edges.forEach((e,t)=>{for(let n=0;n+3<e.pts.length;n+=2){let r=e.pts[n],i=e.pts[n+1],a=e.pts[n+2],o=e.pts[n+3],s=Math.floor((Math.min(r,a)-this.minX)/this.cell),c=Math.floor((Math.max(r,a)-this.minX)/this.cell),l=Math.floor((Math.min(i,o)-this.minZ)/this.cell),u=Math.floor((Math.max(i,o)-this.minZ)/this.cell);for(let e=Math.max(0,l);e<=Math.min(this.rows-1,u);e++)for(let r=Math.max(0,s);r<=Math.min(this.cols-1,c);r++){let i=e*this.cols+r;(this.grid[i]||(this.grid[i]=[])).push(t,n>>1)}}});let i=new Int32Array(n).fill(-1),a=[];for(let e=0;e<n;e++){if(i[e]>=0)continue;let t=a.length,n=0,r=[e];for(i[e]=t;r.length;){let e=r.pop();for(let a of this.adj[e]){n++;let o=this.edges[a],s=o.a===e?o.b:o.a;i[s]<0&&(i[s]=t,r.push(s))}}a.push(n)}let o=a.indexOf(Math.max(...a));for(let e of this.edges)e.main=i[e.a]===o;this.gScore=new Float64Array(n),this.cameFrom=new Int32Array(n),this.cameEdge=new Int32Array(n),this.visit=new Uint32Array(n),this.visitId=1}pointAt(e,t,n=[0,0,0]){let{pts:r,cum:i}=e;t=Math.max(0,Math.min(e.len,t));let a=1;for(;a<i.length-1&&i[a]<t;)a++;let o=i[a]-i[a-1]||1,s=(t-i[a-1])/o,c=r[(a-1)*2],l=r[(a-1)*2+1],u=r[a*2],d=r[a*2+1];return n[0]=c+(u-c)*s,n[1]=l+(d-l)*s,n[2]=Math.atan2(u-c,d-l),n}nearest(e,t,n=null,r=120){let i=null,a=1/0;for(let o=0;o*this.cell<=r+this.cell;o++){let r=Math.floor((e-this.minX)/this.cell),s=Math.floor((t-this.minZ)/this.cell);for(let c=s-o;c<=s+o;c++)for(let l=r-o;l<=r+o;l++){if(Math.max(Math.abs(c-s),Math.abs(l-r))!==o||c<0||l<0||c>=this.rows||l>=this.cols)continue;let u=this.grid[c*this.cols+l];if(u)for(let r=0;r<u.length;r+=2){let o=u[r],s=u[r+1],c=this.edges[o];if(n&&!n(c))continue;let l=c.pts[s*2],d=c.pts[s*2+1],f=c.pts[s*2+2],p=c.pts[s*2+3],m=f-l,h=p-d,g=m*m+h*h||1,_=((e-l)*m+(t-d)*h)/g;_=_<0?0:_>1?1:_;let v=l+m*_,y=d+h*_,b=Math.hypot(v-e,y-t);b<a&&(a=b,i={edge:o,s:c.cum[s]+_*Math.sqrt(g),x:v,z:y,d:b})}}if(i&&a<o*this.cell)break}return i}edgeCost(e){return e.len*Kd[e.k]*(e.w<3&&e.k>=9?1.3:1)}route(e,t,n,r,i=()=>!0){let a=e=>e.main&&i(e),o=this.nearest(e,t,a,200),s=this.nearest(n,r,a,200);if(!o||!s)return null;let c=this.edges[o.edge],l=this.edges[s.edge];if(o.edge===s.edge)return{pts:this.#t(c,o.s,s.s,[o.x,o.z],[s.x,s.z]),length:Math.abs(s.s-o.s)};let u=++this.visitId,d=this.gScore,f=this.cameFrom,p=this.cameEdge,m=this.visit,h=new qd,g=e=>Math.hypot(this.nx[e]-s.x,this.nz[e]-s.z),_=(e,t,n,r)=>{m[e]===u&&d[e]<=t||(m[e]=u,d[e]=t,f[e]=n,p[e]=r,h.push(e,t+g(e)))},v=Kd[c.k];_(c.a,o.s*v,-1,o.edge),_(c.b,(c.len-o.s)*v,-2,o.edge);let y=new Set,b=1/0,x=-1,S=Kd[l.k],C=0;for(;h.size&&C++<6e4;){let e=h.pop();if(y.has(e))continue;y.add(e);let t=d[e];if(t+g(e)>=b)break;e===l.a&&t+s.s*S<b&&(b=t+s.s*S,x=e),e===l.b&&t+(l.len-s.s)*S<b&&(b=t+(l.len-s.s)*S,x=e);for(let n of this.adj[e]){let r=this.edges[n];a(r)&&_(r.a===e?r.b:r.a,t+this.edgeCost(r),e,n)}}if(x<0)return null;let w=[],T=x;for(;T>=0;){w.push(T);let e=f[T];if(e<0)break;T=e}w.reverse();let E=[],D=w[0];E.push(...this.#t(c,o.s,D===c.a?0:c.len,[o.x,o.z],null));for(let e=1;e<w.length;e++){let t=this.edges[p[w[e]]],n=t.a===w[e-1]?t.pts:this.#e(t.pts);for(let e=2;e<n.length;e+=2)E.push(n[e],n[e+1])}let O=w[w.length-1],k=this.#t(l,O===l.a?0:l.len,s.s,null,[s.x,s.z]);for(let e=2;e<k.length;e+=2)E.push(k[e],k[e+1]);let A=0;for(let e=2;e<E.length;e+=2)A+=Math.hypot(E[e]-E[e-2],E[e+1]-E[e-1]);return{pts:E,length:A}}#e(e){let t=[];for(let n=e.length-2;n>=0;n-=2)t.push(e[n],e[n+1]);return t}#t(e,t,n,r,i){let a=[],o=r||this.pointAt(e,t);a.push(o[0],o[1]);let{cum:s,pts:c}=e;if(n>=t)for(let e=0;e<s.length;e++)s[e]>t&&s[e]<n&&a.push(c[e*2],c[e*2+1]);else for(let e=s.length-1;e>=0;e--)s[e]<t&&s[e]>n&&a.push(c[e*2],c[e*2+1]);let l=i||this.pointAt(e,n);return a.push(l[0],l[1]),a}streetName(e,t){let n=this.nearest(e,t,e=>e.n>=0,30);return!n||n.d>18?null:this.names[this.edges[n.edge].n]}};function Yd(e){let t=[0];for(let n=2;n<e.length;n+=2)t.push(t[t.length-1]+Math.hypot(e[n]-e[n-2],e[n+1]-e[n-1]));return{pts:e,cum:t,length:t[t.length-1]}}function Xd(e,t,n){let{pts:r,cum:i}=e,a=1/0,o=0;for(let e=0;e+3<r.length;e+=2){let s=r[e],c=r[e+1],l=r[e+2]-s,u=r[e+3]-c,d=l*l+u*u||1,f=((t-s)*l+(n-c)*u)/d;f=f<0?0:f>1?1:f;let p=Math.hypot(s+l*f-t,c+u*f-n);p<a&&(a=p,o=i[e/2]+f*Math.sqrt(d))}return{s:o,d:a}}function Zd(e,t){let{pts:n,cum:r}=e;t=Math.max(0,Math.min(e.length,t));let i=1;for(;i<r.length-1&&r[i]<t;)i++;let a=r[i]-r[i-1]||1,o=(t-r[i-1])/a;return[n[(i-1)*2]+(n[i*2]-n[(i-1)*2])*o,n[(i-1)*2+1]+(n[i*2+1]-n[(i-1)*2+1])*o]}var Qd=[{name:`red`,hex:16726831,max:750},{name:`orange`,hex:16751135,max:1300},{name:`yellow`,hex:16769594,max:2e3},{name:`green`,hex:4120666,max:1/0}],$d=6.5,ef=[`hairShort`,`hairShort`,`hairLong`,`hairLong`,`cap`,`topHat`];function tf(e,t){let n=new Ti(e,t,40,1);return n.rotateX(-Math.PI/2),n}function nf(e,t){let n=new xi(e,e,t,40,1,!0);n.translate(0,t/2,0);let r=n.attributes.position,i=new Float32Array(r.count*3);for(let e=0;e<r.count;e++){let n=1-r.getY(e)/t;i[e*3]=i[e*3+1]=i[e*3+2]=n}return n.setAttribute(`color`,new Jn(i,3)),n}function rf(e,t=.5){return new Br({color:e,transparent:!0,opacity:t,depthWrite:!1,blending:2,side:2,vertexColors:!0,fog:!1})}var af=class{constructor(e){this.game=e,this.world=e.world,this.graph=e.graph,this.rng=e.rng,this.list=[],this.target=16,this.spawnTimer=0,this.ringGeo=tf(6.05,$d),this.discGeo=new bi(6.05,40).rotateX(-Math.PI/2),this.wallGeo=nf($d,1.6),this.markerGeo=new Ci(.45,0),this.ringMats=Qd.map(e=>new Br({color:e.hex,transparent:!0,opacity:.95,depthWrite:!1,fog:!1})),this.discMats=Qd.map(e=>new Br({color:e.hex,transparent:!0,opacity:.16,depthWrite:!1})),this.wallMats=Qd.map(e=>rf(e.hex,.38)),this.markerMats=Qd.map(e=>new Li({color:e.hex,emissive:e.hex,emissiveIntensity:.6,roughness:.3})),this.hailMat=new yr({map:of(),depthWrite:!1,fog:!1}),this.buildSpawnPoints()}insideBuilding(e,t){let n=this.world.segments,r=0,i=n.d;return n.query(e,t-.01,e+300,t+.01,n=>{let a=n*6;if(i[a+5]!==1)return;let o=i[a+1],s=i[a+3];o>t!=s>t&&i[a]+(t-o)/(s-o)*(i[a+2]-i[a])>e&&r++}),r%2==1}clearOfWalls(e,t,n){let r=!0;return this.world.segments.collideCircle(e,t,n,-1e9,()=>{r=!1}),r?(this.world.circles.query(e,t,n*.6,()=>{r=!1}),r):!1}buildSpawnPoints(){let e=[],t=this.world.play,n=[0,0,0];for(let r of this.graph.edges)if(!(!(Gd(r.k)||r.k===8)||r.bw||r.len<14))for(let i=8;i<r.len-6;i+=32){this.graph.pointAt(r,i,n);let[a,o,s]=n,c=Math.sin(s),l=Math.cos(s);for(let n of[-1,1]){let i=r.k===8?r.w*.3:r.w/2+1.9,s=a+l*i*n,u=o-c*i*n;s<t.minX+40||s>t.maxX-40||u<t.minZ+40||u>t.maxZ-40||this.world.surface.isWater(s,u)||this.world.ground.heightAt(s,u)!==-1/0&&this.clearOfWalls(s,u,1.2)&&(this.insideBuilding(s,u)||e.push({x:s,z:u,yaw:Math.atan2(s-a,u-o),edge:r}))}}this.spawnPoints=e}pickDestination(e,t){let n=this.game.landmarks.filter(n=>Math.hypot(n.drop[0]-e,n.drop[1]-t)>260),r=n.map(n=>{let r=Math.hypot(n.drop[0]-e,n.drop[1]-t);return r<700?1.8:r<1200?1.3:r<1800?1:.6}),i=this.rng()*r.reduce((e,t)=>e+t,0);for(let e=0;e<n.length;e++)if((i-=r[e])<=0)return n[e];return n[n.length-1]}spawn(e){let t=e.x,n=e.z,r=[];for(let e=0;e<60&&r.length<6;e++){let e=this.spawnPoints[Math.floor(this.rng()*this.spawnPoints.length)],i=Math.hypot(e.x-t,e.z-n);i<35||i>420||this.list.some(t=>Math.hypot(t.x-e.x,t.z-e.z)<40)||r.push({sp:e,d:i})}if(!r.length)for(let e=0;e<400;e++){let e=this.spawnPoints[Math.floor(this.rng()*this.spawnPoints.length)],i=Math.hypot(e.x-t,e.z-n);if(i>40&&i<900){r.push({sp:e,d:i});break}}if(!r.length)return null;r.sort((e,t)=>e.d-t.d);let{sp:i}=r[Math.floor(this.rng()*Math.min(3,r.length))],a=this.pickDestination(i.x,i.z),o=this.graph.route(i.x,i.z,a.drop[0],a.drop[1]),s=o?o.length:Math.hypot(a.drop[0]-i.x,a.drop[1]-i.z)*1.35,c=Qd.findIndex(e=>s<e.max),l=this.game.minifigs.create({shirt:Bu[Math.floor(this.rng()*Bu.length)],pants:Vu[Math.floor(this.rng()*Vu.length)],hair:Hu[Math.floor(this.rng()*Hu.length)],hairStyle:ef[Math.floor(this.rng()*ef.length)]});if(!l)return null;let u=this.world.ground.visualHeight(i.x,i.z),d={x:i.x,z:i.z,y:u,yaw:i.yaw,fig:l,dest:a,length:s,ring:c,state:`waiting`,t:this.rng()*10,stateT:0,popIn:0,name:df(this.rng),voicePitch:.75+this.rng()*.7};l.pos.set(d.x,u,d.z),l.yaw=d.yaw,l.scale=.2;let f=new on;f.add(new J(this.ringGeo,this.ringMats[c])),f.add(new J(this.discGeo,this.discMats[c]));let p=new J(this.wallGeo,this.wallMats[c]);f.add(p);let m=new J(this.markerGeo,this.markerMats[c]);m.position.y=3.2,f.add(m);let h=new Nr(this.hailMat);h.scale.set(2.6,1.3,1),h.position.set(.9,4.6,0),h.visible=!1,f.add(h),d.hail=h,f.position.set(d.x,u+.06,d.z);for(let e of f.children)e.renderOrder=2;return this.game.scene.add(f),d.ringMesh=f,d.marker=m,this.list.push(d),d}remove(e){e.ringMesh&&this.game.scene.remove(e.ringMesh),e.ringMesh=null,e.fig.dispose();let t=this.list.indexOf(e);t>=0&&this.list.splice(t,1)}hideRing(e){e.ringMesh&&this.game.scene.remove(e.ringMesh),e.ringMesh=null}checkPickup(e){if(e.speed>3.2||e.airborne||e.inWater)return null;for(let t of this.list)if(t.state===`waiting`&&Math.hypot(t.x-e.x,t.z-e.z)<7.3)return t;return null}update(e,t,n){this.spawnTimer-=e;let r=this.list.filter(e=>e.state===`waiting`);n&&this.spawnTimer<=0&&r.length<this.target&&(this.spawn(t),this.spawnTimer=r.length<this.target/2?.05:.6);for(let n of[...this.list]){n.t+=e,n.stateT+=e;let r=n.fig,i=Math.hypot(n.x-t.x,n.z-t.z);if(n.state===`waiting`){if(i>820){this.remove(n);continue}n.popIn=Math.min(1,n.popIn+e*3),r.scale=n.popIn<1?.2+.8*sf(n.popIn):1;let a=i<45;if(n.hail&&(n.hail.visible=a&&Math.sin(n.t*2.2)>-.3),a){r.pose(`wave`,n.t);let i=Math.atan2(t.x-n.x,t.z-n.z)+Math.PI;r.yaw+=cf(i-r.yaw)*Math.min(1,e*5)}else r.pose(`stand`,n.t),r.yaw+=cf(n.yaw-r.yaw)*Math.min(1,e*2);if(i<4.5&&t.speed>10?(n.dodge=(n.dodge||0)+e,r.scared=!0,r.pose(`dive`,n.t)):r.scared=!1,r.pos.set(n.x,n.y,n.z),n.ringMesh){let t=1+Math.sin(n.t*4)*.03;n.ringMesh.scale.set(t,1,t),n.marker.rotation.y+=e*2.5,n.marker.position.y=3.2+Math.sin(n.t*3)*.25,n.ringMesh.visible=i<600}}else if(n.state===`boarding`){let e=t.doorPoint(),i=Math.min(1,n.stateT/.55);r.pos.set(n.x+(e.x-n.x)*i,n.y+Math.sin(i*Math.PI)*.8+(e.y-n.y)*i,n.z+(e.z-n.z)*i),r.yaw=Math.atan2(e.x-n.x,e.z-n.z)+Math.PI,r.pose(`run`,n.t*14),i>=1&&(n.state=`riding`,this.game.onBoarded(n))}else if(n.state===`riding`)r.pose(`sit`,n.t),r.armL=.9+Math.sin(n.t*3)*.1,r.scared=t.airborne||t.speed>34;else if(n.state===`leaving`||n.state===`bailing`){let t=n.state===`bailing`?5:3.2;if(n.x+=Math.sin(n.walkYaw)*t*e*-1,n.z+=Math.cos(n.walkYaw)*t*e*-1,n.y=this.world.ground.visualHeight(n.x,n.z),r.pos.set(n.x,n.y,n.z),r.yaw=n.walkYaw,n.stateT<1.2?r.pose(n.happy?`cheer`:`angry`,n.t):r.pose(`run`,n.t*11),r.scared=!1,n.stateT>5){this.remove(n);continue}}}}board(e){this.hideRing(e),e.state=`boarding`,e.stateT=0}alight(e,t,n,r,i){let a=t.doorPoint();e.fig.parent=null,e.x=a.x,e.z=a.z,e.y=this.world.ground.visualHeight(e.x,e.z),e.state=n?`leaving`:`bailing`,e.happy=n,e.stateT=0;let o=r??e.x+Math.sin(t.yaw)*10,s=i??e.z+Math.cos(t.yaw)*10;e.walkYaw=Math.atan2(e.x-o,e.z-s)}};function of(){let e=document.createElement(`canvas`);e.width=256,e.height=128;let t=e.getContext(`2d`);t.fillStyle=`#fff`,t.strokeStyle=`#1b2a34`,t.lineWidth=8,t.beginPath(),t.roundRect(8,8,240,86,26),t.fill(),t.stroke(),t.beginPath(),t.moveTo(60,90),t.lineTo(44,122),t.lineTo(94,92),t.fill(),t.stroke(),t.fillStyle=`#fff`,t.fillRect(56,82,40,12),t.fillStyle=`#c91a09`,t.font=`900 58px "Arial Black", Arial, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`TAXI!`,128,54);let n=new hi(e);return n.colorSpace=Le,n}function sf(e){return 1+2.70158*(e-1)**3+1.70158*(e-1)**2}function cf(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var lf=[`Anne`,`Luc`,`Mireille`,`Jean`,`Sophie`,`Marc`,`Chloé`,`Pierre`,`Inès`,`Hugo`,`Léa`,`Paolo`,`Aïcha`,`Yuki`,`Ahmed`,`Greta`,`Ruth`,`Bertrand`,`Nadia`,`Olaf`,`Ama`,`Diego`,`Jasper`,`Leila`],uf=[`Dufour`,`Favre`,`Rochat`,`Pictet`,`Mercier`,`Calvin`,`Lombard`,`Bonnet`,`Morel`,`Rossier`,`Perret`,`Fazy`,`Gautier`,`Naville`,`Vernet`,`Chappuis`];function df(e){return`${lf[Math.floor(e()*lf.length)]} ${uf[Math.floor(e()*uf.length)]}`}function ff(){let e=new Q,t=Z.brightGreen;e.prismY([[-.42,.2],[.42,.2],[.42,1.6],[-.42,1.6]],0,.5,t),e.prismY([[-1.25,.25],[0,-1.6],[1.25,.25]],0,.5,t),e.studs(-.4,.4,.4,1.6,.5,t),e.studs(-.4,-.8,.4,.2,.5,t);let n=e.toMesh(gl({studs:!1,emissive:1920284,emissiveIntensity:.5}));return n.castShadow=!1,n}function pf(e){let t=new on,n=new J(new Ti(e-.7,e,48).rotateX(-Math.PI/2),new Br({color:4120666,transparent:!0,opacity:.95,depthWrite:!1})),r=new J(new bi(e-.7,48).rotateX(-Math.PI/2),new Br({color:4120666,transparent:!0,opacity:.18,depthWrite:!1})),i=new xi(e,e,2.4,48,1,!0).translate(0,1.2,0),a=i.attributes.position,o=new Float32Array(a.count*3);for(let e=0;e<a.count;e++)o[e*3]=o[e*3+1]=o[e*3+2]=1-a.getY(e)/2.4;i.setAttribute(`color`,new Jn(o,3));let s=new J(i,rf(4120666,.45)),c=new xi(1.6,2.4,140,16,1,!0).translate(0,70,0),l=c.attributes.position,u=new Float32Array(l.count*3);for(let e=0;e<l.count;e++)u[e*3]=u[e*3+1]=u[e*3+2]=(1-l.getY(e)/140)**1.5;c.setAttribute(`color`,new Jn(u,3));let d=new J(c,rf(6094698,.55));for(let e of[n,r,s,d])e.renderOrder=3,e.frustumCulled=!1,t.add(e);return t.userData={ring:n,disc:r,wall:s,beacon:d},t}var mf=class{constructor(e){this.game=e,this.graph=e.graph,this.arrow=ff(),this.arrowRoot=new on,this.arrowRoot.add(this.arrow),this.arrowRoot.visible=!1,e.scene.add(this.arrowRoot),this.zones=new Map,this.target=null,this.route=null,this.recalc=0,this.dist=0,this.arrowYaw=0,this.inZone=!1,this.t=0}zoneFor(e){let t=this.zones.get(e.id);return t||(t=pf(e.r),t.position.set(e.drop[0],this.game.world.ground.visualHeight(e.drop[0],e.drop[1])+.07,e.drop[1]),t.visible=!1,this.game.scene.add(t),this.zones.set(e.id,t)),t}setTarget(e,t){this.target&&(this.zoneFor(this.target).visible=!1),this.target=e,this.route=null,this.recalc=0,e?(this.zoneFor(e).visible=!0,this.arrowRoot.visible=!0,this.computeRoute(t)):this.arrowRoot.visible=!1}computeRoute(e){let t=this.target,n=this.graph.route(e.x,e.z,t.drop[0],t.drop[1]);this.route=n?Yd(n.pts):null,this.recalc=1.5}update(e,t){if(this.t+=e,!this.target)return;let n=this.target,r=n.drop[0]-t.x,i=n.drop[1]-t.z,a=Math.hypot(r,i);this.inZone=a<n.r,this.recalc-=e;let o=n.drop[0],s=n.drop[1],c=a;if(this.route&&a>45){if((Xd(this.route,t.x,t.z).d>22||this.recalc<=0)&&this.computeRoute(t),this.route){let e=Xd(this.route,t.x,t.z);c=Math.max(a,this.route.length-e.s+e.d);let n=Zd(this.route,e.s+26);o=n[0],s=n[1]}}else!this.route&&this.recalc<=0&&this.computeRoute(t);this.dist=c;let l=Math.atan2(-(o-t.x),-(s-t.z))-this.arrowYaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;this.arrowYaw+=l*Math.min(1,e*8),this.arrowRoot.position.set(t.x,t.y+3.55+Math.sin(this.t*3)*.12,t.z),this.arrowRoot.rotation.set(0,this.arrowYaw,0);let u=this.inZone;this.arrow.scale.setScalar(u?.75:1),this.arrow.rotation.x=u?-1.2:0;let d=this.zoneFor(n),f=1+Math.sin(this.t*5)*.025;d.userData.ring.scale.set(f,1,f),d.userData.beacon.material.opacity=.45+Math.sin(this.t*4)*.1}},hf=(e,t,n,r)=>{let i=document.createElement(e);return t&&(i.className=t),r!==void 0&&(i.innerHTML=r),n&&n.appendChild(i),i};function gf(e){return`CHF `+e.toFixed(2)}var _f=class{constructor(){let e=hf(`div`,`hud hidden`,document.body);e.id=`hud`,this.root=e;let t=hf(`div`,`hud-time`,e);hf(`div`,`hud-label`,t,`TIME`),this.timeVal=hf(`div`,`hud-time-val`,t,`60`),this.timeBonus=hf(`div`,`hud-time-bonus`,t,``);let n=hf(`div`,`hud-money`,e);this.moneyVal=hf(`div`,`hud-money-val`,n,gf(0)),this.faresVal=hf(`div`,`hud-fares`,n,`0 fares`),this.fare=hf(`div`,`hud-fare hidden`,e),this.fareDest=hf(`div`,`hud-fare-dest`,this.fare,``);let r=hf(`div`,`hud-fare-row`,this.fare);this.fareDist=hf(`div`,`hud-fare-dist`,r,``),this.fareTimer=hf(`div`,`hud-fare-timer`,r,``),this.fareMeter=hf(`div`,`hud-fare-meter`,r,``),this.msg=hf(`div`,`hud-msg`,e),this.tips=hf(`div`,`hud-tips`,e),this.speech=hf(`div`,`hud-speech hidden`,e),this.speechName=hf(`div`,`hud-speech-name`,this.speech,``),this.speechText=hf(`div`,`hud-speech-text`,this.speech,``);let i=hf(`div`,`hud-speed`,e);this.speedVal=hf(`div`,`hud-speed-val`,i,`0`),hf(`div`,`hud-speed-unit`,i,`km/h`);let a=hf(`div`,`hud-boost`,i);hf(`div`,`hud-boost-label`,a,`CRAZY DASH`);let o=hf(`div`,`hud-boost-bar`,a);this.boostFill=hf(`div`,`hud-boost-fill`,o),this.street=hf(`div`,`hud-street`,e,``),this.factBox=hf(`div`,`hud-fact hidden`,e),this.factTitle=hf(`div`,`hud-fact-title`,this.factBox,``),this.factText=hf(`div`,`hud-fact-text`,this.factBox,``),this.factTimer=0,this.mapWrap=hf(`div`,`hud-minimap`,e),this.minimap=hf(`canvas`,``,this.mapWrap),this.minimap.width=460,this.minimap.height=460,this.hint=hf(`div`,`hud-hint`,e,``),this.lastStreet=``,this.speechTimer=0,this.msgQueue=[]}show(e){this.root.classList.toggle(`hidden`,!e)}setTime(e,t){if(t===`free`){this.timeVal.textContent=`∞`,this.timeVal.classList.remove(`warn`);return}let n=Math.max(0,Math.ceil(e)),r=t===`blitz`?`${Math.floor(n/60)}:${String(n%60).padStart(2,`0`)}`:String(n);this.timeVal.textContent!==r&&(this.timeVal.textContent=r),this.timeVal.classList.toggle(`warn`,e<10)}timeBonusPop(e){this.timeBonus.textContent=`+${e}`,this.timeBonus.classList.remove(`pop`),this.timeBonus.offsetWidth,this.timeBonus.classList.add(`pop`)}setMoney(e,t){this.moneyVal.textContent=gf(e),this.faresVal.textContent=`${t} fare${t===1?``:`s`}`}showFare(e,t,n,r,i){this.fare.classList.remove(`hidden`),this.fareDest.textContent!==e&&(this.fareDest.textContent=e),this.fareDist.textContent=i?`STOP!`:t>=1e3?`${(t/1e3).toFixed(2)} km`:`${Math.round(t/10)*10} m`,this.fareDist.classList.toggle(`stop`,i),this.fareTimer.textContent=Math.max(0,Math.ceil(n)),this.fareTimer.classList.toggle(`warn`,n<8),this.fareMeter.textContent=gf(r)}hideFare(){this.fare.classList.add(`hidden`)}message(e,t=``,n=1.6){let r=hf(`div`,`hud-msg-item `+t,this.msg,e);r.style.animationDuration=`${n}s`,setTimeout(()=>r.remove(),n*1e3)}tip(e){let t=hf(`div`,`hud-tip-item`,this.tips,e);for(setTimeout(()=>t.remove(),1600);this.tips.children.length>4;)this.tips.firstChild.remove()}say(e,t,n=3.2){this.speech.classList.remove(`hidden`),this.speechName.textContent=e,this.speechText.textContent=t,this.speech.classList.remove(`pop`),this.speech.offsetWidth,this.speech.classList.add(`pop`),this.speechTimer=n}setSpeed(e,t,n){let r=String(Math.round(e));this.speedVal.textContent!==r&&(this.speedVal.textContent=r),this.boostFill.style.width=`${Math.round(t*100)}%`,this.boostFill.classList.toggle(`on`,n)}setStreet(e){e&&e!==this.lastStreet&&(this.lastStreet=e,this.street.textContent=e,this.street.classList.remove(`pop`),this.street.offsetWidth,this.street.classList.add(`pop`))}setHint(e){e!==this.hintText&&(this.hintText=e,this.hint.innerHTML=e,this.hint.classList.toggle(`hidden`,!e))}fact(e,t){this.factTitle.textContent=e,this.factText.textContent=t,this.factBox.classList.remove(`hidden`,`pop`),this.factBox.offsetWidth,this.factBox.classList.add(`pop`),this.factTimer=6}update(e){this.factTimer>0&&(this.factTimer-=e,this.factTimer<=0&&this.factBox.classList.add(`hidden`)),this.speechTimer>0&&(this.speechTimer-=e,this.speechTimer<=0&&this.speech.classList.add(`hidden`))}},vf=.5,yf={cornavin:`🚉`,chair:`🪑`,paquis:`🏊`,montblanc:`🌉`,jetdeau:`⛲`,jardin:`🌷`,belair:`🚋`,oldtown:`⛪`,neuve:`🎭`,bastions:`♟️`},bf={neuve:[-16,2,`right`],oldtown:[16,2,`left`],bastions:[0,26,`center`],belair:[-16,2,`right`],jardin:[16,2,`left`]},xf=class{constructor(e,t){this.game=e,this.canvas=t,this.ctx=t.getContext(`2d`);let n=e.map,r=n.bounds;this.minX=r.minX,this.minZ=r.minZ,this.base=document.createElement(`canvas`),this.base.width=Math.ceil((r.maxX-r.minX)*vf),this.base.height=Math.ceil((r.maxZ-r.minZ)*vf),this.drawBase(n),this.zoom=1}drawBase(e){let t=this.base.getContext(`2d`);t.fillStyle=`#c9cdd0`,t.fillRect(0,0,this.base.width,this.base.height),t.setTransform(vf,0,0,vf,-this.minX*vf,-this.minZ*vf);let n=(e,n)=>{t.fillStyle=n;for(let n of e){t.beginPath();for(let e of n){for(let n=0;n<e.length;n+=2)(n?t.lineTo:t.moveTo).call(t,e[n],e[n+1]);t.closePath()}t.fill(`evenodd`)}};n(e.areas.green,`#7cc576`),n(e.areas.pitch,`#7cc576`),n(e.areas.paving,`#e6d6ad`),n(e.water,`#3d8fd1`);for(let t of e.piers)n([t.r],`#d8c9a3`);t.lineCap=`round`,t.lineJoin=`round`;for(let n of e.roads)if(!(n.k>8)){t.strokeStyle=n.k===8?`#e9dcb8`:n.k<=3?`#ffffff`:`#f4f4f4`,t.lineWidth=Math.max(n.w,5),t.beginPath();for(let e=0;e<n.p.length;e+=2)(e?t.lineTo:t.moveTo).call(t,n.p[e],n.p[e+1]);t.stroke()}for(let t of e.bridges)n([t.r],`#f4f4f4`);t.fillStyle=`#8d8a84`;for(let n of e.buildings){t.beginPath();for(let e=0;e<n.r.length;e+=2)(e?t.lineTo:t.moveTo).call(t,n.r[e],n.r[e+1]);t.closePath(),t.fill()}let r=e.play;t.strokeStyle=`rgba(201,26,9,0.7)`,t.lineWidth=6,t.setLineDash([20,14]),t.strokeRect(r.minX,r.minZ,r.maxX-r.minX,r.maxZ-r.minZ),t.setLineDash([]),t.setTransform(1,0,0,1,0,0)}overlays(e,t,n){let r=this.game,i=r.nav;if(i.target&&i.route){e.strokeStyle=`#2bd13f`,e.lineWidth=9/t,e.lineCap=`round`,e.lineJoin=`round`,e.beginPath();let n=i.route.pts;for(let t=0;t<n.length;t+=2)(t?e.lineTo:e.moveTo).call(e,n[t],n[t+1]);e.stroke()}for(let a of r.landmarks){let r=i.target===a,o=(r?15:10)/t;if(e.fillStyle=r?`#2bd13f`:`rgba(27,42,52,0.85)`,e.strokeStyle=`#fff`,e.lineWidth=2.5/t,e.beginPath(),e.arc(a.drop[0],a.drop[1],o,0,Math.PI*2),e.fill(),e.stroke(),e.save(),e.translate(a.drop[0],a.drop[1]),e.rotate(-n.rot),e.font=`${(r?17:12)/t}px sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(yf[a.id]||`★`,0,1/t),n.labels){let[n,r,i]=bf[a.id]||[0,24,`center`];e.font=`bold ${13/t}px Arial, sans-serif`,e.textAlign=i,e.fillStyle=`#1b2a34`,e.strokeStyle=`#fff`,e.lineWidth=4/t,e.strokeText(a.name,n/t,r/t),e.fillText(a.name,n/t,r/t)}e.restore()}if(!r.carrying)for(let n of r.passengers.list)n.state===`waiting`&&(e.fillStyle=`#`+Qd[n.ring].hex.toString(16).padStart(6,`0`),e.strokeStyle=`#1b2a34`,e.lineWidth=2/t,e.beginPath(),e.arc(n.x,n.z,6/t,0,Math.PI*2),e.fill(),e.stroke())}drawPlayer(e,t,n,r,i){e.save(),e.translate(t,n),e.rotate(r),e.fillStyle=`#f2cd37`,e.strokeStyle=`#1b2a34`,e.lineWidth=3,e.beginPath(),e.moveTo(0,-i),e.lineTo(i*.7,i*.75),e.lineTo(0,i*.4),e.lineTo(-i*.7,i*.75),e.closePath(),e.fill(),e.stroke(),e.restore()}draw(e){let t=this.ctx,n=this.canvas.width,r=this.canvas.height;t.clearRect(0,0,n,r),t.save(),t.beginPath(),t.arc(n/2,r/2,n/2-4,0,Math.PI*2),t.clip(),t.fillStyle=`#9fb3c2`,t.fillRect(0,0,n,r);let i=this.zoom*(1-Math.min(e.speed,40)/110)*(n/460),a=i*vf;t.translate(n/2,r/2),t.rotate(e.yaw),t.scale(i,i),t.translate(-(e.x-this.minX)*vf,-(e.z-this.minZ)*vf),t.drawImage(this.base,0,0),t.translate(this.minX*vf,this.minZ*vf),t.scale(vf,vf),this.overlays(t,a,{rot:e.yaw,labels:!1}),t.restore();let o=this.game.nav;if(o.target){let i=o.target.drop[0]-e.x,s=o.target.drop[1]-e.z,c=Math.cos(e.yaw),l=Math.sin(e.yaw),u=(i*c-s*l)*a,d=(i*l+s*c)*a;if(Math.hypot(u,d)>n/2-18){let e=Math.atan2(d,u),i=n/2+Math.cos(e)*(n/2-20),a=r/2+Math.sin(e)*(r/2-20);this.drawPlayer(t,i,a,e+Math.PI/2,14),t.fillStyle=`#2bd13f`,t.beginPath(),t.arc(i,a,7,0,Math.PI*2),t.fill()}}this.drawPlayer(t,n/2,r/2,0,16),t.strokeStyle=`#1b2a34`,t.lineWidth=8,t.beginPath(),t.arc(n/2,r/2,n/2-4,0,Math.PI*2),t.stroke(),t.save(),t.translate(n/2,r/2),t.rotate(e.yaw),t.fillStyle=`#c91a09`,t.font=`bold 26px Arial`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`N`,0,-(r/2-26)),t.restore()}drawFull(e,t){let n=e.getContext(`2d`),r=e.width,i=e.height;n.fillStyle=`#7f98ad`,n.fillRect(0,0,r,i);let a=Math.min(r/this.base.width,i/this.base.height)*.96,o=(r-this.base.width*a)/2,s=(i-this.base.height*a)/2;n.save(),n.translate(o,s),n.scale(a,a),n.drawImage(this.base,0,0),n.translate(-this.minX*vf,-this.minZ*vf),n.scale(vf,vf),this.overlays(n,a*vf,{rot:0,labels:!0}),n.restore(),this.drawPlayer(n,o+(t.x-this.minX)*vf*a,s+(t.z-this.minZ)*vf*a,-t.yaw,13)}},Sf=(e,t,n,r)=>{let i=document.createElement(e);return t&&(i.className=t),r!==void 0&&(i.innerHTML=r),n&&n.appendChild(i),i},Cf=[{min:900,cls:`CRAZY`,title:`Crazy Taxi Licence`,note:`Les Genevois parlent encore de vous.`},{min:600,cls:`S`,title:`Class S`,note:`Faster than the Jet d’Eau.`},{min:380,cls:`A`,title:`Class A`,note:`A true taxi pro of the Rade.`},{min:220,cls:`B`,title:`Class B`,note:`Solid driving, nice tips.`},{min:110,cls:`C`,title:`Class C`,note:`Not bad for a tourist.`},{min:40,cls:`D`,title:`Class D`,note:`The trams were faster.`},{min:-1/0,cls:`E`,title:`No Licence`,note:`Peut-être essayer le vélo ?`}],wf=e=>Cf.find(t=>e>=t.min),Tf=class{constructor(e){this.game=e,this.onStart=null;let t=Sf(`div`,`menu title-screen hidden`,document.body);this.title=t,Sf(`div`,`logo`,t,`<span class="logo-crazy">CRAZY TAXI</span><span class="logo-geneve">GENÈVE</span>`),Sf(`div`,`tagline`,t,`Drive a LEGO taxi through the real streets of Geneva — pick up minifigs and race them to the city’s landmarks!`);let n=Sf(`div`,`mode-list`,t);this.modeButtons=[];let r=(e,t,r)=>{let i=Sf(`button`,`btn mode-btn`,n,`<span class="mode-name">${t}</span><span class="mode-desc">${r}</span>`);i.dataset.mode=e,i.addEventListener(`click`,()=>this.onStart&&this.onStart(e)),this.modeButtons.push(i)};r(`arcade`,`ARCADE`,`Classic rules · beat the clock, earn extra time with every fare`),r(`blitz`,`5-MINUTE SHIFT`,`Exactly five minutes · make as much money as you can`),r(`free`,`FREE RIDE`,`No timer · explore LEGO Geneva at your own pace`),this.best=Sf(`div`,`best-scores`,t,``);let i=Sf(`div`,`options-row`,t);this.soundBtn=Sf(`button`,`btn small`,i,``),this.musicBtn=Sf(`button`,`btn small`,i,``),this.qualityBtn=Sf(`button`,`btn small`,i,``),this.soundBtn.addEventListener(`click`,()=>{e.settings.sound=!e.settings.sound,e.saveSettings(),this.refresh()}),this.musicBtn.addEventListener(`click`,()=>{e.settings.music=!e.settings.music,e.saveSettings(),this.refresh()}),this.qualityBtn.addEventListener(`click`,()=>{e.settings.quality=e.settings.quality===`high`?`low`:`high`,e.saveSettings(),e.applyQuality(),this.refresh()}),Sf(`div`,`controls-help`,t,`
      <div><b>↑ / W</b> accelerate &nbsp; <b>↓ / S</b> brake · reverse &nbsp; <b>← → / A D</b> steer</div>
      <div><b>Space</b> drift (Crazy Drift) &nbsp; <b>Shift</b> Crazy Dash boost &nbsp; <b>C</b> camera &nbsp; <b>M</b> map &nbsp; <b>R</b> reset &nbsp; <b>Esc</b> pause</div>
      <div class="dim">Gamepad: RT/LT gas & brake · stick steer · B drift · X boost · Y camera</div>`),Sf(`div`,`how-to`,t,`Stop inside a customer’s circle to pick them up — <span style="color:#ff6b5f">red</span> = short trip, <span style="color:#6dff74">green</span> = long trip. Follow the green arrow and stop in the green zone. Drift, jump and dodge traffic for tips!`),Sf(`div`,`credits`,t,`Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> (ODbL) · Elevation © swisstopo · LEGO® is a trademark of the LEGO Group — this fan game is not affiliated with it.`);let a=Sf(`div`,`menu overlay pause-screen hidden`,document.body);this.pause=a,Sf(`div`,`overlay-title`,a,`PAUSE`);let o=Sf(`div`,`mode-list`,a);this.resumeBtn=Sf(`button`,`btn`,o,`Resume`),this.restartBtn=Sf(`button`,`btn`,o,`Restart`),this.quitBtn=Sf(`button`,`btn`,o,`Main menu`),this.resumeBtn.addEventListener(`click`,()=>e.togglePause(!1)),this.restartBtn.addEventListener(`click`,()=>{e.togglePause(!1),e.startGame(e.mode)}),this.quitBtn.addEventListener(`click`,()=>{e.togglePause(!1),e.showTitle()});let s=Sf(`div`,`menu overlay results-screen hidden`,document.body);this.results=s,this.resTitle=Sf(`div`,`overlay-title`,s,`TIME UP!`),this.resRank=Sf(`div`,`rank-badge`,s,``),this.resRankTitle=Sf(`div`,`rank-title`,s,``),this.resNote=Sf(`div`,`rank-note`,s,``),this.resStats=Sf(`div`,`result-stats`,s,``),this.resRecord=Sf(`div`,`record hidden`,s,`NEW RECORD!`);let c=Sf(`div`,`mode-list row`,s);this.againBtn=Sf(`button`,`btn`,c,`Drive again`),this.menuBtn=Sf(`button`,`btn`,c,`Main menu`),this.againBtn.addEventListener(`click`,()=>e.startGame(e.mode)),this.menuBtn.addEventListener(`click`,()=>e.showTitle());let l=Sf(`div`,`map-screen hidden`,document.body);this.map=l,this.mapCanvas=Sf(`canvas`,``,l),Sf(`div`,`map-hint`,l,`Real OpenStreetMap layout of Geneva · press <b>M</b> or tap to close`),l.addEventListener(`pointerdown`,t=>{t.preventDefault(),e.toggleMap(!1)}),this.count=Sf(`div`,`countdown hidden`,document.body,``),this.refresh()}refresh(){let e=this.game.settings;this.soundBtn.textContent=`Sound: ${e.sound?`ON`:`OFF`}`,this.musicBtn.textContent=`Music: ${e.music?`ON`:`OFF`}`,this.qualityBtn.textContent=`Graphics: ${e.quality===`high`?`HIGH`:`LOW`}`;let t=this.game.best,n=e=>e?`CHF ${e.toFixed(2)}`:`—`;this.best.innerHTML=`Best · Arcade <b>${n(t.arcade)}</b> · 5-Minute <b>${n(t.blitz)}</b>`}showTitle(e){this.title.classList.toggle(`hidden`,!e),e&&(this.refresh(),this.modeButtons[0].focus())}showPause(e){this.pause.classList.toggle(`hidden`,!e),e&&this.resumeBtn.focus()}showResults(e,t){if(this.results.classList.toggle(`hidden`,!e),!e)return;let n=wf(t.money);this.resTitle.textContent=t.title,this.resRank.textContent=n.cls,this.resRank.dataset.cls=n.cls,this.resRankTitle.textContent=n.title,this.resNote.textContent=n.note,this.resStats.innerHTML=`
      <div><span>Earnings</span><b>CHF ${t.money.toFixed(2)}</b></div>
      <div><span>Customers</span><b>${t.fares}</b></div>
      <div><span>Speedy deliveries</span><b>${t.speedy}</b></div>
      <div><span>Tips</span><b>CHF ${t.tips.toFixed(2)}</b></div>
      <div><span>Best combo</span><b>×${t.bestCombo}</b></div>
      <div><span>Distance driven</span><b>${(t.distance/1e3).toFixed(1)} km</b></div>`,this.resRecord.classList.toggle(`hidden`,!t.record),this.againBtn.focus()}showMap(e){this.map.classList.toggle(`hidden`,!e),e&&(this.mapCanvas.width=innerWidth*Math.min(2,devicePixelRatio),this.mapCanvas.height=innerHeight*Math.min(2,devicePixelRatio))}countdown(e){this.count.classList.toggle(`hidden`,!e),e&&(this.count.textContent=e,this.count.classList.remove(`pop`),this.count.offsetWidth,this.count.classList.add(`pop`))}},Ef={cornavin:[`Gare Cornavin, vite ! Mon train part dans cinq minutes !`,`To Cornavin station — the TGV to Paris won’t wait!`,`À la gare, s’il vous plaît. J’ai un CFF à attraper !`],chair:[`Place des Nations, devant la Broken Chair ! J’ai une réunion à l’ONU.`,`To the Broken Chair! I’m late for a UN summit.`,`La chaise cassée, svp. Elle tient sur trois pieds, moi aussi !`],paquis:[`Aux Bains des Pâquis ! Une petite baignade et une fondue.`,`Bains des Pâquis please — the lake is perfect today!`,`Aux Bains ! J’ai oublié mon maillot… pas grave !`],montblanc:[`Pont du Mont-Blanc ! Je veux voir les drapeaux.`,`To the Mont-Blanc bridge — best view of the Jet d’Eau!`,`Sur le pont, svp. On voit le Mont-Blanc aujourd’hui ?`],jetdeau:[`Au Jet d’Eau ! 140 mètres, il paraît !`,`Take me to the Jet d’Eau — I want to get soaked!`,`Le Jet d’Eau, vite, avant qu’ils l’éteignent !`],jardin:[`Jardin Anglais, devant l’horloge fleurie !`,`To the Flower Clock — I’m running late, ironically.`,`Au Jardin Anglais, j’ai rendez-vous sous l’horloge.`],belair:[`Place Bel-Air, je dois attraper le tram 12 !`,`Bel-Air please, quick — my tram leaves soon!`,`Bel-Air ! Près de la Tour de l’Île.`],oldtown:[`À la Vieille-Ville, cathédrale Saint-Pierre !`,`Up to the Old Town — hope your brakes work on the hill!`,`Saint-Pierre, svp. Je veux monter dans les tours !`],neuve:[`Place de Neuve, au Grand Théâtre ! Le spectacle commence !`,`To the opera at Place de Neuve — curtain in 3 minutes!`,`Place de Neuve, devant le général Dufour.`],bastions:[`Parc des Bastions ! J’ai une partie d’échecs géants.`,`To the Reformation Wall please. Calvin is waiting.`,`Aux Bastions, mur des Réformateurs. Post tenebras lux !`]},Df={drift:[`Wouhou !`,`Incroyable !`,`C’est complètement fou !`,`Yeehaw!`,`Encore !`],jump:[`On vole !!`,`Aaaaah !`,`Was that a jump?!`,`Mon chapeau !`],crash:[`Attention !`,`Ma tête !`,`Doucement !`,`Watch the bricks!`,`Aïe, mes briques !`],near:[`Ouf, c’était juste !`,`Close one!`,`Le tram !`],slow:[`Plus vite !`,`Allez, allez !`,`Hurry up!`,`Mon grand-père roule plus vite !`],water:[`Je ne sais pas nager !`,`Glou glou…`]},Of={speedy:[`Génial, merci !`,`Super rapide !`,`Best taxi in Geneva!`,`Fantastique !`],normal:[`Merci beaucoup !`,`Thanks, here you go.`,`Parfait, merci.`],slow:[`Enfin…`,`J’aurais pu marcher…`,`Bon. Merci quand même.`],bail:[`J’aurais été plus vite à pied !`,`Je descends ici !`,`Forget it, I’ll take the tram!`]},kf={cornavin:`Geneva’s main station — opened in 1858, today’s building dates from the 1930s.`,chair:`12 m tall and 5.5 tonnes of wood, by Daniel Berset (1997): a protest against landmines.`,paquis:`Lake baths on the Pâquis jetty since 1872 — sunbathing in summer, fondue in winter.`,montblanc:`Built in 1862 where the Rhône leaves the lake, lined with Swiss and Geneva flags.`,jetdeau:`140 m high: 500 litres of water per second shot out at 200 km/h.`,jardin:`The Flower Clock has kept time with thousands of flowers since 1955.`,belair:`Geneva’s tram crossroads, next to the medieval Tour de l’Île (1219).`,oldtown:`Cathédrale Saint-Pierre, begun around 1160 — Calvin preached here.`,neuve:`The Grand Théâtre (1879) and General Dufour, the general who mapped Switzerland.`,bastions:`The Reformation Wall: Farel, Calvin, Bèze and Knox, each 5 m tall.`},Af=(e,t=Math.random)=>e[Math.floor(t()*e.length)],jf=[Z.green,Z.brightGreen,Z.green,Z.darkGreen,Z.oliveGreen,Z.brightGreen],Mf=[Z.orange,Z.brightLightOrange,Z.darkOrange,Z.yellow,Z.darkRed,Z.red];function Nf(){let e=16777215,t=new Q;t.cyl(0,0,0,.32,2.6,Z.reddishBrown,6,{top:!1});let n=t.toGeometry();t=new Q,t.cyl(0,2.2,0,1,1,e,6,{bottom:!0}),t.cyl(0,3.2,0,.8,.95,e,6),t.cyl(0,4.15,0,.48,.75,e,6);let r=t.toGeometry();return t=new Q,t.cone(0,1.6,0,1.05,1.8,e,6),t.cone(0,2.7,0,.82,1.6,e,6),t.cone(0,3.7,0,.58,1.5,e,6),{trunk:n,round:r,cone:t.toGeometry()}}function Pf(){let e=document.createElement(`canvas`);e.width=1024,e.height=640;let t=e.getContext(`2d`),n=[],r=(e,n=!0)=>(r,i)=>{e.forEach((a,o)=>{t.fillStyle=a,n?t.fillRect(r+o*128/e.length,i,128/e.length+1,80):t.fillRect(r,i+o*80/e.length,128,80/e.length+1)})},i=(e,n,r=!0)=>(i,a)=>{t.fillStyle=e,t.fillRect(i,a,128,80),t.fillStyle=n,t.fillRect(i+(r?36:54),a,18,80),t.fillRect(i,a+31,128,18)},a=(e,n)=>(r,i)=>{t.fillStyle=e,t.fillRect(r,i,128,80),t.fillStyle=n,t.beginPath(),t.arc(r+64,i+40,22,0,Math.PI*2),t.fill()};n.push((e,n)=>{t.fillStyle=`#d52b1e`,t.fillRect(e,n,128,80),t.fillStyle=`#fff`,t.fillRect(e+56,n+14,16,52),t.fillRect(e+38,n+32,52,16)},(e,n)=>{t.fillStyle=`#f2cd37`,t.fillRect(e,n,64,80),t.fillStyle=`#c91a09`,t.fillRect(e+64,n,64,80),t.fillStyle=`#1b1b1b`,t.beginPath(),t.moveTo(e+62,n+14),t.lineTo(e+30,n+22),t.lineTo(e+40,n+34),t.lineTo(e+22,n+42),t.lineTo(e+40,n+50),t.lineTo(e+34,n+66),t.lineTo(e+62,n+58),t.fill(),t.fillStyle=`#f2cd37`,t.fillRect(e+82,n+18,8,46),t.fillRect(e+82,n+18,22,8),t.fillRect(e+90,n+50,14,6),t.fillRect(e+90,n+58,10,6)},(e,n)=>{t.fillStyle=`#5b92e5`,t.fillRect(e,n,128,80),t.strokeStyle=`#fff`,t.lineWidth=4,t.beginPath(),t.arc(e+64,n+40,22,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(e+64-22,n+40),t.lineTo(e+64+22,n+40),t.moveTo(e+64,n+40-22),t.lineTo(e+64,n+40+22),t.stroke()}),n.push(r([`#0055a4`,`#fff`,`#ef4135`]),r([`#009246`,`#fff`,`#ce2b37`]),r([`#000`,`#dd0000`,`#ffce00`],!1)),n.push(r([`#000`,`#fae042`,`#ed2939`]),r([`#169b62`,`#fff`,`#ff883e`]),r([`#ae1c28`,`#fff`,`#21468b`],!1)),n.push(r([`#ed2939`,`#fff`,`#ed2939`],!1),a(`#fff`,`#bc002d`),i(`#006aa7`,`#fecc00`)),n.push(i(`#c8102e`,`#fff`),i(`#ba0c2f`,`#fff`),i(`#fff`,`#003580`)),n.push(r([`#fff`,`#dc143c`],!1),r([`#0057b7`,`#ffd700`],!1),r([`#fff`,`#0039a6`,`#d52b1e`],!1)),n.push(r([`#aa151b`,`#f1bf00`,`#aa151b`],!1),r([`#046a38`,`#da291c`],!0),r([`#ff9933`,`#fff`,`#138808`],!1)),n.push(a(`#de2910`,`#ffde00`),r([`#008751`,`#fff`,`#008751`]),r([`#006847`,`#fff`,`#ce1126`])),n.push(r([`#74acdf`,`#fff`,`#74acdf`],!1),r([`#fcd116`,`#003893`,`#ce1126`],!1),r([`#d91023`,`#fff`,`#d91023`])),n.push(r([`#00853f`,`#fdef42`,`#e31b23`]),r([`#002664`,`#fecb00`,`#c60c30`]),r([`#002b7f`,`#fcd116`,`#ce1126`])),n.push(r([`#ce2939`,`#fff`,`#477050`],!1),r([`#fff`,`#00966e`,`#d62612`],!1),r([`#0072ce`,`#000`,`#fff`],!1)),n.push(r([`#fdb913`,`#006a44`,`#c1272d`],!1),a(`#006a4e`,`#f42a41`),r([`#ce1126`,`#fff`,`#000`],!1)),n.push(r([`#007a3d`,`#fff`,`#000`],!1),r([`#0038a8`,`#ce1126`],!1),r([`#00732f`,`#fff`,`#000`],!1)),n.push(r([`#009739`,`#fedd00`,`#009739`],!1),r([`#e30a17`,`#fff`,`#e30a17`],!1),r([`#003399`,`#ffcc00`,`#003399`],!1)),n.push(r([`#ef3340`,`#fff`,`#00a3e0`]),r([`#d7141a`,`#fff`],!1),r([`#11457e`,`#fff`,`#d7141a`],!1)),n.push(r([`#0d5eaf`,`#fff`,`#0d5eaf`,`#fff`,`#0d5eaf`],!1),r([`#e8112d`,`#fff`,`#e8112d`]),r([`#00247d`,`#fff`,`#cf142b`])),n.forEach((e,t)=>e(t%8*128,Math.floor(t/8)*80));let o=new hi(e);return o.colorSpace=Le,o.anisotropy=4,{texture:o,count:n.length,cols:8,rows:8}}var Ff=class{constructor(e){this.game=e,this.world=e.world,this.map=e.map,this.group=new on,this.group.name=`decor`,e.scene.add(this.group),this.knocked=[],this.lodMeshes=[],this.buildTrees(),this.buildFlags(),this.buildProps(),this.buildMarkings(),this.buildRails(),this.buildRamps()}buildRamps(){let e=this.map.origin,t=this.map.mPerDeg,n=(n,r)=>[(r-e.lon)*t[1],-(n-e.lat)*t[0]],r=[[46.22238,6.1382,100],[46.20468,6.1529,70],[46.1996,6.1453,135],[46.2133,6.1518,30],[46.20835,6.1483,20],[46.2029,6.1436,200],[46.2172,6.151,15],[46.2053,6.157,60]];new Q;let i=4.4,a=1.7;this.ramps=[];for(let[e,t,o]of r){let[r,s]=n(e,t),c=o*Math.PI/180,l=Math.sin(c),u=-Math.cos(c),d=null;for(let e=0;e<=24&&!d;e+=3)for(let t=0;t<8&&!d;t++){let n=r+Math.cos(t*.785)*e,a=s+Math.sin(t*.785)*e,o=!0;for(let e=-14;e<=26&&o;e+=2){let t=n+l*e,r=a+u*e;(this.world.ground.heightAt(t,r)===-1/0||this.world.ground.kind!==0)&&(o=!1),this.world.segments.collideCircle(t,r,i*.7,-1e9,()=>{o=!1}),this.world.circles.query(t,r,i*.6,()=>{o=!1})}o&&(d=[n,a])}if(!d)continue;let[f,p]=d,m=this.world.terrain.heightAt(f-l*7/2,p-u*7/2),h=this.world.terrain.heightAt(f+l*7/2,p+u*7/2),g=(e,t)=>{let n=((e-f)*l+(t-p)*u)/7+.5,r=Math.max(0,Math.min(1,n));return m+(h-m)*r+a*r},_=-u,v=l,y=[f-l*7/2-_*i/2,p-u*7/2-v*i/2,f+l*7/2-_*i/2,p+u*7/2-v*i/2,f+l*7/2+_*i/2,p+u*7/2+v*i/2,f-l*7/2+_*i/2,p-u*7/2+v*i/2];this.world.decks.addPolygon(y,g,3);let b=new Q;for(let e=0;e<6;e++){let t=-4.4/2+e*i/6,n=t+i/6;b.prismX([[-7/2,0],[7/2,a],[7/2,0]],t,n,e%2?Z.white:Z.red)}b.cube(-4.4/2,0,7/2-.01,i/2,a,3.9,Z.darkBluishGray),b.studs(-4.4/2,7/2,i/2,3.9,a,Z.darkBluishGray);let x=b.toGeometry();x.rotateY(0);let S=new J(x,gl({studs:!0}));S.position.set(f,(m+h)/2-.02,p),S.rotation.y=Math.atan2(-l,-u)+Math.PI,S.castShadow=!0,S.receiveShadow=!0,this.group.add(S),this.ramps.push([f,p,o])}}ground(e,t){return this.world.ground.visualHeight(e,t)}buildTrees(){let e=this.map.trees,t=Nf(),n=gl({studs:!0,vertexColors:!1,roughness:.45,nearFade:!0}),r=gl({studs:!1,nearFade:!0}),i=new Map,a=this.game.rng;for(let t=0;t<e.length;t+=4){let n=e[t],r=e[t+1],a=e[t+2],o=e[t+3];if(this.world.surface.isWater(n,r))continue;let s=`${Math.floor(n/250)},${Math.floor(r/250)}`;i.has(s)||i.set(s,[]),i.get(s).push({x:n,z:r,crown:a,conifer:o})}let o=new K,s=new lt,c=new W,l=new W,u=new Vt,d=new q;this.treeMeshes=[];for(let e of i.values()){let i=e.filter(e=>!e.conifer),f=e.filter(e=>e.conifer),p=new li(t.trunk,r,e.length),m=i.length?new li(t.round,n,i.length):null,h=f.length?new li(t.cone,n,f.length):null,g=0,_=0;e.forEach((e,t)=>{let n=this.ground(e.x,e.z)-.1,r=Math.max(.75,Math.min(2.6,e.crown/5.5)),i=r*(.9+a()*.25);if(u.set(0,a()*Math.PI*2,0),s.setFromEuler(u),o.compose(l.set(e.x,n,e.z),s,c.set(r,i,r)),p.setMatrixAt(t,o),e.conifer)h.setMatrixAt(_,o),h.setColorAt(_++,d.set(a()<.5?Z.darkGreen:Z.green));else{m.setMatrixAt(g,o);let e=a()<.32;m.setColorAt(g++,d.set(e?Mf[Math.floor(a()*Mf.length)]:jf[Math.floor(a()*jf.length)]))}this.world.circles.add(e.x,e.z,.42*Math.max(1,r*.8),n+4*i,null)});for(let e of[p,m,h])e&&(e.castShadow=!0,e.receiveShadow=!0,e.computeBoundingSphere(),this.group.add(e),this.treeMeshes.push(e))}}buildFlags(){let e=this.map.props.flags,t=Pf(),n=new Q,r=new vl({aWave:1}),i=[],a=new q(1,1,1);for(let o=0;o<e.length;o+=4){let s=e[o],c=e[o+1],l=e[o+2],u=e[o+3],d=this.ground(s,c),f=l===1?6.2:9;n.cyl(s,d,c,.07,f,Z.lightBluishGray,6),n.cyl(s,d+f,c,.13,.12,Z.pearlGold,8);let p;p=l===1?u%2==0?0:1:l===2?2:3+u%(t.count-3);let m=p%t.cols/t.cols,h=1-Math.floor(p/t.cols)/t.rows,g=1/t.cols,_=1/t.rows,v=l===1?1.5:2,y=v*.62,b=.6,x=d+f-.05,S=r.count;for(let e=0;e<=3;e++)for(let t=0;t<=8;t++){let n=t/8,o=e/3;r.v(s+b*n*v,x-o*y,c+-.8*n*v,.8,0,b,a,{aWave:[n]}),i.push(m+n*g,h-o*_)}for(let e=0;e<3;e++)for(let t=0;t<8;t++){let n=S+e*9+t;r.idx.push(n,n+8+1,n+1,n+1,n+8+1,n+8+2)}}let o=n.toMesh(gl({studs:!1}));o.castShadow=!1,this.group.add(o);let s=r.toGeometry();s.setAttribute(`uv`,new Zn(i,2));let c=new J(s,gl({studs:!1,wave:!0,vertexColors:!1,map:t.texture,side:2,roughness:.6}));c.castShadow=!0,this.group.add(c)}knockable(e,t,n,r,i,a,o,s){let c=this.world.circles.add(n,r,i,a,{onHit:e=>e.speed<3.5?!1:(this.knock(c),e.vx*=.9,e.vz*=.9,!0)});return Object.assign(c,{mesh:e,index:t,colors:o,dir:s,y:this.ground(n,r)}),c}knock(e){e.active=!1;let t=new K;e.mesh.getMatrixAt(e.index,t),e.saved=t.clone(),e.mesh.setMatrixAt(e.index,new K().makeScale(0,0,0)),e.mesh.instanceMatrix.needsUpdate=!0,e.t=0,this.knocked.push(e);let n=this.game.player.vehicle;this.game.effects&&this.game.effects.bricks(e.x,e.y+1,e.z,n.vx/(n.speed||1),n.vz/(n.speed||1),9,!0,e.colors,n.speed*.6),this.game.audio&&this.game.audio.sfx(`knock`)}buildProps(){let e=this.map.props,t=new K,n=new lt,r=new W(1,1,1),i=new W,a=new Vt,o=gl({studs:!0});{let s=new Q;s.cyl(0,0,0,.12,3.2,Z.darkBluishGray,8),s.cube(-.25,2.3,-.2,.25,3.5,.2,Z.black),s.cyl(0,3.1,-.21,.13,.001,Z.red,8),s.cube(-.14,3,-.24,.14,3.24,-.2,Z.red),s.cube(-.14,2.74,-.24,.14,2.98,-.2,Z.yellow),s.cube(-.14,2.48,-.24,.14,2.72,-.2,Z.brightGreen),s.studs(-.25,-.2,.25,.2,3.5,Z.black);let c=e.lights,l=new li(s.toGeometry(),o,c.length/3);for(let e=0,o=0;e<c.length;e+=3,o++){let s=c[e+2],u=this.game.graph.nearest(c[e],c[e+1],e=>e.k<=7,30),d=(u?this.game.graph.edges[u.edge].w:8)/2+.9,f=Math.cos(s),p=Math.sin(s),m=c[e]+-p*d*(o%2?1:-1),h=c[e+1]+f*d*(o%2?1:-1),g=this.ground(m,h);a.set(0,-s+(o%2?0:Math.PI),0),n.setFromEuler(a),t.compose(i.set(m,g,h),n,r),l.setMatrixAt(o,t),this.knockable(l,o,m,h,.3,g+3.5,[Z.black,Z.darkBluishGray,Z.red,Z.yellow,Z.brightGreen])}l.castShadow=!0,l.computeBoundingSphere(),this.group.add(l)}{let s=new Q;s.cyl(0,0,0,.1,4.6,Z.darkBluishGray,8),s.cube(-.08,4.4,-.9,.08,4.56,.08,Z.darkBluishGray),s.cube(-.22,4.18,-1.15,.22,4.42,-.7,Z.white);let c=[],l=e.lamps;for(let e=0;e<l.length;e+=2)c.push([l[e],l[e+1],this.game.rng()*Math.PI*2]);let u=new li(s.toGeometry(),o,c.length);c.forEach(([e,o,s],c)=>{a.set(0,s,0),n.setFromEuler(a),t.compose(i.set(e,this.ground(e,o),o),n,r),u.setMatrixAt(c,t),this.knockable(u,c,e,o,.25,this.ground(e,o)+4.5,[Z.darkBluishGray,Z.white])}),u.castShadow=!0,u.computeBoundingSphere(),this.group.add(u)}{let s=new Q;s.cube(-.9,0,-.2,-.75,.42,.2,Z.darkBluishGray),s.cube(.75,0,-.2,.9,.42,.2,Z.darkBluishGray),s.cube(-1,.42,-.26,1,.54,.26,Z.reddishBrown),s.cube(-1,.54,.18,1,1,.28,Z.reddishBrown);let c=e.benches,l=new li(s.toGeometry(),o,c.length/3);for(let e=0,o=0;e<c.length;e+=3,o++){let s=c[e],u=c[e+1];a.set(0,-c[e+2],0),n.setFromEuler(a),t.compose(i.set(s,this.ground(s,u),u),n,r),l.setMatrixAt(o,t),this.knockable(l,o,s,u,.5,this.ground(s,u)+.9,[Z.reddishBrown,Z.darkBluishGray])}l.castShadow=!0,l.computeBoundingSphere(),this.group.add(l)}{let t=new Q,n=e.fountains;for(let e=0;e<n.length;e+=3){let r=n[e],i=n[e+1],a=n[e+2],o=this.ground(r,i);a?(t.cyl(r,o,i,1.6,.6,Z.lightBluishGray,12),t.cyl(r,o+.6,i,1.35,.02,Z.mediumAzure,12),t.cyl(r,o,i,.3,1.6,Z.lightBluishGray,8),this.world.circles.add(r,i,1.6,o+.6,null)):(t.cyl(r,o,i,.25,1,Z.darkBluishGray,8),t.cube(r-.05,o+.85,i-.35,r+.05,o+.95,i,Z.flatSilver),this.world.circles.add(r,i,.3,o+1,null))}let r=e.statues;for(let e=0;e<r.length;e+=3){let n=r[e],i=r[e+1],a=r[e+2],o=this.ground(n,i);this.world.surface.isWater(n,i)||(t.cube(n-.6,o,i-.6,n+.6,o+1.6,i+.6,Z.lightBluishGray),t.cube(n-.7,o+1.6,i-.7,n+.7,o+1.76,i+.7,Z.lightBluishGray),a?(t.cube(n-.35,o+1.76,i-.25,n+.35,o+2.2,i+.25,Z.oliveGreen),t.cyl(n,o+2.2,i,.24,.44,Z.oliveGreen,10)):(t.cube(n-.2,o+1.76,i-.15,n+.2,o+2.5,i+.15,Z.oliveGreen),t.cube(n-.4,o+2.5,i-.2,n+.4,o+3.2,i+.2,Z.oliveGreen),t.cyl(n,o+3.25,i,.24,.48,Z.oliveGreen,10)),this.world.circles.add(n,i,.8,o+1.7,null))}if(!t.empty){let e=t.toMesh(gl({studs:!0,seams:!0}));this.group.add(e)}}}buildMarkings(){let e=new vl,t=new q(16185074),n=new q(Z.yellow),r=(t,n,r,i,a,o,s=.05)=>{let c=Math.cos(r),l=Math.sin(r),u=-l,d=c,f=[[t-c*i/2-u*a/2,n-l*i/2-d*a/2],[t+c*i/2-u*a/2,n+l*i/2-d*a/2],[t+c*i/2+u*a/2,n+l*i/2+d*a/2],[t-c*i/2+u*a/2,n-l*i/2+d*a/2]],p=f.map(([t,n])=>e.v(t,this.world.ground.visualHeight(t,n)+s,n,0,1,0,o)),[m,h,g]=f;(h[1]-m[1])*(g[0]-m[0])-(h[0]-m[0])*(g[1]-m[1])>=0?e.idx.push(p[0],p[1],p[2],p[0],p[2],p[3]):e.idx.push(p[0],p[2],p[1],p[0],p[3],p[2])};for(let e of this.map.roads){if(!e.m||e.b||e.tram)continue;let n=e.p,i=0;for(let a=0;a+3<n.length;a+=2){let o=n[a],s=n[a+1],c=n[a+2],l=n[a+3],u=Math.hypot(c-o,l-s),d=Math.atan2(l-s,c-o);for(let n=i;n<u;n+=6){let i=(n+1.5)/u;if(i>1)break;r(o+(c-o)*i,s+(l-s)*i,d,Math.min(3,u-n),.16,(e.k,t))}i=(i-u)%6,i<0&&(i+=6)}}let i=this.map.props.crossings;for(let e=0;e<i.length;e+=4){let t=i[e],a=i[e+1],o=i[e+2],s=i[e+3],c=Math.cos(o),l=Math.sin(o),u=Math.max(3,Math.round(s/1));for(let e=0;e<u;e++){let i=(e-(u-1)/2)*1;r(t-l*i,a+c*i,o,3,.5,n,.06)}}let a=new J(e.toGeometry(),new Li({vertexColors:!0,roughness:.55,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.receiveShadow=!0,this.group.add(a)}buildRails(){let e=new vl,t=[],n=new q(9278104),r=new q(4869456),i=(t,n,r,i,a,o,s,c)=>{let l=Math.hypot(r-t,i-n)||1,u=-(i-n)/l,d=(r-t)/l,f=Math.max(1,Math.ceil(l/6));for(let l=0;l<f;l++){let p=l/f,m=(l+1)/f,h=t+(r-t)*p+u*a,g=n+(i-n)*p+d*a,_=t+(r-t)*m+u*a,v=n+(i-n)*m+d*a,y=this.world.ground.visualHeight(h,g)+s,b=this.world.ground.visualHeight(_,v)+s,x=[e.v(h-u*o,y,g-d*o,0,1,0,c),e.v(_-u*o,b,v-d*o,0,1,0,c),e.v(_+u*o,b,v+d*o,0,1,0,c),e.v(h+u*o,y,g+d*o,0,1,0,c)];(v-g)*(u*2*o)-(_-h)*(d*2*o)>=0?e.idx.push(x[0],x[1],x[2],x[0],x[2],x[3]):e.idx.push(x[0],x[2],x[1],x[0],x[3],x[2])}};for(let e of this.map.rails){let a=e.p,o=e.k===1,s=o?.5:.72;for(let e=0;e+3<a.length;e+=2){let c=a[e],l=a[e+1],u=a[e+2],d=a[e+3];if(!this.world.surface.isWater((c+u)/2,(l+d)/2)&&(i(c,l,u,d,-s,.07,o?.035:.16,o?r:n),i(c,l,u,d,s,.07,o?.035:.16,o?r:n),!o)){let e=Math.hypot(u-c,d-l);for(let n=.4;n<e;n+=1.6)t.push(c+(u-c)*n/e,l+(d-l)*n/e,Math.atan2(d-l,u-c))}}}let a=new J(e.toGeometry(),new Li({vertexColors:!0,roughness:.35,metalness:.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));if(a.receiveShadow=!0,this.group.add(a),t.length){let e=new Q;e.cube(-.2,0,-1.05,.2,.12,1.05,Z.reddishBrown);let n=e.toGeometry(),r=gl({studs:!1}),i=new Map;for(let e=0;e<t.length;e+=3){let n=`${Math.floor(t[e]/300)},${Math.floor(t[e+1]/300)}`;i.has(n)||i.set(n,[]),i.get(n).push(e)}let a=new K,o=new lt,s=new Vt,c=new W,l=new W(1,1,1);for(let e of i.values()){let i=new li(n,r,e.length);e.forEach((e,n)=>{s.set(0,-t[e+2],0),o.setFromEuler(s),a.compose(c.set(t[e],this.world.ground.visualHeight(t[e],t[e+1])+.02,t[e+1]),o,l),i.setMatrixAt(n,a)}),i.receiveShadow=!0,i.computeBoundingSphere(),this.group.add(i),this.lodMeshes.push([i,260])}}}update(e,t,n){if(n&&this.treeMeshes){let e=n.position.x,t=n.position.z;for(let n of this.treeMeshes){let r=n.boundingSphere.center;n.visible=Math.hypot(r.x-e,r.z-t)-n.boundingSphere.radius<(this.treeDistance||650)}for(let[n,r]of this.lodMeshes){let i=n.boundingSphere.center;n.visible=Math.hypot(i.x-e,i.z-t)-n.boundingSphere.radius<r}}for(let n=this.knocked.length-1;n>=0;n--){let r=this.knocked[n];r.t+=e,r.t>25&&Math.hypot(r.x-t.x,r.z-t.z)>90&&(r.mesh.setMatrixAt(r.index,r.saved),r.mesh.instanceMatrix.needsUpdate=!0,r.active=!0,this.knocked.splice(n,1))}}};function If(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`),e,t);let i=new hi(r);return i.colorSpace=Le,i.anisotropy=8,i}function Lf(e,t,n,{bg:r=`#1b2a34`,fg:i=`#ffffff`,border:a=`#f2cd37`,font:o=`Arial Black`}={}){let s=If(1024,Math.round(1024*n/t),(t,n,s)=>{t.fillStyle=a,t.fillRect(0,0,n,s),t.fillStyle=r,t.fillRect(10,10,n-20,s-20),t.fillStyle=i;let c=s*.62;for(t.font=`900 ${c}px "${o}", Arial, sans-serif`;t.measureText(e).width>n*.9&&c>10;)c-=2,t.font=`900 ${c}px "${o}", Arial, sans-serif`;t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(e,n/2,s/2+c*.04)});return new J(new wi(t,n),new Li({map:s,roughness:.4}))}function Rf(e){let t=0,n=0;for(let r of e)t+=r[0],n+=r[1];t/=e.length,n/=e.length;let r=0,i=0,a=0;for(let[o,s]of e){let e=o-t,c=s-n;r+=e*e,i+=c*c,a+=e*c}let o=.5*Math.atan2(2*a,r-i),s=Math.cos(o),c=Math.sin(o),l=1/0,u=-1/0,d=1/0,f=-1/0;for(let[r,i]of e){let e=(r-t)*s+(i-n)*c,a=-(r-t)*c+(i-n)*s;l=Math.min(l,e),u=Math.max(u,e),d=Math.min(d,a),f=Math.max(f,a)}return{cx:t,cz:n,ax:s,az:c,t0:l,t1:u,s0:d,s1:f}}var zf=class{constructor(e){this.game=e,this.world=e.world,this.map=e.map,this.group=new on,this.group.name=`landmarks`,e.scene.add(this.group),this.mat=gl({studs:!0,seams:!0}),this.plain=gl({studs:!0}),this.lm=Object.fromEntries(this.map.landmarks.map(e=>[e.id,e])),this.animated=[],this.t=0;let t=[()=>this.jetDeau(),()=>this.brokenChair(),()=>this.cathedral(),()=>this.reformationWall(),()=>this.flowerClock(),()=>this.paquis(),()=>this.cornavin(),()=>this.neuve(),()=>this.towers(),()=>this.montBlanc(),()=>this.chess(),()=>this.steamer(),()=>this.swans(),()=>this.mouettes()];for(let e of t)try{e()}catch(e){console.warn(`landmark failed`,e)}}P(e,t){let n=this.map.origin;return[(t-n.lon)*this.map.mPerDeg[1],-(e-n.lat)*this.map.mPerDeg[0]]}gy(e,t){return this.world.ground.visualHeight(e,t)}place(e,t,n,r=0,i=null){return e.position.set(t,i??this.gy(t,n),n),e.rotation.y=r,e.updateMatrixWorld(!0),this.group.add(e),e}jetDeau(){let[e,t]=this.lm.jetdeau.feature,n=new Q;n.cyl(0,-1.5,0,3.2,2.6,Z.lightBluishGray,16),n.cyl(0,1.1,0,.7,.5,Z.darkBluishGray,10),this.place(n.toMesh(this.mat),e,t,0,0);let[r,i]=this.P(46.208011,6.155993),a=new Q;a.cyl(0,0,0,1.2,1,Z.lightBluishGray,12),a.cyl(0,1,0,.75,6,Z.white,12),a.cyl(0,4,0,.78,.6,Z.red,12),a.cyl(0,7,0,1.05,.25,Z.darkBluishGray,12),a.cyl(0,7.9,0,.75,.4,Z.red,12,{r2:.2});let o=this.place(a.toMesh(this.mat),r,i),s=new J(new xi(.55,.55,.7,12),new Li({color:16773536,emissive:16765002,emissiveIntensity:1}));s.position.set(0,7.6,0),o.add(s),this.animated.push(e=>{s.material.emissiveIntensity=.4+.8*(Math.sin(e*2.2)>.6)}),this.world.circles.add(r,i,1.2,9,null);let c=2200,l=new xi(.5,.5,.5,8),u=new Li({color:15923967,transparent:!0,opacity:.62,roughness:.1,emissive:13163754,emissiveIntensity:.55,depthWrite:!1}),d=new J(new xi(1.5,.45,132,12,1,!0).translate(0,67.2,0),new Li({color:16777215,transparent:!0,opacity:.5,emissive:12572390,emissiveIntensity:.6,depthWrite:!1,side:2}));d.position.set(e,0,t),this.group.add(d);let f=new li(l,u,c);f.frustumCulled=!1,f.instanceMatrix.setUsage(He),this.group.add(f);let p=new Float32Array(c*6),m=new Float32Array(c),h=new Uint8Array(c),g=(n,r)=>{let i=Math.random()*Math.PI*2,a=Math.random()*.35;p[n*6]=e+Math.cos(i)*a,p[n*6+1]=1.4,p[n*6+2]=t+Math.sin(i)*a;let o=Math.random()<.85?.6:2.2;p[n*6+3]=(Math.random()-.5)*o,p[n*6+4]=50.5+Math.random()*3.2,p[n*6+5]=(Math.random()-.5)*o,m[n]=r,h[n]=0};for(let e=0;e<c;e++){g(e,0);let t=e/c*11;p[e*6]+=p[e*6+3]*t,p[e*6+2]+=p[e*6+5]*t,p[e*6+1]+=p[e*6+4]*t-4.9*t*t,p[e*6+4]-=9.81*t,m[e]=t}let _=new K,v=new lt,y=new W,b=new W,x=[3.2,-1.6];this.jet={x:e,z:t},this.animated.push((e,t)=>{for(let e=0;e<c;e++){let n=e*6;if(m[e]+=t,p[n+4]-=9.81*t,p[n+4]<0){if(!h[e]){h[e]=1;let t=Math.random()*Math.PI*2,r=1+Math.random()*3.5;p[n+3]+=Math.cos(t)*r,p[n+5]+=Math.sin(t)*r}p[n+3]+=(x[0]-p[n+3])*t*.6,p[n+5]+=(x[1]-p[n+5])*t*.6,p[n+4]=Math.max(p[n+4],-14)}else p[n+1]>60&&(p[n+3]+=x[0]*t*.08,p[n+5]+=x[1]*t*.08);p[n]+=p[n+3]*t,p[n+1]+=p[n+4]*t,p[n+2]+=p[n+5]*t,p[n+1]<0&&g(e,0);let r=Math.max(0,p[n+1]),i=1+Math.min(1,r/140)*2.8+(p[n+4]<0?1.6+Math.min(2,-p[n+4]*.12):0);_.compose(b.set(p[n],p[n+1],p[n+2]),v,y.set(i,i*.7,i)),f.setMatrixAt(e,_)}f.instanceMatrix.needsUpdate=!0})}brokenChair(){let[e,t]=this.lm.chair.feature,n=Z.mediumNougat,r=Z.reddishBrown,i=new Q,a=.45,o=5.4;for(let[s,c,l]of[[-2.55,-2.55,!0],[2.55,-2.55,!1],[-2.55,2.55,!1],[2.55,2.55,!1]]){let u=l?2.7:0;i.cube(s-a,u,c-a,s+a,o,c+a,r),l?(i.cube(s-a,u-.5,c-a,s-.05,u,c-.1,r),i.cube(s+.1,u-.3,c,s+a,u,c+a,r),i.cube(s-.2,u-.8,c+.05,s+.15,u-.3,c+.4,n)):this.world.circles.add(e+s,t+c,.7,20,null)}i.cube(-2.8,1.4,2.4,2.8,1.8,2.7,r),i.cube(2.4,1.4,-2.8,2.7,1.8,2.8,r),i.cube(-3.2,o,-3.2,3.2,6.2,3.2,n),i.studs(-3.2,-3.2,3.2,3.2,6.2,n,.8);for(let e of[-2.55,2.55])i.cube(e-a,6.2,3-2*a,e+a,12,3,r);for(let e of[8.2,9.8,11.2])i.cube(-2.5,e,2.25,2.5,e+.6,2.85,n);for(let e of[-1.2,0,1.2])i.cube(e-.18,6.2,2.4,e+.18,8.2,2.7,n);i.cube(-3.1,12,2,3.1,12.4,3.1,n);let[s,c]=this.lm.chair.drop;this.place(i.toMesh(this.mat),e,t,Math.atan2(-(s-e),-(c-t)));let l=Lf(`BROKEN CHAIR · Daniel Berset 1997`,6,.9,{bg:`#f4f4f4`,fg:`#1b2a34`,border:`#c91a09`});l.position.set(e+5,this.gy(e+5,t+2)+.9,t+6),l.rotation.y=.4,this.group.add(l)}cathedral(){let e=this.map.buildings.find(e=>e.special===`cathedral`);if(!e)return;let t=qu(e.r),n=Rf(t),r=e.g-.5,i=Z.lightBluishGray,a=Z.darkBluishGray,o=Z.darkBluishGray,s=Z.sandGreen,c=new Q;for(let n=0;n<t.length;n++){let a=t[n],o=t[(n+1)%t.length],s=o[0]-a[0],l=o[1]-a[1],u=Math.hypot(s,l);u<.05||c.face([[a[0],r,a[1]],[o[0],r,o[1]],[o[0],e.g+17,o[1]],[a[0],e.g+17,a[1]]],[l/u,0,-s/u],i)}{let n=t.flat(),r=Hl(n,[]);for(let t=0;t<r.length;t+=3)c.face([r[t],r[t+1],r[t+2]].map(t=>[n[t*2],e.g+17,n[t*2+1]]),[0,1,0],a)}let l=c.toMesh(this.mat);this.group.add(l);let u=new on,{ax:d,az:f,t0:p,t1:m,s0:h,s1:g}=n;d<0&&(d=-d,f=-f,[p,m]=[-m,-p],[h,g]=[-g,-h]),u.position.set(n.cx,e.g,n.cz),u.rotation.y=-Math.atan2(f,d),this.group.add(u);let _=m-p,v=(g-h)*.38,y=new Q;y.prismX([[-v,17],[v,17],[0,25]],p+8,m-6,o);let b=p+_*.58;for(let e of[-1,1]){let t=e*(v+1.5);y.cube(b-4.5,0,t-4.5,b+4.5,38,t+4.5,i),y.cube(b-4.8,38,t-4.8,b+4.8,39,t+4.8,a);for(let e of[30])y.cube(b-4.55,e,t-1.2,b+4.55,e+5,t+1.2,Z.black),y.cube(b-1.2,e,t-4.55,b+1.2,e+5,t+4.55,Z.black);y.pyramid(b-4.8,t-4.8,b+4.8,t+4.8,39,44,o)}y.cube(b-3,17,-3,b+3,34,3,i),y.cyl(b,34,0,2.6,4,s,8),y.cone(b,38,0,2.6,34,s,8),y.cyl(b,72,0,.15,3,Z.pearlGold,6);let x=p-1;y.cube(x-9,0,-10,x,1.2,10,i);for(let e=0;e<6;e++)y.cyl(x-6.5,1.2,-8.5+e*3.4,.85,12.5,Z.white,12);y.cube(x-8.5,13.7,-10,x,15,10,Z.white),y.prismX([[-10,15],[10,15],[0,20.5]],x-8.5,x,Z.white),y.cyl(x+4,17,0,5.2,4,i,16),y.cyl(x+4,21,0,5.2,4.5,s,16,{r2:2.2}),y.cyl(x+4,25.5,0,1.6,2.5,s,12,{r2:.3}),u.add(y.toMesh(this.mat));let S=this.clockFace(2.2);S.position.set(b,33,v+6.05),u.add(S),this.cathedralGroup=u}reformationWall(){let[e,t]=this.P(46.200552,6.145387),[n,r]=this.P(46.200037,6.14646),i=Math.hypot(n-e,r-t),a=(n-e)/i,o=(r-t)/i,s=-o,c=a,[l,u]=this.P(46.1995,6.1452);s*(l-e)+c*(u-t)<0&&(s=-s,c=-c);let d=new on,f=(e+n)/2,p=(t+r)/2,m=this.gy(f+s*6,p+c*6);d.position.set(f,m,p),d.rotation.y=-Math.atan2(o,a);let h=-o*s+a*c>0?1:-1,g=new Q,_=Z.tan,v=Z.darkTan;g.cube(-i/2,-1,-3*h,i/2,9,0,_),g.cube(-i/2,9,-3.4*h,i/2,9.6,.3*h,v),g.cube(-12,-1,-1.5*h,12,11,.6*h,_),g.cube(-12.4,11,-1.9*h,12.4,11.7,.9*h,v),g.cube(-10,-1,.6*h,10,1.6,3.2*h,Z.lightBluishGray);let y=2830131,b=(e,t,n=!0)=>{let r=1.9*h,i=1.6;g.prismX([[r-.9*t,i],[r+.9*t,i],[r+.55*t,i+3.4*t],[r-.55*t,i+3.4*t]],e-.75*t,e+.75*t,y),g.cyl(e,i+3.4*t,r,.42*t,.9*t,3817284,10),n&&g.cube(e-.3*t,i+3*t,r+.15*t*h,e+.3*t,i+3.65*t,r+.48*t*h,2303786),g.cyl(e,i+4.25*t,r,.5*t,.18*t,y,10),g.cube(e-.3*t,i+2.2*t,r+.3*t*h,e+.3*t,i+2.6*t,r+.75*t*h,3817284)};[-6.6,-2.2,2.2,6.6].forEach(e=>b(e,1.25)),[-30,-22,-15,15,22,30].forEach(e=>{g.cube(e-1.2,-1,0,e+1.2,1.2,2.4*h,Z.lightBluishGray),b(e,.75)}),d.add(g.toMesh(this.mat));let x=Lf(`POST TENEBRAS LUX`,20,1.6,{bg:`#d9c49a`,fg:`#3a3f44`,border:`#958a73`,font:`Georgia`});x.position.set(0,9.3,.62*h+.01*h),h<0&&(x.rotation.y=Math.PI),d.add(x);for(let[e,t]of[[-i/2+6,`1536`],[i/2-6,`1602`]]){let n=Lf(t,4,1.4,{bg:`#d9c49a`,fg:`#3a3f44`,border:`#958a73`,font:`Georgia`});n.position.set(e,6.5,.02*h),h<0&&(n.rotation.y=Math.PI),d.add(n)}this.group.add(d),this.world.segments.add(e,t,n,r,1/0,1)}clockFace(e){let t=new on,n=new Q;n.cyl(0,-.15,0,e,.15,Z.white,32),n.cyl(0,0,0,e*.12,.08,Z.black,12);for(let t=0;t<12;t++){let r=t/12*Math.PI*2;n.cube(Math.sin(r)*e*.82-.06*e,0,Math.cos(r)*e*.82-.03*e,Math.sin(r)*e*.82+.06*e,.05,Math.cos(r)*e*.82+.03*e,Z.black)}let r=n.toMesh(this.plain);r.rotation.x=Math.PI/2,t.add(r);let i=(e,n,r,i)=>{let a=new Q;a.cube(-n/2,0,-.05,n/2,e,.05,r);let o=a.toMesh(this.plain);return o.position.z=i,t.add(o),o},a=i(e*.5,e*.09,Z.black,.12),o=i(e*.78,e*.06,Z.black,.18);return this.animated.push(()=>{let e=Hf();a.rotation.z=-(e.h%12+e.m/60)/12*Math.PI*2,o.rotation.z=-(e.m+e.s/60)/60*Math.PI*2}),t}flowerClock(){let[e,t]=this.lm.jardin.feature,n=3.3,r=new on,i=new Q,a=[Z.red,Z.yellow,Z.white,Z.magenta,Z.orange,Z.mediumLavender];i.cyl(0,-.4,0,3.6999999999999997,.4,Z.green,32);for(let e=0;e<6;e++){let t=n-e*.5,r=Math.max(6,Math.round(2*Math.PI*t/.45));for(let n=0;n<r;n++){let o=n/r*Math.PI*2,s=e===0&&Math.round(n/r*12)===n/r*12;i.cyl(Math.cos(o)*t,0,Math.sin(o)*t,.17,.16,s?Z.white:a[(e+ +(n%3==0))%a.length],8)}}let o=i.toMesh(this.plain);r.add(o);let s=(e,t,n,i)=>{let a=new Q;a.cube(-t/2,0,0,t/2,.12,e,n);let o=a.toMesh(this.plain);return o.position.y=i,r.add(o),o},c=s(n*.55,.32,Z.black,.18),l=s(n*.85,.22,Z.black,.32),u=s(n*.9,.08,Z.red,.46);this.animated.push(()=>{let e=Hf(),t=e=>Math.PI-e*Math.PI*2;c.rotation.y=t((e.h%12+e.m/60)/12),l.rotation.y=t((e.m+e.s/60)/60),u.rotation.y=t((e.s+e.ms/1e3)/60)});let d=new on;d.add(r),r.rotation.x=.55;let f=this.gy(e,t);d.position.set(e,f+1.2,t),d.rotation.y=.25,this.group.add(d),this.world.circles.add(e,t,n*.8,f+3,null);let p=Lf(`L'HORLOGE FLEURIE`,6,.8,{bg:`#237841`,fg:`#ffffff`,border:`#f4f4f4`});p.position.set(e+Math.sin(.25)*4.5,f+.6,t+Math.cos(.25)*4.5),p.rotation.y=.25,this.group.add(p);let[m,h]=this.P(46.204664,6.150395),g=new Q;g.cube(-3,0,-2,3,1.2,2,Z.lightBluishGray),g.cube(-2.4,1.2,-1.5,2.4,4.8,1.5,Z.lightBluishGray);for(let e of[-.9,.9])g.prismZ([[e-.9,4.8],[e+.9,4.8],[e+.5,8.2],[e-.5,8.2]],-.6,.6,Z.oliveGreen),g.cyl(e,8.2,0,.42,.85,Z.oliveGreen,10);g.cube(-.15,8,-.15,1.6,8.3,.15,Z.oliveGreen);let _=g.toMesh(this.mat);this.place(_,m,h,2.6),this.world.circles.add(m,h,3,20,null)}paquis(){let[e,t]=this.lm.paquis.feature,n=new Q;n.cube(-1.6,-.5,-1.6,1.6,1.2,1.6,Z.lightBluishGray),n.cyl(0,1.2,0,1,12,Z.white,16,{r2:.75}),n.cyl(0,13.2,0,1.4,.3,Z.darkGreen,16),n.cyl(0,15.3,0,.95,.5,Z.darkGreen,12,{r2:.4}),n.cyl(0,15.8,0,.2,1.2,Z.darkGreen,6);let r=this.place(n.toMesh(this.mat),e,t),i=new J(new xi(.8,.8,1.8,12),new Li({color:16774848,emissive:7208820,emissiveIntensity:.8,transparent:!0,opacity:.8}));i.position.y=14.4,r.add(i),this.animated.push(e=>{i.material.emissiveIntensity=Math.sin(e*1.7)>.5?1.4:.15}),this.world.circles.add(e,t,1.7,30,null);let a=new Q,[o,s]=this.P(46.21016,6.15445),[c,l]=this.P(46.20983,6.15545);for(let e=0;e<8;e++){let t=e/7,n=o+(c-o)*t,r=s+(l-s)*t;if(this.world.ground.heightAt(n,r)===-1/0)continue;let i=this.gy(n,r);a.cube(n-1.1,i,r-1.1,n+1.1,i+2.6,r+1.1,e%2?Z.white:Z.blue),a.cube(n-1.3,i+2.6,r-1.3,n+1.3,i+2.8,r+1.3,Z.red)}a.empty||this.group.add(a.toMesh(this.mat));let[u,d]=this.P(46.20985,6.156);if(this.world.ground.heightAt(u,d)!==-1/0){let e=new Q;e.cube(-1.2,0,-1.2,1.2,6,1.2,Z.lightBluishGray),e.cube(-1.4,3,-1.4,3.8,3.3,1.4,Z.lightBluishGray),e.cube(-1.4,6,-1.4,4.8,6.3,1.4,Z.lightBluishGray),e.cube(-1.4,6.3,-1.4,-1.2,7.3,1.4,Z.blue),this.place(e.toMesh(this.mat),u,d,.4),this.world.circles.add(u,d,1.4,6,null)}let[f,p]=this.lm.paquis.drop,m=Lf(`BAINS DES PÂQUIS`,9,1.4,{bg:`#0055bf`,fg:`#ffffff`,border:`#f4f4f4`}),h=this.gy(f,p);m.position.set(f+12,h+4.2,p+4),m.rotation.y=-1.9,this.group.add(m);let g=new Q;for(let e of[-4.2,4.2]){let t=f+12+Math.cos(-1.9)*e,n=p+4-Math.sin(-1.9)*e;g.cyl(t,h,n,.18,4.9,Z.white,8)}this.group.add(g.toMesh(this.plain))}cornavin(){let e=this.map.buildings.find(e=>e.special===`station`);if(!e)return;let t=qu(e.r),[n,r]=this.lm.cornavin.drop,i=null;for(let e=0;e<t.length;e++){let a=t[e],o=t[(e+1)%t.length],s=Math.hypot(o[0]-a[0],o[1]-a[1]);if(s<25)continue;let c=(a[0]+o[0])/2,l=(a[1]+o[1])/2,u=s-Math.hypot(c-n,l-r)*1.5;(!i||u>i.score)&&(i={p:a,q:o,L:s,mx:c,mz:l,score:u})}if(!i)return;let{p:a,q:o,L:s,mx:c,mz:l}=i,u=(o[1]-a[1])/s,d=-(o[0]-a[0])/s;u*(n-c)+d*(r-l)<0&&(u=-u,d=-d);let f=e.g,p=e.s*.6+e.h,m=new on;m.position.set(c+u*.05,f,l+d*.05),m.rotation.y=Math.atan2(u,d);let h=Lf(`GENÈVE · GARE CORNAVIN`,Math.min(34,s*.6),2.4,{bg:`#c91a09`,fg:`#ffffff`,border:`#f4f4f4`});h.position.set(0,p-3.2,.12),m.add(h);let g=this.clockFace(2);g.position.set(0,p-.2,.25);let _=new Q;_.cube(-2.6,p-2.6,0,2.6,p+2.4,.4,Z.tan),_.pyramid(-2.6,0,2.6,.4,p+2.4,p+3.6,Z.darkBluishGray),m.add(_.toMesh(this.mat)),g.position.z=.42,m.add(g);let v=new Q;v.cube(-14,5.2,0,14,5.6,4.5,Z.darkBluishGray);for(let e of[-13,-6.5,0,6.5,13])v.cyl(e,0,4.1,.25,5.2,Z.white,8);m.add(v.toMesh(this.mat)),this.group.add(m)}neuve(){let[e,t]=this.lm.neuve.feature,n=new Q;n.cube(-2.2,0,-1.1,2.2,2.6,1.1,Z.lightBluishGray),n.cube(-2.5,2.6,-1.4,2.5,3,1.4,Z.darkBluishGray);let r=5069375;n.cube(-1.4,4.2,-.45,1.4,5.3,.45,r);for(let[e,t]of[[-1.1,-.3],[-1.1,.3],[1.1,-.3],[1.1,.3]])n.cube(e-.16,3,t-.14,e+.16,4.3,t+.14,r);n.prismZ([[1.1,4.9],[1.5,5],[2.2,6.3],[1.8,6.5]],-.25,.25,r),n.cube(1.9,6,-.25,2.7,6.5,.25,r),n.cube(-1.7,4.4,-.1,-1.3,5.3,.1,r),n.cube(-.35,5.3,-.35,.35,6.5,.35,r),n.cyl(0,6.5,0,.26,.5,r,10),n.cube(-.5,7,-.12,.5,7.25,.12,2830131),this.place(n.toMesh(this.mat),e,t,.4),this.world.circles.add(e,t,2.6,8,null);let i=this.map.buildings.find(e=>e.special===`theatre`);if(i){let n=qu(i.r),r=Rf(n),a=i.g+i.s*.6+i.h,o=new Q;o.cyl(0,0,0,3.4,2,Z.sandGreen,12),o.cyl(0,2,0,3.4,3.2,Z.sandGreen,12,{r2:.8}),o.cyl(0,5.2,0,.35,1.2,Z.pearlGold,8),o.cyl(0,6.4,0,.6,.6,Z.pearlGold,8,{r2:.2}),this.place(o.toMesh(this.mat),r.cx,r.cz,0,a);let s=Lf(`GRAND THÉÂTRE`,12,1.6,{bg:`#f6d7b3`,fg:`#720e0f`,border:`#aa7f2e`,font:`Georgia`}),c=e-r.cx,l=t-r.cz,u=Math.hypot(c,l)||1,d=0;for(let e of n)d=Math.max(d,(e[0]-r.cx)*(c/u)+(e[1]-r.cz)*(l/u));s.position.set(r.cx+c/u*(d+.3),a-2.2,r.cz+l/u*(d+.3)),s.rotation.y=Math.atan2(c,l),this.group.add(s)}}towers(){for(let e of[`tower_ile`,`tower_molard`]){let t=this.map.buildings.find(t=>t.special===e);if(!t)continue;let n=Rf(qu(t.r)),r=t.g+t.s*.6+t.h,i=new on;i.position.set(n.cx,r,n.cz),i.rotation.y=-Math.atan2(n.az,n.ax);let a=new Q,o=(n.t1-n.t0)/2+.4,s=(n.s1-n.s0)/2+.4;a.pyramid(-o,-s,o,s,0,Math.max(o,s)*1.8,e===`tower_ile`?Z.darkBluishGray:Z.darkRed),a.cyl(0,Math.max(o,s)*1.8,0,.12,1.6,Z.pearlGold,6),i.add(a.toMesh(this.mat));let c=this.clockFace(1.1);c.position.set(0,-2.5,s-.35),i.add(c),this.group.add(i)}}montBlanc(){let e=this.map.bridges.find(e=>/Mont-Blanc/.test(e.name||``));if(!e)return;let t=Rf(qu(e.r[0]));for(let e of[t.t0+6,t.t1-6]){let n=t.cx+t.ax*e,r=t.cz+t.az*e,i=Lf(`PONT DU MONT-BLANC`,10,1.3,{bg:`#0055bf`,fg:`#ffffff`,border:`#f4f4f4`}),a=t.s1+1,o=n-t.az*a,s=r+t.ax*a;i.position.set(o,this.gy(o,s)+3.6,s),i.rotation.y=-Math.atan2(t.az,t.ax)+(e<0?Math.PI/2:-Math.PI/2),this.group.add(i);let c=new Q;for(let e of[-4.6,4.6])c.cyl(o+t.ax*e,this.gy(o,s),s+t.az*e,.15,4.3,Z.white,8);this.group.add(c.toMesh(this.plain))}}chess(){let[e,t]=this.P(46.20063,6.14438),n=[];for(let r=0;r<40&&n.length<2;r+=2)for(let i=0;i<12&&n.length<2;i++){let a=e+Math.cos(i*.52)*r,o=t+Math.sin(i*.52)*r,s=!this.world.surface.isWater(a,o);this.world.segments.collideCircle(a,o,5.5,-1e9,()=>{s=!1}),this.world.circles.query(a,o,4.8,()=>{s=!1}),s&&n.every(e=>Math.hypot(e[0]-a,e[1]-o)>12)&&n.push([a,o])}let r={},i=e=>{let t=new Q,n=16777215;return t.cyl(0,0,0,.32,.12,n,10),e===`pawn`&&(t.cyl(0,.12,0,.18,.45,n,8,{r2:.12}),t.cyl(0,.57,0,.17,.2,n,8)),e===`rook`&&(t.cyl(0,.12,0,.22,.75,n,8),t.cyl(0,.87,0,.28,.2,n,8)),e===`king`&&(t.cyl(0,.12,0,.22,.95,n,8,{r2:.16}),t.cube(-.05,1.07,-.05,.05,1.42,.05,n),t.cube(-.16,1.22,-.05,.16,1.3,.05,n)),t.toGeometry()};for(let e of[`pawn`,`rook`,`king`])r[e]=i(e);let a=new Q,o=.8,s=[];for(let[e,t]of n){let n=this.gy(e,t)+.02;a.cube(e-4*o-.2,n-.3,t-4*o-.2,e+4*o+.2,n,t+4*o+.2,Z.darkBluishGray);for(let r=0;r<8;r++)for(let i=0;i<8;i++)a.cube(e+(r-4)*o,n,t+(i-4)*o,e+(r-3)*o,n+.06,t+(i-3)*o,(r+i)%2?Z.white:Z.black);let r=this.game.rng;for(let i=0;i<14;i++){let a=Math.floor(r()*8),c=Math.floor(r()*8),l=i<2?`king`:i<5?`rook`:`pawn`;s.push({kind:l,x:e+(a-3.5)*o,z:t+(c-3.5)*o,y:n+.06,black:i%2==0})}}if(!n.length)return;this.group.add(a.toMesh(this.plain));let c=this.game.decor;for(let e of[`pawn`,`rook`,`king`]){let t=s.filter(t=>t.kind===e);if(!t.length)continue;let n=new li(r[e],gl({studs:!0,vertexColors:!1}),t.length),i=new K;t.forEach((e,t)=>{i.makeScale(1.6,1.6,1.6).setPosition(e.x,e.y,e.z),n.setMatrixAt(t,i),n.setColorAt(t,new q(e.black?Z.black:Z.white)),c&&c.knockable(n,t,e.x,e.z,.4,e.y+2,[e.black?Z.black:Z.white])}),n.castShadow=!0,n.computeBoundingSphere(),this.group.add(n)}}steamer(){let[e,t]=this.P(46.20545,6.15175);if(!this.world.surface.isWater(e,t))return;let n=new Q,r=3.6;n.prismY([[-26,0],[22,-3.6],[26,0],[22,r],[-24,r],[-26,r*.6],[-26,-2.16],[-24,-3.6]],-1.2,1.4,Z.white),n.cube(-25,1.4,-3.6+.3,21,1.6,3.3000000000000003,Z.reddishBrown),n.cube(-20,1.6,-2.8,17,4.2,2.8,Z.white);for(let e=-19;e<17;e+=2.4)n.cube(e,2.6,-2.85,e+1.2,3.6,2.85,Z.darkBlue);n.cube(-21,4.2,-3.2,19,4.4,3.2,Z.white),n.cyl(-2,4.4,0,.9,4.5,Z.tan,12),n.cyl(-2,8.9,0,.95,.6,Z.black,12);for(let e of[-1,1])n.cyl(-4,.4,e*4.1,2.4,.6,Z.darkBluishGray,16),n.cube(-6.5,1.4,e*3.4-.6,-1.5,3.4,e*4.6,Z.white);n.cyl(18,4.4,0,.12,6,Z.darkBluishGray,6);let i=n.toMesh(this.mat),a=this.place(i,e,t,.62,0),o=Lf(`GENÈVE`,7,1,{bg:`#f4f4f4`,fg:`#0a3463`,border:`#f4f4f4`,font:`Georgia`});o.position.set(-17,1,3.65),a.add(o),this.animated.push(e=>{a.position.y=Math.sin(e*.8)*.12,a.rotation.z=Math.sin(e*.6)*.012})}swans(){let e=new Q;e.prismZ([[-.5,0],[.6,0],[.75,.35],[-.6,.45]],-.3,.3,Z.white),e.cube(.45,.3,-.08,.6,1,.08,Z.white),e.cube(.6,.85,-.07,.85,1,.07,Z.orange);let t=e.toGeometry(),n=[[46.207,6.15],[46.2068,6.1512],[46.2082,6.1508],[46.2058,6.1525],[46.209,6.1525],[46.2075,6.153],[46.2052,6.1505]],r=[];for(let[e,i]of n){let[n,a]=this.P(e,i);if(!this.world.surface.isWater(n,a))continue;let o=new J(t,this.plain);o.castShadow=!0,this.place(o,n,a,Math.random()*6,.02),r.push({m:o,x:n,z:a,a:Math.random()*6,r:3+Math.random()*6})}this.animated.push((e,t)=>{for(let n of r){n.a+=t*.05;let r=n.x+Math.cos(n.a)*n.r,i=n.z+Math.sin(n.a)*n.r;n.m.rotation.y=-n.a,n.m.position.set(r,Math.sin(e*2+n.a)*.03,i)}})}mouettes(){let e=[[[46.20945,6.15155],[46.2048,6.1489]],[[46.2094,6.15175],[46.2053,6.15515]],[[46.2193,6.1536],[46.2096,6.157]]],t=new Q;t.prismY([[-3.4,0],[2.4,-1.1],[3.6,0],[2.4,1.1],[-3.4,1],[-3.6,0],[-3.4,-1]],-.5,.6,Z.white),t.cube(-3.2,.6,-.95,2.3,.8,.95,Z.yellow),t.cube(-2.2,.8,-.8,1.2,1.9,.8,2504778);for(let e of[-2.2,-1,.2])t.cube(e,.8,-.82,e+.18,1.9,.82,Z.yellow);t.cube(-2.5,1.9,-1,1.5,2.1,1,Z.yellow),t.studs(-2.5,-1,1.5,1,2.1,Z.yellow),t.cyl(-2.9,.8,0,.06,1.8,Z.white,6);let n=t.toGeometry(),r=[];for(let[t,i]of e){let[e,a]=this.P(t[0],t[1]),[o,s]=this.P(i[0],i[1]),c=!0;for(let t=.08;t<=.92;t+=.04)this.world.surface.isWater(e+(o-e)*t,a+(s-a)*t)||(c=!1);if(!c)continue;let l=new J(n,this.plain);l.castShadow=!0,this.group.add(l),r.push({m:l,ax:e,az:a,bx:o,bz:s,t:Math.random(),dir:1,wait:0,L:Math.hypot(o-e,s-a)})}this.animated.push((e,t)=>{for(let n of r){n.wait>0?n.wait-=t:(n.t+=t*5/n.L*n.dir,(n.t>1||n.t<0)&&(n.t=Math.max(0,Math.min(1,n.t)),n.dir=-n.dir,n.wait=6));let r=n.t*n.t*(3-2*n.t),i=n.ax+(n.bx-n.ax)*r,a=n.az+(n.bz-n.az)*r;n.m.position.set(i,.05+Math.sin(e*1.3+n.L)*.08,a),n.m.rotation.set(0,Math.atan2(-(n.bz-n.az)*n.dir,(n.bx-n.ax)*n.dir),Math.sin(e*1.1+n.L)*.025)}})}update(e){this.t+=e;for(let t of this.animated)t(this.t,e)}},Bf=null,Vf={at:-1,v:null};function Hf(){let e=new Date,t=e.getTime();if(Vf.v&&t-Vf.at<40)return Vf.v;let n;try{Bf||=new Intl.DateTimeFormat(`en-GB`,{timeZone:`Europe/Zurich`,hour:`numeric`,minute:`numeric`,second:`numeric`,hour12:!1});let t=Bf.formatToParts(e),r=e=>+t.find(t=>t.type===e).value;n={h:r(`hour`),m:r(`minute`),s:r(`second`),ms:e.getMilliseconds()}}catch{n={h:e.getHours(),m:e.getMinutes(),s:e.getSeconds(),ms:e.getMilliseconds()}}return Vf={at:t,v:n},n}var Uf=e=>{for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Wf=class{constructor(e){this.game=e,this.route=null,this.target=null,this.recalc=0,this.stuck=0,this.reverseT=0,this.log=[]}setTarget(e,t,n){this.target&&Math.hypot(this.target.x-e,this.target.z-t)<1||(this.target={x:e,z:t,radius:n},this.route=null,this.recalc=0)}controls(e){let t=this.game,n=t.player.vehicle;if(t.carrying){let e=t.carrying.dest;this.setTarget(e.drop[0],e.drop[1],e.r*.6)}else{let e=null,r=1/0;for(let i of t.passengers.list){if(i.state!==`waiting`)continue;let t=Math.hypot(i.x-n.x,i.z-n.z);t<r&&(r=t,e=i)}if(e)this.setTarget(e.x,e.z,3.5);else return{throttle:0,brake:1,steer:0,handbrake:!1,boost:!1}}let r=this.target;if(this.recalc-=e,!this.route||this.recalc<=0){let e=t.graph.route(n.x,n.z,r.x,r.z);this.route=Yd(e?[...e.pts,r.x,r.z]:[n.x,n.z,r.x,r.z]),this.recalc=2}let i=Math.hypot(r.x-n.x,r.z-n.z),a=Xd(this.route,n.x,n.z),o=Zd(this.route,a.s+7+n.speed*.45),s=Uf(Math.atan2(-(o[0]-n.x),-(o[1]-n.z))-n.yaw),c=Zd(this.route,a.s+10),l=Zd(this.route,a.s+32),u=Math.atan2(c[0]-n.x,c[1]-n.z),d=Math.atan2(l[0]-c[0],l[1]-c[1]),f=Math.abs(Uf(d-u)),p=f>1.2?9:f>.6?14:f>.3?20:29,m=this.route.length-a.s;p=Math.min(p,Math.max(2,m*.55)),i<r.radius&&(p=0);let h=+(n.fwdSpeed<p-1),g=+(n.fwdSpeed>p+2.5);p===0&&n.speed>.3&&(h=0,g=1);let _=Math.max(-1,Math.min(1,s*2.2));return Math.abs(s)>1.4&&n.speed<6&&(h=.6),h>0&&n.speed<1?this.stuck+=e:this.stuck=Math.max(0,this.stuck-e*2),this.stuck>1.5&&(this.reverseT=1.2,this.stuck=0,this.unstickCount=(this.unstickCount||0)+1),this.reverseT>0?(this.reverseT-=e,{throttle:0,brake:1,steer:-_,handbrake:!1,boost:!1}):((this.unstickCount||0)>3&&(this.unstickCount=0,this.log.push([`respawn`,Math.round(n.x),Math.round(n.z)]),t.respawn(`BOT RESET`),this.route=null),{throttle:h,brake:g,steer:_,handbrake:!1,boost:n.speed<15&&f<.3&&h>0})}};function Gf(e){if(!(window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches)&&!(`ontouchstart`in window))return null;let t=document.createElement(`div`);t.className=`touch-ui hidden`,t.innerHTML=`
    <div class="touch-left">
      <button data-k="left" aria-label="steer left">◀</button>
      <button data-k="right" aria-label="steer right">▶</button>
    </div>
    <div class="touch-right">
      <button data-k="drift" class="small" aria-label="drift">DRIFT</button>
      <button data-k="boost" class="small" aria-label="boost">DASH</button>
      <button data-k="brake" aria-label="brake">▼</button>
      <button data-k="gas" class="gas" aria-label="accelerate">▲</button>
    </div>
    <button class="touch-pause" data-key="Escape" aria-label="pause">II</button>
    <button class="touch-map" data-key="KeyM" aria-label="map">MAP</button>`,document.body.appendChild(t);let n=new Map,r=()=>{for(let t of Object.keys(e.touch))e.touch[t]=!1;for(let t of n.values())e.touch[t]=!0};return t.querySelectorAll(`button[data-k]`).forEach(e=>{e.addEventListener(`pointerdown`,t=>{t.preventDefault(),e.setPointerCapture(t.pointerId),n.set(t.pointerId,e.dataset.k),e.classList.add(`on`),r()});let t=t=>{n.delete(t.pointerId),e.classList.remove(`on`),r()};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t)}),t.querySelectorAll(`button[data-key]`).forEach(t=>{t.addEventListener(`pointerdown`,n=>{n.preventDefault(),e.pressed.add(t.dataset.key)})}),{show(e){t.classList.toggle(`hidden`,!e),document.body.classList.toggle(`touch`,e)}}}var Kf=9.6;function qf(){let e=new Q,t=1.2,n=Kf/2;e.cube(-1.2,.35,-4.8,t,.9,n,Z.darkBluishGray),e.cube(-1.2,.9,-4.8,t,1.5,n,Z.white),e.cube(-1.21,1.05,-4.5,1.21,1.25,4.5,Z.red),e.cube(-1.2,1.5,-4.8,t,2.6,n,2504778);for(let t=-4.8+1.2;t<4.2;t+=2.4)e.cube(-1.22,1.5,t,1.22,2.6,t+.25,Z.white);e.cube(-1.2,2.6,-4.8,t,3.2,n,Z.white),e.studs(-1,-4.8+.4,1,4.3999999999999995,3.2,Z.white),e.cube(-.5,3.2,-1.2,.5,3.5,1.2,Z.lightBluishGray);for(let t of[-3.4,3.4])e.cylX(-1.2+.1,-1.2+.3,.38,t,.36,Z.black,10),e.cylX(.8999999999999999,1.0999999999999999,.38,t,.36,Z.black,10);for(let t of[-1,1])e.cube(-1.2+.1,1.5,t*n-.02*t,1.0999999999999999,2.5,t*n+.06*t,2504778),e.cube(-.9,.7,t*n,-.5,.95,t*n+.05*t,Z.white),e.cube(.5,.7,t*n,.9,.95,t*n+.05*t,Z.white);return e.toGeometry()}var Jf=class{constructor(e,t=7){this.game=e,this.world=e.world,this.max=t,this.buildNetwork(e.map.rails.filter(e=>e.k===1)),this.mesh=new li(qf(),gl({studs:!1}),t*3),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.count=0,e.scene.add(this.mesh),this.trams=[],this._m=new K,this._q=new lt,this._e=new Vt,this._p=new W,this._s=new W(1,1,1),this.circles=[]}buildNetwork(e){let t=(e,t)=>`${Math.round(e)},${Math.round(t)}`,n=new Map,r=(e,r)=>{let i=t(e,r);return n.has(i)||n.set(i,{x:e,z:r,edges:[]}),n.get(i)};this.edges=[];for(let t of e){let e=t.p;if(e.length<4)continue;let n=[0];for(let t=2;t<e.length;t+=2)n.push(n[n.length-1]+Math.hypot(e[t]-e[t-2],e[t+1]-e[t-1]));let i=n[n.length-1];if(i<2)continue;let a=r(e[0],e[1]),o=r(e[e.length-2],e[e.length-1]),s={p:e,cum:n,len:i,a,b:o};a.edges.push(s),o.edges.push(s),this.edges.push(s)}}pointAt(e,t,n){let r=n>0?t:e.len-t,{p:i,cum:a}=e,o=1;for(;o<a.length-1&&a[o]<r;)o++;let s=(r-a[o-1])/(a[o]-a[o-1]||1);return[i[(o-1)*2]+(i[o*2]-i[(o-1)*2])*s,i[(o-1)*2+1]+(i[o*2+1]-i[(o-1)*2+1])*s]}spawn(e){for(let t=0;t<20;t++){let t=this.edges[Math.floor(Math.random()*this.edges.length)],n=Math.random()*t.len,[r,i]=this.pointAt(t,n,1),a=Math.hypot(r-e.x,i-e.z);if(a<150||a>600)continue;let o={edge:t,dir:Math.random()<.5?1:-1,s:0,speed:0,trail:[],stop:0,bell:0};o.s=o.dir>0?n:t.len-n;for(let e=32;e>=0;e-=.5)o.trail.push(this.pointAt(t,Math.max(0,o.s-e),o.dir));return this.trams.push(o),o}return null}nextEdge(e){let t=e.dir>0?e.edge.b:e.edge.a,n=t.edges.filter(t=>t!==e.edge);if(!n.length)return{edge:e.edge,dir:-e.dir};let[r,i]=this.pointAt(e.edge,e.edge.len-1,e.dir),a=t.x-r,o=t.z-i,s=null,c=-2;for(let e of n){let n=e.a===t?1:-1,[r,i]=this.pointAt(e,Math.min(3,e.len),n),l=((r-t.x)*a+(i-t.z)*o)/((Math.hypot(r-t.x,i-t.z)||1)*(Math.hypot(a,o)||1))+Math.random()*.6;l>c&&(c=l,s={edge:e,dir:n})}return s}trailPoint(e,t){let n=e.trail,r=0;for(let e=n.length-1;e>0;e--){let i=Math.hypot(n[e][0]-n[e-1][0],n[e][1]-n[e-1][1]);if(r+i>=t){let a=(t-r)/(i||1);return[n[e][0]+(n[e-1][0]-n[e][0])*a,n[e][1]+(n[e-1][1]-n[e][1])*a]}r+=i}return n[0]}reset(e){this.trams.length=0;for(let t=0;t<this.max;t++)this.spawn(e)}update(e,t,n=!1){let r=this.game.player.vehicle;for(let e=this.trams.length-1;e>=0;e--){let n=this.trams[e],r=n.trail[n.trail.length-1];Math.hypot(r[0]-t.x,r[1]-t.z)>800&&this.trams.splice(e,1)}for(;this.trams.length<this.max&&this.spawn(t););let i=0;this.circles.length=0;for(let t of this.trams){let a=10,o=t.trail[t.trail.length-1],[s,c]=this.pointAt(t.edge,Math.min(t.edge.len,t.s+6),t.dir),l=s-o[0],u=c-o[1],d=Math.hypot(l,u)||1;if(!n){let n=r.x-o[0],i=r.z-o[1],s=(n*l+i*u)/d,c=Math.abs((-n*u+i*l)/d);s>0&&s<22&&c<3&&(a=Math.max(0,(s-8)*.8),t.bell-=e,t.bell<=0&&s<16&&(t.bell=3,this.game.audio?.sfx(`tram`,Math.max(0,1-Math.hypot(n,i)/60))))}t.speed+=Math.max(-6*e,Math.min(1.5*e,a-t.speed)),t.s+=t.speed*e;let f=0;for(;t.s>t.edge.len&&f++<4;){t.s-=t.edge.len;let e=this.nextEdge(t);t.edge=e.edge,t.dir=e.dir}let p=this.pointAt(t.edge,Math.min(t.s,t.edge.len),t.dir),m=t.trail[t.trail.length-1];Math.hypot(p[0]-m[0],p[1]-m[1])>.5&&(t.trail.push(p),t.trail.length>80&&t.trail.shift());for(let e=0;e<3;e++){let n=e*10.1,r=this.trailPoint(t,n),a=this.trailPoint(t,n+Kf);if(e>0&&r===t.trail[0])continue;let o=(r[0]+a[0])/2,s=(r[1]+a[1])/2,c=Math.atan2(-(r[0]-a[0]),-(r[1]-a[1])),l=this.world.ground.visualHeight(o,s);this._e.set(0,c,0),this._q.setFromEuler(this._e),this._m.compose(this._p.set(o,l,s),this._q,this._s),this.mesh.setMatrixAt(i++,this._m);let u=(r[0]-a[0])/Kf,d=(r[1]-a[1])/Kf;for(let e of[-3.2,0,3.2])this.circles.push([o+u*e,s+d*e,l])}}this.mesh.count=i,this.mesh.instanceMatrix.needsUpdate=!0,n||this.collide(r)}collide(e){let t=1.25;for(let n of e.p.circleOffsets){let r=e.x+e.fx*n,i=e.z+e.fz*n;for(let[n,a,o]of this.circles){if(Math.abs(o-e.y)>3)continue;let s=r-n,c=i-a,l=Math.hypot(s,c),u=e.p.circleR+t-l;u>0&&l>1e-4&&e.resolve(s/l,c/l,u,n+s/l*t,a+c/l*t,.35,8)}}}},Yf=[`hairShort`,`hairShort`,`hairLong`,`hairLong`,`cap`,`topHat`],Xf=e=>e.k>=8&&e.k<=10&&e.main&&!e.bw&&e.len>6,Zf=class{constructor(e,t=34){this.game=e,this.graph=e.graph,this.world=e.world,this.max=t,this.list=[],this.edges=this.graph.edges.map((e,t)=>t).filter(e=>Xf(this.graph.edges[e])),this.spawnT=0,this._pt=[0,0,0]}reset(){for(let e of this.list)e.fig.dispose();this.list.length=0}spawn(e){let t=Math.random;for(let n=0;n<25;n++){let n=this.edges[Math.floor(t()*this.edges.length)],r=this.graph.edges[n],i=t()*r.len,a=this.graph.pointAt(r,i,this._pt),o=Math.hypot(a[0]-e.x,a[1]-e.z);if(o<45||o>230)continue;let s=this.game.minifigs.create({shirt:Bu[Math.floor(t()*Bu.length)],pants:Vu[Math.floor(t()*Vu.length)],hair:Hu[Math.floor(t()*Hu.length)],hairStyle:Yf[Math.floor(t()*Yf.length)],skin:t()<.85?Z.yellow:[Z.nougat,Z.mediumNougat,Z.reddishBrown,Z.lightNougat][Math.floor(t()*4)]});if(!s)return null;let c={fig:s,edge:n,dir:t()<.5?1:-1,s:i,side:(t()-.5)*Math.min(1.6,r.w*.6),speed:1.1+t()*.6,t:t()*10,x:a[0],z:a[1],y:0,yaw:0,leap:0,lx:0,lz:0,cool:0};return this.list.push(c),c}return null}update(e,t,n){this.spawnT-=e;for(let e=this.list.length-1;e>=0;e--){let r=this.list[e];(Math.hypot(r.x-t.x,r.z-t.z)>280||!n)&&(r.fig.dispose(),this.list.splice(e,1))}if(!n)return;this.spawnT<=0&&this.list.length<this.max&&(this.spawn(t),this.spawnT=.12);let r=t.fx,i=t.fz;for(let n of this.list){n.t+=e;let a=n.fig,o=this.graph.edges[n.edge];if(n.leap>0){n.leap-=e;let t=1-n.leap/.7;if(n.x+=n.lx*e,n.z+=n.lz*e,a.pos.set(n.x,n.y+Math.sin(Math.min(1,t)*Math.PI)*1.1,n.z),a.pose(`dive`),a.scared=!0,a.pitch=-Math.sin(Math.min(1,t)*Math.PI)*.9,n.leap<=0){a.pitch=0,a.scared=!1;let e=this.graph.nearest(n.x,n.z,Xf,30);e&&(n.edge=e.edge,n.s=e.s,n.side=Math.max(-1.5,Math.min(1.5,n.side))),n.cool=1.5}continue}if(n.cool-=e,n.s+=n.dir*n.speed*e,n.s<0||n.s>o.len){let e=n.s<0?o.a:o.b,t=this.graph.adj[e].filter(e=>e!==n.edge&&Xf(this.graph.edges[e]));if(t.length&&Math.random()<.85){let r=t[Math.floor(Math.random()*t.length)],i=this.graph.edges[r];n.edge=r,n.dir=i.a===e?1:-1,n.s=n.dir>0?0:i.len}else n.dir=-n.dir,n.s=Math.max(0,Math.min(o.len,n.s))}let s=this.graph.edges[n.edge],c=this.graph.pointAt(s,Math.max(0,Math.min(s.len,n.s)),this._pt),l=c[2];n.dir<0&&(l+=Math.PI);let u=Math.sin(l),d=Math.cos(l),f=c[0]+d*n.side,p=c[1]-u*n.side;n.x+=(f-n.x)*Math.min(1,e*6),n.z+=(p-n.z)*Math.min(1,e*6),n.y=this.world.ground.visualHeight(n.x,n.z),n.yaw=Math.atan2(u,d)+Math.PI,a.yaw=n.yaw,a.pos.set(n.x,n.y,n.z),a.pose(`walk`,n.t*7*n.speed),a.scared=!1;let m=n.x-t.x,h=n.z-t.z,g=Math.hypot(m,h);if(n.cool<=0&&g<3.2+t.speed*.32&&t.speed>3&&Math.abs(n.y-t.y)<2.5){let e=m*r+h*i,t=m*-i+h*r;if(e>-1.5&&Math.abs(t)<2.6){let e=t>=0?1:-1,o=-i*e,s=r*e,c=3.2-Math.abs(t);n.leap=.7,n.lx=o*Math.max(2.5,c)/.7,n.lz=s*Math.max(2.5,c)/.7,a.yaw=Math.atan2(-o,-s)}}}}},Qf={arcadeTime:100,blitzTime:300,rideLimit:e=>12+e/12.5,fare:e=>4.2+e/100*2.6,bonus:{speedy:e=>14+e/22,normal:e=>9+e/35,slow:()=>4},speedyAt:.62,normalAt:.88,rate:{speedy:1.3,normal:1,slow:.75}},$f={x:-362,z:117,yaw:Math.atan2(-1,-1)},ep=class{constructor({renderer:e,scene:t,sun:n,updateSun:r,world:i,map:a,quality:o,rng:s,extras:c={}}){this.renderer=e,this.sun=n,this.scene=t,this.updateSun=r,this.world=i,this.map=a,this.quality=o,this.rng=s,this.landmarks=a.landmarks,this.settings=this.loadSettings(),this.best=this.loadBest(),this.camera=new va(64,innerWidth/innerHeight,.5,5e3),this.input=new Od,this.graph=new Jd(a),this.minifigs=new Td(t,160),this.player=new Vd(i,t,this.minifigs),this.chase=new Wd(this.camera,i),this.audio=c.audio||null,this.effects=c.effects?c.effects(this):null,this.decor=new Ff(this),this.sights=new zf(this),this.traffic=c.traffic?c.traffic(this):null,this.trams=new Jf(this),this.pedestrians=new Zf(this),this.passengers=new af(this),this.nav=new mf(this),this.hud=new _f,this.minimap=new xf(this,this.hud.minimap),this.menus=new Tf(this),this.touch=Gf(this.input),this.menus.onStart=e=>this.startGame(e),this.timer=new Ea,this.timer.connect(document),this.time=0,this.state=`title`,this.paused=!1,this.mapOpen=!1,this.frameTimes=[];let l=new URLSearchParams(location.search);this.bot=l.has(`bot`)?new Wf(this):null,this.timeScale=Math.max(1,Math.min(8,+l.get(`speed`)||1)),this.stats=[],this.streetTimer=0,this.stuckTimer=0,this.hintUntil=0,this.attractT=0,addEventListener(`resize`,()=>this.resize()),this.resize(),window.addEventListener(`pointerdown`,()=>this.audio&&this.audio.unlock(),{once:!1}),window.addEventListener(`keydown`,()=>this.audio&&this.audio.unlock())}loadSettings(){let e={sound:!0,music:!0,quality:window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches?`low`:`high`};try{return{...e,...JSON.parse(localStorage.getItem(`ctg-settings`)||`{}`)}}catch{return e}}saveSettings(){localStorage.setItem(`ctg-settings`,JSON.stringify(this.settings)),this.audio&&this.audio.setEnabled(this.settings.sound,this.settings.music)}loadBest(){try{return{arcade:0,blitz:0,...JSON.parse(localStorage.getItem(`ctg-best`)||`{}`)}}catch{return{arcade:0,blitz:0}}}applyQuality(){let e=this.settings.quality===`high`;this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,e?1.5:1));let t=e?2048:1024;if(this.quality.shadowSize=t,this.sun&&this.sun.shadow.mapSize.x!==t&&(this.sun.shadow.mapSize.set(t,t),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.decor){this.decor.treeDistance=e?650:380;for(let t of this.decor.treeMeshes)t.castShadow=e}this.resize()}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}start(){this.applyQuality(),this.player.place($f.x,$f.z,$f.yaw),this.chase.snap(this.player.vehicle),this.audio&&this.audio.setEnabled(this.settings.sound,this.settings.music),this.showTitle(),this.renderer.setAnimationLoop(()=>this.frame())}closeOverlays(){this.mapOpen=!1,this.menus.showMap(!1),this.paused=!1,this.menus.showPause(!1),this.audio&&this.audio.pause(!1)}showTitle(){this.state=`title`,this.closeOverlays(),this.touch&&this.touch.show(!1),this.clearRound(),this.hud.show(!1),this.menus.showResults(!1),this.menus.showPause(!1),this.menus.countdown(null),this.menus.showTitle(!0),this.player.place($f.x,$f.z,$f.yaw),this.audio&&this.audio.music(`title`)}clearRound(){for(let e of[...this.passengers.list])this.passengers.remove(e);this.nav.setTarget(null),this.carrying=null,this.boarding=null,this.freezeT=0,this.player.vehicle.frozen=!1,this.player.passenger=null,this.player.model.setFree(!0)}startGame(e){this.mode=e,this.closeOverlays(),this.touch&&this.touch.show(!0),this.clearRound(),this.menus.showTitle(!1),this.menus.showResults(!1),this.hud.show(!0),this.timeLeft=e===`arcade`?Qf.arcadeTime:e===`blitz`?Qf.blitzTime:1/0,this.money=0,this.seenSights=new Set,this.tips=0,this.fares=0,this.speedy=0,this.combo=0,this.bestCombo=0,this.distance=0,this.rideTips=0,this.driftAcc=0,this.chase.orbit=0,this.player.place($f.x,$f.z,$f.yaw),this.player.vehicle.boost=1,this.chase.snap(this.player.vehicle),this.hud.setMoney(0,0),this.hud.hideFare(),this.showHint(`Stop inside a <b>coloured circle</b> to pick up a customer · <b>Space</b> drift · <b>Shift</b> boost · <b>M</b> map`,17);for(let e=0;e<7;e++)this.passengers.spawn(this.player.vehicle);this.state=`countdown`,this.roundStart=this.time,this.countT=3.2,this.lastCount=``,this.traffic&&this.traffic.reset(this.player.vehicle),this.trams.reset(this.player.vehicle),this.audio&&this.audio.music(`game`)}endGame(e){this.state=`over`,this.overT=0,this.menus.countdown(null),this.boarding&&(this.passengers.remove(this.boarding),this.boarding=null,this.player.vehicle.frozen=!1),this.carrying&&this.bail(`Time is up!`),this.hud.message(e,`huge red`,2.6),this.showHint(``,0),this.audio&&(this.audio.sfx(`timeup`),this.audio.music(`results`));let t=!1;this.mode!==`free`&&this.money>(this.best[this.mode]||0)&&(this.best[this.mode]=this.money,localStorage.setItem(`ctg-best`,JSON.stringify(this.best)),t=this.money>0),this.result={title:e,money:this.money,fares:this.fares,speedy:this.speedy,tips:this.tips,bestCombo:this.bestCombo,distance:this.distance,record:t}}togglePause(e){(this.state===`playing`||this.state===`countdown`)&&(this.paused=e??!this.paused,this.menus.showPause(this.paused),this.audio&&this.audio.pause(this.paused))}toggleMap(e){(this.state===`playing`||this.state===`countdown`)&&(this.mapOpen=e??!this.mapOpen,this.menus.showMap(this.mapOpen),this.mapOpen&&this.minimap.drawFull(this.menus.mapCanvas,this.player.vehicle))}showHint(e,t){this.hud.setHint(e),this.hintUntil=this.time+t}say(e,t,n){this.hud.say(e,t,n),this.audio&&this.audio.voice(t,this.carrying&&this.carrying.voicePitch||1)}nearMiss(){this.state===`playing`&&this.carrying&&(this.addTip(`CRAZY THROUGH`,1.5),this.rng()<.3&&this.say(this.carrying.name,Af(Df.near,this.rng),1.5))}addTip(e,t){if(!this.carrying)return;this.combo++,this.bestCombo=Math.max(this.bestCombo,this.combo);let n=t*(1+.25*Math.min(this.combo-1,6));this.rideTips+=n,this.hud.tip(`${e}${this.combo>1?` ×`+this.combo:``} +${n.toFixed(2)}`),this.audio&&this.audio.sfx(`tip`,this.combo)}startPickup(e){this.passengers.board(e),this.boarding=e,this.player.vehicle.frozen=!0,this.showHint(``,0),this.audio&&this.audio.sfx(`pickup`)}onBoarded(e){(this.state===`playing`||this.state===`countdown`)&&(this.boarding=null,this.player.vehicle.frozen=!1,this.carrying=e,this.player.passenger=e.fig,e.fig.parent=this.player.model.chassis,this.player.model.setFree(!1),this.rideLimit=Qf.rideLimit(e.length),this.rideTime=this.rideLimit,this.rideElapsed=0,this.rideTips=0,this.combo=0,this.slowNag=12,this.fareValue=Qf.fare(e.length),this.nav.setTarget(e.dest,this.player.vehicle),this.say(e.name,Af(Ef[e.dest.id],this.rng)),this.hud.message(`→ `+e.dest.short.toUpperCase(),`green small`,2))}deliver(){let e=this.carrying,t=this.rideElapsed/this.rideLimit,n=t<=Qf.speedyAt?`speedy`:t<=Qf.normalAt?`normal`:`slow`,r=this.fareValue*Qf.rate[n];this.stats.push({dest:e.dest.id,len:Math.round(e.length),elapsed:+this.rideElapsed.toFixed(1),limit:+this.rideLimit.toFixed(1),rating:n});let i=r+this.rideTips;if(this.money+=i,this.tips+=this.rideTips,this.fares++,n===`speedy`&&this.speedy++,this.hud.setMoney(this.money,this.fares),this.hud.message(n===`speedy`?`SPEEDY!`:n===`normal`?`NORMAL`:`SLOW…`,n===`speedy`?`green`:n===`normal`?``:`red`,2),this.hud.message(`+${gf(i)}`,`white small`,2.2),this.mode===`arcade`){let t=Math.round(Qf.bonus[n](e.length));this.timeLeft+=t,this.hud.timeBonusPop(t)}this.say(e.name,Af(Of[n],this.rng));let a=e.dest;this.passengers.alight(e,this.player.vehicle,!0,a.feature[0],a.feature[1]),this.endRide(),this.effects&&this.effects.coins(this.player.vehicle.x,this.player.vehicle.y+2,this.player.vehicle.z,Math.min(40,8+Math.round(i))),this.audio&&this.audio.sfx(`cash`),this.freezeT=.5,this.player.vehicle.frozen=!0}bail(e){let t=this.carrying;t&&(this.say(t.name,Af(Of.bail,this.rng)),this.hud.message(e||`CUSTOMER LOST`,`red small`,2),this.passengers.alight(t,this.player.vehicle,!1),this.endRide(),this.audio&&this.audio.sfx(`fail`))}endRide(){this.carrying=null,this.player.passenger=null,this.player.model.setFree(!0),this.nav.setTarget(null),this.hud.hideFare(),this.combo=0}roomFor(e,t){if(this.world.ground.heightAt(e,t)===-1/0||this.world.ground.kind!==0)return!1;let n=!0;return this.world.segments.collideCircle(e,t,2.6,-1e9,()=>{n=!1}),n&&this.world.circles.query(e,t,2.2,()=>{n=!1}),n}respawn(e){let t=this.player.vehicle,n=null,r=1/0,i=[0,0,0];for(let e of this.graph.edges){if(!Gd(e.k)||e.bw||!e.main||e.w<5.5||e.len<8)continue;let a=e.pts[0],o=e.pts[1];if(!(Math.abs(a-t.x)>500||Math.abs(o-t.z)>500))for(let a=4;a<e.len-4;a+=6){this.graph.pointAt(e,a,i);let o=Math.hypot(i[0]-t.x,i[1]-t.z);o>=r||o<(this.lastRespawn&&Math.hypot(i[0]-this.lastRespawn[0],i[1]-this.lastRespawn[1])<3?1e9:0)||this.roomFor(i[0],i[1])&&(r=o,n=[i[0],i[1],i[2]])}}if(!n)return;this.lastRespawn=n;let a=n,o=Math.atan2(-Math.sin(a[2]),-Math.cos(a[2])),s=Math.atan2(Math.sin(o-t.yaw),Math.cos(o-t.yaw));Math.abs(s)>Math.PI/2&&(o+=Math.PI),this.player.place(a[0],a[1],o),this.chase.snap(t),e&&this.hud.message(e,`white small`,1.5)}frame(){this.timer.update();let e=Math.min(this.timer.getDelta(),1/20);if(e>0){if(this.frameTimes.push(e),this.frameTimes.length>60&&this.frameTimes.shift(),this.input.beginFrame(),this.handleKeys(),!this.paused&&!this.mapOpen)for(let t=0;t<this.timeScale;t++)this.time+=e,cl.lgTime.value=this.time,this.update(e);else this.mapOpen&&this.minimap.drawFull(this.menus.mapCanvas,this.player.vehicle);this.renderer.render(this.scene,this.camera),this.input.endFrame()}}handleKeys(){let e=this.input;if(this.state===`title`){let t=this.menus.modeButtons,n=t.indexOf(document.activeElement);e.hit(`ArrowDown`)&&t[(n+1)%t.length].focus(),e.hit(`ArrowUp`)&&t[(n+t.length-1)%t.length].focus(),e.hit(`Enter`)&&this.startGame(n>=0?t[n].dataset.mode:`arcade`)}else this.state===`over`?this.overT>2.5&&(e.hit(`Enter`)||e.hit(`Space`))&&this.startGame(this.mode):((e.hit(`Escape`)||e.hit(`KeyP`))&&this.togglePause(),(e.hit(`KeyM`)||e.hit(`Tab`))&&this.toggleMap(),!this.paused&&(e.hit(`KeyC`)&&this.chase.cycle(),e.hit(`KeyR`)&&this.state===`playing`&&this.respawn(`RESET`),e.hit(`KeyH`)&&this.audio&&this.audio.sfx(`horn`)))}update(e){let t=this.player.vehicle,n=this.input.poll(e);if(this.bot&&this.state===`playing`&&(n=this.bot.controls(e)),this.state===`title`){this.attract(e);return}if(this.state===`countdown`){this.countT-=e;let r=this.countT>2.2?`3`:this.countT>1.2?`2`:this.countT>.2?`1`:`GO!`;r!==this.lastCount&&(this.lastCount=r,this.menus.countdown(r),this.audio&&this.audio.sfx(r===`GO!`?`go`:`beep`)),n={throttle:0,brake:0,steer:n.steer,handbrake:!1,boost:!1},t.frozen=!0,this.countT<=0&&(t.frozen=!1,this.state=`playing`,setTimeout(()=>this.menus.countdown(null),600))}this.state===`over`&&(this.overT+=e,n={throttle:0,brake:0,steer:0,handbrake:!0,boost:!1},this.chase.orbit+=e*.25,this.overT>2.8&&this.menus.results.classList.contains(`hidden`)&&(this.menus.showResults(!0,this.result),this.hud.show(!1)));let r=t.boosting,i=t.speed;this.player.braking=n.brake>0,this.player.update(e,n),this.distance=(this.distance||0)+t.speed*e,this.freezeT>0&&(this.freezeT-=e,this.freezeT<=0&&(t.frozen=!1)),t.boosting&&!r&&i<3&&this.state===`playing`&&this.addTip(`CRAZY DASH`,1);for(let e of t.events)this.onVehicleEvent(e);if(t.events.length=0,this.state===`playing`){if(t.drifting&&this.carrying?(this.driftAcc+=e,this.driftAcc>.8&&(this.driftAcc-=.8,this.addTip(`CRAZY DRIFT`,.8),this.rng()<.12&&this.say(this.carrying.name,Af(Df.drift,this.rng),1.6))):this.driftAcc=Math.max(0,this.driftAcc-e),t.inWater&&t.sinkTime>1.6&&this.respawn(`SPLASH! Back on the road`),n.throttle>0&&t.speed<.8&&!t.frozen?this.stuckTimer+=e:this.stuckTimer=0,this.stuckTimer>3&&(this.showHint(`Stuck? Press <b>R</b> to get back on the road`,5),this.stuckTimer=-6),!this.carrying&&!this.boarding){let e=this.passengers.checkPickup(t);e&&this.startPickup(e)}this.carrying&&(this.rideTime-=e,this.rideElapsed+=e,this.nav.inZone&&t.speed<3.2&&!t.airborne&&!t.inWater?this.deliver():this.rideTime<=0?this.bail(`TOO SLOW!`):(this.slowNag-=e,this.slowNag<0&&t.speed<6&&(this.slowNag=9,this.say(this.carrying.name,Af(Df.slow,this.rng),1.8)))),this.mode!==`free`&&(this.timeLeft-=e,this.timeLeft<=0?(this.timeLeft=0,this.endGame(this.mode===`blitz`?`SHIFT OVER!`:`TIME UP!`)):this.timeLeft<10&&Math.ceil(this.timeLeft)!==this.lastBeep&&(this.lastBeep=Math.ceil(this.timeLeft),this.audio&&this.audio.sfx(`tick`)))}if(this.passengers.update(e,t,this.state===`playing`||this.state===`countdown`),this.carrying){this.nav.update(e,t);let n=this.fareValue*Math.min(1,this.rideElapsed/Math.max(1,this.rideLimit)+.15)+this.rideTips;this.hud.showFare(this.carrying.dest.name,this.nav.dist,this.rideTime,n,this.nav.inZone)}if(this.traffic&&this.traffic.update(e,t),this.trams.update(e,t),this.pedestrians.update(e,t,!0),this.effects&&this.effects.update(e,t),this.decor&&this.decor.update(e,t,this.camera),this.sights.update(e),this.audio&&this.audio.update(e,t,n,this),this.hud.setTime(this.timeLeft,this.mode),this.hud.setSpeed(t.speed*3.6,t.boost,t.boosting),this.hud.update(e),this.streetTimer-=e,this.streetTimer<=0&&(this.streetTimer=.6,this.hud.setStreet(this.graph.streetName(t.x,t.z)),this.state===`playing`)){for(let e of this.landmarks)if(!this.seenSights.has(e.id)&&(Math.hypot(e.feature[0]-t.x,e.feature[1]-t.z)<70||Math.hypot(e.drop[0]-t.x,e.drop[1]-t.z)<40)){this.seenSights.add(e.id),this.hud.fact(e.name,kf[e.id]);break}}this.time>this.hintUntil&&this.hud.setHint(``),this.minimap.draw(t),this.chase.update(e,t),this.world.update(e,this.camera),this.minifigs.update(),this.updateSun(this.player.model.root.position)}onVehicleEvent(e){if(e.type===`hit`){let t=Math.min(1,e.impact/18);this.chase.shake=Math.max(this.chase.shake,t*.6),this.effects&&this.effects.bricks(e.x,e.y,e.z,e.nx,e.nz,Math.round(2+t*10),e.impact>9,e.color?[15912247,e.color,e.color]:null),this.audio&&this.audio.sfx(`crash`,t),this.carrying&&e.impact>8&&(this.combo=0,this.rng()<.5&&this.say(this.carrying.name,Af(Df.crash,this.rng),1.6))}else e.type===`land`?(this.effects&&this.effects.dust(e.x,e.y,e.z,Math.min(1,e.air)),this.audio&&this.audio.sfx(`land`,Math.min(1,-e.vy/10)),e.air>.55&&this.state===`playing`&&this.carrying&&(this.addTip(`CRAZY JUMP`,Math.round(e.air*4)/2),this.rng()<.5&&this.say(this.carrying.name,Af(Df.jump,this.rng),1.6))):e.type===`splash`&&(this.effects&&this.effects.splash(e.x,e.z),this.audio&&this.audio.sfx(`splash`),this.hud.message(`SPLASH!`,`white`,1.6),this.carrying&&this.say(this.carrying.name,Af(Df.water,this.rng),1.8))}attract(e){this.attractT+=e;let t=this.attractT*.05;this.camera.position.set(330+Math.cos(t)*330,95+Math.sin(t*.7)*15,420+Math.sin(t)*330),this.camera.lookAt(330+Math.cos(t+1.6)*60,30,420+Math.sin(t+1.6)*60),this.camera.fov!==55&&(this.camera.fov=55,this.camera.updateProjectionMatrix()),this.chase.fov=55,this.passengers.update(e,{x:this.camera.position.x,z:this.camera.position.z,speed:0,yaw:0,doorPoint:()=>({x:0,y:0,z:0})},!1),this.traffic&&this.traffic.update(e,{x:330,z:420,speed:0,yaw:0,y:0},!0),this.trams.update(e,{x:330,z:420},!0),this.pedestrians.update(e,this.player.vehicle,!1),this.effects&&this.effects.update(e,this.player.vehicle),this.decor&&this.decor.update(e,this.player.vehicle,this.camera),this.sights.update(e),this.player.vehicle.frozen=!0,this.player.update(e,{throttle:0,brake:0,steer:0,handbrake:!1,boost:!1}),this.audio&&this.audio.silenceEngine(),this.world.update(e,this.camera),this.minifigs.update(),this.updateSun(new W(330,0,420))}perf(){let e=this.frameTimes.reduce((e,t)=>e+t,0)/Math.max(1,this.frameTimes.length),t=this.renderer.info,n=this.player.vehicle;return{fps:Math.round(1/e),calls:t.render.calls,tris:t.render.triangles,state:this.state,pos:[+n.x.toFixed(1),+n.y.toFixed(2),+n.z.toFixed(1)],speed:+(n.speed*3.6).toFixed(0),yaw:+n.yaw.toFixed(2),money:this.money,time:this.timeLeft,carrying:this.carrying?this.carrying.dest.id:null,passengers:this.passengers.list.length}}},tp=e=>440*2**((e-69)/12),np=class{constructor(){this.ctx=null,this.soundOn=!0,this.musicOn=!0,this.track=null,this.paused=!1,document.addEventListener(`visibilitychange`,()=>this.syncSuspend())}unlock(){if(this.ctx){this.ctx.state===`suspended`&&!this.paused&&!document.hidden&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=.85;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n).connect(t.destination),this.sfxBus=t.createGain(),this.sfxBus.connect(this.master),this.engineBus=t.createGain(),this.engineBus.connect(this.master),this.musicBus=t.createGain(),this.musicBus.connect(this.master);let r=t.sampleRate*2;this.noise=t.createBuffer(1,r,t.sampleRate);let i=this.noise.getChannelData(0);for(let e=0;e<r;e++)i[e]=Math.random()*2-1;this.dist=t.createWaveShaper(),this.dist.curve=this.curve(28),this.buildEngine(),this.applyEnabled(),this.pendingTrack&&this.music(this.pendingTrack)}curve(e){let t=1024,n=new Float32Array(t);for(let r=0;r<t;r++){let t=r/1023*2-1;n[r]=Math.tanh(e*t)/Math.tanh(e)}return n}setEnabled(e,t){this.soundOn=e,this.musicOn=t,this.applyEnabled()}applyEnabled(){if(!this.ctx)return;let e=this.ctx.currentTime;this.sfxBus.gain.setTargetAtTime(this.soundOn?.9:0,e,.05),this.engineBus.gain.setTargetAtTime(this.soundOn?.33:0,e,.05),this.musicBus.gain.setTargetAtTime(this.musicOn?.3:0,e,.05)}pause(e){this.paused=e,this.syncSuspend()}syncSuspend(){this.ctx&&(this.paused||document.hidden?this.ctx.suspend():this.ctx.resume())}noiseSrc(e=!0){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=e,t}buildEngine(){let e=this.ctx,t={};t.o1=e.createOscillator(),t.o1.type=`sawtooth`,t.o2=e.createOscillator(),t.o2.type=`square`,t.o3=e.createOscillator(),t.o3.type=`triangle`,t.g1=e.createGain(),t.g1.gain.value=.32,t.g2=e.createGain(),t.g2.gain.value=.18,t.g3=e.createGain(),t.g3.gain.value=.5,t.filter=e.createBiquadFilter(),t.filter.type=`lowpass`,t.filter.frequency.value=600,t.filter.Q.value=3,t.out=e.createGain(),t.out.gain.value=.25,t.o1.connect(t.g1).connect(t.filter),t.o2.connect(t.g2).connect(t.filter),t.o3.connect(t.g3).connect(t.filter),t.filter.connect(t.out).connect(this.engineBus),t.screech=this.noiseSrc(),t.sf=e.createBiquadFilter(),t.sf.type=`bandpass`,t.sf.frequency.value=2300,t.sf.Q.value=5,t.sg=e.createGain(),t.sg.gain.value=0,t.screech.connect(t.sf).connect(t.sg).connect(this.sfxBus),t.wind=this.noiseSrc(),t.wf=e.createBiquadFilter(),t.wf.type=`lowpass`,t.wf.frequency.value=650,t.wg=e.createGain(),t.wg.gain.value=0,t.wind.connect(t.wf).connect(t.wg).connect(this.sfxBus);for(let e of[t.o1,t.o2,t.o3,t.screech,t.wind])e.start();this.eng=t}silenceEngine(){if(!this.ctx||!this.eng)return;let e=this.eng,t=this.ctx.currentTime;e.out.gain.setTargetAtTime(0,t,.1),e.sg.gain.setTargetAtTime(0,t,.1),e.wg.gain.setTargetAtTime(0,t,.1)}update(e,t,n){if(!this.ctx||!this.eng)return;let r=this.eng,i=this.ctx.currentTime,a=Math.abs(t.fwdSpeed),o=[0,7,13,19,26,34,50],s=0;for(;s<o.length-2&&a>o[s+1];)s++;let c=(a-o[s])/(o[s+1]-o[s]),l=(t.airborne?5200:1e3+c*3900*(s===0?.8:1))+n.throttle*300,u=l/60*1.6;r.o1.frequency.setTargetAtTime(u,i,.04),r.o2.frequency.setTargetAtTime(u*.5,i,.04),r.o3.frequency.setTargetAtTime(u*.25,i,.04),r.filter.frequency.setTargetAtTime(400+n.throttle*900+l*.25,i,.05),r.out.gain.setTargetAtTime(t.inWater?0:.16+n.throttle*.16+(t.boosting?.08:0),i,.06);let d=t.airborne||t.inWater?0:Math.max(0,Math.min(1,(t.slip-2.5)/6))*Math.min(1,t.speed/8);r.sg.gain.setTargetAtTime(d*.22,i,.05),r.sf.frequency.setTargetAtTime(1900+d*900,i,.1);let f=Math.min(1,t.speed/40);r.wg.gain.setTargetAtTime(f*f*.12,i,.2)}tone(e,t,n,r,i,{to:a=null,bus:o=this.sfxBus,attack:s=.005,filter:c=null}={}){let l=this.ctx,u=l.createOscillator();u.type=e,u.frequency.setValueAtTime(t,n),a&&u.frequency.exponentialRampToValueAtTime(a,n+r);let d=l.createGain();d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(i,n+s),d.gain.exponentialRampToValueAtTime(1e-4,n+r);let f=u.connect(d);c&&(f=f.connect(c)),f.connect(o),u.start(n),u.stop(n+r+.05)}burst(e,t,n,r=`lowpass`,i=1e3,a=.7,o=this.sfxBus,s=null){let c=this.ctx,l=this.noiseSrc(!1),u=c.createBiquadFilter();u.type=r,u.frequency.setValueAtTime(i,e),s&&u.frequency.exponentialRampToValueAtTime(s,e+t),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(n,e),d.gain.exponentialRampToValueAtTime(1e-4,e+t),l.connect(u).connect(d).connect(o),l.start(e,Math.random()*1.5),l.stop(e+t+.05)}clatter(e,t,n){for(let r=0;r<t;r++){let t=e+Math.random()*.35;this.burst(t,.018+Math.random()*.02,n*(.5+Math.random()*.5),`bandpass`,2500+Math.random()*4e3,6),this.tone(`square`,1800+Math.random()*2600,t,.02,n*.08)}}sfx(e,t=1){if(!this.ctx||!this.soundOn)return;let n=this.ctx.currentTime+.005;switch(e){case`crash`:this.burst(n,.18+t*.2,.25+t*.5,`lowpass`,1400),this.tone(`sine`,110,n,.22,.3+t*.4,{to:40}),this.clatter(n,Math.round(3+t*9),.35);break;case`knock`:this.clatter(n,10,.4),this.tone(`sine`,200,n,.12,.2,{to:80});break;case`land`:this.tone(`sine`,90,n,.25,.25+t*.4,{to:35}),this.burst(n,.12,.15+t*.2,`lowpass`,600);break;case`splash`:this.burst(n,.9,.6,`lowpass`,3e3,.8,this.sfxBus,300),this.burst(n+.05,.5,.3,`bandpass`,1200,1.5);break;case`pickup`:[72,76,79,84].forEach((e,t)=>this.tone(`square`,tp(e),n+t*.07,.12,.12));break;case`cash`:this.burst(n,.05,.4,`highpass`,3e3),this.tone(`sine`,1318.5,n+.04,.9,.25),this.tone(`sine`,1760,n+.1,1.1,.25),this.tone(`triangle`,2637,n+.1,.6,.08);break;case`tip`:this.tone(`square`,660*2**(Math.min(t,12)/12),n,.1,.1),this.tone(`square`,990*2**(Math.min(t,12)/12),n+.06,.12,.08);break;case`beep`:this.tone(`square`,880,n,.14,.14);break;case`go`:this.tone(`square`,1320,n,.5,.16),this.tone(`square`,660,n,.5,.1);break;case`tick`:this.tone(`square`,1200,n,.05,.08);break;case`timeup`:[76,72,67,60].forEach((e,t)=>this.tone(`sawtooth`,tp(e),n+t*.18,.3,.12,{filter:this.lp(2e3)}));break;case`fail`:this.tone(`sawtooth`,tp(58),n,.35,.12,{to:tp(56),filter:this.lp(1200)}),this.tone(`sawtooth`,tp(55),n+.35,.6,.12,{to:tp(52),filter:this.lp(1e3)});break;case`horn`:this.tone(`square`,392,n,.45,.12,{filter:this.lp(1800)}),this.tone(`square`,494,n,.45,.1,{filter:this.lp(1800)});break;case`honk`:if(t<.05)break;this.tone(`square`,330,n,.22,.08*t,{filter:this.lp(1400)}),this.tone(`square`,415,n,.22,.06*t,{filter:this.lp(1400)});break;case`tram`:if(t<.05)break;this.tone(`sine`,1250,n,.5,.12*t),this.tone(`sine`,2500,n,.3,.04*t),this.tone(`sine`,1250,n+.22,.6,.12*t);break;case`boost`:this.burst(n,.5,.25,`bandpass`,500,2,this.sfxBus,3e3)}}lp(e){let t=this.ctx.createBiquadFilter();return t.type=`lowpass`,t.frequency.value=e,t.connect(this.sfxBus),t}voice(e,t=1){if(!this.ctx||!this.soundOn)return;let n=this.ctx.currentTime+.02,r=Math.min(10,Math.max(3,Math.round(e.length/4))),i=this.ctx.createBiquadFilter();i.type=`bandpass`,i.frequency.value=1300,i.Q.value=1.2,i.connect(this.sfxBus);let a=210*t;for(let e=0;e<r;e++){let t=n+e*.075,r=a*(.85+Math.random()*.5),o=this.ctx.createOscillator();o.type=`square`,o.frequency.setValueAtTime(r,t),o.frequency.linearRampToValueAtTime(r*(.9+Math.random()*.25),t+.06);let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.16,t+.01),s.gain.exponentialRampToValueAtTime(1e-4,t+.065),o.connect(s).connect(i),o.start(t),o.stop(t+.08)}}music(e){this.ctx?this.track!==e&&(this.track=e,this.seq||(this.seq={step:0,next:this.ctx.currentTime+.1},this.timer=setInterval(()=>this.schedule(),25)),this.seq.step=0,this.seq.next=this.ctx.currentTime+.15):this.pendingTrack=e}schedule(){if(!this.ctx||this.paused)return;let e=this.seq,t=60/(this.track===`game`?168:112)/4;for(e.next<this.ctx.currentTime-.05&&(e.next=this.ctx.currentTime+.05);e.next<this.ctx.currentTime+.12;)this.musicOn&&this.playStep(e.step,e.next,t),e.step++,e.next+=t}playStep(e,t,n){let r=Math.floor(e/16)%16,i=e%16,a=[45,40,42,38][Math.floor(r/2)%4],o=r>=8,s=this.musicBus;if(this.track===`game`){if((i%8==0||o&&i===10)&&this.kick(t),i%8==4&&this.snare(t,.5),r%8==7&&i>=12&&this.snare(t,.3),i%2==0&&this.burst(t,.03,i%4==0?.12:.07,`highpass`,7500,.7,s),i===0&&r%8==0&&this.burst(t,1.2,.18,`highpass`,4e3,.5,s),i%2==0&&this.power(a+12,t,o?n*1.9:n*.8,o?.09:.075),i%2==0&&this.tone(`sawtooth`,tp(a-12+12),t,n*1.6,.16,{bus:s,filter:this.lpBus(500)}),o){let e=[69,null,71,73,null,76,null,73,71,null,69,null,66,null,64,null][i];e&&r%2==0&&this.tone(`square`,tp(e+12),t,n*1.8,.05,{bus:s,filter:this.lpBus(2600)})}}else i%8==0&&this.kick(t,.6),i%8==4&&this.snare(t,.22),i%4==2&&this.burst(t,.03,.05,`highpass`,8e3,.7,s),i%2==0&&this.tone(`triangle`,tp(a+24+[0,7,12,16,12,7,4,7][i/2%8]-+(a===42)),t,n*1.8,.07,{bus:s}),i%4==0&&this.tone(`sine`,tp(a),t,n*3.5,.2,{bus:s})}lpBus(e){let t=this.ctx.createBiquadFilter();return t.type=`lowpass`,t.frequency.value=e,t.connect(this.musicBus),t}kick(e,t=1){this.tone(`sine`,150,e,.16,.55*t,{to:42,bus:this.musicBus})}snare(e,t){this.burst(e,.14,t,`bandpass`,1900,.8,this.musicBus),this.tone(`triangle`,190,e,.08,t*.4,{bus:this.musicBus})}power(e,t,n,r){let i=this.ctx,a=i.createGain();a.gain.setValueAtTime(r,t),a.gain.exponentialRampToValueAtTime(1e-4,t+n);let o=i.createWaveShaper();o.curve=this.dist.curve;let s=i.createBiquadFilter();s.type=`lowpass`,s.frequency.value=2400,o.connect(s).connect(a).connect(this.musicBus);for(let r of[0,7,12])for(let a of[-6,6]){let s=i.createOscillator();s.type=`sawtooth`,s.frequency.value=tp(e+r),s.detune.value=a;let c=i.createGain();c.gain.value=.35,s.connect(c).connect(o),s.start(t),s.stop(t+n+.02)}}},rp=class{constructor(e,t,n,r,{shadows:i=!1}={}){this.n=r,this.mesh=new li(t,n,r),this.mesh.instanceMatrix.setUsage(He),this.mesh.frustumCulled=!1,this.mesh.castShadow=i;let a=new K().makeScale(0,0,0);for(let e=0;e<r;e++)this.mesh.setMatrixAt(e,a),this.mesh.setColorAt(e,new q(1,1,1));e.add(this.mesh),this.p=Array.from({length:r},()=>({life:0})),this.next=0,this.color=new q}emit(e,t){let n=this.next;this.next=(this.next+1)%this.n;let r=this.p[n];return Object.assign(r,{life:1,age:0,x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,wx:0,wy:0,wz:0,s:1,ds:0,ttl:1,grav:9.8,bounce:.35,water:!1,still:!1},e),t!==void 0&&(this.mesh.setColorAt(n,this.color.set(t)),this.mesh.instanceColor.needsUpdate=!0),r}},ip=class{constructor(e){this.game=e,this.world=e.world;let t=e.scene,n=new Q;n.cube(-.2,0,-.4,.2,.24,.4,16777215),n.studs(-.2,-.4,.2,.4,.24,16777215),this.brickPool=new rp(t,n.toGeometry(),gl({studs:!1,vertexColors:!1}),240,{shadows:!0}),n=new Q,n.cyl(0,-.15,0,.5,.3,16777215,10,{bottom:!0}),n.cyl(0,.15,0,.2,.12,16777215,8),this.puffs=new rp(t,n.toGeometry(),gl({studs:!1,vertexColors:!1,roughness:.9,transparent:!0,opacity:.75,depthWrite:!1}),160),n=new Q,n.cyl(0,-.04,0,.32,.08,16777215,14,{bottom:!0}),n.cyl(0,.04,0,.12,.05,16777215,8),this.coinPool=new rp(t,n.toGeometry(),new Li({color:16106818,metalness:.75,roughness:.25,emissive:5915136}),90);let r=new wi(.34,.75).rotateX(-Math.PI/2);this.skids=new rp(t,r,new Br({color:1842204,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),500),this.skids.mesh.renderOrder=1,this.lastSkid=[null,null],this.smokeT=0,this._m=new K,this._q=new lt,this._e=new Vt,this._p=new W,this._s=new W}bricks(e,t,n,r,i,a,o=!1,s=null,c=6){let l=s||[Z.yellow,Z.yellow,Z.black,Z.white];for(let s=0;s<a;s++){let a=(o?5:3)+Math.random()*c*.5;this.brickPool.emit({x:e,y:t,z:n,vx:r*a+(Math.random()-.5)*5,vy:3+Math.random()*(o?7:4),vz:i*a+(Math.random()-.5)*5,wx:(Math.random()-.5)*14,wy:(Math.random()-.5)*14,wz:(Math.random()-.5)*14,ttl:2.2+Math.random(),s:.8+Math.random()*.6},l[Math.floor(Math.random()*l.length)])}}splash(e,t){for(let n=0;n<40;n++){let n=Math.random()*Math.PI*2,r=Math.random()*3;this.brickPool.emit({x:e+Math.cos(n)*r,y:.2,z:t+Math.sin(n)*r,vx:Math.cos(n)*(1+Math.random()*3),vy:5+Math.random()*7,vz:Math.sin(n)*(1+Math.random()*3),wx:Math.random()*5,wy:Math.random()*5,ttl:1.6,s:.6+Math.random()*.5,water:!0},Math.random()<.5?12576757:16777215)}for(let n=0;n<10;n++)this.puff(e+(Math.random()-.5)*4,.6,t+(Math.random()-.5)*4,16777215,2,2.4)}puff(e,t,n,r=15263976,i=1,a=1.2,o=1.2){this.puffs.emit({x:e,y:t,z:n,vx:(Math.random()-.5)*1.2,vy:o*(.6+Math.random()*.8),vz:(Math.random()-.5)*1.2,ry:Math.random()*6,s:.5*i,ds:1.6*i,ttl:a,grav:0},r)}dust(e,t,n,r){for(let i=0;i<6+r*10;i++)this.puff(e+(Math.random()-.5)*3,t+.3,n+(Math.random()-.5)*4,14274495,1+r,1)}coins(e,t,n,r){for(let i=0;i<r;i++){let r=Math.random()*Math.PI*2;this.coinPool.emit({x:e,y:t,z:n,vx:Math.cos(r)*(1+Math.random()*4),vy:6+Math.random()*6,vz:Math.sin(r)*(1+Math.random()*4),wx:6+Math.random()*6,ttl:2.2,s:1,bounce:.5})}}skid(e,t,n,r){let i=this.world.ground.visualHeight(t,n)+.035,a=this.lastSkid[e];a&&Math.hypot(a[0]-t,a[1]-n)<.6||(this.lastSkid[e]=[t,n],this.skids.emit({x:t,y:i,z:n,ry:r,ttl:9,grav:0,s:1,still:!0}))}update(e,t){let n=t.drifting||t.slip>4&&t.speed>6&&!t.airborne,r=t.boosting&&t.speed<8;if(this.smokeT-=e,(n||r)&&!t.airborne&&!t.inWater){let e=Math.cos(t.yaw),n=-Math.sin(t.yaw);for(let[r,i]of[[-1,0],[1,1]]){let a=t.x-t.fx*1.5+e*r*1.05,o=t.z-t.fz*1.5+n*r*1.05;this.skid(i,a,o,t.yaw),this.smokeT<=0&&this.puff(a,t.y+.3,o,15790320,1.1,1,.9)}this.smokeT<=0&&(this.smokeT=.045)}else this.lastSkid[0]=this.lastSkid[1]=null;t.boosting&&this.smokeT<=0&&(this.puffs.emit({x:t.x-t.fx*2.6,y:t.y+.55,z:t.z-t.fz*2.6,vx:-t.fx*3,vy:.5,vz:-t.fz*3,s:.35,ds:.6,ttl:.35,grav:0},Math.random()<.5?16751135:15912247),this.smokeT=.03),this.step(this.brickPool,e,!0),this.step(this.puffs,e,!1),this.step(this.coinPool,e,!0),this.step(this.skids,e,!1)}step(e,t,n){let r=this._m,i=this._q,a=this._e,o=this._p,s=this._s,c=!1;for(let l=0;l<e.n;l++){let u=e.p[l];if(u.life<=0)continue;if(c=!0,u.age+=t,u.age>=u.ttl){u.life=0,e.mesh.setMatrixAt(l,r.makeScale(0,0,0));continue}if(!u.still&&(u.vy-=u.grav*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t,u.rx+=u.wx*t,u.ry+=u.wy*t,u.rz+=u.wz*t,n)){let t=u.water?0:this.world.ground.visualHeight(u.x,u.z);if(u.y<t+.1){if(u.water){u.life=0,e.mesh.setMatrixAt(l,r.makeScale(0,0,0));continue}u.y=t+.1,u.vy=Math.abs(u.vy)*u.bounce,u.vx*=.6,u.vz*=.6,u.wx*=.5,u.wy*=.5,u.wz*=.5}}let d=u.age/u.ttl,f=d>.75?1-(d-.75)/.25:1,p=(u.s+u.ds*d)*f;a.set(u.rx,u.ry,u.rz),i.setFromEuler(a),r.compose(o.set(u.x,u.y,u.z),i,s.set(p,u.still?1:p,p)),e.mesh.setMatrixAt(l,r)}(c||e.dirty)&&(e.mesh.instanceMatrix.needsUpdate=!0),e.dirty=c}},ap=[[`hatch`,4],[`sedan`,4],[`mini`,3],[`van`,2],[`truck`,1]],op=[16,15,14,13,11.5,9,6,6],sp=class{constructor(e,t=34){this.game=e,this.graph=e.graph,this.world=e.world,this.max=t,this.meshes=Ld(e.scene,18),this.slots=Object.fromEntries(Object.keys(Id).map(e=>[e,Array(18).fill(null)])),this.cars=[],this.edges=this.graph.edges.map((e,t)=>t).filter(e=>{let t=this.graph.edges[e];return t.k<=6&&t.len>4&&t.main}),this.spawnT=0,this._m=new K,this._q=new lt,this._e=new Vt,this._p=new W,this._s=new W(1,1,1),this._zero=new K().makeScale(0,0,0),this._pt=[0,0,0]}reset(e){for(let e of[...this.cars])this.remove(e);for(let t=0;t<this.max;t++)this.spawn(e,60,330)}pickKind(){let e=Math.random()*ap.reduce((e,[,t])=>e+t,0);for(let[t,n]of ap)if((e-=n)<=0)return t;return`hatch`}allowed(e,t){return!(e.o===1&&t<0)&&!(e.o===-1&&t>0)}spawn(e,t=110,n=340){let r=this.pickKind(),i=this.slots[r].indexOf(null);if(i<0)return null;for(let a=0;a<30;a++){let a=this.edges[Math.floor(Math.random()*this.edges.length)],o=this.graph.edges[a],s=Math.random()*o.len,c=this.graph.pointAt(o,s,this._pt),l=Math.hypot(c[0]-e.x,c[1]-e.z);if(l<t||l>n)continue;let u=Math.random()<.5?1:-1;if(this.allowed(o,u)||(u=-u),!this.allowed(o,u)||this.cars.some(e=>e.edge===a&&Math.abs(e.s-(u>0?s:o.len-s))<12))continue;let d=Id[r],f={kind:r,slot:i,edge:a,dir:u,s:u>0?s:o.len-s,speed:0,x:c[0],z:c[1],y:0,yaw:0,rx:c[0],rz:c[1],ryaw:null,kx:0,kz:0,kvx:0,kvz:0,spin:0,spinV:0,knockT:0,len:d.length,radius:d.radius,honk:0,nearT:0,vx:0,vz:0,color:zu[Math.floor(Math.random()*zu.length)]};return this.slots[r][i]=f,f.col=new q(f.color),this.cars.push(f),f}return null}remove(e){this.slots[e.kind][e.slot]=null,this.cars.splice(this.cars.indexOf(e),1)}nextEdge(e){let t=this.graph.edges[e.edge],n=e.dir>0?t.b:t.a,r=this.graph.nx[n],i=this.graph.nz[n],a=this.graph.pointAt(t,e.dir>0?t.len-3:3),o=r-a[0],s=i-a[1],c=Math.hypot(o,s)||1,l=[];for(let t of this.graph.adj[n]){if(t===e.edge)continue;let a=this.graph.edges[t];if(a.k>6)continue;let u=a.a===n?1:-1;if(!this.allowed(a,u))continue;let d=this.graph.pointAt(a,u>0?Math.min(4,a.len):Math.max(0,a.len-4)),f=d[0]-r,p=d[1]-i,m=(f*o+p*s)/((Math.hypot(f,p)||1)*c),h=(m>.7?3:m>-.2?1.2:.3)*(a.k<=3?1.6:1);l.push({ei:t,dir:u,w:h,cos:m})}if(!l.length)return this.allowed(t,-e.dir)?{ei:e.edge,dir:-e.dir,cos:-1}:null;let u=Math.random()*l.reduce((e,t)=>e+t.w,0);for(let e of l)if((u-=e.w)<=0)return e;return l[0]}update(e,t,n=!1){let r=this.game.player.vehicle;this.spawnT-=e;for(let e of[...this.cars])Math.hypot(e.x-t.x,e.z-t.z)>430&&this.remove(e);this.spawnT<=0&&this.cars.length<this.max&&(this.spawn(t),this.spawnT=.15);let i={};for(let e of Object.keys(this.meshes))i[e]=0;for(let t of this.cars){let a=this.graph.edges[t.edge],o=op[a.k]??9,s=Math.sin(t.yaw)*-1,c=Math.cos(t.yaw)*-1,l=1/0;for(let e of this.cars){if(e===t)continue;let n=e.x-t.x,r=e.z-t.z,i=n*s+r*c;i<=0||i>18||Math.abs(-n*c+r*s)<2.2&&(l=Math.min(l,i-(t.len+e.len)/2))}if(!n){let n=r.x-t.x,i=r.z-t.z,a=n*s+i*c,o=Math.abs(-n*c+i*s);a>0&&a<16&&o<2.6&&(l=Math.min(l,a-t.len/2-2.4),t.honk-=e,t.honk<=0&&a<9&&r.speed<2&&(t.honk=4+Math.random()*4,this.game.audio&&this.game.audio.sfx(`honk`,Math.max(0,1-Math.hypot(n,i)/40))))}l<1/0&&(o=Math.min(o,Math.max(0,(l-2)*1.2))),a.len-t.s<14&&t.turnCos!==void 0&&t.turnCos<.5&&(o=Math.min(o,6));let u=o>t.speed?4:9;t.speed+=Math.max(-u*e,Math.min(u*e,o-t.speed)),t.knockT>0&&(t.speed*=Math.exp(-3*e)),t.s+=t.speed*e;let d=0;for(;t.s>this.graph.edges[t.edge].len&&d++<4;){let e=this.graph.edges[t.edge],n=t.next||this.nextEdge(t);if(t.next=null,!n){t.s=e.len,t.speed=0;break}t.s-=e.len,t.edge=n.ei,t.dir=n.dir}!t.next&&this.graph.edges[t.edge].len-t.s<16&&(t.next=this.nextEdge(t),t.turnCos=t.next?t.next.cos:1);let f=this.graph.edges[t.edge],p=this.graph.pointAt(f,t.dir>0?t.s:f.len-t.s,this._pt),m=p[2];t.dir<0&&(m+=Math.PI);let h=Math.sin(m),g=Math.cos(m),_=f.o?0:Math.min(2.4,f.w*.25+.2),v=p[0]-g*_,y=p[1]+h*_,b=Math.atan2(-h,-g);t.ryaw===null&&(t.rx=v,t.rz=y,t.ryaw=b);let x=1-Math.exp(-8*e);t.rx+=(v-t.rx)*x,t.rz+=(y-t.rz)*x;let S=b-t.ryaw;for(;S>Math.PI;)S-=Math.PI*2;for(;S<-Math.PI;)S+=Math.PI*2;t.ryaw+=S*x,t.knockT>0?(t.knockT-=e,t.kx+=t.kvx*e,t.kz+=t.kvz*e,t.spin+=t.spinV*e,t.kvx*=Math.exp(-2.5*e),t.kvz*=Math.exp(-2.5*e),t.spinV*=Math.exp(-2.5*e)):(t.kx*=Math.exp(-.8*e),t.kz*=Math.exp(-.8*e),t.spin*=Math.exp(-1.2*e));let C=t.x,w=t.z;t.x=t.rx+t.kx,t.z=t.rz+t.kz,t.yaw=t.ryaw+t.spin,t.vx=(t.x-C)/Math.max(e,.001),t.vz=(t.z-w)/Math.max(e,.001),t.y=this.world.ground.visualHeight(t.x,t.z),n||this.interact(t,r,e),this._e.set(0,t.yaw,0),this._q.setFromEuler(this._e),this._m.compose(this._p.set(t.x,t.y,t.z),this._q,this._s);let T=i[t.kind]++;this.meshes[t.kind].setMatrixAt(T,this._m),this.meshes[t.kind].setColorAt(T,t.col)}for(let[e,t]of Object.entries(this.meshes))t.count=i[e],t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}interact(e,t,n){e.nearT=Math.max(0,e.nearT-n);let r=-Math.sin(e.yaw),i=-Math.cos(e.yaw),a=e.len/2-e.radius,o=!1,s=1/0;for(let n of t.p.circleOffsets){let c=t.x+t.fx*n,l=t.z+t.fz*n;for(let n of[-a,a]){let a=e.x+r*n,u=e.z+i*n,d=c-a,f=l-u,p=Math.hypot(d,f)||1e-4,m=p-(t.p.circleR+e.radius);if(s=Math.min(s,m),m>=0||Math.abs(t.y-e.y)>2)continue;o=!0;let h=d/p,g=f/p,_=-m,v=e.kind===`truck`?3:e.kind===`van`?1.8:1.3;t.x+=h*_*(v/(1+v)),t.z+=g*_*(v/(1+v)),e.kx-=h*_*(1/(1+v)),e.kz-=g*_*(1/(1+v));let y=t.vx-e.vx,b=t.vz-e.vz,x=y*h+b*g;if(x<0){let n=-1.35*x/(1+1/v);t.vx+=n*h/1,t.vz+=n*g/1,e.kvx-=n*h/v,e.kvz-=n*g/v,e.spinV+=(Math.random()-.5)*n*.25,e.knockT=1.6,t.yawRate+=(Math.random()-.5)*n*.05,-x>2.5&&t.events.push({type:`hit`,x:a+h*e.radius,y:e.y+1,z:u+g*e.radius,impact:-x,nx:h,nz:g,kind:7,color:e.color})}}}o&&(e.nearT=1.5);let c=Math.hypot(t.vx-e.vx,t.vz-e.vz);!o&&s<1.1&&s>0&&c>13&&e.nearT<=0&&(e.nearT=3,this.game.nearMiss?.(e))}},cp=new URLSearchParams(location.search),lp={pixelRatio:1.5,shadows:!0,shadowSize:2048,shadowRange:110};cp.get(`quality`)===`low`&&Object.assign(lp,{pixelRatio:1,shadowSize:1024,shadowRange:80});function up(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}async function dp(){let e=document.querySelector(`.load-label`),t=document.querySelector(`.load-fill`),n=(n,r)=>{e.textContent=n,t.style.width=`${Math.round(r*100)}%`};n(`Downloading Geneva…`,.02);let r=await(await fetch(`./data/geneva.json`)).json(),i=Al(document.getElementById(`app`),lp),{scene:a,sun:o,updateSun:s}=jl(i,lp),c=new ud(r,i,a,up(42));await c.build(n),n(`Placing trees, flags and landmarks`,.85),await new Promise(e=>requestAnimationFrame(e));let l=new ep({renderer:i,scene:a,sun:o,updateSun:s,world:c,map:r,quality:lp,rng:up(Date.now()%1e9|0),extras:{audio:new np,effects:e=>new ip(e),traffic:e=>new sp(e)}});window.__game=l,window.__perf=()=>l.perf(),n(`Ready!`,1),l.start(),document.getElementById(`loading`).classList.add(`done`),window.__ready=!0}dp().catch(e=>{console.error(e);let t=document.querySelector(`.load-box`),n=document.createElement(`div`);n.className=`load-error`,n.textContent=`Oops, a brick fell off: `+e.message,t.appendChild(n)});