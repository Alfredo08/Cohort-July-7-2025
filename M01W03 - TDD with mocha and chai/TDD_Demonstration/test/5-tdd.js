const math = require('./../1-math');
const chai = require('chai');
const expect = chai.expect;

describe("Testing isOdd function.", () => {
    it("Should return false if number = 10.", () => {
        const result1 = math.isOdd(10);
        expect(result1).to.be.a("boolean");
        expect(result1).equal(false);
    });

    it("Should return true if number = 15.", () => {
        const result2 = math.isOdd(15);
        expect(result2).to.be.a("boolean");
        expect(result2).equal(true);
    });

    it("Should return null if number = 'Hello there'", () => {
        const result3 = math.isOdd("Hello there");
        expect(result3).equal(null);
    });

    it("Should return null if number = 2.4.", () => {
        const result4 = math.isOdd(2.4);
        expect(result4).equal(null);
    });
});
