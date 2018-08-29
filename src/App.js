import React from 'react'
import { Router, Link } from '@reach/router'
import './App.css'
import Key from './key'
import Form from './form'

const Home = () => (
  <h1 style={{ width: 400 }}>
    Refactoring React: from good to great
  </h1>
)

const App = () => (
  <React.Fragment>
    <nav>
      <Link to="/key">Dynamic list</Link> |{' '}
      <Link to="/form">Password form</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Key path="/key" />
      <Form path="/form" />
    </Router>
  </React.Fragment>
)

export default App
