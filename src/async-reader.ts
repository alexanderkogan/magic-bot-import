export type AsyncReader<C, T> = (context: C) => Promise<T>

export function map<C, S, T>(reader: AsyncReader<C, S>, f: (value: S) => T): AsyncReader<C, T> {
    return async context => f(await reader(context))
}

export function concat<C1, C2, S, T>(reader: AsyncReader<C1, S>, f: (value: S) => AsyncReader<C2, T>): AsyncReader<C1 & C2, T> {
    return async context => f(await reader(context))(context)
}

export function all<C, T>(...reader: Array<AsyncReader<C, T>>): AsyncReader<C, T[]> {
    return context => Promise.all(reader.map(r => r(context)))
}

export function race<C, T>(...reader: Array<AsyncReader<C, T>>): AsyncReader<C, T> {
    return context => Promise.race(reader.map(r => r(context)))
}

export function just<S, T>(value: T): AsyncReader<S, T> {
    return () => Promise.resolve(value)
}

export function fail<S, T>(error: Error): AsyncReader<S, T> {
    return () => Promise.reject(error)
}
