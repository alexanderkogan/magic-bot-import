import * as React from 'react'

import Title from '../pattern-library/Title'
import Heading from '../pattern-library/Heading'
import FirstTestContent from './FirstTestContent'
import SecondTestContent from './SecondTestContent'

export default class TestPage extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <Title>
                    <Heading>Otto Flow Test Page</Heading>
                </Title>
                <FirstTestContent />
                <SecondTestContent />
            </div>
        )
    }
}
