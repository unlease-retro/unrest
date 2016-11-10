import * as Bot from '../../bot'
import * as Listing from '../../listing'
import * as Notification from '../../notification'
import * as User from '../../user'

export default {
  ...Bot.queries,
  ...Listing.queries,
  ...Notification.queries,
  ...User.queries,
}
