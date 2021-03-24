import {
  POST_JOIN,
  POST_JOIN_FINISH,
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
  POST_LOGIN_FINISH,
  GET_AUTH_CHECK,
  GET_LOGOUT
} from '../actions/auth'

const initialState = {
  isLoading: false,
  id: 0,
  nickName: '',
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
    default:
      return state
  }
}
