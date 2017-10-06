import {
  API_GET_REQUEST,
  API_RESPONSE_SUCCESS,
  API_REQUEST_ERROR,

  REQUEST,
  SUCCESS,
  FAILURE,
  USER,
  DEPARTMENT,
  LOAD_DEPARTMENT,
  LOAD_USER,
} from './../constants/api-types'

function createRequestType(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const DEPARTMENT_TYPE = createRequestType(DEPARTMENT)
export const USER_TYPE = createRequestType(USER)

function action(type, payload = {}) {
  return {type, ...payload}
}

export const department = {
  request: b => action(DEPARTMENT_TYPE[REQUEST], {b}),
  success: (b, response) => action(DEPARTMENT_TYPE[SUCCESS], {b, response}),
  failure: (b, error) => action(DEPARTMENT[FAILURE], {b, error}),
}

export const user = {
  request: b => action(USER_TYPE[REQUEST], {b}),
  success: (b, response) => action(USER_TYPE[SUCCESS], {b, response}),
  failure: (b, error) => action(USER_TYPE[FAILURE], {b, error}),
}

export function requestApi(params) {
  console.log(params)
  return {
    type: API_GET_REQUEST,
    isFetching: true,
    params
  }
}

export function responseSuccess(result) {
  return {
    type: API_RESPONSE_SUCCESS,
    isFetching: false,
    result
  }
}

export function responseFail(error) {
  return {
    type: API_REQUEST_ERROR,
    isFetching: false,
    error
  }
}

export const loadDepartment= b => action(LOAD_DEPARTMENT, {b})
export const loadUser= b => action(LOAD_USER, {b})
