import React, { Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import MobileNavigation from '../Navigation/MobileNavigation/MobileNavigation';
import styles from './Layout.module.css';

const Layout = props => (
    <Fragment>
        <Toolbar />
        <MobileNavigation />
        <main className={styles.content}>
            {props.children}
        </main>
    </Fragment>
);

export default Layout;