import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginControl from './components/Greeting/LoginControl';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <LoginControl />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
