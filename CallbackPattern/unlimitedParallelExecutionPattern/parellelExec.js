const makeRandomTasks = (name)=>{
    return (cb)=>{
        console.log(name, "started");
        setTimeout(()=>{
            console.log(name, "completed");
            cb();
        }, Math.random()*2000);
    }
}

let tasks = [
    makeRandomTasks('task1'),
    makeRandomTasks('task2'),
    makeRandomTasks('task3'),
    makeRandomTasks('task4'),
]

let completed = 0;

tasks.forEach(task => {
    task(()=>{
        if(++completed === tasks.length){
            console.log("tasks execution completed");
            return;
        }
    });
});

