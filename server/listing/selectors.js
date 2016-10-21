import * as API from '../shared/services/api'

export const getAllListingsByLocation = ({ lng, lat, radius }) => API.get(`listing/search?lng=${lng}&lat=${lat}&radius=${radius}&page=0`).then( json => json.content )
