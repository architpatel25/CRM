'use strict'
require('dotenv').config()
const getCurrentDate = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = (now.getMonth() + 1).toString().padStart(2, '0')
  const day = now.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

module.exports = {
  logGroupName: 'groupName',
  environment: process.env.ENVIRONMENT,
  logStreamName: `errors-${getCurrentDate()}`,
  sendGridApiKey: process.env.SENDGRID_API_KEY,
  fromEmail: process.env.FROM_EMAIL,
  superAdminBaseUrl: process.env.SUPER_ADMIN_BACKEND_BASE_URL,
  internalApiCallingSecretKey: process.env.INTERNAL_API_CALLING_SECRET_KEY,
  mediaBaseUrl: process.env.MEDIA_BASE_URL,
  jwtExpiry: process.env.JWT_EXPIRY,
  jwtAlgorithm: process.env.JWT_ALGORITHM,
  aesKey: process.env.AES_KEY,
}
