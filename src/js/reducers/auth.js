import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAILURE,
} from './../constants/auth-types'

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  error: {},
  user: {},
  role: 'employee',
}

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        user: action.fields
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        role: action.role,
        error: {},
      }
    case LOGIN_FAILURE:
      console.log(action)
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.error
      }
    case AUTHORIZATION_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
      }
    case AUTHORIZATION_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.error,
      }
    case LOGOUT_SUCCESS:
      return { 
        ...state,
        isFetching: false,
        name: '',
        role: '',
        isAuthenticated: false,
      }
    default:
      return state
  }
}
