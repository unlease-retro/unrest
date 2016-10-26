/**
  * @desc API service - providers an interface to common API methods
*/

import fetch from 'node-fetch'
import FormData from 'form-data'

import { API } from '../constants'

// GET
export const get = (route, token) => fetch(`${API}/${route}`, { method: 'GET', headers: { 'Authorization': token } }).then( res => res.json() )

// POST FORM
export const postForm = (route, data, token) => {

  const form = new FormData()

  Object.keys(data).map( key => form.append(key, data[key]) )

  return fetch(`${API}/${route}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': token
    },
    body: form,
  }).then( res => res.json().then( json => ({ status: res.status, json }) ) )

}
