import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    //loop through search params
    //add price & ingredients object to state
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        let price = null;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = +param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({
            ingredients,
            price
        });
    }

    //go back to pervious page
    handleCancelCheckout = () => {
        this.props.history.goBack();
    }

    //display contact data form
    handleContinueCheckout = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    cancel={this.handleCancelCheckout}
                    continue={this.handleContinueCheckout}
                />
                <Route 
                    path={`${this.props.match.url}/contact-data`} 
                    render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />}
                />
            </div>
        );
    }
}

export default Checkout;