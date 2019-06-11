import React from 'react';
import styles from './Person.module.css';

const Person = props => {
    return (
        <div className={styles.person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div> 
    );
}
export default Person;