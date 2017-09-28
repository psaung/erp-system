import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { HashRouter } from 'react-router-dom'


import './../styles/main.scss'
import reducer from './reducers'
import Dashboard from './components/Dashboard'
import rootSaga from './sagas'

import AppRouter from './route'
import { Toastr } from './components'

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
    <div className="full-height-container">
      {component}
      <Toastr error={store.getState().app.message} show={store.getState().app.showLog}/>
    </div>
  </Provider>,
  document.getElementById('root')
)

render()
store.subscribe(render)
