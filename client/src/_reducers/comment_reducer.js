import {
    WRITE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT,
    GET_COMMENT
} from '../_actions/types';

export default function (state = {}, action) {

    switch (action.type) {
        case WRITE_COMMENT:
            return { ...state, commentData: action.payload }
            break;

        case UPDATE_COMMENT:
            return { ...state, updataDate: action.payload }
            break;

        case DELETE_COMMENT:
            return { ...state, deleteDate: action.payload }
            break;

        case GET_COMMENT:
            return { ...state, getCommentDate: action.payload }
            break;

        default:
            return state;
    }
}