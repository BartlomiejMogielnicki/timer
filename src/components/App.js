import React, { Component } from 'react';
import './App.css';
import Clock from './Clock/Clock'
import ChangeButton from './ChangeButton/ChangeButton'

class App extends Component {
  state = {
    active: 'Clock',
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

  handleChangeActive = (action) => {
    this.setState({
      active: action
    })
  }

  render() {
    return (
      <>
        {this.state.active === "Clock" ? <Clock time={this.state.time} /> : "Stopwatch"}
        <ChangeButton
          active={this.state.active}
          action="Clock"
          click={this.handleChangeActive}
        />
        <ChangeButton
          active={this.state.active}
          action="Stopwatch"
          click={this.handleChangeActive}
        />
      </>
    )
  }
}

export default App;
