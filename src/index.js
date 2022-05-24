/**
 * The starting point of the application.
 *
 * @author Andreas Lillje
 * @version 2.0.0
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>

        <App />
        </Provider>,

  document.getElementById('root')
)
