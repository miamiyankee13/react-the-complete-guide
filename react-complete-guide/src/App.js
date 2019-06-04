import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Anthony" age="28" >My Hobbies: Sports</Person>
        <Person name="Britt" age="32" />
        <Person name="Paul" age="58" />
      </div>
    );
  }
}

export default App;
