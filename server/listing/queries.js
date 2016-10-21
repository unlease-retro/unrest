import { GraphQLInt, GraphQLFloat, GraphQLList } from 'graphql'

import Type from './type'
import * as selectors from './selectors'

// TODO - abstract?
const searchArgs = {
  lng: { type: GraphQLFloat },
  lat: { type: GraphQLFloat },
  radius: { type: GraphQLInt },
}

export const listings = {
  type: new GraphQLList(Type),
  args: { ...searchArgs },
  resolve: (root, args) => selectors.getAllListingsByLocation(args)
}

export const activeListings = {
  type: new GraphQLList(Type),
  args: { ...searchArgs },
  resolve: (root, args) => selectors.getAllListingsByLocation(args).then( listings => listings.filter( l => l.listed && !l.booked ) )
}
