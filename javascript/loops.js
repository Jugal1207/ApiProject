let a =[10,20,30,40,50]; // For each loop
a.forEach(function(value){
    console.log(value);
})

let b=[10,20,30,40,50]; // while loop 
let i =0;
while(i<b.length)
{
    console.log(b[i])
    i++;
}

let c=[20,40,60,80,30]; // for loop
let j=0;
for(j=0;j<c.length;j++)
    {
    console.log(c[j]);
}

let d=[10,20,30,40,50]; // do while loop
let m=0;
do{
    console.log(d[m]);
    m++;
}
while(m<d.length);

let str = [ 'rohan','akash','suhas']
for(let value of str)
{
    console.log(value);
    
}

