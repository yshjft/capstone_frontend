import {
  POST_JOIN,
  POST_JOIN_FINISH,
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
  POST_LOGIN_FINISH,
  GET_AUTH_CHECK,
  GET_LOGOUT,
  PUT_USER_INFO,
  PUT_USER_INFO_SUCCESS,
  PUT_USER_INFO_FINISH,
  DELETE_USER,
  DELETE_USER_FINISH,
  GET_PASSWORD_SEARCH,
  GET_PASSWORD_SEARCH_FINISH
} from '../actions/auth'

const initialState = {
  isLoading: false,
  id: 0,
  nickName: '',
  email: '',
  isLoggedIn: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LOGIN:
      return {...state, isLoading: true}
    case POST_LOGIN_SUCCESS:
      return {...state, ...{...action.payload, isLoggedIn: true}}
    case POST_LOGIN_ERROR:
      return {...state, ...{...action.payload, isLoggedIn: false}}
    case POST_LOGIN_FINISH:
      return {...state, isLoading: false}
    case GET_AUTH_CHECK:
      return {...state, ...action.payload}
    case GET_LOGOUT:
      return {...state, id: 0, nickName: '', isLoggedIn: false}
    case POST_JOIN:
      return {...state, isLoading: true}
    case POST_JOIN_FINISH:
      return {...state, isLoading: false}
    case PUT_USER_INFO:
      return {...state, isLoading: true}
    case PUT_USER_INFO_SUCCESS:
      return {...state, ...{...action.payload}}
    case PUT_USER_INFO_FINISH:
      return {...state, isLoading: false}
    case DELETE_USER:
      return {...state, isLoading: true}
    case DELETE_USER_FINISH:
      return {...state, isLoading: false}
    case GET_PASSWORD_SEARCH:
      return {...state, isLoading: true}
    case GET_PASSWORD_SEARCH_FINISH:
      return {...state, isLoading: false}
    default:
      return state
  }
}
