import React, { Component, Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import MobileNavigation from '../../components/Navigation/MobileNavigation/MobileNavigation';
import styles from './Layout.module.css';

class Layout extends Component {
    state = {
        showMobileNav: false
    };

    handleMobileNavToggle = () => {
        this.setState(prevState => {
            return { showMobileNav: !prevState.showMobileNav };
        });
    }

    render() {
        return (
            <Fragment>
                <Toolbar toggleClicked={this.handleMobileNavToggle} />
                <MobileNavigation open={this.state.showMobileNav} closed={this.handleMobileNavToggle} />
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
} 

export default Layout;