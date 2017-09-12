/**
 * Mocking client-server processingi
 */ 

import _employee from './employee'

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
