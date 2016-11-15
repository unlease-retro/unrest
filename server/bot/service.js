import queryString from 'query-string'

import { API_BOT } from '../shared/constants'
import * as API from '../shared/services/api'


export const getBotAdverts = (token, params) => API.get(`${API_BOT}/list/query?${queryString.stringify(params)}`, token)

export const updateBotAdvert = (token, params) => {

  const { id } = params

  return API.put(`${API_BOT}/${id}`, params, token)

}

// use this for reply page
export const sendBotMessage = (token, { id }) => API.post(`${API_BOT}/send/${id}`, token)

// send to selected adverts
export const sendSelectedBotMessage = (token, params) => API.post(`${API_BOT}/send/all`, params, token)
