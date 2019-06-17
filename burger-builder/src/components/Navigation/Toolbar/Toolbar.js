import React from 'react';
import Logo from '../../Logo/Logo';
import styles from './Toolbar.module.css';

const Toolbar = props => (
    <header className={styles.toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default Toolbar;