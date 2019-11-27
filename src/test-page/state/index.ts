export type SelectableValue = 'first value' | 'second value' | 'another value'

export interface TestPageState {
    valuesSelected: SelectableValue[]
    bookInfo?: string
}

export const initialState: TestPageState = {
    valuesSelected: ['first value', 'another value'],
}
