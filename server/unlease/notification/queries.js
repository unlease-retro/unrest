import { GraphQLString } from 'graphql'

import Type from './type'
import * as service from './service'

export const notificationById = {
  type: Type,
  args: {
    id: { type: GraphQLString },
    token: { type: GraphQLString },
  },
  resolve: (root, { id, token }) => service.getNotificationById(id, token)
}
