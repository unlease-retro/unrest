import { GraphQLInt, GraphQLFloat, GraphQLList } from 'graphql'
import * as API from '../shared/services/api'
import Type from './type'

// TODO - abstract?
const getAllListingsByLocation = ({ lng, lat, radius }) => API.get(`listing/search?lng=${lng}&lat=${lat}&radius=${radius}&page=0`).then( json => json.content )

// TODO - abstract?
const searchArgs = {
  lng: { type: GraphQLFloat },
  lat: { type: GraphQLFloat },
  radius: { type: GraphQLInt },
}

const queries = {
  listings: {
    type: new GraphQLList(Type),
    args: {
      ...searchArgs,
    },
    // TODO - need to get ALL listings here -> not just active
    resolve: (root, args) => getAllListingsByLocation(args)
  },
  activeListings: {
    type: new GraphQLList(Type),
    args: {
      ...searchArgs,
    },
    resolve: (root, args) => getAllListingsByLocation(args).then( listings => listings.filter( l => l.listed && !l.booked ) )
  }
}

export default queries
