import { ObjectID } from 'mongodb'

import * as Webhooks from '../webhooks/service'
import { adverts, replies } from './constants'

export const allAdverts = ({ submitted, disabled, crawled, limit }, db) => db.collection( adverts ).find( { submitted, disabled, crawled } ).limit( limit ).toArray()

export const advert = ({ _id }, db) => db.collection( adverts ).findOne( { _id: ObjectID( _id ) } )

export const advertByPhoneNumber = ({ phoneNumber }, db) => db.collection( adverts ).findOne( { phoneNumber } )

export const updateAdvert = ({ _id, payload }, db) => db.collection( adverts ).findOneAndUpdate({ _id: ObjectID(_id) }, { $set: { ...payload } }, { returnOriginal: false })

export const createAdvert = ({ payload }, db) => db.collection( adverts ).insertOne( payload )

export const allReplies = (thread, db) => db.collection( replies ).find( { thread } ).toArray()

export const createReply = (reply, db) => db.collection( replies ).insertOne( reply )

export const sendSms = ({ phoneNumber, message }, db) => Webhooks.sendSms({ to: phoneNumber, body: message }).then( ({ to, body }) => createReply({ createdAt: `${Date.now()}`, host: false, message: body, thread: to }, db) )