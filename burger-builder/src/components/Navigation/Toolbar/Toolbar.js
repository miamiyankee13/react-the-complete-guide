import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../MobileNavigation/Toggle/Toggle';
import styles from './Toolbar.module.css';

const Toolbar = props => (
    <header className={styles.toolbar}>
        <Toggle clicked={props.toggleClicked}/>
        <div className={styles.logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;