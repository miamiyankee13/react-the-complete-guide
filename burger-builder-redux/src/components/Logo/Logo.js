import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const Logo = props => (
    <div className={styles.logo}>
        <img src={BurgerLogo} alt="MyBurger" />
    </div>
);

export default Logo;