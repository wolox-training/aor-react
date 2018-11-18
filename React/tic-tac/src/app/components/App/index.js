import React, { Component, Fragment } from 'react';
import Header from '@components/Header';
import Game from '@screens/Game';
import Setting from '@screens/Setting';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Setting />
        <Game />
      </Fragment>
    );
  }
}

export default App;
