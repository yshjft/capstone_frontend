const USER_LOGIN = 'auth/USER_LOGIN'

const initialState = {
  id: 0,
  nickName: '',
  email: ''
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {...state, ...action.payload}
    default:
      return state
  }
}
