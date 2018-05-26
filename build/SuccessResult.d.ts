import { IFailableResult } from "./IFailableResult";
export declare class SuccessResult<TResult, TFailure> implements IFailableResult<TResult, TFailure> {
    static create<TResult, TFailure>(result: TResult): IFailableResult<TResult, TFailure>;
    private readonly result;
    private constructor();
    handle<T>(onSuccess: (success: TResult) => T, onFailure: (failure: TFailure) => T): T;
}
