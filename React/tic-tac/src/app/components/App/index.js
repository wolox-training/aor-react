import React, { Component, Fragment } from 'react';
import Header from '@components/Header';
import Game from '@Screens/Game/';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Game />
      </Fragment>
    );
  }
}

export default App;
