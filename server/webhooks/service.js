import * as API from '../shared/services/api'
import { SLACK_CHANNEL, SLACK_WEBHOOK_URL } from './constants'

export const test = ({ icon_emoji, username, text }) => API.post(SLACK_WEBHOOK_URL, { channel: SLACK_CHANNEL, username, icon_emoji, text })
