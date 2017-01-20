import { isDevelopment } from '../shared/util'

export const typeName = 'Bot'

export const inputTypeName = 'InputTypeBot'

export const typeNames = {
  REPLY: 'Reply',
  PRICE: 'Price',
  AUTHOR: 'Author',
  LOCATION: 'Location',
  AMENITIES: 'Amenities',
  AVABILITY: 'Avability',
  PREFERENCES: 'Preferences',
}

export const adverts = 'adverts'

export const replies = 'replies'

export const dbname = isDevelopment ? 'optimus' : 'bot_prod'

export const MONGO_URL = isDevelopment ? 'mongodb://admin:Unlease12#@ds049496.mlab.com:49496/optimus' : 'mongodb://unlease_user:1984Izzy@ds019499-a0.klj37.fleet.mlab.com:19499,ds019499-a1.klj37.fleet.mlab.com:19499/bot_prod?replicaSet=rs-ds019499&ssl=true'