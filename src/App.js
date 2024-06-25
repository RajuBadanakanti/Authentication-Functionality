import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
// import Header from './components/Header'
import Login from './components/Login'
import About from './components/About'
// import LogoutButton from './components/LogoutButton'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)
export default App
