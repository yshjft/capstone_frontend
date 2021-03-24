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
