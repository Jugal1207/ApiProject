let str = 'hello world';
let regex = /world/ 
console.log(regex.test(str)); // check string contains a word

let str1 = "HELLO there!";
let regex1 = /hello/i; // 'i' makes it ignore case insensitive
console.log(regex1.test(str1)); // true

let str2 = 'I have 2 apples'
let regexx= /\d/ 
console.log(regexx.test(str2));//check digits are there or not

let str3 = 'apple mango'
let regexw = /^apple/
console.log(regexw.test(str3));// ^ keyword is used for match with start of that word

let str4= 'apple mango'
let regexq = /mango$/ 
console.log(regexq.test(str4)); // $keyword is used for match with end with of word

let str5 = 'hello jugal'
let clean = str5.replace(/jugal/,'js') // replace old string to new string
console.log(clean);
