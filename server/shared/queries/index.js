import * as Listing from '../../listing'
import * as Notification from '../../notification'
import * as User from '../../user'

export default {
  ...Listing.queries,
  ...Notification.queries,
  ...User.queries,
}
