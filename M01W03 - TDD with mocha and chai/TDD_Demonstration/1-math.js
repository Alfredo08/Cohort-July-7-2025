
const addTwoNumbers = (num1, num2) => {
    if(typeof(num1) !== "number" || typeof(num2) !== "number"){
        return "We can only add numbers.";
    }
    return num1 + num2;
}

const addNumbersInArray = (numbers) => {
    if(! Array.isArray(numbers)){
        return "Please send an array with numbers.";
    }

    let sum = 0;
    for(let i = 0; i < numbers.length; i ++){
        if(typeof(numbers[i]) !== "number"){
            return "There is a value that is not a number.";
        }
        sum += numbers[i];
    }
    return sum;
}

const isOdd = (num) => {
    if(typeof(num) !== "number"){
        return null;
    }
    
    if(! Number.isInteger(num)){
        return null;
    }

    if(num % 2 === 0){
        return false;
    }
    return true;
}




module.exports = {
    addTwoNumbers,
    addNumbersInArray,
    isOdd
}