import { GraphQLBoolean, GraphQLFloat, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLString } from 'graphql'

import { name, TYPE_NAMES } from './constants'
import { inputType as UserInputType } from '../user'

const GeolocationInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.geolocation}InputType`,
  fields: {
    coordinates: { type: new GraphQLList(GraphQLString) },
    type: { type: GraphQLString },
    x: { type: GraphQLFloat },
    y: { type: GraphQLFloat },
  }
})

const AddressInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.address}InputType`,
  fields: {
    contactNumber: { type: GraphQLString },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    flatNumber: { type: GraphQLString },
    geoLocation: { type: GeolocationInputType },
    postcode: { type: GraphQLString },
    sectionCompleted: { type: GraphQLBoolean },
    streetAddress: { type: GraphQLString },
  }
})

const AmenityInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.Amenity}InputType`,
  fields: {
    displayName: { type: GraphQLString },
    included: { type: GraphQLBoolean },
    name: { type: GraphQLString },
  }
})

const AvailabilityInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.availability}InputType`,
  fields: {
    bookedDates: { type: new GraphQLList(GraphQLFloat) },
    duration: { type: GraphQLInt },
    from: { type: GraphQLString },
    minStay: { type: GraphQLInt },
    sectionCompleted: { type: GraphQLBoolean },
    to: { type: GraphQLString },
  }
})

const DescriptionInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.description}InputType`,
  fields: {
    amenityItems: { type: new GraphQLList(AmenityInputType) },
    description: { type: GraphQLString },
    sectionCompleted: { type: GraphQLBoolean },
    title: { type: GraphQLString },
  }
})

const EmbeddedUserInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.embeddedUser}InputType`,
  fields: {
    avatar: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    id: { type: GraphQLString },
  }
})

const HomeTruthInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.homeTruth}InputType`,
  fields: {
    items: { type: new GraphQLList(GraphQLString) },
    sectionCompleted: { type: GraphQLBoolean },
  }
})

const ImageInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.image}InputType`,
  fields: {
    name: { type: GraphQLString },
    s3Link: { type: GraphQLString },
  }
})

const PhotoInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.photo}InputType`,
  fields: {
    imageList: { type: new GraphQLList(ImageInputType) },
    lowerLimit: { type: GraphQLInt },
    sectionCompleted: { type: GraphQLBoolean },
    upperLimit: { type: GraphQLInt },
  }
})

const PricingInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.pricing}InputType`,
  fields: {
    cleaningFee: { type: GraphQLInt },
    deposit: { type: GraphQLInt },
    extraGuestCharge: { type: GraphQLInt },
    sectionCompleted: { type: GraphQLBoolean },
    serviceFee: { type: GraphQLFloat },
    weeklyRent: { type: GraphQLInt },
  }
})

const RoommateInputType = new GraphQLInputObjectType({
  name: `${TYPE_NAMES.roommate}InputType`,
  fields: {
    maxAge: { type: GraphQLInt },
    minAge: { type: GraphQLInt },
    numOfFemale: { type: GraphQLInt },
    numOfMale: { type: GraphQLInt },
    occupation: { type: new GraphQLList(GraphQLString) },
    sectionCompleted: { type: GraphQLBoolean },
  }
})

const ListingInputType = new GraphQLInputObjectType({
  name: `${name}InputType`,
  fields: {
    accommodates: { type: GraphQLInt },
    address: { type: AddressInputType },
    availability: { type: AvailabilityInputType },
    booked: { type: GraphQLBoolean },
    completed: { type: GraphQLBoolean },
    description: { type: DescriptionInputType },
    embeddedUser: { type: EmbeddedUserInputType },
    homeTruth: { type: HomeTruthInputType },
    homeType: { type: GraphQLString },
    listed: { type: GraphQLBoolean },
    location: { type: GraphQLString },
    photo: { type: PhotoInputType },
    pricing: { type: PricingInputType },
    referralCode: { type: GraphQLString },
    roommate: { type: RoommateInputType },
    roomType: { type: GraphQLString },
  }
})

export const UserWithListingInputType = new GraphQLInputObjectType({
  name: 'UserWithListingInputType',
  fields: {
    listing: { type: ListingInputType },
    user: { type: UserInputType },
  }
})

export default ListingInputType
