
const doSomeMath = (num1, num2, callback) => {
    console.log(`Num 1: ${num1}`);
    console.log(`Num 2: ${num2}`);
    callback(num1, num2);
}

const multiply = (num1, num2) => {
    console.log(num1 * num2);
}

const subtract = (num1, num2) => {
    console.log(num1 - num2);
}

doSomeMath(10, 20, multiply);
doSomeMath(100, 40, subtract);

const names = ["Alex", "Martha", "Roger", "Alan"];

const printName = (name, index) => {
    console.log(name, index);
}

names.forEach(printName);
