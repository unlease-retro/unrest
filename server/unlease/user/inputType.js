import { GraphQLString, GraphQLInputObjectType } from 'graphql'
import { name } from './constants'

const UserInputType = new GraphQLInputObjectType({
  name: `InputType${name}`,
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    dob: { type: GraphQLString },
    referralProgramCode: { type: GraphQLString },
  }
})

export default UserInputType
