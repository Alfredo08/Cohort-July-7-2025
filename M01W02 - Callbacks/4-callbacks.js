                                                    // callback
const printStudentInformation = (fName, lName, course, message) => {
    console.log(`Hello there, my name is ${fName} ${lName}.`);
    console.log(`Welcome to the course of ${course}`);
    message(fName);
}

const welcomeMessage = (name) => {
    console.log(`Hey ${name}, we are happy to have you here. Reach out for any questions!`);
}


printStudentInformation("Alex", "Miller", "Ruby on Rails", welcomeMessage);
console.log("------");
printStudentInformation("Martha", "Smith", "Python", 
    () => {console.log("I was anonymous, but I will become message()")});
console.log("------");
printStudentInformation("Roger", "Anderson", "Node/Express", function(){console.log("Hey there!")});

