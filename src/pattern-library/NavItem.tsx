import * as React from 'react'
import { Props } from '../react-typings'
import { Link } from 'react-router-dom'

export interface TabItemProps {
    to: string
}
export default (props: Props<TabItemProps>) => (
    <li className="obc_tabs__item">
        <Link to={props.to} className="obc_tabs__link">
            {props.children}
        </Link>
    </li>
)
