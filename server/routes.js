import { Router } from 'express'

const router = Router()

// domains
import * as Auth from './auth'
import * as Webhooks from './webhooks'

// API
router.use(`/${Auth.name}`, Auth.routes)
router.use(`/${Webhooks.name}`, Webhooks.routes)

export default router
