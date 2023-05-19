import { RandomStream } from "./customeReadable.js";


const randomStream = new RandomStream(20);

randomStream.on('data', (chunk)=>{
    
    console.log("chunk.length:: ",chunk.length);
    console.log("chunk:: ",chunk.toString());
}).on('end',()=>{
    console.log("Produced bytes from randow stream:: ",randomStream.emittedBytes)
});

