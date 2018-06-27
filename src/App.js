import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
      </div>
    );

    // this is what the JSX compiles to
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world!'));
  }
}

export default App;
