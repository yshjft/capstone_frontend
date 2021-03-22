import {combineReducers} from 'redux'

import auth from './auth'
import algoPosts from './algoPosts'
import test from './test'

export default combineReducers({
  auth,
  algoPosts,
  test
})
