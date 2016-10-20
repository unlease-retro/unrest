import chalk from 'chalk'
import express from 'express'
import graphqlHTTP from 'express-graphql'
// TODO - DataLoader caching -> https://github.com/facebook/dataloader
// import DataLoader from 'dataloader'

import { isDevelopment } from './shared/util'
import { HOST, PORT } from './shared/constants'

import schema from './shared/schema'

// all aboard the App Express 🚂
const app = express()

// setup GraphQL server
app.use( graphqlHTTP({ schema, graphiql: isDevelopment }) )

// start Express server
const server = app.listen( PORT, HOST, () => {

  const host = server.address().address
  const port = server.address().port

  console.log('  ⚗  U N R E S T at:\n')
  console.log('  ' + chalk.cyan(`http://${host}:${port}\n`))

  // notifier in development
  if (isDevelopment) require('node-notifier').notify({ title: '⚗  U N R E S T', message: 'Server up', sound: 'Submarine' })

})
