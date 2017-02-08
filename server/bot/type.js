import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLInt, GraphQLList, GraphQLBoolean } from 'graphql'

import { typeName, typeNames, dbname } from './constants'
import * as service from './service'

const HouseholdType = new GraphQLObjectType({
  name: `${typeName}${typeNames.HOUSEHOLD}`,
  fields: {
    pets: { type: GraphQLString },
    rooms: { type: GraphQLString },
    gender: { type: GraphQLString },
    smoker: { type: GraphQLString },
    language: { type: GraphQLString },
    flatmates: { type: GraphQLString },
    occupation: { type: GraphQLString },
    nationality: { type: GraphQLString },
    interests: { type: GraphQLString },
    housemates: { type: GraphQLString },
    ages: { type: GraphQLString }
  }
})

const ExtraCostsType = new GraphQLObjectType({
  name: `${typeName}${typeNames.EXTRA_COSTS}`,
  fields: {
    deposit: { type: GraphQLString },
    feesApply: { type: GraphQLString },
    billsIncluded: { type: GraphQLString }
  }
})

const PreferencesType = new GraphQLObjectType({
  name: `${typeName}${typeNames.PREFERENCES}`,
  fields: {
    dss: { type: GraphQLString },
    pets: { type: GraphQLString },
    gender: { type: GraphQLString },
    couples: { type: GraphQLString },
    smoking: { type: GraphQLString },
    occupation: { type: GraphQLString },
    references: { type: GraphQLString },
    minAge: { type: GraphQLString },
    maxAge: { type: GraphQLString },
    vegetarian: { type: GraphQLString }
  }
})

const AmenitiesType = new GraphQLObjectType({
  name: `${typeName}${typeNames.AMENITIES}`,
  fields: {
    parking: { type: GraphQLString },
    garage: { type: GraphQLString },
    furnishing: { type: GraphQLString },
    garden: { type: GraphQLString },
    balcony: { type: GraphQLString },
    disabledAccess: { type: GraphQLString },
    sharedLivingRoom: { type: GraphQLString },
    broadband: { type: GraphQLString }
  }
})

const GeocodeType = new GraphQLObjectType({
  name: `${typeName}${typeNames.GEOCODE}`,
  fields: {
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat }
  }
})


const ReplyType = new GraphQLObjectType({
  name: `${typeName}${typeNames.REPLY}`,
  fields: {
    id: { type: GraphQLString },
    host: { type: GraphQLBoolean },
    thread: { type: GraphQLString },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLFloat }
  }
})

const BotType = new GraphQLObjectType({
  name: typeName,
  fields: {
    _id: { type: GraphQLString },
    id: { type: GraphQLString, resolve: bot => bot._id },
    url: { type: GraphQLString },
    homeType: { type: GraphQLString },
    advertId: { type: GraphQLString },
    listingId: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    hostName: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLInt },
    photos: { type: new GraphQLList(GraphQLString) },
    availabilityFrom: { type: GraphQLString },
    availabilityTo: { type: GraphQLString },
    postcode: { type: GraphQLString },
    city: { type: GraphQLString },
    numOfFemale: { type: GraphQLInt },
    numOfMale: { type: GraphQLInt },
    crawled: { type: GraphQLBoolean },
    disabled: { type: GraphQLBoolean },
    submitted: { type: GraphQLBoolean },
    amenities: {
      type: AmenitiesType,
      resolve: advert => advert.amenities
    },
    preferences: {
      type: PreferencesType,
      resolve: advert => advert.preferences
    },
    household: {
      type: HouseholdType,
      resolve: advert => advert.household
    },
    extraCosts: {
      type: ExtraCostsType,
      resolve: advert => advert.extraCosts
    },
    geocode: {
      type: GeocodeType,
      resolve: advert => advert.geocode
    },
    replies: {
      type: new GraphQLList(ReplyType),
      resolve: ({ phoneNumber }, args, { db }) => service.allReplies(phoneNumber, db[dbname])
    },
  }

})

export default BotType
