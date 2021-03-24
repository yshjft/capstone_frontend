import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {routes} from './route'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'
import {useSelector, shallowEqual} from 'react-redux'

function App() {
  const {nickName, isLoggedIn} = useSelector(
    (state) => ({
      nickName: state.auth.nickName,
      isLoggedIn: state.auth.isLoggedIn
    }),
    shallowEqual
  )

  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn} nickName={nickName} />
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
