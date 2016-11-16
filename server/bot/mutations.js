import { GraphQLBoolean, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Type from './type'
import * as service from './service'


export const updateAdvert = mutationWithClientMutationId({
  name: 'UpdateAdvert',
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
  mutateAndGetPayload: (input, { token }) => service.updateAdvert(token, input).then(json => {

    if (json.error) throw new Error(json.error)

    let { advert } = json

    return advert

  })
})


export const sendMessage = mutationWithClientMutationId({
  name: 'SendMessage',
  inputFields: {
    id: { type: GraphQLString }
  },
  outputFields: {
    advert: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: (input, { token }) => service.sendMessage(token, input).then(json => {

    if (json.error) throw new Error(json.error)

    let { advert } = json

    return advert

  })

})
