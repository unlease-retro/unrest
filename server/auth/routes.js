import { Router } from 'express'

import * as controller from './controller'

export const router = Router()

router.post( '/login', controller.login, (req, res, next) => next() )
router.post( '/refresh', controller.refresh, (req, res, next) => next() )
