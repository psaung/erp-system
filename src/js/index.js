import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './components/Counter'
import Login from './components/Login'
import reducer from './reducers/counter'
import rootSaga from './sagas/counter-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const rootEl = document.getElementById('root')

const action = type => store.dispatch({type})
  
const render = () => ReactDOM.render(
  <div>
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onIncrementIfOdd={() => action('INCREMENT_IF_ODD')} />
    <Login /> 
  </div>,
  document.getElementById('root')
)

render()
store.subscribe(render)


