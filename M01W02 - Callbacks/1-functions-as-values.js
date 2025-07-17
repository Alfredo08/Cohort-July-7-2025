
function addTwoNumbers(num1, num2){
    return num1 + num2;
}

let result = addTwoNumbers(10, 20);
console.log(result);

let myValue = addTwoNumbers;
console.log(myValue);
let result2 = myValue(40, 70);
console.log(result2);

let elements = [20, 30, addTwoNumbers];
console.log(elements[2]);
let result3 = elements[2](50, 100);
console.log(result3);

let num = 25;

let myObj = {
    text: "Hello there class of July 7th",
    num,
    addTwoNumbers,
    printHello: function(){
        console.log(this.text);
    }
}

console.log(myObj);
let result4 = myObj.addTwoNumbers(60, 70);
console.log(result4);
myObj.printHello();