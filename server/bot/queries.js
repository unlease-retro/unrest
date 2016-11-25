import { GraphQLList, GraphQLString, GraphQLBoolean } from 'graphql'

import Type from './type'
import * as service from './service'


const searchArgs = {
  submitted: { type: GraphQLBoolean },
  disabled: { type: GraphQLBoolean }
}

export const adverts = {
  type: new GraphQLList(Type),
  args: {
    ...searchArgs
  },
  resolve: (root, args, { token }) => service.getAdverts(token, args)
}

export const advertById = {
  type: Type,
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args, { token }) => service.advertById(token, args)
}