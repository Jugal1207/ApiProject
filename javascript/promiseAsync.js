let Demo=new Promise((resolve,reject)=>{
    resolve("hello world")
})
// Demo
// .then((message)=>{
//     console.log(message);// error handling by using promises .then and .catch
// })
// .catch((error)=>{
//       console.error(error)
// })

async function DemoPrint() {
    
 
    try{
        const user=await Demo;//  error handling by using async await try/catch block
        console.log(user)
    }
    catch(error){
        console.error(error)
    }
}
DemoPrint();
// if we using async wait for error handling then .then and .catch is not needed.