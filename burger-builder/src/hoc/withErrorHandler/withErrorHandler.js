import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };
        
        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({
                    error: null
                });
                return request;
            });

            axios.interceptors.response.use(response => response, error => {
                this.setState({
                    error
                });

            })
        }

        handleErrorClear = () => {
            this.setState({
                error: null
            });
        }
        
        render() {
            return (
                <Fragment>
                    <Modal show={this.state.error} modalClosed={this.handleErrorClear}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;