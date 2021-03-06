import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLBoolean, GraphQLList } from 'graphql'
import { Type as UserType, service as userService } from '../user'
import { Type as ListingType, service as listingService } from '../listing'
import * as viewingService from './service'

import { name, typeNames } from './constants'

export const ViewingType = new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLString },
    messageThreadId: { type: GraphQLString },
    proposedTime: { type: new GraphQLList(GraphQLFloat) },
    previousProposedTime: { type: new GraphQLList(new GraphQLList(GraphQLFloat)) },
    confirmedTime: { type: GraphQLFloat },
    participants: { type: new GraphQLList(GraphQLString) },
    cancelled: { type: GraphQLBoolean },
    declined: { type: GraphQLBoolean },
    createdAt: { type: GraphQLFloat },
    updatedAt: { type: GraphQLFloat },
    proposedTimeChangeAt: { type: GraphQLFloat },
    proposedTimeExpiredAt: { type: GraphQLFloat },
    acceptedBy: { type: GraphQLString },
    canceledBy: { type: GraphQLString },
    declinedBy: { type: GraphQLString },
    scheduledBy: { type: GraphQLString },
    reminderSent: { type: GraphQLBoolean },
    postViewingEmailSent: { type: GraphQLBoolean }
  })
})

export const UpcomingViewingType = new GraphQLObjectType({
  name: typeNames.UPCOMING_VIEWINGS,
  fields: {
    host: {
      type: UserType,
      resolve: ({ host }, args, { token }) => userService.getUserById(host, token)
    },
    guest: {
      type: UserType,
      resolve: ({ guest }, args, { token }) => userService.getUserById(guest, token)
    },
    listing: {
      type: ListingType,
      resolve: ({ listing }) => listingService.fetchListingById(listing)
    },
    viewing: {
      type: ViewingType,
      resolve: ({ message }, args, { token }) => viewingService.getViewingByMessageId(message, token)
    },
    callUrl: { type: GraphQLString }
  }
})