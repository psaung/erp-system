/* eslint-disable no-constant-condition */

import { take, put, call, fork, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import fetch from 'isomorphic-fetch'

import * as apiActions from '../actions/api-actions'
import { showLogMsg, hideMsg } from './../actions/app-actions'

import { fetchAll } from './../services/api'

import config from './../config'

function fetchApi(endPoint){
  // TODO: implement reducer selector
  //const endPoint = 'users'
  return fetch(config.apiHost + endPoint)
          .then(response => response.json())
}

export function* fetchData(endPoint) {
  yield put(apiActions.requestApi())
  const data = yield call(fetchApi, endPoint)
  yield put(apiActions.responseSuccess(data))
}

export function* fetchAllResources() {
  while(true) {
    const { params } = yield take('API_GET_REQUEST')
    const response = yield call(fetchAll, params)
    if(response.error) {
      yield put(apiActions.responseFail(response.error))
      yield put(showLogMsg(response.error))
      yield call(delay, 3000)
      yield put(hideMsg())
    } else {
      yield put(apiActions.responseSuccess(response))
    }
    // some sort of api fetching
  }
}
