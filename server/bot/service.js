import { ObjectID } from 'mongodb'
import { collection } from './constants'

export const allAdverts = (params, db) => db.collection( collection ).find( params ).toArray()

export const advert = ({ id }, db) => db.collection( collection ).findOne( { id: ObjectID( id ) } )

export const updateAdvert = ({ id, payload }, db) => db.collection( collection ).findOneAndUpdate({ id: ObjectID(id) }, { $set: { ...payload } }, { returnOriginal: false })

export const createAdvert = ({ payload }, db) => db.collection( collection ).insert( payload )