import React, { Component, Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={this.props.show ? `${styles.modal} ${styles.showModal}` : styles.modal}>
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default Modal;