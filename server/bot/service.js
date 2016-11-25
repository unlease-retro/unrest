import queryString from 'query-string'

import { API_BOT } from '../shared/constants'
import * as API from '../shared/services/api'


export const getAdverts = (token, params) => API.get(`${API_BOT}/list/query?${queryString.stringify(params)}`, token)

export const advertById = (token, { id }) => API.get(`${API_BOT}/${id}`, token)

export const getAdvertReplies = (token, phoneNumber) => API.get(`${API_BOT}/replies/${phoneNumber}`, token)

export const sendAdvertsMessages = (token, params) => API.post(`${API_BOT}/send/all`, params, token)

export const sendAdvertMessage = (token, params) => API.post(`${API_BOT}/send/${params.id}`, params, token)

export const disableAdvert = (token, { id }) => API.post(`${API_BOT}/disable/${id}`, {}, token)

export const markAdvert = (token, { id }) => API.post(`${API_BOT}/mark/${id}`, {}, token)