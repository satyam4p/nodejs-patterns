

const EEStoEventMaps = new WeakMap();

export default class EventEmitter{


  constructor(publisher){

    const eventMap = Object.create(null);
    EEStoEventMaps.set(this, eventMap);

    publisher(makePublish(this));

  }

  on(eventName, handler){

    const eventMap = EEStoEventMaps.get(this);

    let handlers = eventMap[eventName];

    if(!handlers){
      handlers = eventMap[eventName] = [];
    }

    handlers.push(handler);

  }

  off(eventName, handler){

    const eventMap = EEStoEventMaps.get(this);

    let handlers = eventMap[eventName];
    if(!handlers){
      return;
    }

    const index = handlers.indexOf(handler);

    if(index === -1){
      return;
    }

    handlers.splice(index, 1);

  }

}

function makePublish(eventEmitter){

  const eventMap = EEStoEventMaps.get(eventEmitter);

  return function(eventName, ...args){

    const handlers = eventMap[eventName];
    if(handlers){
      handlers.forEach(handler =>handler(...args));
    }

  }

}

