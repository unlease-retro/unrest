/**
  * @desc Constants - application constants live here
*/

import { isDevelopment } from '../util'

export const HOST = process.env.HOST || 'localhost'
export const PORT = process.env.PORT || '5000'
export const GRAPHQL_PATH = '/graphql'

export const API = isDevelopment ? 'http://local.unlease.io:9000' : 'https://www.unlease.io'

export const ERROR_CODES = {
  invalid_token: 3000,
}
