import * as React from 'react'

import Nav from '../../src/pattern-library/Nav'
import { mount } from '../test-utils'

describe('Nav', () => {
    it('renders', () => {
        const element = mount(<Nav>children</Nav>)
        expect(element).toMatchSnapshot()
    })
})
