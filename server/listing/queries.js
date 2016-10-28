import { GraphQLInt, GraphQLFloat, GraphQLList } from 'graphql'

import Type from './type'
import * as service from './service'

// TODO - abstract?
const searchArgs = {
  lng: { type: GraphQLFloat },
  lat: { type: GraphQLFloat },
  radius: { type: GraphQLInt },
}

export const listings = {
  type: new GraphQLList(Type),
  args: { ...searchArgs },
  resolve: (root, args, { token }) => service.fetchAllListingsByLocation(token, args).then( ({ content, error }) => {

    if (error) throw new Error(error)

    return content

  })
}

export const activeListings = {
  type: new GraphQLList(Type),
  args: { ...searchArgs },
  resolve: (root, args, { token }) => service.fetchAllListingsByLocation(token, args).then( listings => listings.filter( l => l.listed && !l.booked ) )
}
