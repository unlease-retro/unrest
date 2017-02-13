import { GraphQLBoolean, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import InputType, { UserWithListingInputType } from './inputType'
import Type from './type'
import * as service from './service'

export const createListing = mutationWithClientMutationId({
  name: 'CreateListing',
  inputFields: {
    payload: { type: InputType },
  },
  outputFields: {
    listing: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: ({ payload }, { token }) => service.createListing(token, payload).then( json => {

    if (json.error) throw new Error(json.error)

    const { id } = json

    return { id }

  })
})

export const removeListing = mutationWithClientMutationId({
  name:'RemoveListing',
  inputFields: {
    id: { type: GraphQLString }
  },
  outputFields: {
    deletedListingId: {
      type: GraphQLString,
      resolve: payload => payload.id
    },
    listing: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: ({ id }, { token }) => service.removeListing(token, id).then( res => {

    if (res.status !== 200) throw new Error(res.statusText)

    return { id }

  } )
})

export const createUserWithListing = mutationWithClientMutationId({
  name: 'CreateUserWithListing',
  inputFields: {
    payload: { type: UserWithListingInputType },
  },
  outputFields: {
    listingId: { type: GraphQLString, resolve: payload => payload.id },
    email: { type: GraphQLString, resolve: payload => payload.email }
  },
  mutateAndGetPayload: ({ payload }, { token }) => service.createUserWithListing(token, payload).then( json => {

    if (json.error) throw new Error(json.error)

    const { id, email } = json

    return { id, email }

  })
})

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

    const { id, nonResponsive, leakage } = json

    return { id, nonResponsive, leakage }

  })
})

export const addListingToPopular = mutationWithClientMutationId({
  name: 'AddListingToPopular',
  inputFields: {
    id: { type: GraphQLString }
  },
  outputFields: {
    listing: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: (input, { token }) => service.addListingToPopular(token, input).then( json => {

    if (json.error) throw new Error(json.error)

    const { id, popular } = json

    return { id, popular }

  })
})

export const removeListingFromPopular = mutationWithClientMutationId({
  name: 'RemoveListingFromPopular',
  inputFields: {
    id: { type: GraphQLString }
  },
  outputFields: {
    listing: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: (input, { token }) => service.removeListingFromPopular(token, input).then( json => {

    if (json.error) throw new Error(json.error)

    const { id, popular } = json

    return { id, popular }

  })
})
