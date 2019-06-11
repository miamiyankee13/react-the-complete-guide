import React from 'react';
import Person from './Person/Person';

const Persons = props => { 
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
        return (
            <Person 
                click={() => props.click(index)}
                change={(event) => props.change(event, person.id)}
                name={person.name} 
                age={person.age} 
                key={person.id} 
            />
        );
    });
}
export default Persons;