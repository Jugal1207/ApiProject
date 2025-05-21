{
    var x =10;
    var x = 20;
    x=24;
    console.log(x);//both redeclaration and reassignment is allowed 
    
}
{
    let x = 10;// redeclaration is not allowed and reassignment is allowed 
    x=20; 
}
{
    const  x= 10;
    x=20;
    console.log(x);// redeclaration and reassignment is not allowed 
    
}

console.log(name) // not defined