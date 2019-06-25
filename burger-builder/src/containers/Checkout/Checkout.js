import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {
    state = {
        ingredients: null
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({
            ingredients
        });
    }

    handleCancelCheckout = () => {
        this.props.history.goBack();
    }

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
                <Route path={`${this.props.match.url}/contact-data`} component={ContactData}/>
            </div>
        );
    }
}

export default Checkout;