
// Clossure
const first = () => {
    let message = "Hello, this is the first message!";
    console.log(message);

    const second = () => {
        let message2 = "Hello, this is the second message!";
        console.log(message2);
        console.log(message);
    }

    return second;
}

let whatIsThisHolding = first();
console.log("-----");
whatIsThisHolding();
console.log("-----");


const countingVisits = () => {
    let count = 0;
    count ++;
    console.log("Vists up until here: ", count);

    const extraVisits = () => {
        count ++;
        console.log("Vists up until here: ", count);
    }

    return extraVisits;
}

let newVisit = countingVisits();
newVisit();
newVisit();
newVisit();
newVisit();

// reset the count
newVisit = countingVisits();
newVisit();