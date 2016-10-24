import * as API from '../shared/services/api'

export const fetchAllListingsByLocation = (token, { lng, lat, radius }) => API.get(`listing/search?lng=${lng}&lat=${lat}&radius=${radius}&page=0`, token).then( json => json.content )
