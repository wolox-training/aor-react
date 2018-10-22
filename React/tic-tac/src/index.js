import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

import App from '~components/App'; // eslint-disable-line import/first
import Game from '~screens/game/';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker(); 


ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();    
