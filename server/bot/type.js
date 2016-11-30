import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql'

import { name } from './constants'
import * as service from './service'


const AuthorType = new GraphQLObjectType({
  name: 'Author',

  fields: () => ({
    name: { type: GraphQLString },
    type: { type: GraphQLString }
  })

})

const PreferencesType = new GraphQLObjectType({
  name: 'Preferences',

  fields: () => ({
    couples: { type: GraphQLString },
    gender: { type: GraphQLString }
  })

})

const AvabilityType = new GraphQLObjectType({
  name: 'Avability',

  fields: () => ({
    date: { type: GraphQLString },
    maximum: { type: GraphQLString },
    minimum: { type: GraphQLString }
  })

})

const AmenitiesType = new GraphQLObjectType({
  name: 'Amenities',

  fields: () => ({
    balcony: { type: GraphQLString },
    garden: { type: GraphQLString },
    parking: { type: GraphQLString }
  })

})

const LocationType = new GraphQLObjectType({
  name: 'Location',

  fields: () => ({
    postcode: { type: GraphQLString },
    area: { type: GraphQLString }
  })

})

const ReplyType = new GraphQLObjectType({
  name: 'Reply',

  fields: () => ({
    id: { type: GraphQLString },
    host: { type: GraphQLBoolean },
    thread: { type: GraphQLString },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLString }
  })

})

const PriceType = new GraphQLObjectType({
  name: 'Price',

  fields: () => ({
    unit: { type: GraphQLString },
    value: { type: GraphQLString }
  })

})


const BotType = new GraphQLObjectType({
  name,

  fields: () => ({
    id: { type: GraphQLString },
    url: { type: GraphQLString },
    title: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    disabled: { type: GraphQLBoolean },
    submitted: { type: GraphQLBoolean },
    submittedBy: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    recivedMessage: { type: GraphQLBoolean },

    price: {
      type: PriceType,
      resolve: advert => advert.price
    },

    location: {
      type: LocationType,
      resolve: advert => advert.location
    },

    author: {
      type: AuthorType,
      resolve: advert => advert.author
    },

    preferences: {
      type: PreferencesType,
      resolve: advert => advert.preferences
    },

    avability: {
      type: AvabilityType,
      resolve: advert => advert.avability
    },

    amenities: {
      type: AmenitiesType,
      resolve: advert => advert.amenities
    },

    replies: {
      type: new GraphQLList(ReplyType),
      resolve: (advert, args, { token }) => service.getAdvertReplies(token, advert.phoneNumber)
    },
  })

})

export default BotType