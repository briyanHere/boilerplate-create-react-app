import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import { ClippedDrawer, TopBar } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <ClippedDrawer />
      </div>
    );
  }
}

export default withRoot(withStyles({})(App));
