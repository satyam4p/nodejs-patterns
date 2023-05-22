import { ToFileStream } from "./writableStream.js";
import { join } from "path";

const tfs = new ToFileStream();

tfs.write({path: join('files','file1.txt'), contentL: "hellow world"});
tfs.write({path: join('files','file2.txt'), contentL: "this is second fuile content"});
tfs.end(()=>{
    console.log("all files are written");
})

