import { Writable } from "stream";;
import mkdirp from 'mkdirp-promise'
import { dirname, join } from "path";
import { promises as fs } from "fs";


export class ToFileStream extends Writable{

    constructor(options){
        super({...options, objectMode: true});

    }

    _write (chunk, encoding, cb) {
        mkdirp(dirname(chunk.path))
          .then(() => {
            console.log("chunk raw:: ",chunk, " chunk string:: ",chunk.toString());
            fs.writeFile(chunk.path, chunk.content)
          })
          .then(() => cb())
          .catch(cb)
      }

}



