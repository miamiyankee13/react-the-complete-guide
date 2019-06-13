import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const Burger = props => {
    let transformedIngredients = [];
    for (let ingredient in props.ingredients) {
        for (let i = 0; i < props.ingredients[ingredient]; i++) {
            transformedIngredients.push(<BurgerIngredient key={ingredient + i} type={ingredient} />)
        }
    }

    return (
        <div className={styles.burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients.length ? transformedIngredients : <p>Please add some ingredients!</p>}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;