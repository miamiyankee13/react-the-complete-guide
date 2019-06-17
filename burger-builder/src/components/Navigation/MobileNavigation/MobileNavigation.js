import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './MobileNavigation.module.css';

const MobileNavigation = props => {
    return (
        <div className={styles.mobileNavigation}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default MobileNavigation;