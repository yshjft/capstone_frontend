import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import reducer from '../reducers'

const composeEnhancers = composeWithDevTools({serialize: true, trace: true})

export default function configStore(initialState) {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(ReduxPromise), applyMiddleware(ReduxThunk))
  )
}
