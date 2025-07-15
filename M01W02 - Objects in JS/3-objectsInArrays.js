
const students = [{
    firstName: "Alex",
    lastName: "Miller",
    age: 25
},
{
    firstName: "Martha",
    lastName: "Smith",
    age: 28
},
{
    firstName: "Julie",
    lastName: "Winston",
    age: 23
}];

for(let i = 0; i < students.length; i ++){
    console.log("Full name: ", students[i].firstName, students[i].lastName);
}