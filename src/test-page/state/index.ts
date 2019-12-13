import { Fetchable, empty } from '../../composition/model/fetchable'
import { Card } from 'scryfall-sdk'

export type SelectableValue = 'first value' | 'second value' | 'another value'

export interface TestPageState {
    valuesSelected: SelectableValue[]
    cardsInfo: Fetchable<Card[]>
}

export const initialState: TestPageState = {
    valuesSelected: ['first value', 'another value'],
    cardsInfo: empty(),
}
