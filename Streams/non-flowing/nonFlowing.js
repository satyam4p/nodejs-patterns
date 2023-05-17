process.stdin
    .on('readable',()=>{
        let chunk ;
        console.log("new dta avail");
        while((chunk = process.stdin.read())!==null){
            console.log("chunk:: ",chunk);
            console.log("chunk read:: ",chunk.length," bytes, ",chunk.toString());
        }
    })
    .on('end',()=>console.log("end of stream"));