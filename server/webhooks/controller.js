import * as Webhooks from './service'

export const notify = (req, res, next) => {

  return Webhooks.notify(req.body)
    .then( () => {

      res.status(200).json({})

      return next()

    }, e => next(e) )

}

export const sms = (req, res, next) => {

  return Webhooks.sms(req.body)
    .then( () => {

      res.status(200).json({})

      return next()

    }, e => next(e) )

}
