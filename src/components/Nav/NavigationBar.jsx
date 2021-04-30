import React, { useState } from 'react'
import { AppBar, Badge, IconButton, Menu, MenuItem, } from '@material-ui/core'
import { Fragment } from 'react'
import AuthToolbar from './Toolbars/AuthToolbar'
import MainToolbar from './Toolbars/MainToolbar'
import { makeStyles } from '@material-ui/core'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    width: '100%',
    backgroundColor: '#FFF'
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logo: {
    marginLeft: 15,
    height: 35,
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  role: {
    marginLeft: 15,
    marginRight: 15,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  sectionDesktop: {
    alignItems: 'center',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  labelName: {
    cursor: 'default'
  },
  nested: {
    paddingLeft: 30,
  },

}));


const NavigationBar = () => {
  const classes = useStyles();
  const { isAuthenticated, logout } = useAuth0();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const LoguedBarsId = 'logued bars id';


  <AuthToolbar
    classes={classes}
    id={LoguedBarsId}
    handleProfileMenuOpen={handleProfileMenuOpen}
    handleMobileMenuOpen={handleMobileMenuOpen}
    handleDrawerToggle={handleDrawerToggle}
  />


  const menuId = 'menu desktop';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => history.push('/auth/profile')}>Perfil</MenuItem>
      <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'menu mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show new mails" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Mensajes</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show new notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notificaciones</p>
      </MenuItem>
      <MenuItem onClick={() => history.push('/auth/profile')}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
      <MenuItem onClick={logout}>
        <IconButton>
          <ExitToAppIcon />
        </IconButton>
        <p>Salir</p>
      </MenuItem>
    </Menu>
  );


  return (
    <AppBar className={classes.appBar}>
      <Fragment>
        {isAuthenticated ? (
          <AuthToolbar
            classes={classes}
            id={LoguedBarsId}
            handleProfileMenuOpen={handleProfileMenuOpen}
            handleMobileMenuOpen={handleMobileMenuOpen}
            handleDrawerToggle={handleDrawerToggle}
          />) :
          (<MainToolbar classes={classes} />)}
        {renderMobileMenu}
        {renderMenu}
      </Fragment>
    </AppBar>
  )
}

export default NavigationBar
