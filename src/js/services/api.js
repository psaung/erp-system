// import { camelizeKeys } from 'humps'
import fetch from 'isomorphic-fetch'

import config from './../config'

// Fetches an Api response and normalizes the result JSON according to shcema.
// This make every API response have the same shpae, regardless of how nested it was.
function callApi(endpoint, conf = {}) {
  conf = Object.assign(conf, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`
    },
  })
  const fullUrl = `${config.apiHost}${endpoint}`
  return fetch(fullUrl, conf)
    .then(response => 
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if(!response.ok) {
        return Promise.reject(json)
      }
      return json.data
      // return Object.assing({}, normalize(json, schema))
    })
    .then(
      json => ({data: json}),
      ({error, code}) => {
        console.log(error)
        return {error: error.message || 'something bad happened' }
      }
    )
}

export const fetchAll = params => callApi(params)
 
export const saveApiResource = params => callApi(params.url , {
  method: "POST",
  body: JSON.stringify(params.data)
})

export const deleteApiResource = params => callApi(params.url, {
  method: "DELETE",
  body: JSON.stringify(params.data)
})

export const updateApiResource = params => callApi(params.url, {
  method: "PUT",
  body: JSON.stringify(params.data)
})
