import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLBoolean, GraphQLList } from 'graphql'

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
  fields: () => ({
    host: { type: GraphQLString },
    guest: { type: GraphQLString },
    listing: { type: GraphQLString },
    message: { type: GraphQLString },
    callUrl: { type: GraphQLString }
  })
})
