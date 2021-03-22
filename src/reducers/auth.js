import {POST_AUTH, POST_AUTH_SUCCESS, POST_AUTH_ERROR, POST_AUTH_FINISH, GET_AUTH_CHECK} from '../actions/auth.'

const initialState = {
  isLoading: false,
  id: 0,
  nickName: '',
  isLoggedIn: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case POST_AUTH:
      return {...state, isLoading: true}
    case POST_AUTH_SUCCESS:
      return {...state, ...{...action.payload, isLoggedIn: true}}
    case POST_AUTH_ERROR:
      return {...state, ...{...action.payload, isLoggedIn: false}}
    case POST_AUTH_FINISH:
      return {...state, isLoading: false}
    case GET_AUTH_CHECK:
      return {...state, ...action.payload}
    default:
      return state
  }
}
