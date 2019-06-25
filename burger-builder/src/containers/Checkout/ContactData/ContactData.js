import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={styles.contactData}>
                <h4>Enter Your Contact Data</h4>
                <form>
                    <input className={styles.input} type="text" name="name" placeholder="Your Name" />
                    <input className={styles.input} type="email" name="email" placeholder="Your Email" />
                    <input className={styles.input} type="text" name="street" placeholder="Street" />
                    <input className={styles.input} type="text" name="postal" placeholder="Postal Code" />
                    <Button buttonType="success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;