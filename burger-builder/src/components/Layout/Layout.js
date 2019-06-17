import React, { Component, Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import MobileNavigation from '../Navigation/MobileNavigation/MobileNavigation';
import styles from './Layout.module.css';

class Layout extends Component {
    state = {
        showMobileNav: true
    };

    handleMobileNavClosed = () => {
        this.setState({
            showMobileNav: false
        });
    }

    render() {
        return (
            <Fragment>
                <Toolbar />
                <MobileNavigation open={this.state.showMobileNav} closed={this.handleMobileNavClosed} />
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
} 

export default Layout;