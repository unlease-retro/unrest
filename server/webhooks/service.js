import twilio from 'twilio'

import * as API from '../shared/services/api'
import { SLACK_CHANNEL, SLACK_WEBHOOK_URL, TWILIO_SID, TWILIO_TOKEN, TWILIO_FROM } from './constants'

const Twilio = new twilio(TWILIO_SID, TWILIO_TOKEN)

export const notify = ({ icon_emoji, username, text }) => API.post(SLACK_WEBHOOK_URL, { channel: SLACK_CHANNEL, username, icon_emoji, text })

export const sms = ({ to, body, from=TWILIO_FROM }) => Twilio.messages.create({ to, body, from })
