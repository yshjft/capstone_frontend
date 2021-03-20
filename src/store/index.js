if (process.env.REACT_APP_ENV === 'dev') module.exports = require('./config.dev')
else module.exports = require('./config.prod')
