import { GraphQLList, GraphQLBoolean } from 'graphql'

import Type from './type'
import * as service from './service'


export const botAdverts = {
  type: new GraphQLList(Type),
  args: {
    disabled: { type: GraphQLBoolean }
  },
  resolve: (root, args, { token }) => service.getBotAdverts(token, args)
}