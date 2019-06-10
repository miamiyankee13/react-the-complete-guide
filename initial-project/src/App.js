import React, { Component } from 'react';
import Person from './Person/Person';
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
        //dynamically display persons & button class
        let persons = null;
        let buttonClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                                    click={() => this.handleDeletePerson(index)}
                                    change={(event) => this.handleNameChange(event, person.id)}
                                    name={person.name} 
                                    age={person.age} 
                                    key={person.id}
                                />
                    })}
                </div>
            );

            buttonClass = styles.red;
        }

        //dynamically assign classes
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(styles.red)
        }
        if (this.state.persons.length <=1) {
            classes.push(styles.bold)
        }

		return (
            <div className={styles.app}>
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button onClick={this.togglePersons} className={buttonClass}>
                    Toggle Persons
                </button>  
                {persons}
            </div>
            
		);
	}
}
export default App;
