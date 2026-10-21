(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="180",ou=0,bc=1,au=2,Gl=1,Hl=2,Gn=3,Rn=0,qe=1,Le=2,ii=0,si=1,yi=2,Ec=3,Tc=4,cu=5,_i=100,lu=101,hu=102,uu=103,du=104,fu=200,pu=201,mu=202,gu=203,Jo=204,jo=205,xu=206,_u=207,vu=208,yu=209,Mu=210,Su=211,wu=212,bu=213,Eu=214,Qo=0,ta=1,ea=2,os=3,na=4,ia=5,sa=6,ra=7,Vl=0,Tu=1,Au=2,ri=0,Ru=1,Cu=2,Pu=3,Wl=4,Iu=5,Lu=6,Du=7,Xl=300,as=301,cs=302,oa=303,aa=304,no=306,Xr=1e3,Mi=1001,ca=1002,gn=1003,Uu=1004,or=1005,bn=1006,lo=1007,Si=1008,Cn=1009,ql=1010,Yl=1011,Bs=1012,Ka=1013,Ti=1014,Hn=1015,$s=1016,$a=1017,Ja=1018,ks=1020,Zl=35902,Kl=35899,$l=1021,Jl=1022,pn=1023,Gs=1026,Hs=1027,jl=1028,ja=1029,Ql=1030,Qa=1031,tc=1033,Br=33776,kr=33777,Gr=33778,Hr=33779,la=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37808,xa=37809,_a=37810,va=37811,ya=37812,Ma=37813,Sa=37814,wa=37815,ba=37816,Ea=37817,Ta=37818,Aa=37819,Ra=37820,Ca=37821,Pa=36492,Ia=36494,La=36495,Da=36283,Ua=36284,za=36285,Na=36286,zu=3200,Nu=3201,th=0,Fu=1,ni="",De="srgb",ls="srgb-linear",qr="linear",me="srgb",Ui=7680,Ac=519,Ou=512,Bu=513,ku=514,eh=515,Gu=516,Hu=517,Vu=518,Wu=519,Fa=35044,Rc="300 es",En=2e3,Yr=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const Ds=Math.PI/180,Vs=180/Math.PI;function An(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function ec(i,t){return(i%t+t)%t}function Xu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qu(i,t,e){return i!==t?(e-i)/(t-i):0}function Us(i,t,e){return(1-e)*i+e*t}function Yu(i,t,e,n){return Us(i,t,1-Math.exp(-e*n))}function Zu(i,t=1){return t-Math.abs(ec(i,t*2)-t)}function Ku(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $u(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ju(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ju(i,t){return i+Math.random()*(t-i)}function Qu(i){return i*(.5-Math.random())}function td(i){i!==void 0&&(Cc=i);let t=Cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ed(i){return i*Ds}function nd(i){return i*Vs}function id(i){return(i&i-1)===0&&i!==0}function sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function od(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ad={DEG2RAD:Ds,RAD2DEG:Vs,generateUUID:An,clamp:ne,euclideanModulo:ec,mapLinear:Xu,inverseLerp:qu,lerp:Us,damp:Yu,pingpong:Zu,smoothstep:Ku,smootherstep:$u,randInt:Ju,randFloat:ju,randFloatSpread:Qu,seededRandom:td,degToRad:ed,radToDeg:nd,isPowerOfTwo:id,ceilPowerOfTwo:sd,floorPowerOfTwo:rd,setQuaternionFromProperEuler:od,normalize:fe,denormalize:fn};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Js{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*x,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const P=Math.sqrt(b),A=Math.atan2(P,p*S);g=Math.sin(g*A)/P,a=Math.sin(a*A)/P}const _=a*S;if(c=c*g+d*_,l=l*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new I,Pc=new Js;class te{constructor(t,e,n,s,r,o,a,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],S=s[1],b=s[4],_=s[7],P=s[2],A=s[5],C=s[8];return r[0]=o*x+a*S+c*P,r[3]=o*g+a*b+c*A,r[6]=o*p+a*_+c*C,r[1]=l*x+h*S+u*P,r[4]=l*g+h*b+u*A,r[7]=l*p+h*_+u*C,r[2]=d*x+f*S+m*P,r[5]=d*g+f*b+m*A,r[8]=d*p+f*_+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(uo.makeScale(t,e)),this}rotate(t){return this.premultiply(uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new te;function nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){const i=Zr("canvas");return i.style.display="block",i}const Ic={};function Ws(i){i in Ic||(Ic[i]=!0,console.warn(i))}function ld(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Lc=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){const i={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ls]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}const le=hd();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class ud{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=Zr("canvas")),zi.width=t.width,zi.height=t.height;const s=zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dd=0;class nc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fo(s[o].image)):r.push(fo(s[o]))}else r=fo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ud.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;const po=new I;class Ye extends ps{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Mi,s=Mi,r=bn,o=Si,a=pn,c=Cn,l=Ye.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=An(),this.name="",this.source=new nc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(po).x}get height(){return this.source.getSize(po).y}get depth(){return this.source.getSize(po).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xr:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xr:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Xl;Ye.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,s=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,_=(f+1)/2,P=(p+1)/2,A=(h+d)/4,C=(u+x)/4,D=(m+g)/4;return b>_&&b>P?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=C/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=D/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pd extends ps{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ye(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new nc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends pd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ih extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class md extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(t.matrixWorld),this.union(ar)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),cr.subVectors(this.max,vs),Ni.subVectors(t.a,vs),Fi.subVectors(t.b,vs),Oi.subVectors(t.c,vs),Kn.subVectors(Fi,Ni),$n.subVectors(Oi,Fi),hi.subVectors(Ni,Oi);let e=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-hi.z,hi.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,hi.z,0,-hi.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-hi.y,hi.x,0];return!mo(e,Ni,Fi,Oi,cr)||(e=[1,0,0,0,1,0,0,0,1],!mo(e,Ni,Fi,Oi,cr))?!1:(lr.crossVectors(Kn,$n),e=[lr.x,lr.y,lr.z],mo(e,Ni,Fi,Oi,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new I,new I,new I,new I,new I,new I,new I,new I],hn=new I,ar=new js,Ni=new I,Fi=new I,Oi=new I,Kn=new I,$n=new I,hi=new I,vs=new I,cr=new I,lr=new I,ui=new I;function mo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ui.fromArray(i,r);const a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const gd=new js,ys=new I,go=new I;class io{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const e=ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(go)),this.expandByPoint(ys.copy(t.center).sub(go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Nn=new I,xo=new I,hr=new I,Jn=new I,_o=new I,ur=new I,vo=new I;class sh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xo.copy(t).add(e).multiplyScalar(.5),hr.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(xo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(hr),a=Jn.dot(this.direction),c=-Jn.dot(hr),l=Jn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xo).addScaledVector(hr,d),f}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){_o.subVectors(e,t),ur.subVectors(n,t),vo.crossVectors(_o,ur);let o=this.direction.dot(vo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,t);const c=a*this.direction.dot(ur.crossVectors(Jn,ur));if(c<0)return null;const l=a*this.direction.dot(_o.cross(Jn));if(l<0||c+l>o)return null;const h=-a*Jn.dot(vo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,_d)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),jn.crossVectors(n,je),jn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),jn.crossVectors(n,je)),jn.normalize(),dr.crossVectors(je,jn),s[0]=jn.x,s[4]=dr.x,s[8]=je.x,s[1]=jn.y,s[5]=dr.y,s[9]=je.y,s[2]=jn.z,s[6]=dr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],S=n[3],b=n[7],_=n[11],P=n[15],A=s[0],C=s[4],D=s[8],w=s[12],M=s[1],L=s[5],N=s[9],X=s[13],F=s[2],O=s[6],G=s[10],Y=s[14],V=s[3],tt=s[7],it=s[11],vt=s[15];return r[0]=o*A+a*M+c*F+l*V,r[4]=o*C+a*L+c*O+l*tt,r[8]=o*D+a*N+c*G+l*it,r[12]=o*w+a*X+c*Y+l*vt,r[1]=h*A+u*M+d*F+f*V,r[5]=h*C+u*L+d*O+f*tt,r[9]=h*D+u*N+d*G+f*it,r[13]=h*w+u*X+d*Y+f*vt,r[2]=m*A+x*M+g*F+p*V,r[6]=m*C+x*L+g*O+p*tt,r[10]=m*D+x*N+g*G+p*it,r[14]=m*w+x*X+g*Y+p*vt,r[3]=S*A+b*M+_*F+P*V,r[7]=S*C+b*L+_*O+P*tt,r[11]=S*D+b*N+_*G+P*it,r[15]=S*w+b*X+_*Y+P*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],S=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,b=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,_=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,P=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,A=e*S+n*b+s*_+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*C,t[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*p+n*c*p)*C,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*C,t[4]=b*C,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*C,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*C,t[8]=_*C,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*C,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=P*C,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*C,t[14]=(m*a*s-o*x*s-m*n*c+e*x*c+o*n*g-e*a*g)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,S=c*l,b=c*h,_=c*u,P=n.x,A=n.y,C=n.z;return s[0]=(1-(x+p))*P,s[1]=(f+_)*P,s[2]=(m-b)*P,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(d+p))*A,s[6]=(g+S)*A,s[7]=0,s[8]=(m+b)*C,s[9]=(g-S)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const l=1/r,h=1/o,u=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=En,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===En)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Yr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=En,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===En)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Yr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new I,un=new ve,xd=new I(0,0,0),_d=new I(1,1,1),jn=new I,dr=new I,je=new I,Uc=new ve,zc=new Js;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vd=0;const Nc=new I,ki=new Js,Fn=new ve,fr=new I,Ms=new I,yd=new I,Md=new Js,Fc=new I(1,0,0),Oc=new I(0,1,0),Bc=new I(0,0,1),kc={type:"added"},Sd={type:"removed"},Gi={type:"childadded",child:null},yo={type:"childremoved",child:null};class Ue extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new I,e=new Pn,n=new Js,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new te}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(Oc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return Nc.copy(t).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(Oc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ms,fr,this.up):Fn.lookAt(fr,Ms,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Fn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sd),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new I(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new I,On=new I,Mo=new I,Bn=new I,Hi=new I,Vi=new I,Gc=new I,So=new I,wo=new I,bo=new I,Eo=new Ce,To=new Ce,Ao=new Ce;class cn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),On.subVectors(n,e),Mo.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(On),c=dn.dot(Mo),l=On.dot(On),h=On.dot(Mo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Eo.setScalar(0),To.setScalar(0),Ao.setScalar(0),Eo.fromBufferAttribute(t,e),To.fromBufferAttribute(t,n),Ao.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Eo,r.x),o.addScaledVector(To,r.y),o.addScaledVector(Ao,r.z),o}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),On.subVectors(t,e),dn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),dn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,n),Vi.subVectors(r,n),So.subVectors(t,n);const c=Hi.dot(So),l=Vi.dot(So);if(c<=0&&l<=0)return e.copy(n);wo.subVectors(t,s);const h=Hi.dot(wo),u=Vi.dot(wo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hi,o);bo.subVectors(t,r);const f=Hi.dot(bo),m=Vi.dot(bo);if(m>=0&&f<=m)return e.copy(r);const x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Vi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Gc.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Gc,a);const p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=ec(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ro(o,r,t+1/3),this.g=Ro(o,r,t),this.b=Ro(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return le.workingToColorSpace(ke.copy(this),t),Math.round(ne(ke.r*255,0,255))*65536+Math.round(ne(ke.g*255,0,255))*256+Math.round(ne(ke.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=De){le.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(pr);const n=Us(Qn.h,pr.h,e),s=Us(Qn.s,pr.s,e),r=Us(Qn.l,pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Yt;Yt.NAMES=oh;let wd=0;class Pi extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=An(),this.name="",this.type="Material",this.blending=si,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=jo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mn extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new I,mr=new ct;let bd=0;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}}class ah extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ch extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ed=0;const rn=new ve,Co=new Ue,Wi=new I,Qe=new js,Ss=new js,Fe=new I;class Ae extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nh(t)?ch:ah)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(Qe.min,Ss.min),Qe.expandByPoint(Fe),Fe.addVectors(Qe.max,Ss.max),Qe.expandByPoint(Fe)):(Qe.expandByPoint(Ss.min),Qe.expandByPoint(Ss.max))}Qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(Wi.fromBufferAttribute(t,l),Fe.add(Wi)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new I,c[D]=new I;const l=new I,h=new I,u=new I,d=new ct,f=new ct,m=new ct,x=new I,g=new I;function p(D,w,M){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[D].add(x),a[w].add(x),a[M].add(x),c[D].add(g),c[w].add(g),c[M].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,w=S.length;D<w;++D){const M=S[D],L=M.start,N=M.count;for(let X=L,F=L+N;X<F;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const b=new I,_=new I,P=new I,A=new I;function C(D){P.fromBufferAttribute(s,D),A.copy(P);const w=a[D];b.copy(w),b.sub(P.multiplyScalar(P.dot(w))).normalize(),_.crossVectors(A,w);const L=_.dot(c[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,L)}for(let D=0,w=S.length;D<w;++D){const M=S[D],L=M.start,N=M.count;for(let X=L,F=L+N;X<F;X+=3)C(t.getX(X+0)),C(t.getX(X+1)),C(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new He(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hc=new ve,di=new sh,gr=new io,Vc=new I,xr=new I,_r=new I,vr=new I,Po=new I,yr=new I,Wc=new I,Mr=new I;class Bt extends Ue{constructor(t=new Ae,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Po.fromBufferAttribute(u,t),o?yr.addScaledVector(Po,h):yr.addScaledVector(Po.sub(e),h))}e.add(yr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(gr.containsPoint(di.origin)===!1&&(di.intersectSphere(gr,Vc)===null||di.origin.distanceToSquared(Vc)>(t.far-t.near)**2))&&(Hc.copy(r).invert(),di.copy(t.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=S,P=b;_<P;_+=3){const A=a.getX(_),C=a.getX(_+1),D=a.getX(_+2);s=Sr(this,p,t,n,l,h,u,A,C,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const S=a.getX(g),b=a.getX(g+1),_=a.getX(g+2);s=Sr(this,o,t,n,l,h,u,S,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=S,P=b;_<P;_+=3){const A=_,C=_+1,D=_+2;s=Sr(this,p,t,n,l,h,u,A,C,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const S=g,b=g+1,_=g+2;s=Sr(this,o,t,n,l,h,u,S,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Td(i,t,e,n,s,r,o,a){let c;if(t.side===qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Rn,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Mr);return l<e.near||l>e.far?null:{distance:l,point:Mr.clone(),object:i}}function Sr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,xr),i.getVertexPosition(c,_r),i.getVertexPosition(l,vr);const h=Td(i,t,e,n,xr,_r,vr,Wc);if(h){const u=new I;cn.getBarycoord(Wc,xr,_r,vr,u),s&&(h.uv=cn.getInterpolatedAttribute(s,a,c,l,u,new ct)),r&&(h.uv1=cn.getInterpolatedAttribute(r,a,c,l,u,new ct)),o&&(h.normal=cn.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};cn.getNormal(xr,_r,vr,d.normal),h.face=d,h.barycoord=u}return h}class Yn extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function m(x,g,p,S,b,_,P,A,C,D,w){const M=_/C,L=P/D,N=_/2,X=P/2,F=A/2,O=C+1,G=D+1;let Y=0,V=0;const tt=new I;for(let it=0;it<G;it++){const vt=it*L-X;for(let Pt=0;Pt<O;Pt++){const Vt=Pt*M-N;tt[x]=Vt*S,tt[g]=vt*b,tt[p]=F,l.push(tt.x,tt.y,tt.z),tt[x]=0,tt[g]=0,tt[p]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Pt/C),u.push(1-it/D),Y+=1}}for(let it=0;it<D;it++)for(let vt=0;vt<C;vt++){const Pt=d+vt+O*it,Vt=d+vt+O*(it+1),jt=d+(vt+1)+O*(it+1),Zt=d+(vt+1)+O*it;c.push(Pt,Vt,Zt),c.push(Vt,jt,Zt),V+=6}a.addGroup(f,V,w),f+=V,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=hs(i[e]);for(const s in n)t[s]=n[s]}return t}function Ad(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Rd={clone:hs,merge:Xe};var Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hh extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new I,Xc=new ct,qc=new ct;class an extends hh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,qc),e.subVectors(qc,Xc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class Id extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Xi,qi,t,e);s.layers=this.layers,this.add(s);const r=new an(Xi,qi,t,e);r.layers=this.layers,this.add(r);const o=new an(Xi,qi,t,e);o.layers=this.layers,this.add(o);const a=new an(Xi,qi,t,e);a.layers=this.layers,this.add(a);const c=new an(Xi,qi,t,e);c.layers=this.layers,this.add(c);const l=new an(Xi,qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class uh extends Ye{constructor(t=[],e=as,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ld extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ii});r.uniforms.tEquirect.value=e;const o=new Bt(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=bn),new Id(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class At extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dd={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ic{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=e}clone(){return new ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ud extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new I;class Kr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Kr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xs extends Pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const ws=new I,Zi=new I,Ki=new I,$i=new ct,bs=new ct,dh=new ve,wr=new I,Es=new I,br=new I,Yc=new ct,Lo=new ct,Zc=new ct;class $r extends Ue{constructor(t=new Xs){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zd(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Kr(n,3,0,!1)),Yi.setAttribute("uv",new Kr(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),dh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-Ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Er(wr.set(-.5,-.5,0),Ki,o,Zi,s,r),Er(Es.set(.5,-.5,0),Ki,o,Zi,s,r),Er(br.set(.5,.5,0),Ki,o,Zi,s,r),Yc.set(0,0),Lo.set(1,0),Zc.set(1,1);let a=t.ray.intersectTriangle(wr,Es,br,!1,ws);if(a===null&&(Er(Es.set(-.5,.5,0),Ki,o,Zi,s,r),Lo.set(0,1),a=t.ray.intersectTriangle(wr,br,Es,!1,ws),a===null))return;const c=t.ray.origin.distanceTo(ws);c<t.near||c>t.far||e.push({distance:c,point:ws.clone(),uv:cn.getInterpolation(ws,wr,Es,br,Yc,Lo,Zc,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Er(i,t,e,n,s,r){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(bs.x=r*$i.x-s*$i.y,bs.y=s*$i.x+r*$i.y):bs.copy($i),i.copy(t),i.x+=bs.x,i.y+=bs.y,i.applyMatrix4(dh)}const Do=new I,Nd=new I,Fd=new te;class gi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Do.subVectors(n,e).cross(Nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Do),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fd.getNormalMatrix(t),s=this.coplanarPoint(Do).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new io,Od=new ct(.5,.5),Tr=new I;class sc{constructor(t=new gi,e=new gi,n=new gi,s=new gi,r=new gi,o=new gi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],S=r[12],b=r[13],_=r[14],P=r[15];if(s[0].setComponents(l-o,f-h,p-m,P-S).normalize(),s[1].setComponents(l+o,f+h,p+m,P+S).normalize(),s[2].setComponents(l+a,f+u,p+x,P+b).normalize(),s[3].setComponents(l-a,f-u,p-x,P-b).normalize(),n)s[4].setComponents(c,d,g,_).normalize(),s[5].setComponents(l-c,f-d,p-g,P-_).normalize();else if(s[4].setComponents(l-c,f-d,p-g,P-_).normalize(),e===En)s[5].setComponents(l+c,f+d,p+g,P+_).normalize();else if(e===Yr)s[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);const e=Od.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fh extends Pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kc=new ve,Oa=new sh,Ar=new io,Rr=new I;class Bd extends Ue{constructor(t=new Ae,e=new fh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;Kc.copy(s).invert(),Oa.copy(t.ray).applyMatrix4(Kc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){const g=l.getX(m);Rr.fromBufferAttribute(u,g),$c(Rr,g,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Rr.fromBufferAttribute(u,m),$c(Rr,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $c(i,t,e,n,s,r,o){const a=Oa.distanceSqToPoint(i);if(a<e){const c=new I;Oa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ii extends Ye{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ph extends Ye{constructor(t,e,n=Ti,s,r,o,a=gn,c=gn,l,h=Gs,u=1){if(h!==Gs&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class mh extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qs extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,h=new ct;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class tn extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=n/2;let p=0;S(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function S(){const _=new I,P=new I;let A=0;const C=(e-t)/n;for(let D=0;D<=r;D++){const w=[],M=D/r,L=M*(e-t)+t;for(let N=0;N<=s;N++){const X=N/s,F=X*c+a,O=Math.sin(F),G=Math.cos(F);P.x=L*O,P.y=-M*n+g,P.z=L*G,u.push(P.x,P.y,P.z),_.set(O,C,G).normalize(),d.push(_.x,_.y,_.z),f.push(X,1-M),w.push(m++)}x.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){const M=x[w][D],L=x[w+1][D],N=x[w+1][D+1],X=x[w][D+1];(t>0||w!==0)&&(h.push(M,L,X),A+=3),(e>0||w!==r-1)&&(h.push(L,N,X),A+=3)}l.addGroup(p,A,0),p+=A}function b(_){const P=m,A=new ct,C=new I;let D=0;const w=_===!0?t:e,M=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const L=m;for(let N=0;N<=s;N++){const F=N/s*c+a,O=Math.cos(F),G=Math.sin(F);C.x=w*G,C.y=g*M,C.z=w*O,u.push(C.x,C.y,C.z),d.push(0,M,0),A.x=O*.5+.5,A.y=G*.5*M+.5,f.push(A.x,A.y),m++}for(let N=0;N<s;N++){const X=P+N,F=L+N;_===!0?h.push(F,F+1,X):h.push(F+1,F,X),D+=3}l.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wn extends tn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Wn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rc extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const b=new I,_=new I,P=new I;for(let A=0;A<e.length;A+=3)f(e[A+0],b),f(e[A+1],_),f(e[A+2],P),c(b,_,P,S)}function c(S,b,_,P){const A=P+1,C=[];for(let D=0;D<=A;D++){C[D]=[];const w=S.clone().lerp(_,D/A),M=b.clone().lerp(_,D/A),L=A-D;for(let N=0;N<=L;N++)N===0&&D===A?C[D][N]=w:C[D][N]=w.clone().lerp(M,N/L)}for(let D=0;D<A;D++)for(let w=0;w<2*(A-D)-1;w++){const M=Math.floor(w/2);w%2===0?(d(C[D][M+1]),d(C[D+1][M]),d(C[D][M])):(d(C[D][M+1]),d(C[D+1][M+1]),d(C[D+1][M]))}}function l(S){const b=new I;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(S),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){const S=new I;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];const _=g(S)/2/Math.PI+.5,P=p(S)/Math.PI+.5;o.push(_,1-P)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){const b=o[S+0],_=o[S+2],P=o[S+4],A=Math.max(b,_,P),C=Math.min(b,_,P);A>.9&&C<.1&&(b<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),P<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,b){const _=S*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function m(){const S=new I,b=new I,_=new I,P=new I,A=new ct,C=new ct,D=new ct;for(let w=0,M=0;w<r.length;w+=9,M+=6){S.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),A.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),P.copy(S).add(b).add(_).divideScalar(3);const L=g(P);x(A,M+0,S,L),x(C,M+2,b,L),x(D,M+4,_,L)}}function x(S,b,_,P){P<0&&S.x===1&&(o[b]=S.x-1),_.x===0&&_.z===0&&(o[b]=P/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.vertices,t.indices,t.radius,t.details)}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ct:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,c=new ve;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class oc extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class kd extends oc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ac(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Cr=new I,Uo=new ac,zo=new ac,No=new ac;class cc extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),l=Cr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Uo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),zo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),No.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),zo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),No.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Uo.calc(c),zo.calc(c),No.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Jc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Gd(i,t){const e=1-i;return e*e*t}function Hd(i,t){return 2*(1-i)*i*t}function Vd(i,t){return i*i*t}function zs(i,t,e,n){return Gd(i,t)+Hd(i,e)+Vd(i,n)}function Wd(i,t){const e=1-i;return e*e*e*t}function Xd(i,t){const e=1-i;return 3*e*e*i*t}function qd(i,t){return 3*(1-i)*i*i*t}function Yd(i,t){return i*i*i*t}function Ns(i,t,e,n,s){return Wd(i,t)+Xd(i,e)+qd(i,n)+Yd(i,s)}class gh extends Dn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ns(t,s.x,r.x,o.x,a.x),Ns(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zd extends Dn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ns(t,s.x,r.x,o.x,a.x),Ns(t,s.y,r.y,o.y,a.y),Ns(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xh extends Dn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kd extends Dn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _h extends Dn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zs(t,s.x,r.x,o.x),zs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $d extends Dn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zs(t,s.x,r.x,o.x),zs(t,s.y,r.y,o.y),zs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vh extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Jc(a,c.x,l.x,h.x,u.x),Jc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Ba=Object.freeze({__proto__:null,ArcCurve:kd,CatmullRomCurve3:cc,CubicBezierCurve:gh,CubicBezierCurve3:Zd,EllipseCurve:oc,LineCurve:xh,LineCurve3:Kd,QuadraticBezierCurve:_h,QuadraticBezierCurve3:$d,SplineCurve:vh});class Jd extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ba[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ba[s.type]().fromJSON(s))}return this}}class jc extends Jd{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xh(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new _h(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new gh(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new vh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new oc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yh extends jc{constructor(t){super(t),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new jc().fromJSON(s))}return this}}function jd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Mh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=sf(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],m=i[d+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return qs(r,o,e,a,c,l,0),o}function Mh(i,t,e,n,s){let r;if(s===mf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Qc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Qc(o/n|0,i[o],i[o+1],r);return r&&us(r,r.next)&&(Zs(r),r=r.next),r}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(us(e,e.next)||Te(e.prev,e,e.next)===0)){if(Zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&lf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?tf(i,n,s,r):Qd(i)){t.push(c.i,i.i,l.i),Zs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ef(Ri(i),t),qs(i,t,e,n,s,r,2)):o===2&&nf(i,t,e,n,s,r):qs(Ri(i),t,e,n,s,r,1);break}}}function Qd(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Cs(s,a,r,c,o,l,m.x,m.y)&&Te(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function tf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(h,u,d),x=Math.max(a,c,l),g=Math.max(h,u,d),p=ka(f,m,t,e,n),S=ka(x,g,t,e,n);let b=i.prevZ,_=i.nextZ;for(;b&&b.z>=p&&_&&_.z<=S;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Cs(a,h,c,u,l,d,b.x,b.y)&&Te(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Cs(a,h,c,u,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Cs(a,h,c,u,l,d,b.x,b.y)&&Te(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=S;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Cs(a,h,c,u,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ef(i,t){let e=i;do{const n=e.prev,s=e.next.next;!us(n,s)&&wh(n,e,e.next,s)&&Ys(n,s)&&Ys(s,n)&&(t.push(n.i,e.i,s.i),Zs(e),Zs(e.next),e=i=s),e=e.next}while(e!==i);return Ri(e)}function nf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&df(o,a)){let c=bh(o,a);o=Ri(o,o.next),c=Ri(c,c.next),qs(o,t,e,n,s,r,0),qs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sf(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Mh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(uf(l))}s.sort(rf);for(let r=0;r<s.length;r++)e=of(s[r],e);return e}function rf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function of(i,t){const e=af(i,t);if(!e)return t;const n=bh(e,i);return Ri(n,n.next),Ri(e,e.next)}function af(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(us(i,e))return e;do{if(us(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Sh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Ys(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&cf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function cf(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function lf(i,t,e,n){let s=i;do s.z===0&&(s.z=ka(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hf(s)}function hf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ka(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function uf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Sh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Cs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Sh(i,t,e,n,s,r,o,a)}function df(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ff(i,t)&&(Ys(i,t)&&Ys(t,i)&&pf(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||us(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function us(i,t){return i.x===t.x&&i.y===t.y}function wh(i,t,e,n){const s=Ir(Te(i,t,e)),r=Ir(Te(i,t,n)),o=Ir(Te(e,n,i)),a=Ir(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&Pr(i,e,t)||r===0&&Pr(i,n,t)||o===0&&Pr(e,i,n)||a===0&&Pr(e,t,n))}function Pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ir(i){return i>0?1:i<0?-1:0}function ff(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&wh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ys(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function pf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bh(i,t){const e=Ga(i.i,i.x,i.y),n=Ga(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qc(i,t,e,n){const s=Ga(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ga(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class gf{static triangulate(t,e,n=2){return jd(t,e,n)}}class wi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return wi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];tl(t),el(n,t);let o=t.length;e.forEach(tl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,el(n,e[c]);const a=gf.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function tl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function el(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class lc extends Ae{constructor(t=new yh([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:xf;let b,_=!1,P,A,C,D;p&&(b=p.getSpacedPoints(h),_=!0,d=!1,P=p.computeFrenetFrames(h,!1),A=new I,C=new I,D=new I),d||(g=0,f=0,m=0,x=0);const w=a.extractPoints(l);let M=w.shape;const L=w.holes;if(!wi.isClockWise(M)){M=M.reverse();for(let ot=0,et=L.length;ot<et;ot++){const Q=L[ot];wi.isClockWise(Q)&&(L[ot]=Q.reverse())}}function X(ot){const Q=10000000000000001e-36;let j=ot[0];for(let gt=1;gt<=ot.length;gt++){const lt=gt%ot.length,xt=ot[lt],$t=xt.x-j.x,Kt=xt.y-j.y,R=$t*$t+Kt*Kt,y=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(j.x),Math.abs(j.y)),H=Q*y*y;if(R<=H){ot.splice(lt,1),gt--;continue}j=xt}}X(M),L.forEach(X);const F=L.length,O=M;for(let ot=0;ot<F;ot++){const et=L[ot];M=M.concat(et)}function G(ot,et,Q){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(et,Q)}const Y=M.length;function V(ot,et,Q){let j,gt,lt;const xt=ot.x-et.x,$t=ot.y-et.y,Kt=Q.x-ot.x,R=Q.y-ot.y,y=xt*xt+$t*$t,H=xt*R-$t*Kt;if(Math.abs(H)>Number.EPSILON){const Z=Math.sqrt(y),rt=Math.sqrt(Kt*Kt+R*R),$=et.x-$t/Z,zt=et.y+xt/Z,pt=Q.x-R/rt,Lt=Q.y+Kt/rt,Dt=((pt-$)*R-(Lt-zt)*Kt)/(xt*R-$t*Kt);j=$+xt*Dt-ot.x,gt=zt+$t*Dt-ot.y;const ht=j*j+gt*gt;if(ht<=2)return new ct(j,gt);lt=Math.sqrt(ht/2)}else{let Z=!1;xt>Number.EPSILON?Kt>Number.EPSILON&&(Z=!0):xt<-Number.EPSILON?Kt<-Number.EPSILON&&(Z=!0):Math.sign($t)===Math.sign(R)&&(Z=!0),Z?(j=-$t,gt=xt,lt=Math.sqrt(y)):(j=xt,gt=$t,lt=Math.sqrt(y/2))}return new ct(j/lt,gt/lt)}const tt=[];for(let ot=0,et=O.length,Q=et-1,j=ot+1;ot<et;ot++,Q++,j++)Q===et&&(Q=0),j===et&&(j=0),tt[ot]=V(O[ot],O[Q],O[j]);const it=[];let vt,Pt=tt.concat();for(let ot=0,et=F;ot<et;ot++){const Q=L[ot];vt=[];for(let j=0,gt=Q.length,lt=gt-1,xt=j+1;j<gt;j++,lt++,xt++)lt===gt&&(lt=0),xt===gt&&(xt=0),vt[j]=V(Q[j],Q[lt],Q[xt]);it.push(vt),Pt=Pt.concat(vt)}let Vt;if(g===0)Vt=wi.triangulateShape(O,L);else{const ot=[],et=[];for(let Q=0;Q<g;Q++){const j=Q/g,gt=f*Math.cos(j*Math.PI/2),lt=m*Math.sin(j*Math.PI/2)+x;for(let xt=0,$t=O.length;xt<$t;xt++){const Kt=G(O[xt],tt[xt],lt);Nt(Kt.x,Kt.y,-gt),j===0&&ot.push(Kt)}for(let xt=0,$t=F;xt<$t;xt++){const Kt=L[xt];vt=it[xt];const R=[];for(let y=0,H=Kt.length;y<H;y++){const Z=G(Kt[y],vt[y],lt);Nt(Z.x,Z.y,-gt),j===0&&R.push(Z)}j===0&&et.push(R)}}Vt=wi.triangulateShape(ot,et)}const jt=Vt.length,Zt=m+x;for(let ot=0;ot<Y;ot++){const et=d?G(M[ot],Pt[ot],Zt):M[ot];_?(C.copy(P.normals[0]).multiplyScalar(et.x),A.copy(P.binormals[0]).multiplyScalar(et.y),D.copy(b[0]).add(C).add(A),Nt(D.x,D.y,D.z)):Nt(et.x,et.y,0)}for(let ot=1;ot<=h;ot++)for(let et=0;et<Y;et++){const Q=d?G(M[et],Pt[et],Zt):M[et];_?(C.copy(P.normals[ot]).multiplyScalar(Q.x),A.copy(P.binormals[ot]).multiplyScalar(Q.y),D.copy(b[ot]).add(C).add(A),Nt(D.x,D.y,D.z)):Nt(Q.x,Q.y,u/h*ot)}for(let ot=g-1;ot>=0;ot--){const et=ot/g,Q=f*Math.cos(et*Math.PI/2),j=m*Math.sin(et*Math.PI/2)+x;for(let gt=0,lt=O.length;gt<lt;gt++){const xt=G(O[gt],tt[gt],j);Nt(xt.x,xt.y,u+Q)}for(let gt=0,lt=L.length;gt<lt;gt++){const xt=L[gt];vt=it[gt];for(let $t=0,Kt=xt.length;$t<Kt;$t++){const R=G(xt[$t],vt[$t],j);_?Nt(R.x,R.y+b[h-1].y,b[h-1].x+Q):Nt(R.x,R.y,u+Q)}}}J(),st();function J(){const ot=s.length/3;if(d){let et=0,Q=Y*et;for(let j=0;j<jt;j++){const gt=Vt[j];It(gt[2]+Q,gt[1]+Q,gt[0]+Q)}et=h+g*2,Q=Y*et;for(let j=0;j<jt;j++){const gt=Vt[j];It(gt[0]+Q,gt[1]+Q,gt[2]+Q)}}else{for(let et=0;et<jt;et++){const Q=Vt[et];It(Q[2],Q[1],Q[0])}for(let et=0;et<jt;et++){const Q=Vt[et];It(Q[0]+Y*h,Q[1]+Y*h,Q[2]+Y*h)}}n.addGroup(ot,s.length/3-ot,0)}function st(){const ot=s.length/3;let et=0;bt(O,et),et+=O.length;for(let Q=0,j=L.length;Q<j;Q++){const gt=L[Q];bt(gt,et),et+=gt.length}n.addGroup(ot,s.length/3-ot,1)}function bt(ot,et){let Q=ot.length;for(;--Q>=0;){const j=Q;let gt=Q-1;gt<0&&(gt=ot.length-1);for(let lt=0,xt=h+g*2;lt<xt;lt++){const $t=Y*lt,Kt=Y*(lt+1),R=et+j+$t,y=et+gt+$t,H=et+gt+Kt,Z=et+j+Kt;ie(R,y,H,Z)}}}function Nt(ot,et,Q){c.push(ot),c.push(et),c.push(Q)}function It(ot,et,Q){xe(ot),xe(et),xe(Q);const j=s.length/3,gt=S.generateTopUV(n,s,j-3,j-2,j-1);U(gt[0]),U(gt[1]),U(gt[2])}function ie(ot,et,Q,j){xe(ot),xe(et),xe(j),xe(et),xe(Q),xe(j);const gt=s.length/3,lt=S.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);U(lt[0]),U(lt[1]),U(lt[3]),U(lt[1]),U(lt[2]),U(lt[3])}function xe(ot){s.push(c[ot*3+0]),s.push(c[ot*3+1]),s.push(c[ot*3+2])}function U(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _f(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ba[s.type]().fromJSON(s)),new lc(n,t.options)}}const xf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,c),new ct(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-u),new ct(d,1-m),new ct(x,1-p)]:[new ct(a,1-c),new ct(h,1-u),new ct(f,1-m),new ct(g,1-p)]}};function _f(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class tr extends rc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tr(t.radius,t.detail)}}class ms extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const S=p*d-o;for(let b=0;b<l;b++){const _=b*u-r;m.push(_,-S,0),x.push(0,0,1),g.push(b/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const b=S+l*p,_=S+l*(p+1),P=S+1+l*(p+1),A=S+1+l*p;f.push(b,_,A),f.push(_,P,A)}this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.widthSegments,t.heightSegments)}}class hc extends Ae{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new I,m=new ct;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){const g=x*(n+1);for(let p=0;p<n;p++){const S=p+g,b=S,_=S+n+1,P=S+n+2,A=S+1;a.push(b,_,A),a.push(_,P,A)}}this.setIndex(a),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class so extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const S=[],b=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+b*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+_,1-b),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const b=h[p][S+1],_=h[p][S],P=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&f.push(b,_,A),(p!==n-1||c<Math.PI)&&f.push(_,P,A)}this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gs extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const x=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,S=(s+1)*f+m;o.push(x,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zn extends Pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vf extends Zn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class yf extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mf extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class uc extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Sf extends uc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fo=new ve,nl=new I,il=new I;class wf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nl.setFromMatrixPosition(t.matrixWorld),e.position.copy(nl),il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(il),e.updateMatrixWorld(),Fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Eh extends hh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class bf extends wf{constructor(){super(new Eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Th extends uc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new bf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ef extends uc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tf extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function sl(i,t,e,n){const s=Af(n);switch(e){case $l:return i*t;case jl:return i*t/s.components*s.byteLength;case ja:return i*t/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case Qa:return i*t*2/s.components*s.byteLength;case Jl:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case tc:return i*t*4/s.components*s.byteLength;case Br:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:case da:return Math.max(i,16)*Math.max(t,8)/4;case la:case ua:return Math.max(i,8)*Math.max(t,8)/2;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pa:case Ia:case La:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Da:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case za:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Af(i){switch(i){case Cn:case ql:return{byteLength:1,components:1};case Bs:case Yl:case $s:return{byteLength:2,components:1};case $a:case Ja:return{byteLength:2,components:4};case Ti:case Ka:case Hn:return{byteLength:4,components:1};case Zl:case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ah(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rf(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
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
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ff=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
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
#endif`,Vf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Mp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Ap=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
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
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,fm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
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
}`,zm=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,qm=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,Km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$m=`#define PHONG
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
}`,Jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,jm=`#define STANDARD
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
}`,Qm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,t0=`#define TOON
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
}`,e0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,n0=`uniform float size;
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,r0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,o0=`uniform float rotation;
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
}`,a0=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Cf,alphahash_pars_fragment:Pf,alphamap_fragment:If,alphamap_pars_fragment:Lf,alphatest_fragment:Df,alphatest_pars_fragment:Uf,aomap_fragment:zf,aomap_pars_fragment:Nf,batching_pars_vertex:Ff,batching_vertex:Of,begin_vertex:Bf,beginnormal_vertex:kf,bsdfs:Gf,iridescence_fragment:Hf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Yf,color_fragment:Zf,color_pars_fragment:Kf,color_pars_vertex:$f,color_vertex:Jf,common:jf,cube_uv_reflection_fragment:Qf,defaultnormal_vertex:tp,displacementmap_pars_vertex:ep,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:rp,colorspace_pars_fragment:op,envmap_fragment:ap,envmap_common_pars_fragment:cp,envmap_pars_fragment:lp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Mp,envmap_vertex:up,fog_vertex:dp,fog_pars_vertex:fp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:xp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:vp,lights_pars_begin:yp,lights_toon_fragment:Sp,lights_toon_pars_fragment:wp,lights_phong_fragment:bp,lights_phong_pars_fragment:Ep,lights_physical_fragment:Tp,lights_physical_pars_fragment:Ap,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Up,map_fragment:zp,map_pars_fragment:Np,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:kp,morphinstance_vertex:Gp,morphcolor_vertex:Hp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Wp,morphtarget_vertex:Xp,normal_fragment_begin:qp,normal_fragment_maps:Yp,normal_pars_fragment:Zp,normal_pars_vertex:Kp,normal_vertex:$p,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:tm,iridescence_pars_fragment:em,opaque_fragment:nm,packing:im,premultiplied_alpha_fragment:sm,project_vertex:rm,dithering_fragment:om,dithering_pars_fragment:am,roughnessmap_fragment:cm,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:um,shadowmap_vertex:dm,shadowmask_pars_fragment:fm,skinbase_vertex:pm,skinning_pars_vertex:mm,skinning_vertex:gm,skinnormal_vertex:xm,specularmap_fragment:_m,specularmap_pars_fragment:vm,tonemapping_fragment:ym,tonemapping_pars_fragment:Mm,transmission_fragment:Sm,transmission_pars_fragment:wm,uv_pars_fragment:bm,uv_pars_vertex:Em,uv_vertex:Tm,worldpos_vertex:Am,background_vert:Rm,background_frag:Cm,backgroundCube_vert:Pm,backgroundCube_frag:Im,cube_vert:Lm,cube_frag:Dm,depth_vert:Um,depth_frag:zm,distanceRGBA_vert:Nm,distanceRGBA_frag:Fm,equirect_vert:Om,equirect_frag:Bm,linedashed_vert:km,linedashed_frag:Gm,meshbasic_vert:Hm,meshbasic_frag:Vm,meshlambert_vert:Wm,meshlambert_frag:Xm,meshmatcap_vert:qm,meshmatcap_frag:Ym,meshnormal_vert:Zm,meshnormal_frag:Km,meshphong_vert:$m,meshphong_frag:Jm,meshphysical_vert:jm,meshphysical_frag:Qm,meshtoon_vert:t0,meshtoon_frag:e0,points_vert:n0,points_frag:i0,shadow_vert:s0,shadow_frag:r0,sprite_vert:o0,sprite_frag:a0},yt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},wn={basic:{uniforms:Xe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Xe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Xe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Xe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Xe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Xe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Xe([yt.points,yt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Xe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Xe([yt.common,yt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Xe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Xe([yt.sprite,yt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Xe([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Xe([yt.lights,yt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};wn.physical={uniforms:Xe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Lr={r:0,b:0,g:0},pi=new Pn,c0=new ve;function l0(i,t,e,n,s,r,o){const a=new Yt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function x(b){let _=!1;const P=m(b);P===null?p(a,c):P&&P.isColor&&(p(P,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,_){const P=m(_);P&&(P.isCubeTexture||P.mapping===no)?(h===void 0&&(h=new Bt(new Yn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:hs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(_.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c0.makeRotationFromEuler(pi)),h.material.toneMapped=le.getTransfer(P.colorSpace)!==me,(u!==P||d!==P.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Bt(new ms(2,2),new In({name:"BackgroundMaterial",uniforms:hs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=le.getTransfer(P.colorSpace)!==me,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=P,d=P.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,_){b.getRGB(Lr,lh(i)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,_,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:x,addToRenderList:g,dispose:S}}function h0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,L,N,X,F){let O=!1;const G=u(X,N,L);r!==G&&(r=G,l(r.object)),O=f(M,X,N,F),O&&m(M,X,N,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(M,L,N,X),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,N){const X=N.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let O=F[L.id];O===void 0&&(O={},F[L.id]=O);let G=O[X];return G===void 0&&(G=d(c()),O[X]=G),G}function d(M){const L=[],N=[],X=[];for(let F=0;F<e;F++)L[F]=0,N[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:X,object:M,attributes:{},index:null}}function f(M,L,N,X){const F=r.attributes,O=L.attributes;let G=0;const Y=N.getAttributes();for(const V in Y)if(Y[V].location>=0){const it=F[V];let vt=O[V];if(vt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),it===void 0||it.attribute!==vt||vt&&it.data!==vt.data)return!0;G++}return r.attributesNum!==G||r.index!==X}function m(M,L,N,X){const F={},O=L.attributes;let G=0;const Y=N.getAttributes();for(const V in Y)if(Y[V].location>=0){let it=O[V];it===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(it=M.instanceColor));const vt={};vt.attribute=it,it&&it.data&&(vt.data=it.data),F[V]=vt,G++}r.attributes=F,r.attributesNum=G,r.index=X}function x(){const M=r.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){const N=r.newAttributes,X=r.enabledAttributes,F=r.attributeDivisors;N[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),F[M]!==L&&(i.vertexAttribDivisor(M,L),F[M]=L)}function S(){const M=r.newAttributes,L=r.enabledAttributes;for(let N=0,X=L.length;N<X;N++)L[N]!==M[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function b(M,L,N,X,F,O,G){G===!0?i.vertexAttribIPointer(M,L,N,F,O):i.vertexAttribPointer(M,L,N,X,F,O)}function _(M,L,N,X){x();const F=X.attributes,O=N.getAttributes(),G=L.defaultAttributeValues;for(const Y in O){const V=O[Y];if(V.location>=0){let tt=F[Y];if(tt===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const it=tt.normalized,vt=tt.itemSize,Pt=t.get(tt);if(Pt===void 0)continue;const Vt=Pt.buffer,jt=Pt.type,Zt=Pt.bytesPerElement,J=jt===i.INT||jt===i.UNSIGNED_INT||tt.gpuType===Ka;if(tt.isInterleavedBufferAttribute){const st=tt.data,bt=st.stride,Nt=tt.offset;if(st.isInstancedInterleavedBuffer){for(let It=0;It<V.locationSize;It++)p(V.location+It,st.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let It=0;It<V.locationSize;It++)g(V.location+It);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let It=0;It<V.locationSize;It++)b(V.location+It,vt/V.locationSize,jt,it,bt*Zt,(Nt+vt/V.locationSize*It)*Zt,J)}else{if(tt.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)p(V.location+st,tt.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let st=0;st<V.locationSize;st++)g(V.location+st);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let st=0;st<V.locationSize;st++)b(V.location+st,vt/V.locationSize,jt,it,vt*Zt,vt/V.locationSize*st*Zt,J)}}else if(G!==void 0){const it=G[Y];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(V.location,it);break;case 3:i.vertexAttrib3fv(V.location,it);break;case 4:i.vertexAttrib4fv(V.location,it);break;default:i.vertexAttrib1fv(V.location,it)}}}}S()}function P(){D();for(const M in n){const L=n[M];for(const N in L){const X=L[N];for(const F in X)h(X[F].object),delete X[F];delete L[N]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const N in L){const X=L[N];for(const F in X)h(X[F].object),delete X[F];delete L[N]}delete n[M.id]}function C(M){for(const L in n){const N=n[L];if(N[M.id]===void 0)continue;const X=N[M.id];for(const F in X)h(X[F].object),delete X[F];delete N[M.id]}}function D(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function u0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function d0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Cn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hn&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:P,maxSamples:A}}function f0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new gi,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const S=r?0:n,b=S*4;let _=p.clippingState||null;c.value=_,_=h(m,d,b,f);for(let P=0;P!==b;++P)_[P]=e[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const p=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,_=f;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(S,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function p0(i){let t=new WeakMap;function e(o,a){return a===oa?o.mapping=as:a===aa&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===oa||a===aa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ld(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ts=4,rl=[.125,.215,.35,.446,.526,.582],vi=20,Oo=new Eh,ol=new Yt;let Bo=null,ko=0,Go=0,Ho=!1;const xi=(1+Math.sqrt(5))/2,Ji=1/xi,al=[new I(-xi,Ji,0),new I(xi,Ji,0),new I(-Ji,0,xi),new I(Ji,0,xi),new I(0,xi,-Ji),new I(0,xi,Ji),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],m0=new I;class cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=m0}=r;Bo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bo,ko,Go),this._renderer.xr.enabled=Ho,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:$s,format:pn,colorSpace:ls,depthBuffer:!1},s=ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(r)),this._blurMaterial=x0(r,t,e)}return s}_compileMaterial(t){const e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,n,s,r){const c=new an(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ol),u.toneMapping=ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new mn({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new Bt(new Yn,x);let p=!1;const S=t.background;S?S.isColor&&(x.color.copy(S),t.background=null,p=!0):(x.color.copy(ol),p=!0);for(let b=0;b<6;b++){const _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const P=this._cubeSize;Dr(s,_*P,b>2?P:0,P,P),u.setRenderTarget(s),p&&u.render(g,c),u.render(t,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===as||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Dr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=al[(s-r-1)%al.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Bt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):vi;g>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vi}`);const p=[];let S=0;for(let C=0;C<vi;++C){const D=C/x,w=Math.exp(-D*D/2);p.push(w),C===0?S+=w:C<g&&(S+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;const _=this._sizeLods[s],P=3*_*(s>b-ts?s-b+ts:0),A=4*(this._cubeSize-_);Dr(e,P,A,3*_,2*_),c.setRenderTarget(e),c.render(u,Oo)}}function g0(i){const t=[],e=[],n=[];let s=i;const r=i-ts+1+rl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ts?c=rl[o-i+ts-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,S=new Float32Array(x*m*f),b=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,D=A>2?0:-1,w=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];S.set(w,x*m*A),b.set(d,g*m*A);const M=[A,A,A,A,A,A];_.set(M,p*m*A)}const P=new Ae;P.setAttribute("position",new He(S,x)),P.setAttribute("uv",new He(b,g)),P.setAttribute("faceIndex",new He(_,p)),t.push(P),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ll(i,t,e){const n=new Ai(i,t,e);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function x0(i,t,e){const n=new Float32Array(vi),s=new I(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function hl(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ul(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===oa||c===aa,h=c===as||c===cs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new cl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new cl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function v0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function y0(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const S=f.array;x=f.version;for(let b=0,_=S.length;b<_;b+=3){const P=S[b+0],A=S[b+1],C=S[b+2];d.push(P,A,A,C,C,P)}}else if(m!==void 0){const S=m.array;x=m.version;for(let b=0,_=S.length/3-1;b<_;b+=3){const P=b+0,A=b+1,C=b+2;d.push(P,A,A,C,C,P)}}else return;const g=new(nh(d)?ch:ah)(d,1);g.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function M0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*x[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function S0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function w0(i,t,e){const n=new WeakMap,s=new Ce;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let P=a.attributes.position.count*_,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const C=new Float32Array(P*A*4*u),D=new ih(C,P,A,u);D.type=Hn,D.needsUpdate=!0;const w=_*4;for(let L=0;L<u;L++){const N=p[L],X=S[L],F=b[L],O=P*A*4*L;for(let G=0;G<N.count;G++){const Y=G*w;m===!0&&(s.fromBufferAttribute(N,G),C[O+Y+0]=s.x,C[O+Y+1]=s.y,C[O+Y+2]=s.z,C[O+Y+3]=0),x===!0&&(s.fromBufferAttribute(X,G),C[O+Y+4]=s.x,C[O+Y+5]=s.y,C[O+Y+6]=s.z,C[O+Y+7]=0),g===!0&&(s.fromBufferAttribute(F,G),C[O+Y+8]=s.x,C[O+Y+9]=s.y,C[O+Y+10]=s.z,C[O+Y+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new ct(P,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function b0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Rh=new Ye,dl=new ph(1,1),Ch=new ih,Ph=new md,Ih=new uh,fl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),xl=new Float32Array(4);function xs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=fl[s];if(r===void 0&&(r=new Float32Array(s),fl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ro(i,t){let e=pl[t];e===void 0&&(e=new Int32Array(t),pl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function E0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function C0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(ze(e,n))return;xl.set(n),i.uniformMatrix2fv(this.addr,!1,xl),Ne(e,n)}}function P0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(ze(e,n))return;gl.set(n),i.uniformMatrix3fv(this.addr,!1,gl),Ne(e,n)}}function I0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(ze(e,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),Ne(e,n)}}function L0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function N0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function k0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dl.compareFunction=eh,r=dl):r=Rh,e.setTexture2D(t||r,s)}function G0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ph,s)}function H0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ih,s)}function V0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ch,s)}function W0(i){switch(i){case 5126:return E0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return I0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return z0;case 5125:return N0;case 36294:return F0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return V0}}function X0(i,t){i.uniform1fv(this.addr,t)}function q0(i,t){const e=xs(t,this.size,2);i.uniform2fv(this.addr,e)}function Y0(i,t){const e=xs(t,this.size,3);i.uniform3fv(this.addr,e)}function Z0(i,t){const e=xs(t,this.size,4);i.uniform4fv(this.addr,e)}function K0(i,t){const e=xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $0(i,t){const e=xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function J0(i,t){const e=xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function j0(i,t){i.uniform1iv(this.addr,t)}function Q0(i,t){i.uniform2iv(this.addr,t)}function tg(i,t){i.uniform3iv(this.addr,t)}function eg(i,t){i.uniform4iv(this.addr,t)}function ng(i,t){i.uniform1uiv(this.addr,t)}function ig(i,t){i.uniform2uiv(this.addr,t)}function sg(i,t){i.uniform3uiv(this.addr,t)}function rg(i,t){i.uniform4uiv(this.addr,t)}function og(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rh,r[o])}function ag(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ph,r[o])}function cg(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ih,r[o])}function lg(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ch,r[o])}function hg(i){switch(i){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return Z0;case 35674:return K0;case 35675:return $0;case 35676:return J0;case 5124:case 35670:return j0;case 35667:case 35671:return Q0;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return lg}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=W0(e.type)}}class dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hg(e.type)}}class fg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function _l(i,t){i.seq.push(t),i.map[t.id]=t}function pg(i,t,e){const n=i.name,s=n.length;for(Vo.lastIndex=0;;){const r=Vo.exec(n),o=Vo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){_l(e,l===void 0?new ug(a,i,t):new dg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new fg(a),_l(e,u)),e=u}}}class Vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);pg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function vl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const mg=37297;let gg=0;function xg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const yl=new te;function _g(i){le._getMatrix(yl,le.workingColorSpace,i);const t=`mat3( ${yl.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case qr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ml(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+xg(i.getShaderSource(t),a)}else return r}function vg(i,t){const e=_g(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yg(i,t){let e;switch(t){case Ru:e="Linear";break;case Cu:e="Reinhard";break;case Pu:e="Cineon";break;case Wl:e="ACESFilmic";break;case Lu:e="AgX";break;case Du:e="Neutral";break;case Iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ur=new I;function Mg(){le.getLuminanceCoefficients(Ur);const i=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function wg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ps(i){return i!==""}function Sl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(i){return i.replace(Eg,Ag)}const Tg=new Map;function Ag(i,t){let e=ee[t];if(e===void 0){const n=Tg.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(i){return i.replace(Rg,Cg)}function Cg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function El(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case cs:t="ENVMAP_TYPE_CUBE";break;case no:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Dg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vl:t="ENVMAP_BLENDING_MULTIPLY";break;case Tu:t="ENVMAP_BLENDING_MIX";break;case Au:t="ENVMAP_BLENDING_ADD";break}return t}function Ug(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Pg(e),l=Ig(e),h=Lg(e),u=Dg(e),d=Ug(e),f=Sg(e),m=wg(r),x=s.createProgram();let g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ps).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(g=[El(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[El(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?ee.tonemapping_pars_fragment:"",e.toneMapping!==ri?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),Mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),o=Ha(o),o=Sl(o,e),o=wl(o,e),a=Ha(a),a=Sl(a,e),a=wl(a,e),o=bl(o),a=bl(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+g+o,_=S+p+a,P=vl(s,s.VERTEX_SHADER,b),A=vl(s,s.FRAGMENT_SHADER,_);s.attachShader(x,P),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(P)||"",F=s.getShaderInfoLog(A)||"",O=N.trim(),G=X.trim(),Y=F.trim();let V=!0,tt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,A);else{const it=Ml(s,P,"vertex"),vt=Ml(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+it+`
`+vt)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(G===""||Y==="")&&(tt=!1);tt&&(L.diagnostics={runnable:V,programLog:O,vertexShader:{log:G,prefix:g},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(P),s.deleteShader(A),D=new Vr(s,x),w=bg(s,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,mg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let Ng=0;class Fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Og(t),e.set(t,n)),n}}class Og{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}}function Bg(i,t,e,n,s,r,o){const a=new rh,c=new Fg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,M,L,N,X){const F=N.fog,O=X.geometry,G=w.isMeshStandardMaterial?N.environment:null,Y=(w.isMeshStandardMaterial?e:t).get(w.envMap||G),V=Y&&Y.mapping===no?Y.image.height:null,tt=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const it=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,vt=it!==void 0?it.length:0;let Pt=0;O.morphAttributes.position!==void 0&&(Pt=1),O.morphAttributes.normal!==void 0&&(Pt=2),O.morphAttributes.color!==void 0&&(Pt=3);let Vt,jt,Zt,J;if(tt){const ue=wn[tt];Vt=ue.vertexShader,jt=ue.fragmentShader}else Vt=w.vertexShader,jt=w.fragmentShader,c.update(w),Zt=c.getVertexShaderID(w),J=c.getFragmentShaderID(w);const st=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Nt=X.isInstancedMesh===!0,It=X.isBatchedMesh===!0,ie=!!w.map,xe=!!w.matcap,U=!!Y,ot=!!w.aoMap,et=!!w.lightMap,Q=!!w.bumpMap,j=!!w.normalMap,gt=!!w.displacementMap,lt=!!w.emissiveMap,xt=!!w.metalnessMap,$t=!!w.roughnessMap,Kt=w.anisotropy>0,R=w.clearcoat>0,y=w.dispersion>0,H=w.iridescence>0,Z=w.sheen>0,rt=w.transmission>0,$=Kt&&!!w.anisotropyMap,zt=R&&!!w.clearcoatMap,pt=R&&!!w.clearcoatNormalMap,Lt=R&&!!w.clearcoatRoughnessMap,Dt=H&&!!w.iridescenceMap,ht=H&&!!w.iridescenceThicknessMap,wt=Z&&!!w.sheenColorMap,Xt=Z&&!!w.sheenRoughnessMap,Ft=!!w.specularMap,Mt=!!w.specularColorMap,Qt=!!w.specularIntensityMap,z=rt&&!!w.transmissionMap,ft=rt&&!!w.thicknessMap,_t=!!w.gradientMap,Rt=!!w.alphaMap,ut=w.alphaTest>0,nt=!!w.alphaHash,Ut=!!w.extensions;let Jt=ri;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Jt=i.toneMapping);const _e={shaderID:tt,shaderType:w.type,shaderName:w.name,vertexShader:Vt,fragmentShader:jt,defines:w.defines,customVertexShaderID:Zt,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:It,batchingColor:It&&X._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&X.instanceColor!==null,instancingMorph:Nt&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ls,alphaToCoverage:!!w.alphaToCoverage,map:ie,matcap:xe,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:V,aoMap:ot,lightMap:et,bumpMap:Q,normalMap:j,displacementMap:d&&gt,emissiveMap:lt,normalMapObjectSpace:j&&w.normalMapType===Fu,normalMapTangentSpace:j&&w.normalMapType===th,metalnessMap:xt,roughnessMap:$t,anisotropy:Kt,anisotropyMap:$,clearcoat:R,clearcoatMap:zt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Lt,dispersion:y,iridescence:H,iridescenceMap:Dt,iridescenceThicknessMap:ht,sheen:Z,sheenColorMap:wt,sheenRoughnessMap:Xt,specularMap:Ft,specularColorMap:Mt,specularIntensityMap:Qt,transmission:rt,transmissionMap:z,thicknessMap:ft,gradientMap:_t,opaque:w.transparent===!1&&w.blending===si&&w.alphaToCoverage===!1,alphaMap:Rt,alphaTest:ut,alphaHash:nt,combine:w.combine,mapUv:ie&&x(w.map.channel),aoMapUv:ot&&x(w.aoMap.channel),lightMapUv:et&&x(w.lightMap.channel),bumpMapUv:Q&&x(w.bumpMap.channel),normalMapUv:j&&x(w.normalMap.channel),displacementMapUv:gt&&x(w.displacementMap.channel),emissiveMapUv:lt&&x(w.emissiveMap.channel),metalnessMapUv:xt&&x(w.metalnessMap.channel),roughnessMapUv:$t&&x(w.roughnessMap.channel),anisotropyMapUv:$&&x(w.anisotropyMap.channel),clearcoatMapUv:zt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:pt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&x(w.sheenRoughnessMap.channel),specularMapUv:Ft&&x(w.specularMap.channel),specularColorMapUv:Mt&&x(w.specularColorMap.channel),specularIntensityMapUv:Qt&&x(w.specularIntensityMap.channel),transmissionMapUv:z&&x(w.transmissionMap.channel),thicknessMapUv:ft&&x(w.thicknessMap.channel),alphaMapUv:Rt&&x(w.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(j||Kt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!O.attributes.uv&&(ie||Rt),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:bt,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ie&&w.map.isVideoTexture===!0&&le.getTransfer(w.map.colorSpace)===me,decodeVideoTextureEmissive:lt&&w.emissiveMap.isVideoTexture===!0&&le.getTransfer(w.emissiveMap.colorSpace)===me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Le,flipSided:w.side===qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ut&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&w.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(S(M,w),b(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function S(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const M=m[w.type];let L;if(M){const N=wn[M];L=Rd.clone(N.uniforms)}else L=w.uniforms;return L}function P(w,M){let L;for(let N=0,X=h.length;N<X;N++){const F=h[N];if(F.cacheKey===M){L=F,++L.usedTimes;break}}return L===void 0&&(L=new zg(i,M,w,r),h.push(L)),L}function A(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:D}}function kg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Al(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){const p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,x,g){const p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Gg),n.length>1&&n.sort(d||Tl),s.length>1&&s.sort(d||Tl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Hg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Al,i.set(n,[o])):s>=r.length?(o=new Al,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Yt};break;case"SpotLight":e={position:new I,direction:new I,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Wg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xg=0;function qg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yg(i){const t=new Vg,e=Wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new ve,o=new ve;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,S=0,b=0,_=0,P=0,A=0,C=0;l.sort(qg);for(let w=0,M=l.length;w<M;w++){const L=l[w],N=L.color,X=L.intensity,F=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*X,u+=N.g*X,d+=N.b*X;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],X);C++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,V=e.get(L);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=G,f++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(N).multiplyScalar(X),G.distance=F,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;const Y=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,Y.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=Y.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=O,_++}x++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(N).multiplyScalar(X),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=G,g++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const Y=L.shadow,V=e.get(L);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=L.shadow.matrix,b++}n.point[m]=G,m++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(X),G.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==_||D.numSpotMaps!==P||D.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.directionalLength=f,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=_,D.numSpotMaps=P,D.numLightProbes=C,n.version=Xg++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const b=l[p];if(b.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(b.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Rl(i){const t=new Yg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Zg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Rl(i),t.set(s,[a])):r>=o.length?(a=new Rl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jg(i,t,e){let n=new sc;const s=new ct,r=new ct,o=new Ce,a=new yf({depthPacking:Nu}),c=new Mf,l={},h=e.maxTextureSize,u={[Rn]:qe,[qe]:Rn,[Le]:Le},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Kg,fragmentShader:$g}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ae;m.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Bt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let p=this.type;this.render=function(A,C,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ii),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const X=p!==Gn&&this.type===Gn,F=p===Gn&&this.type!==Gn;for(let O=0,G=A.length;O<G;O++){const Y=A[O],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const tt=V.getFrameExtents();if(s.multiply(tt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,V.mapSize.y=r.y)),V.map===null||X===!0||F===!0){const vt=this.type!==Gn?{minFilter:gn,magFilter:gn}:{};V.map!==null&&V.map.dispose(),V.map=new Ai(s.x,s.y,vt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const it=V.getViewportCount();for(let vt=0;vt<it;vt++){const Pt=V.getViewport(vt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),N.viewport(o),V.updateMatrices(Y,vt),n=V.getFrustum(),_(C,D,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Gn&&S(V,D),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,M,L)};function S(A,C){const D=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ai(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,D,f,x,null)}function b(A,C,D,w){let M=null;const L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=M.uuid,X=C.uuid;let F=l[N];F===void 0&&(F={},l[N]=F);let O=F[X];O===void 0&&(O=M.clone(),F[X]=O,C.addEventListener("dispose",P)),M=O}if(M.visible=C.visible,M.wireframe=C.wireframe,w===Gn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=D}return M}function _(A,C,D,w,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Gn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const X=t.update(A),F=A.material;if(Array.isArray(F)){const O=X.groups;for(let G=0,Y=O.length;G<Y;G++){const V=O[G],tt=F[V.materialIndex];if(tt&&tt.visible){const it=b(A,tt,w,M);A.onBeforeShadow(i,A,C,D,X,it,V),i.renderBufferDirect(D,null,X,it,A,V),A.onAfterShadow(i,A,C,D,X,it,V)}}}else if(F.visible){const O=b(A,F,w,M);A.onBeforeShadow(i,A,C,D,X,O,null),i.renderBufferDirect(D,null,X,O,A,null),A.onAfterShadow(i,A,C,D,X,O,null)}}const N=A.children;for(let X=0,F=N.length;X<F;X++)_(N[X],C,D,w,M)}function P(A){A.target.removeEventListener("dispose",P);for(const D in l){const w=l[D],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const jg={[Qo]:ta,[ea]:sa,[na]:ra,[os]:ia,[ta]:Qo,[sa]:ea,[ra]:na,[ia]:os};function Qg(i,t){function e(){let z=!1;const ft=new Ce;let _t=null;const Rt=new Ce(0,0,0,0);return{setMask:function(ut){_t!==ut&&!z&&(i.colorMask(ut,ut,ut,ut),_t=ut)},setLocked:function(ut){z=ut},setClear:function(ut,nt,Ut,Jt,_e){_e===!0&&(ut*=Jt,nt*=Jt,Ut*=Jt),ft.set(ut,nt,Ut,Jt),Rt.equals(ft)===!1&&(i.clearColor(ut,nt,Ut,Jt),Rt.copy(ft))},reset:function(){z=!1,_t=null,Rt.set(-1,0,0,0)}}}function n(){let z=!1,ft=!1,_t=null,Rt=null,ut=null;return{setReversed:function(nt){if(ft!==nt){const Ut=t.get("EXT_clip_control");nt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),ft=nt;const Jt=ut;ut=null,this.setClear(Jt)}},getReversed:function(){return ft},setTest:function(nt){nt?st(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(nt){_t!==nt&&!z&&(i.depthMask(nt),_t=nt)},setFunc:function(nt){if(ft&&(nt=jg[nt]),Rt!==nt){switch(nt){case Qo:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=nt}},setLocked:function(nt){z=nt},setClear:function(nt){ut!==nt&&(ft&&(nt=1-nt),i.clearDepth(nt),ut=nt)},reset:function(){z=!1,_t=null,Rt=null,ut=null,ft=!1}}}function s(){let z=!1,ft=null,_t=null,Rt=null,ut=null,nt=null,Ut=null,Jt=null,_e=null;return{setTest:function(ue){z||(ue?st(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ue){ft!==ue&&!z&&(i.stencilMask(ue),ft=ue)},setFunc:function(ue,Un,yn){(_t!==ue||Rt!==Un||ut!==yn)&&(i.stencilFunc(ue,Un,yn),_t=ue,Rt=Un,ut=yn)},setOp:function(ue,Un,yn){(nt!==ue||Ut!==Un||Jt!==yn)&&(i.stencilOp(ue,Un,yn),nt=ue,Ut=Un,Jt=yn)},setLocked:function(ue){z=ue},setClear:function(ue){_e!==ue&&(i.clearStencil(ue),_e=ue)},reset:function(){z=!1,ft=null,_t=null,Rt=null,ut=null,nt=null,Ut=null,Jt=null,_e=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,S=null,b=null,_=null,P=null,A=null,C=new Yt(0,0,0),D=0,w=!1,M=null,L=null,N=null,X=null,F=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Y>=2);let tt=null,it={};const vt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Vt=new Ce().fromArray(vt),jt=new Ce().fromArray(Pt);function Zt(z,ft,_t,Rt){const ut=new Uint8Array(4),nt=i.createTexture();i.bindTexture(z,nt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<_t;Ut++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ft+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return nt}const J={};J[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(os),Q(!1),j(bc),st(i.CULL_FACE),ot(ii);function st(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function bt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Nt(z,ft){return u[z]!==ft?(i.bindFramebuffer(z,ft),u[z]=ft,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function It(z,ft){let _t=f,Rt=!1;if(z){_t=d.get(ft),_t===void 0&&(_t=[],d.set(ft,_t));const ut=z.textures;if(_t.length!==ut.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Ut=ut.length;nt<Ut;nt++)_t[nt]=i.COLOR_ATTACHMENT0+nt;_t.length=ut.length,Rt=!0}}else _t[0]!==i.BACK&&(_t[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(_t)}function ie(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const xe={[_i]:i.FUNC_ADD,[lu]:i.FUNC_SUBTRACT,[hu]:i.FUNC_REVERSE_SUBTRACT};xe[uu]=i.MIN,xe[du]=i.MAX;const U={[fu]:i.ZERO,[pu]:i.ONE,[mu]:i.SRC_COLOR,[Jo]:i.SRC_ALPHA,[Mu]:i.SRC_ALPHA_SATURATE,[vu]:i.DST_COLOR,[xu]:i.DST_ALPHA,[gu]:i.ONE_MINUS_SRC_COLOR,[jo]:i.ONE_MINUS_SRC_ALPHA,[yu]:i.ONE_MINUS_DST_COLOR,[_u]:i.ONE_MINUS_DST_ALPHA,[Su]:i.CONSTANT_COLOR,[wu]:i.ONE_MINUS_CONSTANT_COLOR,[bu]:i.CONSTANT_ALPHA,[Eu]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(z,ft,_t,Rt,ut,nt,Ut,Jt,_e,ue){if(z===ii){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(st(i.BLEND),x=!0),z!==cu){if(z!==g||ue!==w){if((p!==_i||_!==_i)&&(i.blendEquation(i.FUNC_ADD),p=_i,_=_i),ue)switch(z){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ec:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,b=null,P=null,A=null,C.set(0,0,0),D=0,g=z,w=ue}return}ut=ut||ft,nt=nt||_t,Ut=Ut||Rt,(ft!==p||ut!==_)&&(i.blendEquationSeparate(xe[ft],xe[ut]),p=ft,_=ut),(_t!==S||Rt!==b||nt!==P||Ut!==A)&&(i.blendFuncSeparate(U[_t],U[Rt],U[nt],U[Ut]),S=_t,b=Rt,P=nt,A=Ut),(Jt.equals(C)===!1||_e!==D)&&(i.blendColor(Jt.r,Jt.g,Jt.b,_e),C.copy(Jt),D=_e),g=z,w=!1}function et(z,ft){z.side===Le?bt(i.CULL_FACE):st(i.CULL_FACE);let _t=z.side===qe;ft&&(_t=!_t),Q(_t),z.blending===si&&z.transparent===!1?ot(ii):ot(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Rt=z.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),lt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(z){M!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),M=z)}function j(z){z!==ou?(st(i.CULL_FACE),z!==L&&(z===bc?i.cullFace(i.BACK):z===au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),L=z}function gt(z){z!==N&&(G&&i.lineWidth(z),N=z)}function lt(z,ft,_t){z?(st(i.POLYGON_OFFSET_FILL),(X!==ft||F!==_t)&&(i.polygonOffset(ft,_t),X=ft,F=_t)):bt(i.POLYGON_OFFSET_FILL)}function xt(z){z?st(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function $t(z){z===void 0&&(z=i.TEXTURE0+O-1),tt!==z&&(i.activeTexture(z),tt=z)}function Kt(z,ft,_t){_t===void 0&&(tt===null?_t=i.TEXTURE0+O-1:_t=tt);let Rt=it[_t];Rt===void 0&&(Rt={type:void 0,texture:void 0},it[_t]=Rt),(Rt.type!==z||Rt.texture!==ft)&&(tt!==_t&&(i.activeTexture(_t),tt=_t),i.bindTexture(z,ft||J[z]),Rt.type=z,Rt.texture=ft)}function R(){const z=it[tt];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(z){Vt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Vt.copy(z))}function Xt(z){jt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),jt.copy(z))}function Ft(z,ft){let _t=l.get(ft);_t===void 0&&(_t=new WeakMap,l.set(ft,_t));let Rt=_t.get(z);Rt===void 0&&(Rt=i.getUniformBlockIndex(ft,z.name),_t.set(z,Rt))}function Mt(z,ft){const Rt=l.get(ft).get(z);c.get(ft)!==Rt&&(i.uniformBlockBinding(ft,Rt,z.__bindingPointIndex),c.set(ft,Rt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,it={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,S=null,b=null,_=null,P=null,A=null,C=new Yt(0,0,0),D=0,w=!1,M=null,L=null,N=null,X=null,F=null,Vt.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:bt,bindFramebuffer:Nt,drawBuffers:It,useProgram:ie,setBlending:ot,setMaterial:et,setFlipSided:Q,setCullFace:j,setLineWidth:gt,setPolygonOffset:lt,setScissorTest:xt,activeTexture:$t,bindTexture:Kt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:H,texImage2D:Dt,texImage3D:ht,updateUBOMapping:Ft,uniformBlockBinding:Mt,texStorage2D:pt,texStorage3D:Lt,texSubImage2D:Z,texSubImage3D:rt,compressedTexSubImage2D:$,compressedTexSubImage3D:zt,scissor:wt,viewport:Xt,reset:Qt}}function t1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,y){return f?new OffscreenCanvas(R,y):Zr("canvas")}function x(R,y,H){let Z=1;const rt=Kt(R);if((rt.width>H||rt.height>H)&&(Z=H/Math.max(rt.width,rt.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Z*rt.width),zt=Math.floor(Z*rt.height);u===void 0&&(u=m($,zt));const pt=y?m($,zt):u;return pt.width=$,pt.height=zt,pt.getContext("2d").drawImage(R,0,0,$,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+$+"x"+zt+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,y,H,Z,rt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=y;if(y===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),y===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),y===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),y===i.RGBA){const zt=rt?qr:le.getTransfer(Z);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=zt===me?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(R,y){let H;return R?y===null||y===Ti||y===ks?H=i.DEPTH24_STENCIL8:y===Hn?H=i.DEPTH32F_STENCIL8:y===Bs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ti||y===ks?H=i.DEPTH_COMPONENT24:y===Hn?H=i.DEPTH_COMPONENT32F:y===Bs&&(H=i.DEPTH_COMPONENT16),H}function P(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==bn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),D(y),y.isVideoTexture&&h.delete(y)}function C(R){const y=R.target;y.removeEventListener("dispose",C),M(y)}function D(R){const y=n.get(R);if(y.__webglInit===void 0)return;const H=R.source,Z=d.get(H);if(Z){const rt=Z[y.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&w(R),Object.keys(Z).length===0&&d.delete(H)}n.remove(R)}function w(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const H=R.source,Z=d.get(H);delete Z[y.__cacheKey],o.memory.textures--}function M(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let rt=0;rt<y.__webglFramebuffer[Z].length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[Z][rt]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=R.textures;for(let Z=0,rt=H.length;Z<rt;Z++){const $=n.get(H[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(H[Z])}n.remove(R)}let L=0;function N(){L=0}function X(){const R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function F(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function O(R,y){const H=n.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,R,y);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function G(R,y){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){J(H,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function Y(R,y){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){J(H,R,y);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function V(R,y){const H=n.get(R);if(R.version>0&&H.__version!==R.version){st(H,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}const tt={[Xr]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},it={[gn]:i.NEAREST,[Uu]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},vt={[Ou]:i.NEVER,[Wu]:i.ALWAYS,[Bu]:i.LESS,[eh]:i.LEQUAL,[ku]:i.EQUAL,[Vu]:i.GEQUAL,[Gu]:i.GREATER,[Hu]:i.NOTEQUAL};function Pt(R,y){if(y.type===Hn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===bn||y.magFilter===lo||y.magFilter===or||y.magFilter===Si||y.minFilter===bn||y.minFilter===lo||y.minFilter===or||y.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,tt[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,tt[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,tt[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,it[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,it[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,vt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==or&&y.minFilter!==Si||y.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Vt(R,y){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const Z=y.source;let rt=d.get(Z);rt===void 0&&(rt={},d.set(Z,rt));const $=F(y);if($!==R.__cacheKey){rt[$]===void 0&&(rt[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),rt[$].usedTimes++;const zt=rt[R.__cacheKey];zt!==void 0&&(rt[R.__cacheKey].usedTimes--,zt.usedTimes===0&&w(y)),R.__cacheKey=$,R.__webglTexture=rt[$].texture}return H}function jt(R,y,H){return Math.floor(Math.floor(R/H)/y)}function Zt(R,y,H,Z){const $=R.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,H,Z,y.data);else{$.sort((ht,wt)=>ht.start-wt.start);let zt=0;for(let ht=1;ht<$.length;ht++){const wt=$[zt],Xt=$[ht],Ft=wt.start+wt.count,Mt=jt(Xt.start,y.width,4),Qt=jt(wt.start,y.width,4);Xt.start<=Ft+1&&Mt===Qt&&jt(Xt.start+Xt.count-1,y.width,4)===Mt?wt.count=Math.max(wt.count,Xt.start+Xt.count-wt.start):(++zt,$[zt]=Xt)}$.length=zt+1;const pt=i.getParameter(i.UNPACK_ROW_LENGTH),Lt=i.getParameter(i.UNPACK_SKIP_PIXELS),Dt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ht=0,wt=$.length;ht<wt;ht++){const Xt=$[ht],Ft=Math.floor(Xt.start/4),Mt=Math.ceil(Xt.count/4),Qt=Ft%y.width,z=Math.floor(Ft/y.width),ft=Mt,_t=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Qt,z,ft,_t,H,Z,y.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function J(R,y,H){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const rt=Vt(R,y),$=y.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+H);const zt=n.get($);if($.version!==zt.__version||rt===!0){e.activeTexture(i.TEXTURE0+H);const pt=le.getPrimaries(le.workingColorSpace),Lt=y.colorSpace===ni?null:le.getPrimaries(y.colorSpace),Dt=y.colorSpace===ni||pt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ht=x(y.image,!1,s.maxTextureSize);ht=$t(y,ht);const wt=r.convert(y.format,y.colorSpace),Xt=r.convert(y.type);let Ft=b(y.internalFormat,wt,Xt,y.colorSpace,y.isVideoTexture);Pt(Z,y);let Mt;const Qt=y.mipmaps,z=y.isVideoTexture!==!0,ft=zt.__version===void 0||rt===!0,_t=$.dataReady,Rt=P(y,ht);if(y.isDepthTexture)Ft=_(y.format===Hs,y.type),ft&&(z?e.texStorage2D(i.TEXTURE_2D,1,Ft,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,wt,Xt,null));else if(y.isDataTexture)if(Qt.length>0){z&&ft&&e.texStorage2D(i.TEXTURE_2D,Rt,Ft,Qt[0].width,Qt[0].height);for(let ut=0,nt=Qt.length;ut<nt;ut++)Mt=Qt[ut],z?_t&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,wt,Xt,Mt.data):e.texImage2D(i.TEXTURE_2D,ut,Ft,Mt.width,Mt.height,0,wt,Xt,Mt.data);y.generateMipmaps=!1}else z?(ft&&e.texStorage2D(i.TEXTURE_2D,Rt,Ft,ht.width,ht.height),_t&&Zt(y,ht,wt,Xt)):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,wt,Xt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){z&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Ft,Qt[0].width,Qt[0].height,ht.depth);for(let ut=0,nt=Qt.length;ut<nt;ut++)if(Mt=Qt[ut],y.format!==pn)if(wt!==null)if(z){if(_t)if(y.layerUpdates.size>0){const Ut=sl(Mt.width,Mt.height,y.format,y.type);for(const Jt of y.layerUpdates){const _e=Mt.data.subarray(Jt*Ut/Mt.data.BYTES_PER_ELEMENT,(Jt+1)*Ut/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,Jt,Mt.width,Mt.height,1,wt,_e)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Mt.width,Mt.height,ht.depth,wt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Ft,Mt.width,Mt.height,ht.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?_t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Mt.width,Mt.height,ht.depth,wt,Xt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Ft,Mt.width,Mt.height,ht.depth,0,wt,Xt,Mt.data)}else{z&&ft&&e.texStorage2D(i.TEXTURE_2D,Rt,Ft,Qt[0].width,Qt[0].height);for(let ut=0,nt=Qt.length;ut<nt;ut++)Mt=Qt[ut],y.format!==pn?wt!==null?z?_t&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,wt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Ft,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?_t&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,wt,Xt,Mt.data):e.texImage2D(i.TEXTURE_2D,ut,Ft,Mt.width,Mt.height,0,wt,Xt,Mt.data)}else if(y.isDataArrayTexture)if(z){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Ft,ht.width,ht.height,ht.depth),_t)if(y.layerUpdates.size>0){const ut=sl(ht.width,ht.height,y.format,y.type);for(const nt of y.layerUpdates){const Ut=ht.data.subarray(nt*ut/ht.data.BYTES_PER_ELEMENT,(nt+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ht.width,ht.height,1,wt,Xt,Ut)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,wt,Xt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ht.width,ht.height,ht.depth,0,wt,Xt,ht.data);else if(y.isData3DTexture)z?(ft&&e.texStorage3D(i.TEXTURE_3D,Rt,Ft,ht.width,ht.height,ht.depth),_t&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,wt,Xt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ht.width,ht.height,ht.depth,0,wt,Xt,ht.data);else if(y.isFramebufferTexture){if(ft)if(z)e.texStorage2D(i.TEXTURE_2D,Rt,Ft,ht.width,ht.height);else{let ut=ht.width,nt=ht.height;for(let Ut=0;Ut<Rt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Ft,ut,nt,0,wt,Xt,null),ut>>=1,nt>>=1}}else if(Qt.length>0){if(z&&ft){const ut=Kt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,Ft,ut.width,ut.height)}for(let ut=0,nt=Qt.length;ut<nt;ut++)Mt=Qt[ut],z?_t&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,wt,Xt,Mt):e.texImage2D(i.TEXTURE_2D,ut,Ft,wt,Xt,Mt);y.generateMipmaps=!1}else if(z){if(ft){const ut=Kt(ht);e.texStorage2D(i.TEXTURE_2D,Rt,Ft,ut.width,ut.height)}_t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Xt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Ft,wt,Xt,ht);g(y)&&p(Z),zt.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function st(R,y,H){if(y.image.length!==6)return;const Z=Vt(R,y),rt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const $=n.get(rt);if(rt.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const zt=le.getPrimaries(le.workingColorSpace),pt=y.colorSpace===ni?null:le.getPrimaries(y.colorSpace),Lt=y.colorSpace===ni||zt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Dt=y.isCompressedTexture||y.image[0].isCompressedTexture,ht=y.image[0]&&y.image[0].isDataTexture,wt=[];for(let nt=0;nt<6;nt++)!Dt&&!ht?wt[nt]=x(y.image[nt],!0,s.maxCubemapSize):wt[nt]=ht?y.image[nt].image:y.image[nt],wt[nt]=$t(y,wt[nt]);const Xt=wt[0],Ft=r.convert(y.format,y.colorSpace),Mt=r.convert(y.type),Qt=b(y.internalFormat,Ft,Mt,y.colorSpace),z=y.isVideoTexture!==!0,ft=$.__version===void 0||Z===!0,_t=rt.dataReady;let Rt=P(y,Xt);Pt(i.TEXTURE_CUBE_MAP,y);let ut;if(Dt){z&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Qt,Xt.width,Xt.height);for(let nt=0;nt<6;nt++){ut=wt[nt].mipmaps;for(let Ut=0;Ut<ut.length;Ut++){const Jt=ut[Ut];y.format!==pn?Ft!==null?z?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,0,0,Jt.width,Jt.height,Ft,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,Qt,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,0,0,Jt.width,Jt.height,Ft,Mt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,Qt,Jt.width,Jt.height,0,Ft,Mt,Jt.data)}}}else{if(ut=y.mipmaps,z&&ft){ut.length>0&&Rt++;const nt=Kt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Qt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ht){z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt[nt].width,wt[nt].height,Ft,Mt,wt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Qt,wt[nt].width,wt[nt].height,0,Ft,Mt,wt[nt].data);for(let Ut=0;Ut<ut.length;Ut++){const _e=ut[Ut].image[nt].image;z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,0,0,_e.width,_e.height,Ft,Mt,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,Qt,_e.width,_e.height,0,Ft,Mt,_e.data)}}else{z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ft,Mt,wt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Qt,Ft,Mt,wt[nt]);for(let Ut=0;Ut<ut.length;Ut++){const Jt=ut[Ut];z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,0,0,Ft,Mt,Jt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,Qt,Ft,Mt,Jt.image[nt])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),$.__version=rt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function bt(R,y,H,Z,rt,$){const zt=r.convert(H.format,H.colorSpace),pt=r.convert(H.type),Lt=b(H.internalFormat,zt,pt,H.colorSpace),Dt=n.get(y),ht=n.get(H);if(ht.__renderTarget=y,!Dt.__hasExternalTextures){const wt=Math.max(1,y.width>>$),Xt=Math.max(1,y.height>>$);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,$,Lt,wt,Xt,y.depth,0,zt,pt,null):e.texImage2D(rt,$,Lt,wt,Xt,0,zt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),lt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,rt,ht.__webglTexture,0,gt(y)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,rt,ht.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(R,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const Z=y.depthTexture,rt=Z&&Z.isDepthTexture?Z.type:null,$=_(y.stencilBuffer,rt),zt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=gt(y);lt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,$,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,R)}else{const Z=y.textures;for(let rt=0;rt<Z.length;rt++){const $=Z[rt],zt=r.convert($.format,$.colorSpace),pt=r.convert($.type),Lt=b($.internalFormat,zt,pt,$.colorSpace),Dt=gt(y);H&&lt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Lt,y.width,y.height):lt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,Lt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),O(y.depthTexture,0);const rt=Z.__webglTexture,$=gt(y);if(y.depthTexture.format===Gs)lt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(y.depthTexture.format===Hs)lt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function ie(R){const y=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const rt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",rt)};Z.addEventListener("dispose",rt),y.__depthDisposeCallback=rt}y.__boundDepthTexture=Z}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Z=R.texture.mipmaps;Z&&Z.length>0?It(y.__webglFramebuffer[0],R):It(y.__webglFramebuffer,R)}else if(H){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),Nt(y.__webglDepthbuffer[Z],R,!1);else{const rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,$)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Nt(y.__webglDepthbuffer,R,!1);else{const rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(R,y,H){const Z=n.get(R);y!==void 0&&bt(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ie(R)}function U(R){const y=R.texture,H=n.get(R),Z=n.get(y);R.addEventListener("dispose",C);const rt=R.textures,$=R.isWebGLCubeRenderTarget===!0,zt=rt.length>1;if(zt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),$){H.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[pt]=[];for(let Lt=0;Lt<y.mipmaps.length;Lt++)H.__webglFramebuffer[pt][Lt]=i.createFramebuffer()}else H.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)H.__webglFramebuffer[pt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(zt)for(let pt=0,Lt=rt.length;pt<Lt;pt++){const Dt=n.get(rt[pt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&lt(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pt=0;pt<rt.length;pt++){const Lt=rt[pt];H.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[pt]);const Dt=r.convert(Lt.format,Lt.colorSpace),ht=r.convert(Lt.type),wt=b(Lt.internalFormat,Dt,ht,Lt.colorSpace,R.isXRRenderTarget===!0),Xt=gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,wt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,H.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,y);for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Lt=0;Lt<y.mipmaps.length;Lt++)bt(H.__webglFramebuffer[pt][Lt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt);else bt(H.__webglFramebuffer[pt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let pt=0,Lt=rt.length;pt<Lt;pt++){const Dt=rt[pt],ht=n.get(Dt);let wt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(wt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,ht.__webglTexture),Pt(wt,Dt),bt(H.__webglFramebuffer,R,Dt,i.COLOR_ATTACHMENT0+pt,wt,0),g(Dt)&&p(wt)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Z.__webglTexture),Pt(pt,y),y.mipmaps&&y.mipmaps.length>0)for(let Lt=0;Lt<y.mipmaps.length;Lt++)bt(H.__webglFramebuffer[Lt],R,y,i.COLOR_ATTACHMENT0,pt,Lt);else bt(H.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,pt,0);g(y)&&p(pt),e.unbindTexture()}R.depthBuffer&&ie(R)}function ot(R){const y=R.textures;for(let H=0,Z=y.length;H<Z;H++){const rt=y[H];if(g(rt)){const $=S(R),zt=n.get(rt).__webglTexture;e.bindTexture($,zt),p($),e.unbindTexture()}}}const et=[],Q=[];function j(R){if(R.samples>0){if(lt(R)===!1){const y=R.textures,H=R.width,Z=R.height;let rt=i.COLOR_BUFFER_BIT;const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(R),pt=y.length>1;if(pt)for(let Dt=0;Dt<y.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Lt=R.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Dt=0;Dt<y.length;Dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Dt]);const ht=n.get(y[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,rt,i.NEAREST),c===!0&&(et.length=0,Q.length=0,et.push(i.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(et.push($),Q.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Dt=0;Dt<y.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Dt]);const ht=n.get(y[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function gt(R){return Math.min(s.maxSamples,R.samples)}function lt(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function xt(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function $t(R,y){const H=R.colorSpace,Z=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==ls&&H!==ni&&(le.getTransfer(H)===me?(Z!==pn||rt!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function Kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=xe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=lt}function e1(i,t){function e(n,s=ni){let r;const o=le.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ql)return i.BYTE;if(n===Yl)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===$s)return i.HALF_FLOAT;if(n===$l)return i.ALPHA;if(n===Jl)return i.RGB;if(n===pn)return i.RGBA;if(n===Gs)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===jl)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===Qa)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===Br||n===kr||n===Gr||n===Hr)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ha||n===ua||n===da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===la)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fa||n===pa)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===xa||n===_a||n===va||n===ya||n===Ma||n===Sa||n===wa||n===ba||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===Ia||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Da||n===Ua||n===za||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const n1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i1=`
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

}`;class s1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new mh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:n1,fragmentShader:i1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r1 extends ps{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new s1,p={},S=e.getContextAttributes();let b=null,_=null;const P=[],A=[],C=new ct;let D=null;const w=new an;w.viewport=new Ce;const M=new an;M.viewport=new Ce;const L=[w,M],N=new Tf;let X=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=P[J];return st===void 0&&(st=new Io,P[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=P[J];return st===void 0&&(st=new Io,P[J]=st),st.getGripSpace()},this.getHand=function(J){let st=P[J];return st===void 0&&(st=new Io,P[J]=st),st.getHandSpace()};function O(J){const st=A.indexOf(J.inputSource);if(st===-1)return;const bt=P[st];bt!==void 0&&(bt.update(J.inputSource,J.frame,l||o),bt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let J=0;J<P.length;J++){const st=A[J];st!==null&&(A[J]=null,P[J].disconnect(st))}X=null,F=null,g.reset();for(const J in p)delete p[J];t.setRenderTarget(b),f=null,d=null,u=null,s=null,_=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Nt=null,It=null;S.depth&&(It=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=S.stencil?Hs:Gs,Nt=S.stencil?ks:Ti);const ie={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ie),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Ai(d.textureWidth,d.textureHeight,{format:pn,type:Cn,depthTexture:new ph(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const bt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ai(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(J){for(let st=0;st<J.removed.length;st++){const bt=J.removed[st],Nt=A.indexOf(bt);Nt>=0&&(A[Nt]=null,P[Nt].disconnect(bt))}for(let st=0;st<J.added.length;st++){const bt=J.added[st];let Nt=A.indexOf(bt);if(Nt===-1){for(let ie=0;ie<P.length;ie++)if(ie>=A.length){A.push(bt),Nt=ie;break}else if(A[ie]===null){A[ie]=bt,Nt=ie;break}if(Nt===-1)break}const It=P[Nt];It&&It.connect(bt)}}const V=new I,tt=new I;function it(J,st,bt){V.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(bt.matrixWorld);const Nt=V.distanceTo(tt),It=st.projectionMatrix.elements,ie=bt.projectionMatrix.elements,xe=It[14]/(It[10]-1),U=It[14]/(It[10]+1),ot=(It[9]+1)/It[5],et=(It[9]-1)/It[5],Q=(It[8]-1)/It[0],j=(ie[8]+1)/ie[0],gt=xe*Q,lt=xe*j,xt=Nt/(-Q+j),$t=xt*-Q;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($t),J.translateZ(xt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),It[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Kt=xe+xt,R=U+xt,y=gt-$t,H=lt+(Nt-$t),Z=ot*U/R*Kt,rt=et*U/R*Kt;J.projectionMatrix.makePerspective(y,H,Z,rt,Kt,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function vt(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let st=J.near,bt=J.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(bt=g.depthFar)),N.near=M.near=w.near=st,N.far=M.far=w.far=bt,(X!==N.near||F!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),X=N.near,F=N.far),N.layers.mask=J.layers.mask|6,w.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const Nt=J.parent,It=N.cameras;vt(N,Nt);for(let ie=0;ie<It.length;ie++)vt(It[ie],Nt);It.length===2?it(N,w,M):N.projectionMatrix.copy(w.projectionMatrix),Pt(J,N,Nt)};function Pt(J,st,bt){bt===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(bt.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(J){return p[J]};let Vt=null;function jt(J,st){if(h=st.getViewerPose(l||o),m=st,h!==null){const bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Nt=!1;bt.length!==N.cameras.length&&(N.cameras.length=0,Nt=!0);for(let U=0;U<bt.length;U++){const ot=bt[U];let et=null;if(f!==null)et=f.getViewport(ot);else{const j=u.getViewSubImage(d,ot);et=j.viewport,U===0&&(t.setRenderTargetTextures(_,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(_))}let Q=L[U];Q===void 0&&(Q=new an,Q.layers.enable(U),Q.viewport=new Ce,L[U]=Q),Q.matrix.fromArray(ot.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ot.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(et.x,et.y,et.width,et.height),U===0&&(N.matrix.copy(Q.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Nt===!0&&N.cameras.push(Q)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const U=u.getDepthInformation(bt[0]);U&&U.isValid&&U.texture&&g.init(U,s.renderState)}if(It&&It.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let U=0;U<bt.length;U++){const ot=bt[U].camera;if(ot){let et=p[ot];et||(et=new mh,p[ot]=et);const Q=u.getCameraImage(ot);et.sourceTexture=Q}}}}for(let bt=0;bt<P.length;bt++){const Nt=A[bt],It=P[bt];Nt!==null&&It!==void 0&&It.update(Nt,st,l||o)}Vt&&Vt(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}const Zt=new Ah;Zt.setAnimationLoop(jt),this.setAnimationLoop=function(J){Vt=J},this.dispose=function(){}}}const mi=new Pn,o1=new ve;function a1(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,lh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),b=S.envMap,_=S.envMapRotation;b&&(g.envMap.value=b,mi.copy(_),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),g.envMapRotation.value.setFromMatrix4(o1.makeRotationFromEuler(mi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c1(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const _=b.program;n.uniformBlockBinding(S,_)}function l(S,b){let _=s[S.id];_===void 0&&(m(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",g));const P=b.program;n.updateUBOMapping(S,P);const A=t.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){const b=u();S.__bindingPointIndex=b;const _=i.createBuffer(),P=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const b=s[S.id],_=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,C=_.length;A<C;A++){const D=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,M=D.length;w<M;w++){const L=D[w];if(f(L,A,w,P)===!0){const N=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let O=0;O<X.length;O++){const G=X[O],Y=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+F,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,b,_,P){const A=S.value,C=b+"_"+_;if(P[C]===void 0)return typeof A=="number"||typeof A=="boolean"?P[C]=A:P[C]=A.clone(),!0;{const D=P[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return P[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function m(S){const b=S.uniforms;let _=0;const P=16;for(let C=0,D=b.length;C<D;C++){const w=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,L=w.length;M<L;M++){const N=w[M],X=Array.isArray(N.value)?N.value:[N.value];for(let F=0,O=X.length;F<O;F++){const G=X[F],Y=x(G),V=_%P,tt=V%Y.boundary,it=V+tt;_+=tt,it!==0&&P-it<Y.storage&&(_+=P-it),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=Y.storage}}}const A=_%P;return A>0&&(_+=P-A),S.__size=_,S.__cache={},this}function x(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function g(S){const b=S.target;b.removeEventListener("dispose",g);const _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class l1{constructor(t={}){const{canvas:e=cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let P=!1;this._outputColorSpace=De;let A=0,C=0,D=null,w=-1,M=null;const L=new Ce,N=new Ce;let X=null;const F=new Yt(0);let O=0,G=e.width,Y=e.height,V=1,tt=null,it=null;const vt=new Ce(0,0,G,Y),Pt=new Ce(0,0,G,Y);let Vt=!1;const jt=new sc;let Zt=!1,J=!1;const st=new ve,bt=new I,Nt=new Ce,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function xe(){return D===null?V:1}let U=n;function ot(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){const B="webgl2";if(U=ot(B,T),U===null)throw ot(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let et,Q,j,gt,lt,xt,$t,Kt,R,y,H,Z,rt,$,zt,pt,Lt,Dt,ht,wt,Xt,Ft,Mt,Qt;function z(){et=new v0(U),et.init(),Ft=new e1(U,et),Q=new d0(U,et,t,Ft),j=new Qg(U,et),Q.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),gt=new S0(U),lt=new kg,xt=new t1(U,et,j,lt,Q,Ft,gt),$t=new p0(_),Kt=new _0(_),R=new Rf(U),Mt=new h0(U,R),y=new y0(U,R,gt,Mt),H=new b0(U,y,R,gt),ht=new w0(U,Q,xt),pt=new f0(lt),Z=new Bg(_,$t,Kt,et,Q,Mt,pt),rt=new a1(_,lt),$=new Hg,zt=new Zg(et),Dt=new l0(_,$t,Kt,j,H,f,c),Lt=new Jg(_,H,Q),Qt=new c1(U,gt,Q,j),wt=new u0(U,et,gt),Xt=new M0(U,et,gt),gt.programs=Z.programs,_.capabilities=Q,_.extensions=et,_.properties=lt,_.renderLists=$,_.shadowMap=Lt,_.state=j,_.info=gt}z();const ft=new r1(_,U);this.xr=ft,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(G,Y,!1))},this.getSize=function(T){return T.set(G,Y)},this.setSize=function(T,B,W=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,Y=B,e.width=Math.floor(T*V),e.height=Math.floor(B*V),W===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(G*V,Y*V).floor()},this.setDrawingBufferSize=function(T,B,W){G=T,Y=B,V=W,e.width=Math.floor(T*W),e.height=Math.floor(B*W),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,B,W,q){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,B,W,q),j.viewport(L.copy(vt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Pt)},this.setScissor=function(T,B,W,q){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,B,W,q),j.scissor(N.copy(Pt).multiplyScalar(V).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(T){j.setScissorTest(Vt=T)},this.setOpaqueSort=function(T){tt=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,W=!0){let q=0;if(T){let k=!1;if(D!==null){const dt=D.texture.format;k=dt===tc||dt===Qa||dt===ja}if(k){const dt=D.texture.type,St=dt===Cn||dt===Ti||dt===Bs||dt===ks||dt===$a||dt===Ja,Ct=Dt.getClearColor(),Et=Dt.getClearAlpha(),Wt=Ct.r,qt=Ct.g,Gt=Ct.b;St?(m[0]=Wt,m[1]=qt,m[2]=Gt,m[3]=Et,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=Wt,x[1]=qt,x[2]=Gt,x[3]=Et,U.clearBufferiv(U.COLOR,0,x))}else q|=U.COLOR_BUFFER_BIT}B&&(q|=U.DEPTH_BUFFER_BIT),W&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Dt.dispose(),$.dispose(),zt.dispose(),lt.dispose(),$t.dispose(),Kt.dispose(),H.dispose(),Mt.dispose(),Qt.dispose(),Z.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",yn),ft.removeEventListener("sessionend",_c),ci.stop()};function _t(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=gt.autoReset,B=Lt.enabled,W=Lt.autoUpdate,q=Lt.needsUpdate,k=Lt.type;z(),gt.autoReset=T,Lt.enabled=B,Lt.autoUpdate=W,Lt.needsUpdate=q,Lt.type=k}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function nt(T){const B=T.target;B.removeEventListener("dispose",nt),Ut(B)}function Ut(T){Jt(T),lt.remove(T)}function Jt(T){const B=lt.get(T).programs;B!==void 0&&(B.forEach(function(W){Z.releaseProgram(W)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,W,q,k,dt){B===null&&(B=It);const St=k.isMesh&&k.matrixWorld.determinant()<0,Ct=tu(T,B,W,q,k);j.setMaterial(q,St);let Et=W.index,Wt=1;if(q.wireframe===!0){if(Et=y.getWireframeAttribute(W),Et===void 0)return;Wt=2}const qt=W.drawRange,Gt=W.attributes.position;let se=qt.start*Wt,pe=(qt.start+qt.count)*Wt;dt!==null&&(se=Math.max(se,dt.start*Wt),pe=Math.min(pe,(dt.start+dt.count)*Wt)),Et!==null?(se=Math.max(se,0),pe=Math.min(pe,Et.count)):Gt!=null&&(se=Math.max(se,0),pe=Math.min(pe,Gt.count));const Re=pe-se;if(Re<0||Re===1/0)return;Mt.setup(k,q,Ct,W,Et);let ye,ge=wt;if(Et!==null&&(ye=R.get(Et),ge=Xt,ge.setIndex(ye)),k.isMesh)q.wireframe===!0?(j.setLineWidth(q.wireframeLinewidth*xe()),ge.setMode(U.LINES)):ge.setMode(U.TRIANGLES);else if(k.isLine){let Ht=q.linewidth;Ht===void 0&&(Ht=1),j.setLineWidth(Ht*xe()),k.isLineSegments?ge.setMode(U.LINES):k.isLineLoop?ge.setMode(U.LINE_LOOP):ge.setMode(U.LINE_STRIP)}else k.isPoints?ge.setMode(U.POINTS):k.isSprite&&ge.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ge.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ht=k._multiDrawStarts,we=k._multiDrawCounts,ce=k._multiDrawCount,$e=Et?R.get(Et).bytesPerElement:1,Di=lt.get(q).currentProgram.getUniforms();for(let Je=0;Je<ce;Je++)Di.setValue(U,"_gl_DrawID",Je),ge.render(Ht[Je]/$e,we[Je])}else if(k.isInstancedMesh)ge.renderInstances(se,Re,k.count);else if(W.isInstancedBufferGeometry){const Ht=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,we=Math.min(W.instanceCount,Ht);ge.renderInstances(se,Re,we)}else ge.render(se,Re)};function _e(T,B,W){T.transparent===!0&&T.side===Le&&T.forceSinglePass===!1?(T.side=qe,T.needsUpdate=!0,rr(T,B,W),T.side=Rn,T.needsUpdate=!0,rr(T,B,W),T.side=Le):rr(T,B,W)}this.compile=function(T,B,W=null){W===null&&(W=T),p=zt.get(W),p.init(B),b.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==W&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const q=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const dt=k.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const Ct=dt[St];_e(Ct,W,k),q.add(Ct)}else _e(dt,W,k),q.add(dt)}),p=b.pop(),q},this.compileAsync=function(T,B,W=null){const q=this.compile(T,B,W);return new Promise(k=>{function dt(){if(q.forEach(function(St){lt.get(St).currentProgram.isReady()&&q.delete(St)}),q.size===0){k(T);return}setTimeout(dt,10)}et.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let ue=null;function Un(T){ue&&ue(T)}function yn(){ci.stop()}function _c(){ci.start()}const ci=new Ah;ci.setAnimationLoop(Un),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(T){ue=T,ft.setAnimationLoop(T),T===null?ci.stop():ci.start()},ft.addEventListener("sessionstart",yn),ft.addEventListener("sessionend",_c),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(B),B=ft.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,D),p=zt.get(T,b.length),p.init(B),b.push(p),st.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),jt.setFromProjectionMatrix(st,En,B.reversedDepth),J=this.localClippingEnabled,Zt=pt.init(this.clippingPlanes,J),g=$.get(T,S.length),g.init(),S.push(g),ft.enabled===!0&&ft.isPresenting===!0){const dt=_.xr.getDepthSensingMesh();dt!==null&&ao(dt,B,-1/0,_.sortObjects)}ao(T,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(tt,it),ie=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ie&&Dt.addToRenderList(g,T),this.info.render.frame++,Zt===!0&&pt.beginShadows();const W=p.state.shadowsArray;Lt.render(W,T,B),Zt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,k=g.transmissive;if(p.setupLights(),B.isArrayCamera){const dt=B.cameras;if(k.length>0)for(let St=0,Ct=dt.length;St<Ct;St++){const Et=dt[St];yc(q,k,T,Et)}ie&&Dt.render(T);for(let St=0,Ct=dt.length;St<Ct;St++){const Et=dt[St];vc(g,T,Et,Et.viewport)}}else k.length>0&&yc(q,k,T,B),ie&&Dt.render(T),vc(g,T,B);D!==null&&C===0&&(xt.updateMultisampleRenderTarget(D),xt.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(_,T,B),Mt.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],Zt===!0&&pt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function ao(T,B,W,q){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||jt.intersectsSprite(T)){q&&Nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(st);const St=H.update(T),Ct=T.material;Ct.visible&&g.push(T,St,Ct,W,Nt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||jt.intersectsObject(T))){const St=H.update(T),Ct=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Nt.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Nt.copy(St.boundingSphere.center)),Nt.applyMatrix4(T.matrixWorld).applyMatrix4(st)),Array.isArray(Ct)){const Et=St.groups;for(let Wt=0,qt=Et.length;Wt<qt;Wt++){const Gt=Et[Wt],se=Ct[Gt.materialIndex];se&&se.visible&&g.push(T,St,se,W,Nt.z,Gt)}}else Ct.visible&&g.push(T,St,Ct,W,Nt.z,null)}}const dt=T.children;for(let St=0,Ct=dt.length;St<Ct;St++)ao(dt[St],B,W,q)}function vc(T,B,W,q){const k=T.opaque,dt=T.transmissive,St=T.transparent;p.setupLightsView(W),Zt===!0&&pt.setGlobalState(_.clippingPlanes,W),q&&j.viewport(L.copy(q)),k.length>0&&sr(k,B,W),dt.length>0&&sr(dt,B,W),St.length>0&&sr(St,B,W),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function yc(T,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ai(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?$s:Cn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const dt=p.state.transmissionRenderTarget[q.id],St=q.viewport||L;dt.setSize(St.z*_.transmissionResolutionScale,St.w*_.transmissionResolutionScale);const Ct=_.getRenderTarget(),Et=_.getActiveCubeFace(),Wt=_.getActiveMipmapLevel();_.setRenderTarget(dt),_.getClearColor(F),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),ie&&Dt.render(W);const qt=_.toneMapping;_.toneMapping=ri;const Gt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Zt===!0&&pt.setGlobalState(_.clippingPlanes,q),sr(T,W,q),xt.updateMultisampleRenderTarget(dt),xt.updateRenderTargetMipmap(dt),et.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let pe=0,Re=B.length;pe<Re;pe++){const ye=B[pe],ge=ye.object,Ht=ye.geometry,we=ye.material,ce=ye.group;if(we.side===Le&&ge.layers.test(q.layers)){const $e=we.side;we.side=qe,we.needsUpdate=!0,Mc(ge,W,q,Ht,we,ce),we.side=$e,we.needsUpdate=!0,se=!0}}se===!0&&(xt.updateMultisampleRenderTarget(dt),xt.updateRenderTargetMipmap(dt))}_.setRenderTarget(Ct,Et,Wt),_.setClearColor(F,O),Gt!==void 0&&(q.viewport=Gt),_.toneMapping=qt}function sr(T,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,dt=T.length;k<dt;k++){const St=T[k],Ct=St.object,Et=St.geometry,Wt=St.group;let qt=St.material;qt.allowOverride===!0&&q!==null&&(qt=q),Ct.layers.test(W.layers)&&Mc(Ct,B,W,Et,qt,Wt)}}function Mc(T,B,W,q,k,dt){T.onBeforeRender(_,B,W,q,k,dt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(_,B,W,q,T,dt),k.transparent===!0&&k.side===Le&&k.forceSinglePass===!1?(k.side=qe,k.needsUpdate=!0,_.renderBufferDirect(W,B,q,k,T,dt),k.side=Rn,k.needsUpdate=!0,_.renderBufferDirect(W,B,q,k,T,dt),k.side=Le):_.renderBufferDirect(W,B,q,k,T,dt),T.onAfterRender(_,B,W,q,k,dt)}function rr(T,B,W){B.isScene!==!0&&(B=It);const q=lt.get(T),k=p.state.lights,dt=p.state.shadowsArray,St=k.state.version,Ct=Z.getParameters(T,k.state,dt,B,W),Et=Z.getProgramCacheKey(Ct);let Wt=q.programs;q.environment=T.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(T.isMeshStandardMaterial?Kt:$t).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",nt),Wt=new Map,q.programs=Wt);let qt=Wt.get(Et);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===St)return wc(T,Ct),qt}else Ct.uniforms=Z.getUniforms(T),T.onBeforeCompile(Ct,_),qt=Z.acquireProgram(Ct,Et),Wt.set(Et,qt),q.uniforms=Ct.uniforms;const Gt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=pt.uniform),wc(T,Ct),q.needsLights=nu(T),q.lightsStateVersion=St,q.needsLights&&(Gt.ambientLightColor.value=k.state.ambient,Gt.lightProbe.value=k.state.probe,Gt.directionalLights.value=k.state.directional,Gt.directionalLightShadows.value=k.state.directionalShadow,Gt.spotLights.value=k.state.spot,Gt.spotLightShadows.value=k.state.spotShadow,Gt.rectAreaLights.value=k.state.rectArea,Gt.ltc_1.value=k.state.rectAreaLTC1,Gt.ltc_2.value=k.state.rectAreaLTC2,Gt.pointLights.value=k.state.point,Gt.pointLightShadows.value=k.state.pointShadow,Gt.hemisphereLights.value=k.state.hemi,Gt.directionalShadowMap.value=k.state.directionalShadowMap,Gt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Gt.spotShadowMap.value=k.state.spotShadowMap,Gt.spotLightMatrix.value=k.state.spotLightMatrix,Gt.spotLightMap.value=k.state.spotLightMap,Gt.pointShadowMap.value=k.state.pointShadowMap,Gt.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=qt,q.uniformsList=null,qt}function Sc(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Vr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function wc(T,B){const W=lt.get(T);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function tu(T,B,W,q,k){B.isScene!==!0&&(B=It),xt.resetTextureUnits();const dt=B.fog,St=q.isMeshStandardMaterial?B.environment:null,Ct=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ls,Et=(q.isMeshStandardMaterial?Kt:$t).get(q.envMap||St),Wt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Gt=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,pe=!!W.morphAttributes.color;let Re=ri;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Re=_.toneMapping);const ye=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ge=ye!==void 0?ye.length:0,Ht=lt.get(q),we=p.state.lights;if(Zt===!0&&(J===!0||T!==M)){const Ve=T===M&&q.id===w;pt.setState(q,T,Ve)}let ce=!1;q.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==we.state.version||Ht.outputColorSpace!==Ct||k.isBatchedMesh&&Ht.batching===!1||!k.isBatchedMesh&&Ht.batching===!0||k.isBatchedMesh&&Ht.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ht.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ht.instancing===!1||!k.isInstancedMesh&&Ht.instancing===!0||k.isSkinnedMesh&&Ht.skinning===!1||!k.isSkinnedMesh&&Ht.skinning===!0||k.isInstancedMesh&&Ht.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ht.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ht.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ht.instancingMorph===!1&&k.morphTexture!==null||Ht.envMap!==Et||q.fog===!0&&Ht.fog!==dt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==pt.numPlanes||Ht.numIntersection!==pt.numIntersection)||Ht.vertexAlphas!==Wt||Ht.vertexTangents!==qt||Ht.morphTargets!==Gt||Ht.morphNormals!==se||Ht.morphColors!==pe||Ht.toneMapping!==Re||Ht.morphTargetsCount!==ge)&&(ce=!0):(ce=!0,Ht.__version=q.version);let $e=Ht.currentProgram;ce===!0&&($e=rr(q,B,k));let Di=!1,Je=!1,_s=!1;const be=$e.getUniforms(),nn=Ht.uniforms;if(j.useProgram($e.program)&&(Di=!0,Je=!0,_s=!0),q.id!==w&&(w=q.id,Je=!0),Di||M!==T){j.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),be.setValue(U,"projectionMatrix",T.projectionMatrix),be.setValue(U,"viewMatrix",T.matrixWorldInverse);const Ze=be.map.cameraPosition;Ze!==void 0&&Ze.setValue(U,bt.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&be.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&be.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Je=!0,_s=!0)}if(k.isSkinnedMesh){be.setOptional(U,k,"bindMatrix"),be.setOptional(U,k,"bindMatrixInverse");const Ve=k.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),be.setValue(U,"boneTexture",Ve.boneTexture,xt))}k.isBatchedMesh&&(be.setOptional(U,k,"batchingTexture"),be.setValue(U,"batchingTexture",k._matricesTexture,xt),be.setOptional(U,k,"batchingIdTexture"),be.setValue(U,"batchingIdTexture",k._indirectTexture,xt),be.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&be.setValue(U,"batchingColorTexture",k._colorsTexture,xt));const sn=W.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&ht.update(k,W,$e),(Je||Ht.receiveShadow!==k.receiveShadow)&&(Ht.receiveShadow=k.receiveShadow,be.setValue(U,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(nn.envMap.value=Et,nn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(nn.envMapIntensity.value=B.environmentIntensity),Je&&(be.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ht.needsLights&&eu(nn,_s),dt&&q.fog===!0&&rt.refreshFogUniforms(nn,dt),rt.refreshMaterialUniforms(nn,q,V,Y,p.state.transmissionRenderTarget[T.id]),Vr.upload(U,Sc(Ht),nn,xt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Vr.upload(U,Sc(Ht),nn,xt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&be.setValue(U,"center",k.center),be.setValue(U,"modelViewMatrix",k.modelViewMatrix),be.setValue(U,"normalMatrix",k.normalMatrix),be.setValue(U,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ve=q.uniformsGroups;for(let Ze=0,co=Ve.length;Ze<co;Ze++){const li=Ve[Ze];Qt.update(li,$e),Qt.bind(li,$e)}}return $e}function eu(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function nu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,B,W){const q=lt.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),lt.get(T.texture).__webglTexture=B,lt.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const W=lt.get(T);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const iu=U.createFramebuffer();this.setRenderTarget=function(T,B=0,W=0){D=T,A=B,C=W;let q=!0,k=null,dt=!1,St=!1;if(T){const Et=lt.get(T);if(Et.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Et.__webglFramebuffer===void 0)xt.setupRenderTarget(T);else if(Et.__hasExternalTextures)xt.rebindTextures(T,lt.get(T.texture).__webglTexture,lt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Gt=T.depthTexture;if(Et.__boundDepthTexture!==Gt){if(Gt!==null&&lt.has(Gt)&&(T.width!==Gt.image.width||T.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(T)}}const Wt=T.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(St=!0);const qt=lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qt[B])?k=qt[B][W]:k=qt[B],dt=!0):T.samples>0&&xt.useMultisampledRTT(T)===!1?k=lt.get(T).__webglMultisampledFramebuffer:Array.isArray(qt)?k=qt[W]:k=qt,L.copy(T.viewport),N.copy(T.scissor),X=T.scissorTest}else L.copy(vt).multiplyScalar(V).floor(),N.copy(Pt).multiplyScalar(V).floor(),X=Vt;if(W!==0&&(k=iu),j.bindFramebuffer(U.FRAMEBUFFER,k)&&q&&j.drawBuffers(T,k),j.viewport(L),j.scissor(N),j.setScissorTest(X),dt){const Et=lt.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,W)}else if(St){const Et=B;for(let Wt=0;Wt<T.textures.length;Wt++){const qt=lt.get(T.textures[Wt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Wt,qt.__webglTexture,W,Et)}}else if(T!==null&&W!==0){const Et=lt.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Et.__webglTexture,W)}w=-1},this.readRenderTargetPixels=function(T,B,W,q,k,dt,St,Ct=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){j.bindFramebuffer(U.FRAMEBUFFER,Et);try{const Wt=T.textures[Ct],qt=Wt.format,Gt=Wt.type;if(!Q.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-q&&W>=0&&W<=T.height-k&&(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ct),U.readPixels(B,W,q,k,Ft.convert(qt),Ft.convert(Gt),dt))}finally{const Wt=D!==null?lt.get(D).__webglFramebuffer:null;j.bindFramebuffer(U.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,B,W,q,k,dt,St,Ct=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(B>=0&&B<=T.width-q&&W>=0&&W<=T.height-k){j.bindFramebuffer(U.FRAMEBUFFER,Et);const Wt=T.textures[Ct],qt=Wt.format,Gt=Wt.type;if(!Q.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ct),U.readPixels(B,W,q,k,Ft.convert(qt),Ft.convert(Gt),0);const pe=D!==null?lt.get(D).__webglFramebuffer:null;j.bindFramebuffer(U.FRAMEBUFFER,pe);const Re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ld(U,Re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.deleteBuffer(se),U.deleteSync(Re),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,W=0){const q=Math.pow(2,-W),k=Math.floor(T.image.width*q),dt=Math.floor(T.image.height*q),St=B!==null?B.x:0,Ct=B!==null?B.y:0;xt.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,St,Ct,k,dt),j.unbindTexture()};const su=U.createFramebuffer(),ru=U.createFramebuffer();this.copyTextureToTexture=function(T,B,W=null,q=null,k=0,dt=null){dt===null&&(k!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=k,k=0):dt=0);let St,Ct,Et,Wt,qt,Gt,se,pe,Re;const ye=T.isCompressedTexture?T.mipmaps[dt]:T.image;if(W!==null)St=W.max.x-W.min.x,Ct=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Wt=W.min.x,qt=W.min.y,Gt=W.isBox3?W.min.z:0;else{const sn=Math.pow(2,-k);St=Math.floor(ye.width*sn),Ct=Math.floor(ye.height*sn),T.isDataArrayTexture?Et=ye.depth:T.isData3DTexture?Et=Math.floor(ye.depth*sn):Et=1,Wt=0,qt=0,Gt=0}q!==null?(se=q.x,pe=q.y,Re=q.z):(se=0,pe=0,Re=0);const ge=Ft.convert(B.format),Ht=Ft.convert(B.type);let we;B.isData3DTexture?(xt.setTexture3D(B,0),we=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(xt.setTexture2DArray(B,0),we=U.TEXTURE_2D_ARRAY):(xt.setTexture2D(B,0),we=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ce=U.getParameter(U.UNPACK_ROW_LENGTH),$e=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Di=U.getParameter(U.UNPACK_SKIP_PIXELS),Je=U.getParameter(U.UNPACK_SKIP_ROWS),_s=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ye.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ye.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Gt);const be=T.isDataArrayTexture||T.isData3DTexture,nn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const sn=lt.get(T),Ve=lt.get(B),Ze=lt.get(sn.__renderTarget),co=lt.get(Ve.__renderTarget);j.bindFramebuffer(U.READ_FRAMEBUFFER,Ze.__webglFramebuffer),j.bindFramebuffer(U.DRAW_FRAMEBUFFER,co.__webglFramebuffer);for(let li=0;li<Et;li++)be&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,lt.get(T).__webglTexture,k,Gt+li),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,lt.get(B).__webglTexture,dt,Re+li)),U.blitFramebuffer(Wt,qt,St,Ct,se,pe,St,Ct,U.DEPTH_BUFFER_BIT,U.NEAREST);j.bindFramebuffer(U.READ_FRAMEBUFFER,null),j.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||lt.has(T)){const sn=lt.get(T),Ve=lt.get(B);j.bindFramebuffer(U.READ_FRAMEBUFFER,su),j.bindFramebuffer(U.DRAW_FRAMEBUFFER,ru);for(let Ze=0;Ze<Et;Ze++)be?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,sn.__webglTexture,k,Gt+Ze):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,sn.__webglTexture,k),nn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.__webglTexture,dt,Re+Ze):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ve.__webglTexture,dt),k!==0?U.blitFramebuffer(Wt,qt,St,Ct,se,pe,St,Ct,U.COLOR_BUFFER_BIT,U.NEAREST):nn?U.copyTexSubImage3D(we,dt,se,pe,Re+Ze,Wt,qt,St,Ct):U.copyTexSubImage2D(we,dt,se,pe,Wt,qt,St,Ct);j.bindFramebuffer(U.READ_FRAMEBUFFER,null),j.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else nn?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(we,dt,se,pe,Re,St,Ct,Et,ge,Ht,ye.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(we,dt,se,pe,Re,St,Ct,Et,ge,ye.data):U.texSubImage3D(we,dt,se,pe,Re,St,Ct,Et,ge,Ht,ye):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,se,pe,St,Ct,ge,Ht,ye.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,se,pe,ye.width,ye.height,ge,ye.data):U.texSubImage2D(U.TEXTURE_2D,dt,se,pe,St,Ct,ge,Ht,ye);U.pixelStorei(U.UNPACK_ROW_LENGTH,ce),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$e),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Di),U.pixelStorei(U.UNPACK_SKIP_ROWS,Je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,_s),dt===0&&B.generateMipmaps&&U.generateMipmap(we),j.unbindTexture()},this.initRenderTarget=function(T){lt.get(T).__webglFramebuffer===void 0&&xt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?xt.setTextureCube(T,0):T.isData3DTexture?xt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xt.setTexture2DArray(T,0):xt.setTexture2D(T,0),j.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,j.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const Ts=new I;function on(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ts.copy(t),Ts[n]=0,Ts.normalize();const l=.5*o/(o+a),h=1-Ts.angleTo(i)/c;return Math.sign(Ts[e])===1?h*l:a/(o+a)+l+l*(1-h)}class fc extends Yn{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,x=new I,g=.5/o;for(let p=0,S=0;p<u.length;p+=3,S+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:x.set(1,0,0),f[S+0]=on(x,l,"z","y",r,n),f[S+1]=1-on(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),f[S+0]=1-on(x,l,"z","y",r,n),f[S+1]=1-on(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),f[S+0]=1-on(x,l,"x","z",r,t),f[S+1]=on(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[S+0]=1-on(x,l,"x","z",r,t),f[S+1]=1-on(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[S+0]=1-on(x,l,"x","y",r,t),f[S+1]=1-on(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),f[S+0]=on(x,l,"x","y",r,t),f[S+1]=1-on(x,l,"y","x",r,e);break}}static fromJSON(t){return new fc(t.width,t.height,t.depth,t.segments,t.radius)}}function Va(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ae;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Cl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);const m=Cl(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Cl(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new He(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const E={ink:"#16232b",black:"#1b1d20",white:"#f4f2e8",offwhite:"#fff8e8",cream:"#f0e0bc",yellow:"#f6c62f",taxi:"#ffc928",yellowDeep:"#d89200",red:"#d84236",blue:"#2678bd",green:"#3d9858",darkGreen:"#1d653f",lime:"#7fb84a",brown:"#6c4528",darkBrown:"#442b1b",grey:"#a6abad",darkGrey:"#676d6d",lightGrey:"#d8d9d2",pink:"#e8a0a1",lavender:"#9d8bbd",orange:"#e58836",skin:"#f6c990",skinTan:"#d7a06f",gold:"#e5b83e",glass:"#5e8d9e"},Wo=new Map;function Ot(i,t={}){const e=`${i}|${t.roughness??.42}|${t.metalness??0}|${t.emissive??""}|${t.emissiveIntensity??0}|${t.transparent?1:0}|${t.opacity??1}|${t.side??0}`;if(Wo.has(e))return Wo.get(e);const n=new Zn({color:i,roughness:t.roughness??.42,metalness:t.metalness??0,emissive:t.emissive??"#000000",emissiveIntensity:t.emissiveIntensity??0,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Rn,flatShading:!!t.flatShading});return Wo.set(e,n),n}const Lh=new Yn(1,1,1),Dh=new ms(1,1),Uh=new tn(1,1,1,12,1,!1);new Wn(1,1,12,1,!1);const h1=new tr(1,2),u1=new tr(1,1);new gs(1,.09,8,28);const Xo=new Map;function d1(i,t,e,n=.12){const s=`${i.toFixed(2)}|${t.toFixed(2)}|${e.toFixed(2)}|${n}`;return Xo.has(s)||Xo.set(s,new fc(i,t,e,1,Math.min(n,i/2.1,t/2.1,e/2.1))),Xo.get(s)}function v(i,{w:t=1,h:e=1,d:n=1,color:s=E.white,x:r=0,y:o=0,z:a=0,rx:c=0,ry:l=0,rz:h=0,mat:u=null,cast:d=!0,receive:f=!0,rounded:m=!1,radius:x=.09,name:g=""}){const p=m?d1(t,e,n,x):Lh,S=new Bt(p,u||Ot(s));return m||S.scale.set(t,e,n),S.position.set(r,o,a),S.rotation.set(c,l,h),S.castShadow=d,S.receiveShadow=f,g&&(S.name=g),i.add(S),S}function bi(i,{w:t=1,h:e=1,color:n=E.white,x:s=0,y:r=0,z:o=0,rx:a=-Math.PI/2,ry:c=0,rz:l=0,mat:h=null,cast:u=!1,receive:d=!0,name:f=""}){const m=new Bt(Dh,h||Ot(n));return m.scale.set(t,e,1),m.position.set(s,r,o),m.rotation.set(a,c,l),m.castShadow=u,m.receiveShadow=d,f&&(m.name=f),i.add(m),m}function mt(i,{r:t=.5,rTop:e=null,h:n=1,color:s=E.white,x:r=0,y:o=0,z:a=0,rx:c=0,ry:l=0,rz:h=0,mat:u=null,segments:d=12,cast:f=!0,receive:m=!0,cone:x=!1,name:g=""}){let p;if(x||e!==null&&e!==t){const S=new tn(e??0,t,n,d,1,!1);p=new Bt(S,u||Ot(s))}else p=new Bt(Uh,u||Ot(s)),p.scale.set(t,n,t);return p.position.set(r,o,a),p.rotation.set(c,l,h),p.castShadow=f,p.receiveShadow=m,g&&(p.name=g),i.add(p),p}function de(i,{r:t=.5,color:e=E.white,x:n=0,y:s=0,z:r=0,rx:o=0,ry:a=0,rz:c=0,mat:l=null,low:h=!1,cast:u=!0,receive:d=!0}){const f=new Bt(h?u1:h1,l||Ot(e));return f.scale.setScalar(t),f.position.set(n,s,r),f.rotation.set(o,a,c),f.castShadow=u,f.receiveShadow=d,i.add(f),f}function zh(i,{r:t=1,tube:e=.09,color:n=E.yellow,x:s=0,y:r=0,z:o=0,rx:a=-Math.PI/2,ry:c=0,rz:l=0,mat:h=null,cast:u=!1}){const d=new Bt(new gs(t,e,8,32),h||Ot(n));return d.position.set(s,r,o),d.rotation.set(a,c,l),d.castShadow=u,i.add(d),d}function xn(i,t,e,n,s=E.yellow,r=.17,o=.09){const a=new Bt(Uh,Ot(s));return a.scale.set(r,o,r),a.position.set(t,e,n),a.castShadow=!1,a.receiveShadow=!0,i.add(a),a}function Nh(i,t,e,n,s,r,o=E.yellow,a=.85,c={}){const l=Math.max(0,Math.floor(s/a)),h=Math.max(0,Math.floor(r/a)),u=t-(l-1)*a/2,d=n-(h-1)*a/2,f=c.max??200;let m=0;for(let x=0;x<l;x++)for(let g=0;g<h;g++){if(m++>=f)return;c.skipCenter&&Math.abs(x-(l-1)/2)<1&&Math.abs(g-(h-1)/2)<1||xn(i,u+x*a,e,d+g*a,o,c.r??.17,c.h??.08)}}function f1(i,{w:t=512,h:e=128,bg:n=E.cream,color:s=E.ink,border:r=E.ink,font:o='900 64px "Lilita One", "Arial Black", sans-serif',lineHeight:a=1.05,padding:c=18,radius:l=18,borderWidth:h=8,align:u="center",small:d=null}={}){const f=document.createElement("canvas");f.width=t,f.height=e;const m=f.getContext("2d");m.clearRect(0,0,t,e),n&&(m.fillStyle=n,Pl(m,2,2,t-4,e-4,l),m.fill()),r&&(m.lineWidth=h,m.strokeStyle=r,Pl(m,h/2+2,h/2+2,t-h-4,e-h-4,l),m.stroke());const x=Array.isArray(i)?i:[i];m.textAlign=u,m.textBaseline="middle";const g=u==="center"?t/2:c,p=x.length,S=parseInt(o.match(/(\d+)px/)?.[1]||"64",10),b=(e-c*2)/(p*a);m.font=o.replace(/\d+px/,`${S}px`);const _=Math.max(...x.map(D=>m.measureText(D).width))||1,P=S*((t-c*2)/_),A=Math.max(12,Math.min(b,P,S*1.55));m.font=o.replace(/\d+px/,`${A}px`),m.fillStyle=s,x.forEach((D,w)=>{const M=e/2+(w-(p-1)/2)*A*a+A*.04;m.fillText(D,g,M)}),d&&(m.font=`900 ${Math.round(A*.27)}px "Nunito", sans-serif`,m.fillStyle=d.color||s,m.fillText(d.text,t/2,e-c*1.2));const C=new Ii(f);return C.colorSpace=De,C.anisotropy=8,C.needsUpdate=!0,C}function Pl(i,t,e,n,s,r){const o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+o,e),i.arcTo(t+n,e,t+n,e+s,o),i.arcTo(t+n,e+s,t,e+s,o),i.arcTo(t,e+s,t,e,o),i.arcTo(t,e,t+n,e,o),i.closePath()}function he(i,{x:t=0,y:e=3,z:n=0,ry:s=0,width:r=8,height:o=2.2,text:a,bg:c=E.cream,color:l=E.ink,border:h=E.ink,font:u='900 60px "Lilita One", "Arial Black", sans-serif',frame:d=E.ink,thickness:f=.18,lines:m=null,doubleSided:x=!0,small:g=null}){const p=new At;p.position.set(t,e,n),p.rotation.y=s,v(p,{w:r+.35,h:o+.35,d:f,color:d,x:0,y:0,z:0,cast:!0,receive:!0});const S=f1(m||a,{w:Math.round(r*80),h:Math.round(o*80),bg:c,color:l,border:h,font:u,small:g}),b=new Zn({map:S,roughness:.5,metalness:0,transparent:!1}),_=new Bt(Dh,b);if(_.scale.set(r,o,1),_.position.set(0,0,f/2+.012),_.receiveShadow=!0,p.add(_),x){const P=_.clone();P.position.z=-f/2-.012,P.rotation.y=Math.PI,p.add(P)}return i.add(p),p}function Jr(i,t,e,{scale:n=1,trunk:s=E.brown,leaves:r=E.green,y:o=0,kind:a="round",flowers:c=null}={}){const l=new At;l.position.set(t,o,e);const h=n;if(mt(l,{r:.22*h,h:2.1*h,color:s,y:1.05*h,segments:8}),a==="round"?(de(l,{r:1.35*h,color:r,x:0,y:3.05*h,z:0,low:!0}),de(l,{r:.92*h,color:r,x:.72*h,y:2.6*h,z:.25*h,low:!0}),de(l,{r:.8*h,color:r,x:-.68*h,y:2.8*h,z:-.22*h,low:!0}),de(l,{r:.65*h,color:E.darkGreen,x:.15*h,y:3.75*h,z:.2*h,low:!0})):a==="tall"?(de(l,{r:1.03*h,color:r,x:0,y:2.9*h,z:0,low:!0}),de(l,{r:.8*h,color:r,x:.35*h,y:4*h,z:0,low:!0}),de(l,{r:.58*h,color:E.lime,x:-.3*h,y:4.9*h,z:0,low:!0})):mt(l,{r:.08*h,rTop:.06*h,h:4.2*h,color:r,y:4.1*h,segments:7}),c)for(let u=0;u<5;u++)xn(l,Math.cos(u*2.1)*1.3*h,3.25*h+u%2*.4,Math.sin(u*2.1)*1.1*h,c,.16*h,.12*h);return i.add(l),l}function Pe(i,t,e,{color:n=E.darkGrey,light:s="#ffe6a5",y:r=0,h:o=5.6,flags:a=!1}={}){const c=new At;return c.position.set(t,r,e),mt(c,{r:.14,h:o,color:n,y:o/2,segments:8}),mt(c,{r:.48,h:.16,color:n,y:.12,segments:8}),de(c,{r:.35,color:s,x:0,y:o+.16,z:0,mat:Ot(s,{emissive:s,emissiveIntensity:.35}),low:!0}),mt(c,{r:.11,h:.22,color:n,y:o-.18,segments:8}),a&&(v(c,{w:1.5,h:.65,d:.06,color:E.red,x:.75,y:o-.6,z:0}),v(c,{w:.65,h:.25,d:.07,color:E.white,x:.67,y:o-.5,z:.01}),v(c,{w:.15,h:.35,d:.08,color:E.white,x:.67,y:o-.56,z:.02})),i.add(c),c}function Se(i,t,e,n=0,{y:s=0,color:r=E.brown,metal:o=E.darkGrey}={}){const a=new At;a.position.set(t,s,e),a.rotation.y=n,v(a,{w:2.6,h:.18,d:.7,color:r,y:.85}),v(a,{w:2.6,h:.9,d:.16,color:r,x:0,y:1.29,z:-.34,rx:-.15});for(const c of[-1.05,1.05])v(a,{w:.12,h:.85,d:.6,color:o,x:c,y:.45});return i.add(a),a}function oi(i,t,e,{color:n=E.red,y:s=0,scale:r=1}={}){const o=new At;return o.position.set(t,s,e),mt(o,{r:.06*r,h:3.4*r,color:E.white,y:1.7*r,segments:8}),_n(o,{r:1.65*r,h:.65*r,color:n,y:3.35*r,segments:8}),mt(o,{r:.08*r,h:.2*r,color:E.cream,y:3.7*r,segments:8}),i.add(o),o}function _n(i,{r:t=1,h:e=1,color:n=E.red,x:s=0,y:r=0,z:o=0,rx:a=0,ry:c=0,rz:l=0,mat:h=null,segments:u=8}){const d=new Bt(new Wn(t,e,u),h||Ot(n));return d.position.set(s,r,o),d.rotation.set(a,c,l),d.castShadow=!0,d.receiveShadow=!0,i.add(d),d}function Xn(i,t,e,n,{colorA:s=E.red,colorB:r=E.white,type:o="swiss",ry:a=0,scale:c=1}={}){const l=new At;return l.position.set(t,e,n),l.rotation.y=a,mt(l,{r:.05*c,h:3.3*c,color:E.lightGrey,y:1.65*c,segments:6}),o==="swiss"?(v(l,{w:1.3*c,h:1.3*c,d:.06*c,color:s,x:.68*c,y:2.8*c,z:0}),v(l,{w:.78*c,h:.26*c,d:.07*c,color:r,x:.68*c,y:2.8*c,z:.04*c}),v(l,{w:.26*c,h:.78*c,d:.07*c,color:r,x:.68*c,y:2.8*c,z:.04*c})):o==="geneva"?(v(l,{w:1.45*c,h:.95*c,d:.06*c,color:r,x:.73*c,y:2.95*c,z:0}),v(l,{w:.4*c,h:.4*c,d:.07*c,color:s,x:.58*c,y:2.95*c,z:.04*c}),v(l,{w:.4*c,h:.4*c,d:.07*c,color:E.yellow,x:.94*c,y:2.95*c,z:.04*c})):v(l,{w:1.3*c,h:.85*c,d:.06*c,color:s,x:.68*c,y:2.95*c,z:0}),i.add(l),l}function pc(i,t=1,e=.22){const n=new Qs(t,24),s=new mn({color:"#16232b",transparent:!0,opacity:e,depthWrite:!1}),r=new Bt(n,s);return r.rotation.x=-Math.PI/2,r.position.y=.025,r.renderOrder=2,i.add(r),r}function p1(i){const t={topColor:{value:new Yt("#62bfe9")},midColor:{value:new Yt("#c8eaf5")},bottomColor:{value:new Yt("#f8e8c9")},sunColor:{value:new Yt("#fff4c7")},sunDir:{value:new I(-.52,.5,-.45).normalize()}},e=new In({uniforms:t,side:qe,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform vec3 topColor, midColor, bottomColor, sunColor, sunDir;
      varying vec3 vWorld;
      void main() {
        vec3 dir = normalize(vWorld - cameraPosition);
        float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
        float above = clamp(dir.y, 0.0, 1.0);
        vec3 col = mix(bottomColor, midColor, smoothstep(0.46, 0.56, h));
        col = mix(col, topColor, pow(above, 0.62));
        float sun = max(dot(dir, normalize(sunDir)), 0.0);
        col += sunColor * pow(sun, 220.0) * 0.75;
        col += sunColor * pow(sun, 9.0) * 0.075;
        float cloudBand = smoothstep(0.58, 0.9, h) * 0.01;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),n=new Bt(new so(1800,32,18),e);return n.frustumCulled=!1,i.add(n),n}function m1(i){const t=er(1931),e=new At;e.name="Alps";const n=["#7f9fa8","#74949f","#8ba7ae","#6f8e9a"],s=Ot("#e5e9e5",{roughness:.92,flatShading:!0});for(let r=0;r<17;r++){const o=-.1+t()*Math.PI*.88,a=980+t()*360,c=Math.cos(o)*a+40,l=-Math.sin(o)*a-160,h=52+t()*92,u=85+t()*125,d=5+Math.floor(t()*2),f=new Wn(u,h,d,1,!1),m=Ot(n[r%n.length],{roughness:.94,flatShading:!0}),x=new Bt(f,m);x.position.set(c,h/2-14,l),x.rotation.y=t()*Math.PI,x.scale.z=.55+t()*.7,x.castShadow=!1,x.receiveShadow=!1,e.add(x);const g=h*(.24+t()*.09),p=new Bt(new Wn(u*(g/h)*1.02,g,d,1,!1),s);p.position.set(c+(t()-.5)*8,h-g/2-14,l+(t()-.5)*8),p.rotation.y=x.rotation.y,p.scale.z=x.scale.z,e.add(p)}for(let r=0;r<9;r++){const o=-.05+t()*Math.PI*.8,a=720+t()*120,c=Math.cos(o)*a+20,l=-Math.sin(o)*a-160,h=24+t()*38,u=95+t()*110,d=new Wn(u,h,5,1,!1),f=new Bt(d,Ot(r%2?"#75918c":"#839c91",{roughness:1,flatShading:!0}));f.position.set(c,h/2-12,l),f.rotation.y=t()*Math.PI,f.scale.z=.55+t()*.65,f.castShadow=!1,e.add(f)}return i.add(e),e}function zr(i,t,e,n,s=1){const r=new At;r.position.set(t,e,n);const o=Ot("#fffdf7",{roughness:.9,flatShading:!1}),a=[[0,0,0,4.5,.85,2],[3.5,.35,.2,3.1,.8,1.6],[-3.6,.15,0,2.8,.7,1.6],[1.4,1.15,0,2.4,.8,1.5],[-1.5,.9,.1,2,.7,1.2]];for(const[c,l,h,u,d,f]of a){const m=new Bt(Lh,o);m.scale.set(u*s,d*s,f*s),m.position.set(c*s,l*s,h*s),m.castShadow=!1,m.receiveShadow=!1,r.add(m)}return i.add(r),r}function g1(i,t){i.updateMatrixWorld(!0);const e=new Map,n=new Map,s=(a,c)=>{a.index&&(a=a.toNonIndexed());for(const l of Object.keys(a.attributes))["position","normal","uv"].includes(l)||a.deleteAttribute(l);return a.attributes.uv||a.setAttribute("uv",new He(new Float32Array(a.attributes.position.count*2),2)),a};i.traverse(a=>{if(!a.isMesh||a.userData.noMerge||Array.isArray(a.material))return;const c=a.material;if(c.transparent&&c.opacity<.98)return;if(c.map||c.emissive&&c.emissive.getHex()!==0||c.metalness>.25||c.side!==Rn||c.roughness<.22){const h=`${c.uuid}|${a.castShadow?1:0}|${a.receiveShadow?1:0}`;n.has(h)||n.set(h,{material:c,cast:a.castShadow,receive:a.receiveShadow,geoms:[]});const u=s(a.geometry.clone());u.applyMatrix4(a.matrixWorld),n.get(h).geoms.push(u)}else{const h=`${a.castShadow?1:0}|${a.receiveShadow?1:0}`;e.has(h)||e.set(h,{cast:a.castShadow,receive:a.receiveShadow,geoms:[],colors:[]});let u=s(a.geometry.clone());u.applyMatrix4(a.matrixWorld);const d=c.color.clone(),f=u.attributes.position.count,m=new Float32Array(f*3);for(let x=0;x<f;x++)m[x*3]=d.r,m[x*3+1]=d.g,m[x*3+2]=d.b;u.setAttribute("color",new He(m,3)),e.get(h).geoms.push(u)}});const r=new At;r.name="Merged city";const o=new Zn({vertexColors:!0,roughness:.47,metalness:.015});for(const{cast:a,receive:c,geoms:l}of e.values()){if(!l.length)continue;let h;try{h=l.length===1?l[0]:Va(l,!1)}catch(d){console.warn("Could not merge brick batch",d);continue}if(!h)continue;const u=new Bt(h,o);u.castShadow=a,u.receiveShadow=c,r.add(u)}for(const{material:a,cast:c,receive:l,geoms:h}of n.values()){if(!h.length)continue;let u;try{u=h.length===1?h[0]:Va(h,!1)}catch(f){console.warn("Could not merge a material batch",f);continue}if(!u)continue;const d=new Bt(u,a);d.castShadow=c,d.receiveShadow=l,r.add(d)}return t.add(r),i.parent?.remove(i),r}function Fh(i,t=[]){i.updateWorldMatrix(!0,!0);const e=new ve().copy(i.matrixWorld).invert(),n=new Set;for(const o of t)o.traverse(a=>{a.isMesh&&n.add(a)});const s=new Map,r=[];i.traverse(o=>{if(!o.isMesh||n.has(o)||Array.isArray(o.material))return;const a=`${o.material.uuid}|${o.castShadow?1:0}|${o.receiveShadow?1:0}|${o.renderOrder}`;s.has(a)||s.set(a,{material:o.material,cast:o.castShadow,receive:o.receiveShadow,renderOrder:o.renderOrder,geoms:[]});let c=o.geometry.clone();c.index&&(c=c.toNonIndexed());for(const h of Object.keys(c.attributes))["position","normal","uv"].includes(h)||c.deleteAttribute(h);c.attributes.uv||c.setAttribute("uv",new He(new Float32Array(c.attributes.position.count*2),2));const l=new ve().multiplyMatrices(e,o.matrixWorld);c.applyMatrix4(l),s.get(a).geoms.push(c),r.push(o)});for(const o of r)o.parent?.remove(o);for(const{material:o,cast:a,receive:c,renderOrder:l,geoms:h}of s.values()){if(!h.length)continue;const u=h.length===1?h[0]:Va(h,!1);if(!u)continue;const d=new Bt(u,o);d.castShadow=a,d.receiveShadow=c,d.renderOrder=l,i.add(d)}return i}function er(i){return function(){let t=i+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Is(i,t){return t[Math.floor(i()*t.length)]}const ji={centerLat:46.2045,centerLon:6.1465,metresPerDegLat:111320,metresPerDegLon:77050,scale:.25};function x1(i,t){return{x:(t-ji.centerLon)*ji.metresPerDegLon*ji.scale,z:-(i-ji.centerLat)*ji.metresPerDegLat*ji.scale}}function _1(i,t){const n=i.lat*Math.PI/180,s=t.lat*Math.PI/180,r=s-n,o=(t.lon-i.lon)*Math.PI/180,a=Math.sin(r/2)**2+Math.cos(n)*Math.cos(s)*Math.sin(o/2)**2;return 2*6371e3*Math.asin(Math.sqrt(a))}const v1=[{id:"gare",name:"Gare Cornavin",short:"Cornavin",lat:46.21017,lon:6.1424,color:"#e04438",glyph:"G",stop:[6,-2],area:42,blurb:"The big glass train shed. Mind the trams."},{id:"belAir",name:"Place Bel-Air",short:"Bel-Air",lat:46.20433,lon:6.14317,color:"#e6a521",glyph:"B",stop:[5,12],area:27,blurb:"Tram bells, cafe awnings and old Geneva stone."},{id:"pont",name:"Pont du Mont-Blanc",short:"Mont-Blanc",lat:46.20588,lon:6.14872,color:"#2b7fc1",glyph:"=",stop:[0,5],area:17,blurb:"The grand Rhône crossing, flags in the wind."},{id:"jardin",name:"Jardin Anglais",short:"Jardin Anglais",lat:46.20453,lon:6.15098,color:"#3e9c5f",glyph:"✿",stop:[2,9],area:32,blurb:"Flower clock, lawns and the lakeside promenade."},{id:"jet",name:"Jet d'Eau",short:"Jet d'Eau",lat:46.20738,lon:6.15589,color:"#21a4ba",glyph:"↑",stop:[-3,2],area:24,blurb:"140 metres of lake water doing its thing."},{id:"bains",name:"Bains des Pâquis",short:"Bains",lat:46.21036,lon:6.15419,color:"#d64b3f",glyph:"≈",stop:[-3,5],area:29,blurb:"A wooden pier, a diving tower and very cold lake."},{id:"brokenChair",name:"Broken Chair",short:"Broken Chair",lat:46.2228,lon:6.13885,color:"#8f592c",glyph:"┬",stop:[4,13],area:46,blurb:"Place des Nations and the giant three-legged chair."},{id:"oldTown",name:"Vieille Ville",short:"Old Town",lat:46.20032,lon:6.14914,color:"#847347",glyph:"♜",stop:[-4,-8],area:40,blurb:"Bourg-de-Four, St-Pierre and a hill full of history."},{id:"neuve",name:"Place de Neuve",short:"Place de Neuve",lat:46.20106,lon:6.14338,color:"#9b4b8c",glyph:"N",stop:[6,3],area:32,blurb:"The Grand Théâtre, plane trees and a stern statue."},{id:"bastions",name:"Parc des Bastions",short:"Bastions",lat:46.19939,lon:6.1453,color:"#577a3e",glyph:"♟",stop:[3,-5],area:44,blurb:"Reformation Wall, giant chess and shady allées."}],Ei=v1.map(i=>{const{x:t,z:e}=x1(i.lat,i.lon);return{...i,x:t,z:e,stopX:t+i.stop[0],stopZ:e+i.stop[1]}}),jr=Object.fromEntries(Ei.map(i=>[i.id,i])),y1=[{pickup:"gare",dest:"belAir",fare:"Nadia",tag:"STUDENT",shirt:"#d05243",hair:"#3a2620",line:"Bel-Air, and don't spare the bricks — my tram leaves in five!"},{pickup:"belAir",dest:"pont",fare:"Luca",tag:"TOURIST",shirt:"#2d7cc4",hair:"#7b4b23",line:"Pont du Mont-Blanc! I must photograph every single lamp post."},{pickup:"pont",dest:"jardin",fare:"Mireille",tag:"GARDENER",shirt:"#43935c",hair:"#d9d0bd",line:"Jardin Anglais, please. The flower clock is two petals slow."},{pickup:"jardin",dest:"jet",fare:"Théo",tag:"LAKE KID",shirt:"#f0b72e",hair:"#5a3220",line:"Jet d'Eau! I wanna get SOAKED. Full speed!"},{pickup:"jet",dest:"bains",fare:"Amélie",tag:"SWIMMER",shirt:"#25a7a5",hair:"#201b1b",line:"Bains des Pâquis! I booked a plunge and a fondue."},{pickup:"bains",dest:"brokenChair",fare:"Jonas",tag:"DIPLOMAT",shirt:"#5c5e9e",hair:"#8b8b82",line:"Place des Nations. That chair has seen more than all of us."},{pickup:"brokenChair",dest:"oldTown",fare:"Colette",tag:"HISTORIAN",shirt:"#b95e3f",hair:"#ece5d5",line:"Vieille Ville, chérie. Up the hill and mind the cobbles."},{pickup:"oldTown",dest:"neuve",fare:"Marc",tag:"VIOLINIST",shirt:"#713d5a",hair:"#2d2220",line:"Place de Neuve! I'm late for rehearsal at the Grand Théâtre."},{pickup:"neuve",dest:"bastions",fare:"Élodie",tag:"CHESS ACE",shirt:"#4c7fa8",hair:"#bd7c3d",line:"Parc des Bastions. I have a rematch with a pigeon."},{pickup:"bastions",dest:"gare",fare:"Henri",tag:"COMMUTER",shirt:"#5a6269",hair:"#d8d2c3",line:"Cornavin, vite! My train leaves in seven minutes."}],ln=y1.map((i,t)=>{const e=jr[i.pickup],n=jr[i.dest],s=_1(e,n);return{...i,index:t,from:e,to:n,metres:s,distance:Math.round(s)}});ln.reduce((i,t)=>i+t.metres,0);function Wa(i){return i<950?`${Math.round(i/10)*10} m`:`${(i/1e3).toFixed(i<9500?2:1)} km`}function Il(i){const t=Math.max(0,Math.ceil(i));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}Ei[0];function Oh({shirt:i=E.blue,pants:t=E.darkGrey,hair:e=E.brown,skin:n=E.skin,hat:s=null,scale:r=1,armsUp:o=!1,pose:a="stand",accessory:c=null,face:l=!0,tie:h=null}={}){const u=new At,d=Ot(t),f=Ot(i),m=Ot(n),x=Ot(e);for(const p of[-.29,.29])v(u,{w:.5,h:.8,d:.52,color:t,mat:d,x:p,y:.4,z:0}),v(u,{w:.52,h:.2,d:.65,color:E.black,x:p,y:.1,z:.06});v(u,{w:1.2,h:.28,d:.58,color:t,mat:d,x:0,y:.94,z:0}),v(u,{w:1.24,h:.9,d:.58,color:i,mat:f,x:0,y:1.52,z:0}),v(u,{w:1.28,h:.16,d:.62,color:i,mat:f,x:0,y:1.06,z:0}),h&&(v(u,{w:.26,h:.55,d:.035,color:h,x:0,y:1.54,z:.31}),v(u,{w:.15,h:.2,d:.04,color:h,x:0,y:1.83,z:.32}));const g=[];for(const p of[-1,1]){const S=new At;S.position.set(p*.77,1.87,0),S.rotation.z=p*(o?2.45:.08),v(S,{w:.3,h:.78,d:.36,color:i,mat:f,x:0,y:-.34,z:0}),mt(S,{r:.19,h:.4,color:n,mat:m,x:0,y:-.82,z:0,rz:Math.PI/2,segments:10}),u.add(S),g.push({side:p,pivot:S})}if(mt(u,{r:.22,h:.14,color:n,mat:m,x:0,y:2.02,z:0,segments:12}),mt(u,{r:.44,h:.5,color:n,mat:m,x:0,y:2.32,z:0,segments:16}),mt(u,{r:.45,h:.06,color:n,mat:m,x:0,y:2.57,z:0,segments:16}),l){for(const p of[-.15,.15])de(u,{r:.035,color:E.ink,x:p,y:2.38,z:.43,low:!0,cast:!1});v(u,{w:.15,h:.035,d:.025,color:E.ink,x:0,y:2.25,z:.44,cast:!1})}if(s?(mt(u,{r:.46,h:.18,color:s,x:0,y:2.61,z:0,segments:16}),v(u,{w:.74,h:.2,d:.26,color:s,x:0,y:2.58,z:.45})):(v(u,{w:.78,h:.17,d:.73,color:e,mat:x,x:0,y:2.63,z:.03}),v(u,{w:.18,h:.32,d:.52,color:e,mat:x,x:-.36,y:2.51,z:-.13}),v(u,{w:.18,h:.32,d:.52,color:e,mat:x,x:.36,y:2.51,z:-.13}),a==="longhair"&&v(u,{w:.82,h:.7,d:.2,color:e,mat:x,x:0,y:2.3,z:-.36})),c==="bag")v(u,{w:.65,h:.55,d:.24,color:E.brown,x:.64,y:1.25,z:.15}),v(u,{w:.08,h:.4,d:.08,color:E.darkBrown,x:.64,y:1.7,z:.15});else if(c==="suitcase"){const p=new At;p.position.set(.92,.55,.15),v(p,{w:.58,h:.76,d:.32,color:E.yellowDeep,x:0,y:0,z:0}),v(p,{w:.14,h:.16,d:.12,color:E.ink,x:0,y:.47,z:0}),v(p,{w:.46,h:.07,d:.34,color:E.brown,x:0,y:.12,z:0}),u.add(p)}else c==="violin"&&(v(u,{w:.2,h:.8,d:.16,color:E.brown,x:-.92,y:1.1,z:.28,rz:.25}),v(u,{w:.12,h:.7,d:.09,color:E.darkBrown,x:-.9,y:1.68,z:.3,rz:.6}));return u.scale.setScalar(r),u.userData.arms=g,u.userData.height=3.2*r,u}function M1({robe:i=E.darkGrey,skin:t="#d2d0c4",hat:e=E.darkGrey,scale:n=2.2,pose:s="stand"}={}){const r=new At;v(r,{w:1.8,h:1.6,d:1.2,color:i,y:.8}),v(r,{w:1.55,h:2.5,d:1.1,color:i,y:2.8}),v(r,{w:1.9,h:.35,d:1.25,color:E.darkGrey,y:1.9}),v(r,{w:.45,h:2.2,d:.42,color:i,x:-1.05,y:2.6,z:.1,rz:-.12}),v(r,{w:.45,h:2.2,d:.42,color:i,x:1.05,y:2.6,z:.1,rz:.12}),mt(r,{r:.53,h:.55,color:t,y:4.38,segments:16}),mt(r,{r:.6,h:.22,color:e,y:4.72,segments:12}),v(r,{w:.8,h:.14,d:.65,color:e,y:4.66,z:.3}),s==="book"&&v(r,{w:1.2,h:.8,d:.35,color:E.darkBrown,x:0,y:3.4,z:.7,rx:-.2});for(const o of[-.15,.15])de(r,{r:.05,color:"#252a28",x:o,y:4.4,z:.5,low:!0,cast:!1});return r.scale.setScalar(n),r}function S1(i){const{staticRoot:t,dynamic:e,colliders:n,circles:s,rng:r}=i,o={staticRoot:t,dynamic:e,colliders:n,circles:s,rng:r},a=[],c=[A1,R1,C1,P1,U1,z1,N1,F1,O1,B1],l=["gare","belAir","pont","jardin","jet","bains","brokenChair","oldTown","neuve","bastions"];for(let h=0;h<c.length;h++){const u=w1(t,l[h],c[h],o);a.push(u)}return a}function w1(i,t,e,n){const s=jr[t],r=new At;r.name=`Landmark: ${t}`,r.position.set(s.x,0,s.z),i.add(r);const o=e(r,s,n)||{};return{id:t,group:r,...o}}function Ee(i,t,e,n,s,r,o=6,a=0){i.colliders.push({x:t.position.x+e,z:t.position.z+n,hw:s/2,hd:r/2,h:o,rot:a})}function qn(i,t,e,n,s,r=4){i.circles.push({x:t.position.x+e,z:t.position.z+n,r:s,h:r})}function b1(i="#b9af9b",t="#a79d89",e=256){const n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");s.fillStyle=i,s.fillRect(0,0,e,e);const r=er(89);for(let a=0;a<e;a+=22){const c=a/22%2?16:0;for(let l=-22;l<e;l+=40){const h=l+c+r()*2,u=a+r()*2;s.fillStyle=r()>.55?t:i,s.globalAlpha=.18+r()*.13,s.fillRect(h+1,u+1,37,19),s.globalAlpha=1}}s.strokeStyle="rgba(75,66,54,.12)",s.lineWidth=2;for(let a=0;a<e;a+=22)s.beginPath(),s.moveTo(0,a),s.lineTo(e,a),s.stroke();const o=new Ii(n);return o.colorSpace=De,o.wrapS=o.wrapT=Xr,o.repeat.set(3,3),o}function nr(i,t,e,n,s,r="#b8ae9a",o=.026){const a=new Zn({map:b1(r),roughness:.8});bi(i,{w:n,h:s,mat:a,x:t,y:o,z:e,receive:!0}),v(i,{w:n+1.4,h:.18,d:.6,color:"#8e836e",x:t,y:.07,z:e-s/2-.3})}function Tn(i,{x:t=0,z:e=0,w:n=8,d:s=8,h:r=11,color:o="#e3c69c",roof:a="#955a42",trim:c=E.cream,floors:l=3,shop:h=!0,awning:u=null,ry:d=0,dormer:f=!1}={}){const m=new At;m.position.set(t,0,e),m.rotation.y=d;const x=r/(l+.4);v(m,{w:n+.45,h:.5,d:s+.45,color:"#9b907d",y:.25}),v(m,{w:n,h:r,d:s,color:o,y:r/2+.45});for(let _=1;_<l;_++)v(m,{w:n+.18,h:.12,d:s+.18,color:c,y:.45+_*x});const g=.85,p=1.25;for(let _=0;_<l;_++){const P=Math.max(1,Math.floor(n/2.7));for(let C=0;C<P;C++){const D=(C-(P-1)/2)*(n/P),w=.45+_*x+x*.64;v(m,{w:g+.18,h:p+.18,d:.12,color:c,x:D,y:w,z:s/2+.06}),v(m,{w:g,h:p,d:.14,color:E.glass,x:D,y:w,z:s/2+.09}),v(m,{w:g+.3,h:.1,d:.35,color:c,x:D,y:w-p/2-.12,z:s/2+.1})}const A=Math.max(1,Math.floor(s/3.1));for(let C=0;C<A;C++){const D=(C-(A-1)/2)*(s/A),w=.45+_*x+x*.6;for(const M of[-1,1])v(m,{w:.12,h:p+.16,d:g+.18,color:c,x:M*(n/2+.06),y:w,z:D}),v(m,{w:.14,h:p,d:g,color:E.glass,x:M*(n/2+.09),y:w,z:D})}}h&&(v(m,{w:n*.66,h:2.1,d:.16,color:"#405257",x:0,y:1.5,z:s/2+.08}),v(m,{w:n*.72,h:.14,d:1.2,color:u||E.red,x:0,y:2.65,z:s/2+.5,rx:-.22}),v(m,{w:n*.7,h:.1,d:.2,color:c,x:0,y:1.06,z:s/2+.12}));const S=1.7+n%2*.4,b=Math.atan2(S,s/2);for(const _ of[-1,1])v(m,{w:n+1.1,h:.22,d:Math.hypot(S,s/2)+.2,color:a,x:0,y:r+.45+S/2,z:_*s/4,rx:_*b});return v(m,{w:n+1.15,h:.2,d:.32,color:a,x:0,y:r+.45+S+.03,z:0}),f&&(v(m,{w:1.2,h:1,d:1,color:c,x:-n*.2,y:r+1.2,z:s*.18}),v(m,{w:.7,h:.55,d:.1,color:E.glass,x:-n*.2,y:r+1.2,z:s*.18+.52}),v(m,{w:1.45,h:.14,d:1.3,color:a,x:-n*.2,y:r+1.75,z:s*.18,rx:-.25})),i.add(m),m}function oo(i,t,e,n,s=2.6,{color:r="#b8b1a1",water:o="#41bfd2",y:a=0}={}){mt(t,{r:s+.6,h:.36,color:"#8c887d",x:e,y:.18+a,z:n,segments:18}),mt(t,{r:s,h:.58,color:r,x:e,y:.42+a,z:n,segments:18}),mt(t,{r:s-.55,h:.18,color:o,x:e,y:.65+a,z:n,segments:18,mat:Ot(o,{roughness:.12,metalness:.15})}),mt(t,{r:.45,h:2.4,color:r,x:e,y:1.65+a,z:n,segments:12}),mt(t,{r:1.45,h:.24,color:r,x:e,y:2.6+a,z:n,segments:18}),mt(t,{r:1.2,h:.1,color:o,x:e,y:2.74+a,z:n,segments:18}),de(t,{r:.36,color:E.gold,x:e,y:2.98+a,z:n,low:!0}),mt(t,{r:.08,h:.9,color:E.gold,x:e,y:3.4+a,z:n,segments:8}),qn(i,t,e,n,s+.8,3.4)}function E1(i,t,e,n=28,s=E.red){const r=new At;r.position.set(t,0,e),v(r,{w:n,h:2.7,d:3.6,color:s,y:1.65}),v(r,{w:n+.4,h:.25,d:3.9,color:E.darkGrey,y:3.03}),v(r,{w:n*.8,h:.28,d:3.62,color:E.offwhite,y:2.3});for(let o=0;o<Math.floor(n/3.2);o++){const a=-n/2+1.8+o*3.2;v(r,{w:1.5,h:.9,d:.08,color:E.glass,x:a,y:2.3,z:1.84}),v(r,{w:1.5,h:.9,d:.08,color:E.glass,x:a,y:2.3,z:-1.84})}v(r,{w:1.2,h:1.4,d:.1,color:E.offwhite,x:-n/2+.7,y:1.8,z:1.83}),v(r,{w:.16,h:.7,d:.1,color:E.red,x:-n/2+.7,y:1.8,z:1.91});for(let o=0;o<Math.floor(n/4);o++)for(const a of[-1.4,1.4])mt(r,{r:.42,h:.25,color:E.black,x:-n/2+2+o*4,y:.4,z:a,rz:Math.PI/2,segments:10});return i.add(r),r}function T1(i,t,e,n=21,s=0,{body:r="#e7d9b6",stripe:o="#34815d"}={}){const a=new At;a.position.set(t,0,e),a.rotation.y=s,v(a,{w:n,h:2.65,d:3.2,color:r,y:1.65}),v(a,{w:n+.35,h:.35,d:3.5,color:r,y:2.96}),v(a,{w:n*.92,h:.28,d:3.23,color:o,y:1.83});for(let c=0;c<Math.floor(n/2.6);c++){const l=-n/2+1.45+c*2.6;v(a,{w:1.6,h:1,d:.08,color:E.glass,x:l,y:2.35,z:1.64}),v(a,{w:1.6,h:1,d:.08,color:E.glass,x:l,y:2.35,z:-1.64})}v(a,{w:1.45,h:.6,d:.08,color:E.ink,x:-n/2+.85,y:2.9,z:1.66}),v(a,{w:1,h:.3,d:.1,color:E.yellow,x:-n/2+.85,y:2.9,z:1.72});for(const c of[-n/2+3,n/2-3])for(const l of[-1.25,1.25])mt(a,{r:.45,h:.27,color:E.black,x:c,y:.45,z:l,rz:Math.PI/2,segments:10});return mt(a,{r:.06,h:5.8,color:E.darkGrey,x:0,y:5.4,z:0,segments:6}),v(a,{w:4.2,h:.1,d:.12,color:E.darkGrey,x:0,y:8.2,z:0}),v(a,{w:.1,h:2.4,d:.1,color:E.darkGrey,x:-1.5,y:7.1,z:0}),i.add(a),a}function A1(i,t,e){const{staticRoot:n,dynamic:s}=e;nr(i,0,-3,78,28,"#c6bca9");const r="#e5d4ad",o="#f3e3c1",a="#c9b88f";v(i,{w:70,h:.6,d:15,color:"#9e937d",y:.3,z:-18}),v(i,{w:70,h:9.8,d:12.6,color:r,y:5.1,z:-18}),v(i,{w:26,h:12.4,d:13.2,color:o,y:6.4,z:-17.6}),v(i,{w:70.7,h:.38,d:13.1,color:a,y:9.7,z:-18}),v(i,{w:26.6,h:.4,d:13.8,color:a,y:12.2,z:-17.6}),v(i,{w:71,h:.45,d:14,color:"#a79c86",y:.7,z:-18});for(const m of[3.2,6.4])v(i,{w:70.4,h:.16,d:12.8,color:a,y:m,z:-18});for(const m of[-1,1]){const x=m*22.4;for(let g=0;g<3;g++){const p=x+(g-1)*6.1;for(const S of[4.15,7.45])v(i,{w:3,h:2.3,d:.16,color:"#395964",x:p,y:S,z:-11.72}),v(i,{w:3.5,h:.2,d:.55,color:o,x:p,y:S-1.2,z:-11.55}),v(i,{w:2.7,h:.14,d:.6,color:o,x:p,y:S+1.22,z:-11.5}),v(i,{w:.14,h:2.15,d:.66,color:E.darkGreen,x:p,y:S,z:-11.49})}for(let g=0;g<2;g++)v(i,{w:.16,h:2,d:2.3,color:"#395964",x:m*35.08,y:4.2,z:-20+g*4}),v(i,{w:.16,h:2,d:2.3,color:"#395964",x:m*35.08,y:7.2,z:-20+g*4})}for(const m of[-9.4,-4.7,0,4.7,9.4])v(i,{w:3.3,h:4.85,d:.2,color:o,x:m,y:4.45,z:-10.95}),mt(i,{r:1.65,h:.2,color:o,x:m,y:6.87,z:-10.94,rx:Math.PI/2,segments:18}),v(i,{w:2.65,h:4.4,d:.24,color:"#344c54",x:m,y:4.3,z:-10.9}),mt(i,{r:1.32,h:.24,color:"#344c54",x:m,y:6.5,z:-10.89,rx:Math.PI/2,segments:16}),v(i,{w:.12,h:4,d:.68,color:o,x:m,y:4.2,z:-10.77}),v(i,{w:2.55,h:.1,d:.7,color:E.gold,x:m,y:2.16,z:-10.73});for(const m of[-7.05,2.35,11.75,-16.45])v(i,{w:.45,h:5.9,d:.8,color:a,x:m,y:5,z:-10.75});v(i,{w:8.2,h:3.9,d:.2,color:"#31474e",x:0,y:2.35,z:-10.72}),v(i,{w:5,h:1.7,d:.36,color:E.darkGreen,x:0,y:1.8,z:-10.6}),v(i,{w:.26,h:1.3,d:.2,color:E.gold,x:-1.6,y:1.8,z:-10.38}),v(i,{w:.26,h:1.3,d:.2,color:E.gold,x:1.6,y:1.8,z:-10.38}),mt(i,{r:1.85,h:.38,color:"#b8a274",x:0,y:11,z:-10.74,rx:Math.PI/2,segments:24}),mt(i,{r:1.58,h:.24,color:E.offwhite,x:0,y:11,z:-10.51,rx:Math.PI/2,segments:24});const c=new Zn({map:L1(),roughness:.45}),l=new Bt(new Qs(1.48,32),c);l.position.set(0,11,-10.35),i.add(l),v(i,{w:.34,h:.1,d:.35,color:E.gold,x:0,y:12.6,z:-10.6}),he(i,{x:0,y:8.65,z:-10.68,width:21,height:1.85,text:"GARE CORNAVIN",bg:"#20343c",color:"#f6e6be",border:"#c7a447",font:'900 58px "Lilita One", "Arial Black", sans-serif'}),v(i,{w:64,h:1,d:.9,color:a,x:0,y:13.15,z:-17.6}),v(i,{w:30,h:.6,d:14,color:"#9f9580",x:0,y:13.6,z:-18});const h=new tn(8.6,8.6,48,24,1,!0),u=Ot("#87b7c8",{roughness:.26,metalness:.08}),d=new Bt(h,u);d.rotation.z=Math.PI/2,d.position.set(0,7.5,-31),d.castShadow=!0,d.receiveShadow=!0,i.add(d);for(let m=-2;m<=2;m++)mt(i,{r:8.68,h:.18,color:"#6c7e7f",x:m*9.6,y:7.5,z:-31,rz:Math.PI/2,segments:24});v(i,{w:50,h:.5,d:.32,color:E.darkGrey,x:0,y:15.7,z:-31}),v(i,{w:78,h:.22,d:28,color:"#6d6d66",x:0,y:.06,z:-39});for(let m=0;m<4;m++){const x=-31-m*5.8;for(const g of[-.72,.72])v(i,{w:70,h:.1,d:.18,color:"#8e928c",x:0,y:.22,z:x+g});for(let g=0;g<32;g++)v(i,{w:.5,h:.1,d:4.7,color:"#5b4c3d",x:-34+g*2.2,y:.18,z:x})}return E1(i,-19,-37.2,28,"#b92f2d"),v(i,{w:58,h:.25,d:14,color:"#c5bda9",x:0,y:.11,z:-2}),v(i,{w:.5,h:.2,d:17,color:"#b1a58d",x:-2.4,y:.09,z:2}),v(i,{w:.5,h:.2,d:17,color:"#b1a58d",x:2.4,y:.09,z:2}),Pe(i,-24,4.5,{h:6.4,flags:!0}),Pe(i,24,4.5,{h:6.4,flags:!0}),Se(i,-33,5,Math.PI/2),Se(i,33,5,-Math.PI/2),mt(i,{r:.9,h:.18,color:E.red,x:31,y:6.9,z:-11.7,rx:Math.PI/2,segments:16}),he(i,{x:31,y:6.9,z:-11.56,width:1.5,height:.8,text:"CFF",bg:E.red,color:E.white,border:E.white,font:'900 48px "Nunito", sans-serif',frame:E.red,thickness:.04}),he(i,{x:-29,y:3.2,z:-11.55,width:5,height:1,text:"TAXI",bg:E.yellow,color:E.ink,border:E.ink,font:'900 60px "Lilita One", sans-serif'}),Xn(i,-32,.2,-4,{type:"swiss",scale:1.2}),Xn(i,32,.2,-4,{type:"geneva",scale:1.2}),Ee(e,i,0,-18,71,14,14),Ee(e,i,0,-37,72,27,8),{stop:ai(i,e,t,{x:6,z:-2,label:"GARE CORNAVIN"})}}function ai(i,t,e,n){const{x:s=0,z:r=0,label:o=e.name}=n;return v(i,{w:.25,h:2.6,d:.25,color:E.darkGrey,x:s,y:1.3,z:r}),he(i,{x:s,y:2.65,z:r,width:5.4,height:.8,text:o,bg:E.cream,color:E.ink,border:E.ink,font:'900 44px "Nunito", sans-serif',frame:E.ink,thickness:.08}),{x:i.position.x+e.stopX-e.x,z:i.position.z+e.stopZ-e.z}}function R1(i,t,e){nr(i,3,12,48,34,"#c0b49d"),Tn(i,{x:-23,z:2,w:12,d:16,h:12.5,color:"#e6c89e",roof:"#8e553d",floors:3,awning:E.red,dormer:!0}),Ee(e,i,-23,2,12,16,14),Tn(i,{x:22,z:8,w:12,d:21,h:14,color:"#d7b487",roof:"#6b5b4d",floors:4,awning:E.green,dormer:!0}),Ee(e,i,22,8,12,21,15),Tn(i,{x:-18,z:30,w:14,d:8,h:10.5,color:"#d9c3a1",roof:"#945e43",floors:3,awning:E.blue}),Ee(e,i,-18,30,14,8,12),Tn(i,{x:11,z:31,w:12,d:7.5,h:11.5,color:"#c9b393",roof:"#77584a",floors:3,awning:E.yellow}),Ee(e,i,11,31,12,7.5,13),oo(e,i,-6,19,2.5),oi(i,15,24,{color:E.red,scale:.9}),oi(i,21,23,{color:E.yellow,scale:.8});for(let n=0;n<4;n++)v(i,{w:1.1,h:.1,d:1.1,color:E.cream,x:15+n%2*6,y:1.05,z:20+Math.floor(n/2)*6}),mt(i,{r:.08,h:1,color:E.darkGrey,x:15+n%2*6,y:.55,z:20+Math.floor(n/2)*6,segments:6});T1(i,12,-2,20,.02,{body:"#e9ddb7",stripe:"#2c7a5b"}),Ee(e,i,12,-2,21,4,5.5),Pe(i,-5,-2,{h:6,flags:!0}),Pe(i,28,15,{h:5.4}),Se(i,-19,19,Math.PI/2),Se(i,4,26,0),he(i,{x:2,y:4,z:6.6,width:8.5,height:1.8,text:"PLACE BEL-AIR",bg:E.cream,color:E.ink,border:E.ink,font:'900 56px "Lilita One", "Arial Black", sans-serif'}),ai(i,e,t,{x:5,z:12,label:"BEL-AIR"}),v(i,{w:4.4,h:.2,d:3,color:E.brown,x:28,y:1.2,z:3});for(const[n,s]of[[-2,-1.3],[2,-1.3],[-2,1.3],[2,1.3]])v(i,{w:.22,h:1.4,d:.22,color:E.brown,x:28+n,y:.7,z:3+s});v(i,{w:5,h:.3,d:3.6,color:E.red,x:28,y:2.1,z:3,rx:-.15});for(let n=0;n<5;n++)de(i,{r:.28,color:n%2?E.orange:E.yellow,x:26.7+n*.65,y:1.45,z:3,low:!0});return{stop:{x:i.position.x+t.stopX-t.x,z:i.position.z+t.stopZ-t.z}}}function C1(i,t,e){const n=new At;n.position.set(3.7,0,6.4),n.rotation.y=Math.atan2(7,24),i.add(n);const o="#c5c0b2",a="#989488",c="#ded8c8";v(n,{w:16.4,h:1.2,d:31,color:a,y:-.72,z:0}),v(n,{w:16.8,h:.28,d:31.6,color:o,y:-.14,z:0});for(const l of[-6.9,6.9])v(n,{w:2.6,h:.16,d:30.7,color:c,x:l,y:.04,z:0}),v(n,{w:.35,h:.22,d:30.7,color:a,x:l+(l>0?-1.2:1.2),y:.11,z:0});for(const l of[-8,8]){v(n,{w:.75,h:1.45,d:30.8,color:o,x:l,y:.6,z:0}),v(n,{w:1,h:.24,d:31.2,color:c,x:l,y:1.4,z:0});for(let h=-14.4;h<=14.4;h+=2.4)v(n,{w:.9,h:.22,d:.6,color:c,x:l,y:1.53,z:h});for(const h of[-10.8,-3.6,3.6,10.8])v(n,{w:1.3,h:2.1,d:1.6,color:o,x:l,y:-.72,z:h});for(const h of[-7.2,0,7.2])v(n,{w:.18,h:.72,d:4.9,color:"#4f5f62",x:l+(l>0?.4:-.4),y:-.72,z:h}),v(n,{w:.2,h:.22,d:4.9,color:c,x:l+(l>0?.42:-.42),y:-1.02,z:h})}for(const l of[-15.2,15.2])v(n,{w:18,h:1.2,d:2.8,color:a,y:-.3,z:l});for(const l of[-12.2,-4.1,4.1,12.2])for(const h of[-7.3,7.3])mt(n,{r:.13,h:5.4,color:E.darkGrey,x:h,y:3.4,z:l,segments:8}),mt(n,{r:.5,h:.16,color:E.darkGrey,x:h,y:.64,z:l,segments:10}),de(n,{r:.38,color:"#ffe8b0",x:h,y:6.24,z:l,mat:Ot("#ffe8b0",{emissive:"#ffd27b",emissiveIntensity:.4}),low:!0});for(const[l,h]of[-12.2,-4.1,4.1,12.2].entries())for(const u of[-7.3,7.3])Xn(n,u,.9,h,{type:l%2?"swiss":"geneva",scale:.7,ry:u>0?Math.PI/2:-Math.PI/2});for(const l of[-8.48,8.48])v(n,{w:.25,h:2.2,d:2.2,color:E.red,x:l,y:.75,z:0}),v(n,{w:.28,h:.5,d:1.35,color:E.white,x:l,y:.82,z:0}),v(n,{w:.28,h:1.35,d:.5,color:E.white,x:l,y:.92,z:0});for(const[l,h,u]of[[9.6,14.7,0],[-9.6,-14.7,Math.PI]])v(n,{w:1.1,h:3.45,d:1.1,color:o,x:l,y:1.72,z:h}),v(n,{w:1.5,h:.3,d:1.5,color:c,x:l,y:3.45,z:h}),he(n,{x:l,y:3.02,z:h+(u?-.58:.58),ry:u,width:5,height:.72,text:"PONT DU MONT-BLANC",bg:"#c8c2b3",color:"#263a40",border:"#4b524e",font:'900 40px "Lilita One", "Arial Black", sans-serif',frame:"#74746d"});return Se(n,-6.9,-8.2,Math.PI/2),Se(n,6.9,7.5,-Math.PI/2),{stop:{x:i.position.x+t.stopX-t.x,z:i.position.z+t.stopZ-t.z}}}function P1(i,t,e){v(i,{w:9,h:.06,d:17,color:"#d9cdb0",x:3,y:.07,z:7}),v(i,{w:28,h:.06,d:3.4,color:"#d9cdb0",x:4,y:.075,z:14}),v(i,{w:3.4,h:.06,d:26,color:"#d9cdb0",x:-8,y:.072,z:8});for(const l of[[-17,16,11,3,E.red],[20,27,10,2.6,E.yellow],[15,5,4,8,E.lavender]]){v(i,{w:l[2],h:.28,d:l[3],color:"#7d5c3d",x:l[0],y:.15,z:l[1]});for(let h=0;h<12;h++){const u=h/11;xn(i,l[0]-l[2]/2+.5+u*(l[2]-1),.34,l[1]+Math.sin(h*2.4)*l[3]*.28,h%3?l[4]:E.white,.17,.16)}}const n=new At;n.position.set(11,0,7),n.rotation.z=.04,i.add(n),mt(n,{r:6.2,h:.5,color:"#65834f",y:.25,segments:32}),zh(n,{r:5.2,tube:.18,color:"#d8c79b",x:0,y:.62,z:0,rx:-Math.PI/2}),mt(n,{r:5.25,h:.3,color:"#f4ead2",y:.48,segments:32});const s=D1(),r=new Zn({map:s,roughness:.5}),o=new Bt(new Qs(5.05,56),r);o.rotation.x=-Math.PI/2,o.position.y=.65,o.receiveShadow=!0,n.add(o);for(let l=0;l<12;l++){const h=l/12*Math.PI*2;xn(n,Math.cos(h)*5.25,.68,-Math.sin(h)*5.25,l%3===0?E.red:l%3===1?E.yellow:E.pink,.24,.14)}v(n,{w:.44,h:.2,d:3.6,color:"#f9f4e7",y:.72,z:-1.62,ry:.52}),v(n,{w:.36,h:.23,d:3.45,color:"#1f2d2e",y:.74,z:-1.55,ry:.52}),v(n,{w:.4,h:.2,d:2.6,color:"#f9f4e7",y:.73,z:1.18,ry:2.25}),v(n,{w:.32,h:.23,d:2.45,color:"#1f2d2e",y:.75,z:1.15,ry:2.25}),mt(n,{r:.3,h:.3,color:E.gold,y:.8,segments:12}),qn(e,i,11,7,6.6,1.5),I1(i,"GENÈVE",10,.45,21.2,{scale:.96,depth:.8,color:E.offwhite,accent:E.red,facing:"north"}),v(i,{w:31,h:3.6,d:1.4,color:"#3f663d",x:10,y:1.85,z:22.45}),v(i,{w:31.5,h:.4,d:3.5,color:"#b63b31",x:10,y:.22,z:21.2});for(let l=0;l<17;l++)v(i,{w:1.55,h:.65,d:1.6,color:"#557d46",x:-2+l*1.45,y:.38,z:23.8});const a=[[-20,12],[-11,24],[25,10],[27,25],[9,29],[-22,3],[19,4]];for(const[l,h]of a){mt(i,{r:1.7,h:.18,color:"#81633e",x:l,y:.12,z:h,segments:14});for(let u=0;u<13;u++){const d=u*2.4;de(i,{r:.14,color:[E.red,E.yellow,E.pink,E.offwhite,E.orange][u%5],x:l+Math.cos(d)*(.4+u%4*.3),y:.38+u%3*.12,z:h+Math.sin(d)*(.4+u%3*.25),low:!0})}xn(i,l,.32,h,E.green,.28,.12)}const c=new At;c.position.set(-16,0,20),mt(c,{r:5.2,h:.6,color:"#d7cbb1",y:.3,segments:8});for(let l=0;l<7;l++){const h=l/7*Math.PI*2;mt(c,{r:.18,h:3.7,color:E.cream,x:Math.cos(h)*3.6,y:2.2,z:Math.sin(h)*3.6,segments:8})}return _n(c,{r:4.9,h:2.4,color:"#a54d3e",y:5.1,segments:8}),mt(c,{r:.24,h:.9,color:E.gold,y:6.7,segments:8}),de(c,{r:.32,color:E.gold,y:7.25,low:!0}),i.add(c),qn(e,i,-16,20,5.3,7),Se(i,-6,15,0),Se(i,18,15,Math.PI),Se(i,19,24,Math.PI),Se(i,-20,8,Math.PI/2),oo(e,i,-10,2,1.6,{water:"#44c2cc",color:"#c6bca5"}),Pe(i,-9,18,{h:5.2,flags:!0}),Pe(i,23,26,{h:5}),v(i,{w:3.8,h:1,d:1.6,color:E.white,x:-14,y:1.3,z:28}),de(i,{r:.7,color:E.white,x:-12.1,y:2.1,z:28,low:!0}),_n(i,{r:.24,h:.6,color:E.orange,x:-11.3,y:2.15,z:28,rz:-Math.PI/2}),v(i,{w:.22,h:2.2,d:.22,color:E.darkGrey,x:-20,y:1.1,z:11}),he(i,{x:-20,y:2.2,z:11,width:5.2,height:.72,text:"JARDIN ANGLAIS",bg:E.cream,color:E.ink,border:E.ink,font:'900 38px "Lilita One", sans-serif'}),{stop:{x:i.position.x+t.stopX-t.x,z:i.position.z+t.stopZ-t.z}}}function Ll(i,t,e,n,s,r,o,a){const c=[t,e,n-s/2,t,e,n+s/2,t,e+r,n,t-o,e,n-s/2,t-o,e+r,n,t-o,e,n+s/2,t,e,n-s/2,t-o,e,n-s/2,t,e+r,n,t-o,e,n-s/2,t-o,e+r,n,t,e+r,n,t,e,n+s/2,t,e+r,n,t-o,e,n+s/2,t-o,e,n+s/2,t,e+r,n,t-o,e+r,n,t,e,n-s/2,t,e,n+s/2,t-o,e,n-s/2,t-o,e,n-s/2,t,e,n+s/2,t-o,e,n+s/2],l=new Ae;l.setAttribute("position",new oe(c,3)),l.setAttribute("uv",new oe(new Array(c.length/3*2).fill(0),2)),l.computeVertexNormals();const h=new Bt(l,new Zn({color:a,roughness:.56,side:Le}));return h.castShadow=!0,h.receiveShadow=!0,i.add(h),h}const Dl={G:["1111","1000","1000","1011","1001","1001","1111"],E:["1111","1000","1000","1110","1000","1000","1111"],N:["1001","1101","1101","1011","1011","1001","1001"],V:["1001","1001","1001","1001","0110","0110","0110"]};function I1(i,t,e,n,s,{scale:r=.55,depth:o=.65,color:a=E.offwhite,accent:c=E.red,facing:l="south"}={}){const h=t.split(""),u=r*1.35,d=h.map(g=>g==="È"?4:g===" "?2:4),f=d.reduce((g,p)=>g+p,0)*r+(h.length-1)*u,m=new At;m.position.set(e,n,s),l==="north"&&(m.rotation.y=Math.PI);let x=-f/2;return h.forEach((g,p)=>{const S=g==="È"?"E":g,b=Dl[S]||Dl.E;if(S!==" ")for(let _=0;_<b.length;_++)for(let P=0;P<b[_].length;P++)b[_][P]==="1"&&v(m,{w:r*.92,h:r*.92,d:o,color:a,x:x+P*r,y:(6-_)*r,z:0});g==="È"&&v(m,{w:r*1.1,h:r*.25,d:o,color:c,x:x+r*1.45,y:7*r+r*.3,z:0}),x+=d[p]*r+u}),i.add(m),v(i,{w:f+1.2,h:.16,d:o+1,color:"#776a55",x:e,y:n-.08,z:s}),m}function L1(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d"),e=256;t.fillStyle="#f7f1e2",t.beginPath(),t.arc(e,e,252,0,Math.PI*2),t.fill(),t.lineWidth=12,t.strokeStyle="#1d292d",t.stroke();for(let o=0;o<60;o++){const a=o/60*Math.PI*2,c=o%5===0;t.beginPath(),t.moveTo(e+Math.cos(a)*(c?200:218),e+Math.sin(a)*(c?200:218)),t.lineTo(e+Math.cos(a)*232,e+Math.sin(a)*232),t.lineWidth=c?10:4,t.strokeStyle="#283a3c",t.stroke()}t.fillStyle="#283a3c",t.font='900 30px "Nunito", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("SBB",e,e+86),t.fillText("CFF",e,e+122);const n=(10+9/60)/12*Math.PI*2-Math.PI/2,s=9/60*Math.PI*2-Math.PI/2;t.lineCap="round",t.strokeStyle="#1c282b",t.lineWidth=25,t.beginPath(),t.moveTo(e,e),t.lineTo(e+Math.cos(n)*108,e+Math.sin(n)*108),t.stroke(),t.lineWidth=14,t.beginPath(),t.moveTo(e,e),t.lineTo(e+Math.cos(s)*168,e+Math.sin(s)*168),t.stroke(),t.lineWidth=8,t.beginPath(),t.moveTo(e,e),t.lineTo(e+Math.cos(s+2.2)*220,e+Math.sin(s+2.2)*220),t.strokeStyle="#c72e28",t.stroke(),t.beginPath(),t.arc(e,e,16,0,Math.PI*2),t.fillStyle="#c72e28",t.fill();const r=new Ii(i);return r.colorSpace=De,r.anisotropy=8,r}function D1(){const t=document.createElement("canvas");t.width=t.height=768;const e=t.getContext("2d"),n=768/2;e.fillStyle="#5d7c46",e.beginPath(),e.arc(n,n,768*.49,0,Math.PI*2),e.fill(),e.fillStyle="#4a6d3c",e.beginPath(),e.arc(n,n,768*.4,0,Math.PI*2),e.fill(),e.fillStyle="#f6efdb",e.beginPath(),e.arc(n,n,768*.375,0,Math.PI*2),e.fill();const s=er(33);for(let o=0;o<240;o++){const a=s()*Math.PI*2,c=768*(.402+s()*.071),l=4+s()*7;e.fillStyle=["#f8cf3d","#e55242","#f18ea0","#f8f4df","#d88b2d","#9b6bb5"][o%6],e.beginPath(),e.ellipse(n+Math.cos(a)*c,n+Math.sin(a)*c,l,l*.58,a,0,Math.PI*2),e.fill()}for(let o=0;o<60;o++){const a=o/60*Math.PI*2-Math.PI/2,c=o%5===0;e.strokeStyle=c?"#24312d":"#8e8976",e.lineWidth=c?7:2.2,e.beginPath(),e.moveTo(n+Math.cos(a)*768*(c?.296:.315),n+Math.sin(a)*768*(c?.296:.315)),e.lineTo(n+Math.cos(a)*768*.345,n+Math.sin(a)*768*.345),e.stroke()}e.fillStyle="#24312d",e.font='900 48px "Lilita One", "Arial Black", sans-serif',e.textAlign="center",e.textBaseline="middle";for(const[o,a]of[[12,-Math.PI/2],[3,0],[6,Math.PI/2],[9,Math.PI]])e.fillText(String(o),n+Math.cos(a)*768*.235,n+Math.sin(a)*768*.235);e.fillStyle="#c69b39",e.beginPath(),e.arc(n,n,768*.015,0,Math.PI*2),e.fill();const r=new Ii(t);return r.colorSpace=De,r.anisotropy=8,r}function U1(i,t,e){const{dynamic:n}=e;v(i,{w:22,h:.55,d:28,color:"#b9b4a6",x:0,y:-.2,z:0}),v(i,{w:20.6,h:.2,d:26.6,color:"#d1cbbd",x:0,y:.11,z:0});for(const[w,M]of[[-9.5,-12.5],[9.5,-12.5],[-9.5,12.5],[9.5,12.5],[0,-12.5]])mt(i,{r:.85,h:3.2,color:"#8f8b80",x:w,y:-1.2,z:M,segments:10});for(let w=-12.4;w<=12;w+=2.6)for(const M of[-10.1,10.1])v(i,{w:.12,h:1.4,d:.12,color:"#6d6b64",x:M,y:.85,z:w}),v(i,{w:.12,h:1.2,d:.12,color:"#6d6b64",x:M,y:.75,z:w});v(i,{w:.14,h:.12,d:25,color:"#75736c",x:-10.1,y:1.5,z:0}),v(i,{w:.14,h:.12,d:25,color:"#75736c",x:10.1,y:1.5,z:0}),v(i,{w:20,h:.12,d:.14,color:"#75736c",x:0,y:1.5,z:-12.5});const s=2.6,r=-4.8;mt(i,{r:6.2,h:.9,color:"#9f9b8f",x:s,y:.42,z:r,segments:28}),mt(i,{r:5.55,h:.3,color:"#3bb4c8",x:s,y:.9,z:r,segments:28,mat:Ot("#43bfd4",{roughness:.16,metalness:.12})}),zh(i,{r:5.75,tube:.21,color:"#79766c",x:s,y:.99,z:r,rx:-Math.PI/2}),qn(e,i,s,r,6.4,1.2),Pe(i,-8.1,10,{h:5.4,flags:!0}),Pe(i,8,9.2,{h:5.4}),Se(i,-8.2,4.4,Math.PI/2),he(i,{x:0,y:2.2,z:13,width:9.5,height:1.7,text:"JET D'EAU",bg:"#e6f4f1",color:"#136a82",border:E.ink,font:'900 68px "Lilita One", "Arial Black", sans-serif',frame:E.ink}),ai(i,e,t,{x:-3,z:2,label:"JET D'EAU"});const o=new At;o.position.set(i.position.x+s,.9,i.position.z+r),o.rotation.z=.06,n.add(o);const a=new mn({color:"#f3feff",transparent:!0,opacity:.42,depthWrite:!1,side:Le,blending:yi}),c=new Bt(new tn(.34,.58,36,10,2,!0),a);c.position.y=18,o.add(c);const l=new mn({color:"#ecfdff",transparent:!0,opacity:.052,depthWrite:!1,side:Le,blending:si}),h=new Bt(new tn(4.1,.55,18,18,1,!0),l);h.position.y=33,o.add(h);const u=new Bt(new tn(6.3,1,15,18,1,!0),new mn({color:"#e8fcff",transparent:!0,opacity:.026,depthWrite:!1,side:Le,blending:si}));u.position.y=37,o.add(u);const d=new Bt(new gs(4.7,.28,8,28),new mn({color:"#e8feff",transparent:!0,opacity:.7,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.15,o.add(d);const f=780,m=new Float32Array(f*3),x=[];for(let w=0;w<f;w++)x.push({a:Math.random()*Math.PI*2,rad:Math.random()*1.8,h:Math.random()*54,speed:8+Math.random()*12,drift:.2+Math.random()*.8});const g=new Ae;g.setAttribute("position",new He(m,3));const p=document.createElement("canvas");p.width=p.height=32;const S=p.getContext("2d"),b=S.createRadialGradient(16,16,0,16,16,16);b.addColorStop(0,"rgba(255,255,255,1)"),b.addColorStop(.45,"rgba(220,250,255,.8)"),b.addColorStop(1,"rgba(210,248,255,0)"),S.fillStyle=b,S.fillRect(0,0,32,32);const _=new Ii(p),P=new Bd(g,new fh({size:1.3,map:_,transparent:!0,opacity:.82,depthWrite:!1,blending:yi,sizeAttenuation:!0}));o.add(P);const A=_.clone();A.needsUpdate=!0;const C=new $r(new Xs({map:A,color:"#e2fbff",transparent:!0,opacity:.22,depthWrite:!1,blending:yi}));C.position.set(0,25,0),C.scale.set(25,25,1),o.add(C);const D=new $r(new Xs({map:A,color:"#e7fbff",transparent:!0,opacity:.15,depthWrite:!1,blending:yi}));return D.position.set(0,40,0),D.scale.set(44,32,1),o.add(D),n.userData.updates.push((w,M)=>{o.rotation.z=.055+Math.sin(M*.45)*.018,c.scale.x=c.scale.z=1+Math.sin(M*1.7)*.05,h.scale.x=h.scale.z=1+Math.sin(M*.8)*.04,u.scale.x=u.scale.z=1+Math.sin(M*.55+1)*.06;for(let L=0;L<f;L++){const N=x[L],X=(M*N.speed+N.h*4.2)%52,F=3+X*.78,O=.55+X*.155*N.drift;m[L*3]=Math.cos(N.a+M*.25)*(O+N.rad),m[L*3+1]=F,m[L*3+2]=Math.sin(N.a+M*.25)*(O+N.rad)}g.attributes.position.needsUpdate=!0,d.scale.setScalar(1+Math.sin(M*2.2)*.06),d.material.opacity=.55+Math.sin(M*2.5)*.12,C.material.opacity=.12+Math.sin(M*.8)*.04,C.scale.setScalar(24+Math.sin(M*.5)*3),D.material.opacity=.2+Math.sin(M*.55+2)*.05}),{stop:{x:i.position.x+t.stopX-t.x,z:i.position.z+t.stopZ-t.z}}}function z1(i,t,e){const{dynamic:n}=e;v(i,{w:26,h:.45,d:20,color:"#9b7a4f",x:0,y:-.11,z:0}),v(i,{w:26,h:.15,d:20,color:"#c3a06c",x:0,y:.15,z:0});for(let a=0;a<24;a++)v(i,{w:.12,h:.03,d:20,color:"#a88a5d",x:-12+a*1.05,y:.235,z:0});for(const[a,c]of[[-11.5,-8.5],[11.5,-8.5],[-11.5,8.5],[11.5,8.5],[0,-8.5],[0,8.5],[-11.5,0],[11.5,0]])mt(i,{r:.55,h:4,color:"#6e5337",x:a,y:-1.5,z:c,segments:9});new At().position.set(-1,0,-6.2),v(i,{w:19,h:3.2,d:6.5,color:"#efe6cd",x:-1,y:2.1,z:-6.2});for(let a=0;a<10;a++)v(i,{w:1.2,h:2.5,d:.12,color:E.red,x:-9.4+a*1.85,y:2,z:-2.93}),v(i,{w:1.2,h:2.5,d:.12,color:E.red,x:-9.4+a*1.85,y:2,z:-9.47});v(i,{w:19.7,h:.32,d:7.2,color:"#397b73",x:-1,y:3.82,z:-6.2});const r=new Bt(new tn(3.8,3.8,19.7,3,1,!1),Ot("#397b73",{flatShading:!0}));r.rotation.z=Math.PI/2,r.rotation.x=Math.PI/6,r.position.set(-1,4.45,-6.2),r.scale.set(1,.5,1),i.add(r);for(let a=0;a<5;a++)v(i,{w:1.5,h:1.2,d:.12,color:E.glass,x:-6.8+a*3,y:2.35,z:-2.9});he(i,{x:-1,y:4,z:-2.8,width:16,height:1.4,text:"BAINS DES PÂQUIS",bg:"#f4e2b9",color:"#1c3836",border:E.ink,font:'900 53px "Lilita One", "Arial Black", sans-serif'}),Ee(e,i,-1,-6.2,19,6.5,5);const o=new At;o.position.set(9.2,0,-1.5);for(const[a,c]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])v(o,{w:.28,h:9.3,d:.28,color:"#e9e0ce",x:a,y:4.65,z:c}),v(o,{w:.2,h:.2,d:3.2,color:E.red,x:a,y:3.2,z:c});v(o,{w:4.3,h:.3,d:4.3,color:"#d8d0be",y:4.75,z:0}),v(o,{w:4.6,h:.35,d:4.6,color:"#f1ead8",y:9.25,z:0}),v(o,{w:1.5,h:.3,d:4.5,color:"#dad3c2",y:9.25,z:3.2}),v(o,{w:.16,h:1,d:.16,color:E.red,x:-1.8,y:9.8,z:-1.8}),v(o,{w:.16,h:1,d:.16,color:E.red,x:1.8,y:9.8,z:-1.8}),v(o,{w:1.7,h:.1,d:.1,color:E.red,x:0,y:10.2,z:-1.8});for(let a=0;a<7;a++)v(o,{w:.65,h:.1,d:.4,color:"#6e5941",x:-2.4,y:.8+a*1.15,z:0});i.add(o),Ee(e,i,9.2,-1.5,5,5,10),oi(i,5.8,4.4,{color:E.yellow,scale:.9}),oi(i,8.2,6,{color:E.blue,scale:.8}),Se(i,-5.8,5.2,0),Se(i,2,7.1,0),v(i,{w:4,h:2.7,d:2.5,color:"#dfd4b9",x:-9.4,y:1.75,z:6.2}),v(i,{w:1.1,h:2,d:.12,color:E.darkGreen,x:-9.4,y:1.65,z:7.47}),he(i,{x:-9.4,y:3.1,z:7.5,width:3.2,height:.7,text:"CABINE 3",bg:"#e7ddc6",color:"#3e3f38",border:E.ink,font:'900 36px "Nunito", sans-serif',frame:"#867a65"}),Ee(e,i,-9.4,6.2,4.2,2.7,3);for(let a=0;a<7;a++)mt(i,{r:1.25-a*.09,h:.85,color:a%2?E.white:E.red,x:11.5,y:.8+a*.85,z:-8.3,segments:12});mt(i,{r:1.5,h:.38,color:"#3b3e3f",x:11.5,y:6.25,z:-8.3,segments:12}),de(i,{r:.82,color:"#f5e39e",x:11.5,y:6.7,z:-8.3,mat:Ot("#ffe7a3",{emissive:"#ffcf66",emissiveIntensity:.5}),low:!0}),qn(e,i,11.5,-8.3,1.5,7),Xn(i,-12.2,5,6.5,{type:"swiss",scale:1}),Xn(i,12.2,4.2,7,{type:"geneva",scale:.9}),Pe(i,-8.2,-.4,{h:5.6,flags:!0}),he(i,{x:0,y:2.2,z:11.8,width:10.5,height:1.6,text:"BAINS DES PÂQUIS",bg:"#f2e6ca",color:"#9e322b",border:E.ink,font:'900 58px "Lilita One", "Arial Black", sans-serif',frame:E.ink}),ai(i,e,t,{x:-3,z:5,label:"BAINS DES PÂQUIS"});for(const[a,c]of[[-17,-2],[17,9],[18,-14],[-18,12]])de(i,{r:.38,color:E.skin,x:a,y:-.42,z:c,low:!0}),mt(i,{r:.18,h:1,color:E.yellow,x:a,y:-.7,z:c,rz:Math.PI/2,segments:8});return i.children.filter(a=>a.isGroup),{stop:{x:i.position.x+t.stopX-t.x,z:i.position.z+t.stopZ-t.z}}}function N1(i,t,e){nr(i,0,7,62,46,"#c4b9a2"),mt(i,{r:15,h:.25,color:"#a69b87",x:0,y:.13,z:-6,segments:32});const n=new At;n.position.set(1,0,-39),v(n,{w:66,h:1.2,d:16,color:"#d9d9cf",y:.6}),v(n,{w:64,h:8.4,d:12,color:"#e8e5d7",y:5.1}),v(n,{w:65,h:.8,d:13,color:"#bfc2b6",y:9.5});for(let l=0;l<18;l++)v(n,{w:.65,h:7.1,d:.5,color:"#c5c8bd",x:-30.5+l*3.6,y:5.3,z:6.2});v(n,{w:23,h:11.5,d:10,color:"#ede9dc",x:0,y:6.5,z:-1.4}),_n(n,{r:9.2,h:6.5,color:"#a9b9ac",x:0,y:15.4,z:-1.4,segments:16}),de(n,{r:1.3,color:"#6ca7a0",x:0,y:18.8,z:-1.4,low:!0}),he(n,{x:0,y:10.5,z:4.1,width:19,height:1.5,text:"PALAIS DES NATIONS",bg:"#e7e6dc",color:"#3d4644",border:"#69726d",font:'900 44px "Lilita One", sans-serif',frame:"#b6b8ae"}),i.add(n),Ee(e,i,1,-39,66,16,15);const s=[E.blue,E.green,E.red,E.yellow,E.lavender,E.orange,E.white];for(let l=0;l<15;l++){const h=(l/14-.5)*2,u=h*34,d=-17-Math.cos(h*1.1)*5,f=s[l%s.length];Xn(i,u,0,d,{type:"generic",colorA:f,colorB:E.white,scale:.9}),v(i,{w:.5,h:.5,d:.5,color:"#aaa89c",x:u,y:.25,z:d})}const r=new At;r.position.set(-1.5,.3,-9),r.rotation.y=-.05,r.scale.setScalar(1.18);const o="#9a6737",a="#c3935b",c=9.2;for(const[l,h,u]of[[-4.6,3,!1],[4.6,3,!0],[-4.6,-2.6,!1],[4.6,-2.6,!1]]){const d=u?3.2:c;if(v(r,{w:1.15,h:d,d:1.4,color:o,x:l,y:d/2,z:h,rx:u?.04:.015,rz:u?-.03:0}),u){_n(r,{r:.68,h:1.7,color:a,x:l+.08,y:d+.9,z:h,rz:.16,segments:5}),_n(r,{r:.36,h:1.15,color:o,x:l-.2,y:d+.6,z:h+.35,rx:.55,segments:4});for(let f=0;f<4;f++)v(r,{w:.14,h:.65+f*.12,d:.14,color:o,x:l+(f-1.5)*.29,y:d+.25+f*.07,z:h+.1,rz:(f-1.5)*.22})}v(r,{w:1.9,h:.35,d:2.2,color:a,x:l,y:.17,z:h})}v(r,{w:1.6,h:.5,d:.5,color:a,x:-4.6,y:3.4,z:3}),v(r,{w:1,h:.35,d:.4,color:o,x:4.6,y:4.4,z:3,rz:.3}),v(r,{w:10.6,h:.95,d:7.2,color:o,y:9,z:.1}),v(r,{w:10.9,h:.25,d:7.6,color:a,y:9.55,z:.1}),Nh(r,0,9.7,.1,9.4,6.1,a,1.5,{max:20,r:.27,h:.12});for(const l of[-4.6,4.6])v(r,{w:1.15,h:10.5,d:1.4,color:o,x:l,y:14.25,z:-2.8,rx:-.14}),v(r,{w:1.6,h:.35,d:1.7,color:a,x:l,y:19.7,z:-3.5});for(const l of[11.5,13.6,15.7,17.6])v(r,{w:9.1,h:.85,d:.45,color:l%2?a:o,y:l,z:-2.95,rx:-.14});v(r,{w:10.6,h:.75,d:.6,color:a,y:20,z:-3.55,rx:-.14});for(const[l,h]of[[-3.3,1.3],[3.3,1.3],[-3.3,-1.2],[3.3,-1.2]])v(r,{w:.45,h:.55,d:5.1,color:a,x:l,y:5.1,z:h,rx:Math.PI/2});v(r,{w:8.3,h:.45,d:.5,color:"#5a351b",y:3,z:1.33}),v(r,{w:8.3,h:.45,d:.5,color:"#5a351b",y:3,z:-1.3}),v(r,{w:5.4,h:1.1,d:.2,color:"#d8c6a4",y:.85,z:5}),he(r,{x:0,y:.85,z:5.12,width:5,height:.8,text:"BROKEN CHAIR · 1997",bg:"#d8c6a4",color:"#3b3227",border:"#6e5b42",font:'900 32px "Nunito", sans-serif',frame:"#6e5b42",thickness:.04}),i.add(r),qn(e,i,-1.5,-9,6.8,22),Pe(i,-29,4,{h:6.4,flags:!0}),Pe(i,29,4,{h:6.4,flags:!0}),Se(i,-22,-11,Math.PI/2),Se(i,22,-11,-Math.PI/2),he(i,{x:0,y:2.4,z:27,width:13,height:2,text:"PLACE DES NATIONS",bg:"#f0ead9",color:"#324043",border:"#324043",font:'900 54px "Lilita One", "Arial Black", sans-serif',frame:E.ink}),ai(i,e,t,{x:4,z:13,label:"BROKEN CHAIR"}),v(i,{w:7,h:.2,d:3.2,color:"#888a80",x:22,y:3.2,z:12});for(const l of[-3.2,3.2])v(i,{w:.18,h:3.2,d:.18,color:"#6f726b",x:22+l,y:1.6,z:12});return v(i,{w:7,h:2.2,d:.12,color:E.glass,x:22,y:1.9,z:13.5}),Se(i,22,11.3,Math.PI),{stop:{x:i.position.x+t.stopX-t.x,z:i.position.z+t.stopZ-t.z}}}function F1(i,t,e){nr(i,0,6,70,46,"#b7ab97"),v(i,{w:8.4,h:2.3,d:1.2,color:"#c3b79f",x:-17,y:1.15,z:-13}),v(i,{w:9,h:.35,d:1.6,color:"#9c8e78",x:-17,y:2.4,z:-13}),he(i,{x:-17,y:1.6,z:-12.35,width:7.3,height:.9,text:"VIEILLE VILLE",bg:"#d7cbb5",color:"#3b3b32",border:E.ink,font:'900 44px "Lilita One", "Arial Black", sans-serif',frame:E.ink}),Ee(e,i,-17,-13,9,2.2,3);const n=new At;n.position.set(14,1.15,12),v(i,{w:28.5,h:1.6,d:37,color:"#a79b82",x:14,y:.35,z:12}),v(i,{w:27,h:.2,d:35.5,color:"#c2b393",x:14,y:1.18,z:12});for(let a=0;a<4;a++)v(i,{w:6.8-a*1.2,h:.2,d:12,color:"#bcae92",x:-1.2+a*.6,y:.12+a*.24,z:12});for(const a of[-6.2,34.2])v(i,{w:.8,h:1.4,d:31,color:"#b3a58a",x:a,y:1.45,z:12});const s="#c8b58d",r="#d8c7a4";v(n,{w:23,h:1,d:31,color:"#9d9078",y:.5}),v(n,{w:17,h:13,d:25,color:s,y:6.6}),v(n,{w:17.8,h:.55,d:26,color:r,y:13.4}),v(n,{w:19,h:.55,d:26,color:"#aa9a7a",y:.7}),v(n,{w:15.5,h:.5,d:23,color:"#5b7f70",y:14.6});for(let a=0;a<6;a++)v(n,{w:18,h:3,d:1.1,color:"#a69577",x:0,y:7,z:-10+a*4});for(const a of[-5.6,5.6])v(n,{w:7.2,h:21,d:7.2,color:r,x:a,y:10.5,z:-13.8}),v(n,{w:7.8,h:.55,d:7.8,color:"#b3a284",x:a,y:21.2,z:-13.8}),v(n,{w:5.5,h:5.4,d:5.2,color:s,x:a,y:23.8,z:-13.8}),_n(n,{r:4.2,h:8.8,color:"#4d8874",x:a,y:30.5,z:-13.8,segments:8}),mt(n,{r:.25,h:1.8,color:E.gold,x:a,y:35.6,z:-13.8,segments:8}),v(n,{w:3.2,h:5.6,d:.16,color:E.glass,x:a,y:10.5,z:-10.16}),mt(n,{r:1.6,h:.16,color:E.glass,x:a,y:13.3,z:-10.15,rx:Math.PI/2,segments:16}),v(n,{w:3.8,h:.22,d:.4,color:E.ink,x:a,y:7.7,z:-10});mt(n,{r:2.9,h:.18,color:"#7b4f46",x:0,y:11.4,z:-10.25,rx:Math.PI/2,segments:24}),mt(n,{r:2.35,h:.22,color:"#77a5ad",x:0,y:11.4,z:-10.1,rx:Math.PI/2,segments:24});for(let a=0;a<8;a++)v(n,{w:.12,h:4.6,d:.2,color:"#64423b",x:0,y:11.4,z:-10,rz:a*Math.PI/8});v(n,{w:3.5,h:4.3,d:.2,color:"#493a30",x:0,y:2.8,z:-10.2}),v(n,{w:4.7,h:.7,d:1.2,color:"#a79678",x:0,y:.8,z:-9.5}),mt(n,{r:4.2,h:2.4,color:"#5d8978",x:0,y:16.8,z:2,segments:12}),de(n,{r:4,color:"#4d8874",x:0,y:19.2,z:2,low:!0}),_n(n,{r:.8,h:4.3,color:"#4d8874",x:0,y:23.8,z:2,segments:8}),v(n,{w:.24,h:1.5,d:.24,color:E.gold,x:0,y:26.3,z:2});for(let a=0;a<4;a++){const c=4+a*4.2;v(n,{w:.14,h:5.4,d:2.1,color:"#42636a",x:-8.55,y:10.1,z:c}),v(n,{w:.18,h:5.9,d:2.7,color:"#a89778",x:-8.58,y:10.1,z:c}),v(n,{w:.2,h:5.2,d:1.55,color:"#77a5ad",x:-8.6,y:10.1,z:c}),mt(n,{r:1.05,h:.2,color:"#77a5ad",x:-8.59,y:12.75,z:c,rx:Math.PI/2,segments:12})}mt(n,{r:1.1,h:.16,color:"#d8c8aa",x:-8.4,y:7.1,z:7,rx:Math.PI/2,segments:18}),v(n,{w:.22,h:.95,d:.15,color:E.ink,x:-8.3,y:7.1,z:7}),v(n,{w:.2,h:.6,d:.12,color:E.ink,x:-8.28,y:7.3,z:7.32}),he(n,{x:0,y:5.8,z:-10,width:5.6,height:.7,text:"ST-PIERRE",bg:"#d8c8a9",color:"#4a4436",border:"#6f6553",font:'900 34px "Nunito", sans-serif',frame:"#6f6553"}),i.add(n),Ee(e,i,14,12,23,31,25);const o=[[-27,-2,9,11,10.5,"#d99d76","#7e4e39",E.red],[-19,21,9,8,12,"#b7c39f","#755d48",E.green],[-25,27,10,8,9.5,"#e3c89b","#955d43",E.blue],[24,-4,9,11,13,"#d9b787","#7c5440",E.yellow],[26,12,9,9,10.5,"#d7c4a5","#996047",E.red],[16,34,13,8,11,"#c5b492","#6b5545",E.green],[-6,35,11,8,10,"#d6a681","#8e5940",E.blue]];for(const[a,c,l,h,u,d,f,m]of o)Tn(i,{x:a,z:c,w:l,d:h,h:u,color:d,roof:f,floors:u>11?4:3,awning:m,dormer:!0}),Ee(e,i,a,c,l+.6,h+.6,u+3);return oo(e,i,-3,2,2.4,{water:"#4bbac5"}),Pe(i,-14,-5,{h:5.7,flags:!0}),Pe(i,6,12,{h:6.2,flags:!0}),Pe(i,-19,14,{h:4.8}),Se(i,-15,8,Math.PI/2),Se(i,8,25,Math.PI),oi(i,17,20,{color:E.red,scale:.9}),oi(i,22,23,{color:E.yellow,scale:.8}),he(i,{x:-4,y:3.1,z:-9.5,width:7,height:1.2,text:"BOURG-DE-FOUR",bg:"#efe1c4",color:"#4a4332",border:E.ink,font:'900 40px "Lilita One", "Arial Black", sans-serif'}),Tn(i,{x:34,z:18,w:9,d:13,h:12.5,color:"#d3a176",roof:"#7b4c39",floors:4,awning:E.green,dormer:!0}),Ee(e,i,34,18,9,13,15),Tn(i,{x:-35,z:16,w:9,d:11,h:10.5,color:"#bcc8a8",roof:"#7b5a44",floors:3,awning:E.red,dormer:!0}),Ee(e,i,-35,16,9,11,13),Tn(i,{x:25,z:43,w:13,d:9,h:10,color:"#e1c497",roof:"#8f5b42",floors:3,awning:E.blue}),Ee(e,i,25,43,13,9,12.5),ai(i,e,t,{x:-4,z:-8,label:"VIEILLE VILLE"}),{stop:{x:i.position.x+t.stopX-t.x,z:i.position.z+t.stopZ-t.z}}}function O1(i,t,e){nr(i,0,7,60,46,"#bdb4a4");const n=new At;n.position.set(-23,0,3),v(n,{w:15,h:2.3,d:26,color:"#b9b8b0",y:1.2}),v(n,{w:13.5,h:10.4,d:23,color:"#e2d2b5",y:6.2}),v(n,{w:14.3,h:.8,d:24,color:"#c4ae8a",y:11.1}),v(n,{w:12,h:2.8,d:10,color:"#4f6f68",y:12.6,z:-1.5}),v(n,{w:9,h:2.2,d:7,color:"#5d7d74",y:14.9,z:-1.5}),de(n,{r:3.2,color:"#5c887b",x:0,y:15.5,z:2,low:!0}),v(n,{w:2.8,h:.5,d:18,color:"#a29b8f",x:7.5,y:.35,z:0});for(let a=0;a<6;a++)mt(n,{r:.55,h:7.7,color:"#e5e0d5",x:7.6,y:4.35,z:-7.4+a*2.95,segments:12}),v(n,{w:1.5,h:.25,d:1.5,color:"#bbb7ac",x:7.6,y:.68,z:-7.4+a*2.95});v(n,{w:2.3,h:.8,d:18,color:"#d6d1c5",x:7.6,y:8.65,z:0}),v(n,{w:3.3,h:.7,d:19,color:"#aaa69b",x:7.3,y:9.4,z:0}),Ll(n,7.8,9.9,0,19.5,2.5,2.4,"#e8dcc3"),Ll(n,8.02,10.05,0,17.2,1.85,.22,"#5f7e70"),mt(n,{r:.8,h:.22,color:E.gold,x:8.15,y:10.9,z:0,rx:Math.PI/2,segments:16}),v(n,{w:.16,h:1.25,d:.12,color:E.offwhite,x:8.28,y:10.9,z:0}),v(n,{w:.12,h:.8,d:.75,color:E.offwhite,x:8.28,y:10.9,z:-.32}),v(n,{w:2.7,h:.32,d:20.4,color:"#a9a69b",x:7.5,y:9.7,z:0}),v(n,{w:2.9,h:.25,d:21,color:"#c6c1b5",x:7.2,y:9.48,z:0}),he(n,{x:8.02,y:9.28,z:0,ry:Math.PI/2,width:12,height:1.25,text:"GRAND THÉÂTRE",bg:"#d9d4c8",color:"#43514b",border:"#5c625d",font:'900 48px "Lilita One", "Arial Black", sans-serif',frame:"#a5a297"}),he(n,{x:7.9,y:2.2,z:0,ry:Math.PI/2,width:7.8,height:.85,text:"OPÉRA · BALLET",bg:"#e6dfd1",color:"#45605a",border:"#7c8179",font:'900 31px "Nunito", sans-serif',frame:"#a5a297"}),Xn(n,5,11.5,-8.5,{type:"swiss",scale:1.1}),Xn(n,5,11.5,8.5,{type:"geneva",scale:1.1});for(const a of[-5.4,0,5.4])v(n,{w:.42,h:2.7,d:.16,color:"#a53c32",x:8.55,y:6.8,z:a}),v(n,{w:.48,h:.32,d:.2,color:E.gold,x:8.55,y:8.2,z:a});i.add(n),Ee(e,i,-23,3,17,27,17);const s=new At;s.position.set(2,0,19),v(s,{w:4.5,h:1.2,d:4.5,color:"#a39c8d",y:.6}),v(s,{w:3.8,h:1,d:3.8,color:"#bab3a4",y:1.7}),v(s,{w:2.4,h:2.4,d:3.6,color:"#8b877c",y:3.4}),v(s,{w:1.4,h:1.2,d:2.9,color:"#8b877c",x:0,y:4.8,z:.2}),v(s,{w:.9,h:2.6,d:.9,color:"#6e716b",x:-1.2,y:2.1,z:-1.2}),v(s,{w:.9,h:2.6,d:.9,color:"#6e716b",x:1.2,y:2.1,z:-1.2}),v(s,{w:.9,h:2.6,d:.9,color:"#6e716b",x:-1.2,y:2.1,z:1.2}),v(s,{w:.9,h:2.6,d:.9,color:"#6e716b",x:1.2,y:2.1,z:1.2}),v(s,{w:1.5,h:2.2,d:1.2,color:"#6e716b",x:0,y:4.7,z:-1.9}),v(s,{w:1,h:1.7,d:1.3,color:"#565d58",x:0,y:4.2,z:-2.5,rx:-.2}),v(s,{w:.9,h:1,d:.9,color:"#d0b081",x:0,y:5.95,z:-2.9}),v(s,{w:1.2,h:.3,d:1,color:"#414c4a",x:0,y:6.55,z:-2.9}),v(s,{w:.35,h:1.4,d:.35,color:"#755a45",x:0,y:5.9,z:-2.2,rz:-.15}),i.add(s),qn(e,i,2,19,3.2,7);const r=new At;r.position.set(-4,0,-22),v(r,{w:22,h:.8,d:12,color:"#aaa394",y:.4}),v(r,{w:19,h:8.6,d:10,color:"#d9d2c3",y:5.1}),v(r,{w:20,h:.6,d:11,color:"#b4b1a5",y:9.5});for(let a=0;a<5;a++)mt(r,{r:.38,h:5.1,color:"#e7e0d2",x:-6+a*3,y:3.5,z:5.4,segments:10}),v(r,{w:1.1,h:.25,d:.45,color:"#b4b1a5",x:-6+a*3,y:6.2,z:5.4});v(r,{w:12,h:2.2,d:1,color:"#4e7168",y:8.4,z:2});for(const a of[-1,1])for(let c=0;c<3;c++)v(r,{w:.16,h:2.6,d:1.7,color:"#42636a",x:a*9.58,y:4.8,z:-2.4+c*3}),v(r,{w:.2,h:.18,d:2.1,color:"#aaa395",x:a*9.62,y:3.36,z:-2.4+c*3});for(let a=0;a<5;a++)v(r,{w:1.8,h:2.8,d:.16,color:"#42636a",x:-6.8+a*3.4,y:5,z:-5.04}),v(r,{w:2.2,h:.2,d:.22,color:"#aaa395",x:-6.8+a*3.4,y:3.42,z:-5.08});he(r,{x:0,y:4.4,z:-5.1,ry:Math.PI,width:11,height:1,text:"MUSÉE RATH",bg:"#d9d2c3",color:"#52594f",border:"#74786f",font:'900 38px "Lilita One", sans-serif',frame:"#a5a093"}),he(r,{x:0,y:7.2,z:5.85,width:10,height:.85,text:"MUSÉE RATH",bg:"#d9d2c3",color:"#52594f",border:"#74786f",font:'900 34px "Lilita One", sans-serif',frame:"#a5a093"}),v(r,{w:1.2,h:.4,d:10.5,color:"#aaa395",x:10.6,y:.3,z:0});for(let a=0;a<4;a++)mt(r,{r:.42,h:4.9,color:"#e7e0d2",x:11.2,y:3,z:-3.9+a*2.6,segments:10}),v(r,{w:.85,h:.22,d:.85,color:"#bbb3a3",x:11.2,y:.55,z:-3.9+a*2.6});v(r,{w:1.4,h:.55,d:10.6,color:"#d8d0c1",x:11,y:5.7,z:0}),he(r,{x:11.35,y:6.9,z:0,ry:Math.PI/2,width:7.5,height:.8,text:"MUSÉE RATH",bg:"#d9d2c3",color:"#52594f",border:"#74786f",font:'900 34px "Lilita One", sans-serif',frame:"#a5a093"}),v(r,{w:2,h:.35,d:10.8,color:"#aaa395",x:10.9,y:7.55,z:0}),i.add(r),Ee(e,i,-4,-22,22,12,10);const o=new At;o.position.set(18,0,19),mt(o,{r:5.3,h:.45,color:"#c8b08b",y:.25,segments:16}),mt(o,{r:.4,h:5.4,color:E.gold,y:3,segments:10});for(let a=0;a<8;a++){const c=a/8*Math.PI*2;mt(o,{r:.08,h:4.3,color:E.gold,x:Math.cos(c)*4.5,y:2.6,z:Math.sin(c)*4.5,segments:6}),v(o,{w:1.1,h:1.4,d:.2,color:a%2?E.red:E.blue,x:Math.cos(c)*4.5,y:2.8,z:Math.sin(c)*4.5,ry:-c})}_n(o,{r:6,h:2.7,color:"#c33f39",y:6.9,segments:12});for(let a=0;a<12;a++){const c=a/12*Math.PI*2;mt(o,{r:.1,h:.25,color:E.white,x:Math.cos(c)*5.2,y:7.1,z:Math.sin(c)*5.2,segments:6}),de(o,{r:.18,color:E.yellow,x:Math.cos(c)*5.3,y:6.7,z:Math.sin(c)*5.3,low:!0})}return mt(o,{r:.2,h:1.1,color:E.gold,y:8.7,segments:8}),i.add(o),qn(e,i,18,19,5.8,8),Se(i,-11,9,Math.PI/2),Se(i,13,9,-Math.PI/2),Pe(i,4,-6,{h:6.2,flags:!0}),Pe(i,15,3,{h:5.5}),Pe(i,-13,15,{h:5.5}),he(i,{x:7,y:2.3,z:6,width:8,height:1.3,text:"PLACE DE NEUVE",bg:"#f0e7d3",color:"#393e38",border:E.ink,font:'900 44px "Lilita One", "Arial Black", sans-serif'}),Tn(i,{x:31,z:28,w:10,d:12,h:11,color:"#d2c29d",roof:"#6e5a4b",floors:3,awning:E.green,dormer:!0}),Ee(e,i,31,28,10,12,14),Tn(i,{x:-40,z:24,w:10,d:12,h:11.5,color:"#dbc09b",roof:"#925b43",floors:3,awning:E.blue}),Ee(e,i,-40,24,10,12,14),oi(i,22,11,{color:E.yellow,scale:.8}),oi(i,-14,28,{color:E.red,scale:.7}),ai(i,e,t,{x:6,z:3,label:"PLACE DE NEUVE"}),{stop:{x:i.position.x+t.stopX-t.x,z:i.position.z+t.stopZ-t.z}}}function B1(i,t,e){v(i,{w:4.8,h:.06,d:44,color:"#d3c6a9",x:1,y:.075,z:6}),v(i,{w:52,h:.06,d:4,color:"#d0c3a6",x:-2,y:.072,z:12}),v(i,{w:3.6,h:.06,d:26,color:"#cfc2a5",x:-22,y:.073,z:8});const n=new At;n.position.set(-1,0,23),v(n,{w:46,h:1.2,d:4.2,color:"#8c806c",y:.6,z:0}),v(n,{w:44,h:10.2,d:2.8,color:"#cdbb95",y:5.8,z:0}),v(n,{w:45,h:.7,d:3.4,color:"#a69779",y:.6,z:.2}),v(n,{w:45,h:.8,d:3.5,color:"#b8a989",y:10.8,z:.1}),v(n,{w:46,h:.35,d:3.8,color:"#d7c8aa",y:11.3,z:0});for(const l of[-22,-16.5,-11,-5.5,0,5.5,11,16.5,22])v(n,{w:.8,h:9.2,d:3.2,color:"#b7a787",x:l,y:5.6,z:.2}),v(n,{w:1.35,h:.4,d:3.5,color:"#a19072",x:l,y:9.8,z:.2});v(n,{w:29,h:.12,d:.35,color:"#e8dcc1",x:0,y:9.15,z:2.1}),he(n,{x:0,y:9.85,z:1.68,width:28,height:1.2,text:"POST TENEBRAS LUX",bg:"#c9b996",color:"#423b2f",border:"#aa997a",frame:"#aa997a",thickness:.05,font:'900 50px "Nunito", sans-serif'});const s=["book","stand","book","stand"],r=["FAREL","CALVIN","BÈZE","KNOX"];for(let l=0;l<4;l++){const h=-13.6+l*9.1;v(n,{w:7,h:1.4,d:2.2,color:"#a99a7d",x:h,y:1.5,z:2.8}),v(n,{w:6.6,h:.2,d:1.9,color:"#8e8068",x:h,y:2.25,z:2.8}),v(n,{w:5.8,h:6.2,d:.35,color:"#4c5147",x:h,y:5,z:1.75}),v(n,{w:5.2,h:4.1,d:.32,color:"#74796c",x:h,y:4.6,z:2.05});const u=M1({robe:l%2?"#9c9f93":"#b2b2a4",hat:"#70776d",scale:1.32,pose:s[l]});u.position.set(h,2.2,2.75),u.rotation.y=0,n.add(u),he(n,{x:h,y:2.75,z:3.93,width:4.4,height:.42,text:r[l],bg:"#b9a887",color:"#433b2d",border:"#9c8a6e",frame:"#9c8a6e",thickness:.03,font:'900 28px "Nunito", sans-serif'})}n.rotation.y=Math.PI,i.add(n);for(let l=0;l<3;l++)v(i,{w:44-l*2,h:.22,d:2,color:"#ab9f87",x:-1,y:.12+l*.15,z:17.2+l*1.5});Ee(e,i,-1,23,47,6,12);const o=new At;o.position.set(-2,0,42),v(o,{w:58,h:1.1,d:16,color:"#bcb19b",y:.55}),v(o,{w:55,h:11.4,d:13,color:"#dfd5be",y:6.4}),v(o,{w:56,h:.6,d:14,color:"#b9b09b",y:12.4}),v(o,{w:26,h:3.5,d:9,color:"#cdc1a5",y:14.6,z:-1}),v(o,{w:20,h:2,d:6,color:"#5f7f76",y:17.2,z:-1});for(let l=0;l<14;l++)v(o,{w:1.6,h:2.8,d:.15,color:E.glass,x:-23+l*3.5,y:7.2,z:6.58}),v(o,{w:2,h:.2,d:.4,color:"#b9ad95",x:-23+l*3.5,y:5.7,z:6.5});he(o,{x:0,y:4.5,z:6.65,width:26,height:1.1,text:"UNIVERSITÉ DE GENÈVE",bg:"#dfd5be",color:"#4e5148",border:"#8b8677",font:'900 41px "Lilita One", sans-serif',frame:"#9b9382"}),o.rotation.y=Math.PI,i.add(o),Ee(e,i,-2,42,58,16,16);const a=new At;a.position.set(-24,0,4),v(a,{w:14.5,h:.16,d:14.5,color:"#6e6b5d",y:.09});for(let l=0;l<8;l++)for(let h=0;h<8;h++)v(a,{w:1.65,h:.08,d:1.65,color:(l+h)%2?"#e8ddc3":"#403f38",x:-7.7+1.7*(l+.5),y:.18,z:-7.7+1.7*(h+.5),cast:!1});const c=[[-4.2,-3.5,"rook",E.white],[3.8,-3.6,"king",E.white],[1.2,1.8,"pawn",E.white],[-2.3,4,"knight",E.black],[4.1,2.7,"queen",E.black],[-4.8,2.2,"pawn",E.black]];for(const[l,h,u,d]of c)k1(a,l,h,u,d);return i.add(a),qn(e,i,-24,4,8,2.5),v(i,{w:.7,h:5.4,d:.7,color:"#9e927c",x:-5.2,y:2.7,z:-22}),v(i,{w:.7,h:5.4,d:.7,color:"#9e927c",x:5.2,y:2.7,z:-22}),v(i,{w:11.2,h:.45,d:.75,color:"#9e927c",x:0,y:5.3,z:-22}),he(i,{x:0,y:4.95,z:-21.6,width:10,height:.9,text:"PARC DES BASTIONS",bg:"#cabc9e",color:"#444237",border:"#6f6756",font:'900 36px "Lilita One", sans-serif',frame:"#6f6756"}),oo(e,i,14,7,1.9,{water:"#4bbac4",color:"#b7af9d"}),Se(i,-13,14,0),Se(i,7,15,0),Se(i,-8,18,0),Pe(i,-8,14,{h:5.8,flags:!0}),Pe(i,8,11,{h:5.4}),Pe(i,9,26,{h:5.5}),ai(i,e,t,{x:3,z:-5,label:"PARC DES BASTIONS"}),{stop:{x:i.position.x+t.stopX-t.x,z:i.position.z+t.stopZ-t.z}}}function k1(i,t,e,n,s){const r=new At;if(r.position.set(t,.25,e),v(r,{w:1.35,h:.25,d:1.35,color:s,y:.12}),mt(r,{r:.5,h:.8,color:s,y:.65,segments:10}),n==="pawn")de(r,{r:.55,color:s,y:1.25,low:!0});else if(n==="rook")mt(r,{r:.5,h:1.3,color:s,y:1.3,segments:10}),v(r,{w:1.15,h:.3,d:1.15,color:s,y:2});else if(n==="king")mt(r,{r:.55,h:1.6,color:s,y:1.5,segments:10}),de(r,{r:.5,color:s,y:2.4,low:!0}),v(r,{w:.16,h:.75,d:.16,color:E.gold,y:2.95}),v(r,{w:.55,h:.15,d:.16,color:E.gold,y:3.05});else if(n==="queen"){mt(r,{r:.5,h:1.6,color:s,y:1.45,segments:10}),mt(r,{r:.7,h:.3,color:s,y:2.4,segments:12});for(let o=0;o<5;o++)de(r,{r:.14,color:s,x:Math.cos(o/5*Math.PI*2)*.58,y:2.65,z:Math.sin(o/5*Math.PI*2)*.58,low:!0})}else n==="knight"&&(v(r,{w:.9,h:1.2,d:1.2,color:s,y:1.25}),v(r,{w:.65,h:.8,d:.7,color:s,x:.22,y:2,z:.25,rx:.2}),v(r,{w:.3,h:.25,d:.6,color:s,x:.1,y:2.35,z:.45}));i.add(r)}const ns=[[-320,-640],[310,-640],[302,-592],[282,-538],[258,-480],[234,-424],[212,-373],[193,-329],[177,-288],[164,-250],[154,-216],[148,-187],[142,-166],[135,-151],[121,-133],[105,-113],[89,-93],[73,-73],[58,-56],[43,-41],[-10,-33],[-60,-27],[-110,-21],[-160,-16],[-220,-13],[-320,-10]],is=[[-320,30],[-220,18],[-160,10],[-110,4],[-70,-3],[-30,-11],[10,-19],[48,-27],[58,-20],[68,-14],[79,-7],[89,-2],[99,-7],[110,-16],[122,-25],[135,-34],[148,-44],[160,-53],[170,-61],[178,-69],[195,-38],[212,-4],[233,42],[258,96],[290,170],[322,250],[340,310],[-320,310]],Bh=[[[38.4,-46],[48.6,-46],[54,-23],[43.8,-23]],[[-123,-14],[-111,-14],[-105,5],[-117,8]],[[136,-174],[162,-174],[162,-152],[136,-152]],[[170,-94],[190,-94],[190,-68],[170,-68]]],ds=[{id:"nations",name:"Avenue de la Paix",width:10,kind:"artery",points:[[-148,-497],[-144,-460],[-136,-415],[-126,-365],[-114,-311],[-100,-256],[-96,-220],[-105,-190],[-120,-172],[-130,-158],[-115,-151],[-79,-151]]},{id:"station",name:"Rue de Lausanne",width:9.5,kind:"artery",points:[[-140,-152],[-110,-151],[-79,-151],[-44,-151],[-4,-151],[36,-152],[75,-150],[105,-152],[126,-154],[135,-151]]},{id:"quaiNord",name:"Quai des Bergues",width:8,kind:"quay",points:[[-230,-17],[-190,-15],[-150,-17],[-110,-21],[-75,-25],[-35,-30],[0,-35],[24,-38],[43,-43]]},{id:"quaiLacNord",name:"Quai du Mont-Blanc",width:9,kind:"quay",points:[[43,-44],[53,-49],[65,-58],[78,-69],[91,-82],[104,-97],[116,-114],[127,-132],[135,-150],[142,-169],[151,-191],[165,-216],[184,-249],[205,-291],[230,-346],[255,-411],[280,-490],[300,-570]]},{id:"chantepoulet",name:"Rue de Chantepoulet",width:8,kind:"street",points:[[-79,-151],[-65,-136],[-50,-120],[-34,-104],[-18,-88],[-2,-72],[14,-59],[29,-49],[43,-43]]},{id:"pont",name:"Pont du Mont-Blanc",width:11,kind:"bridge",points:[[43,-44],[45,-35],[48,-26],[50,-20]]},{id:"quaiSud",name:"Quai du Rhône",width:8,kind:"quay",points:[[-230,24],[-190,20],[-150,14],[-110,8],[-75,3],[-35,-3],[0,-10],[25,-17],[48,-26]]},{id:"quaiLacSud",name:"Quai Gustave-Ador",width:9,kind:"quay",points:[[48,-26],[57,-18],[67,-11],[78,-3],[88,2],[99,-3],[110,-11],[122,-20],[134,-30],[146,-40],[157,-49],[167,-57],[174,-68]]},{id:"corraterie",name:"Rue de la Corraterie",width:8,kind:"street",points:[[-64,4],[-73,22],[-77,43],[-76,64],[-70,83],[-60,95]]},{id:"cite",name:"Rue de la Cité",width:8,kind:"street",points:[[-63,7],[-48,26],[-32,44],[-16,61],[0,78],[18,92],[34,101],[47,108]]},{id:"neuveOld",name:"Rue de la Croix-Rouge",width:7,kind:"street",points:[[-60,95],[-35,101],[-10,105],[15,108],[35,110],[47,108]]},{id:"neuveBastions",name:"Promenade des Bastions",width:9,kind:"promenade",points:[[-60,95],[-50,108],[-41,120],[-32,130],[-25,136],[-20,137]]},{id:"bastionsOld",name:"Rue de la Croix-Rouge",width:7,kind:"street",points:[[-20,137],[-5,135],[13,131],[30,124],[42,115],[47,108]]},{id:"gareRhone",name:"Rue de la Pélisserie",width:8,kind:"street",points:[[-79,-151],[-83,-124],[-88,-92],[-94,-57],[-101,-23],[-107,-7],[-114,0],[-120,6],[-114,25],[-103,43],[-90,63],[-75,81],[-60,95]]},{id:"jardinOld",name:"Rue du Perron",width:8,kind:"street",points:[[88,8],[82,17],[72,30],[63,44],[55,59],[50,75],[50,92],[47,108]]},{id:"riveInner",name:"Rue de Rive",width:8,kind:"street",points:[[88,8],[100,5],[113,-1],[126,-10],[139,-21],[151,-32],[162,-43],[170,-56],[174,-68]]},{id:"paquisA",name:"Rue de la Navigation",width:7,kind:"street",points:[[-31,-150],[-6,-127],[20,-105],[45,-89],[70,-82],[91,-82]]},{id:"paquisB",name:"Rue du Léman",width:7,kind:"street",points:[[50,-151],[58,-132],[69,-113],[81,-99],[91,-82]]},{id:"paquisC",name:"Rue de Monthoux",width:7,kind:"street",points:[[-13,-151],[0,-134],[15,-117],[30,-103],[45,-89]]},{id:"belAirWest",name:"Rue de l’Hôtel-de-Ville",width:7,kind:"street",points:[[-64,4],[-84,19],[-101,39],[-108,61],[-102,83],[-85,99],[-60,95]]},{id:"oldTownSouth",name:"Rue de la Terrassière",width:7,kind:"street",points:[[47,108],[49,120],[44,132],[34,145],[20,158],[4,169],[-16,178]]},{id:"bastionsWest",name:"Rue des Granges",width:7,kind:"street",points:[[-60,95],[-75,112],[-80,132],[-72,152],[-55,168],[-30,178],[-16,178]]}],G1=[{x:84,z:17,w:42,d:26,color:"#77a85a"},{x:-31,z:152,w:95,d:42,color:"#6f9f57"},{x:-171,z:34,w:45,d:28,color:"#7eaa5f"},{x:54,z:-240,w:36,d:38,color:"#79a75e"}];function qo(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const o=e[s][0],a=e[s][1],c=e[r][0],l=e[r][1];a>t!=l>t&&i<(c-o)*(t-a)/(l-a)+o&&(n=!n)}return n}function ss(i,t){if(qo(i,t,ns)||qo(i,t,is))return!0;for(const e of Bh)if(qo(i,t,e))return!0;return!1}function kh(i,t,e,n,s,r){const o=s-e,a=r-n,c=i-e,l=t-n,h=o*o+a*a||1,u=Math.max(0,Math.min(1,(c*o+l*a)/h));return Math.hypot(i-(e+o*u),t-(n+a*u))}function rs(i,t){let e=1/0;for(const n of ds)for(let s=0;s<n.points.length-1;s++){const r=n.points[s],o=n.points[s+1],a=kh(i,t,r[0],r[1],o[0],o[1]);a<e&&(e=a)}return e}function H1(i,t=0,e=8){const n=i.map(([c,l])=>new ct(c,l)),s=wi.triangulateShape(n,[]),r=[],o=[];for(const c of s){const l=c.map(m=>i[m]);let h=new I(l[0][0],t,l[0][1]),u=new I(l[1][0],t,l[1][1]),d=new I(l[2][0],t,l[2][1]);new I().subVectors(u,h).cross(new I().subVectors(d,h)).y<0&&([u,d]=[d,u]);for(const m of[h,u,d])r.push(m.x,m.y,m.z),o.push(m.x/e,m.z/e)}const a=new Ae;return a.setAttribute("position",new oe(r,3)),a.setAttribute("uv",new oe(o,2)),a.computeVertexNormals(),a}function V1(i,t=0,e=-1.2){const n=[];for(let r=0;r<i.length;r++){const o=i[r],a=i[(r+1)%i.length];n.push(o[0],t,o[1],a[0],t,a[1],a[0],e,a[1]),n.push(o[0],t,o[1],a[0],e,a[1],o[0],e,o[1])}const s=new Ae;return s.setAttribute("position",new oe(n,3)),s.computeVertexNormals(),s}function Qr(i,t,e=2.2){const n=i.map(([c,l])=>new I(c,0,l)),s=new cc(n,!1,"centripetal",.5),r=s.getLength(),o=Math.max(8,Math.ceil(r/e)),a=[];for(let c=0;c<=o;c++){const l=c/o,h=s.getPointAt(l),u=s.getTangentAt(l).setY(0).normalize(),d=-u.z,f=u.x;a.push({x:h.x,z:h.z,nx:d,nz:f,tx:u.x,tz:u.z,t:l})}return{samples:a,len:r}}function Xa(i,t,e=0){const{samples:n}=Qr(i),s=[],r=[],o=t/2;for(let c=0;c<n.length-1;c++){const l=n[c],h=n[c+1],u=[l.x+l.nx*o,l.z+l.nz*o],d=[l.x-l.nx*o,l.z-l.nz*o],f=[h.x+h.nx*o,h.z+h.nz*o],m=[h.x-h.nx*o,h.z-h.nz*o],x=[[u,f,d],[d,f,m]];for(const[g,p,S]of x)s.push(g[0],e,g[1],p[0],e,p[1],S[0],e,S[1]),r.push(g[0]/5,g[1]/5,p[0]/5,p[1]/5,S[0]/5,S[1]/5)}const a=new Ae;return a.setAttribute("position",new oe(s,3)),a.setAttribute("uv",new oe(r,2)),a.computeVertexNormals(),{geo:a,samples:n}}function Nr(i,{x:t,z:e,w:n,d:s,color:r,y:o=.012,ry:a=0}){const c=bi(i,{w:n,h:s,color:r,x:t,y:o,z:e,rx:-Math.PI/2,ry:a,receive:!0,cast:!1});return c.material.polygonOffset=!0,c.material.polygonOffsetFactor=-1,c}function W1(i){const t={uTime:{value:0},uDeep:{value:new Yt("#127eb0")},uShallow:{value:new Yt("#46c4d8")},uSky:{value:new Yt("#cfedf7")},uSun:{value:new Yt("#fff3c8")},uFog:{value:new Yt("#d8eef1")}},e=new In({uniforms:t,transparent:!1,side:Le,vertexShader:`
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uDeep, uShallow, uSky, uSun, uFog;
      varying vec3 vWorld;
      float waveA(vec2 p, float t) {
        return sin(p.x * 0.13 + p.y * 0.19 + t * 0.42)
             + 0.62 * sin(p.x * 0.27 - p.y * 0.2 - t * 0.31)
             + 0.34 * sin((p.x + p.y) * 0.07 + t * 0.18);
      }
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      void main() {
        vec2 p = vWorld.xz;
        float t = uTime;
        float w = waveA(p, t) / 1.96;
        float e = 0.55;
        float hL = waveA(p - vec2(e, 0.0), t);
        float hR = waveA(p + vec2(e, 0.0), t);
        float hD = waveA(p - vec2(0.0, e), t);
        float hU = waveA(p + vec2(0.0, e), t);
        vec3 normal = normalize(vec3((hL - hR) * 0.045, 1.0, (hD - hU) * 0.045));
        vec3 viewDir = normalize(cameraPosition - vWorld);
        float fresnel = pow(1.0 - clamp(viewDir.y, 0.0, 1.0), 2.8);
        vec3 col = mix(uDeep, uShallow, 0.38 + w * 0.075);
        col = mix(col, uSky, fresnel * 0.56);
        vec3 sunDir = normalize(vec3(-0.42, 0.78, -0.34));
        vec3 h = normalize(viewDir + sunDir);
        float spec = pow(max(dot(normal, h), 0.0), 68.0) * 0.36;
        col += uSun * spec;
        // fine, sparsely distributed lake sparkle (not a repeating grid)
        vec2 cell = floor(p * 1.27 + vec2(t * 0.055, -t * 0.035));
        float star = step(0.992, hash(cell));
        col += vec3(1.0, 0.97, 0.82) * star * 0.19;
        float d = distance(cameraPosition.xz, p);
        col = mix(col, uFog, smoothstep(300.0, 900.0, d) * 0.9);
        gl_FragColor = vec4(col, 1.0);
      }
    `}),n=new ms(2600,2600,1,1),s=new Bt(n,e);return s.rotation.x=-Math.PI/2,s.position.set(80,-1,-250),s.receiveShadow=!1,s.frustumCulled=!1,i.add(s),{mesh:s,uniforms:t}}function X1(i,t){const e=er(773311),n=new At;n.name="Static root";const s=new At;s.name="Dynamic world",s.userData.updates=[],i.add(s);const r=[],o=[],a=[],c=Ot("#c3beb0",{roughness:.8}),l=Ot("#b7a889",{roughness:.72});Ot("#77a75e",{roughness:.85});for(const F of[ns,is]){const O=new Bt(H1(F,0),c);O.receiveShadow=!0,O.castShadow=!1,n.add(O);const G=new Bt(V1(F,0,-1.3),l);G.receiveShadow=!0,G.castShadow=!1,G.material=l.clone(),G.material.side=Le,n.add(G)}const h=W1(i);for(const F of[ns,is])for(let O=0;O<F.length-1;O++){const G=F[O],Y=F[O+1];if(Math.abs(G[0])>315&&Math.abs(Y[0])>315)continue;const V=Y[0]-G[0],tt=Y[1]-G[1],it=Math.hypot(V,tt);if(it<.4)continue;const vt=(G[0]+Y[0])/2,Pt=(G[1]+Y[1])/2,Vt=Math.atan2(V,tt);v(n,{w:.65,h:.24,d:it+.35,color:"#c7b28b",x:vt,y:.12,z:Pt,ry:Vt})}J1(n);for(const F of G1)Nr(n,F);Nr(n,{x:-153,z:-521,w:54,d:40,color:"#8ba272"}),Nr(n,{x:84,z:18,w:50,d:27,color:"#7aab5d"}),Nr(n,{x:-30,z:155,w:104,d:50,color:"#6f9f57"});for(const F of[{x:-81,z:-156,w:66,d:20,color:"#bbb2a0"},{x:-62,z:12,w:32,d:25,color:"#c3b49d"},{x:48,z:114,w:35,d:28,color:"#b8ad98"},{x:-60,z:103,w:30,d:24,color:"#c5baa4"},{x:89,z:12,w:28,d:22,color:"#c4ba9e"}])bi(n,{w:F.w,h:F.d,color:F.color,x:F.x,y:.018,z:F.z});j1(n),tx(n,e);const u=new At,d=new At,f=Ot("#b7b3a7",{roughness:.72}),m=Ot("#51595c",{roughness:.86}),x=Ot("#7c7d76",{roughness:.8});Ot("#9a9589",{roughness:.84});for(const F of ds){const O=F.kind==="bridge",G=Xa(F.points,F.width+(F.kind==="artery"?5.2:4.2),.028),Y=new Bt(G.geo,f);Y.receiveShadow=!0,u.add(Y);const V=Xa(F.points,F.width,.046).geo,tt=new Bt(V,O?x:m);if(tt.receiveShadow=!0,u.add(tt),!O&&F.kind!=="promenade"){const{samples:it}=Qr(F.points,F.width);let vt=0,Pt=!0;for(let Vt=0;Vt<it.length-1;Vt++){const jt=it[Vt],Zt=it[Vt+1],J=Math.hypot(Zt.x-jt.x,Zt.z-jt.z);if(vt+=J,vt>4.8){if(vt=0,Pt=!Pt,!Pt)continue;const st=(jt.x+Zt.x)/2,bt=(jt.z+Zt.z)/2,Nt=Math.atan2(Zt.x-jt.x,Zt.z-jt.z);v(d,{w:.16,h:.03,d:2,color:"#e6dcc3",x:st,y:.055,z:bt,ry:Nt,cast:!1})}}}if(O){const{samples:it}=Qr(F.points,F.width);for(let vt=0;vt<it.length-1;vt+=3){const Pt=it[vt],Vt=it[Math.min(vt+3,it.length-1)],jt=Math.hypot(Vt.x-Pt.x,Vt.z-Pt.z),Zt=Math.atan2(Vt.x-Pt.x,Vt.z-Pt.z);for(const J of[-1,1]){const st=(Pt.x+Vt.x)/2+Pt.nx*J*(F.width/2+.4),bt=(Pt.z+Vt.z)/2+Pt.nz*J*(F.width/2+.4);v(d,{w:.7,h:1.05,d:jt+.4,color:"#b8b4a8",x:st,y:.55,z:bt,ry:Zt}),v(d,{w:.9,h:.16,d:jt+.6,color:"#d9d4c5",x:st,y:1.11,z:bt,ry:Zt})}}}}n.add(u,d),$1(n);const g=[...Ei.map(F=>({x:F.x,z:F.z,r:F.area})),{x:-81,z:-178,r:34},{x:-151,z:-531,r:28},{x:84,z:17,r:32},{x:-30,z:155,r:57},{x:41,z:-201,r:21},{x:144,z:-187,r:20}],p=[{x:84,z:18,hw:27,hd:16},{x:-30,z:154,hw:52,hd:27},{x:-171,z:34,hw:24,hd:15},{x:54,z:-240,hw:19,hd:20},{x:-151,z:-522,hw:30,hd:24}],S=[],b={old:["#e4b578","#d9976e","#e4cda0","#b9c9a6","#ddb167","#c88155","#efdfc0","#e5ad83"],city:["#efd6a3","#dec298","#cbdad3","#e8cba1","#bed2d8","#e1b384","#f1e4c5","#c9bda4","#dfa778","#e6dbc0"],lake:["#f1e4c2","#e5c78f","#cddbd4","#efc29b","#dca777","#e6d4b2","#bfd5d9"],modern:["#cdd8d3","#bccdcb","#dfcda8","#d7bf95","#c9d1c8","#e6dcc5"],roofs:["#9a573c","#ae6f4f","#7d4637","#596262","#846b4c","#4f5d61","#a26340"],trims:["#fbf4df","#f2e6c8","#dfd4b7"],shops:["#d8523e","#368a71","#2c709f","#c78d2f","#82588d"]};function _(F,O){return p.some(G=>Math.abs(F-G.x)<G.hw&&Math.abs(O-G.z)<G.hd)}function P(F,O){return g.some(G=>Math.hypot(F-G.x,O-G.z)<G.r)}function A(F,O,G=10){for(const Y of[ns,is])for(let V=0;V<Y.length;V++){const tt=Y[V],it=Y[(V+1)%Y.length];if(!(Math.abs(tt[0])>300||Math.abs(it[0])>300)&&kh(F,O,tt[0],tt[1],it[0],it[1])<G)return!0}return!1}function C(F,O,G,Y){const V=[[F-G/2,O-Y/2],[F+G/2,O-Y/2],[F-G/2,O+Y/2],[F+G/2,O+Y/2],[F,O]];if(!V.every(([tt,it])=>ss(tt,it))||_(F,O)||P(F,O))return!1;for(const[tt,it]of V)if(A(tt,it,9))return!1;for(const[tt,it]of V)if(rs(tt,it)<5.7)return!1;if(rs(F,O)>34)return!1;for(const tt of S)if(Math.abs(F-tt.x)<(G+tt.w)/2+2&&Math.abs(O-tt.z)<(Y+tt.d)/2+2)return!1;return!0}function D(F,O){return O>70&&F>-110&&F<110?e()>.26?"old":"city":O<-35&&F>-60?e()>.5?"lake":"city":F>100&&O>30?"lake":O<-220?e()>.55?"modern":"city":F<-120?e()>.4?"city":"lake":e()>.14?"city":"modern"}let w=0;const M=152;for(let F=-570;F<=230;F+=13.2){for(let O=-260;O<=270&&!(w>=M);O+=13.2){const G=O+(e()-.5)*4.2,Y=F+(e()-.5)*4.2;let V=D(G,Y),tt=7.2+e()*(V==="old"?3.8:5.2),it=7+e()*4.8;if(V==="old"&&(tt=5.6+e()*2.9,it=6.4+e()*3.2),V==="modern"&&(tt=9+e()*4.5,it=7.5+e()*4),V==="lake"&&(it=8.2+e()*4.5),!C(G,Y,tt,it))continue;w++,S.push({x:G,z:Y,w:tt,d:it});const vt=V==="old"?3+Math.floor(e()*3):V==="modern"?3+Math.floor(e()*5):3+Math.floor(e()*4),Pt=vt*2.55+(V==="old"?2.6:1.2),Vt=b[V],jt=Is(e,Vt),Zt=Is(e,b.roofs),J=Is(e,b.trims);q1(n,{x:G,z:Y,w:tt,d:it,h:Pt,floors:vt,style:V,color:jt,roofColor:Zt,trim:J,shopColor:Is(e,b.shops),rng:e}),r.push({x:G,z:Y,hw:tt/2+.1,hd:it/2+.1,h:Pt})}if(w>=M)break}Z1(n,e),K1(n,e),Q1(n,e);const L=S1({staticRoot:n,dynamic:s,colliders:r,circles:o,rng:e});a.push(...L),ex(s,e),m1(i);const N=new At;return zr(N,-240,92,-440,4.5),zr(N,330,112,-510,6),zr(N,520,82,-120,4),zr(N,-460,96,-120,3.8),i.add(N),g1(n,i),{colliders:r,circles:o,landmarks:a,roads:ds,dynamic:s,water:h,isOnLand:ss,minRoadDistance:rs,staticRoot:n,update(F,O){h.uniforms.uTime.value=O;for(const G of s.userData.updates)G(F,O)}}}function q1(i,t){const{x:e,z:n,w:s,d:r,h:o,floors:a,style:c,color:l,roofColor:h,trim:u,shopColor:d,rng:f}=t,m=new At;m.position.set(e,0,n),i.add(m);const x=c==="old",g=o/(a+.35),p=c==="modern"?.3:.55;v(m,{w:s+.7,h:.32,d:r+.7,color:"#a79d88",x:0,y:.16,z:0}),v(m,{w:s,h:o-p,d:r,color:l,x:0,y:p+(o-p)/2,z:0}),v(m,{w:s+.25,h:.6,d:r+.25,color:u,x:0,y:.62,z:0});for(let A=1;A<a;A++)v(m,{w:s+.3,h:.13,d:r+.3,color:u,x:0,y:p+A*g,z:0});const S=x?.86:1,b=g*.5,_=Ot(E.glass,{roughness:.18,metalness:.18});for(let A=0;A<a;A++){const C=p+A*g+g*.55,D=Math.max(1,Math.floor((s-1.4)/(S+1))),w=Math.max(1,Math.floor((r-1.4)/(S+1)));for(const[M,L,N,X,F,O]of[["front",D,s,0,r/2+.065,0],["back",D,s,0,-r/2-.065,0],["left",w,r,-s/2-.065,0,Math.PI/2],["right",w,r,s/2+.065,0,Math.PI/2]])for(let G=0;G<L;G++){const Y=(G-(L-1)/2)*(N/Math.max(1.5,L)),V=M==="left"||M==="right"?0:Y,tt=M==="front"||M==="back"?0:Y;if(A>0&&f()<.08)continue;const it=new At;it.position.set(X+V,C,F+tt),it.rotation.y=O,v(it,{w:S+.22,h:b+.2,d:.11,color:u,y:0,z:0}),v(it,{w:S,h:b,d:.13,color:E.glass,mat:_,y:0,z:.015}),v(it,{w:S+.3,h:.1,d:.35,color:u,y:-b/2-.12,z:.08}),m.add(it)}}if([{ux:1,uz:0,length:s,cx:0,cz:r/2+.08,ry:0},{ux:-1,uz:0,length:s,cx:0,cz:-r/2-.08,ry:Math.PI},{ux:0,uz:1,length:r,cx:s/2+.08,cz:0,ry:Math.PI/2},{ux:0,uz:-1,length:r,cx:-s/2-.08,cz:0,ry:-Math.PI/2}].forEach((A,C)=>{if(a<1)return;const D=Math.max(1,Math.floor(A.length/4.3)),w=new At;w.position.set(A.cx,0,A.cz),w.rotation.y=A.ry,m.add(w);for(let M=0;M<D;M++){const L=(M-(D-1)/2)*(A.length/D),N=Math.max(1.3,A.length/D-.9);v(w,{w:N,h:1.75,d:.12,color:"#38474b",x:L,y:1.38,z:0}),v(w,{w:N-.2,h:1.3,d:.08,color:f()>.5?"#b78e43":"#7b8f78",x:L,y:1.34,z:.08}),v(w,{w:N+.22,h:.12,d:.5,color:u,x:L,y:2.32,z:.12}),(C+M)%3!==1&&v(w,{w:N+.15,h:.11,d:1.15,color:d,x:L,y:2.58,z:.55,rx:-.32}),f()>.55&&(v(w,{w:.42,h:.32,d:.35,color:"#76583c",x:L+N*.42,y:.55,z:.28}),xn(w,L+N*.42,.73,.28,f()>.5?E.red:E.yellow,.14,.08),xn(w,L+N*.42+.22,.73,.28,E.green,.13,.07))}}),c==="old")for(let A=1;A<Math.min(3,a);A++){const C=p+A*g+.45;for(const D of[-s*.25,s*.25]){v(m,{w:1.35,h:.2,d:.35,color:"#6f5035",x:D,y:C-.7,z:r/2+.18});for(let w=0;w<4;w++)xn(m,D-.45+w*.3,C-.56,r/2+.22,w%2?E.red:E.yellow,.11,.1)}}if(!x&&a>=3&&f()>.35){const A=p+g*(1+Math.floor(f()*Math.max(1,a-1)));v(m,{w:s*.58,h:.14,d:.85,color:u,x:0,y:A,z:r/2+.38});for(let C=0;C<7;C++)v(m,{w:.06,h:.55,d:.05,color:E.ink,x:-s*.27+C*s*.09,y:A+.35,z:r/2+.76});v(m,{w:s*.58,h:.07,d:.05,color:E.ink,x:0,y:A+.63,z:r/2+.76})}if(x)Y1(m,s,r,o,h,2+a%2*.4),v(m,{w:1.45,h:1.05,d:1.2,color:u,x:-s*.18,y:o+1.25,z:r*.22}),v(m,{w:1.05,h:.7,d:.1,color:E.glass,mat:_,x:-s*.18,y:o+1.25,z:r*.22+.61}),v(m,{w:1.8,h:.18,d:1.55,color:h,x:-s*.18,y:o+1.87,z:r*.22,rx:-.25});else{if(v(m,{w:s+.35,h:.5,d:r+.35,color:u,x:0,y:o+.25,z:0}),c!=="modern"&&f()>.42){const A=1.9+f()*1.4,C=new Bt(new Wn(1,1,4),Ot(h,{roughness:.66,flatShading:!0}));C.scale.set(s*.67,A,r*.67),C.position.set(0,o+.55+A/2,0),C.rotation.y=Math.PI/4,C.castShadow=!0,C.receiveShadow=!0,m.add(C)}else v(m,{w:s-.3,h:.24,d:r-.3,color:h,x:0,y:o+.62,z:0});c==="modern"?(v(m,{w:s*.3,h:1,d:r*.3,color:"#8b9494",x:s*.18,y:o+1.2,z:-r*.1}),v(m,{w:s*.22,h:.42,d:r*.22,color:"#7a8789",x:s*.18,y:o+1.9,z:-r*.1})):(v(m,{w:1.1,h:1.2,d:1,color:h,x:-s*.2,y:o+1.2,z:-r*.2}),v(m,{w:.8,h:.55,d:.75,color:"#504d46",x:s*.26,y:o+1,z:r*.14})),Nh(m,0,o+.75,0,s-1.4,r-1.4,l,.85,{max:28,r:.15,h:.07})}if(f()>.4){const A=s*(f()>.5?.28:-.3);v(m,{w:.75,h:1.35,d:.75,color:"#9a6d51",x:A,y:o+1.2,z:-r*.15}),v(m,{w:.9,h:.15,d:.9,color:"#635b51",x:A,y:o+1.9,z:-r*.15})}if(x&&f()>.72){const A=new At;A.position.set(s/2-.8,0,r/2-.8),mt(A,{r:1.15,h:o+1.6,color:l,x:0,y:(o+1.6)/2,z:0,segments:10}),_n(A,{r:1.35,h:2.4,color:h,x:0,y:o+2.8,z:0,segments:10}),m.add(A)}}function Y1(i,t,e,n,s,r=2.2){const a=t/2+.55,c=e/2+.55,l=[-a,n,-c,a,n,-c,a,n+r,0,-a,n,-c,a,n+r,0,-a,n+r,0,-a,n,c,-a,n+r,0,a,n+r,0,-a,n,c,a,n+r,0,a,n,c,-a,n,-c,-a,n+r,0,-a,n,c,a,n,-c,a,n,c,a,n+r,0,-a,n,-c,-a,n,c,a,n,c,-a,n,-c,a,n,c,a,n,-c],h=new Ae;h.setAttribute("position",new oe(l,3));const u=l.length/3;h.setAttribute("uv",new oe(new Array(u*2).fill(0),2)),h.computeVertexNormals();const d=new Bt(h,Ot(s));d.castShadow=!0,d.receiveShadow=!0,i.add(d),v(i,{w:t+1.05,h:.22,d:.4,color:s,x:0,y:n+r+.06,z:0})}function Z1(i,t){const e=[[62,10,1.15],[64,36,1],[56,28,1.3],[110,34,1.2],[-48,111,1.1],[-16,152,1.2],[10,155,1.15],[-46,139,1.25],[-9,171,1.25],[-59,150,1.15],[-77,131,1],[-57,21,.9],[20,-154,.9],[90,-151,.85],[116,-143,.85],[-27,6,.9],[-76,-120,.8],[-69,-95,.85],[45,122,.8],[27,121,.8],[145,-157,.65],[160,-165,.7],[-132,-480,.95],[-165,-490,.85],[7,96,.85],[-33,87,.9],[-99,21,1.1],[128,12,1.1],[166,-54,.8],[-107,70,1]];for(const[s,r,o]of e)Math.hypot(s+84,r+129.5)<24||s>50&&s<112&&r>3&&r<38||Jr(i,s,r,{scale:o,kind:o>1.1?"round":"tall",leaves:t()>.5?E.green:"#4f8a42"});const n=[[-79,155,1.5],[-63,163,1.3],[-21,168,1.5],[10,166,1.25],[59,22,1.2],[66,16,1.05],[111,14,1.1],[-158,34,1.2],[50,-231,1.2],[61,-247,1.25],[-140,-520,1.2],[-166,-529,1.4]];for(const[s,r,o]of n)Math.hypot(s+84,r+129.5)<24||s>50&&s<112&&r>3&&r<38||Jr(i,s+(t()-.5)*5,r+(t()-.5)*4,{scale:o,kind:"round",leaves:t()>.4?"#4d8b45":"#5f9c4c",flowers:t()>.72?"#e35749":null});for(const[s,r,o,a]of[[68,30,22,1.2],[102,28,1.2,16],[-50,162,46,1.1],[8,142,1.1,24]])for(let c=0;c<Math.max(o,a);c+=2){const l=o>a?s-o/2+c:s,h=o>a?r:r-a/2+c;v(i,{w:2.1,h:.8,d:2.1,color:"#537e47",x:l,y:.52,z:h})}}function K1(i,t){const e=["#d4503f","#2d78a9","#e2b830","#4d8b61","#845c9c","#e27c49","#3f8f8f","#b24a6d","#e7dfca"],n=["#3c4b57","#55433a","#2c3b49","#5e5b55","#6f4d3b"],s=["#3b2a21","#6e4b2d","#d8c9a2","#bdb3a3","#211c1b"],r=[null,null,null,"#243847","#d34c3c"],o=[[-60,-160,.95,2.2],[-91,-153,.85,.6],[-71,-147,.8,3.6],[-112,-163,.9,1.2],[-50,22,.9,4.3],[-46,12,.85,2.6],[-75,25,.8,.6],[-59,28,.95,1.6],[39.1,-34,.84,.2],[50.3,-32,.8,3.1],[80,11,.9,1.3],[75,30,.82,3.9],[75,22,.9,2.4],[105,3,.8,.3],[176,-76,.8,1.5],[174,-69,.95,2.9],[146,-157,.82,2.2],[153,-160,.9,.8],[-139,-495,.85,1.8],[-154,-497,.9,3],[-135,-507,.8,.4],[42,103,.9,2],[57,112,.85,.8],[35,114,.8,4.1],[68,107,.78,3.1],[-51,94,.9,3],[-42,103,.84,1.1],[-68,88,.88,2.1],[-14,141,.9,3.6],[-33,147,.82,.3],[-4,146,.8,2.4],[28,-154,.82,1.4],[72,-151,.9,3.7],[111,-151,.8,2.6],[-32,8,.85,1]];for(let a=0;a<o.length;a++){const[c,l,h,u]=o[a],d=Oh({shirt:e[a%e.length],pants:n[a%n.length],hair:s[a%s.length],hat:r[a%r.length],scale:h,accessory:a%7===0?"bag":a%11===0?"suitcase":null,armsUp:a%8===3,skin:a%4===0?E.skinTan:E.skin,pose:a%6===0?"longhair":"stand"});d.position.set(c+(t()-.5)*1.2,.03,l+(t()-.5)*1.2),d.rotation.y=u,i.add(d)}}function $1(i){const t=[[-104,-14],[-110,-4],[-117,4],[-115,16]],{geo:e,samples:n}=Xa(t,18,-.2),s=new Bt(e,Ot("#a8a396",{roughness:.8}));s.receiveShadow=!0,i.add(s);for(const r of[-1,1])for(let o=0;o<n.length-2;o+=2){const a=n[o],c=n[o+2],l=Math.hypot(c.x-a.x,c.z-a.z);if(l<.1)continue;const h=Math.atan2(c.x-a.x,c.z-a.z),u=(a.x+c.x)/2+a.nx*r*8.9,d=(a.z+c.z)/2+a.nz*r*8.9;v(i,{w:.7,h:1.15,d:l+.3,color:"#d0caba",x:u,y:.56,z:d,ry:h}),v(i,{w:.9,h:.18,d:l+.4,color:"#b7b1a3",x:u,y:1.16,z:d,ry:h}),o%4===0&&v(i,{w:1,h:1.65,d:1,color:"#b7b1a3",x:u,y:.8,z:d})}for(const[r,o]of[[-104,-14],[-115,16]])mt(i,{r:.1,h:3.2,color:E.darkGrey,x:r,y:2.1,z:o,segments:6}),de(i,{r:.3,color:"#ffe8b0",x:r,y:3.85,z:o,mat:Ot("#ffe8b0",{emissive:"#ffd27b",emissiveIntensity:.4}),low:!0}),Xn(i,r+(r<-108?1.2:-1.2),.4,o,{type:"geneva",scale:.8});he(i,{x:-117,y:1.75,z:-2,ry:Math.PI/2,width:5.2,height:.7,text:"COULOUVRENIÈRE",bg:"#c7c1b2",color:"#35413e",border:"#545a54",font:'900 31px "Lilita One", sans-serif',frame:"#7f7d74"})}function J1(i){const t="#e3ddcd",e="#b9b3a4",n=(s,r,o,a)=>{for(let c=r;c<o;c++){const l=s[c],h=s[(c+1)%s.length],u=(l[0]+h[0])/2,d=(l[1]+h[1])/2;if(a.some(([b,_,P])=>Math.hypot(u-b,d-_)<P))continue;const f=h[0]-l[0],m=h[1]-l[1],x=Math.hypot(f,m);if(x<3)continue;const g=Math.atan2(f,m);v(i,{w:.55,h:.3,d:x+.2,color:e,x:u,y:.06+.15,z:d,ry:g,cast:!1});const S=Math.max(2,Math.floor(x/2.4));for(let b=1;b<S;b++){const _=b/S;mt(i,{r:.11,h:.95,color:t,x:l[0]+f*_,y:.5599999999999999,z:l[1]+m*_,segments:6,cast:!1})}if(v(i,{w:.17,h:.12,d:x+.1,color:t,x:u,y:1.06,z:d,ry:g,cast:!1}),c%3===1){const b=l[0]+f*.5,_=l[1]+m*.5;mt(i,{r:.06,h:2.4,color:"#776f62",x:b,y:1.22,z:_,segments:6,cast:!1}),v(i,{w:1,h:.6,d:.06,color:E.red,x:b+.5,y:2.2,z:_,cast:!1}),v(i,{w:.55,h:.2,d:.07,color:E.white,x:b+.5,y:2.2,z:_+.04,cast:!1}),v(i,{w:.18,h:.33,d:.08,color:E.white,x:b+.5,y:2.2,z:_+.05,cast:!1})}}};n(is,8,19,[[48,-27,9],[67,-14,5],[88,-2,8],[122,-25,9],[160,-53,10],[178,-69,12]]),n(ns,8,20,[[43,-41,9],[78,-69,9],[104,-97,9],[128,-132,10],[148,-174,13],[165,-216,12]])}function j1(i){const t=[[-100,-161,55,12,2.4],[-73,19,34,18,2.5],[44,108,30,20,2.4],[-61,101,28,17,2.5],[86,18,38,18,2.6],[-32,143,36,22,2.7],[177,-78,16,15,2.2],[149,-159,20,14,2.2]];for(const[e,n,s,r,o]of t)for(let a=e-s/2+1;a<e+s/2-.5;a+=o)for(let c=n-r/2+1;c<n+r/2-.5;c+=o)Math.abs(a-e)<2.4&&Math.abs(c-n)<5||Math.hypot(a+84,c+134)<12||!ss(a,c)||rs(a,c)<4.7||xn(i,a,.078,c,"#ded7c6",.26,.065)}function Q1(i,t){const e=["station","quaiLacNord","quaiLacSud","quaiSud","corraterie","cite","neuveBastions","gareRhone","paquisA"];for(const s of e){const r=ds.find(l=>l.id===s);if(!r)continue;const{samples:o}=Qr(r.points,r.width);let a=0,c=!1;for(let l=1;l<o.length;l++){const h=o[l-1],u=o[l];if(a+=Math.hypot(u.x-h.x,u.z-h.z),a<22)continue;a=0,c=!c;const d=c?1:-1,f=r.width/2+2.1,m=u.x+u.nx*f*d,x=u.z+u.nz*f*d;if(!(!ss(m,x)||rs(m,x)<r.width/2+1.4)&&!(Math.hypot(m+84,x+134)<24)&&(Pe(i,m,x,{h:4.9+t()*1,flags:t()>.82}),t()>.56)){const g=u.x+u.nx*f*-d,p=u.z+u.nz*f*-d;ss(g,p)&&Se(i,g,p,Math.atan2(u.tz,u.tx)+Math.PI/2)}}for(let l=0;l<o.length;l+=7){const h=o[l];for(const u of[-1,1]){const d=h.x+h.nx*(r.width/2+1.7)*u,f=h.z+h.nz*(r.width/2+1.7)*u;ss(d,f)&&rs(d,f)>r.width/2+.8&&xn(i,d,.09,f,"#ded7c6",.26,.07)}}}const n=[{x:-79,z:-151,across:"z",width:10},{x:-31,z:-150,across:"z",width:8},{x:72,z:-151,across:"z",width:8},{x:-62,z:0,across:"x",width:8},{x:86,z:1,across:"x",width:8},{x:18,z:105,across:"x",width:7},{x:-61,z:90,across:"z",width:8}];for(const s of n)for(let r=-3;r<=3;r++)v(i,{w:s.across==="z"?.55:1.8,h:.028,d:s.across==="z"?2.4:.55,color:"#eee7d3",x:s.x+(s.across==="z"?r*1.35:0),y:.06,z:s.z+(s.across==="x"?r*1.35:0),cast:!1});for(const[s,r,o]of[[-54,6,.2],[73,4,1.2],[-22,100,2.6],[142,-153,.8]]){mt(i,{r:.11,h:1.9,color:"#343b3e",x:s,y:.55,z:r,rz:Math.PI/2,ry:o,segments:6}),mt(i,{r:.11,h:1.9,color:"#343b3e",x:s+.7,y:.55,z:r,rz:Math.PI/2,ry:o,segments:6});for(const[a,c]of[[0,0],[.7,.1]])mt(i,{r:.34,h:.1,color:E.black,x:s+a,y:.35,z:r+c,rz:Math.PI/2,segments:10})}}function tx(i,t){bi(i,{w:2900,h:1750,color:"#879b6b",x:160,y:-.045,z:1130,receive:!0,cast:!1}),bi(i,{w:1300,h:2200,color:"#8b9b71",x:-910,y:-.05,z:0,receive:!0,cast:!1}),bi(i,{w:1800,h:750,color:"#8a9971",x:-150,y:-.05,z:-1050,receive:!0,cast:!1});const e=[[-120,420,260,110,"#b8aa75"],[170,390,210,80,"#8da668"],[360,520,300,150,"#a9a370"],[-330,500,260,160,"#96aa73"],[40,600,240,130,"#b0a374"],[300,710,360,190,"#8da268"],[-520,300,280,220,"#95a573"],[-530,-120,240,350,"#89a067"],[-560,-500,300,260,"#93a16e"],[60,730,500,120,"#c1b386"],[-70,-760,340,150,"#899e6d"],[80,-860,400,160,"#98a773"],[-220,920,420,280,"#8fa26d"],[250,980,500,240,"#a0a873"],[-620,750,500,320,"#8b9e72"],[610,800,550,360,"#8ca16e"],[-760,-50,420,500,"#84996d"],[560,720,320,260,"#a8a978"]];for(const[r,o,a,c,l]of e)bi(i,{w:a,h:c,color:l,x:r,y:-.035,z:o,receive:!0});const n=["#75905f","#809768","#6d8a60","#879b73"],s=[[-20,460,125,34,180],[170,520,150,46,210],[350,440,100,28,160],[-260,470,140,38,180],[-480,660,300,52,220],[470,760,320,66,280],[-640,280,160,45,220],[-720,-160,180,58,260],[-560,-560,190,62,250],[-310,-700,180,80,260],[100,-760,210,70,300],[280,-700,150,50,220],[520,180,160,44,230],[610,350,210,62,260],[-300,800,260,55,300],[30,780,280,42,300],[350,840,300,60,320],[-90,650,210,36,250],[720,850,280,48,300],[-820,420,260,70,320]];for(let r=0;r<s.length;r++){const[o,a,c,l,h]=s[r],u=new Wn(c,l,7,1,!1),d=new Bt(u,Ot(n[r%n.length],{roughness:1,flatShading:!0}));d.position.set(o,l/2-22,a),d.scale.z=.65,d.rotation.y=t()*Math.PI,d.castShadow=!1,d.receiveShadow=!1,i.add(d)}for(let r=0;r<22;r++){const o=-480+t()*880,a=340+t()*330;Jr(i,o,a,{scale:2+t()*1.6,kind:"round",leaves:r%3?"#557b48":"#688c52"})}for(let r=0;r<7;r++){const o=-660+t()*260,a=-420+t()*760;Jr(i,o,a,{scale:2.2+t()*1.5,kind:"round",leaves:"#4d7447"})}for(const[r,o,a]of[[-170,455,1.6],[230,470,1.4],[-430,310,1.5],[-520,-200,1.4]])v(i,{w:5*a,h:3.2*a,d:3.4*a,color:"#d8c9a3",x:r,y:1.5*a,z:o}),v(i,{w:4.4*a,h:1.1*a,d:3*a,color:"#9e6a4d",x:r,y:3.9*a,z:o,rx:0}),v(i,{w:.45,h:1.2*a,d:.45,color:"#725640",x:r+1.2*a,y:4.35*a,z:o})}function ex(i,t){for(const[n,s,r,o]of[[154,-55,.9,.3],[167,-32,1.1,-.6],[212,-118,1.5,.9]]){const a=new At;a.position.set(n,-.6,s),a.rotation.y=o;const c=Ot(E.offwhite,{roughness:.45});v(a,{w:3.1*r,h:.7*r,d:4.6*r,color:E.white,mat:c,y:.3*r}),v(a,{w:2.2*r,h:1*r,d:2*r,color:E.yellow,y:1.1*r,z:-.2*r}),de(a,{r:1.05*r,color:E.white,x:0,y:1.8*r,z:1.55*r}),_n(a,{r:.42*r,h:1.1*r,color:E.orange,x:0,y:1.55*r,z:2.45*r,rx:Math.PI/2});for(const l of[-.46,.46])mt(a,{r:.07*r,h:1.4*r,color:E.white,x:l*r,y:.1*r,z:-.8*r});i.add(a),a.userData.bob={base:-.6,phase:t()*6}}const e=new At;e.position.set(236,-.7,-196),v(e,{w:8,h:1.4,d:20,color:E.white,x:0,y:.7,z:0}),v(e,{w:7.2,h:1,d:14,color:E.blue,x:0,y:1.3,z:-1}),v(e,{w:6.4,h:2.4,d:5.6,color:E.offwhite,x:0,y:2.3,z:2.4}),v(e,{w:6.7,h:.4,d:5.9,color:E.red,x:0,y:3.7,z:2.4});for(let n=0;n<6;n++)v(e,{w:.7,h:.7,d:.06,color:E.glass,x:-2.2+n*.9,y:2.35,z:5.22});i.add(e);for(let n=0;n<9;n++){const s=152+t()*120,r=-125-t()*230,o=de(i,{r:.42,color:n%2?E.red:E.yellow,x:s,y:-.55,z:r,low:!0});o.userData.base=-.55}i.userData.updates.push((n,s)=>{for(const r of i.children)r.userData.bob&&(r.position.y=r.userData.bob.base+Math.sin(s*1.2+r.userData.bob.phase)*.08,r.rotation.z=Math.sin(s*.9+r.userData.bob.phase)*.025)})}const As=34,nx=23,ix=38,sx=13;function Rs(i,t,e){return Math.max(t,Math.min(e,i))}function Fr(i,t,e){const n=new At;n.position.set(t,.7,e);const s=Ot("#232629",{roughness:.88}),r=Ot("#b8b9b0",{roughness:.35,metalness:.25}),o=new Bt(new tn(.7,.7,.48,18,1,!1),s);o.rotation.z=Math.PI/2,o.castShadow=!0,n.add(o);const a=new Bt(new tn(.35,.35,.51,12,1,!1),r);a.rotation.z=Math.PI/2,n.add(a);for(let c=0;c<5;c++)v(n,{w:.53,h:.12,d:.15,color:"#777a77",x:0,y:0,z:0,rx:c/5*Math.PI*2});return i.add(n),n}function rx(){const i=new At;i.name="Brick taxi";const t=new At;t.position.y=.1,i.add(t);const e=Ot(E.taxi,{roughness:.3,metalness:.03}),n=Ot("#e3aa0a",{roughness:.38}),s=Ot("#23272a",{roughness:.62}),r=new vf({color:"#9ad4e6",transparent:!0,opacity:.38,roughness:.04,metalness:.12,clearcoat:1,clearcoatRoughness:.05,side:Le,depthWrite:!1}),o=Ot("#d6d7cc",{roughness:.2,metalness:.7}),a=Ot(E.red,{roughness:.3});v(t,{w:3.7,h:.5,d:8,color:E.black,mat:s,y:.55}),v(t,{w:3.85,h:.7,d:2.2,color:E.black,mat:s,y:.7,z:3.6}),v(t,{w:3.85,h:.6,d:1.6,color:E.black,mat:s,y:.65,z:-3.6}),v(t,{w:3.8,h:1.1,d:7.7,color:E.taxi,mat:e,y:1.13}),v(t,{w:3.58,h:.8,d:7.35,color:"#f3bb12",x:0,y:1,z:0,mat:n}),v(t,{w:3.65,h:.55,d:2.65,color:E.taxi,mat:e,y:1.83,z:2.7}),v(t,{w:3.66,h:.45,d:1.9,color:E.taxi,mat:e,y:1.78,z:-2.9}),v(t,{w:3.3,h:.1,d:2.2,color:"#f8d660",x:0,y:2.12,z:2.7}),v(t,{w:2.6,h:.16,d:.08,color:"#b47f00",x:0,y:2.04,z:-3.9}),he(t,{x:0,y:1.98,z:-3.99,ry:Math.PI,width:2.2,height:.4,text:"GENEVA",bg:"#f3c52e",color:"#283237",border:"#9c7004",font:'900 42px "Nunito", sans-serif',frame:"#9c7004",thickness:.03}),new At().position.set(0,1.95,-.2),v(t,{w:3.2,h:.3,d:4.8,color:E.taxi,mat:e,x:0,y:2.8,z:-.3});for(const _ of[-1.6,1.6])v(t,{w:.2,h:1.6,d:.28,color:E.taxi,mat:e,x:_,y:2.45,z:2}),v(t,{w:.2,h:1.6,d:.28,color:E.taxi,mat:e,x:_,y:2.45,z:-2.05}),v(t,{w:.2,h:1.6,d:.28,color:E.taxi,mat:e,x:_,y:2.45,z:.05}),v(t,{w:.2,h:1.6,d:.28,color:E.taxi,mat:e,x:_,y:2.45,z:-1.1});v(t,{w:2.9,h:.26,d:.38,color:E.taxi,mat:e,x:0,y:2.53,z:2}),v(t,{w:3.45,h:.35,d:4.7,color:E.taxi,mat:e,x:0,y:3.38,z:-.55}),v(t,{w:3.1,h:.08,d:4.35,color:"#ffdc5c",x:0,y:3.57,z:-.55}),v(t,{w:2.75,h:1.38,d:.1,color:E.glass,mat:r,x:0,y:2.58,z:2.09,rx:.18}),v(t,{w:2.75,h:1.28,d:.1,color:E.glass,mat:r,x:0,y:2.53,z:-2.48,rx:.05});for(const _ of[-1.68,1.68])v(t,{w:.1,h:1.22,d:1.82,color:E.glass,mat:r,x:_,y:2.52,z:.62}),v(t,{w:.1,h:1.22,d:1.65,color:E.glass,mat:r,x:_,y:2.52,z:-1.6});for(const _ of[-1.91,1.91])for(let P=0;P<9;P++)v(t,{w:.04,h:.28,d:.48,color:P%2?E.white:E.black,x:_,y:1.63,z:-2.6+P*.62});v(t,{w:1.7,h:.55,d:.18,color:"#777d7b",x:0,y:1.14,z:4,mat:o});for(let _=0;_<5;_++)v(t,{w:1.3,h:.05,d:.05,color:E.black,x:0,y:1+_*.12,z:4.1});for(const _ of[-1.25,1.25])v(t,{w:.6,h:.46,d:.12,color:"#fff5c2",x:_,y:1.6,z:4.04,mat:Ot("#ffe9a8",{emissive:"#ffdb77",emissiveIntensity:.5})}),v(t,{w:.55,h:.17,d:.12,color:E.red,x:_,y:1.1,z:4.05});v(t,{w:3.9,h:.3,d:.45,color:E.black,mat:s,y:.82,z:4.08}),v(t,{w:3.9,h:.28,d:.4,color:E.black,mat:s,y:.82,z:-4});for(const _ of[-1.25,1.25])v(t,{w:.55,h:.38,d:.12,color:E.red,x:_,y:1.55,z:-3.92,mat:a}),v(t,{w:.4,h:.18,d:.13,color:"#ffb24a",x:_,y:1.24,z:-3.93});v(t,{w:1.8,h:.55,d:.85,color:E.ink,x:0,y:3.88,z:1.15}),v(t,{w:1.65,h:.42,d:.74,color:"#ffe36e",x:0,y:3.9,z:1.15,mat:Ot("#ffe36e",{emissive:"#ffcd42",emissiveIntensity:.25})}),v(t,{w:1.7,h:.46,d:.05,color:"#ffe36e",x:0,y:3.9,z:.705}),v(t,{w:1.7,h:.46,d:.05,color:"#ffe36e",x:0,y:3.9,z:1.595}),he(t,{x:0,y:3.9,z:.66,ry:Math.PI,width:1.45,height:.44,text:"TAXI",bg:"#ffe36e",color:"#17242b",border:"#17242b",font:'900 66px "Lilita One", "Arial Black", sans-serif',frame:E.ink,thickness:.03}),he(t,{x:0,y:3.9,z:1.64,ry:0,width:1.45,height:.44,text:"TAXI",bg:"#ffe36e",color:"#17242b",border:"#17242b",font:'900 66px "Lilita One", "Arial Black", sans-serif',frame:E.ink,thickness:.03});for(const _ of[-1.2,-.6,0,.6,1.2])for(const P of[2.15,2.8])xn(t,_,2.18,P,E.taxi,.16,.08);for(const _ of[-1.95,1.95])v(t,{w:.1,h:.12,d:.55,color:"#4b5250",x:_,y:1.9,z:-.2}),v(t,{w:.05,h:.62,d:.62,color:E.red,x:_+.02,y:2.35,z:.05}),v(t,{w:.04,h:.16,d:.42,color:E.white,x:_+.06,y:2.35,z:.05}),v(t,{w:.04,h:.42,d:.16,color:E.white,x:_+.06,y:2.35,z:.05});v(t,{w:1.4,h:.33,d:.08,color:E.offwhite,x:0,y:1.04,z:-4.17}),he(t,{x:0,y:1.04,z:-4.21,ry:Math.PI,width:1.25,height:.28,text:"GE · 1815",bg:E.offwhite,color:E.ink,border:E.ink,font:'900 38px "Nunito", sans-serif',frame:E.ink,thickness:.02}),mt(t,{r:.04,h:1.5,color:E.black,x:-1.5,y:3,z:1.8,rz:-.15,segments:6}),mt(t,{r:.11,h:.5,color:"#747b78",x:.9,y:.72,z:-4.15,rx:Math.PI/2,segments:8});const l=new At;l.position.set(-.58,2.1,1.05),v(l,{w:.9,h:.7,d:.52,color:"#25648d"}),mt(l,{r:.38,h:.45,color:E.skin,y:.63,segments:12}),v(l,{w:.78,h:.16,d:.66,color:"#23364b",y:.91}),v(l,{w:.7,h:.11,d:.38,color:"#23364b",y:.86,z:.18});for(const _ of[-.14,.14])de(l,{r:.028,color:E.ink,x:_,y:.65,z:.37,low:!0,cast:!1});v(l,{w:.1,h:.06,d:.03,color:E.ink,x:0,y:.55,z:.38,cast:!1}),t.add(l);const h=new At;h.position.set(.5,2.02,-1.5),h.visible=!1,v(h,{w:.85,h:.68,d:.5,color:"#c76c49"}),mt(h,{r:.37,h:.45,color:E.skin,y:.61,segments:12}),v(h,{w:.75,h:.16,d:.64,color:"#5a3a2a",y:.88});for(const _ of[-.14,.14])de(h,{r:.028,color:E.ink,x:_,y:.62,z:.36,low:!0,cast:!1});v(h,{w:.1,h:.05,d:.03,color:E.ink,x:0,y:.53,z:.37,cast:!1}),t.add(h),Fh(t,[h]);const u=[Fr(i,-1.82,2.45),Fr(i,1.82,2.45),Fr(i,-1.82,-2.62),Fr(i,1.82,-2.62)];pc(i,3.5,.28);const d=i.children[i.children.length-1];d.position.y=.04;const f=new At;f.name="Guide arrow",f.position.set(0,8.2,0);const m=new yh;m.moveTo(0,2.3),m.lineTo(1.45,.35),m.lineTo(.55,.35),m.lineTo(.55,-2.1),m.lineTo(-.55,-2.1),m.lineTo(-.55,.35),m.lineTo(-1.45,.35),m.closePath();const x=new lc(m,{depth:.28,bevelEnabled:!0,bevelSize:.07,bevelThickness:.06,bevelSegments:1});x.center(),x.rotateX(Math.PI/2);const g=new Bt(x,Ot(E.yellow,{roughness:.36,emissive:"#9a6500",emissiveIntensity:.16}));g.castShadow=!0,f.add(g);const p=new Bt(x,Ot(E.ink,{roughness:.5}));p.scale.set(1.12,1.12,1.1),p.position.y=-.1,f.add(p),g.renderOrder=3,f.visible=!1,i.add(f);const S=[],b=new Zn({color:"#e8ece8",transparent:!0,opacity:.55,roughness:1,depthWrite:!1});for(let _=0;_<28;_++){const P=new Bt(new tr(.35,0),b.clone());P.visible=!1,P.userData.life=0,i.parent?.add(P),S.push(P)}return{root:i,body:t,wheels:u,passenger:h,arrowGroup:f,shadow:d,smokePool:S,glassMat:r}}class ox{constructor(t,e={}){this.scene=t;const n=rx();Object.assign(this,n),this.scene.add(this.root);for(const s of this.smokePool)this.root.remove(s),this.scene.add(s);this.position=new ct(0,0),this.velocity=new ct(0,0),this.heading=0,this.speed=0,this.lateral=0,this.steer=0,this.wheelSpin=0,this.y=.12,this.drifting=!1,this.driftTime=0,this.driftScore=0,this.inWater=!1,this.waterTime=0,this.invuln=0,this.cameraShake=0,this.lastSafe=new ct(0,0),this.safeTimer=0,this.callbacks=e,this.effects=[],this.impactDebris=[],this.arrowTarget=null,this.smokeIndex=0,this.time=0,this.throttleSmoothed=0,this.steerSmoothed=0}resetAt(t,e,n=0){this.position.set(t,e),this.lastSafe.set(t,e),this.velocity.set(0,0),this.heading=n,this.speed=0,this.lateral=0,this.steer=0,this.inWater=!1,this.waterTime=0,this.invuln=1,this.driftScore=0,this.driftTime=0,this.y=.12,this.root.visible=!0,this.root.position.set(t,this.y,e),this.root.rotation.set(0,n,0),this.passenger.visible=!1,this.arrowGroup.visible=!1}setPassenger(t,e){this.passenger.visible=t,t&&(this.passenger.children[0].material=Ot(e||"#c76c49"))}setGuide(t){this.arrowTarget=t,this.arrowGroup.visible=!1}get speedKmh(){return Math.abs(this.speed)*3.6}get forward(){return new ct(Math.sin(this.heading),Math.cos(this.heading))}update(t,e,n){t=Math.min(t,.05),this.time+=t,this.invuln>0&&(this.invuln-=t),this.cameraShake>0&&(this.cameraShake=Math.max(0,this.cameraShake-t*2.5));const s=(e.right?1:0)-(e.left?1:0);this.steer+=(s-this.steer)*Math.min(1,t*12);const r=(e.forward?1:0)-(e.back?1:0);this.throttleSmoothed+=(r-this.throttleSmoothed)*Math.min(1,t*9);const o=this.forward,a=new ct(o.y,-o.x);let c=this.velocity.dot(o),l=this.velocity.dot(a);if(this.inWater){this.velocity.multiplyScalar(Math.exp(-t*2.4)),this.waterTime+=t,this.speed=0,this.drifting=!1,this.root.position.y=this.y+Math.sin(this.time*5)*.12,this.root.rotation.z=Math.sin(this.time*4)*.06,this.waterTime>1.35&&(this.inWater=!1,this.waterTime=0,this.velocity.set(0,0),this.heading+=Math.PI,this.position.copy(this.lastSafe),this.invuln=1.8,this.callbacks.onRespawn?.()),this.syncVisual(t,0,0);return}const h=(this.throttleSmoothed>0?this.throttleSmoothed:0)*nx;let u=0;this.throttleSmoothed<0&&(c>1.1?u=-this.throttleSmoothed*ix:u=this.throttleSmoothed*sx),e.drift&&(u-=Math.sign(c)*8,this.velocity.multiplyScalar(1-t*.4));const d=h-u-(e.drift?Math.sign(c)*7:0);this.velocity.addScaledVector(o,d*t);const f=Math.abs(this.throttleSmoothed)>.05?.12:1.25;this.velocity.multiplyScalar(Math.max(0,1-f*t)),l=this.velocity.dot(a);const m=e.drift?1.9:8.6;this.velocity.addScaledVector(a,-l*Math.min(1,m*t)),c=this.velocity.dot(o);const g=(.5+.6*(1-Math.min(1,Math.abs(c)/26)))*Rs(Math.abs(c)/4,0,1),p=c<-.5?-1:1,S=this.steer*g*1.35*t*p*(e.drift?1.28:1);this.heading-=S;const b=this.forward,_=new ct(b.y,-b.x);c=this.velocity.dot(b),l=this.velocity.dot(_);const P=e.drift?As*.86:As;c>P&&this.velocity.addScaledVector(b,P-c),c<-11&&this.velocity.addScaledVector(b,-11-c),this.velocity.length()>As*1.1&&this.velocity.setLength(As*1.1),this.speed=this.velocity.dot(b),this.lateral=l,!!e.drift&&Math.abs(this.speed)>9&&Math.abs(l)>2.1?(this.driftTime+=t,this.driftScore+=Math.abs(l)*t*2.2,this.drifting=!0):(this.drifting=!1,this.driftTime>0&&(this.driftTime=Math.max(0,this.driftTime-t*1.8))),this.position.addScaledVector(this.velocity,t),this.resolveCollisions(n,t);const C=this.position.x,D=this.position.y;C<-292&&(this.position.x=-292),C>334&&(this.position.x=334),D<-624&&(this.position.y=-624),D>286&&(this.position.y=286),n.isOnLand(this.position.x,this.position.y)?(this.safeTimer+=t,this.safeTimer>.4&&(this.safeTimer=0,this.lastSafe.copy(this.position))):this.enterWater(),this.y=.13,this.root.position.set(this.position.x,this.y,this.position.y),this.root.rotation.y=this.heading,this.syncVisual(t,c,l),this.wheelSpin+=c*t/.7,this.wheels[0].rotation.x=this.wheelSpin,this.wheels[1].rotation.x=this.wheelSpin,this.wheels[2].rotation.x=this.wheelSpin,this.wheels[3].rotation.x=this.wheelSpin,this.wheels[0].rotation.y=this.steer*.42,this.wheels[1].rotation.y=this.steer*.42,(Math.abs(c)>2||this.drifting)&&this.spawnExhaust(t,c),this.updateSmoke(t),this.updateGuide(t),this.updateDebris(t)}syncVisual(t,e,n){const s=Rs(-this.steer*Math.abs(e)/As*.07,-.1,.1),r=Rs(this.throttleSmoothed*-.025+(this.inWater?.08:0),-.05,.08);this.body.rotation.z+=(s-this.body.rotation.z)*Math.min(1,t*7),this.body.rotation.x+=(r-this.body.rotation.x)*Math.min(1,t*5);const o=this.inWater?Math.sin(this.time*5)*.1:Math.sin(this.time*2.1)*.012+Math.sin(this.time*14)*Math.min(.025,Math.abs(e)*.001);this.body.position.y=.1+o,this.shadow&&(this.shadow.position.x=0,this.shadow.position.z=0,this.shadow.material.opacity=this.inWater?.08:.26,this.shadow.scale.setScalar(1+(this.inWater?1.2:0)))}updateGuide(t){if(!this.arrowTarget)return;const e=this.arrowTarget.x-this.position.x,n=this.arrowTarget.z-this.position.y,r=Math.atan2(e,n)-this.heading;this.arrowGroup.rotation.y=this.heading+r+Math.PI,this.arrowGroup.position.y=8.2+Math.sin(this.time*2.3)*.32,this.arrowGroup.rotation.z=Math.sin(this.time*1.7)*.08;const o=1+Math.sin(this.time*3.2)*.05;this.arrowGroup.scale.setScalar(o)}resolveCollisions(t,e){let s=!1,r=0;for(const o of t.colliders){const a=this.position.x-o.x,c=this.position.y-o.z;if(Math.abs(a)>o.hw+2+1||Math.abs(c)>o.hd+2+1)continue;let l=a,h=c;if(o.rot){const g=Math.cos(-o.rot),p=Math.sin(-o.rot);l=a*g-c*p,h=a*p+c*g}const u=Rs(l,-o.hw,o.hw),d=Rs(h,-o.hd,o.hd);let f=l-u,m=h-d,x=Math.hypot(f,m);if(x<2){let g,p;if(x<.001){const A=o.hw-Math.abs(l),C=o.hd-Math.abs(h);A<C?(g=Math.sign(l)||1,p=0,x=A):(g=0,p=Math.sign(h)||1,x=C)}else g=f/x,p=m/x;const S=2-x;let b=g,_=p;if(o.rot){const A=Math.cos(o.rot),C=Math.sin(o.rot);b=g*A-p*C,_=g*C+p*A}this.position.x+=b*S,this.position.y+=_*S;const P=this.velocity.x*b+this.velocity.y*_;P<0&&(this.velocity.x-=b*P*1.18,this.velocity.y-=_*P*1.18,r=Math.max(r,-P)),this.velocity.multiplyScalar(.78),s=!0}}for(const o of t.circles){const a=this.position.x-o.x,c=this.position.y-o.z,l=Math.hypot(a,c),h=o.r+2;if(l<h&&l>1e-4){const u=a/l,d=c/l,f=h-l;this.position.x+=u*f,this.position.y+=d*f;const m=this.velocity.x*u+this.velocity.y*d;m<0&&(this.velocity.x-=u*m*1.25,this.velocity.y-=d*m*1.25,r=Math.max(r,-m)),this.velocity.multiplyScalar(.8),s=!0}}s&&r>4&&(this.cameraShake=Math.min(1,this.cameraShake+r/30),this.callbacks.onImpact?.(r),this.spawnImpact(r))}enterWater(){this.inWater||(this.inWater=!0,this.waterTime=0,this.velocity.multiplyScalar(.25),this.callbacks.onSplash?.(),this.cameraShake=Math.min(1,this.cameraShake+.35))}spawnExhaust(t,e){if(Math.random()>Math.min(1,t*(18+Math.abs(e)*.6)))return;const n=this.smokePool[this.smokeIndex++%this.smokePool.length],s=this.forward;n.position.set(this.position.x-s.x*4.2+(Math.random()-.5)*.5,this.y+.65,this.position.y-s.y*4.2+(Math.random()-.5)*.5),n.visible=!0,n.userData.life=.55+Math.random()*.3,n.userData.max=.85,n.scale.setScalar(.5+Math.random()*.5),n.material.opacity=.34,n.userData.vel=new I((Math.random()-.5)*.8,.5+Math.random()*.7,(Math.random()-.5)*.8)}updateSmoke(t){for(const e of this.smokePool)if(e.visible){if(e.userData.life-=t,e.userData.life<=0){e.visible=!1;continue}e.position.addScaledVector(e.userData.vel,t),e.scale.multiplyScalar(1+t*1.6),e.material.opacity=Math.max(0,e.userData.life/e.userData.max)*.32,e.rotation.x+=t}}spawnImpact(t){if(t<5)return;const e=Math.min(10,2+Math.floor(t/3));for(let n=0;n<e;n++){const s=new Yn(.25+Math.random()*.35,.2+Math.random()*.35,.25+Math.random()*.35),r=[E.taxi,E.red,E.white,E.grey,"#f0b548"],o=new Bt(s,Ot(r[n%r.length]));o.position.set(this.position.x+(Math.random()-.5)*3,.6+Math.random(),this.position.y+(Math.random()-.5)*3),o.castShadow=!0,this.scene.add(o),this.impactDebris.push({mesh:o,life:1.4+Math.random(),vel:new I((Math.random()-.5)*9,3+Math.random()*6,(Math.random()-.5)*9),spin:new I(Math.random()*8,Math.random()*8,Math.random()*8)})}}updateDebris(t){for(let e=this.impactDebris.length-1;e>=0;e--){const n=this.impactDebris[e];n.life-=t,n.vel.y-=16*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.position.y<.25&&(n.mesh.position.y=.25,n.vel.y*=-.35,n.vel.x*=.75,n.vel.z*=.75),n.mesh.rotation.x+=n.spin.x*t,n.mesh.rotation.y+=n.spin.y*t,n.mesh.rotation.z+=n.spin.z*t,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.impactDebris.splice(e,1))}}}function ax(i){const t=i.points.map(([s,r])=>new I(s,0,r)),e=new cc(t,!1,"centripetal",.5),n=e.getLength();return{curve:e,len:n}}function cx(i,t){const e=new At,n=Ot(E.ink,{roughness:.65}),s=Ot(i,{roughness:.34,metalness:.02}),r=Ot("#31525e",{roughness:.2,metalness:.18});v(e,{w:2.7,h:.55,d:5.5,color:E.ink,mat:n,y:.52}),v(e,{w:2.65,h:.75,d:5.2,color:i,mat:s,y:.95}),v(e,{w:2.4,h:.55,d:2.3,color:i,mat:s,y:1.6,z:.45}),v(e,{w:2.45,h:.68,d:2.15,color:"#274b56",mat:r,y:1.65,z:.5}),v(e,{w:2.48,h:.12,d:2.25,color:i,mat:s,y:2,z:.5}),v(e,{w:1.7,h:.22,d:.1,color:"#ffe9ae",mat:Ot("#ffe9ae",{emissive:"#ffdb70",emissiveIntensity:.35}),x:0,y:1.05,z:2.79});for(const o of[-.95,.95])v(e,{w:.42,h:.22,d:.08,color:E.red,x:o,y:1.05,z:-2.79});for(const[o,a]of[[-1.25,1.65],[1.25,1.65],[-1.25,-1.7],[1.25,-1.7]])mt(e,{r:.48,h:.25,color:E.black,x:o,y:.48,z:a,rz:Math.PI/2,segments:10}),mt(e,{r:.2,h:.27,color:E.grey,x:o,y:.48,z:a,rz:Math.PI/2,segments:8});return v(e,{w:1.1,h:.2,d:.2,color:E.white,x:0,y:.82,z:2.76}),pc(e,2.1,.24),Fh(e),e}const lx=[{road:"station",speed:12,count:2},{road:"quaiLacNord",speed:13,count:1},{road:"quaiLacSud",speed:11,count:1},{road:"quaiSud",speed:10,count:1},{road:"cite",speed:8,count:1},{road:"corraterie",speed:8,count:1},{road:"paquisA",speed:9,count:1}],hx=["#d3483d","#2f78b4","#f1e8d5","#3f8a62","#e5a52a","#8e5e9d","#e27945","#b9c4c1"];class ux{constructor(t,e,n,s){this.scene=t,this.world=e,this.taxi=n,this.cars=[],this.time=0,this.rng=er(91882);for(const r of lx){const o=ds.find(l=>l.id===r.road);if(!o)continue;const{curve:a,len:c}=ax(o);for(let l=0;l<r.count;l++){const h=Is(this.rng,hx),u=cx(h,this.rng);t.add(u);const d={group:u,curve:a,len:c,road:o,speed:r.speed*(.85+this.rng()*.3),t:(l+.3+this.rng()*.3)/r.count,dir:this.rng()>.42?1:-1,wait:0,circle:{x:0,z:0,r:2.45,h:3,dynamic:!0}};e.circles.push(d.circle),this.cars.push(d)}}this.birds=[];for(let r=0;r<5;r++){const o=new At;Ot("#f8f7f1",{roughness:.8,side:Le}),v(o,{w:1.1,h:.08,d:.26,color:E.white,x:-.45,y:0,z:0,rz:.3,cast:!1}),v(o,{w:1.1,h:.08,d:.26,color:E.white,x:.45,y:0,z:0,rz:-.3,cast:!1}),v(o,{w:.22,h:.2,d:.55,color:E.offwhite,x:0,y:0,z:0,cast:!1}),o.position.set(135+this.rng()*40,14+this.rng()*16,-40-this.rng()*80),o.userData={cx:o.position.x,cz:o.position.z,r:7+this.rng()*12,phase:this.rng()*Math.PI*2,speed:.2+this.rng()*.2},t.add(o),this.birds.push(o)}this.onBump=s}update(t){this.time+=t;const e=this.taxi.position.x,n=this.taxi.position.y;for(const s of this.cars){if(s.wait>0)s.wait-=t;else{const h=s.curve.getPointAt(s.t),d=s.curve.getTangentAt(s.t).clone().multiplyScalar(s.dir),f=e-h.x,m=n-h.z,x=f*d.x+m*d.z,g=Math.abs(f*d.z-m*d.x);if(x>0&&x<10&&g<4.5)s.group.children.forEach(p=>{p.isMesh&&p.material?.emissive&&(p.material.emissiveIntensity=.8)});else{let p=!1;for(const S of this.cars){if(S===s)continue;if(Math.hypot(S.group.position.x-h.x,S.group.position.z-h.z)<6){p=!0;break}}p||(s.t+=s.dir*s.speed*t/s.len)}s.t>1&&(s.t=1,s.dir=-1,s.wait=.6),s.t<0&&(s.t=0,s.dir=1,s.wait=.6)}const r=s.curve.getPointAt(s.t),o=s.curve.getTangentAt(s.t).multiplyScalar(s.dir),a=new I(o.z,0,-o.x),c=1.75;s.group.position.set(r.x+a.x*c,.12,r.z+a.z*c);const l=Math.atan2(o.x,o.z);s.group.rotation.y+=((l-s.group.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI)*Math.min(1,t*6),s.group.rotation.z=Math.sin(this.time*9+s.t*8)*.006,s.circle.x=s.group.position.x,s.circle.z=s.group.position.z}for(const s of this.birds){const r=s.userData,o=this.time*r.speed+r.phase,a=r.cx+Math.cos(o)*r.r,c=r.cz+Math.sin(o)*r.r;s.position.set(a,s.position.y,c),s.rotation.y=-o,s.rotation.z=Math.sin(this.time*5+r.phase)*.15}}}const kt=i=>document.querySelector(i);class dx{constructor(){this.el={hud:kt("#hud"),timerPlate:kt("#timerPlate"),timerValue:kt("#timerValue"),timerFill:kt("#timerFill"),cashValue:kt("#cashValue"),bestValue:kt("#bestValue"),tripCard:kt("#tripCard"),tripKicker:kt("#tripKicker"),tripName:kt("#tripName"),tripDistance:kt("#tripDistance"),tripIcon:kt("#tripIcon"),tripArrow:kt("#tripArrow"),progressCount:kt("#progressCount"),pips:kt("#pips"),speedValue:kt("#speedValue"),speedFill:kt("#speedFill"),gearValue:kt("#gearValue"),comboPlate:kt("#comboPlate"),comboValue:kt("#comboValue"),dialogueCard:kt("#dialogueCard"),dialogueName:kt("#dialogueName"),dialogueText:kt("#dialogueText"),dialogueAvatar:kt("#dialogueAvatar"),interaction:kt("#interaction"),interactionText:kt("#interactionText"),toast:kt("#toast"),toastTop:kt("#toastTop"),toastMain:kt("#toastMain"),toastSub:kt("#toastSub"),countdown:kt("#countdown"),countdownNumber:kt("#countdownNumber"),startScreen:kt("#startScreen"),pauseScreen:kt("#pauseScreen"),results:kt("#results"),resumeBtn:kt("#resumeBtn"),restartFromPause:kt("#restartFromPause"),restartBtn:kt("#restartBtn"),backToTitle:kt("#backToTitle"),resultKicker:kt("#resultKicker"),resultTitle:kt("#resultTitle"),resultRank:kt("#resultRank"),resultSub:kt("#resultSub"),resultCash:kt("#resultCash"),resultFares:kt("#resultFares"),resultBest:kt("#resultBest"),soundToggle:kt("#soundToggle"),minimap:kt("#minimap"),touchControls:kt("#touchControls"),loading:kt("#loading"),startBtn:kt("#startBtn"),comboPop:kt("#comboPop"),pauseBtn:kt("#pauseBtn"),screenPin:kt("#screenPin"),screenPinArrow:kt("#screenPinArrow"),screenPinDist:kt("#screenPinDist")},this.pipElements=[],this.buildPips(),this.mapCtx=this.el.minimap.getContext("2d"),this.mapFrame=0,this.lastMapTarget=null,this.toastTimer=null,this.mapTime=0,this._mapBase=document.createElement("canvas"),this._mapBase.width=this.el.minimap.width,this._mapBase.height=this.el.minimap.height,this.baseCtx=this._mapBase.getContext("2d"),this.drawBaseMap(),this.best=0;try{this.best=Number(localStorage.getItem("brickTaxiBest")||0)}catch{}this.setBest(this.best)}buildPips(){this.el.pips.innerHTML="";for(let t=0;t<10;t++){const e=document.createElement("div");e.className="pip",this.el.pips.appendChild(e),this.pipElements.push(e)}}hideLoading(){this.el.loading.classList.add("done"),setTimeout(()=>this.el.loading.classList.add("hidden"),600)}showStart(){this.el.startScreen.classList.remove("hidden"),document.body.classList.remove("leaving-title")}hideStart(){document.body.classList.add("leaving-title"),setTimeout(()=>this.el.startScreen.classList.add("hidden"),520)}setSound(t){this.el.soundToggle.textContent=t?"SOUND ON":"SOUND OFF",this.el.soundToggle.setAttribute("aria-pressed",String(t))}showHUD(){document.body.classList.add("playing"),this.el.hud.setAttribute("aria-hidden","false")}hideHUD(){document.body.classList.remove("playing","counting"),this.el.hud.setAttribute("aria-hidden","true")}setCash(t,e=null){this.el.cashValue.textContent=Math.round(t).toLocaleString("en-CH"),e!==null&&this.setBest(e)}setBest(t){this.best=t,this.el.bestValue.textContent=t?`CHF ${Math.round(t).toLocaleString("en-CH")}`:"—"}setTimer(t){const e=Math.max(0,t);this.el.timerValue.textContent=Il(e),this.el.timerFill.style.width=`${Math.max(0,Math.min(100,e/99*100))}%`,this.el.timerPlate.classList.toggle("warning",e<=10.5&&e>0)}setTrip({kicker:t,name:e,icon:n,distance:s,eta:r,arrowAngle:o=0}){this.el.tripKicker.textContent=t,this.el.tripName.textContent!==e&&(this.el.tripName.textContent=e,this.el.tripCard.classList.remove("pop"),this.el.tripCard.offsetWidth,this.el.tripCard.classList.add("pop")),this.el.tripIcon.textContent=n,this.el.tripDistance.textContent=`${Wa(s)} · ETA ${Il(r)}`,this.el.tripArrow.style.transform=`rotate(${o}deg)`,this.lastMapTarget=Ei.find(a=>a.name===e)||null}setArrow(t){this.el.tripArrow.style.transform=`rotate(${t}deg)`}setProgress(t,e=10){this.el.progressCount.textContent=`${Math.max(0,t)} / ${e}`,this.pipElements.forEach((n,s)=>{n.classList.toggle("done",s<t),n.classList.toggle("current",s===t)})}setSpeed(t){this.el.speedValue.textContent=Math.round(t);const e=Math.max(0,Math.min(1,t/125));this.el.speedFill.style.strokeDashoffset=String(260-260*e),this.el.gearValue.textContent=t<1?"N":"D"}setCombo(t,e){this.el.comboValue.textContent=`x${t.toFixed(1)}`,this.el.comboPlate.classList.toggle("active",e)}showDialogue(t,e,n="#d9a66b"){this.el.dialogueName.textContent=t.toUpperCase(),this.el.dialogueText.textContent=e,this.el.dialogueAvatar.style.setProperty("--avatar",n),this.el.dialogueCard.classList.remove("hidden-bubble")}hideDialogue(){this.el.dialogueCard.classList.add("hidden-bubble")}showInteraction(t){this.el.interactionText.textContent=t,this.el.interaction.classList.add("show")}hideInteraction(){this.el.interaction.classList.remove("show")}showToast(t,e,n,s=2200){this.el.toastTop.textContent=t,this.el.toastMain.textContent=e,this.el.toastSub.textContent=n||"",this.el.toast.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.el.toast.classList.remove("show"),s)}hideToast(){clearTimeout(this.toastTimer),this.el.toast.classList.remove("show")}comboPop(t){this.el.comboPop.textContent=t,this.el.comboPop.classList.add("show"),clearTimeout(this._comboTimer),this._comboTimer=setTimeout(()=>this.el.comboPop.classList.remove("show"),650)}countdownStep(t){document.body.classList.add("counting"),this.el.countdown.classList.remove("hidden"),this.el.countdownNumber.textContent=t,this.el.countdownNumber.style.animation="none",this.el.countdownNumber.offsetWidth,this.el.countdownNumber.style.animation=""}hideCountdown(){this.el.countdown.classList.add("hidden"),document.body.classList.remove("counting")}showPause(t){this.el.pauseScreen.classList.toggle("hidden",!t)}showResults({complete:t,cash:e,fares:n,rank:s,title:r,sub:o,best:a}){document.body.classList.remove("playing","counting"),this.el.results.classList.remove("hidden"),this.el.resultKicker.textContent=t?"GRAND TOUR COMPLETE":"SHIFT OVER",this.el.resultTitle.textContent=r,this.el.resultRank.textContent=s,this.el.resultSub.textContent=o,this.el.resultCash.textContent=`CHF ${Math.round(e).toLocaleString("en-CH")}`,this.el.resultFares.textContent=`${n} / 10`,this.el.resultBest.textContent=`CHF ${Math.round(a).toLocaleString("en-CH")}`}hideResults(){this.el.results.classList.add("hidden")}setScreenPin(t,e,n,s,r){const o=this.el.screenPin;if(!r){o.classList.remove("show");return}o.style.left=`${t}px`,o.style.top=`${e}px`,this.el.screenPinArrow.style.transform=`rotate(${n+Math.PI/2}rad)`,this.el.screenPinDist.textContent=Wa(s),o.classList.add("show")}hideScreenPin(){this.el.screenPin.classList.remove("show")}countdownFade(){this.el.countdown.classList.add("hidden"),document.body.classList.remove("counting")}drawBaseMap(){const t=this.baseCtx,e=this._mapBase.width,n=this._mapBase.height,s=this.mapTransform(e,n);t.clearRect(0,0,e,n);const r=t.createLinearGradient(0,0,e,n);r.addColorStop(0,"#8bd5e2"),r.addColorStop(1,"#68bdd2"),t.fillStyle=r,t.fillRect(0,0,e,n),t.strokeStyle="rgba(255,255,255,.12)",t.lineWidth=1;for(let c=0;c<e;c+=28)t.beginPath(),t.moveTo(c,0),t.lineTo(c,n),t.stroke();for(let c=0;c<n;c+=28)t.beginPath(),t.moveTo(0,c),t.lineTo(e,c),t.stroke();for(const c of[ns,is])t.beginPath(),c.forEach(([l,h],u)=>{const d=s(l,h);u===0?t.moveTo(d.x,d.y):t.lineTo(d.x,d.y)}),t.closePath(),t.fillStyle="#f2e6c9",t.fill(),t.lineWidth=5,t.strokeStyle="#8f9b91",t.stroke(),t.lineWidth=1.5,t.strokeStyle="rgba(255,255,255,.7)",t.stroke();t.fillStyle="rgba(112,158,91,.45)";for(const[c,l,h,u]of[[84,17,42,26],[-31,152,95,42],[-171,34,45,28]]){const d=s(c,l);t.fillRect(d.x-h*s.s/2,d.y-u*s.s/2,h*s.s,u*s.s)}t.fillStyle="#c1b8a4";for(const c of Bh)t.beginPath(),c.forEach(([l,h],u)=>{const d=s(l,h);u===0?t.moveTo(d.x,d.y):t.lineTo(d.x,d.y)}),t.closePath(),t.fill();for(const c of[{w:9,c:"#cabfaa"},{w:3.6,c:"#fbf7eb"}]){t.lineCap="round",t.lineJoin="round",t.strokeStyle=c.c,t.lineWidth=c.w;for(const l of ds)t.beginPath(),l.points.forEach(([h,u],d)=>{const f=s(h,u);d===0?t.moveTo(f.x,f.y):t.lineTo(f.x,f.y)}),t.stroke()}for(const c of Ei){const l=s(c.x,c.z);t.beginPath(),t.arc(l.x,l.y,5,0,Math.PI*2),t.fillStyle=c.color,t.fill(),t.lineWidth=2,t.strokeStyle="#26323a",t.stroke()}t.save();const o=e-22,a=n-25;t.fillStyle="#25343a",t.beginPath(),t.moveTo(o,a-14),t.lineTo(o-6,a+6),t.lineTo(o,a+2),t.lineTo(o+6,a+6),t.closePath(),t.fill(),t.font="900 9px Nunito, sans-serif",t.fillStyle="#354a50",t.textAlign="center",t.fillText("N",o,a+20),t.restore()}mapTransform(t,e){const c=Math.min((t-30)/425,(e-30)/744),l=t/2-15/2*c,h=e/2- -360/2*c,u=(d,f)=>({x:l+d*c,y:h+f*c});return u.s=c,u}drawMinimap(t,e,n,s,r,o){this.mapFrame++,this.mapTime=s;const a=this.mapCtx,c=this.el.minimap.width,l=this.el.minimap.height;a.clearRect(0,0,c,l),a.drawImage(this._mapBase,0,0);const h=this.mapTransform(c,l);if(e){const f=h(t.position.x,t.position.y),m=h(e.x,e.z);a.save(),a.setLineDash([6,7]),a.lineDashOffset=-s*18,a.strokeStyle="rgba(27, 42, 47, .65)",a.lineWidth=3.2,a.beginPath(),a.moveTo(f.x,f.y),a.lineTo(m.x,m.y),a.stroke(),a.setLineDash([3,8]),a.strokeStyle="#ffce35",a.lineWidth=2,a.stroke(),a.restore()}let u=null;if(e){let f=22;for(const m of Ei){const x=Math.hypot(e.x-m.x,e.z-m.z);x<f&&(f=x,u=m.id)}}for(const f of Ei){const m=h(f.x,f.z),x=f.id===u;if(a.beginPath(),a.arc(m.x,m.y,x?9:4.6,0,Math.PI*2),a.fillStyle=f.color,a.fill(),a.lineWidth=x?3:1.8,a.strokeStyle=x?"#ffcd33":"#2c3539",a.stroke(),x){const g=14+Math.sin(s*3.8)*4;a.beginPath(),a.arc(m.x,m.y,g,0,Math.PI*2),a.strokeStyle=`rgba(255,205,51,${.42+Math.sin(s*3.8)*.15})`,a.lineWidth=3,a.stroke()}f.id==="gare"&&(a.font="900 9px Nunito, sans-serif",a.textAlign="center",a.fillStyle="rgba(35,47,50,.75)",a.fillText("N",m.x,m.y-13))}const d=h(t.position.x,t.position.y);a.save(),a.translate(d.x,d.y),a.rotate(-t.heading),a.beginPath(),a.moveTo(0,14),a.lineTo(-8,-8),a.lineTo(0,-3.5),a.lineTo(8,-8),a.closePath(),a.fillStyle="#f6c62f",a.fill(),a.lineWidth=2.3,a.strokeStyle="#fff7df",a.stroke(),a.restore(),a.beginPath(),a.arc(d.x,d.y,16,0,Math.PI*2),a.strokeStyle="rgba(22,35,43,.3)",a.lineWidth=2,a.stroke()}setMinimapTarget(t){this.lastMapTarget=t}}const fx={C2:65.41,D2:73.42,E2:82.41,F2:87.31,G2:98,A2:110,B2:123.47,C3:130.81,D3:146.83,E3:164.81,F3:174.61,G3:196,A3:220,B3:246.94,C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,G5:783.99,A5:880,C6:1046.5,E6:1318.5};function Or(i){return typeof i=="number"?i:fx[i]||440}class px{constructor(){this.ctx=null,this.muted=!1,this.ready=!1,this.musicTimer=null,this.nextNoteTime=0,this.step=0,this.musicGain=null,this.engine=null,this.skid=null,this._noiseBuffer=null,this._musicPlaying=!1}async init(){if(this.ctx){await this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,await this.ctx.resume(),this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.9,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.12,this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.65,this.sfxGain.connect(this.master),this._noiseBuffer=this.makeNoise(2),this.createEngine(),this.createSkid(),this.ready=!0)}makeNoise(t){const e=this.ctx.sampleRate,n=e*t,s=this.ctx.createBuffer(1,n,e),r=s.getChannelData(0);let o=0;for(let a=0;a<n;a++){const c=Math.random()*2-1;o=o*.86+c*.14,r[a]=o}return s}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.04),this.engine&&this.engine.gain.gain.setTargetAtTime(t?0:.033,this.ctx.currentTime,.04),this.skid&&this.skid.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.08)}createEngine(){if(!this.ctx)return;const t=this.ctx,e=t.createGain();e.gain.value=0;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=420,n.Q.value=2.5;const s=t.createOscillator();s.type="sawtooth",s.frequency.value=48;const r=t.createOscillator();r.type="triangle",r.frequency.value=96;const o=t.createGain();o.gain.value=.22;const a=t.createOscillator();a.type="sine",a.frequency.value=32;const c=t.createGain();c.gain.value=.8,s.connect(n),r.connect(o),o.connect(n),a.connect(c),c.connect(e),n.connect(e),e.connect(this.master),s.start(),r.start(),a.start(),this.engine={oscA:s,oscB:r,sub:a,filter:n,gain:e}}createSkid(){if(!this.ctx)return;const t=this.ctx.createBufferSource();t.buffer=this._noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=1500,e.Q.value=1.2;const n=this.ctx.createGain();n.gain.value=0,t.connect(e),e.connect(n),n.connect(this.sfxGain),t.start(),this.skid={src:t,filter:e,gain:n}}setEngine(t,e,n){if(!this.engine)return;const s=this.ctx.currentTime,r=Math.min(1,Math.abs(t)/34),o=42+r*95;this.engine.oscA.frequency.setTargetAtTime(o,s,.08),this.engine.oscB.frequency.setTargetAtTime(o*2.02,s,.08),this.engine.sub.frequency.setTargetAtTime(o*.5,s,.08),this.engine.filter.frequency.setTargetAtTime(260+r*900+e*160,s,.1);const a=this.muted?0:.026+r*.032+Math.abs(e)*.014;this.engine.gain.gain.setTargetAtTime(a,s,.09),this.skid&&(this.skid.gain.gain.setTargetAtTime(this.muted?0:n?.08:0,s,.07),this.skid.filter.frequency.setTargetAtTime(1200+r*1200,s,.1))}stopEngine(){this.engine&&(this.engine.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.12),this.skid&&this.skid.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.1))}ping(t,e=0,n=.14,s=.08,r="triangle"){if(!this.ctx||this.muted)return;const o=this.ctx.currentTime+e,a=this.ctx.createOscillator(),c=this.ctx.createGain(),l=this.ctx.createBiquadFilter();a.type=r,a.frequency.setValueAtTime(t,o),l.type="lowpass",l.frequency.value=6e3,c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(s,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(l),l.connect(c),c.connect(this.sfxGain),a.start(o),a.stop(o+n+.03)}noise(t=0,e=.12,n=.1,s=1100){if(!this.ctx||this.muted)return;const r=this.ctx.currentTime+t,o=this.ctx.createBufferSource();o.buffer=this._noiseBuffer;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=s,a.Q.value=.8;const c=this.ctx.createGain();c.gain.setValueAtTime(n,r),c.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a),a.connect(c),c.connect(this.sfxGain),o.start(r),o.stop(r+e+.02)}click(){this.ping(660,0,.06,.035,"square")}pickup(){[523.25,659.25,783.99,1046.5].forEach((t,e)=>this.ping(t,e*.075,.22,.065,"triangle")),this.noise(0,.14,.02,2500)}delivered(){[392,523.25,659.25,783.99,1046.5].forEach((t,e)=>this.ping(t,e*.06,.32,.06,"triangle")),this.noise(.05,.25,.04,1800)}cash(){this.ping(1200,.02,.09,.04,"sine"),this.ping(1800,.12,.16,.03,"sine")}impact(t=1){this.noise(0,.14+Math.min(.2,t/40),.12,180),this.ping(60,0,.18,.1,"sine")}splash(){this.noise(0,.35,.16,500),this.noise(.05,.4,.1,1600)}horn(){this.ping(370,0,.2,.06,"sawtooth"),this.ping(440,.04,.2,.055,"sawtooth"),this.ping(370,.27,.13,.05,"sawtooth"),this.ping(440,.3,.13,.045,"sawtooth")}countdown(t=!1){t?(this.ping(523.25,0,.2,.1,"square"),this.ping(783.99,.12,.3,.08,"square")):this.ping(392,0,.1,.05,"square")}fail(){[523.25,392,329.63,261.63].forEach((t,e)=>this.ping(t,e*.12,.28,.06,"sine"))}startMusic(){!this.ctx||this._musicPlaying||(this._musicPlaying=!0,this.nextNoteTime=this.ctx.currentTime+.1,this.step=0,this.musicTimer=setInterval(()=>this.scheduleMusic(),80))}stopMusic(){this._musicPlaying=!1,this.musicTimer&&clearInterval(this.musicTimer),this.musicTimer=null}scheduleMusic(){if(!this.ctx||!this._musicPlaying)return;const t=60/112;for(;this.nextNoteTime<this.ctx.currentTime+.35;){const e=this.step,n=Math.floor(e/8)%4,s=e%8,o=[{bass:"C2",notes:["C4","E4","G4","B4"]},{bass:"A2",notes:["A3","C4","E4","G4"]},{bass:"F2",notes:["F3","A3","C4","E4"]},{bass:"G2",notes:["G3","B3","D4","F4"]}][n];if((s===0||s===4)&&this.pluck(Or(o.bass),this.nextNoteTime,.28,.085,"sine"),s===3&&n%2===1&&this.pluck(Or(o.bass)*2,this.nextNoteTime,.12,.035,"triangle"),s%2===0){const a=o.notes[(s/2+n)%o.notes.length];this.pluck(Or(a),this.nextNoteTime,.16,.022,"triangle")}(s===2||s===6)&&this.hat(this.nextNoteTime,.025),s===0&&this.hat(this.nextNoteTime,.035),s===7&&n===3&&this.pluck(Or("G4")*2,this.nextNoteTime+t*.5,.22,.025,"triangle"),this.nextNoteTime+=t/2,this.step++}}pluck(t,e,n,s,r){if(this.muted)return;const o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(2600,e),c.frequency.exponentialRampToValueAtTime(700,e+n),o.type=r,o.frequency.value=t,a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.015),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(c),c.connect(a),a.connect(this.musicGain),o.start(e),o.stop(e+n+.03)}hat(t,e){if(this.muted)return;const n=this.ctx.createBufferSource();n.buffer=this._noiseBuffer;const s=this.ctx.createBiquadFilter();s.type="highpass",s.frequency.value=7e3;const r=this.ctx.createGain();r.gain.setValueAtTime(e,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.04),n.connect(s),s.connect(r),r.connect(this.musicGain),n.start(t),n.stop(t+.06)}}function mx(i,t,e="#e04438"){const n=document.createElement("canvas");n.width=512,n.height=256;const s=n.getContext("2d");s.clearRect(0,0,512,256),s.fillStyle="rgba(13,29,36,.22)",Fs(s,18,26,476,174,40),s.fill(),s.fillStyle="#fff8e4",Fs(s,12,16,476,174,40),s.fill(),s.strokeStyle="#17252d",s.lineWidth=9,s.stroke(),s.beginPath(),s.moveTo(82,187),s.lineTo(74,242),s.lineTo(148,189),s.closePath(),s.fillStyle="#fff8e4",s.fill(),s.strokeStyle="#17252d",s.stroke(),s.fillStyle=e,Fs(s,34,34,168,42,14),s.fill(),s.fillStyle="#fff8e4",s.font="900 20px Nunito, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i.toUpperCase(),118,56),s.fillStyle="#15252d",s.font='900 52px "Lilita One", "Arial Black", sans-serif',s.textAlign="left",s.fillText(t,34,124);const r=new Ii(n);return r.colorSpace=De,r.anisotropy=8,r}function Fs(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}class gx{constructor(t){this.scene=t,this.group=new At,this.group.visible=!1,t.add(this.group),this.bubble=null,this.time=0,this.data=null,this.phase=0}spawn({x:t,z:e,name:n,tag:s,line:r,shirt:o,hair:a,faceRight:c,accessory:l="bag"}){this.clear(),this.data={x:t,z:e,name:n},this.group.position.set(t,.1,e),this.group.visible=!0;const h=Oh({shirt:o,hair:a,pants:"#37434b",accessory:l,scale:.92,pose:"longhair",hat:null});h.rotation.y=c?Math.PI/2:-Math.PI/2,h.position.y=.02,this.group.add(h),this.figure=h,pc(this.group,1,.22);const u=mx(n,"TAXI!",o||"#e04438"),d=new Xs({map:u,transparent:!0,depthWrite:!1}),f=new $r(d);f.position.set(0,5.9,0),f.scale.set(6.1,3.05,1),this.group.add(f),this.bubble=f,this.baseY=.1,this.phase=Math.random()*5,this.fullLine=r,this.tag=s}clear(){this.figure&&(this.group.traverse(t=>{t.isSprite&&(t.material.map?.dispose?.(),t.material.dispose?.())}),this.group.clear(),this.figure=null,this.bubble=null,this.group.visible=!1)}hide(){this.group.visible=!1}update(t,e,n,s){if(this.time+=t,!this.group.visible||!this.figure)return;const r=Math.sin(e*4.2+this.phase)*.045;this.figure.position.y=.02+r;const o=this.figure.userData.arms?.find(a=>a.side===1)?.pivot;if(o&&(o.rotation.z=2+Math.sin(e*8+this.phase)*.32),this.bubble){this.bubble.position.y=5.9+Math.sin(e*2.2+this.phase)*.13;const a=1+Math.sin(e*2.8+this.phase)*.018;this.bubble.scale.set(6.1*a,3.05*a,1)}if(n){const a=n.x-this.group.position.x,c=n.y-this.group.position.z;if(Math.hypot(a,c)<24){const h=Math.atan2(a,c);let u=this.figure.rotation.y,d=(h-u+Math.PI*3)%(Math.PI*2)-Math.PI;this.figure.rotation.y=u+d*Math.min(1,t*3)}}}}function xx(i,t){const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d");n.clearRect(0,0,512,256),n.fillStyle="rgba(10, 28, 35, .22)",Fs(n,25,27,462,118,26),n.fill(),n.fillStyle=t==="pickup"?"#ffc928":"#78cf63",Fs(n,18,18,462,118,26),n.fill(),n.strokeStyle="#17242b",n.lineWidth=9,n.stroke(),n.fillStyle="#17242b",n.font='900 54px "Lilita One", "Arial Black", sans-serif',n.textAlign="center",n.textBaseline="middle";const s=i.length>24?i.slice(0,23)+"…":i;n.fillText(s.toUpperCase(),256,79),n.beginPath(),n.moveTo(228,142),n.lineTo(284,142),n.lineTo(256,186),n.closePath(),n.fillStyle=t==="pickup"?"#ffc928":"#78cf63",n.fill(),n.lineWidth=8,n.strokeStyle="#17242b",n.stroke();const r=new Ii(e);return r.colorSpace=De,r.anisotropy=8,r}class _x{constructor(t){this.scene=t,this.group=new At,this.group.visible=!1,t.add(this.group),this.ringMat=new mn({color:E.yellow,transparent:!0,opacity:.9,depthWrite:!1,side:Le}),this.ring=new Bt(new gs(6.4,.16,7,56),this.ringMat),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.09,this.group.add(this.ring),this.inner=new Bt(new hc(4.8,5,48),new mn({color:E.yellow,transparent:!0,opacity:.55,depthWrite:!1,side:Le})),this.inner.rotation.x=-Math.PI/2,this.inner.position.y=.1,this.group.add(this.inner),this.tickGroup=new At,this.tickGroup.position.y=.12,this.group.add(this.tickGroup);for(let r=0;r<12;r++){const o=r/12*Math.PI*2;v(this.tickGroup,{w:.22,h:.07,d:.9,color:E.yellow,x:Math.cos(o)*5.8,y:0,z:Math.sin(o)*5.8,ry:-o+Math.PI/2,cast:!1})}this.tickGroup.children.forEach(r=>{r.material=new mn({color:E.yellow})});const e=new mn({color:"#ffd451",transparent:!0,opacity:.09,depthWrite:!1,blending:yi,side:Le});this.beam=new Bt(new tn(1.2,4.8,40,16,1,!0),e),this.beam.position.y=20,this.group.add(this.beam),this.topGroup=new At,this.topGroup.position.y=15,this.group.add(this.topGroup);const n=new At;for(let r=0;r<4;r++)v(n,{w:.75,h:2.8,d:.32,color:E.yellow,x:0,y:0,z:0,rz:r*Math.PI/4});this.topGroup.add(n);const s=new Bt(new so(.72,12,8),Ot(E.offwhite,{roughness:.3}));this.topGroup.add(s),this.sprite=null,this.labelName=null,this.labelKind=null,this.time=0,this.mode="pickup",this.target=null}setTarget(t,e,n,s="drop"){if(this.group.visible=!0,this.group.position.set(t,0,e),this.target={x:t,z:e},this.mode=s,this.beam.visible=s==="drop",this.ringMat.color.set(s==="pickup"?E.yellow:"#73d660"),this.inner.material.color.set(s==="pickup"?E.yellow:"#73d660"),this.tickGroup.children.forEach(r=>r.material.color.set(s==="pickup"?E.yellow:"#73d660")),this.topGroup.visible=s==="drop",this.labelName!==n||this.labelKind!==s){this.labelName=n,this.labelKind=s,this.sprite&&(this.group.remove(this.sprite),this.sprite.material.map.dispose(),this.sprite.material.dispose());const r=new Xs({map:xx(n,s),transparent:!0,depthWrite:!1});this.sprite=new $r(r),this.sprite.position.set(0,s==="drop"?21.5:8.2,0),this.sprite.scale.set(s==="drop"?12.5:9.4,s==="drop"?6.2:4.7,1),this.group.add(this.sprite)}this.sprite&&(this.sprite.position.y=s==="drop"?21.5:8.2,this.sprite.visible=s==="drop")}update(t,e){if(this.time+=t,!this.group.visible)return;this.ring.rotation.z=e*.25,this.inner.rotation.z=-e*.16,this.tickGroup.rotation.y=-e*.18;const n=1+Math.sin(e*3.3)*.035;this.inner.scale.setScalar(n),this.ringMat.opacity=.76+Math.sin(e*3.6)*.14,this.beam.material.opacity=.055+Math.sin(e*2.4)*.025,this.topGroup.rotation.y=e*.65,this.topGroup.position.y=15+Math.sin(e*1.9)*1.2,this.sprite&&(this.sprite.position.y=(this.mode==="drop"?21.5:8.2)+Math.sin(e*2.4)*.35)}hide(){this.group.visible=!1}}class vx{constructor(t){this.scene=t,this.items=[]}burst(t,e,n=[E.yellow,E.red,E.white,E.blue,E.green]){for(let s=0;s<26;s++){const r=new Yn(.28+Math.random()*.4,.2+Math.random()*.3,.28+Math.random()*.4),o=new Bt(r,Ot(n[s%n.length]));o.position.set(t+(Math.random()-.5)*4,1+Math.random()*1.5,e+(Math.random()-.5)*4),o.castShadow=!0,this.scene.add(o),this.items.push({mesh:o,life:1.4+Math.random()*.7,vel:new I((Math.random()-.5)*8,5+Math.random()*8,(Math.random()-.5)*8),rot:new I(Math.random()*8,Math.random()*8,Math.random()*8)})}}update(t){for(let e=this.items.length-1;e>=0;e--){const n=this.items[e];n.life-=t,n.vel.y-=18*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.position.y<.25&&(n.mesh.position.y=.25,n.vel.y*=-.3,n.vel.x*=.66,n.vel.z*=.66),n.mesh.rotation.x+=n.rot.x*t,n.mesh.rotation.y+=n.rot.y*t,n.mesh.rotation.z+=n.rot.z*t,n.life<0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.items.splice(e,1))}}}const yx=document.querySelector("#scene"),en=new l1({canvas:yx,antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1}),qa=window.matchMedia?.("(pointer: coarse)")?.matches;en.setPixelRatio(Math.min(window.devicePixelRatio||1,qa?1.4:1.8));en.setSize(window.innerWidth,window.innerHeight);en.outputColorSpace=De;en.toneMapping=Wl;en.toneMappingExposure=1.02;en.shadowMap.enabled=!0;en.shadowMap.type=Hl;en.shadowMap.autoUpdate=!1;en.shadowMap.needsUpdate=!0;const Ge=new Ud;Ge.fog=new ic("#d7eef2",.00115);p1(Ge);const ae=new an(58,window.innerWidth/window.innerHeight,.4,2200);ae.position.set(0,15,20);const at=new dx,re=new px;let Ln,Tt,vn,Li,Ks,to;const Mx=new Sf("#d3ecff","#d4c3a3",1.34);Ge.add(Mx);const Sx=new Ef("#ffeccd",.24);Ge.add(Sx);const Oe=new Th("#fff0d2",2.1);Oe.position.set(-68,108,-58);Oe.castShadow=!0;Oe.shadow.mapSize.set(qa?512:1024,qa?512:1024);Oe.shadow.camera.near=1;Oe.shadow.camera.far=330;Oe.shadow.camera.left=-68;Oe.shadow.camera.right=68;Oe.shadow.camera.top=68;Oe.shadow.camera.bottom=-68;Oe.shadow.bias=-22e-5;Oe.shadow.normalBias=.035;Oe.shadow.radius=2.4;Ge.add(Oe);Ge.add(Oe.target);const Gh=new Th("#9bd4e6",.32);Gh.position.set(90,45,110);Ge.add(Gh);const Ul=55,wx=99,Yo={x:-84,z:-129.5,heading:Math.PI},Zo={x:145,z:-40,heading:2.35},K={state:"loading",game:null,runTime:0,worldTime:0,startBusy:!1,lastMapDraw:0,lastHudUpdate:0,lowTick:99},Me={forward:!1,back:!1,left:!1,right:!1,drift:!1};let eo=!1,Ke=!1,Wr=0,Ya=0,zl=new I,ei=null;const Sn=new I,Mn=new I,Ko=new I;function bx(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function $o(i,t,e,n){return i+(t-i)*(1-Math.exp(-e*n))}function Hh(i,t){const e=i.z??i.y,n=t.z??t.y;return Math.hypot(i.x-t.x,e-n)}function Vh(i){const t={gare:[3.2,2.5],belAir:[3.3,1.8],pont:[2.8,1],jardin:[2.6,2.2],jet:[2,2.4],bains:[2.1,2.2],brokenChair:[3,2.3],oldTown:[2.4,2.1],neuve:[2.8,2.2],bastions:[2.4,1.8]},[e,n]=t[i.id]||[2.4,2];return{x:i.stopX+e,z:i.stopZ+n}}function mc(i){return i?Hh({x:Tt.position.x,z:Tt.position.y},i)*4:0}function Ex(){const i=document.createElement("div");return i.id="wipe",Object.assign(i.style,{position:"fixed",inset:"0",zIndex:"40",background:"#fff2d1",opacity:"0",pointerEvents:"none",transition:"opacity .32s ease"}),document.body.appendChild(i),{show:()=>{i.style.pointerEvents="auto",i.style.opacity="1"},hide:()=>{i.style.opacity="0",setTimeout(()=>{i.style.pointerEvents="none"},360)}}}let fs;const Ci=i=>new Promise(t=>setTimeout(t,i));async function Tx(){try{document.fonts?.ready&&await document.fonts.ready}catch{}await Ci(60),Ln=X1(Ge),Tt=new ox(Ge,{onImpact:i=>{re.impact(i)},onSplash:()=>{re.splash(),K.state==="playing"&&K.runTime>(K.game.splashGuardUntil||0)&&(K.game.splashGuardUntil=K.runTime+4,K.game.timer=Math.max(0,K.game.timer-3),at.showToast("SPLASH!","INTO THE LAKE","−3 seconds · back to the quay",2e3))},onRespawn:()=>{Ke=!1,K.game.splashCount=(K.game.splashCount||0)+1}}),vn=new gx(Ge),Li=new _x(Ge),Ks=new vx(Ge),to=new ux(Ge,Ln,Tt,i=>re.impact(i)),fs=Ex(),Wh(),at.hideLoading(),at.setSound(!re.muted),K.state="title",K.startBusy=!1,at.el.startBtn.addEventListener("click",gc),at.el.soundToggle.addEventListener("click",Kh),at.el.resumeBtn.addEventListener("click",()=>Os(!1)),at.el.pauseBtn.addEventListener("click",()=>Yh()),at.el.restartFromPause.addEventListener("click",()=>Nl()),at.el.restartBtn.addEventListener("click",()=>Nl()),at.el.backToTitle.addEventListener("click",()=>Ax()),Cx(),Px(),Lx(),window.addEventListener("blur",()=>{K.state==="playing"&&Os(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&K.state==="playing"&&Os(!0)}),requestAnimationFrame(Qh)}function Wh(){K.state="title",Ke=!1,Tt.resetAt(Zo.x,Zo.z,Zo.heading),Tt.setGuide(null),Tt.setPassenger(!1),Li.hide(),vn.clear(),at.hideHUD(),at.hideScreenPin(),at.hideCountdown(),at.showStart(),at.hideResults(),at.showPause(!1),at.hideInteraction(),at.hideToast(),at.hideDialogue(),re.stopEngine(),Wr=0}function Xh(){document.body.classList.remove("paused"),K.runTime=0,K.lowTick=99,K.game={timer:Ul,cash:0,tripIndex:0,carrying:!1,waiting:!1,done:0,combo:1,visited:new Set,fareStart:0,spawnTimer:0,splashCount:0,lastImpact:0,dialogueHideAt:0,awaitingNext:!1},Tt.resetAt(Yo.x,Yo.z,Yo.heading),Tt.driftScore=0,Tt.setPassenger(!1),vn.clear(),Ks.items.forEach(i=>{Ge.remove(i.mesh),i.mesh.geometry.dispose()}),Ks.items=[],Ke=!1,at.setCash(0),at.setTimer(Ul),at.setProgress(0),at.setCombo(1,!1),at.hideToast(),at.hideInteraction(),at.hideDialogue(),at.hideResults(),at.showPause(!1),at.setTrip({kicker:`FARE WAITING · ${ln[0].fare.toUpperCase()}`,name:ln[0].from.name,icon:ln[0].from.glyph,distance:mc(Vh(ln[0].from)),eta:5,arrowAngle:0}),Zh(0),Nx(!0)}async function gc(){if(!(K.startBusy||K.state!=="title")){K.startBusy=!0,at.el.startBtn.setAttribute("disabled","true");try{await re.init(),re.click(),re.startMusic()}catch{}fs.show(),await Ci(340),at.hideStart(),Xh(),at.showHUD(),K.state="countdown",fs.hide(),await Ci(300),await qh()}}async function Nl(){if(!K.startBusy){K.startBusy=!0,at.el.restartBtn.setAttribute("disabled","true");try{await re.init(),re.startMusic()}catch{}at.hideResults(),at.showPause(!1),fs.show(),await Ci(330),at.showHUD(),Xh(),K.state="countdown",fs.hide(),await Ci(260),await qh()}}function Ax(){at.hideResults(),Wh(),K.startBusy=!1,at.el.startBtn.removeAttribute("disabled"),at.el.restartBtn.removeAttribute("disabled"),re.stopMusic(),re.stopEngine(),fs?.hide()}async function qh(){at.el.countdown.classList.remove("hidden");for(const[i,t]of["3","2","1"].entries()){if(K.state!=="countdown")return;at.countdownStep(t),re.countdown(!1),await Ci(690)}K.state==="countdown"&&(at.countdownStep("GO!"),at.el.countdownNumber.style.fontSize="clamp(90px, 16vw, 190px)",re.countdown(!0),K.state="playing",at.showHUD(),await Ci(480),at.hideCountdown(),at.el.countdownNumber.style.fontSize="",K.startBusy=!1,document.querySelector(".hints")?.classList.remove("fade"),clearTimeout(K.hintsTimer),K.hintsTimer=setTimeout(()=>document.querySelector(".hints")?.classList.add("fade"),16e3))}function Os(i){i&&K.state==="playing"?(K.state="paused",Me.forward=Me.back=Me.left=Me.right=Me.drift=!1,at.showPause(!0),document.body.classList.add("paused"),re.stopEngine(),re.stopMusic()):!i&&K.state==="paused"&&(K.state="playing",at.showPause(!1),document.body.classList.remove("paused"),re.startMusic(),at.el.resumeBtn.blur())}function Yh(){K.state==="playing"?Os(!0):K.state==="paused"&&Os(!1)}function Zh(i){const t=ln[i],e=t.from,n=Vh(e);K.game.pickup=n,K.game.carrying=!1,K.game.waiting=!1,K.game.awaitingNext=!1,K.game.dialogueHideAt=0,vn.spawn({x:n.x,z:n.z,name:t.fare,tag:t.tag,line:t.line,shirt:t.shirt,hair:t.hair,accessory:t.tag==="COMMUTER"||t.tag==="TOURIST"?"suitcase":"bag"}),Li.setTarget(n.x,n.z,e.name,"pickup"),Tt.setGuide(n),Tt.setPassenger(!1),at.hideDialogue(),K.game.target={x:n.x,z:n.z,name:e.name,kind:"pickup"},ir(!0)}function Fl(){const i=K.game,t=ln[i.tripIndex];i.carrying=!0,i.fareStart=K.runTime,vn.hide(),Tt.setPassenger(!0,t.shirt),Tt.driftScore=0,Tt.setGuide({x:t.to.stopX,z:t.to.stopZ}),Li.setTarget(t.to.stopX,t.to.stopZ,t.to.name,"drop"),K.game.target={x:t.to.stopX,z:t.to.stopZ,name:t.to.name,kind:"drop"},at.showDialogue(t.fare,t.line,t.shirt),at.hideInteraction(),at.showToast("FARE ON BOARD",t.to.short.toUpperCase(),`${Wa(t.metres)} · follow the green ring`,1900),re.pickup(),i.dialogueHideAt=K.runTime+7,ir(!0)}function Ol(){const i=K.game,t=ln[i.tripIndex],e=Math.max(.1,K.runTime-i.fareStart),n=Math.max(11,t.metres/4/27+7);e<=n*1.28?i.combo=Math.min(3,Math.round((i.combo+.25)*100)/100):i.combo=1;const r=Math.max(0,1-e/(n*1.6)),o=Math.round(Tt.driftScore*1.8),a=35+t.metres*.14,c=Math.round(r*125),l=Math.round((a+c+o)*i.combo/5)*5,h=Math.min(30,Math.max(8,Math.round(7+t.metres/170)));i.cash+=l,i.timer=Math.min(wx,i.timer+h),i.visited.add(t.to.id),i.done=i.tripIndex+1,i.carrying=!1,i.waiting=!0,i.awaitingNext=!0,i.spawnTimer=1.55,Tt.setPassenger(!1),Tt.setGuide(null),Tt.driftScore=0,Li.hide(),vn.hide(),at.setProgress(i.done),at.setCash(i.cash),at.setCombo(i.combo,i.combo>1),at.hideInteraction(),at.hideDialogue(),at.showToast("FARE PAID",`+ CHF ${l.toLocaleString("en-CH")}`,`+${h}s · fare combo ×${i.combo.toFixed(2)}${o?` · drift +${o}`:""}`,2400),Ks.burst(t.to.stopX,t.to.stopZ),re.delivered(),setTimeout(()=>re.cash(),170),i.done>=ln.length?(i.waiting=!1,i.awaitingNext=!1,K.state="finishing",setTimeout(()=>xc(!0),2200)):(i.tripIndex+=1,i.target={x:vn.group.position.x,z:vn.group.position.z,name:t.to.name,kind:"pickup"},ir(!0))}function xc(i){if(K.state==="results")return;const t=K.game;if(t)if(K.state="results",Ya=0,Tt.setGuide(null),Li.hide(),vn.hide(),at.hideInteraction(),at.hideDialogue(),at.hideToast(),at.hideScreenPin(),at.hideCountdown(),at.setProgress(i?10:t.done),at.setCash(t.cash),re.stopEngine(),re.stopMusic(),i){const e=Rx(t.cash),n=e==="S"?"Geneva legend.":e==="A"?"Grand tour hero.":e==="B"?"A proper cabbie.":"Brick by brick.",s="All ten landmarks. Every brick accounted for.";at.el.restartBtn.removeAttribute("disabled"),at.showResults({complete:!0,cash:t.cash,fares:10,rank:e,title:n,sub:s,best:Math.max(Qi(),t.cash)}),Bl(Math.max(Qi(),t.cash)),at.setBest(Math.max(Qi(),t.cash)),setTimeout(()=>re.delivered(),100)}else{const e=t.done>=7?"B":t.done>=4?"C":"D";at.el.restartBtn.removeAttribute("disabled"),at.showResults({complete:!1,cash:t.cash,fares:t.done,rank:e,title:"Out of time.",sub:`${t.done} fares delivered before the meter ran dry.`,best:Math.max(Qi(),t.cash)}),Bl(Math.max(Qi(),t.cash)),at.setBest(Math.max(Qi(),t.cash)),re.fail()}}function Rx(i){return i>=6e3?"S":i>=4600?"A":i>=3300?"B":"C"}function Qi(){try{return Number(localStorage.getItem("brickTaxiBest")||0)}catch{return 0}}function Bl(i){try{localStorage.setItem("brickTaxiBest",String(Math.round(i)))}catch{}}function ir(i=!1){if(!K.game||K.state==="title"||K.state==="loading")return;const t=K.game,e=ln[Math.min(t.tripIndex,ln.length-1)];if(!t.target)return;const n=mc(t.target),s=n/4,r=Math.max(3,Math.round(s/27+3)),o=bx(Math.atan2(t.target.x-Tt.position.x,t.target.z-Tt.position.y)-Tt.heading);let a,c,l;t.carrying?(a=`TAKE ${e.fare.toUpperCase()} TO`,c=e.to.name,l=e.to.glyph):t.waiting?(a="FARE PAID · NEW FARE SOON",c=e.to.name,l=e.to.glyph):(a=`${e.fare.toUpperCase()} IS WAITING AT`,c=e.from.name,l=e.from.glyph),at.setTrip({kicker:a,name:c,icon:l,distance:n,eta:r,arrowAngle:ad.radToDeg(o)})}function Cx(){const i=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);window.addEventListener("keydown",t=>{if(i.has(t.code)&&t.preventDefault(),t.repeat){t.code==="KeyE"&&(eo=!0);return}switch(t.code){case"KeyW":case"ArrowUp":Me.forward=!0;break;case"KeyS":case"ArrowDown":Me.back=!0;break;case"KeyA":case"ArrowLeft":Me.left=!0;break;case"KeyD":case"ArrowRight":Me.right=!0;break;case"Space":Me.drift=!0;break;case"KeyE":eo=!0;break;case"KeyP":case"Escape":Yh();break;case"KeyM":Kh();break;case"KeyH":K.state==="playing"&&re.horn();break;case"KeyR":K.state==="playing"&&Tt.inWater===!1&&Ix();break;case"Enter":K.state==="title"&&gc();break}}),window.addEventListener("keyup",t=>{switch(t.code){case"KeyW":case"ArrowUp":Me.forward=!1;break;case"KeyS":case"ArrowDown":Me.back=!1;break;case"KeyA":case"ArrowLeft":Me.left=!1;break;case"KeyD":case"ArrowRight":Me.right=!1;break;case"Space":Me.drift=!1;break}}),window.addEventListener("pointerdown",()=>{K.state==="title"&&re.init().catch(()=>{})},{once:!0})}function Px(){matchMedia("(pointer: coarse)").matches&&(at.el.touchControls.classList.remove("hidden"),document.body.classList.add("touch-device"),at.el.touchControls.querySelectorAll("button").forEach(i=>{const t=i.dataset.touch,e=n=>{t==="gas"&&(Me.forward=n),t==="brake"&&(Me.back=n),t==="left"&&(Me.left=n),t==="right"&&(Me.right=n)};i.addEventListener("pointerdown",n=>{n.preventDefault(),i.setPointerCapture(n.pointerId),e(!0)}),i.addEventListener("pointerup",n=>{n.preventDefault(),e(!1)}),i.addEventListener("pointercancel",()=>e(!1)),i.addEventListener("contextmenu",n=>n.preventDefault())}))}async function Kh(){if(!re.ctx){try{await re.init()}catch{return}re.startMusic()}re.setMuted(!re.muted),at.setSound(!re.muted),K.state==="title"&&re.click()}function Ix(){const i=K.game;i&&(i.timer=Math.max(0,i.timer-2),Tt.inWater=!1,Tt.velocity.set(0,0),Tt.position.copy(Tt.lastSafe),Tt.heading+=Math.PI,Tt.invuln=1.3,Ke=!1,at.showToast("BACK ON TRACK","TAXI RESET","−2 seconds",1500))}function Lx(){window.addEventListener("resize",()=>{en.setSize(window.innerWidth,window.innerHeight),ae.aspect=window.innerWidth/window.innerHeight,ae.updateProjectionMatrix()})}function Dx(i,t){const e=K.game;if(!e)return;if(K.runTime+=i,e.timer-=i,e.timer<=10){const s=Math.ceil(e.timer);s!==K.lowTick&&s>0&&(K.lowTick=s,re.countdown(!1))}const n=e.target;if(n){const s=Hh(Tt.position,{x:n.x,z:n.z}),r=Math.abs(Tt.speed);!e.waiting&&!Tt.inWater&&(s<7&&r<8.2||eo&&s<12.5&&r<17)&&(e.carrying?Ol():Fl()),!e.waiting&&s<20&&!Tt.inWater?r>12?at.showInteraction(e.carrying?"SLOW DOWN TO DROP OFF":"SLOW DOWN TO PICK UP"):at.showInteraction(e.carrying?"STOP IN THE GREEN RING · E":"STOP IN THE YELLOW RING · E"):at.hideInteraction()}if(eo=!1,e.waiting&&e.awaitingNext&&(e.spawnTimer-=i,e.spawnTimer<=0)){const s=ln[e.tripIndex];e.waiting=!1,e.awaitingNext=!1,Zh(e.tripIndex),at.showToast("NEW FARE",s.fare.toUpperCase(),`Waiting at ${s.from.short}`,1400)}e.dialogueHideAt&&K.runTime>e.dialogueHideAt&&(at.hideDialogue(),e.dialogueHideAt=0),e.timer<=0&&K.state==="playing"&&(e.timer=0,xc(!1))}const kn=new I,Ux=new I;function zx(){if(!K.game?.target||K.state!=="playing"&&K.state!=="countdown"){at.hideScreenPin();return}const i=K.game.target;kn.set(i.x,2.2,i.z);const t=kn.clone().sub(ae.position).dot(ae.getWorldDirection(Ux))<0;kn.project(ae);const e=window.innerWidth,n=window.innerHeight;let s=(kn.x*.5+.5)*e,r=(-kn.y*.5+.5)*n;if(!t&&kn.z<1&&kn.z>-1&&Math.abs(kn.x)<.82&&Math.abs(kn.y)<.72||!isFinite(s)||!isFinite(r)){at.hideScreenPin();return}let a=s-e/2,c=r-n/2;t&&(a=-a,c=-c),Math.abs(a)+Math.abs(c)<1&&(a=0,c=1);const l=e*.42,h=n*.37,u=Math.min(l/Math.max(1,Math.abs(a)),h/Math.max(1,Math.abs(c))),d=Math.max(72,Math.min(e-72,e/2+a*u)),f=Math.max(150,Math.min(n-128,n/2+c*u)),m=Math.atan2(c,a);at.setScreenPin(d,f,m,mc(i),!0)}function $h(i){if(!K.game)return;const t=K.game;(K.state==="playing"||K.state==="paused"||K.state==="finishing")&&at.setTimer(t.timer),K.state==="playing"||K.state==="finishing"?(at.setSpeed(Tt.speedKmh),at.setCombo(t.combo,t.combo>1.01)):(K.state==="paused"||K.state==="results"||K.state==="countdown")&&at.setSpeed(K.state==="countdown"?0:Tt.speedKmh),Tt.drifting&&K.state==="playing"?K.drifting||(K.drifting=!0,at.comboPop("DRIFT!")):Tt.drifting||(K.drifting=!1)}function Jh(i){if(!Tt)return;if(ei){ae.position.copy(ei.pos),ae.lookAt(ei.look),ae.fov=ei.fov||50,ae.updateProjectionMatrix(),Ls(new I(ei.look.x,0,ei.look.z));return}const t=new I(Tt.position.x,1,Tt.position.y);if(K.state==="title"){Wr+=i*.12;const u=Math.sin(Wr*.48),d=Math.cos(Wr*.31),f=new I(119+u*1.4,9.6+d*.28,7+u*1),m=new I(181+u*.8,16+d*.35,-105+u*1.2);Ke?(ae.position.lerp(f,1-Math.exp(-1.5*i)),Sn.lerp(m,1-Math.exp(-1.8*i))):(ae.position.copy(f),Sn.copy(m),Ke=!0),ae.fov=$o(ae.fov,50,3,i),ae.updateProjectionMatrix(),ae.lookAt(Sn),Ls(t);return}if(K.state==="results"){Ya+=i*.11;const u=13.5,d=Tt.heading+Math.PI*.72+Ya,f=new I(t.x+Math.sin(d)*u,7.2,t.z+Math.cos(d)*u);ae.position.lerp(f,1-Math.exp(-2.5*i)),Sn.lerp(t.clone().add(new I(0,2.2,0)),1-Math.exp(-4*i)),ae.fov=$o(ae.fov,48,3,i),ae.updateProjectionMatrix(),ae.lookAt(Sn),Ls(t);return}const e=new I(Tt.forward.x,0,Tt.forward.y),n=new I(e.z,0,-e.x),s=Math.min(1,Math.abs(Tt.speed)/34),r=20.8+s*4.6,o=11.8+s*2.1;Mn.copy(t).addScaledVector(e,-r).addScaledVector(n,-Tt.lateral*.16).add(new I(0,o,0)),Ko.copy(t).addScaledVector(e,12.5+s*6.2).add(new I(0,3.3+s*.75,0));const a=t.clone().add(new I(0,2.3,0));let c=1;for(const u of Ln.colliders){if(u.h<2.5)continue;const d=u.x-u.hw,f=u.x+u.hw,m=u.z-u.hd,x=u.z+u.hd;for(let g=.15;g<=1;g+=.12){const p=a.x+(Mn.x-a.x)*g,S=a.z+(Mn.z-a.z)*g;if(a.y+(Mn.y-a.y)*g<u.h+1&&p>d-1&&p<f+1&&S>m-1&&S<x+1){c=Math.min(c,Math.max(.42,g-.06));break}}}if(c<1&&(Mn.copy(a).add(Mn.clone().sub(a).multiplyScalar(c)),Mn.y=Math.max(Mn.y,4.1)),!Ke)ae.position.copy(Mn),Sn.copy(Ko),Ke=!0;else{const u=1-Math.exp(-(4.8+s*1.4)*i),d=1-Math.exp(-8.2*i);ae.position.lerp(Mn,u),Sn.lerp(Ko,d)}ae.fov=$o(ae.fov,56+s*10,4,i),ae.updateProjectionMatrix();const h=Tt.cameraShake*.35+s*.012;zl.set((Math.random()-.5)*h,(Math.random()-.5)*h,(Math.random()-.5)*h),ae.position.add(zl),ae.lookAt(Sn),ae.rotateZ(-Tt.steer*s*.018),Ls(t)}function Ls(i){Oe.position.set(i.x-59,108,i.z-52),Oe.target.position.set(i.x,0,i.z),Oe.target.updateMatrixWorld()}function Nx(i=!1){Ke=!0;const t=new I(Math.sin(Tt.heading),0,Math.cos(Tt.heading)),e=new I(Tt.position.x,1,Tt.position.y);ae.position.copy(e).addScaledVector(t,-20.8).add(new I(0,11.8,0)),Sn.copy(e).addScaledVector(t,12.5).add(new I(0,3.3,0)),ae.fov=56,ae.updateProjectionMatrix(),ae.lookAt(Sn),Ke=!i,Ls(e)}function jh(i){K.state==="playing"?(Tt.update(i,Me,Ln),Dx(i,performance.now()),re.setEngine(Tt.speed,(Me.forward?1:0)-(Me.back?1:0),Tt.drifting),vn.update(i,K.worldTime,Tt.position,K.game.carrying)):K.state==="countdown"||K.state==="finishing"?(Tt.update(i,{forward:!1,back:!1,left:!1,right:!1,drift:!1},Ln),K.state==="finishing"&&vn.update(i,K.worldTime,Tt.position,!1)):K.state==="title"&&(Tt.syncVisual(i,0,0),Tt.updateGuide(i))}function Fx(i){let t=i,e=0;for(;t>1e-5&&e++<16;){const n=Math.min(.016666666666666666,t);K.worldTime+=n,jh(n),t-=n}Ln&&(Ln.update(i,K.worldTime),to?.update(i),Li?.update(i,K.worldTime),Ks?.update(i))}let kl=performance.now();function Qh(i){const t=Math.min(.25,(i-kl)/1e3);kl=i,Ln?Fx(t):K.worldTime+=t,K.state!=="loading"&&K.state!=="title"&&(K.lastHudUpdate+=t,K.lastHudUpdate>.085&&(K.lastHudUpdate=0,$h(),ir(),zx()),K.lastMapDraw+=t,K.game?.target&&K.lastMapDraw>.065&&(K.lastMapDraw=0,at.drawMinimap(Tt,K.game.target,K.game.target.kind,K.worldTime,K.game.tripIndex,!1))),Jh(t),K.frameCount=(K.frameCount||0)+1,K.frameCount%2===0&&(en.shadowMap.needsUpdate=!0),en.render(Ge,ae),requestAnimationFrame(Qh)}window.brickTaxi={get state(){return K.state},get game(){return K.game},ui:at,audio:re,get world(){return Ln},get taxi(){return Tt},get camera(){return ae},get renderer(){return en},get traffic(){return to},keys:Me,setKey(i,t){i in Me&&(Me[i]=t)},advance(i){const t=Math.max(1,Math.round(i*60));for(let e=0;e<t;e++)K.worldTime+=1/60,jh(1/60),to.update(1/60);Ln.update(i,K.worldTime),$h(),ir(),Jh(Math.min(.5,i))},start:gc,teleport(i,t,e=0){Tt.resetAt(i,t,e),Ke=!1},teleportToLandmark(i,t=0){const e=jr[i];Tt.resetAt(e.stopX,e.stopZ,t),Ke=!1},skipCountdown(){K.state="playing",at.hideCountdown(),Ke=!1},setTimer(i){K.game&&(K.game.timer=i)},setCameraView(i,t,e=50){ei={pos:new I(...i),look:new I(...t),fov:e}},clearCameraView(){ei=null,Ke=!1},hideHud(i=!0){at.el.hud.style.opacity=i?"0":""},addCash(i){K.game&&(K.game.cash+=i,at.setCash(K.game.cash))},finish(i=!1){xc(i)},scene:Ge};Tx().catch(i=>{console.error(i);const t=document.querySelector("#loading p");t&&(t.textContent="SOMETHING CLICKED OUT OF PLACE · CHECK THE CONSOLE")});
