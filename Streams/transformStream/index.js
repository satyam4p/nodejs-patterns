import { ReplaceStream } from "./ReplaceStream";

const replaceStream = new ReplaceStream('World', 'nodejs');
replaceStream.on('data',chunk=>console.log("chunk:: ",chunk.toString()));


replaceStream.write('Hellow W');
replaceStream.write('orld');
replaceStream.end();