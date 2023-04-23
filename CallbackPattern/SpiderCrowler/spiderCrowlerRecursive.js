import fs from 'fs';
// const fs = require('fs')
// const path = require('path')
import path from 'path';
// const urlToFileName = require('./util');
import { urlToFileName } from '../util';
// const mkdirp = require('mkdirp')
import mkdirp from 'mkdirp';
// const superagent = require('superagent');
import superagent from 'superagent';

function saveFile(fileName, content, cb){

    mkdirp(path.dirname(fileName, err=>{
        if(err){
            return cb(err);
        }

        fs.writeFile(fileName, content, cb);
    }))
}

function downlaod(url, filename, cb){

    console.log("downloading url ",url);

    superagent.get(url).end((err, res)=>{
        if(err){
            return cb(err);
        }
        saveFile(filename, res.text, err=>{
            if(err){
                return cb(err);
            }

            console.log("Downloaded and saved: ",url);
            console.log("res.text:: ",res.text);
            cb(null, res.text);
        })
    })


}
 export function spider(url, nesting, cb){

    const filename = urlToFileName.urlToFileName(url)

    fs.readFile(filename, 'utf-8', (error, fileContent)=>{

        if(error){
            if(error.code !== 'ENONT'){
                return cb(error);
            }
        
            //file doesn't exists, so download it
            downlaod(url, filename, (err, reqContent)=>{
                if(err){
                    return cb(err);
                }

                console.log("reqContent:: ",reqContent);
            })  
        }
    })
}
// const URL = "https://crypto.stanford.edu/cs142/lectures/url.html";
// spider(URL, 10, err => {
//     if (err) {
//       console.error(err)
//       process.exit(1)
//     }
  
//     console.log('Download complete')
// })