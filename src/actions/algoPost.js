import * as algoApi from '../api/algoPost'
import {GET_AUTH_CHECK} from './auth'

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

export const GET_ALGO_POSTS = 'GET_ALGO_POSTS'
export const GET_ALGO_POSTS_SEARCH = 'GET_ALGO_POST_SEARCH'
export const GET_ALGO_POSTS_SUCCESS = 'GET_ALGO_POSTS_SUCCESS'
export const GET_ALGO_POSTS_ERROR = 'GET_ALGO_POSTS_ERROR'
export const GET_ALGO_POSTS_FINISH = 'GET_ALGO_POSTS_FINISH'
export const getAlgoPosts = (page, search, langFilter) => {
  return async (dispatch, state) => {
    // if (bySearch) dispatch({type: GET_ALGO_POSTS_SEARCH})
    // else dispatch({type: GET_ALGO_POSTS})
    dispatch({type: GET_ALGO_POSTS})
    try {
      const {auth, data, total} = await algoApi.getAlgoPosts(page, search, langFilter)
      dispatch({type: GET_AUTH_CHECK, payload: auth})
      dispatch({type: GET_ALGO_POSTS_SUCCESS, payload: {data, total}})
    } catch (error) {
      dispatch({type: GET_ALGO_POSTS_ERROR})
      throw error
    } finally {
      dispatch({type: GET_ALGO_POSTS_FINISH})
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

export const GET_EDIT_ALGO_POST = 'GET_EDIT_ALGO_POST'
export const GET_EDIT_ALGO_POST_SUCCESS = 'GET_EDIT_ALGO_POST_SUCCESS'
export const GET_EDIT_ALGO_POST_ERROR = 'GET_EDIT_ALGO_POST_ERROR'
export const GET_EDIT_ALGO_POST_FINISH = 'GET_EDIT_ALGO_POST_FINISH'
export const getEditAlgoPost = (postId) => {
  return async (dispatch, state) => {
    dispatch({type: GET_EDIT_ALGO_POST})
    try {
      const {data} = await algoApi.getEditAlgoPost(postId)
      dispatch({type: GET_EDIT_ALGO_POST_SUCCESS, payload: data})
    } catch (error) {
      dispatch({type: GET_EDIT_ALGO_POST_ERROR})
      throw error
    } finally {
      dispatch({type: GET_EDIT_ALGO_POST_FINISH})
    }
  }
}

export const PUT_AlGO_POST = 'PUT_ALGO_POST'
export const PUT_ALGO_POST_FINISH = 'PUT_ALGO_POST_FINISH'
export const putAlgoPost = (postId, title, language, isPublic, code, memo) => {
  return async (dispatch, state) => {
    dispatch({type: PUT_AlGO_POST})
    try {
      await algoApi.putAlgoPost(postId, {title, language, public: isPublic, code, memo})
    } catch (error) {
      throw error
    } finally {
      dispatch({type: PUT_ALGO_POST_FINISH})
    }
  }
}

export const DELETE_ALGO_POST = 'DELETE_ALGO_POST'
export const DELETE_ALGO_POST_FINISH = 'DELETE_ALGO_POST_FINISH'
export const deleteAlgoPost = (postId) => {
  return async (dispatch, state) => {
    dispatch({type: DELETE_ALGO_POST})
    try {
      await algoApi.deleteAlgoPost(postId)
    } catch (error) {
      throw error
    } finally {
      dispatch({type: DELETE_ALGO_POST_FINISH})
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
