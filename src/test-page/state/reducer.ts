import { initialState, TestPageState, SelectableValue } from '../state'
import { TestPageAction } from './actions'

function createValues(values: SelectableValue[], action: TestPageAction): SelectableValue[] {
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

function createBookInfo(bookInfo: string | undefined, action: TestPageAction): string | undefined {
    if (action.type === 'BOOK_INFO_FETCHED') {
        return action.value
    }
    return bookInfo
}

export const testPageReducer = (current = initialState, action: TestPageAction): TestPageState => {
    return {
        valuesSelected: createValues(current.valuesSelected, action),
        bookInfo: createBookInfo(current.bookInfo, action),
    }
}
