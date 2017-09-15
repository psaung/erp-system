/**
 * Mocking client-server processingi
 */ 

import _employee from './employee'
import _timeframe from './sample'

const TIMEOUT = 100
const MAX_CHECKOUT = 2

export const api = {
  getProducts() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_employee), TIMEOUT)
    })
  },
  checkAuth() {

  }
}

export const timeframe = {
  getTimeFrame() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_timeframe), TIMEOUT)
    })
  }
}
