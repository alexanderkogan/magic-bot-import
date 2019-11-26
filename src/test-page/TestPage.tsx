import * as React from 'react'

import Title from '../pattern-library/Title'
import Heading from '../pattern-library/Heading'
import Content from '../pattern-library/Content'
import FirstTestContent from './FirstTestContent'

export default class TestPage extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <Title>
                    <Heading>Otto Flow Test Page</Heading>
                </Title>
                <FirstTestContent></FirstTestContent>
                <Content>More Content</Content>
            </div>
        )
    }
}
