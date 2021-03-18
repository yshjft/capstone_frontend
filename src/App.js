import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {routes} from './route'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
