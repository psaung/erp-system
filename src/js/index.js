import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import './../styles/main.scss'
import configureStore from './store/'
import rootSaga from './sagas'
import AppRouter from './route'
import { Root } from './containers'

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Root
    store={store}
    router={AppRouter}/>,
  document.getElementById('root')
)

render()
// store.subscribe(render)
