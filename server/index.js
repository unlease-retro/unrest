import chalk from 'chalk'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'

import routes from './routes'
import connectors from './shared/connectors'
import schema from './shared/schema'
import { isDevelopment } from './shared/util'
import { HOST, PORT, API_PATH, GRAPHQL_PATH, ERROR_CODES } from './shared/constants'

// all aboard the App Express 🚂
const app = express()

// prepare app `locals` to attach database connectors
app.locals.db = {}

// attach database connectors to app `locals`
Promise.all(connectors).then( dbs => dbs.map( db => app.locals.db[db.databaseName] = db ), err => console.error(err.stack) )

// parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// enable cors
app.use(cors())

// enable cors preflight on /graphql requests
app.options(GRAPHQL_PATH, cors())

// custom GraphQL error formatter
const formatError = ({ message, locations, stack }) => ({ code: ERROR_CODES[message], message, locations, stack })

// declare graphqlSettings up front rather than every request to prevent unnecessary garbage collection
const graphqlSettings = req => ({ schema, graphiql: isDevelopment, pretty: isDevelopment, context: { db: req.app.locals.db, token: req.headers.authorization }, formatError })

// GraphQL server route
app.use(GRAPHQL_PATH, graphqlHTTP(graphqlSettings))

// API routes
app.use(API_PATH, routes)

/* eslint-disable no-unused-vars */
// error handling
app.use( (err, req, res, next) => {

  if (res.headersSent) return next(err)

  console.error(err.stack)
  res.status(500).json({ errMsg: err.message })

})
/* eslint-enable no-unused-vars */

// start Express server
const server = app.listen( PORT, HOST, () => {

  const host = server.address().address
  const port = server.address().port

  console.log('  🌀  U N R E S T at:\n')
  console.log('  ' + chalk.cyan(`http://${host}:${port}${GRAPHQL_PATH}\n`))

  // notifier in development
  if (isDevelopment) require('node-notifier').notify({ title: '🌀  U N R E S T', message: 'Server up', sound: 'Submarine' })

})
