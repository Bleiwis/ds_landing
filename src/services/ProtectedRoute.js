import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Route } from 'react-router'
import Dashboard from '../pages/auth/dashboard/'

const ProtectedRoute = ({ component, ...args }) => {

  return (
    <Route component={withAuthenticationRequired(component, { returnTo: () => <Dashboard /> })} />
  )
}

export default ProtectedRoute
