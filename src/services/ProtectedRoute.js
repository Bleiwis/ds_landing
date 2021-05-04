import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Route } from 'react-router'
import Landing from '../pages/landing/Landing'

const ProtectedRoute = ({ component, ...args }) => {

  return (
    <Route component={withAuthenticationRequired(component, { returnTo: () => <Landing /> })} />
  )
}

export default ProtectedRoute
