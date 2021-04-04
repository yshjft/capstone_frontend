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
  GET_ALGO_POST_FINISH,
  POST_ALGO_POST_LIKE,
  DELETE_ALGO_POST_LIKE
} from '../actions/algoPost'
import {act} from '@testing-library/react'

const initialState = {
  isLoading: false,
  isSending: false,
  total: 0,
  data: [],
  dataDetail: {
    id: 0,
    title: '',
    language: 'c_cpp',
    createdAt: '',
    updatedAt: '',
    writerId: 0,
    writer: '',
    likeNum: 0,
    like: false,
    code: '',
    memo: ''
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
          language: 'c_cpp',
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
    case POST_ALGO_POST_LIKE:
    case DELETE_ALGO_POST_LIKE:
      const cpyDataDetail = {
        ...state.dataDetail,
        like: action.type === POST_ALGO_POST_LIKE ? true : false,
        likeNum: action.payload
      }
      state.dataDetail = cpyDataDetail
      return state
    default:
      return state
  }
}
