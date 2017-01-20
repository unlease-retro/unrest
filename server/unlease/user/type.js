import { GraphQLObjectType, GraphQLFloat, GraphQLString } from 'graphql'

import { name } from './constants'
import { Type as NotificationType, service as NotificationService } from '../notification'

const PhoneVerificationType = new GraphQLObjectType({
  name: 'PhoneVerification',
  fields: () => ({
    contactNumber: { type: GraphQLString },
  })
})

const UserType = new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLString },
    avatar: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    lastLoggedInAt: { type: GraphQLFloat },
    phoneVerification: {
      type: PhoneVerificationType,
      resolve: user => user.phoneVerification
    },
    notifications: {
      type: NotificationType,
      resolve: (user, args, { token }) => NotificationService.getNotificationById(user.id, token)
    },
  })
})

export default UserType
