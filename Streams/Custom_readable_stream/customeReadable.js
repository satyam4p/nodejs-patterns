import { Readable } from "stream";
import Chance from 'chance';

const chance = new Chance();
export class RandomStream extends Readable{

    constructor(options){
        super(options);
        this.emittedBytes = 0;
    }

    _read(size){
        const chunk = chance.string({length: size});//generate string of size
        this.push(chunk, 'utf8');//pushes string to internal buffer and since we are pushing string we need to provide encoding of utf8
        this.emittedBytes += chunk.length;
        if(chance.bool({likelihood: 5})){//terminates the stream randomly with liklihood of 5 percent and will push null to internal buffere signalling End of stream
            this.push(null);
        }
    }
}
