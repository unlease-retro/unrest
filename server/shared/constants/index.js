/**
  * @desc Constants - application constants live here
*/

import { isDevelopment } from '../util'

export const HOST = process.env.HOST || 'localhost'
export const PORT = process.env.PORT || '5000'
export const API_PATH = '/api'
export const GRAPHQL_PATH = '/graphql'

export const API_UNLEASE = isDevelopment ? 'http://local.unlease.io:9000' : 'https://www.unlease.io'
export const API_BOT = isDevelopment ? 'http://localhost:8001/api' : 'http://138.68.149.99:8001/api'

export const ERROR_CODES = {
  invalid_token: 3000,
}
