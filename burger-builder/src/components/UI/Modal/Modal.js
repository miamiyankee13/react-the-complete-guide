import React, { Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const Modal = props => (
    <Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={props.show ? `${styles.modal} ${styles.showModal}` : styles.modal}>
            {props.children}
        </div>
    </Fragment>
);

export default Modal;