import { GraphQLObjectType, GraphQLString } from 'graphql'
import { name } from './constants'

const ListingType = new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLString },
    location: { type: GraphQLString },
  })
})

export default ListingType
