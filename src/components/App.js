import logo from '../logo.svg';
import '../App.css';
import Welcome from "./Welcome.js";
import React from "react";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.incrementCounter = this.incrementCounter.bind(this)
  }

  incrementCounter() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Counter: {this.state.count}
          </a>
          <Welcome message="Hello Beluga!!" incrementCounter={this.incrementCounter}/>
        </header>
      </div>
    );
  }
}

export default App;
