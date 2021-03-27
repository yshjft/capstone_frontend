import {combineReducers} from 'redux'

import auth from './auth'
import algoPosts from './algoPost'
import test from './test'

export default combineReducers({
  auth,
  algoPosts,
  test
})
