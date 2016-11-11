import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql'

import { name } from './constants'

const BotType = new GraphQLObjectType({
  name,
  fields: () => ({
    _id: { type: GraphQLString },
    url: { type: GraphQLString },
    title: { type: GraphQLString },
    price: { type: GraphQLString },
    author: { type: GraphQLString },
    postcode: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    disabled: { type: GraphQLBoolean },
    submited: { type: GraphQLBoolean }
  })
})

export default BotType
