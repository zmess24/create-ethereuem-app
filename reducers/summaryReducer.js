import { LOAD_SUMMARY_SUCCESS } from '../constants/actionTypes';
import initialState from './initialState';

export default function summaryReducer(state = initialState.summary, action) {
    switch (action.type) {
        case LOAD_SUMMARY_SUCCESS:
            return Object.assign({}, {
                numberOfBets: action.data.numberOfBets,
                totalBet: action.data.totalBet,
                minimumBet: action.data.minimumBet,
                maxAmountofBets: action.data.maxAmountofBets,
                roundsWithOutWinner: action.data.roundsWithOutWinner
            });
        default:
            return state;
    }
}