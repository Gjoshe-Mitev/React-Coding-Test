import { expect } from 'chai';

import actionTypes from '../../types';
import { stockTicker, initialState } from '../../reducers';

describe('stockTicker', () => {
    it('checking new ticker state for NEW_TICKER type action ', () => {
        const payload = '{"ticker": "AAPL", "exchange": "NASDAQ", "price": "127.95", "change": "137.34", "change_percent": "0.28", "last_trade_time": "2022-04-29T21:22:45.000Z", "dividend": "0.22", "yield": "1.52"}';

        expect(stockTicker(initialState, {
            type: actionTypes.NEW_TICKER,
            payload: payload,
        })).to.deep.equal({
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: 127.95,
            change: 137.34,
            change_percent: '0.28',
            status: 1,
            last_trade_time: '2022-04-29T21:22:45.000Z',
            dividend: '0.22',
            yield: '1.52'
        });
    });

    it('checking initial state for CLEAR_TICKER type action', () => {
        expect(stockTicker(initialState, {
            type: actionTypes.CLEAR_TICKER
        })).to.deep.equal(initialState);
    });
});
