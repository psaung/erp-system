import { combineReducers } from 'redux'

import api from './api'
import auth from './auth'
import app from './app'

export default combineReducers({
  api,
  auth,
  app,
})
