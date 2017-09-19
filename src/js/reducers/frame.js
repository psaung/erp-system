import { combineReducers } from 'redux'
import { RECEIVE_FRAME } from './../actions/time-actions'
import { API_RESPONSE_SUCCESS } from './../constants/api-types' 

function frames(state = [], action = {}) {
  switch(action.type) {
    case RECEIVE_FRAME:
      return action.frame || []
      /*
      return {
        ...state,
        ...action.frame,
        ...action.frame.reduce((obj, frame) => {
          return frame
        }, {})
      } */
    default: 
      return state
  } 
}

function api(state = [], action = {}) {
  switch(action.type) {
    case API_RESPONSE_SUCCESS:
      return action.result || []
      /*
      return {
        ...state,
        ...action.frame,
        ...action.frame.reduce((obj, frame) => {
          return frame
        }, {})
      } */
    default: 
      return state
  } 

}

export default combineReducers({
  frames,
  api,
})
