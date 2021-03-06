import React from 'react';

import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            {/* show the content placed between the opening & closing tag of the component */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>

    );
};

export default person;