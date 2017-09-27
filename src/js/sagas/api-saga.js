/* eslint-disable no-constant-condition */

import { take, put, call, fork, select } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

import * as apiActions from '../actions/api-actions'

import config from './../config'

export function fetchApi(){
  // TODO: implement reducer selector
  const endPoint = 'users'
  return fetch(config.apiHost + endPoint)
          .then(response => response.json())
}

export function* fetchData(endPoint) {
  yield put(apiActions.requestApi())
  const data = yield call(fetchApi, endPoint)
  yield put(apiActions.responseSuccess(data))
}
