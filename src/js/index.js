import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './../styles/main.scss'
import reducer from './reducers/counter'
import Dashboard from './components/Dashboard'
import rootSaga from './sagas/counter-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Dashboard store={store}/>,
  document.getElementById('root')
)

render()
store.subscribe(render)


