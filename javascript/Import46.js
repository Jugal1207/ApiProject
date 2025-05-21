// app.js

// Import named exports
import { add, subtract, multiply } from './Export46.js';

// Import default export
import divide from './Export46.js';

console.log(add(2, 3));          // 5
console.log(subtract(5, 3));     // 2
console.log(multiply(2, 3));     // 6
console.log(divide(6, 2));       // 3

// Handling error when dividing by zero
try {
    console.log(divide(6, 0));  // Error
} catch (error) {
    console.log(error.message); // "Cannot divide by zero"
}

