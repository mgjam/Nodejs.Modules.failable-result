import { IFailableResult } from "./IFailableResult";
export declare class FailureResult<TResult, TFailure> implements IFailableResult<TResult, TFailure> {
    static create<TResult, TFailure>(failure: TFailure): IFailableResult<TResult, TFailure>;
    private readonly failure;
    private constructor();
    handle<T>(onSuccess: (result: TResult) => T, onFailure: (failure: TFailure) => T): T;
}
