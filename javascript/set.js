const mySet = new Set();
mySet.add('apple');
mySet.add('mango');
mySet.add('apple'); // add is used to add  new value
console.log(mySet);

console.log(mySet.has('mango')); // has : checks if value is exists.

console.log(mySet.size); // return the number of values (size)

mySet.delete('mango'); // Removes a value 
console.log(mySet);

mySet.clear(); // It's used to clear the values and empty the set 
console.log(mySet);


