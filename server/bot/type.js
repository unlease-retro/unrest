import { GraphQLObjectType, GraphQLString } from 'graphql'

import { name } from './constants'

const BotType = new GraphQLObjectType({
  name,
  fields: () => ({
    bot: { type: GraphQLString },
  })
})

export default BotType
