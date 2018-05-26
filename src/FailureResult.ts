import {IFailableResult} from "./IFailableResult";

// noinspection JSUnusedGlobalSymbols
export class FailureResult<TResult, TFailure> implements IFailableResult<TResult, TFailure> {

    static create<TResult, TFailure>(failure: TFailure): IFailableResult<TResult, TFailure> {
        return new FailureResult<TResult, TFailure>(failure)
    };

    private readonly failure: TFailure;

    private constructor(failure: TFailure) {
        this.failure = failure;
    }

    handle<T>(onSuccess: (result: TResult) => T, onFailure: (failure: TFailure) => T): T {
        return onFailure(this.failure);
    }
}
