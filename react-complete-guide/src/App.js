import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Anthony', age: 28 },
      { name: 'Britt', age: 32 },
      { name: 'Paul', age: 58 }
    ]
  };

  handleSwitchName = () => {
    this.setState({
      persons: [
        { name: 'Tony', age: 28 },
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
        <button onClick={this.handleSwitchName}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My Hobbies: Sports</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
