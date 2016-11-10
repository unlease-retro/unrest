import { API_UNLEASE } from '../shared/constants'
import * as API from '../shared/services/api'
import { getBasicAuth } from '../shared/util'

export const login = ({ username, password }) => API.postForm(`${API_UNLEASE}/uaa/oauth/token`, { grant_type: 'password', username, password }, `Basic ${getBasicAuth()}`)

export const refresh = ({ refresh_token }) => API.postForm(`${API_UNLEASE}/uaa/oauth/token`, { grant_type: 'refresh_token', refresh_token }, `Basic ${getBasicAuth()}`)
