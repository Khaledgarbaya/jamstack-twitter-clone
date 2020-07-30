import React from 'react'
import { navigate } from 'gatsby'
import { isLoggedIn, isBrowser } from '../utils/auth'
const PrivateRoute = ({
  component: Component,
  location,
  ...rest
}) => {
  if (
    isBrowser() &&
    !isLoggedIn() &&
    location.pathname !== `/app/login`
  ) {
    navigate('/app/login')
    return null
  }
  return <Component {...rest} />
}

export default PrivateRoute
