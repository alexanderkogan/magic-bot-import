import * as React from 'react'
import { Props } from '../react-typings'
import { NavLink } from 'react-router-dom'

export interface TabItemProps {
    to: string
}
export default (props: Props<TabItemProps>) => (
    <li>
        <NavLink to={props.to} exact>
            {props.children}
        </NavLink>
    </li>
)
