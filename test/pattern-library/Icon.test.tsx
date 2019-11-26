import * as React from 'react'

import Icon from '../../src/pattern-library/Icon'
import { mount } from '../test-utils'

describe('Icon', () => {
    it('renders', () => {
        const element = mount(<Icon type="arrowdown-bold" />)
        expect(element).toMatchSnapshot()
    })
})
