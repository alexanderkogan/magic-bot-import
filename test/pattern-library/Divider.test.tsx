import * as React from 'react'

import Divider from '../../src/pattern-library/Divider'
import { mount } from '../test-utils'

describe('Content', () => {
    it('renders', () => {
        const element = mount(<Divider />)
        expect(element).toMatchSnapshot()
    })
})
