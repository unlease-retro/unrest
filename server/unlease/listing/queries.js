import { GraphQLBoolean, GraphQLInt, GraphQLFloat, GraphQLList, GraphQLString } from 'graphql'

import Type from './type'
import * as service from './service'

const searchArgs = {
  lng: { type: GraphQLFloat },
  lat: { type: GraphQLFloat },
  radius: { type: GraphQLInt },
  startDateInNextDays: { type: GraphQLInt },
  listed: { type: GraphQLBoolean },
  sortBy: { type: GraphQLString },
  direction: { type: GraphQLString },
}

export const listings = {
  type: new GraphQLList(Type),
  args: { ...searchArgs },
  resolve: (root, args, { token }) => service.fetchListings(token, args).then( json => {

    if (json.error) throw new Error(json.error)

    return json

  })
}


export const listingById = {
  type: Type,
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args) => service.fetchListingById(args).then( json => {

    if (json.error) throw new Error(json.error)

    return json

  })
}
