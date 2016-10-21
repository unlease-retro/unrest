import { GraphQLObjectType, GraphQLString } from 'graphql'

import { name } from './constants'

const UserType = new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    avatar: { type: GraphQLString },
  })
})

export default UserType
