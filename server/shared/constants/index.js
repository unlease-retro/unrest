/**
  * @desc Constants - application constants live here
*/

import { isDevelopment } from '../util'

export const HOST = process.env.HOST || 'localhost'
export const PORT = process.env.PORT || '8001'
export const GRAPHQL_PATH = '/graphql'

export const API_UNLEASE = isDevelopment ? 'http://local.unlease.io:9000' : 'https://www.unlease.io'
// TODO - correct bot API URLs
export const API_BOT = isDevelopment ? 'http://localhost:3000' : 'https://bot.unlease.io'

export const ERROR_CODES = {
  invalid_token: 3000,
}
