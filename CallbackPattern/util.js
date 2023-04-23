// const slug = require("slug");
// const path = require('path');

import slug from "slug";
import path from "path";
export function urlToFileName(url){

    const parsedUrl = new URL(url);
    console.log("parsedUrl:: ",parsedUrl);

    const urlPath = parsedUrl.pathname.split('/')
        .filter(function (component){
            return component !== ' '
        })
        .map((url)=>{
            return slug(url, {remove: null});
        })
        .join('/');

    let fileName = path.join(parsedUrl.hostname, urlPath );

    if(!path.extname(fileName).match(/html/)){
        fileName += '.html'
    }
    console.log("filename 2:: ",fileName)
    
    return fileName;

}
