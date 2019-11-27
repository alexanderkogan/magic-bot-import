import { initialState, TestPageState, SelectableValue } from '../state'
import { TestPageAction } from '../actions/actions'
import { Fetchable, empty, loading, loaded, failed } from '../../composition/model/fetchable'

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

function createBookInfo(bookInfo: Fetchable<string>, action: TestPageAction): Fetchable<string> {
    if (action.type === 'BOOK_INFO_FETCH_FAILED') {
        return failed(action.error)
    }
    if (action.type === 'BOOK_INFO_FETCHED') {
        return loaded(action.value)
    }
    if (action.type === 'BOOK_INFO_FETCHING') {
        return loading()
    }
    return bookInfo
}

export const testPageReducer = (current = initialState, action: TestPageAction): TestPageState => {
    return {
        valuesSelected: createValues(current.valuesSelected, action),
        bookInfo: createBookInfo(current.bookInfo, action),
    }
}
