import { GraphQLList, GraphQLBoolean } from 'graphql'

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
    disabled: { type: GraphQLBoolean }
  },
  resolve: (root, args, { token }) => service.getBotAdverts(token, args)
}