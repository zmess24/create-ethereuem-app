import { DATA_LOAD_SUCCESS, SAVE_MY_DATA } from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case SAVE_MY_DATA:
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
};