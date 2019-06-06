import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        persons: [
            { name: 'Anthony', age: 28 },
            { name: 'Britt', age: 32 },
            { name: 'Paul', age: 58 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    handleSwitchName = newName => {
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Britt', age: 32 },
                { name: 'Paul', age: 58 }
            ]
        });
    }

    handleNameChange = event => {
        this.setState({
            persons: [
                { name: event.target.value, age: 28 },
                { name: 'Britt', age: 32 },
                { name: 'Paul', age: 58 }
            ]
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
                    <Person 
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age}
                        click={this.handleSwitchName.bind(this, 'Tony Chinstraps')}
                        change={this.handleNameChange}
                    >My Hobbies: Sports
                    </Person>
                    <Person 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age} 
                    />
                    <Person 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age} 
                    />
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