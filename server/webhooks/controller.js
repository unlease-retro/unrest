import * as Webhooks from './service'
import { connector as BotConnector, service as BotService } from '../bot'

export const notify = (req, res, next) => {

  return Webhooks.notify(req.body)
    .then( () => {

      res.status(200).json({})

      return next()

    }, e => next(e) )

}

export const receiveSms = (req, res, next) => {

  const { Body, From } = req.body

  return BotConnector
    .then( db => BotService.createReply({ createdAt: `${Date.now()}`, host: true, message: Body, thread: From }, db) )
    .then( () => Webhooks.notify({ text: `SMS received from ${From}: ${Body}` }) )
    .then( (res) => {

      res.status(200).json({})

      return next()

    }, e => next(e) )

}

export const updatePhone = (req, res, next) => {

  const [ userId, contactNumber ] = req.body.text.split(' ')

  return Webhooks.updatePhone(userId, contactNumber)
    .then( json => {

      res.status(200).json(json)

      return next()

    }, e => next(e) )

}
