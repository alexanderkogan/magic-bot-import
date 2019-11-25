import * as redux from 'redux'

export interface RootState {}

export function createStore(): redux.Store<RootState> {
    const reducer = () => ({})
    return redux.createStore(reducer)
}
