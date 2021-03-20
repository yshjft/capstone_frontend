import {GET_HELLO_WORLD} from '../actions/test'

const initialState = {
  greeting: ''
}

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HELLO_WORLD:
      return {...state, ...action.payload}
    default:
      return state
  }
}
