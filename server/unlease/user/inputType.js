import { GraphQLBoolean, GraphQLString, GraphQLInputObjectType } from 'graphql'
import { name } from './constants'

const PhoneVerificationInputType = new GraphQLInputObjectType({
  name: 'PhoneVerificationInputType',
  fields: {
    code: { type: GraphQLString },
    contactNumber: { type: GraphQLString },
    verified: { type: GraphQLBoolean },
  }
})

const UserInputType = new GraphQLInputObjectType({
  name: `${name}InputType`,
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    dob: { type: GraphQLString },
    referralProgramCode: { type: GraphQLString },
    phoneVerification: { type: PhoneVerificationInputType }
  }
})

export default UserInputType
