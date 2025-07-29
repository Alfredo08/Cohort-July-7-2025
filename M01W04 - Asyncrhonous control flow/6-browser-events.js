console.log("Program begins here!");
let num = 1;

let pageButton = document.querySelector('button');

pageButton.addEventListener('click', (event) => {
    console.log("This is amazing isn't?", num);
    num ++;
});

console.log("Program ends here?");