import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      element
    );
  }
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

export default App;
