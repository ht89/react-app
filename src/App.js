import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      // class cannot be used. 
      // all elements must be wrapped inside a root element
      <div className="App">
        <h1>Hello world!</h1>

        <Person />
      </div>
    );

    // this is what the JSX compiles to
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world!'));
  }
}

export default App;
