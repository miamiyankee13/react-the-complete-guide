import React, { useEffect } from 'react';
import styles from './Cockpit.module.css'

const Cockpit = props => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
    });

    //dynamically assign classes
    const classes = [];
    let buttonClass = '';

    if (props.showPersons) {
        buttonClass = styles.red;
    }

    if (props.persons.length <= 2) {
        classes.push(styles.red)
    }
    if (props.persons.length <=1) {
        classes.push(styles.bold)
    }

    return (
        <div className={styles.cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button onClick={props.click} className={buttonClass}>
                Toggle Persons
            </button>
        </div> 
    );
}

export default Cockpit;