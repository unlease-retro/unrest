import * as Webhooks from './service'

export const notify = (req, res, next) => {

  return Webhooks.notify(req.body)
    .then( () => {

      res.status(200).json({})

      return next()

    }, e => next(e) )

}

export const receiveSms = (req, res, next) => {

  const { body, from } = req.body

  return Webhooks.notify({ text: `SMS received from ${from}: ${body}` })
    .then( (res) => {

      res.status(200).json({})

      return next()

    }, e => next(e) )

}

export const sendSms = (req, res, next) => {

  return Webhooks.sendSms(req.body)
    .then( () => {

      res.status(200).json({})

      return next()

    }, e => next(e) )

}
