import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import fetch from 'isomorphic-fetch'

import { showLogMsg, hideMsg } from './../actions/app-actions'
import { loginSuccess, loginFailure, requestLogin } from './../actions/auth-actions'
import config from './../config'

export function checkCreds(conn) {
  const endPoint = 'clogin'
  return fetch(config.host + endPoint, conn)
          .then( response => response.json())
}

export function* loginUser(fields) {
  const { username, password } = fields.creds;
  const config = {
    method: 'POST',
    headers: { 
      'content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
    body: `email=${username}&password=${password}`
  }
  // yield put(requestLogin())
  const data = yield call(checkCreds, config)
  if(data.success) {
    yield put(loginSuccess({
      name: username,
      authenticationToken: data.data['access_token'],
      refreshToken: data.data['refresh_token'],
      role: data.data['role'],
    }))
  } else {
    yield put(loginFailure(data.error.message))
    yield put(showLogMsg(data.error.message))
    yield call(delay, 3000)
    yield put(hideMsg())
  }
} 

/*
export function* loginUser(fields) {
  const { username, password } = fields.creds;
  console.log('here')
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
} */
