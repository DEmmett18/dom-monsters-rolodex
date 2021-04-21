import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      string: 'Hello Dom',
      r: 0
    }
    setInterval(() => {
      this.setState({r: this.state.r + 1})
    }, 4600);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{ this.state.string }</p> {this.state.r}
          <button onClick={() => { this.setState({string: 'Yo Dom'})}}>Change Text</button>
        </header>
      </div>
    );
  }
}
// module.exports.App = App
export default App;
