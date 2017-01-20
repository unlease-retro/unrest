import { GraphQLString, GraphQLList } from 'graphql'

import Type from './type'
import * as service from './service'

export const users = {
  type: new GraphQLList(Type),
  args: {
    token: { type: GraphQLString },
  },
  resolve: (root, { token }) => service.getAllUsers(token)
}

export const userById = {
  type: Type,
  args: {
    id: { type: GraphQLString },
    token: { type: GraphQLString },
  },
  resolve: (root, { id, token }) => service.getUserById(id, token)
}
