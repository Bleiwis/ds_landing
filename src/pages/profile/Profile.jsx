import React, { Fragment, useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Avatar,
  Button,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { skeletonText } from '../../commons/Skeleton';
import { getMetadata } from '../../redux/actions/userActions';

const useStyles = makeStyles((theme) => ({

  tittle: {
    margin: 30
  },
  card: {
    width: 650,
    padding: 20
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center'
  },
  picture: {
    width: 80,
    height: 80,
  }

}));
const Profile = () => {
  const classes = useStyles();
  const { user, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const data = useSelector(state => state.userInfo.metadata.user)

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently()
      const userID = user.sub
      dispatch(getMetadata(token, userID))
    }
    getToken()
  }, [])

  return (
    <div>
      <div className={classes.tittle}>
        <Typography variant="h5" align="center" > Información personal</Typography>
        <Typography align="center"  >Información básica, como el nombre y la foto, que utilizas en DS-PAY</Typography>
      </div>
      <Grid container alignItems="center" justify="center">
        <Card className={classes.card}>
          <Grid item xs={12} md={12}>
            <div className={classes.avatar}>
              <Avatar src={data?.picture} alt="photo" className={classes.picture} />
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <AssignmentIndRoundedIcon fontSize="large" />
                </ListItemAvatar>
                <ListItemText primary="NOMBRE Y APELLIDO" secondary={data ? data?.name : skeletonText} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <AlternateEmailRoundedIcon fontSize="large" />
                </ListItemAvatar>
                <ListItemText primary="CORREO ELECTRÓNICO" secondary={data ? data?.email : skeletonText} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <AccountCircleRoundedIcon fontSize="large" />
                </ListItemAvatar>
                <ListItemText primary="NOMBRE DE USUARIO" secondary={data ? data?.nickname : skeletonText} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <VerifiedUserRoundedIcon fontSize="large" />
                </ListItemAvatar>
                <ListItemText primary="TIPO DE USUARIO" secondary={data ? data?.roles : skeletonText} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <VpnKeyRoundedIcon fontSize="large" />
                </ListItemAvatar>
                <ListItemText primary="CONTRASEÑA" />
                <Button>Cambiar</Button>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <UpdateRoundedIcon fontSize="large" />
                </ListItemAvatar>
                <ListItemText primary="FECHA DE INTEGRACIÓN" secondary={data ? dayjs(data?.User?.created_at).format('DD/MM/YYYY') : skeletonText} />
              </ListItem>
            </List>
          </Grid>
        </Card>
      </Grid>
    </div>
  )
}

export default Profile
