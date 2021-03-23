import {applyMiddleware, createStore} from 'redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, reducer)
const composeEnhancers = composeWithDevTools({serialize: true, trace: true})

export default function configStore(initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(ReduxPromise), applyMiddleware(ReduxThunk))
  )
  const persistor = persistStore(store)
  return {store, persistor}
}
