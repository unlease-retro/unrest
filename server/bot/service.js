import { ObjectID } from 'mongodb'

import * as Webhooks from '../webhooks/service'
import { adverts, replies, blacklist } from './constants'
import { getDeepMerge } from '../shared/util'

export const allAdverts = ({ submitted, disabled, crawled, limit }, db) => db.collection(adverts).find({ submitted, disabled, crawled }).limit(limit).toArray()

export const advert = ({ _id }, db) => db.collection(adverts).findOne({ _id: ObjectID(_id) })

export const advertByPhoneNumber = ({ phoneNumber }, db) => db.collection(adverts).findOne({ phoneNumber })

export const createAdvert = ({ payload }, db) => db.collection(adverts).insertOne({...payload, createdAt: `${Date.now()}`, updatedAt: `${Date.now()}` })

export const allReplies = (thread, db) => db.collection(replies).find({ thread }).toArray()

export const updateAdvert = ({ _id, payload }, db) => {

  const { phoneNumber } = payload

  // if we updating phoneNumber
  if (phoneNumber) {

    allBlacklist({ phoneNumber }, db)
      .then(isBlacklisted => {

        if (isBlacklisted) throw new Error(`Phone number ${isBlacklisted.phoneNumber} is blacklisted`)

      })

  }

  return db.collection(adverts).findOne({ _id: ObjectID(_id) })
    .then(advert => getDeepMerge(advert, payload))
    .then(data => db.collection(adverts).findOneAndUpdate({ _id: ObjectID(_id) }, { $set: {...data, updatedAt: `${Date.now()}` } }, { returnOriginal: false }))

}

export const createReply = (reply, db) => db.collection(replies).insertOne(reply)

export const addBlacklist = ({ phoneNumber }, db) => db.collection(blacklist).insertOne({ phoneNumber, createdAt: `${Date.now()}` })

export const allBlacklist = ({ phoneNumber }, db) => db.collection(blacklist).findOne({ phoneNumber })

export const sendSms = ({ phoneNumber, message }, db) => Webhooks.sendSms({ to: phoneNumber, body: message }).then(({ to, body }) => createReply({ createdAt: `${Date.now()}`, host: false, message: body, thread: to }, db))
