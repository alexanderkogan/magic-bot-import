import * as React from 'react'
import { hot } from 'react-hot-loader/root'

import TestPage from '../test-page/TestPage'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Tab from '../pattern-library/Tab'
import TabItem from '../pattern-library/TabItem'

export const App = () => (
    <Router>
        <div>
            <nav>
                <Tab>
                    <TabItem to="/">Home</TabItem>
                    <TabItem to="/test">Pattern Library Test</TabItem>
                </Tab>
            </nav>

            <Switch>
                <Route path="/test">
                    <TestPage />
                </Route>
                <Route path="/">lorem ipsum</Route>
            </Switch>
        </div>
    </Router>
)

export default hot(App)
