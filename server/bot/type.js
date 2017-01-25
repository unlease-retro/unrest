import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql'

import { typeName, typeNames, dbname } from './constants'
import * as service from './service'


const AuthorType = new GraphQLObjectType({
  name: `${typeName}${typeNames.AUTHOR}`,
  fields: {
    name: { type: GraphQLString },
    type: { type: GraphQLString }
  }
})

const PreferencesType = new GraphQLObjectType({
  name: `${typeName}${typeNames.PREFERENCES}`,
  fields: {
    couples: { type: GraphQLString },
    gender: { type: GraphQLString }
  }
})

const AvabilityType = new GraphQLObjectType({
  name: `${typeName}${typeNames.AVABILITY}`,
  fields: {
    date: { type: GraphQLString },
    maximum: { type: GraphQLString },
    minimum: { type: GraphQLString }
  }
})

const AmenitiesType = new GraphQLObjectType({
  name: `${typeName}${typeNames.AMENITIES}`,
  fields: {
    balcony: { type: GraphQLString },
    garden: { type: GraphQLString },
    parking: { type: GraphQLString }
  }
})

const LocationType = new GraphQLObjectType({
  name: `${typeName}${typeNames.LOCATION}`,
  fields: {
    postcode: { type: GraphQLString },
    area: { type: GraphQLString }
  }
})

const ReplyType = new GraphQLObjectType({
  name: `${typeName}${typeNames.REPLY}`,
  fields: {
    id: { type: GraphQLString },
    host: { type: GraphQLBoolean },
    thread: { type: GraphQLString },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLString }
  }
})

const PriceType = new GraphQLObjectType({
  name: `${typeName}${typeNames.PRICE}`,
  fields: {
    unit: { type: GraphQLString },
    value: { type: GraphQLString }
  }
})


const BotType = new GraphQLObjectType({
  name: typeName,
  fields: {
    _id: { type: GraphQLString },
    url: { type: GraphQLString },
    title: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    disabled: { type: GraphQLBoolean },
    submitted: { type: GraphQLBoolean },
    submittedBy: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    receivedMessage: { type: GraphQLBoolean },
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
      resolve: ({ phoneNumber }, args, { db }) => service.allReplies(phoneNumber, db[dbname])
    },
  }

})

export default BotType
