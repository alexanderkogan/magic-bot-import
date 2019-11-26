import { testPageReducer } from '../../../src/test-page/state/reducer'
import { pushItem, popItem } from '../../../src/test-page/state/actions'
import { TestPageState } from '../../../src/test-page/state'

describe('testPageReducer', () => {
    describe('push actions', () => {
        it('adds a value at the end of valuesSelected', () => {
            // given
            const oldState: TestPageState = { valuesSelected: [] }

            // when
            const newState = testPageReducer(oldState, pushItem('another value'))

            // then
            expect(newState.valuesSelected).toEqual(['another value'])
        })
    })

    describe('pop actions', () => {
        it('removes a value from the end of valuesSelected', () => {
            // given
            const oldState: TestPageState = { valuesSelected: ['another value'] }

            // when
            const newState = testPageReducer(oldState, popItem())

            // then
            expect(newState.valuesSelected).toEqual([])
        })

        it('works with empty valuesSelected', () => {
            // given
            const oldState: TestPageState = { valuesSelected: [] }

            // when
            const newState = testPageReducer(oldState, popItem())

            // then
            expect(newState.valuesSelected).toEqual([])
        })
    })
})
