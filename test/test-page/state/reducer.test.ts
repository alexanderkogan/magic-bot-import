import { testPageReducer } from '../../../src/test-page/state/reducer'
import { TestPageState } from '../../../src/test-page/state'
import { empty, loading, loaded, failed } from '../../../src/composition/model/fetchable'

import * as TestItemActions from '../../../src/test-page/actions/test-item-actions'
import * as BookInfoActions from '../../../src/test-page/actions/book-info-actions'

describe('testPageReducer', () => {
    describe('TestItemActions', () => {
        describe('push actions', () => {
            it('adds a value at the end of valuesSelected', () => {
                // given
                const oldState: TestPageState = { valuesSelected: [], bookInfo: empty() }

                // when
                const newState = testPageReducer(oldState, TestItemActions.push('another value'))

                // then
                expect(newState.valuesSelected).toEqual(['another value'])
            })
        })

        describe('pop actions', () => {
            it('removes a value from the end of valuesSelected', () => {
                // given
                const oldState: TestPageState = { valuesSelected: ['another value'], bookInfo: empty() }

                // when
                const newState = testPageReducer(oldState, TestItemActions.pop())

                // then
                expect(newState.valuesSelected).toEqual([])
            })

            it('works with empty valuesSelected', () => {
                // given
                const oldState: TestPageState = { valuesSelected: [], bookInfo: empty() }

                // when
                const newState = testPageReducer(oldState, TestItemActions.pop())

                // then
                expect(newState.valuesSelected).toEqual([])
            })
        })
    })
    describe('BookInfoActions', () => {
        describe('fetching', () => {
            it('sets bookinfo into loading state', () => {
                // given
                const oldState: TestPageState = { valuesSelected: [], bookInfo: empty() }

                // when
                const newState = testPageReducer(oldState, BookInfoActions.fetching())

                // then
                expect(newState.bookInfo).toEqual(loading())
            })
        })

        describe('fetched', () => {
            it('sets bookinfo into loaded state', () => {
                // given
                const oldState: TestPageState = { valuesSelected: [], bookInfo: empty() }

                // when
                const newState = testPageReducer(oldState, BookInfoActions.fetched('info'))

                // then
                expect(newState.bookInfo).toEqual(loaded('info'))
            })
        })

        describe('errored', () => {
            it('sets bookinfo into error state', () => {
                // given
                const oldState: TestPageState = { valuesSelected: [], bookInfo: empty() }

                // when
                const newState = testPageReducer(oldState, BookInfoActions.failed(new Error('some error')))

                // then
                expect(newState.bookInfo).toEqual(failed(new Error('some error')))
            })
        })
    })
})
