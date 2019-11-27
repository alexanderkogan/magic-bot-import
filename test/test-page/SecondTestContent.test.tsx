import * as React from 'react'

import { Component as SecondTestContent, mapStateToProps, dispatchToProps } from '../../src/test-page/SecondTestContent'
import { mount, mockReturnValue } from '../test-utils'
import { fetchedBookInfo } from '../../src/test-page/state/actions'
import { AppContext } from '../../src/composition/context'
import { mockedContext } from '../mocks'

describe('SecondTestContent', () => {
    let context: AppContext
    beforeEach(() => {
        context = mockedContext()
    })

    describe('state mapping', () => {
        it('maps empty state to props', () => {
            const props = mapStateToProps({ valuesSelected: [] })
            expect(props).toEqual({})
        })
        it('maps filled state to props', () => {
            const props = mapStateToProps({ valuesSelected: [], bookInfo: 'some info' })
            expect(props).toEqual({ bookInfo: 'some info' })
        })
    })

    describe('dispatch mapping', () => {
        it('dispatches load action', async () => {
            const dispatch = jest.fn()
            mockReturnValue(context.books.fetchBookInfo, Promise.resolve('some book description'))
            await dispatchToProps(dispatch).load('1234')(context)
            expect(dispatch).toHaveBeenCalledWith(fetchedBookInfo('some book description'))
        })
    })

    describe('component', () => {
        it('renders', () => {
            const element = mount(<SecondTestContent context={context} load={() => jest.fn()} bookInfo="some book info" />)
            expect(element).toMatchSnapshot()
        })

        it('loads on mount', () => {
            const reader = jest.fn()
            mount(<SecondTestContent context={context} load={() => reader} bookInfo="some book info" />)
            expect(reader).toHaveBeenCalledWith(context)
        })
    })
})
