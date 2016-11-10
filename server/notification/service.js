import { API_UNLEASE } from '../shared/constants'
import * as API from '../shared/services/api'

export const getNotificationById = (id, token) => API.get(`${API_UNLEASE}/resource/messaging/notification/${id}`, token)
