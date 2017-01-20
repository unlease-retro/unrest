import { Router } from 'express'

import * as controller from './controller'

export const router = Router()

router.post( '/test', controller.test, (req, res, next) => next() )
