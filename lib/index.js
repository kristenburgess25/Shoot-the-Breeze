import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
require('./reset.scss');
require('./style.scss');

ReactDOM.render(
  <Application />, document.getElementById('application')
);
