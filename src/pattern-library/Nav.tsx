import * as React from 'react'
import { Props } from '../react-typings'

export default (props: Props) => (
    <nav>
        <ul className="obc_tabs">{props.children}</ul>
    </nav>
)
