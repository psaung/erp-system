import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTHORIZATION_FAILURE,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_REQUEST,
} from './../constants/auth-types'
import appConfig from './../config'

export function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  }
}

export function loginSuccess(result) {
  const { name, authenticationToken, refreshToken, role } = result
  console.log(result)
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    role,
    user: {
      name,
      authToken: authenticationToken,
      refreshToken: refreshToken,
    },
  }
}

export function loginFailure(error) {
  console.log(error)
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    error,
  }
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    isAuthenticated: false,
  }
}

export function checkAuth() {
  return {
    type: AUTHORIZATION_REQUEST,
    isFetching: true,
  }
}

export function authorizationSuccess() {
  return {
    type: AUTHORIZATION_SUCCESS,
    isFetching: false,
  }
}

export function authorizationFailure(error) {
  return {
    type: AUTHORIZATION_FAILURE,
    isFetching: false,
    error,
  }
}
