import {combineReducers} from 'redux'

import auth from './auth'
import algoPost from './algoPost'
import test from './test'

export default combineReducers({
  auth,
  algoPost,
  test
})
