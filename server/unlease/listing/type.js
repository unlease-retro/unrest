import { GraphQLObjectType, GraphQLList, GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLString } from 'graphql'

import { name } from './constants'
import { Type as UserType, service as UserService } from '../user'

const PhotoType = new GraphQLObjectType({
  name: 'Photo',
  fields: () => ({
    s3Link: { type: GraphQLString },
  })
})

const ListingType = new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLString },
    bot: { type: GraphQLBoolean },
    availableFrom: { type: GraphQLFloat },
    availableTo: { type: GraphQLFloat },
    contactNumber: { type: GraphQLString },
    createdAt: { type: GraphQLFloat },
    leakage: { type: GraphQLBoolean },
    location: { type: GraphQLString },
    nonResponsive: { type: GraphQLBoolean },
    postcode: { type: GraphQLString },
    title: { type: GraphQLString },
    weeklyRent: { type: GraphQLInt },
    popular: { type: GraphQLBoolean },
    listed: { type: GraphQLBoolean },
    photos: {
      type: new GraphQLList(PhotoType),
      resolve: listing => listing.imageList
    },
    user: {
      type: UserType,
      resolve: (listing, args, { token }) => UserService.getUserById(listing.embeddedUser.id, token)
    },
  })
})

export default ListingType
