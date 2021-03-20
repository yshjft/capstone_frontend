import {combineReducers} from 'redux'

import auth from './auth'
import test from './test'

export default combineReducers({
  auth,
  test
})
