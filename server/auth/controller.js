import * as Auth from './service'

export const login = (req, res, next) => {

  return Auth.login(req.body)
    .then( auth => {

      res.status(200).json({ ...auth })

      return next()

    }, e => next(e) )

}

export const refresh = (req, res, next) => {

  return Auth.refresh(req.body)
    .then( auth => {

      res.json({ ...auth })

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}
