import { GraphQLString, GraphQLList } from 'graphql'

import Type from './type'
import * as selectors from './selectors'

export const users = {
  type: new GraphQLList(Type),
  resolve: () => selectors.getAllUsers()
}

export const userById = {
  type: Type,
  args: {
    id: { type: GraphQLString },
  },
  resolve: (root, { id }) => selectors.getUserById(id)
}
