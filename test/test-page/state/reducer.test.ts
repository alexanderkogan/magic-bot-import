import { testPageReducer } from '../../../src/test-page/state/reducer'
import { TestPageState } from '../../../src/test-page/state'
import { empty, loading, loaded, failed } from '../../../src/composition/model/fetchable'

import * as TestItemActions from '../../../src/test-page/actions/test-item-actions'
import * as MtgCardsActions from '../../../src/test-page/actions/mtg-cards-actions'
import { mockedCards } from '../../mocks'

describe('testPageReducer', () => {
    describe('TestItemActions', () => {
        describe('push actions', () => {
            it('adds a value at the end of valuesSelected', () => {
                // given
                const oldState: TestPageState = { valuesSelected: [], cardsInfo: empty() }

                // when
                const newState = testPageReducer(oldState, TestItemActions.push('another value'))

                // then
                expect(newState.valuesSelected).toEqual(['another value'])
            })
        })

        describe('pop actions', () => {
            it('removes a value from the end of valuesSelected', () => {
                // given
                const oldState: TestPageState = { valuesSelected: ['another value'], cardsInfo: empty() }

                // when
                const newState = testPageReducer(oldState, TestItemActions.pop())

                // then
                expect(newState.valuesSelected).toEqual([])
            })

            it('works with empty valuesSelected', () => {
                // given
                const oldState: TestPageState = { valuesSelected: [], cardsInfo: empty() }

                // when
                const newState = testPageReducer(oldState, TestItemActions.pop())

                // then
                expect(newState.valuesSelected).toEqual([])
            })
        })
    })
    describe('MtgCardsActions', () => {
        describe('fetching', () => {
            it('sets cardsInfo into loading state', () => {
                // given
                const oldState: TestPageState = { valuesSelected: [], cardsInfo: empty() }

                // when
                const newState = testPageReducer(oldState, MtgCardsActions.fetching())

                // then
                expect(newState.cardsInfo).toEqual(loading())
            })
        })

        describe('fetched', () => {
            it('sets bookinfo into loaded state', () => {
                // given
                const oldState: TestPageState = { valuesSelected: [], cardsInfo: empty() }

                // when
                const newState = testPageReducer(oldState, MtgCardsActions.fetched(mockedCards()))

                // then
                expect(newState.cardsInfo).toEqual(loaded(mockedCards()))
            })
        })

        describe('errored', () => {
            it('sets bookinfo into error state', () => {
                // given
                const oldState: TestPageState = { valuesSelected: [], cardsInfo: empty() }

                // when
                const newState = testPageReducer(oldState, MtgCardsActions.failed(new Error('some error')))

                // then
                expect(newState.cardsInfo).toEqual(failed(new Error('some error')))
            })
        })
    })
})
