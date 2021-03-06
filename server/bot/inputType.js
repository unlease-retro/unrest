import { GraphQLString, GraphQLList, GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLInputObjectType } from 'graphql'
import { inputTypeName, typeNames } from './constants'

const HouseholdType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.HOUSEHOLD}`,
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

const ExtraCostsType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.EXTRA_COSTS}`,
  fields: {
    feesApply: { type: GraphQLString },
    billsIncluded: { type: GraphQLString }
  }
})

const PreferencesType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.PREFERENCES}`,
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

const AmenitiesType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.AMENITIES}`,
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

const GeocodeType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.GEOCODE}`,
  fields: {
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat }
  }
})

const BotInputType = new GraphQLInputObjectType({
  name: inputTypeName,
  fields: {
    _id: { type: GraphQLString },
    url: { type: GraphQLString },
    homeType: { type: GraphQLString },
    advertId: { type: GraphQLString },
    listingId: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    hostName: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLInt },
    deposit: { type: GraphQLInt },
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
    geocode: { type: GeocodeType },
    household: { type: HouseholdType },
    extraCosts: { type: ExtraCostsType },
    preferences: { type: PreferencesType },
    amenities: { type: AmenitiesType },
    serviceFee: { type: GraphQLFloat },
    email: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  }
})

export default BotInputType
