import * as React from 'react'

import { Component as SecondTestContent, mapStateToProps, dispatchToProps } from '../../src/test-page/SecondTestContent'
import { mount, mockReturnValue } from '../test-utils'
import { AppContext } from '../../src/composition/context'
import { mockedContext } from '../mocks'
import { empty, loaded, failed } from '../../src/composition/model/fetchable'

import * as BookInfoActions from '../../src/test-page/actions/book-info-actions'

describe('SecondTestContent', () => {
    let context: AppContext
    beforeEach(() => {
        context = mockedContext()
    })

    describe('state mapping', () => {
        it('maps empty state to props', () => {
            const props = mapStateToProps({ valuesSelected: [], bookInfo: empty() })
            expect(props).toEqual({ bookInfo: empty() })
        })
        it('maps filled state to props', () => {
            const props = mapStateToProps({ valuesSelected: [], bookInfo: loaded('some info') })
            expect(props).toEqual({ bookInfo: loaded('some info') })
        })
    })

    describe('dispatch mapping', () => {
        it('dispatches load action', async () => {
            const dispatch = jest.fn()
            mockReturnValue(context.books.fetchBookInfo, Promise.resolve({ description: 'some book description' }))
            await dispatchToProps(dispatch).load('1234')(context)
            expect(dispatch).toHaveBeenCalledWith(BookInfoActions.fetching())
            expect(dispatch).toHaveBeenCalledWith(BookInfoActions.fetched('some book description'))
        })

        it('handles failure of load action', async () => {
            const dispatch = jest.fn()
            mockReturnValue(context.books.fetchBookInfo, Promise.reject(new Error('some error')))
            await dispatchToProps(dispatch).load('1234')(context)
            expect(dispatch).toHaveBeenCalledWith(BookInfoActions.fetching())
            expect(dispatch).toHaveBeenCalledWith(BookInfoActions.failed(new Error('some error')))
        })
    })

    describe('component', () => {
        it('renders', () => {
            const element = mount(<SecondTestContent context={context} load={() => jest.fn()} bookInfo={loaded('some book info')} />)
            expect(element).toMatchSnapshot()
        })

        it('loads on mount', () => {
            const reader = jest.fn()
            mount(<SecondTestContent context={context} load={() => reader} bookInfo={empty()} />)
            expect(reader).toHaveBeenCalledWith(context)
        })
    })
})
