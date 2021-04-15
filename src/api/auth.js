import api from './index'

export async function postJoin(data) {
  try {
    const res = await api.post('/auth/join', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function postLogin(data) {
  try {
    const res = await api.post('/auth/login', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function getAuthCheck() {
  try {
    const res = await api.get('/auth/authCheck')
    return res.data
  } catch (error) {
    throw error
  }
}

export async function getLogOut() {
  try {
    const res = await api.get('/auth/logout')
    return res.data
  } catch (error) {
    throw error
  }
}

export async function putUserInfo(data, editType) {
  try {
    const res = await api.put(`/auth/edit?editType=${editType}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function deleteUser() {
  try {
    await api.delete('/auth/quit')
  } catch (error) {
    throw error
  }
}
