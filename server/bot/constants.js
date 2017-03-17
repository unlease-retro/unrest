import { isDevelopment } from '../shared/util'

export const typeName = 'Bot'

export const inputTypeName = 'InputTypeBot'

export const typeNames = {
  REPLY: 'Reply',
  AMENITIES: 'Amenities',
  PREFERENCES: 'Preferences',
  HOUSEHOLD: 'Household',
  EXTRA_COSTS: 'ExtraCosts',
  GEOCODE: 'Geocode',
}

export const adverts = 'adverts'

export const replies = 'replies'

export const blacklist = 'blacklist'

export const dbname = isDevelopment ? 'bot-test' : 'bot_prod'

export const MONGO_URL = isDevelopment ? 'mongodb://test-user:1984Izzy@ds029575.mlab.com:29575/bot-test' : 'mongodb://unlease_user:1984Izzy@ds019499-a0.klj37.fleet.mlab.com:19499,ds019499-a1.klj37.fleet.mlab.com:19499/bot_prod?replicaSet=rs-ds019499&ssl=true'
