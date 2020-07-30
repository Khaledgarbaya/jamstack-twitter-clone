import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/app/timeline">timeline</Link>
          </li>
          <li>
            <Link to="/app/">App</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default Layout
