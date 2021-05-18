import React, { useState } from 'react'
import { Toolbar, Button } from '@material-ui/core'
import logo from '../../../assets/icons/dspay-horizontal.svg';
import { useAuth0 } from '@auth0/auth0-react';

const MainToolbar = ({ classes }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [auth, setAuth] = useState(isAuthenticated);
  // useEffect(() => {
  //   if (isAuthenticated) { loginWithRedirect() }
  //   setAuth(!auth)
  // }, [])

  return (
    <Toolbar>
      <div className={classes.title} >
        <img alt="logo" src={logo} className={classes.logo} />
      </div>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop} >
        {
          auth ? () => {
            isAuthenticated()
            console.log(auth)
          } : (<Button onClick={() => loginWithRedirect()}>EMPEZAR</Button>)
        }
      </div>
    </Toolbar>
  )
}

export default MainToolbar
