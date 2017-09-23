import { API_RESPONSE_SUCCESS } from './../constants/api-types' 

const initialState =  []

export default function reducer(state = initialState, action = {}) {
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
