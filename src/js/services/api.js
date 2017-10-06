import { Schema, arrayOf, normalize } from 'normalizr'
// import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

import config from './../config'

// Fetches an Api response and normalizes the result JSON according to shcema.
// This make every API response have the same shpae, regardless of how nested it was.
function callApi(endpoint, schema) {
  const fullUrl = `${config.apiHost}${endpoint}`
  return fetch(fullUrl)
    .then(response => 
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if(!response.ok) {
        return Promise.reject(json)
      }
      return Object.assing({}, normalize(json, schema))
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'something bad happened' })
    )
}

const userSchema = new Schema('users', {
  idAttribute: 'id'
})

const departmentSchema = new Schema('departments', {
  idAtribute: 'id'
})

export const fetchUser = b => callApi(`users`, userSchema)
export const fetchDepartment = b => callApi(`departments`, departmentSchema)
