import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';

import Header from '@components/header'; // eslint-disable-line import/first
import Game from '@screens/game/';

ReactDOM.render(
    <React.Fragment>
    <Header/>
    <Game/>
    </React.Fragment>, document.getElementById('root'));
    