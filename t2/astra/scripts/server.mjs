import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const types={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.json':'application/json','.mp4':'video/mp4','.png':'image/png','.jpg':'image/jpeg','.css':'text/css','.woff2':'font/woff2','.wav':'audio/wav'};
http.createServer((req,res)=>{
  let file=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));
  if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403);res.end();return;}
  if(file===root)file=path.join(root,'index.html');
  if(!fs.existsSync(file)){res.writeHead(404);res.end('Not found');return;}
  const stat=fs.statSync(file), range=req.headers.range;
  res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');
  res.setHeader('Access-Control-Allow-Origin','*');
  if(range){const [start,end]=range.replace('bytes=','').split('-').map(Number);let last=end||stat.size-1;res.writeHead(206,{'Content-Range':`bytes ${start}-${last}/${stat.size}`,'Accept-Ranges':'bytes','Content-Length':last-start+1});fs.createReadStream(file,{start,end:last}).pipe(res);}
  else{res.setHeader('Content-Length',stat.size);fs.createReadStream(file).pipe(res);}
}).listen(8765,'127.0.0.1',()=>console.log('Geneva studio: http://127.0.0.1:8765'));
