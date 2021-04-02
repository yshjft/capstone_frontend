import {
  GET_ALGO_POSTS,
  GET_ALGO_POSTS_ERROR,
  GET_ALGO_POSTS_SUCCESS,
  GET_ALGO_POSTS_FINISH,
  POST_ALGO_POST,
  POST_ALGO_POST_FINISH,
  GET_ALGO_POST,
  GET_ALGO_POST_ERROR,
  GET_ALGO_POST_SUCCESS,
  GET_ALGO_POST_FINISH
} from '../actions/algoPost'

const initialState = {
  isLoading: false,
  isSending: false,
  total: 0,
  data: [],
  dataDetail: {
    id: 0,
    title: '',
    language: '',
    createdAt: '',
    updatedAt: '',
    writer: '',
    likeNum: 0,
    code: '',
    memo: '',
    liek: false
  }
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
    case GET_ALGO_POST:
      return {...state, isLoading: true}
    case GET_ALGO_POST_SUCCESS:
      return {...state, dataDetail: action.payload}
    case GET_ALGO_POST_ERROR:
      return {
        ...state,
        dataDetail: {
          id: 0,
          title: '',
          language: '',
          createdAt: '',
          updatedAt: '',
          writer: '',
          likeNum: 0,
          code: '',
          memo: '',
          like: false
        }
      }
    case GET_ALGO_POST_FINISH:
      return {...state, isLoading: false}
    default:
      return state
  }
}
