import api from './index'

export async function getUserInfo(userNickName, year, tab, tabPage) {
  try {
    const res = await api.get(`/users/${userNickName}?year=${year}&tab=${tab}&tabPage=${tabPage}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function postUserFollow(followingId) {
  try {
    const res = await api.post(`/users/${followingId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function deleteUserFollow(followingId) {
  try {
    const res = await api.post(`/users/${followingId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
