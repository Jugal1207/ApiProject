

// let n = 121 ;
// let temp = n;
// let rev = 0;

// while(n>0)
// {
//     let rem = n % 10; 
//     rev = rev * 10 + rem;
//     n = Math.floor(n/10);
// }
// if (temp == rev){
//     console.log("Palimdrome");   
// }else{
//     console.log("Not a palimdrome");   
// }

// let n = 153;
// let temp = n;
// let s = 0;

// while(n>0)
// {
//     let rem = n%10;
//     s = s + (rem * rem * rem) ; 
//     n= Math.floor(n/10);
// }
// if(temp == s)
// {
//     console.log("armstrong");    
// }else{
//     console.log("not a armstrong");
    
// }

// let a = [10,20,40,50,30]
// for(let i=a.length-1;i>=0;i--)
// {
//   console.log( a[i]); 
// }

// let i = 1;
// let rev = 0;
// let n = 121;
// let temp= n;

// while(n>0)
// {
//  let rem = n%10;
//  rev = rev * 10 + rem;
//  n = Math.floor(n/10);
// }
// if(temp == rev)
// {
//   console.log(temp+ " is a palimdrome number"); 
// }else{
//   console.log(temp+ " is not a palimdrome number");
// }

let n = 153;
let temp = n;
let rev = 0;

while(n>0)
{
  let rem = n%10;
  rev = rev + (rem * rem * rem);
  n = Math.floor(n/10);
}
if(temp == rev)
{
  console.log(temp+ " is a armstrong number");
}else{
  console.log(temp+ " is not  a armstrong number");
}