import { GraphQLList, GraphQLString, GraphQLBoolean } from 'graphql'

import Type from './type'
import * as service from './service'


export const adverts = {
  type: new GraphQLList(Type),
  args: {
    submited: { type: GraphQLBoolean },
    disabled: { type: GraphQLBoolean }
  },
  resolve: (root, args, { token }) => service.getAdverts(token, args)
}

export const advertById = {
  type: Type,
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args, { token }) => service.getAdvert(token, args)
}