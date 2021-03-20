import * as testApi from '../api/test'

export const GET_HELLO_WORLD = 'GET_HELLO_WORLD'

export const getHelloWorld = () => {
  return async (dispatch, state) => {
    try {
      const payload = await testApi.getHelloWorld()
      dispatch({type: GET_HELLO_WORLD, payload})
    } catch (error) {
      throw error
    }
  }
}
