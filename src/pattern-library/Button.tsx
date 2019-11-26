import * as React from 'react'
import { Props } from '../react-typings'

export type ButtonType = 'default' | 'primary' | 'secondary'

export interface ButtonProps {
    type: ButtonType
    clicked: () => void
    small?: boolean
}

function propsToClass(props: ButtonProps): string {
    const typeClass = props.type === 'default' ? 'obc_btn' : `obc_btn-${props.type}`
    const sizeClass = props.small ? ' obc_btn--small' : ''
    return `${typeClass}${sizeClass}`
}

export default (props: Props<ButtonProps>) => {
    const buttonClass = propsToClass(props)
    return (
        <button type="button" className={buttonClass} onClick={props.clicked}>
            {props.children}
        </button>
    )
}
