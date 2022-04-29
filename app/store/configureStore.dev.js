import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { stockTicker } from '../reducers';
import DevTools from '../containers/DevTools';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        stockTicker,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware, middleware),
            DevTools.instrument()
        )
    );
}
