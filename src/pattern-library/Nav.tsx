import * as React from 'react'
import { Props } from '../react-typings'

export default (props: Props) => (
    <nav>
        <ul>{props.children}</ul>
    </nav>
)
