import { TestPageState, initialState } from '../state'
import { TestPageAction } from '../actions/actions'
import produce, { Draft } from 'immer'
import { loading, loaded, failed } from '../../composition/model/fetchable'

export const testPageReducer = (state: TestPageState = initialState, action: TestPageAction) =>
    produce(state, (draft: Draft<TestPageState>) => {
        switch (action.type) {
            case 'TEST_ITEM_POP':
                draft.valuesSelected.pop()
                break
            case 'TEST_ITEM_PUSH':
                draft.valuesSelected.push(action.value)
                break
            case 'MTG_CARDS_FETCHING':
                draft.cardsInfo = loading()
                break
            case 'MTG_CARDS_FETCHED':
                draft.cardsInfo = loaded(action.value)
                break
            case 'MTG_CARDS_FETCH_FAILED':
                draft.cardsInfo = failed(action.error)
                break
        }
    })
