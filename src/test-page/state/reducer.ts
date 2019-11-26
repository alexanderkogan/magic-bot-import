import { initialState, TestPageState, SelectableValue } from './'
import { TestItemAction } from './actions'

function createValues(values: SelectableValue[], action: TestItemAction): SelectableValue[] {
    const newValues = [...values]
    switch (action.type) {
        case 'TEST_ITEM_POP':
            newValues.pop()
            break
        case 'TEST_ITEM_PUSH':
            newValues.push(action.value)
            break
    }
    return newValues
}

export const testPageReducer = (current = initialState, action: TestItemAction): TestPageState => {
    return {
        valuesSelected: createValues(current.valuesSelected, action),
    }
}
