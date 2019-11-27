import { Action } from '../../composition/model/action'

export type BookInfoAction = BookInfoFetchedAction | BookInfoFetchFailedAction | BookInfoFetchingAction

export type BookInfoFetchingAction = Action<'BOOK_INFO_FETCHING'>
export type BookInfoFetchedAction = Action<'BOOK_INFO_FETCHED'> & { value: string }
export type BookInfoFetchFailedAction = Action<'BOOK_INFO_FETCH_FAILED'> & { error: Error }

export function fetching(): BookInfoFetchingAction {
    return { type: 'BOOK_INFO_FETCHING' }
}
export function fetched(value: string): BookInfoFetchedAction {
    return { type: 'BOOK_INFO_FETCHED', value }
}
export function failed(error: Error): BookInfoFetchFailedAction {
    return { type: 'BOOK_INFO_FETCH_FAILED', error }
}
