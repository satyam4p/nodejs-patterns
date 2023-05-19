import { Readable } from "stream";
import Chance from 'chance';
import { randomBytes } from "crypto";

let emittedBytes = 0;
const chance = new Chance();

const RandomStream = new Readable({
    read(size){
        const chunk = chance.string({length:size});
        this.push(chunk, 'utf-8');

        emittedBytes += chunk.length;
        if(chance.bool({likelihood:5})){
            this.push(null);
        }
    }
})

RandomStream.on('data',(chunk)=>{
    console.log("chunk:: ",chunk.toString());
}).on('end',()=>{
    console.log("ended the stream");
})