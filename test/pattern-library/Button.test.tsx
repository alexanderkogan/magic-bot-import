import * as React from 'react'

import Button from '../../src/pattern-library/Button'
import { mount } from '../test-utils'

describe('Button', () => {
    it('renders', () => {
        const element = mount(<Button type="default" clicked={jest.fn()} />)
        expect(element).toMatchSnapshot()
    })

    it('calls callback on click', () => {
        const clicked = jest.fn()
        const element = mount(<Button type="default" clicked={clicked} />)
        element
            .find('button')
            .at(0)
            .simulate('click')
        expect(clicked).toHaveBeenCalled()
    })

    it('renders small buttons correctly', () => {
        const element = mount(<Button type="primary" clicked={jest.fn()} small />)
        expect(element).toMatchSnapshot()
    })
})
