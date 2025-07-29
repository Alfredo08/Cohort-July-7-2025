const fs = require('fs');

fs.readFile('./message.txt', {encoding: 'utf-8'}, (error, data) => {
    if(error){
        throw Error("Something went wrong while reading from the file!");
    }
    
    let newText = data;
    newText += "\nPlease say hello to Ali and Denise!";

    fs.writeFile('./welcome.txt', newText, {encoding: 'utf-8'}, (errorWrite) => {
        if(errorWrite){
            throw Error("Something went wrong while writing into the new file!");
        }
        console.log("The text was successfully placed into the new file!");
    });
    console.log("Program ends here?");
});


console.log("Program starts here!");


/*
const fs = require('fs');

try{
    let data = fs.readFileSync('./message.txt', {encoding: 'utf-8'});
    let newText = data;
    newText += "\nPlease say hello to Ali and Denise!!!!!!";

    fs.writeFileSync('./welcome.txt', newText, {encoding: 'utf-8'});
    console.log("The text was successfully placed into the new file!");
}
catch(error){
    throw Error("Something went wrong!", error);
}
    

console.log("Program ends here?");
*/

