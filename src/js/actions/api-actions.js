import {
  API_GET_REQUEST,
  API_RESPONSE_SUCCESS,
  API_REQUEST_ERROR,
  API_REQUEST_FAILURE,
  FLUSH_API_DATA,

  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_DEPARTMENT,
  LOAD_USER,
} from './../constants/api-types'

function action(type, payload = {}) {
  return {type, ...payload}
}

export const getAll = {
  request: params => action(API_GET_REQUEST, { params }),
  success: (params, response) => action(API_RESPONSE_SUCCESS, {params, response}),
  failure: (params, error) => aciton(API_RESPONSE_FAILURE, {params, error}),
}

// traditional way
export function requestApi(params) {
  return {
    type: API_GET_REQUEST,
    params
  }
}

export function responseSuccess(result) {
  console.log(result)
  return {
    type: API_RESPONSE_SUCCESS,
    result
  }
}

export function responseFail(error) {
  return {
    type: API_REQUEST_FAILURE,
    error
  }
}

export function flushData() {
  return {
    type: FLUSH_API_DATA,
  }
}

export const fetchResources = params => action(API_GET_REQUEST, {params})

export const loadDepartment= b => action(LOAD_DEPARTMENT, {b})
export const loadUser= b => action(LOAD_USER, {b})
