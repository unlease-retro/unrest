import queryString from 'query-string'

import * as API from '../shared/services/api'

export const fetchListings = (token, params) => API.get(`resource/listing/query?${queryString.stringify(params)}`, token)
