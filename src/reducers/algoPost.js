import {
  GET_ALGO_POSTS,
  GET_ALGO_POSTS_ERROR,
  GET_ALGO_POSTS_SUCCESS,
  GET_ALGO_POSTS_FINISH,
  POST_ALGO_POST,
  POST_ALGO_POST_FINISH
} from '../actions/algoPost'

const initialState = {
  isLoading: false,
  data: [],
  total: 0,
  isSending: false
}

export default function algoPostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALGO_POSTS:
      return {...state, isLoading: true}
    case GET_ALGO_POSTS_SUCCESS:
      return {...state, ...action.payload}
    case GET_ALGO_POSTS_ERROR:
      return {...state, data: [], total: 0}
    case GET_ALGO_POSTS_FINISH:
      return {...state, isLoading: false}
    case POST_ALGO_POST:
      return {...state, isSending: true}
    case POST_ALGO_POST_FINISH:
      return {...state, isSending: false}
    default:
      return state
  }
}
