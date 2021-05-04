import React, { useState } from 'react'
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  SvgIcon,
  Typography,
} from '@material-ui/core'
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
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import { ReactComponent as dashboard } from '../../assets/icons/boxicons/dashboard.svg'

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
  boxApp: {
    width: 260,
    height: 300,
    padding: 5
  }

}));


const NavigationBar = () => {
  const classes = useStyles();
  const { isAuthenticated, logout } = useAuth0();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [boxAnchorel, setBoxAnchorel] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const boxApp = Boolean(boxAnchorel);
  const [mobileOpen, setMobileOpen] = useState(false);
  const LoguedBarsId = 'logued bars id';
  const mobileMenuId = 'menu mobile';
  const menuId = 'menu desktop';
  const appbox = 'box of aplications';
  const sesionAuth = document.cookie = 'auth0.is.authenticated'
  const legacyAuth = document.cookie = '_legacy_auth0.is.authenticated'
  const cookies = [{
    sesionAuth: sesionAuth,
    legacyAuth: legacyAuth
  }]

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

  const handleOpenBoxApp = (event) => {
    setBoxAnchorel(event.currentTarget);
    console.log('funciona')
  }

  const handleCloseBoxApp = () => {
    setBoxAnchorel(null);
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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

  const renderBoxAplications = (
    <Popover
      elevation={1}
      anchorEl={boxAnchorel}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={appbox}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={boxApp}
      onClose={handleCloseBoxApp}
    >

      <Grid container spacing={1} justify="space-evenly" alignItems="center" className={classes.boxApp}>
        <Grid item xs={4} sm={4}>
          <IconButton href={`https://dashboard.cris-mur.tech`}>
            <SvgIcon component={dashboard} viewBox="0 0 32 32" style={{ fontSize: 60 }} />
          </IconButton>
          <Typography align="center">Principal</Typography>
        </Grid>
        <Grid item xs={4} sm={4}>
          <IconButton>
            <DashboardRoundedIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={4} sm={4}>
          <IconButton>
            <DashboardRoundedIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={4} sm={4}>
          <IconButton>
            <DashboardRoundedIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Popover >
  )


  return (
    <AppBar elevation={1} className={classes.appBar}>
      <Fragment>
        {isAuthenticated ?
          (
            <AuthToolbar
              classes={classes}
              id={LoguedBarsId}
              handleProfileMenuOpen={handleProfileMenuOpen}
              handleMobileMenuOpen={handleMobileMenuOpen}
              handleDrawerToggle={handleDrawerToggle}
              handleOpenBoxApp={handleOpenBoxApp}

            />
          )
          :
          (<MainToolbar classes={classes} />)}
        {renderMobileMenu}
        {renderMenu}
        {renderBoxAplications}
      </Fragment>
    </AppBar>
  )
}

export default NavigationBar
