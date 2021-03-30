import api from './index'

export async function getAlgoPosts(page) {
  try {
    const res = await api.get(`/post?start=${page - 1}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function postAlgoPost(data) {
  try {
    const res = await api.post('/post', data)
    return res.data
  } catch (error) {
    throw error
  }
}
