import EventEmitter from "./revealingEventEmitter";




const myEventEmitter = new EventEmitter(function (publish){
  setTimeout(()=>{
    cojnsole.log("new event");
    publish('console', 1);
  },1000);
})

myEventEmitter.on('console',()=>{
  console.log("this is handler for console.evnt");
});

