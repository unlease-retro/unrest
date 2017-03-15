import { GraphQLString } from 'graphql'

import Type from './type'
import * as service from './service'

export const viewingByMessageId = {
  type: Type,
  args: {
    id: { type: GraphQLString },
    token: { type: GraphQLString },
  },
  resolve: (root, { id, token }) => service.getViewingByMessageId(id, token)
}
