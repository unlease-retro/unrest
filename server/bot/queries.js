import { GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql'

import Type from './type'
import * as service from './service'

import { dbname } from './constants'

const searchArgs = {
  submitted: { type: GraphQLBoolean },
  disabled: { type: GraphQLBoolean },
  crawled: { type: GraphQLBoolean },
  limit: { type: GraphQLInt },
}

export const allAdverts = {
  type: new GraphQLList(Type),
  args: {
    ...searchArgs
  },
  resolve: (root, args, { db }) => service.allAdverts(args, db[dbname])
}

export const advert = {
  type: Type,
  args: {
    _id: { type: GraphQLString },
  },
  resolve: (root, args, { db }) => service.advert(args, db[dbname])
}
