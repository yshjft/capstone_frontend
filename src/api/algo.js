import api from './index'

export async function getAlgoPosts() {
  try {
    const res = await api.get('/post')
    return res.data
  } catch (error) {
    throw error
  }
}
