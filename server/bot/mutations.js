import { GraphQLBoolean, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Type from './type'
import * as service from './service'


export const updateAdvertStatus = mutationWithClientMutationId({
  name: 'UpdateAdvertStatus',
  inputFields: {
    id: { type: GraphQLString },
    disabled: { type: GraphQLBoolean }
  },
  outputFields: {
    advert: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: (input, { token }) => service.updateBotAdvert(token, input).then(json => {

    if (json.error) throw new Error(json.error)

    let { advert } = json

    return advert

  })
})


export const sendAdvertMessage = mutationWithClientMutationId({
  name: 'SendAdvertMessage',
  inputFields: {
    id: { type: GraphQLString }
  },
  outputFields: {
    advert: {
      type: Type,
      resolve: payload => payload
    }
  },

  mutateAndGetPayload: (input, { token }) => service.sendBotMessage(token, input).then(json => {

    if (json.error) throw new Error(json.error)

    let { advert } = json

    return advert

  })

})
