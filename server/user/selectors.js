import * as API from '../shared/services/api'

export const getAllUsers = () => API.get('user/list')
export const getUserById = id => API.get(`user/${id}`)
