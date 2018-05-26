import {IFailableResult} from "./IFailableResult";

// noinspection JSUnusedGlobalSymbols
export class SuccessResult<TResult, TFailure> implements IFailableResult<TResult, TFailure> {

    static create<TResult, TFailure>(result: TResult): IFailableResult<TResult, TFailure> {
        return new SuccessResult<TResult, TFailure>(result)
    };

    private readonly result: TResult;

    private constructor(result: TResult) {
        this.result = result;
    }

    handle<T>(onSuccess: (success: TResult) => T, onFailure: (failure: TFailure) => T): T {
        return onSuccess(this.result)
    }
}
