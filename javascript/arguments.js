function x(){
    console.log(arguments);   // CTS 
}
x(1,2,3);

const x = ()=>{
    console.log(arguments);   //CTE
} 
x(1,2,3)