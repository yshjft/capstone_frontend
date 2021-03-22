import {GET_ALGO_POSTS, GET_ALGO_POSTS_ERROR, GET_ALGO_POSTS_SUCCESS, GET_ALGO_POSTS_FINISH} from '../actions/algo'

const initialState = {
  isLoading: false,
  data: [],
  total: 0
}

export default function algoPostsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALGO_POSTS:
      return {...state, isLoading: true}
    case GET_ALGO_POSTS_SUCCESS:
      return {...state, ...action.payload}
    case GET_ALGO_POSTS_ERROR:
      return {...state, data: [], total: 0}
    case GET_ALGO_POSTS_FINISH:
      return {...state, isLoading: false}
    default:
      return state
  }
}
