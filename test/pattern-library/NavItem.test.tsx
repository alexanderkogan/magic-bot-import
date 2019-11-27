import * as React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Nav from '../../src/pattern-library/Nav'
import NavItem from '../../src/pattern-library/NavItem'
import { mount } from '../test-utils'

describe('NavItem', () => {
    it('renders shallow', () => {
        const element = mount(
            <Router>
                <Nav>
                    <NavItem to="some/location">some location</NavItem>
                    <NavItem to="">currentPage</NavItem>
                </Nav>
            </Router>
        )
        expect(element).toMatchSnapshot()
    })
})
