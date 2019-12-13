import * as React from 'react'

import { Component as MtgCardsContent, mapStateToProps, dispatchToProps } from '../../src/test-page/MtgCardsContent'
import { mount, mockReturnValue } from '../test-utils'
import { AppContext } from '../../src/composition/context'
import { mockedCards, mockedContext } from '../mocks'
import { empty, loaded } from '../../src/composition/model/fetchable'

import * as MtgCardsActions from '../../src/test-page/actions/mtg-cards-actions'

describe('SecondTestContent', () => {
    let context: AppContext
    beforeEach(() => {
        context = mockedContext()
    })

    describe('state mapping', () => {
        it('maps empty state to props', () => {
            const props = mapStateToProps({ valuesSelected: [], cardsInfo: empty() })
            expect(props).toEqual({ cardsInfo: empty() })
        })
        it('maps filled state to props', () => {
            const props = mapStateToProps({ valuesSelected: [], cardsInfo: loaded(mockedCards()) })
            expect(props).toEqual({ cardsInfo: loaded(mockedCards()) })
        })
    })

    describe('dispatch mapping', () => {
        it('dispatches load action', async () => {
            const dispatch = jest.fn()
            mockReturnValue(context.mtgCards.fetchMtgCards, Promise.resolve(mockedCards()))
            await dispatchToProps(dispatch).load('ELD')(context)
            expect(dispatch).toHaveBeenCalledWith(MtgCardsActions.fetching())
            expect(dispatch).toHaveBeenCalledWith(MtgCardsActions.fetched(mockedCards()))
        })

        it('handles failure of load action', async () => {
            const dispatch = jest.fn()
            mockReturnValue(context.mtgCards.fetchMtgCards, Promise.reject(new Error('some error')))
            await dispatchToProps(dispatch).load('1234')(context)
            expect(dispatch).toHaveBeenCalledWith(MtgCardsActions.fetching())
            expect(dispatch).toHaveBeenCalledWith(MtgCardsActions.failed(new Error('some error')))
        })
    })

    describe('component', () => {
        it('renders', () => {
            const element = mount(<MtgCardsContent context={context} load={() => jest.fn()} cardsInfo={loaded(mockedCards())} />)
            expect(element).toMatchSnapshot()
        })

        it('loads on mount', () => {
            const reader = jest.fn()
            mount(<MtgCardsContent context={context} load={() => reader} cardsInfo={empty()} />)
            expect(reader).toHaveBeenCalledWith(context)
        })
    })
})
