const makeRandomTasks = (name)=>{
    return (cb)=>{
        console.log(name, "started");
        setTimeout(()=>{
            console.log(name, "completed");
            cb();
        }, Math.random()*2000);
    }
}

const tasks = [
    makeRandomTasks('task1'),
    makeRandomTasks('task2'),
    makeRandomTasks('task3'),
    makeRandomTasks('task4')
]

const concurrency = 2;
let index = 0;
let running = 0;
let completed = 0;

function limitedConcurrency(){
    while(running < concurrency && index < tasks.length){

        console.log("index:: ",index, "running:: ",running, "completed:: ",completed);

        const task = tasks[index++];
        task(()=>{
            console.log("inside task:: index:: ",index, "running:: ",running, "completed:: ",completed);
            if(++completed === tasks.length ){
                console.log("tasks execution complete");
                return;
            }
            
            running--;
            limitedConcurrency()
        });
        running++;
    }
}

limitedConcurrency();