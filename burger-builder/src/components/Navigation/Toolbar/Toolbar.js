import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './Toolbar.module.css';

const Toolbar = props => (
    <header className={styles.toolbar}>
        <div>MENU</div>
        <div className={styles.logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;