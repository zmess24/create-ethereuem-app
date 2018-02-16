import { LOAD_PROJECTS_REQUEST, LOAD_PROJECTS_SUCCESS } from '../constants/actionTypes';
import initialState from './initialState';

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PROJECTS_REQUEST:
            return Object.assign({}, {
                projects: [],
                status: { loaded: false, err: false},
            });
        case LOAD_PROJECTS_SUCCESS:
            return Object.assign({}, {
                projects: action.data,
                status: { loaded: true, err: false }
            });
        default:
            return state;
    }
}