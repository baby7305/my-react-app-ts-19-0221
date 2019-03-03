import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './components/Modal/Parent';
import * as serviceWorker from './serviceWorker';

const appRoot = document.getElementById('app-root');

ReactDOM.render(<Parent />, appRoot);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
