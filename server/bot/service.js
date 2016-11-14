import queryString from 'query-string'

import { API_BOT } from '../shared/constants'
import * as API from '../shared/services/api'

// TODO - add real API endpoints

// export const getBotSample = () => ({ bot: 'sample' })
// export const getBotSample = token => API.get(`${API_BOT}/bot/sample`, token)

export const getBotAdverts = (token, params) => API.get(`${API_BOT}/list/query?${queryString.stringify(params)}`, token)

export const updateBotAdvert = (token, data) => API.put(`${API_BOT}/advert`, data, token)

export const sendAdvertMessage = (token) => API.post(`${API_BOT}/advert/send`, token)
