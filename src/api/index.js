import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  time: 20000
})

async function errorHandler(e) {
  console.log(`[Error Data]: ${JSON.stringify(e.response.data, null, 2)}`)
  throw e
}

if (process.env.REACT_APP_ENV === 'dev') {
  instance.interceptors.request.use(
    (config) => {
      const {url, method, params, data} = config
      console.log(process.env.REACT_APP_ENV)
      console.log(`[Request]: ${JSON.stringify({url, params, method, data}, null, 2)}`)
      return config
    },
    (error) => Promise.reject(error)
  )
  instance.interceptors.response.use((response) => {
    console.log(`[Response Data]: ${JSON.stringify(response.data, null, 2)}`)
    return response
  }, errorHandler)
} else {
  instance.interceptors.response.use((response) => response, errorHandler)
}

export default instance
