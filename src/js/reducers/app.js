import {
  SHOW_LOG,
  LOG_FINISHED, 
} from './../constants/app-types'

const initialState = {
  showLog: false,
  message: {
     
  }
}

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case SHOW_LOG:
      return {
        ...state,
        showLog: true,
        message: action.message,
        modifier: action.modifier,
      }
    case LOG_FINISHED:
      return {
        ...state,
        showLog: false,
      }
    default:
      return state
  }
}

