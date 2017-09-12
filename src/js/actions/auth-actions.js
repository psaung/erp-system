import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  AUTHORIZATION_FAILURE,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_REQUEST,
} from './../constants/auth-types'
import appConfig from './../config'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  }
}
