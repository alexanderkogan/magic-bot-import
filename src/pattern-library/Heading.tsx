import * as React from 'react'

export default class Heading extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return <h1 className="obc_heading1">{this.props.children}</h1>
    }
}
