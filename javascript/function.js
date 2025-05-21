function div(x,y)
{
    return x/y ;
}
let result = div(6,2);
console.log(result);

function multi(x,y)
{
    return x*y;
}
let result1 = multi(4,5);
console.log(result1);

function add(x,y)
{
    return x+y;
}
let result2 = add(5,5);
console.log(result2);

function sub(x,y)
{
    return x-y;
}
let result3 = sub(10,5);
console.log(result3);

setTimeout(function() 
{
    console.log("this log after 5 seconds");
},5000);
