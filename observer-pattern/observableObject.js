const EventEmitter = require("events");
const fs = require('fs');

class FindRegex extends EventEmitter{

    constructor(regex){
        super();
        this.regex = regex;
        this.files = [];
    }

    addFile = (filePath)=>{
        this.files.push(filePath);
        return this
    }

    find=()=>{

        this.emit("processing", this.files);
        
        for(const file of this.files){

            fs.readFile(file, {encoding:'utf-8'}, (error, content)=>{

                if(error){
                    this.emit('error', error);
                }

                this.emit('fileRead', file);

                const match = content.match(this.regex);

                if(match){
                    match.forEach(elem=>this.emit('found', file, elem))
                }
            })

        }
        return this;
    }
}

const findRegexInstance = new FindRegex('hello');

findRegexInstance.addFile('./fileA.txt')
                .addFile('fileB.txt')
                .on('processing', files=>console.log("files are processing:: ",files))
                .find()
                .on('error', error=>console.log("an error occured while finding file:: ",error))
                .on('found', (file, elem)=>console.log(`content found in ${file} in the elem ${elem}`))
                