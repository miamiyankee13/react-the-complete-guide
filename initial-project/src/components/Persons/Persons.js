import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent { 

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.change !== this.props.change ||
    //         nextProps.click !== this.props.click
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'snapshot' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                    click={() => this.props.click(index)}
                    change={(event) => this.props.change(event, person.id)}
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                />
            );
        });
    }
}
export default Persons;