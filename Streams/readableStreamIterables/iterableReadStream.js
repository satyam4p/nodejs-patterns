import { Readable } from "stream";



const array = [
    {
        name: "mountain1",
        height:'2800'
    },
    {
        name: "mountain2",
        height:'2860'
    },
    {
        name: "mountain3",
        height:'25760'
    },
    {
        name: "mountain4",
        height:'39060'
    },
    {
        name: "mountain5",
        height:'4500'
    }
];

const readableStream = Readable.from(array);
readableStream.on('data',(mountain)=>{
    console.log("mountain name:: ",mountain?.name);
    console.log("mountain height:: ",mountain?.height);
}).on('end',()=>{
    console.log("ended the stream of objct array");
});