import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { HashRouter } from 'react-router-dom'


import './../styles/main.scss'
import reducer from './reducers/counter'
import Dashboard from './components/Dashboard'
import rootSaga from './sagas/counter-saga'

import AppRouter from './route'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const rootEl = document.getElementById('root')

const component = (
  <HashRouter>
    {AppRouter(store)}  
  </HashRouter>
)

const render = () => ReactDOM.render(
  <div>{component}</div>,
  document.getElementById('root')
)

render()
store.subscribe(render)


