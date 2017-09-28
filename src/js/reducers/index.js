import { combineReducers } from 'redux'

import api from './api'
import auth from './auth'
import app from './app'
import frames from './frame'

export default combineReducers({
  api,
  auth,
  app,
  frames,
})
