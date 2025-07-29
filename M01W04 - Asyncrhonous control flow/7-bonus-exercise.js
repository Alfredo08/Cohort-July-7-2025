// Can you get the console logs in the right order?
// Try it before running the code!
const highOrderFunction = function(callback){
    const data = {
        fullName: "Alex Miller",
        initials: "AM"
    }
    console.log(1, data); 

    const timeOutData = setTimeout(() => {
        console.log(2); 
        data.initials = "RA";
        data.fullName = "Roger Anderson";
        callback(); 
        console.log(3, data); 
    }, 0);

    console.log(4, timeOutData); 
    console.log(5); 
}
console.log(6); 

highOrderFunction(() => {
    console.log(7, "Inside the callback"); 
});
console.log(8); 