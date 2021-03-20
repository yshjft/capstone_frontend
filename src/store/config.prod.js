import {applyMiddleware, createStore, compose} from 'redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import reducer from '../reducers'

export default function configStore(initialState) {
  return createStore(reducer, initialState, compose(applyMiddleware(ReduxPromise), applyMiddleware(ReduxThunk)))
}
