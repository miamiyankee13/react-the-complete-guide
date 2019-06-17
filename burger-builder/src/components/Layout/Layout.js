import React, { Component, Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import MobileNavigation from '../Navigation/MobileNavigation/MobileNavigation';
import styles from './Layout.module.css';

class Layout extends Component {
    state = {
        showMobileNav: false
    };

    handleMobileNavClosed = () => {
        this.setState({
            showMobileNav: false
        });
    }

    handleMobileNavToggle = () => {
        this.setState(prevState => {
            return { showMobileNav: !prevState.showMobileNav };
        });
    }

    render() {
        return (
            <Fragment>
                <Toolbar toggleClicked={this.handleMobileNavToggle} />
                <MobileNavigation open={this.state.showMobileNav} closed={this.handleMobileNavClosed} />
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
} 

export default Layout;