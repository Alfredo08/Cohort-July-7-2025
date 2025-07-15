
function printHello(name){
    console.log("Hello there", name);
    name = "Alexander";
    console.log("Hello there", name);
}

let firstName = "Michael";

printHello(firstName);

console.log(firstName);

console.log("-----");

function printInfo(obj){
    let newObj = {
        ...obj,
        extra: "This was not there!"
    }
    for(let key in newObj){
        console.log(key, newObj[key]);
    }
}

let student = {
    firstName: "Brianna",
    lastName: "Winston",
    age: 26
}

printInfo(student);

console.log(student);

console.log("-----");

function printValues(arr){
    let newArr = [...arr]
    newArr.push("This was not there inittially!");
    for(let i = 0; i < newArr.length; i ++){
        console.log(newArr[i]);
    }
}

let names = ["Alex", "Martha", "Julie", "Alan"];

printValues(names);

console.log(names);

