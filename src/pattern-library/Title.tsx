import * as React from 'react'

export default class Title extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return <div className="obc_title-container">{this.props.children}</div>
    }
}
