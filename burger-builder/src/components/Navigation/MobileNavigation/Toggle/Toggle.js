import React from 'react';
import styles from './Toggle.module.css';

const Toggle = props => (
    <div className={styles.toggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Toggle;