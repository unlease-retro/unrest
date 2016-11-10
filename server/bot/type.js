import { GraphQLObjectType, GraphQLString } from 'graphql'

import { name } from './constants'

const BotType = new GraphQLObjectType({
  name,
  fields: () => ({
    _id: { type: GraphQLString },
    url: { type: GraphQLString }
  })
})

export default BotType
