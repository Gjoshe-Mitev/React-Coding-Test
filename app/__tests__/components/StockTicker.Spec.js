import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import thunkMiddleware from 'redux-thunk';
import { dirname, basename } from 'path';

import StockTicker from '../../components/StockTicker';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import actionTypes from '../../types';
import { initialState, stockTicker } from '../../reducers';

const Component = (props) => (
    <Provider {...props}>
        <StockTicker />
    </Provider>
);

describe('<StockTicker />', () => {
    it('checking change value status', () => {
        const store = createStore(
            stockTicker,
            initialState,
            applyMiddleware(thunkMiddleware)
        );

        store.dispatch({
            type: actionTypes.NEW_TICKER,
            payload: '{"ticker": "AAPL", "exchange": "NASDAQ", "price": "127.95", "change": "137.34", "change_percent": "0.28", "last_trade_time": "2022-04-29T21:22:45.000Z", "dividend": "0.22", "yield": "1.52"}',
        });

        const component = mount(<Component store={store} />);
        const fileName = `${dirname(__filename)}/snapshots/stockTicker.snap`;

        expect(component.debug()).to.matchSnapshot(fileName, 'StockTicker: checking change value status');
        expect(component.containsAllMatchingElements([
            <h2>Ticker: AAPL</h2>,
            <h3 className="ticketValueText">Price: 127.95</h3>,
            <h3 className="ticketValueText">Change Percent: 28.000000000000004%</h3>,
            <span className="statusValueText">Change: 137.34</span>,
            <span className="timeIntervalText">Interval: 5s</span>,
        ])).to.be.true;
        component.unmount();
    });
});
