import * as React from 'react'

export default class Content extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return <div className="obc_content-container">{this.props.children}</div>
    }
}
