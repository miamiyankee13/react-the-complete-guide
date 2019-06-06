import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Anthony', age: 28 },
      { name: 'Britt', age: 32 },
      { name: 'Paul', age: 58 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const handleSwitchName = () => {
    setPersonsState({
      persons: [
        { name: 'Tony', age: 28 },
        { name: 'Britt', age: 32 },
        { name: 'Paul', age: 58 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={handleSwitchName}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
      >
          My Hobbies: Sports
      </Person>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
      />
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} 
      />
    </div>
  );
}

export default App;