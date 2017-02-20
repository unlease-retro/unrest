/* eslint-disable no-unused-vars */
import { GraphQLString, } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Type, { ReplyType } from './type'
import InputType, { ReplyInputType } from './inputType'

import { dbname } from './constants'
import * as service from './service'


export const updateAdvert = mutationWithClientMutationId({
  name: 'UpdateAdvert',

  inputFields: {
    _id: { type: GraphQLString },
    payload: {
      type: InputType
    }
  },

  outputFields: {
    advert: {
      type: Type,
      resolve: payload => payload
    }
  },

  mutateAndGetPayload: (input, { db }) => service.updateAdvert(input, db[dbname]).then(json => {

    if (json.error) throw new Error(json.error)

    return json.value

  })

})


export const createAdvert = mutationWithClientMutationId({
  name: 'CreateAdvert',

  inputFields: {
    payload: {
      type: InputType
    }
  },

  outputFields: {
    advert: {
      type: Type,
      resolve: payload => payload
    }
  },

  mutateAndGetPayload: (input, { db }) => service.createAdvert(input, db[dbname]).then(json => {

    if (json.error) throw new Error(json.error)

    // json.ops.shift()
    return json.ops[0]

  })

})


export const sendAdvertMessage = mutationWithClientMutationId({
  name: 'SendAdvertMessage',

  inputFields: {
    payload: {
      type: ReplyInputType
    }
  },

  outputFields: {
    replies: {
      type: ReplyType,
      resolve: payload => payload
    }
  },

  mutateAndGetPayload: (input, { db }) => service.sendSms(input, db[dbname]).then(json => {

    if (json.error) throw new Error(json.error)

    // json.ops.shift()
    return json.ops[0]

  })
   
})