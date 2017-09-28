import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from './../constants/auth-types'

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  role: 'user',
  error: {}
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
        name: action.user.name,
        role: action.user.role,
      }
    case LOGIN_FAILURE:
      console.log(action)
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.error
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
