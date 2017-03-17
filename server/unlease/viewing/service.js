import { API_UNLEASE } from '../../shared/constants'
import * as API from '../../shared/services/api'

export const getViewingByMessageId = (id, token) => API.get(`${API_UNLEASE}/resource/viewing/m/${id}`, token)

export const getUpcomingViewings = (token) => API.get(`${API_UNLEASE}/resource/viewing/upcoming/callinfo`, token)
