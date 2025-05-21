// const demo = new Promise(function(resolve,reject){
//     resolve("hello world")
// })
// // // demo
// // // .then(function(value){
// // //     console.log('Resolved successfilly');
// // // })
// // // .catch(function(error){
// // //     console.log('error');  
// // // })

// async function DemoPrint(value) {
//     try{
//         const user = await demo;
//         console.log(user);    
//     }
//     catch(error)
//     {
//         console.log(error);
        
//     }
// }
// DemoPrint();

let demo = new Promise(function(resolve,reject){
   resolve("hello")
})

async function demoprint() {
    try{
    const user = await demo;
    console.log(user);
    }
    catch(error){
        console.log('error');    
    } 
}
demoprint();