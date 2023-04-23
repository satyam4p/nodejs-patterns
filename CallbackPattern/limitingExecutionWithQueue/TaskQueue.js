
export class TaskQueue{

    constructor(concurrency){
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }

    pushTask=(task)=>{
        console.log("queue val:: ",this.queue);
        this.queue.push(task);
        process.nextTick(this.next.bind(this));
        return this;
    }

    next(){
        while(this.running < this.concurrency && this.queue.length){
            const task = this.queue.shift();
            console.log("task:: ",task);
            task(()=>{
                this.running--;
                process.nextTick(this.next.bind(this));
            });
            this.running++;
        }
    }
}
