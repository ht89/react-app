import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I'm {props.age} years old!</p>
            {/* show the content placed between the opening & closing tag of the component */}
            <p>{props.children}</p>
        </div>

    );
};

export default person;