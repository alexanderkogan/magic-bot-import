export type Fetchable<T> = Empty | Loading | Loaded<T> | Failed

export interface Empty {
    type: 'empty'
}
export interface Loading {
    type: 'loading'
}
export interface Loaded<T> {
    type: 'loaded'
    value: T
}
export interface Failed {
    type: 'failed'
    value: Error
}

export function empty(): Empty {
    return { type: 'empty' }
}
export function loading(): Loading {
    return { type: 'loading' }
}
export function loaded<T>(value: T): Loaded<T> {
    return { type: 'loaded', value }
}
export function failed(value: Error): Failed {
    return { type: 'failed', value }
}
