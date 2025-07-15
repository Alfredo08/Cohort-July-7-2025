/* Primitive data types */
// Strings
let message = "Welcome class of July 7th!";
console.log(message, typeof(message));
console.log(message.length);
console.log(message[0]);
console.log(message.toUpperCase());

// Boolean
let graduated = true;
console.log(graduated, typeof(graduated));

// Numbers
let age = 25;
let grade = 97.8;
console.log(age, typeof(age));
console.log(grade, typeof(grade));

// Symbol
let cookie = Symbol('cookie');
console.log(cookie, typeof(cookie));

// Null
let email = null;
console.log(email, typeof(email));

// Undefined
let firstName;
console.log(firstName, typeof(firstName));

/* Composite data types */
// Arrays
let nums = [10, 20, 30, 40, 50];
console.log(nums, typeof(nums));
console.log(Array.isArray(nums));

// Functions
const addTwoNumbers = (num1, num2) => num1 + num2;
console.log(addTwoNumbers, typeof(addTwoNumbers));
console.log(addTwoNumbers(10, 20));