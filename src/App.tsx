import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
}

export interface ClockFilter {
  date?: Date;
}

class Clock extends React.Component<ClockFilter, any> {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  private timerID: any;

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default App;
