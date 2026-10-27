import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve,extname} from 'node:path';
const root=fileURLToPath(new URL('.',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
export function createAppServer(){return createServer(async(req,res)=>{try{
 const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405,{'Allow':'GET, HEAD'});res.end('Method not allowed');return;}
 if(path!=='/'&&path!=='/index.html'&&!/^\/(js\/[a-z-]+\.js|css\/styles\.css)$/.test(path)){res.writeHead(404);res.end('Not found');return;}
 const file=resolve(root,'.'+(path==='/'?'/index.html':path));
 const data=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)],'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'});res.end(req.method==='HEAD'?undefined:data);
 }catch{res.writeHead(404);res.end('Not found');}});}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const server=createAppServer();server.listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log(`Open OPC: http://localhost:${server.address().port}`));
}
