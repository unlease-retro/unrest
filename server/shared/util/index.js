/**
  * @desc Utils - general utility functions
*/

export const isDevelopment = process.env.NODE_ENV === 'development'

export const getBasicAuth = () => require('btoa')('unlease-api:secret')

export const getRandomDigits = (count=3) => {

  const base = Math.pow(10, (count - 1))

  return Math.floor( Math.random() * 9 * base ) + base

}
