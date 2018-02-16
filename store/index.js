import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { fetchProjects } from '../actions'

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    store.dispatch(fetchProjects());
    return store;
};