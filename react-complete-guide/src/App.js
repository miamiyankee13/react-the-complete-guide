import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

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

    handleNameChange = (event, id) => {
        //find person index
        const personIndex = this.state.persons.findIndex(element => {
            return element.id === id;
        });

        //create copy of person object
        const person = {
            ...this.state.persons[personIndex]
        };

        //update person name
        person.name = event.target.value;

        //create copy of persons array & update person object
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        
        //update persons array
        this.setState({
            persons
        });
    }

    handleDeletePerson = personIndex => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons
        });
    }

    togglePersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
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

        let persons = null;

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
        }

		return (
			<div className="app">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
                <button 
                    style={style}
                    onClick={this.togglePersons}
                >
                    Toggle Persons
                </button>  
                {persons}
			</div>
		);
	}
}

export default App;