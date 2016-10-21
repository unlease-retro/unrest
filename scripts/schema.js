import fs from 'fs'
import path from 'path'
import { graphql }  from 'graphql'
import { introspectionQuery, printSchema } from 'graphql/utilities'

import schema from '../server/shared/schema'

const schemaPath = path.join(__dirname, '../data/schema')

// Save JSON of full schema introspection for Babel Relay Plugin to use
graphql(schema, introspectionQuery).then(result => {
  fs.writeFileSync(
    `${schemaPath}.json`,
    JSON.stringify(result, null, 2)
  )
})

// Save user readable type system shorthand of schema
fs.writeFileSync(
  `${schemaPath}.graphql`,
  printSchema(schema)
)
