import * as React from 'react'
import { Props } from '../react-typings'

export interface ButtonProps {
    clicked: () => void
}

export default (props: Props<ButtonProps>) => {
    return (
        <button type="button" onClick={props.clicked}>
            {props.children}
        </button>
    )
}
