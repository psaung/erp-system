import { combineReducers } from 'redux'
import { RECEIVE_FRAME } from './../actions/time-actions'

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

export default combineReducers({
  frames
})
