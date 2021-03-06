import * as authApi from '../api/auth'

export const POST_JOIN = 'POST_JOIN'
export const POST_JOIN_FINISH = 'POST_JOIN_FINISH'
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

export const POST_LOGIN = 'POST_LOGIN'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_ERROR = 'POST_LOGIN_ERROR'
export const POST_LOGIN_FINISH = 'POST_LOGIN_FINISH'
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

export const GET_LOGOUT = 'GET_LOGOUT'
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

export const GET_AUTH_CHECK = 'GET_AUTH_CHECK'
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

export const GET_PASSWORD_SEARCH = 'GET_PASSWORD_SEARCH'
export const GET_PASSWORD_SEARCH_FINISH = 'GET_PASSWORD_SEARCH_FINISH'
export const getPasswordSearch = (email) => {
  return async (dispatch, state) => {
    dispatch({type: GET_PASSWORD_SEARCH})
    try {
      await authApi.getPasswordSearch(email)
    } catch (error) {
      throw error
    } finally {
      dispatch({type: GET_PASSWORD_SEARCH_FINISH})
    }
  }
}

export const PUT_USER_INFO = 'PUT_USER_INFO'
export const PUT_USER_INFO_SUCCESS = 'PUT_USER_INFO_SUCCESS'
export const PUT_USER_INFO_FINISH = 'PUT_USER_INFO_FINISH'
export const putUserInfo = (data, editType) => {
  return async (dispatch, state) => {
    dispatch({type: PUT_USER_INFO})
    try {
      const payload = await authApi.putUserInfo(data, editType)
      dispatch({type: PUT_USER_INFO_SUCCESS, payload})
    } catch (error) {
      throw error
    } finally {
      dispatch({type: PUT_USER_INFO_FINISH})
    }
  }
}

export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_FINISH = 'DELETE_USER_FINISH'
export const deleteUser = () => {
  return async (dispatch, state) => {
    dispatch({type: DELETE_USER})
    try {
      await authApi.deleteUser()
      dispatch({type: GET_LOGOUT})
    } catch (error) {
      throw error
    } finally {
      dispatch({type: DELETE_USER_FINISH})
    }
  }
}
