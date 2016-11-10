import { GraphQLString, GraphQLList } from 'graphql'

import Type from './type'
import * as service from './service'

// export const botSample = {
//   type: Type,
//   args: {
//     token: { type: GraphQLString },
//   },
//   resolve: (root, { token }) => service.getBotSample(token)
// }


export const botAdverts = {
  type: new GraphQLList(Type),
  args: {
    token: { type: GraphQLString },
  },
  resolve: (root, { token }) => service.getBotAdverts(token)
}