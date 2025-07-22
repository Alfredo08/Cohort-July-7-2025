const math = require('./../1-math');
const assert = require('assert');

describe("Testing the addTwoNumbers function.", () => {
    it("Adding 70 and 50, expecting as a result 120", () => {
        const result1 = math.addTwoNumbers(70, 50);
        const expectedValue1 = 120; 
        assert.equal(result1, expectedValue1);
    });

    it("Adding -20 and 15, expecting as a result -5.", () => {
        const result2 = math.addTwoNumbers(-20, 15);
        const expectedValue2 = -5;
        assert.equal(result2, expectedValue2); 
    });

    it("Adding 4.75 and 3.15, expecting as a result 7.9.", () => {
        const result3 = math.addTwoNumbers(4.75, 3.15);
        const expectedValue3 = 7.9;
        assert.equal(result3, expectedValue3);
    });

    it("Adding 'hello' and 5, expecting as a result 'We can only add numbers.'", () => {
        const result4 = math.addTwoNumbers("hello", 5);
        const expectedValue4 = "We can only add numbers.";
        assert.equal(result4, expectedValue4);
    });
});

describe("Testing the addNumbersInArray function.", () => {
    it("Adding [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expecting as result 55", () => {
        const result5 = math.addNumbersInArray([1,2,3,4,5,6,7,8,9,10]);
        const expectedValue5 = 55;
        assert.equal(result5, expectedValue5);   
    });

    it("Adding {num1: 1, num2: 2}, expecting as result 'Please send an array with numbers.'", () => {
        const result6 = math.addNumbersInArray({num1: 1, num2: 2});
        const expectedValue6 = "Please send an array with numbers.";
        assert.equal(result6, expectedValue6);
    });

    it("Adding [1, 2, 3, 'four', 5], expecting as result 'There is a value that is not a number.'", () => {
        const result7 = math.addNumbersInArray([1, 2, 3, "four", 5]);
        const expectedValue7 = "There is a value that is not a number.";
        assert.equal(result7, expectedValue7);
    });
});
