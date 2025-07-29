
let count = 1;

let timer = setInterval(() => {
    console.log(`Hey there, the count is at: ${count}`);
    count ++;

    if(count > 10){
        clearInterval(timer);
    }
}, 1000);

console.log("This is the start of the program!");
