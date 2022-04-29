import actionTypes from '../types';

export const initialState = {
    'ticker': '',
    'exchange': '',
    'price': 0,
    'change': 0,
    'change_percent': '',
    'last_trade_time': '',
    'dividend': '',
    'yield': '',
    'status': 0,
};

const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEW_TICKER:
            const ticker = JSON.parse(action.payload);
            const price = Number(ticker.price);
            const status = Math.sign(price - state.price);
            const change = Number(ticker.change) * status;

            return {
                ...ticker,
                price,
                change,
                status
            };
        case actionTypes.CLEAR_TICKER:
            return initialState;
        default:
            return state;
    }
};

export default stockTicker;
