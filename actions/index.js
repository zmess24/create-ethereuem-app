import * as types from '../constants/actionTypes';

export const saveMyData = data => {
    const id = 1;
    return { type: types.SAVE_MY_DATA, payload: { [1]: data } };
};

export const loadSuccess = () => {
    return { type: types.DATA_LOAD_SUCCESS };
};