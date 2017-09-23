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
  const { name, role, authenticationToken } = result
  console.log(result)
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: {
      name,
      role,
      token_id: authenticationToken 
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
