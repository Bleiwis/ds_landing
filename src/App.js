import React from 'react'
import { CssBaseline, makeStyles, MuiThemeProvider } from '@material-ui/core'
import { Route, Switch } from 'react-router';
import NavigationBar from './components/Nav/NavigationBar';
import { Theme } from './theme/theme'
import Landing from './pages/landing/Landing';
import { useAuth0 } from '@auth0/auth0-react';

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
        <CssBaseline />
        <NavigationBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/" exact component={Landing} />
            {/* <Route path="*" exact component={PageNoFound} /> */}
          </Switch>
        </main>
      </MuiThemeProvider>
    </div>
  )
}

export default App
