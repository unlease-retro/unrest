import { GraphQLBoolean, GraphQLString } from 'graphql'

import Type from './type'
import * as service from './service'

export const updateHostStatus = {
  type: Type,
  args: {
    id: { type: GraphQLString },
    leakage: { type: GraphQLBoolean },
    nonResponsive: { type: GraphQLBoolean },
  },
  resolve: (root, args, { token }) => service.updateHostStatus(token, args).then( json => {

    if (json.error) throw new Error(json.error)

    return json

  })
}
