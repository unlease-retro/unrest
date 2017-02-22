import { isDevelopment } from '../shared/util'

export const name = 'webhooks'

export const SLACK_CHANNEL = isDevelopment ? '#testing1' : '#unrest'
export const SLACK_ICON_EMOJI = ':unlease:'
export const SLACK_USERNAME = 'unlease'
export const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'

export const TWILIO_SID = 'AC91bb52be7d7f71b4dd33571184275ea9'
export const TWILIO_TOKEN = '2ea7e1f085c2532b30ab52904173782c'
export const TWILIO_FROM = '447481339621'
