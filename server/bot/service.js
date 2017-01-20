import { ObjectID } from 'mongodb'
import { adverts, replies } from './constants'

export const allAdverts = (params, db) => db.collection( adverts ).find( params ).toArray()

export const advert = ({ id }, db) => db.collection( adverts ).findOne( { id: ObjectID( id ) } )

export const updateAdvert = ({ id, payload }, db) => db.collection( adverts ).findOneAndUpdate({ id: ObjectID(id) }, { $set: { ...payload } }, { returnOriginal: false })

export const createAdvert = ({ payload }, db) => db.collection( adverts ).insert( payload )

export const allReplies = (thread, db) => db.collection( replies ).find( { thread } ).toArray()