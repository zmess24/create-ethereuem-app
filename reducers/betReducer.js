import { SUBMIT_BET_REQUEST, SUBMIT_BET_SUCCESS, SUBMIT_BET_ERROR } from '../constants/actionTypes';
import initialState from './initialState';

export default function betReducer(state = initialState.bet, action) {
    switch (action.type) {
        case SUBMIT_BET_REQUEST:        
            return Object.assign({}, {
                ether: action.data.ether,
                numberSelected: action.data.numberSelected,
                status: {
                    loading: true,
                    statusHeader: "Ready",
                    statusMessage: "Ready to accept transaction.",
                    success: false,
                    error: false
                }
            });
        case SUBMIT_BET_SUCCESS:
            return Object.assign({}, {
                ether: '',
                numberSelected: 0,
                status: {
                    loading: false,
                    statusMessage: 'Ready to accept transaction.',
                    statusHeader: "Ready",
                    success: true,
                    error: false
                }
            });
        case SUBMIT_BET_ERROR:
            return Object.assign({}, {
                ether: action.data.bet,
                numberSelected: action.data.numberSelected,
                status: {
                    loading: false,
                    statusHeader: "Error",
                    statusMessage: action.data,
                    success: false,
                    error: true
                }
            });
        default:
            return state;
    }
}