import api from './index'

export async function getAlgoPosts() {
  try {
    const res = await api.get('/algos')
    return res.data
  } catch (error) {
    throw error
  }
}
