/**
 * Mocking client-server processingi
 */ 

import _employee from './employee'
import _timeframe from './sample'
import _department from './department'
import _role from './role'

const TIMEOUT = 100
const MAX_CHECKOUT = 2

export const api = {
  getProducts() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_employee), TIMEOUT)
    })
  },
  getRoles() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_role), TIMEOUT)
    })
  },
  getDepartments() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_department), TIMEOUT)
    })
  },
  checkAuth() {

  }
}

export const timeFrame = {
  getTimeFrame() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_timeframe), TIMEOUT)
    })
  }
}

