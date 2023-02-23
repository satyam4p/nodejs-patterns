const fs = require('fs');
const events = require('events'); 
const { readFile } = fs;
function findeRegex( files, regex){
    const {EventEmitter} = events;
    const emitter = new EventEmitter();
    for(const file of files){
        readFile(file, { encoding: 'utf-8' }, (error, content)=>{

            if(error){
                emitter.emit('error', error);
            }

            emitter.emit('fileRead', file);
            const match = content.match(regex);
            if(match){
                match.forEach(elem=>emitter.emit('found', file, elem));
            }
        })
    }
    return emitter;
}

const files = ['./fileA.txt', './fileB.txt'];

findeRegex(files, 'hello')
    .on('fileread',(file)=>{console.log("file was read:: ",file)})
    .on('found', (file, elem)=>{
        console.log("match ws found in file: ",file, " and the element is:: ",elem);
    })
    .on('error',(error)=>console.log("an error occured:: ",error))