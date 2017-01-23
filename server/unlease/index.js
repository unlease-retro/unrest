import * as Listing from './listing'
import * as Notification from './notification'
import * as User from './user'

export const mutations = {
  ...Listing.mutations,
  ...User.mutations,
}

export const queries = {
  ...Listing.queries,
  ...Notification.queries,
  ...User.queries,
}
