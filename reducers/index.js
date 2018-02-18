import { combineReducers } from 'redux';
import betReducer from './betReducer';
import summaryReducer from './summaryReducer';

export default combineReducers({
    bet: betReducer,
    summary: summaryReducer,
});