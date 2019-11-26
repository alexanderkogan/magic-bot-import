import * as React from 'react'
import { hot } from 'react-hot-loader/root'

import TestPage from '../test-page/TestPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Tab from '../pattern-library/Nav'
import TabItem from '../pattern-library/NavItem'

export const App = () => (
    <Router>
        <div>
            <Tab>
                <TabItem to="/">Home</TabItem>
                <TabItem to="/test">Pattern Library Test</TabItem>
            </Tab>

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
