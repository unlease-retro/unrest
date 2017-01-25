import { mutationWithClientMutationId } from 'graphql-relay'

import InputType from './inputType'
import Type from './type'
import * as service from './service'

export const createUser = mutationWithClientMutationId({
  name: 'CreateUser',
  inputFields: {
    payload: { type: InputType },
  },
  outputFields: {
    user: {
      type: Type,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: ({ payload }, { token }) => service.createUser(token, payload).then( json => {

    if (json.error) throw new Error(json.error)

    const { basic_info: { id } } = json

    return { id }

  })
})
