import * as React from 'react'

import Button from '../../src/pattern-library/Button'
import { mount } from '../test-utils'

describe('Button', () => {
    it('renders', () => {
        const element = mount(<Button clicked={jest.fn()} />)
        expect(element).toMatchSnapshot()
    })

    it('calls callback on click', () => {
        const clicked = jest.fn()
        const element = mount(<Button clicked={clicked} />)
        element
            .find('button')
            .at(0)
            .simulate('click')
        expect(clicked).toHaveBeenCalled()
    })
})
