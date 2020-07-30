import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'

const Timeline = () => <h1>Timeline</h1>
const Default = () => <h1>App home page</h1>

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Timeline path="/timeline" />
        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default App
