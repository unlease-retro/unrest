import * as Webhooks from './service'
import { connector as BotConnector, service as BotService } from '../bot'
import co from 'co'
export const notify = (req, res, next) => {

  return Webhooks.notify(req.body)
    .then( () => {

      res.status(200).json({})

      return next()

    }, e => next(e) )

}

export const receiveSms = (req, res, next) => {

  const { Body, From } = req.body

  return co(function*() {

    try {

      var db = yield BotConnector

      return BotService.createReply({ createdAt: `${Date.now()}`, host: true, message: Body, thread: From }, db)
        .then( () => BotService.advertByPhoneNumber({ phoneNumber: From }, db) )
        .then( advert => Webhooks.notify({ text: `SMS received from ${From}: ${Body}, go to http://local.unlease.io:7000/bot/${advert._id} to reply` }) )
        .then( () => {

          res.status(200).json({})
          
          return next()

        }, e => next(e))

    } catch (e) {

      return next(e)

    }
    
  })

}

export const updatePhone = (req, res, next) => {

  const [ userId, contactNumber ] = req.body.text.split(' ')

  return Webhooks.updatePhone(userId, contactNumber)
    .then( json => {

      res.status(200).json(json)

      return next()

    }, e => next(e) )

}
