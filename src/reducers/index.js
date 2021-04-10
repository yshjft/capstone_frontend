import {combineReducers} from 'redux'
import auth from './auth'
import algoPost from './algoPost'
import user from './user'

export default combineReducers({
  auth,
  algoPost,
  user
})
