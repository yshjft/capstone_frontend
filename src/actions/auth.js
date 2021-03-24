import * as authApi from '../api/auth'

export const POST_JOIN = 'POST_JOIN'
export const POST_JOIN_FINISH = 'POST_JOIN_FINISH'
export const POST_LOGIN = 'POST_LOGIN'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_ERROR = 'POST_LOGIN_ERROR'
export const POST_LOGIN_FINISH = 'POST_LOGIN_FINISH'
export const GET_AUTH_CHECK = 'GET_AUTH_CHECK'
export const GET_LOGOUT = 'GET_LOGOUT'

export const postJoin = ({email, nickName, password}) => {
  return async (dispatch, state) => {
    dispatch({type: POST_JOIN})
    try {
      await authApi.postJoin({email, nickName, password})
    } catch (error) {
      throw error
    } finally {
      dispatch({type: POST_JOIN_FINISH})
    }
  }
}

export const postLogin = ({email, password}) => {
  return async (dispatch, state) => {
    dispatch({type: POST_LOGIN})
    try {
      const payload = await authApi.postLogin({email, password})
      dispatch({type: POST_LOGIN_SUCCESS, payload})
    } catch (error) {
      dispatch({type: POST_LOGIN_ERROR})
      throw error
    } finally {
      dispatch({type: POST_LOGIN_FINISH})
    }
  }
}

export const getAuthCheck = () => {
  return async (dispatch, state) => {
    try {
      const payload = await authApi.getAuthCheck()
      dispatch({type: GET_AUTH_CHECK, payload})
      return payload
    } catch (error) {
      throw error
    }
  }
}

export const getLogout = () => {
  return async (dispatch, state) => {
    try {
      await authApi.getLogOut()
      dispatch({type: GET_LOGOUT})
    } catch (error) {
      throw error
    }
  }
}
