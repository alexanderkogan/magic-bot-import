import * as React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import { createStore } from './composition/store'
const store = createStore()

import App from './composition/App'
import { productionContext } from './composition/context'

render(
    <Provider store={store}>
        <App context={productionContext} />
    </Provider>,
    document.getElementById('root')
)
