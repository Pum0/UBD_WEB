import {
    WRITE_POST,
    UPDATE_POST,
    DELETE_POST,
    GET_POST
} from '../_actions/types';

export default function (state = {}, action) {

    switch (action.type) {
        case WRITE_POST:
            return { ...state, postData: action.payload }
            break;

        case UPDATE_POST:
            return { ...state, updateData: action.payload }
            break;

        case DELETE_POST:
            return { ...state, deleteData: action.payload }
            break;

        case GET_POST:
            return { ...state, getPostData: action.payload }
            break;

        default:
            return state;
    }
}