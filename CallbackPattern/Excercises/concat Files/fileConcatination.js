import fs, { appendFile, readFile, writeFile } from 'fs';


async function concatFiles(dest, cb, ...rest){

    // console.log("rest:: ",rest);
    let resultingContent = '';

    if(rest.length){

        rest.forEach(fielPath=>{
            readFile(fielPath,{
                encoding:'utf8'
            }, (error, content)=>{
                if(error){
                    cb(error);
                }
                appendFile(dest, content+" ", {
                    encoding:'utf8'
                }, (err,result)=>{
                    if(err){
                        cb(err);
                        return
                    }
                    cb(null, result)
                })
            })
        })
        
    }
}

concatFiles('./result.txt',(error, result)=>{
    if(error){
        console.log("an error occured while reading the files")
    }
    console.log("result:: ",result);
    console.log("files concatination completed");
}, './text1.txt','./text2.txt','./text3.txt');