import * as userApi from '../api/user'
import {GET_AUTH_CHECK} from './auth'

export const GET_USER_INFO = 'GET_USER_INFO'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR'
export const GET_USER_INFO_FINISH = 'GET_USER_INFO_FINISH'
export const getUserInfo = (userNickName, year, tab, tabPage) => {
  return async (dispatch, state) => {
    dispatch({type: GET_USER_INFO})
    try {
      const {
        auth,
        userInfo,
        postLog,
        posts = [],
        likePosts = [],
        followingUsers = [],
        total
      } = await userApi.getUserInfo(userNickName, year, tab, tabPage)
      dispatch({type: GET_AUTH_CHECK, payload: auth})
      dispatch({type: GET_USER_INFO_SUCCESS, payload: {userInfo, postLog, posts, likePosts, followingUsers, total}})
    } catch (error) {
      dispatch({type: GET_USER_INFO_ERROR})
      throw error
    } finally {
      dispatch({type: GET_USER_INFO_FINISH})
    }
  }
}
