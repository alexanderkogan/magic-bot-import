import { Fetchable, empty } from '../../composition/model/fetchable'

export type SelectableValue = 'first value' | 'second value' | 'another value'

export interface TestPageState {
    valuesSelected: SelectableValue[]
    bookInfo: Fetchable<string>
}

export const initialState: TestPageState = {
    valuesSelected: ['first value', 'another value'],
    bookInfo: empty(),
}
