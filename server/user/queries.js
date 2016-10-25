import { GraphQLString, GraphQLList } from 'graphql'

import Type from './type'
import * as service from './service'

export const users = {
  type: new GraphQLList(Type),
  resolve: () => service.getAllUsers()
}

export const userById = {
  type: Type,
  args: {
    id: { type: GraphQLString },
  },
  resolve: (root, { id }) => service.getUserById(id)
}
