
// function add(x,y){
//     let res= x+y
//     console.log(res);
    
// }
// function multi(x,y){
//      let res1=x*y
//     console.log(res1);
    
// }
// function calci(mycall){
//     mycall(2,4);
// }
// calci(multi)

function add(x,y){
    console.log(x+y);
}
function multi(x,y){
    console.log(x*y);
}
function calci(mycall)
{
    mycall(2,3)
}
calci(add)

// let a = add ((x,y)=>{

//     console.log(x+y);
// })
// let b= multi ((x,y)=>{

//     console.log(x*y);
    
// })
// let c = calci((mycall)=>{

//     mycall(2,4)
// })
// c.calci(add);