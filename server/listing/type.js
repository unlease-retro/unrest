import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql'

import { name } from './constants'
import { Type as UserType, service as UserService } from '../user'

const ListingType = new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLString },
    location: { type: GraphQLString },
    leakage: { type: GraphQLBoolean },
    nonResponsive: { type: GraphQLBoolean },
    user: {
      type: UserType,
      resolve: (listing, args, { token }) => UserService.getUserById(listing.embeddedUser.id, token)
    },
  })
})

export default ListingType
