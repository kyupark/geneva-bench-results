// Composite the same on-screen titles directly onto the GPU frame for export.
// This avoids repeated browser screenshots while preserving the full resolution.
const filmCanvas=document.createElement('canvas');
filmCanvas.width=1920;filmCanvas.height=1080;
const ctx=filmCanvas.getContext('2d',{alpha:false});
function textAt(value,x,y,font,color,spacing='0px',align='left'){
 ctx.font=font;ctx.fillStyle=color;ctx.letterSpacing=spacing;ctx.textAlign=align;ctx.textBaseline='top';ctx.fillText(value,x,y);
}
function elementText(selector,color){
 const el=document.querySelector(selector),s=getComputedStyle(el),r=el.getBoundingClientRect();
 const size=parseFloat(s.fontSize),line=parseFloat(s.lineHeight)||size*1.2;
 textAt(el.textContent,r.left,r.top+Math.max(0,(line-size)/2),`${s.fontWeight} ${s.fontSize} ${s.fontFamily}`,color||s.color,s.letterSpacing==='normal'?'0px':s.letterSpacing);
}
window.captureFrame=()=>{
 ctx.globalAlpha=1;ctx.letterSpacing='0px';ctx.drawImage(viewer.canvas,0,0,1920,1080);
 const lower=ctx.createLinearGradient(0,1080,0,0);lower.addColorStop(0,'#101b2670');lower.addColorStop(.28,'transparent');lower.addColorStop(.80,'transparent');lower.addColorStop(1,'#101b2630');ctx.fillStyle=lower;ctx.fillRect(0,0,1920,1080);
 const radial=ctx.createRadialGradient(960,450,400,960,450,1140);radial.addColorStop(0,'transparent');radial.addColorStop(1,'#0a182525');ctx.fillStyle=radial;ctx.fillRect(0,0,1920,1080);
 const ch=document.querySelector('#chapter');ctx.globalAlpha=Number(ch.style.opacity);
 ctx.shadowColor='#10212d90';ctx.shadowBlur=16;ctx.shadowOffsetY=2;
 ['#number','#name','#korean','#subtitle'].forEach(s=>elementText(s));
 ctx.globalAlpha=Number(document.querySelector('#intro').style.opacity);
 ['#intro small','#intro h1','#intro p'].forEach(s=>elementText(s));
 ctx.shadowBlur=0;ctx.shadowOffsetY=0;ctx.globalAlpha=1;
 const coordinateLines=document.querySelector('#coordinates').innerHTML.split('<br>');
 const decode=document.createElement('span');
 coordinateLines.forEach((line,i)=>{decode.innerHTML=line;textAt(decode.textContent,1856,99+i*22,'11px "Helvetica Neue",sans-serif','#ffffffb0','2px','right');});
 ctx.fillStyle='#0c171d';ctx.fillRect(0,0,1920,70);ctx.fillRect(0,1010,1920,70);
 textAt('GENÈVE',64,24,'500 17px "Helvetica Neue",sans-serif','#fff9ee','7px');
 ctx.fillStyle='#c8ac7d';ctx.fillRect(201,35,28,1);
 textAt('Walking the sky',247,31,'11px "Apple SD Gothic Neo",sans-serif','#c9d8d7','3px');
 textAt('A 3D AERIAL FILM     ───     46°12′ N / 6°09′ E',1856,28,'11px "Helvetica Neue",sans-serif','#b7c9c9','2.5px','right');
 for(let i=0;i<6;i++){
  const el=document.querySelector('#stop'+i),r=el.getBoundingClientRect(),color=el.classList.contains('active')?'#f0d4a4':el.classList.contains('done')?'#d0dcda':'#7e999f';
  ctx.strokeStyle=color;ctx.fillStyle=color;ctx.beginPath();ctx.arc(r.left+2,1047,2,0,Math.PI*2);ctx.stroke();if(el.classList.contains('active'))ctx.fill();
  textAt(el.textContent,r.left+13,1040,'11px "Helvetica Neue","Apple SD Gothic Neo",sans-serif',color,'1px');
 }
 textAt('© swisstopo · 3D simulation on real terrain',1856,1040,'11px "Helvetica Neue","Apple SD Gothic Neo",sans-serif','#b4c4c7','.3px','right');
 ctx.fillStyle='#d6b984';ctx.fillRect(0,1009,parseFloat(document.querySelector('#progress').style.width)/100*1920,2);
 ctx.globalAlpha=Number(document.querySelector('#fade').style.opacity);ctx.fillStyle='#0c171d';ctx.fillRect(0,0,1920,1080);ctx.globalAlpha=1;
 return filmCanvas.toDataURL('image/jpeg',.94).split(',')[1];
};
