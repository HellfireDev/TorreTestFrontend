import { types } from '../types/types';

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                id: null,
                name: null,
                torreid: null,
                logged: false
            }

        default:
            return state;
    }

};