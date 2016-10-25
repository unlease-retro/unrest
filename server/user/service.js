import * as API from '../shared/services/api'

export const getAllUsers = () => API.get('resource/user/list')
export const getUserById = id => API.get(`resource/user/${id}`)
