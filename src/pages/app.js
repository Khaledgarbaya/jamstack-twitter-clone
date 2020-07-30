import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Login from '../components/login'
import PrivateRoute from '../components/private-route'
const Timeline = () => <h1>Timeline</h1>
const Default = () => <h1>App home page</h1>

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute
          path="/timeline"
          component={Timeline}
        />
        <Default path="/" />
        <Login path="/login" />
      </Router>
    </Layout>
  )
}

export default App
