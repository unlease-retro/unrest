import { Router } from 'express'

const router = Router()

// domains
import * as Auth from './auth'

// API
router.use(`/${Auth.name}`, Auth.routes)

export default router
