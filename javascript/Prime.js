// let i = 1;
// let count = 0;
// let n = 7;

// while(i<=n)
// {
//     if(n%i==0)
//   {
//     count = count + 1;
//   }
//   i=i+1;
// }
// if (count == 2)
// {
//     console.log("prime");
    
// }else{
//     console.log("not prime");
    
// }

let n1 = 10324;
let count = 0;

while(n1 > 0) {
  count = count + 1;
  n1 = Math.floor(n1 / 10);
}

console.log("The number of digits is " + count);



