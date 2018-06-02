export interface FailableResult<TResult, TFailure> {
    handle<T>(onSuccess: (result: TResult) => T, onFailure: (failure: TFailure) => T): T;
}

class FailureResult<TResult, TFailure> implements FailableResult<TResult, TFailure> {

    private readonly failure: TFailure;

    constructor(failure: TFailure) {
        this.failure = failure;
    }

    handle<T>(onSuccess: (result: TResult) => T, onFailure: (failure: TFailure) => T): T {
        return onFailure(this.failure);
    }
}

class SuccessResult<TResult, TFailure> implements FailableResult<TResult, TFailure> {

    private readonly result: TResult;

    constructor(result: TResult) {
        this.result = result;
    }

    handle<T>(onSuccess: (success: TResult) => T, onFailure: (failure: TFailure) => T): T {
        return onSuccess(this.result)
    }
}

const createResult = <TResult, TFailure>(result: TResult): FailableResult<TResult, TFailure> =>
    new SuccessResult(result);

const createFailure = <TResult, TFailure>(failure: TFailure): FailableResult<TResult, TFailure> =>
    new FailureResult(failure);

export default {
    createResult,
    createFailure
};
