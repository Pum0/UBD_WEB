import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    WRITE_POST,
    UPDATE_POST
} from '../_actions/types';


export default function (state = {}, action) {

    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;

        case REGISTER_USER:
            return { ...state, register: action.payload }
            break;

        case AUTH_USER:
            return { ...state, userData: action.payload }
            break;

        case LOGOUT_USER:
            return { ...state }
            break;

        case WRITE_POST:
            return { ...state, postData: action.payload }
            break;

        case UPDATE_POST:
            return { ...state, updateData: action.payload }
            break;

        default:
            return state;
    }
}