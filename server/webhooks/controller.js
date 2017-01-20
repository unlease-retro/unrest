import * as Webhooks from './service'

export const test = (req, res, next) => {

  return Webhooks.test(req.body)
    .then( () => {

      res.status(200).json({})

      return next()

    }, e => next(e) )

}
