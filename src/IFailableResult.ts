export interface IFailableResult<TResult, TFailure> {
    handle<T>(onSuccess: (result:TResult) => T, onFailure: (failure:TFailure) => T): T;
}
