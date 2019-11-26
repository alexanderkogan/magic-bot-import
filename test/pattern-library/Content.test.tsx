import * as React from 'react'

import Content from '../../src/pattern-library/Content'
import { mount } from '../test-utils'

describe('Content', () => {
    it('renders', () => {
        const element = mount(<Content>children</Content>)
        expect(element).toMatchSnapshot()
    })
})
