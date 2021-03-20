import api from './index'

export async function getHelloWorld() {
  try {
    const res = await api.get('/test/hello_world')
    return res.data
  } catch (error) {
    throw error
  }
}
