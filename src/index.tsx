import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';
import * as serviceWorker from './serviceWorker';

import './style/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
