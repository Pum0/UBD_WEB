import {
    SAVE_SHAREPOST,
    GET_SHAREPOST
} from '../_actions/types';

export default function (state = {}, action) {

    switch (action.type) {
        case SAVE_SHAREPOST:
            return { ...state, sharePostData: action.payload }
            break;

        case GET_SHAREPOST:
            return { ...state, getsharePostData: action.payload }
            break;

        default:
            return state;

    }
}