import io from 'socket.io-client';

import actionTypes from '../types';

let socket = null;

export const connect = (stockSymbol) => (dispatch) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            dispatch({ type: actionTypes.NEW_TICKER, payload: data });
            console.log(data);
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};

export const disconnect = () => (dispatch) => {
    if (socket) {
        socket.disconnect();
        socket = null;
        dispatch({ type: actionTypes.CLEAR_TICKER });
    }
};


