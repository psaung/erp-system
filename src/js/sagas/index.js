import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'

import * as actions from './../actions/time-actions'
import * as apiActions from './../actions/api-actions'
import { getTimeFrame } from './../reducers'
import { api, timeFrame } from './../services'

export function* getFrames() {
  const frames = yield call(timeFrame.getTimeFrame)
  yield put(actions.receiveTimeFrame(frames))
}

export function* getRoles() {
  const roles = yield call(api.getRoles)
  // TODO: implement api actions
}

export function* getDepartments() {
  const departments = yield call(api.getDepartments)
  yield put(apiActions.responseSuccess(departments)) 
}

function* loginUser(login, fields) {
}

export default function* root() {
  yield all([
    fork(getFrames),
    fork(getDepartments),
  ])
}
