import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as actions from './../actions/time-actions'
import * as apiActions from './../actions/api-actions'
import { loginSuccess, loginFailure } from './../actions/auth-actions'
import { showLogMsg, hideMsg } from './../actions/app-actions'

import { getTimeFrame } from './../reducers'
import { api, timeFrame } from './../services'
import { fetchData } from './api-saga'
import {
  LOGIN_REQUEST,
  AUTHORIZATION_REQUEST,
} from './../constants/auth-types'
 

import { 
  loginUser,
  checkAuthToken, 
} from './auth-saga'

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

export default function* root() {
  yield all([
    fork(getFrames),
    fork(getDepartments),
    fork(fetchData)
  ])
  yield takeEvery(LOGIN_REQUEST, loginUser)
  yield takeEvery(AUTHORIZATION_REQUEST, checkAuthToken)
}
