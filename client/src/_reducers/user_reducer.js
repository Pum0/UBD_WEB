import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    WRITE_POST,
    UPDATE_POST,
    DELETE_POST,
    WRITE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
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

        case DELETE_POST:
            return { ...state, deleteData: action.payload }
            break;

        case WRITE_COMMENT:
            return { ...state, commentData: action.payload }
            break;

        case UPDATE_COMMENT:
            return { ...state, updataDate: action.payload }
            break;

        case DELETE_COMMENT:
            return { ...state, deleteDate: action.payload }
            break;

        default:
            return state;
    }
}