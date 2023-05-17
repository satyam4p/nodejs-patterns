process.stdin
    .on('data', (chunk)=>{
        console.log("cghunk:: ",chunk.length," value:: ",chunk.toString());
    })
    .on('end',()=>{
        console.log("EOF");
    })