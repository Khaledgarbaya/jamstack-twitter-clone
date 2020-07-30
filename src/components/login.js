import React from 'react'
import { navigate } from 'gatsby'
import {
  handleLogin,
  isLoggedIn,
  isBrowser
} from '../utils/auth'

const Login = () => {
  if (isBrowser() && isLoggedIn()) {
    navigate('/app/timeline')
    return null
  }
  return (
    <div>
      <h1>Please Login</h1>
      <button
        onClick={() =>
          handleLogin(() => navigate('/app/timeline'))
        }
      >
        Login
      </button>
    </div>
  )
}

export default Login
