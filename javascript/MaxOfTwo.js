// let i=1,n,max=0;
// let numbers = [2,4,6,8,10]

// while(i<=5)
// {
//     n=numbers[i-1];
// if (n>max)
// {
//     max=n;
// }
// i++;
// }
// console.log(max);

let n1= 4;
let n2= 5;
max=0;

while (n1>0 && n2>0)
{
    if(n1>n2){
        max=n1;
        console.log(max); 
        break;   
    }else{
        max=n2;
        console.log(max);
        break;
    }
}