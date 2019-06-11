import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import styles from './App.module.css';

class App extends Component {
    state = {
        persons: [
            { id: '1', name: 'Anthony', age: 28 },
            { id: '2', name: 'Britt', age: 32 },
            { id: '3', name: 'Paul', age: 58 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    //find person index
    //create copy of person object
    //update person name
    //create copy of persons array
    //update person object
    //update state with new array
    handleNameChange = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons
        });
    }

    //create copy of persons array
    //update persons array
    //update state with new array
    handleDeletePerson = personIndex => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons
        });
    }

    //create copy of showPersons prop
    //update state with opposite value
    togglePersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

	render() {
        //dynamically display persons
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons 
                        persons={this.state.persons} 
                        click={this.handleDeletePerson}
                        change={this.handleNameChange} 
                      />
        }

		return (
            <div className={styles.app}>
                <Cockpit 
                    showPersons={this.state.showPersons} 
                    persons={this.state.persons}
                    click={this.togglePersons}
                />
                {persons}
            </div>
            
		);
	}
}
export default App;
