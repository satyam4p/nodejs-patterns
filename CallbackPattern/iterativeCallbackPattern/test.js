import superagent from "superagent";


const tasks = [

    async cb =>{
        console.log("task 1")
        const result = await superagent.get("https://reqres.in/api/users?page=2");
        const parsedData = JSON.parse(result.text);
        cb(parsedData?.data);
    },

    cb=>{
        console.log("task 2");
        setTimeout(cb, 1000)
    },

    cb=>{
        console.log("tasks 3");
        setTimeout(cb, 1000);
    }

]


const iterate = (index) =>{

    if(index === tasks.length){
        console.log("All tasks competed");
        return
    }

    const task = tasks[index];

    task((result)=>{
        console.log("result:: ",result);
        iterate(index + 1);
    })

}

iterate(0);








