import '../styles/application.scss';

import React, { PureComponent } from 'react';
import { connect as reduxConnect } from 'react-redux';

import { connect, disconnect } from '../services';

import StockTicker from './StockTicker';

class App extends PureComponent {
    componentDidMount() {
        this.props.connect('AAPL');
    }

    componentWillUnmount() {
        this.props.disconnect();
    }

    render() {
        return (
            <div className="stockTicker">
                <h1 className="title">Stock Blotter</h1>

                <StockTicker />
            </div>
        );
    }
}

export default reduxConnect(null, { connect, disconnect })(App);
