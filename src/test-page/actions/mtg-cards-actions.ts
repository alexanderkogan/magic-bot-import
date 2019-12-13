import { Action } from '../../composition/model/action'
import { Card } from 'scryfall-sdk'

export type MtgCardsAction = MtgCardsFetchedAction | MtgCardsFetchFailedAction | MtgCardsFetchingAction

export type MtgCardsFetchingAction = Action<'MTG_CARDS_FETCHING'>
export type MtgCardsFetchedAction = Action<'MTG_CARDS_FETCHED'> & { value: Card[] }
export type MtgCardsFetchFailedAction = Action<'MTG_CARDS_FETCH_FAILED'> & { error: Error }

export function fetching(): MtgCardsFetchingAction {
    return { type: 'MTG_CARDS_FETCHING' }
}
export function fetched(value: Card[]): MtgCardsFetchedAction {
    return { type: 'MTG_CARDS_FETCHED', value }
}
export function failed(error: Error): MtgCardsFetchFailedAction {
    return { type: 'MTG_CARDS_FETCH_FAILED', error }
}
