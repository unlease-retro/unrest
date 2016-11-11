import queryString from 'query-string'

import { API_BOT } from '../shared/constants'
import * as API from '../shared/services/api'

// TODO - add real API endpoints

export const getBotSample = () => ({ bot: 'sample' })
// export const getBotSample = token => API.get(`${API_BOT}/bot/sample`, token)

export const getBotAdverts = (token, params) => API.get(`${API_BOT}/list/query?${queryString.stringify(params)}`, token)