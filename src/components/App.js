import React, { Component } from 'react';
import './App.css';
import Clock from './Clock/Clock'

class App extends Component {
  state = {
    active: 'clock',
    time: this.getTime()
  }

  intervalIndex = "";

  getTime() {
    const currentDate = new Date();
    return ({
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds()
    })
  }

  setTime() {
    const time = this.getTime()
    this.setState({
      time
    })
  }

  componentDidMount() {
    this.intervalIndex = setInterval(this.setTime.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalIndex)
  }

  render() {
    return (
      <>
        <Clock time={this.state.time} />
      </>
    )
  }
}

export default App;
