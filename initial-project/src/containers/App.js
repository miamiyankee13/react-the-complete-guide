import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';
import styles from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }
    
    state = {
        persons: [
            { id: '1', name: 'Anthony', age: 28 },
            { id: '2', name: 'Britt', age: 32 },
            { id: '3', name: 'Paul', age: 58 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    //find person index
    //create copy of person object
    //update person name
    //create copy of persons array
    //update person object
    //update state with new array & counter value
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

        this.setState((prevState, props) => {
            return {
                persons,
                changeCounter: prevState.changeCounter + 1
            };
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

    handleLogin = () => {
        this.setState({
            authenticated: true
        });
    }

	render() {
        console.log('[App.js] render')
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
                <button 
                    onClick={() => {
                        this.setState({ showCockpit: false });
                    }}
                >
                    Remove Cockpit
                </button>
                <AuthContext.Provider 
                    value={{
                        authenticated: this.state.authenticated, 
                        login: this.handleLogin
                    }}
                >
                    {this.state.showCockpit ? ( 
                        <Cockpit
                            title={this.props.appTitle} 
                            showPersons={this.state.showPersons} 
                            personsLength={this.state.persons.length}
                            click={this.togglePersons}
                        /> 
                    ) : null}
                    {persons}
                </AuthContext.Provider>
            </div>
            
		);
	}
}
export default App;
