/**
  * @desc Utils - general utility functions
*/

import R from 'ramda'

export const isDevelopment = process.env.NODE_ENV === 'development'

export const getBasicAuth = () => require('btoa')('unlease-api:secret')

export const getRandomDigits = (count=3) => {

  const base = Math.pow(10, (count - 1))

  return Math.floor( Math.random() * 9 * base ) + base

}

export const getTrimmedString = str => str.replace(/\W/g, '')

export const getDeepMerge = (a, b) => R.isArrayLike(b) && !R.is(Object, b[0]) ? b : (R.is(Object, a) && R.is(Object, b)) ? R.mergeWith(getDeepMerge, a, b) : b