import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

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
            </div>
        );
    }
}

export default Checkout;