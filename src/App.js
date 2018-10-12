import React from 'react'
import { Router, Link } from '@reach/router'
import './App.css'
import Spaghetti from './spaghetti'
import List from './list'
import Password from './password'
import Controlled from './controlled'
import Drill from './drill'

const Home = () => (
  <h1 style={{ width: 400 }}>
    Refactoring React: from good to great
  </h1>
)

const App = () => (
  <React.Fragment>
    <nav>
      <Link to="/spaghetti">Spaghetti</Link> |{' '}
      <Link to="/list">Dynamic list</Link> |{' '}
      <Link to="/controlled">Controlled input</Link> |{' '}
      <Link to="/password">Password form</Link> |{' '}
      <Link to="/drill">Drill</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Spaghetti path="/spaghetti" />
      <List path="/list" />
      <Controlled path="/controlled" />
      <Password path="/password" />
      <Drill path="/drill" />
    </Router>
  </React.Fragment>
)

export default App
