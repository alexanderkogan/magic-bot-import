import * as React from 'react'

import Title from '../pattern-library/Title'
import Heading from '../pattern-library/Heading'
import MtgCardsContent from './MtgCardsContent'

export default class TestPage extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <Title>
                    <Heading>Fetch MTG cards</Heading>
                </Title>
                <MtgCardsContent />
            </div>
        )
    }
}
