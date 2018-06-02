import { expect } from "chai";
import * as FailableResult from "../index";

describe("FailureResult test", () => {
    it("Should create instance and execute correct lambda", () => {
        const result = FailableResult.createFailure(1);
        let y = 0;
        result.handle(() => y = 0, () => y = 1);
        expect(y).to.equal(1);
    });
});
