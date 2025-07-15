
const alex = {
    firstName: "Alex",
    lastName: "Miller",
    age: 25,
    printStudentInfo: function(){
        console.log(this.firstName, this.lastName, this.age);
    },
    printHello: function(){
        console.log("Hello there");
        this.printStudentInfo();
    }
}

alex.printHello();