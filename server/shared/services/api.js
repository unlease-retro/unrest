/**
  * @desc API service - providers an interface to common API methods
*/

import fetch from 'node-fetch'

import { API } from '../constants'

export const get = (route, token) => fetch(`${API}/${route}`, { method: 'GET', headers: { 'Authorization': token } }).then( res => res.json() )
