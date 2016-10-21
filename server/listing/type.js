import { GraphQLObjectType, GraphQLString } from 'graphql'

import { name } from './constants'
import { Type as UserType, selectors as UserSelectors } from '../user'

const ListingType = new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLString },
    location: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: listing => UserSelectors.getUserById(listing.embeddedUser.id)
    },
  })
})

export default ListingType
