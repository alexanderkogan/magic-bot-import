import * as React from 'react'

import Title from '../../src/pattern-library/Title'
import { mount } from '../test-utils'

describe('Title', () => {
    it('renders', () => {
        const element = mount(<Title>children</Title>)
        expect(element).toMatchSnapshot()
    })
})
