require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 4000,
  dbUser: process.env.DB_USER,
  dbPasword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
  apikey: process.env.API_KEY,
  claveK: process.env.JWT_SECRETO,
  smtpEmail: process.env.SMTPUSER,
  smtpPass: process.env.SMTPPASS,
}

module.exports = { config };
