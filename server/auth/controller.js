import * as Auth from './service'

export const login = (req, res, next) => {

  return Auth.login(req.body)
    .then( ({ status, json }) => {

      res.status(status).json(json)

      return next()

    }, e => next(e) )

}

export const refresh = (req, res, next) => {

  return Auth.refresh(req.body)
    .then( ({ status, json }) => {

      res.status(status).json(json)

      return next()

    }, e => next(e) )

}
