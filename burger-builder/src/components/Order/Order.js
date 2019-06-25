import React from 'react';
import styles from './Order.module.css';

const Order = props => (
    <div className={styles.order}>
        <p>Ingredients: Lettuce (1)</p>
        <p>Price: <strong>$5.45</strong></p>
    </div>
);

export default Order;