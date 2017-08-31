import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* apiSaga() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', apiSaga) 
}
