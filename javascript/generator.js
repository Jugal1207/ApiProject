function* demo(){
    yield 1
    yield 4  // using generator 
    yield 5
}

const count = demo();  
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());


let demo = ['rahul','hemant','roman'] // using iterator
let test = demo[Symbol.iterator]()
console.log(test.next());
