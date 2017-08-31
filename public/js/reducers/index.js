import { createStore, applyMiddleare } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './../sagas/api-saga'

import reducer from './api'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
export default store
