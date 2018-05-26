"use strict";
const expect = require("chai").expect;
const testee = require("../build/SuccessResult");

describe("SuccessResult test", () => {
    it("Should create instance and execute correct lambda", () => {
        const result = testee.SuccessResult.create(1);
        let y = 0;
        result.handle(() => y = 1, () => y = 0);
        expect(y).to.equal(1);
    });
});
