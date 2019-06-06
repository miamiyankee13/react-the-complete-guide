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
        otherState: 'some other value'
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

	render() {
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button onClick={() => this.handleSwitchName('Tony')}>Switch Name</button>
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
}

export default App;