import queryString from 'query-string'

import { API_UNLEASE } from '../../shared/constants'
import * as API from '../../shared/services/api'
import { service as UserService } from '../user'

export const createListing = (token, data) => API.post(`${API_UNLEASE}/resource/listing`, data, token)

export const createUserWithListing = (token, { listing, user}) => UserService.createUser(token, user).then( () => createListing(token, listing) )

export const fetchListings = (token, params) => API.get(`${API_UNLEASE}/resource/listing/query?${queryString.stringify(params)}`, token)

export const updateHostStatus = (token, params) => API.put(`${API_UNLEASE}/resource/listing/updateField`, { name: Object.keys(params).filter( p => p !== 'id' && p !== 'clientMutationId' ), listing: params }, token)

export const addListingToPopular = (token, params) => API.post(`${API_UNLEASE}/resource/popularListing`, { listingId: params.id }, token)

export const removeListingFromPopular = (token, params) => API.remove(`${API_UNLEASE}/resource/popularListing/${params.id}`, token)
