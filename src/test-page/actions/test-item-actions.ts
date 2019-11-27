import { Action } from '../../composition/model/action'
import { SelectableValue } from '../state'

export type TestItemAction = PopTestItemAction | PushTestItemAction

export type PopTestItemAction = Action<'TEST_ITEM_POP'>
export type PushTestItemAction = Action<'TEST_ITEM_PUSH'> & { value: SelectableValue }

export function push(value: SelectableValue): PushTestItemAction {
    return { type: 'TEST_ITEM_PUSH', value }
}

export function pop(): PopTestItemAction {
    return { type: 'TEST_ITEM_POP' }
}
