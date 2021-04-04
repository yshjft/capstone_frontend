import * as algoApi from '../api/algoPost'
import {GET_AUTH_CHECK} from './auth'

export const GET_ALGO_POSTS = 'GET_ALGO_POSTS'
export const GET_ALGO_POSTS_SUCCESS = 'GET_ALGO_POSTS_SUCCESS'
export const GET_ALGO_POSTS_ERROR = 'GET_ALGO_POSTS_ERROR'
export const GET_ALGO_POSTS_FINISH = 'GET_ALGO_POSTS_FINISH'

export const getAlgoPosts = (page) => {
  return async (dispatch, state) => {
    dispatch({type: GET_ALGO_POSTS})
    try {
      const {auth, data, total} = await algoApi.getAlgoPosts(page)
      dispatch({type: GET_AUTH_CHECK, payload: auth})
      dispatch({type: GET_ALGO_POSTS_SUCCESS, payload: {data, total}})
    } catch (error) {
      // 서버 에러가 있는 경우 아예 에러 전용 창을 보여줄 수 있도록 하자
      dispatch({type: GET_ALGO_POSTS_ERROR})
      throw error
    } finally {
      dispatch({type: GET_ALGO_POSTS_FINISH})
    }
  }
}

export const POST_ALGO_POST = 'POST_ALGO_POST'
export const POST_ALGO_POST_FINISH = 'POST_ALGO_POST_FINISH'

export const postAlgoPost = (title, language, isPublic, code, memo) => {
  return async (dispatch, state) => {
    dispatch({type: POST_ALGO_POST})
    try {
      await algoApi.postAlgoPost({title, language, public: isPublic, code, memo})
    } catch (error) {
      throw error
    } finally {
      dispatch({type: POST_ALGO_POST_FINISH})
    }
  }
}

export const GET_ALGO_POST = 'GET_ALGO_POST'
export const GET_ALGO_POST_SUCCESS = 'GET_ALGO_POST_SUCCESS'
export const GET_ALGO_POST_ERROR = 'GET_ALGO_POST_ERROR'
export const GET_ALGO_POST_FINISH = 'GET_ALGO_POST_FINISH'

export const getAlgoPost = (postWriter, postId) => {
  return async (dispatch, state) => {
    dispatch({type: GET_ALGO_POST})
    try {
      const {auth, data} = await algoApi.getAlgoPost(postWriter, postId)
      dispatch({type: GET_AUTH_CHECK, payload: auth})
      dispatch({type: GET_ALGO_POST_SUCCESS, payload: data})
    } catch (error) {
      dispatch({type: GET_ALGO_POST_ERROR})
      throw error
    } finally {
      dispatch({type: GET_ALGO_POST_FINISH})
    }
  }
}

export const POST_ALGO_POST_LIKE = 'POST_ALGO_POST_LIKE'

export const postAlgoPostLike = (postId) => {
  return async (dispatch, state) => {
    try {
      const {likeNum} = await algoApi.postAlgoPostLike(postId)
      dispatch({type: POST_ALGO_POST_LIKE, payload: likeNum})
    } catch (error) {
      throw error
    }
  }
}

export const DELETE_ALGO_POST_LIKE = 'DELETE_ALGO_POST_LIKE'

export const deleteAlgoPostLike = (postId) => {
  return async (dispatch, state) => {
    try {
      const {likeNum} = await algoApi.deleteAlgoPostLike(postId)
      dispatch({type: DELETE_ALGO_POST_LIKE, payload: likeNum})
    } catch (error) {
      throw error
    }
  }
}
