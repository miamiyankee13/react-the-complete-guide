import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={styles.person}>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.change} 
                    value={this.props.name} 
                />
            </div> 
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    change: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default Person;