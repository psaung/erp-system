import { combineReducers } from 'redux'
import { RECEIVE_FRAME } from './../actions'

function frames(state, action) {
  switch(action.type) {
    case RECEIVE_FRAME:
      return {
        ...state,
        ...action.frame.reduce((obj, frame) => {
          return frame
        }, {})
      }
    default: 
      return ...state
  } 
}
