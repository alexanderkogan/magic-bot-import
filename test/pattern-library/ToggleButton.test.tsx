import * as React from 'react'

import ToggleButton from '../../src/pattern-library/ToggleButton'
import { mount } from '../test-utils'

describe('ToggleButton', () => {
    it('renders', () => {
        const element = mount(<ToggleButton id="toggle1" values={['yes', 'maybe', 'no']} changed={jest.fn} currentValue="yes" />)
        expect(element).toMatchSnapshot()
    })

    it('calls changed on change event', () => {
        const changed = jest.fn()
        const element = mount(<ToggleButton id="toggle1" values={['yes', 'maybe', 'no']} changed={changed} currentValue="yes" />)
        element
            .find('input')
            .at(2)
            .simulate('change')
        expect(changed).toHaveBeenCalledWith('no')
    })
})
