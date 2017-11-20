import { merge } from 'lodash'

import { 
  API_GET_REQUEST,
  API_GET_REQUEST_MULTIPLE,
  API_PUT_REQUEST,
  API_POST_REQUEST,
  API_DELETE_REQUEST,
  API_RESPONSE_SUCCESS,
  API_REQUEST_FAILURE,
  API_GET_SINGLE_RESOURCE_REQUEST,
  FLUSH_API_DATA,
} from './../constants/api-types' 

const initialState =  {
  token: window.localStorage.getItem('access_token'),
  result: [],
  isFetching: false,
  error: {}, 
}

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case API_RESPONSE_SUCCESS:
      console.log(action.result)
      return {
        ...state,
        isFetching: false,
        result: action.result.data || [],
      }
    case API_GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        params: action.params || {}
      }
    case API_GET_REQUEST_MULTIPLE:
      console.log(action)
      return {
        ...state,
        isFetching: true,
        params: action.params || {}
      }
    case API_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case API_PUT_REQUEST:
      return {
        ...state,
        isFetching: true,
        params: action.params || {}
      }
    case API_DELETE_REQUEST:
      return {
        ...state,
        isFetching: true,
        params: action.params || {}
      }
    case FLUSH_API_DATA:
      return initialState 
    default: 
      return state
  } 
}
