import {
  Avatar,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SvgIcon,
  Toolbar,
  Typography
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { getMetadata } from '../../../redux/actions/userActions';
import logo from '../../../assets/icons/dspay-horizontal.svg';
import GrainRoundedIcon from '@material-ui/icons/GrainRounded';
import { ReactComponent as AppBox } from '../../../assets/icons/boxicons/app.svg'
import { useHistory } from 'react-router';

const AuthToolbar = ({ classes, handleProfileMenuOpen, handleMobileMenuOpen, handleDrawerToggle, handleOpenBoxApp }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { name, picture } = user;
  const [barTitle, setBarTitle] = useState('')
  const menuId = 'main menu';
  const mobileMenuId = 'mobile menu';
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setBarTitle(event.target.value);
  };

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
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <div className={classes.title} >
        <img alt="logo" src={logo} className={classes.logo} />
      </div>
      <Typography gutterBottom variant="srOnly">{barTitle}</Typography>
      <FormControl size="small" variant="outlined" style={{ width: 270 }} >
        <InputLabel id="select menu">Opciones</InputLabel>
        <Select
          labelId="select menu"
          id="select item"
          value={barTitle}
          onChange={handleChange}
          label="Opciones"
        >
          <MenuItem value="" disabled >
            <em>Crear/Listar</em>
          </MenuItem>
          <MenuItem value="Menú principal" onClick={() => history.push('/auth/dashboard')} >Menú principal</MenuItem>
          <MenuItem value="Crear director / analista" onClick={() => history.push('/auth/create')} >Crear director/ analista</MenuItem>
          <MenuItem value="Listar directores / analistas" onClick={() => history.push('/auth/lists')} >Listar directores / analistas</MenuItem>

        </Select>
      </FormControl>
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
          <SvgIcon component={AppBox} viewBox="0 0 512 512" />
        </IconButton>
      </div>
    </Toolbar>
  )
}

export default AuthToolbar
