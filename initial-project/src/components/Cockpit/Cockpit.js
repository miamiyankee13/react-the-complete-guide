import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';
import styles from './Cockpit.module.css'

const Cockpit = props => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        toggleButtonRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    //dynamically assign classes
    const classes = [];
    let buttonClass = '';

    if (props.showPersons) {
        buttonClass = styles.red;
    }

    if (props.personsLength <= 2) {
        classes.push(styles.red)
    }
    if (props.personsLength <=1) {
        classes.push(styles.bold)
    }

    return (
        <div className={styles.cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button ref={toggleButtonRef} className={buttonClass} onClick={props.click} >
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div> 
    );
}

export default React.memo(Cockpit);