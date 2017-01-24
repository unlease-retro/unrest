import { Router } from 'express'

import * as controller from './controller'

export const router = Router()

router.post( '/notify', controller.notify, (req, res, next) => next() )
router.post( '/sms', controller.sms, (req, res, next) => next() )
