const dotenv = require('dotenv')

if (process.env.NODE_ENV != 'production') {
    dotenv.config();
}

const corsClientDomain =  process.env.CORS_CLIENT_DOMAIN
const mongoDBUrl = process.env.MONGODB_URL

module.exports = { corsClientDomain, mongoDBUrl }