import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { stockTicker } from '../reducers';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        stockTicker,
        initialState,
        applyMiddleware(thunkMiddleware, middleware),
    );
}
