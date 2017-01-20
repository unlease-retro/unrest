import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLInputObjectType } from 'graphql'
import { inputTypeName, typeNames } from './constants'


const PriceType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.PRICE}`,
  fields: {
    unit: { type: GraphQLString },
    value: { type: GraphQLInt }
  }
})

const AuthorType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.AUTHOR}`,
  fields: {
    name: { type: GraphQLString },
    type: { type: GraphQLString }
  }
})

const LocationType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.LOCATION}`,
  fields: {
    area: { type: GraphQLString },
    postcode: { type: GraphQLString }
  }
})

const AmenitiesType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.AMENITIES}`,
  fields: {
    balcony: { type: GraphQLString },
    garden: { type: GraphQLString },
    parking: { type: GraphQLString }
  }
})

const AvabilityType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.AVABILITY}`,
  fields: {
    date: { type: GraphQLString },
    minimum: { type: GraphQLString },
    maximum: { type: GraphQLString }
  }
})

const PreferencesType = new GraphQLInputObjectType({
  name: `${inputTypeName}${typeNames.PREFERENCES}`,
  fields: {
    couples: { type: GraphQLString },
    gender: { type: GraphQLString }
  }

})

const BotInputType = new GraphQLInputObjectType({
  name: inputTypeName,
  fields: {
    price: { type: PriceType },
    author: { type: AuthorType },
    url: { type: GraphQLString },
    title: { type: GraphQLString },
    contact: { type: GraphQLString },
    crawled: { type: GraphQLBoolean },
    location: { type: LocationType },
    amenities: { type: AmenitiesType },
    avability: { type: AvabilityType },
    disabled: { type: GraphQLBoolean },
    submitted: { type: GraphQLBoolean },
    phoneNumber: { type: GraphQLString },
    submittedBy: { type: GraphQLString },
    preferences: { type: PreferencesType },
    receivedMessage: { type: GraphQLBoolean },
  }
})

export default BotInputType
