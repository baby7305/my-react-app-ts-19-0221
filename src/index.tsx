import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NumberList from './components/listItems/listItems';
import * as serviceWorker from './serviceWorker';

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
