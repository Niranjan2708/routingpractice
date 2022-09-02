import {BrowserRouter, Router, Switch} from 'react-router-dom'

import NotFound from './components/NotFound'

import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Router exact path="/" component={Home} />
      <Router exact path="/About" component={About} />
      <Router exact path="/Contact" component={Contact} />
      <Router component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
