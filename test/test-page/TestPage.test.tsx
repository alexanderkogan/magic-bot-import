import * as React from 'react'

import TestPage from '../../src/test-page/TestPage'
import { shallow } from '../test-utils'

describe('TestPage', () => {
    it('renders shallow', () => {
        const element = shallow(<TestPage />)
        expect(element).toMatchSnapshot()
    })
})
