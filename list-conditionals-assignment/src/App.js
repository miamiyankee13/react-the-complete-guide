import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
    state = {
        input: ''
    };

    handleInputChange = event => {
        this.setState({
            input: event.target.value
        });
    }

    handleCharDelete = index => {
        const charArray = this.state.input.split('');
        charArray.splice(index, 1);
        this.setState({
            input: charArray.join('')
        });
    }
  
    render() {
        const chars = (
            <div>
                {this.state.input.split('').map((item, index) => {
                    return <CharComponent 
                                char={item} 
                                key={index} 
                                click={() => this.handleCharDelete(index)}
                            />
                })}
            </div>
        );

        return (
            <div className="app">
                <input type="text" onChange={this.handleInputChange} value={this.state.input} />
                <p>Text length: {this.state.input.length}</p>
                <ValidationComponent length={this.state.input.length} />
                {chars}
            </div>
        );
    }
}

export default App;
