import { Action } from '../../composition/model/action'
import { SelectableValue } from '../state'

export type TestPageAction = TestItemAction | BookInfoAction

export type TestItemAction = PopTestItemAction | PushTestItemAction

export type PopTestItemAction = Action<'TEST_ITEM_POP'>
export type PushTestItemAction = Action<'TEST_ITEM_PUSH'> & { value: SelectableValue }

export function pushItem(value: SelectableValue): PushTestItemAction {
    return { type: 'TEST_ITEM_PUSH', value }
}

export function popItem(): PopTestItemAction {
    return { type: 'TEST_ITEM_POP' }
}

export type BookInfoAction = FetchedBookInfoAction

export type FetchedBookInfoAction = Action<'BOOK_INFO_FETCHED'> & { value: string | undefined }

export function fetchedBookInfo(value: string | undefined): FetchedBookInfoAction {
    return { type: 'BOOK_INFO_FETCHED', value }
}
