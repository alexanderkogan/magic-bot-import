import * as React from 'react'

export type ButtonType = 'default' | 'primary' | 'secondary'

export interface ButtonProps {
    type: ButtonType
    small?: boolean
}

function propsToClass(props: ButtonProps): string {
    const typeClass = props.type === 'default' ? 'obc_btn' : `obc_btn-${props.type}`
    const sizeClass = props.small ? ' obc_btn--small' : ''
    return `${typeClass}${sizeClass}`
}

export default class Button extends React.Component<ButtonProps, {}> {
    public render(): JSX.Element {
        const buttonClass = propsToClass(this.props)
        return (
            <button type="button" className={buttonClass}>
                {this.props.children}
            </button>
        )
    }
}
