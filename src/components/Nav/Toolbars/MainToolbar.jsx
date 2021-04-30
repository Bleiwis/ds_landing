import React from 'react'
import { Toolbar, Button } from '@material-ui/core'
import logo from '../../../assets/icons/dspay-horizontal.svg';
import { useAuth0 } from '@auth0/auth0-react';

const MainToolbar = ({ classes }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Toolbar>
      <div className={classes.title} >
        <img alt="logo" src={logo} className={classes.logo} />
      </div>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop} >

        <Button onClick={() => loginWithRedirect()}>EMPEZAR</Button>

      </div>
    </Toolbar>
  )
}

export default MainToolbar
