import { GraphQLString } from 'graphql'

import Type from './type'
import * as service from './service'

export const botSample = {
  type: Type,
  args: {
    token: { type: GraphQLString },
  },
  resolve: (root, { token }) => service.getBotSample(token)
}
