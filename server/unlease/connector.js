import { MongoClient } from 'mongodb'

import { isDevelopment } from '../shared/util'

const MONGO_URL = isDevelopment ? 'mongodb://192.168.99.100/local' : 'mongodb://unlease_app:1984Izzy@ds019499-a0.klj37.fleet.mlab.com:19499,ds019499-a1.klj37.fleet.mlab.com:19499/unlease_prod?replicaSet=rs-ds019499&ssl=true'

const MONGO_HOST = process.env.MONGO_URL || MONGO_URL

const promiseLibrary = global.Promise

const connector = MongoClient.connect(MONGO_HOST, { promiseLibrary })

export default connector
