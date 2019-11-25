import * as React from 'react'

import { App } from '../../src/composition/App'
import { shallow } from '../test-utils'

describe('App', () => {
    it('renders shallow', () => {
        const element = shallow(<App />)
        expect(element).toMatchSnapshot()
    })
})
