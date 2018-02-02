import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContainer from './components/main_container';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <MainContainer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
