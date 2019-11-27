import * as React from 'react'

import { component as FirstTestContent, mapStateToProps, dispatchToProps } from '../../src/test-page/FirstTestContent'
import { shallow } from '../test-utils'
import * as TestItemActions from '../../src/test-page/actions/test-item-actions'
import { empty } from '../../src/composition/model/fetchable'

describe('FirstTestContent', () => {
    describe('state mapping', () => {
        it('maps empty state to props', () => {
            const props = mapStateToProps({ valuesSelected: [], bookInfo: empty() })
            expect(props).toEqual({ selections: 0 })
        })
        it('maps filled state to props', () => {
            const props = mapStateToProps({ valuesSelected: ['first value', 'another value'], bookInfo: empty() })
            expect(props).toEqual({ selections: 2, lastSelection: 'another value' })
        })
    })

    describe('dispatch mapping', () => {
        it('dispatches pop action', async () => {
            const dispatcher = jest.fn()
            dispatchToProps(dispatcher).pop()
            expect(dispatcher).toHaveBeenCalledWith(TestItemActions.pop())
        })

        it('dispatches push action', async () => {
            const dispatcher = jest.fn()
            dispatchToProps(dispatcher).push('first value')
            expect(dispatcher).toHaveBeenCalledWith(TestItemActions.push('first value'))
        })
    })

    describe('component', () => {
        it('renders shallow', () => {
            const element = shallow(<FirstTestContent push={jest.fn()} pop={jest.fn()} selections={42} lastSelection="another value" />)
            expect(element).toMatchSnapshot()
        })
    })
})
