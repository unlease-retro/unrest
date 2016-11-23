import queryString from 'query-string'

import { API_BOT } from '../shared/constants'
import * as API from '../shared/services/api'


export const getAdverts = (token, params) => API.get(`${API_BOT}/list/query?${queryString.stringify(params)}`, token)

export const advertById = (token, { id }) => API.get(`${API_BOT}/${id}`, token)

export const updateAdvert = (token, params) => {

  const { id } = params

  return API.put(`${API_BOT}/${id}`, params, token)

}

export const getReplies = (token, phoneNumber) => API.get(`${API_BOT}/replies/${phoneNumber}`, token)

// use this for reply page
export const sendMessage = (token, params) => {

  const { id } = params

  return API.post(`${API_BOT}/send/${id}`, params, token)

}

// send to selected adverts
export const sendSelectedMessage = (token, params) => API.post(`${API_BOT}/send/all`, params, token)
