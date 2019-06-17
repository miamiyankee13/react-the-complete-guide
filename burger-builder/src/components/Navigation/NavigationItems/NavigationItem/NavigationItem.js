import React from 'react';
import styles from './NavigationItem.module.css';

const NavigationItem = props => (
    <li className={styles.navigationItem}>
        <a 
            className={props.active ? styles.active : null}
            href={props.link}
        >
            {props.children}
        </a>
    </li>
);

export default NavigationItem;