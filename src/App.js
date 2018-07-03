import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
    // naming a property 'state' is not optional
    state = {
        people: [
            { id: 1, name: 'Max', age: 28 },
            { id: 2, name: 'Manu', age: 29 },
            { id: 3, name: 'Steph', age: 26 },
        ],
        otherState: 'other value',
        showPeople: false
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

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.people.findIndex(p => p.id === id);

        const person = { ...this.state.people[personIndex] };

        person.name = event.target.value;

        const people = [...this.state.people];
        people[personIndex] = person;

        this.setState({
            people: people
        });
    }

    deletePersonHandler = (personIndex) => {
        const people = [...this.state.people];
        people.splice(personIndex, 1);

        this.setState({
            people: people
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPeople;

        this.setState({
            showPeople: !doesShow
        });
    }

    render() {
        let people = null;

        let btnClass = '';

        if (this.state.showPeople) {
            people = (
                <div>
                    {this.state.people.map((person, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            key={person.id} // index is not a suitable key bc it changes as the list changes
                            click={this.deletePersonHandler.bind(this, index)}
                            changed={(event) => this.nameChangeHandler(event, person.id)} />
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.people.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.people.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            /* class cannot be used. all elements must be wrapped inside a root element  */

            <div className={classes.App}>
                <h1>Hello world!</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>

                {/* bind() used to associate 'this' inside the function to the class */}
                {/* another way below but not recommended */}
                <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle people</button>

                {people}

            </div>
        );

        // this is what the JSX compiles to
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world!'));
    }
}

export default App;
