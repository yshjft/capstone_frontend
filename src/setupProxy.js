const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.API_BASE_URL,
      changeOrigin: true
    })
  )
}
