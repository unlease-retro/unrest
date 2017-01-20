import { MongoClient } from 'mongodb'

import { MONGO_URL } from './constants'

const MONGO_HOST = process.env.MONGO_URL || MONGO_URL

const promiseLibrary = global.Promise

const connector = MongoClient.connect(MONGO_HOST, { promiseLibrary })

export default connector
