import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

export default (initialState, {isServer}) => {
    const middlewares = [
        thunk
    ];

    return createStore(reducers, initialState, compose(
        applyMiddleware(...middlewares)
    ));
};