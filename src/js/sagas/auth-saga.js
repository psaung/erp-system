import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import fetch from 'isomorphic-fetch'
import { loginSuccess, loginFailure } from './../actions/auth-actions'

export function checkCreds() {
  const endPoint = 'login'
  return fetch(config.host + endPoint)
          .then( response => response.json())
}

export function* loginUser(fields) {
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

