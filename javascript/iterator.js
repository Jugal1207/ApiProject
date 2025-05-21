const arr = ['a', 'b', 'c'];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true }


let str = [ 'rohan' , ' john' , ' suhas']
let iterator1 = str[Symbol.iterator]();
console.log(iterator1.next());S

let a =[1,3,2,4,5,4]
let demo = a[Symbol.iterator]();
console.log(demo.next());



