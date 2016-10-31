import { GraphQLObjectType, GraphQLInt } from 'graphql'

import { name } from './constants'

const NotificationType = new GraphQLObjectType({
  name,
  fields: () => ({
    numberOfUnread: { type: GraphQLInt },
  })
})

export default NotificationType
