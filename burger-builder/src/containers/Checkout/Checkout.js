import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            bacon: 1,
            cheese: 1,
            lettuce: 1,
            meat: 1
        }
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