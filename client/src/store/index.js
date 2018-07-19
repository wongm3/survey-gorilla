import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (history) => {
    const store = createStore(
        connectRouter(history)(state => state),
        {},
        composeEnhancers(applyMiddleware(routerMiddleware(history)))
    );

    return store;
};