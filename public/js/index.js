import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './components/Counter'
import reducer from './reducers/api'
import rootSaga from './sagas/api-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const rootElm = document.getElementById('root')

const action = type => store.dispatch({type})

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => action('INCREMENT')}
    onDecrement={() => action('DECREMENT')} />,
  rootElm
)

render()
store.subscribe(render)
