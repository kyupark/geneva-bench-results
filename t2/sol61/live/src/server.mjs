import http from 'node:http';
import fs from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=process.cwd();
const types={'.html':'text/html','.js':'application/javascript','.mjs':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.wasm':'application/wasm','.mp4':'video/mp4','.woff2':'font/woff2'};
const pending=new Map();
async function remote(url){
  const key=crypto.createHash('sha256').update(url).digest('hex');
  const file=path.join(root,'cache',key);
  try{return {body:await fs.readFile(file),type:await fs.readFile(file+'.type','utf8')};}catch{}
  if(pending.has(key))return pending.get(key);
  const job=(async()=>{
    let response;
    for(let i=0;i<3;i++){
      response=await fetch(url,{headers:{Accept:'*/*'}});
      if(response.ok)break;
      await new Promise(r=>setTimeout(r,300));
    }
    if(!response.ok)throw new Error(`${response.status} ${url}`);
    const body=Buffer.from(await response.arrayBuffer());
    const type=response.headers.get('content-type')||'application/octet-stream';
    await fs.writeFile(file,body); await fs.writeFile(file+'.type',type);
    return {body,type};
  })();
  pending.set(key,job);
  try{return await job;}finally{pending.delete(key);}
}
http.createServer(async(req,res)=>{
  try{
    const url=new URL(req.url,'http://localhost');
    if(url.pathname.startsWith('/geo/')){
      const route=url.pathname.slice(5);
      const host=route.split('/')[0];
      if(!['3d.geo.admin.ch','wmts.geo.admin.ch'].includes(host))throw new Error('Host rejected');
      const result=await remote('https://'+route+url.search);
      res.writeHead(200,{'Content-Type':result.type,'Access-Control-Allow-Origin':'*','Cache-Control':'public,max-age=31536000'});res.end(result.body);return;
    }
    const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
    if(!filename.startsWith(root+'/'))throw new Error('Path rejected');
    if(path.extname(filename)==='.mp4'){
      const info=await fs.stat(filename);
      const match=req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
      if(match){
        const start=Number(match[1]),end=match[2]?Math.min(Number(match[2]),info.size-1):info.size-1;
        if(start>=info.size){res.writeHead(416,{'Content-Range':`bytes */${info.size}`});res.end();return;}
        res.writeHead(206,{'Content-Type':'video/mp4','Accept-Ranges':'bytes','Content-Range':`bytes ${start}-${end}/${info.size}`,'Content-Length':end-start+1});
        createReadStream(filename,{start,end}).pipe(res);return;
      }
      res.writeHead(200,{'Content-Type':'video/mp4','Accept-Ranges':'bytes','Content-Length':info.size});createReadStream(filename).pipe(res);return;
    }
    const body=await fs.readFile(filename);
    res.writeHead(200,{'Content-Type':types[path.extname(filename)]||'application/octet-stream','Content-Length':body.length});res.end(body);
  }catch(e){if(!res.headersSent)res.writeHead(404);res.end(String(e));}
}).listen(18765,'127.0.0.1',()=>console.log('Geneva renderer: http://127.0.0.1:18765'));
