import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const Burger = props => {
    
    //convert ingredients object into array of JSX elements
    let transformedIngredients = [];
    for (let ingredient in props.ingredients) {
        for (let i = 0; i < props.ingredients[ingredient]; i++) {
            transformedIngredients.push(<BurgerIngredient key={ingredient + i} type={ingredient} />)
        }
    }
    
    // ALTERNATIVE SOLUTION
    // let transformedIngredients = Object.keys(props.ingredients)
    //     .map(ingredientKey => {
    //         return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
    //             console.log(_);
    //             return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
    //         });
    //     })
    //     .reduce((arr, el) => {
    //         console.log(arr, el)
    //         return arr.concat(el);
    //     }, []);

    return (
        <div className={styles.burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients.length ? transformedIngredients : <p>Please add some ingredients!</p>}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;