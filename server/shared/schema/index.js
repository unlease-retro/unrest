import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import queries from '../queries'

const Query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({ ...queries })
})

export default new GraphQLSchema({
  query: Query,
  // mutation: Mutation
})