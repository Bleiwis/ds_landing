import React from 'react'
import { makeStyles, MuiThemeProvider } from '@material-ui/core'
import NavigationBar from './components/Nav/NavigationBar';
import {Theme} from './theme/theme'
import { Switch } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(),
    width: '100vw',  
  },
}));

const App = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={Theme}>
        <NavigationBar />
        <main className={classes.content}>
          <div className={classes.root} />
          <Switch>
            
          </Switch>

        </main>
      </MuiThemeProvider>
    </div>
  )
}

export default App
