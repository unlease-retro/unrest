import { GraphQLObjectType, GraphQLString } from 'graphql'
import { type } from './constants'

const RepoType = new GraphQLObjectType({
  name: type,
  description: 'The Repo Type',
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  })
})

export default RepoType
