import { expect } from "chai";
import FailableResult from "../index";

describe("SuccessResult test", () => {
    it("Should create instance and execute correct lambda", () => {
        const result = FailableResult.createResult(1);
        let y = 0;
        result.handle(() => y = 1, () => y = 0);
        expect(y).to.equal(1);
    });
});
