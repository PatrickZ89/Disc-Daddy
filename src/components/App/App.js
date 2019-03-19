import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import NewGame from '../NewGame/NewGame';
import ScoreInput from '../ScoreInput/ScoreInput';
import HolePage2 from '../HolePage/HolePage2';
import HolePage3 from '../HolePage/HolePage3';
import HolePage4 from '../HolePage/HolePage4';
import HolePage5 from '../HolePage/HolePage5';
import HolePage6 from '../HolePage/HolePage6';
import HolePage7 from '../HolePage/HolePage7';
import HolePage8 from '../HolePage/HolePage8';
import HolePage9 from '../HolePage/HolePage9';
import HolePage10 from '../HolePage/HolePage10';
import HolePage11 from '../HolePage/HolePage11';
import HolePage12 from '../HolePage/HolePage12';
import HolePage13 from '../HolePage/HolePage13';
import HolePage14 from '../HolePage/HolePage14';
import HolePage15 from '../HolePage/HolePage15';
import HolePage16 from '../HolePage/HolePage16';
import HolePage17 from '../HolePage/HolePage17';
import HolePage18 from '../HolePage/HolePage18';

import './App.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: purple,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Nav />
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
              <Route
                exact
                path="/about"
                component={AboutPage}
              />
              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
              <ProtectedRoute
                exact
                path="/home"
                component={UserPage}
              />
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
              <ProtectedRoute
                exact
                path="/info"
                component={InfoPage}
              />
              <ProtectedRoute
                exact
                path="/new-game"
                component={NewGame}
              />
              <ProtectedRoute
                exact
                path="/score-input"
                component={ScoreInput}
              />
              <ProtectedRoute
                exact
                path="/hole-page2"
                component={HolePage2}
              />
              <ProtectedRoute
                exact
                path="/hole-page3"
                component={HolePage3}
              />
              <ProtectedRoute
                exact
                path="/hole-page4"
                component={HolePage4}
              />
              <ProtectedRoute
                exact
                path="/hole-page5"
                component={HolePage5}
              />
              <ProtectedRoute
                exact
                path="/hole-page6"
                component={HolePage6}
              />
              <ProtectedRoute
                exact
                path="/hole-page7"
                component={HolePage7}
              />
              <ProtectedRoute
                exact
                path="/hole-page8"
                component={HolePage8}
              />
              <ProtectedRoute
                exact
                path="/hole-page9"
                component={HolePage9}
              />
              <ProtectedRoute
                exact
                path="/hole-page10"
                component={HolePage10}
              />
              <ProtectedRoute
                exact
                path="/hole-page11"
                component={HolePage11}
              />
              <ProtectedRoute
                exact
                path="/hole-page12"
                component={HolePage12}
              />
              <ProtectedRoute
                exact
                path="/hole-page13"
                component={HolePage13}
              />
              <ProtectedRoute
                exact
                path="/hole-page14"
                component={HolePage14}
              />
              <ProtectedRoute
                exact
                path="/hole-page15"
                component={HolePage15}
              />
              <ProtectedRoute
                exact
                path="/hole-page16"
                component={HolePage16}
              />
              <ProtectedRoute
                exact
                path="/hole-page17"
                component={HolePage17}
              />
              <ProtectedRoute
                exact
                path="/hole-page18"
                component={HolePage18}
              />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default connect()(App);
