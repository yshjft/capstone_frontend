import {applyMiddleware, createStore, compose} from 'redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, reducer)

export default function configStore(initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(ReduxPromise), applyMiddleware(ReduxThunk))
  )
  const persistor = persistStore(store)
  return {store, persistor}
}
