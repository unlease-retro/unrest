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
    avability: { type: GraphQLString },
    maximumTerm: { type: GraphQLString },
    minimumTerm: { type: GraphQLString }
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

const ReplyType = new GraphQLObjectType({
  name: 'Reply',
  fields: () => ({
    from: { type: GraphQLString },
    thread: { type: GraphQLString },
    message: { type: GraphQLString }
  })
})

const BotType = new GraphQLObjectType({
  name,
  fields: () => ({
    _id: { type: GraphQLString },
    url: { type: GraphQLString },
    title: { type: GraphQLString },
    price: { type: GraphQLString },
    postcode: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    disabled: { type: GraphQLBoolean },
    submited: { type: GraphQLBoolean },
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
    submitedBy: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    replies: {
      type: new GraphQLList(ReplyType),
      resolve: (advert, args, { token }) => service.getReplies(token, advert.phoneNumber)
    },
  })
})

export default BotType