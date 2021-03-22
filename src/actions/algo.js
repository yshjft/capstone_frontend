import * as algoApi from '../api/algo'
import {GET_AUTH_CHECK} from './auth.'

export const GET_ALGO_POSTS = 'GET_ALGO_POSTS'
export const GET_ALGO_POSTS_SUCCESS = 'GET_ALGO_POSTS_SUCCESS'
export const GET_ALGO_POSTS_ERROR = 'GET_ALGO_POSTS_ERROR'
export const GET_ALGO_POSTS_FINISH = 'GET_ALGO_POSTS_FINISH'

export const getAlgoPosts = () => {
  return async (dispatch, state) => {
    dispatch({type: GET_ALGO_POSTS})
    try {
      const {isLoggedIn, id, nickName, data, total} = await algoApi.getAlgoPosts()
      dispatch({type: GET_AUTH_CHECK, payload: {isLoggedIn, id, nickName}})
      dispatch({type: GET_ALGO_POSTS_SUCCESS, payload: {data, total}})
    } catch (error) {
      // 서버 에러가 있는 경우 아예 에러 전용 창을 보여줄 수 있도록 하자
      dispatch({type: GET_ALGO_POSTS_ERROR})
    } finally {
      dispatch({type: GET_ALGO_POSTS_FINISH})
    }
  }
}
