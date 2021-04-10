import api from './index'

export async function getUserInfo(userNickName, year, tab, tabPage) {
  try {
    const res = await api.get(`/users/${userNickName}?year=${year}&tab=${tab}&tabPage=${tabPage}`)
    return res.data
  } catch (error) {
    throw error
  }
}
