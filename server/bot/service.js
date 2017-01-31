import { ObjectID } from 'mongodb'
import { adverts, replies } from './constants'

export const allAdverts = ({ submitted, disabled, crawled, limit }, db) => db.collection( adverts ).find( { submitted, disabled, crawled } ).limit( limit ).toArray()

export const advert = ({ _id }, db) => db.collection( adverts ).findOne( { _id: ObjectID( _id ) } )

export const updateAdvert = ({ _id, payload }, db) => db.collection( adverts ).findOneAndUpdate({ _id: ObjectID(_id) }, { $set: { ...payload } }, { returnOriginal: false })

export const createAdvert = ({ payload }, db) => db.collection( adverts ).insert( payload )

export const allReplies = (thread, db) => db.collection( replies ).find( { thread } ).toArray()
