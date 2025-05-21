// let Demo = new Promise(function(resolve,reject){

// const { use } = require("react");

   
//     resolve("hello world");
// })
// async function demoprint() {
//     try{
//          const user= await Demo;
//          console.log(user);
//     }
//     catch(error){

//         console.error(error);
//     }
// }
// demoprint();

let Demo = new Promise(function(resolve,reject){
    resolve("hello world")
})

async function demoprint(){
     try{
        const user= await Demo;
        console.log(user); 
     }
     catch(error){
        console.log(error);
        
     }
  }
  demoprint();