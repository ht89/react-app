import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    // naming a property 'state' is not optional
    state = {
        people: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Steph', age: 26 },
        ],
        otherState: 'other value'
    };

    switchNameHandler = (newName) => {
        // DONT DO THIS this.state.people[0].name = 'Jack';
        this.setState({
            people: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Steph', age: 27 },
            ]
        });
    }

    nameChangeHandler = (event) => {
        this.setState({
            people: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Steph', age: 27 },
            ]
        });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            // class cannot be used. 
            // all elements must be wrapped inside a root element
            <div className="App">
                <h1>Hello world!</h1>

                {/* bind() used to associate 'this' inside the function to the class */}
                {/* another way below but not recommended */}
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
                <Person
                    name={this.state.people[0].name}
                    age={this.state.people[0].age} />
                <Person
                    name={this.state.people[1].name}
                    age={this.state.people[1].age}
                    click={() => this.switchNameHandler('Max')}
                    changed={this.nameChangeHandler}>My Hobbies: playing games</Person>
                <Person
                    name={this.state.people[2].name}
                    age={this.state.people[2].age} />
            </div>
        );

        // this is what the JSX compiles to
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world!'));
    }
}

export default App;
