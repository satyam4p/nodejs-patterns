import { TaskQueue } from "./TaskQueue.js";

const makeRandomTasks = (name)=>{
    return (cb)=>{
        console.log(name, "started");
        setTimeout(()=>{
            console.log(name, "completed");
            cb();
        }, Math.random()*2000);
    }
}

let queue = new TaskQueue(2);

const task1 = (cb)=>{

    console.log("task1 started");
    queue
        .pushTask(makeRandomTasks("task1->subtask"))
        .pushTask(makeRandomTasks("task1->subtask2"));
    
    setTimeout(()=>{
        console.log("task1 completed");
        cb()
    },Math.random()*2000);
}

const task2 = (cb)=>{
    console.log("task2 started");

    queue
        .pushTask(makeRandomTasks("task2->subtask1"))
        .pushTask(makeRandomTasks("task2->subtask2"))
        .pushTask(makeRandomTasks("task2->subtask3"))
        .pushTask(makeRandomTasks("task2->subtask4"));
    setTimeout(()=>{
        console.log("task 2 completed");
        cb()
    },Math.random()*2000);
}

queue
    .pushTask(task1)
    .pushTask(task2);
