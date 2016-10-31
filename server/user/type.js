import { GraphQLObjectType, GraphQLString } from 'graphql'

import { name } from './constants'
import { Type as NotificationType, service as NotificationService } from '../notification'

const UserType = new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    avatar: { type: GraphQLString },
    notifications: {
      type: NotificationType,
      resolve: (user, args, { token }) => NotificationService.getNotificationById(user.id, token)
    },
  })
})

export default UserType
