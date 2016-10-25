import chalk from 'chalk'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'

import { isDevelopment } from './shared/util'
import { HOST, PORT, GRAPHQL_PATH } from './shared/constants'

import schema from './shared/schema'
import routes from './routes'

// all aboard the App Express 🚂
const app = express()

// parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// enable cors
app.use(cors())

// enable cors preflight on /graphql requests
app.options(GRAPHQL_PATH, cors())

// setup GraphQL server
app.use(GRAPHQL_PATH, graphqlHTTP( req => ({ schema, graphiql: isDevelopment, context: { token: req.headers.authorization } }) ))

// API routes
app.use('/api', routes)

/* eslint-disable no-unused-vars */
// error handling
app.use( (err, req, res, next) => {

  if (res.headersSent) return next(err)

  console.error(err.stack)
  res.status(500).json({errMsg: err.message})

})
/* eslint-enable no-unused-vars */

// start Express server
const server = app.listen( PORT, HOST, () => {

  const host = server.address().address
  const port = server.address().port

  console.log('  🌀  U N R E S T at:\n')
  console.log('  ' + chalk.cyan(`http://${host}:${port}${GRAPHQL_PATH}\n`))

  // notifier in development
  if (isDevelopment) require('node-notifier').notify({ title: '⚗  U N R E S T', message: 'Server up', sound: 'Submarine' })

})
