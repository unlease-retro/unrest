import { GraphQLObjectType, GraphQLString } from 'graphql'

import { name } from './constants'
import { Type as UserType, service as UserService } from '../user'

const ListingType = new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLString },
    location: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: listing => UserService.getUserById(listing.embeddedUser.id)
    },
  })
})

export default ListingType
