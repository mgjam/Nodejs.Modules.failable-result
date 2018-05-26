"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// noinspection JSUnusedGlobalSymbols
var FailureResult = /** @class */ (function () {
    function FailureResult(failure) {
        this.failure = failure;
    }
    FailureResult.create = function (failure) {
        return new FailureResult(failure);
    };
    ;
    FailureResult.prototype.handle = function (onSuccess, onFailure) {
        return onFailure(this.failure);
    };
    return FailureResult;
}());
exports.FailureResult = FailureResult;
//# sourceMappingURL=FailureResult.js.map