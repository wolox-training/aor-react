import React, {Component, Fragment,} from 'react';
import Header from '@components/Header';

import IconSelector from './components/IconSelector';

class Setting extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <IconSelector/>
      </Fragment>
    );
  }
}

export default Setting;
