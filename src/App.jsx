import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Homepage from './Components/Homepage';
import Header from './Components/Header';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00e676',
    },
    secondary: {
      main: '#4caf50',
    },
  },
});

class App extends Component
{
  render()
  {
    return (
      <Router>
        <div>
          <MuiThemeProvider theme={theme}>
            <div className='Page'>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Header />
                </Grid>
                <Grid item xs={12}>
                  <Route exact path="/" component={Homepage}/>
                </Grid>
              </Grid>
            </div>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
