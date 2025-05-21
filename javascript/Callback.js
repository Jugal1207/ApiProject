function fetchdata(callback)
{
    const data = {name:"john",age:30};
    callback(data);
}
setTimeout (function(){
    console.log("timer");
},2000)
fetchdata(function(data) 
{
    console.log(data.name);
    console.log(data.age);
})