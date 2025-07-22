const math = require('./../1-math');
const chai = require('chai');
const expect = chai.expect;

describe("Testing the addTwoNumbers function.", () => {
    it("Adding 70 and 50, expecting as a result 120", () => {
        const result1 = math.addTwoNumbers(70, 50);
        const expectedValue1 = 120; 
        expect(result1).to.be.a("number");
        expect(result1).equal(expectedValue1);
    });
    
    it("Adding -20 and 15, expecting as a result -5.", () => {
        const result2 = math.addTwoNumbers(-20, 15);
        const expectedValue2 = -5;
        expect(result2).to.be.a("number");
        expect(result2).equal(expectedValue2);
        expect(result2).to.be.lessThan(0);
    });
    
    it("Adding 4.75 and 3.15, expecting as a result 7.9.", () => {
        const result3 = math.addTwoNumbers(4.75, 3.15);
        const expectedValue3 = 7.9;
        expect(result3).to.be.a("number");
        expect(result3).equal(expectedValue3);
    });
    
    it("Adding 'hello' and 5, expecting as a result 'We can only add numbers.'", () => {
        const result4 = math.addTwoNumbers("hello", 5);
        const expectedValue4 = "We can only add numbers.";
        expect(result4).equal(expectedValue4);
        expect(result4).to.be.a("string");
        expect(result4).to.have.length(24);
    });
});

describe("Testing the addNumbersInArray function.", () => {
    it("Adding [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expecting as result 55", () => {
        const result5 = math.addNumbersInArray([1,2,3,4,5,6,7,8,9,10]);
        const expectedValue5 = 55;
        expect(result5).to.be.a("number");
        expect(result5).equal(expectedValue5);   
    });

    it("Adding {num1: 1, num2: 2}, expecting as result 'Please send an array with numbers.'", () => {
        const result6 = math.addNumbersInArray({num1: 1, num2: 2});
        const expectedValue6 = "Please send an array with numbers.";
        expect(result6).equal(expectedValue6);
        expect(result6).to.be.a("string");
        expect(result6).to.have.length(34);
    });

    it("Adding [1, 2, 3, 'four', 5], expecting as result 'There is a value that is not a number.'", () => {
        const result7 = math.addNumbersInArray([1, 2, 3, "four", 5]);
        const expectedValue7 = "There is a value that is not a number.";
        expect(result7).equal(expectedValue7);
        expect(result7).to.be.a("string");
        expect(result7).to.have.length(38);
    });
});
