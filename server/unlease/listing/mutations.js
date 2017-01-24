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

const temptoken = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOlsidW5sZWFzZV9yZXNvdXJjZSJdLCJiYXNpY19pbmZvIjp7ImlkIjoiNTgzNWIxOTRjY2MwMGIzNzBmMzdmYzlhIiwiZmlyc3ROYW1lIjoiSG9zdCIsImxhc3ROYW1lIjoiVGVzdCIsImVtYWlsIjoiaEB0LmNvIiwiYXZhdGFyIjoiaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3VubGVhc2UtZGV2L2Fzc2V0L3VzZXItcHJvZmlsZS81ODM1YjE5NGNjYzAwYjM3MGYzN2ZjOWEvcHJvZmlsZS1pbWFnZS01cTduY3VseWJrX3NtLnBuZyIsIm5ld0ZhY2Vib29rTG9naW4iOmZhbHNlLCJjcmVhdGVkQXQiOjE0Nzk5MTM4NzYwMTR9LCJ1c2VyX25hbWUiOiJoQHQuY28iLCJzY29wZSI6WyJTSUdORURfSU4iLCJSRU1FTUJFUkVEIl0sImlzc3VlX3RpbWUiOjE0ODUyNjgzNDA2NzEsInVzZXJfdG9rZW5fY2hlY2tzdW0iOiIxNDc5OTEzODc2MDE0IiwiZXhwIjoxNDg1MjcxOTQwLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiLCJST0xFX0FETUlOIl0sImp0aSI6ImMxOWJhNTQ0LTNkZjYtNDk0YS1hZmFmLWM2ODExNzFkNDQ1ZiIsImNsaWVudF9pZCI6InVubGVhc2UtYXBpIn0.OxxiAg0lhZerW8vfPSuQLMJS0_olV8VVpm65vogE2z3HwqnqXW5dwPlqtBIVIPftH1mGbIkyb824MqTRRcQ-_D8vTEHPy-sv5X8z1oPphKovV2E6ZGBhA8D-eyqxyJkf3VKxoznHldrh2En_gQIhAKb_B9HD1NsSOWnu7_2MT7swLfD8sFxqjCg67VBKPCGo0_iAibmUnm2eo4IiGehKAHyVDnBi6pRHidTHXHwT5RSEaXAFBLd2F6RTg2lnYIP9UvoMwE4gxYLJYz2uf2xWtzWMJiwByTPu9k9gj0DqcCttHqcWOy9C6vOLs-UMkmm5Tt73JBw2kWBxSEnui2UYZg'

export const createUserWithListing = mutationWithClientMutationId({
  name: 'CreateUserWithListing',
  inputFields: {
    payload: { type: UserWithListingInputType },
  },
  outputFields: {
    listing: {
      type: Type,
      resolve: payload => payload
    }
  },
  // mutateAndGetPayload: ({ payload }, { token }) => service.createUserWithListing(token, payload).then( json => {
  mutateAndGetPayload: ({ payload }) => service.createUserWithListing(temptoken, payload).then( json => {

    if (json.error) throw new Error(json.error)

    const { id } = json

    return { id }

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
