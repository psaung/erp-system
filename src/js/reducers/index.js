import { combineReducers } from 'redux'

import api from './api'
import auth from './auth'
import frames from './frame'

export default combineReducers({
  api,
  auth,
  frames,
})
