import { API_UNLEASE } from '../shared/constants'
import * as API from '../shared/services/api'

export const getAllUsers = token => API.get(`${API_UNLEASE}/resource/user/list`, token)
export const getUserById = (id, token) => API.get(`${API_UNLEASE}/resource/user/detail/${id}`, token)
