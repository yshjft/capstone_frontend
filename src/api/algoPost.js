import api from './index'

export async function postAlgoPost(data) {
  try {
    const res = await api.post('/posts', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function getAlgoPosts(page) {
  try {
    const res = await api.get(`/posts?start=${page - 1}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function getAlgoPost(postWriter, postId) {
  try {
    const res = await api.get(`/posts/${postId}?writer=${postWriter}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function getEditAlgoPost(postId) {
  try {
    const res = await api.get(`/posts/edit/${postId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function putAlgoPost(postId, data) {
  try {
    const res = await api.put(`/posts/${postId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function postAlgoPostLike(id) {
  try {
    const res = await api.post(`/posts/like/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function deleteAlgoPostLike(id) {
  try {
    const res = await api.delete(`/posts/like/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
