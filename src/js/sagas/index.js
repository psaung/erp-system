import { take, put, call, fork, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { api } from './../services'
import { fetchData, fetchAllResources, fetchMultipleResources } from './api-saga'

import {
  LOGIN_REQUEST,
  AUTHORIZATION_REQUEST,
} from './../constants/auth-types'

import {
  LOAD_USER, 
  API_GET_REQUEST,
  API_GET_SINGLE_RESOURCE_REQUEST,
  API_PUT_REQUEST,
  API_DELETE_REQUEST,
  API_POST_REQUEST,
} from './../constants/api-types'

import { 
  loginUser,
  checkAuthToken, 
} from './auth-saga'

function* fetchEntity(entity, apiFn, params) {
  yield put(entity.request(params))
  const { response, error } = yield call(apiFn,params)
  if(response)
    yield put(entity.success(params, response))
  else
    yield put(entity.failure(params, error))
}

/* get all of the entities */
function* fetchResources() {
  while(true) {
    const { endpoint, params } = yield take(API_GET_REQUEST)
    // 
  }
}

/* get single entity */
function* fetchSingleResource() {
  while(true) {
    const { endpoint, params } = yield take(API_GET_SINGLE_RESOURCE_REQUEST)
    //
  }
}

function* saveResource() {
  while(true) {
    const { endpoint, params } = yield take(API_POST_REQUEST)
    // 
  }
}

function* updateResource() {
  while(true) {
    const { endpoint, params } = yield take(API_PUT_REQUEST)
    // 
  }
}

function* deleteResource() {
  while(true) {
    const { endpoint, params } = yield take(API_DELETE_REQUEST)
    // 
  }
}

function* watchLoadUserPage() {
  while(true) {
    const { b } = yield take(LOAD_USER)
    yield fork(fetchData, b)
  }
}

export default function* root() {
  yield all([
    // fork(getDepartments),
    // fork(watchLoadUserPage)
    fork(fetchAllResources),
    fork(fetchMultipleResources)
  ])
  yield takeEvery(LOGIN_REQUEST, loginUser)
  yield takeLatest(AUTHORIZATION_REQUEST, checkAuthToken)
}
