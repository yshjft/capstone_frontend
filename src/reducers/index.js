import {combineReducers} from 'redux'

import auth from './auth'
import algoPost from './algoPost'

export default combineReducers({
  auth,
  algoPost
})
