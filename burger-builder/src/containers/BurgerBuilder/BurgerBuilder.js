import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    //create new array of ingredient values
    //reduce new array to calculate sum of ingredient values
    updatePurchasable(ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        this.setState({
            purchasable: sum > 0
        })
    }

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
        this.updatePurchasable(updatedIngredients);
    }

    //create new ingredient count based on previous count
    //create copy of ingredients object
    //update count of ingredient
    //create new price based on previous price
    //update state
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
        this.updatePurchasable(updatedIngredients);
    }

    handlePurchase = () => {
        this.setState({
            purchasing: true
        })
    }

    handleCancelPurchase = () => {
        this.setState({
            purchasing: false
        });
    }

    handleContinuePurchase = () => {
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Anthony Damico',
                address: {
                    street: '123 Main Street',
                    zipcode: '12345',
                    country: 'United State'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        
        axios.post('/orders.json', order)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.handleCancelPurchase}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        cancel={this.handleCancelPurchase}
                        continue={this.handleContinuePurchase}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.handleAddIngredient}
                    ingredientRemoved={this.handleRemoveIngredient}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.handlePurchase}
                />
            </Fragment>
        );
    }
}

export default BurgerBuilder;