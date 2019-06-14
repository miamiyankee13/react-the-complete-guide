import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
} 

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4
    };

    //create new ingredient count based on previous count
    //create copy of ingredients object
    //update count of ingredient
    //create new price based on previous price
    //update state
    handleAddIngredient = type => {
        const prevCount = this.state.ingredients[type];
        const newCount = prevCount + 1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    //create new ingredient count based on previous count
    //create copy of ingredients object
    //update count of ingredient
    handleRemoveIngredient = type => {
        const prevCount = this.state.ingredients[type];
        const newCount = prevCount - 1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = newCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice - priceDeduction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.handleAddIngredient}
                    ingredientRemoved={this.handleRemoveIngredient}
                    disabled={disabledInfo}
                />
            </Fragment>
        );
    }
}

export default BurgerBuilder;