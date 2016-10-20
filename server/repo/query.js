import { GraphQLInt } from 'graphql'
import * as API from '../shared/services/api'
import Type from './type'

const query = {
  type: Type,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: (root, args) => API.get('orgs/unlease-development/repos').then( json => json.find( repo => repo.id === args.id ) )
}

export default query
