import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={styles.person}>
                {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
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