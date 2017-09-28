import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as actions from './../actions/time-actions'
import * as apiActions from './../actions/api-actions'
import { loginSuccess, loginFailure } from './../actions/auth-actions'
import { showLogMsg, hideMsg } from './../actions/app-actions'
import { getTimeFrame } from './../reducers'
import { api, timeFrame } from './../services'
import { fetchData } from './api-saga'

export function* getFrames() {
  const frames = yield call(timeFrame.getTimeFrame)
  yield put(actions.receiveTimeFrame(frames))
}

export function* loginUser(login, requiredFields) {
}

export function* getRoles() {
  const roles = yield call(api.getRoles)
  // TODO: implement api actions
}

export function* getDepartments() {
  const departments = yield call(api.getDepartments)
  yield put(apiActions.responseSuccess(departments)) 
}

function* loginUser(fields) {
  const { username, password } = fields.creds;
  if(username === "admin" && password === "admin123") {
    yield put(loginSuccess({
      name: username,
      role: 'admin',
      authenticationToken: 123456
    }))
  } else {
    yield put(loginFailure('Username and password not match'))
    yield put(showLogMsg('Username and password not match'))
    yield call(delay, 3000)
    yield put(hideMsg())
  }
}

export default function* root() {
  yield all([
    fork(getFrames),
    fork(getDepartments),
    fork(fetchData)
  ])
  yield takeEvery('LOGIN_REQUEST', loginUser)
}
