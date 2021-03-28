import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import createStore from './store/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const {store, persistor} = createStore()

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
)
