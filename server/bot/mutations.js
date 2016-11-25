import { GraphQLList, GraphQLBoolean, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Type from './type'
import * as service from './service'


export const disableAdvert = mutationWithClientMutationId({
  name: 'DisableAdvert',

  inputFields: {
    id: { type: GraphQLString }
  },

  outputFields: {
    advert: {
      type: Type,
      resolve: payload => payload
    }
  },

  mutateAndGetPayload: (input, { token }) => service.disableAdvert(token, input).then(json => {

    if (json.error) throw new Error(json.error)

    return json.advert

  })

})


export const markAdvert = mutationWithClientMutationId({
  name: 'MarkAdvert',

  inputFields: {
    id: { type: GraphQLString }
  },

  outputFields: {
    advert: {
      type: Type,
      resolve: payload => payload
    }
  },

  mutateAndGetPayload: (input, { token }) => service.markAdvert(token, input).then(json => {

    if (json.error) throw new Error(json.error)

    return json.advert

  })

})


export const sendAdvertMessage = mutationWithClientMutationId({
  name: 'SendAdvertMessage',

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

  mutateAndGetPayload: (input, { token }) => service.sendAdvertMessage(token, input).then(json => {

    if (json.error) thorw new Error(json.error)

    return json.advert

  })

})


export const sendAdvertsMessages = mutationWithClientMutationId({
  name: 'SendAdvertsMessages',
  
  inputFields: {
    adverts: { type: GraphQLString },
    message: { type: GraphQLString },
  },

  outputFields: {
    advert: {
      type: new GraphQLList(Type),
      resolve: payload => payload
    }
  },

  mutateAndGetPayload: (input, { token }) => service.sendAdvertsMessages(token, input).then(json => {

    if (json.error) throw new Error(json.error)

    return json

  })
})