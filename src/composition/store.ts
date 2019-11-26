import * as redux from 'redux'

import { TestPageState } from '../test-page/state'
import { testPageReducer } from '../test-page/state/reducer'

export interface RootState {
    testPage: TestPageState
}

export function createStore(): redux.Store<RootState> {
    const reducer = redux.combineReducers({ testPage: testPageReducer })
    return redux.createStore(reducer)
}

export function extractTestPage(state: RootState): TestPageState {
    return state.testPage
}
