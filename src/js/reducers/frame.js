import { RECEIVE_FRAME } from './../actions/time-actions'

export default function frames(state = [], action = {}) {
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
