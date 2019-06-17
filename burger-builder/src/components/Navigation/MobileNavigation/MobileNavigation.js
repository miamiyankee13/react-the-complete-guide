import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './MobileNavigation.module.css';

const MobileNavigation = props => {
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={props.open ? `${styles.mobileNavigation} ${styles.open}` : `${styles.mobileNavigation} ${styles.closed}`}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
}

export default MobileNavigation;