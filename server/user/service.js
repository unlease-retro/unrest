import * as API from '../shared/services/api'

export const getAllUsers = () => API.get('resource/user/list')
export const getUserById = (id, token) => API.get(`resource/user/detail/${id}`, token)
