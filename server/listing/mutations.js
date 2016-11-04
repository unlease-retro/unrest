import { GraphQLBoolean, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Type from './type'
import * as service from './service'

export const updateHostStatus = mutationWithClientMutationId({
  name: 'UpdateHostStatus',
  inputFields: {
    id: { type: GraphQLString },
    leakage: { type: GraphQLBoolean },
    nonResponsive: { type: GraphQLBoolean },
  },
  outputFields: {
    listing: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: (input, { token }) => service.updateHostStatus(token, input).then( json => {

    if (json.error) throw new Error(json.error)

    return input

  })
})
