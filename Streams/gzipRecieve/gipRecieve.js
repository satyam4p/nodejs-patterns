import { createWriteStream } from "fs";
import { basename, join } from "path";
import { createServer } from "http";
import { createGunzip } from "zlib";


const server = createServer((req, res)=>{

    const fileName = basename(req.headers['x-filename']);
    const destFilename = join('received_files',fileName);
    console.log("request recieved:: ",fileName);
    req.pipe(createGunzip())
    .pipe(createWriteStream(destFilename))
    .on('finish',()=>{
        res.writeHead(201, {'Content-type':'text/plain'})
        res.end('OK\n')
        console.log("file saved:: ",destFilename);
    })
})

server.listen(3002, ()=>console.log("server is running on port 3002",));