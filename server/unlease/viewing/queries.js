import { GraphQLString, GraphQLList } from 'graphql'

import { ViewingType, UpcomingViewingType } from './type'
import * as service from './service'

export const viewingByMessageId = {
  type: ViewingType,
  args: {
    id: { type: GraphQLString },
    token: { type: GraphQLString },
  },
  resolve: (root, { id, token }) => service.getViewingByMessageId(id, token)
}


export const upcomingViewings = {
  type: new GraphQLList(UpcomingViewingType),
  resolve: (root, args, { token }) => service.getUpcomingViewings(token)
}
