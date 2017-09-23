import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { HashRouter } from 'react-router-dom'


import './../styles/main.scss'
import reducer from './reducers/frame'
import Dashboard from './components/Dashboard'
import rootSaga from './sagas'

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
  <Provider store={store}>
    <div className="full-height-container">{component}</div>
  </Provider>,
  document.getElementById('root')
)

render()
store.subscribe(render)
