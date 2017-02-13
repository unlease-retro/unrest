/**
  * @desc API service - providers an interface to common API methods
*/

import fetch from 'node-fetch'
import FormData from 'form-data'

// -----
// GET
// -----

export const get = (route, token) => fetch(route, { method: 'GET', headers: { 'Authorization': token } }).then( res => res.json() )

// -----
// POST
// -----

export const post = (route, data, token) => fetch(route, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  },
  body: JSON.stringify(data),
}).then( res => res.json() )

// -----
// POST FORM
// -----

export const postForm = (route, data, token) => {

  const form = new FormData()

  Object.keys(data).map( key => form.append(key, data[key]) )

  return fetch(route, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': token
    },
    body: form,
  }).then( res => res.json().then( json => ({ status: res.status, json }) ) )

}

// -----
// PUT
// -----

export const put = (route, data, token) => fetch(route, {
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  },
  body: JSON.stringify(data),
}).then( res => res.json() )

// -----
// DELETE
// -----

export const remove = (route, token) => fetch(route, {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  }
})
