
const addTwoNumbers = (num1, num2) => num1 > num2;


console.log(addTwoNumbers(10, 30));

let myObj = {
    text: "Hello there class of July 7th",
    printHello: () => {
        console.log(this.text);
    }
}
myObj.printHello();