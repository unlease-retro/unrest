import { GraphQLObjectType, GraphQLString } from 'graphql'
import { type } from './constants'

const ListingsType = new GraphQLObjectType({
  name: type,
  description: 'Listings',
  fields: () => ({
    id: { type: GraphQLString },
    location: { type: GraphQLString },
  })
})

export default ListingsType
