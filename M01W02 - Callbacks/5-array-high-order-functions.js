const names = ["Alex", "Martha", "Julie", "Roger", "Alan"];

/*
for(let i = 0; i < names.length; i ++){
    console.log(names[i]);
}

console.log("-----");

const printName = (name, index) => {
    console.log(name, index);
}

names.forEach(printName);

console.log("-----");

names.forEach((name, index) => console.log(name, index));
*/

const people = [{
    fName: "Alex",
    lName: "Miller",
    age: 25
},
{
    fName: "Martha",
    lName: "Smith",
    age: 27
},
{
    fName: "Roger",
    lName: "Anderson",
    age: 24
},
{
    fName: "Julie",
    lName: "Winston",
    age: 27
}];

let foundPerson = people.find((person) => person.age === 24);
console.log(foundPerson);

console.log("-----");

let foundPeople = people.filter((person) => person.age === 27);
console.log(foundPeople);

console.log("-----");

let fullNames = people.map((person) => person.fName + " " + person.lName);
console.log(fullNames);

console.log("-----");
let olderThan26 = people.filter((person) => person.age >= 26)
                        .map((person) => person.fName + " " + person.lName);
console.log(olderThan26);
