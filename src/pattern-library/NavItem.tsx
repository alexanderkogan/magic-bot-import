import * as React from 'react'
import { Props } from '../react-typings'
import { NavLink } from 'react-router-dom'

export interface TabItemProps {
    to: string
}
export default (props: Props<TabItemProps>) => (
    <li className="obc_tabs__item">
        <NavLink to={props.to} className="obc_tabs__link" activeClassName="obc_tabs__link--selected" exact>
            {props.children}
        </NavLink>
    </li>
)
