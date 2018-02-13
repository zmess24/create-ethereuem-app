import { DATA_LOAD_SUCCESS, SAVE_MY_DATA } from '../constants/actionTypes';

export default (state = { loaded: false }, action) => {
    switch (action.type) {
        case DATA_LOAD_SUCCESS:
            return { loaded: true };

        default:
            return state;
    }
};