import { ObjectID } from 'mongodb'
import twilio from 'twilio'

import * as API from '../shared/services/api'
import { SLACK_CHANNEL, SLACK_ICON_EMOJI, SLACK_USERNAME, SLACK_WEBHOOK_URL, TWILIO_SID, TWILIO_TOKEN, TWILIO_FROM } from './constants'
import connector from '../unlease/connector'

const Twilio = new twilio(TWILIO_SID, TWILIO_TOKEN)

export const notify = ({ channel=SLACK_CHANNEL, icon_emoji=SLACK_ICON_EMOJI, text, username=SLACK_USERNAME }) => API.post(SLACK_WEBHOOK_URL, { channel, username, icon_emoji, text })

export const sendSms = ({ body, from=TWILIO_FROM, to }) => Twilio.messages.create({ to, body, from })

export const updatePhone = (userId, contactNumber, poachedBy) => {

  return connector
    .then( db => db.collection('user').findOneAndUpdate({ _id: ObjectID(userId) }, { $set: { 'phoneVerification.contactNumber': contactNumber, poachedBy } }, { returnOriginal: false }) )
    .then( ({ value }) => {

      if ( !value ) throw new Error('Oops! Couldn\'t find an Unleaser with that ID.')

      return value

    } )
    .then( res => ({ response_type: 'ephemeral', text: `Phone number updated ⚡️ [ user: ${res.firstName} ${res.lastName}, number: ${res.phoneVerification.contactNumber} ]` }) )

}