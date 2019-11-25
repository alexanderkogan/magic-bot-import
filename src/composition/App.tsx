import * as React from 'react'
import { hot } from 'react-hot-loader/root'

import Button from '../pattern-library/Button'
import Divider from '../pattern-library/Divider'
import Icon from '../pattern-library/Icon'
import Title from '../pattern-library/Title'
import Heading from '../pattern-library/Heading'
import Content from '../pattern-library/Content'

export const App = () => (
    <div>
        <Title>
            <Heading>Otto Flow Test Page</Heading>
        </Title>
        <Content>
            <Button type="primary">
                Some trashy Button <Icon type="trash" />
            </Button>
            <Divider />
            Some text
        </Content>
        <Content>More Content</Content>
    </div>
)

export default hot(App)
