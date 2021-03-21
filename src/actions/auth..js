import * as authApi from '../api/auth'

export const POST_AUTH = 'POST_AUTH'
export const POST_AUTH_SUCCESS = 'POST_AUTH_SUCCESS'
export const POST_AUTH_ERROR = 'POST_AUTH_ERROR'
export const POST_AUTH_FINISH = 'POST_AUTH_FINISH'

export const postAuth = ({email, password}) => {
  return async (dispatch, state) => {
    dispatch({type: POST_AUTH})
    try {
      const payload = await authApi.postAuth({email, password})
      dispatch({type: POST_AUTH_SUCCESS, payload})
    } catch (error) {
      dispatch({type: POST_AUTH_ERROR})
      throw error
    } finally {
      dispatch({type: POST_AUTH_FINISH})
    }
  }
}
