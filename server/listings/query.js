import { GraphQLInt, GraphQLFloat } from 'graphql'
import * as API from '../shared/services/api'
import Type from './type'

const query = {
  type: Type,
  args: {
    lng: { type: GraphQLFloat },
    lat: { type: GraphQLFloat },
    radius: { type: GraphQLInt },
  },
  resolve: (root, { lng, lat, radius }) => API.get(`listing/search?lng=${lng}&lat=${lat}&radius=${radius}&page=0`).then( json => json.content[0] )
}

export default query
