import React from 'react';
import styles from './Modal.module.css';

const Modal = props => (
    <div className={props.show ? [styles.modal, styles.showModal].join(' ') : styles.modal}>
        {props.children}
    </div>
);

export default Modal;