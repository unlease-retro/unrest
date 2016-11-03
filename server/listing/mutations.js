import { GraphQLBoolean, GraphQLString } from 'graphql'

import Type from './type'
// import * as service from './service'

export const updateHostStatus = {
  type: Type,
  args: {
    id: { type: GraphQLString },
    leakage: { type: GraphQLBoolean },
    nonResponsive: { type: GraphQLBoolean },
  },
  resolve: (root, args) => {

    const listing = Object.assign({}, args)

    // TODO - API work here

    return listing

  }
}
