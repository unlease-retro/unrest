import { isDevelopment } from '../shared/util'

export const name = 'webhooks'

export const SLACK_CHANNEL = isDevelopment ? '#testing' : '#general'
export const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'
