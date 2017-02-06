import { Router } from 'express'

import * as controller from './controller'

export const router = Router()

router.post( '/notify', controller.notify, (req, res, next) => next() )
router.post( '/receiveSms', controller.receiveSms, (req, res, next) => next() )
router.post( '/sendSms', controller.sendSms, (req, res, next) => next() )
router.post( '/updatePhone', controller.updatePhone, (req, res, next) => next() )
