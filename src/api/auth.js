import api from './index'

export async function postAuth(data) {
  try {
    const res = await api.post('/auth/login', data)
    return res.data
  } catch (error) {
    throw error
  }
}
