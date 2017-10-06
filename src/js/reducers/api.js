import { merge } from 'lodash'

import { 
  API_GET_REQUEST,
  API_PUT_REQUEST,
  API_POST_REQUEST,
  API_DELETE_REQUEST,
  API_RESPONSE_SUCCESS,
  API_REQUEST_FAILURE,
  API_GET_SINGLE_RESOURCE_REQUEST,
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
      return {
        ...state,
        result: action.result.data,
      }
    case API_GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        params: action.params || {}
      }
    case API_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: actions.error
      }
    case 'FLUSH_DATA':
      return initialState 
    default: 
      return state
  } 
}
