import * as React from 'react'

import Heading from '../../src/pattern-library/Heading'
import { mount } from '../test-utils'

describe('Content', () => {
    it('renders', () => {
        const element = mount(<Heading>children</Heading>)
        expect(element).toMatchSnapshot()
    })
})
