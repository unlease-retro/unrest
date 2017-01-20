/* eslint-disable no-unused-vars */
import { GraphQLString, } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import Type from './type'
import InputType from './inputType'

import { dbname } from './constants'
import * as service from './service'


export const updateAdvert = mutationWithClientMutationId({
  name: 'UpdateAdvert',

  inputFields: {
    id: { type: GraphQLString },
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


export const createAdverts = mutationWithClientMutationId({
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
