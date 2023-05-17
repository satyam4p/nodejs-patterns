import { createReadStream } from "fs";
import { request } from "http";
import { createGzip } from "zlib";
import { basename } from "path";

const filename = process.argv[2];
const serverhost = process.argv[3];

const httpRequestOptions = {
    hostname: serverhost,
    port: 3002,
    path: '/',
    method: 'PUT',
    headers: {
        'Content-type': 'application/octet-stream',
        'Content-Encoding':'gzip',
        'X-Filename': basename(filename)
    }
}

const req = request(httpRequestOptions, (res)=>{
    console.log("server response:: ",res.statusCode);
})

createReadStream(filename)
    .pipe(createGzip())
    .pipe(req)
    .on('finish',()=>{
        console.log("file successfully sent");
    })