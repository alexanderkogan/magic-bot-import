import * as React from 'react'

export interface ToggleSwitchProps {
    toggle: () => {}
    checked?: boolean
}

export default class ToggleSwitch extends React.Component<ToggleSwitchProps, {}> {
    public render(): JSX.Element {
        return (
            <div className="obc_toggle">
                <input
                    className="obc_toggle__input"
                    id="toggle"
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.toggle}
                />
                <label className="obc_toggle__label" htmlFor="toggle">
                    <span className="obc_toggle__switch"></span>
                    {this.props.children}
                </label>
            </div>
        )
    }
}
