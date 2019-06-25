import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
} 

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients: response.data
                });
            })
            .catch(error => {
                this.setState({
                    error: true
                });
            });
    }

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

    //set purchasing state to true
    handlePurchase = () => {
        this.setState({
            purchasing: true
        })
    }

    //set purchasing state to false
    handleCancelPurchase = () => {
        this.setState({
            purchasing: false
        });
    }

    //create query params array of strings
    //join array using & to create query string
    //push to new path with query string in URL (allows us to decode query string in receiving component)
    handleContinuePurchase = () => {
        //set loading state to true
        //create order object
        //submit order object
        //update loading & purchasing state

        // this.setState({
        //     loading: true
        // });
        
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Anthony Damico',
        //         address: {
        //             street: '123 Main Street',
        //             zipcode: '12345',
        //             country: 'United States'
        //         },
        //         email: 'test@test.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({
        //             loading: false,
        //             purchasing: false
        //         });
        //     })
        //     .catch(error => {
        //         this.setState({
        //             loading: false,
        //             purchasing: false
        //         });
        //     });
        const queryParams = [];
        for (let ingredient in this.state.ingredients) {
            queryParams.push(`${encodeURIComponent(ingredient)}=${encodeURIComponent(this.state.ingredients[ingredient])}`);
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString}`
        });
    }

    render() {
        //check if ingredients buttons should be disabled
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        //declare default values for order summary & burger
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        //dynamically create burger & order summary if ingredients exist
        if (this.state.ingredients) {
            burger = (
                <Fragment>
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
            orderSummary = <OrderSummary 
                                ingredients={this.state.ingredients}
                                price={this.state.totalPrice}
                                cancel={this.handleCancelPurchase}
                                continue={this.handleContinuePurchase}
                            />;
        }

        //display spinner if order is submitted
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.handleCancelPurchase}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);