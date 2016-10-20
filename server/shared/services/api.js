/**
  * @desc API service - providers an interface to common API methods
*/

import fetch from 'node-fetch'

import { API } from '../constants'

export const get = route => fetch(`${API}/${route}`, { method: 'GET', credentials: 'include' }).then( res => res.json() )
