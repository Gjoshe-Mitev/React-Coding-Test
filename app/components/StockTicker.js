import React, { Component } from 'react';
import { connect as reduxConnect } from 'react-redux';


class StockTicker extends Component {
    render() {
        const { ticker } = this.props;

        return (
            <div className="tickerContainer">
                <h2>Ticker: {ticker.ticker}</h2>
                <h3 className="ticketValueText">Price: {ticker.price}</h3>
                <h3 className="ticketValueText">Change Percent: {ticker.change_percent * 100}%</h3>
                <span className="statusValueText">Change: {ticker.change}</span>
                <span className="timeIntervalText">Interval: 5s</span>
            </div>
        );
    }
}

StockTicker.propTypes = {
    ticker: React.PropTypes.object.isRequired,
};

export default reduxConnect((state) => ({ ticker: state }))(StockTicker);
