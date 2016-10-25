/**
  * @desc Utils - general utility functions
*/

export const isDevelopment = process.env.NODE_ENV === 'development'

export const getBasicAuth = () => require('btoa')('unlease-api:secret')
