import * as userApi from '../api/user'
import {GET_AUTH_CHECK} from './auth'

export const GET_USER_INFO = 'GET_USER_INFO'
export const GET_USER_POST_LOG = 'GET_USER_POST_LOG'
export const GET_USER_TAB_POST = 'GET_USER_TAB_POST'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR'
export const GET_USER_INFO_FINISH = 'GET_USER_INFO_FINISH'
export const GET_USER_POST_LOG_FINISH = 'GET_USER_POST_LOG_FINISH'
export const GET_USER_TAB_POST_FINISH = 'GET_USER_TAB_POST_FINISH'
export const getUserInfo = (type, userNickName, year, tab, tabPage) => {
  return async (dispatch, state) => {
    dispatch({type})
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
      dispatch({type: type + '_FINISH'})
    }
  }
}

export const POST_USER_FOLLOW = 'POST_USER_FOLLOW'
export const postUserFollow = (followingId) => {
  return async (dispatch, state) => {
    try {
      const {followerNum} = await userApi.postUserFollow(followingId)
      dispatch({type: POST_USER_FOLLOW, payload: {followNum: followerNum, follow: true}})
    } catch (error) {
      throw error
    }
  }
}

export const DELETE_USER_FOLLOW = 'DELETE_USER_FOLLOW'
export const deleteUserFollow = (followingId) => {
  return async (dispatch, state) => {
    try {
      const {followerNum} = await userApi.deleteUserFollow(followingId)
      dispatch({type: DELETE_USER_FOLLOW, payload: {followNum: followerNum, follow: false}})
    } catch (error) {
      throw error
    }
  }
}
