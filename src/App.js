import React from 'react'
import { Router, Link } from '@reach/router'
import './App.css'
import List from './list'
import Form from './form'
import Controlled from './controlled'

const Home = () => (
  <h1 style={{ width: 400 }}>
    Refactoring React: from good to great
  </h1>
)

const App = () => (
  <React.Fragment>
    <nav>
      <Link to="/list">Dynamic list</Link> |{' '}
      <Link to="/form">Password form</Link> |{' '}
      <Link to="/controlled">Controlled input</Link>
    </nav>
    <Router>
      <Home path="/" />
      <List path="/list" />
      <Form disabled={false} path="/form" />
      <Controlled path="/controlled" />
    </Router>
  </React.Fragment>
)

export default App
