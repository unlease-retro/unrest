import * as API from '../shared/services/api'

export const getNotificationById = (id, token) => API.get(`resource/messaging/notification/${id}`, token)
