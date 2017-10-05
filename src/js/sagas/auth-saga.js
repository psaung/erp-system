import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import fetch from 'isomorphic-fetch'

import { showLogMsg, hideMsg } from './../actions/app-actions'
import { loginSuccess, loginFailure, authorizationSuccess, authorizationFailure } from './../actions/auth-actions'
import config from './../config'

export function checkCreds(conn) {
  const endPoint = 'clogin'
  return fetch(config.host + endPoint, conn)
          .then( response => response.json())
}

export function checkToken(conf) {
  const endPoint = 'check'
  return fetch(config.host + endPoint, conf)
          .then( response => response.json())
}

export function* checkAuthToken() {
  const token = window.localStorage.getItem('access_token')
  console.log(token)
  if(!(token)) {
    yield put(authorizationFailure('There is no access token'))
    yield put(showLogMsg('There is no token.You have to login'))
    yield call(delay, 3000)
    yield put(hideMsg())
  } else {
    const conf = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
    const data = yield call(checkToken, conf)
    console.log(data)
    if(data.success) {
      // authorization ok
      yield put(authorizationSuccess())
    } else {
      // authorization not ok
      // get rid token stuff in local storage
      window.localStorage.removeItem('access_token')
      window.localStorage.removeItem('refresh_token')
      window.localStorage.removeItem('role')
      window.localStorage.removeItem('user')

      // show the error message with toastr
      yield put(authorizationFailure(data.error.message))
      yield put(showLogMsg(data.error.message))
      yield call(delay, 3000)
      yield put(hideMsg())
    }
  }
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
  const data = yield call(checkCreds, config)
  if(data.success) {
    window.localStorage.setItem('access_token', data.data['access_token'])
    window.localStorage.setItem('refresh_token', data.data['refresh_token'])
    window.localStorage.setItem('role', data.data['role'])
    window.localStorage.setItem('user', username)
    yield put(loginSuccess({
      name: username,
      authenticationToken: data.data['access_token'],
      refreshToken: data.data['refresh_token'],
      role: data.data['role'],
    }))
  } else {
    yield put(loginFailure(data.errormessage))
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
