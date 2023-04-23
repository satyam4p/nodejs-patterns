const events =  require('events');


const ticker = (time, cb)=>{

    const { EventEmitter } = events;
    const emitter = new EventEmitter();
    let count = 0;
    setInterval(
        ()=>{
            setTimeout(()=>{
                setTimeout(()=>{
                   emitter.emit("tick", count++);
                   cb(count);
                   ticker(time,cb);
               }, 50);
           }, 50);
        }, time);
    
    return emitter
}

ticker(3000, (count)=>{
    console.log("count:: ",count);
}).on("tick", count=>console.log("count on emit:: ",count));