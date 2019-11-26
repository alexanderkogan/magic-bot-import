import * as React from 'react'

import { App } from '../../src/composition/App'
import { shallow } from '../test-utils'
import { mockedContext } from '../mocks'

describe('App', () => {
    it('renders shallow', () => {
        const element = shallow(<App context={mockedContext()} />)
        expect(element).toMatchSnapshot()
    })
})
