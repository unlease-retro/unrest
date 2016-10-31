import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql'

import { name } from './constants'
import { Type as NotificationType, service as NotificationService } from '../notification'

const UserType = new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLString },
    avatar: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    // TODO - can't be INT
    lastLoggedInAt: { type: GraphQLInt },
    // TODO - phone = phoneVerification.contactNumber
    // phoneVerification: { type: GraphQLString },
    notifications: {
      type: NotificationType,
      resolve: (user, args, { token }) => NotificationService.getNotificationById(user.id, token)
    },
  })
})

export default UserType
