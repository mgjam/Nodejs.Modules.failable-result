"use strict";
const expect = require("chai").expect;
const testee = require("../build/FailureResult");

describe("FailureResult test", () => {
    it("Should create instance and execute correct lambda", () => {
        const result = testee.FailureResult.create(1);
        let y = 0;
        result.handle(() => y = 0, () => y = 1);
        expect(y).to.equal(1);
    });
});
