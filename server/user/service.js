import * as API from '../shared/services/api'

export const getAllUsers = token => API.get('resource/user/list', token)
export const getUserById = (id, token) => API.get(`resource/user/detail/${id}`, token)
