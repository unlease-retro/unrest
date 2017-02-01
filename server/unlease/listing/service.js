import path from 'path'
import queryString from 'query-string'
import request from 'request-promise'
import uuid from 'node-uuid'

import { IMAGE_NAME } from './constants'
import { API_UNLEASE } from '../../shared/constants'
import * as API from '../../shared/services/api'
import { getRandomDigits } from '../../shared/util'
import { service as UserService } from '../user'

export const createListing = (token, data) => API.post(`${API_UNLEASE}/resource/listing`, data, token)

export const removeListing = (token, id) => API.remove(`${API_UNLEASE}/resource/listing/${id}`, token)

export const updateListing = (token, data) => API.put(`${API_UNLEASE}/resource/listing`, data, token)

export const createBotListing = (token, data) => API.post(`${API_UNLEASE}/resource/botListing`, data, token)

export const uploadImages = (listingId, images) => {

  let promises = []

  images.map( ({ s3Link }) => promises.push(request.post({
    json: true,
    uri: `${API_UNLEASE}/image-process/image/upload`,
    formData: { listingId, filename: `${IMAGE_NAME}-${uuid.v4()}${path.extname(s3Link)}`, image: request(s3Link) }
  })) )

  return Promise.all(promises)

}

export const createUserWithListing = (token, { listing, user}) => {

  let accessToken

  // extract image list from listing
  const { photo: { imageList } } = listing

  // generate email and password
  const password = `${user.firstName}${getRandomDigits(3)}`
  const email = `${password}@unleasemail.io`

  return UserService.createUser(token, { ...user, email, password })
    .then( ({ access_token }) => {

      accessToken = `Bearer ${access_token}`

      return createListing(accessToken, listing)

    } )
    .then( listing => uploadImages(listing.id, imageList).then( imageList => updateListing(accessToken, { ...listing, photo: { imageList: imageList.map( ({ s3Link }) => ({ s3Link, name: `${IMAGE_NAME}-${uuid.v4()}${path.extname(s3Link)}` })), sectionCompleted: true } }) ) )
    .then( listing => createBotListing(token, { listingId: listing.id }) )

}

export const fetchListings = (token, params) => API.get(`${API_UNLEASE}/resource/listing/query?${queryString.stringify(params)}`, token)

export const updateHostStatus = (token, params) => API.put(`${API_UNLEASE}/resource/listing/updateField`, { name: Object.keys(params).filter( p => p !== 'id' && p !== 'clientMutationId' ), listing: params }, token)

export const addListingToPopular = (token, params) => API.post(`${API_UNLEASE}/resource/popularListing`, { listingId: params.id }, token)

export const removeListingFromPopular = (token, params) => API.remove(`${API_UNLEASE}/resource/popularListing/${params.id}`, token)
