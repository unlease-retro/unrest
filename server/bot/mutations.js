import { GraphQLBoolean, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Type from './type'
import * as service from './service'


export const updateAdvertStatus = mutationWithClientMutationId({
  name: 'UpdateAdvertStatus',
  inputFields: {
    id: { type: GraphQLString },
    disabled: { type: GraphQLBoolean },
    submited: { type: GraphQLBoolean }
  },
  outputFields: {
    advert: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: (input, { token }) => service.updateAdvert(token, input).then(json => {

    if (json.error) throw new Error(json.error)

    const { advert } = json

    return advert

  })
})


export const sendMessage = mutationWithClientMutationId({
  name: 'SendMessage',
  inputFields: {
    id: { type: GraphQLString },
    message: { type: GraphQLString }
  },
  outputFields: {
    advert: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: (input, { token }) => service.sendMessage(token, input).then(json => {

    if (json.error) throw new Error(json.error)

    const { advert } = json

    return advert

  })

})


export const sendSelectedMessage = mutationWithClientMutationId({
  name: 'SendSelectedMessage',
  inputFields: {
    adverts: { type: GraphQLString },
    message: { type: GraphQLString }
  },
  outputFields: {
    advert: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: (input, { token }) => service.sendSelectedMessage(token, input).then(json => {

    if (json.error) throw new Error(json.error)

    const { advert } = json

    return advert

  })
})
