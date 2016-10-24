import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import queries from '../queries'

// Query exposes itself as `query` to provide a root query for Relay -> https://github.com/lucasbento/graphql-pokemon/issues/1
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({ query: { type: Query, resolve: (...args) => args }, ...queries })
})

export default new GraphQLSchema({
  query: Query,
  // mutation: Mutation
})
