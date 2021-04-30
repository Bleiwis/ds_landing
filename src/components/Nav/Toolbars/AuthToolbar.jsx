import { Avatar, IconButton, Toolbar, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { getMetadata } from '../../../redux/actions/userActions';
import logo from '../../../assets/icons/dspay-horizontal.svg'
import GrainRoundedIcon from '@material-ui/icons/GrainRounded';

const AuthToolbar = ({ classes, handleProfileMenuOpen, handleMobileMenuOpen, handleDrawerToggle, handleOpenBoxApp }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { name, picture } = user;
  const menuId = 'main menu';
  const mobileMenuId = 'mobile menu';
  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently()
      const userID = user.sub
      dispatch(getMetadata(token, userID))
    }
    getToken()
  }, [])

  return (
    <Toolbar>
      <img src={logo} alt="logo" className={classes.logo} />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <IconButton aria-label="open app box" color="inherit" onClick={handleOpenBoxApp} >
          {/* <Badge badgeContent={1} color="primary">
            <NotificationsIcon />
          </Badge> */}
          <GrainRoundedIcon fontSize="large" />
        </IconButton>
        <div>
          <Typography gutterBottom className={classes.labelName}>{name.toUpperCase()}</Typography>
        </div>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Avatar src={picture} alt={name} />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
    </Toolbar>
  )
}

export default AuthToolbar
