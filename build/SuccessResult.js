"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// noinspection JSUnusedGlobalSymbols
var SuccessResult = /** @class */ (function () {
    function SuccessResult(result) {
        this.result = result;
    }
    SuccessResult.create = function (result) {
        return new SuccessResult(result);
    };
    ;
    SuccessResult.prototype.handle = function (onSuccess, onFailure) {
        return onSuccess(this.result);
    };
    return SuccessResult;
}());
exports.SuccessResult = SuccessResult;
//# sourceMappingURL=SuccessResult.js.map