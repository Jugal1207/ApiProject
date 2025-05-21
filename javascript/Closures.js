// function Outer()
// {
//     let count=0;
 
//     return function inner()
//     {
//         count++;
//         console.log(count);
//     };
// }
// const increment= Outer();
// increment();
// increment();


// function outer(){
//     let greeting = 'roman'

//      return function inner()
//      {
//         console.log("hello", greeting)
//      }
// }
//  const demo=outer();
// demo()

// function outer(){
//    let count = 0;

//    return function inner(){
//       count++;
//       console.log(count);  
//    };
// }
// const increment = outer();
// increment();

function first(){
   let message = 'jugal';

   return function second(){
      console.log(`hello ${message}`);  
   };
}
const print = first();
print();
